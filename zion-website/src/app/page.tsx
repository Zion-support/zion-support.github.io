
import React from 'react';
import { 
  LightBulbIcon,
  CpuChipIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const features = [

  {
    name: 'AI-Powered Research',
    description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.',
    icon: LightBulbIcon,
  },
  {
    name: 'Quantum Computing',
    description: 'Next-generation quantum neural networks for solving complex computational problems.',
    icon: CpuChipIcon,
  },
  {
    name: 'Global Solutions',
    description: 'Worldwide deployment of autonomous business operations and digital transformation.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Security First',
    description: 'Advanced cybersecurity and data protection for enterprise-grade applications.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Analytics & Insights',
    description: 'Real-time data analysis and predictive modeling for informed decision making.',
    icon: ChartBarIcon,
  },
  {
    name: 'Team Collaboration',
    description: 'Seamless integration tools for distributed teams and remote work environments.',
    icon: UserGroupIcon,
  },
];

export default function HomePage() {
  return (

    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Leading the future of AI, quantum computing, and autonomous business solutions

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started

              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>

            </div>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Technologies

            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technology to deliver innovative solutions that transform businesses and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?

          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI-powered solutions to drive innovation and growth.
          </p>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}

