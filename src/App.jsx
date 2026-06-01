import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { RouteSeo } from './components/seo/RouteSeo';

// Lazy-loaded pages for better initial performance
const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then((module) => ({ default: module.Services })));
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })));
const WebDevelopmentService = lazy(() => import('./pages/WebDevelopmentService').then((module) => ({ default: module.WebDevelopmentService })));
const SeoService = lazy(() => import('./pages/SeoService').then((module) => ({ default: module.SeoService })));
const PaidAdsService = lazy(() => import('./pages/PaidAdsService').then((module) => ({ default: module.PaidAdsService })));
const BrandIdentityService = lazy(() => import('./pages/BrandIdentityService').then((module) => ({ default: module.BrandIdentityService })));
const DigitalMarketingService = lazy(() => import('./pages/DigitalMarketingService').then((module) => ({ default: module.DigitalMarketingService })));
const AutomationService = lazy(() => import('./pages/AutomationService').then((module) => ({ default: module.AutomationService })));

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
        <Suspense fallback={<div className="min-h-screen" />}>
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
        </Suspense>
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
