import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  Globe
} from 'lucide-react';

const QuantumComputing = () => {
  const features = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Supremacy",
      description: "Achieve computational advantages with our quantum processing capabilities"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and post-quantum algorithms"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hybrid Computing",
      description: "Seamless integration of classical and quantum computing resources"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Quantum Machine Learning",
      description: "Advanced AI algorithms leveraging quantum computational advantages"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Portfolio optimization, risk assessment, and algorithmic trading",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Healthcare & Pharma",
      description: "Drug discovery, protein folding, and medical imaging analysis",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Cybersecurity",
      description: "Post-quantum cryptography and threat detection",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "Logistics & Supply Chain",
      description: "Route optimization and complex scheduling problems",
      icon: <Network className="w-5 h-5" />
    }
  ];

  const technologies = [
    "Quantum Annealing",
    "Gate-based Quantum Computing",
    "Quantum Error Correction",
    "Quantum-Classical Hybrid Algorithms",
    "Post-Quantum Cryptography",
    "Quantum Machine Learning Frameworks"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Atom className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum Computing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of quantum computing with Zion Tech Group's cutting-edge 
              solutions. Experience computational advantages that were once impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the revolutionary capabilities that make quantum computing 
              the future of computational power.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how quantum computing is transforming industries and solving 
              previously unsolvable problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-lg">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our quantum computing platform leverages the latest breakthroughs 
              in quantum physics and computer science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and discover computational possibilities 
            that were once beyond imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services/ai-quantum-hybrid-platform"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing;