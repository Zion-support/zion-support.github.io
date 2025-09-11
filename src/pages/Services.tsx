import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Services',
      description: 'Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision.',
      icon: '🤖',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Consulting']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and threat detection systems.',
      icon: '🔒',
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scale your operations with robust, scalable cloud solutions and migration services.',
      icon: '☁️',
      features: ['Cloud Migration', 'Infrastructure Optimization', 'Scalable Solutions', 'Cloud Security']
    },
    {
      title: 'DevOps & SRE',
      description: 'Streamline your development and operations with modern DevOps practices and site reliability engineering.',
      icon: '⚙️',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Performance Optimization']
    },
    {
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android with native and cross-platform solutions.',
      icon: '📱',
      features: ['Native Development', 'Cross-Platform Apps', 'UI/UX Design', 'App Store Optimization']
    },
    {
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics, business intelligence, and data visualization.',
      icon: '📊',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Data Warehousing']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;