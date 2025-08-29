import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
<<<<<<< HEAD
  Network, 
  Brain, 
  BarChart3, 
  Truck, 
  Warehouse, 
  Globe, 
  Target, 
=======
  Brain, 
  Truck, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Calendar,
  Zap,
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
  CheckCircle,
  Star,
  ArrowRight,
<<<<<<< HEAD
  Star,
  Clock,
  DollarSign,
  TrendingUp,
  Shield,
  Zap
=======
  Globe,
  Smartphone,
  Monitor,
  BookOpen,
  MessageSquare,
  Share2,
  Analytics,
  Palette,
  Clock,
  DollarSign,
  Shield,
  Headphones,
  Rocket,
  Package,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Car,
  Train
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
} from 'lucide-react';

const AISupplyChainOptimization: React.FC = () => {
  const features = [
<<<<<<< HEAD
    {
      icon: Brain,
      title: "AI Demand Forecasting",
      description: "Predict demand with 92% accuracy using machine learning models that analyze historical data, market trends, and external factors."
    },
    {
      icon: Network,
      title: "Route Optimization",
      description: "AI-powered logistics optimization that reduces delivery costs by 25% and improves delivery times by 30%."
    },
    {
      icon: Warehouse,
      title: "Inventory Management",
      description: "Smart inventory control with automated reorder points, safety stock calculations, and demand-driven replenishment."
    },
    {
      icon: Globe,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain with real-time tracking and predictive analytics."
    }
  ];

  const benefits = [
    "Reduce supply chain costs by 20-35%",
    "Improve delivery performance by 40%",
    "Reduce inventory carrying costs by 25%",
    "Increase supplier collaboration efficiency by 50%",
    "Minimize supply chain disruptions by 60%"
  ];

  const useCases = [
    "Manufacturing & Production",
    "Retail & E-commerce",
    "Healthcare & Pharmaceuticals",
    "Food & Beverage",
    "Automotive & Aerospace",
    "Logistics & Transportation"
  ];

  const integrations = [
    "SAP, Oracle, Microsoft Dynamics",
    "Shopify, WooCommerce, Magento",
    "FedEx, UPS, DHL APIs",
    "QuickBooks, Xero, NetSuite",
    "Salesforce, HubSpot, Pipedrive"
=======
    "AI-powered demand forecasting and planning",
    "Real-time inventory optimization and management",
    "Intelligent route optimization and logistics",
    "Supplier performance monitoring and analytics",
    "Risk assessment and mitigation strategies",
    "Cost optimization and budget management",
    "Multi-warehouse network optimization",
    "Real-time tracking and visibility",
    "Automated reorder point calculations",
    "Supply chain disruption prediction",
    "Sustainability and carbon footprint tracking",
    "Compliance and regulatory monitoring"
  ];

  const benefits = [
    "Reduce inventory costs by 25-40%",
    "Improve delivery times by 30-50%",
    "Increase supply chain efficiency by 35%",
    "Reduce stockouts by 60%",
    "Lower transportation costs by 20-30%"
  ];

  const useCases = [
    "E-commerce fulfillment",
    "Manufacturing supply chains",
    "Retail inventory management",
    "Healthcare supply chains",
    "Food and beverage distribution",
    "Automotive parts management",
    "Pharmaceutical logistics",
    "Cold chain management"
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
  ];

  const pricing = [
    {
<<<<<<< HEAD
      plan: "Starter",
      price: "$599",
      period: "/month",
      features: ["Up to 5 locations", "Basic demand forecasting", "Route optimization", "Standard support"],
      popular: false
    },
    {
      plan: "Professional",
      price: "$1,299",
      period: "/month",
      features: ["Up to 25 locations", "Advanced AI models", "Multi-warehouse optimization", "Priority support", "API access"],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited locations", "Custom AI models", "White-label solution", "Dedicated support", "SLA guarantees"],
=======
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses with basic supply chain needs",
      features: [
        "AI demand forecasting (up to 100 SKUs)",
        "Basic inventory optimization",
        "Route optimization (up to 50 routes/day)",
        "Basic analytics dashboard",
        "Email support",
        "API access (1,000 calls/month)"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses with complex supply chains",
      features: [
        "AI demand forecasting (up to 1,000 SKUs)",
        "Advanced inventory optimization",
        "Route optimization (unlimited routes)",
        "Supplier performance monitoring",
        "Risk assessment tools",
        "Advanced analytics and reporting",
        "Priority support",
        "API access (10,000 calls/month)"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with global supply chains",
      features: [
        "Unlimited AI demand forecasting",
        "Multi-warehouse optimization",
        "Global route optimization",
        "Advanced risk management",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited API access"
      ],
      cta: "Contact Sales",
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="AI Supply Chain Optimization Platform - Zion Tech Group"
<<<<<<< HEAD
        description="Optimize your supply chain with AI-powered demand forecasting, route optimization, and inventory management. Reduce costs by 20-35%, improve delivery performance."
        keywords="supply chain optimization, AI logistics, demand forecasting, inventory management, route optimization, supply chain analytics"
        canonical="https://ziontechgroup.com/services/ai-supply-chain-optimization"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-800 to-green-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
=======
        description="Optimize your supply chain with AI-powered forecasting, inventory management, and logistics optimization. Reduce costs and improve efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              Supply Chain AI Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Transform your supply chain with AI-powered optimization. Reduce costs by 20-35%, improve delivery performance by 40%, and gain end-to-end visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-cyan-400 font-semibold">
                <Star className="w-5 h-5 mr-2 fill-current" />
                4.9/5 Rating
              </div>
              <div className="flex items-center text-green-400 font-semibold">
                <TrendingUp className="w-5 h-5 mr-2" />
                92% Accuracy
              </div>
              <div className="flex items-center text-blue-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Real-time Updates
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20-35%</div>
              <div className="text-slate-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30-50%</div>
              <div className="text-slate-400">Lead Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25-40%</div>
              <div className="text-slate-400">Inventory Optimization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40-60%</div>
              <div className="text-slate-400">Efficiency Improvement</div>
=======
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Optimization Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your supply chain operations with AI that predicts demand, optimizes inventory, and streamlines logistics. 
              Reduce costs, improve efficiency, and gain competitive advantage in today's complex global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Watch Demo
              </motion.button>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to optimize every aspect of your supply chain operations
=======
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Supply Chain Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to optimize your entire supply chain from end to end
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
<<<<<<< HEAD
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
=======
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Measurable Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform delivers quantifiable improvements across your entire supply chain
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-300 font-medium">{benefit}</p>
=======
            <h2 className="text-4xl font-bold text-white mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See real improvements in your supply chain performance and bottom line
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored AI optimization solutions for various industries and business models
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-purple-500 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-300 font-medium">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing ERP, CRM, and logistics systems without disruption
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center hover:border-indigo-500 transition-colors"
              >
                <p className="text-slate-300 text-sm font-medium">{integration}</p>
=======
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Leading Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven solutions across diverse industries and supply chain complexities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase}</h3>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain complexity and business needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                    : 'border-slate-700'
=======
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Scale your supply chain optimization as your business grows
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-gray-700'
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<<<<<<< HEAD
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
=======
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
<<<<<<< HEAD
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
=======
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
<<<<<<< HEAD
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }">
                  Get Started
                </button>
=======
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 300+ companies that have transformed their supply chain operations with AI-powered optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
            <div className="mt-6 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
              <p>Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">ziontechgroup.com</a></p>
=======
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who have already transformed their supply chain operations with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
<<<<<<< HEAD
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-slate-300">
              <div>
                <DollarSign className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="font-semibold">Starting at $599/month</p>
                <p className="text-sm">No setup fees, cancel anytime</p>
              </div>
              <div>
                <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="font-semibold">Setup in 48 hours</p>
                <p className="text-sm">Quick integration with your systems</p>
              </div>
              <div>
                <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="font-semibold">Enterprise Security</p>
                <p className="text-sm">SOC 2, GDPR, ISO 27001 compliant</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
              </p>
              <p className="text-slate-300">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
=======
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Need help choosing the right plan? Contact our sales team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
            <span>📞 +1 302 464 0950</span>
            <span>📧 kleber@ziontechgroup.com</span>
            <span>🌐 https://ziontechgroup.com</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;