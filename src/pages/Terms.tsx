import React from 'react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group" 
        description="Read the terms and conditions governing your use of Zion Tech Group's marketplace platform." 
        canonical="https://ziontechgroup.com/terms"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our platform.
            </p>
          </div>
          
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              By using Zion Tech Group's platform, you agree to be bound by these terms and conditions.
            </p>
            <p>
              For the complete terms of service, please contact us at legal@ziontechgroup.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}