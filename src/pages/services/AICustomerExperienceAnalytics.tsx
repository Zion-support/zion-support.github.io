import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, BarChart3, Eye, TrendingUp, CheckCircle, ArrowRight, MessageCircle, Heart, Target, Zap, Globe, Shield, Clock, DollarSign, Star, Rocket, Cpu, Cloud, Lock, Database, Network, FileText, Search, Filter, AlertTriangle, Activity, Sparkles, Award, GitFork, Atom, Leaf, Gamepad2, Coins, Satellite, MessageCircle as MessageCircleIcon, Server, ShoppingCart, Smartphone, Database as DatabaseIcon, BarChart3 as BarChart3Icon, Eye as EyeIcon, Search as SearchIcon, Filter as FilterIcon, AlertTriangle as AlertTriangleIcon, Clock as ClockIcon, DollarSign as DollarSignIcon, Star as StarIcon, Rocket as RocketIcon, Cpu as CpuIcon, Cloud as CloudIcon } from 'lucide-react';

const AICustomerExperienceAnalytics = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Sentiment Analysis',
      description: 'Advanced natural language processing to analyze customer feedback, reviews, and interactions across all channels in real-time.',
      benefits: ['Real-time sentiment tracking', 'Multi-language support', 'Context-aware analysis', 'Emotion detection']
    },
    {
      icon: Users,
      title: 'Customer Journey Mapping',
      description: 'AI-driven customer journey visualization that identifies pain points, drop-off moments, and optimization opportunities across touchpoints.',
      benefits: ['360-degree customer view', 'Behavioral pattern recognition', 'Journey optimization suggestions', 'Cross-channel tracking']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Machine learning algorithms that predict customer behavior, churn risk, and lifetime value to enable proactive customer experience improvements.',
      benefits: ['Churn prediction models', 'LTV forecasting', 'Behavioral scoring', 'Risk assessment']
    },
    {
      icon: Eye,
      title: 'Real-time Experience Monitoring',
      description: 'Continuous monitoring of customer interactions with instant alerts for negative experiences and automated response triggers.',
      benefits: ['Live experience tracking', 'Instant alert system', 'Automated response triggers', 'Performance dashboards']
    },
    {
      icon: TrendingUp,
      title: 'Personalization Engine',
      description: 'AI-powered personalization that adapts content, recommendations, and experiences based on individual customer preferences and behavior.',
      benefits: ['Dynamic content adaptation', 'Behavioral targeting', 'A/B testing automation', 'Conversion optimization']
    },
    {
      icon: MessageCircle,
      title: 'Voice of Customer Analytics',
      description: 'Comprehensive analysis of customer feedback from surveys, social media, support tickets, and direct communications.',
      benefits: ['Multi-source feedback analysis', 'Trend identification', 'Priority scoring', 'Actionable insights']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$1,800',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 customer interactions/month',
        'Basic sentiment analysis',
        'Standard reporting',
        'Email support',
        'Basic journey mapping'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,500',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100,000 customer interactions/month',
        'Advanced AI analytics',
        'Predictive modeling',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Real-time monitoring'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$9,000',
      period: '/month',
      description: 'For large-scale deployments',
      features: [
        'Unlimited customer interactions',
        'Custom AI models',
        'White-label solutions',
        '24/7 dedicated support',
        'Advanced integrations',
        'Custom workflows',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce & Retail',
      description: 'Optimize customer journeys, reduce cart abandonment, and increase conversion rates with AI-powered insights.',
      icon: ShoppingCart,
      benefits: ['Cart abandonment analysis', 'Personalized recommendations', 'Customer segmentation', 'Conversion optimization']
    },
    {
      title: 'SaaS & Technology',
      description: 'Improve user onboarding, reduce churn, and increase customer satisfaction with behavioral analytics.',
      icon: Cpu,
      benefits: ['User behavior tracking', 'Feature adoption analysis', 'Churn prediction', 'Product optimization']
    },
    {
      title: 'Financial Services',
      description: 'Enhance customer experience while maintaining security and compliance in banking and financial applications.',
      icon: DollarSign,
      benefits: ['Secure experience analytics', 'Compliance monitoring', 'Risk assessment', 'Customer satisfaction tracking']
    },
    {
      title: 'Healthcare',
      description: 'Improve patient experience and satisfaction while maintaining privacy and HIPAA compliance.',
      icon: Heart,
      benefits: ['Patient journey mapping', 'Satisfaction tracking', 'Privacy-compliant analytics', 'Care optimization']
    }
  ];

  const metrics = [
    {
      title: 'Customer Satisfaction Score (CSAT)',
      value: '94%',
      improvement: '+18%',
      description: 'Average improvement in customer satisfaction scores'
    },
    {
      title: 'Net Promoter Score (NPS)',
      value: '72',
      improvement: '+25',
      description: 'Average NPS improvement across implementations'
    },
    {
      title: 'Customer Churn Reduction',
      value: '35%',
      improvement: '-35%',
      description: 'Average reduction in customer churn rates'
    },
    {
      title: 'Response Time',
      value: '<2min',
      improvement: '85% faster',
      description: 'Average response time to customer issues'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Customer Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Customer Experience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                with AI Analytics
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage artificial intelligence to understand your customers like never before. 
              Get real-time insights, predict behavior, and deliver personalized experiences 
              that drive satisfaction and loyalty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-purple-400 mb-2">{metric.improvement}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with comprehensive analytics to deliver 
              actionable insights that transform customer experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your customer analytics needs. 
              All plans include our core AI-powered features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-gray-700'
                } hover:border-purple-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Customer Experience Analytics platform is trusted across industries to 
              improve customer satisfaction and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that trust our AI-powered platform to understand 
              customers and deliver exceptional experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerExperienceAnalytics;