import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Scale, Shield, FileText, Users, TrendingUp, AlertCircle } from 'lucide-react';

export default function LegalCompliance() {
  const deliverables = [
    'Corporate governance framework implementation',
    'Board structuring & reporting systems',
    'Financial reporting alignment & internal control advisory',
    'Regulatory & licensing compliance monitoring',
    'Shareholder agreement implementation guidance',
    'Capital structure & corporate action advisory',
  ];

  const targetClients = [
    'Newly established PT PMA entities',
    'Foreign-owned companies operating in Indonesia',
    'Joint ventures & investor-backed enterprises',
    'Companies requiring structured governance and financial discipline',
  ];

  return (
    <>
      <SEO
        title="Legal & Financial Compliance Advisory for Indonesian Companies"
        description="Ongoing governance structuring and regulatory compliance advisory for PT PMA entities and investor-backed Indonesian companies."
        keywords="legal compliance Indonesia, financial compliance advisory, PT PMA governance, regulatory compliance Indonesia, corporate governance"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="legal-compliance-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Scale className="text-secondary mb-6" size={48} strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="legal-compliance-hero-label">
                Service
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="legal-compliance-hero-title">
                Legal & Financial Compliance Advisory
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="legal-compliance-hero-description">
                Ongoing legal and financial compliance advisory for PT PMA and investor-backed Indonesian companies, ensuring adherence to regulatory requirements and investor governance standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-24 md:py-32 bg-muted" data-testid="legal-compliance-deliverables-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="legal-compliance-deliverables-title">
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
                  data-testid={`legal-compliance-deliverable-${index}`}
                >
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-24 md:py-32 bg-white" data-testid="legal-compliance-target-clients-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="legal-compliance-target-clients-title">
                  Who We Serve
                </h2>
                <ul className="space-y-4">
                  {targetClients.map((client, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`legal-compliance-target-client-${index}`}>
                      <Users className="text-secondary flex-shrink-0 mt-1" size={20} />
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
                  src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Professional advisory"
                  className="w-full aspect-[4/3] object-cover border border-border"
                  data-testid="legal-compliance-image"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-24 md:py-32 bg-muted" data-testid="legal-compliance-benefits-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="legal-compliance-benefits-title">
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
                data-testid="legal-compliance-benefit-1"
              >
                <FileText className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-primary mb-3">Day-One Compliance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Clear financial and legal compliance from establishment
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-border/40 p-10 text-center"
                data-testid="legal-compliance-benefit-2"
              >
                <TrendingUp className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-primary mb-3">Improved Transparency</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enhanced reporting quality and financial discipline
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-border/40 p-10 text-center"
                data-testid="legal-compliance-benefit-3"
              >
                <AlertCircle className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-primary mb-3">Reduced Risk</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Minimized regulatory and operational exposure
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 md:py-32 bg-white" data-testid="legal-compliance-value-proposition">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6">
                Stronger Alignment Between Investors & Local Management
              </h2>
              <p className="text-lg leading-relaxed font-light text-muted-foreground">
                Our ongoing advisory ensures your Indonesian operations maintain the governance standards and financial discipline that international investors expect—creating sustainable partnerships built on transparency and trust.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}