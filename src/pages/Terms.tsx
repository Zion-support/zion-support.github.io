
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use License</h2>
          <p className="text-gray-600 mb-6">
            Permission is granted to temporarily download one copy of the materials on our website for personal, 
            non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Disclaimer</h2>
          <p className="text-gray-600 mb-6">
            The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, 
            and hereby disclaim and negate all other warranties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitations</h2>
          <p className="text-gray-600 mb-6">
            In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use 
            or inability to use the materials on our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@ziontechgroup.com" className="text-blue-600 hover:underline">
              legal@ziontechgroup.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

