import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Cpu, 
  BarChart3, 
  Database,
  Network,
  Globe,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Settings,
  Code,
  Server,
  Cloud,
  Lock,
  Eye,
  Activity,
  MessageCircle,
  FileText,
  Palette,
  Smartphone,
  Wifi,
  Brain,
  Microscope,
  TestTube,
  Calculator,
  CircuitBoard
} from 'lucide-react';

export function QuantumComputingPage() {
  const quantumServices = [
    {
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms designed for your specific business challenges and optimization problems.",
      icon: Code,
      features: ["Custom Algorithm Design", "Performance Optimization", "Quantum-Classical Hybrid", "Error Correction"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum computing power for advanced machine learning and AI applications.",
      icon: Brain,
      features: ["Quantum Neural Networks", "Quantum Feature Maps", "Quantum Kernel Methods", "Quantum Optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.",
      icon: Lock,
      features: ["Quantum Key Distribution", "Post-Quantum Cryptography", "Secure Communication", "Quantum Random Number Generation"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Quantum Financial Modeling",
      description: "Revolutionary financial modeling and risk assessment using quantum computing capabilities.",
      icon: TrendingUp,
      features: ["Portfolio Optimization", "Risk Assessment", "Option Pricing", "Monte Carlo Simulations"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Chemistry",
      description: "Accelerate drug discovery and materials science with quantum computational chemistry.",
      icon: TestTube,
      features: ["Molecular Modeling", "Drug Discovery", "Materials Design", "Chemical Reaction Simulation"],
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems that are intractable for classical computers.",
      icon: Target,
      features: ["Combinatorial Optimization", "Supply Chain Optimization", "Logistics Planning", "Resource Allocation"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    {
      title: "Exponential Speedup",
      description: "Solve problems in minutes that would take classical computers years",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Quantum Advantage",
      description: "Achieve computational advantages impossible with classical computing",
      icon: Target,
      color: "text-blue-400"
    },
    {
      title: "Future-Proof Solutions",
      description: "Stay ahead with next-generation computing technology",
      icon: Rocket,
      color: "text-green-400"
    },
    {
      title: "Unbreakable Security",
      description: "Quantum-resistant cryptography for ultimate data protection",
      icon: Shield,
      color: "text-red-400"
    }
  ];

  const quantumTechnologies = [
    {
      name: "Superconducting Qubits",
      description: "High-fidelity quantum bits for reliable computation",
      icon: CircuitBoard,
      color: "text-blue-400"
    },
    {
      name: "Trapped Ions",
      description: "Ultra-stable quantum systems for precise operations",
      icon: Atom,
      color: "text-purple-400"
    },
    {
      name: "Photonic Quantum Computing",
      description: "Light-based quantum computing for scalable solutions",
      icon: Eye,
      color: "text-green-400"
    },
    {
      name: "Topological Qubits",
      description: "Error-resistant quantum bits for robust computation",
      icon: Shield,
      color: "text-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-8">
            <Atom className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the power of quantum mechanics to solve the world's most complex computational challenges
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Explore Quantum Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Quantum Computing?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quantum Services Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Quantum Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quantum Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Quantum Technologies We Work With
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quantumTechnologies.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                    <tech.icon className={`w-8 h-8 ${tech.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Applications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Quantum Computing Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Calculator className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Financial Services</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Portfolio optimization</li>
                <li>• Risk assessment</li>
                <li>• Option pricing</li>
                <li>• Fraud detection</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <TestTube className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Drug Discovery</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Molecular modeling</li>
                <li>• Protein folding</li>
                <li>• Drug interaction simulation</li>
                <li>• Chemical reaction optimization</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Quantum key distribution</li>
                <li>• Post-quantum cryptography</li>
                <li>• Secure communication</li>
                <li>• Random number generation</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Network className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Logistics</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Route optimization</li>
                <li>• Supply chain management</li>
                <li>• Resource allocation</li>
                <li>• Scheduling optimization</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Machine Learning</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Quantum neural networks</li>
                <li>• Feature mapping</li>
                <li>• Kernel methods</li>
                <li>• Optimization algorithms</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Microscope className="w-8 h-8 text-teal-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Materials Science</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Material property prediction</li>
                <li>• Crystal structure analysis</li>
                <li>• Electronic structure calculation</li>
                <li>• Quantum materials design</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Case Studies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Quantum Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Pharmaceutical Research</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1000x Faster Drug Discovery</h3>
              <p className="text-gray-300 mb-4">
                Our quantum algorithms accelerated molecular simulation by 1000x, enabling a major 
                pharmaceutical company to discover new drug candidates in weeks instead of years.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>Implementation: 12 months</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">Financial Services</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Portfolio Optimization</h3>
              <p className="text-gray-300 mb-4">
                Our quantum optimization algorithms helped an investment firm achieve 35% better 
                portfolio performance while reducing risk by 40%.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>Implementation: 8 months</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness Quantum Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and solve problems that were previously impossible with classical computing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Quantum Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default QuantumComputingPage;