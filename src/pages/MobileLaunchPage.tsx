import React from 'react';
import { SEO } from '@/components/SEO';

const MobileLaunchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Mobile Launch - Zion Tech Group" 
        description="Launch your mobile app with our comprehensive mobile development services."
      />
      
      <MobileLaunchHero />
      
      <MobileFeatureShowcase />
      
      <QrCodeDownload />
      
      <CommunityTrust />
      
      <AppTestimonials />
      
      <MobileEmailCapture />
      
      <AppStoreBanner />
    </div>
  );
};

export default MobileLaunchPage;