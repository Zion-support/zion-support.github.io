import React from 'react';
import SEO from '../components/SEO';

<<<<<<< HEAD
const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your data."
        keywords={["privacy policy", "data protection", "privacy", "GDPR", "compliance"]}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-300 text-lg">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include your name, email address, 
              phone number, company information, and any other information you choose to provide.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 text-lg">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, communicate with you, and ensure the security of our platform. 
              We do not sell your personal information to third parties.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 text-lg">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. 
              However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 text-lg">
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@ziontechgroup.com or through our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
=======
export default function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Our privacy policy and data protection practices."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-300">Our privacy policy and data protection practices.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
