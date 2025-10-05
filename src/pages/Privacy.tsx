import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy policy for Zion Tech Group's website and services." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl">
                How we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2>Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you
                  create an account, contact us, or use our services.
                </p>
                
                <h2>How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve
                  our services and communicate with you.
                </p>
                
                <h2>Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information
                  to third parties without your consent.
                </p>
                
                <h2>Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or
                  destruction.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us
                  at kleber@ziontechgroup.com or +1 302 464 0950.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;