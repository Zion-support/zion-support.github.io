import React from 'react';
import { EnhancedServicesShowcase } from '@/components/EnhancedServicesShowcase';
import { SEO } from '@/components/SEO';

export default function EnhancedServicesPage() {
  return (
    <>
      <SEO 
        title="Enhanced Micro SAAS Services 2025 - Zion Tech Group"
        description="Discover our comprehensive collection of cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, and more. Transform your business with innovative technology services."
        canonical="/enhanced-services"
        url="https://ziontechgroup.com/enhanced-services"
      />
      
      <EnhancedServicesShowcase />
    </>
  );
}