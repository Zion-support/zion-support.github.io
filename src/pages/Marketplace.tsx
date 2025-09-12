import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Marketplace() {
  return (
    <>
      <SEO 
        title="Marketplace - Zion Tech Group" 
        description="Browse our marketplace of AI specialists, services, and technology solutions."
        canonical="https://ziontechgroup.com/marketplace"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Marketplace</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Discover talented AI specialists, innovative services, and cutting-edge technology solutions.
            </p>
          </div>
          
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              Our marketplace connects businesses with the best AI talent and technology solutions available.
            </p>
            <p>
              Browse through our curated selection of professionals and services to find exactly what you need.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}