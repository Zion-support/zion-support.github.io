'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  Star
  TrendingUp
  Users
  Zap
  Shield
  Globe,
  Brain,
  Rocket,
  Target,
  Award,
  Lightbulb,
  CheckCircle,
  PlayCircle,
  Download,
  ExternalLink
} from 'lucide-react';

const UltimateContentShowcase2028 = () => {
  const [activeTabsetActiveTab] = useState('ai-innovations');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const contentSections = {
    'ai-innovations': {
      title: 'Revolutionary AI Innovations 2028',
      subtitle: 'Experience the future of artificial intelligence',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Quantum-Enhanced Neural Networks',
          description: 'Breakthrough AI systems that leverage quantum computing principles for unprecedented processing power.',
          features: ['10,000x faster processing'99.9% accuracy'Real-time learning'],
          image: '/api/placeholder/400/300',
          category: 'AI Technology'
        },
        {
          title: 'Consciousness-Level AI Systems',
          description: 'AI that demonstrates genuine understanding and reasoning capabilities beyond current limitations.',
          features: ['Self-aware processing'Emotional intelligence'Creative problem solving'],
          image: '/api/placeholder/400/300',
          category: 'Advanced AI'
        },
        {
          title: 'Autonomous Business Orchestration',
          description: 'AI systems that can independently manage entire business operations with minimal human oversight.',
          features: ['End-to-end automation'Strategic decision making'Resource optimization'],
          image: '/api/placeholder/400/300',
          category: 'Business AI'
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Breakthroughs',
      subtitle: 'Unlock the power of quantum mechanics',
      icon: Zap,
      color: 'from-cyan-600 to-teal-600',
      content: [
        {
          title: 'Fault-Tolerant Quantum Computers',
          description: 'Stable quantum systems ready for commercial deployment and real-world applications.',
          features: ['Error correction'Scalable architecture'Commercial viability'],
          image: '/api/placeholder/400/300',
          category: 'Quantum Tech'
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Machine learning algorithms that exploit quantum superposition for exponential speedups.',
          features: ['Exponential speedup'Pattern recognition'Optimization'],
          image: '/api/placeholder/400/300',
          category: 'Quantum ML'
        },
        {
          title: 'Quantum Internet Infrastructure',
          description: 'Global quantum communication networks enabling ultra-secure data transmission.',
          features: ['Quantum encryption'Global connectivity'Unhackable security'],
          image: '/api/placeholder/400/300',
          category: 'Quantum Networks'
        }
      ]
    },
    'neural-interfaces': {
      title: 'Neural Interface Revolution',
      subtitle: 'Direct brain-computer integration',
      icon: Target,
      color: 'from-pink-600 to-rose-600',
      content: [
        {
          title: 'Non-Invasive Brain-Computer Interfaces',
          description: 'Advanced neural interfaces that enable direct thought-to-computer communication.',
          features: ['Thought control'Real-time translation'Enhanced cognition'],
          image: '/api/placeholder/400/300',
          category: 'Neural Tech'
        },
        {
          title: 'Memory Enhancement Systems',
          description: 'Technology that can augment and improve human memory capabilities.',
          features: ['Memory augmentation'Learning acceleration'Cognitive enhancement'],
          image: '/api/placeholder/400/300',
          category: 'Cognitive Enhancement'
        },
        {
          title: 'Emotional AI Integration',
          description: 'AI systems that can read and respond to human emotions in real-time.',
          features: ['Emotion recognition'Empathetic responses'Personalized interactions'],
          image: '/api/placeholder/400/300',
          category: 'Emotional AI'
        }
      ]
    },
    'future-predictions': {
      title: '2030-2035 Future Predictions',
      subtitle: 'Glimpse into the next decade',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Singularity Timeline Predictions',
          description: 'Comprehensive analysis of when artificial general intelligence will be achieved.',
          features: ['Timeline analysis'Impact assessment'Preparation strategies'],
          image: '/api/placeholder/400/300',
          category: 'Future Studies'
        },
        {
          title: 'Post-Human Society Models',
          description: 'Detailed projections of how society will evolve with advanced AI and human enhancement.',
          features: ['Social structures'Economic models'Cultural evolution'],
          image: '/api/placeholder/400/300',
          category: 'Sociology'
        },
        {
          title: 'Interplanetary AI Networks',
          description: 'AI systems designed to operate across multiple planets and space environments.',
          features: ['Space adaptation'Multi-planetary coordination'Autonomous exploration'],
          image: '/api/placeholder/400/300',
          category: 'Space AI'
        }
      ]
    }
  };

  const tabs = [
    { id: 'ai-innovations'label: 'AI Innovations'icon: Brain },
    { id: 'quantum-computing'label: 'Quantum Computing'icon: Zap },
    { id: 'neural-interfaces'label: 'Neural Interfaces'icon: Target },
    { id: 'future-predictions'label: 'Future Predictions'icon: Rocket }
  ];

  const currentSection = contentSections[activeTab as keyof typeof contentSections];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>2028 Ultimate Technology Showcase</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}Here
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore revolutionary technologies that will reshape our world in the coming decade. 
            From quantum computing to neural interfacesdiscover what's possible.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>100+ Technologies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Interactive Demos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Expert Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Future Predictions</span>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0y: 30 }}
            animate={{ opacity: 1y: 0 }}
            exit={{ opacity: 0y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
                <currentSection.icon className="w-4 h-4" />
                <span>{currentSection.title}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {currentSection.title}
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {currentSection.subtitle}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentSection.content.map((itemindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0y: 30 }}
                  animate={{ opacity: 1y: 0 }}
                  transition={{ duration: 0.5delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Category Badge */}
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>

                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <currentSection.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm text-gray-400">Interactive Demo</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <span>Explore</span>
                    </button>
                    <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Shape the Future?
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovatorsresearchersand visionaries who are already 
            building the technologies of tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <Rocket className="w-5 h-5" />
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              <span>Join Community</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Industry Recognition</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Secure Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Global Community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2028;