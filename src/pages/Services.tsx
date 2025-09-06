import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    { name: 'AI Services', href: '/services/ai-services', description: 'Artificial Intelligence Solutions' },
    { name: 'IT Services', href: '/services/it-services', description: 'Information Technology Solutions' },
    { name: 'Micro SaaS', href: '/services/micro-saas', description: 'Micro Software as a Service' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security Solutions' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.href}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;