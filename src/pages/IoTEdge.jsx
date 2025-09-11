import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Server, 
  Smartphone, 
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
  Monitor,
  Code,
  FileText,
  Truck,
  Wrench,
  Cpu
} from 'lucide-react';

const iotEdgeSolutions = [
  {
    id: 1,
    title: "IoT Device Management",
    description: "Comprehensive platform for managing and monitoring IoT devices at scale.",
    icon: Wifi,
    features: [
      "Device provisioning",
      "Remote monitoring",
      "Firmware updates",
      "Device analytics"
    ],
    price: "From $30,000",
    timeline: "16-24 weeks",
    category: "IoT Platform",
    technologies: ["MQTT", "CoAP", "HTTP", "WebSocket"]
  },
  {
    id: 2,
    title: "Edge Computing Infrastructure",
    description: "Distributed edge computing solutions for real-time data processing.",
    icon: Server,
    features: [
      "Edge nodes setup",
      "Data processing",
      "Load balancing",
      "Failover systems"
    ],
    price: "From $40,000",
    timeline: "20-32 weeks",
    category: "Edge Computing",
    technologies: ["Kubernetes", "Docker", "Apache Kafka", "Redis"]
  },
  {
    id: 3,
    title: "Real-Time Data Analytics",
    description: "Streaming analytics platform for processing IoT data in real-time.",
    icon: Activity,
    features: [
      "Stream processing",
      "Real-time alerts",
      "Predictive analytics",
      "Data visualization"
    ],
    price: "From $35,000",
    timeline: "18-26 weeks",
    category: "Analytics",
    technologies: ["Apache Spark", "Apache Flink", "InfluxDB", "Grafana"]
  },
  {
    id: 4,
    title: "Smart City Solutions",
    description: "IoT infrastructure for smart city applications and urban management.",
    icon: Globe,
    features: [
      "Traffic management",
      "Environmental monitoring",
      "Smart lighting",
      "Public safety"
    ],
    price: "From $100,000",
    timeline: "32-48 weeks",
    category: "Smart Cities",
    technologies: ["LoRaWAN", "NB-IoT", "5G", "Cloud Platforms"]
  },
  {
    id: 5,
    title: "Industrial IoT (IIoT)",
    description: "Connected manufacturing and industrial automation solutions.",
    icon: Cpu,
    features: [
      "Equipment monitoring",
      "Predictive maintenance",
      "Quality control",
      "Energy optimization"
    ],
    price: "From $80,000",
    timeline: "24-36 weeks",
    category: "Industrial IoT",
    technologies: ["OPC UA", "Modbus", "Ethernet/IP", "Profinet"]
  },
  {
    id: 6,
    title: "IoT Security Framework",
    description: "Comprehensive security solutions for IoT and edge computing environments.",
    icon: Shield,
    features: [
      "Device authentication",
      "Data encryption",
      "Access control",
      "Threat detection"
    ],
    price: "From $45,000",
    timeline: "16-24 weeks",
    category: "Security",
    technologies: ["TLS/SSL", "OAuth 2.0", "JWT", "Zero Trust"]
  }
];

const iotTechnologies = [
  {
    name: "MQTT Protocol",
    description: "Lightweight messaging protocol for IoT devices",
    icon: Wifi,
    useCase: "Device Communication",
    reliability: "High"
  },
  {
    name: "Edge Computing",
    description: "Distributed computing at the network edge",
    icon: Server,
    useCase: "Real-time Processing",
    reliability: "Critical"
  },
  {
    name: "5G Networks",
    description: "High-speed, low-latency wireless connectivity",
    icon: Globe,
    useCase: "High-bandwidth IoT",
    reliability: "High"
  },
  {
    name: "LoRaWAN",
    description: "Long-range, low-power wireless protocol",
    icon: Wifi,
    useCase: "Wide-area IoT",
    reliability: "Medium"
  }
];

const successStories = [
  {
    id: 1,
    company: "Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Needed real-time monitoring of 1000+ production machines",
    solution: "Built IIoT platform with edge computing and predictive analytics",
    results: "30% reduction in downtime, 25% energy savings, improved quality control",
    logo: "MC"
  },
  {
    id: 2,
    company: "Smart City Initiative",
    industry: "Municipal",
    challenge: "Required IoT infrastructure for city-wide monitoring",
    solution: "Implemented smart city platform with edge nodes and real-time analytics",
    results: "40% improvement in traffic flow, 20% reduction in energy consumption",
    logo: "SC"
  },
  {
    id: 3,
    company: "Logistics Network",
    industry: "Transportation",
    challenge: "Needed real-time tracking and monitoring of fleet vehicles",
    solution: "Built IoT fleet management system with edge computing",
    results: "50% improvement in delivery times, 35% reduction in fuel costs",
    logo: "LN"
  }
];

const processSteps = [
  {
    step: 1,
    title: "IoT Assessment",
    description: "Evaluate current infrastructure and IoT requirements",
    icon: FileText,
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Architecture Design",
    description: "Design IoT and edge computing architecture",
    icon: Code,
    duration: "2-3 weeks"
  },
  {
    step: 3,
    title: "Implementation",
    description: "Build and deploy IoT infrastructure and edge nodes",
    icon: Wrench,
    duration: "16-48 weeks"
  },
  {
    step: 4,
    title: "Integration & Testing",
    description: "Integrate systems and conduct comprehensive testing",
    icon: CheckCircle,
    duration: "2-4 weeks"
  }
];

export default function IoTEdge() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'IoT Platform', 'Edge Computing', 'Analytics', 'Smart Cities', 'Industrial IoT', 'Security'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? iotEdgeSolutions 
    : iotEdgeSolutions.filter(solution => solution.category === selectedCategory);

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
              <Wifi className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT & Edge
              <span className="text-gradient block">Computing</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Connect, monitor, and optimize your world with cutting-edge IoT and edge computing solutions. 
              From smart cities to industrial automation, we help businesses harness the power of connected devices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Wifi className="w-4 h-4" />
                <span>Connected Devices</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Server className="w-4 h-4" />
                <span>Edge Processing</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Zap className="w-4 h-4" />
                <span>Real-time Analytics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IoT Technologies */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">IoT Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading IoT protocols and edge computing technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iotTechnologies.map((technology, index) => (
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
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful IoT and edge computing implementation
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
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">IoT & Edge Computing Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for the connected world
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
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with IoT and edge computing
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Connect Your World?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our IoT and edge computing solutions can transform your business, 
              improve efficiency, and create new opportunities through connected technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}