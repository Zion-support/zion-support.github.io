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
  Layers,
  Network,
  Activity,
  Code,
  Microscope
} from 'lucide-react';

const EmergingTechTrends2025: React.FC = () => {
  const [activeTrend, setActiveTrend] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const emergingTrends = [
    {
      icon: Brain,
      title: 'Artificial General Intelligence (AGI)',
      description: 'The next frontier in AI development, moving beyond narrow AI to systems that can understand, learn, and apply knowledge across diverse domains.',
      timeline: '2025-2027',
      impact: 'Revolutionary',
      keyPoints: [
        'Multi-modal learning capabilities',
        'Reasoning across different domains',
        'Human-level cognitive abilities',
        'Autonomous problem-solving'
      ],
      applications: ['Scientific Research', 'Creative Industries', 'Complex Decision Making', 'Education'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Quantum Computing at Scale',
      description: 'Practical quantum computing solutions becoming commercially viable for real-world applications and problem-solving.',
      timeline: '2025-2026',
      impact: 'Transformative',
      keyPoints: [
        'Error-corrected quantum processors',
        'Quantum advantage in optimization',
        'Quantum machine learning',
        'Quantum cryptography'
      ],
      applications: ['Drug Discovery', 'Financial Modeling', 'Climate Simulation', 'Cryptography'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces enabling seamless interaction between human consciousness and digital systems.',
      timeline: '2025-2028',
      impact: 'Revolutionary',
      keyPoints: [
        'Thought-controlled devices',
        'Enhanced cognitive abilities',
        'Medical rehabilitation',
        'Augmented reality integration'
      ],
      applications: ['Healthcare', 'Gaming', 'Accessibility', 'Military'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Digital Twin Ecosystems',
      description: 'Comprehensive digital replicas of physical systems, processes, and environments for simulation and optimization.',
      timeline: '2025-2027',
      impact: 'High',
      keyPoints: [
        'Real-time synchronization',
        'Predictive analytics',
        'Virtual testing environments',
        'IoT integration'
      ],
      applications: ['Manufacturing', 'Smart Cities', 'Healthcare', 'Energy Systems'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Post-Quantum Cryptography',
      description: 'Cryptographic systems resistant to quantum computer attacks, ensuring future-proof security.',
      timeline: '2025-2026',
      impact: 'Critical',
      keyPoints: [
        'Quantum-resistant algorithms',
        'Migration strategies',
        'Hybrid security models',
        'Standardization efforts'
      ],
      applications: ['Government', 'Financial Services', 'Healthcare', 'Critical Infrastructure'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: '6G Network Technology',
      description: 'Next-generation wireless networks providing ultra-low latency and massive connectivity for IoT and immersive experiences.',
      timeline: '2026-2030',
      impact: 'Transformative',
      keyPoints: [
        'Terahertz frequency bands',
        'AI-native networks',
        'Holographic communications',
        'Ubiquitous connectivity'
      ],
      applications: ['Autonomous Vehicles', 'AR/VR', 'Smart Cities', 'Industrial IoT'],
      color: 'from-cyan-500 to-teal-500'
    }
  ];

  const industryImpact = [
    {
      industry: 'Healthcare',
      trends: ['AI Drug Discovery', 'Precision Medicine', 'Telemedicine 2.0', 'Digital Therapeutics'],
      timeline: '2025-2027',
      investment: '$50B+'
    },
    {
      industry: 'Finance',
      trends: ['Quantum Trading', 'AI Risk Management', 'Digital Currencies', 'RegTech Solutions'],
      timeline: '2025-2026',
      investment: '$30B+'
    },
    {
      industry: 'Manufacturing',
      trends: ['Smart Factories', 'Autonomous Production', 'Predictive Maintenance', 'Supply Chain AI'],
      timeline: '2025-2027',
      investment: '$40B+'
    },
    {
      industry: 'Transportation',
      trends: ['Autonomous Vehicles', 'Flying Cars', 'Hyperloop Systems', 'Smart Traffic'],
      timeline: '2025-2030',
      investment: '$100B+'
    }
  ];

  const investmentLandscape = [
    { category: 'AI & Machine Learning', amount: '$150B', growth: '+35%', companies: '2,500+' },
    { category: 'Quantum Computing', amount: '$25B', growth: '+80%', companies: '200+' },
    { category: 'Cybersecurity', amount: '$45B', growth: '+25%', companies: '1,800+' },
    { category: 'IoT & Edge Computing', amount: '$60B', growth: '+30%', companies: '3,200+' },
    { category: 'Blockchain & Web3', amount: '$20B', growth: '+40%', companies: '1,500+' },
    { category: 'AR/VR & Metaverse', amount: '$35B', growth: '+45%', companies: '1,200+' }
  ];

  const futurePredictions = [
    {
      year: '2025',
      prediction: 'AGI prototypes demonstrate human-level reasoning in specific domains',
      probability: '75%',
      impact: 'High'
    },
    {
      year: '2026',
      prediction: 'Quantum computers solve practical optimization problems at scale',
      probability: '60%',
      impact: 'Revolutionary'
    },
    {
      year: '2027',
      prediction: 'Neural interfaces enable thought-controlled computing devices',
      probability: '40%',
      impact: 'Transformative'
    },
    {
      year: '2028',
      prediction: 'Digital twins become standard for all major infrastructure',
      probability: '80%',
      impact: 'High'
    },
    {
      year: '2030',
      prediction: '6G networks enable ubiquitous holographic communications',
      probability: '50%',
      impact: 'Revolutionary'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-indigo-300">Emerging Tech Trends</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#trends" className="hover:text-indigo-400 transition-colors">Trends</a>
            <a href="#industries" className="hover:text-indigo-400 transition-colors">Industries</a>
            <a href="#investment" className="hover:text-indigo-400 transition-colors">Investment</a>
            <a href="#predictions" className="hover:text-indigo-400 transition-colors">Predictions</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Explore Trends
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-300">Future Technology Report</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tech Trends 2025
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Discover the emerging technologies that will reshape industries and transform 
            the way we live, work, and interact in the coming years.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Report</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Download PDF
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Emerging Trends Section */}
      <section id="trends" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Emerging <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The most promising technologies that will define the next decade of innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {emergingTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${trend.color} rounded-xl flex items-center justify-center`}>
                    <trend.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold">
                      {trend.timeline}
                    </span>
                    <div className="mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        trend.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                        trend.impact === 'Transformative' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {trend.impact}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{trend.title}</h3>
                <p className="text-gray-300 mb-6">{trend.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Developments:</h4>
                  <ul className="space-y-2">
                    {trend.keyPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-indigo-400" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trend.applications.map((app, appIndex) => (
                      <span key={appIndex} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact Section */}
      <section id="industries" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Transformation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How emerging technologies are reshaping major industries and creating new opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryImpact.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold">{industry.industry}</h3>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-400">{industry.investment}</div>
                    <div className="text-sm text-gray-400">{industry.timeline}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Trends:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.trends.map((trend, trendIndex) => (
                      <div key={trendIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">{trend}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Landscape Section */}
      <section id="investment" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Landscape</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The massive investment flowing into emerging technologies and the companies driving innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentLandscape.map((investment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{investment.category}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Investment:</span>
                    <span className="text-2xl font-bold text-cyan-400">{investment.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Growth:</span>
                    <span className="text-green-400 font-semibold">{investment.growth}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Companies:</span>
                    <span className="text-blue-400 font-semibold">{investment.companies}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Predictions Section */}
      <section id="predictions" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Predictions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert predictions about the timeline and impact of emerging technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futurePredictions.map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-purple-400">{prediction.year}</h3>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                    {prediction.probability}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{prediction.prediction}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Impact:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    prediction.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                    prediction.impact === 'Transformative' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {prediction.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join our research program to get early access to emerging technologies and strategic insights
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Join Research Program
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Subscribe to Updates
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Emerging Tech Trends</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Shaping the future through innovation.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmergingTechTrends2025;