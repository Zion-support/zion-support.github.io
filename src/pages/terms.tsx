import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: January 2025
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
            the terms and provision of this agreement.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
            website for personal, non-commercial transitory viewing only.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Availability</h2>
          <p className="text-gray-600 mb-4">
            We strive to maintain high service availability, but we do not guarantee uninterrupted access 
            to our services. We reserve the right to modify or discontinue services at any time.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
          <p className="text-gray-600 mb-4">
            Users are responsible for maintaining the confidentiality of their account information 
            and for all activities that occur under their account.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of 
            the use or inability to use the materials on our website.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">
              Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a><br />
              Phone: <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a><br />
              Address: 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;