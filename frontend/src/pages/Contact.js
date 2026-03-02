import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Linkedin, CheckCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_interest: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Schedule Strategic Consultation"
        description="Get in touch with Dwianto Capital Advisory. Schedule a confidential consultation for M&A, cross-border investment, or market entry advisory."
        keywords="contact capital advisory, schedule consultation, M&A advisory contact, Indonesia investment consultation"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="contact-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="contact-hero-label">
                Get In Touch
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="contact-hero-title">
                Schedule Strategic Consultation
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="contact-hero-description">
                Discuss your cross-border investment, M&A, or market entry objectives with our advisory team. All consultations are confidential.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-24 md:py-32 bg-muted" data-testid="contact-grid-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-primary mb-8" data-testid="contact-info-title">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4" data-testid="contact-info-email">
                    <Mail className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                      <a href="mailto:info@dwiantocapital.com" className="text-lg text-primary hover:text-secondary transition-colors">
                        info@dwiantocapital.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-info-phone">
                    <Phone className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</p>
                      <a href="https://wa.me/6285179587928" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:text-secondary transition-colors">
                        +62 851-7958-7928
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-info-address">
                    <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Office</p>
                      <p className="text-lg text-primary">
                        Menara Prima<br />
                        South Jakarta, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-info-linkedin">
                    <Linkedin className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</p>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:text-secondary transition-colors">
                        Connect with us
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-border/40 p-8">
                  <h3 className="font-serif text-xl font-normal text-primary mb-4">Office Hours</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM (GMT+7)<br />
                    Saturday - Sunday: By Appointment
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-border/40 p-10"
              >
                {submitted ? (
                  <div className="text-center py-12" data-testid="contact-form-success">
                    <CheckCircle className="text-secondary mx-auto mb-6" size={64} strokeWidth={1.5} />
                    <h3 className="font-serif text-2xl font-medium text-primary mb-4">Thank You!</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      We've received your inquiry and will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      data-testid="contact-form-reset-button"
                      className="text-sm uppercase tracking-widest text-secondary hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-testid="contact-form">
                    <h2 className="font-serif text-3xl font-medium tracking-tight text-primary mb-8" data-testid="contact-form-title">
                      Request Consultation
                    </h2>

                    {error && (
                      <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 mb-6" data-testid="contact-form-error">
                        {error}
                      </div>
                    )}

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          data-testid="contact-form-name"
                          className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          data-testid="contact-form-email"
                          className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          data-testid="contact-form-phone"
                          className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          data-testid="contact-form-company"
                          className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label htmlFor="service_interest" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service_interest"
                          name="service_interest"
                          value={formData.service_interest}
                          onChange={handleChange}
                          data-testid="contact-form-service-interest"
                          className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="">Select a service</option>
                          <option value="M&A Advisory">M&A Advisory</option>
                          <option value="Cross-Border Investment">Cross-Border Investment & Market Entry</option>
                          <option value="Legal & Compliance">Legal & Financial Compliance</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          data-testid="contact-form-message"
                          className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        disabled={loading}
                        data-testid="contact-form-submit"
                        className="w-full"
                      >
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}