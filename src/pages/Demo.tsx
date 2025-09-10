import React from 'react';
import SEO from '../components/SEO';

const Demo: React.FC = () => {
  return (
    <>
      <SEO 
        title="Demo - Zion Tech Group"
        description="Experience our AI and technology services through interactive demos and live demonstrations."
        keywords="demo, interactive demo, ai demo, technology demo, live demo"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Interactive Demo
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Experience our AI and technology services firsthand through interactive demos 
                and live demonstrations tailored to your business needs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Demo Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our interactive demo platform is currently under development. Soon you'll be able to:
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Try our AI services in real-time
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  See live demonstrations of our technology
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Test different configurations and settings
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Get personalized recommendations
                </li>
              </ul>
              <div className="text-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;