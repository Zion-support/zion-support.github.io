import React from 'react';
import Link from 'next/link';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we protect and handle your personal information
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Contact us through our website forms</li>
                  <li>Request a quote or consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Apply for employment opportunities</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing materials (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="text-center pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;