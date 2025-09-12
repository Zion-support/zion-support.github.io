import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function UltimateServicesShowcase2025() {
  return (
    <>
      <SEO 
        title="Services Showcase 2025 - Zion Tech Group" 
        description="Explore our comprehensive range of AI and technology services for 2025."
        canonical="https://ziontechgroup.com/services-showcase-2025"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Services Showcase 2025</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Discover our cutting-edge AI and technology services designed for the future.
            </p>
          </div>
          
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              Our 2025 services showcase features the latest in artificial intelligence, machine learning, and advanced technology solutions.
            </p>
            <p>
              Contact us to learn more about how our services can help transform your business.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}