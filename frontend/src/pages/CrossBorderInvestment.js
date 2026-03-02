import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Globe, MapPin, Building, FileCheck, Users, Briefcase } from 'lucide-react';

export default function CrossBorderInvestment() {
  const deliverables = [
    'Market entry feasibility & sector regulatory mapping',
    'Ownership limitation analysis',
    'Optimal shareholding/holding structure design',
    'PT PMA incorporation & licensing coordination',
    'Tax & operational structuring framework',
    'Local partner strategy (if required)',
  ];

  const targetClients = [
    'International corporations entering Indonesia for the first time',
    'Private equity and family offices expanding into emerging markets',
    'Strategic investors establishing operational presence',
  ];

  return (
    <>
      <SEO
        title="Cross-Border Investment & Market Entry Services - PT PMA Setup"
        description="Expert market entry advisory for Indonesia. PT PMA establishment, ownership structuring, regulatory compliance, and strategic investment planning."
        keywords="PT PMA setup, Indonesia market entry, cross-border investment Indonesia, foreign direct investment, FDI Indonesia"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="cross-border-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Globe className="text-secondary mb-6" size={48} strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="cross-border-hero-label">
                Service
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="cross-border-hero-title">
                Cross-Border Investment & Market Entry
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="cross-border-hero-description">
                Design and implement structured foreign market entry strategies into Indonesia, including PT PMA establishment and strategic partnership models.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-24 md:py-32 bg-muted" data-testid="cross-border-deliverables-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="cross-border-deliverables-title">
                What We Deliver
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white border border-border/40 p-6"
                  data-testid={`cross-border-deliverable-${index}`}
                >
                  <MapPin className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-24 md:py-32 bg-white" data-testid="cross-border-target-clients-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1760238470825-ad51d32fa7a5?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Modern architecture"
                  className="w-full aspect-[4/3] object-cover border border-border"
                  data-testid="cross-border-image"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="cross-border-target-clients-title">
                  Who We Serve
                </h2>
                <ul className="space-y-4">
                  {targetClients.map((client, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`cross-border-target-client-${index}`}>
                      <Users className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground leading-relaxed">{client}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-24 md:py-32 bg-muted" data-testid="cross-border-benefits-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="cross-border-benefits-title">
                Key Benefits
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border border-border/40 p-10 text-center"
                data-testid="cross-border-benefit-1"
              >
                <Building className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-primary mb-3">Compliant Entry Structure</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Legally compliant and capital-efficient market entry framework
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-border/40 p-10 text-center"
                data-testid="cross-border-benefit-2"
              >
                <FileCheck className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-primary mb-3">Clear Ownership Architecture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Optimal shareholding structure addressing regulatory limitations
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-border/40 p-10 text-center"
                data-testid="cross-border-benefit-3"
              >
                <Briefcase className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-primary mb-3">Faster Operational Readiness</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reduced regulatory uncertainty and accelerated setup timeline
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 md:py-32 bg-primary text-white" data-testid="cross-border-value-proposition">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">
                Transform Foreign Expansion into Operational Reality
              </h2>
              <p className="text-lg leading-relaxed font-light text-white/90 max-w-3xl mx-auto">
                We convert your market entry intent into a compliant, structured, and operational Indonesian platform—ready for business from day one.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}