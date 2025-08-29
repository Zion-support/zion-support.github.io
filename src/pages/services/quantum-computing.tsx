import React from 'react';
import { SEO } from '@/components/SEO';
import { 
  Atom, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  BarChart3,
  Database,
  Cloud,
  Shield,
  Globe,
  Cpu,
  Server,
  Smartphone,
  Monitor,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Eye,
  Target,
  Key,
  Network,
  Bug,
  Fingerprint,
  Rocket,
  Microscope,
  Flask
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuantumComputing() {
  const features = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for specific business problems and optimization challenges',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced ML models that outperform classical algorithms',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum key distribution and quantum-resistant algorithms',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum Simulation',
      description: 'Accurate simulation of complex quantum systems for research and development',
      icon: Microscope,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Hybrid Quantum-Classical',
      description: 'Seamless integration of quantum and classical computing resources',
      icon: Server,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems exponentially faster than classical methods',
      icon: Target,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const applications = [
    {
      title: 'Financial Services',
      description: 'Portfolio optimization, risk assessment, and algorithmic trading',
      icon: DollarSign,
      benefits: ['Faster portfolio optimization', 'Better risk modeling', 'Improved trading algorithms', 'Reduced computational costs']
    },
    {
      title: 'Drug Discovery',
      description: 'Molecular simulation and drug molecule optimization',
      icon: Flask,
      benefits: ['Faster drug discovery', 'Better molecular modeling', 'Reduced R&D costs', 'Improved accuracy']
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'Route optimization and supply chain management',
      icon: Truck,
      benefits: ['Optimal route planning', 'Better resource allocation', 'Reduced costs', 'Improved efficiency']
    },
    {
      title: 'Artificial Intelligence',
      description: 'Quantum-enhanced machine learning and neural networks',
      icon: Brain,
      benefits: ['Faster training', 'Better accuracy', 'Improved performance', 'New AI capabilities']
    }
  ];

  const benefits = [
    'Exponential speedup for specific problems',
    'Unbreakable quantum encryption',
    'Superior optimization capabilities',
    'Enhanced machine learning performance',
    'Future-proof technology investment',
    'Competitive advantage in research'
  ];

  const technologies = [
    'Quantum Gates & Circuits',
    'Quantum Error Correction',
    'Quantum Entanglement',
    'Superposition States',
    'Quantum Annealing',
    'Hybrid Quantum-Classical Systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Computing - Zion Tech Group"
        description="Revolutionary quantum computing solutions that solve complex problems exponentially faster. Quantum algorithms, machine learning, and cryptography for the future."
        keywords="quantum computing, quantum algorithms, quantum ML, quantum cryptography, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
                Computing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve complex problems 
              exponentially faster than classical computers. Our quantum computing 
              platform opens new frontiers in computation, cryptography, and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
              >
                Explore Quantum
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                Quantum Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-pink-400/20 rounded-xl">
              <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-gray-300">Possibilities</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-xl">
              <div className="text-3xl font-bold text-indigo-400 mb-2">100%</div>
              <div className="text-gray-300">Secure</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">Future</div>
              <div className="text-gray-300">Ready</div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum computing platform leverages the fundamental principles 
              of quantum mechanics to deliver unprecedented computational power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing transforms industries and solves 
              previously intractable problems across various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-400/30">
                    <application.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{application.title}</h3>
                    <p className="text-gray-400 text-sm">{application.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {application.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of quantum computing 
              that revolutionize how we approach complex computational problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quantum Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge quantum physics and advanced engineering 
              to deliver reliable quantum computing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech}</h3>
                <p className="text-gray-300 text-sm">
                  Advanced quantum computing technology for optimal performance and reliability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and solve problems that were once impossible. 
              Our platform brings the future of computing to your organization today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
              >
                Start Quantum Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                Quantum Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon components
const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const Truck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM21 17V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h3m2-13h6l3 3v6m-6-6v6m-6-6v6" />
  </svg>
);