import React from 'react';';
import {
Helmet
} from 'react-helmet-async';';

const Privacy: React.FC = () => {,
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group - How we collect, use, and protect your personal information." />";
        <meta name="robots" content="index, follow" />";
      </Helmet>
      
      <div className="min-h-screen bg-white">";
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16">";,
          <div className="prose prose-lg max-w-none">";
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>";
            
            <p className="text-lg text-gray-600 mb-8">";
              Last updated: January 2, 2025,
            </p>

            <div className="space-y-8">";
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>";
                <p className="text-gray-600 mb-4">";
                  We collect information you provide directly to us, such as when you create an account, 
                  subscribe to our newsletter, or contact us for support.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">";
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Account credentials</li>
                  <li>Communication preferences</li>
                  <li>Usage data and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>";
                <p className="text-gray-600 mb-4">";
                  We use the information we collect to: </p>,
                <ul className="list-disc list-inside text-gray-600 space-y-2">";
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>";
                <p className="text-gray-600 mb-4">";
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>";
                <p className="text-gray-600 mb-4">";
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>";
                <p className="text-gray-600 mb-4">";
                  You have the right to access, update, or delete your personal information. 
                  You may also opt out of certain communications from us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>";
                <p className="text-gray-600 mb-4">";
                  If you have any questions about this Privacy Policy, please contact us at: </p>,
                <div className="bg-gray-50 p-4 rounded-lg">";
                  <p className="text-gray-600">";
                    Email: privacy@ziontechgroup.com<br />,
                    Phone: +1 (555) 123-4567<br />,
                    Address: 123 Tech Street, Innovation City, IC 12345,
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;