import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timezone, timedelta
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# All 10 blog articles
ALL_BLOGS = [
    # Blog 1
    {
        "slug": "complete-guide-fdi-indonesia-2025",
        "title": "Complete Guide to Foreign Direct Investment in Indonesia 2025",
        "excerpt": "Comprehensive roadmap for international investors establishing operations in Indonesia, covering regulatory frameworks, ownership structures, and strategic considerations.",
        "category": "Cross-Border Investment",
        "keywords": ["FDI Indonesia", "foreign direct investment", "PT PMA", "Indonesia market entry"],
        "meta_description": "Expert guide on foreign direct investment in Indonesia. PT PMA setup, ownership structures, regulations, and market entry strategies.",
        "read_time": 15,
        "featured_image": "https://images.unsplash.com/photo-1562367072-fea5c7eb8748?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>Introduction</h2><p>Indonesia represents Southeast Asia's largest economy with compelling FDI opportunities. This guide provides institutional investors comprehensive understanding of market entry frameworks, PT PMA establishment, and investment structuring.</p>"
    },
    # Blog 2
    {
        "slug": "pt-pma-setup-guide-foreign-investors",
        "title": "PT PMA Setup: Essential Guide for Foreign Investors",
        "excerpt": "Step-by-step guidance on establishing PT PMA in Indonesia, covering legal requirements, capital structure, licensing, and operational setup.",
        "category": "Cross-Border Investment",
        "keywords": ["PT PMA setup", "foreign investment Indonesia", "company registration", "business setup"],
        "meta_description": "Complete PT PMA establishment guide. Requirements, process, timeline, and costs for foreign investment companies in Indonesia.",
        "read_time": 12,
        "featured_image": "https://images.unsplash.com/photo-1760238470825-ad51d32fa7a5?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>PT PMA Framework</h2><p>PT PMA establishment requires navigating Indonesian corporate law, investment regulations, and sector-specific requirements. This guide details systematic approach to successful market entry.</p>"
    },
    # Blog 3
    {
        "slug": "ma-advisory-indonesia-market-overview",
        "title": "M&A Advisory in Indonesia: Market Overview and Opportunities",
        "excerpt": "Analysis of Indonesia's M&A landscape, key sectors attracting acquisition activity, valuation considerations, and cross-border transaction insights.",
        "category": "M&A",
        "keywords": ["M&A Indonesia", "mergers acquisitions", "acquisition opportunities", "cross-border M&A"],
        "meta_description": "Expert analysis of Indonesia M&A market. Opportunities, valuation trends, and strategic considerations for acquisitions.",
        "read_time": 14,
        "featured_image": "https://images.unsplash.com/photo-1764087957302-ef0756ed8e0a?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>Indonesia M&A Landscape</h2><p>Indonesia's M&A market has matured significantly, driven by domestic consolidation and international investor interest. Market dynamics, valuation trends, and transaction structuring considerations.</p>"
    },
    # Blog 4
    {
        "slug": "indonesia-digital-economy-investment-2025",
        "title": "Indonesia's Digital Economy: Investment Opportunities in 2025",
        "excerpt": "Exploring explosive growth of Indonesia's digital economy and key sectors attracting international investment, from e-commerce to fintech.",
        "category": "Market Analysis",
        "keywords": ["digital economy Indonesia", "tech investment", "e-commerce", "fintech opportunities"],
        "meta_description": "Analysis of Indonesia's booming digital economy and investment opportunities across e-commerce, fintech, and technology sectors.",
        "read_time": 8,
        "featured_image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>Digital Economy Boom</h2><p>Indonesia's digital economy projected to reach $130B by 2025. High-potential investment sectors including e-commerce, fintech, and edtech present unprecedented opportunities for strategic investors.</p>"
    },
    # Blog 5
    {
        "slug": "corporate-restructuring-strategies-uncertainty",
        "title": "Corporate Restructuring Strategies in Economic Uncertainty",
        "excerpt": "Comprehensive guide to effective corporate restructuring that preserves value and positions companies for recovery during economic downturns.",
        "category": "Legal & Compliance",
        "keywords": ["corporate restructuring", "business turnaround", "debt restructuring", "financial distress"],
        "meta_description": "Expert guidance on corporate restructuring strategies, covering debt restructuring, operational improvements, and stakeholder management.",
        "read_time": 10,
        "featured_image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>Restructuring Framework</h2><p>Effective restructuring addresses financial, operational, and strategic imperatives while managing complex stakeholder dynamics. Comprehensive approach to corporate turnaround and recovery.</p>"
    },
    # Blog 6
    {
        "slug": "family-business-succession-planning-indonesia",
        "title": "Family Business Succession Planning in Indonesia",
        "excerpt": "Strategic frameworks for Indonesian family businesses to plan succession, maintain continuity, and preserve family harmony across generations.",
        "category": "M&A",
        "keywords": ["family business succession", "business continuity", "generational transition", "family governance"],
        "meta_description": "Comprehensive guide to family business succession planning, covering governance, next-generation preparation, and legacy preservation.",
        "read_time": 9,
        "featured_image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>Succession Challenge</h2><p>Only 30% of family businesses successfully transition to second generation. Effective succession planning critical for preserving family wealth and business legacy.</p>"
    },
    # Blog 7
    {
        "slug": "due-diligence-indonesia-ma-transactions",
        "title": "Due Diligence in Indonesian M&A Transactions",
        "excerpt": "Essential due diligence considerations for M&A transactions in Indonesia, covering legal, financial, commercial, and regulatory review areas.",
        "category": "M&A",
        "keywords": ["due diligence Indonesia", "M&A due diligence", "transaction advisory", "risk assessment"],
        "meta_description": "Comprehensive due diligence guide for Indonesian M&A. Key review areas, red flags, and risk mitigation strategies.",
        "read_time": 11,
        "featured_image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>Due Diligence Framework</h2><p>Comprehensive due diligence essential for successful M&A in Indonesia. Legal, financial, commercial, and regulatory considerations specific to Indonesian market.</p>"
    },
    # Blog 8
    {
        "slug": "private-equity-investment-indonesia-landscape",
        "title": "Private Equity Investment in Indonesia: Landscape and Opportunities",
        "excerpt": "Overview of Indonesia's private equity market, investment trends, sector preferences, and considerations for PE firms entering the market.",
        "category": "Market Analysis",
        "keywords": ["private equity Indonesia", "PE investment", "venture capital", "growth equity"],
        "meta_description": "Analysis of Indonesia's PE market. Investment trends, sector opportunities, and strategic considerations for private equity firms.",
        "read_time": 10,
        "featured_image": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>PE Market Overview</h2><p>Indonesia's private equity market has grown substantially, with increasing deal activity across technology, consumer, healthcare, and infrastructure sectors.</p>"
    },
    # Blog 9
    {
        "slug": "regulatory-compliance-foreign-investors-indonesia",
        "title": "Regulatory Compliance Framework for Foreign Investors in Indonesia",
        "excerpt": "Navigate Indonesia's regulatory landscape including licensing requirements, reporting obligations, and compliance best practices for foreign investors.",
        "category": "Legal & Compliance",
        "keywords": ["regulatory compliance Indonesia", "foreign investment regulations", "licensing requirements", "BKPM"],
        "meta_description": "Comprehensive guide to regulatory compliance for foreign investors in Indonesia. Licensing, reporting, and compliance frameworks.",
        "read_time": 9,
        "featured_image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>Regulatory Framework</h2><p>Foreign investors must navigate complex regulatory environment including BKPM coordination, sector-specific licensing, and ongoing compliance obligations.</p>"
    },
    # Blog 10
    {
        "slug": "valuation-methodologies-indonesia-ma",
        "title": "Valuation Methodologies for Indonesian M&A Transactions",
        "excerpt": "Comprehensive guide to valuation approaches for M&A in Indonesia, covering DCF, comparable companies, precedent transactions, and market-specific adjustments.",
        "category": "M&A",
        "keywords": ["business valuation", "M&A valuation", "DCF analysis", "valuation multiples"],
        "meta_description": "Expert guide to valuation methodologies for Indonesian M&A. DCF, comps, precedent transactions, and Indonesia-specific considerations.",
        "read_time": 13,
        "featured_image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": "<h2>Valuation Approaches</h2><p>Valuation in Indonesian M&A requires understanding local market dynamics, country risk considerations, and appropriate methodological adjustments for emerging markets.</p>"
    }
]

async def seed_all_blogs():
    print("Starting comprehensive blog seeding...")
    
    try:
        # Clear existing
        deleted = await db.blogs.delete_many({})
        print(f"Cleared {deleted.deleted_count} existing blogs")
        
        # Insert all 10
        for i, blog in enumerate(ALL_BLOGS, 1):
            blog['published_date'] = (datetime.now(timezone.utc) - timedelta(days=i*7)).isoformat()
            blog['author'] = 'Dwianto Capital Advisory'
            blog['published'] = True
            blog['id'] = blog['slug']
            
            result = await db.blogs.insert_one(blog)
            print(f"✓ Blog {i}/10: {blog['title'][:50]}...")
        
        print(f"\n✅ Successfully seeded all 10 blog posts!")
        
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_all_blogs())
