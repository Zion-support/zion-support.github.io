import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Rocket, Shield, Users, Target, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Rocket,
      title: 'AI Services & Solutions',
      description: 'Advanced artificial intelligence solutions including machine learning, deep learning, and AI automation.',
      features: ['Machine Learning Models', 'Deep Learning Systems', 'AI Automation', 'Predictive Analytics'],
      price: 'Starting at $5,000'
    },
    {
      icon: Shield,
      title: 'IT Services & Solutions',
      description: 'Comprehensive IT infrastructure, cloud migration, and DevOps services.',
      features: ['Cloud Migration', 'DevOps & SRE', 'Infrastructure Management', 'Security & Compliance'],
      price: 'Starting at $2,500'
    },
    {
      icon: Users,
      title: 'Micro SaaS Solutions',
      description: 'Scalable software-as-a-service applications designed for rapid deployment and growth.',
      features: ['Rapid Development', 'Scalable Architecture', 'Cloud-Native Design', 'API-First Approach'],
      price: 'Starting at $3,000'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT solutions designed to accelerate your digital transformation. Expert consulting services with proven results." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
