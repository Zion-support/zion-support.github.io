import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Truck, Globe, TrendingUp, CheckCircle, Clock, Sparkles, BarChart3, Target, Zap, Shield, Users, ArrowRight, Package, Route, Factory } from 'lucide-react';

const AISupplyChainOptimization: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Intelligent Route Optimization',
      description: 'AI optimizes delivery routes for maximum efficiency and cost savings'
    },
    {
      icon: Globe,
      title: 'Global Supply Chain Visibility',
      description: 'Real-time tracking across all suppliers and distribution channels'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Demand Forecasting',
      description: 'AI predicts demand patterns to optimize inventory levels'
    },
    {
      icon: Target,
      title: 'Smart Inventory Management',
      description: 'Automated inventory optimization and reorder point management'
    }
  ];

  const optimizationAreas = [
    {
      title: 'Procurement Optimization',
      description: 'AI-powered supplier selection and negotiation strategies',
      icon: '🛒'
    },
    {
      title: 'Warehouse Management',
      description: 'Intelligent storage optimization and picking strategies',
      icon: '🏭'
    },
    {
      title: 'Transportation Planning',
      description: 'Multi-modal route optimization and carrier selection',
      icon: '🚚'
    },
    {
      title: 'Risk Management',
      description: 'Predictive risk assessment and mitigation strategies',
      icon: '⚠️'
    }
  ];

  const benefits = [
    'Reduce supply chain costs by 25-40%',
    'Improve delivery performance by 60%',
    'Reduce inventory carrying costs by 30%',
    'Increase supplier performance by 45%',
    'Minimize supply chain disruptions',
    'Optimize working capital utilization'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: 599,
      period: 'month',
      features: [
        'Up to 5 locations',
        'Basic route optimization',
        'Standard reporting',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ]
    },
    {
      plan: 'Professional',
      price: 1199,
      period: 'month',
      features: [
        'Up to 25 locations',
        'Advanced AI optimization',
        'Custom dashboards',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Multi-warehouse support'
      ]
    },
    {
      plan: 'Enterprise',
      price: 2499,
      period: 'month',
      features: [
        'Unlimited locations',
        'Custom AI models',
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
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, and gain real-time visibility across your entire supply network."
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-400/30 mb-6">
              <Truck className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-medium">AI Supply Chain Optimization</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-400">
                Optimization
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, 
              and gain real-time visibility across your entire supply network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-red-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20">
                Start Optimizing
              </button>
              <button className="px-8 py-4 border border-orange-400/30 text-orange-300 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-200">
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
              Intelligent Optimization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powered by advanced AI to transform your supply chain operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-400/30 transition-all duration-200 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Optimization Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Optimize every aspect of your supply chain operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-400/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{area.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                    <p className="text-gray-300">{area.description}</p>
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
              Why Choose AI Supply Chain Optimization?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your supply chain with intelligent optimization
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
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your supply chain? Our AI optimization experts can help you 
                set up intelligent supply chain management and optimization.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-red-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20">
                Start Supply Chain Optimization
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
              Choose the plan that fits your supply chain needs
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
                    ? 'border-orange-400/50 bg-gradient-to-br from-orange-500/10 to-red-500/10' 
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
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-400 hover:to-red-500 shadow-lg shadow-orange-500/20'
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
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your supply chain with AI-powered optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-red-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-orange-400/30 text-orange-300 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-200">
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
                <a href="https://ziontechgroup.com" className="text-orange-400 hover:text-orange-300">
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

export default AISupplyChainOptimization;