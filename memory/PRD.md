# Dwianto Capital Advisory - Product Requirements Document

## Original Problem Statement
Premium, modern, SEO-optimized company profile website for "Dwianto Capital Advisory" - a global capital advisory firm. Design should be minimalist luxury with white, navy, and gold accent palette, referencing protemus.id style.

## Tech Stack
- **Frontend**: React, Tailwind CSS, react-router-dom, react-i18next, framer-motion, react-helmet
- **Backend**: FastAPI, Motor (async MongoDB)
- **Database**: MongoDB

## Pages & Structure
- Homepage (Hero Carousel, Stats, Owner Profile, Services, Success Stories, Value Proposition, CTA)
- About Us (Who We Are, Problem/Solution, Vision/Mission, Core Values)
- Services (M&A, Cross-Border Investment, Legal & Financial Compliance)
- Credibility/Portfolio (Track Record, Strategic Partners)
- Insights/Blog (10 SEO blog articles served from MongoDB - multilingual)
- Contact (Form + Contact Info - functional backend)

## What's Been Implemented

### Core Features
- Full-stack app (React + FastAPI + MongoDB)
- All pages and components created per requirements
- Website redesigned to match protemus.id reference
- Owner Profile, Stats Showcase, Success Stories, Hero Carousel components
- Main company logo + 3 partner logos integrated
- Backend API + database seeding for 10 blog posts

### Navigation & UI (Feb 2026)
- Navigation bar: deep charcoal (#2A2A2A) background with white text, gold hover states
- Language switcher: clean circular flag icons (flagcdn.com) with minimal dropdown
- All navigation links fully translated in 4 languages

### Internationalization (Feb 2026)
- Full i18n translation for ALL pages in 4 languages (EN, AR, ZH, ES)
- Language-based URL routing: /en/about, /ar/insights, /zh/contact, etc.
- SEO hreflang tags for all pages and languages
- All internal links include language prefix

### Multilingual Blog CMS (Feb 2026)
- MongoDB blog schema supports per-language content (translations field)
- Backend API accepts `lang` parameter: GET /api/blogs?lang=ar
- 10 blogs with professionally translated titles, excerpts, and content in AR/ZH/ES
- Insights page fully translated (title, search, categories, labels)
- Blog detail page serves language-specific content

### Contact Form (Feb 2026)
- Functional backend endpoint: POST /api/contact
- Saves inquiries to MongoDB with timestamp
- Frontend validation and success/error feedback

## Key API Endpoints
- GET /api/ - Health check
- GET /api/blogs?lang=en - List all blog posts (supports: en, ar, zh, es)
- GET /api/blogs/:slug?lang=ar - Single blog post by slug with language
- POST /api/contact - Submit contact form

## DB Schema
- **blogs**: { title, slug, author, published_date, featured_image, content, excerpt, category, read_time, meta_description, keywords[], translations: { ar: {title, excerpt, content, meta_description, keywords}, zh: {...}, es: {...} } }
- **contacts**: { name, email, phone, company, service_interest, message, submitted_at }

## Pending / Backlog
### P2
- Blog post categories translation (categories are still in English)
- Full SEO audit and lighthouse optimization

### P3
- Admin panel for blog/contact management
- Analytics integration
