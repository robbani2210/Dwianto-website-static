import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { SEO } from '../components/SEO';
import { BlogCard } from '../components/BlogCard';
import { Search } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Insights() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'M&A', 'Cross-Border Investment', 'Legal & Compliance', 'Market Analysis'];

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [blogs, searchTerm, selectedCategory]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API}/blogs`);
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  const filterBlogs = () => {
    let filtered = blogs;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  };

  return (
    <>
      <SEO
        title="Insights & Articles - Capital Advisory Research"
        description="Expert insights on capital advisory, M&A transactions, cross-border investment, PT PMA setup, and Indonesian market analysis."
        keywords="capital advisory articles, M&A insights, cross-border investment guide, PT PMA guide, Indonesia market analysis"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="insights-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="insights-hero-label">
                Insights & Research
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="insights-hero-title">
                Expert Capital Advisory Insights
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="insights-hero-description">
                In-depth analysis and guidance on M&A transactions, cross-border investment strategies, and Indonesian market entry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-muted border-y border-border/40" data-testid="insights-filter-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  data-testid="insights-search-input"
                  className="w-full pl-12 pr-4 py-3 border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    data-testid={`insights-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`px-6 py-2 text-sm uppercase tracking-widest font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white text-foreground border border-border hover:border-secondary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 md:py-32 bg-white" data-testid="insights-grid-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            {loading ? (
              <div className="text-center py-20" data-testid="insights-loading">
                <p className="text-muted-foreground">Loading insights...</p>
              </div>
            ) : filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => (
                  <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20" data-testid="insights-no-results">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}