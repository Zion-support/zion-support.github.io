import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <div>
      <div></div>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Revolutionary quantum consciousness AI consulting and autonomous business operations for enterprise transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8"></p>
              Revolutionary quantum consciousness AI consulting and autonomous business operations for enterprise transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a 
                href="/services"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"></a>
                Explore Services
              </a>
              <a 
                href="/contact"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"></a>
                Get Started
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16"></div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"></div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Quantum AI</h3>
              <p className="text-gray-300"></p>
                Revolutionary quantum consciousness AI consulting that transforms enterprise decision-making with 99.9% accuracy.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"></div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Autonomous Operations</h3>
              <p className="text-gray-300"></p>
                Self-healing infrastructure and autonomous business operations that reduce costs by 70% while increasing efficiency.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"></div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Enterprise Solutions</h3>
              <p className="text-gray-300"></p>
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