# /assets/images — Download Instructions

The static website uses external CDN URLs for images. For production deployment,
download and save these images locally, then update the `src` attributes in each HTML file.

---

## Logo (required)
File: `logo-white.png`
Download URL:
https://customer-assets.emergentagent.com/job_0287b672-8f9e-4fe4-bd6c-7155d54ad100/artifacts/lcyh975m_a9c81fbd-2709-459a-a9ba-0226c80d4f25-removebg-preview.png

Replace in all HTML files:
  src="assets/images/logo-white.png"

---

## Partner Logos (credibility.html)
pepper-logo.svg
https://customer-assets.emergentagent.com/job_global-advisory-9/artifacts/xdqngl5a_logo-pepper.svg

capital-bridge-logo.png
https://customer-assets.emergentagent.com/job_global-advisory-9/artifacts/nyaquaz0_capital-bridge-brand-logo.png

nash-logo.png
https://customer-assets.emergentagent.com/job_global-advisory-9/artifacts/8f6z0vpf_logo%20nash.png

---

## Owner Photo (index.html)
owner-profile.avif
https://customer-assets.emergentagent.com/job_global-advisory-9/artifacts/rpqlu0dj_gemini_generated_image_qlcrvkqlcrvkqlcr-bz7NcB75PIIGmtmT.avif

---

## Hero Slide Backgrounds (index.html)
hero-1.jpg  https://images.unsplash.com/photo-1770345743150-8d2bef3979e8?w=1920&q=85
hero-2.jpg  https://images.unsplash.com/photo-1758691736975-9f7f643d178e?w=1920&q=85
hero-3.jpg  https://images.unsplash.com/photo-1752159684779-0639174cdfac?w=1920&q=85

## Stats Background (index.html)
stats-bg.jpg  https://images.unsplash.com/photo-1762279389020-eeeb69c25813?w=1920&q=85

## Value Proposition Image (index.html)
value-prop.jpg  https://images.unsplash.com/photo-1760238470825-ad51d32fa7a5?w=900&q=85

## About Page Image (about.html)
about-discussion.jpg  https://images.unsplash.com/photo-1758518727707-b023e285b709?w=800&q=85

## Blog Article Images (insights.html)
blog-1.jpg  https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80
blog-2.jpg  https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80
blog-3.jpg  https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80
blog-4.jpg  https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80
blog-5.jpg  https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80
blog-6.jpg  https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80

---

## WordPress Integration Notes
- Replace contact form with Contact Form 7 or Gravity Forms shortcode
- Multi-language: use WPML or Polylang for EN/AR/ZH/ES routing
- Blog articles: convert insights.html cards to WordPress Loop (WP_Query)
- Navigation: convert to wp_nav_menu() function calls
- Footer: use get_template_part() or dynamic sidebar widgets
