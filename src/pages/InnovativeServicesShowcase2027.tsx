import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Zap,
  Shield,
  Brain,
  Rocket,
  Globe,
  Star
} from 'lucide-react';

const InnovativeServicesShowcase2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-zion-cyan mb-6">
            Innovative Services 2027
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover the future of technology with our cutting-edge AI, cybersecurity, and digital transformation services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate/50 hover:border-zion-cyan/50 transition-all duration-300"
          >
            <div className="text-zion-cyan mb-4">
              <Brain className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
            <p className="text-zion-slate-light mb-6">
              Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.
            </p>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
              Learn More
            </button>
          </motion.div>

          {/* Cybersecurity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate/50 hover:border-zion-cyan/50 transition-all duration-300"
          >
            <div className="text-zion-cyan mb-4">
              <Shield className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-zion-slate-light mb-6">
              Comprehensive security solutions including threat detection, incident response, and compliance management.
            </p>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
              Learn More
            </button>
          </motion.div>

          {/* Digital Transformation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate/50 hover:border-zion-cyan/50 transition-all duration-300"
          >
            <div className="text-zion-cyan mb-4">
              <Rocket className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
            <p className="text-zion-slate-light mb-6">
              End-to-end digital transformation services to modernize your business operations and technology stack.
            </p>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2027;