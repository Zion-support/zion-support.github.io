import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms</title>
        <meta name="description" content="Terms of service and legal terms for Zion Tech Group services and website usage." />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of <span className="text-cyan-400">Service</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Terms of service and legal terms for Zion Tech Group services and website usage. 
                Please read our terms carefully before using our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;