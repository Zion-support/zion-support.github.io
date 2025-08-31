import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Leaf,
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
  Sun,
  Wind,
  Droplets,
  Recycle,
  Cloud,
  Battery,
  Thermometer
} from 'lucide-react';
<<<<<<< HEAD

const Sustainability = () => {
  const sustainabilitySolutions = [
    {
      id: 1,
      title: "Renewable Energy Systems",
      description: "Solar, wind, and hydroelectric power solutions for sustainable energy generation.",
      icon: Sun,
      features: [
        "Solar panel installation",
        "Wind turbine systems",
        "Energy storage solutions",
        "Grid integration"
      ],
      price: "From $200,000",
      timeline: "32-48 weeks",
      category: "Energy",
      technologies: ["Solar PV", "Wind Power", "Battery Storage", "Smart Grid"]
    },
    {
      id: 2,
      title: "Green Building Solutions",
      description: "Sustainable building design and construction for energy efficiency and environmental impact reduction.",
      icon: Building,
      features: [
        "LEED certification",
        "Energy-efficient design",
        "Green materials",
        "Smart building systems"
      ],
      price: "From $150,000",
      timeline: "24-40 weeks",
      category: "Buildings",
      technologies: ["LEED Standards", "BIM Modeling", "IoT Sensors", "Energy Management"]
    },
    {
      id: 3,
      title: "Waste Management Systems",
      description: "Advanced waste reduction, recycling, and circular economy solutions.",
      icon: Recycle,
      features: [
        "Waste sorting automation",
        "Recycling optimization",
        "Circular economy design",
        "Waste-to-energy"
      ],
      price: "From $100,000",
      timeline: "20-32 weeks",
      category: "Waste Management",
      technologies: ["AI Sorting", "IoT Monitoring", "Biogas", "Composting"]
    },
    {
      id: 4,
      title: "Sustainable Transportation",
      description: "Electric vehicles, public transit optimization, and green logistics solutions.",
      icon: Car,
      features: [
        "EV infrastructure",
        "Public transit optimization",
        "Green logistics",
        "Carbon footprint tracking"
      ],
      price: "From $120,000",
      timeline: "24-36 weeks",
      category: "Transportation",
      technologies: ["EV Charging", "Smart Routing", "Fleet Management", "Carbon Analytics"]
    },
    {
      id: 5,
      title: "Water Conservation",
      description: "Smart water management and conservation systems for sustainable resource use.",
      icon: Droplets,
      features: [
        "Smart irrigation",
        "Water quality monitoring",
        "Leak detection",
        "Conservation analytics"
      ],
      price: "From $80,000",
      timeline: "16-24 weeks",
      category: "Water Management",
      technologies: ["IoT Sensors", "AI Analytics", "Smart Valves", "Water Quality"]
    },
    {
      id: 6,
      title: "Carbon Management",
      description: "Comprehensive carbon footprint tracking and reduction strategies.",
      icon: Globe,
      features: [
        "Carbon footprint analysis",
        "Emissions tracking",
        "Offset strategies",
        "Sustainability reporting"
      ],
      price: "From $60,000",
      timeline: "12-20 weeks",
      category: "Environmental",
      technologies: ["Carbon Analytics", "IoT Monitoring", "AI Reporting", "Blockchain"]
    }
  ];

  const successStories = [
    {
      logo: "🏭",
      comp: "EcoManufacturing Inc.",
      industry: "Manufacturing",
      challenge: "High energy costs and carbon emissions from traditional manufacturing processes.",
      solution: "Implemented solar power systems, energy-efficient equipment, and smart monitoring.",
      results: "40% reduction in energy costs, 60% decrease in carbon footprint, LEED Gold certification."
    },
    {
      logo: "🏢",
      comp: "GreenTech Office Complex",
      industry: "Commercial Real Estate",
      challenge: "Outdated building systems causing excessive energy waste and poor tenant satisfaction.",
      solution: "Complete building retrofit with smart HVAC, LED lighting, and renewable energy integration.",
      results: "35% energy savings, 25% increase in tenant satisfaction, 50% reduction in maintenance costs."
    },
    {
      logo: "🚛",
      comp: "Sustainable Logistics Co.",
      industry: "Transportation & Logistics",
      challenge: "High fuel costs and carbon emissions from traditional fleet operations.",
      solution: "Transitioned to electric vehicles, implemented route optimization, and carbon tracking.",
      results: "30% reduction in fuel costs, 45% decrease in carbon emissions, improved delivery efficiency."
    }
  ];

=======
const successStories = [
  {
    id: 1,
    comp: "Green Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Needed to reduce carbon footprint by 50% while maintaining production efficiency",
    solution: "Implemented comprehensive sustainability program with renewable energy, waste reduction, and circular economy practices",
    results: "60% reduction in carbon emissions, 40% decrease in energy costs, improved brand reputation",
    logo: "GMC"
  },
  {
    id: 2,
    comp: "Eco-City Initiative",
    industry: "Municipal",
    challenge: "Required sustainable urban development with renewable energy and green infrastructure",
    solution: "Built smart city with solar power, green buildings, and sustainable transportation systems",
    results: "80% renewable energy usage, 30% reduction in urban heat island effect, enhanced quality of life",
    logo: "ECI"
  },
  {
    id: 3,
    comp: "Sustainable Logistics",
    industry: "Transportation",
    challenge: "Needed to reduce transportation carbon footprint by 70%",
    solution: "Implemented electric fleet, route optimization, and carbon tracking systems",
    results: "75% reduction in carbon emissions, 25% decrease in fuel costs, improved delivery efficiency",
    logo: "SL"
];
const processSteps = [
  {
    step: 1,
    title: "Sustainability Assessment",
    description: "Evaluate current environmental impact and identify improvement opportunities",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Design comprehensive sustainability strategy and implementation plan",
    icon: Code,
    duration: "4-8 weeks"
  },
  {
    step: 3,
    title: "Implementation",
    description: "Deploy sustainable technologies and systems",
    icon: Wrench,
    duration: "16-48 weeks"
  },
  {
    step: 4,
    title: "Monitoring & Optimization",
    description: "Track performance and continuously improve sustainability metrics",
    icon: Gauge,
    duration: "Ongoing"
];
const sustainabilityBenefits = [
  {
    title: "Environmental Impact",
    description: "Significant reduction in carbon footprint and environmental damage",
    icon: Leaf,
    examples["Carbon reduction", "Resource conservation", "Biodiversity protection"]
  },
  {
    title: "Cost Savings",
    description: "Long-term financial benefits through efficiency and resource optimization",
    icon: TrendingUp,
    examples["Energy cost reduction", "Waste minimization", "Operational efficiency"]
  },
  {
    title: "Regulatory Compliance",
    description: "Meet and exceed environmental regulations and standards",
    icon: Shield,
    examples["Environmental compliance", "Sustainability reporting", "Green certifications"]
  },
  {
    title: "Brand Enhancement",
    description: "Improved reputation and competitive advantage in the market",
    icon: Award,
    examples["Customer loyalty", "Market differentiation", "Stakeholder trust"]
  }
];
export default function Sustainability() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);
  const categories = ['All', 'Energy', 'Buildings', 'Waste Management', 'Transportation', 'Water Management', 'Carbon Management'];
  const filteredSolutions = selectedCategory === 'All'
    ? sustainabilitySolutions
    : sustainabilitySolutions.filter(solution => solution.category === selectedCategory);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sustainable
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                {" "}Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge sustainable technology solutions
              that protect the planet while driving growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Sustainability Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Sustainability Consultation
              </a>
=======
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
            <motion.div
              initial = {
  { opacity: 0,
  scale: 0.8 
}}
              animate = {
  { opacity: 1,
  scale: 1 
}}
              transition = {
  { duration: 0.8,
  delay: 0.2 
}}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
              <Leaf className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sustainability &
              <span className="text-gradient block">Green Tech</span>
            </h1>
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business with sustainable technology solutions. From renewable energy to
              circular economy practices, we help organizations achieve environmental goals while improving efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Leaf className="w-4 h-4" />
                <span>Environmental Impact</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Zap className="w-4 h-4" />
                <span>Renewable Energy</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <TrendingUp className="w-4 h-4" />
                <span>Cost Savings</span>
              </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Sustainability Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From renewable energy to waste management, we provide end-to-end
              sustainable technology solutions for every industry
            </p>
=======
      {/* Sustainability Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">Sustainability Technology Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make sustainable technology revolutionary
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial = {
  { opacity: 0,
  y: 30 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
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
      {/* Sustainability Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">Sustainable Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading sustainable technology platforms and solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial = {
  { opacity: 0,
  y: 30 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
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
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">Our Sustainability Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful sustainability transformation
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial = {
  { opacity: 0,
  y: 30 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="text-center"
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
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">Sustainability Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for a sustainable future
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
                {category}
              </button>
            ))}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilitySolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                    <p className="text-sm text-green-400">{solution.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{solution.description}</p>

                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-green-400">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-400 font-semibold">{solution.price}</span>
                  <span className="text-gray-400">{solution.timeline}</span>
=======
                initial = {
  { opacity: 0,
  y: 30 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Success Stories */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our sustainable technology solutions have transformed businesses
              across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/40 transition-all duration-300"
              >
=======
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">Sustainability Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with sustainable technology
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial = {
  { opacity: 0,
  y: 30 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.comp}</h3>
                    <p className="text-gray-300 text-sm">{story.industry}</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Results</h4>
                    <p className="text-gray-300 text-sm">{story.results}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-300 text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
=======
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Sustainable Transformation?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how sustainable technology can transform your business,
              reduce environmental impact, and create new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
<<<<<<< HEAD
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
=======
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                Start Sustainability Project
              </a>
              <a
                href="/contact"
<<<<<<< HEAD
                className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
              >
=======
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                Sustainability Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
};

export default Sustainability;
=======
  )}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
