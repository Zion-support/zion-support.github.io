import React, { Suspense, lazy } from 'react';

// Lazy load components to reduce initial bundle size
const SEO = lazy(() => import("@/components/SEO").then(m => ({ default: m.SEO })));
const HeroSection = lazy(() => import("@/components/HeroSection").then(m => ({ default: m.HeroSection })));
const CategoriesSection = lazy(() => import("@/components/CategoriesSection"));

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <SEO 
          title="Zion Tech Group - Next-Generation Technology Solutions"
          description="Empowering businesses with cutting-edge AI, robust IT infrastructure, and innovative Micro SaaS solutions. Transform your digital future with our expert team."
          keywords="AI services, IT solutions, Micro SaaS, technology consulting, digital transformation"
        />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-200 animate-pulse" />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
        <CategoriesSection />
      </Suspense>
    </div>
  );
};

export default Home;