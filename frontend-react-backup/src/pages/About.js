import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { Target, Eye, Award, TrendingUp, Users, Shield, Zap } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Target, titleKey: 'about.values.precision.title', descKey: 'about.values.precision.description' },
    { icon: Shield, titleKey: 'about.values.integrity.title', descKey: 'about.values.integrity.description' },
    { icon: TrendingUp, titleKey: 'about.values.alignment.title', descKey: 'about.values.alignment.description' },
    { icon: Award, titleKey: 'about.values.longTerm.title', descKey: 'about.values.longTerm.description' },
  ];

  return (
    <>
      <SEO
        title="About Us - Strategic Capital Advisory Firm"
        description="Learn about Dwianto Capital Advisory, an independent strategic advisory firm specializing in cross-border M&A and foreign direct investment into Indonesia."
        keywords="capital advisory firm, M&A advisory, cross-border investment advisory, Indonesia market entry"
      />
      <div className="min-h-screen">
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="about-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="about-hero-label">{t('about.label')}</p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="about-hero-title">{t('about.title')}</h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="about-hero-description">{t('about.description')}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-muted" data-testid="who-we-are-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <img src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Business discussion" className="w-full aspect-[4/3] object-cover border border-border" data-testid="who-we-are-image" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="who-we-are-title">{t('about.whoWeAre.title')}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p data-testid="who-we-are-text-1">{t('about.whoWeAre.text1')}</p>
                  <p data-testid="who-we-are-text-2">{t('about.whoWeAre.text2')}</p>
                  <p data-testid="who-we-are-text-3">{t('about.whoWeAre.text3')}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white" data-testid="problem-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4" data-testid="problem-label">{t('about.problem.label')}</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="problem-title">{t('about.problem.title')}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-muted/50 border border-border/40 p-10" data-testid="problem-investor-side">
                <Users className="text-secondary mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-normal text-primary mb-4">{t('about.problem.investors.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('about.problem.investors.description')}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-muted/50 border border-border/40 p-10" data-testid="problem-company-side">
                <Zap className="text-secondary mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-normal text-primary mb-4">{t('about.problem.companies.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('about.problem.companies.description')}</p>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-12 bg-primary text-white p-10 md:p-12 text-center" data-testid="problem-solution">
              <h3 className="font-serif text-3xl font-medium mb-4">{t('about.problem.solution.title')}</h3>
              <p className="text-lg leading-relaxed font-light max-w-3xl mx-auto">{t('about.problem.solution.description')}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-muted" data-testid="vision-mission-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} data-testid="vision-section">
                <Eye className="text-secondary mb-6" size={40} strokeWidth={1.5} />
                <h2 className="font-serif text-4xl font-medium tracking-tight text-primary mb-6">{t('about.vision.title')}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{t('about.vision.text')}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} data-testid="mission-section">
                <Target className="text-secondary mb-6" size={40} strokeWidth={1.5} />
                <h2 className="font-serif text-4xl font-medium tracking-tight text-primary mb-6">{t('about.mission.title')}</h2>
                <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <li className="flex items-start gap-3"><span className="text-secondary mt-1">&bull;</span><span>{t('about.mission.item1')}</span></li>
                  <li className="flex items-start gap-3"><span className="text-secondary mt-1">&bull;</span><span>{t('about.mission.item2')}</span></li>
                  <li className="flex items-start gap-3"><span className="text-secondary mt-1">&bull;</span><span>{t('about.mission.item3')}</span></li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white" data-testid="values-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4" data-testid="values-label">{t('about.values.label')}</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary" data-testid="values-title">{t('about.values.title')}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-border/40 p-10 hover:border-secondary/50 transition-colors duration-500" data-testid={`value-card-${index}`}>
                    <Icon className="text-secondary mb-4" size={32} strokeWidth={1.5} />
                    <h3 className="font-serif text-2xl font-normal text-primary mb-3">{t(value.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
