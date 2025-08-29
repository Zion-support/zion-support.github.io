import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  PieChart, 
  Target, 
  CheckCircle, 
  BarChart3, 
  Zap,
  Brain,
  Globe,
  Users,
  Calculator,
  FileText,
  AlertTriangle,
  Star,
  Award,
  Rocket,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  LineChart,
  PiggyBank,
  CreditCard,
  Building
} from 'lucide-react';

export default function AIFinancialAdvisor() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze market trends and provide personalized investment recommendations',
      benefits: ['Real-time market analysis', 'Predictive modeling', 'Risk assessment algorithms', 'Portfolio optimization']
    },
    {
      icon: PieChart,
      title: 'Portfolio Management',
      description: 'Intelligent portfolio construction and rebalancing based on your goals and risk tolerance',
      benefits: ['Asset allocation optimization', 'Automatic rebalancing', 'Diversification strategies', 'Performance tracking']
    },
    {
      icon: Target,
      title: 'Goal Planning',
      description: 'Comprehensive financial goal planning with AI-driven strategies for retirement, education, and major purchases',
      benefits: ['Retirement planning', 'Education funding', 'Home purchase strategies', 'Tax optimization']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation strategies to protect your investments',
      benefits: ['Volatility analysis', 'Downside protection', 'Insurance recommendations', 'Emergency fund planning']
    },
    {
      icon: TrendingUp,
      title: 'Tax Optimization',
      description: 'Intelligent tax planning and optimization strategies to maximize your after-tax returns',
      benefits: ['Tax-loss harvesting', 'Tax-efficient investing', 'Retirement account optimization', 'Estate planning']
    },
    {
      icon: Users,
      title: 'Personalized Advice',
      description: '24/7 access to AI financial advisors with personalized recommendations based on your unique situation',
      benefits: ['Personalized recommendations', 'Regular portfolio reviews', 'Market updates', 'Financial education']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for individuals starting their financial journey',
      features: [
        'Basic portfolio analysis',
        'Goal setting tools',
        'Market insights',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing investors and families',
      features: [
        'Advanced AI analysis',
        'Portfolio management',
        'Tax optimization',
        'Priority support',
        'Financial planning tools',
        'Retirement planning'
      ],
      popular: true
    },
    {
      name: 'Wealth Management',
      price: '$799',
      period: '/month',
      description: 'For high-net-worth individuals and families',
      features: [
        'Custom investment strategies',
        'Estate planning',
        'Philanthropic planning',
        'Dedicated advisor',
        'Alternative investments',
        'International diversification'
      ],
      popular: false
    }
  ];

  const investmentTypes = [
    {
      title: 'Stocks & ETFs',
      description: 'AI-optimized stock selection and ETF allocation strategies',
      icon: TrendingUp,
      risk: 'Medium-High',
      return: '8-12%'
    },
    {
      title: 'Bonds & Fixed Income',
      description: 'Fixed income strategies for income generation and capital preservation',
      icon: Shield,
      risk: 'Low-Medium',
      return: '3-6%'
    },
    {
      title: 'Real Estate',
      description: 'Real estate investment trusts (REITs) and property investment strategies',
      icon: Building,
      risk: 'Medium',
      return: '6-10%'
    },
    {
      title: 'Alternative Investments',
      description: 'Commodities, hedge funds, and private equity opportunities',
      icon: Rocket,
      risk: 'High',
      return: '10-20%'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Entrepreneur',
      content: 'The AI Financial Advisor helped me optimize my portfolio and save thousands in taxes. The personalized advice is incredible!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Retirement Planning',
      content: 'Finally, a financial advisor that actually understands my goals and provides actionable advice. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Family Financial Planning',
      content: 'The goal planning tools helped us create a clear path to our dream home. The AI insights are game-changing.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Financial Advisor - Zion Tech Group"
        description="Get personalized financial advice from AI-powered advisors. Optimize your portfolio, plan for retirement, and achieve your financial goals with intelligent investment strategies."
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
              AI-Powered Financial Planning
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial Advisor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized financial advice from advanced AI that understands your goals, analyzes market trends, 
              and optimizes your portfolio for maximum returns with intelligent risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
              >
                Start Planning
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200"
              >
                Watch Demo
              </a>
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
              Intelligent Financial Planning
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Financial Advisor combines cutting-edge technology with financial expertise to deliver 
              personalized investment strategies and comprehensive financial planning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
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

      {/* Investment Types Section */}
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
              Diversified Investment Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI analyzes multiple asset classes to create diversified portfolios that align with your goals and risk tolerance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentTypes.map((investment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <investment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{investment.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{investment.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-1">Risk Level</p>
                    <p className="text-white font-semibold">{investment.risk}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-1">Expected Return</p>
                    <p className="text-white font-semibold">{investment.return}</p>
                  </div>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your financial needs. All plans include our core AI financial advisory features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
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
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/request-quote"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have transformed their financial future with AI-powered advice.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey to financial freedom with AI-powered investment strategies and personalized financial planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
              >
                Start Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 transition-all duration-200"
              >
                Contact Advisor
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}