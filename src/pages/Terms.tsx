import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service to understand the terms and conditions for using our website and services." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, service terms" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our website 
                and services.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none"
          >
            <p className="text-sm text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 15, 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zion Tech Group's website and services, you accept and agree 
              to be bound by the terms and provision of this agreement. If you do not agree to 
              abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group provides AI and technology solutions including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Artificial Intelligence and Machine Learning solutions</li>
              <li>Micro SaaS development and consulting</li>
              <li>Cloud migration and DevOps services</li>
              <li>Cybersecurity and compliance solutions</li>
              <li>Custom software development</li>
              <li>Data analytics and business intelligence</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts</h2>
            <p className="text-gray-600 mb-6">
              When you create an account with us, you must provide information that is accurate, 
              complete, and current at all times. You are responsible for safeguarding the password 
              and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Uses</h2>
            <p className="text-gray-600 mb-4">
              You may not use our service:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The service and its original content, features, and functionality are and will remain 
              the exclusive property of Zion Tech Group and its licensors. The service is protected 
              by copyright, trademark, and other laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We strive to provide continuous service availability, but we do not guarantee that our 
              service will be available at all times. We reserve the right to modify, suspend, or 
              discontinue the service at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of the service, to understand our practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The information on this website is provided on an "as is" basis. To the fullest extent 
              permitted by law, this Company excludes all representations, warranties, conditions and 
              terms relating to our website and the use of this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
              or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including without limitation, loss of profits, data, use, goodwill, or other 
              intangible losses, resulting from your use of the service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and 
              licensors, and their employees, contractors, agents, officers and directors, from and 
              against any and all claims, damages, obligations, losses, liabilities, costs or debt, 
              and expenses (including but not limited to attorney's fees).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-600 mb-6">
              We may terminate or suspend your account immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be interpreted and governed by the laws of the United States, without 
              regard to its conflict of law provisions. Our failure to enforce any right or provision 
              of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new 
              terms taking effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@ziontechgroup.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;