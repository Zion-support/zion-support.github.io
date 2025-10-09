import React from 'react';
import { Helmet } from 'react-helmet-async';

const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group | Business Modernization</title>
        <meta name="description" content="Complete digital transformation of your business processes with cutting-edge technology. Custom pricing available." />
        <link rel="canonical" href="https://ziontechgroup.com/digital-transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Digital <span className="text-cyan-400">Transformation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Complete digital transformation of your business processes with cutting-edge technology 
                and expert consultation to modernize your operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;