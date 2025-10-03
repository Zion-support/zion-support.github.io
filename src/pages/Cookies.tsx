import React from 'react';
;
const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">,
  Learn about how we use cookies and similar technologies on our website.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookie Policy</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">,
  This cookie policy explains how Zion Tech Group uses cookies and similar technologies.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Are Cookies</h3>
              <p className="text-gray-600 mb-4">,
  Cookies are small text files that are placed on your device when you visit our website.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">How We Use Cookies</h3>
              <p className="text-gray-600 mb-4">,
  We use cookies to improve your experience, analyze website traffic, and personalize content.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Managing Cookies</h3>
              <p className="text-gray-600">,
  You can control and delete cookies through your browser settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;