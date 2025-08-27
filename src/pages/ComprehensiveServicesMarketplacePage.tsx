import React from 'react';
import { SEO } from '@/components/SEO';
import ComprehensiveServicesMarketplace from '@/components/ComprehensiveServicesMarketplace';

export default function ComprehensiveServicesMarketplacePage() {
  return (
    <>
      <SEO 
        title="Comprehensive Services Marketplace - Zion Tech Group" 
        description="Discover our complete portfolio of cutting-edge technology solutions, from AI and quantum computing to cybersecurity and enterprise solutions. Transform your business with Zion Tech Group's innovative services." 
        keywords="AI services, quantum computing, cybersecurity, cloud solutions, enterprise solutions, micro SaaS, Zion Tech Group, technology services, digital transformation" 
        url="https://ziontechgroup.com/comprehensive-services-marketplace"
      />
      <ComprehensiveServicesMarketplace />
    </>
  );
}