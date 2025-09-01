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
  Rocket
} from 'lucide-react';

export default function NewServicesShowcase2025() {
  const services = [
    {
      icon: Brain,
      title: "AI Autonomous Research Assistant",
      description: "Revolutionary AI-powered research automation platform",
      features: ["Automated data collection", "Intelligent analysis", "Real-time insights"],
      category: "AI & Machine Learning"
    },
    {
      icon: Cloud,
      title: "Cloud-Native AI Platform",
      description: "Scalable cloud infrastructure for AI applications",
      features: ["Auto-scaling", "High availability", "Cost optimization"],
      category: "Cloud & Infrastructure"
    },
    {
      icon: Shield,
      title: "Advanced Cybersecurity Suite",
      description: "Next-generation security with AI threat detection",
      features: ["Real-time monitoring", "Predictive analytics", "Zero-day protection"],
      category: "Cybersecurity"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            New Services 2025
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Discover our latest cutting-edge services designed to transform your business in 2025 and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
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