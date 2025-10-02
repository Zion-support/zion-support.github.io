import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and technology solutions." />
      </Helmet>
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us - Zion Tech Group</h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is currently under development. Please check back soon for updates.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600">
              We're working hard to bring you the best content and features. Thank you for your patience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
