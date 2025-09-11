import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
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
  AlertTriangle,
  Signal,
  Smartphone,
  Monitor,
  Cloud,
  Satellite,
  Antenna,
  Router,
  Tower
} from 'lucide-react';

const fiveGSolutions = [
  {
    id: 1,
    title: "5G Network Infrastructure",
    description: "Complete 5G network deployment including core network, radio access network, and edge computing.",
    icon: Tower,
    features: [
      "Core network deployment",
      "Radio access network",
      "Edge computing nodes",
      "Network slicing"
    ],
    price: "From $500,000",
    timeline: "48-72 weeks",
    category: "Infrastructure",
    technologies: ["5G Core", "RAN", "Edge Computing", "Network Slicing"]
  },
  {
    id: 2,
    title: "5G Enterprise Solutions",
    description: "Private 5G networks and enterprise-grade connectivity solutions for businesses.",
    icon: Building,
    features: [
      "Private 5G networks",
      "Enterprise connectivity",
      "Network management",
      "Security features"
    ],
    price: "From $200,000",
    timeline: "24-36 weeks",
    category: "Enterprise",
    technologies: ["Private 5G", "Network Management", "Security", "IoT Integration"]
  },
  {
    id: 3,
    title: "5G IoT Applications",
    description: "Internet of Things solutions leveraging 5G's high-speed, low-latency capabilities.",
    icon: Signal,
    features: [
      "IoT device connectivity",
      "Real-time data processing",
      "Edge analytics",
      "Device management"
    ],
    price: "From $150,000",
    timeline: "20-32 weeks",
    category: "IoT",
    technologies: ["5G IoT", "Edge Computing", "Real-time Analytics", "Device Management"]
  },
  {
    id: 4,
    title: "5G Smart City Solutions",
    description: "Urban infrastructure and services powered by 5G technology for smart city applications.",
    icon: Globe,
    features: [
      "Smart traffic management",
      "Public safety systems",
      "Environmental monitoring",
      "Urban services"
    ],
    price: "From $300,000",
    timeline: "36-52 weeks",
    category: "Smart Cities",
    technologies: ["5G Networks", "IoT Sensors", "AI Analytics", "Smart Infrastructure"]
  },
  {
    id: 5,
    title: "5G Healthcare Solutions",
    description: "Telemedicine, remote monitoring, and healthcare applications enabled by 5G technology.",
    icon: Users,
    features: [
      "Telemedicine platforms",
      "Remote patient monitoring",
      "Medical IoT devices",
      "Healthcare analytics"
    ],
    price: "From $180,000",
    timeline: "24-36 weeks",
    category: "Healthcare",
    technologies: ["5G Networks", "Telemedicine", "IoT Devices", "Healthcare Analytics"]
  },
  {
    id: 6,
    title: "5G Manufacturing Solutions",
    description: "Industry 4.0 and smart manufacturing solutions powered by 5G connectivity.",
    icon: Factory,
    features: [
      "Industrial IoT",
      "Predictive maintenance",
      "Quality control",
      "Supply chain optimization"
    ],
    price: "From $250,000",
    timeline: "28-40 weeks",
    category: "Manufacturing",
    technologies: ["5G Networks", "Industrial IoT", "AI Analytics", "Predictive Maintenance"]
  }
];

