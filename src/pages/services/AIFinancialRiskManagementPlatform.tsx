import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  TrendingDown, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Lightbulb, 
  Database, 
  Network, 
  Globe, 
  Clock, 
  Zap,
  Target,
  Cpu,
  FileText,
  Monitor,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  ScatterPlot,
  HeatMap,
  Gauge,
  Calendar,
  Filter,
  Search,
  Download,
  Share2,
  Eye,
  Lock,
  Phone,
  Mail,
  TrendingUp,
  Bot,
  Headphones,
  Smartphone,
  Tablet,
  Laptop,
  DollarSign,
  BarChart3,
  Users,
  Settings,
  RefreshCw,
  AlertTriangle,
  AlertCircle,
  TrendingDown,
  TrendingUp,
  Minus,
  Plus,
  Percent,
  Calculator,
  PieChart,
  LineChart,
  BarChart,
  ScatterPlot,
  HeatMap,
  Gauge,
  Calendar,
  Filter,
  Search,
  Download,
  Share2,
  Eye,
  Lock,
  Phone,
  Mail,
  TrendingUp,
  Brain,
  Bot,
  Headphones,
  Smartphone,
  Tablet,
  Laptop,
  DollarSign,
  BarChart3,
  Users,
  Settings,
  RefreshCw
} from 'lucide-react';

export default function AIFinancialRiskManagementPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Risk Assessment',
      description: 'Advanced machine learning algorithms that identify and quantify financial risks with 98%+ accuracy',
      color: 'from-red-500 to-pink-500',
      benefits: [
        'Real-time risk monitoring',
        'Predictive risk modeling',
        'Multi-factor analysis',
        'Scenario planning'
      ]
    },
    {
      icon: Shield,
      title: 'Comprehensive Risk Coverage',
      description: 'End-to-end risk management covering market, credit, operational, and liquidity risks',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Market risk analysis',
        'Credit risk assessment',
        'Operational risk monitoring',
        'Liquidity risk management'
      ]
    },
    {
      icon: TrendingDown,
      title: 'Early Warning Systems',
      description: 'Proactive risk detection and alerting to prevent financial losses before they occur',
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Real-time alerts',
        'Risk threshold monitoring',
        'Automated notifications',
        'Escalation procedures'
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics & Reporting',
      description: 'Comprehensive risk analytics with customizable dashboards and regulatory reporting',
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Custom dashboards',
        'Regulatory compliance',
        'Risk metrics tracking',
        'Performance analytics'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$799',
      period: '/month',
      description: 'Perfect for small financial institutions starting their risk management journey',
      features: [
        'Up to 100 risk assessments/month',
        'Basic risk modeling',
        'Standard reporting',
        'Email support',
        '25GB data storage',
        'Basic compliance'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,799',
      period: '/month',
      description: 'Ideal for growing financial institutions with advanced risk management needs',
      features: [
        'Up to 1,000 risk assessments/month',
        'Advanced AI modeling',
        'Custom dashboards',
        'Priority support',
        '100GB data storage',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large financial institutions with complex risk management requirements',
      features: [
        'Unlimited assessments',
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'Unlimited data storage',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Banks & Credit Unions',
      description: 'Credit risk assessment, loan portfolio management, and regulatory compliance',
      icon: DollarSign,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Investment Firms',
      description: 'Portfolio risk analysis, market risk management, and performance optimization',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Insurance Companies',
      description: 'Underwriting risk assessment, claims analysis, and actuarial modeling',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Fintech Startups',
      description: 'Risk scoring, fraud detection, and compliance automation',
      icon: Cpu,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      title: 'Reduce Risk Exposure',
      value: '40-60%',
      description: 'Lower financial risk exposure through proactive management'
    },
    {
      title: 'Improve Compliance',
      value: '99.9%',
      description: 'Higher regulatory compliance and audit readiness'
    },
    {
      title: 'Faster Detection',
      value: 'Real-time',
      description: 'Immediate risk detection and response capabilities'
    },
    {
      title: 'Cost Savings',
      value: '25-35%',
      description: 'Lower operational costs and reduced losses'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="AI Financial Risk Management Platform - Zion Tech Group"
        description="Transform your financial risk management with AI-powered assessment, monitoring, and mitigation. Comprehensive coverage for all risk types."
        keywords="AI financial risk management, risk assessment, credit risk, market risk, operational risk, financial compliance"
        canonicalUrl="https://ziontechgroup.com/services/ai-financial-risk-management-platform"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Financial Risk Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Protect Your
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"> Financial Future</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage AI to transform your financial risk management. Our platform delivers intelligent risk assessment, 
              real-time monitoring, and proactive mitigation strategies for comprehensive financial protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://ziontechgroup.com/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Request Demo
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
              Powerful Features for Modern Risk Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with financial expertise to deliver 
              comprehensive risk management solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                {feature.benefits && (
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real improvements in risk management effectiveness, compliance, and financial protection with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="text-4xl font-bold text-red-400 mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique risk management needs of various financial institutions, 
              providing specialized solutions and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${useCase.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your financial institution needs. 
              Start with a free trial and upgrade as you grow.
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
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-red-500/5' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.name === 'Enterprise' ? 'https://ziontechgroup.com/contact' : 'https://ziontechgroup.com/request-quote'}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Risk Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of financial institutions that have already transformed their risk management. 
              Start your free trial today and see the difference AI-powered risk management can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-red-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-red-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-red-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Website</h4>
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}