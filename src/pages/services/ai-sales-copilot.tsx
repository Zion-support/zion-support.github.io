import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Brain, Zap, Globe, Users, Target, 
  Award, Clock, CheckCircle, ArrowRight, Play, 
  BarChart3, Cpu, Network, MessageSquare, Lock, Eye, 
  Activity, Star, Rocket, DollarSign, Phone, Mail,
  Calendar, UserCheck, PieChart, LineChart
} from 'lucide-react';

export default function AISalesCopilot() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Lead Scoring',
      description: 'Intelligent lead qualification and prioritization using machine learning'
    },
    {
      icon: MessageSquare,
      title: 'Smart Communication',
      description: 'Automated email sequences and personalized messaging'
    },
    {
      icon: BarChart3,
      title: 'Sales Analytics',
      description: 'Real-time insights and performance tracking'
    },
    {
      icon: Target,
      title: 'Predictive Sales',
      description: 'AI-driven sales forecasting and opportunity identification'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis and segmentation'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamlined sales processes and task automation'
    }
  ];

  const benefits = [
    'Increase sales conversion rates by up to 300%',
    'Reduce sales cycle time by 40%',
    'Automate 80% of repetitive sales tasks',
    'Improve lead qualification accuracy by 90%',
    'Real-time sales performance insights',
    'Enhanced customer relationship management'
  ];

  const salesCapabilities = [
    {
      title: 'Lead Generation',
      description: 'AI-powered lead discovery and qualification',
      icon: Target
    },
    {
      title: 'Email Automation',
      description: 'Intelligent email sequences and follow-ups',
      icon: Mail
    },
    {
      title: 'Sales Forecasting',
      description: 'Predictive analytics for revenue projection',
      icon: TrendingUp
    },
    {
      title: 'CRM Integration',
      description: 'Seamless integration with existing CRM systems',
      icon: Users
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive sales metrics and reporting',
      icon: BarChart3
    },
    {
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis',
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>AI Sales Copilot</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Sales
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Copilot
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your sales operations with our AI-powered sales copilot. 
              Automate lead generation, enhance customer engagement, and boost conversion rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Sales Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI sales copilot combines advanced technology with proven sales methodologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Capabilities Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Sales Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end sales automation and optimization tools
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-300">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Supercharge Your Sales Performance
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI sales copilot delivers measurable improvements in conversion rates, 
                sales cycle efficiency, and overall revenue growth.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Sales Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">300%</div>
                      <div className="text-gray-300">Conversion Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">40%</div>
                      <div className="text-gray-300">Cycle Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of sales with Zion Tech Group's AI-powered copilot
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}