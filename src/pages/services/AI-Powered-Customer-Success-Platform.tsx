import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, TrendingUp, Target, Zap, Shield, Brain, BarChart3, Star, Award } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

const AIPoweredCustomerSuccessPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Predict customer behavior and identify at-risk accounts before they churn using advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Churn prevention', 'Behavioral insights']
    },
    {
      icon: Target,
      title: 'Automated Engagement',
      description: 'Personalized customer touchpoints and automated workflows that scale your success team\'s impact.',
      benefits: ['Personalized outreach', 'Automated workflows', 'Scalable engagement']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards and reports that provide actionable insights into customer health and success metrics.',
      benefits: ['Real-time monitoring', 'Health scoring', 'Performance tracking']
    },
    {
      icon: Shield,
      title: 'Proactive Support',
      description: 'Anticipate customer needs and provide proactive support to maximize satisfaction and retention.',
      benefits: ['Proactive assistance', 'Issue prevention', 'Enhanced satisfaction']
    }
  ];

  const capabilities = [
    {
      title: 'Customer Health Scoring',
      description: 'Advanced algorithms analyze multiple data points to calculate customer health scores in real-time.',
      metrics: ['99.2% accuracy', 'Real-time updates', 'Custom scoring models']
    },
    {
      title: 'Predictive Churn Analysis',
      description: 'Identify customers at risk of churning with 94% accuracy and trigger automated retention campaigns.',
      metrics: ['94% accuracy', '30-day prediction window', 'Automated interventions']
    },
    {
      title: 'Personalized Success Plans',
      description: 'AI-generated success plans tailored to each customer\'s goals, usage patterns, and business objectives.',
      metrics: ['Dynamic adaptation', 'Goal tracking', 'Progress monitoring']
    },
    {
      title: 'Automated Outreach',
      description: 'Intelligent email campaigns, in-app messages, and task assignments based on customer behavior.',
      metrics: ['Multi-channel reach', 'Optimal timing', 'Personalized content']
    }
  ];

  const results = [
    {
      metric: '40%',
      description: 'Reduction in customer churn',
      icon: TrendingUp
    },
    {
      metric: '65%',
      description: 'Increase in customer satisfaction',
      icon: Star
    },
    {
      metric: '3x',
      description: 'Improvement in team productivity',
      icon: Users
    },
    {
      metric: '50%',
      description: 'Faster time to value',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Customer Success Platform - Zion Tech Group"
        description="Transform your customer success with AI-driven insights, automated engagement, and predictive analytics. Reduce churn and maximize customer lifetime value."
        keywords="customer success platform, AI customer success, churn prediction, customer analytics, automated engagement, customer health scoring"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Customer
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer success strategy with AI-driven insights, automated engagement, 
              and predictive analytics that reduce churn and maximize lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all duration-300 font-semibold"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{result.metric}</div>
                <div className="text-gray-300">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI to understand, predict, and optimize customer success at scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered tools that transform how you manage customer relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {capability.metrics.map((metric, i) => (
                    <div key={i} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
                      <div className="text-blue-400 font-semibold text-sm">{metric}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for a unified customer success experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">CRM Integration</h3>
              <p className="text-gray-300">Sync with Salesforce, HubSpot, and other leading CRM platforms.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics Platforms</h3>
              <p className="text-gray-300">Connect with Google Analytics, Mixpanel, and other analytics tools.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Communication Tools</h3>
              <p className="text-gray-300">Integrate with Slack, Microsoft Teams, and email platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Customer Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies using AI to reduce churn and maximize customer lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
              >
                Start Your Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all duration-300 font-semibold"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredCustomerSuccessPlatform;