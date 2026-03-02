import '@/App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Pages
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

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/mergers-acquisitions" element={<MergersAcquisitions />} />
            <Route path="/services/cross-border-investment" element={<CrossBorderInvestment />} />
            <Route path="/services/legal-compliance" element={<LegalCompliance />} />
            <Route path="/credibility" element={<Credibility />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;