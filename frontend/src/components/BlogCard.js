import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguagePath } from '../hooks/useLanguagePath';

export const BlogCard = ({ blog, index }) => {
  const { t } = useTranslation();
  const lp = useLanguagePath();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-border/40 hover:border-secondary/50 transition-all duration-500 overflow-hidden group"
      data-testid="blog-card"
    >
      {blog.featured_image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            data-testid="blog-card-image"
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground mb-4">
          <span className="text-secondary font-semibold" data-testid="blog-card-category">{blog.category}</span>
          <span className="flex items-center gap-1" data-testid="blog-card-date">
            <Calendar size={12} />
            {formatDate(blog.published_date)}
          </span>
          <span className="flex items-center gap-1" data-testid="blog-card-read-time">
            <Clock size={12} />
            {blog.read_time} min
          </span>
        </div>
        <h3 className="font-serif text-2xl font-normal mb-3 text-primary group-hover:text-secondary transition-colors" data-testid="blog-card-title">
          <Link to={lp(`/insights/${blog.slug}`)}>
            {blog.title}
          </Link>
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4" data-testid="blog-card-excerpt">
          {blog.excerpt}
        </p>
        <Link
          to={lp(`/insights/${blog.slug}`)}
          data-testid="blog-card-read-more"
          className="text-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors"
        >
          {t('insights.readArticle')} &rarr;
        </Link>
      </div>
    </motion.article>
  );
};
