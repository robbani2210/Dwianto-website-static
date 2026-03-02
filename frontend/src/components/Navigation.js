import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguagePath } from '../hooks/useLanguagePath';

export const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lp = useLanguagePath();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/credibility', label: t('nav.portfolio') },
    { path: '/insights', label: t('nav.insights') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path) => {
    const stripped = location.pathname.replace(/^\/(en|ar|zh|es)/, '') || '/';
    return stripped === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#2A2A2A] shadow-lg' : 'bg-[#2A2A2A]'
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <Link to={lp('/')} className="flex items-center" data-testid="nav-logo-link">
            <img
              src="https://customer-assets.emergentagent.com/job_global-advisory-9/artifacts/j1duk89l_logo%20%282%29.png"
              alt="Dwianto Capital Advisory"
              className="h-12 w-auto"
              data-testid="nav-logo"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={lp(link.path)}
                data-testid={`nav-link-${link.path.replace('/', '') || 'home'}`}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? 'text-secondary'
                    : 'text-white/90 hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-[#2A2A2A] border-t border-white/10"
          data-testid="mobile-menu"
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={lp(link.path)}
                data-testid={`mobile-nav-link-${link.path.replace('/', '') || 'home'}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? 'text-secondary'
                    : 'text-white/90 hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
