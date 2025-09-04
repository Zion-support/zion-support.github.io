import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">FAQ</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Frequently Asked Questions
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What services do you offer?
                </h3>
                <p className="text-gray-600">
                  We offer comprehensive AI services, IT solutions, Micro SaaS platforms, 
                  cybersecurity, cloud services, and data analytics solutions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How can I get started?
                </h3>
                <p className="text-gray-600">
                  Contact us through our contact form or call us at +1 302 464 0950 
                  to discuss your needs and get a custom quote.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you offer support?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide 24/7 support for all our services with different 
                  support levels based on your needs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What is your pricing model?
                </h3>
                <p className="text-gray-600">
                  We offer flexible pricing models including monthly subscriptions, 
                  project-based pricing, and custom enterprise solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;