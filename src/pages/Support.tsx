import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            We're here to help you succeed. Get the support you need for your projects.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Portal Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're building a comprehensive support portal with documentation, FAQs, and ticketing system.
          </p>
          <a 
            href="/contact" 
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;