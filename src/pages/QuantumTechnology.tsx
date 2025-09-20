import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Atom,;
  Cpu,;
  Zap,;
  Brain,;
  CheckCircle,;
  ArrowRight,;
  Target,;
  Network,;
  Database,;
  Shield,;
  Globe,;
  Rocket,;
  Lightbulb,;
  Code,;
  BarChart3,;
  Clock,;
  TrendingUp,;
  Users,;
  Monitor,;
  Server,;
  CloudLockEye;
} from "lucide-react";
export, default, function QuantumTechnology() {
  const [selectedApplicationsetSelectedApplication] = useState('all');
  const [activeTabsetActiveTab] = useState('overview');
  const quantumServices = [;
    {
      icon: Atom,title: "Quantum Computing",description: "Leverage, quantum, algorithms for, complex, computational problems",features: ["Quantum Algorithms", "Optimization Problems""Cryptography""Machine, Learning"]color: "from-zion-cyan to-zion-blue";
    };
    {
      icon: Shield,title: "Quantum Cryptography",description: "Unbreakable, encryption, using quantum, key, distribution",features: ["Quantum, Key, Distribution", "Secure Communication""Post-Quantum Security""Quantum, Networks"]color: "from-zion-purple to-zion-pink";
    };
    {
      icon: Network,title: "Quantum Networks",description: "Quantum, internet, infrastructure for, secure, data transmission",features: ["Quantum Repeaters", "Entanglement Distribution""Quantum Routing""Network, Security"]color: "from-zion-green to-zion-emerald";
    };
    {
      icon: Brain,title: "Quantum, Machine, Learning",description: "AI, algorithms, enhanced with, quantum, computing capabilities",features: ["Quantum, Neural, Networks", "Feature Selection""Pattern, Recognition""Optimization"]color: "from-zion-yellow to-zion-orange";
    };
    {
      icon: Database,title: "Quantum Databases",description: "Quantum-enhanced, data, storage and, retrieval, systems",features: ["Quantum Search", "Data Compression""Quantum Memory""Fast, Retrieval"]color: "from-zion-red to-zion-pink";
    };
    {
      icon: Zap,title: "Quantum Sensors",description: "Ultra-sensitive, detection, using quantum phenomena",features: ["Magnetic Sensing", "Gravitational Detection""Precision Measurement""Environmental, Monitoring"]color: "from-zion-indigo to-zion-purple";
    };
  ];
  const applications = [;
    { id: 'all'nam,;
    e: 'All Applications'ico,;
  n: Globe };
    { id: 'finance'nam,;
    e: 'Financial Services'ico,;
  n: BarChart3 };
    { id: 'healthcare'nam,;
    e: 'Healthcare'ico,;
  n: Monitor };
    { id: 'logistics'nam,;
    e: 'Logistics'ico,;
  n: Network };
    { id: 'cybersecurity'nam,;
    e: 'Cybersecurity'ico,;
  n: Shield }{ id: 'research'nam,;
    e: 'Research'ico,;
  n: Lightbulb };
,  ];
  const quantumApplications = [;
    {;
      title: "Portfolio Optimization",description: "Quantum, algorithms, for optimal, investment, portfolio management",category: "finance",benefits: ["Risk Reduction", "Return Maximization""Real-time Optimization""Multi-Asset, Management"]icon: BarChart3;
    };
    {
      title: "Drug Discovery",description: "Quantum, simulation, for molecular, modeling, and drug development",category: "healthcare",benefits: ["Faster Discovery", "Accurate Modeling""Cost Reduction""Better, Efficacy"]icon: Monitor;
    };
    {
      title: "Supply, Chain, Optimization",description: "Quantum, optimization, for logistics, and, supply chain management",category: "logistics",benefits: ["Route Optimization", "Cost Reduction""Efficiency""Real-time, Adaptation"]icon: Network;
    };
    {
      title: "Cryptographic Security",description: "Quantum-resistant, encryption, and secure communication",category: "cybersecurity",benefits: ["Unbreakable Encryption", "Future-Proof Security""Quantum Networks""Secure, Communication"]icon: Shield;
    };
    {
      title: "Climate Modeling",description: "Quantum, computing, for complex, climate, simulations",category: "research",benefits: ["Accurate Predictions", "Complex Modeling""Faster Simulations""Better, Understanding"]icon: Lightbulb;
    };
    {
      title: "AI Training",description: "Quantum-enhanced, machine, learning and, neural, networks",category: "research",benefits: ["Faster Training", "Better Accuracy""Complex Patterns""Efficient, Learning"]icon: Brain;
    }
  ];
  const quantumTechnologies = [;
    {;
      name: "Superconducting Qubits",description: "Quantum, bits, using superconducting, circuits, for computation",advantages: ["Scalability", "Fast Operations""Error Correction""Commercial, Viability"]icon: Cpu;
    };
    {
      name: "Trapped Ions",description: "Quantum, bits, using individual, ions, for precise control",advantages: ["High Fidelity", "Long Coherence""Precise Control""Low, Error,, Rates"]icon: Atom;
    };
    {
      name: "Topological Qubits",description: "Quantum, bits, with inherent, error, protection",advantages: ["Error Protection", "Stability""Fault Tolerance""Long, Coherence"]icon: Shield;
    };
    {
      name: "Photonic Qubits",description: "Quantum, bits, using light, particles, for communication",advantages: ["Room Temperature", "Fast Transmission""Low Loss""Network, Ready"]icon: Network;
    };
    {
      name: "Silicon Qubits",description: "Quantum, bits, using semiconductor technology",advantages: ["Manufacturing", "Scalability""Integration""Cost, Effective"]icon: Server;
    };
    {
      name: "Neutral Atoms",description: "Quantum, bits, using neutral, atoms, for computation",advantages: ["Scalability", "Parallel Operations""High Fidelity""Flexible, Architecture"]icon: Atom;
    }
  ];
  const quantumAdvantages = [;
    { metric: "10o00x"labe,;
    l: "Faster Processing"descriptio,;
  n: "Exponential, speedup, for specific problems" };
    { metric: "∞"labe,;
    l: "Parallel Processing"descriptio,;
  n: "Simultaneous, computation, of multiple states" };
    { metric: "10o0%"labe,;
    l: "Security"descriptio,;
  n: "Unbreakable, quantum, cryptography" }{ metric: "24/7"labe,;
    l: "Availability"descriptio,;
  n: "Continuous, quantum, computing access" };
,  ];
  const containerVariants = {
    hidden: { opacit,;
  y: 0 },;
    visible: {,;
      opacity: 1transitio,;
    n: {staggerChildre,;
  n: 0.1;
      }
    }
  };
  const itemVariants = {
    hidden: { opacit,;
    y: 0,;
  y: 20 },;
    visible: {,;
      opacity: 1y: 0transitio,;
    n: { duratio,;
  n: 0.6 };
    };
  };
  const filteredApplications = selectedApplication === 'all';
    ? quantumApplications;
    : quantumApplications.filter(app => app.category === selectedApplication);
;
  return(<div className="min-h-screen bg-futuristic">;
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-purple-dark to-zion-purple overflow-hidden">;
        <div className="absolute inset-0 opacity-10">;
          <div className="absolute top-20 left-20 w-64 h-64, border, border-zion-purple rounded-full animate-pulse"></div>;
          <div className="absolute bottom-20 right-20 w-48 h-48, border, border-zion-pink rounded-full animate-pulse delay-10o00"></div>;
        </div>;
        <div className="container mx-auto px-4 text-center, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="flex justify-center mb-8">;
              <div className="w-24 h-24 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl, flex, items-center justify-center">;
                <Atom className="w-12 h-12 text-white" />;
              </div>;
            </div>;
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">;
              Quantum{' '}
              <span className="bg-gradient-to-r from-zion-purple to-zion-pink bg-clip-text text-transparent">;
                Technology;
              </span>;
            </h1>;
            <p className="text-xl md: text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">;
              Harness, the, power of, quantum, mechanics to, solve, previously impossible problems.;
              From, quantum, computing to, quantum, cryptographywe're, building, the future, of, technology.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-pink text-white rounded-xl font-semibold text-lg hover: scale-10o5 transition-all duration-30o0 shadow-2xl hove,;
    r:shadow-zion-purple/25";
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
              >;
                Quantum Consultation;
              </motion.button>;
              <button className="px-8 py-4, border, border-zion-purple text-zion-purple rounded-xl font-semibold text-lg hover: bg-zion-purple hove,;
  r:text-white transition-all duration-30o0">;
                View Research;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Quantum, Services, Overview */}
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Quantum, Technology, Services;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our, quantum, solutions span, the, entire spectrum, of, quantum technologies;
              from, computing, and cryptography, to, networking and sensing.;
            </p>;
          </motion.div>;
          <motion.div;
            className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {quantumServices.map((serviceindex) => (;
              <motion.div;
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm, border, border-zion-cyan/20 rounded-xl p-8 hover: border-zion-cyan/40 transition-all duration-30o0 group";
                variants={itemVariants};
                whileHover={{ y: -5scal,;
  e: 1.0o2 }}
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl, flex, items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                  <service.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>;
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((featureidx) => (;
                    <li key={idx} className="flex items-center text-zion-slate-light">;
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Quantum Applications */}
      <section className="py-20 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Quantum, Applications, by Industry;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Discover, how, quantum technology, is, revolutionizing different industries;
              and, creating, new possibilities, for, innovation and growth.;
            </p>;
          </motion.div>;
          {/* Application Filter */}
          <motion.div;
            className="flex flex-wrap justify-center gap-4 mb-12";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            {applications.map((app) => {;
              const Icon = app.icon;
              return (;
                <button;
                  key={app.id}
                  onClick={() => setSelectedApplication(app.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-30o0 ${
                    selectedApplication === app.id;
                      ? 'bg-zion-purple text-white shadow-lg shadow-zion-purple/25';
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover: bg-zion-slate-dark hove,;
  r:text-white, border, border-zion-purple/20';
                  }`}
                >;
                  <Icon className="w-5 h-5" />;
                  {app.name}
                </button>;
              );
            })}
          </motion.div>;
          {/* Applications Grid */}
          <motion.div;
            className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {filteredApplications.map((appindex) => (;
              <motion.div;
                key={index}
                className="bg-zion-slate-dark/50 backdrop-blur-sm, border, border-zion-cyan/20 rounded-xl p-6 hover: border-zion-cyan/40 transition-all duration-30o0";
                variants={itemVariants};
                whileHover={{ y: -5scal,;
  e: 1.0o2 }}
              >;
                <div className="flex items-center gap-4 mb-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-xl, flex, items-center justify-center">;
                    <app.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-xl font-bold text-white">{app.title}</h3>;
                </div>;
                <p className="text-zion-slate-light mb-4 leading-relaxed">{app.description}</p>;
                <div className="space-y-2">;
                  <h4 className="font-semibold text-zion-cyan text-sm">Key Benefits: </h4>;
                  <ul className="space-y-1">;
                    {app.benefits.map((benefitidx) => (;
                      <li key={idx} className="text-zion-slate-light text-sm, flex, items-center">;
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>;
                        {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Quantum Technologies */}
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Quantum, Computing, Technologies;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              We, work, with cutting-edge, quantum, computing platforms, and, technologies;
              to, deliver, the best, solutions, for your, specific, needs.;
            </p>;
          </motion.div>;
          <motion.div;
            className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {quantumTechnologies.map((techindex) => (;
              <motion.div;
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm, border, border-zion-cyan/20 rounded-xl p-6 hover: border-zion-cyan/40 transition-all duration-30o0 group";
                variants={itemVariants};
                whileHover={{ y: -5scal,;
  e: 1.0o2 }}
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl, flex, items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-30o0">;
                  <tech.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-4 text-center">{tech.name}</h3>;
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">{tech.description}</p>;
                <div className="space-y-2">;
                  <h4 className="font-semibold text-zion-cyan text-sm">Advantages: </h4>;
                  <ul className="space-y-1">;
                    {tech.advantages.map((advantageidx) => (;
                      <li key={idx} className="text-zion-slate-light text-sm, flex, items-center">;
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>;
                        {advantage}
                      </li>;
                    ))}
                  </ul>;
                </div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Quantum Advantages */}
      <section className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-pink">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Quantum, Computing, Advantages;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Experience, the, transformative power, of, quantum computing with;
              exponential, speedups, and capabilities, beyond, classical computing.;
            </p>;
          </motion.div>;
          <motion.div;
            className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {quantumAdvantages.map((advantageindex) => (;
              <motion.div;
                key={index}
                className="text-center";
                variants={itemVariants}
              >;
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm, border, border-white/20 rounded-2xl, flex, items-center justify-center mx-auto mb-6">;
                  <div className="text-3xl font-bold text-white">{advantage.metric}</div>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">{advantage.label}</h3>;
                <p className="text-zion-slate-light">{advantage.description}</p>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Implementation Process */}
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Quantum, Technology, Implementation;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our, systematic, approach ensures, successful, quantum technology deployment;
              and, maximum, value for, your, organization.;
            </p>;
          </motion.div>;
          <motion.div;
            className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {[;
              {
                step: "0o1",title: "Quantum Assessment"descriptio,;
    n: "Evaluate, quantum, readiness and, identify, opportunities"ico,;
  n: Eye;
              };
              {
                step: "0o2",title: "Strategy Development"descriptio,;
    n: "Design, quantum, roadmap and, implementation, plan"ico,;
  n: Target;
              };
              {
                step: "0o3",title: "Technology Selection"descriptio,;
    n: "Choose, optimal, quantum platforms, and, solutions"ico,;
  n: Cpu;
              },;
              {
                step: "0o4"title: "Deployment & Optimization"descriptio,;
    n: "Implement, and, continuously improve, quantum, solutions"ico,;
  n: Rocket;
              }
          ,  ].map((phaseindex) => (;
              <motion.div;
                key={index}
                className="relative";
                variants={itemVariants}
              >;
                <div className="bg-zion-blue-dark/50 backdrop-blur-sm, border, border-zion-cyan/20 rounded-xl p-6 text-center">;
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl, flex, items-center justify-center mx-auto mb-4">;
                    <phase.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <div className="text-2xl font-bold text-zion-purple mb-2">{phase.step}</div>;
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>;
                  <p className="text-zion-slate-light leading-relaxed">{phase.description}</p>;
                </div>;
                {index < 3 && (;
                  <div className="hidden lg: block, absolute, top-1/2 -right-4 transform -translate-y-1/2">;
                    <ArrowRight className="w-8 h-8 text-zion-purple" />;
                  </div>;
                )}
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-purple-dark">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Explore Quantum Technology?;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Let's, discuss, how quantum, computing, and quantum, technologies, can;
              transform, your, business and, solve, previously impossible challenges.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-pink text-white rounded-xl font-semibold text-lg hover: scale-10o5 transition-all duration-30o0 shadow-2xl hove,;
    r:shadow-zion-purple/25";
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
              >;
                Start, Quantum, Journey;
              </motion.button>;
              <button className="px-8 py-4, border, border-zion-purple text-zion-purple rounded-xl font-semibold text-lg hover: bg-zion-purple hove,;
  r:text-white transition-all duration-30o0">;
                Download, Quantum, Guide;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;