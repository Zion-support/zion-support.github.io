import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Shield, 
  Zap, 
  CheckCircle, 
  Clock, 
  Target, 
  BarChart3,
  Star,
  Award,
  Rocket,
  Globe,
  Lock,
  Cpu,
  Bell,
  Calendar,
  FileText,
  GitBranch,
  Building
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: Heart,
      title: 'AI-Powered Customer Insights',
      description: 'Machine learning algorithms analyze customer behavior to predict churn and identify upsell opportunities',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Users,
      title: 'Proactive Customer Engagement',
      description: 'Automated outreach and personalized communication based on customer lifecycle stages',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Churn Prevention',
      description: 'AI models identify at-risk customers and trigger automated retention campaigns',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Support Automation',
      description: 'AI chatbots and automated ticket routing for faster customer issue resolution',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Customer Health Scoring',
      description: 'Real-time health metrics and risk assessment for every customer account',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Automated Success Playbooks',
      description: 'Intelligent workflows that guide customers through onboarding and adoption',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 500 customers',
        'Basic AI insights',
        'Email automation',
        'Customer health scoring',
        'Basic reporting',
        'Email support'
      ],
      popular: false,
      color: 'from-slate-600 to-slate-700'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 2,000 customers',
        'Advanced AI features',
        'Multi-channel automation',
        'Predictive analytics',
        'Custom playbooks',
        'Priority support',
        'API access',
        'Advanced integrations'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Full AI suite access',
        'Custom AI models',
        'Dedicated success manager',
        'Advanced security',
        'SLA guarantees',
        'White-label options',
        'On-site training'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-700'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '25% Reduction in Customer Churn',
      description: 'AI-powered insights prevent customer loss proactively'
    },
    {
      icon: Users,
      title: '40% Increase in Customer Lifetime Value',
      description: 'Better engagement leads to higher customer value'
    },
    {
      icon: Target,
      title: '60% Faster Issue Resolution',
      description: 'Automated support and intelligent routing'
    },
    {
      icon: BarChart3,
      title: 'Real-time Customer Health Monitoring',
      description: 'Instant visibility into customer satisfaction and risk'
    }
  ];

  const useCases = [
    {
      title: 'SaaS Companies',
      description: 'Reduce churn and increase expansion revenue with AI-powered customer success',
      icon: Cpu
    },
    {
      title: 'E-commerce',
      description: 'Improve customer retention and drive repeat purchases',
      icon: Globe
    },
    {
      title: 'Enterprise B2B',
      description: 'Scale customer success operations with intelligent automation',
      icon: Building
    },
    {
      title: 'Startups',
      description: 'Build strong customer relationships from day one',
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Success Platform - Zion Tech Group"
        description="Revolutionary AI-powered customer success platform that reduces churn by 25% and increases customer lifetime value by 40%."
      />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 flex items-center justify-center mx-auto mb-8">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-6">
            AI Customer Success Platform
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transform your customer success with AI-powered insights, automated engagement, and predictive analytics. 
            Reduce churn by 25% and increase customer lifetime value by 40%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request-quote"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border border-pink-500 text-pink-400 px-8 py-4 rounded-lg font-medium hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI Customer Success?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful AI Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For Every Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-pink-500 shadow-2xl shadow-pink-500/20' 
                    : 'bg-slate-800/50 border border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">{tier.period}</span>
                  </div>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/25'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Success?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using AI-powered customer success to reduce churn and increase revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                Contact Sales
              </a>
              <a
                href="/request-quote"
                className="border border-pink-500 text-pink-400 px-8 py-4 rounded-lg font-medium hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}