import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield, 
  Clock,
  CheckCircle,
  Database,
  PieChart,
  LineChart,
  Target,
  Search,
  Globe,
  Users,
  FileText,
  Sparkles
} from 'lucide-react';

export default function AIDataAnalytics() {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting models that predict future trends, customer behavior, and business outcomes'
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Interactive visualizations and live data monitoring with customizable KPI tracking'
    },
    {
      icon: Search,
      title: 'Natural Language Queries',
      description: 'Ask questions about your data in plain English and get instant insights and visualizations'
    },
    {
      icon: Target,
      title: 'Anomaly Detection',
      description: 'Automatically identify unusual patterns, outliers, and potential issues in your data'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'AI-driven customer clustering and behavioral analysis for targeted marketing strategies'
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-powered insights and recommendations'
    }
  ];

  const benefits = [
    'Increase revenue by 25% with data-driven insights',
    'Reduce decision-making time by 70% with real-time analytics',
    'Improve customer retention by 40% through behavioral analysis',
    'Cut operational costs by 30% with predictive maintenance',
    'Boost marketing ROI by 50% with customer segmentation',
    'Identify new business opportunities with trend analysis'
  ];

  const pricing = [
    {
      name: 'Analyst',
      price: '$129',
      period: '/month',
      description: 'Perfect for small teams and individual analysts',
      features: [
        'Up to 10GB data storage',
        'Basic AI analytics models',
        'Standard dashboard templates',
        'Email support',
        'Basic reporting tools',
        '5 user accounts'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and data teams',
      features: [
        'Up to 100GB data storage',
        'Advanced AI models and ML algorithms',
        'Custom dashboard creation',
        'Priority support',
        'Advanced reporting and automation',
        'API access',
        '25 user accounts',
        'Real-time data processing'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$699',
      period: '/month',
      description: 'For large organizations with complex data needs',
      features: [
        'Unlimited data storage',
        'Custom AI model training',
        'White-label solution',
        'Dedicated account manager',
        'SLA guarantees',
        'Advanced security and compliance',
        'Custom integrations',
        'Unlimited users'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="AI Data Analytics - Intelligent Business Intelligence Platform"
        description="Transform your data into actionable insights with AI-powered analytics, predictive modeling, and real-time dashboards. Boost revenue by 25% with data-driven decisions."
        canonical="/services/ai-data-analytics"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-600/10 to-pink-600/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                AI Data Analytics
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform your data into actionable insights with AI-powered analytics, 
                predictive modeling, and intelligent business intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                AI-Powered Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage artificial intelligence to uncover hidden patterns, predict future trends, 
                and make data-driven decisions that drive business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Proven Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of companies that have transformed their business intelligence 
                with AI-powered analytics and predictive insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your data analytics needs and team size. 
                All plans include a 14-day free trial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-orange-500/50 shadow-lg shadow-orange-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white'
                      : 'border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using AI to transform raw data into 
                actionable insights that drive growth and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}