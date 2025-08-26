import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Learn about the terms and conditions governing our services." />
        <meta property="og:title" content="Terms of Service — Zion Tech Group" />
        <meta property="og:description" content="Terms of Service for Zion Tech Group. Learn about the terms and conditions governing our services." />
        <meta property="og:url" content="https://ziontechgroup.com/terms" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms and conditions govern your use of Zion Tech Group's services and website.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Service Description</h3>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group provides technology consulting, development, and digital transformation services including but not limited to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• AI Solutions and Machine Learning</li>
                  <li>• Cloud Migration and DevOps</li>
                  <li>• Cybersecurity and IT Infrastructure</li>
                  <li>• Digital Transformation Consulting</li>
                  <li>• Custom Software Development</li>
                  <li>• Technology Strategy and Planning</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Service Terms</h3>
                <p className="text-gray-300 mb-4">When you engage our services, the following terms apply:</p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Services are provided on an "as-is" basis</li>
                  <li>• Project timelines and deliverables are estimates and may vary</li>
                  <li>• Payment terms are specified in individual service agreements</li>
                  <li>• Intellectual property rights are governed by separate agreements</li>
                  <li>• Confidentiality obligations apply to all engagements</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">User Responsibilities</h3>
                <p className="text-gray-300 mb-4">As a user of our services, you agree to:</p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Use services only for lawful purposes</li>
                  <li>• Not interfere with service operation</li>
                  <li>• Comply with all applicable laws and regulations</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Intellectual Property</h3>
                <p className="text-gray-300 mb-6">
                  All content, features, and functionality on this website, including but not limited to text, graphics, logos, and software, are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Confidentiality</h3>
                <p className="text-gray-300 mb-6">
                  We maintain strict confidentiality regarding client information and project details. All proprietary and confidential information shared with us is protected and will not be disclosed to third parties without explicit consent, except as required by law.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Limitation of Liability</h3>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Warranty Disclaimer</h3>
                <p className="text-gray-300 mb-6">
                  Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Termination</h3>
                <p className="text-gray-300 mb-6">
                  Either party may terminate this agreement at any time with written notice. Upon termination:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• All outstanding obligations must be fulfilled</li>
                  <li>• Access to services will be discontinued</li>
                  <li>• Confidentiality obligations will continue to apply</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Governing Law</h3>
                <p className="text-gray-300 mb-6">
                  These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of San Francisco County, California.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Changes to Terms</h3>
                <p className="text-gray-300 mb-6">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after such changes constitutes acceptance of the modified terms.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Entire Agreement</h3>
                <p className="text-gray-300 mb-6">
                  These terms constitute the entire agreement between you and Zion Tech Group regarding the use of our services, superseding any prior agreements between you and Zion Tech Group relating to your use of our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us if you need clarification on any of our terms and conditions.
            </p>
            <a
              href="mailto:legal@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Legal Team
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;