import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Linkedin, CheckCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service_interest: '', message: '',
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
      setFormData({ name: '', email: '', phone: '', company: '', service_interest: '', message: '' });
    } catch (err) {
      setError(t('contactPage.form.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Contact Us - Schedule Strategic Consultation" description="Get in touch with Dwianto Capital Advisory." keywords="contact capital advisory, schedule consultation" />
      <div className="min-h-screen">
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="contact-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="contact-hero-label">{t('contactPage.label')}</p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="contact-hero-title">{t('contactPage.title')}</h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="contact-hero-description">{t('contactPage.description')}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-muted" data-testid="contact-grid-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-primary mb-8" data-testid="contact-info-title">{t('contactPage.info.title')}</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4" data-testid="contact-info-email">
                    <Mail className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">{t('contactPage.info.email')}</p>
                      <a href="mailto:info@dwiantocapital.com" className="text-lg text-primary hover:text-secondary transition-colors">info@dwiantocapital.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4" data-testid="contact-info-phone">
                    <Phone className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">{t('contactPage.info.whatsapp')}</p>
                      <a href="https://wa.me/6285179587928" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:text-secondary transition-colors">+62 851-7958-7928</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4" data-testid="contact-info-address">
                    <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">{t('contactPage.info.office')}</p>
                      <p className="text-lg text-primary">Menara Prima<br />South Jakarta, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4" data-testid="contact-info-linkedin">
                    <Linkedin className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">{t('contactPage.info.linkedin')}</p>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:text-secondary transition-colors">{t('contactPage.info.connectWithUs')}</a>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-border/40 p-8">
                  <h3 className="font-serif text-xl font-normal text-primary mb-4">{t('contactPage.info.officeHours.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t('contactPage.info.officeHours.text')}<br />{t('contactPage.info.officeHours.weekend')}</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white border border-border/40 p-10">
                {submitted ? (
                  <div className="text-center py-12" data-testid="contact-form-success">
                    <CheckCircle className="text-secondary mx-auto mb-6" size={64} strokeWidth={1.5} />
                    <h3 className="font-serif text-2xl font-medium text-primary mb-4">{t('contactPage.form.success.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{t('contactPage.form.success.text')}</p>
                    <button onClick={() => setSubmitted(false)} data-testid="contact-form-reset-button" className="text-sm uppercase tracking-widest text-secondary hover:underline">{t('contactPage.form.success.another')}</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-testid="contact-form">
                    <h2 className="font-serif text-3xl font-medium tracking-tight text-primary mb-8" data-testid="contact-form-title">{t('contactPage.form.title')}</h2>
                    {error && <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 mb-6" data-testid="contact-form-error">{error}</div>}
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">{t('contactPage.form.name')} *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} data-testid="contact-form-name" className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">{t('contactPage.form.email')} *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} data-testid="contact-form-email" className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">{t('contactPage.form.phone')}</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} data-testid="contact-form-phone" className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">{t('contactPage.form.company')}</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} data-testid="contact-form-company" className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary" />
                      </div>
                      <div>
                        <label htmlFor="service_interest" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">{t('contactPage.form.serviceInterest')}</label>
                        <select id="service_interest" name="service_interest" value={formData.service_interest} onChange={handleChange} data-testid="contact-form-service-interest" className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary">
                          <option value="">{t('contactPage.form.selectService')}</option>
                          <option value="M&A Advisory">{t('contactPage.form.maAdvisory')}</option>
                          <option value="Cross-Border Investment">{t('contactPage.form.crossBorderInvestment')}</option>
                          <option value="Legal & Compliance">{t('contactPage.form.legalCompliance')}</option>
                          <option value="General Inquiry">{t('contactPage.form.generalInquiry')}</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">{t('contactPage.form.message')} *</label>
                        <textarea id="message" name="message" required rows="6" value={formData.message} onChange={handleChange} data-testid="contact-form-message" className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none" />
                      </div>
                      <Button type="submit" variant="primary" disabled={loading} data-testid="contact-form-submit" className="w-full">
                        {loading ? t('contactPage.form.submitting') : t('contactPage.form.submit')}
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
