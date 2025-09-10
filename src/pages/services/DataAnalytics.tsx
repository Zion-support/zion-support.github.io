import React from 'react';
import { SEO } from '../../components/SEO';

const DataAnalytics: React.FC = () => {
  return (
    <>
      <SEO 
        title="Data Analytics Services - Zion Tech Group"
        description="Advanced data analytics services to help businesses make informed decisions and gain valuable insights from their data."
        keywords="data analytics, business intelligence, data insights, predictive analytics, data visualization"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Data Analytics Services
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your data into actionable insights with our advanced analytics services. 
                Make informed decisions and drive business growth with data-driven strategies.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our data analytics services are currently under development. This service will provide:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Advanced data visualization
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Predictive analytics and forecasting
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Real-time data processing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Custom dashboard development
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Machine learning insights
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Business intelligence reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalytics;