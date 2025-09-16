import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and optimization.',
      icon: '🤖'
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: '☁️'
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and business intelligence solutions.',
      icon: '📊'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure.',
      icon: '🔒'
    },
    {
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      icon: '📱'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications and e-commerce solutions.',
      icon: '🌐'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Services</h1>
        <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
          We offer comprehensive technology solutions to help your business thrive in the digital age.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
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