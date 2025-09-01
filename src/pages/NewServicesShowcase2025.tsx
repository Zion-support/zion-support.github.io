import React from 'react';
import { Link } from 'react-router-dom';

const NewServicesShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">New Services Showcase 2025</h1>
        <p className="text-gray-300 mb-8">
          Explore our latest services portfolio. This page is being enhanced with comprehensive content.
        </p>
        <Link to="/services" className="inline-block bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold">
          Browse Services
        </Link>
      </div>
    </div>
  );
};

export default NewServicesShowcase2025;