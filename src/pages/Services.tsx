import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Artificial intelligence and machine learning solutions for business automation and optimization.',
      icon: '🤖'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure management and support services.',
      icon: '💻'
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud migration, management, and optimization services.',
      icon: '☁️'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation.',
      icon: '🚀'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced cybersecurity solutions to protect your business.',
      icon: '🔒'
    },
    {
      title: 'Data Analytics',
      description: 'Data analysis and business intelligence solutions.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;