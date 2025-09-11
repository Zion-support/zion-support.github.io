import React from 'react';
import Head from 'next/head';
import { Package, TrendingUp, BarChart3, Zap, Target, CheckCircle, ArrowRight, Star, Award, Brain, Shield, Clock } from 'lucide-react';

const AIPoweredInventoryOptimization = () => {
  return (
    <>
      <Head>
        <title>AI-Powered Inventory Optimization - Zion Tech Group</title>
        <meta name="description" content="Optimize inventory levels with AI-driven demand forecasting. Reduce costs by 40% and increase efficiency by 60% with smart inventory management." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-powered-inventory-optimization" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 py-20 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Package className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Inventory Optimization
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              Optimize inventory levels with AI-driven demand forecasting and smart replenishment algorithms. 
              Reduce costs by 40% and increase efficiency by 60% with intelligent inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Started - $1,999/month
              </a>
              <a 
                href="#features" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Features
              </a>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Inventory Management</h2>
              <p className="text-gray-600 text-lg">Leverage AI to optimize inventory levels and reduce operational costs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">40% Cost Reduction</h3>
                <p className="text-gray-600">Minimize carrying costs, reduce waste, and optimize stock levels with AI-driven insights.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">60% Efficiency Increase</h3>
                <p className="text-gray-600">Automate inventory decisions and streamline operations with intelligent algorithms.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">95% Accuracy</h3>
                <p className="text-gray-600">Predict demand with 95% accuracy using advanced machine learning models.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AI Features</h2>
              <p className="text-gray-600 text-lg">Comprehensive inventory optimization and demand forecasting</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Demand Forecasting</h3>
                    <p className="text-gray-600">Advanced ML models predict demand patterns with seasonal adjustments and trend analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Smart Replenishment</h3>
                    <p className="text-gray-600">Automated reorder points and quantities based on lead times and demand variability.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">ABC Analysis</h3>
                    <p className="text-gray-600">Intelligent categorization of inventory items based on value and movement patterns.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Safety Stock Optimization</h3>
                    <p className="text-gray-600">Dynamic safety stock levels based on demand variability and service level targets.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Real-time Monitoring</h3>
                    <p className="text-gray-600">Live inventory tracking with alerts for low stock, overstock, and slow-moving items.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Multi-location Support</h3>
                    <p className="text-gray-600">Optimize inventory across multiple warehouses and distribution centers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Integration Ready</h3>
                    <p className="text-gray-600">Seamless integration with ERP, WMS, and e-commerce platforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Cost Optimization</h3>
                    <p className="text-gray-600">Minimize total inventory costs including holding, ordering, and stockout costs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Every Industry</h2>
              <p className="text-gray-600 text-lg">From retail to manufacturing, optimize your inventory operations</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Retail & E-commerce</h3>
                <p className="text-gray-600">Optimize stock levels for seasonal demand, manage SKU proliferation, and reduce markdowns.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h3>
                <p className="text-gray-600">Manage raw materials, work-in-progress, and finished goods with precision.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600">Ensure critical supplies are always available while minimizing waste and costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-gray-600 text-lg">Choose the plan that fits your inventory needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Starter</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$1,999/month</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 1,000 SKUs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Basic demand forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Standard support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">API access</span>
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-500 relative">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Professional</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$3,999/month</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 10,000 SKUs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Advanced ML forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Multi-location support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom integrations</span>
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$7,999/month</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Unlimited SKUs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom ML models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">White-label solution</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">On-premise deployment</span>
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Inventory?</h2>
              <p className="text-gray-300 text-lg">Contact our supply chain experts to get started</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-300">📞</span>
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-white ml-3">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-300">✉️</span>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white ml-3">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-300">🌐</span>
                    <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white ml-3">https://ziontechgroup.com</a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-300">📍</span>
                    <span className="text-gray-300 ml-3">364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Schedule a Demo</h3>
                <p className="text-gray-600 mb-4">See how our AI inventory optimization can transform your operations</p>
                <a href="https://ziontechgroup.com/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredInventoryOptimization;