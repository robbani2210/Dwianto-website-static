import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20" data-testid="footer">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4" data-testid="footer-company-name">
              Dwianto Capital Advisory
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
              Strategic Advisory in M&A, Capital Structuring, and Cross-Border Transactions
            </p>
            <p className="text-xs text-primary-foreground/60" data-testid="footer-legal-name">
              PT Dwianto Capital Advisory
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                to="/about"
                data-testid="footer-link-about"
                className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                data-testid="footer-link-services"
                className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/credibility"
                data-testid="footer-link-portfolio"
                className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/insights"
                data-testid="footer-link-insights"
                className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Insights
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@dwiantocapital.com"
                data-testid="footer-contact-email"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Mail size={16} />
                info@dwiantocapital.com
              </a>
              <a
                href="https://wa.me/6285179587928"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-contact-whatsapp"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Phone size={16} />
                +62 851-7958-7928
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span data-testid="footer-contact-address">
                  Menara Prima, South Jakarta, Indonesia
                </span>
              </div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-social-linkedin"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <p className="text-xs text-primary-foreground/60 text-center" data-testid="footer-copyright">
            © {new Date().getFullYear()} PT Dwianto Capital Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};