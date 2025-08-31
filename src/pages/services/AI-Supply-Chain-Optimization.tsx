import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Brain, 
  Activity, 
  Users, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Sparkles,
  BarChart3,
  FileText,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Clock,
  DollarSign,
  Package,
  Warehouse,
  Globe,
  Route,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  GanttChart,
  Kanban,
  Calendar,
  Timer,
  Stopwatch,
  MapPin,
  Navigation
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AISupplyChainOptimization() {
  const features = [
    {
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms for accurate demand prediction and inventory optimization",
      icon: Brain,
      benefits: ["Predictive analytics", "Seasonal pattern recognition", "Market trend analysis", "Real-time adjustments"]
    },
    {
      title: "Intelligent Route Optimization",
      description: "AI-driven logistics optimization for cost-effective and efficient delivery routes",
      icon: Route,
      benefits: ["Dynamic routing", "Traffic optimization", "Fuel efficiency", "Delivery time reduction"]
    },
    {
      title: "Real-time Supply Chain Visibility",
      description: "End-to-end visibility across the entire supply chain with predictive insights",
      icon: Eye,
      benefits: ["Live tracking", "Predictive delays", "Risk assessment", "Performance monitoring"]
    },
    {
      title: "Automated Inventory Management",
      description: "Smart inventory control with AI-powered reorder points and stock optimization",
      icon: Warehouse,
      benefits: ["Auto-reordering", "Safety stock optimization", "ABC analysis", "Demand-driven planning"]
    }
  ];

  const optimizationModules = [
    {
      name: "Demand Planning",
      capabilities: ["Forecasting algorithms", "Seasonal analysis", "Trend prediction", "Market intelligence"],
      aiFeatures: ["Machine learning models", "Predictive analytics", "Real-time updates", "Accuracy improvement"]
    },
    {
      name: "Inventory Optimization",
      capabilities: ["Stock level management", "Reorder optimization", "Safety stock calculation", "ABC categorization"],
      aiFeatures: ["Dynamic thresholds", "Predictive modeling", "Cost optimization", "Service level management"]
    },
    {
      name: "Logistics & Transportation",
      capabilities: ["Route optimization", "Carrier selection", "Load planning", "Delivery scheduling"],
      aiFeatures: ["AI routing", "Traffic prediction", "Cost optimization", "Performance analytics"]
    },
    {
      name: "Supplier Management",
      capabilities: ["Supplier performance", "Risk assessment", "Contract optimization", "Quality monitoring"],
      aiFeatures: ["Predictive risk", "Performance scoring", "Automated alerts", "Optimization suggestions"]
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      challenges: ["Production planning", "Raw material management", "Work-in-process optimization", "Finished goods inventory"],
      solutions: ["AI production scheduling", "Material requirement planning", "WIP optimization", "Demand-driven manufacturing"],
      outcomes: "25-40% cost reduction"
    },
    {
      industry: "Retail & E-commerce",
      challenges: ["Multi-channel inventory", "Seasonal demand spikes", "Returns management", "Last-mile delivery"],
      solutions: ["Omnichannel inventory", "Predictive demand", "Returns optimization", "Delivery optimization"],
      outcomes: "30-50% efficiency improvement"
    },
    {
      industry: "Healthcare & Pharma",
      challenges: ["Critical inventory", "Cold chain logistics", "Regulatory compliance", "Patient demand"],
      solutions: ["Critical stock monitoring", "Temperature tracking", "Compliance automation", "Patient demand prediction"],
      outcomes: "40-60% risk reduction"
    },
    {
      industry: "Food & Beverage",
      challenges: ["Perishable inventory", "Supply chain disruptions", "Quality control", "Distribution optimization"],
      solutions: ["Shelf life optimization", "Disruption prediction", "Quality monitoring", "Route optimization"],
      outcomes: "20-35% waste reduction"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,500",
      period: "/month",
      description: "Perfect for small businesses optimizing their supply chain",
      features: [
        "Basic demand forecasting",
        "Inventory optimization (up to 1,000 SKUs)",
        "Route optimization (up to 50 routes)",
        "Standard reporting",
        "Email support",
        "Basic analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$4,500",
      period: "/month",
      description: "Ideal for growing companies with complex supply chains",
      features: [
        "Advanced AI forecasting",
        "Inventory optimization (up to 10,000 SKUs)",
        "Route optimization (up to 500 routes)",
        "Real-time visibility",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations",
        "24/7 monitoring"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$15,000",
      period: "/month",
      description: "Comprehensive platform for large enterprises and global operations",
      features: [
        "Full AI supply chain suite",
        "Unlimited SKU capacity",
        "Global route optimization",
        "Custom AI models",
        "Dedicated optimization team",
        "24/7 premium support",
        "White-label solutions",
        "On-premise deployment",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const optimizationMetrics = [
    {
      metric: "Cost Reduction",
      value: "25-40%",
      description: "Average reduction in supply chain costs"
    },
    {
      metric: "Inventory Optimization",
      value: "30-50%",
      description: "Improvement in inventory turnover"
    },
    {
      metric: "Delivery Efficiency",
      value: "40-60%",
      description: "Increase in on-time delivery rates"
    },
    {
      metric: "Forecast Accuracy",
      value: "85-95%",
      description: "Improvement in demand forecasting accuracy"
    }
  ];

  const aiTechnologies = [
    {
      technology: "Machine Learning",
      applications: ["Demand forecasting", "Pattern recognition", "Anomaly detection", "Performance prediction"],
      benefits: ["Continuous learning", "Improved accuracy", "Adaptive models", "Real-time optimization"]
    },
    {
      technology: "Predictive Analytics",
      applications: ["Risk assessment", "Trend analysis", "Capacity planning", "Cost optimization"],
      benefits: ["Proactive planning", "Risk mitigation", "Resource optimization", "Cost reduction"]
    },
    {
      technology: "Computer Vision",
      applications: ["Quality inspection", "Inventory counting", "Damage detection", "Process monitoring"],
      benefits: ["Automated quality control", "Real-time monitoring", "Error reduction", "Efficiency improvement"]
    },
    {
      technology: "Natural Language Processing",
      applications: ["Document analysis", "Communication optimization", "Compliance monitoring", "Performance reporting"],
      benefits: ["Automated processing", "Real-time insights", "Compliance automation", "Efficient reporting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI-Powered Supply Chain Optimization | Zion Tech Group"
        description="Revolutionary AI-driven supply chain optimization platform providing intelligent forecasting, route optimization, and end-to-end visibility for modern enterprises."
        keywords="supply chain optimization, AI logistics, demand forecasting, inventory optimization, route optimization, supply chain visibility"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full">
                <Truck className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with artificial intelligence. 
              Optimize inventory, streamline logistics, and gain real-time 
              visibility across your entire supply network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating supply chain elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 6 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Optimization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of supply chain management with intelligent automation and predictive insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-blue-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Optimization Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete supply chain optimization with AI-enhanced capabilities across all functions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {optimizationModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{module.name}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Core Capabilities:</h4>
                  <ul className="space-y-2 mb-4">
                    {module.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Package className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">AI Features:</h4>
                  <ul className="space-y-1">
                    {module.aiFeatures.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <Brain className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored supply chain optimization solutions for every industry with proven outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Challenges:</h4>
                  <ul className="space-y-2 mb-4">
                    {useCase.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Activity className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Our Solutions:</h4>
                  <ul className="space-y-2 mb-4">
                    {useCase.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                  <p className="text-cyan-400 font-semibold">
                    Expected Outcomes: {useCase.outcomes}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-blue-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Proven Optimization Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world results from AI-powered supply chain optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optimizationMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-4">{metric.value}</div>
                <h3 className="text-xl font-bold text-white mb-2">{metric.metric}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence technologies powering our optimization platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{tech.technology}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Applications:</h4>
                  <ul className="space-y-2 mb-4">
                    {tech.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {tech.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-blue-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the optimization plan that fits your supply chain needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Optimize Your Supply Chain Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies using AI to transform their supply chain operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                Contact Optimization Team
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Free trial includes full platform access for 30 days
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}