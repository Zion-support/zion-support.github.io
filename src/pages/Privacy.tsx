import React from 'react';
import { SEO } from '../components/SEO';

const Privacy: React.FC = () => {
  const lastUpdated = "August 25, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <SEO 
        title="Privacy Policy | Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal information."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="mt-6 text-gray-400">
            Last Updated: {lastUpdated}
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Account credentials and profile information</li>
              <li>Service usage data and preferences</li>
              <li>Communication history with our team</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to provide, maintain, and improve our services.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our services and develop new features</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            <p className="text-gray-300">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>In connection with a business transfer</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-300">
              However, no method of transmission over the internet or electronic storage is 100% secure, 
              so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of certain communications</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> privacy@ziontechgroup.com
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Phone:</strong> +1 302 464 0950
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
