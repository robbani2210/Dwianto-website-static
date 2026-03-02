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
  }, [fullTitle, description, keywords, image, url, type]);

  return null;
};