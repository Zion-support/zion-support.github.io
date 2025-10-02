import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                This privacy policy outlines how Zion Tech Group collects, uses, and protects your personal information.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h3>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you contact us or request our services.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">How We Use Your Information</h3>
              <p className="text-gray-600 mb-4">
                We use your information to provide and improve our services, communicate with you, and comply with legal obligations.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600">
                If you have any questions about this privacy policy, please contact us at privacy@ziontechgroup.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;