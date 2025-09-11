import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Clock,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  MapPin,
  Phone,
  Mail,
  FileText,
  Play,
  Star,
  Award,
  Lock,
  Route,
  Warehouse,
  Factory,
  Ship
} from 'lucide-react';

export default function SupplyChain() {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Predict demand patterns with machine learning algorithms for optimal inventory management",
      features: ["Real-time analytics", "Predictive modeling", "Seasonal adjustments"],
      price: "From $25K",
      color: "text-purple-400"
    },
    {
      icon: Cloud,
      title: "Supply Chain Visibility Platform",
      description: "End-to-end visibility across your entire supply chain with real-time tracking",
      features: ["Real-time tracking", "Multi-tier visibility", "Performance analytics"],
      price: "From $30K",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description: "Identify and mitigate supply chain risks with advanced monitoring systems",
      features: ["Risk assessment", "Compliance tracking", "Early warning systems"],
      price: "From $20K",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Automation & Optimization",
      description: "Streamline operations with intelligent automation and route optimization",
      features: ["Process automation", "Route optimization", "Cost reduction"],
      price: "From $35K",
      color: "text-yellow-400"
    }
  ];

  const capabilities = [
    {
      icon: Warehouse,
      title: "Warehouse Management",
      description: "Optimize warehouse operations with smart inventory systems and automated processes",
      benefits: ["Real-time inventory", "Automated picking", "Space optimization"]
    },
    {
      icon: Route,
      title: "Logistics Optimization",
      description: "Optimize delivery routes and transportation networks for maximum efficiency",
      benefits: ["Route optimization", "Fuel efficiency", "Delivery tracking"]
    },
    {
      icon: Factory,
      title: "Manufacturing Integration",
      description: "Seamlessly integrate manufacturing processes with supply chain operations",
      benefits: ["Production planning", "Quality control", "Just-in-time delivery"]
    },
    {
      icon: Ship,
      title: "Global Trade Management",
      description: "Navigate international trade complexities with compliance and documentation tools",
      benefits: ["Customs compliance", "Documentation", "Trade regulations"]
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Streamline production and distribution with integrated supply chain solutions",
      icon: Factory,
      challenges: ["Production delays", "Inventory waste", "Quality control"],
      solutions: ["Real-time monitoring", "Predictive maintenance", "Quality analytics"]
    },
    {
      name: "Retail & E-commerce",
      description: "Optimize inventory and fulfillment for seamless customer experiences",
      icon: Package,
      challenges: ["Stockouts", "Delivery delays", "Returns management"],
      solutions: ["Demand forecasting", "Last-mile optimization", "Returns automation"]
    },
    {
      name: "Healthcare",
      description: "Ensure critical supplies reach patients with reliable healthcare logistics",
      icon: Shield,
      challenges: ["Temperature control", "Regulatory compliance", "Emergency response"],
      solutions: ["Cold chain monitoring", "Compliance tracking", "Emergency logistics"]
    },
    {
      name: "Food & Beverage",
      description: "Maintain freshness and safety with specialized food supply chain solutions",
      icon: Truck,
      challenges: ["Shelf life", "Food safety", "Seasonal demand"],
      solutions: ["Freshness tracking", "Safety monitoring", "Demand prediction"]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce operational costs by 20-30% through optimization and automation"
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "Improve delivery times by 40% with route optimization and real-time tracking"
    },
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Boost operational efficiency by 35% with AI-powered automation"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Reduce supply chain disruptions by 60% with proactive risk management"
    }
  ];

  const caseStudies = [
    {
      title: "Global Manufacturing Optimization",
      company: "TechCorp Industries",
      description: "Implemented AI-powered supply chain optimization across 15 manufacturing facilities",
      results: ["30% cost reduction", "40% faster delivery", "25% inventory reduction"],
      icon: Factory
    },
    {
      title: "E-commerce Fulfillment",
      company: "ShopFast Retail",
      description: "Streamlined fulfillment operations for 1000+ daily orders",
      results: ["50% faster processing", "35% cost savings", "99.9% accuracy"],
      icon: Package
    },
    {
      title: "Healthcare Supply Chain",
      company: "MedSupply Corp",
      description: "Ensured critical medical supplies reach hospitals with 100% reliability",
      results: ["100% delivery success", "Zero stockouts", "24/7 monitoring"],
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Truck className="w-4 h-4 mr-2" />
                Supply Chain Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transform Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Supply Chain</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Revolutionize your supply chain operations with AI-powered visibility, 
                optimization, and risk management. From warehouse to delivery, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Supply Chain Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions that address every aspect of modern supply chain management, 
              from planning to execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${solution.color.replace('text-', 'bg-').replace('-400', '-400/20')} rounded-xl flex items-center justify-center mb-6`}>
                  <solution.icon className={`w-8 h-8 ${solution.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-400">{solution.price}</span>
                  <button className="px-6 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our supply chain solutions cover every aspect of modern logistics and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{capability.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {capability.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored supply chain solutions for specific industry challenges and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{industry.name}</h3>
                    <p className="text-gray-300 leading-relaxed">{industry.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Challenges
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-center">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Our Solutions
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {industry.solutions.map((solution) => (
                        <li key={solution} className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          {solution}
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

      {/* Benefits Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our supply chain solutions deliver quantifiable improvements across all key metrics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/50 border border-slate-600/50 rounded-xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our supply chain solutions have transformed 
              operations for leading companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <study.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-blue-400 text-sm mb-3">{study.company}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{study.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-green-400">Results:</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
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
      <section className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies that have revolutionized their operations with our 
              AI-powered supply chain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Get Free Assessment
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}