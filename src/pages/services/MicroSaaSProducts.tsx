import React from 'react';
import { SEO } from '../../components/SEO';

const MicroSaaSProducts: React.FC = () => {
  return (
    <>
      <SEO 
        title="Micro SaaS Products - Zion Tech Group"
        description="Discover our innovative Micro SaaS products designed to solve specific business problems with focused, specialized solutions."
        keywords="micro saas, saas products, business solutions, specialized software, focused solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Micro SaaS Products
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover our innovative Micro SaaS products designed to solve specific business 
                problems with focused, specialized solutions that deliver maximum value.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our Micro SaaS products are currently under development. These products will include:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Specialized business tools
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  AI-powered automation solutions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Custom workflow management
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Integrated analytics and reporting
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Seamless third-party integrations
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Scalable cloud infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaaSProducts;