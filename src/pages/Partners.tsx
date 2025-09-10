import React from 'react';
import SEO from '../components/SEO';

const Partners: React.FC = () => {
  return (
    <>
      <SEO 
        title="Partners - Zion Tech Group" 
        description="Partner with Zion Tech Group and grow your business together." 
        keywords="partners, partnership, business partners, collaboration, growth"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Partners
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Partner with Zion Tech Group and unlock new opportunities for growth and success.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our partnership program is currently under development. This program will include:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Strategic partnerships
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Technology integrations
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Joint marketing opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Revenue sharing programs
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Technical support and training
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Co-development opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;