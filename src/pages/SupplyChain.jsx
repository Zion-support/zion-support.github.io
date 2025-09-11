import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Wrench,
  Cpu,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server,
  Building,
  Car,
  Plane,
  Factory,
  Cog,
  BarChart3,
  TrendingUp,
  MapPin,
  Layers,
  RefreshCw,
  AlertTriangle,
  Package,
  Warehouse,
  Route,
  Navigation,
  Box,
  Ship,
  Train,
  Plane,
  Car,
  Truck,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  Smartphone,
  Tablet,
  Monitor,
  Cloud,
  Database,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette
} from 'lucide-react';

const supplyChainSolutions = [
  {
    id: 1,
    title: "Supply Chain Visibility",
    description: "Real-time tracking and monitoring of goods across the entire supply chain network.",
    icon: Eye,
    features: [
      "End-to-end tracking",
      "Real-time monitoring",
      "Status updates",
      "Exception alerts"
    ],
    price: "From $100,000",
    timeline: "20-32 weeks",
    category: "Visibility",
    technologies: ["IoT Sensors", "GPS Tracking", "Real-time Analytics", "Cloud Platforms"]
  },
  {
    id: 2,
    title: "Inventory Management",
    description: "Intelligent inventory optimization and demand forecasting systems.",
    icon: Warehouse,
    features: [
      "Demand forecasting",
      "Stock optimization",
      "Automated reordering",
      "Inventory analytics"
    ],
    price: "From $80,000",
    timeline: "16-24 weeks",
    category: "Inventory",
    technologies: ["AI/ML", "Predictive Analytics", "ERP Integration", "Real-time Data"]
  },
  {
    id: 3,
    title: "Route Optimization",
    description: "AI-powered route planning and optimization for transportation and delivery.",
    icon: Route,
    features: [
      "Dynamic routing",
      "Traffic optimization",
      "Fuel efficiency",
      "Delivery scheduling"
    ],
    price: "From $60,000",
    timeline: "12-20 weeks",
    category: "Routing",
    technologies: ["AI Algorithms", "GPS Integration", "Traffic Data", "Optimization Engines"]
  },
  {
    id: 4,
    title: "Warehouse Management",
    description: "Automated warehouse operations and inventory control systems.",
    icon: Building,
    features: [
      "Automated picking",
      "Space optimization",
      "Order fulfillment",
      "Quality control"
    ],
    price: "From $120,000",
    timeline: "24-36 weeks",
    category: "Warehouse",
    technologies: ["WMS", "Automation", "IoT Sensors", "Robotics Integration"]
  },
  {
    id: 5,
    title: "Supplier Management",
    description: "Comprehensive supplier relationship and performance management platforms.",
    icon: Users,
    features: [
      "Supplier onboarding",
      "Performance tracking",
      "Risk assessment",
      "Compliance monitoring"
    ],
    price: "From $70,000",
    timeline: "16-24 weeks",
    category: "Supplier Management",
    technologies: ["SRM Platforms", "Analytics", "Risk Management", "Compliance Tools"]
  },
  {
    id: 6,
    title: "Logistics Analytics",
    description: "Advanced analytics and reporting for supply chain performance optimization.",
    icon: BarChart3,
    features: [
      "Performance metrics",
      "Cost analysis",
      "Trend identification",
      "Predictive insights"
    ],
    price: "From $50,000",
    timeline: "12-20 weeks",
    category: "Analytics",
    technologies: ["Business Intelligence", "Data Analytics", "Machine Learning", "Reporting Tools"]
  }
];

