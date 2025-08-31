import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  Cloud,
  Atom,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  FileText,
  Users,
  Clock,
  Target,
  Orbit,
  Telescope,
  Planet,
  Star,
  Comet,
  Meteor
} from 'lucide-react';

export default function SpaceTech() {
  const services = [
    {
      icon: Satellite,
      title: "Satellite Technology",
      description: "Advanced satellite systems for communication, navigation, and Earth observation",
      features: ["High-resolution imaging", "Real-time data transmission", "Low Earth orbit optimization"],
      color: "text-blue-400"
    },
    {
      icon: Brain,
      title: "AI-Powered Space Analytics",
      description: "Machine learning algorithms for space data processing and predictive modeling",
      features: ["Pattern recognition", "Anomaly detection", "Predictive analytics"],
      color: "text-purple-400"
    },
    {
      icon: Atom,
      title: "Quantum Space Communications",
      description: "Quantum encryption and communication systems for secure space operations",
      features: ["Quantum key distribution", "Entangled photon systems", "Secure data transmission"],
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Space Edge Computing",
      description: "Distributed computing platforms for real-time space data processing",
      features: ["On-board processing", "Low-latency operations", "Autonomous decision making"],
      color: "text-yellow-400"
    }
  ];

  const applications = [
    {
      icon: Globe,
      title: "Earth Observation",
      description: "Advanced monitoring systems for climate change, agriculture, and urban development",
      benefits: ["Real-time monitoring", "High accuracy data", "Global coverage"]
    },
    {
      icon: Target,
      title: "Precision Navigation",
      description: "Enhanced GPS and navigation systems for autonomous vehicles and drones",
      benefits: ["Sub-meter accuracy", "Reliable positioning", "Global availability"]
    },
    {
      icon: Telescope,
      title: "Deep Space Exploration",
      description: "Telescopes and probes for exploring distant galaxies and celestial bodies",
      benefits: ["Advanced imaging", "Data collection", "Scientific discovery"]
    },
    {
      icon: Orbit,
      title: "Space Traffic Management",
      description: "AI-powered systems for managing satellite orbits and preventing collisions",
      benefits: ["Collision avoidance", "Orbit optimization", "Space debris tracking"]
    }
  ];

  const technologies = [
    {
      name: "Quantum Sensors",
      description: "Ultra-sensitive quantum sensors for precise measurements in space",
      icon: Atom,
      applications: ["Gravitational wave detection", "Dark matter research", "Precision navigation"]
    },
    {
      name: "Advanced Materials",
      description: "Next-generation materials for spacecraft and satellite construction",
      icon: Shield,
      applications: ["Radiation protection", "Thermal management", "Lightweight structures"]
    },
    {
      name: "AI Algorithms",
      description: "Machine learning systems for autonomous space operations",
      icon: Brain,
      applications: ["Mission planning", "Anomaly detection", "Resource optimization"]
    },
    {
      name: "Edge Computing",
      description: "On-board processing capabilities for real-time decision making",
      icon: Zap,
      applications: ["Data processing", "Autonomous navigation", "Emergency response"]
    }
  ];

  const caseStudies = [
    {
      title: "Mars Rover AI Navigation",
      description: "Developed autonomous navigation systems for Mars exploration missions",
      results: ["99.9% navigation accuracy", "Reduced mission costs by 40%", "Enhanced scientific discovery"],
      icon: Planet
    },
    {
      title: "Satellite Constellation Management",
      description: "AI-powered management system for large satellite networks",
      results: ["Optimized orbital efficiency", "Reduced collision risk by 80%", "Improved data coverage"],
      icon: Satellite
    },
    {
      title: "Space Weather Prediction",
      description: "Machine learning models for predicting solar storms and space weather events",
      results: ["24-hour advance warning", "Protection of critical infrastructure", "Enhanced safety protocols"],
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Rocket className="w-4 h-4 mr-2" />
                Space Technology
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Pioneering the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Future of Space</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Revolutionizing space exploration with cutting-edge AI, quantum computing, and edge technologies. 
                From Earth observation to deep space missions, we're pushing the boundaries of what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions combining AI, quantum computing, and edge technologies 
              for next-generation space applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${service.color.replace('text-', 'bg-').replace('-400', '-400/20')} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Earth observation to deep space exploration, our technologies are 
              transforming how we understand and interact with space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <app.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{app.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {app.benefits.map((benefit) => (
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

      {/* Technologies Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our space technology solutions leverage the latest advancements in AI, 
              quantum computing, and materials science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{tech.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-blue-400">Applications:</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        {tech.applications.map((app) => (
                          <li key={app} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications of our space technology solutions delivering 
              measurable results and advancing human knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/50 border border-slate-600/50 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <study.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{study.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-blue-400">Results:</h4>
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

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Satellites Launched", icon: Satellite },
              { number: "99.9%", label: "Mission Success Rate", icon: CheckCircle },
              { number: "24/7", label: "Global Monitoring", icon: Globe },
              { number: "100+", label: "Countries Served", icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
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
              Ready to Explore the Final Frontier?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in revolutionizing space technology and advancing human exploration. 
              Let's build the future of space together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Start Your Space Project
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4 mr-2" />
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}