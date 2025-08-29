import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { 
  Truck, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star,
  Globe,
  Package,
  Warehouse,
  Route,
  Clock,
  DollarSign,
  Shield,
  Smartphone,
  Monitor,
  MapPin,
  AlertTriangle
} from 'lucide-react';

const AISupplyChainOptimization: React.FC = () => {
  const features = [
    'AI-powered demand forecasting and planning',
    'Real-time inventory optimization',
    'Intelligent route optimization and logistics',
    'Supplier risk assessment and management',
    'Predictive maintenance for equipment',
    'Automated order processing and fulfillment',
    'Supply chain visibility and tracking',
    'Cost optimization and waste reduction',
    'Sustainability and compliance monitoring',
    'Multi-warehouse management system'
  ];

  const benefits = [
    'Reduce supply chain costs by 20-35%',
    'Improve inventory accuracy by 40-60%',
    'Reduce delivery times by 25-40%',
    'Increase supplier reliability by 30%',
    'Reduce stockouts by 50-70%',
    'Automate 60% of supply chain operations',
    'Real-time visibility across the entire chain',
    'Proactive risk management and mitigation'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses with basic supply chain needs',
      features: [
        'Up to 5 warehouse locations',
        'Basic demand forecasting',
        'Inventory tracking and alerts',
        'Basic route optimization',
        'Email support',
        'Standard integrations'
      ]
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses and mid-market companies',
      features: [
        'Up to 20 warehouse locations',
        'Advanced AI forecasting models',
        'Multi-modal transportation optimization',
        'Supplier risk assessment',
        'Advanced analytics dashboard',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with complex global supply chains',
      features: [
        'Unlimited warehouse locations',
        'Custom AI algorithms and models',
        'Global supply chain optimization',
        'White-label solutions',
        'Advanced risk management',
        'Dedicated account manager',
        '24/7 phone support'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Optimize production planning, inventory management, and supplier coordination',
      icon: Package,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'E-commerce',
      description: 'Streamline order fulfillment, warehouse operations, and last-mile delivery',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Retail',
      description: 'Improve inventory accuracy, reduce stockouts, and optimize store replenishment',
      icon: Store,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Logistics',
      description: 'Optimize routes, reduce fuel costs, and improve delivery efficiency',
      icon: Truck,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="AI-powered supply chain optimization platform that reduces costs by 20-35% and improves inventory accuracy by 40-60%. Get started from $499/month."
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <Truck className="w-5 h-5 text-green-400" />
            <span className="text-green-300 text-sm font-medium">AI-Powered Supply Chain Optimization</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            AI Supply Chain Optimization
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Transform your supply chain operations with AI-powered optimization. Reduce costs by 20-35%, improve inventory accuracy by 40-60%, and streamline logistics with intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              Start Free Trial
            </a>
            <a 
              href="#demo" 
              className="border border-slate-600 hover:border-green-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </motion.div>
      </section>

      {/* Key Metrics */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-400 mb-2">20-35%</div>
              <div className="text-slate-300">Reduction in Supply Chain Costs</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
              <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-400 mb-2">40-60%</div>
              <div className="text-slate-300">Improvement in Inventory Accuracy</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-400 mb-2">25-40%</div>
              <div className="text-slate-300">Reduction in Delivery Times</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6">
              <Target className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-400 mb-2">50-70%</div>
              <div className="text-slate-300">Reduction in Stockouts</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Perfect for Every Industry
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI Supply Chain Optimization platform is designed to work across all industries and business types.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{useCase.title}</h3>
              <p className="text-slate-300 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Powerful Features for Supply Chain Success
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI-powered platform provides everything you need to optimize your supply chain operations and drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
            >
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Why Choose AI Supply Chain Optimization?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg text-slate-200">{benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transparent Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that fits your supply chain optimization needs. All plans include our core AI-powered features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-green-500/50 bg-gradient-to-br from-slate-800/80 to-green-900/20' 
                  : 'border-slate-700 hover:border-green-500/50'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-slate-300">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="/contact"
                className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transform hover:scale-105'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have reduced costs and improved efficiency with AI-powered supply chain optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a 
              href="tel:+13024640950" 
              className="border border-slate-600 hover:border-green-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;