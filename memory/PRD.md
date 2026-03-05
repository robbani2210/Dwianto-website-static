# Dwianto Capital Advisory - Static Website PRD

## Original Problem Statement
Build a premium, minimalist, static company profile website using only HTML, CSS, and Vanilla JavaScript for Dwianto Capital Advisory - a financial advisory firm specializing in M&A, Capital Structuring, and Cross-Border Transactions in Indonesia.

## Core Requirements
- **Tech Stack:** Pure static HTML5, CSS3, Vanilla JavaScript
- **Design:** Premium minimalist corporate aesthetic (navy + gold theme)
- **No Backend:** Must be deployable on any standard hosting without Node.js, build tools, or frameworks
- **Multi-language:** Support for English (default), Arabic (RTL), Chinese, Spanish

## User Personas
1. **Foreign Investors** - Looking for M&A and investment advisory services in Indonesia
2. **Corporate Executives** - Seeking capital structuring and compliance guidance
3. **Family Businesses** - Interested in restructuring and governance advisory

---

## What's Been Implemented

### December 2025 - Initial Build
- Full static site rebuild with premium minimalist design
- 6 main pages: Home, About, Services, Portfolio, Insights, Contact
- 6 blog article pages under /insights/
- Responsive design with mobile navigation

### March 5, 2025 - P1 Tasks Completed

#### 1. Navigation & Footer Structure Refactoring ✅
- Refactored all 6 blog article pages (`/insights/*.html`) to use consistent HTML structure
- Navigation uses: `.site-nav`, `.nav-links`, `.nav-lang`, `.nav-lang-btn`, `.nav-lang-drop`
- Mobile nav uses: `.nav-toggle`, `.nav-mobile`, `.nav-mobile-inner`
- Footer uses: `.footer-main`, `.footer-desc`, `.footer-col-title`, `.footer-nav`, `.footer-contact-row`
- Removed CSS aliases from `style.css` that were patching the old structure

#### 2. Functional Language Switching ✅
- Implemented client-side i18n using JSON translation files
- Created translation files: `en.json`, `ar.json`, `zh.json`, `es.json`
- Language persistence via localStorage (`dcaLang` key)
- RTL support for Arabic (automatically sets `dir="rtl"` on html element)
- Navigation, page titles, and key UI elements are translatable via `data-i18n` attributes

#### 3. Contact Form Integration ✅
- Integrated Formspree for form submissions
- Form endpoint: `https://formspree.io/f/xbljgvgw`
- Submissions go to: `info@dwiantocapital.com`
- Client-side validation for required fields and email format
- AJAX submission with loading state and success/error handling
- Honeypot field for spam protection

### Testing Status
- **Testing Agent:** 100% pass rate (14/14 tests)
- All pages render correctly
- Language switching works across all languages
- Mobile responsive design verified
- Form validation verified

---

## Project Structure
```
/app/frontend/
├── index.html          # Homepage with hero carousel
├── about.html          # About page
├── services.html       # Services page  
├── credibility.html    # Portfolio/Track record page
├── insights.html       # Blog listing page
├── contact.html        # Contact form page
├── assets/
│   ├── css/
│   │   └── style.css   # All styles
│   ├── js/
│   │   └── script.js   # Navigation, carousel, i18n, form handling
│   └── i18n/
│       ├── en.json     # English translations
│       ├── ar.json     # Arabic translations (RTL)
│       ├── zh.json     # Chinese translations
│       └── es.json     # Spanish translations
└── insights/
    ├── how-to-structure-pt-pma.html
    ├── ma-due-diligence-southeast-asia.html
    ├── indonesia-investment-outlook-2025.html
    ├── legal-compliance-foreign-companies-indonesia.html
    ├── capital-structuring-indonesia-market-entry.html
    └── corporate-governance-cross-border-ma.html
```

---

## Prioritized Backlog

### P0 - Critical (None)
All critical features implemented.

### P1 - High Priority (Completed)
- ✅ Clean navigation/footer structure in blog pages
- ✅ Functional language switching

### P2 - Medium Priority
- ✅ Contact form integration (Formspree)
- ⏳ SEO & Lighthouse optimization
  - Add meta descriptions to all pages
  - Review heading hierarchy
  - Optimize images (lazy loading, WebP format)
  - Improve Core Web Vitals scores

### P3 - Nice to Have
- Add more blog articles
- Newsletter subscription form
- Social media sharing buttons on articles
- Analytics integration (Google Analytics 4)

---

## Technical Notes

### Language Switching Implementation
```javascript
// Translation keys format in JSON files:
{
  "nav.home": "Home",
  "nav.about": "About",
  ...
}

// HTML usage:
<a href="index.html" data-i18n="nav.home">Home</a>

// JS applies translations:
document.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  if (i18nData[key]) el.innerHTML = i18nData[key];
});
```

### Formspree Integration
```html
<form action="https://formspree.io/f/xbljgvgw" method="POST">
  <input type="hidden" name="_subject" value="New Contact Form Submission">
  <input type="text" name="_gotcha" style="display:none">
  <!-- Form fields -->
</form>
```

### Static Server
The site is served using `http-server`:
```json
{
  "scripts": {
    "start": "http-server . -p 3000 -a 0.0.0.0"
  }
}
```

---

## Deployment Notes
- Pure static site - can be deployed to any web hosting
- No backend required
- Formspree handles contact form submissions
- **Important:** Verify email address on Formspree account to activate form submissions

---

## Preview URL
https://clean-business-13.preview.emergentagent.com
