import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import PromotionalBanner from '../PromotionalBanner';
import NewFeaturesShowcase from '../NewFeaturesShowcase';
import MarketingSection from '../MarketingSection';

const PromotionalLanding: React.FC = () => {
  return (
    <>
      <SEO 
        title="Revolutionary Features - Zion Tech Group"
        description="Discover the latest AI-powered innovations and cutting-edge technology solutions that will transform your business operations."
        keywords="new features, AI innovation, business transformation, technology solutions, cutting-edge"
      />
      
      <div className="min-h-screen">
        {/* Multiple Promotional Banners */}
        <PromotionalBanner variant="limited-time" />
        <PromotionalBanner variant="new-feature" />
        
        {/* New Features Showcase */}
        <Suspense fallback={<LoadingSpinner />}>
          <NewFeaturesShowcase />
        </Suspense>
        
        {/* Marketing Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <MarketingSection />
        </Suspense>
        
        {/* Additional Promotional Banner */}
        <PromotionalBanner variant="default" />
      </div>
    </>
  );
};

export default PromotionalLanding;