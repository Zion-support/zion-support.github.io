import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Atom,
  Zap,
  Target,
  Users,
  BarChart3,
  Shield,
  Rocket,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Eye,
  Heart,
  Building,
  Briefcase,
  TestTube,
  GraduationCap,
  HelpCircle,
  Brain,
  Lock,
  Cpu,
  Cloud
} from 'lucide-react';

export function QuantumComputingPage() {
  const quantumServices = [
    {
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with artificial intelligence',
      icon: Brain,
      href: '/services/ai-quantum-hybrid-platform',
      features: ['Quantum ML Algorithms', 'Hybrid Computing', 'Quantum Optimization', 'AI Acceleration'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Quantum Security Solutions',
      description: 'Next-generation cryptography and security powered by quantum mechanics',
      icon: Shield,
      href: '/services/quantum-security',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Numbers', 'Secure Communications'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Quantum Financial Trading',
      description: 'Advanced trading algorithms leveraging quantum computing for market analysis',
      icon: TrendingUp,
      href: '/services/quantum-ai-trading-platform',
      features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Machine learning algorithms enhanced by quantum computing capabilities',
      icon: Brain,
      href: '/services/quantum-machine-learning',
      features: ['Quantum Neural Networks', 'Quantum Feature Selection', 'Quantum Clustering', 'Quantum Classification'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Quantum Optimization',
      description: 'Solving complex optimization problems with quantum algorithms',
      icon: Target,
      href: '/services/quantum-optimization',
      features: ['Supply Chain Optimization', 'Route Planning', 'Resource Allocation', 'Scheduling Problems'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Quantum Simulation',
      description: 'Advanced simulations for scientific research and material discovery',
      icon: TestTube,
      href: '/services/quantum-simulation',
      features: ['Molecular Modeling', 'Chemical Reactions', 'Material Properties', 'Drug Discovery'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const quantumCapabilities = [
    {
      title: 'Quantum Algorithms',
      description: 'Specialized algorithms designed for quantum computing architectures',
      icon: Code,
      features: ['Grover\'s Algorithm', 'Shor\'s Algorithm', 'Quantum Fourier Transform', 'Quantum Walks']
    },
    {
      title: 'Quantum Error Correction',
      description: 'Advanced error correction techniques for reliable quantum computations',
      icon: Shield,
      features: ['Surface Codes', 'Stabilizer Codes', 'Fault Tolerance', 'Error Mitigation']
    },
    {
      title: 'Quantum Entanglement',
      description: 'Harnessing quantum entanglement for secure communications and computing',
      icon: Network,
      features: ['Bell States', 'Entanglement Swapping', 'Quantum Teleportation', 'Entanglement Distillation']
    },
    {
      title: 'Quantum Supremacy',
      description: 'Achieving computational advantages over classical computing',
      icon: Rocket,
      features: ['Speedup Demonstrations', 'Complex Problem Solving', 'Novel Applications', 'Performance Benchmarks']
    }
  ];

  const applications = [
    { name: 'Cryptography', icon: Lock, description: 'Quantum-resistant encryption and secure communications' },
    { name: 'Drug Discovery', icon: TestTube, description: 'Molecular modeling and pharmaceutical research' },
    { name: 'Financial Modeling', icon: Building, description: 'Portfolio optimization and risk assessment' },
    { name: 'Climate Science', icon: Globe, description: 'Climate modeling and environmental simulations' },
    { name: 'Artificial Intelligence', icon: Brain, description: 'Enhanced machine learning and neural networks' },
    { name: 'Materials Science', icon: Atom, description: 'New material discovery and property analysis' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 rounded-full mb-6">
              <Atom className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Quantum Computing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum mechanics for unprecedented computational capabilities. 
              Our quantum computing solutions solve complex problems that are impossible for 
              classical computers to tackle efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40"
              >
                <span>View All Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Capabilities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum computing platform leverages the fundamental principles of quantum 
              mechanics to deliver computational power beyond classical computing limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of quantum computing services designed to 
              solve the most complex computational challenges across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum computing is revolutionizing industries by solving previously 
              intractable problems and enabling new possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{application.name}</h3>
                <p className="text-gray-400">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantage Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            The Quantum Advantage
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Quantum computing offers exponential speedup for specific problems, 
            enabling breakthroughs in cryptography, optimization, and scientific simulation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Exponential Speedup</h3>
              <p className="text-purple-100">Solve complex problems in seconds instead of years</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Unbreakable Security</h3>
              <p className="text-purple-100">Quantum-resistant cryptography for future-proof security</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Enhancement</h3>
              <p className="text-purple-100">Supercharge machine learning with quantum algorithms</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Explore Quantum Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and solve problems that were once impossible. 
            Our quantum computing experts are ready to help you harness this transformative technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuantumComputingPage;