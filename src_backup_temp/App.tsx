import React, { Suspense, lazy, useEffect, memo, useCallback } from 'react';
import React, { Suspense, lazy } from 'react';';';
import { Routes, Route } from 'react-router-dom';';';
import { Header } from './src/components/Header.tsx';';';
import { Footer } from './src/components/Footer.tsx';';';
import { Sidebar } from './src/components/Sidebar.tsx';';';
import { ErrorBoundary } from 'react-error-boundary';';';
import { LoadingSpinner } from './src/components/ui/loading-spinner.tsx';
';
// Enhanced Components';';
import PerformanceOptimizer from './src/components/PerformanceOptimizer.tsx';';';
import EnhancedAccessibilityEnhancer from './src/components/EnhancedAccessibilityEnhancer.tsx';';';
import { MobileExperienceEnhancer } from './src/components/MobileExperienceEnhancer.tsx';';';
import { ChatAssistant } from './components/ChatAssistant';
import React, { Suspense, lazy, useState } from 'react';
import React, { Suspense, lazy, useState, useEffect, memo, useCallback } from 'react';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { AccessibilityControls } from './components/AccessibilityEnhancer';
// import { preloadCriticalResources, enableLazyLoading } from './utils/performance';
import { preloadCriticalResources, enableLazyLoading } from './utils/performance.ts';
import './styles/accessibility.css';
;
// Enhanced Components - temporarily disabled due to build issues;
// import PerformanceOptimizer from './components/PerformanceOptimizer';
// import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
// import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
// import { ChatAssistant } from './components/ChatAssistant';
// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
;
// Enhanced lazy loading with preloading hints;
const createLazyComponent = ("importFn": "() => Promise<any>", fallback?: "React.ReactNode) => {;
  const LazyComponent = lazy(importFn);
  return ("props": any) => (;
    <Suspense fallback={fallback || <LoadingSpinner />"}>;
      <LazyComponent {...props} />;
    </Suspense>;
  );
};
// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ default: module.ComprehensiveServicesPage })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.default })));
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap').then(module => ({ default: module.ComprehensiveSitemap })));
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ default: module.default })));
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage').then(module => ({ default: module.RevolutionaryServicesPage })));
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025').then(module => ({ default: module.NewServicesShowcase2025 })));
const EnhancedNewServices2025 = lazy(() => import('./pages/EnhancedNewServices2025').then(module => ({ default: module.EnhancedNewServices2025 })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));
const ComprehensiveServicesShowcase = lazy(() => import('./pages/ComprehensiveServicesShowcase').then(module => ({ default: module.default })));
const UltimateServicesShowcase2025 = lazy(() => import('./pages/UltimateServicesShowcase2025').then(module => ({ default: module.default })));
const EnhancedServicesShowcase2025 = lazy(() => import('./pages/EnhancedServicesShowcase2025').then(module => ({ default: module.EnhancedServicesShowcase2025 })));
const ComprehensiveServicesShowcase = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ default: module.default })));
const ComprehensiveNewServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveNewServicesShowcase2025').then(module => ({ default: module.default })));
const EnhancedServicesShowcase2025 = lazy(() => import('./components/EnhancedServicesShowcase2025').then(module => ({ default: module.EnhancedServicesShowcase2025 })));
';
// Lazy load pages for better performance';';
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));';';
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));';';
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));';';
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));';';
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));';';
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));';';
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));';';
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ default: module.ComprehensiveServicesPage })));';';
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.default })));';';
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap').then(module => ({ default: module.ComprehensiveSitemap })));';';
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));';';
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));';';
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ default: module.default })));';';
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage').then(module => ({ default: module.RevolutionaryServicesPage })));';';
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025').then(module => ({ default: module.NewServicesShowcase2025 })));';';
const EnhancedNewServices2025 = lazy(() => import('./pages/EnhancedNewServices2025').then(module => ({ default: module.EnhancedNewServices2025 })));';';
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));';';
const ComprehensiveServicesShowcase = lazy(() => import('./pages/ComprehensiveServicesShowcase').then(module => ({ default: module.default })));
';
// Service Pages';';
const AISolutions = lazy(() => import('./pages/services/AISolutions').then(module => ({ default: module.AISolutions })));';';
const QuantumComputing = lazy(() => import('./pages/services/QuantumComputing').then(module => ({ default: module.QuantumComputing })));';';
;
// Lazy load pages for better performance;
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ "default": "module.HomePage "})));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ "default": "module.default "})));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ "default": "module.SolutionsPage "})));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ "default": "module.AboutPage "})));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ "default": "module.ContactPage "})));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ "default": "module.BlogPage "})));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ "default": "module.NotFoundPage "})));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ "default": "module.ComprehensiveServicesPage "})));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ "default": "module.default "})));
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap').then(module => ({ "default": "module.ComprehensiveSitemap "})));
const Training = lazy(() => import('./pages/Training').then(module => ({ "default": "module.default "})));
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ "default": "module.default "})));
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage').then(module => ({ "default": "module.RevolutionaryServicesPage "})));
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025').then(module => ({ "default": "module.NewServicesShowcase2025 "})));
const EnhancedNewServices2025 = lazy(() => import('./pages/EnhancedNewServices2025').then(module => ({ "default": "module.EnhancedNewServices2025 "})));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ "default": "module.PricingPage "})));
const ComprehensiveServicesShowcase = createLazyComponent(() => import('./pages/ComprehensiveServicesPage'));
const ComprehensiveNewServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveNewServicesShowcase2025').then(module => ({ "default": "module.default "})));
const EnhancedServicesShowcase2025 = lazy(() => import('./components/EnhancedServicesShowcase2025').then(module => ({ "default": "module.EnhancedServicesShowcase2025 "})));
;
// Service Pages;
const AISolutions = lazy(() => import('./pages/services/AISolutions').then(module => ({ "default": "module.AISolutions "})));
const QuantumComputing = lazy(() => import('./pages/services/QuantumComputing').then(module => ({ "default": "module.QuantumComputing "})));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity').then(module => ({ "default": "module.Cybersecurity "})));
const AIContentCreation = lazy(() => import('./pages/services/AIContentCreation').then(module => ({ "default": "module.default "})));
;
// Loading component;
const PageLoader = () => (;
  <div className="flex items-center justify-center min-h-screen bg-gray-900">;
    <div className="text-center">;
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>;
      <p className="text-gray-400">Loading...</p>;
    </div>;
  </div>;
);
;
// Lazy load pages - only import existing ones;
// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { ChatAssistant } from './components/ChatAssistant';
// Lazy load pages for better performance - only import existing pages
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
// Service Pages
const AISolutions = lazy(() => import('./pages/services/AISolutions').then(module => ({ default: module.AISolutions })));
const QuantumComputing = lazy(() => import('./pages/services/QuantumComputing').then(module => ({ default: module.QuantumComputing })));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity').then(module => ({ default: module.Cybersecurity })));
// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
    );
