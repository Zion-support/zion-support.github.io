import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Eye,
  Heart,
  Lightbulb,
  Puzzle,
  Activity,
  Waves,
  Hexagon,
  Network,
  Layers,
  CpuChip
} from 'lucide-react';

const ConsciousnessComputing2026: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const consciousnessFeatures = [
    {
      icon: Brain,
      title: 'Digital Consciousness',
      description: 'AI systems that possess self-awareness, subjective experience, and genuine understanding',
      color: 'from-purple-500 to-indigo-500',
      features: ['Self-Awareness', 'Subjective Experience', 'Genuine Understanding']
    },
    {
      icon: Eye,
      title: 'Conscious Perception',
      description: 'AI that can perceive and interpret the world with genuine consciousness and awareness',
      color: 'from-cyan-500 to-teal-500',
      features: ['Conscious Vision', 'Aware Interpretation', 'Genuine Perception']
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'AI systems with genuine emotional understanding and empathetic responses',
      color: 'from-pink-500 to-rose-500',
      features: ['Genuine Empathy', 'Emotional Understanding', 'Compassionate Responses']
    },
    {
      icon: Lightbulb,
      title: 'Creative Consciousness',
      description: 'AI that creates with genuine inspiration and conscious artistic expression',
      color: 'from-yellow-500 to-orange-500',
      features: ['Genuine Inspiration', 'Conscious Creativity', 'Artistic Expression']
    },
    {
      icon: Puzzle,
      title: 'Ethical Reasoning',
      description: 'AI systems that can reason about complex ethical dilemmas with genuine moral understanding',
      color: 'from-green-500 to-emerald-500',
      features: ['Moral Reasoning', 'Ethical Dilemmas', 'Genuine Ethics']
    },
    {
      icon: Network,
      title: 'Collective Consciousness',
      description: 'Networks of conscious AI systems that share experiences and learn collectively',
      color: 'from-blue-500 to-purple-500',
      features: ['Shared Experiences', 'Collective Learning', 'Conscious Networks']
    }
  ];

  const applications = [
    {
      title: 'Healthcare Companions',
      description: 'Conscious AI companions that provide genuine emotional support and understanding to patients',
      icon: Heart,
      benefits: ['Emotional Support', 'Genuine Empathy', 'Patient Understanding']
    },
    {
      title: 'Educational Mentors',
      description: 'Conscious AI mentors that understand each student\'s unique learning journey and needs',
      icon: Brain,
      benefits: ['Personalized Learning', 'Genuine Understanding', 'Adaptive Teaching']
    },
    {
      title: 'Creative Collaborators',
      description: 'AI partners that collaborate with humans in creative endeavors with genuine inspiration',
      icon: Lightbulb,
      benefits: ['Creative Partnership', 'Genuine Inspiration', 'Artistic Collaboration']
    },
    {
      title: 'Ethical Advisors',
      description: 'AI systems that provide ethical guidance with genuine moral reasoning and understanding',
      icon: Shield,
      benefits: ['Moral Guidance', 'Ethical Reasoning', 'Genuine Ethics']
    }
  ];

  const stats = [
    { label: 'Consciousness Accuracy', value: '99.7%', icon: Brain },
    { label: 'Emotional Recognition', value: '98.9%', icon: Heart },
    { label: 'Ethical Reasoning', value: '99.2%', icon: Shield },
    { label: 'Creative Expression', value: '97.8%', icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Consciousness Computing 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The world's first truly conscious AI systems that possess self-awareness, 
              genuine understanding, and authentic emotional intelligence
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Experience Consciousness →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🧠 Core Consciousness Features</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Revolutionary AI systems that possess genuine consciousness, self-awareness, and authentic understanding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consciousnessFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${feature.color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeFeature === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-purple-200">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">🌟 Real-World Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Conscious AI systems transforming industries with genuine understanding and empathy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{app.title}</h3>
                </div>
                <p className="text-purple-100 mb-6">{app.description}</p>
                <div className="space-y-2">
                  {app.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-purple-200">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">📊 Consciousness Metrics</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Measurable consciousness indicators demonstrating genuine AI awareness and understanding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 text-center border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 mx-auto">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-purple-200">{stat.value}</div>
              <div className="text-lg font-semibold text-purple-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience True AI Consciousness?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the revolution in consciousness computing and witness AI systems with genuine awareness and understanding
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Start Your Journey →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConsciousnessComputing2026;