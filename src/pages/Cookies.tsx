
import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What are cookies?</h2>
          <p className="text-gray-600 mb-6">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How we use cookies</h2>
          <p className="text-gray-600 mb-6">
            We use cookies to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Remember your preferences and settings</li>
            <li>Analyze how you use our website to improve our services</li>
            <li>Provide personalized content and advertisements</li>
            <li>Ensure the security of our website</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Managing cookies</h2>
          <p className="text-gray-600 mb-6">
            You can control and manage cookies in your browser settings. However, please note that disabling 
            certain cookies may affect the functionality of our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact us</h2>
          <p className="text-gray-600">
            If you have any questions about our use of cookies, please contact us at{' '}
            <a href="mailto:privacy@ziontechgroup.com" className="text-blue-600 hover:underline">
              privacy@ziontechgroup.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;

