import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Services(): React.JSX.Element {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Custom artificial intelligence solutions to automate processes and gain insights from your data.',
      icon: '🤖',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      icon: '☁️',
      features: ['AWS/Azure/GCP Migration', 'Container Orchestration', 'DevOps Automation', 'Security & Compliance']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      icon: '📊',
      features: ['Business Intelligence', 'Data Warehousing', 'Real-time Analytics', 'Data Visualization']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and best practices.',
      icon: '🔒',
      features: ['Security Assessment', 'Threat Detection', 'Incident Response', 'Compliance Management']
    },
    {
      title: 'Software Development',
      description: 'Custom software development solutions tailored to your business needs.',
      icon: '💻',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions.',
      icon: '🎯',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT solutions including cloud infrastructure, data analytics, cybersecurity, and custom software development." />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI & IT solutions" />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16" data-testid="services-page">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive AI and IT solutions designed to transform your business and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Team</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our AI and IT solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="/portfolio"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </main>
    </>
  );
}