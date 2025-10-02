import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesCatalog: React.FC = () => {
  const categories = [
    { title: 'AI Services', path: '/services/ai-services', description: 'ML, DL, and intelligent automation.' },
    { title: 'Micro SaaS', path: '/services/micro-saas', description: 'Ready-to-run SaaS modules.' },
    { title: 'IT Services', path: '/services/it-services', description: 'Cloud, DevOps, and security.' }
  ];

  return (
    <>
      <Helmet>
        <title>Services Catalog - Zion Tech Group</title>
        <meta name="description" content="Browse AI, Micro SaaS, and IT service offerings." />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Services Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <a key={c.title} href={c.path} className="block rounded-lg border border-gray-200 p-6 hover:border-blue-300 transition-colors">
              <div className="text-2xl mb-3">📘</div>
              <div className="text-xl font-semibold mb-1">{c.title}</div>
              <div className="text-gray-600 text-sm">{c.description}</div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesCatalog;

