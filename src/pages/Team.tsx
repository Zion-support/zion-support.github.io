import React from 'react';
import { Helmet } from 'react-helmet-async';

const Team: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta
          name="description"
          content="Meet the talented team behind Zion Tech Group - AI and technology experts dedicated to transforming your business."
        />
      </Helmet>
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Team - Zion Tech Group</h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is currently under development. Please check back soon for updates.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600">
              We are working on creating a comprehensive team page that will showcase our talented professionals. Thank you for your patience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;