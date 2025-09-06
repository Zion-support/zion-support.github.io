import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: '🤖'
    },
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud solutions including migration, infrastructure management, and optimization.',
      icon: '☁️'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
      icon: '🔒'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies.',
      icon: '🌐'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our analytics solutions.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of technology services to help your business thrive in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={<span className="text-4xl">{service.icon}</span>}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;