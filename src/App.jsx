import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { RouteSeo } from './components/seo/RouteSeo';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { WebDevelopmentService } from './pages/WebDevelopmentService';
import { SeoService } from './pages/SeoService';
import { PaidAdsService } from './pages/PaidAdsService';
import { BrandIdentityService } from './pages/BrandIdentityService';
import { DigitalMarketingService } from './pages/DigitalMarketingService';
import { AutomationService } from './pages/AutomationService';

// Inner component to use location hook
const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <RouteSeo />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopmentService />} />
            <Route path="/services/seo" element={<SeoService />} />
            <Route path="/services/paid-ads" element={<PaidAdsService />} />
            <Route path="/services/brand-identity" element={<BrandIdentityService />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingService />} />
            <Route path="/services/automation" element={<AutomationService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
