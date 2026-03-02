import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { TrendingUp, Globe, Scale } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Mergers & Acquisitions',
      description: 'Comprehensive M&A advisory for buy-side and sell-side transactions, equity investments, and joint ventures involving Indonesian companies and foreign investors.',
      link: '/services/mergers-acquisitions',
      icon: TrendingUp,
    },
    {
      title: 'Cross-Border Investment & Market Entry',
      description: 'Strategic market entry solutions including PT PMA establishment, ownership structuring, and regulatory compliance for foreign direct investment.',
      link: '/services/cross-border-investment',
      icon: Globe,
    },
    {
      title: 'Legal & Financial Compliance',
      description: 'Ongoing governance structuring and regulatory compliance advisory for PT PMA entities and investor-backed Indonesian companies.',
      link: '/services/legal-compliance',
      icon: Scale,
    },
  ];

  return (
    <>
      <SEO
        title="Services - M&A, Cross-Border Investment & Compliance Advisory"
        description="Comprehensive capital advisory services: M&A transactions, cross-border investment structuring, PT PMA setup, and legal compliance for Indonesian market entry."
        keywords="M&A advisory Indonesia, cross-border investment services, PT PMA setup, foreign investment advisory, legal compliance Indonesia"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="services-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="services-hero-label">
                Our Services
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="services-hero-title">
                Integrated Advisory Framework
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="services-hero-description">
                We combine financial modeling, governance structuring, regulatory navigation, and negotiation strategy into one disciplined advisory approach for cross-border transactions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 md:py-32 bg-muted" data-testid="services-grid-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border/50">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 md:py-32 bg-white" data-testid="why-choose-us-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="why-choose-us-title">
                Why Clients Choose Dwianto
              </h2>
              <p className="text-lg leading-relaxed font-light text-muted-foreground max-w-3xl mx-auto" data-testid="why-choose-us-description">
                We combine institutional structuring, governance discipline, and cross-border execution under one integrated advisory framework.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-muted/50 border border-border/40 p-10"
                data-testid="benefit-card-1"
              >
                <h3 className="font-serif text-2xl font-normal text-primary mb-4">Qualified Counterparts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access to pre-screened, institutionally ready Indonesian companies and aligned foreign investors through our curated network.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-muted/50 border border-border/40 p-10"
                data-testid="benefit-card-2"
              >
                <h3 className="font-serif text-2xl font-normal text-primary mb-4">Clear Financial Visibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive financial modeling, valuation analysis, and due diligence coordination providing complete transaction transparency.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-muted/50 border border-border/40 p-10"
                data-testid="benefit-card-3"
              >
                <h3 className="font-serif text-2xl font-normal text-primary mb-4">Reduced Execution Risk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Structured governance frameworks, regulatory compliance management, and transaction oversight from strategy to closing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-muted/50 border border-border/40 p-10"
                data-testid="benefit-card-4"
              >
                <h3 className="font-serif text-2xl font-normal text-primary mb-4">Faster Market Readiness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Legally compliant, capital-efficient entry structures that accelerate operational readiness and reduce regulatory uncertainty.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}