import React from 'react';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <>
      <SEO title="Contact - Zion Tech Group" />
      <div className="max-w-3xl mx-auto px-4 py-12 text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300 mb-4">Mobile: +1 302 464 0950</p>
        <p className="text-gray-300 mb-4">E-mail: kleber@ziontechgroup.com</p>
        <p className="text-gray-300">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
      </div>
    </>
  );
};

export default Contact;
