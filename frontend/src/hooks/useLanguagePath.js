import { useTranslation } from 'react-i18next';

const VALID_LANGS = ['en', 'ar', 'zh', 'es'];

export const useLanguagePath = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  return (path) => `/${lang}${path === '/' ? '' : path}`;
};

export const stripLangPrefix = (pathname) => {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && VALID_LANGS.includes(segments[0])) {
    return '/' + segments.slice(1).join('/') || '/';
  }
  return pathname;
};

export { VALID_LANGS };
