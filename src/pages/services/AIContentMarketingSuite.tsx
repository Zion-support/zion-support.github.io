import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  FileText, 
  Brain, 
  TrendingUp, 
  Users, 
  Target, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Database,
  ChartBar,
  PieChart,
  Activity,
  Eye,
  Clock,
  DollarSign,
  Award,
  MessageSquare,
  Share2,
  BarChart3
} from 'lucide-react';

const AIContentMarketingSuite: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality, engaging content using advanced language models'
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'AI-driven insights to create content that resonates with your target audience'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track content performance and optimize based on real-time data'
    },
    {
      icon: Users,
      title: 'Personalization Engine',
      description: 'Automatically personalize content for different audience segments'
    },
    {
      icon: Clock,
      title: 'Automated Publishing',
      description: 'Schedule and publish content across multiple platforms automatically'
    },
    {
      icon: BarChart3,
      title: 'SEO Optimization',
      description: 'AI-powered SEO recommendations to improve content discoverability'
    }
  ];

  const benefits = [
    'Increase content production by 300%',
    'Improve engagement rates by 45%',
    'Reduce content creation costs by 60%',
    'Boost SEO rankings by 40%',
    'Enhance brand consistency',
    'Accelerate time-to-market'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI-Powered Content Marketing
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Create, Optimize, and Scale
              <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent"> Content Marketing</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your content marketing with AI-powered creation, optimization, and distribution. 
              Generate engaging content at scale while maintaining quality and brand consistency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Content Marketing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI suite provides everything you need to create, optimize, and distribute compelling content
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Content Marketing Suite?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in your content marketing performance and ROI
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
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
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Scale Your Content?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of marketers already using AI to create compelling content at scale.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating engaging content at scale with our AI-powered marketing suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIContentMarketingSuite;