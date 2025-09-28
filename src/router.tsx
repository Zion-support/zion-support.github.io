import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorFallback from './components/ErrorFallback';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { PageLoader } from './components/EnhancedLoadingSpinner';
import SystemDashboard from './components/SystemDashboard';
import AccessibilityTester from './components/AccessibilityTester';
import PerformanceProfiler from './components/PerformanceProfiler';
import ComprehensiveMonitoringDashboard from './components/ComprehensiveMonitoringDashboard';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Layout component
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white">
    <SkipLink />
    <ScrollToTop />
    <Header />
    
    <main id="main-content">
      <Suspense fallback={<PageLoader text="Loading page..." />}>
        {children}
      </Suspense>
    </main>
    
    <Footer />
    
    {/* Development Tools */}
    <SystemDashboard />
    <AccessibilityTester />
    <PerformanceProfiler />
  </div>
);

// Create router with future flags
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
    errorElement: <ErrorFallback />,
  },
  {
    path: '/blog',
    element: <Layout><Blog /></Layout>,
    errorElement: <ErrorFallback />,
  },
  {
    path: '/contact',
    element: <Layout><Contact /></Layout>,
    errorElement: <ErrorFallback />,
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>,
    errorElement: <ErrorFallback />,
  },
  {
    path: '/services',
    element: <Layout><Services /></Layout>,
    errorElement: <ErrorFallback />,
  },
  {
    path: '/portfolio',
    element: <Layout><Portfolio /></Layout>,
    errorElement: <ErrorFallback />,
  },
  {
    path: '/monitoring',
    element: <Layout><ComprehensiveMonitoringDashboard /></Layout>,
    errorElement: <ErrorFallback />,
  },
  {
    path: '*',
    element: <Layout><NotFound /></Layout>,
    errorElement: <ErrorFallback />,
  },
], {
  future: {
    v7_relativeSplatPath: true,
  },
});

// Router component for backward compatibility
export const AppRouter: React.FC = () => (
  <EnhancedErrorBoundary>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </EnhancedErrorBoundary>
);