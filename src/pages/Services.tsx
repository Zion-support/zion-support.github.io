import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and optimization.',
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    },
    {
      title: 'Consulting',
      description: 'Expert technology consulting to help you make informed decisions.',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;