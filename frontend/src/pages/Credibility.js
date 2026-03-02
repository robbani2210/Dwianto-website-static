import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Building, Globe, TrendingUp, Award } from 'lucide-react';

export default function Credibility() {
  const projects = [
    {
      icon: Building,
      title: 'Foreign Direct Investment Services',
      value: '$15-20M',
      description: 'Multiple PT PMA establishment projects for international corporations entering the Indonesian market.',
    },
    {
      icon: TrendingUp,
      title: 'Acquisition Projects',
      value: '$30-40M',
      description: 'Cross-border M&A transactions involving Indonesian target companies and foreign strategic investors.',
    },
    {
      icon: Globe,
      title: 'Ongoing Cross-Border Mandates',
      value: 'Multiple',
      description: 'Active advisory engagements for FDI structuring, M&A transactions, and market entry strategies.',
    },
  ];

  const partners = [
    {
      name: 'Pepper Advantage Indonesia',
      description: 'Strategic partnership in financial advisory and investment structuring.',
    },
    {
      name: 'Capital Bridge Co., Ltd.',
      description: 'Cross-border transaction facilitation and market intelligence.',
    },
    {
      name: 'Nash Advisory',
      description: 'Legal and regulatory compliance collaboration.',
    },
  ];

  return (
    <>
      <SEO
        title="Portfolio & Credibility - Proven Track Record"
        description="Explore our track record in cross-border M&A and FDI projects. Proven expertise in Indonesian market entry and capital advisory."
        keywords="capital advisory portfolio, M&A track record, FDI projects Indonesia, cross-border advisory experience"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="credibility-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="credibility-hero-label">
                Portfolio & Experience
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="credibility-hero-title">
                Proven Cross-Border Expertise
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="credibility-hero-description">
                Our track record demonstrates structured execution across foreign direct investment, M&A transactions, and market entry advisory for international clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Track Record */}
        <section className="py-24 md:py-32 bg-muted" data-testid="track-record-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="track-record-title">
                Transaction Experience
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-border/40 p-10"
                    data-testid={`track-record-project-${index}`}
                  >
                    <Icon className="text-secondary mb-6" size={40} strokeWidth={1.5} />
                    <div className="font-serif text-3xl font-medium text-primary mb-3">{project.value}</div>
                    <h3 className="font-serif text-xl font-normal text-primary mb-4">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="py-24 md:py-32 bg-white" data-testid="partners-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4" data-testid="partners-label">
                Strategic Partnerships
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="partners-title">
                Trusted Network
              </h2>
              <p className="text-lg leading-relaxed font-light text-muted-foreground max-w-3xl mx-auto" data-testid="partners-description">
                We collaborate with leading firms across legal, financial, and strategic advisory domains to deliver comprehensive solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-muted/50 border border-border/40 p-8 text-center"
                  data-testid={`partner-card-${index}`}
                >
                  <Award className="text-secondary mx-auto mb-4" size={32} strokeWidth={1.5} />
                  <h3 className="font-serif text-xl font-normal text-primary mb-3">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Highlight */}
        <section className="py-24 md:py-32 bg-primary text-white" data-testid="expertise-highlight-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">
                Structured Execution, Proven Results
              </h2>
              <p className="text-lg leading-relaxed font-light text-white/90 max-w-3xl mx-auto mb-8">
                Our experience spans multiple sectors and transaction types, always maintaining our commitment to governance integrity, stakeholder alignment, and long-term value creation.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}