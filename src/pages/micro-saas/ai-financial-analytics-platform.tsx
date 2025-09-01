import React from 'react';
import { motion } from 'framer-motion';
import {

  TrendingUp, 
  BarChart3, 
  DollarSign, 
  PieChart, 
  Target, 
  Shield, 
  Cloud, 
  Database, 
  Cpu, 
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Headphones,
  Lightbulb,
  Globe,
  Phone,
  Mail,
  MapPin,
  LineChart,
  Calculator,
  AlertCircle
} from 'lucide-react';

export default function AIFinancialAnalyticsPlatform() {

  const features = [
    {

      icon: TrendingUp,
      title: 'AI Market Predictions',
      description: 'Advanced algorithms for market trend forecasting and investment insights'
    },
    {

      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Live financial data analysis and portfolio performance tracking'
    },
    {

      icon: DollarSign,
      title: 'Risk Assessment',
      description: 'Intelligent risk modeling and portfolio optimization strategies'
    },
    {

      icon: PieChart,
      title: 'Portfolio Management',
      description: 'Automated portfolio rebalancing and asset allocation optimization'
    }
  ];

  const capabilities = [
    {

      title: 'Predictive Market Analytics',
      description: 'AI-powered market trend analysis and investment opportunity identification',
      icon: TrendingUp
    },
    {

      title: 'Portfolio Optimization',
      description: 'Machine learning algorithms for optimal asset allocation and risk management',
      icon: Target
    },
    {

      title: 'Real-time Risk Monitoring',
      description: 'Continuous portfolio risk assessment and alert systems',
      icon: AlertCircle
    },
    {

      title: 'Financial Planning Tools',
      description: 'AI-driven financial planning and retirement strategy optimization',
      icon: Calculator
    },
    {

      title: 'Compliance & Reporting',
      description: 'Automated regulatory compliance and comprehensive financial reporting',
      icon: Shield
    },
    {

      title: 'Multi-Asset Support',
      description: 'Comprehensive coverage of stocks, bonds, ETFs, cryptocurrencies, and more',
      icon: PieChart
    }
  ];

  const benefits = [
    'Increase portfolio returns by up to 25%',
    'Reduce investment risk by 40%',
    'Save 15+ hours per week on financial analysis',
    'Achieve 95% prediction accuracy on market trends',
    'Real-time portfolio monitoring and alerts',
    'Automated compliance and reporting'
  ];

  const pricing = [
    {

      plan: 'Individual',
      price: '$99',
      period: '/month',
      features: [
        'Up to 5 portfolios',
        'Basic AI insights',
        'Market analysis',
        'Portfolio tracking',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {

      plan: 'Professional',
      price: '$299',
      period: '/month',
      features: [
        'Up to 25 portfolios',
        'Advanced AI analytics',
        'Risk management tools',
        'Portfolio optimization',
        'Priority support',
        'Custom dashboards',
        'API access'
      ],
      popular: true
    },
    {

      plan: 'Enterprise',
      price: '$799',
      period: '/month',
      features: [
        'Unlimited portfolios',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        'Advanced security',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const financialMetrics = [
    { metric: '95%', label: 'Prediction Accuracy' },
    { metric: '25%', label: 'Return Improvement' },
    { metric: '40%', label: 'Risk Reduction' },
    { metric: '24/7', label: 'Market Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial Analytics Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionize your financial decision-making with AI-powered analytics, predictive insights, and automated portfolio optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Start Investing Smarter
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Headphones className="w-5 h-5" />
                Financial Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Metrics Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {financialMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{item.metric}</div>
                <div className="text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Financial Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leverage the power of AI to make smarter financial decisions and maximize your investment returns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Financial Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive financial tools designed for individual investors and financial professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <capability.icon className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Financial Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your financial performance and achieve measurable investment improvements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Financial Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your investment needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 p-8 rounded-xl border ${

                  plan.popular 
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-slate-700'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://ziontechgroup.com/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${

                    plan.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of investors who are already using AI to make smarter financial decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Headphones className="w-5 h-5" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-green-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}