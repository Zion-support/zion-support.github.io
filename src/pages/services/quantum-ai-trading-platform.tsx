import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Atom,
  TrendingUp,
  BarChart3,
  Shield,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Lock,
  Eye,
  Clock,
  Award,
  Rocket,
  Briefcase,
  Building,
  Database,
  Cpu,
  Server,
  Network,
  Zap,
  Target,
  FileText,
  Microscope,
  Pill,
  Stethoscope,
  Hospital,
  Ambulance,
  Clipboard,
  AlertTriangle,
  BrainCircuit,
  Dna,
  TestTube,
  Syringe,
  HeartPulse,
  LineChart,
  PieChart,
  Activity,
  Globe,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Shield,
  Activity,
  Globe,
  Database,
  Cpu,
  Lock,
  Eye,
  Clock,
  Award,
  Rocket,
  Briefcase,
  Building,
  Heart,
  Code,
  Server,
  Network
} from 'lucide-react';

export function QuantumAITradingPlatform() {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Algorithm Optimization',
      description: 'Leverage quantum computing to solve complex optimization problems in milliseconds',
      benefits: ['1000x faster optimization', 'Quantum advantage in complex scenarios', 'Real-time portfolio rebalancing']
    },
    {
      icon: Brain,
      title: 'AI-Powered Market Analysis',
      description: 'Advanced machine learning algorithms analyze market patterns and predict trends',
      benefits: ['95% prediction accuracy', 'Real-time market insights', 'Multi-factor analysis']
    },
    {
      icon: LineChart,
      title: 'High-Frequency Trading',
      description: 'Ultra-low latency execution with quantum-enhanced decision making',
      benefits: ['Microsecond execution', 'Quantum speed advantage', 'Optimal trade timing']
    },
    {
      icon: Shield,
      title: 'Quantum-Secure Infrastructure',
      description: 'Post-quantum cryptography and advanced security protocols',
      benefits: ['Future-proof security', 'Quantum-resistant encryption', 'Regulatory compliance']
    },
    {
      icon: BarChart3,
      title: 'Portfolio Risk Management',
      description: 'Quantum Monte Carlo simulations for advanced risk assessment',
      benefits: ['Real-time risk monitoring', 'Stress testing scenarios', 'Optimal position sizing']
    },
    {
      icon: Globe,
      title: 'Global Market Access',
      description: 'Trade across multiple exchanges and asset classes worldwide',
      benefits: ['Multi-exchange connectivity', 'Global liquidity access', '24/7 trading capability']
    }
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'For professional traders and small funds',
      features: [
        'Up to 10 trading strategies',
        'Quantum algorithm access',
        'Real-time market data',
        'Basic risk management',
        'Email support',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Institutional',
      price: '$9,999',
      period: '/month',
      description: 'For hedge funds and institutional investors',
      features: [
        'Up to 100 trading strategies',
        'Full quantum platform access',
        'Advanced risk management',
        'Custom algorithm development',
        'Priority support',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large financial institutions',
      features: [
        'Unlimited trading strategies',
        'Custom quantum hardware',
        'Advanced compliance tools',
        'Multi-tenant architecture',
        '24/7 dedicated support',
        'On-premise deployment',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Hedge Funds',
      description: 'Advanced quantitative strategies with quantum computing advantage',
      icon: Building,
      benefits: ['Alpha generation', 'Risk optimization', 'Portfolio diversification']
    },
    {
      title: 'Asset Management',
      description: 'Intelligent portfolio management with quantum-enhanced analytics',
      icon: PieChart,
      benefits: ['Better returns', 'Lower volatility', 'Efficient allocation']
    },
    {
      title: 'Proprietary Trading',
      description: 'High-frequency trading with quantum speed advantage',
      icon: Activity,
      benefits: ['Microsecond execution', 'Market making', 'Arbitrage opportunities']
    },
    {
      title: 'Risk Management',
      description: 'Advanced risk assessment using quantum simulations',
      icon: Shield,
      benefits: ['Real-time monitoring', 'Stress testing', 'Regulatory compliance']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Chief Investment Officer',
      company: 'Quantum Capital Partners',
      content: 'The quantum advantage has given us a significant edge in complex arbitrage strategies.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Portfolio Manager',
      company: 'Global Asset Management',
      content: 'Our risk-adjusted returns improved by 40% after implementing the quantum platform.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Trading',
      company: 'Mercury Trading Group',
      content: 'The execution speed and accuracy have transformed our high-frequency trading operations.',
      rating: 5
    }
  ];

  const performanceMetrics = [
    {
      icon: TrendingUp,
      title: '1000x Faster',
      description: 'Quantum optimization compared to classical computing',
      metric: '1000x'
    },
    {
      icon: Target,
      title: '95% Accuracy',
      description: 'AI prediction accuracy in market forecasting',
      metric: '95%'
    },
    {
      icon: Clock,
      title: 'Microsecond Execution',
      description: 'Ultra-low latency trade execution',
      metric: '<1μs'
    },
    {
      icon: DollarSign,
      title: '40% ROI Improvement',
      description: 'Average improvement in risk-adjusted returns',
      metric: '40%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Quantum AI Trading Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize financial trading with the world's first quantum AI platform. Experience 1000x faster optimization and unprecedented market insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Unprecedented Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of trading with quantum computing and AI that delivers results beyond imagination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Quantum AI Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge quantum computing combined with advanced artificial intelligence for unprecedented trading capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-purple-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
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
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Enterprise-Grade Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access to quantum computing technology with flexible pricing for institutions of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-700/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                    : 'border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Designed for Financial Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is tailored to meet the unique needs of various financial institutions and trading strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                          {benefit}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Trusted by Financial Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what financial professionals say about the transformative impact of quantum AI trading
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready for Quantum Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading financial institutions in leveraging quantum computing for unprecedented trading advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  World's first quantum AI trading platform
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  Proven track record in financial technology
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  Dedicated financial services support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  Custom solutions for your institution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}