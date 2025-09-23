import React from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight, Star, CheckCircle, Play, TrendingUp, Shield, Zap, Users } from 'lucide-react';

export const EnhancedHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions for Modern Business"
        description="Transform your business with Zion Tech Group's cutting-edge AI, blockchain, and cloud solutions. Get 40% cost reduction and 60% efficiency improvement."
        keywords="AI solutions, business transformation, technology consulting, blockchain, cloud services"
      />
      
      {/* Hero Section with Strong CTA */}
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-600 bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Trusted by 500+ Companies Worldwide</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> AI-Powered Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Achieve 40% cost reduction and 60% efficiency improvement with our cutting-edge AI, blockchain, and cloud technologies. Join the digital revolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Free AI Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Success Stories
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">$2.3M+</div>
                <div className="text-blue-200">Average Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">60%</div>
                <div className="text-blue-200">Efficiency Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-blue-200">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
              <div className="bg-white p-4 rounded-lg shadow-sm">Company 1</div>
              <div className="bg-white p-4 rounded-lg shadow-sm">Company 2</div>
              <div className="bg-white p-4 rounded-lg shadow-sm">Company 3</div>
              <div className="bg-white p-4 rounded-lg shadow-sm">Company 4</div>
              <div className="bg-white p-4 rounded-lg shadow-sm">Company 5</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Technology Solutions</h2>
            <p className="text-xl text-gray-600">
              We combine cutting-edge AI, blockchain, and cloud technologies to deliver unprecedented business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Automation</h3>
              <p className="text-gray-600 mb-6">
                Transform your operations with intelligent automation that learns, adapts, and optimizes continuously.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">40% cost reduction</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">90% error reduction</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">24/7 operations</span>
                </li>
              </ul>
              <a href="/services/ai-automation" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Blockchain Security</h3>
              <p className="text-gray-600 mb-6">
                Secure your data and transactions with immutable blockchain technology that ensures complete transparency.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">100% data integrity</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">Zero downtime</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">Complete transparency</span>
                </li>
              </ul>
              <a href="/services/blockchain" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Scale your business with robust cloud solutions that provide unlimited growth potential and reliability.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">99.9% uptime</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">Unlimited scalability</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">Global deployment</span>
                </li>
              </ul>
              <a href="/services/cloud" className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how we've helped companies achieve remarkable transformations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Global Manufacturing Co.</h3>
                  <p className="text-gray-600">Fortune 500 Company</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Zion Tech Group transformed our supply chain operations, reducing costs by $2.3M annually and improving efficiency by 60%."
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Financial Services Inc.</h3>
                  <p className="text-gray-600">Leading Bank</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Their blockchain security solutions eliminated fraud completely and reduced transaction costs by 70%."
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Join 500+ companies that have already revolutionized their operations with Zion Tech Group's cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
            <p className="text-blue-100 mt-6 text-sm">
              ✓ Free assessment ✓ No commitment ✓ Results guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};