import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  Warehouse, 
  Globe, 
  Zap, 
  Brain, 
  BarChart3, 
  Target,
  CheckCircle,
  AlertTriangle,
  Clock,
  Star,
  Award,
  Rocket,
  Lock,
  Shield,
  Eye,
  Activity,
  PieChart,
  LineChart,
  Calendar,
  Bell,
  Settings,
  MapPin,
  Navigation,
  Route,
  Timer,
  Fuel,
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  RefreshCw,
  Lightbulb,
  Target,
  Flag,
  Gift,
  Cpu,
  Network,
  Database,
  Cloud,
  Smartphone,
  Server
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Demand Forecasting',
      description: 'Machine learning algorithms predict demand patterns with 95% accuracy, optimizing inventory levels'
    },
    {
      icon: Route,
      title: 'Intelligent Route Optimization',
      description: 'AI calculates optimal delivery routes considering traffic, weather, and real-time conditions'
    },
    {
      icon: Warehouse,
      title: 'Smart Inventory Management',
      description: 'Automated inventory tracking with predictive reordering and waste reduction'
    },
    {
      icon: Globe,
      title: 'Global Supply Chain Visibility',
      description: 'Real-time tracking across all suppliers, warehouses, and distribution centers'
    },
    {
      icon: Zap,
      title: 'Automated Procurement',
      description: 'AI-driven supplier selection and automated purchase order generation'
    },
    {
      icon: Shield,
      title: 'Risk Management & Compliance',
      description: 'Predictive risk assessment and automated compliance monitoring across the supply chain'
    }
  ];

  const optimizationModules = [
    {
      name: 'Demand Planning',
      icon: Brain,
      description: 'Advanced forecasting using machine learning, seasonal analysis, and external factors',
      features: ['ML forecasting', 'Seasonal analysis', 'External factors', 'Accuracy tracking']
    },
    {
      name: 'Inventory Optimization',
      icon: Warehouse,
      description: 'Smart inventory management with automated reordering and waste reduction',
      features: ['Auto reordering', 'Waste reduction', 'Stock alerts', 'ABC analysis']
    },
    {
      name: 'Route Optimization',
      icon: Route,
      description: 'AI-powered route planning considering multiple constraints and real-time data',
      features: ['Multi-constraint planning', 'Real-time updates', 'Fuel optimization', 'ETA prediction']
    },
    {
      name: 'Supplier Management',
      icon: Globe,
      description: 'Comprehensive supplier evaluation, performance tracking, and risk assessment',
      features: ['Performance scoring', 'Risk assessment', 'Cost analysis', 'Compliance tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 locations',
        'Basic demand forecasting',
        'Inventory tracking',
        'Route optimization',
        'Email support',
        'Basic reporting',
        'Standard integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 locations',
        'Advanced AI analytics',
        'Multi-warehouse management',
        'Advanced reporting',
        'Priority support',
        'Custom integrations',
        'API access',
        'Risk management'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited locations',
        'Full AI suite',
        'Custom AI models',
        'Dedicated team',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'On-premise options'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Costs by 25%',
      description: 'Optimize inventory, routes, and procurement to significantly reduce operational costs'
    },
    {
      icon: Clock,
      title: 'Improve Delivery Times',
      description: 'Reduce delivery times by 30% with AI-optimized routes and real-time tracking'
    },
    {
      icon: TrendingUp,
      title: 'Increase Efficiency',
      description: 'Automate manual processes and improve overall supply chain efficiency by 40%'
    },
    {
      icon: Shield,
      title: 'Reduce Risks',
      description: 'Proactive risk management and compliance monitoring reduce supply chain disruptions'
    }
  ];

  const industries = [
    {
      name: 'E-commerce & Retail',
      icon: Package,
      description: 'Optimize inventory, fulfillment, and last-mile delivery for online businesses'
    },
    {
      name: 'Manufacturing',
      icon: Cpu,
      description: 'Streamline production planning, raw material procurement, and distribution'
    },
    {
      name: 'Healthcare & Pharmaceuticals',
      icon: Shield,
      description: 'Ensure critical supplies reach healthcare facilities with optimal efficiency'
    },
    {
      name: 'Food & Beverage',
      icon: Truck,
      description: 'Manage perishable inventory and optimize cold chain logistics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization platform that automates demand forecasting, route optimization, and inventory management for maximum efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Truck className="w-4 h-4" />
              <span>AI-Powered Supply Chain</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                That Drives Results
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your supply chain with AI-powered optimization that reduces costs, 
              improves efficiency, and ensures on-time delivery across your global network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Supply Chain Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI engine continuously learns from supply chain data and optimizes 
              operations for maximum efficiency and cost savings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Modules Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Optimization Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end supply chain optimization covering demand planning, inventory management, 
              route optimization, and supplier management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {optimizationModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{module.name}</h3>
                    <p className="text-gray-300 mb-4">{module.description}</p>
                    <ul className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to work across various industries with specialized 
              optimization strategies for each sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                    <p className="text-gray-300">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of companies already using our platform to transform 
              their supply chain operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the optimization level that matches your supply chain complexity. 
              All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                      : 'border border-blue-500 text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using AI to reduce costs, improve efficiency, 
              and transform their supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Supply Chain Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}