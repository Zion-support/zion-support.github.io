import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Solutions: React.FC = () => {
  return (
    <>
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Industry-specific technology solutions designed to address unique business challenges and drive growth."
        keywords="solutions, industry solutions, business solutions, technology solutions, custom solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Industry Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Tailored technology solutions designed specifically for your industry's 
                unique challenges and requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our industry solutions are currently under development. These solutions will include:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Healthcare technology solutions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Financial services platforms
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Manufacturing automation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Retail and e-commerce solutions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Education technology platforms
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Government and public sector solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;