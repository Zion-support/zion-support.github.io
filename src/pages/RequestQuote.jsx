import React from 'react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { QuoteRequestForm } from '@/components/QuoteRequestForm';

export default function RequestQuote() {
  return (
    <>
      <SEO 
        title="Request a Quote - Zion Tech Group" 
        description="Get a customized quote for your IT services, AI solutions, or tech projects. Our team will provide you with a detailed estimate tailored to your needs." 
        keywords="request quote, IT services quote, AI solutions quote, tech project estimate, custom pricing" 
        canonical="https://ziontechgroup.com/request-quote"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a personalized estimate for your IT services, AI solutions, or tech projects. 
              Our team will analyze your requirements and provide you with a detailed quote.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <QuoteRequestForm />
          </div>
          
          {/* Additional Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-300 mb-6">
              For urgent requests or to speak with our team directly, contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Email Us
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Contact Page
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
