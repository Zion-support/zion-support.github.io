import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
        Leading technology solutions in AI, cybersecurity, cloud, and digital transformation.
      </p>
      <div className="flex gap-4">
        <Link to="/services" className="btn-primary">Explore Services</Link>
        <Link to="/contact" className="btn-secondary">Contact Us</Link>
      </div>
    </div>
  );
}

