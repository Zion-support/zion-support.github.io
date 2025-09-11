import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            These Terms of Service govern your use of Zion Tech Group's services and website.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            By accessing or using our services, you agree to be bound by these Terms of Service 
            and all applicable laws and regulations.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Use License</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Permission is granted to temporarily download one copy of the materials on our website 
            for personal, non-commercial transitory viewing only.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about these Terms of Service, please contact us at 
            kleber@ziontechgroup.com or call us at +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;