const fiveGTechnologies = [
  {
    name: "5G Core Network",
    description: "Next-generation core network architecture for 5G services",
    icon: Server,
    useCase: "Network Services",
    reliability: "Critical"
  },
  {
    name: "Radio Access Network",
    description: "Advanced radio technologies for high-speed wireless connectivity",
    icon: Antenna,
    useCase: "Wireless Access",
    reliability: "Critical"
  },
  {
    name: "Edge Computing",
    description: "Distributed computing at the network edge for low-latency applications",
    icon: Cloud,
    useCase: "Low-latency Apps",
    reliability: "High"
  },
  {
    name: "Network Slicing",
    description: "Virtual network segmentation for different service requirements",
    icon: Layers,
    useCase: "Service Isolation",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Metropolitan City",
    industry: "Municipal",
    challenge: "Needed high-speed connectivity for smart city infrastructure across 100+ locations",
    solution: "Deployed comprehensive 5G network with edge computing and IoT integration",
    results: "10x faster data transmission, 50% reduction in response times, enhanced smart city services",
    logo: "MC"
  },
  {
    id: 2,
    company: "Advanced Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Required real-time monitoring and control of 500+ production machines",
    solution: "Built private 5G network with industrial IoT and edge computing",
    results: "Real-time machine monitoring, 30% improvement in production efficiency, predictive maintenance",
    logo: "AMC"
  },
  {
    id: 3,
    company: "Regional Hospital Network",
    industry: "Healthcare",
    challenge: "Needed high-bandwidth connectivity for telemedicine and remote monitoring",
    solution: "Implemented 5G healthcare network with telemedicine platforms and IoT devices",
    results: "Enhanced telemedicine capabilities, improved patient monitoring, reduced hospital visits",
    logo: "RHN"
  }
];

const processSteps = [
  {
    step: 1,
    title: "5G Assessment",
    description: "Evaluate 5G requirements and network planning",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Network Design",
    description: "Design 5G network architecture and infrastructure",
    icon: Code,
    duration: "4-8 weeks"
  },
  {
    step: 3,
    title: "Infrastructure Deployment",
    description: "Deploy 5G core network, RAN, and edge computing",
    icon: Wrench,
    duration: "24-72 weeks"
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description: "Test network performance and optimize for efficiency",
    icon: Gauge,
    duration: "4-8 weeks"
  }
];

const fiveGBenefits = [
  {
    title: "Ultra-High Speed",
    description: "10-100x faster than 4G for lightning-fast data transmission",
    icon: Zap,
    examples: ["Gigabit speeds", "Instant downloads", "Real-time streaming"]
  },
  {
    title: "Low Latency",
    description: "Ultra-low latency for real-time applications and services",
    icon: Clock,
    examples: ["Real-time gaming", "Autonomous vehicles", "Remote surgery"]
  },
  {
    title: "Massive Connectivity",
    description: "Support for millions of IoT devices per square kilometer",
    icon: Network,
    examples: ["Smart cities", "Industrial IoT", "Connected devices"]
  },
  {
    title: "Network Slicing",
    description: "Virtual network segmentation for different service requirements",
    icon: Layers,
    examples: ["Customized services", "Service isolation", "Quality guarantees"]
  }
];

export default function FiveGSolutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Infrastructure', 'Enterprise', 'IoT', 'Smart Cities', 'Healthcare', 'Manufacturing'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? fiveGSolutions 
    : fiveGSolutions.filter(solution => solution.category === selectedCategory);

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
              <Signal className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              5G Technology
              <span className="text-gradient block">Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business with next-generation 5G technology. From ultra-high-speed connectivity 
              to massive IoT support, unlock new possibilities with cutting-edge 5G solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Zap className="w-4 h-4" />
                <span>Ultra-High Speed</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Clock className="w-4 h-4" />
                <span>Low Latency</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Network className="w-4 h-4" />
                <span>Massive Connectivity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5G Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">5G Technology Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make 5G revolutionary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fiveGBenefits.map((benefit, index) => (
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

      {/* 5G Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">5G Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading 5G platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fiveGTechnologies.map((technology, index) => (
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
            <h2 className="text-4xl font-bold text-white mb-4">Our 5G Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful 5G network deployment
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
            <h2 className="text-4xl font-bold text-white mb-4">5G Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for the 5G era
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
            <h2 className="text-4xl font-bold text-white mb-4">5G Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with 5G technology
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready for 5G Transformation?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how 5G technology can transform your business, 
              enable new applications, and create competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start 5G Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                5G Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}