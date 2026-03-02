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
- Insights/Blog (10 SEO blog articles served from MongoDB)
- Contact (Form + Contact Info)

## What's Been Implemented
- Full-stack app scaffolded and running (React + FastAPI + MongoDB)
- All pages and components created per requirements
- Website redesigned to match protemus.id reference
- Owner Profile, Stats Showcase, Success Stories, Hero Carousel components
- Main company logo + 3 partner logos integrated
- Backend API + database seeding for 10 blog posts
- **Navigation bar updated to light gray (#d9d9d9) background with dark navy text** (Feb 2026)
- **Full i18n translation implemented for ALL pages in 4 languages (EN, AR, ZH, ES)** (Feb 2026)
  - Navigation, Homepage, About, Services, Contact, Credibility, Footer, SuccessStories all translated
  - Language switcher with persistence across page navigation

## Pending / Backlog
### P1
- Contact form backend endpoint (currently no /api/contact endpoint)
- SEO improvements (dynamic meta tags per page, schema markup)

### P2
- Multi-language URL strategy (/en/about, /ar/about) for SEO
- React Hook dependency warning fix in Insights.js
- SEO component refactor (declarative Helmet pattern)

### P3
- Blog post translations (currently English only from DB)
- Full SEO audit and optimization

## Key API Endpoints
- GET /api/ - Health check
- GET /api/blogs - List all blog posts
- GET /api/blogs/:slug - Single blog post by slug

## DB Schema
- **blogs**: { title, slug, author, date, image, content, excerpt }
