import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Atom,
  Brain,
  TrendingUp,
  Shield,
  BarChart3,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  Activity,
  Workflow,
  Target,
  Rocket,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Check,
  X,
  Zap,
  Users,
  Coins,
  ChartLine,
  Target as TargetIcon,
  Gauge,
  Zap as ZapIcon
} from 'lucide-react';

const QuantumAITradingPlatform = () => {
  const features = [
    {
      title: 'Quantum Computing Power',
      description: 'Leverage quantum algorithms for ultra-fast market analysis and pattern recognition',
      icon: Atom,
      benefits: ['1000x faster than classical computing', 'Quantum advantage in complex calculations', 'Real-time market simulation']
    },
    {
      title: 'AI-Powered Market Prediction',
      description: 'Advanced machine learning models that predict market movements with high accuracy',
      icon: Brain,
      benefits: ['95% prediction accuracy', 'Multi-timeframe analysis', 'Adaptive learning algorithms']
    },
    {
      title: 'Real-Time Risk Management',
      description: 'Instant risk assessment and portfolio optimization using quantum algorithms',
      icon: Shield,
      benefits: ['Real-time risk monitoring', 'Automated stop-loss management', 'Portfolio diversification']
    },
    {
      title: 'High-Frequency Trading',
      description: 'Ultra-low latency trading execution with quantum-enhanced speed',
      icon: Zap,
      benefits: ['Microsecond execution', 'Advanced order routing', 'Market making capabilities']
    },
    {
      title: 'Portfolio Optimization',
      description: 'Quantum algorithms for optimal asset allocation and rebalancing',
      icon: Target,
      benefits: ['Optimal asset allocation', 'Dynamic rebalancing', 'Risk-adjusted returns']
    },
    {
      title: 'Market Sentiment Analysis',
      description: 'AI-powered analysis of news, social media, and market sentiment',
      icon: Activity,
      benefits: ['Sentiment scoring', 'News impact analysis', 'Social media monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'For professional traders and small investment firms',
      features: [
        'Quantum AI trading algorithms',
        'Real-time market data',
        'Advanced risk management',
        'Portfolio optimization',
        'API access',
        'Email support',
        'Up to 5 trading accounts',
        'Basic reporting'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Institutional',
      price: '$12,999',
      period: '/month',
      description: 'For institutional investors and hedge funds',
      features: [
        'Full quantum computing access',
        'Custom AI models',
        'Advanced risk analytics',
        'White-label solutions',
        'Priority support',
        'Custom integrations',
        'Unlimited accounts',
        'Advanced reporting',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$29,999',
      period: '/month',
      description: 'For large financial institutions and banks',
      features: [
        'Exclusive quantum access',
        'Custom development',
        'On-premise deployment',
        'Regulatory compliance',
        '24/7 dedicated support',
        'Custom algorithms',
        'Multi-exchange support',
        'Advanced analytics',
        'Compliance reporting'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const tradingFeatures = [
    {
      title: 'Multi-Asset Trading',
      description: 'Trade stocks, bonds, forex, commodities, and cryptocurrencies',
      icon: Coins,
      details: ['Global market access', 'Real-time pricing', 'Advanced order types']
    },
    {
      title: 'Algorithmic Trading',
      description: 'Custom trading strategies and automated execution',
      icon: Workflow,
      details: ['Strategy builder', 'Backtesting engine', 'Paper trading']
    },
    {
      title: 'Risk Analytics',
      description: 'Comprehensive risk assessment and management tools',
      icon: Shield,
      details: ['VaR calculations', 'Stress testing', 'Scenario analysis']
    },
    {
      title: 'Performance Tracking',
      description: 'Advanced performance metrics and attribution analysis',
      icon: ChartLine,
      details: ['Sharpe ratio', 'Alpha generation', 'Drawdown analysis']
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      role: 'Portfolio Manager',
      company: 'Quantum Capital Partners',
      content: 'The quantum AI trading platform has given us a significant edge in the market. Our returns have improved by 35% since implementation.',
      rating: 5,
      returns: '+35%'
    },
    {
      name: 'Lisa Chang',
      role: 'Chief Investment Officer',
      company: 'Global Investment Fund',
      content: 'The speed and accuracy of the quantum algorithms are incredible. We can now execute complex strategies in milliseconds.',
      rating: 5,
      returns: '+42%'
    },
    {
      name: 'Robert Martinez',
      role: 'Trading Director',
      company: 'Tech Trading Solutions',
      content: 'This platform has revolutionized our trading operations. The AI predictions are remarkably accurate.',
      rating: 5,
      returns: '+28%'
    }
  ];

  const performanceMetrics = [
    { metric: 'Execution Speed', value: '<1ms', improvement: '1000x faster' },
    { metric: 'Prediction Accuracy', value: '95%', improvement: '+15% vs traditional' },
    { metric: 'Risk Reduction', value: '40%', improvement: 'Significant decrease' },
    { metric: 'Return Enhancement', value: '+35%', improvement: 'Average improvement' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-4 py-2 text-zion-cyan text-sm font-medium mb-6">
              <Atom className="w-4 h-4" />
              <span>Quantum AI Trading Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Quantum AI Trading Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Revolutionize your trading with the world's first quantum-powered AI trading platform. 
              Experience unprecedented speed, accuracy, and returns in financial markets.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Trading Today
              </Link>
              <button className="flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-darker border border-zion-purple/20 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{metric.value}</div>
                <div className="text-sm text-zion-slate-light mb-1">{metric.metric}</div>
                <div className="text-xs text-zion-purple/70">{metric.improvement}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Revolutionary Trading Technology
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Combine the power of quantum computing with advanced AI to achieve unprecedented trading performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="py-20 bg-zion-blue-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Trading Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Everything you need for professional trading in one integrated platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-zion-slate-light mb-3">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Trading Power
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Select the plan that matches your trading volume and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20' 
                    : 'border-zion-purple/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/get-started'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30 border border-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zion-blue-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trading Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how our platform has transformed trading performance for professionals worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark border border-zion-purple/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.returns}
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  <p className="text-zion-cyan text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Trade with Quantum AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of trading with the most advanced platform ever created
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get Started Today</h2>
              <p className="text-zion-slate-light mb-8">
                Ready to experience the future of trading? Our team of quantum computing and AI experts 
                is here to help you get started with the most advanced trading platform available.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Request Platform Access</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Trading Requirements"
                    rows={4}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Request Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAITradingPlatform;