# Dwianto Capital Advisory — PRD

## Original Problem Statement
The user wants to redesign and simplify the existing website into a **premium minimalist company profile website**, outputting pure static HTML, CSS, and Vanilla JavaScript.

## Product Requirements
- **Output**: Static HTML, CSS, and JS only. No frameworks (React, Node.js) or build tools. Must run by opening `index.html`.
- **Design Style**: Minimalist premium corporate style. Navy + Gold theme. Large whitespace, elegant typography, subtle animations.
- **Navigation**: Sticky navbar with deep professional blue background and white text. Logo + menu items: Home, About, Services, Portfolio, Insights, Contact. Mobile responsive.
- **Layout**: Section-based homepage: Hero carousel, Stats bar, Owner Profile, Services preview, Portfolio/Success Stories, Insights preview, CTA, Footer.
- **Interactivity**: Smooth scroll, fade-in reveal on scroll, animated stat counters, hero carousel, mobile menu, language switcher dropdown, blog filter + search.
- **Performance & SEO**: Optimized images, lightweight code, mobile-first, semantic HTML, proper heading hierarchy, meta tags.
- **File Structure**: Clean separation — 6 main pages + `/insights/` blog articles + `/assets/css/`, `/assets/js/`, `/assets/images/`.

## Architecture

```
/app/static-site/
├── index.html          # Homepage — Hero + Stats + Owner + Services + Portfolio + Insights + CTA
├── about.html          # About — Who We Are + Problem/Solution + Vision/Mission + Values
├── services.html       # Services — M&A + Cross-Border + Legal/Compliance + Why Choose Us
├── credibility.html    # Portfolio — Stats + 6 Cases + Partners
├── insights.html       # Blog listing — Filter pills + Search + 6 Blog cards
├── contact.html        # Contact — Form + Info panel
└── assets/
    ├── css/style.css   # 1450+ line comprehensive CSS system (navy/gold, BEM classes)
    ├── js/script.js    # Navigation, carousel, scroll reveal, stats counter, filter, form, lang switcher
    └── images/
└── insights/           # 6 Blog article pages (use CSS backwards-compat aliases)
    ├── how-to-structure-pt-pma.html
    ├── ma-due-diligence-southeast-asia.html
    ├── indonesia-investment-outlook-2025.html
    ├── legal-compliance-foreign-companies-indonesia.html
    ├── capital-structuring-indonesia-market-entry.html
    └── corporate-governance-cross-border-ma.html
```

## Tech Stack
- **HTML5**: Semantic markup, SEO meta tags, JSON-LD schema on homepage
- **CSS3**: 1450+ lines, CSS variables, BEM class system, CSS Grid + Flexbox, animations
- **Vanilla JS**: 250+ lines, no dependencies, ES5 compatible
- **Fonts**: Playfair Display (headings) + Manrope (body) + JetBrains Mono (labels)
- **Icons**: Font Awesome 6.5.1 CDN
- **Images**: Unsplash CDN + customer-hosted assets

## What's Been Implemented (Feb 2026)

### Phase 1 — Static Conversion (Superseded)
- Converted original React/FastAPI app to static HTML

### Phase 2 — Golden White Theme (Superseded)
- Implemented dark gold (#7B5C23) + ivory color scheme

### Phase 3 — Premium Minimalist Redesign (COMPLETE ✅)
- **Complete CSS rewrite**: 1450-line design system with navy (#0B1C3E) + gold (#C5A059) palette, CSS variables, BEM-style classes, responsive grid system, reveal animations, hero carousel mechanics
- **Complete HTML rebuild** of all 6 main pages using new CSS class system
- **script.js update**: Navigation, hero carousel, scroll reveal, animated stats counters, blog filter + search, contact form validation, language switcher, backwards-compatible fallbacks for blog article pages
- **CSS backwards-compat aliases**: Old class names aliased in CSS so 6 blog article pages render correctly without HTML changes
- **100% test pass rate**: All 30+ scenarios tested by testing agent

## CSS Class System (Key Classes)
| Component | Class |
|-----------|-------|
| Navbar | `.site-nav`, `.nav-inner`, `.nav-links`, `.nav-lang`, `.nav-toggle`, `.nav-mobile` |
| Hero | `.hero`, `.hero__bg`, `.hero__overlay`, `.hero__content`, `.hero__eyebrow`, `.hero__title` |
| Stats | `.stats-bar`, `.stats-bar__grid`, `.stat-cell`, `.stat-cell__num`, `.stat-cell__label` |
| Owner | `.owner-section`, `.owner-grid`, `.owner-img-frame`, `.owner-title`, `.cred-item` |
| Services | `.service-cards`, `.service-card`, `.svc__icon`, `.svc__title`, `.svc__desc` |
| Portfolio | `.portfolio-grid`, `.portfolio-card`, `.port-badge`, `.port-title`, `.port-footer` |
| Insights | `.insights-grid`, `.insight-card`, `.blog-grid`, `.blog-card`, `.blog-card__img` |
| Contact | `.contact-wrap`, `.contact-items`, `.form-box`, `.form-group`, `.form-input` |
| Animations | `.reveal`, `.reveal.revealed`, `.reveal.from-left`, `.reveal.delay-1` |
| Footer | `.site-footer`, `.footer-main`, `.footer-col-title`, `.footer-nav`, `.footer-contact-row` |

## Backlog / Future Enhancements
- **P1**: Language switching functionality (currently UI only — no content translation)
- **P1**: Update `/insights/*.html` nav/footer to new HTML class structure (currently using CSS aliases)
- **P2**: SEO audit and Lighthouse performance optimization
- **P2**: Google Analytics or privacy-first analytics integration
- **P3**: Admin panel for blog/contact management
- **P3**: Live contact form submission (EmailJS or Formspree integration)
- **P3**: Lighthouse score optimization (image lazy loading improvements, critical CSS)
