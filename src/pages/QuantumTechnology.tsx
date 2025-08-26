import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Zap, 
  Shield, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Key, 
  Eye, 
  Target, 
  Rocket, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Lightbulb,
  Cog,
  Microchip,
  CircuitBoard,
  Wifi,
  Bluetooth,
  Satellite,
  Radar,
  Camera,
  Fingerprint,
  Unlock,
  AlertTriangle,
  Info,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Wrench,
  Hammer,
  Globe,
  Users,
  BarChart3,
  Code,
  Cloud,
  DollarSign,
  ShoppingCart,
  Heart,
  Activity,
  Monitor,
  Smartphone,
  Car,
  Plane,
  Ship,
  Bot
} from 'lucide-react';

export default function QuantumTechnology() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedUseCase, setSelectedUseCase] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'services', label: 'Services', icon: Cog },
    { id: 'use-cases', label: 'Use Cases', icon: Target },
    { id: 'technologies', label: 'Technologies', icon: Microchip },
    { id: 'benefits', label: 'Benefits', icon: Star }
  ];

  const quantumServices = [
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics to solve complex computational problems exponentially faster than classical computers.',
      features: [
        'Quantum Algorithm Development',
        'Quantum Circuit Design',
        'Quantum Error Correction',
        'Quantum Simulation',
        'Optimization Problems',
        'Cryptographic Applications'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum mechanical principles for secure communication and data protection.',
      features: [
        'Quantum Key Distribution (QKD)',
        'Post-Quantum Cryptography',
        'Quantum Random Number Generation',
        'Secure Communication Networks',
        'Quantum-resistant Algorithms',
        'Blockchain Security'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Combine quantum computing with machine learning for enhanced pattern recognition and data analysis.',
      features: [
        'Quantum Neural Networks',
        'Quantum Feature Selection',
        'Quantum Clustering',
        'Quantum Classification',
        'Quantum Optimization',
        'Hybrid Classical-Quantum ML'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Network,
      title: 'Quantum Networks',
      description: 'Build quantum internet infrastructure for secure, high-speed quantum communication.',
      features: [
        'Quantum Repeaters',
        'Quantum Memory',
        'Quantum Routing',
        'Entanglement Distribution',
        'Quantum Internet Protocols',
        'Quantum Cloud Services'
      ],
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Quantum computing for portfolio optimization, risk assessment, and algorithmic trading.',
      icon: BarChart3,
      applications: [
        'Portfolio Optimization',
        'Risk Assessment',
        'Algorithmic Trading',
        'Fraud Detection',
        'Credit Scoring',
        'Market Analysis'
      ],
      benefits: [
        'Faster Risk Calculations',
        'Improved Investment Returns',
        'Enhanced Fraud Detection',
        'Real-time Market Analysis',
        'Better Risk Management',
        'Competitive Advantage'
      ]
    },
    {
      title: 'Drug Discovery',
      description: 'Quantum simulation for molecular modeling and pharmaceutical research.',
      icon: Activity,
      applications: [
        'Molecular Modeling',
        'Drug Design',
        'Protein Folding',
        'Chemical Reactions',
        'Material Science',
        'Biotechnology'
      ],
      benefits: [
        'Accurate Molecular Simulations',
        'Faster Drug Development',
        'Reduced R&D Costs',
        'Better Drug Efficacy',
        'Personalized Medicine',
        'Sustainable Development'
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum-resistant encryption and quantum key distribution for enhanced security.',
      icon: Lock,
      applications: [
        'Quantum Key Distribution',
        'Post-Quantum Cryptography',
        'Secure Communication',
        'Identity Verification',
        'Data Protection',
        'Network Security'
      ],
      benefits: [
        'Unbreakable Encryption',
        'Future-proof Security',
        'Enhanced Privacy',
        'Secure IoT Networks',
        'Compliance Ready',
        'Trust & Confidence'
      ]
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'Quantum optimization for complex routing, scheduling, and resource allocation problems.',
      icon: Globe,
      applications: [
        'Route Optimization',
        'Supply Chain Planning',
        'Inventory Management',
        'Scheduling Problems',
        'Resource Allocation',
        'Network Design'
      ],
      benefits: [
        'Optimal Solutions',
        'Cost Reduction',
        'Improved Efficiency',
        'Better Resource Utilization',
        'Real-time Optimization',
        'Scalable Solutions'
      ]
    }
  ];

  const technologies = [
    {
      category: 'Quantum Computing',
      items: [
        { name: 'IBM Qiskit', description: 'Quantum computing framework' },
        { name: 'Google Cirq', description: 'Quantum circuit library' },
        { name: 'Microsoft Q#', description: 'Quantum programming language' },
        { name: 'Rigetti Forest', description: 'Quantum development platform' }
      ]
    },
    {
      category: 'Quantum Cryptography',
      items: [
        { name: 'BB84 Protocol', description: 'Quantum key distribution' },
        { name: 'Post-Quantum Algorithms', description: 'Lattice-based cryptography' },
        { name: 'Quantum Random Generators', description: 'True randomness' },
        { name: 'Quantum-resistant Standards', description: 'NIST recommendations' }
      ]
    },
    {
      category: 'Quantum Simulation',
      items: [
        { name: 'VQE', description: 'Variational quantum eigensolver' },
        { name: 'QPE', description: 'Quantum phase estimation' },
        { name: 'QAOA', description: 'Quantum approximate optimization' },
        { name: 'Quantum Chemistry', description: 'Molecular simulations' }
      ]
    },
    {
      category: 'Quantum Hardware',
      items: [
        { name: 'Superconducting Qubits', description: 'IBM, Google, Rigetti' },
        { name: 'Trapped Ions', description: 'IonQ, Honeywell' },
        { name: 'Topological Qubits', description: 'Microsoft approach' },
        { name: 'Photonic Qubits', description: 'Xanadu, PsiQuantum' }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Exponential Speedup',
      description: 'Solve complex problems in minutes that would take classical computers years.',
      metrics: ['1000x faster optimization', 'Exponential scaling', 'Real-time solutions']
    },
    {
      icon: Shield,
      title: 'Unbreakable Security',
      description: 'Quantum cryptography provides mathematically proven security guarantees.',
      metrics: ['Unbreakable encryption', 'Quantum-safe protocols', 'Future-proof security']
    },
    {
      icon: Brain,
      title: 'Enhanced AI/ML',
      description: 'Quantum machine learning offers superior pattern recognition and optimization.',
      metrics: ['Better accuracy', 'Faster training', 'Novel algorithms']
    },
    {
      icon: Rocket,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the curve with cutting-edge quantum technology.',
      metrics: ['First-mover advantage', 'Innovation leadership', 'Market disruption']
    }
  ];

  const quantumAdvantages = [
    {
      title: 'Superposition',
      description: 'Quantum bits can exist in multiple states simultaneously, enabling parallel processing.',
      icon: Atom,
      examples: ['Parallel computation', 'Multiple solutions', 'Enhanced search']
    },
    {
      title: 'Entanglement',
      description: 'Quantum particles can be correlated across vast distances instantaneously.',
      icon: Network,
      examples: ['Quantum teleportation', 'Secure communication', 'Distributed computing']
    },
    {
      title: 'Interference',
      description: 'Quantum waves can interfere constructively or destructively to enhance computation.',
      icon: Zap,
      examples: ['Amplitude amplification', 'Quantum walks', 'Algorithm speedup']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Quantum</span> Technology
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the power of quantum mechanics to solve the world's most complex problems. 
            From quantum computing to unbreakable encryption, we're building the future of technology.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
            >
              <span>Explore Quantum</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500/10 transition-all duration-200"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Quantum</span> Revolution
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Quantum technology represents the next frontier in computing, cryptography, and communication. 
                    By harnessing the strange properties of quantum mechanics, we can solve problems that are 
                    impossible for classical computers and create unbreakable security systems.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-white">Exponential computational speedup</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-white">Unbreakable quantum cryptography</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-white">Revolutionary machine learning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-white">Secure quantum networks</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <Atom className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                        <h3 className="text-white font-semibold">Quantum Bits</h3>
                        <p className="text-gray-400 text-sm">Superposition & entanglement</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <Shield className="w-12 h-12 text-pink-400 mx-auto mb-2" />
                        <h3 className="text-white font-semibold">Quantum Security</h3>
                        <p className="text-gray-400 text-sm">Unbreakable encryption</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <Brain className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                        <h3 className="text-white font-semibold">Quantum ML</h3>
                        <p className="text-gray-400 text-sm">Enhanced AI algorithms</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <Network className="w-12 h-12 text-green-400 mx-auto mb-2" />
                        <h3 className="text-white font-semibold">Quantum Networks</h3>
                        <p className="text-gray-400 text-sm">Secure communication</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantum Advantages */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Quantum Advantages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {quantumAdvantages.map((advantage, idx) => {
                    const Icon = advantage.icon;
                    return (
                      <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">{advantage.title}</h4>
                        <p className="text-gray-300 mb-4">{advantage.description}</p>
                        <div className="space-y-2">
                          {advantage.examples.map((example, exampleIdx) => (
                            <div key={exampleIdx} className="text-sm text-purple-300">
                              • {example}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Atom className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
                  <p className="text-gray-400">Quantum Algorithms</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                  <p className="text-gray-400">Quantum Networks</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">200+</h3>
                  <p className="text-gray-400">Quantum ML Models</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">25+</h3>
                  <p className="text-gray-400">Industries Served</p>
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Quantum Technology Services</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Comprehensive quantum solutions covering computing, cryptography, machine learning, and networking
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {quantumServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Use Cases Tab */}
          {activeTab === 'use-cases' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Quantum Applications</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Discover how quantum technology is transforming industries and solving real-world problems
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {useCases.map((useCase, idx) => {
                  const Icon = useCase.icon;
                  return (
                    <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                          <p className="text-gray-300">{useCase.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Applications</h4>
                          <div className="space-y-2">
                            {useCase.applications.map((app, appIdx) => (
                              <div key={appIdx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-300 text-sm">{app}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                          <div className="space-y-2">
                            {useCase.benefits.map((benefit, benefitIdx) => (
                              <div key={benefitIdx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                <span className="text-gray-300 text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Technologies Tab */}
          {activeTab === 'technologies' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Quantum Technology Stack</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  We leverage cutting-edge quantum technologies and frameworks to deliver exceptional solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">{tech.category}</h3>
                    <div className="space-y-4">
                      {tech.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                          <div>
                            <h4 className="text-white font-medium">{item.name}</h4>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Tech Stack */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Quantum Infrastructure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Cloud className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Quantum Cloud</h4>
                    <p className="text-gray-300 text-sm">IBM Quantum, AWS Braket, Azure Quantum</p>
                  </div>
                  <div className="text-center">
                    <Database className="w-12 h-12 text-pink-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Quantum Databases</h4>
                    <p className="text-gray-300 text-sm">Quantum state storage, entanglement databases</p>
                  </div>
                  <div className="text-center">
                    <Lock className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Quantum Security</h4>
                    <p className="text-gray-300 text-sm">QKD networks, post-quantum cryptography</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Quantum Technology?</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Experience the revolutionary advantages of quantum technology in your business
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-gray-300 mb-6">{benefit.description}</p>
                      <div className="space-y-3">
                        {benefit.metrics.map((metric, metricIdx) => (
                          <div key={metricIdx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ROI Section */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Quantum Investment Returns</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="text-4xl font-bold text-green-400 mb-2">1000x</h4>
                    <p className="text-gray-300">Faster computation speed</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-blue-400 mb-2">100%</h4>
                    <p className="text-gray-300">Unbreakable security</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-purple-400 mb-2">∞</h4>
                    <p className="text-gray-300">Future-proof technology</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Embrace the Quantum Future?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and gain a competitive advantage that will last for decades. 
              Our quantum experts are ready to help you implement cutting-edge quantum solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
              >
                <span>Start Quantum Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                <span>Quantum Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}