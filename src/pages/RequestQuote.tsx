
import React from 'react';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function RequestQuote() {
  return (
<<<<<<< HEAD
    <>
      <SEO
        title="Request a Quote - Zion Tech Group"
        description="Get a customized quote for your AI and tech project needs. Our experts will provide you with detailed pricing and solutions."
        keywords="request quote, AI project quote, tech services quote, custom pricing, project estimation"
        canonical="https://ziontechgroup.com/request-quote"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Request a Quote</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get a customized quote for your AI and tech project needs
=======
    <div className="min-h-screen bg-background">
      <SEO 
        title="Request Quote - Zion Tech Group" 
        description="Get a custom quote for your AI and tech project needs from Zion Tech Group."
        keywords="quote, pricing, AI services, tech services, project quote, Zion Tech Group"
        canonical="https://ziontechgroup.com/request-quote"
      />
      
      <AppHeader />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tell us about your project and we'll connect you with the perfect talent and services for your needs
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <QuoteRequestForm />
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </>
=======
      </main>
      
      <Footer />
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
  );
}
