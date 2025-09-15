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
  Atom,
  CircuitBoard,
  Microscope,
  TestTube,
  Beaker,
  Flask,
  CpuIcon
} from 'lucide-react';

const QuantumComputingRevolution2025: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quantumFeatures = [
    {
      icon: Atom,
      title: 'Quantum Supremacy',
      description: 'Achieve computational power that exceeds classical computers for specific problems',
      color: 'from-purple-500 to-pink-500',
      benefits: ['Exponential Speed', 'Parallel Processing', 'Quantum Advantage']
    },
    {
      icon: CircuitBoard,
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum mechanical principles',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Quantum Key Distribution', 'Unhackable Security', 'Future-Proof Encryption']
    },
    {
      icon: Microscope,
      title: 'Quantum Simulation',
      description: 'Simulate complex molecular and quantum systems with unprecedented accuracy',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Drug Discovery', 'Material Science', 'Chemical Reactions']
    },
    {
      icon: TestTube,
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems that are intractable for classical computers',
      color: 'from-orange-500 to-red-500',
      benefits: ['Supply Chain', 'Financial Modeling', 'Logistics Optimization']
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Revolutionary AI algorithms powered by quantum computing principles',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Pattern Recognition', 'Quantum Neural Networks', 'Enhanced Learning']
    },
    {
      icon: Network,
      title: 'Quantum Internet',
      description: 'Ultra-secure quantum communication networks for the future',
      color: 'from-teal-500 to-blue-500',
      benefits: ['Quantum Teleportation', 'Secure Communication', 'Global Quantum Network']
    }
  ];

  const quantumApplications = [
    {
      industry: 'Healthcare',
      icon: Flask,
      applications: ['Drug Discovery', 'Protein Folding', 'Personalized Medicine'],
      impact: '10x Faster Research',
      description: 'Accelerate pharmaceutical research and enable personalized treatments'
    },
    {
      industry: 'Finance',
      icon: BarChart3,
      applications: ['Risk Analysis', 'Portfolio Optimization', 'Fraud Detection'],
      impact: '95% Accuracy',
      description: 'Revolutionary financial modeling and risk assessment capabilities'
    },
    {
      industry: 'Manufacturing',
      icon: CpuIcon,
      applications: ['Supply Chain', 'Quality Control', 'Process Optimization'],
      impact: '40% Efficiency',
      description: 'Optimize complex manufacturing processes and supply chains'
    },
    {
      industry: 'Energy',
      icon: Zap,
      applications: ['Battery Design', 'Nuclear Fusion', 'Grid Optimization'],
      impact: 'Clean Energy',
      description: 'Accelerate clean energy research and grid optimization'
    }
  ];

  const quantumMilestones = [
    {
      year: '2025',
      milestone: 'Quantum Advantage',
      description: 'Achieve quantum advantage in specific business applications',
      status: 'Achieved'
    },
    {
      year: '2026',
      milestone: 'Fault-Tolerant Quantum',
      description: 'Deploy error-corrected quantum computers for commercial use',
      status: 'In Progress'
    },
    {
      year: '2027',
      milestone: 'Quantum Internet',
      description: 'Launch quantum communication networks',
      status: 'Planned'
    },
    {
      year: '2030',
      milestone: 'General Quantum Computing',
      description: 'Achieve general-purpose quantum computing',
      status: 'Vision'
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
              ⚡ QUANTUM COMPUTING REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Quantum Computing Revolution 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Experience the next frontier of computing with quantum technologies that solve impossible problems and unlock unprecedented possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore Quantum Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Quantum Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Quantum Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the quantum technologies that are reshaping the future of computing and problem-solving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumFeatures.map((feature, index) => (
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

      {/* Industry Applications */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum Applications Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how quantum computing is transforming industries and solving previously impossible problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {quantumApplications.map((app, index) => (
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
                    <h3 className="text-2xl font-bold text-gray-900">{app.industry}</h3>
                    <div className="text-purple-600 font-semibold">{app.impact}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{app.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.applications.map((application, appIndex) => (
                      <span key={appIndex} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
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

      {/* Quantum Timeline */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journey to quantum supremacy and beyond
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                    milestone.status === 'Achieved' ? 'bg-green-100 text-green-700' :
                    milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                    milestone.status === 'Planned' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {milestone.status}
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{milestone.milestone}</h3>
                <p className="text-gray-600 text-center">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quantum Advantages */}
      <div className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum vs Classical Computing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the revolutionary advantages of quantum computing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Classical Computing</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-600">Binary processing (0s and 1s)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-600">Linear problem solving</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-600">Sequential operations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-600">Limited by Moore's Law</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Quantum Computing</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-yellow-300 mr-3" />
                  <span>Quantum superposition (0s and 1s simultaneously)</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-yellow-300 mr-3" />
                  <span>Parallel problem solving</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-yellow-300 mr-3" />
                  <span>Quantum entanglement</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-yellow-300 mr-3" />
                  <span>Exponential speed advantage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Be among the first to harness the power of quantum computing for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Quantum Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Download Quantum Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;