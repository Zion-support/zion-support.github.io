import React from 'react';

const Privacy: React.FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-gray-200">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed">
                  Zion Tech Group collects personal information you provide when using our services, 
                  including your name, email address, phone number, and company information. 
                  We also collect technical data such as IP addresses and usage analytics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use your information to provide and improve our services, communicate with you, 
                  process transactions, and ensure security. We do not sell your personal information 
                  to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement industry-standard security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 leading-relaxed">
                  You have the right to access, update, or delete your personal information. 
                  You can also opt out of marketing communications at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, 
                  please contact us at{' '}
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 underline">
                    kleber@ziontechgroup.com
                  </a>
                  {' '}or call us at{' '}
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 underline">
                    +1 302 464 0950
                  </a>.
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-gray-600">
                <p className="text-sm text-gray-400 text-center">
                  Last updated: December 2024 | Zion Tech Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
