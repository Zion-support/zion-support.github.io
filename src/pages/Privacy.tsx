import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We collect information you provide directly to us, such as when you create an account, 
            contact us, or use our services. This may include your name, email address, phone number, 
            and other information you choose to provide.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We use the information we collect to provide, maintain, and improve our services, 
            communicate with you, and ensure the security of our platform.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at 
            kleber@ziontechgroup.com or call us at +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;