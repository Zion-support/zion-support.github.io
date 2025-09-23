import React from 'react';
import { SEO } from '../../components/SEO';
import { BarChart3, Zap, Brain, Target, TrendingUp, Users, Database, PieChart } from 'lucide-react';

export default function AIDataAnalyticsBI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Data Analytics & BI - Zion Tech Group"
        description="Transform your data into actionable insights with AI-powered analytics and business intelligence. Make data-driven decisions that drive growth."
        keywords="AI data analytics, business intelligence, data insights, predictive analytics, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
              <BarChart3 className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Data Analytics & Business Intelligence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the power of your data with AI-driven analytics and business intelligence. 
            Transform raw data into actionable insights that drive strategic decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic">
              <BarChart3 className="h-5 w-5 mr-2" />
              Analyze Data
            </button>
            <button className="btn-secondary">
              <Users className="h-5 w-5 mr-2" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Analytics Features
            </h2>
            <p className="text-xl text-gray-300">
              Advanced analytics capabilities that transform your data into business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-fit mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">
                AI-powered forecasting that predicts future trends and outcomes based on historical data.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Dashboards</h3>
              <p className="text-gray-300">
                Live dashboards that provide instant insights into your business performance and KPIs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trend Analysis</h3>
              <p className="text-gray-300">
                Identify patterns and trends in your data to make informed strategic decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Integration</h3>
              <p className="text-gray-300">
                Connect and consolidate data from multiple sources for comprehensive analysis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg w-fit mb-4">
                <PieChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Visualization</h3>
              <p className="text-gray-300">
                Interactive charts and graphs that make complex data easy to understand.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automated Insights</h3>
              <p className="text-gray-300">
                AI automatically identifies key insights and anomalies in your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Types of Analytics We Provide
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive analytics solutions for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Business Intelligence</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Performance dashboards and KPI tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Executive reporting and board presentations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Operational metrics and efficiency analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Competitive benchmarking and market analysis</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Advanced Analytics</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Predictive modeling and forecasting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Machine learning and AI insights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Customer behavior analysis and segmentation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Risk assessment and anomaly detection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Data Analytics?
            </h2>
            <p className="text-xl text-gray-300">
              Transform your business with data-driven insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Insights</h3>
              <p className="text-gray-300">
                AI automatically identifies patterns and insights that humans might miss
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Better Decisions</h3>
              <p className="text-gray-300">
                Make informed decisions based on data rather than intuition
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-fit mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Increased Revenue</h3>
              <p className="text-gray-300">
                Identify opportunities and optimize processes to drive growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with AI-powered analytics and insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic">
              <BarChart3 className="h-5 w-5 mr-2" />
              Start Analyzing
            </button>
            <button className="btn-secondary">
              <Users className="h-5 w-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}