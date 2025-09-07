import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Machine learning, natural language processing, and computer vision solutions.',
      features: ['Machine Learning Models', 'NLP Applications', 'Computer Vision', 'AI Consulting']
    },
      title: 'Cybersecurity',
      description: 'Advanced security solutions and compliance to protect your digital assets.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management services.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Monitoring & Maintenance', 'Cost Optimization']
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies and implementation.',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Integration']
    }
  ];

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
            <h3 className="text-xl font-semibold mb-4">AI Services</h3>
              Artificial intelligence solutions and automation services.
            <h3 className="text-xl font-semibold mb-4">Blockchain</h3>
              Blockchain development and Web3 solutions.
  );
};

export default ServicesPage;