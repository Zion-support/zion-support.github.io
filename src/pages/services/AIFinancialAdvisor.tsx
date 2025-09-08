import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Target, 
  PieChart, 
  BarChart3, 
  Calculator,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  FileText,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Award,
  BarChart3 as Graph,
  PiggyBank,
  Building,
  Globe,
  Brain
} from 'lucide-react';

export default function AIFinancialAdvisor() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Investment Analysis',
      description: 'Advanced machine learning algorithms analyze market trends and provide personalized investment recommendations',
      benefits: ['Real-time market analysis', 'Risk assessment', 'Portfolio optimization', 'Market prediction models']
    },
    {
      icon: Target,
      title: 'Personalized Financial Planning',
      description: 'Custom financial plans tailored to your goals, risk tolerance, and life circumstances',
      benefits: ['Goal-based planning', 'Retirement planning', 'Tax optimization', 'Estate planning']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for your financial portfolio',
      benefits: ['Diversification analysis', 'Stress testing', 'Insurance recommendations', 'Emergency fund planning']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Real-time portfolio performance monitoring with actionable insights and recommendations',
      benefits: ['Performance analytics', 'Benchmark comparison', 'Rebalancing alerts', 'Tax-loss harvesting']
    }
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for individuals starting their financial journey',
      features: [
        'Basic financial planning',
        'Investment recommendations',
        'Monthly portfolio review',
        'Email support',
        'Basic tax optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing wealth and complex financial situations',
      features: [
        'Advanced financial planning',
        'Real-time portfolio monitoring',
        'Quarterly strategy sessions',
        'Priority support',
        'Advanced tax strategies',
        'Estate planning guidance'
      ],
      popular: true
    },
    {
      name: 'Wealth Management',
      price: '$499',
      period: '/month',
      description: 'For high-net-worth individuals and complex portfolios',
      features: [
        'Comprehensive wealth management',
        'Dedicated financial advisor',
        'Weekly portfolio reviews',
        '24/7 support',
        'Alternative investments',
        'International tax planning'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'Investment Management',
      description: 'AI-driven portfolio management with automatic rebalancing and risk optimization',
      icon: Graph,
      price: 'From $199/month'
    },
    {
      title: 'Retirement Planning',
      description: 'Comprehensive retirement planning with multiple scenario analysis and optimization',
      icon: Target,
      price: 'From $149/month'
    },
    {
      title: 'Tax Optimization',
      description: 'Advanced tax strategies to minimize your tax burden and maximize returns',
      icon: Calculator,
      price: 'From $99/month'
    },
    {
      title: 'Estate Planning',
      description: 'Strategic estate planning to protect and transfer your wealth efficiently',
      icon: Building,
      price: 'From $299/month'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Entrepreneur',
      company: 'TechStart Inc.',
      content: 'AI Financial Advisor transformed my investment strategy. The AI insights helped me achieve 23% better returns while reducing risk.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Retirement Planning',
      company: 'Individual Investor',
      content: 'The retirement planning tools are incredible. I now have a clear path to financial freedom with confidence.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      company: 'Creative Solutions',
      content: 'As a business owner, the tax optimization strategies saved me thousands and simplified my financial management.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Financial Advisor - Zion Tech Group"
        description="Revolutionary AI-powered financial advisory platform that provides personalized investment strategies, comprehensive financial planning, and intelligent portfolio management."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/20 text-green-300 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              AI-Powered Financial Advisory
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Financial Advisor
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of financial planning with AI-powered investment analysis, 
              personalized strategies, and intelligent portfolio management. Build wealth smarter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Free Consultation
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-green-500 hover:text-green-300 transition-all duration-300">
                View Demo
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
              Revolutionary Financial Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Harness the power of AI to make smarter financial decisions and build lasting wealth
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Services Section */}
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
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From investment management to estate planning, we cover every aspect of your financial life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-green-400 font-semibold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your financial needs and goals
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
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have transformed their financial future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of clients who have already transformed their financial lives with AI Financial Advisor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Consultation
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}