import React from 'react';

const Terms: React.FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-gray-200">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using Zion Tech Group's services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Services Description</h2>
                <p className="text-gray-300 leading-relaxed">
                  Zion Tech Group provides AI-powered technology solutions, IT services, and Micro SAAS applications. 
                  Our services include but are not limited to artificial intelligence solutions, cloud computing, 
                  cybersecurity, and custom software development.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
                <p className="text-gray-300 leading-relaxed">
                  You are responsible for providing accurate information, maintaining the security of your account, 
                  and using our services in compliance with applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed">
                  All content, software, and materials provided by Zion Tech Group are protected by intellectual 
                  property rights. You may not copy, modify, or distribute our proprietary materials without permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  Zion Tech Group shall not be liable for any indirect, incidental, or consequential damages 
                  arising from the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at{' '}
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

export default Terms;
