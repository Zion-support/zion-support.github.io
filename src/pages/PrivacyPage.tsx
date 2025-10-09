import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection</title>
        <meta name="description" content="Privacy policy and data protection information for Zion Tech Group services." />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy <span className="text-cyan-400">Policy</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Privacy policy and data protection information for Zion Tech Group services. 
                We are committed to protecting your privacy and data security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;