import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  BarChart,
  Rocket,
  Layers,
  Workflow,
  Monitor,
  Settings,
  Cloud,
  Server,
  Gauge,
  CpuIcon,
  Atom,
  TestTube
} from 'lucide-react';

const QuantumCloudInfrastructure = () => {
  const quantumFeatures = [
    {
      icon: Atom,
      title: "Quantum Computing Power",
      description: "Access to quantum processors and quantum simulators for complex computational tasks"
    },
    {
      icon: Cloud,
      title: "Hybrid Quantum-Classical",
      description: "Seamless integration between quantum and classical computing resources"
    },
    {
      icon: Zap,
      title: "Quantum Speedup",
      description: "Exponential speedup for specific algorithms and computational problems"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols"
    },
    {
      icon: Network,
      title: "Quantum Networking",
      description: "Quantum entanglement-based networking for ultra-secure communications"
    },
    {
      icon: Database,
      title: "Quantum Storage",
      description: "Quantum memory and storage systems for quantum information processing"
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Quantum algorithms for portfolio optimization, risk assessment, and trading strategies",
      icon: TrendingUp,
      applications: ["Portfolio optimization", "Risk modeling", "Option pricing", "Market simulation"]
    },
    {
      title: "Drug Discovery",
      description: "Quantum chemistry simulations for molecular modeling and drug development",
      icon: TestTube,
      applications: ["Molecular simulation", "Protein folding", "Drug interaction", "Chemical modeling"]
    },
    {
      title: "Machine Learning",
      description: "Quantum machine learning algorithms for pattern recognition and optimization",
      icon: Brain,
      applications: ["Quantum neural networks", "Feature selection", "Optimization", "Classification"]
    },
    {
      title: "Cryptography",
      description: "Quantum-resistant encryption and quantum key distribution systems",
      icon: Lock,
      applications: ["Post-quantum crypto", "Quantum key distribution", "Secure communication", "Encryption"]
    }
  ];

  const benefits = [
    "Solve previously intractable problems",
    "Exponential computational speedup",
    "Enhanced security with quantum cryptography",
    "Scalable quantum infrastructure",
    "Hybrid quantum-classical workflows",
    "Future-proof technology investment",
    "Access to cutting-edge quantum research",
    "Competitive advantage in innovation"
  ];

  const infrastructure = [
    "Quantum Processors",
    "Quantum Simulators",
    "Quantum Memory Systems",
    "Quantum Networking",
    "Classical Computing",
    "Hybrid Orchestration",
    "Security Infrastructure",
    "Monitoring & Analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
                          <div className="flex items-center justify-center mb-6">
                <Atom className="w-12 h-12 text-cyan-400 mr-3" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Quantum Cloud Infrastructure
                </h1>
              </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Access the power of quantum computing through our cloud infrastructure, enabling 
              breakthrough solutions for complex computational challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Platform Demo
              </button>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { ArrowRight, Atom, Cloud, Shield, Zap, Cpu, Database, Network } from 'lucide-react';

const QuantumCloudInfrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Cloud Infrastructure
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Experience the future of computing with our quantum-powered cloud infrastructure 
            that delivers unprecedented performance, security, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Quantum Computing Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Atom className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Supremacy</h3>
              <p className="text-zion-slate-light">
                Solve complex problems that are impossible for classical computers, 
                including cryptography, optimization, and simulation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Zap className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Exponential Speed</h3>
              <p className="text-zion-slate-light">
                Process massive datasets and perform calculations at speeds 
                that would take classical computers centuries to complete.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Shield className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Security</h3>
              <p className="text-zion-slate-light">
                Unbreakable encryption using quantum key distribution and 
                post-quantum cryptography algorithms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Cpu className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Parallel Processing</h3>
              <p className="text-zion-slate-light">
                Simultaneously explore multiple solutions and possibilities 
                through quantum superposition and entanglement.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Database className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Memory</h3>
              <p className="text-zion-slate-light">
                Store and retrieve information using quantum states for 
                unprecedented data density and access speeds.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Network className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Networking</h3>
              <p className="text-zion-slate-light">
                Instantaneous data transmission through quantum entanglement 
                across global quantum networks.
              </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-eea8
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Quantum Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum cloud infrastructure provides access to cutting-edge quantum computing 
              resources and hybrid quantum-classical workflows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
=======
      {/* Infrastructure Components */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Infrastructure Components
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Quantum Processing Units</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <Atom className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Superconducting qubit processors with 100+ qubits</span>
                </li>
                <li className="flex items-start">
                  <Atom className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Trapped ion quantum computers for high-fidelity operations</span>
                </li>
                <li className="flex items-start">
                  <Atom className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Topological qubits for error-resistant computing</span>
                </li>
                <li className="flex items-start">
                  <Atom className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hybrid quantum-classical processing units</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Cloud Services</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <Cloud className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Quantum-as-a-Service (QaaS) platform</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hybrid cloud integration with classical infrastructure</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Auto-scaling quantum resources</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-tenant quantum computing environments</span>
                </li>
              </ul>
            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-eea8
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

      {/* Use Cases */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing can revolutionize your industry with these breakthrough applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    <p className="text-gray-300 text-sm">{useCase.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.applications.map((application, appIndex) => (
                    <div key={appIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {application}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of quantum computing with our cloud infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Revolutionary Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Financial Services</h3>
              <p className="text-zion-slate-light mb-4">
                Quantum computing revolutionizes risk assessment, portfolio optimization, 
                and fraud detection in real-time.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• High-frequency trading optimization</li>
                <li>• Credit risk modeling</li>
                <li>• Market prediction algorithms</li>
                <li>• Blockchain security enhancement</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Drug Discovery</h3>
              <p className="text-zion-slate-light mb-4">
                Accelerate pharmaceutical research by simulating molecular interactions 
                and protein folding at quantum scales.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Molecular dynamics simulation</li>
                <li>• Drug-target interaction modeling</li>
                <li>• Protein structure prediction</li>
                <li>• Personalized medicine optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Logistics & Supply Chain</h3>
              <p className="text-zion-slate-light mb-4">
                Solve complex optimization problems for route planning, inventory management, 
                and supply chain optimization.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Vehicle routing optimization</li>
                <li>• Warehouse layout optimization</li>
                <li>• Demand forecasting</li>
                <li>• Resource allocation</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Climate Modeling</h3>
              <p className="text-zion-slate-light mb-4">
                Advanced climate simulations and weather prediction using quantum algorithms 
                for complex atmospheric modeling.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Atmospheric circulation modeling</li>
                <li>• Ocean current simulation</li>
                <li>• Climate change prediction</li>
                <li>• Renewable energy optimization</li>
              </ul>
            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-eea8
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Infrastructure Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infrastructure Components
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete quantum computing infrastructure with hybrid classical-quantum capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {infrastructure.map((component, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{component}</h3>
              </div>
            ))}
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {/* Security Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Quantum Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Key Distribution</h3>
              <p className="text-zion-slate-light">
                Unbreakable encryption using quantum entanglement to generate 
                and distribute cryptographic keys securely.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Post-Quantum Cryptography</h3>
              <p className="text-zion-slate-light">
                Advanced cryptographic algorithms resistant to quantum attacks, 
                ensuring long-term security of sensitive data.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Random Number Generation</h3>
              <p className="text-zion-slate-light">
                True randomness generated from quantum phenomena for 
                cryptographic applications and secure communications.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Authentication</h3>
              <p className="text-zion-slate-light">
                Multi-factor authentication using quantum states for 
                enhanced security and identity verification.
              </p>
            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-eea8
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Access the future of computing with our quantum cloud infrastructure. Start solving 
            previously impossible problems today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Quantum Computing Today
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Join the quantum revolution and unlock the power of the future 
            with our cutting-edge quantum cloud infrastructure.
          </p>
          <Link
            to="/request-quote"
            className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors text-lg"
          >
            Start Your Quantum Journey
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-eea8
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>
      </section>
    </div>
  );
};

export default QuantumCloudInfrastructure;