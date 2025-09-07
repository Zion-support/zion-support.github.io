import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Target, 
  Zap, 
  BarChart3,
  DollarSign,
  Lock,
  Star,
  Globe,
  Cpu,
  Award,
  Rocket,
  Lightbulb,
  PieChart,
  Activity,
  Smartphone,
  Calculator,
  LineChart,
  AlertCircle,
  Eye,
  Users,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIFinancialRiskManagement: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Risk Assessment',
      description: 'Advanced machine learning algorithms for real-time risk identification and scoring'
    },
    {
      icon: Shield,
      title: 'Comprehensive Risk Monitoring',
      description: '24/7 monitoring of market risks, credit risks, operational risks, and compliance risks'
    },
    {
      icon: BarChart3,
      title: 'Predictive Risk Analytics',
      description: 'AI-driven forecasting of potential risk events and their impact on financial performance'
    },
    {
      icon: Target,
      title: 'Automated Risk Mitigation',
      description: 'Intelligent recommendations and automated actions to reduce risk exposure'
    },
    {
      icon: AlertTriangle,
      title: 'Real-time Risk Alerts',
      description: 'Instant notifications for critical risk events with actionable insights'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 Type II compliance and regulatory adherence'
    }
  ];

  const useCases = [
    {
      title: 'Banking & Financial Services',
      description: 'Comprehensive risk management for banks, credit unions, and financial institutions',
      icon: DollarSign,
      benefits: ['Reduced credit losses by 40%', 'Improved regulatory compliance', 'Real-time risk monitoring']
    },
    {
      title: 'Investment Management',
      description: 'Portfolio risk assessment and optimization for investment firms and asset managers',
      icon: TrendingUp,
      benefits: ['25% improvement in risk-adjusted returns', 'Better portfolio diversification', 'Reduced volatility']
    },
    {
      title: 'Insurance Risk Assessment',
      description: 'AI-powered underwriting and claims risk analysis for insurance companies',
      icon: Shield,
      benefits: ['30% faster risk assessment', 'Improved loss ratio', 'Better pricing accuracy']
    },
    {
      title: 'Corporate Treasury',
      description: 'Enterprise risk management for corporate treasury and finance departments',
      icon: Building,
      benefits: ['Centralized risk oversight', 'Improved cash flow management', 'Better hedging strategies']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small financial institutions and startups',
      features: [
        'Up to $10M in assets under management',
        'Basic risk assessment models',
        'Standard risk monitoring dashboard',
        'Email support',
        'Basic reporting (daily)',
        'Up to 5 team members',
        'Standard integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing financial institutions with advanced risk management needs',
      features: [
        'Up to $100M in assets under management',
        'Advanced AI risk models',
        'Custom risk dashboards',
        'Priority support (2-hour response)',
        'Real-time risk monitoring',
        'Up to 25 team members',
        'Advanced integrations',
        'Custom risk scoring',
        'Predictive analytics'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large financial institutions with enterprise-scale risk management needs',
      features: [
        'Unlimited assets under management',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated risk manager',
        'Custom integrations development',
        'Unlimited team members',
        'Advanced security features',
        'SLA guarantees',
        'Custom reporting & analytics'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const riskMetrics = [
    {
      icon: TrendingUp,
      title: 'Risk Reduction',
      value: '45%',
      description: 'Average reduction in risk exposure'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      value: '$2.1M',
      description: 'Average annual cost savings'
    },
    {
      icon: Shield,
      title: 'Compliance Score',
      value: '98%',
      description: 'Regulatory compliance rate'
    },
    {
      icon: Zap,
      title: 'Response Time',
      value: '<5min',
      description: 'Risk alert response time'
    }
  ];

  const riskTypes = [
    {
      title: 'Market Risk',
      description: 'Monitor and manage exposure to market fluctuations, interest rates, and currency movements',
      icon: TrendingUp,
      features: ['Value at Risk (VaR) calculations', 'Stress testing scenarios', 'Real-time market monitoring']
    },
    {
      title: 'Credit Risk',
      description: 'Assess and manage credit exposure across portfolios and counterparties',
      icon: Users,
      features: ['Credit scoring models', 'Default probability analysis', 'Portfolio concentration limits']
    },
    {
      title: 'Operational Risk',
      description: 'Identify and mitigate risks from internal processes, systems, and human factors',
      icon: Cpu,
      features: ['Process risk mapping', 'Incident tracking', 'Control effectiveness monitoring']
    },
    {
      title: 'Compliance Risk',
      description: 'Ensure adherence to regulatory requirements and industry standards',
      icon: Lock,
      features: ['Regulatory monitoring', 'Compliance reporting', 'Audit trail management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Financial Risk Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Protect your financial assets with AI-powered risk management that identifies, assesses, 
              and mitigates risks in real-time. Stay ahead of threats and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Proven Risk Management Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform delivers measurable improvements in risk management and financial performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {riskMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{metric.title}</h3>
              <p className="text-gray-300 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Risk Types */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Comprehensive Risk Coverage
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform covers all major types of financial risks with AI-powered analysis and monitoring
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {riskTypes.map((riskType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <riskType.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{riskType.title}</h3>
                  <p className="text-gray-300">{riskType.description}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400 mb-3">Key Features:</h4>
                {riskType.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Advanced Risk Management Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to identify, assess, and mitigate financial risks effectively
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored risk management solutions for different financial sectors and use cases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400 mb-3">Key Benefits:</h4>
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your risk management needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                tier.popular 
                  ? 'border-blue-400/50 bg-gradient-to-b from-blue-500/10 to-transparent' 
                  : 'border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={tier.cta === 'Contact Sales' ? '/contact' : '/contact'}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Protect Your Financial Assets?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of financial institutions that have already improved their risk management with AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-gray-300">
          <p className="mb-4">
            Questions? Contact our team at{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
              kleber@ziontechgroup.com
            </a>
          </p>
          <p>
            Call us at{' '}
            <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
              +1 (302) 464-0950
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIFinancialRiskManagement;