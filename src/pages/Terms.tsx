import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Terms and conditions for using our services
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  These terms of service govern your use of Zion Tech Group's services.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
                <p className="text-gray-600 mb-4">
                  By using our services, you agree to be bound by these terms.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Description</h3>
                <p className="text-gray-600 mb-4">
                  We provide technology solutions including AI, IT, and Micro SaaS services.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600">
                  If you have any questions about these terms, please contact us at kleber@ziontechgroup.com
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