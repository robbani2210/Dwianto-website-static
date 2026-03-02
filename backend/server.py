from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI()
api_router = APIRouter(prefix="/api")

# ============= MODELS =============

class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    title: str
    excerpt: str
    content: str
    author: str = "Dwianto Capital Advisory"
    category: str
    keywords: List[str] = []
    meta_description: str
    published_date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_date: Optional[datetime] = None
    featured_image: Optional[str] = None
    read_time: int = 10
    published: bool = True

class BlogPostCreate(BaseModel):
    slug: str
    title: str
    excerpt: str
    content: str
    author: str = "Dwianto Capital Advisory"
    category: str
    keywords: List[str] = []
    meta_description: str
    featured_image: Optional[str] = None
    read_time: int = 10
    published: bool = True

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    keywords: Optional[List[str]] = None
    meta_description: Optional[str] = None
    featured_image: Optional[str] = None
    read_time: Optional[int] = None
    published: Optional[bool] = None

class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str
    service_interest: Optional[str] = None
    submitted_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str
    service_interest: Optional[str] = None

# ============= ROUTES =============

@api_router.get("/")
async def root():
    return {"message": "Dwianto Capital Advisory API", "version": "1.0"}

# Blog routes
@api_router.get("/blogs", response_model=List[BlogPost])
async def get_blogs(published_only: bool = True, category: Optional[str] = None, limit: int = 100):
    query = {}
    if published_only:
        query["published"] = True
    if category:
        query["category"] = category
    
    blogs = await db.blogs.find(query, {"_id": 0}).sort("published_date", -1).limit(limit).to_list(limit)
    
    # Convert datetime strings back to datetime objects
    for blog in blogs:
        if isinstance(blog.get('published_date'), str):
            blog['published_date'] = datetime.fromisoformat(blog['published_date'])
        if blog.get('updated_date') and isinstance(blog['updated_date'], str):
            blog['updated_date'] = datetime.fromisoformat(blog['updated_date'])
    
    return blogs

@api_router.get("/blogs/{slug}", response_model=BlogPost)
async def get_blog_by_slug(slug: str):
    blog = await db.blogs.find_one({"slug": slug}, {"_id": 0})
    if not blog:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    # Convert datetime strings
    if isinstance(blog.get('published_date'), str):
        blog['published_date'] = datetime.fromisoformat(blog['published_date'])
    if blog.get('updated_date') and isinstance(blog['updated_date'], str):
        blog['updated_date'] = datetime.fromisoformat(blog['updated_date'])
    
    return blog

@api_router.post("/blogs", response_model=BlogPost)
async def create_blog(blog_input: BlogPostCreate):
    # Check if slug already exists
    existing = await db.blogs.find_one({"slug": blog_input.slug}, {"_id": 0})
    if existing:
        raise HTTPException(status_code=400, detail="Blog with this slug already exists")
    
    blog_obj = BlogPost(**blog_input.model_dump())
    doc = blog_obj.model_dump()
    doc['published_date'] = doc['published_date'].isoformat()
    
    await db.blogs.insert_one(doc)
    return blog_obj

@api_router.put("/blogs/{slug}", response_model=BlogPost)
async def update_blog(slug: str, blog_update: BlogPostUpdate):
    existing = await db.blogs.find_one({"slug": slug}, {"_id": 0})
    if not existing:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    update_data = blog_update.model_dump(exclude_unset=True)
    update_data['updated_date'] = datetime.now(timezone.utc).isoformat()
    
    await db.blogs.update_one({"slug": slug}, {"$set": update_data})
    
    updated_blog = await db.blogs.find_one({"slug": slug}, {"_id": 0})
    if isinstance(updated_blog.get('published_date'), str):
        updated_blog['published_date'] = datetime.fromisoformat(updated_blog['published_date'])
    if updated_blog.get('updated_date') and isinstance(updated_blog['updated_date'], str):
        updated_blog['updated_date'] = datetime.fromisoformat(updated_blog['updated_date'])
    
    return updated_blog

@api_router.delete("/blogs/{slug}")
async def delete_blog(slug: str):
    result = await db.blogs.delete_one({"slug": slug})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return {"message": "Blog post deleted successfully"}

# Contact routes
@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact(contact_input: ContactSubmissionCreate):
    contact_obj = ContactSubmission(**contact_input.model_dump())
    doc = contact_obj.model_dump()
    doc['submitted_at'] = doc['submitted_at'].isoformat()
    
    await db.contacts.insert_one(doc)
    return contact_obj

@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contacts(limit: int = 100):
    contacts = await db.contacts.find({}, {"_id": 0}).sort("submitted_at", -1).limit(limit).to_list(limit)
    
    for contact in contacts:
        if isinstance(contact.get('submitted_at'), str):
            contact['submitted_at'] = datetime.fromisoformat(contact['submitted_at'])
    
    return contacts

# Include router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()