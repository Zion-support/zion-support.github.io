import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
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
  Truck,
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
  AlertTriangle
} from 'lucide-react';

const digitalTwinSolutions = [
  {
    id: 1,
    title: "Manufacturing Digital Twin",
    description: "Real-time digital representation of manufacturing processes and equipment for optimization.",
    icon: Factory,
    features: [
      "Equipment monitoring",
      "Process optimization",
      "Predictive maintenance",
      "Quality control"
    ],
    price: "From $150,000",
    timeline: "24-36 weeks",
    category: "Manufacturing",
    technologies: ["IoT Sensors", "3D Modeling", "Real-time Analytics", "ML Algorithms"]
  },
  {
    id: 2,
    title: "Smart City Digital Twin",
    description: "Comprehensive digital representation of urban infrastructure and systems.",
    icon: Building,
    features: [
      "Infrastructure monitoring",
      "Traffic optimization",
      "Energy management",
      "Public safety"
    ],
    price: "From $300,000",
    timeline: "36-52 weeks",
    category: "Smart Cities",
    technologies: ["GIS Mapping", "IoT Networks", "AI Analytics", "Real-time Data"]
  },
  {
    id: 3,
    title: "Healthcare Digital Twin",
    description: "Patient-specific digital models for personalized medicine and treatment planning.",
    icon: Users,
    features: [
      "Patient modeling",
      "Treatment simulation",
      "Drug response prediction",
      "Surgical planning"
    ],
    price: "From $200,000",
    timeline: "28-40 weeks",
    category: "Healthcare",
    technologies: ["Medical Imaging", "AI Models", "3D Visualization", "Predictive Analytics"]
  },
  {
    id: 4,
    title: "Energy Infrastructure Twin",
    description: "Digital representation of power plants, grids, and renewable energy systems.",
    icon: Zap,
    features: [
      "Grid monitoring",
      "Load balancing",
      "Predictive maintenance",
      "Energy optimization"
    ],
    price: "From $250,000",
    timeline: "32-44 weeks",
    category: "Energy",
    technologies: ["SCADA Systems", "IoT Sensors", "AI Analytics", "Real-time Control"]
  },
  {
    id: 5,
    title: "Transportation Digital Twin",
    description: "Digital models of transportation networks, vehicles, and logistics systems.",
    icon: Truck,
    features: [
      "Fleet monitoring",
      "Route optimization",
      "Traffic simulation",
      "Predictive analytics"
    ],
    price: "From $180,000",
    timeline: "24-36 weeks",
    category: "Transportation",
    technologies: ["GPS Tracking", "IoT Sensors", "AI Routing", "Real-time Data"]
  },
  {
    id: 6,
    title: "Building Digital Twin",
    description: "Digital representation of buildings for facility management and optimization.",
    icon: Building,
    features: [
      "Building monitoring",
      "Energy optimization",
      "Occupancy tracking",
      "Maintenance planning"
    ],
    price: "From $120,000",
    timeline: "20-28 weeks",
    category: "Buildings",
    technologies: ["BMS Integration", "IoT Sensors", "3D Modeling", "AI Analytics"]
  }
];

const digitalTwinTechnologies = [
  {
    name: "IoT Sensors",
    description: "Real-time data collection from physical assets",
    icon: Activity,
    useCase: "Data Collection",
    reliability: "Critical"
  },
  {
    name: "3D Modeling",
    description: "Digital representation of physical objects and spaces",
    icon: Layers,
    useCase: "Visualization",
    reliability: "High"
  },
  {
    name: "AI & Machine Learning",
    description: "Intelligent analysis and prediction capabilities",
    icon: Brain,
    useCase: "Analytics",
    reliability: "High"
  },
  {
    name: "Real-time Analytics",
    description: "Instant processing and analysis of streaming data",
    icon: RefreshCw,
    useCase: "Monitoring",
    reliability: "Critical"
  }
];

const successStories = [
  {
    id: 1,
    company: "Advanced Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Needed real-time monitoring and optimization of 50+ production lines",
    solution: "Built comprehensive digital twin platform with IoT integration and AI analytics",
    results: "30% increase in production efficiency, 50% reduction in downtime, improved quality control",
    logo: "AMC"
  },
  {
    id: 2,
    company: "Metropolitan City",
    industry: "Municipal",
    challenge: "Required comprehensive monitoring of city infrastructure and services",
    solution: "Implemented smart city digital twin with real-time monitoring and predictive analytics",
    results: "25% improvement in traffic flow, 20% reduction in energy consumption, enhanced public safety",
    logo: "MC"
  },
  {
    id: 3,
    company: "Regional Power Grid",
    industry: "Energy",
    challenge: "Needed real-time monitoring and optimization of power distribution network",
    solution: "Built energy infrastructure digital twin with predictive maintenance and load balancing",
    results: "15% improvement in grid efficiency, 40% reduction in outages, optimized energy distribution",
    logo: "RPG"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Asset Assessment",
    description: "Evaluate physical assets and determine digital twin requirements",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Data Integration",
    description: "Integrate IoT sensors and data sources for real-time monitoring",
    icon: Database,
    duration: "4-8 weeks"
  },
  {
    step: 3,
    title: "Digital Modeling",
    description: "Create 3D digital models and simulation environments",
    icon: Code,
    duration: "8-20 weeks"
  },
  {
    step: 4,
    title: "AI Integration",
    description: "Implement AI algorithms and predictive analytics",
    icon: Brain,
    duration: "4-8 weeks"
  }
];

const digitalTwinBenefits = [
  {
    title: "Real-time Monitoring",
    description: "Continuous monitoring of physical assets and systems",
    icon: Eye,
    examples: ["Live data feeds", "Instant alerts", "Performance tracking"]
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered predictions for maintenance and optimization",
    icon: TrendingUp,
    examples: ["Predictive maintenance", "Performance forecasting", "Risk assessment"]
  },
  {
    title: "Simulation & Testing",
    description: "Virtual testing of scenarios and what-if analysis",
    icon: Monitor,
    examples: ["Process simulation", "Scenario testing", "Optimization modeling"]
  },
  {
    title: "Cost Optimization",
    description: "Reduced operational costs through better resource management",
    icon: Gauge,
    examples: ["Energy optimization", "Maintenance planning", "Resource allocation"]
  }
];

export default function DigitalTwin() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Manufacturing', 'Smart Cities', 'Healthcare', 'Energy', 'Transportation', 'Buildings'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? digitalTwinSolutions 
    : digitalTwinSolutions.filter(solution => solution.category === selectedCategory);

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
              <Monitor className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Twin
              <span className="text-gradient block">Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Create virtual replicas of physical assets and systems for real-time monitoring, 
              predictive analytics, and optimization. Transform your operations with digital twin technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Monitor className="w-4 h-4" />
                <span>Real-time Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Brain className="w-4 h-4" />
                <span>AI Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Zap className="w-4 h-4" />
                <span>Predictive Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Twin Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Digital Twin Technology Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make digital twins revolutionary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalTwinBenefits.map((benefit, index) => (
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

      {/* Digital Twin Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Digital Twin Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading digital twin platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalTwinTechnologies.map((technology, index) => (
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Digital Twin Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful digital twin implementation
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
            <h2 className="text-4xl font-bold text-white mb-4">Digital Twin Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for the digital transformation era
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
            <h2 className="text-4xl font-bold text-white mb-4">Digital Twin Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with digital twin technology
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Digital Twin Transformation?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how digital twin technology can transform your operations, 
              enhance efficiency, and create new opportunities through virtual modeling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Digital Twin Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Digital Twin Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}