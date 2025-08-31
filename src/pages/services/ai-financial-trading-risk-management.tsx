import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  BarChart3,
  Cloud,
  Cpu,
  Database,
  Network,
  TrendingUp,
  Target,
  Rocket,
  Star,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  DollarSign,
  Activity,
  PieChart,
  TrendingDown,
  Lock
} from 'lucide-react';

export default function AIFinancialTradingRiskManagement() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms that identify and quantify trading risks in real-time."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Real-time Risk Monitoring",
      description: "Continuous monitoring of portfolio risk with instant alerts and automated safeguards."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into risk metrics, portfolio performance, and market trends."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Early Warning System",
      description: "Proactive risk alerts before market conditions deteriorate or positions become vulnerable."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control, audit trails, and compliance features."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native Architecture",
      description: "Scalable, resilient infrastructure that handles high-frequency trading and large portfolios."
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Perfect for individual traders",
      features: [
        "Up to $1M portfolio value",
        "Basic risk analytics",
        "Standard monitoring",
        "Email support",
        "Real-time alerts"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Institutional",
      price: "$999",
      period: "/month",
      description: "Ideal for hedge funds and institutions",
      features: [
        "Up to $100M portfolio value",
        "Advanced AI risk models",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Custom integrations",
        "Compliance reporting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large financial institutions",
      features: [
        "Unlimited portfolio value",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "On-premise option",
        "Custom SLA",
        "Training & consultation"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Reduce Portfolio Risk",
      description: "AI-powered risk management reduces portfolio volatility by 30-50%"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Real-time Protection",
      description: "Instant risk alerts and automated position adjustments protect capital 24/7"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Improve Returns",
      description: "Better risk-adjusted returns through intelligent position sizing and diversification"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Compliance & Audit",
      description: "Automated compliance monitoring and comprehensive audit trails for regulators"
    }
  ];

  const riskTypes = [
    {
      title: "Market Risk",
      description: "Monitor exposure to market movements and volatility",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Credit Risk",
      description: "Assess counterparty risk and credit exposure",
      icon: <Shield className="w-8 h-8 text-green-500" />
    },
    {
      title: "Liquidity Risk",
      description: "Track position liquidity and exit strategy viability",
      icon: <Activity className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Operational Risk",
      description: "Monitor system performance and operational efficiency",
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Financial Risk Management
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Financial Trading Risk Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your trading capital with intelligent risk management powered by artificial intelligence. 
                Our platform provides real-time risk assessment, automated safeguards, and comprehensive 
                analytics to maximize returns while minimizing losses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Risk Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to protect your trading capital and optimize performance
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Risk Management?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of AI-driven financial risk protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Monitor and manage all types of financial trading risks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskTypes.map((riskType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {riskType.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{riskType.title}</h3>
                <p className="text-gray-300 text-sm">{riskType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your portfolio size. All plans include a 14-day free trial.
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
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Capital?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders and institutions that have already secured their portfolios 
              with AI-powered risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              Need help? Contact our team at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </p>
            <p>
              Call us at{' '}
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                +1 302 464 0950
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}