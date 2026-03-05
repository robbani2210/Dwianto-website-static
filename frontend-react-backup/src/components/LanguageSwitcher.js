import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { stripLangPrefix, VALID_LANGS } from '../hooks/useLanguagePath';

const languages = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'ar', name: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629', flag: 'https://flagcdn.com/w40/sa.png' },
  { code: 'zh', name: '\u4e2d\u6587', flag: 'https://flagcdn.com/w40/cn.png' },
  { code: 'es', name: 'Espa\u00f1ol', flag: 'https://flagcdn.com/w40/es.png' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    const pathWithoutLang = stripLangPrefix(location.pathname);
    navigate(`/${code}${pathWithoutLang === '/' ? '' : pathWithoutLang}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref} data-testid="language-switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1.5 transition-opacity hover:opacity-80"
        data-testid="language-switcher-button"
        aria-label="Change language"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.name}
          className="w-6 h-4 object-cover rounded-sm"
        />
        <ChevronDown size={14} className={`text-white/70 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-3 w-44 bg-white border border-border/60 shadow-xl z-50"
            data-testid="language-dropdown"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-4 py-2.5 text-left text-sm hover:bg-muted transition-colors flex items-center gap-3 ${
                  currentLang.code === lang.code
                    ? 'bg-muted/70 text-primary font-medium'
                    : 'text-foreground'
                }`}
                data-testid={`language-option-${lang.code}`}
              >
                <img
                  src={lang.flag}
                  alt={lang.name}
                  className="w-5 h-3.5 object-cover rounded-sm"
                />
                <span>{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
