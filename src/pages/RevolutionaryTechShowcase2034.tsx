import React from 'react';

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Experience the Future Today
            </h2>
            <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
              Step into the most advanced technology showcase ever created and witness the future of human-AI collaboration
            </p>
          </motion.div>

          {/* Interactive Demo Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => handleDemoChange(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentDemo === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>

          {/* Demo Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            {demos[currentDemo] && (
              <motion.div
                key={currentDemo}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-8xl mb-6">{demos[currentDemo].icon}</div>
                <h2 className="text-4xl font-bold mb-4">{demos[currentDemo].title}</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                  {demos[currentDemo].description}
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {demos[currentDemo].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6">Demo Statistics</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Innovation Level</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full" style={{width: '95%'}}></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>User Engagement</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '98%'}}></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Revolutionary Impact</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-pink-400 to-red-400 h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6">Interactive Demo</h3>
                      <p className="text-lg opacity-90 mb-6">
                        Experience this revolutionary technology through our interactive demonstration
                      </p>
                      <div className="space-y-4">
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform">
                          Start Interactive Demo
                        </button>
                        <button className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the technological revolution and be part of the most advanced showcase of human innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-8 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                Start Your Journey
              </button>
              <button className="bg-white/10 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2034;