import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { TrendingUp, Globe, Scale } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { title: t('servicesPage.maFull.title'), description: t('servicesPage.maFull.description'), link: '/services/mergers-acquisitions', icon: TrendingUp },
    { title: t('servicesPage.crossBorderFull.title'), description: t('servicesPage.crossBorderFull.description'), link: '/services/cross-border-investment', icon: Globe },
    { title: t('servicesPage.complianceFull.title'), description: t('servicesPage.complianceFull.description'), link: '/services/legal-compliance', icon: Scale },
  ];

  return (
    <>
      <SEO
        title="Services - M&A, Cross-Border Investment & Compliance Advisory"
        description="Comprehensive capital advisory services: M&A transactions, cross-border investment structuring, PT PMA setup, and legal compliance for Indonesian market entry."
        keywords="M&A advisory Indonesia, cross-border investment services, PT PMA setup, foreign investment advisory, legal compliance Indonesia"
      />
      <div className="min-h-screen">
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="services-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="services-hero-label">{t('servicesPage.label')}</p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="services-hero-title">{t('servicesPage.title')}</h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="services-hero-description">{t('servicesPage.description')}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-muted" data-testid="services-grid-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border/50">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white" data-testid="why-choose-us-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="why-choose-us-title">{t('servicesPage.whyChoose.title')}</h2>
              <p className="text-lg leading-relaxed font-light text-muted-foreground max-w-3xl mx-auto" data-testid="why-choose-us-description">{t('servicesPage.whyChoose.description')}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { key: 'qualified', delay: 0.1 },
                { key: 'visibility', delay: 0.2 },
                { key: 'risk', delay: 0.3 },
                { key: 'readiness', delay: 0.4 },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: item.delay }} className="bg-muted/50 border border-border/40 p-10" data-testid={`benefit-card-${index + 1}`}>
                  <h3 className="font-serif text-2xl font-normal text-primary mb-4">{t(`servicesPage.whyChoose.${item.key}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`servicesPage.whyChoose.${item.key}.description`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
