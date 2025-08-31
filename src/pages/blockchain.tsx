import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Link as LinkIcon, 
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
  Globe,
  Smartphone,
  Cloud,
  BarChart3,
  Settings,
  Coins,
  Building
} from 'lucide-react';

const Blockchain = () => {
  const features = [
    {
      icon: <LinkIcon className="w-6 h-6" />,
      title: "Smart Contracts",
      description: "Automated, self-executing contracts with transparent and immutable logic"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Decentralized Security",
      description: "Enhanced security through distributed ledger technology and cryptography"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Web3 Integration",
      description: "Seamless integration with modern web applications and decentralized protocols"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Distributed Ledger",
      description: "Transparent, tamper-proof record-keeping across multiple nodes"
    }
  ];

  const useCases = [
    {
      title: "DeFi Solutions",
      description: "Decentralized finance platforms, lending protocols, and yield farming",
      icon: <Coins className="w-5 h-5" />
    },
    {
      title: "Supply Chain",
      description: "Transparent tracking, authentication, and verification of goods",
      icon: <Network className="w-5 h-5" />
    },
    {
      title: "Digital Identity",
      description: "Self-sovereign identity management and verification systems",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "NFT Platforms",
      description: "Digital asset creation, trading, and marketplace solutions",
      icon: <Building className="w-5 h-5" />
    }
  ];

  const technologies = [
    "Ethereum & Solidity",
    "Hyperledger Fabric",
    "Polkadot & Substrate",
    "Cosmos SDK",
    "Zero-Knowledge Proofs",
    "Layer 2 Scaling",
    "Cross-Chain Bridges",
    "DeFi Protocols"
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Real Estate",
    "Gaming",
    "Logistics",
    "Energy",
    "Government",
    "Entertainment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-red-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
                <LinkIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                & Web3 Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with Zion Tech Group's cutting-edge blockchain 
              solutions. Build trust, transparency, and efficiency with decentralized technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-1"
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
              Blockchain Platform Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the revolutionary capabilities that make blockchain 
              the future of trust and transparency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg w-fit mb-4">
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how blockchain is revolutionizing industries and creating new 
              opportunities for innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mr-4">
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
              Our blockchain platform leverages cutting-edge technologies to deliver 
              secure, scalable, and efficient decentralized solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-orange-500/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From finance to healthcare, our blockchain solutions are designed 
              to meet the unique challenges of every industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg w-fit mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Blockchain Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the benefits of a comprehensive blockchain platform designed 
              for enterprise success and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-fit mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Transparency & Trust</h3>
              <p className="text-gray-400">
                Build immutable, transparent records that create trust and 
                eliminate the need for intermediaries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-fit mx-auto mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Decentralized Architecture</h3>
              <p className="text-gray-400">
                Eliminate single points of failure with distributed networks 
                that ensure reliability and security.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-fit mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Enhanced Security</h3>
              <p className="text-gray-400">
                Protect your data with cryptographic security and 
                tamper-proof distributed ledgers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the blockchain revolution and discover how decentralized 
            technology can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services/blockchain-enterprise-solutions"
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

export default Blockchain;