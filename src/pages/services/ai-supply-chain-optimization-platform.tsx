import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Target,
  Lock,
  Search,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  PieChart,
  LineChart,
  Eye,
  Settings,
  Filter,
  Globe,
  Database,
  DollarSign,
  Star,
  Play,
  Warehouse,
  Route,
  MapPin,
  Calendar,
  TrendingUp,
  Activity,
  Shield,
  Gauge,
  BarChart,
  Target,
  AlertCircle,
  TrendingDown,
  Globe2,
  Navigation,
  Car,
  Ship,
  Plane
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISupplyChainOptimizationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms that predict demand patterns, seasonal trends, and market fluctuations",
      benefits: ["Accurate demand prediction", "Seasonal trend analysis", "Market fluctuation insights", "Inventory optimization"]
    },
    {
      icon: Route,
      title: "Intelligent Route Optimization",
      description: "AI-driven route planning that minimizes costs, reduces delivery times, and optimizes fuel consumption",
      benefits: ["Cost optimization", "Delivery time reduction", "Fuel efficiency", "Real-time route updates"]
    },
    {
      icon: Warehouse,
      title: "Smart Inventory Management",
      description: "Automated inventory tracking, reorder point optimization, and demand-driven stock management",
      benefits: ["Automated reordering", "Stock level optimization", "Demand-driven management", "Reduced stockouts"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics Dashboard",
      description: "Comprehensive visibility into supply chain performance, bottlenecks, and optimization opportunities",
      benefits: ["Performance monitoring", "Bottleneck identification", "Optimization insights", "Real-time alerts"]
    },
    {
      icon: Zap,
      title: "Automated Procurement",
      description: "Intelligent supplier selection, automated purchase orders, and cost optimization",
      benefits: ["Supplier optimization", "Automated procurement", "Cost reduction", "Quality improvement"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive identification and mitigation of supply chain risks and disruptions",
      benefits: ["Risk identification", "Disruption mitigation", "Contingency planning", "Supplier monitoring"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small manufacturers and logistics companies",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Route optimization",
        "Email support",
        "Standard security",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing manufacturing and distribution companies",
      features: [
        "Up to 1,000 SKUs",
        "Advanced forecasting",
        "Real-time optimization",
        "Priority support",
        "Advanced security",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large manufacturing networks and global supply chains",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Advanced integrations",
        "24/7 dedicated support",
        "Custom training",
        "Multi-location support",
        "Global optimization",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Optimize production planning, inventory management, and supplier relationships for maximum efficiency",
      metrics: ["30% inventory reduction", "25% cost savings", "40% faster delivery"]
    },
    {
      industry: "E-commerce",
      description: "Streamline order fulfillment, optimize warehouse operations, and improve customer delivery experience",
      metrics: ["50% faster fulfillment", "35% cost reduction", "Enhanced customer satisfaction"]
    },
    {
      industry: "Logistics",
      description: "Optimize route planning, reduce fuel costs, and improve delivery efficiency across networks",
      metrics: ["20% fuel savings", "30% delivery time reduction", "Enhanced route optimization"]
    },
    {
      industry: "Retail",
      description: "Optimize store inventory, reduce stockouts, and improve supply chain visibility",
      metrics: ["40% stockout reduction", "25% inventory optimization", "Improved availability"]
    }
  ];

  const benefits = [
    "Reduce inventory costs by 30% through AI-powered optimization",
    "Improve delivery times by 40% with intelligent route planning",
    "Save up to $150,000 annually in supply chain costs",
    "Achieve 99.9% order fulfillment accuracy",
    "Real-time visibility into supply chain performance",
    "Proactive risk management and disruption prevention"
  ];

  const optimizationAreas = [
    "Demand Forecasting",
    "Inventory Management",
    "Route Optimization",
    "Supplier Management",
    "Warehouse Operations",
    "Transportation Planning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Technology
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="block bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Optimization Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your supply chain with AI-powered optimization, intelligent forecasting, 
              and real-time analytics. Reduce costs, improve efficiency, and enhance customer satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-orange-400/50 text-orange-400 font-semibold rounded-xl hover:bg-orange-400/10 hover:border-orange-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </motion.div>
              ))}
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Supply Chain Optimization Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to modernize your supply chain and achieve operational excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Optimization Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform optimizes every aspect of your supply chain for maximum efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <Target className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{area}</h3>
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that best fits your supply chain needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-orange-500/50 bg-gradient-to-br from-slate-800/50 to-orange-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white hover:from-orange-600 hover:to-blue-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored supply chain optimization solutions for different industries and business models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                
                <div>
                  <h4 className="text-orange-400 font-medium mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <Target className="w-3 h-3 text-orange-400 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join hundreds of companies that have already revolutionized their supply chains with AI-powered optimization
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-400/50 text-orange-400 font-semibold rounded-xl hover:bg-orange-400/10 hover:border-orange-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}