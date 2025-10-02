import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {
  HelmetProvider
} from 'react-helmet-async';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import SolutionsPage from './pages/SolutionsPage';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';
import Partners from './pages/Partners';
import Team from './pages/Team';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ServicesCatalog from './pages/ServicesCatalog';
import SolutionsEnterprise from './pages/SolutionsEnterprise';
import SolutionsSMB from './pages/SolutionsSMB';
import SolutionsStartup from './pages/SolutionsStartup';
import SolutionsHealthcare from './pages/solutions/Healthcare';
import SolutionsFinancial from './pages/solutions/Financial';
import SolutionsRetail from './pages/solutions/Retail';
import SolutionsManufacturing from './pages/solutions/Manufacturing';
import AISolutions from './pages/AISolutions';
import ITServices from './pages/ITServices';
import AIMicroSAAS from './pages/AIMicroSAAS';
import CloudDevOps from './pages/services/CloudDevOps';
import AIDataAnalytics from './pages/services/AIDataAnalytics';
import AdvancedCybersecurityAI from './pages/services/AdvancedCybersecurityAI';
import AIWorkflowAutomation from './pages/services/AIWorkflowAutomation';

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
        <div className="min-h-screen bg-white">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default AppRouter;