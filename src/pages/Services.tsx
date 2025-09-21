import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: '🤖'
    },
    {
      title: 'Quantum Computing',
      description: 'Leverage the power of quantum computing for complex problem solving.',
      icon: '⚛️'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with advanced cybersecurity solutions.',
      icon: '🔒'
    },
    {
      title: 'Cloud Services',
      description: 'Scale your operations with our comprehensive cloud solutions.',
      icon: '☁️'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Services</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          We provide comprehensive technology solutions to help your business thrive in the digital age.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;