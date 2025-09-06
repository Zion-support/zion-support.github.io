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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;