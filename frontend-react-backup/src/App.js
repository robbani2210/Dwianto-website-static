import '@/App.css';
import './i18n';
import { BrowserRouter, Routes, Route, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { VALID_LANGS } from './hooks/useLanguagePath';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MergersAcquisitions from './pages/MergersAcquisitions';
import CrossBorderInvestment from './pages/CrossBorderInvestment';
import LegalCompliance from './pages/LegalCompliance';
import Credibility from './pages/Credibility';
import Insights from './pages/Insights';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && VALID_LANGS.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

const pageRoutes = (
  <>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="services/mergers-acquisitions" element={<MergersAcquisitions />} />
    <Route path="services/cross-border-investment" element={<CrossBorderInvestment />} />
    <Route path="services/legal-compliance" element={<LegalCompliance />} />
    <Route path="credibility" element={<Credibility />} />
    <Route path="insights" element={<Insights />} />
    <Route path="insights/:slug" element={<BlogDetail />} />
    <Route path="contact" element={<Contact />} />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<AppLayout />}>
          {pageRoutes}
        </Route>
        <Route path="/" element={<AppLayout />}>
          {pageRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