const supplyChainTechnologies = [
  {
    name: "IoT Sensors",
    description: "Real-time monitoring and tracking of goods and assets",
    icon: Activity,
    useCase: "Asset Tracking",
    reliability: "Critical"
  },
  {
    name: "GPS & Navigation",
    description: "Location tracking and route optimization for transportation",
    icon: Navigation,
    useCase: "Transportation",
    reliability: "Critical"
  },
  {
    name: "AI & Machine Learning",
    description: "Intelligent optimization and predictive analytics",
    icon: Brain,
    useCase: "Optimization",
    reliability: "High"
  },
  {
    name: "Cloud Platforms",
    description: "Scalable infrastructure for supply chain applications",
    icon: Cloud,
    useCase: "Infrastructure",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Global Logistics Corp",
    industry: "Logistics",
    challenge: "Needed real-time visibility across 50+ warehouses and 1000+ delivery vehicles",
    solution: "Implemented comprehensive supply chain visibility platform with IoT integration and real-time analytics",
    results: "40% improvement in delivery times, 30% reduction in operational costs, enhanced customer satisfaction",
    logo: "GLC"
  },
  {
    id: 2,
    company: "Manufacturing Network",
    industry: "Manufacturing",
    challenge: "Required optimized inventory management across multiple production facilities",
    solution: "Built AI-powered inventory management system with demand forecasting and automated reordering",
    results: "25% reduction in inventory costs, 50% improvement in stock accuracy, reduced stockouts",
    logo: "MN"
  },
  {
    id: 3,
    company: "Retail Chain",
    industry: "Retail",
    challenge: "Needed efficient route optimization for last-mile delivery to 500+ stores",
    solution: "Implemented AI-driven route optimization with real-time traffic integration",
    results: "35% reduction in delivery costs, 45% improvement in delivery efficiency, enhanced customer experience",
    logo: "RC"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Supply Chain Assessment",
    description: "Evaluate current supply chain operations and identify improvement opportunities",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Technology Selection",
    description: "Choose appropriate technologies and platforms for implementation",
    icon: Code,
    duration: "2-4 weeks"
  },
  {
    step: 3,
    title: "Implementation",
    description: "Deploy supply chain solutions and integrate with existing systems",
    icon: Wrench,
    duration: "12-36 weeks"
  },
  {
    step: 4,
    title: "Optimization",
    description: "Monitor performance and continuously optimize operations",
    icon: Gauge,
    duration: "Ongoing"
  }
];

const supplyChainBenefits = [
  {
    title: "Cost Reduction",
    description: "Significant reduction in operational costs and inefficiencies",
    icon: TrendingUp,
    examples: ["Lower transportation costs", "Reduced inventory costs", "Improved efficiency", "Better resource utilization"]
  },
  {
    title: "Enhanced Visibility",
    description: "Real-time visibility across the entire supply chain network",
    icon: Eye,
    examples: ["End-to-end tracking", "Real-time monitoring", "Exception alerts", "Proactive management"]
  },
  {
    title: "Improved Efficiency",
    description: "Streamlined operations and optimized processes",
    icon: Zap,
    examples: ["Faster delivery times", "Reduced lead times", "Better resource allocation", "Automated processes"]
  },
  {
    title: "Risk Mitigation",
    description: "Better risk management and contingency planning",
    icon: Shield,
    examples: ["Supply chain resilience", "Risk assessment", "Contingency planning", "Compliance monitoring"]
  }
];

export default function SupplyChain() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Visibility', 'Inventory', 'Routing', 'Warehouse', 'Supplier Management', 'Analytics'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? supplyChainSolutions 
    : supplyChainSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Truck className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Supply Chain &
              <span className="text-gradient block">Logistics</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your supply chain operations with intelligent technology solutions. From real-time 
              visibility to AI-powered optimization, we help you build efficient and resilient supply chains.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Eye className="w-4 h-4" />
                <span>Real-time Visibility</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Brain className="w-4 h-4" />
                <span>AI Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <TrendingUp className="w-4 h-4" />
                <span>Cost Reduction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supply Chain Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Supply Chain Technology Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make supply chain technology essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supplyChainBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed text-center">{benefit.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-zion-cyan font-semibold mb-3">Examples:</h4>
                  {benefit.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Supply Chain Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading supply chain platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supplyChainTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <technology.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{technology.name}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{technology.description}</p>
                <p className="text-zion-cyan font-semibold mb-2">{technology.useCase}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  technology.reliability === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : technology.reliability === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {technology.reliability} Reliability
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Supply Chain Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful supply chain transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Supply Chain Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for modern supply chain operations
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Supply Chain Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their supply chain operations with technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Supply Chain Transformation?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how supply chain technology can transform your operations, 
              reduce costs, and create competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Supply Chain Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Supply Chain Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}