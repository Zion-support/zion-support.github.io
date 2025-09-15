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
  Bluetooth,
  Atom,
  CircuitBoard,
  Microscope,
  TestTube,
  Beaker,
  Flask,
  CpuIcon,
  Satellite,
  Drone,
  Car,
  Plane,
  Ship,
  Building,
  Factory
} from 'lucide-react';

const NextGenTechShowcase2025: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextGenTechnologies = [
    {
      icon: Brain,
      title: 'Autonomous AI Systems',
      description: 'Self-evolving AI that learns, adapts, and operates independently',
      color: 'from-purple-500 to-pink-500',
      applications: ['Smart Cities', 'Autonomous Vehicles', 'Predictive Maintenance'],
      impact: 'Revolutionary'
    },
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Exponential computing power for solving impossible problems',
      color: 'from-blue-500 to-cyan-500',
      applications: ['Drug Discovery', 'Cryptography', 'Financial Modeling'],
      impact: 'Breakthrough'
    },
    {
      icon: CircuitBoard,
      title: 'Neural Interfaces',
      description: 'Direct brain-computer communication for enhanced human capabilities',
      color: 'from-green-500 to-emerald-500',
      applications: ['Healthcare', 'Gaming', 'Accessibility'],
      impact: 'Life-Changing'
    },
    {
      icon: Satellite,
      title: 'Space Technology',
      description: 'Advanced space-based solutions for global connectivity and monitoring',
      color: 'from-orange-500 to-red-500',
      applications: ['Global Internet', 'Earth Monitoring', 'Space Exploration'],
      impact: 'Global'
    },
    {
      icon: Drone,
      title: 'Autonomous Systems',
      description: 'Self-navigating systems for transportation, delivery, and operations',
      color: 'from-indigo-500 to-purple-500',
      applications: ['Logistics', 'Surveillance', 'Emergency Response'],
      impact: 'Efficient'
    },
    {
      icon: Factory,
      title: 'Smart Manufacturing',
      description: 'AI-powered factories with predictive maintenance and optimization',
      color: 'from-teal-500 to-blue-500',
      applications: ['Quality Control', 'Supply Chain', 'Customization'],
      impact: 'Transformative'
    }
  ];

  const industryTransformations = [
    {
      industry: 'Healthcare',
      icon: Shield,
      technologies: ['AI Diagnostics', 'Robotic Surgery', 'Personalized Medicine'],
      benefits: ['95% Accuracy', 'Faster Treatment', 'Cost Reduction'],
      description: 'Revolutionary healthcare solutions powered by AI and advanced robotics'
    },
    {
      industry: 'Transportation',
      icon: Car,
      technologies: ['Autonomous Vehicles', 'Smart Traffic', 'Electric Aviation'],
      benefits: ['Zero Accidents', 'Reduced Emissions', 'Faster Commutes'],
      description: 'Next-generation transportation systems for safer, cleaner mobility'
    },
    {
      industry: 'Finance',
      icon: BarChart3,
      technologies: ['AI Trading', 'Blockchain', 'Quantum Security'],
      benefits: ['Real-time Analysis', 'Fraud Prevention', 'Instant Transactions'],
      description: 'Advanced financial technologies for secure, efficient transactions'
    },
    {
      industry: 'Education',
      icon: Lightbulb,
      technologies: ['VR Learning', 'AI Tutoring', 'Neural Enhancement'],
      benefits: ['Personalized Learning', 'Immersive Experience', 'Accelerated Progress'],
      description: 'Transformative educational technologies for enhanced learning outcomes'
    }
  ];

  const futureVision = [
    {
      timeline: '2025',
      milestone: 'AI Integration',
      description: 'Widespread adoption of AI in business operations',
      technologies: ['Autonomous Systems', 'Predictive Analytics', 'Smart Automation']
    },
    {
      timeline: '2026',
      milestone: 'Quantum Breakthrough',
      description: 'Commercial quantum computing applications',
      technologies: ['Quantum Cryptography', 'Drug Discovery', 'Optimization']
    },
    {
      timeline: '2027',
      milestone: 'Neural Interfaces',
      description: 'Consumer neural interface devices',
      technologies: ['Brain-Computer Interfaces', 'Thought Control', 'Enhanced Cognition']
    },
    {
      timeline: '2030',
      milestone: 'Technological Singularity',
      description: 'AI surpassing human intelligence',
      technologies: ['General AI', 'Autonomous Everything', 'Human-AI Collaboration']
    }
  ];

  const techStatistics = [
    { number: '$2.5T', label: 'Global Tech Investment', icon: TrendingUp },
    { number: '85%', label: 'AI Adoption Rate', icon: Brain },
    { number: '500M', label: 'Connected Devices', icon: Network },
    { number: '99.9%', label: 'System Reliability', icon: Shield }
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
              🚀 NEXT-GEN TECHNOLOGY SHOWCASE • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Next-Gen Technology Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Discover the cutting-edge technologies that are reshaping our world and creating unprecedented opportunities for innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore Technologies
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of technologies that are transforming industries and reshaping the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nextGenTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full mb-4">
                  {tech.impact}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.applications.map((application, appIndex) => (
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

      {/* Industry Transformations */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how next-generation technologies are revolutionizing industries across the globe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryTransformations.map((transformation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <transformation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{transformation.industry}</h3>
                </div>
                <p className="text-gray-600 mb-6">{transformation.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <ul className="space-y-1">
                      {transformation.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="text-sm text-gray-600">• {tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {transformation.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-green-600">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Statistics */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Impact Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The numbers that demonstrate the transformative power of next-generation technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStatistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Vision Timeline */}
      <div className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Evolution Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The roadmap to technological transformation and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureVision.map((vision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{vision.timeline}</div>
                  <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full mb-4">
                    {vision.milestone}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{vision.milestone}</h3>
                <p className="text-gray-600 mb-6 text-center">{vision.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {vision.technologies.map((technology, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Innovation Showcase */}
      <div className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Leading the Technology Revolution
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
              We're at the forefront of technological innovation, developing solutions that shape the future
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-4">AI Innovation</h3>
                <p className="opacity-90">Pioneering artificial intelligence solutions that transform businesses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4">Quantum Computing</h3>
                <p className="opacity-90">Harnessing quantum power for breakthrough computational capabilities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-4">Neural Interfaces</h3>
                <p className="opacity-90">Connecting minds and machines for enhanced human capabilities</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Join the Innovation Revolution
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Download Technology Report
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2025;