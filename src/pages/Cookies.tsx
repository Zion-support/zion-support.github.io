import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              How we use cookies and similar technologies
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookie Policy</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  This cookie policy explains how Zion Tech Group uses cookies and similar technologies.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Are Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are stored on your device when you visit our website.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">How We Use Cookies</h3>
                <p className="text-gray-600 mb-4">
                  We use cookies to improve your experience, analyze usage, and provide personalized content.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600">
                  If you have any questions about our cookie policy, please contact us at kleber@ziontechgroup.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;