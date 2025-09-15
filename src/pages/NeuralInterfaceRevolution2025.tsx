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
  BarChart3,
  Settings,
  Workflow,
  Bot,
  Eye,
  Lightbulb,
  Layers,
  Network,
  MessageSquare,
  Activity,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
  Gamepad2,
  Mic,
  Camera,
  Wifi,
  Bluetooth
} from 'lucide-react';

const NeuralInterfaceRevolution2025: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const neuralFeatures = [
    {
      icon: Brain,
      title: 'Non-Invasive BCI',
      description: 'Direct brain-computer interfaces without surgical implantation',
      color: 'from-purple-500 to-pink-500',
      benefits: ['EEG Technology', 'Real-time Processing', 'Safe & Comfortable']
    },
    {
      icon: Eye,
      title: 'Eye Tracking Control',
      description: 'Control devices and interfaces through eye movement and gaze patterns',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Precision Control', 'Accessibility', 'Hands-Free Operation']
    },
    {
      icon: Mic,
      title: 'Thought-to-Speech',
      description: 'Convert neural signals directly into speech and text output',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Voice Synthesis', 'Communication Aid', 'Real-time Translation']
    },
    {
      icon: Gamepad2,
      title: 'Neural Gaming',
      description: 'Control games and virtual environments using brain signals',
      color: 'from-orange-500 to-red-500',
      benefits: ['Immersive Experience', 'Reaction Speed', 'New Gaming Paradigms']
    },
    {
      icon: Monitor,
      title: 'Screen Control',
      description: 'Navigate computer interfaces and applications through neural commands',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Cursor Movement', 'Click Commands', 'Multi-tasking']
    },
    {
      icon: Activity,
      title: 'Health Monitoring',
      description: 'Continuous monitoring of brain activity and cognitive health',
      color: 'from-teal-500 to-blue-500',
      benefits: ['Mental Health', 'Cognitive Assessment', 'Early Detection']
    }
  ];

  const applications = [
    {
      category: 'Healthcare',
      icon: Shield,
      useCases: ['Paralysis Recovery', 'Cognitive Therapy', 'Mental Health Monitoring'],
      impact: 'Life-Changing',
      description: 'Restore communication and mobility for patients with neurological conditions'
    },
    {
      category: 'Education',
      icon: Lightbulb,
      useCases: ['Learning Enhancement', 'Attention Tracking', 'Personalized Learning'],
      impact: 'Enhanced Learning',
      description: 'Optimize learning experiences through real-time cognitive feedback'
    },
    {
      category: 'Workplace',
      icon: Workflow,
      useCases: ['Productivity Tools', 'Focus Enhancement', 'Collaboration'],
      impact: 'Increased Efficiency',
      description: 'Boost workplace productivity through neural-enhanced tools'
    },
    {
      category: 'Entertainment',
      icon: Gamepad2,
      useCases: ['Immersive Gaming', 'VR Control', 'Interactive Media'],
      impact: 'Next-Gen Experience',
      description: 'Revolutionary entertainment experiences through direct neural control'
    }
  ];

  const technologyBreakthroughs = [
    {
      breakthrough: 'Neural Signal Processing',
      description: 'Advanced algorithms that decode brain signals with 95% accuracy',
      status: 'Available Now',
      applications: ['Communication', 'Control', 'Monitoring']
    },
    {
      breakthrough: 'Wireless Neural Interfaces',
      description: 'High-bandwidth wireless communication with neural implants',
      status: 'In Development',
      applications: ['Mobility', 'Sensory Feedback', 'Enhanced Control']
    },
    {
      breakthrough: 'AI-Neural Integration',
      description: 'Seamless integration between AI systems and neural interfaces',
      status: 'Prototype',
      applications: ['Cognitive Enhancement', 'Decision Support', 'Learning Acceleration']
    },
    {
      breakthrough: 'Multi-Modal Interfaces',
      description: 'Combining neural signals with other input modalities',
      status: 'Research Phase',
      applications: ['Hybrid Control', 'Enhanced Precision', 'Fallback Options']
    }
  ];

  const safetyFeatures = [
    {
      feature: 'Non-Invasive Design',
      description: 'No surgical procedures required for most applications',
      icon: Shield
    },
    {
      feature: 'Privacy Protection',
      description: 'Advanced encryption and local processing for neural data',
      icon: Lock
    },
    {
      feature: 'Fail-Safe Mechanisms',
      description: 'Built-in safety systems to prevent neural overload',
      icon: CheckCircle
    },
    {
      feature: 'Regulatory Compliance',
      description: 'Full compliance with medical device regulations',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🧬 NEURAL INTERFACE REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Neural Interface Revolution 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Bridge the gap between mind and machine with cutting-edge neural interfaces that enable direct brain-computer communication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Experience Neural Interface
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Technology Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neural Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Neural Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the neural interface technologies that are connecting minds to machines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neuralFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neural Interface Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming industries through direct neural communication
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{app.category}</h3>
                    <div className="text-purple-600 font-semibold">{app.impact}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{app.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Breakthroughs */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Breakthroughs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge developments in neural interface technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyBreakthroughs.map((breakthrough, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                    breakthrough.status === 'Available Now' ? 'bg-green-100 text-green-700' :
                    breakthrough.status === 'In Development' ? 'bg-blue-100 text-blue-700' :
                    breakthrough.status === 'Prototype' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {breakthrough.status}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{breakthrough.breakthrough}</h3>
                <p className="text-gray-600 mb-4 text-center">{breakthrough.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {breakthrough.applications.map((application, appIndex) => (
                      <span key={appIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {application}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Features */}
      <div className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety & Security First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with the highest standards of safety and privacy protection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((safety, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <safety.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{safety.feature}</h3>
                <p className="text-gray-600">{safety.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <div className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              The Future of Human-Computer Interaction
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
              Neural interfaces represent the next evolution in human-computer interaction, enabling seamless communication between minds and machines
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-4">Direct Neural Control</h3>
                <p className="opacity-90">Control devices and applications through thought alone</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-4">Enhanced Communication</h3>
                <p className="opacity-90">Break down language barriers with neural translation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4">Cognitive Enhancement</h3>
                <p className="opacity-90">Augment human capabilities with AI assistance</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Neural Interface Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Download Technology Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2025;