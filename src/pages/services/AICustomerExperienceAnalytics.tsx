import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { BarChart3, Users, Heart, TrendingUp, CheckCircle, Clock, Sparkles, Eye, MessageCircle, Target, Globe, ArrowRight, Zap, Star, Activity } from 'lucide-react';

const AICustomerExperienceAnalytics: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Sentiment Analysis',
      description: 'AI analyzes customer emotions and satisfaction in real-time'
    },
    {
      icon: Users,
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize complete customer touchpoints'
    },
    {
      icon: Heart,
      title: 'Predictive Satisfaction',
      description: 'Forecast customer satisfaction before issues arise'
    },
    {
      icon: TrendingUp,
      title: 'Behavioral Analytics',
      description: 'Deep insights into customer behavior patterns'
    }
  ];

  const analyticsTypes = [
    {
      title: 'Voice Analytics',
      description: 'Analyze call center interactions and customer sentiment',
      icon: '🎤'
    },
    {
      title: 'Text Analytics',
      description: 'Process emails, chats, and social media interactions',
      icon: '💬'
    },
    {
      title: 'Behavioral Analytics',
      description: 'Track user actions and engagement patterns',
      icon: '👁️'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast customer needs and satisfaction trends',
      icon: '🔮'
    }
  ];

  const benefits = [
    'Increase customer satisfaction by 45%',
    'Reduce customer churn by 60%',
    'Improve response time by 70%',
    'Boost customer lifetime value by 50%',
    'Identify issues before they escalate',
    'Personalize customer interactions at scale'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: 249,
      period: 'month',
      features: [
        'Up to 10,000 interactions/month',
        'Basic sentiment analysis',
        'Standard reporting',
        'Email support',
        'Basic dashboards',
        '2 team members'
      ]
    },
    {
      plan: 'Professional',
      price: 499,
      period: 'month',
      features: [
        'Up to 100,000 interactions/month',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Unlimited team members',
        'Advanced integrations'
      ]
    },
    {
      plan: 'Enterprise',
      price: 999,
      period: 'month',
      features: [
        'Unlimited interactions',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Experience Analytics - Zion Tech Group"
        description="Transform customer insights with AI-powered analytics. Understand customer emotions, predict satisfaction, and optimize experiences in real-time."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
              <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">AI Customer Experience Analytics</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Customer Experience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400">
                Analytics
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform customer insights with AI-powered analytics. Understand customer emotions, 
              predict satisfaction, and optimize experiences across all touchpoints in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20">
                Start Analyzing
              </button>
              <button className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powered by advanced AI to transform customer insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-200 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Analyze every customer interaction across all channels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Customer Experience Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform customer insights with intelligent analytics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform customer insights? Our AI analytics experts can help you 
                set up intelligent customer experience monitoring and optimization.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20">
                Start Customer Analytics
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your analytics needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  plan.plan === 'Professional' 
                    ? 'border-purple-400/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
                    <span className="text-lg text-gray-400">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                  plan.plan === 'Professional'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-400 hover:to-pink-500 shadow-lg shadow-purple-500/20'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Analyze Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform customer insights with AI-powered analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p>+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerExperienceAnalytics;