import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Megaphone, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Mail, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  FileText,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Award,
  Brain,
  Zap,
  Globe,
  Smartphone,
  Bell,
  ShoppingCart,
  Building,
  Home
} from 'lucide-react';

export default function AIMarketingAutomation() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Audience Targeting',
      description: 'Intelligent audience segmentation and targeting using machine learning algorithms',
      benefits: ['Behavioral analysis', 'Predictive modeling', 'Real-time optimization', 'Cross-channel insights']
    },
    {
      icon: Target,
      title: 'Automated Campaign Management',
      description: 'End-to-end campaign automation with intelligent optimization and A/B testing',
      benefits: ['Smart scheduling', 'Performance optimization', 'Budget management', 'ROI tracking']
    },
    {
      icon: Users,
      title: 'Personalized Content Delivery',
      description: 'Dynamic content personalization based on user behavior and preferences',
      benefits: ['Dynamic content', 'Behavioral triggers', 'Multi-variant testing', 'Real-time adaptation']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics & Insights',
      description: 'Comprehensive marketing analytics with actionable insights and predictive recommendations',
      benefits: ['Performance metrics', 'Predictive analytics', 'Competitive analysis', 'ROI optimization']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10,000 contacts',
        'Basic automation workflows',
        'Email marketing',
        'Social media posting',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        'Up to 100,000 contacts',
        'Advanced automation',
        'Multi-channel campaigns',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with complex marketing needs',
      features: [
        'Unlimited contacts',
        'Full AI capabilities',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'API access'
      ],
      popular: false
    }
  ];

  const channels = [
    {
      title: 'Email Marketing',
      description: 'AI-powered email campaigns with personalization and automation',
      icon: Mail,
      features: ['Smart segmentation', 'Behavioral triggers', 'A/B testing', 'Performance optimization']
    },
    {
      title: 'Social Media',
      description: 'Automated social media management across all platforms',
      icon: MessageSquare,
      features: ['Content scheduling', 'Engagement tracking', 'Trend analysis', 'Cross-platform posting']
    },
    {
      title: 'SMS Marketing',
      description: 'Intelligent SMS campaigns with personalization and automation',
      icon: Smartphone,
      features: ['Smart timing', 'Personalized content', 'Compliance management', 'Delivery tracking']
    },
    {
      title: 'Web Push Notifications',
      description: 'Targeted push notifications to increase engagement and conversions',
      icon: Bell,
      features: ['Behavioral targeting', 'Smart timing', 'Personalization', 'A/B testing']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Drive sales with personalized product recommendations and abandoned cart recovery',
      icon: ShoppingCart,
      results: 'Average 35% increase in conversion rates'
    },
    {
      title: 'B2B Marketing',
      description: 'Generate and nurture leads with intelligent lead scoring and nurturing',
      icon: Building,
      results: 'Average 40% increase in lead quality'
    },
    {
      title: 'SaaS Companies',
      description: 'Reduce churn and increase user engagement with behavioral automation',
      icon: Zap,
      results: 'Average 25% reduction in churn rate'
    },
    {
      title: 'Real Estate',
      description: 'Automate follow-ups and nurture prospects through the sales cycle',
      icon: Home,
      results: 'Average 30% increase in deal closure rate'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Marketing Automation Platform - Zion Tech Group"
        description="Revolutionary AI-powered marketing automation platform that transforms how businesses engage with customers through intelligent personalization, automated workflows, and predictive analytics."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium mb-6">
              <Megaphone className="w-4 h-4 mr-2" />
              AI-Powered Marketing Automation
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Marketing Automation Platform
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your marketing with AI-powered automation, intelligent personalization, 
              and predictive analytics. Engage customers at the right time with the right message.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-300 transition-all duration-300">
                Watch Demo
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Revolutionary Marketing Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of marketing with cutting-edge AI capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Multi-Channel Marketing Automation
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Reach your audience across all channels with intelligent automation and personalization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-400 mb-4">{channel.description}</p>
                <ul className="space-y-2">
                  {channel.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how businesses across different industries achieve remarkable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="text-blue-400 font-semibold text-sm">{useCase.results}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your marketing automation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI Marketing Automation to increase engagement and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}