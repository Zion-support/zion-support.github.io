import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesCatalog from './pages/ServicesCatalog';
import Pricing from './pages/Pricing';
import Partners from './pages/Partners';
import Support from './pages/Support';
import Resources from './pages/Resources';
import AISolutions from './pages/AISolutions';
import ITServices from './pages/ITServices';
import AIMicroSAAS from './pages/AIMicroSAAS';
import SolutionsEnterprise from './pages/SolutionsEnterprise';
import SolutionsSMB from './pages/SolutionsSMB';
import SolutionsStartup from './pages/SolutionsStartup';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import BannerManager from './components/BannerManager';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceOptimizer from './components/PerformanceOptimizer';

const AppRouter: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <EnhancedErrorBoundary>
          <AccessibilityEnhancer>
            <EnhancedSEOHead />
            <PerformanceOptimizer />
            
            <div className="min-h-screen bg-white">
              <Header />
              
              <div className="flex">
                <Sidebar />
                
                <main className="flex-1 ml-64">
                  <BannerManager />
                  
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/catalog" element={<ServicesCatalog />} />
                    <Route path="/services/ai-services" element={<AISolutions />} />
                    <Route path="/services/it-services" element={<ITServices />} />
                    <Route path="/services/micro-saas" element={<AIMicroSAAS />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                    <Route path="/solutions/smb" element={<SolutionsSMB />} />
                    <Route path="/solutions/startup" element={<SolutionsStartup />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                  </Routes>
                </main>
              </div>
              
              <Footer />
            </div>
            
            <NotificationSystem 
              notifications={[]} 
              onRemove={() => {}} 
            />
            <PerformanceMonitor />
          </AccessibilityEnhancer>
        </EnhancedErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default AppRouter;