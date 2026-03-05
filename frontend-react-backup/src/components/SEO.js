import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { stripLangPrefix, VALID_LANGS } from '../hooks/useLanguagePath';

const BASE_URL = 'https://dwiantocapital.com';

export const SEO = ({
  title = 'Dwianto Capital Advisory - Strategic M&A and Cross-Border Investment',
  description = 'Independent strategic capital advisory firm specializing in M&A, capital structuring, and cross-border investment transactions for enterprises in Indonesia.',
  keywords = 'capital advisory Indonesia, M&A Indonesia, cross-border investment, PT PMA setup, foreign direct investment Indonesia',
  image = '/og-image.jpg',
  type = 'website',
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const fullTitle = title.includes('Dwianto') ? title : `${title} | Dwianto Capital Advisory`;
  const pathWithoutLang = stripLangPrefix(location.pathname);

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = i18n.language || 'en';

    const updateMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      const selector = `meta[${attr}="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', type, true);
    updateMeta('og:url', `${BASE_URL}/${i18n.language}${pathWithoutLang === '/' ? '' : pathWithoutLang}`, true);
    updateMeta('og:image', image, true);
    updateMeta('og:locale', i18n.language, true);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);

    // hreflang tags
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());

    VALID_LANGS.forEach((lang) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${BASE_URL}/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
      document.head.appendChild(link);
    });

    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = `${BASE_URL}/en${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    document.head.appendChild(xDefault);

    return () => {
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    };
  }, [fullTitle, description, keywords, image, type, i18n.language, pathWithoutLang]);

  return null;
};
