import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { HeroCarousel } from '../components/HeroCarousel';
import { StatsShowcase } from '../components/StatsShowcase';
import { OwnerProfile } from '../components/OwnerProfile';
import { SuccessStories } from '../components/SuccessStories';
import { ServiceCard } from '../components/ServiceCard';
import { TrendingUp, Globe, Scale } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();
  
  const services = [
    {
      title: 'Mergers & Acquisitions',
      description: 'Buy-side and sell-side advisory for cross-border M&A transactions involving Indonesian companies and foreign investors.',
      link: '/services/mergers-acquisitions',
      icon: TrendingUp,
    },
    {
      title: 'Cross-Border Investment',
      description: 'Strategic market entry solutions including PT PMA establishment and ownership structuring for foreign investors.',
      link: '/services/cross-border-investment',
      icon: Globe,
    },
    {
      title: 'Legal & Financial Compliance',
      description: 'Governance structuring and regulatory compliance advisory for investor-backed Indonesian companies.',
      link: '/services/legal-compliance',
      icon: Scale,
    },
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Stats Showcase */}
        <StatsShowcase />

        {/* Owner Profile */}
        <OwnerProfile />

        {/* Services Section */}
        <section className="py-24 md:py-32 bg-white" data-testid="services-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4" data-testid="services-section-label">
                {t('services.label')}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="services-section-title">
                {t('services.title')}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground max-w-3xl" data-testid="services-section-description">
                {t('services.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border/50">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <SuccessStories />

        {/* Value Proposition Section */}
        <section className="py-24 md:py-32 bg-muted" data-testid="value-proposition-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4" data-testid="value-proposition-label">
                  What Makes Us Different
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="value-proposition-title">
                  Strategic Partner, Not Just Advisor
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p data-testid="value-proposition-text-1">
                    Indonesia offers growth potential, but businesses lack capital, technology, and readiness to scale. Global investors lack local market intelligence and structured entry pathways.
                  </p>
                  <p data-testid="value-proposition-text-2">
                    We don't just connect parties. We prepare Indonesian companies to meet international investor standards, curate both sides of the transaction, and engineer structures that make cross-border investment succeed.
                  </p>
                  <p data-testid="value-proposition-text-3">
                    Our integrated framework combines institutional structuring, governance discipline, and cross-border execution—reducing risk and increasing certainty in Indonesia market deals.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/about" className="text-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors inline-flex items-center gap-2" data-testid="value-proposition-cta">
                    Learn More About Our Approach →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1760238470825-ad51d32fa7a5?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Modern architecture"
                  className="w-full aspect-[4/3] object-cover border border-border"
                  data-testid="value-proposition-image"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - Removed duplicate credibility section */}
        <section className="py-24 md:py-32 bg-primary text-white" data-testid="cta-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6" data-testid="cta-title">
                Ready to Discuss Your Transaction?
              </h2>
              <p className="text-lg leading-relaxed font-light text-white/90 mb-8 max-w-2xl mx-auto" data-testid="cta-description">
                Schedule a confidential consultation to explore how we can support your cross-border investment or M&A objectives.
              </p>
              <Link to="/contact">
                <button className="bg-secondary text-primary px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-secondary/90 transition-colors" data-testid="cta-button">
                  Schedule Consultation
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}