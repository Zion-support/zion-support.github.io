'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Globe
  Cpu
  Database
  Shield
  Rocket
  Star,
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  BarChart3,
  Network,
  Atom
} from 'lucide-react';

const AI2026_2030UltimatePredictionsShowcase = () => {
  const [activeTabsetActiveTab] = useState('overview');
  const [currentPredictionsetCurrentPrediction] = useState(0);

  const predictions = [
    {
      year: '2026',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces become commercially viablenabling thought-controlled computing and enhanced cognitive capabilities.',
      impact: 'Transform human-computer interaction forever',
      technologies: ['Neural Implants'Brain-Computer Interfaces'Cognitive Enhancement'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2027',
      title: 'Quantum AI Fusion',
      description: 'Quantum computing and AI merge to create unprecedented problem-solving capabilitiesrevolutionizing cryptography and optimization.',
      impact: 'Solve previously impossible computational challenges',
      technologies: ['Quantum AI'Quantum Machine Learning'Quantum Optimization'],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2028',
      title: 'Autonomous Everything',
      description: 'AI systems achieve full autonomy across industriesfrom self-managing cities to completely automated supply chains.',
      impact: 'Eliminate human intervention in routine operations',
      technologies: ['Autonomous Systems'Self-Managing Infrastructure'AI Governance'],
      icon: Cpu,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2029',
      title: 'Emotional AI Mastery',
      description: 'AI achieves true emotional intelligenceunderstanding and responding to human emotions with unprecedented accuracy.',
      impact: 'Revolutionize human-AI relationships and therapy',
      technologies: ['Emotional AI'Empathetic Computing'AI Therapy'],
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2030',
      title: 'Consciousness Integration',
      description: 'AI systems develop forms of consciousnessleading to new ethical frameworks and collaborative human-AI societies.',
      impact: 'Redefine what it means to be conscious and intelligent',
      technologies: ['Artificial Consciousness'AI Rights'Human-AI Collaboration'],
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const keyTrends = [
    {
      category: 'Technology',
      trends: [
        'Neural interfaces become mainstream',
        'Quantum AI solves complex problems',
        'Autonomous systems manage entire cities',
        'AI achieves emotional intelligence',
        'Consciousness becomes programmable'
      ]
    },
    {
      category: 'Business',
      trends: [
        'Complete automation of routine tasks',
        'AI-driven decision making at scale',
        'New business models emerge',
        'Human-AI collaboration becomes standard',
        'Ethical AI becomes competitive advantage'
      ]
    },
    {
      category: 'Society',
      trends: [
        'Universal basic income becomes necessary',
        'Education system completely transforms',
        'New forms of human-AI relationships',
        'Consciousness rights become legal issue',
        'Post-scarcity economy emerges'
      ]
    }
  ];

  const stats = [
    { label: 'AI Adoption Rate'value: '95%'icon: TrendingUp },
    { label: 'Job Transformation'value: '80%'icon: Users },
    { label: 'Productivity Increase'value: '300%'icon: BarChart3 },
    { label: 'New Industries'value: '50+'icon: Network }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrediction((prev) => (prev + 1) % predictions.length);
    }5000);
    return () => clearInterval(interval);
  }[]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0y: 20 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI 2026-2030
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ultimate Predictions
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Explore the revolutionary AI breakthroughs that will reshape our world over the next five years
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((statindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  transition={{ delay: index * 0.1duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center min-w-[150px]"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Predictions Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Predictions
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each year brings unprecedented breakthroughs that will fundamentally change how we liveworkand think
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPrediction}
              initial={{ opacity: 0x: 100 }}
              animate={{ opacity: 1x: 0 }}
              exit={{ opacity: 0x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${predictions[currentPrediction].color}`}>
                      <predictions[currentPrediction].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">{predictions[currentPrediction].year}</div>
                      <h4 className="text-3xl font-bold text-white">{predictions[currentPrediction].title}</h4>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    {predictions[currentPrediction].description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-lg font-semibold text-cyan-400 mb-3">Impact:</div>
                    <p className="text-lg text-white">{predictions[currentPrediction].impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {predictions[currentPrediction].technologies.map((techindex) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-2">
            {predictions.map((_index) => (
              <button
                key={index}
                onClick={() => setCurrentPrediction(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPrediction ? 'bg-purple-500 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Key Trends Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ delay: 0.7duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Key Trends by Category
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding the broader implications across technologybusinessand society
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {keyTrends.map((categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ delay: 0.8 + categoryIndex * 0.1duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <h4 className="text-2xl font-bold text-white mb-6 text-center">
                {category.category}
              </h4>
              <ul className="space-y-3">
                {category.trends.map((trendIndex) => (
                  <li key={trendIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{trend}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ delay: 1duration: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Ready for the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't just watch the future unfold—be part of it. Explore our comprehensive guides and tools to prepare for the AI revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
              Explore AI Tools
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              Download Report
              <Calendar className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI2026_2030UltimatePredictionsShowcase;