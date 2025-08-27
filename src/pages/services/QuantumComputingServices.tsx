import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Brain, 
  Shield, 
  Zap, 
  Target, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  TrendingUp,
  Lock,
  Database,
  Network,
  Globe,
  Rocket,
  Lightbulb,
  Code,
  BarChart3,
  FileText,
  Video,
  BookOpen,
  Briefcase,
  Search,
  Filter,
  X
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { AdvancedFuturisticBackground } from '../../components/backgrounds/AdvancedFuturisticBackground';

interface QuantumService {
  id: string;
  title: string;
  description: string;
  price: number;
  timeline: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  complexity: 'Basic' | 'Advanced' | 'Enterprise';
}

const QUANTUM_SERVICES: QuantumService[] = [
  {
    id: 'quantum-ai-platform',
    title: 'Quantum AI Platform',
    description: 'Revolutionary quantum computing platform with AI integration for solving complex computational problems 1000x faster than classical computers.',
    price: 25000,
    timeline: '3-6 months',
    features: [
      'Quantum AI algorithms for optimization',
      'Quantum machine learning capabilities',
      'Real-time quantum simulation',
      'Quantum cryptography integration',
      'Hybrid quantum-classical computing',
      'Quantum error correction',
      'Scalable quantum architecture'
    ],
    benefits: [
      'Exponential speed improvements',
      'Breakthrough computational capabilities',
      'Future-proof technology investment',
      'Competitive advantage in research',
      'Advanced security through quantum cryptography'
    ],
    useCases: [
      'Drug discovery and molecular modeling',
      'Financial portfolio optimization',
      'Climate modeling and prediction',
      'Cryptography and cybersecurity',
      'Machine learning acceleration'
    ],
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Quantum ML', 'Q#'],
    complexity: 'Enterprise'
  },
  {
    id: 'quantum-optimization-suite',
    title: 'Quantum Optimization Suite',
    description: 'Advanced quantum optimization algorithms for complex business problems including logistics, scheduling, and resource allocation.',
    price: 18000,
    timeline: '2-4 months',
    features: [
      'Quantum annealing algorithms',
      'Combinatorial optimization',
      'Real-time problem solving',
      'Hybrid classical-quantum approach',
      'Performance analytics',
      'API integration',
      'Custom algorithm development'
    ],
    benefits: [
      'Faster problem resolution',
      'Optimal solutions',
      'Cost reduction',
      'Improved efficiency',
      'Scalable optimization'
    ],
    useCases: [
      'Supply chain optimization',
      'Route planning',
      'Resource scheduling',
      'Portfolio optimization',
      'Network design'
    ],
    technologies: ['D-Wave', 'IBM Q', 'Rigetti', 'Quantum Annealing', 'Python'],
    complexity: 'Advanced'
  },
  {
    id: 'quantum-cryptography-system',
    title: 'Quantum Cryptography System',
    description: 'Next-generation quantum-safe cryptography system using quantum key distribution for unbreakable security.',
    price: 22000,
    timeline: '4-7 months',
    features: [
      'Quantum key distribution (QKD)',
      'Post-quantum cryptography',
      'Quantum random number generation',
      'Secure communication channels',
      'Real-time encryption',
      'Multi-party quantum protocols',
      'Quantum-resistant algorithms'
    ],
    benefits: [
      'Unbreakable encryption',
      'Future-proof security',
      'Quantum-resistant algorithms',
      'Enhanced privacy',
      'Regulatory compliance'
    ],
    useCases: [
      'Financial transactions',
      'Government communications',
      'Healthcare data protection',
      'Military communications',
      'Critical infrastructure'
    ],
    technologies: ['BB84 Protocol', 'Post-Quantum Crypto', 'Quantum RNG', 'QKD', 'Lattice-based'],
    complexity: 'Enterprise'
  },
  {
    id: 'quantum-simulation-platform',
    title: 'Quantum Simulation Platform',
    description: 'High-performance quantum simulation platform for modeling complex quantum systems and materials.',
    price: 15000,
    timeline: '2-3 months',
    features: [
      'Quantum system modeling',
      'Material property simulation',
      'Chemical reaction modeling',
      'Quantum dynamics simulation',
      'Visualization tools',
      'Performance optimization',
      'Multi-platform support'
    ],
    benefits: [
      'Accurate quantum modeling',
      'Faster research cycles',
      'Cost-effective simulation',
      'Real-time visualization',
      'Scalable simulations'
    ],
    useCases: [
      'Material science research',
      'Drug development',
      'Chemical engineering',
      'Physics research',
      'Quantum chemistry'
    ],
    technologies: ['QSim', 'QuEST', 'ProjectQ', 'Quantum Simulators', 'Python'],
    complexity: 'Advanced'
  },
  {
    id: 'quantum-machine-learning',
    title: 'Quantum Machine Learning',
    description: 'Cutting-edge quantum machine learning platform combining quantum computing with advanced AI algorithms.',
    price: 20000,
    timeline: '3-5 months',
    features: [
      'Quantum neural networks',
      'Quantum feature maps',
      'Quantum kernel methods',
      'Hybrid quantum-classical ML',
      'Quantum data encoding',
      'Model optimization',
      'Real-time learning'
    ],
    benefits: [
      'Enhanced learning capabilities',
      'Faster training times',
      'Better pattern recognition',
      'Quantum advantage',
      'Scalable ML solutions'
    ],
    useCases: [
      'Image recognition',
      'Natural language processing',
      'Financial modeling',
      'Scientific research',
      'Predictive analytics'
    ],
    technologies: ['TensorFlow Quantum', 'PennyLane', 'Qiskit ML', 'Quantum ML', 'Python'],
    complexity: 'Advanced'
  }
];

