import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import ComprehensiveServicesShowcase from '@/components/ComprehensiveServicesShowcase';

const ComprehensiveServices: React.FC = () => {
  return (
    <>
      <SEO 
        title="Comprehensive Technology Services | Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge micro SAAS services, AI solutions, and emerging technology platforms designed to transform your business."
        keywords="AI services, cybersecurity, blockchain, IoT, quantum computing, AR/VR, space technology, synthetic biology, brain-computer interface, sustainable energy, autonomous vehicles"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ComprehensiveServicesShowcase />
      </motion.div>
    </>
  );
};

export default ComprehensiveServices;