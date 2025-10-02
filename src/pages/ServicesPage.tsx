import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI & Machine Learning',
      description:
        'Advanced AI solutions including machine learning, deep learning, and neural networks for enterprise applications.',
      icon: '🤖',
      features: ['Machine Learning Models', 'Deep Learning Networks', 'AI Automation', 'Predictive Analytics'],
    },
    {
      title: 'Cloud Computing',
      description: 'Comprehensive cloud solutions including migration, infrastructure, and optimization services.',
      icon: '☁️',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Security Implementation'],
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital modernization strategies to transform your business operations.',
      icon: '🚀',
      features: ['Process Automation', 'System Integration', 'Workflow Optimization', 'Change Management'],
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
      icon: '🛡️',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],
    },
    {
      title: 'Data Analytics',
      description:
        'Transform your data into actionable insights with advanced analytics and visualization.',
      icon: '📊',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Reporting Systems'],
    },
    {
      title: 'DevOps & Automation',
      description:
        'Streamline your development and deployment processes with modern DevOps practices.',
      icon: '⚙️',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Performance Optimization'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive IT services including AI solutions, cloud computing, digital transformation, and cybersecurity."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <Link to="/contact" className="w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="text-center mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-6">
            Contact our experts to discuss your specific needs and get a customized solution.
          </p>
          <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started Today
          </a>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;