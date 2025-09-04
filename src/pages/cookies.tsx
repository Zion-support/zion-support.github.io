import React from 'react';
import { SEO } from '../components/SEO';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Information about how Zion Tech Group uses cookies and similar technologies on our website."
      />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              <strong>Last updated:</strong> September 3, 2025
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Are Cookies</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit our website. They help us provide you with a better experience.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies to understand how you use our website, improve your experience, 
              and provide personalized content and services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of Cookies</h2>
            <ul className="text-gray-600 mb-4 list-disc pl-6">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies through your browser settings. However, disabling 
              certain cookies may affect the functionality of our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                <strong>Email:</strong> kleber@ziontechgroup.com<br />
                <strong>Phone:</strong> +1 302 464 0950<br />
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;