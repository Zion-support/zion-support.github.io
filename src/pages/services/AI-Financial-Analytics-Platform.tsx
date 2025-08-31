import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  DollarSign, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  Users,
  MessageSquare,
  FileText,
  Globe,
  Rocket,
  Cpu,
  Database,
  Cloud,
  Lock,
  Play,
  PieChart,
  Target,
  AlertTriangle,
  LineChart,
  Activity,
  Calculator,
  Eye,
  Search,
  Filter,
  Download,
  Share2
} from 'lucide-react';

const AIFinancialAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      title: 'Real-time Market Intelligence',
      description: 'AI-powered market analysis with predictive insights and trend forecasting',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Risk Assessment & Management',
      description: 'Advanced risk modeling with AI-driven threat detection and mitigation strategies',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Portfolio Optimization',
      description: 'Machine learning algorithms for optimal asset allocation and portfolio rebalancing',
      icon: PieChart,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Fraud Detection & Prevention',
      description: 'Real-time fraud monitoring with behavioral analysis and anomaly detection',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Predictive Financial Modeling',
      description: 'AI-powered forecasting models for revenue, expenses, and market trends',
      icon: LineChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Regulatory Compliance Automation',
      description: 'Automated compliance monitoring and reporting for financial regulations',
      icon: FileText,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 user accounts',
        'Basic financial analytics',
        'Standard reporting',
        'Email support',
        '10GB data storage',
        'Basic risk assessment'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing financial institutions',
      features: [
        'Up to 25 user accounts',
        'Advanced AI analytics',
        'Real-time market data',
        'Custom dashboards',
        'Priority support',
        '100GB data storage',
        'API access',
        'Advanced risk modeling',
        'Fraud detection'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large financial institutions and enterprises',
      features: [
        'Unlimited user accounts',
        'Full AI suite',
        'Custom model training',
        'White-label solution',
        'Dedicated support',
        'Unlimited storage',
        'Advanced security',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      title: '40% Faster Decision Making',
      description: 'AI-driven insights accelerate financial decision processes',
      icon: Clock,
      metric: '40%'
    },
    {
      title: '35% Risk Reduction',
      description: 'Advanced risk modeling minimizes financial exposure',
      icon: Shield,
      metric: '35%'
    },
    {
      title: '99.99% Accuracy',
      description: 'Machine learning models provide highly accurate predictions',
      icon: Target,
      metric: '99.99%'
    },
    {
      title: '24/7 Monitoring',
      description: 'Continuous financial monitoring and alerting',
      icon: Activity,
      metric: '24/7'
    }
  ];

  const useCases = [
    {
      title: 'Investment Banking',
      description: 'Portfolio optimization, risk assessment, and market analysis',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Commercial Banking',
      description: 'Credit risk assessment, fraud detection, and compliance monitoring',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Insurance',
      description: 'Risk modeling, claims analysis, and premium optimization',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Corporate Finance',
      description: 'Financial planning, budgeting, and performance analysis',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Financial Analytics
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Financial Analytics
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your financial operations with AI-driven insights, predictive analytics, and intelligent risk management. 
              Make smarter financial decisions with unprecedented accuracy and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
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
              Revolutionary AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of financial analytics with cutting-edge AI capabilities that adapt to your business needs.
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
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform is designed to serve diverse financial sectors with specialized solutions.
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
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join hundreds of financial institutions who have transformed their operations with our AI platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your institution size and needs. All plans include a 14-day free trial.
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
                className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-400 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and experience unprecedented financial intelligence and risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialAnalyticsPlatform;