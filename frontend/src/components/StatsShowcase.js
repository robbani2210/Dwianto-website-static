import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Globe, Briefcase, Users } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    number: '20+',
    label: 'Years of Combined Experience',
    description: 'Deep expertise across international markets'
  },
  {
    icon: Briefcase,
    number: '$50M+',
    label: 'Transaction Value',
    description: 'Successfully closed deals and mandates'
  },
  {
    icon: Globe,
    number: '15+',
    label: 'Cross-Border Mandates',
    description: 'Active international engagements'
  },
  {
    icon: Users,
    number: '30+',
    label: 'Institutional Clients',
    description: 'Corporations, PE firms, and family offices'
  }
];

export const StatsShowcase = () => {
  const { t } = useTranslation();

  return (\n    <section\n      className=\"relative py-24 md:py-32 overflow-hidden\"\n      style={\n        backgroundImage: 'url(https://images.unsplash.com/photo-1762279389020-eeeb69c25813?crop=entropy&cs=srgb&fm=jpg&q=85)',\n        backgroundSize: 'cover',\n        backgroundPosition: 'center',\n      }}\n      data-testid=\"stats-showcase-section\"\n    >\n      {/* Dark Overlay */}\n      <div className=\"absolute inset-0 bg-primary/95\" />\n\n      <div className=\"relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24\">\n        <motion.div\n          initial={{ opacity: 0, y: 20 }}\n          whileInView={{ opacity: 1, y: 0 }}\n          viewport={{ once: true }}\n          transition={{ duration: 0.6 }}\n          className=\"text-center mb-16\"\n        >\n          <p className=\"text-secondary text-sm font-mono uppercase tracking-[0.3em] mb-4\" data-testid=\"stats-label\">\n            Our Track Record\n          </p>\n          <h2 className=\"font-serif text-4xl md:text-5xl font-bold text-white\" data-testid=\"stats-title\">\n            Proven Excellence in Capital Advisory\n          </h2>\n        </motion.div>\n\n        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12\">\n          {stats.map((stat, index) => {\n            const Icon = stat.icon;\n            return (\n              <motion.div\n                key={index}\n                initial={{ opacity: 0, y: 30 }}\n                whileInView={{ opacity: 1, y: 0 }}\n                viewport={{ once: true }}\n                transition={{ duration: 0.6, delay: index * 0.1 }}\n                className=\"text-center\"\n                data-testid={`stat-card-${index}`}\n              >\n                <Icon className=\"text-secondary mx-auto mb-6\" size={48} strokeWidth={1.5} />\n                <div className=\"font-serif text-5xl md:text-6xl font-bold text-secondary mb-3\" data-testid={`stat-number-${index}`}>\n                  {stat.number}\n                </div>\n                <p className=\"text-white text-lg font-semibold mb-2\" data-testid={`stat-label-${index}`}>\n                  {stat.label}\n                </p>\n                <p className=\"text-white/70 text-sm\" data-testid={`stat-description-${index}`}>\n                  {stat.description}\n                </p>\n              </motion.div>\n            );\n          })}\n        </div>\n      </div>\n    </section>\n  );\n};