import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function HelpCenter() {
  return (
    <>
      <SEO 
        title="Help Center - Zion Tech Group" 
        description="Get help and support for using Zion Tech Group's marketplace and services."
        canonical="https://ziontechgroup.com/help"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to common questions and get support for using our platform.
            </p>
          </div>
          
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              Welcome to the Zion Tech Group Help Center. Here you can find information about using our marketplace, connecting with other users, and getting the most out of our platform.
            </p>
            <p>
              If you need additional assistance, please contact our support team at support@ziontechgroup.com.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}