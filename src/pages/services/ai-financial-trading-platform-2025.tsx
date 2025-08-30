import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Brain,
  Zap,
  Users,
  BarChart3,
  Rocket,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  Target,
  Heart,
  Eye,
  Activity,
  Code,
  Server,
  Network,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Lightbulb,
  Sparkles,
  Atom,
  AlertTriangle,
  Bug,
  Search,
  Filter,
  Sort,
  Download,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Plus,
  Minus,
  X,
  Check,
  Info,
  Key,
  Fingerprint,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  FileText,
  Calendar,
  Timer,
  Stopwatch,
  Thermometer,
  Compass,
  Map,
  Navigation
} from 'lucide-react';

export function AIFinancialTradingPlatform2025() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Trading Algorithms',
      description: 'Advanced machine learning algorithms that analyze market patterns and execute trades automatically',
      benefits: ['Pattern recognition', 'Predictive modeling', 'Automated execution']
    },
    {
      icon: TrendingUp,
      title: 'Real-time Risk Management',
      description: 'Comprehensive risk assessment and portfolio protection with instant alerts',
      benefits: ['Portfolio monitoring', 'Risk scoring', 'Stop-loss automation']
    },
    {
      icon: Zap,
      title: 'High-Frequency Trading',
      description: 'Ultra-fast execution with microsecond latency for optimal trading performance',
      benefits: ['Low latency', 'High throughput', 'Market making']
    },
    {
      icon: Users,
      title: 'Multi-Asset Support',
      description: 'Trade across multiple asset classes including stocks, bonds, forex, and cryptocurrencies',
      benefits: ['Diversified portfolios', 'Cross-asset correlation', 'Unified platform']
    }
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Perfect for individual traders and small investment firms',
      features: [
        'Up to $1M trading volume',
        'Basic AI algorithms',
        'Risk management tools',
        'Standard reporting',
        'Email support',
        'Basic integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Institutional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for hedge funds and institutional investors',
      features: [
        'Up to $100M trading volume',
        'Advanced AI models',
        'Real-time risk monitoring',
        'Custom algorithms',
        'Priority support',
        'API access',
        'Advanced analytics',
        'Multi-user access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large financial institutions with unlimited trading capacity',
      features: [
        'Unlimited trading volume',
        'Custom AI models',
        'On-premise deployment',
        '24/7 dedicated support',
        'Custom integrations',
        'SLA guarantees',
        'White-label options',
        'Advanced security'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const tradingFeatures = [
    {
      title: 'Algorithmic Trading',
      description: 'Sophisticated trading algorithms that adapt to market conditions in real-time',
      icon: Brain,
      benefits: ['Machine learning', 'Pattern recognition', 'Adaptive strategies']
    },
    {
      title: 'Risk Analytics',
      description: 'Comprehensive risk assessment with VaR, stress testing, and scenario analysis',
      icon: TrendingUp,
      benefits: ['Risk modeling', 'Stress testing', 'Portfolio optimization']
    },
    {
      title: 'Market Intelligence',
      description: 'Real-time market data and sentiment analysis for informed decision making',
      icon: BarChart3,
      benefits: ['Market data', 'Sentiment analysis', 'News integration']
    },
    {
      title: 'Compliance & Reporting',
      description: 'Built-in compliance tools and comprehensive reporting for regulatory requirements',
      icon: Shield,
      benefits: ['Regulatory compliance', 'Audit trails', 'Automated reporting']
    }
  ];

  const tradingMetrics = [
    { metric: '99.9%', label: 'Uptime' },
    { metric: '<1ms', label: 'Latency' },
    { metric: '$50B+', label: 'Trading Volume' },
    { metric: '24/7', label: 'Market Access' }
  ];

  const complianceFrameworks = [
    'SEC',
    'FINRA',
    'CFTC',
    'NFA',
    'MiFID II',
    'GDPR',
    'SOX',
    'Basel III'
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-blue via-blue-900 to-zion-blue">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Financial Trading Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your trading operations with AI-powered algorithms, 
              real-time risk management, and institutional-grade execution. 
              Maximize returns while minimizing risk across all asset classes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Trading Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with institutional-grade 
              infrastructure to provide unparalleled trading capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Institutional Trading Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built specifically for professional traders with industry-leading 
              performance and compliance capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Trading Performance
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our platform delivers exceptional results with industry-leading 
              performance and reliability metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tradingMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Financial Compliance & Security
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our platform meets the highest security standards and compliance requirements 
              for financial institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-cyan-400">{framework}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Competitive Trading Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your trading needs. All plans include 
              our core AI capabilities and enterprise-grade security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/pricing'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders already using our AI-powered 
              trading platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Full Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}