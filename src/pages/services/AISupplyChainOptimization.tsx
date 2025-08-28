import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Truck, 
  Package, 
  CheckCircle, 
  Star, 
  Users, 
  Globe,
  Lock,
  Cpu,
  Database,
  Network,
  BarChart3,
  ArrowRight,
  Sparkles,
  Atom,
  Workflow,
  Target,
  Rocket,
  Shield,
  Zap,
  Activity,
  LineChart,
  PieChart,
  Target as TargetIcon,
  BrainCircuit,
  Clock,
  AlertTriangle,
  TrendingDown,
  DollarSign as DollarIcon,
  BarChart,
  PieChart as PieChartIcon,
  Warehouse,
  Route,
  MapPin,
  Calendar,
  TrendingUp,
  Gauge,
  Settings,
  RefreshCw
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const AISupplyChainOptimization = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Demand Forecasting",
      description: "Predict customer demand with 95% accuracy using advanced machine learning"
    },
    {
      icon: Truck,
      title: "Route Optimization",
      description: "AI-powered route planning for maximum efficiency and cost reduction"
    },
    {
      icon: Warehouse,
      title: "Inventory Management",
      description: "Smart inventory control with automated reorder points and safety stock"
    },
    {
      icon: Route,
      title: "Real-time Tracking",
      description: "End-to-end visibility across your entire supply chain network"
    }
  ];

  const optimizationAreas = [
    {
      name: "Demand Planning",
      description: "AI-powered demand forecasting and inventory planning",
      improvement: "40%",
      metric: "Reduced Stockouts",
      icon: TrendingUp
    },
    {
      name: "Route Optimization",
      description: "Intelligent route planning for logistics and delivery",
      improvement: "35%",
      metric: "Fuel Cost Reduction",
      icon: Route
    },
    {
      name: "Warehouse Management",
      description: "Smart warehouse operations and space utilization",
      improvement: "50%",
      metric: "Efficiency Increase",
      icon: Warehouse
    },
    {
      name: "Supplier Management",
      description: "AI-driven supplier selection and performance monitoring",
      improvement: "45%",
      metric: "Cost Reduction",
      icon: Users
    }
  ];

  const benefits = [
    "Reduce supply chain costs by up to 40%",
    "Improve delivery accuracy by 85%",
    "Reduce inventory carrying costs by 30%",
    "Increase order fulfillment rate to 99.5%",
    "Optimize warehouse space utilization by 60%",
    "Real-time visibility across all supply chain nodes"
  ];

  const pricing = [
    {
      name: "Basic",
      price: "$3,800",
      period: "/month",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Route optimization",
        "Standard reporting",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$8,500",
      period: "/month",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Multi-modal optimization",
        "Priority support",
        "API access",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$22,000",
      period: "/month",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "On-premise deployment",
        "Custom development"
      ]
    }
  ];

  const supportedIndustries = [
    "E-commerce & Retail",
    "Manufacturing",
    "Healthcare & Pharma",
    "Food & Beverage",
    "Automotive",
    "Logistics & Transportation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization platform for intelligent demand forecasting, route optimization, and inventory management."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Truck className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Supply Chain Optimization
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI-powered optimization, intelligent demand forecasting, 
              and automated logistics management for maximum efficiency and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Optimize Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Supply Chain Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with supply chain expertise 
              to deliver unprecedented optimization and efficiency gains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Optimization Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform optimizes every aspect of your supply chain for maximum 
              efficiency and cost reduction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{area.name}</h3>
                    <p className="text-gray-300 text-sm">{area.description}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-blue-400 font-bold text-3xl mb-2">{area.improvement}</div>
                  <div className="text-gray-400 text-sm">{area.metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI optimization solutions for various industries and business models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 text-center hover:border-blue-400/50 transition-all duration-300"
              >
                <Package className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <span className="text-white font-semibold text-lg">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Supply Chain
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI optimization platform delivers measurable improvements in efficiency, 
              cost reduction, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain needs. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border ${
                  index === 1 
                    ? 'border-blue-400/50 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-600/50'
                } relative`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:shadow-lg hover:shadow-blue-500/25'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-green-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies worldwide who have already transformed their 
              supply chain operations with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;