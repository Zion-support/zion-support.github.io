import React from 'react';
import { CheckCircle, Cloud, Shield, Brain, Database, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes and gain insights.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure tailored to your business needs.',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and monitoring.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Data Warehousing']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React Applications', 'Node.js Backend', 'Mobile Apps', 'E-commerce Solutions']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how we can help your business succeed.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;