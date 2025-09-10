import React from 'react';
import SEO from '../components/SEO';

<<<<<<< HEAD
const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how we use cookies and similar technologies."
        keywords={["cookie policy", "cookies", "tracking", "privacy"]}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Cookie Policy</h1>
          <p className="text-xl text-gray-300">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">What Are Cookies</h2>
            <p className="text-gray-300 text-lg">
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit our website. They help us provide you with a better experience by remembering your 
              preferences and enabling certain functionality.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 text-lg">
              We use cookies to analyze site traffic, personalize content, and improve our services. 
              We also use cookies to remember your preferences and provide you with a more relevant experience.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Managing Cookies</h2>
            <p className="text-gray-300 text-lg">
              You can control and manage cookies through your browser settings. However, please note that 
              disabling cookies may affect the functionality of our website and your user experience.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 text-lg">
              If you have any questions about our use of cookies, please contact us at 
              privacy@ziontechgroup.com or through our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
=======
export default function Cookies() {
  return (
    <>
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Our cookie policy and usage information."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
            <p className="text-xl text-slate-300">Our cookie policy and usage information.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
