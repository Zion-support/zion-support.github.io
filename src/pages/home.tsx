import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning solutions to automate and optimize your business processes.'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity Excellence',
      description: 'Advanced security solutions and compliance services to protect your digital assets and ensure regulatory compliance.'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and DevOps services to modernize your infrastructure and improve operational efficiency.'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation services to help your business adapt and thrive in the digital age.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Future-Ready Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver innovative technology solutions that drive business growth and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors font-semibold inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}