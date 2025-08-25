import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const AIAutonomousVentureCapitalist: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Autonomous Venture Capitalist - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI autonomous venture capital platform providing intelligent investment analysis, deal sourcing, and portfolio management for venture capital firms." />
        <meta name="keywords" content="AI venture capital, autonomous investing, investment analysis, deal sourcing, portfolio management" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
              AI Autonomous Venture Capitalist
            </h1>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Intelligent Investment Revolution
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your venture capital operations with our AI Autonomous Venture Capitalist platform. 
                Leverage advanced artificial intelligence to analyze investment opportunities, source deals, 
                and manage portfolios with unprecedented accuracy and efficiency.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Investment Capabilities</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                      Autonomous deal sourcing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                      Intelligent risk assessment
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                      Portfolio optimization
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                      Market trend analysis
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Investment Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Up to 3x better returns
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Reduced investment risk
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Faster deal execution
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Data-driven decisions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Revolutionize Your Investment Strategy
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Experience the future of intelligent venture capital
              </p>
              <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Investing
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AIAutonomousVentureCapitalist;