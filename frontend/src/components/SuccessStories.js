import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  }\n];\n\nexport const SuccessStories = () => {\n  return (\n    <section className=\"py-24 md:py-32 bg-muted\" data-testid=\"success-stories-section\">\n      <div className=\"max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24\">\n        <motion.div\n          initial={{ opacity: 0, y: 20 }}\n          whileInView={{ opacity: 1, y: 0 }}\n          viewport={{ once: true }}\n          transition={{ duration: 0.6 }}\n          className=\"mb-16\"\n        >\n          <p className=\"text-secondary text-sm font-mono uppercase tracking-[0.3em] mb-4\" data-testid=\"success-stories-label\">\n            Case Studies\n          </p>\n          <div className=\"flex flex-col md:flex-row md:items-end md:justify-between gap-6\">\n            <div>\n              <h2 className=\"font-serif text-4xl md:text-5xl font-bold text-primary mb-4\" data-testid=\"success-stories-title\">\n                Success Stories\n              </h2>\n              <p className=\"text-lg text-muted-foreground max-w-2xl\" data-testid=\"success-stories-description\">\n                Representative transactions demonstrating our integrated advisory approach across M&A, market entry, and restructuring engagements.\n              </p>\n            </div>\n            <Link to=\"/credibility\">\n              <button className=\"flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors\">\n                View All Cases\n                <ArrowRight size={16} />\n              </button>\n            </Link>\n          </div>\n        </motion.div>\n\n        <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-8\">\n          {successStories.map((story, index) => {\n            const Icon = story.icon;\n            return (\n              <motion.div\n                key={index}\n                initial={{ opacity: 0, y: 30 }}\n                whileInView={{ opacity: 1, y: 0 }}\n                viewport={{ once: true }}\n                transition={{ duration: 0.6, delay: index * 0.15 }}\n                className=\"bg-white group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500\"\n                data-testid={`success-story-${index}`}\n              >\n                <div className=\"p-8 border-l-4 border-secondary\">\n                  <div className=\"flex items-center justify-between mb-6\">\n                    <span className=\"inline-block px-4 py-1 bg-secondary/10 text-secondary text-xs font-mono uppercase tracking-wider\" data-testid={`story-category-${index}`}>\n                      {story.category}\n                    </span>\n                    <Icon className=\"text-secondary\" size={28} strokeWidth={1.5} />\n                  </div>\n\n                  <h3 className=\"font-serif text-2xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors\" data-testid={`story-title-${index}`}>\n                    {story.title}\n                  </h3>\n\n                  <p className=\"text-muted-foreground leading-relaxed mb-6\" data-testid={`story-description-${index}`}>\n                    {story.description}\n                  </p>\n\n                  <div className=\"space-y-2 mb-6\">\n                    {story.highlights.map((highlight, idx) => (\n                      <div key={idx} className=\"flex items-start gap-2 text-sm text-muted-foreground\">\n                        <span className=\"text-secondary mt-1\">\u2022</span>\n                        <span>{highlight}</span>\n                      </div>\n                    ))}\n                  </div>\n\n                  <div className=\"pt-6 border-t border-border flex items-center justify-between\">\n                    <div>\n                      <p className=\"text-xs uppercase tracking-wider text-muted-foreground mb-1\">Transaction Value</p>\n                      <p className=\"font-serif text-xl font-bold text-primary\">{story.value}</p>\n                    </div>\n                    <div className=\"text-right\">\n                      <p className=\"text-xs uppercase tracking-wider text-muted-foreground mb-1\">Sector</p>\n                      <p className=\"font-medium text-foreground\">{story.sector}</p>\n                    </div>\n                  </div>\n                </div>\n              </motion.div>\n            );\n          })}\n        </div>\n      </div>\n    </section>\n  );\n};