import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Building2, Globe2, Scale } from 'lucide-react';

const successStories = [
  {
    category: 'Cross-Border M&A',
    icon: Globe2,
    title: 'Strategic Acquisition of Indonesian Manufacturing Asset',
    description: 'Advised international PE firm on $25M acquisition of manufacturing business. Structured transaction to optimize tax efficiency and regulatory compliance.',
    highlights: ['Due diligence coordination', 'Regulatory approval management', 'Post-acquisition integration support'],
    value: '$25M',
    sector: 'Manufacturing'
  },
  {
    category: 'FDI Structuring',
    icon: Building2,
    title: 'PT PMA Establishment for European Technology Firm',
    description: 'Facilitated market entry for European SaaS company through PT PMA establishment, licensing coordination, and operational setup.',
    highlights: ['PT PMA structuring', 'Business license procurement', 'Tax optimization framework'],
    value: '$8M Capital',
    sector: 'Technology'
  },
  {
    category: 'Corporate Restructuring',
    icon: Scale,
    title: 'Debt Restructuring for Family-Owned Enterprise',
    description: 'Led comprehensive restructuring of $40M debt facility for Indonesian family business, negotiating with multiple creditor groups.',
    highlights: ['Creditor negotiations', 'Business plan development', 'Operational improvements'],
    value: '$40M Debt',
    sector: 'Consumer Goods'
  }
];

export const SuccessStories = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 md:py-32 bg-muted" data-testid="success-stories-section">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-secondary text-sm font-mono uppercase tracking-[0.3em] mb-4" data-testid="success-stories-label">
            Case Studies
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4" data-testid="success-stories-title">
                Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl" data-testid="success-stories-description">
                Representative transactions demonstrating our integrated advisory approach across M&A, market entry, and restructuring engagements.
              </p>
            </div>
            <Link to="/credibility">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors">
                View All Cases
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500"
                data-testid={`success-story-${index}`}
              >
                <div className="p-8 border-l-4 border-secondary">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-xs font-mono uppercase tracking-wider" data-testid={`story-category-${index}`}>
                      {story.category}
                    </span>
                    <Icon className="text-secondary" size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors" data-testid={`story-title-${index}`}>
                    {story.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`story-description-${index}`}>
                    {story.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {story.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Transaction Value</p>
                      <p className="font-serif text-xl font-bold text-primary">{story.value}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Sector</p>
                      <p className="font-medium text-foreground">{story.sector}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
