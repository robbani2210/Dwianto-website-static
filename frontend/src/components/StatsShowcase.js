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
  
  const sectionStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1762279389020-eeeb69c25813?crop=entropy&cs=srgb&fm=jpg&q=85)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={sectionStyle}
      data-testid="stats-showcase-section"
    >
      <div className="absolute inset-0 bg-primary/95" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-sm font-mono uppercase tracking-[0.3em] mb-4" data-testid="stats-label">
            Our Track Record
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white" data-testid="stats-title">
            Proven Excellence in Capital Advisory
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                data-testid={`stat-card-${index}`}
              >
                <Icon className="text-secondary mx-auto mb-6" size={48} strokeWidth={1.5} />
                <div className="font-serif text-5xl md:text-6xl font-bold text-secondary mb-3" data-testid={`stat-number-${index}`}>
                  {stat.number}
                </div>
                <p className="text-white text-lg font-semibold mb-2" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </p>
                <p className="text-white/70 text-sm" data-testid={`stat-description-${index}`}>
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};