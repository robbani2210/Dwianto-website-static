import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { TrendingUp, Target, FileText, BarChart, Shield, CheckCircle } from 'lucide-react';

export default function MergersAcquisitions() {
  const deliverables = [
    'Target screening & strategic fit analysis',
    'Valuation advisory & financial modeling',
    'Transaction structuring (equity, hybrid, control/minority)',
    'Due diligence coordination (legal, financial, tax)',
    'Negotiation strategy & documentation oversight',
    'Closing execution management',
  ];

  const targetClients = [
    'Foreign investors seeking acquisition or entry into Indonesia',
    'Indonesian shareholders considering partial sale, capital injection, or exit',
    'Corporates pursuing joint ventures or strategic consolidation',
  ];

  return (
    <>
      <SEO
        title="M&A Advisory Services - Mergers & Acquisitions Indonesia"
        description="Expert M&A advisory for cross-border transactions in Indonesia. Buy-side and sell-side advisory, valuation, due diligence, and transaction execution."
        keywords="M&A advisory Indonesia, mergers acquisitions Indonesia, cross-border M&A, buy-side advisory, sell-side advisory"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="ma-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <TrendingUp className="text-secondary mb-6" size={48} strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="ma-hero-label">
                Service
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="ma-hero-title">
                Mergers & Acquisitions
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="ma-hero-description">
                Comprehensive advisory for buy-side and sell-side mergers, acquisitions, equity investments, and joint ventures involving Indonesian companies and foreign investors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-24 md:py-32 bg-muted" data-testid="ma-deliverables-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="ma-deliverables-title">
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
                  data-testid={`ma-deliverable-${index}`}
                >
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-24 md:py-32 bg-white" data-testid="ma-target-clients-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="ma-target-clients-title">
                  Who We Serve
                </h2>
                <ul className="space-y-4">
                  {targetClients.map((client, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`ma-target-client-${index}`}>
                      <Target className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground leading-relaxed">{client}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1764087957302-ef0756ed8e0a?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Business transaction"
                  className="w-full aspect-[4/3] object-cover border border-border"
                  data-testid="ma-image"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-24 md:py-32 bg-muted" data-testid="ma-benefits-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="ma-benefits-title">
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
                data-testid="ma-benefit-1"
              >
                <BarChart className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-primary mb-3">Efficient Market Screening</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Access to qualified counterparts and strategic fit analysis
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-border/40 p-10 text-center"
                data-testid="ma-benefit-2"
              >
                <FileText className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-primary mb-3">Clear Visibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive financial and legal due diligence coordination
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-border/40 p-10 text-center"
                data-testid="ma-benefit-3"
              >
                <Shield className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-primary mb-3">Reduced Risk</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Structured governance and execution certainty from strategy to closing
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}