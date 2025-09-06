
import React from 'react';

const solutions = [
  {
    title: 'Enterprise AI Platform',
    description: 'Complete AI infrastructure for large organizations',
    benefits: ['Scalable Architecture', 'Real-time Processing', 'Advanced Analytics', 'Enterprise Security']
  },
  {
    title: 'Quantum Optimization',
    description: 'Quantum-powered solutions for complex optimization problems',
    benefits: ['Faster Processing', 'Better Results', 'Cost Reduction', 'Innovation']
  },
  {
    title: 'Autonomous Operations',
    description: 'Self-managing business processes and systems',
    benefits: ['Reduced Manual Work', 'Improved Efficiency', '24/7 Operations', 'Cost Savings']
  },
  {
    title: 'Smart Analytics',
    description: 'Intelligent data analysis and business intelligence',
    benefits: ['Predictive Insights', 'Real-time Monitoring', 'Data-driven Decisions', 'Competitive Advantage']
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready-to-deploy solutions that address your specific business challenges and drive measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <span className="text-blue-600 mr-3">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );

}

