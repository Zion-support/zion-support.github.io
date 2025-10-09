import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications. Starting at $79/month." />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="text-cyan-400">SAAS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Affordable, powerful AI-driven tools for modern businesses. 
                50+ ready-to-use applications to boost your productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;