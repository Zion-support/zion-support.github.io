import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI-Powered Enterprise Solutions</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing consulting, and autonomous business operations." />
        <meta name="keywords" content="AI, enterprise solutions, quantum computing, autonomous operations, business transformation" />
        <meta property="og:title" content="Zion Tech Group - AI-Powered Enterprise Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and quantum technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zion.app" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading the future of enterprise AI with quantum consciousness computing, 
              autonomous business operations, and revolutionary technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </a>
              <a 
                href="/contact"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Quantum AI</h3>
              <p className="text-gray-300">
                Revolutionary quantum consciousness AI consulting that transforms enterprise decision-making with 99.9% accuracy.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">"
              <h3 className="text-xl font-bold mb-4 text-purple-400">Autonomous Operations</h3>"
              <p className="text-gray-300">"
                Self-healing infrastructure and autonomous business operations that reduce costs by 70% while increasing efficiency.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">"
              <h3 className="text-xl font-bold mb-4 text-purple-400">Enterprise Solutions</h3>"
              <p className="text-gray-300">"
                Comprehensive AI-powered solutions for Fortune 500 companies, delivering measurable ROI and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;