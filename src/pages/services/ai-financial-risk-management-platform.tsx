import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {

  TrendingUp, 
  Shield, 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Globe,
  Lock,
  BarChart3,
  Search,
  Eye,
  FileText,
  Calendar,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Database,
  Microscope,
  Zap,
  Cpu,
  Network,
  Cloud,
  Server,
  Activity,
  PieChart,
  LineChart,
  Gauge,
  Target,
  AlertCircle,
  TrendingDown,
  Percent,
  Calculator,
  Monitor,
  Smartphone
} from 'lucide-react';

export default function AIFinancialRiskManagementPlatform() {

  const features = [
    {

      title: "Real-Time Risk Monitoring",
      description: "Continuous monitoring of financial risks with 99.8% accuracy",
      icon: Activity,
      benefits: ["24/7 risk surveillance", "Instant alert system", "Real-time dashboards", "Mobile notifications"]
    },
    {

      title: "AI-Powered Risk Prediction",
      description: "Advanced ML algorithms predict market risks and opportunities",
      icon: Brain,
      benefits: ["Market trend analysis", "Risk scoring models", "Portfolio optimization", "Scenario planning"]
    },
    {

      title: "Comprehensive Risk Assessment",
      description: "Multi-dimensional risk analysis across all asset classes",
      icon: Shield,
      benefits: ["Credit risk analysis", "Market risk assessment", "Operational risk", "Liquidity risk"]
    },
    {

      title: "Regulatory Compliance",
      description: "Automated compliance monitoring for financial regulations",
      icon: FileText,
      benefits: ["Basel III compliance", "SOX compliance", "GDPR compliance", "Audit reporting"]
    },
    {

      title: "Portfolio Stress Testing",
      description: "Advanced stress testing and scenario analysis",
      icon: Gauge,
      benefits: ["Monte Carlo simulations", "Historical scenario analysis", "Custom stress tests", "Risk-adjusted returns"]
    },
    {

      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 Type II and ISO 27001 compliance",
      icon: Lock,
      benefits: ["End-to-end encryption", "Role-based access control", "Audit logging", "Multi-factor authentication"]
    }
  ];

  const pricingTiers = [
    {

      name: "Financial Advisor",
      price: "$399",
      period: "/month",
      description: "Perfect for individual financial advisors and small firms",
      features: [
        "Risk monitoring (up to 100 portfolios)",
        "Basic risk models",
        "Standard compliance tools",
        "Email support",
        "Basic security features",
        "Mobile app access",
        "Standard integrations"
      ],
      popular: false,
      savings: null
    },
    {

      name: "Investment Firm",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing investment firms and asset managers",
      features: [
        "Everything in Financial Advisor",
        "Risk monitoring (up to 1,000 portfolios)",
        "Advanced risk models",
        "Portfolio stress testing",
        "Regulatory compliance",
        "Priority support",
        "Advanced security",
        "API access",
        "Custom dashboards",
        "Team collaboration (25 users)"
      ],
      popular: true,
      savings: "Save 20% annually"
    },
    {

      name: "Financial Enterprise",
      price: "$3,999",
      period: "/month",
      description: "Comprehensive solution for large financial institutions",
      features: [
        "Everything in Investment Firm",
        "Unlimited portfolio monitoring",
        "Custom risk models",
        "Advanced analytics",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom integrations",
        "White-label solutions",
        "Unlimited users",
        "Advanced reporting",
        "Compliance automation"
      ],
      popular: false,
      savings: "Save 25% annually"
    }
  ];

  const useCases = [
    {

      title: "Portfolio Risk Management",
      description: "Comprehensive risk analysis and portfolio optimization",
      icon: PieChart,
      benefits: ["Reduce portfolio volatility by 25%", "Improve risk-adjusted returns", "Dynamic rebalancing", "Real-time monitoring"]
    },
    {

      title: "Credit Risk Assessment",
      description: "AI-powered credit scoring and risk evaluation",
      icon: Calculator,
      benefits: ["Improve credit decisions by 40%", "Reduce default rates", "Automated underwriting", "Risk-based pricing"]
    },
    {

      title: "Market Risk Analysis",
      description: "Advanced market risk modeling and stress testing",
      icon: TrendingUp,
      benefits: ["Predict market movements", "Stress test scenarios", "VaR calculations", "Risk limits management"]
    },
    {

      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and reporting",
      icon: Shield,
      benefits: ["Real-time compliance checks", "Automated reporting", "Audit trail", "Regulatory updates"]
    }
  ];

  const testimonials = [
    {

      name: "Sarah Johnson",
      title: "Chief Risk Officer",
      company: "Global Investment Bank",
      content: "This platform has transformed our risk management. We've reduced portfolio volatility by 25% and improved our risk-adjusted returns significantly.",
      rating: 5
    },
    {

      name: "Michael Chen",
      title: "Portfolio Manager",
      company: "Alpha Capital Management",
      content: "The AI-powered risk prediction is incredibly accurate. We're making better investment decisions and managing risk more effectively.",
      rating: 5
    },
    {

      name: "Emily Rodriguez",
      title: "Compliance Director",
      company: "Meridian Financial Group",
      content: "Regulatory compliance is now automated and seamless. We're always ahead of regulatory changes and audit requirements.",
      rating: 5
    }
  ];

  const benefits = [
    {

      metric: "25%",
      description: "Reduction in portfolio volatility",
      icon: TrendingDown
    },
    {

      metric: "40%",
      description: "Improvement in credit decisions",
      icon: TrendingUp
    },
    {

      metric: "99.8%",
      description: "Risk monitoring accuracy",
      icon: Target
    },
    {

      metric: "$5.2M",
      description: "Annual risk cost savings",
      icon: DollarSign
    }
  ];

  const riskMetrics = [
    {

      name: "Value at Risk (VaR)",
      description: "95% confidence level risk measurement",
      value: "2.3%",
      trend: "down",
      icon: TrendingDown
    },
    {

      name: "Sharpe Ratio",
      description: "Risk-adjusted return metric",
      value: "1.85",
      trend: "up",
      icon: TrendingUp
    },
    {

      name: "Maximum Drawdown",
      description: "Peak-to-trough decline",
      value: "8.7%",
      trend: "down",
      icon: TrendingDown
    },
    {

      name: "Beta",
      description: "Market correlation measure",
      value: "0.92",
      trend: "neutral",
      icon: Activity
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Financial Risk Management Platform | Zion Tech Group</title>
        <meta name="description" content="Transform financial risk management with AI-powered analytics, real-time monitoring, and predictive risk assessment. Protect assets and optimize returns." />
        <meta name="keywords" content="AI financial risk management, portfolio risk, credit risk, market risk, financial compliance, risk analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-financial-risk-management-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Leading Financial Risk Management Solution
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Financial
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Risk Management Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize financial risk management with cutting-edge AI technology. Monitor risks in real-time, 
              predict market movements, and protect your assets with unprecedented accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Watch Demo
                <Eye className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Financial Risk Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of financial risk management with AI-powered analytics that protect assets, 
              optimize returns, and ensure regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
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

      {/* Risk Metrics Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-Time Risk Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor key risk indicators in real-time with our advanced analytics dashboard
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${

                  metric.trend === 'up' ? 'bg-green-500/20 border border-green-500/30' :
                  metric.trend === 'down' ? 'bg-red-500/20 border border-red-500/30' :
                  'bg-blue-500/20 border border-blue-500/30'
                }`}>
                  <metric.icon className={`w-6 h-6 ${

                    metric.trend === 'up' ? 'text-green-400' :
                    metric.trend === 'down' ? 'text-red-400' :
                    'text-blue-400'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Financial Industry Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your financial institution. All plans include our core AI features 
              with enterprise-grade security and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${

                  tier.popular 
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                  {tier.savings && (
                    <div className="mt-2">
                      <span className="text-cyan-400 text-sm font-medium">{tier.savings}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${

                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Financial Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how leading financial institutions are transforming risk management 
              with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
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

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Financial Leaders Trust Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of financial professionals who have transformed risk management 
              with our AI-powered platform.
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.title}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Risk Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of financial risk management. Start your free trial today and experience 
              the power of AI-powered risk analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Call Us Now
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}