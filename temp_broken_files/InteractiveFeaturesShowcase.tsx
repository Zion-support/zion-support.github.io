<<<<<<< HEAD:temp_broken_files/InteractiveFeaturesShowcase.tsx
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

>>>>>>> origin/merge-new-content-1757989975:src/components/InteractiveFeaturesShowcase.tsx
const InteractiveFeaturesShowcase: React.FC = () => {
<<<<<<< HEAD:src/components/InteractiveFeaturesShowcase.tsx
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Real-time AI Processing",
      description: "Experience lightning-fast AI responses with our advanced real-time processing capabilities.",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500",
      benefits: [
        "Instant Response Times",
        "Low Latency Processing",
        "High Throughput",
        "Scalable Architecture"
      ],
      demo: "Try our live AI chat demo",
      stats: "< 100ms response time"
    },
    {
      id: 2,
      title: "Interactive 3D Visualization",
      description: "Explore complex data and concepts through immersive 3D visualizations and interactive models.",
      icon: "🎮",
      gradient: "from-purple-500 to-pink-500",
      benefits: [
        "Immersive Experience",
        "Data Exploration",
        "Interactive Models",
        "VR/AR Ready"
      ],
      demo: "Launch 3D demo",
      stats: "60fps rendering"
    },
    {
      id: 3,
      title: "Voice-Controlled Interface",
      description: "Control and interact with our systems using natural voice commands and conversational AI.",
      icon: "🎤",
      gradient: "from-blue-500 to-cyan-500",
      benefits: [
        "Natural Language",
        "Voice Recognition",
        "Conversational AI",
        "Hands-free Operation"
      ],
      demo: "Start voice demo",
      stats: "99% accuracy"
    },
    {
      id: 4,
      title: "Gesture Recognition",
      description: "Control applications using hand gestures and body movements for intuitive interaction.",
      icon: "👋",
      gradient: "from-green-500 to-emerald-500",
      benefits: [
        "Intuitive Control",
        "Gesture Learning",
        "Accessibility",
        "Multi-modal Input"
      ],
      demo: "Try gesture control",
      stats: "95% recognition rate"
    },
    {
      id: 5,
      title: "Predictive Analytics",
      description: "Get insights and predictions about future trends and behaviors using advanced analytics.",
      icon: "📊",
      gradient: "from-indigo-500 to-purple-500",
      benefits: [
        "Future Insights",
        "Trend Analysis",
        "Risk Assessment",
        "Strategic Planning"
      ],
      demo: "View predictions",
      stats: "92% accuracy"
    },
    {
      id: 6,
      title: "Collaborative Workspace",
      description: "Work together with AI assistants and team members in a shared virtual workspace.",
      icon: "🤝",
      gradient: "from-red-500 to-pink-500",
      benefits: [
        "Team Collaboration",
        "AI Assistance",
        "Real-time Sync",
        "Shared Resources"
      ],
      demo: "Join workspace",
      stats: "Unlimited users"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

=======
>>>>>>> a3aa2270f64b00bcf9625ddaf5e75bbefecd3146:temp_broken_files/InteractiveFeaturesShowcase.tsx
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
      {/* Animated Background */}
<<<<<<< HEAD:src/components/InteractiveFeaturesShowcase.tsx
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Header */}
=======
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.1s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
>>>>>>> a3aa2270f64b00bcf9625ddaf5e75bbefecd3146:temp_broken_files/InteractiveFeaturesShowcase.tsx
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 INTERACTIVE FEATURES SHOWCASE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Revolutionary Interactive Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto"
          >
            Experience the future of human-computer interaction with our cutting-edge interactive features
          </motion.p>
        </div>
