import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Truck, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Package, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  FileText,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Award,
  Brain,
  Zap,
  Warehouse,
  Route,
  Factory,
  MapPin,
  ShoppingCart,
  Heart
} from 'lucide-react';

export default function AISupplyChainOptimizer() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Demand Forecasting',
      description: 'Advanced machine learning algorithms predict demand patterns with unprecedented accuracy',
      benefits: ['Seasonal trend analysis', 'Market demand prediction', 'Inventory optimization', 'Real-time adjustments']
    },
    {
      icon: Route,
      title: 'Intelligent Route Optimization',
      description: 'AI-driven logistics optimization for cost-effective and efficient delivery routes',
      benefits: ['Dynamic routing', 'Traffic optimization', 'Fuel cost reduction', 'Delivery time optimization']
    },
    {
      icon: Warehouse,
      title: 'Smart Inventory Management',
      description: 'Automated inventory control with predictive stock management and reorder optimization',
      benefits: ['Stock level monitoring', 'Automated reordering', 'Waste reduction', 'Storage optimization']
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics & Insights',
      description: 'Comprehensive supply chain analytics with actionable insights and performance monitoring',
      benefits: ['Performance metrics', 'Cost analysis', 'Risk assessment', 'Optimization recommendations']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 locations',
        'Basic demand forecasting',
        'Route optimization',
        'Inventory tracking',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$899',
      period: '/month',
      description: 'Ideal for growing businesses and regional operations',
      features: [
        'Up to 25 locations',
        'Advanced forecasting',
        'Multi-route optimization',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Risk management'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large organizations with complex supply chains',
      features: [
        'Unlimited locations',
        'Full AI capabilities',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'API access'
      ],
      popular: false
    }
  ];

  const solutions = [
    {
      title: 'Demand Forecasting',
      description: 'AI-powered demand prediction with 95% accuracy for optimal inventory planning',
      icon: Brain,
      price: 'From $299/month',
      benefits: ['Reduce stockouts by 60%', 'Lower inventory costs by 25%', 'Improve forecast accuracy by 40%']
    },
    {
      title: 'Route Optimization',
      description: 'Intelligent route planning that reduces delivery costs and improves efficiency',
      icon: Route,
      price: 'From $199/month',
      benefits: ['Reduce fuel costs by 20%', 'Improve delivery times by 30%', 'Increase driver efficiency by 25%']
    },
    {
      title: 'Inventory Management',
      description: 'Smart inventory control with automated reordering and waste reduction',
      icon: Warehouse,
      price: 'From $399/month',
      benefits: ['Reduce waste by 35%', 'Lower carrying costs by 20%', 'Improve stock turnover by 30%']
    },
    {
      title: 'Supplier Management',
      description: 'AI-powered supplier evaluation and relationship optimization',
      icon: Users,
      price: 'From $299/month',
      benefits: ['Reduce supplier costs by 15%', 'Improve delivery reliability by 40%', 'Better quality control']
    }
  ];

  const industries = [
    {
      title: 'E-commerce & Retail',
      description: 'Optimize inventory and delivery for online and brick-and-mortar stores',
      icon: ShoppingCart,
      results: 'Average 35% reduction in inventory costs'
    },
    {
      title: 'Manufacturing',
      description: 'Streamline production planning and raw material procurement',
      icon: Factory,
      results: 'Average 30% improvement in production efficiency'
    },
    {
      title: 'Logistics & Transportation',
      description: 'Optimize routes and fleet management for maximum efficiency',
      icon: Truck,
      results: 'Average 25% reduction in transportation costs'
    },
    {
      title: 'Healthcare & Pharmaceuticals',
      description: 'Ensure critical supplies are always available when needed',
      icon: Heart,
      results: 'Average 40% improvement in supply availability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimizer - Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization platform that transforms how businesses manage inventory, optimize routes, and predict demand with intelligent automation and predictive analytics."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-600/20 text-orange-300 text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Optimization
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimizer
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your supply chain with AI-powered optimization, intelligent demand forecasting, 
              and automated inventory management. Reduce costs and improve efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-orange-500 hover:text-orange-300 transition-all duration-300">
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
              Revolutionary Supply Chain Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of supply chain management with cutting-edge AI capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Supply Chain Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From demand forecasting to route optimization, we cover every aspect of your supply chain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 mb-4">{solution.description}</p>
                <div className="text-orange-400 font-semibold mb-4">{solution.price}</div>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Optimized for Every Industry
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how businesses across different industries achieve remarkable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-400 mb-4">{industry.description}</p>
                <div className="text-orange-400 font-semibold text-sm">{industry.results}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your supply chain optimization needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-orange-500 ring-2 ring-orange-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI Supply Chain Optimizer to reduce costs and improve efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}