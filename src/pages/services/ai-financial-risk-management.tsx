import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Target, 
  Zap, 
  AlertTriangle, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Eye,
  Sparkles,
  Rocket,
  Globe,
  Clock,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  ShoppingCart,
  DollarSign,
  Heart,
  Factory,
  BarChart3,
  Calendar,
  Mail as MailIcon,
  Share2,
  Monitor,
  PieChart,
  Headphones,
  LifeBuoy,
  MessageSquare,
  Activity,
  Target as TargetIcon,
  TrendingDown,
  AlertTriangle as AlertTriangleIcon,
  Lock,
  Scale,
  Gauge,
  TrendingUp as TrendingUpIcon,
  AlertCircle,
  CheckSquare,
  FileText,
  BarChart,
  PieChart as PieChartIcon
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIFinancialRiskManagement() {
  const features = [
    {
      icon: Brain,
      title: 'AI Risk Assessment',
      description: 'Advanced machine learning algorithms for real-time risk evaluation and threat detection'
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Automated regulatory compliance tracking and reporting for financial institutions'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast market risks and identify potential threats before they materialize'
    },
    {
      icon: Target,
      title: 'Portfolio Optimization',
      description: 'AI-driven portfolio management with risk-adjusted return optimization'
    },
    {
      icon: AlertTriangle,
      title: 'Real-time Alerts',
      description: 'Instant notifications for risk threshold breaches and compliance violations'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Reporting',
      description: 'Detailed risk analytics and regulatory reporting with customizable dashboards'
    }
  ];

  const benefits = [
    'Reduce financial losses by up to 60% with predictive risk management',
    'Ensure 100% regulatory compliance with automated monitoring systems',
    'Improve decision-making with real-time risk insights and analytics',
    'Optimize portfolio performance through AI-driven risk assessment',
    'Reduce manual compliance workload by 80% with automation',
    'Gain competitive advantage with advanced risk intelligence capabilities'
  ];

  const useCases = [
    {
      industry: 'Investment Banking',
      applications: ['Portfolio risk management', 'Market risk analysis', 'Credit risk assessment', 'Regulatory compliance'],
      icon: DollarSign
    },
    {
      industry: 'Insurance',
      applications: ['Underwriting risk', 'Claims fraud detection', 'Actuarial modeling', 'Regulatory reporting'],
      icon: Shield
    },
    {
      industry: 'Commercial Banking',
      applications: ['Credit risk analysis', 'Loan portfolio management', 'Basel compliance', 'Stress testing'],
      icon: Factory
    },
    {
      industry: 'Asset Management',
      applications: ['Portfolio optimization', 'Risk-adjusted returns', 'ESG risk assessment', 'Performance attribution'],
      icon: BarChart
    }
  ];

  const technologies = [
    'Machine Learning & Deep Learning',
    'Natural Language Processing',
    'Predictive Analytics',
    'Real-time Data Processing',
    'Blockchain Security',
    'Cloud-Native Architecture'
  ];

  const pricing = [
    {
      plan: 'Professional',
      price: '$899',
      period: '/month',
      description: 'Perfect for mid-size financial institutions and investment firms',
      features: [
        'Up to 100 portfolio monitoring',
        'Basic AI risk assessment',
        'Regulatory compliance tracking',
        'Real-time risk alerts',
        'Standard reporting dashboard',
        'Email support',
        'API access (limited)'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      plan: 'Enterprise',
      price: '$1,899',
      period: '/month',
      description: 'Ideal for large financial institutions and multinational banks',
      features: [
        'Unlimited portfolio monitoring',
        'Advanced AI risk modeling',
        'Multi-jurisdiction compliance',
        'Custom risk thresholds',
        'Advanced analytics & reporting',
        'Priority support',
        'Full API access',
        'Custom integrations',
        'Dedicated risk manager'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      plan: 'Institution',
      price: '$3,599',
      period: '/month',
      description: 'For major financial institutions with complex risk management needs',
      features: [
        'Custom AI model development',
        'White-label solutions',
        'On-premise deployment',
        'Advanced compliance automation',
        'Custom regulatory reporting',
        '24/7 dedicated support',
        'Custom training programs',
        'Risk consulting services'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO 
        title="AI-Powered Financial Risk Management Platform - Zion Tech Group"
        description="Transform financial risk management with AI-powered insights, compliance automation, and predictive analytics. Ensure regulatory compliance and optimize portfolio performance."
        keywords="AI financial risk management, risk assessment, compliance monitoring, portfolio optimization, regulatory reporting, financial technology"
        canonical="https://ziontechgroup.com/services/ai-financial-risk-management"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Financial Risk
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Management Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Revolutionize your financial risk management with intelligent automation, predictive analytics, 
              and comprehensive compliance monitoring that protects your assets and ensures regulatory adherence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
                <Shield className="mr-2 w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Risk Management Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive tools for identifying, assessing, and mitigating financial risks
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-red-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proven results and measurable impact on your risk management and compliance operations
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-slate-300">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how different financial institutions leverage our platform for comprehensive risk management
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-slate-300">• {app}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your institution's risk management needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-slate-800/50 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-red-400 ring-2 ring-red-400/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.plan === 'Institution' ? '/contact' : '/contact'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Risk Management?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join leading financial institutions using our AI-powered platform for comprehensive risk management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-slate-300 hover:text-red-400 transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div>
              <Mail className="w-8 h-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-red-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <Globe className="w-8 h-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-red-400 transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}