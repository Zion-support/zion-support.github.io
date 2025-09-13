import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function MicroSaasServicesPage() {
  return (
    <>
      <SEO 
        title="Micro SaaS Services - Zion Tech Group" 
        description="Explore our micro SaaS solutions designed for modern businesses."
        canonical="https://ziontechgroup.com/micro-saas"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Micro SaaS Services</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Discover our innovative micro SaaS solutions designed for modern businesses.
            </p>
          </div>
          
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              Our micro SaaS services provide focused, specialized solutions that help businesses streamline operations and improve efficiency.
            </p>
            <p>
              Contact us to learn more about how our micro SaaS solutions can benefit your business.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
