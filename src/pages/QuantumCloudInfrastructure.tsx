import React from 'react';
import { Link } from 'react-router-dom';
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
            </div>
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        </div>
      </section>
    </div>
  );
};

export default QuantumCloudInfrastructure;