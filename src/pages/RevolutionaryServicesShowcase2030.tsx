import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Cloud, 
  Cpu, 
  Globe, 
  Heart, 
  Users, 
  Target,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Code,
  Database,
  Lock,
  BarChart3,
  PenTool,
  MessageCircle,
  Calendar,
  DollarSign,
  Award,
  Atom,
  Satellite,
  Leaf,
  Eye
} from 'lucide-react';

const RevolutionaryServicesShowcase2030: React.FC = () => {
  const services = [
    {
      name: 'Quantum AI Platform',
      href: '/services/quantum-ai-platform',
      description: 'Next-generation quantum computing with AI integration',
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      features: ['Quantum algorithms', 'AI optimization', 'Real-time processing', 'Secure communications'],
      pricing: 'Starting at $999/month'
    },
    {
      name: 'Space Technology Solutions',
      href: '/services/space-tech',
      description: 'Advanced space tech for terrestrial applications',
      icon: Satellite,
      color: 'from-blue-500 to-cyan-500',
      features: ['Satellite data analysis', 'Space-based monitoring', 'Global connectivity', 'Environmental tracking'],
      pricing: 'Starting at $799/month'
    },
    {
      name: 'Neuromorphic Computing',
      href: '/services/neuromorphic-computing-platform',
      description: 'Brain-inspired computing architecture',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      features: ['Neural networks', 'Pattern recognition', 'Adaptive learning', 'Energy efficiency'],
      pricing: 'Starting at $599/month'
    },
    {
      name: 'Synthetic Biology Platform',
      href: '/services/synthetic-biology-platform',
      description: 'Revolutionary bio-computing solutions',
      icon: Leaf,
      color: 'from-yellow-500 to-orange-500',
      features: ['DNA computing', 'Bio-sensors', 'Genetic algorithms', 'Bio-security'],
      pricing: 'Starting at $699/month'
    },
    {
      name: 'Brain-Computer Interface',
      href: '/services/brain-computer-interface-platform',
      description: 'Direct neural interface technology',
      icon: Eye,
      color: 'from-red-500 to-pink-500',
      features: ['Neural control', 'Thought processing', 'Accessibility', 'Medical applications'],
      pricing: 'Starting at $1,299/month'
    },
    {
      name: 'Fusion Energy Management',
      href: '/services/fusion-energy-management-platform',
      description: 'Sustainable energy optimization',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500',
      features: ['Energy forecasting', 'Grid optimization', 'Renewable integration', 'Cost reduction'],
      pricing: 'Starting at $499/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary Services 2030
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary 2030 services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Explore Future Tech
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge solutions that will define the next decade of innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <span className="text-lg font-bold text-green-400">{service.pricing}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-purple-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready for the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be among the first to experience tomorrow's technology today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Early Access
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryServicesShowcase2030;