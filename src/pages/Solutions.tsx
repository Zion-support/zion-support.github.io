import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise AI Solutions',
      description: 'Comprehensive AI implementation for large-scale enterprises.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration to cloud infrastructure with zero downtime.',
      features: ['AWS Migration', 'Azure Integration', 'Google Cloud Setup', 'Hybrid Cloud Solutions']
    },
    {
      title: 'Data Analytics Platform',
      description: 'Advanced analytics platform for data-driven decision making.',
      features: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence', 'Custom Dashboards']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Solutions</h1>
        <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
          Comprehensive technology solutions tailored to meet your specific business needs.
        </p>
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">{solution.title}</h2>
              <p className="text-gray-300 text-lg mb-6">{solution.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-purple-600/20 p-4 rounded-lg text-center">
                    <span className="text-white font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;