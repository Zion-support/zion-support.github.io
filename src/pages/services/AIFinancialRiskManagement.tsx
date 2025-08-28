import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, AlertTriangle, CheckCircle, Clock, Sparkles, BarChart3, Target, Zap, DollarSign, Users, ArrowRight, Calculator, Graph, Lock } from 'lucide-react';

const AIFinancialRiskManagement: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Risk Monitoring',
      description: 'AI continuously monitors financial risks across your portfolio'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Risk Analytics',
      description: 'Forecast potential risks before they materialize'
    },
    {
      icon: AlertTriangle,
      title: 'Intelligent Risk Alerts',
      description: 'Smart notifications for critical risk threshold breaches'
    },
    {
      icon: Target,
      title: 'Portfolio Optimization',
      description: 'AI-driven portfolio rebalancing for risk-adjusted returns'
    }
  ];

  const riskTypes = [
    {
      title: 'Market Risk',
      description: 'Monitor volatility, correlation, and market factor exposures',
      icon: '📈'
    },
    {
      title: 'Credit Risk',
      description: 'Assess counterparty default probabilities and credit spreads',
      icon: '💳'
    },
    {
      title: 'Liquidity Risk',
      description: 'Track funding gaps and market liquidity constraints',
      icon: '💧'
    },
    {
      title: 'Operational Risk',
      description: 'Identify process failures and control weaknesses',
      icon: '⚙️'
    }
  ];

  const benefits = [
    'Reduce portfolio volatility by 30-40%',
    'Improve risk-adjusted returns by 25%',
    'Early warning system for market disruptions',
    'Automated compliance monitoring and reporting',
    'Real-time portfolio stress testing',
    'Enhanced decision-making with AI insights'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: 799,
      period: 'month',
      features: [
        'Up to $10M portfolio value',
        'Basic risk monitoring',
        'Standard reporting',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ]
    },
    {
      plan: 'Professional',
      price: 1599,
      period: 'month',
      features: [
        'Up to $100M portfolio value',
        'Advanced AI risk analytics',
        'Custom dashboards',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Multi-asset support'
      ]
    },
    {
      plan: 'Enterprise',
      price: 2999,
      period: 'month',
      features: [
        'Unlimited portfolio value',
        'Custom AI risk models',
        'White-label solutions',
        'Dedicated support team',
        'Custom integrations',
        'Advanced security',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Financial Risk Management - Zion Tech Group"
        description="Transform financial risk management with AI-powered analytics. Monitor risks in real-time, predict market disruptions, and optimize portfolio performance."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-400/30 mb-6">
              <Shield className="w-5 h-5 text-emerald-400 mr-2" />
              <span className="text-emerald-300 font-medium">AI Financial Risk Management</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial Risk
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400">
                Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform financial risk management with AI-powered analytics. Monitor risks in real-time, 
              predict market disruptions, and optimize portfolio performance with intelligent insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-teal-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20">
                Start Managing Risk
              </button>
              <button className="px-8 py-4 border border-emerald-400/30 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-400/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Risk Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powered by advanced AI to protect and optimize your financial assets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-200 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Monitor and manage all types of financial risks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskTypes.map((risk, index) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{risk.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{risk.title}</h3>
                    <p className="text-gray-300">{risk.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Financial Risk Management?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform risk management with intelligent analytics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform risk management? Our AI risk experts can help you 
                set up intelligent risk monitoring and portfolio optimization.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-teal-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20">
                Start Risk Management
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your risk management needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  plan.plan === 'Professional' 
                    ? 'border-emerald-400/50 bg-gradient-to-br from-emerald-500/10 to-teal-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
                    <span className="text-lg text-gray-400">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                  plan.plan === 'Professional'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Manage Financial Risk?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform risk management with AI-powered analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-teal-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-emerald-400/30 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p>+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" className="text-emerald-400 hover:text-emerald-300">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialRiskManagement;