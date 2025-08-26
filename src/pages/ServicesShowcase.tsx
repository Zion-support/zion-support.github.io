import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EnhancedServicesShowcase } from '@/components/EnhancedServicesShowcase';

export default function ServicesShowcase() {
  return (
    <>
      <Helmet>
        <title>Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology services portfolio including AI solutions, cloud services, cybersecurity, and digital transformation." />
        <meta name="keywords" content="technology services, AI solutions, cloud services, cybersecurity, digital transformation, IT consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/services-showcase" />
      </Helmet>
      
      <EnhancedServicesShowcase />
    </>
  );
}