import { useEffect } from 'react';

export const SEO = ({  title = 'Dwianto Capital Advisory - Strategic M&A and Cross-Border Investment',
  description = 'Independent strategic capital advisory firm specializing in M&A, capital structuring, and cross-border investment transactions for enterprises in Indonesia.',
  keywords = 'capital advisory Indonesia, M&A Indonesia, cross-border investment, PT PMA setup, foreign direct investment Indonesia',
  image = '/og-image.jpg',
  url = 'https://dwiantocapital.com',
  type = 'website',
}) => {
  const fullTitle = title.includes('Dwianto') ? title : `${title} | Dwianto Capital Advisory`;

  useEffect(() => {
    // Update title
    document.title = fullTitle;
    
    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
  }, [fullTitle, description, keywords, image, url, type]);

  return null;
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "PT Dwianto Capital Advisory",
          "alternateName": "Dwianto Capital Advisory",
          "description": "${description}",
          "url": "https://dwiantocapital.com",
          "logo": "https://dwiantocapital.com/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "South Jakarta",
            "addressCountry": "ID",
            "streetAddress": "Menara Prima"
          },
          "email": "info@dwiantocapital.com",
          "telephone": "+6285179587928",
          "areaServed": "International",
          "serviceType": ["M&A Advisory", "Cross-Border Investment", "Legal & Financial Compliance"]
        }`}
      </script>
    </Helmet>
  );
};