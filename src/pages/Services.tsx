import React from 'react';
import { Link } from 'react-router-dom'

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Autonomous Operations',
      description: 'Self-healing infrastructure and autonomous operations that reduce costs by 70% and achieve 99.9% uptime.',
      icon: '🤖',
      href: '/services/autonomous-operations'
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing that delivers 2000x processing speed improvements for complex calculations.',
      icon: '⚡',
      href: '/services/quantum-computing'
    },
    {
      title: 'Advanced Cybersecurity AI',
      description: 'Next-generation AI-powered cybersecurity solutions with 99.9% threat detection accuracy.',
      icon: '🛡️',
      href: '/services/cybersecurity'
    },
    {
      title: 'Enterprise AI Platform',
      description: 'Comprehensive AI platform that transforms your business operations with intelligent automation.',
      icon: '🏢',
      href: '/services/enterprise-platform'
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Advanced analytics and business intelligence solutions powered by machine learning.',
      icon: '📊',
      href: '/services/data-analytics'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AI-powered optimization and cost management.',
      icon: '☁️',
      href: '/services/cloud-infrastructure'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge AI and technology solutions designed to transform your business 
            and drive innovation across all industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to={service.href}
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;