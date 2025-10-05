import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              Last updated: January 1, 2024
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-lg text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-lg text-gray-300 mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and ensure the security of our platform.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
            <p className="text-lg text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-lg text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-lg text-gray-300 mb-6">
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@zion.app.
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Privacy;