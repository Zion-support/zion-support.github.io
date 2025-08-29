import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3, 
  MessageCircle, 
  Zap, 
  Shield, 
  Brain,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Globe,
  Lock
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AISalesCopilot() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Lead Scoring',
      description: 'AI-powered lead qualification and prioritization for maximum conversion rates'
    },
    {
      icon: Target,
      title: 'Predictive Sales Analytics',
      description: 'Forecast sales outcomes and identify high-probability opportunities'
    },
    {
      icon: MessageCircle,
      title: 'Smart Communication',
      description: 'Automated, personalized messaging that adapts to customer behavior'
    },
    {
      icon: BarChart3,
      title: 'Performance Insights',
      description: 'Real-time analytics and actionable recommendations for sales teams'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Advanced customer profiling and targeted outreach strategies'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamlined sales processes with intelligent automation'
    }
  ];

  const benefits = [
    'Increase sales conversion rates by 40%',
    'Reduce sales cycle time by 30%',
    'Improve lead qualification accuracy by 60%',
    'Boost team productivity by 50%',
    'Enhance customer engagement and retention',
    'Provide data-driven sales insights'
  ];

  const useCases = [
    {
      industry: 'B2B Sales',
      description: 'Enterprise sales teams using AI for lead scoring and pipeline management'
    },
    {
      industry: 'E-commerce',
      description: 'Online retailers leveraging AI for customer segmentation and personalized offers'
    },
    {
      industry: 'Real Estate',
      description: 'Property agents using AI for lead qualification and market analysis'
    },
    {
      industry: 'Financial Services',
      description: 'Banking and insurance professionals optimizing sales with AI insights'
    }
  ];

  return (
    <>
      <SEO 
        title="AI Sales Copilot - Intelligent Sales Optimization | Zion Tech Group"
        description="Transform your sales process with our AI Sales Copilot. Intelligent lead scoring, predictive analytics, and automated workflows to boost conversions and revenue."
        keywords="AI sales copilot, sales automation, lead scoring, predictive analytics, sales optimization, AI sales tools"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Sales Intelligence
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Sales Copilot
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Intelligent Sales Optimization
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your sales process with AI-powered insights, automated workflows, and predictive analytics. 
                Boost conversions, reduce cycle times, and maximize revenue with intelligent sales automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Powerful AI Sales Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI Sales Copilot combines cutting-edge machine learning with proven sales methodologies 
                to deliver unprecedented results for your sales team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transform Your Sales Performance
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience measurable improvements in your sales metrics with AI-powered optimization.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI Sales Copilot is designed to work across various industries and business models.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-slate-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Revolutionize Your Sales?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join the future of sales with AI-powered optimization. Get started today and see 
                immediate improvements in your sales performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}