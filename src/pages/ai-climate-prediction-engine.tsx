import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const AIClimatePredictionEngine: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI climate prediction engine providing intelligent climate modeling, weather forecasting, and environmental impact analysis for sustainability." />
        <meta name="keywords" content="AI climate prediction, climate modeling, weather forecasting, environmental analysis, sustainability, climate AI" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
              AI Climate Prediction Engine
            </h1>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Climate Intelligence Revolution
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform climate understanding with our AI Climate Prediction Engine. 
                Leverage advanced artificial intelligence to create intelligent climate models, 
                accurate weather forecasts, and comprehensive environmental impact analysis 
                that drive sustainable decision-making and climate action.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Engine Capabilities</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      Advanced climate modeling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      Intelligent weather forecasting
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      Environmental impact analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      Sustainability insights
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Environmental Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Accurate climate predictions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Sustainable planning
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Climate action support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Environmental protection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Predict Climate Changes
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Experience the future of climate intelligence
              </p>
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Predicting
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AIClimatePredictionEngine;