<<<<<<< HEAD:src/components/InteractiveFeaturesShowcase.tsx

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
=======
        {/* Main Feature Showcase */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-2xl">
              <div
                key={activeFeature}
                className={`bg-gradient-to-br ${currentFeature.gradient} p-12 rounded-2xl relative overflow-hidden`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Interactive Background Effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-bounce" />
                </div>
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-6xl">{currentFeature.icon}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold">{currentFeature.demo.status}</span>
                      </div>
                    </div>
                    <h3 className="text-4xl font-bold mb-6">{currentFeature.title}</h3>
                    <p className="text-xl opacity-90 mb-8">{currentFeature.description}</p>
                    <div className="grid grid-cols-1 gap-4 mb-8">
                      {currentFeature.demo.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="font-semibold">{metric}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4">
<<<<<<< HEAD:temp_broken_files/InteractiveFeaturesShowcase.tsx
                      <divbutton
                        className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                      >
                        Try Interactive Demo →
                      </divbutton>
                      <divbutton
                        className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                      >
                        Learn More
                      </divbutton>
=======
                      <button
                        className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                      >
                        Try Interactive Demo →
                      </button>
                      <button
                        className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                      >
                        Learn More
                      </button>
>>>>>>> origin/merge-new-content-1757989975:src/components/InteractiveFeaturesShowcase.tsx
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                      <h4 className="text-2xl font-bold mb-6 text-center">Live Demo</h4>
                      {/* Interactive Demo Area */}
                      <div className="relative h-64 bg-gradient-to-br from-white/20 to-white/10 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl animate-spin">
                            {currentFeature.icon}
                          </div>
                        </div>
                        {/* Animated Elements */}
                        <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
                        {/* Data Visualization */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-2">
                            {[...Array(9)].map((_, i) => (
                              <div
                                key={i}
                                className="w-4 h-4 bg-white/30 rounded"
                                  scale: [1, 1.5, 1],
                                  opacity: [0.3, 1, 0.3]
                                }}
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.1
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <div className="text-sm opacity-80 mb-2">Interactive Status</div>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold">Active & Responsive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Controls */}
          <button
            onClick={() => setActiveFeature((prev) => (prev - 1 + features.length) % features.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveFeature((prev) => (prev + 1) % features.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
>>>>>>> a3aa2270f64b00bcf9625ddaf5e75bbefecd3146:temp_broken_files/InteractiveFeaturesShowcase.tsx
              key={feature.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                hoveredCard === feature.id ? 'shadow-2xl shadow-purple-500/20 border-purple-400/50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveFeature(index)}
            >
              <div className="text-center mb-6">
                <div className={`text-6xl mb-4 transition-transform duration-300 ${
                  hoveredCard === feature.id ? 'scale-110 rotate-12' : ''
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-purple-100 mb-4 leading-relaxed">
                  {feature.description}
                </p>
              </div>
<<<<<<< HEAD:src/components/InteractiveFeaturesShowcase.tsx

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                    <span className="text-purple-400">✓</span>
                    <span className="text-purple-200 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2 text-green-300">
                  <span className="text-lg">📈</span>
                  <span className="font-semibold">{feature.stats}</span>
                </div>
              </div>

              {/* Demo Button */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold w-full group-hover:scale-105">
                  {feature.demo} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Feature Detail */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {features[activeFeature].title}
              </h3>
              <p className="text-xl text-purple-100 mb-6 leading-relaxed">
                {features[activeFeature].description}
              </p>
              
              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                <div className="grid grid-cols-2 gap-3">
                  {features[activeFeature].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-purple-400">⚡</span>
                      <span className="text-purple-200 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  {features[activeFeature].demo} →
                </button>
                <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className={`text-9xl mb-6 animate-bounce bg-gradient-to-r ${features[activeFeature].gradient} bg-clip-text text-transparent`}>
                {features[activeFeature].icon}
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-300 mb-2">
                  {features[activeFeature].stats}
                </div>
                <div className="text-green-200">Performance Metric</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Try Our Interactive Features
            </h3>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Experience our revolutionary interactive features in real-time with these live demonstrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎤</div>
              <h4 className="text-xl font-semibold mb-3 text-white">Voice Demo</h4>
              <p className="text-cyan-200 mb-4">Try our voice-controlled interface</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Voice Demo
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👋</div>
              <h4 className="text-xl font-semibold mb-3 text-white">Gesture Demo</h4>
              <p className="text-cyan-200 mb-4">Control with hand gestures</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Gestures
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-xl font-semibold mb-3 text-white">3D Demo</h4>
              <p className="text-cyan-200 mb-4">Explore 3D visualizations</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Launch 3D
              </button>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
              Join us in exploring these revolutionary interactive features and discover how they can transform your digital experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg">
                🚀 Start Your Journey
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                📞 Contact Us
              </button>
            </div>
          </div>
        </motion.div>
=======
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-sm opacity-90 mb-4">{feature.description}</p>
              <div className="space-y-2 mb-4">
                {feature.demo.metrics.slice(0, 2).map((metric, i) => (
                  <div key={i} className="text-xs bg-white/20 rounded px-2 py-1 text-center">
                    {metric}
                  </div>
                ))}
              </div>
<<<<<<< HEAD:temp_broken_files/InteractiveFeaturesShowcase.tsx
              <divbutton
                className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-sm"
              >
                Try Demo
              </divbutton>
=======
              
              <button
                className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-sm"
              >
                Try Demo
              </button>
>>>>>>> origin/merge-new-content-1757989975:src/components/InteractiveFeaturesShowcase.tsx
            </div>
          ))}
        </div>
        {/* Feature Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeFeature ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
>>>>>>> a3aa2270f64b00bcf9625ddaf5e75bbefecd3146:temp_broken_files/InteractiveFeaturesShowcase.tsx
      </div>
    </div>
  );
};


export default InteractiveFeaturesShowcase;
</div></div></div></div></div></div></div>
</p></p>