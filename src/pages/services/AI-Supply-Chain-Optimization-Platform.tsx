import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  Globe, 
  Zap, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Database,
  Activity,
  Lightbulb,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Brain,
  Server,
  Network,
  Code,
  Search,
  MapPin,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane
} from 'lucide-react';

export default function AISupplyChainOptimizationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Predict demand with 95%+ accuracy using advanced machine learning and historical data analysis"
    },
    {
      icon: Route,
      title: "Intelligent Route Optimization",
      description: "Optimize delivery routes in real-time considering traffic, weather, and cost factors"
    },
    {
      icon: Warehouse,
      title: "Smart Inventory Management",
      description: "Automated inventory optimization to reduce costs while maintaining service levels"
    },
    {
      icon: Globe,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain network in real-time"
    },
    {
      icon: Zap,
      title: "Automated Risk Management",
      description: "Identify and mitigate supply chain risks before they impact your business"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Comprehensive analytics and reporting to optimize every aspect of your supply chain"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Route optimization",
        "Email alerts",
        "Basic support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Real-time optimization",
        "Risk management",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large enterprises",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom development",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "25% Cost Reduction",
      description: "Significantly reduce logistics and inventory costs"
    },
    {
      icon: Clock,
      title: "50% Faster Delivery",
      description: "Optimize routes and reduce delivery times"
    },
    {
      icon: Target,
      title: "99% On-Time Delivery",
      description: "Improve customer satisfaction with reliable delivery"
    },
    {
      icon: Users,
      title: "Enhanced Visibility",
      description: "Complete transparency across your supply chain"
    }
  ];

  const optimizationAreas = [
    {
      name: "Demand Planning",
      description: "AI-powered demand forecasting and planning",
      icon: TrendingUp
    },
    {
      name: "Inventory Optimization",
      description: "Smart inventory management and control",
      icon: Warehouse
    },
    {
      name: "Route Optimization",
      description: "Intelligent delivery route planning",
      icon: Route
    },
    {
      name: "Supplier Management",
      description: "Optimize supplier relationships and performance",
      icon: Users
    },
    {
      name: "Risk Management",
      description: "Identify and mitigate supply chain risks",
      icon: Shield
    },
    {
      name: "Performance Analytics",
      description: "Comprehensive supply chain analytics",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-600/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Optimize Your
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Supply Chain</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our AI-powered Supply Chain Optimization Platform uses advanced machine learning to predict demand, 
              optimize routes, manage inventory, and reduce costs across your entire supply chain network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-green-600 text-green-400 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300">
                Schedule Demo
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive supply chain optimization powered by cutting-edge AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Optimization Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Optimize every aspect of your supply chain with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{area.name}</h3>
                <p className="text-gray-300">{area.description}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Optimization Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to optimize supply chains of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-green-500/5' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-blue-600 hover:to-green-600'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and industry-leading technology that optimizes your supply chain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already revolutionized their supply chain operations with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-green-600 text-green-400 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}