import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                These terms govern your use of Zion Tech Group's services and website.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
              <p className="text-gray-600 mb-4">
                By accessing and using our services, you accept and agree to be bound by these terms.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Description</h3>
              <p className="text-gray-600 mb-4">
                We provide AI, technology consulting, and software development services as described on our website.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600">
                For questions about these terms, contact us at legal@ziontechgroup.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;