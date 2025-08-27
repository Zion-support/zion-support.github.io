import React from 'react';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { CheckCircle, Brain, TrendingUp, Truck, Shield, Zap, Globe, Clock, Phone, Mail, BarChart3, Target, Users, Database } from 'lucide-react';

const AISupplyChainOptimization: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization Platform - Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization platform that predicts demand, optimizes inventory, and automates logistics with real-time analytics and predictive insights."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your supply chain with AI that predicts demand, optimizes inventory, and automates logistics. 
              Achieve 35% cost reduction and 50% faster delivery times with intelligent supply chain management.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Supply Chain Optimization?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">35% Cost Reduction</h3>
              <p className="text-gray-300">Intelligent inventory optimization and route planning minimize operational costs</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">50% Faster Delivery</h3>
              <p className="text-gray-300">AI-optimized routes and predictive logistics ensure faster delivery times</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">95% Demand Accuracy</h3>
              <p className="text-gray-300">Machine learning algorithms predict demand with exceptional accuracy</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-cyan-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">99.9% Uptime</h3>
              <p className="text-gray-300">Enterprise-grade infrastructure ensures continuous supply chain monitoring</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Predictive Demand Forecasting</h3>
                  <p className="text-gray-300">AI algorithms analyze historical data, market trends, and external factors to predict demand with 95% accuracy</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Intelligent Inventory Management</h3>
                  <p className="text-gray-300">Automated inventory optimization with safety stock calculations and reorder point recommendations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Route Optimization</h3>
                  <p className="text-gray-300">AI-powered route planning considering traffic, weather, fuel costs, and delivery windows</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-time Tracking</h3>
                  <p className="text-gray-300">Live shipment tracking with IoT sensors and predictive arrival times</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Supplier Performance Analytics</h3>
                  <p className="text-gray-300">Comprehensive supplier scoring and performance monitoring with automated alerts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Risk Management</h3>
                  <p className="text-gray-300">Proactive risk identification and mitigation strategies for supply chain disruptions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Sustainability Optimization</h3>
                  <p className="text-gray-300">Carbon footprint tracking and eco-friendly route optimization for green supply chains</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Multi-Platform Integration</h3>
                  <p className="text-gray-300">Seamless integration with ERP, WMS, TMS, and other supply chain systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Industry Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Manufacturing</h3>
              <p className="text-gray-300">Optimize production schedules, raw material procurement, and finished goods distribution</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Retail & E-commerce</h3>
              <p className="text-gray-300">Demand forecasting, inventory optimization, and last-mile delivery optimization</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
              <p className="text-gray-300">Medical supply chain optimization, cold chain management, and emergency response logistics</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Food & Beverage</h3>
              <p className="text-gray-300">Fresh food logistics, temperature monitoring, and expiration date optimization</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Trade</h3>
              <p className="text-gray-300">International logistics, customs optimization, and multi-modal transportation</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Defense & Aerospace</h3>
              <p className="text-gray-300">Critical supply chain security, compliance tracking, and mission-critical logistics</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Competitive Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary">Starter</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$499</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 locations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic demand forecasting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard reporting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Start Free Trial
              </Button>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600 to-blue-600 p-8 text-center relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary" className="bg-white text-green-600">Most Popular</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$1,299</span>
                <span className="text-green-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Up to 25 locations
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Custom dashboards
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  API access
                </li>
              </ul>
              <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                Get Started
              </Button>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary">Enterprise</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ultimate</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$2,999</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited locations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI capabilities
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Market Analysis & ROI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$67.2B</div>
              <div className="text-gray-300">Global Supply Chain Market (2026)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">400-800%</div>
              <div className="text-gray-300">Average ROI for AI Supply Chain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">35%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Delivery Times</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders already using AI to revolutionize their supply chain operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-green-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-green-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Globe className="w-5 h-5 text-green-400" />
              <span>ziontechgroup.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;