import React from 'react';
import { SEO } from '../components/SEO';

export default function ServicesComparisonPage() {
  return (
    <>
      <SEO
        title='Services Comparison | Zion Tech Group'
        description='Compare our comprehensive range of technology services and find the perfect solution for your business needs.'
        keywords='services comparison, technology services, AI services, IT services, Zion Tech Group'
        canonical='https://ziontechgroup.com/services-comparison'
      />

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Services Comparison
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Compare our comprehensive range of technology services and find
              the perfect solution for your business needs.
            </p>
          </div>

          <div className='mt-16 text-center text-white'>
            <p className='text-lg'>
              This page is under development. Please check back soon for
              detailed service comparisons.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
