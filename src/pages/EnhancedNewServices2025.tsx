import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Star, 
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Rocket,
  Atom,
  Globe
} from 'lucide-react';

export default function EnhancedNewServices2025() {
  const enhancedServices = [
    {
      icon: Brain,
      title: "Enhanced AI Autonomous Research Assistant",
      description: "Advanced AI-powered research automation with enhanced capabilities",
      features: ["Multi-source data integration", "Advanced NLP processing", "Predictive analytics"],
      category: "AI & Machine Learning",
      priority: "high"
    },
    {
      icon: Atom,
      title: "Quantum AI Hybrid Platform",
      description: "Revolutionary quantum-classical computing integration",
      features: ["Quantum algorithms", "Hybrid optimization", "Quantum security"],
      category: "Quantum Computing",
      priority: "high"
    },
    {
      icon: Globe,
      title: "Global AI Orchestration Platform",
      description: "Worldwide AI service coordination and management",
      features: ["Multi-region deployment", "Global load balancing", "Compliance automation"],
      category: "Global Infrastructure",
      priority: "medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Enhanced Services 2025
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Experience our enhanced service portfolio with cutting-edge features and capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {enhancedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                service.priority === 'high' 
                  ? 'border-purple-500/50 hover:border-purple-400/70' 
                  : 'border-slate-700/50 hover:border-cyan-500/50'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                service.priority === 'high'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500'
              }`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}