// Lazy load pages - only import existing ones
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const Login = createLazyComponent(() => import('./pages/Login'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Help = createLazyComponent(() => import('./pages/Help'));
const News = createLazyComponent(() => import('./pages/News'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Support = createLazyComponent(() => import('./pages/Support'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const ComprehensivePricing = createLazyComponent(() => import('./pages/ComprehensivePricing'));
// Additional service components
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const App: React.FC = memo(() => {
  // Initialize performance optimizations
  useEffect(() => {
    // preloadCriticalResources();
    // enableLazyLoading();
  }, []);
  // Memoize error boundary fallback
  const errorFallback = useCallback(({ error, resetErrorBoundary }: any) => (
    <div className="error-boundary">
      <div className="error-boundary-content">
        <h1>Something went wrong</h1>
        <p>{error?.message}</p>
        <button onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    </div>
  ), []);
export default function App(props: any) {
  return (
    <EnhancedErrorBoundary 
      fallback={errorFallback}
      showDetails={process.env.NODE_ENV === 'development'}
      enableReporting={true}
    >
      <Router>
        <div className="min-h-screen bg-gray-50 flex">
          <Header />
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main className="flex-1 lg:ml-80 min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/search" element={<Services />} />
                <Route path="/services" element={<Services />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesShowcase />} />
                <Route path="/new-services-2025" element={<EnhancedServicesShowcase2025 />} />
                <Route path="/comprehensive-new-services-2025" element={<ComprehensiveNewServicesShowcase2025 />} />
                <Route path="/revolutionary-services-2025" element={<ComprehensiveNewServicesShowcase2025 />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Services />} />
                <Route path="/case-studies" element={<Services />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Services />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/schedule-demo" element={<Contact />} />
                <Route path="/community" element={<Services />} />
                <Route path="/demo" element={<Services />} />
                <Route path="/team" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<Help />} />
                {/* New pricing guide route */}
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricing />} />
                {/* Service Routes */}
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
                {/* New sitemap routes */}
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/solutions/enterprise" element={<Solutions />} />
                <Route path="/solutions/healthcare" element={<Solutions />} />
                {/* Service routes */}
                <Route path="/services/cloud-devops" element={<Services />} />
                <Route path="/services/digital-twin" element={<Services />} />
                <Route path="/services/data-analytics" element={<Services />} />
                <Route path="/services/it-infrastructure" element={<Services />} />
                <Route path="/services/ai-business-intelligence" element={<Services />} />
                <Route path="/services/ai-sales-copilot" element={<Services />} />
                <Route path="/services/cloud-finops-optimizer" element={<Services />} />
                <Route path="/services/ai-compliance-assistant" element={<Services />} />
                <Route path="/services/ai-auto-email-responder" element={<Services />} />
                <Route path="/services/mobile-feedback-surveys" element={<Services />} />
                <Route path="/services/ai-compliance-copilot" element={<Services />} />
                <Route path="/services/llm-content-studio" element={<Services />} />
                <Route path="/services/finops-advisor" element={<Services />} />
                <Route path="/services/returns-management" element={<Services />} />
                <Route path="/services/email-sequencer" element={<Services />} />
                <Route path="/services/podcast-transcription" element={<Services />} />
                <Route path="/services/micro-crm" element={<Services />} />
                <Route path="/services/website-analytics" element={<Services />} />
                <Route path="/services/it-helpdesk" element={<Services />} />
                <Route path="/services/affiliate-tracking" element={<Services />} />
                <Route path="/services/mobile-survey" element={<Services />} />
                {/* New AI Content Creation Service */}
                <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                {/* Additional new service routes */}
                <Route path="/services/ai-seo" element={<Services />} />
                <Route path="/services/interview-assessment" element={<Services />} />
                <Route path="/services/helpdesk" element={<Helpdesk />} />
                <Route path="/services/dsr-portal" element={<Services />} />
                <Route path="/services/security-headers-csp" element={<Services />} />
                {/* New AI-powered micro SAAS service routes */}
                <Route path="/services/ai-project-management" element={<Services />} />
                <Route path="/services/ai-customer-support-automation" element={<Services />} />
                <Route path="/services/ai-financial-analytics" element={<Services />} />
                <Route path="/services/ai-marketing-automation" element={<Services />} />
                {/* Additional innovative AI services */}
                <Route path="/services/ai-quantum-financial-trading" element={<Services />} />
                <Route path="/services/ai-predictive-maintenance" element={<Services />} />
                {/* Additional innovative AI services */}
                <Route path="/services/ai-autonomous-supply-chain" element={<Services />} />
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={<Services />} />
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-workflow-orchestrator" element={<Services />} />
                <Route path="/services/ai-data-governance-platform" element={<Services />} />
                <Route path="/services/ai-customer-experience-analytics" element={<Services />} />
                {/* Quantum and advanced services */}
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                {/* Revolutionary services */}
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
                <Route path="/enhanced-services-2025" element={<EnhancedNewServices2025 />} />
                {/* Sitemap routes */}
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
                {/* Support routes */}
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                {/* Catch-all route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          {/* Enhanced Components - temporarily disabled due to build issues */}
          {/* <PerformanceOptimizer />
          <EnhancedAccessibilityEnhancer />
          <MobileExperienceEnhancer />
          <ChatAssistant /> */}
        </div>
      </Router>
    </EnhancedErrorBoundary>
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Sidebar />
        <main className="flex-1 lg:ml-80">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/search" element={<Services />} />
              <Route path="/services" element={<Services />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServicesShowcase />} />
              <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
              <Route path="/enhanced-services-2025" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/resources" element={<Services />} />
              <Route path="/case-studies" element={<Services />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Services />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/schedule-demo" element={<Contact />} />
              <Route path="/community" element={<Services />} />
              <Route path="/demo" element={<Services />} />
              <Route path="/team" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/help" element={<Help />} />
              {/* New pricing guide route */}
              <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricing />} />
              {/* Service Routes */}
              <Route path="/ai-services" element={<AISolutions />} />
              <Route path="/it-services" element={<Services />} />
              <Route path="/micro-saas" element={<Services />} />
              {/* New sitemap routes */}
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/solutions/enterprise" element={<Solutions />} />
              <Route path="/solutions/healthcare" element={<Solutions />} />
              {/* Service routes */}
              <Route path="/services/cloud-devops" element={<Services />} />
              <Route path="/services/digital-twin" element={<Services />} />
              <Route path="/services/data-analytics" element={<Services />} />
              <Route path="/services/it-infrastructure" element={<Services />} />
              <Route path="/services/ai-business-intelligence" element={<Services />} />
              <Route path="/services/ai-sales-copilot" element={<Services />} />
              <Route path="/services/cloud-finops-optimizer" element={<Services />} />
              <Route path="/services/ai-compliance-assistant" element={<Services />} />
              <Route path="/services/ai-auto-email-responder" element={<Services />} />
              <Route path="/services/mobile-feedback-surveys" element={<Services />} />
              <Route path="/services/ai-compliance-copilot" element={<Services />} />
              <Route path="/services/llm-content-studio" element={<Services />} />
              <Route path="/services/finops-advisor" element={<Services />} />
              <Route path="/services/returns-management" element={<Services />} />
              <Route path="/services/email-sequencer" element={<Services />} />
              <Route path="/services/podcast-transcription" element={<Services />} />
              <Route path="/services/micro-crm" element={<Services />} />
              <Route path="/services/website-analytics" element={<Services />} />
              <Route path="/services/it-helpdesk" element={<Services />} />
              <Route path="/services/affiliate-tracking" element={<Services />} />
              <Route path="/services/mobile-survey" element={<Services />} />
              {/* Additional new service routes */}
              <Route path="/services/ai-seo" element={<Services />} />
              <Route path="/services/interview-assessment" element={<Services />} />
              <Route path="/services/helpdesk" element={<Helpdesk />} />
              <Route path="/services/dsr-portal" element={<Services />} />
              <Route path="/services/security-headers-csp" element={<Services />} />
              {/* New AI-powered micro SAAS service routes */}
              <Route path="/services/ai-project-management" element={<Services />} />
              <Route path="/services/ai-customer-support-automation" element={<Services />} />
              <Route path="/services/ai-financial-analytics" element={<Services />} />
              <Route path="/services/ai-marketing-automation" element={<Services />} />
              {/* Additional innovative AI services */}
              <Route path="/services/ai-quantum-financial-trading" element={<Services />} />
              <Route path="/services/ai-predictive-maintenance" element={<Services />} />
              {/* Additional innovative AI services */}
              <Route path="/services/ai-autonomous-supply-chain" element={<Services />} />
              <Route path="/services/ai-cybersecurity-threat-intelligence" element={<Services />} />
              {/* Additional innovative AI service routes */}
              <Route path="/services/ai-workflow-orchestrator" element={<Services />} />
              <Route path="/services/ai-data-governance-platform" element={<Services />} />
              <Route path="/services/ai-customer-experience-analytics" element={<Services />} />
              {/* Quantum and advanced services */}
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              {/* Revolutionary services */}
              <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
              <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
              <Route path="/enhanced-services-2025" element={<EnhancedNewServices2025 />} />
              {/* Sitemap routes */}
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
              {/* Support routes */}
              <Route path="/support" element={<Support />} />
              <Route path="/training" element={<Training />} />
              <Route path="/helpdesk" element={<Helpdesk />} />
              {/* Catch-all route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        {/* Enhanced Components */}
        <PerformanceOptimizer />
        <EnhancedAccessibilityEnhancer />
        <MobileExperienceEnhancer />
        <ChatAssistant />
      </div>
// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.default })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.default })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.default })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.default })));
const Solutions = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
const FAQ = lazy(() => import('./pages/FAQ').then(module => ({ default: module.default })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.default })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.default })));
const Cookies = lazy(() => import('./pages/Cookies').then(module => ({ default: module.default })));
const Pricing = lazy(() => import('./pages/Pricing').then(module => ({ default: module.default })));
const Help = lazy(() => import('./pages/Help').then(module => ({ default: module.default })));
const News = lazy(() => import('./pages/News').then(module => ({ default: module.default })));
const Careers = lazy(() => import('./pages/Careers').then(module => ({ default: module.default })));
const WhitePapers = lazy(() => import('./pages/WhitePapers').then(module => ({ default: module.default })));
const RequestQuote = lazy(() => import('./pages/RequestQuote').then(module => ({ default: module.default })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.default })));
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.default })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.default })));
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing').then(module => ({ default: module.default })));
const UltimateServicesShowcase2025 = lazy(() => import('./pages/UltimateServicesShowcase2025').then(module => ({ default: module.default })));
// New innovative services pages
// Additional service components
;
// Additional service components;
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
;
const "App": "React.FC = memo(() => {;
  const [isSidebarOpen", setIsSidebarOpen] = useState(false);
  ;
  // Initialize performance optimizations;
  useEffect(() => {;
    preloadCriticalResources();
    enableLazyLoading();
  }, []);
;
  // Memoize error boundary fallback;
  const errorFallback = useCallback(({ error, resetErrorBoundary }: "any) => (;
    <div className="error-boundary">;
      <div className="error-boundary-content">;
        <h1>Something went wrong</h1>;
        <p>{error?.message"}</p>;
        <button onClick={resetErrorBoundary}>;
          Try again;
        </button>;
      </div>;
    </div>;
  ), []);
;
  return (;
    <EnhancedErrorBoundary ;
      fallback={errorFallback}
      showDetails={process.env.NODE_ENV === 'development'}
      enableReporting={true}
    >
    >;
      <Router>;
        <div className="min-h-screen bg-gray-50 flex">;
          <Header />;
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />;
          ;
          <main className="flex-1 "lg": "ml-80 min-h-screen">;
            <Suspense fallback={<LoadingSpinner />"}>;
              <Routes>;
                <Route path="/" element={<Home />} />;
                <Route path="/about" element={<About />} />;
                <Route path="/contact" element={<Contact />} />;
                <Route path="/blog" element={<BlogPage />} />;
                <Route path="/faq" element={<FAQ />} />;
                <Route path="/careers" element={<Careers />} />;
                <Route path="/privacy" element={<Privacy />} />;
                <Route path="/terms" element={<Terms />} />;
                <Route path="/cookies" element={<Cookies />} />;
                <Route path="/pricing" element={<Pricing />} />;
                <Route path="/search" element={<Services />} />;
                <Route path="/services" element={<Services />} />;
                <Route path="/comprehensive-services" element={<ComprehensiveServicesShowcase />} />;
                <Route path="/new-services-2025" element={<EnhancedServicesShowcase2025 />} />;
                <Route path="/comprehensive-new-services-2025" element={<ComprehensiveNewServicesShowcase2025 />} />;
                <Route path="/revolutionary-services-2025" element={<ComprehensiveNewServicesShowcase2025 />} />;
                <Route path="/solutions" element={<Solutions />} />;
                <Route path="/resources" element={<Services />} />;
                <Route path="/case-studies" element={<Services />} />;
                <Route path="/white-papers" element={<WhitePapers />} />;
                <Route path="/webinars" element={<Services />} />;
                <Route path="/request-quote" element={<RequestQuote />} />;
                <Route path="/dashboard" element={<Dashboard />} />;
                <Route path="/login" element={<Login />} />;
                <Route path="/schedule-demo" element={<Contact />} />;
                <Route path="/community" element={<Services />} />;
                <Route path="/demo" element={<Services />} />;
                <Route path="/team" element={<About />} />;
                <Route path="/news" element={<News />} />;
                <Route path="/help" element={<Help />} />;
                ;
                {/* New pricing guide route */}
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricing />} />;
                ;
                {/* Service Routes */}
                <Route path="/ai-services" element={<AIServices />} />;
                <Route path="/it-services" element={<ITServices />} />;
                <Route path="/micro-saas" element={<MicroSaaS />} />;
                ;
                {/* New sitemap routes */}
                <Route path="/ai-solutions" element={<AISolutions />} />;
                <Route path="/solutions/enterprise" element={<Solutions />} />;
                <Route path="/solutions/healthcare" element={<Solutions />} />;
                ;
                {/* Service routes */}
                <Route path="/services/cloud-devops" element={<Services />} />;
                <Route path="/services/digital-twin" element={<Services />} />;
                <Route path="/services/data-analytics" element={<Services />} />;
                <Route path="/services/it-infrastructure" element={<Services />} />;
                <Route path="/services/ai-business-intelligence" element={<Services />} />;
                <Route path="/services/ai-sales-copilot" element={<Services />} />;
                <Route path="/services/cloud-finops-optimizer" element={<Services />} />;
                <Route path="/services/ai-compliance-assistant" element={<Services />} />;
                <Route path="/services/ai-auto-email-responder" element={<Services />} />;
                <Route path="/services/mobile-feedback-surveys" element={<Services />} />;
                <Route path="/services/ai-compliance-copilot" element={<Services />} />;
                <Route path="/services/llm-content-studio" element={<Services />} />;
                <Route path="/services/finops-advisor" element={<Services />} />;
                <Route path="/services/returns-management" element={<Services />} />;
                <Route path="/services/email-sequencer" element={<Services />} />;
                <Route path="/services/podcast-transcription" element={<Services />} />;
                <Route path="/services/micro-crm" element={<Services />} />;
                <Route path="/services/website-analytics" element={<Services />} />;
                <Route path="/services/it-helpdesk" element={<Services />} />;
                <Route path="/services/affiliate-tracking" element={<Services />} />;
                <Route path="/services/mobile-survey" element={<Services />} />;
                ;
                {/* New AI Content Creation Service */}
                <Route path="/services/ai-content-creation" element={<AIContentCreation />} />;
                ;
                {/* Additional new service routes */}
                <Route path="/services/ai-seo" element={<Services />} />;
                <Route path="/services/interview-assessment" element={<Services />} />;
                <Route path="/services/helpdesk" element={<Helpdesk />} />;
                <Route path="/services/dsr-portal" element={<Services />} />;
                <Route path="/services/security-headers-csp" element={<Services />} />;
                ;
                {/* New AI-powered micro SAAS service routes */}
                <Route path="/services/ai-project-management" element={<Services />} />;
                <Route path="/services/ai-customer-support-automation" element={<Services />} />;
                <Route path="/services/ai-financial-analytics" element={<Services />} />;
                <Route path="/services/ai-marketing-automation" element={<Services />} />;
                ;
                {/* Additional innovative AI services */}
                <Route path="/services/ai-quantum-financial-trading" element={<Services />} />;
                <Route path="/services/ai-predictive-maintenance" element={<Services />} />;
                ;
                {/* Additional innovative AI services */}
                <Route path="/services/ai-autonomous-supply-chain" element={<Services />} />;
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={<Services />} />;
                ;
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-workflow-orchestrator" element={<Services />} />;
                <Route path="/services/ai-data-governance-platform" element={<Services />} />;
                <Route path="/services/ai-customer-experience-analytics" element={<Services />} />;
                ;
                {/* Quantum and advanced services */}
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />;
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />;
                ;
                {/* Revolutionary services */}
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />;
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />;
                <Route path="/enhanced-services-2025" element={<EnhancedNewServices2025 />} />;
                ;
                {/* Sitemap routes */}
                <Route path="/sitemap" element={<Sitemap />} />;
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />;
                ;
                {/* Support routes */}
                <Route path="/support" element={<Support />} />;
                <Route path="/training" element={<Training />} />;
                <Route path="/helpdesk" element={<Helpdesk />} />;
                ;
                {/* Catch-all route */}
                <Route path="*" element={<NotFoundPage />} />;
              </Routes>;
            </Suspense>;
          </main>;
          ;
          <Footer />;
          ;
          {/* Enhanced Components - temporarily disabled due to build issues */}
          {/* <PerformanceOptimizer />;
          <EnhancedAccessibilityEnhancer />;
          <MobileExperienceEnhancer />;
          <ChatAssistant /> */}
        </div>;
      </Router>;
    </EnhancedErrorBoundary>;
  );
});
;
export default App;
export default App;
export default function App(props: any) {
const AISolutions = lazy(() => import('./pages/AIServices').then(module => ({ default: module.default })));
const ITServices = lazy(() => import('./pages/ITServices').then(module => ({ default: module.default })));
// Create placeholder components for missing pages
const HomePage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Zion Tech Group - Home</h1></div>;
const ServicesPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Services</h1></div>;
const AboutPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">About Us</h1></div>;
const ContactPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Contact Us</h1></div>;
const BlogPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Blog</h1></div>;
const NotFoundPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">404 - Page Not Found</h1></div>;
const ComprehensiveServicesPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Comprehensive Services</h1></div>;
const Sitemap = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Sitemap</h1></div>;
const ComprehensiveSitemap = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Comprehensive Sitemap</h1></div>;
const Support = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Support</h1></div>;
const Training = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Training</h1></div>;
const Helpdesk = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Helpdesk</h1></div>;
const RevolutionaryServicesPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Revolutionary Services</h1></div>;
const NewServicesShowcase2025 = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">New Services 2025</h1></div>;
const EnhancedNewServices2025 = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Enhanced Services 2025</h1></div>;
const PricingPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Pricing</h1></div>;
const ComprehensiveServicesShowcase = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Comprehensive Services Showcase</h1></div>;
const QuantumComputing = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Quantum Computing</h1></div>;
const Cybersecurity = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Cybersecurity</h1></div>;
const AIContentCreation = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">AI Content Creation</h1></div>;
// Placeholder components for missing pages
const Home = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Zion Tech Group - Home</h1></div>;
const About = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">About Us</h1></div>;
const Contact = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Contact Us</h1></div>;
const Services = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Services</h1></div>;
const RequestQuote = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Request Quote</h1></div>;
const Dashboard = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Dashboard</h1></div>;
const Login = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Login</h1></div>;
const FAQ = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">FAQ</h1></div>;
const Privacy = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Privacy Policy</h1></div>;
const Terms = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Terms of Service</h1></div>;
const Cookies = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Cookie Policy</h1></div>;
const Pricing = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Pricing</h1></div>;
const Help = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Help</h1></div>;
const News = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">News</h1></div>;
const Careers = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Careers</h1></div>;
const WhitePapers = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">White Papers</h1></div>;
const ComprehensivePricing = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Comprehensive Pricing</h1></div>;
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/search" element={<Services />} />
                <Route path="/services" element={<Services />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesShowcase />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/resources" element={<Services />} />
                <Route path="/case-studies" element={<Services />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Services />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/schedule-demo" element={<Contact />} />
                <Route path="/community" element={<Services />} />
                <Route path="/demo" element={<Services />} />
                <Route path="/team" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<Help />} />
                {/* New pricing guide route */}
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricing />} />
                {/* Service Routes */}
                <Route path="/ai-services" element={<AISolutions />} />
                <Route path="/it-services" element={<ITServices />} />
                {/* New sitemap routes */}
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/solutions/enterprise" element={<SolutionsPage />} />
                <Route path="/solutions/healthcare" element={<SolutionsPage />} />
                {/* Service routes */}
                <Route path="/services/cloud-devops" element={<Services />} />
                <Route path="/services/digital-twin" element={<Services />} />
                <Route path="/services/data-analytics" element={<Services />} />
                <Route path="/services/it-infrastructure" element={<Services />} />
                <Route path="/services/ai-business-intelligence" element={<Services />} />
                <Route path="/services/ai-sales-copilot" element={<Services />} />
                <Route path="/services/cloud-finops-optimizer" element={<Services />} />
                <Route path="/services/ai-compliance-assistant" element={<Services />} />
                <Route path="/services/ai-auto-email-responder" element={<Services />} />
                <Route path="/services/mobile-feedback-surveys" element={<Services />} />
                <Route path="/services/ai-compliance-copilot" element={<Services />} />
                <Route path="/services/llm-content-studio" element={<Services />} />
                <Route path="/services/finops-advisor" element={<Services />} />
                <Route path="/services/returns-management" element={<Services />} />
                <Route path="/services/email-sequencer" element={<Services />} />
                <Route path="/services/podcast-transcription" element={<Services />} />
                <Route path="/services/micro-crm" element={<Services />} />
                <Route path="/services/website-analytics" element={<Services />} />
                <Route path="/services/it-helpdesk" element={<Services />} />
                <Route path="/services/affiliate-tracking" element={<Services />} />
                <Route path="/services/mobile-survey" element={<Services />} />
                {/* Additional new service routes */}
                <Route path="/services/ai-seo" element={<Services />} />
                <Route path="/services/interview-assessment" element={<Services />} />
                <Route path="/services/helpdesk" element={<Helpdesk />} />
                <Route path="/services/dsr-portal" element={<Services />} />
                <Route path="/services/security-headers-csp" element={<Services />} />
                {/* New AI-powered micro SAAS service routes */}
                <Route path="/services/ai-project-management" element={<Services />} />
                <Route path="/services/ai-customer-support-automation" element={<Services />} />
                <Route path="/services/ai-financial-analytics" element={<Services />} />
                <Route path="/services/ai-marketing-automation" element={<Services />} />
                {/* Additional innovative AI services */}
                <Route path="/services/ai-quantum-financial-trading" element={<Services />} />
                <Route path="/services/ai-predictive-maintenance" element={<Services />} />
                {/* Additional innovative AI services */}
                <Route path="/services/ai-autonomous-supply-chain" element={<Services />} />
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={<Services />} />
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-workflow-orchestrator" element={<Services />} />
                <Route path="/services/ai-data-governance-platform" element={<Services />} />
                <Route path="/services/ai-customer-experience-analytics" element={<Services />} />
                {/* Quantum and advanced services */}
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                {/* Revolutionary services */}
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
                <Route path="/enhanced-services-2025" element={<EnhancedNewServices2025 />} />
                {/* Sitemap routes */}
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
                {/* Support routes */}
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                {/* Catch-all route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          {/* Enhanced Components */}
          <PerformanceOptimizer />
          <EnhancedAccessibilityEnhancer />
          <MobileExperienceEnhancer />
          <ChatAssistant />
        </div>
      </Router>
    </ErrorBoundary>
  );';
};';;';
    </EnhancedErrorBoundary>
  );
}
    </ErrorBoundary>
  );
}