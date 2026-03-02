import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguagePath } from '../hooks/useLanguagePath';

export const ServiceCard = ({ title, description, link, icon: Icon }) => {
  const { t } = useTranslation();
  const lp = useLanguagePath();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative p-10 border-r border-b border-border/50 hover:bg-muted/30 transition-all duration-500"
      data-testid="service-card"
    >
      {Icon && (
        <div className="mb-6 text-secondary" data-testid="service-card-icon">
          <Icon size={32} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="font-serif text-2xl md:text-3xl font-normal mb-4 text-primary" data-testid="service-card-title">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-muted-foreground mb-6" data-testid="service-card-description">
        {description}
      </p>
      <Link
        to={lp(link)}
        data-testid="service-card-link"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors group"
      >
        {t('common.learnMore')}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};