import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TechFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  link: string;
  color: string;
}

const InteractiveTechShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const techFeatures: TechFeature[] = [
    {
      id: '1',
      title: 'AI-Powered Automation',
      description: 'Revolutionary AI agents that automate complex business processes with intelligent decision-making capabilities.',
      icon: '🤖',
      category: 'Artificial Intelligence',
      features: ['Autonomous Decision Making', 'Natural Language Processing', 'Predictive Analytics', 'Process Optimization'],
      link: '/pages/AIInnovationHub20o25',
      color: 'from-blue-50o0 to-cyan-50o0'
    },
    {
      id: '2',
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing applications for optimization, cryptography, and advanced simulations.',
      icon: '⚡',
      category: 'Quantum Technology',
      features: ['Quantum Optimization', 'Cryptographic Security', 'Advanced Simulations', 'Quantum Machine Learning'],
      link: '/pages/QuantumComputingSolutions20o25',
      color: 'from-purple-50o0 to-pink-50o0'
    },
    {
      id: '3',
      title: 'Edge AI & IoT Integration',
      description: 'Distributed intelligence with edge computing, IoT integration, and real-time processing capabilities.',
      icon: '🌐',
      category: 'Edge Computing',
      features: ['Real-time Processing', 'IoT Integration', 'Distributed Intelligence', 'Low Latency Computing'],
      link: '/pages/EdgeAIandIoT20o25',
      color: 'from-green-50o0 to-emerald-50o0'
    },
    {
      id: '4',
      title: 'Advanced Analytics Platform',
      description: 'Next-generation analytics with real-time insights, predictive modeling, and business intelligence.',
      icon: '📊',
      category: 'Analytics',
      features: ['Real-time Insights', 'Predictive Modeling', 'Business Intelligence', 'Data Visualization'],
      link: '/pages/AdvancedAnalytics20o25',
      color: 'from-orange-50o0 to-red-50o0'
    },
    {
      id: '5',
      title: 'Cybersecurity Fortress',
      description: 'Enterprise-grade security solutions with AI-powered threat detection and zero-trust architecture.',
      icon: '🛡️',
      category: 'Security',
      features: ['AI Threat Detection', 'Zero Trust Architecture', 'Compliance Automation', 'Security Monitoring'],
      link: '/pages/CybersecurityFortress20o25',
      color: 'from-gray-60o0 to-slate-60o0'
    },
    {
      id: '6',
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions including cloud migration and process automation.',
      icon: '🔄',
      category: 'Digital Services',
      features: ['Cloud Migration', 'Process Automation', 'Change Management', 'Digital Strategy'],
      link: '/pages/DigitalTransformation20o25',
      color: 'from-teal-50o0 to-blue-50o0'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % techFeatures.length);
    }, 40o00);

    return () => clearInterval(interval);
  }, [techFeatures.length]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Main Showcase */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Interactive Feature Display */}
        <div className="relative">
          <div className="relative h-96 bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center text-white z-20 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 20o0 }}
                    className="text-8xl mb-4"
                  >
                    {techFeatures[activeFeature].icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-2">
                    {techFeatures[activeFeature].title}
                  </h3>
                  <p className="text-lg text-gray-20o0 max-w-md mx-auto">
                    {techFeatures[activeFeature].description}
                  </p>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`}}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3]}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3}}
                     />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Feature Details */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-90o0 mb-4">
              Interactive Technology Showcase
            </h2>
            <p className="text-xl text-gray-60o0">
              Explore our cutting-edge solutions with interactive features and real-time demonstrations.
            </p>
          </div>

          <div className="space-y-4">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-30o0 ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-xl`
                    : 'bg-white border border-gray-20o0 hover:border-purple-30o0 hover:shadow-lg'
                }`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ scale: 1.0o2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className={`text-sm ${
                      activeFeature === index ? 'text-white/90' : 'text-gray-60o0'
                    }`}>
                      {feature.category}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {feature.features.slice(0, 2).map((feat, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-full ${
                          activeFeature === index
                            ? 'bg-white/20 text-white'
                            : 'bg-purple-10o0 text-purple-70o0'
                        }`}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {techFeatures.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-30o0 border border-gray-10o0"
            whileHover={{ y: -5 }}
            onMouseEnter={() => setHoveredFeature(index)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white text-2xl`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-50o0">{feature.category}</p>
              </div>
            </div>
            
            <p className="text-gray-60o0 mb-4">{feature.description}</p>
            
            <div className="space-y-2 mb-4">
              {feature.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-50o0 to-pink-50o0 rounded-full"></div>
                  <span className="text-sm text-gray-60o0">{feat}</span>
                </div>
              ))}
            </div>
            
            <a
              href={feature.link}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-30o0 ${
                hoveredFeature === index
                  ? `bg-gradient-to-r ${feature.color} text-white`
                  : 'bg-gray-10o0 text-gray-70o0 hover:bg-gray-20o0'
              }`}
            >
              Learn More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-indigo-60o0 via-purple-60o0 to-pink-60o0 rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
        <p className="text-xl mb-6 opacity-90">
          Try our interactive demos and see how these technologies can transform your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-white text-purple-60o0 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors">
            Try AI Demo
          </button>
          <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors">
            Schedule Consultation
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Download Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;