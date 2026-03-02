import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { Building, Globe, TrendingUp } from 'lucide-react';

export default function Credibility() {
  const { t } = useTranslation();

  const projects = [
    { icon: Building, titleKey: 'credibility.projects.fdi.title', value: '$15-20M', descKey: 'credibility.projects.fdi.description' },
    { icon: TrendingUp, titleKey: 'credibility.projects.acquisition.title', value: '$30-40M', descKey: 'credibility.projects.acquisition.description' },
    { icon: Globe, titleKey: 'credibility.projects.mandates.title', value: t('credibility.projects.mandates.value'), descKey: 'credibility.projects.mandates.description' },
  ];

  const partners = [
    { name: 'Pepper Advantage Indonesia', descKey: 'credibility.partners.pepper', website: 'https://pepper-global.com/our-network/pepper-indonesia/', logo: 'https://customer-assets.emergentagent.com/job_global-advisory-9/artifacts/xdqngl5a_logo-pepper.svg' },
    { name: 'Capital Bridge Co., Ltd.', descKey: 'credibility.partners.capitalBridge', website: 'https://www.capitalbridge.co.jp/en#Company-Info', logo: 'https://customer-assets.emergentagent.com/job_global-advisory-9/artifacts/nyaquaz0_capital-bridge-brand-logo.png' },
    { name: 'Nash Advisory', descKey: 'credibility.partners.nash', website: 'https://www.nashadvisory.com/en/', logo: 'https://customer-assets.emergentagent.com/job_global-advisory-9/artifacts/8f6z0vpf_logo%20nash.png' },
  ];

  return (
    <>
      <SEO title="Portfolio & Credibility - Proven Track Record" description="Explore our track record in cross-border M&A and FDI projects." keywords="capital advisory portfolio, M&A track record" />
      <div className="min-h-screen">
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="credibility-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="credibility-hero-label">{t('credibility.label')}</p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="credibility-hero-title">{t('credibility.title')}</h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="credibility-hero-description">{t('credibility.description')}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-muted" data-testid="track-record-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="track-record-title">{t('credibility.trackRecord.title')}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-border/40 p-10" data-testid={`track-record-project-${index}`}>
                    <Icon className="text-secondary mb-6" size={40} strokeWidth={1.5} />
                    <div className="font-serif text-3xl font-medium text-primary mb-3">{project.value}</div>
                    <h3 className="font-serif text-xl font-normal text-primary mb-4">{t(project.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(project.descKey)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white" data-testid="partners-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4" data-testid="partners-label">{t('credibility.partners.label')}</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="partners-title">{t('credibility.partners.title')}</h2>
              <p className="text-lg leading-relaxed font-light text-muted-foreground max-w-3xl mx-auto" data-testid="partners-description">{t('credibility.partners.description')}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-border/40 p-8 text-center hover:border-secondary/50 transition-all duration-300" data-testid={`partner-card-${index}`}>
                  <div className="mb-6 flex items-center justify-center h-24">
                    <img src={partner.logo} alt={partner.name} className="max-h-full max-w-[200px] object-contain" data-testid={`partner-logo-${index}`} />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-primary mb-3">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(partner.descKey)}</p>
                  <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-secondary hover:underline" data-testid={`partner-website-${index}`}>{t('common.visitWebsite')} &rarr;</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-primary text-white" data-testid="expertise-highlight-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">{t('credibility.expertise.title')}</h2>
              <p className="text-lg leading-relaxed font-light text-white/90 max-w-3xl mx-auto mb-8">{t('credibility.expertise.text')}</p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
