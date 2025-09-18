'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Globe
  Shield
  Rocket
  Star
  TrendingUp
  Users
  Lightbulb,
  Target,
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Code,
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Server,
  Cpu,
  Network,
  Lock,
  Eye,
  Heart,
  Sparkles
} from 'lucide-react';

const AdvancedTechShowcase2029 = () => {
  const [activeTabsetActiveTab] = useState('ai-conscience');
  const [currentDemosetCurrentDemo] = useState(0);

  const techCategories = {
    'ai-conscience': {
      title: 'AI Consciousness & Ethics',
      subtitle: 'The next evolution of artificial intelligence with moral reasoning',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600',
      description: 'Advanced AI systems that demonstrate consciousness-like behaviorsethical reasoningand emotional intelligence.',
      technologies: [
        {
          name: 'Synthetic Consciousness',
          description: 'AI systems with self-awareness and subjective experience',
          features: ['Self-reflection'Emotional processing'Moral reasoning'Creative expression'],
          icon: Heart,
          status: 'In Development',
          impact: 'Revolutionary'
        },
        {
          name: 'Ethical AI Framework',
          description: 'Comprehensive ethical guidelines for AI development',
          features: ['Bias detection'Fairness algorithms'Transparency protocols'Accountability systems'],
          icon: Shield,
          status: 'Production Ready',
          impact: 'Critical'
        },
        {
          name: 'Emotional Intelligence AI',
          description: 'AI that understands and responds to human emotions',
          features: ['Emotion recognition'Empathetic responses'Social awareness'Therapeutic applications'],
          icon: Eye,
          status: 'Beta Testing',
          impact: 'High'
        }
      ]
    },
    'quantum-neural': {
      title: 'Quantum Neural Networks',
      subtitle: 'Merging quantum computing with neural architectures',
      icon: Network,
      color: 'from-cyan-600 to-blue-600',
      description: 'Revolutionary computing architectures that combine quantum mechanics with neural network processing.',
      technologies: [
        {
          name: 'Quantum Neural Processing',
          description: 'Neural networks running on quantum hardware',
          features: ['Quantum superposition'Entanglement learning'Exponential speedup'Parallel processing'],
          icon: Cpu,
          status: 'Research Phase',
          impact: 'Breakthrough'
        },
        {
          name: 'Hybrid Quantum-Classical AI',
          description: 'Seamless integration of quantum and classical computing',
          features: ['Hybrid algorithms'Quantum advantage'Classical fallback'Optimized performance'],
          icon: Network,
          status: 'Prototype',
          impact: 'Transformative'
        },
        {
          name: 'Quantum Machine Learning',
          description: 'Machine learning algorithms optimized for quantum computers',
          features: ['Quantum algorithms'Faster training'Better optimization'Novel applications'],
          icon: Brain,
          status: 'Early Stage',
          impact: 'Revolutionary'
        }
      ]
    },
    'omniversal-computing': {
      title: 'Omniversal Computing',
      subtitle: 'Computing across multiple dimensions and realities',
      icon: Globe,
      color: 'from-orange-600 to-red-600',
      description: 'Next-generation computing that operates across multiple dimensionsrealitiesand parallel universes.',
      technologies: [
        {
          name: 'Multi-Dimensional Processing',
          description: 'Computing across multiple spatial and temporal dimensions',
          features: ['Dimensional analysis'Parallel realities'Temporal computing'Reality simulation'],
          icon: Globe,
          status: 'Theoretical',
          impact: 'Paradigm Shift'
        },
        {
          name: 'Consciousness Transfer',
          description: 'Transferring consciousness between digital and physical realms',
          features: ['Mind uploading'Digital immortality'Reality bridging'Consciousness backup'],
          icon: Brain,
          status: 'Research',
          impact: 'Existential'
        },
        {
          name: 'Reality Manipulation',
          description: 'Direct manipulation of physical reality through computation',
          features: ['Matter programming'Energy control'Space-time manipulation'Reality creation'],
          icon: Zap,
          status: 'Conceptual',
          impact: 'Unprecedented'
        }
      ]
    }
  };

  const demos = [
    {
      title: 'AI Consciousness Demo',
      description: 'Watch an AI system demonstrate self-awareness and ethical reasoning',
      duration: '5:30',
      views: '2.3M',
      category: 'AI Consciousness'
    },
    {
      title: 'Quantum Neural Processing',
      description: 'See quantum neural networks solve complex problems in real-time',
      duration: '8:15',
      views: '1.8M',
      category: 'Quantum Computing'
    },
    {
      title: 'Multi-Dimensional Computing',
      description: 'Experience computing across multiple dimensions and realities',
      duration: '12:45',
      views: '3.1M',
      category: 'Omniversal Computing'
    }
  ];

  const stats = [
    { label: 'Conscious AI Systems'value: '50+'icon: Brain },
    { label: 'Quantum Qubits'value: '1M+'icon: Cpu },
    { label: 'Realities Simulated'value: '∞'icon: Globe },
    { label: 'Ethical Guidelines'value: '500+'icon: Shield }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0y: 20 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3repeat: Infinityease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-lg font-semibold text-indigo-300 uppercase tracking-wider">
                Advanced Technology Showcase 2029
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              The Future of Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Explore the most advanced AI consciousnessquantum neural networks
              and omniversal computing technologies that are reshaping reality itself.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                <Play className="inline-block mr-2" />
                Experience the Future
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-400 rounded-full text-indigo-400 font-semibold text-lg hover:bg-indigo-400 hover:text-white transition-all duration-300"
              >
                <BookOpen className="inline-block mr-2" />
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((statindex) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0y: 20 }}
                animate={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Revolutionary Technologies</h2>
            <p className="text-xl text-gray-300">Choose a category to explore breakthrough innovations</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(techCategories).map(([keycategory]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon className="inline-block mr-2" />
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              exit={{ opacity: 0y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {techCategories[activeTab].title}
                </h3>
                <p className="text-xl text-gray-300 mb-4">
                  {techCategories[activeTab].subtitle}
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  {techCategories[activeTab].description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {techCategories[activeTab].technologies.map((techindex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0y: 20 }}
                    animate={{ opacity: 1y: 0 }}
                    transition={{ duration: 0.6delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${techCategories[activeTab].color} rounded-2xl`}>
                        <tech.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tech.status === 'Production Ready' ? 'bg-green-500/20 text-green-400' :
                          tech.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                          tech.status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {tech.status}
                        </span>
                        <div className="text-sm text-gray-400 mt-1">{tech.impact} Impact</div>
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-4">{tech.name}</h4>
                    <p className="text-gray-300 mb-6">{tech.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {tech.features.map((featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <ChevronRight className="w-4 h-4 text-indigo-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Interactive Demonstrations</h2>
            <p className="text-xl text-gray-300">Experience these technologies in action</p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDemo}
                initial={{ opacity: 0x: 50 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{demos[currentDemo].title}</h4>
                      <p className="text-gray-400">{demos[currentDemo].category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="text-lg font-semibold">{demos[currentDemo].duration}</div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-6">{demos[currentDemo].description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{demos[currentDemo].views} views</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Demo Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {demos.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDemo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentDemo ? 'bg-indigo-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in developing the next generation of intelligent technologies 
            that will transform humanity and reality itself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Join the Revolution
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-indigo-400 rounded-full text-indigo-400 font-semibold text-lg hover:bg-indigo-400 hover:text-white transition-all duration-300"
            >
              Explore Research
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTechShowcase2029;