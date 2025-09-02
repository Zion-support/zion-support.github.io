import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding how we use cookies to enhance your browsing experience
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow us to improve our website based on how you use it.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                <li><strong>Marketing Cookies:</strong> Help us deliver relevant content and advertisements</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300">
                You can control and manage cookies in several ways, including adjusting your browser settings to block or delete cookies.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link className="text-blue-400 hover:underline" to="/">Return Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;