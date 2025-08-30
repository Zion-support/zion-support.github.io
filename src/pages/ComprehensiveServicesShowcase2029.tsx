import React from 'react';
import { motion } from 'framer-motion';
import { ComprehensiveServicesShowcase2029 } from '../components/ComprehensiveServicesShowcase2029';
import { EnhancedSEO } from '../components/EnhancedSEO';

const ComprehensiveServicesShowcase2029Page: React.FC = (): JSX.Element => {
  return (
    <>
      <EnhancedSEO 
        title="Zion Tech Group 2029 - Comprehensive AI & IT Services Portfolio"
        description="Discover our cutting-edge micro SAAS solutions, AI-powered platforms, and enterprise-grade IT services. Transform your business with innovative technology solutions designed for the future."
        keywords={['AI services', 'IT consulting', 'micro SAAS', 'digital transformation', 'technology solutions', 'Zion Tech Group']}
        type="website"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"
      >
        <ComprehensiveServicesShowcase2029 />
      </motion.div>
    </>
  );
};

export default ComprehensiveServicesShowcase2029Page;