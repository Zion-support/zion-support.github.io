<<<<<<< HEAD
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">IT Solutions</h3>
            <p className="text-gray-600">
              Comprehensive IT infrastructure and support services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Services</h3>
            <p className="text-gray-600">
              Artificial intelligence solutions and automation services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Blockchain</h3>
            <p className="text-gray-600">
              Blockchain development and Web3 solutions.
            </p>
=======

    allServices = [...allServices, ...newServices]
    let filteredServices = allServices
}
import React from 'react'
import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Machine learning, natural language processing, and computer vision solutions.',
      features: ['Machine Learning Models', 'NLP Applications', 'Computer Vision', 'AI Consulting']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions and compliance to protect your digital assets.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management services.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Monitoring & Maintenance', 'Cost Optimization']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies and implementation.',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Integration']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </div>
        </div>
      </div>
    </div>
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Services"
        description="Comprehensive technology solutions including AI services, IT solutions, and micro SaaS development to help your business thrive in the digital age."
        keywords="services, AI, IT solutions, micro SaaS, technology, digital transformation"
        url="/services"
      />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Cutting-edge artificial intelligence solutions including machine learning,
                natural language processing, and intelligent automation.
              </p>
              <Link to="/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT infrastructure, cloud migration, cybersecurity
                and digital transformation solutions.
              </p>
              <Link to="/it-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-6">
                Innovative, focused software solutions that solve specific business
                problems with minimal overhead.
              </p>
              <Link to="/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD

export default ServicesPage;
=======
export default ServicesPage;
ursor/fix-website-loading-errors-and-merge-6662
export default ServicesPage;
  );
};

export default ServicesPage;
export default ServicesPage;
export default ServicesPage;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
