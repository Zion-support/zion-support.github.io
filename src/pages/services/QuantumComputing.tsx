import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Brain, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Rocket,
  Code,
  BarChart3,
  Network,
  Globe,
  Lock,
  Shield,
  Cpu,
  HardDrive,
  Wifi,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Building,
  Factory,
  Heart,
  DollarSign,
  ShoppingCart,
  Car,
  Plane,
  Eye,
  Cog,
  Database,
  Cloud,
  Server,
  Microscope,

  TestTube,
  Calculator,
  CircuitBoard
} from 'lucide-react';

const QuantumComputing = () => {
  const quantumServices = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Design and implement quantum algorithms for complex computational problems',
      icon: Code,
      features: [
        'Quantum Algorithm Design',
        'Optimization Algorithms',
        'Machine Learning Integration',
        'Performance Analysis',
        'Quantum Circuit Design'
      ],
      applications: ['Financial Modeling', 'Drug Discovery', 'Logistics', 'Cryptography'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Quantum Software Development',
      description: 'Build quantum software applications and development tools',
      icon: Cpu,
      features: [
        'Quantum Programming Languages',
        'Development Frameworks',
        'Simulation Tools',
        'Testing & Validation',
        'Integration Services'
      ],
      applications: ['Research Institutions', 'Technology Companies', 'Financial Services', 'Healthcare'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Quantum Research & Consulting',
      description: 'Expert guidance on quantum computing strategy and implementation',
      icon: Microscope,
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Research Collaboration',
        'Proof of Concept',
        'Technology Roadmap'
      ],
      applications: ['Enterprise', 'Research Labs', 'Universities', 'Government'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Quantum-Hybrid Solutions',
      description: 'Integrate quantum computing with classical systems for optimal performance',
      icon: CircuitBoard,
      features: [
        'Hybrid Architecture Design',
        'Classical-Quantum Integration',
        'Performance Optimization',
        'Scalability Planning',
        'Maintenance & Support'
      ],
      applications: ['High-Performance Computing', 'AI/ML Systems', 'Data Centers', 'Research Facilities'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const quantumApplications = [
    {
      application: 'Financial Services',
      icon: DollarSign,
      solutions: [
        'Portfolio optimization',
        'Risk assessment',
        'Option pricing',
        'Fraud detection',
        'Trading algorithms'
      ],
      benefits: [
        'Faster calculations',
        'Better risk models',
        'Improved accuracy',
        'Competitive advantage'
      ]
    },
    {
      application: 'Drug Discovery',
      icon: TestTube,
      solutions: [
        'Molecular modeling',
        'Protein folding',
        'Drug interaction analysis',
        'Chemical synthesis',
        'Clinical trial optimization'
      ],
      benefits: [
        'Accelerated research',
        'Better drug candidates',
        'Reduced costs',
        'Improved outcomes'
      ]
    },
    {
      application: 'Logistics & Supply Chain',
      icon: Car,
      solutions: [
        'Route optimization',
        'Inventory management',
        'Supply chain optimization',
        'Demand forecasting',
        'Resource allocation'
      ],
      benefits: [
        'Cost reduction',
        'Efficiency improvement',
        'Better planning',
        'Sustainability gains'
      ]
    },
    {
      application: 'Artificial Intelligence',
      icon: Brain,
      solutions: [
        'Machine learning optimization',
        'Neural network training',
        'Pattern recognition',
        'Natural language processing',
        'Computer vision'
      ],
      benefits: [
        'Faster training',
        'Better accuracy',
        'New capabilities',
        'Scalability'
      ]
    }
  ];

  const quantumTechnologies = [
    {
      technology: 'Superconducting Qubits',
      icon: Atom,
      description: 'Most mature quantum computing technology with high coherence times',
      advantages: [
        'High coherence times',
        'Scalable architecture',
        'Established ecosystem',
        'Commercial availability'
      ],
      challenges: [
        'Temperature requirements',
        'Error rates',
        'Qubit connectivity'
      ]
    },
    {
      technology: 'Trapped Ions',
      icon: Target,
      description: 'High-fidelity qubits with excellent coherence properties',
      advantages: [
        'High fidelity operations',
        'Long coherence times',
        'Good connectivity',
        'Low error rates'
      ],
      challenges: [
        'Scaling limitations',
        'Operation speed',
        'System complexity'
      ]
    },
    {
      technology: 'Photonic Quantum Computing',
      icon: Eye,
      description: 'Room temperature operation with potential for quantum internet',
      advantages: [
        'Room temperature operation',
        'Quantum networking',
        'Low decoherence',
        'Scalability potential'
      ],
      challenges: [
        'Detection efficiency',
        'Photon loss',
        'Non-deterministic gates'
      ]
    },
    {
      technology: 'Topological Qubits',
      icon: CircuitBoard,
      description: 'Theoretical approach with built-in error protection',
      advantages: [
        'Built-in error protection',
        'Fault tolerance',
        'Long coherence times',
        'Robust operations'
      ],
      challenges: [
        'Early development stage',
        'Complex implementation',
        'Limited availability'
      ]
    }
  ];

  const quantumProcess = [
    {
      step: '01',
      title: 'Problem Assessment',
      description: 'Evaluate if quantum computing is suitable for your problem',
      icon: Eye,
      details: [
        'Problem complexity analysis',
        'Quantum advantage assessment',
        'Feasibility study',
        'ROI evaluation'
      ]
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create quantum computing roadmap and implementation plan',
      icon: Target,
      details: [
        'Technology selection',
        'Implementation timeline',
        'Resource planning',
        'Risk assessment'
      ]
    },
    {
      step: '03',
      title: 'Proof of Concept',
      description: 'Develop and test quantum solutions on small-scale problems',
      icon: TestTube,
      details: [
        'Algorithm development',
        'Prototype creation',
        'Testing & validation',
        'Performance measurement'
      ]
    },
    {
      step: '04',
      title: 'Solution Development',
      description: 'Build production-ready quantum computing solutions',
      icon: Rocket,
      details: [
        'Full-scale development',
        'Integration services',
        'Performance optimization',
        'Documentation'
      ]
    },
    {
      step: '05',
      title: 'Deployment & Integration',
      description: 'Deploy quantum solutions and integrate with existing systems',
      icon: Cog,
      details: [
        'System deployment',
        'Integration testing',
        'User training',
        'Performance monitoring'
      ]
    },
    {
      step: '06',
      title: 'Optimization & Scaling',
      description: 'Continuous improvement and scaling of quantum solutions',
      icon: TrendingUp,
      details: [
        'Performance monitoring',
        'Algorithm optimization',
        'Scalability planning',
        'Continuous improvement'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Financial Portfolio Optimization',
      company: 'Global Investment Bank',
      challenge: 'Optimize large investment portfolios with complex constraints',
      solution: 'Developed quantum algorithm for portfolio optimization using quantum annealing',
      results: [
        '50% faster optimization',
        '15% better returns',
        'Improved risk management',
        'Scalable solution'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Drug Discovery Acceleration',
      company: 'Pharmaceutical Research Lab',
      challenge: 'Accelerate molecular modeling for drug discovery',
      solution: 'Implemented quantum-classical hybrid approach for molecular simulations',
      results: [
        '10x faster simulations',
        'Improved accuracy',
        'New drug candidates',
        'Cost reduction'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Supply Chain Optimization',
      company: 'Global Manufacturing Corp',
      challenge: 'Optimize complex supply chain networks',
      solution: 'Built quantum optimization solution for logistics and supply chain',
      results: [
        '30% cost reduction',
        'Improved efficiency',
        'Better resource allocation',
        'Sustainability gains'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Quantum Computing Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Harness the power of quantum computing to solve complex problems that are beyond the reach of classical computers. 
            We help organizations explore and implement quantum solutions for competitive advantage.
          </motion.p>
        </div>
      </section>

      {/* Quantum Services Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Quantum Computing Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quantumServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Quantum Computing Applications
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumApplications.map((application, index) => (
              <motion.div
                key={application.application}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-zion-slate-darker to-zion-slate-dark rounded-2xl border border-zion-slate-light/20 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center">
                    <application.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{application.application}</h3>
                </div>
                
                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Quantum Solutions</h4>
                  <ul className="space-y-2">
                    {application.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <Atom className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {application.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Technologies */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Quantum Computing Technologies
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumTechnologies.map((tech, index) => (
              <motion.div
                key={tech.technology}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center">
                    <tech.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tech.technology}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {tech.description}
                </p>
                
                {/* Advantages */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Advantages</h4>
                  <ul className="space-y-2">
                    {tech.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Challenges */}
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Current Challenges</h4>
                  <ul className="space-y-2">
                    {tech.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <Eye className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Process */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Quantum Implementation Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 p-6 text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                
                <div className="text-4xl font-bold text-zion-cyan mb-4">{step.step}</div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2 text-sm text-zion-slate-light">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Quantum Computing Success Stories
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 overflow-hidden group hover:border-zion-cyan/50 transition-all duration-300"
              >
                {/* Case Study Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                      Case Study
                    </span>
                  </div>
                </div>
                
                {/* Case Study Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    <strong>Client:</strong> {study.company}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-zion-slate-light text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
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

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Explore Quantum Computing?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover how quantum computing can transform your business and solve previously impossible problems. 
              Our quantum experts are ready to guide you on your quantum journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Quantum Journey
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing;