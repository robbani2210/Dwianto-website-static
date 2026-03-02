from fastapi import FastAPI, APIRouter, Query
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field
from typing import Optional, List
import os
from dotenv import load_dotenv
from pathlib import Path

env_path = Path(__file__).parent / '.env'
load_dotenv(env_path)

MONGO_URL = os.environ.get('MONGO_URL')
DB_NAME = os.environ.get('DB_NAME')

VALID_LANGS = {'en', 'ar', 'zh', 'es'}

app = FastAPI()
api_router = APIRouter(prefix="/api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]


class ContactForm(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ''
    company: Optional[str] = ''
    service_interest: Optional[str] = ''
    message: str


def apply_translation(doc, lang):
    """Apply language-specific translations to a blog document."""
    if lang == 'en' or lang not in VALID_LANGS:
        doc.pop('translations', None)
        return doc
    translations = doc.get('translations', {})
    lang_trans = translations.get(lang, {})
    if lang_trans:
        for field in ['title', 'excerpt', 'content', 'meta_description']:
            if field in lang_trans and lang_trans[field]:
                doc[field] = lang_trans[field]
        if 'keywords' in lang_trans and lang_trans['keywords']:
            doc['keywords'] = lang_trans['keywords']
    doc.pop('translations', None)
    return doc


@api_router.get("/")
async def root():
    return {"status": "ok", "message": "Dwianto Capital Advisory API"}


@api_router.get("/blogs")
async def get_blogs(lang: str = Query(default='en')):
    blogs_cursor = db.blogs.find({}, {"_id": 0}).sort("published_date", -1)
    blogs = await blogs_cursor.to_list(length=100)
    return [apply_translation(blog, lang) for blog in blogs]


@api_router.get("/blogs/{slug}")
async def get_blog(slug: str, lang: str = Query(default='en')):
    blog = await db.blogs.find_one({"slug": slug}, {"_id": 0})
    if not blog:
        return {"error": "Blog not found"}
    return apply_translation(blog, lang)


@api_router.post("/contact")
async def submit_contact(form: ContactForm):
    contact_data = form.dict()
    from datetime import datetime, timezone
    contact_data["submitted_at"] = datetime.now(timezone.utc).isoformat()
    await db.contacts.insert_one(contact_data)
    return {"status": "success", "message": "Your inquiry has been received. We will respond within 24 hours."}


app.include_router(api_router)


@app.on_event("startup")
async def startup_db_client():
    try:
        await client.admin.command("ping")
        print("Connected to MongoDB")
        count = await db.blogs.count_documents({})
        if count == 0:
            print("No blogs found. Please run seed script.")
    except Exception as e:
        print(f"MongoDB connection error: {e}")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
