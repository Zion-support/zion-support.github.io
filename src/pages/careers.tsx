import React from 'react';
import { SEO } from '../components/SEO';

const Careers: React.FC = () => {
  return (
    <>
      <SEO title="Careers - Zion Tech Group" />
      <div className="max-w-5xl mx-auto px-4 py-12 text-white">
        <h1 className="text-4xl font-bold mb-4">Careers</h1>
        <p className="text-gray-300">We are always looking for great talent. Reach out to us.</p>
      </div>
    </>
  );
};

export default Careers;
