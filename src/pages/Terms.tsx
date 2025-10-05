import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of service for Zion Tech Group's website and services." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl">
                Terms and conditions for using our services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2>Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound
                  by the terms and provision of this agreement.
                </p>
                
                <h2>Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials
                  on our website for personal, non-commercial transitory viewing only.
                </p>
                
                <h2>Disclaimer</h2>
                <p>
                  The materials on our website are provided on an 'as is' basis. We make
                  no warranties, expressed or implied, and hereby disclaim and negate all
                  other warranties.
                </p>
                
                <h2>Limitations</h2>
                <p>
                  In no event shall Zion Tech Group or its suppliers be liable for any
                  damages arising out of the use or inability to use the materials on
                  our website.
                </p>
                
                <h2>Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact
                  us at kleber@ziontechgroup.com or +1 302 464 0950.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;