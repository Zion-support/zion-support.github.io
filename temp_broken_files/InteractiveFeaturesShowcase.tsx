const InteractiveFeaturesShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
      {/* Animated Background */}
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