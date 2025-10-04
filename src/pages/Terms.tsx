import React from "react";
import { Helmet } from "react-helmet-async";

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Learn about our terms and conditions for using our services." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                These Terms of Service govern your use of Zion Tech Group's services and website.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing or using our services, you agree to be bound by these terms and conditions.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Services</h2>
              <p className="text-gray-600 mb-6">
                You may use our services only for lawful purposes and in accordance with these terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
