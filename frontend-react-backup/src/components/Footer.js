import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguagePath } from '../hooks/useLanguagePath';

export const Footer = () => {
  const { t } = useTranslation();
  const lp = useLanguagePath();

  const quickLinks = [
    { path: '/about', labelKey: 'nav.about' },
    { path: '/services', labelKey: 'nav.services' },
    { path: '/credibility', labelKey: 'nav.portfolio' },
    { path: '/insights', labelKey: 'nav.insights' },
    { path: '/contact', labelKey: 'nav.contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground" data-testid="site-footer">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4" data-testid="footer-company-name">
              Dwianto Capital Advisory
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
              {t('footer.tagline')}
            </p>
            <p className="text-xs text-primary-foreground/60" data-testid="footer-legal-name">
              {t('footer.legalName')}
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6" data-testid="footer-quick-links-title">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={lp(link.path)}
                    data-testid={`footer-link-${link.path.replace('/', '')}`}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6" data-testid="footer-contact-title">
              {t('footer.contactTitle')}
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="mailto:info@dwiantocapital.com" className="hover:text-secondary transition-colors" data-testid="footer-email">
                  info@dwiantocapital.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/6285179587928" className="hover:text-secondary transition-colors" data-testid="footer-whatsapp">
                  +62 851-7958-7928
                </a>
              </li>
              <li data-testid="footer-address">
                Menara Prima, South Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 py-6">
          <p className="text-xs text-primary-foreground/50 text-center" data-testid="footer-copyright">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
