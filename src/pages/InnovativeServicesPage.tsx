import React from 'react';
import { EnhancedInnovativeServicesShowcase } from '../components/EnhancedInnovativeServicesShowcase';
import { SEO } from '../components/SEO';

const InnovativeServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Innovative Micro SAAS Services 2025 | Zion Tech Group"
        description="Discover cutting-edge technology solutions including AI-powered automation, quantum computing, blockchain, IoT, and space technology. Transform your business with our innovative micro SAAS services."
        keywords="AI services, quantum computing, blockchain solutions, IoT platforms, space technology, micro SAAS, innovative technology, Zion Tech Group"
        url="https://ziontechgroup.com/innovative-services"
      />
      <div className="pt-20">
        <EnhancedInnovativeServicesShowcase />
      </div>
    </>
  );
};

export default InnovativeServicesPage;