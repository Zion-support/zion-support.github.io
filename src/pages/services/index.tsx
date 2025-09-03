import React from "react";
import { Link } from "react-router-dom";

const ServicesIndex: React.FC = () => {
  const links = [
    { to: '/ai-services', label: 'AI Services' },
    { to: '/it-services', label: 'IT Services' },
    { to: '/micro-saas', label: 'Micro SaaS' },
    { to: '/services/ai-email-responder', label: 'AI Email Responder' },
    { to: '/services/automated-follow-ups', label: 'Automated Follow-Ups' },
    { to: '/services/ai-seo-optimizer', label: 'AI SEO Optimizer' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive technology solutions for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {link.label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesIndex;
