import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const microSAAS = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics. Starting at $299/month.',
      icon: '📊',
      href: '/services/ai-analytics-dashboard',
      category: 'Micro SAAS',
      price: '$299/month'
    },
    {
      title: 'Smart Document Processing',
      description: 'Automated document extraction and processing with 99.5% accuracy. Starting at $199/month.',
      icon: '📄',
      href: '/services/smart-document-processing',
      category: 'Micro SAAS',
      price: '$199/month'
    },
    {
      title: 'Customer Sentiment Analyzer',
      description: 'Real-time customer feedback analysis with actionable insights. Starting at $149/month.',
      icon: '😊',
      href: '/services/customer-sentiment-analyzer',
      category: 'Micro SAAS',
      price: '$149/month'
    },
    {
      title: 'Automated Lead Scoring',
      description: 'AI-driven lead qualification and scoring system. Starting at $249/month.',
      icon: '🎯',
      href: '/services/automated-lead-scoring',
      category: 'Micro SAAS',
      price: '$249/month'
    },
    {
      title: 'Inventory Optimization AI',
      description: 'Smart inventory management with demand forecasting. Starting at $399/month.',
      icon: '📦',
      href: '/services/inventory-optimization-ai',
      category: 'Micro SAAS',
      price: '$399/month'
    },
    {
      title: 'Social Media AI Manager',
      description: 'Automated social media posting and engagement optimization. Starting at $179/month.',
      icon: '📱',
      href: '/services/social-media-ai-manager',
      category: 'Micro SAAS',
      price: '$179/month'
    }
  ];

  const enterpriseServices = [
    {
      title: 'AI Platform Architecture',
      description: 'Complete AI infrastructure design and implementation for enterprise-scale operations.',
      icon: '🏗️',
      href: '/services/ai-platform-architecture',
      category: 'Enterprise',
      price: 'Custom Pricing'
    },
    {
      title: 'Autonomous Operations',
      description: 'End-to-end automation of business processes with AI-driven decision making.',
      icon: '🤖',
      href: '/services/autonomous-operations',
      category: 'Enterprise',
      price: 'Custom Pricing'
    },
    {
      title: 'Data Intelligence Platform',
      description: 'Advanced analytics and machine learning platform for enterprise data.',
      icon: '📈',
      href: '/services/data-intelligence-platform',
      category: 'Enterprise',
      price: 'Custom Pricing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and automation solutions designed to transform your business operations 
            and drive unprecedented growth.
          </p>
        </div>

        {/* Micro SAAS Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Micro SAAS Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">
                    {service.price}
                  </span>
                  <Link 
                    to={service.href}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Enterprise Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-purple-600">
                    {service.price}
                  </span>
                  <Link 
                    to={service.href}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-6">
            Let our AI experts help you implement cutting-edge solutions that drive real results.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Services;