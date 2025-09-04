import React from 'react';
import { SEO } from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
      />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              <strong>Last updated:</strong> September 3, 2025
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, and communicate with you.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                <strong>Email:</strong> kleber@ziontechgroup.com<br />
                <strong>Phone:</strong> +1 302 464 0950<br />
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;