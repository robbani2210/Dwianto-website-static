import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { SEO } from '../components/SEO';
import { useLanguagePath } from '../hooks/useLanguagePath';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function BlogDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lp = useLanguagePath();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API}/blogs/${slug}`, { params: { lang: i18n.language } });
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug, i18n.language]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : i18n.language === 'zh' ? 'zh-CN' : i18n.language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-testid="blog-loading">
        <p className="text-muted-foreground">{t('insights.loading')}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-testid="blog-not-found">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-medium text-primary mb-4">{t('insights.notFound')}</h1>
          <Link to={lp('/insights')} className="text-secondary hover:underline">
            &larr; {t('insights.backToInsights')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.meta_description || blog.excerpt}
        keywords={(blog.keywords || []).join(', ')}
        type="article"
      />
      <article className="min-h-screen" data-testid="blog-detail-article">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white" data-testid="blog-hero-section">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Link
              to={lp('/insights')}
              data-testid="blog-back-link"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-secondary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              {t('insights.backToInsights')}
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground mb-6">
                <span className="text-secondary font-semibold" data-testid="blog-category">{blog.category}</span>
                <span className="flex items-center gap-1" data-testid="blog-date">
                  <Calendar size={12} />
                  {formatDate(blog.published_date)}
                </span>
                <span className="flex items-center gap-1" data-testid="blog-read-time">
                  <Clock size={12} />
                  {blog.read_time} {t('insights.minRead')}
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] text-primary mb-6" data-testid="blog-title">
                {blog.title}
              </h1>
              <p className="text-xl leading-relaxed font-light text-muted-foreground mb-8" data-testid="blog-excerpt">
                {blog.excerpt}
              </p>
              <div className="flex items-center gap-3" data-testid="blog-author">
                <span className="text-sm text-muted-foreground">{t('insights.by')} {blog.author}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {blog.featured_image && (
          <section className="py-8" data-testid="blog-featured-image-section">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <img src={blog.featured_image} alt={blog.title} className="w-full aspect-video object-cover border border-border" data-testid="blog-featured-image" />
            </div>
          </section>
        )}

        <section className="py-16 md:py-24" data-testid="blog-content-section">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:font-medium prose-headings:text-primary
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-primary prose-strong:font-semibold
                prose-ul:my-6 prose-li:text-muted-foreground
                prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-6 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              data-testid="blog-content"
            />
          </div>
        </section>

        {blog.keywords && blog.keywords.length > 0 && (
          <section className="py-12 border-t border-border/40" data-testid="blog-keywords-section">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{t('insights.relatedTopics')}</p>
              <div className="flex flex-wrap gap-2">
                {blog.keywords.map((keyword, index) => (
                  <span key={index} data-testid={`blog-keyword-${index}`} className="px-4 py-2 bg-muted text-sm text-muted-foreground border border-border">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
