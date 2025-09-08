import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Truck, 
  Package, 
  TrendingUp, 
  Globe, 
  Clock, 
  DollarSign, 
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Settings,
  Monitor,
  Zap,
  Target,
  Rocket,
  Star,
  Award,
  ArrowRight,
  Play,
  MapPin,
  Route,
  Warehouse,
  Factory
} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Truck,
      title: "AI-Powered Route Optimization",
      description: "Intelligent routing algorithms that reduce delivery times and fuel costs by up to 30%"
    },
    {
      icon: Package,
      title: "Demand Forecasting",
      description: "Predict customer demand with 95% accuracy using machine learning and historical data"
    },
    {
      icon: Globe,
      title: "Global Supply Chain Visibility",
      description: "Real-time tracking of inventory, shipments, and suppliers across the entire network"
    },
    {
      icon: Clock,
      title: "Just-in-Time Inventory",
      description: "Optimize stock levels to minimize carrying costs while ensuring product availability"
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Identify cost-saving opportunities across procurement, transportation, and warehousing"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive dashboards showing KPIs, trends, and optimization recommendations"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Fulfillment",
      description: "Optimize warehouse locations, delivery routes, and inventory levels for online retail",
      icon: Package,
      benefit: "Reduce delivery time by 40%"
    },
    {
      title: "Manufacturing Supply Chain",
      description: "Streamline raw material procurement, production scheduling, and distribution",
      icon: Factory,
      benefit: "Cut costs by 25%"
    },
    {
      title: "Cold Chain Logistics",
      description: "Monitor temperature-sensitive shipments and optimize routes for perishable goods",
      icon: Truck,
      benefit: "Reduce spoilage by 60%"
    },
    {
      title: "International Trade",
      description: "Navigate customs, tariffs, and regulations with AI-powered compliance management",
      icon: Globe,
      benefit: "Speed up clearance by 50%"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$799",
      period: "/month",
      description: "Perfect for small businesses with basic supply chain needs",
      features: [
        "Up to 100 SKUs",
        "Basic route optimization",
        "Email support",
        "Standard integrations",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing companies with complex supply chain operations",
      features: [
        "Up to 1,000 SKUs",
        "Advanced AI optimization",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Real-time tracking",
        "Demand forecasting",
        "Cost optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations with global supply chain networks",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom development",
        "API access",
        "Multi-warehouse support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Transportation Costs",
      description: "AI-optimized routes and load planning reduce fuel and delivery costs",
      metric: "Up to 30% savings",
      icon: DollarSign
    },
    {
      title: "Improve Delivery Speed",
      description: "Intelligent routing and warehouse optimization accelerate order fulfillment",
      metric: "40% faster delivery",
      icon: Clock
    },
    {
      title: "Optimize Inventory Levels",
      description: "Predictive analytics prevent stockouts while minimizing excess inventory",
      metric: "25% inventory reduction",
      icon: Package
    },
    {
      title: "Enhance Customer Satisfaction",
      description: "Faster, more reliable delivery improves customer experience and loyalty",
      metric: "95% on-time delivery",
      icon: Star
    }
  ];

  const integrations = [
    { name: "SAP", category: "ERP" },
    { name: "Oracle", category: "ERP" },
    { name: "NetSuite", category: "ERP" },
    { name: "Shopify", category: "E-commerce" },
    { name: "WooCommerce", category: "E-commerce" },
    { name: "Magento", category: "E-commerce" },
    { name: "FedEx", category: "Shipping" },
    { name: "UPS", category: "Shipping" },
    { name: "DHL", category: "Shipping" },
    { name: "Amazon FBA", category: "Fulfillment" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Revolutionize your supply chain with AI-powered optimization, demand forecasting, and intelligent routing. Reduce costs and improve efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your supply chain with AI-powered optimization, demand forecasting, 
              and intelligent routing. Reduce costs, improve efficiency, and delight customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Supply Chain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to optimize your supply chain from end to end
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored optimization strategies for different business types and industries
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 mb-3">{useCase.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-orange-600/20 text-orange-400 text-sm rounded-full">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {useCase.benefit}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              See the measurable results our AI Supply Chain Optimization delivers
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 mb-3">{benefit.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-orange-600/20 text-orange-400 text-sm rounded-full">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with your existing systems and tools for a unified supply chain experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-900 p-4 rounded-lg border border-slate-700 text-center hover:border-orange-500 transition-all duration-300"
              >
                <div className="text-white font-medium">{integration.name}</div>
                <div className="text-xs text-gray-400 mt-1">{integration.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your supply chain optimization needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-orange-500 ring-2 ring-orange-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
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
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join leading companies that have revolutionized their supply chain with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}