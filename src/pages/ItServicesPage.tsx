import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Enterprise IT Solutions</title>
        <meta name="description" content="Comprehensive IT services and infrastructure management with 99.9% uptime guarantee. Starting at $999/month." />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive IT services and infrastructure management with 99.9% uptime guarantee 
                and 24/7 expert support for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItServicesPage;