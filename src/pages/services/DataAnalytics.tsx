import React from 'react';
import { BarChart3, TrendingUp, Database, Brain } from 'lucide-react';
import SEO from '../../components/SEO';

const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Data Analytics Solutions - Zion Tech Group"
        description="Advanced data analytics and business intelligence solutions for data-driven decision making"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Analytics Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced analytics and business intelligence solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Business Intelligence</h3>
            <p className="text-gray-300">
              Comprehensive BI solutions for data visualization and reporting
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300">
              AI-powered forecasting and trend analysis for better decisions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Data Management</h3>
            <p className="text-gray-300">
              Efficient data collection, storage, and processing solutions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <Brain className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Machine Learning</h3>
            <p className="text-gray-300">
              Advanced ML models for pattern recognition and automation
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Contact us to learn how our data analytics solutions can transform your business
          </p>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;