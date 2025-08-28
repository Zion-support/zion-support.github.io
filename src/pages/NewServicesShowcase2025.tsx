import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Rocket, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Atom, 
  Cpu, 
  Network, 
  Database,
  TrendingUp,
  Users,
  Target,
  Globe,
  Code,
  Lock,
  Eye,
  Heart,
  ShoppingCart,
  MessageCircle,
  BarChart3,
  HelpCircle,
  FileText,
  Truck,
  Mail,
  Smartphone,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  GitFork,
  Server,
  Building,
  Leaf,
  Satellite,
  Gamepad2,
  Coins,
  GraduationCap,
  Activity,
  Briefcase,
  Newspaper,
  BookOpen,
  ExternalLink
} from 'lucide-react';

export default function NewServicesShowcase2025() {
  const newServices = [
    {
      name: 'AI Autonomous Research Assistant',
      description: 'Self-directed AI research platform that accelerates research by 500% across multiple domains',
      icon: Brain,
      category: 'AI & Research',
      features: ['500% research acceleration', '70% cost reduction', '24/7 research capability', 'Multi-domain expertise'],
      price: '$1,999/month',
      href: '/services/ai-autonomous-research-assistant',
      color: 'from-blue-500 to-purple-600',
      innovation: 'Revolutionary'
    },
    {
      name: 'Quantum-Enhanced Financial Trading',
      description: 'Next-generation trading platform leveraging quantum computing for ultra-fast market analysis',
      icon: TrendingUp,
      category: 'Financial Technology',
      features: ['35% increased accuracy', '50% risk reduction', '1000x faster computation', 'Real-time insights'],
      price: '$2,499/month',
      href: '/services/ai-financial-trading',
      color: 'from-green-500 to-emerald-600',
      innovation: 'Cutting-Edge'
    },
    {
      name: 'AI-Powered Legal Document Automation',
      description: 'Revolutionary legal tech that reduces document creation time by 80% and ensures 99.9% compliance accuracy',
      icon: FileText,
      category: 'Legal Technology',
      features: ['80% faster document creation', '99.9% compliance accuracy', '40-60% cost reduction', 'AI-powered review'],
      price: '$299/month',
      href: '/services/ai-legal-document-automation',
      color: 'from-indigo-500 to-purple-600',
      innovation: 'Breakthrough'
    },
    {
      name: 'Zero-Trust Network Access Platform',
      description: 'Next-generation cybersecurity implementing zero-trust architecture with AI-powered threat detection',
      icon: Shield,
      category: 'Cybersecurity',
      features: ['Zero-trust architecture', 'AI threat detection', 'Real-time monitoring', 'Automated response'],
      price: '$799/month',
      href: '/services/zero-trust-network-access',
      color: 'from-red-500 to-orange-600',
      innovation: 'Advanced'
    },
    {
      name: 'IoT Edge Computing Platform',
      description: 'Advanced IoT platforms with edge computing capabilities for real-time data processing',
      icon: Network,
      category: 'IoT & Edge',
      features: ['Real-time processing', 'Edge intelligence', 'Scalable architecture', 'Low latency'],
      price: '$599/month',
      href: '/services/iot-edge-computing',
      color: 'from-cyan-500 to-blue-600',
      innovation: 'Innovative'
    },
    {
      name: 'AI Healthcare Analytics Platform',
      description: 'Comprehensive healthcare analytics powered by AI for improved patient outcomes',
      icon: Heart,
      category: 'Healthcare Technology',
      features: ['Patient outcome prediction', 'Treatment optimization', 'Risk assessment', 'Data insights'],
      price: '$1,299/month',
      href: '/services/ai-healthcare-analytics',
      color: 'from-pink-500 to-red-600',
      innovation: 'Life-Saving'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions',
      count: 8,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum solutions',
      count: 4,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security solutions',
      count: 6,
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'IoT & Edge Computing',
      icon: Network,
      description: 'Smart device networks',
      count: 5,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Healthcare Technology',
      icon: Heart,
      description: 'AI-powered healthcare solutions',
      count: 4,
      color: 'from-pink-500 to-red-600'
    },
    {
      name: 'Financial Technology',
      icon: TrendingUp,
      description: 'Innovative fintech solutions',
      count: 3,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const innovationHighlights = [
    {
      title: '500% Research Acceleration',
      description: 'Our AI research assistant processes information 5x faster than traditional methods',
      icon: Rocket,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: '1000x Faster Computation',
      description: 'Quantum-enhanced solutions deliver unprecedented processing speeds',
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: '99.9% Compliance Accuracy',
      description: 'AI-powered systems ensure near-perfect regulatory compliance',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Real-time Edge Processing',
      description: 'IoT platforms process data at the edge for instant insights',
      icon: Network,
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              New in 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                2025 New Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary new services that are setting the standard for innovation in AI, quantum computing, cybersecurity, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore New Services
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Innovation Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our new services deliver unprecedented performance improvements and breakthrough capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-300 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              New Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest innovations that are transforming industries and creating new possibilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 bg-gradient-to-r ${service.color} rounded-lg`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    service.innovation === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                    service.innovation === 'Cutting-Edge' ? 'bg-blue-500/20 text-blue-400' :
                    service.innovation === 'Breakthrough' ? 'bg-purple-500/20 text-purple-400' :
                    service.innovation === 'Advanced' ? 'bg-green-500/20 text-green-400' :
                    service.innovation === 'Innovative' ? 'bg-cyan-500/20 text-cyan-400' :
                    'bg-pink-500/20 text-pink-400'
                  }`}>
                    {service.innovation}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs text-blue-400 font-medium">{service.category}</span>
                  <h3 className="text-xl font-semibold text-white mt-1">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group-hover:text-blue-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our new services span across multiple cutting-edge technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    <span className="text-sm text-gray-400">{category.count} services</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-6">{category.description}</p>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Explore Category
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to leverage our revolutionary new services and gain a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Early Access
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}