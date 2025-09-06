import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find all the pages and sections of our website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-blue-600 hover:underline">About</Link></li>
              <li><Link to="/services" className="text-blue-600 hover:underline">Services</Link></li>
              <li><Link to="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-blue-600 hover:underline">AI Services</Link></li>
              <li><Link to="/it-services" className="text-blue-600 hover:underline">IT Services</Link></li>
              <li><Link to="/services/cybersecurity" className="text-blue-600 hover:underline">Cybersecurity</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="text-blue-600 hover:underline">Pricing</Link></li>
              <li><Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link></li>
              <li><Link to="/help" className="text-blue-600 hover:underline">Help</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
