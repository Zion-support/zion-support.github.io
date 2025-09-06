import React from 'react';
import { Link } from 'react-router-dom';

const ComprehensiveSitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete overview of all pages and sections on our website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-blue-600 hover:underline">About</Link></li>
              <li><Link to="/services" className="text-blue-600 hover:underline">Services</Link></li>
              <li><Link to="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
              <li><Link to="/pricing" className="text-blue-600 hover:underline">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-blue-600 hover:underline">AI Services</Link></li>
              <li><Link to="/it-services" className="text-blue-600 hover:underline">IT Services</Link></li>
              <li><Link to="/services/cybersecurity" className="text-blue-600 hover:underline">Cybersecurity</Link></li>
              <li><Link to="/solutions" className="text-blue-600 hover:underline">Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link></li>
              <li><Link to="/help" className="text-blue-600 hover:underline">Help</Link></li>
              <li><Link to="/support" className="text-blue-600 hover:underline">Support</Link></li>
              <li><Link to="/white-papers" className="text-blue-600 hover:underline">White Papers</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link to="/careers" className="text-blue-600 hover:underline">Careers</Link></li>
              <li><Link to="/news" className="text-blue-600 hover:underline">News</Link></li>
              <li><Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSitemap;