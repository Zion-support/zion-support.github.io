import React from 'react';
import { SEO } from '../components/SEO';

const Terms: React.FC = () => {
  const lastUpdated = "August 25, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <SEO 
        title="Terms of Service | Zion Tech Group"
        description="Read our terms of service to understand the rules and guidelines for using Zion Tech Group services."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
            By using our services, you agree to be bound by these terms.
          </p>
          <div className="mt-6 text-gray-400">
            Last Updated: {lastUpdated}
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) 
              on Zion Tech Group's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-300 mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Service Description</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group provides technology consulting, software development, and digital transformation services. 
              Our services include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>AI and machine learning solutions</li>
              <li>Cybersecurity services</li>
              <li>Cloud infrastructure and DevOps</li>
              <li>Enterprise software development</li>
              <li>Digital transformation consulting</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not engage in any activity that could harm our systems</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
            <p className="text-gray-300 mb-4">
              Payment for services is due according to the terms specified in your service agreement. 
              Late payments may result in service suspension or termination.
            </p>
            <p className="text-gray-300">
              All fees are non-refundable unless otherwise specified in your service agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content, features, and functionality on our website and services, including but not limited to 
              text, graphics, logos, and software, are owned by Zion Tech Group and are protected by copyright, 
              trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
              of our services, to understand our practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
              or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be interpreted and governed by the laws of the State of Delaware, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> legal@ziontechgroup.com
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

export default Terms;
