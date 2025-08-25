import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { BarChart3, Users, Target, DollarSign, TrendingUp, Globe, Zap, CheckCircle, ArrowRight, PieChart, Activity, Award } from 'lucide-react';

export default function AffiliateAttributionHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 text-white">
      <SEOHead 
        title="Affiliate Attribution Hub - Zion Tech Group"
        description="Advanced affiliate attribution and tracking platform that provides comprehensive insights into marketing performance and ROI optimization."
        keywords="affiliate attribution, marketing tracking, ROI optimization, performance analytics, conversion tracking, marketing analytics"
        type="website"
        url="https://ziontechgroup.com/affiliate-attribution-hub"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
              <BarChart3 className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Affiliate Attribution Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced affiliate attribution and tracking platform for maximizing marketing ROI and optimizing conversion performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services/marketing-automation"
              className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              View Marketing Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Comprehensive Attribution Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-6">
                <Target className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Multi-Touch Attribution</h3>
              <p className="text-gray-300">
                Advanced attribution models that track customer journey across multiple touchpoints and channels.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Real-Time Analytics</h3>
              <p className="text-gray-300">
                Live performance monitoring with instant insights into campaign effectiveness and conversion rates.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Customer Journey Mapping</h3>
              <p className="text-gray-300">
                Visualize and optimize customer paths from first touch to conversion with detailed journey analytics.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-6">
                <DollarSign className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">ROI Optimization</h3>
              <p className="text-gray-300">
                Data-driven insights to maximize return on marketing investment and optimize budget allocation.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Performance Tracking</h3>
              <p className="text-gray-300">
                Comprehensive tracking of affiliate performance, conversions, and revenue attribution.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-pink-500/20 rounded-lg w-fit mb-6">
                <Globe className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Cross-Channel Integration</h3>
              <p className="text-gray-300">
                Seamless integration with all marketing channels for unified attribution and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution Models Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Advanced Attribution Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">First-Touch</h3>
              <p className="text-gray-300">
                Attribute conversion to the first marketing touchpoint that introduced the customer.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Last-Touch</h3>
              <p className="text-gray-300">
                Credit the final touchpoint before conversion for driving the sale.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Linear</h3>
              <p className="text-gray-300">
                Distribute conversion credit equally across all touchpoints in the customer journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Machine Learning</h3>
              <p className="text-gray-300">
                AI-powered attribution that learns and adapts to optimize credit distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Powerful Analytics Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-Time Performance</h3>
                  <p className="text-gray-300">Monitor campaign performance and conversions in real-time with live dashboards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Reporting</h3>
                  <p className="text-gray-300">Create customized reports and visualizations for different stakeholders and use cases.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data Export</h3>
                  <p className="text-gray-300">Export data in multiple formats for further analysis and integration with other tools.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">$45.2K</div>
                  <div className="text-sm text-gray-300">Revenue</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">1,247</div>
                  <div className="text-sm text-gray-300">Conversions</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Email Marketing</span>
                  <span className="text-green-400 font-semibold">32%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Social Media</span>
                  <span className="text-blue-400 font-semibold">28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Affiliate Partners</span>
                  <span className="text-purple-400 font-semibold">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Direct Traffic</span>
                  <span className="text-yellow-400 font-semibold">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Why Choose Our Attribution Hub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-green-500/20 rounded-full w-fit mx-auto mb-6">
                <Zap className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Increased ROI</h3>
              <p className="text-gray-300">
                Optimize marketing spend by identifying the most effective channels and touchpoints.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-blue-500/20 rounded-full w-fit mx-auto mb-6">
                <Activity className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Better Insights</h3>
              <p className="text-gray-300">
                Gain deeper understanding of customer behavior and marketing effectiveness.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-purple-500/20 rounded-full w-fit mx-auto mb-6">
                <Award className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Competitive Advantage</h3>
              <p className="text-gray-300">
                Stay ahead with advanced attribution technology and data-driven decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Optimize Your Marketing Attribution Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading brands that are maximizing their marketing ROI with advanced attribution technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services/marketing-automation"
              className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              View Marketing Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}