const CONTACT_INFO = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
  emergencySupport: '24/7 available for enterprise clients'
};

const QuantumComputingServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<QuantumService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComplexity, setSelectedComplexity] = useState<string>('All');

  const filteredServices = QUANTUM_SERVICES.filter(service => 
    selectedComplexity === 'All' || service.complexity === selectedComplexity
  );

  const openServiceModal = (service: QuantumService) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Basic': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'Advanced': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      case 'Enterprise': return 'text-purple-400 bg-purple-900/20 border-purple-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <SEO 
        title="Quantum Computing Services - Zion Tech Group"
        description="Revolutionary quantum computing services including AI platforms, optimization suites, cryptography systems, and machine learning solutions."
        keywords="quantum computing, quantum AI, quantum cryptography, quantum optimization, Zion Tech Group"
      />
      
      <AdvancedFuturisticBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full border border-blue-500/30">
                <Atom className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Quantum Computing Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary quantum computing solutions that solve complex problems 1000x faster than classical computers. 
              Experience the future of computation with our cutting-edge quantum services.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 text-blue-300"
              >
                <Zap className="w-5 h-5" />
                <span>1000x Faster</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300"
              >
                <Shield className="w-5 h-5" />
                <span>Quantum Secure</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-6 py-3 text-green-300"
              >
                <Brain className="w-5 h-5" />
                <span>AI Enhanced</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-80">
                <select
                  value={selectedComplexity}
                  onChange={(e) => setSelectedComplexity(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                >
                  <option value="All">All Complexity Levels</option>
                  <option value="Basic">Basic</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => openServiceModal(service)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl border border-blue-500/30">
                    <Atom className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplexityColor(service.complexity)}`}>
                    {service.complexity}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.timeline}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-gray-300">
                      +{service.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Experience Quantum Computing?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Contact our quantum computing experts to discuss how our revolutionary services can transform 
                  your business operations and give you a quantum advantage in the market.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-white">{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-white">{CONTACT_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-white">{CONTACT_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-white">{CONTACT_INFO.businessHours}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-700/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Get a Quantum Consultation</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <textarea
                    placeholder="Tell us about your quantum computing needs"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeServiceModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                <button
                  onClick={closeServiceModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Service Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price:</span>
                        <span className="text-white font-semibold">${selectedService.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Timeline:</span>
                        <span className="text-white">{selectedService.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Complexity:</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getComplexityColor(selectedService.complexity)}`}>
                          {selectedService.complexity}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Use Cases</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                    Get Started
                  </button>
                  <button className="flex-1 py-3 px-6 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuantumComputingServices;