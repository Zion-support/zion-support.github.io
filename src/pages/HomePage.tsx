import React, { memo, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServiceGrid from '../components/ServiceGrid';
import EnhancedSEO from '../components/EnhancedSEO';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import { microSAASServices, aiServices, itServices, specializedServices } from '../data/services';

// Lazy load heavy components
const ContentPromotionBanner = lazy(() => import('../components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('../components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('../components/DynamicContentShowcase'));

// Loading skeleton
const LoadingSkeleton = memo(() => (
  <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
    <div className="text-gray-500">Loading...</div>
  </div>
));

LoadingSkeleton.displayName = 'LoadingSkeleton';

const HomePage: React.FC = memo(() => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered enterprise solutions and digital transformation services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ],
    offers: {
      '@type': 'Offer',
      name: 'AI Enterprise Transformation Services',
      description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
      price: '50000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <HelmetProvider>
      <EnhancedSEO structuredData={structuredData} />
      <PerformanceMonitor />
      <AccessibilityEnhancer />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main id="main-content" role="main" aria-label="Main content">
          <HeroSection />
          
          {/* Micro SAAS Services */}
          <ServiceGrid
            services={microSAASServices}
            title="Micro SAAS Solutions"
            description="Powerful AI-driven software solutions for modern businesses"
            showPricing={true}
            maxItems={8}
          />
          
          {/* AI Services */}
          <ServiceGrid
            services={aiServices.map(service => ({
              title: service.name,
              description: `AI-powered ${service.name.toLowerCase()} solutions`,
              icon: '🤖',
              price: 'Contact Us',
              features: ['AI-powered automation', 'Machine learning', 'Advanced analytics', 'Custom integration'],
              benefits: ['Increased efficiency', 'Cost reduction', 'Better insights', 'Scalable solutions'],
              link: service.href,
              category: 'AI Services',
              rating: 4.8,
              users: '1,000+',
              freeTrial: '14 days'
            }))}
            title="AI Services"
            description="Comprehensive artificial intelligence solutions for every business need"
            showPricing={false}
            maxItems={12}
          />
          
          {/* IT Services */}
          <ServiceGrid
            services={itServices.map(service => ({
              title: service.name,
              description: `Professional ${service.name.toLowerCase()} services`,
              icon: '💻',
              price: 'Contact Us',
              features: ['Expert consultation', 'Custom solutions', '24/7 support', 'Scalable infrastructure'],
              benefits: ['Reliable service', 'Expert support', 'Cost-effective', 'Future-proof'],
              link: service.href,
              category: 'IT Services',
              rating: 4.9,
              users: '500+',
              freeTrial: 'Consultation'
            }))}
            title="IT Services"
            description="Professional IT solutions and consulting services"
            showPricing={false}
            maxItems={8}
          />
          
          {/* Specialized Services */}
          <ServiceGrid
            services={specializedServices.map(service => ({
              title: service.name,
              description: `Advanced ${service.name.toLowerCase()} solutions`,
              icon: '🚀',
              price: 'Contact Us',
              features: ['Cutting-edge technology', 'Expert implementation', 'Custom development', 'Ongoing support'],
              benefits: ['Innovation leadership', 'Competitive advantage', 'Future-ready', 'Expert guidance'],
              link: service.href,
              category: 'Specialized',
              rating: 4.9,
              users: '200+',
              freeTrial: 'Consultation'
            }))}
            title="Specialized Solutions"
            description="Cutting-edge technology solutions for next-generation businesses"
            showPricing={false}
            maxItems={6}
          />
          
          {/* Lazy loaded components */}
          <Suspense fallback={<LoadingSkeleton />}>
            <ContentPromotionBanner />
          </Suspense>
          
          <Suspense fallback={<LoadingSkeleton />}>
            <ContentCarousel />
          </Suspense>
          
          <Suspense fallback={<LoadingSkeleton />}>
            <DynamicContentShowcase />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;