import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  BarChart3, 
  Code, 
  Server, 
  Smartphone, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Leaf, 
  Truck, 
  Building, 
  PenTool, 
  Eye, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
  Satellite,
  Wifi,
  Bot,
  Layers,
  Calendar,
  Clock,
  CheckSquare,
  FileText,
  PieChart,
  TrendingDown,
  AlertTriangle,
  UserCheck,
  Team,
  LineChart,
  Activity,
  Wallet,
  CreditCard,
  PiggyBank,
  Calculator,
  Percent,
  TrendingUp2,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  Settings,
  Database2,
  Network2,
  Shield2,
  Lock2,
  Key,
  Fingerprint,
  EyeOff,
  EyeOn,
  Download,
  Upload,
  Share2,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  Divide,
  Equal,
  Hash,
  Hash2,
  Hash3,
  Hash4,
  Hash5,
  Hash6,
  Hash7,
  Hash8,
  Hash9,
  Hash10,
  Play,
  Bank
} from 'lucide-react';

const AIFinancialAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Financial Forecasting',
      description: 'Predict future financial trends with 95% accuracy using advanced machine learning algorithms',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Real-time Market Analysis',
      description: 'Live market data integration with AI-driven insights and trend detection',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Automated Risk Assessment',
      description: 'Intelligent risk scoring and automated alerts for portfolio management',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Smart Portfolio Optimization',
      description: 'AI-recommended portfolio adjustments based on market conditions and goals',
      icon: PieChart,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Comprehensive Financial Reporting',
      description: 'Automated financial reports with customizable dashboards and insights',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Regulatory Compliance Monitoring',
      description: 'Automated compliance checking and regulatory reporting for financial institutions',
      icon: CheckCircle,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual investors and small portfolios',
      features: [
        'Up to 5 portfolios',
        'Basic AI forecasting',
        'Market data access',
        'Standard reports',
        'Email support',
        'Mobile app access',
        'Basic risk assessment'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for financial advisors and growing portfolios',
      features: [
        'Up to 25 portfolios',
        'Advanced AI analytics',
        'Real-time market data',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Advanced risk modeling',
        'Compliance monitoring',
        'White-label options'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For financial institutions and large portfolios',
      features: [
        'Unlimited portfolios',
        'Full AI capabilities',
        'Institutional data feeds',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Multi-tenant support',
        'Custom reporting',
        'Regulatory compliance'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      title: '40% Better Investment Returns',
      description: 'AI-powered insights lead to smarter investment decisions',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '60% Faster Financial Analysis',
      description: 'Automated processes reduce analysis time significantly',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: '90% Risk Reduction',
      description: 'Advanced risk modeling prevents portfolio losses',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: '24/7 Market Monitoring',
      description: 'Continuous AI monitoring with instant alerts',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const useCases = [
    {
      title: 'Individual Investors',
      description: 'Personal portfolio management with AI insights',
      icon: UserCheck,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Financial Advisors',
      description: 'Client portfolio optimization and risk management',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Hedge Funds',
      description: 'Institutional-grade analytics and risk modeling',
      icon: Building,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Banks & Credit Unions',
      description: 'Regulatory compliance and risk assessment',
      icon: Bank,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Financial Analytics
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Revolutionize Your{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Financial Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage advanced AI algorithms to make smarter investment decisions, optimize portfolios, and stay ahead of market trends with real-time financial analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to make informed financial decisions with AI-powered insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who Benefits from Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From individual investors to financial institutions, our platform scales to meet your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your financial analytics needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-green-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the measurable impact of AI-powered financial analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-12 border border-green-500/30"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Financial Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of investors and financial professionals using AI-powered analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialAnalyticsPlatform;