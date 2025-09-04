import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your privacy is important to us
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  This privacy policy describes how Zion Tech Group collects, uses, and protects your information.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h3>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you contact us or use our services.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">How We Use Your Information</h3>
                <p className="text-gray-600 mb-4">
                  We use your information to provide, maintain, and improve our services.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600">
                  If you have any questions about this privacy policy, please contact us at kleber@ziontechgroup.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;