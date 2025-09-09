import React from 'react';
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Our terms of service and user agreement"
        canonical="/terms"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              These terms of service govern your use of our website and services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these terms, please contact us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;