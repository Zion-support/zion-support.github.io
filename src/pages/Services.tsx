import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Custom artificial intelligence solutions tailored to your business needs.',
      icon: '🤖'
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: '☁️'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced data analysis and business intelligence solutions.',
      icon: '📊'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: '🔒'
    },
    {
      title: 'Software Development',
      description: 'Custom software development and system integration.',
      icon: '💻'
    },
    {
      title: 'Consulting',
      description: 'Strategic technology consulting and digital transformation.',
      icon: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;