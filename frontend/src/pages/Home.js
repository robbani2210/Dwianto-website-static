import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { TrendingUp, Globe, Scale } from 'lucide-react';

export default function Home() {
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
        {/* Hero Section */}
        <section className="relative h-screen flex items-center noise-texture" data-testid="hero-section">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1562367072-fea5c7eb8748?crop=entropy&cs=srgb&fm=jpg&q=85)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(20%) brightness(0.4)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-0" />
          
          <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="hero-subtitle">
                Strategic Capital Advisory
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8" data-testid="hero-title">
                Bridging Global Capital with Indonesian Opportunity
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-white/90 mb-12 max-w-2xl" data-testid="hero-description">
                Independent strategic advisory in M&A, capital structuring, and cross-border transactions. We engineer investments that strengthen enterprises and create sustainable value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="primary" data-testid="hero-cta-primary">
                    Request Consultation
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary" data-testid="hero-cta-secondary" className="border-white text-white hover:bg-white hover:text-primary">
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

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
                Our Services
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="services-section-title">
                Integrated Advisory Framework
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground max-w-3xl" data-testid="services-section-description">
                We combine financial modeling, governance structuring, regulatory navigation, and negotiation strategy into one disciplined approach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border/50">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

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
                  <Link to="/about">
                    <Button variant="link" data-testid="value-proposition-cta">
                      Learn More About Our Approach →
                    </Button>
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

        {/* Credibility Section */}
        <section className="py-24 md:py-32 bg-white" data-testid="credibility-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4" data-testid="credibility-label">
                Track Record
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="credibility-title">
                Proven Cross-Border Expertise
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border border-border/40 p-8 text-center"
                data-testid="credibility-stat-1"
              >
                <div className="font-serif text-4xl font-medium text-primary mb-2">$15-20M</div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">FDI Projects Facilitated</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-border/40 p-8 text-center"
                data-testid="credibility-stat-2"
              >
                <div className="font-serif text-4xl font-medium text-primary mb-2">$30-40M</div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Acquisition Projects</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-border/40 p-8 text-center"
                data-testid="credibility-stat-3"
              >
                <div className="font-serif text-4xl font-medium text-primary mb-2">Multiple</div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Ongoing Cross-Border Mandates</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <Link to="/credibility">
                <Button variant="secondary" data-testid="credibility-cta">
                  View Our Portfolio
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
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
                <Button variant="secondary" data-testid="cta-button" className="bg-white text-primary hover:bg-white/90">
                  Schedule Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}