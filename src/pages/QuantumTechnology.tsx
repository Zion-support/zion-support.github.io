import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Atom
  Cpu
  Zap
  Brain
  CheckCircle
  ArrowRight
  Target
  Network
  Database
  Shield
  Globe
  Rocket
  Lightbulb
  Code
  BarChart3
  Clock
  TrendingUp
  Users
  Monitor
  Server
  Cloud
  Lock
  Eye
} from "lucide-react"
export default function QuantumTechnology() {
  const [selectedApplication, setSelectedApplication] = useState('all')
  const [activeTab, setActiveTab] = useState('overview')
  const quantumServices = [
  {
  ic,
  o: n: Atom,tit,
  l: e: "Quantum Computing",descripti,
  o: n: "Leverage quantum algorithms for complex computational problems",featur,
  e: s: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Machine Learning"]
      col,
  o: r: "from-zion-cyan to-zion-blue"
},
  {
  ic,
  o: n: Shield,tit,
  l: e: "Quantum Cryptography",descripti,
  o: n: "Unbreakable encryption using quantum key distribution",featur,
  e: s: ["Quantum Key Distribution", "Secure Communication", "Post-Quantum Security", "Quantum Networks"]
      col,
  o: r: "from-zion-purple to-zion-pink"
},
  {
  ic,
  o: n: Network,tit,
  l: e: "Quantum Networks",descripti,
  o: n: "Quantum internet infrastructure for secure data transmission",featur,
  e: s: ["Quantum Repeaters", "Entanglement Distribution", "Quantum Routing", "Network Security"]
      col,
  o: r: "from-zion-green to-zion-emerald"
},
  {
  ic,
  o: n: Brain,tit,
  l: e: "Quantum Machine Learning",descripti,
  o: n: "AI algorithms enhanced with quantum computing capabilities",featur,
  e: s: ["Quantum Neural Networks", "Feature Selection", "Pattern Recognition", "Optimization"]
      col,
  o: r: "from-zion-yellow to-zion-orange"
},
  {
  ic,
  o: n: Database,tit,
  l: e: "Quantum Databases",descripti,
  o: n: "Quantum-enhanced data storage and retrieval systems",featur,
  e: s: ["Quantum Search", "Data Compression", "Quantum Memory", "Fast Retrieval"]
      col,
  o: r: "from-zion-red to-zion-pink"
},
  {
  ic,
  o: n: Zap,tit,
  l: e: "Quantum Sensors",descripti,
  o: n: "Ultra-sensitive detection using quantum phenomena",featur,
  e: s: ["Magnetic Sensing", "Gravitational Detection", "Precision Measurement", "Environmental Monitoring"]
      col,
  o: r: "from-zion-indigo to-zion-purple"
},
  ]
  const applications = [
  { id: 'all', na,
  m: e: 'All Applications', ic,
  o: n: Globe },
  },
  { id: 'finance', na,
  m: e: 'Financial Services', ic,
  o: n: BarChart3 },
  },
  { id: 'healthcare', na,
  m: e: 'Healthcare', ic,
  o: n: Monitor },
  },
  { id: 'logistics', na,
  m: e: 'Logistics', ic,
  o: n: Network },
  },
  { id: 'cybersecurity', na,
  m: e: 'Cybersecurity', ic,
  o: n: Shield },
  },
  { id: 'research', na,
  m: e: 'Research', ic,
  o: n: Lightbulb },
  },
  ]
  const quantumApplications = [
  {
  tit,
  l: e: "Portfolio Optimization",descripti,
  o: n: "Quantum algorithms for optimal investment portfolio management",catego,
  r: y: "finance",benefi,
  t: s: ["Risk Reduction", "Return Maximization", "Real-time Optimization", "Multi-Asset Management"]
      ic,
  o: n: BarChart3
},
  {
  tit,
  l: e: "Drug Discovery",descripti,
  o: n: "Quantum simulation for molecular modeling and drug development",catego,
  r: y: "healthcare",benefi,
  t: s: ["Faster Discovery", "Accurate Modeling", "Cost Reduction", "Better Efficacy"]
      ic,
  o: n: Monitor
},
  {
  tit,
  l: e: "Supply Chain Optimization",descripti,
  o: n: "Quantum optimization for logistics and supply chain management",catego,
  r: y: "logistics",benefi,
  t: s: ["Route Optimization", "Cost Reduction", "Efficiency", "Real-time Adaptation"]
      ic,
  o: n: Network
},
  {
  tit,
  l: e: "Cryptographic Security",descripti,
  o: n: "Quantum-resistant encryption and secure communication",catego,
  r: y: "cybersecurity",benefi,
  t: s: ["Unbreakable Encryption", "Future-Proof Security", "Quantum Networks", "Secure Communication"]
      ic,
  o: n: Shield
},
  {
  tit,
  l: e: "Climate Modeling",descripti,
  o: n: "Quantum computing for complex climate simulations",catego,
  r: y: "research",benefi,
  t: s: ["Accurate Predictions", "Complex Modeling", "Faster Simulations", "Better Understanding"]
      ic,
  o: n: Lightbulb
},
  {
  tit,
  l: e: "AI Training",descripti,
  o: n: "Quantum-enhanced machine learning and neural networks",catego,
  r: y: "research",benefi,
  t: s: ["Faster Training", "Better Accuracy", "Complex Patterns", "Efficient Learning"]
      ic,
  o: n: Brain
},
  ]
  const quantumTechnologies = [
  {
  na,
  m: e: "Superconducting Qubits",descripti,
  o: n: "Quantum bits using superconducting circuits for computation",advantag,
  e: s: ["Scalability", "Fast Operations", "Error Correction", "Commercial Viability"]
      ic,
  o: n: Cpu
},
  {
  na,
  m: e: "Trapped Ions",descripti,
  o: n: "Quantum bits using individual ions for precise control",advantag,
  e: s: ["High Fidelity", "Long Coherence", "Precise Control", "Low Error Rates"]
      ic,
  o: n: Atom
},
  {
  na,
  m: e: "Topological Qubits",descripti,
  o: n: "Quantum bits with inherent error protection",advantag,
  e: s: ["Error Protection", "Stability", "Fault Tolerance", "Long Coherence"]
      ic,
  o: n: Shield
},
  {
  na,
  m: e: "Photonic Qubits",descripti,
  o: n: "Quantum bits using light particles for communication",advantag,
  e: s: ["Room Temperature", "Fast Transmission", "Low Loss", "Network Ready"]
      ic,
  o: n: Network
},
  {
  na,
  m: e: "Silicon Qubits",descripti,
  o: n: "Quantum bits using semiconductor technology",advantag,
  e: s: ["Manufacturing", "Scalability", "Integration", "Cost Effective"]
      ic,
  o: n: Server
},
  {
  na,
  m: e: "Neutral Atoms",descripti,
  o: n: "Quantum bits using neutral atoms for computation",advantag,
  e: s: ["Scalability", "Parallel Operations", "High Fidelity", "Flexible Architecture"]
      ic,
  o: n: Atom
},
  ]
  const quantumAdvantages = [
  { metr,
  i: c: "1000x", lab,
  e: l: "Faster Processing", descripti,
  o: n: "Exponential speedup for specific problems" },
  },
  { metr,
  i: c: "∞", lab,
  e: l: "Parallel Processing", descripti,
  o: n: "Simultaneous computation of multiple states" },
  },
  { metr,
  i: c: "100%", lab,
  e: l: "Security", descripti,
  o: n: "Unbreakable quantum cryptography" },
  },
  { metr,
  i: c: "24/7", lab,
  e: l: "Availability", descripti,
  o: n: "Continuous quantum computing access" },
  },
  ]
  const const containerVariants = {
  = {
    hidd,
  e: n: { opacit,
  y: 0 },
  }
    visib,
  l: e: {
  opacit,
  y: 1,transiti,
  o: n: {
  staggerChildre,
  n: 0.1
},
  },
  }
  const const itemVariants = {
  = {
    hidd,
  e: n: { opacit,
  y: 0, y: 20 },
  }
    visib,
  l: e: {
  opacit,
  y: 1,y: 0,transiti,
  o: n: { duratio,
  n: 0.6 },
  },
  },
  }
  const filteredApplications = selectedApplication === 'all'
    ? quantumApplications
    : quantumApplications.filter(app => app.category === selectedApplication)

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */},
  }
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-purple-dark to-zion-purple overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-purple rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-pink rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center">
                <Atom className="w-12 h-12 text-white" />
              </div>
            </div>

            <h1 className="text-6xl,
  m: d:text-7xl font-bold text-white mb-8 leading-tight">
              Quantum{' '},
  }
              <span className="bg-gradient-to-r from-zion-purple to-zion-pink bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl,
  m: d:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum mechanics to solve previously impossible problems.
              From quantum computing to quantum cryptography, we're building the future of technology.
            </p>

            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <motion.button
                className="className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-pink text-white rounded-xl font-semibold text-lg,
  hove: r:scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-purple/25";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                Quantum Consultation
              </motion.button>
              <button className="px-8 py-4 border border-zion-purple text-zion-purple rounded-xl font-semibold text-lg,
  hove: r: bg-zion-purple hove,
  r:text-white transition-all duration-300">
                View Research
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Services Overview */},
  }
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Quantum Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our quantum solutions span the entire spectrum of quantum technologies
              from computing and cryptography to networking and sensing.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8";"
            variants={containerVariants},
  }
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true },
  }
          >
            {quantumServices.map((service, index) => (
  <motion.div
                key={index},
  }
                className="className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8,
  hove: r:border-zion-cyan/40 transition-all duration-300 group";"
                variants={itemVariants},
  }
                whileHover={ y: -5, sca,
  l: e: 1.02 },
  }
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
  <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature},
  }
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quantum Applications */},
  }
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Quantum Applications by Industry
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how quantum technology is revolutionizing different industries
              and creating new possibilities for innovation and growth.
            </p>
          </motion.div>

          {/* Application Filter */},
  }
          <motion.div
            className="className="flex flex-wrap justify-center gap-4 mb-12";"
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            {applications.map((app) () => {
  const Icon = app.icon
              return (
                <button
                  key={app.id},
  }
                  onClick={onClick={() => setSelectedApplication(app.id)},
  },
  }
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
  selectedApplication === app.id
                      ? 'bg-zion-purple text-white shadow-lg shadow-zion-purple/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light,
  hove: r: bg-zion-slate-dark hove,
  r:text-white border border-zion-purple/20'
}`}
                >
                  <Icon className="w-5 h-5" />
                  {app.name},
  }
                </button>
              )
            })}
          </motion.div>

          {/* Applications Grid */},
  }
          <motion.div
            className="className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8";"
            variants={containerVariants},
  }
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true },
  }
          >
            {filteredApplications.map((app, index) => (
  <motion.div
                key={index},
  }
                className="className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
                variants={itemVariants},
  }
                whileHover={ y: -5, sca,
  l: e: 1.02 },
  }
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-xl flex items-center justify-center">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{app.title}</h3>
                </div>

                <p className="text-zion-slate-light mb-4 leading-relaxed">{app.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Key,
  Benefit: s:</h4>
                  <ul className="space-y-1">
                    {app.benefits.map((benefit, idx) => (
  <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                        {benefit},
  }
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quantum Technologies */},
  }
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Quantum Computing Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We work with cutting-edge quantum computing platforms and technologies
              to deliver the best solutions for your specific needs.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8";"
            variants={containerVariants},
  }
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true },
  }
          >
            {quantumTechnologies.map((tech, index) => (
  <motion.div
                key={index},
  }
                className="className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300 group";"
                variants={itemVariants},
  }
                whileHover={ y: -5, sca,
  l: e: 1.02 },
  }
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 text-center">{tech.name}</h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">{tech.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Advantag,
  e: s:</h4>
                  <ul className="space-y-1">
                    {tech.advantages.map((advantage, idx) => (
  <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                        {advantage},
  }
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages */},
  }
      <section className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-pink">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the transformative power of quantum computing with
              exponential speedups and capabilities beyond classical computing.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8";"
            variants={containerVariants},
  }
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true },
  }
          >
            {quantumAdvantages.map((advantage, index) => (
  <motion.div
                key={index},
  }
                className="className="text-center";"
                variants={itemVariants},
  }
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

      {/* Implementation Process */},
  }
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Quantum Technology Implementation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our systematic approach ensures successful quantum technology deployment
              and maximum value for your organization.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8";"
            variants={containerVariants},
  }
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true },
  }
          >
            {[
  {
  st,
  e: p: "01",tit,
  l: e: "Quantum Assessment",descripti,
  o: n: "Evaluate quantum readiness and identify opportunities",ic,
  o: n: Eye
},
  {
  st,
  e: p: "02",tit,
  l: e: "Strategy Development",descripti,
  o: n: "Design quantum roadmap and implementation plan",ic,
  o: n: Target
},
  {
  st,
  e: p: "03",tit,
  l: e: "Technology Selection",descripti,
  o: n: "Choose optimal quantum platforms and solutions",ic,
  o: n: Cpu
},
  {
  st,
  e: p: "04",tit,
  l: e: "Deployment & Optimization",descripti,
  o: n: "Implement and continuously improve quantum solutions",ic,
  o: n: Rocket
},
  ].map((phase, index) => (
  <motion.div
                key={index},
  }
                className="className="relative";"
                variants={itemVariants},
  }
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
  <div className="hidden,
  l: g:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-zion-purple" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Ready to Explore Quantum Technology?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how quantum computing and quantum technologies can
              transform your business and solve previously impossible challenges.
            </p>

            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <motion.button
                className="className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-pink text-white rounded-xl font-semibold text-lg,
  hove: r:scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-purple/25";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                Start Quantum Journey
              </motion.button>
              <button className="px-8 py-4 border border-zion-purple text-zion-purple rounded-xl font-semibold text-lg,
  hove: r: bg-zion-purple hove,
  r:text-white transition-all duration-300">
                Download Quantum Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}