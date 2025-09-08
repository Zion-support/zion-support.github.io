import React, { useState } from 'react';
import { motion   } from 'framer-motion';
import { Atom, 
  Cpu, 
  Zap, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Target,
  Network,
  Database,
  Shield,
  Globe,
  Rocket,
  Lightbulb,
  Code,
  BarChart3,
  Clock,
  TrendingUp,
  Users,
  Monitor,
  Server,
  Cloud,
  Lock,
  Eye
  } from 'lucide-react';

export default function QuantumTechnology(...args: any[]): any {
  const [selectedApplication, setSelectedApplication] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');

  const quantumServices = [
    {
      icon: Atom,
      title: "Quantum Neural Networks",
      description: "Next-generation neural networks powered by quantum computing principles",
      features: ["Quantum Superposition", "Entanglement Processing", "Quantum Memory", "Faster Training"],
      path: "/quantum-neural-network-platform"
    },
    {
      icon: Cpu,
      title: "Quantum Computing Solutions",
      description: "Access to quantum computing resources for complex problem solving",
      features: ["Quantum Algorithms", "Cloud Access", "Expert Consultation", "Custom Development"],
      path: "/quantum-computing"
    },
    {
      icon: Globe,
      title: "Quantum Edge Computing",
      description: "Distributed quantum computing at the edge for real-time processing",
      features: ["Low Latency", "High Performance", "Scalable Architecture", "Edge Optimization"],
      path: "/quantum-edge-computing-platform"
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum mechanical principles",
      features: ["Quantum Key Distribution", "Post-Quantum Security", "Quantum Random Numbers", "Future-Proof Encryption"],
      path: "/quantum-cryptography"
    }
  ];

  const useCases = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Quantum-enhanced AI algorithms for faster training and superior performance"
    },
    {
      icon: BarChart3,
      title: "Financial Modeling",
      description: "Quantum algorithms for portfolio optimization and risk assessment"
    },
    {
      icon: Rocket,
      title: "Drug Discovery",
      description: "Quantum simulations for molecular modeling and pharmaceutical research"
    }
  ];

  const quantumTechnologies = [
    {
      name: "Superconducting Qubits",
      description: "Quantum bits using superconducting circuits for computation",
      advantages: ["Scalability", "Fast Operations", "Error Correction", "Commercial Viability"],
      icon: Cpu
    },
    {
      name: "Trapped Ions",
      description: "Quantum bits using individual ions for precise control",
      advantages: ["High Fidelity", "Long Coherence", "Precise Control", "Low Error Rates"],
      icon: Atom
    },
    {
      name: "Topological Qubits",
      description: "Quantum bits with inherent error protection",
      advantages: ["Error Protection", "Stability", "Fault Tolerance", "Long Coherence"],
      icon: Shield
    },
    {
      name: "Photonic Qubits",
      description: "Quantum bits using light particles for communication",
      advantages: ["Room Temperature", "Fast Transmission", "Low Loss", "Network Ready"],
      icon: Network
    },
    {
      name: "Silicon Qubits",
      description: "Quantum bits using semiconductor technology",
      advantages: ["Manufacturing", "Scalability", "Integration", "Cost Effective"],
      icon: Server
    },
    {
      name: "Neutral Atoms",
      description: "Quantum bits using neutral atoms for computation",
      advantages: ["Scalability", "Parallel Operations", "High Fidelity", "Flexible Architecture"],
      icon: Atom
    }
  ];

  const quantumAdvantages = [
    { metric: "1000x", label: "Faster Processing", description: "Exponential speedup for specific problems" },
    { metric: "∞", label: "Parallel Processing", description: "Simultaneous computation of multiple states" },
    { metric: "100%", label: "Security", description: "Unbreakable quantum cryptography" },
    { metric: "24/7", label: "Availability", description: "Continuous quantum computing access" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const filteredApplications = selectedApplication === 'all' 
    ? quantumApplications: anyquantumApplications.filter(app   => app.category === selectedApplication);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quantum Technology Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of quantum computing, cryptography, and neural networks for breakthrough innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quantum Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge quantum technology solutions and services.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: anytrue }}
          >
            {quantumServices.map((service, index)   => (
              <motion.div 
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Applications by Industry
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how quantum technology is revolutionizing different industries 
              and creating new possibilities for innovation and growth.
            </p>
          </motion.div>

          {/* Application Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: anytrue }}
          >
            {applications.map((app)   => {
              const Icon = app.icon;
              return (
                <button
                  key={app.id}
                  onClick={() => setSelectedApplication(app.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedApplication === app.id
                      ? 'bg-zion-purple text-white shadow-lg shadow-zion-purple/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white border border-zion-purple/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {app.name}
                </button>
              );
            })}
          </motion.div>

          {/* Applications Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: anytrue }}
          >
            {filteredApplications.map((app, index)   => (
              <motion.div 
                key={index}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-xl flex items-center justify-center">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{app.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">{app.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum technology can transform your industry and operations.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: anytrue }}
          >
            {quantumTechnologies.map((tech, index)   => (
              <motion.div 
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">{tech.name}</h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">{tech.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Advantages:</h4>
                  <ul className="space-y-1">
                    {tech.advantages.map((advantage, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-pink">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the transformative power of quantum computing with 
              exponential speedups and capabilities beyond classical computing.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: anytrue }}
          >
            {quantumAdvantages.map((advantage, index)   => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-white">{advantage.metric}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{advantage.label}</h3>
                <p className="text-zion-slate-light">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Technology Implementation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our systematic approach ensures successful quantum technology deployment 
              and maximum value for your organization.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: anytrue }}
          >
            {[
              {
                step: "01",
                title: "Quantum Assessment",
                description: "Evaluate quantum readiness and identify opportunities",
                icon: Eye
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Design quantum roadmap and implementation plan",
                icon: Target
              },
              {
                step: "03",
                title: "Technology Selection",
                description: "Choose optimal quantum platforms and solutions",
                icon: Cpu
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "Implement and continuously improve quantum solutions",
                icon: Rocket
              }
            ].map((phase, index)   => (
              <motion.div 
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-zion-purple mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{phase.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-zion-purple" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Go Quantum?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss how quantum technology can revolutionize your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/revolutionary-services-2025" 
              className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}