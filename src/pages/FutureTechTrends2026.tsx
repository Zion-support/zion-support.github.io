import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const FutureTechTrends2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🔮 FUTURE TECH TRENDS 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            The Future is Here
          </h1>
          <p className="text-2xl text-cyan-200 max-w-4xl mx-auto">
            Discover the revolutionary technology trends that will shape our world in 2026 and beyond.
          </p>
        </div>

        {/* Trending Technologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Autonomous AI Agents</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Self-managing AI systems that operate independently and make complex decisions
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-cyan-200">Market Growth</span>
                <span className="text-white font-semibold">+450%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-cyan-200">Adoption Rate</span>
                <span className="text-white font-semibold">78%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-cyan-200">ROI</span>
                <span className="text-white font-semibold">340%</span>
              </div>
            </div>
            <a href="/pages/AutonomousAI2026" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Autonomous AI →
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Synthetic Biology</h3>
            <p className="text-purple-100 mb-6 text-center">
              Engineering biological systems for enhanced human capabilities and sustainability
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-200">Market Growth</span>
                <span className="text-white font-semibold">+280%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-200">Adoption Rate</span>
                <span className="text-white font-semibold">45%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-200">ROI</span>
                <span className="text-white font-semibold">520%</span>
              </div>
            </div>
            <a href="/pages/SyntheticBiology2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Discover Synthetic Biology →
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Climate Tech</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Revolutionary technologies to combat climate change and ensure sustainability
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-200">Market Growth</span>
                <span className="text-white font-semibold">+320%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-200">Adoption Rate</span>
                <span className="text-white font-semibold">92%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-200">ROI</span>
                <span className="text-white font-semibold">280%</span>
              </div>
            </div>
            <a href="/pages/ClimateTech2026" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Save the Planet →
            </a>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Space Economy</h3>
            <p className="text-orange-100 mb-6 text-center">
              Commercial space exploration and interplanetary resource utilization
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-orange-200">Market Growth</span>
                <span className="text-white font-semibold">+680%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-orange-200">Adoption Rate</span>
                <span className="text-white font-semibold">23%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-orange-200">ROI</span>
                <span className="text-white font-semibold">890%</span>
              </div>
            </div>
            <a href="/pages/SpaceEconomy2026" className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Reach for the Stars →
            </a>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Predictive Intelligence</h3>
            <p className="text-indigo-100 mb-6 text-center">
              AI systems that predict future events with unprecedented accuracy
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-200">Market Growth</span>
                <span className="text-white font-semibold">+390%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-200">Adoption Rate</span>
                <span className="text-white font-semibold">67%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-200">ROI</span>
                <span className="text-white font-semibold">450%</span>
              </div>
            </div>
            <a href="/pages/PredictiveIntelligence2026" className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Predict the Future →
            </a>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Web4.0</h3>
            <p className="text-pink-100 mb-6 text-center">
              The next evolution of the internet with immersive and intelligent experiences
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-pink-200">Market Growth</span>
                <span className="text-white font-semibold">+560%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-pink-200">Adoption Rate</span>
                <span className="text-white font-semibold">84%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-pink-200">ROI</span>
                <span className="text-white font-semibold">380%</span>
              </div>
            </div>
            <a href="/pages/Web4_2026" className="block w-full bg-white text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center">
              Enter Web4.0 →
            </a>
          </div>
        </div>

        {/* Technology Impact Timeline */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">📅 Technology Impact Timeline</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              See how these technologies will transform our world over the next decade
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2026
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">AI Consciousness Emerges</h3>
                <p className="text-cyan-200">
                  First AI systems achieve a form of digital consciousness, revolutionizing human-AI interaction and collaboration.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2027
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Quantum Internet</h3>
                <p className="text-cyan-200">
                  Quantum internet infrastructure becomes commercially available, enabling ultra-secure communication and computing.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2028
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Neural Enhancement</h3>
                <p className="text-cyan-200">
                  Direct neural interfaces become mainstream, enhancing human cognitive abilities and enabling thought-based control.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2029
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Mars Colonization</h3>
                <p className="text-cyan-200">
                  First permanent human settlement on Mars, marking the beginning of interplanetary civilization.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2030
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Singularity</h3>
                <p className="text-cyan-200">
                  Technological singularity is achieved, marking the point where AI surpasses human intelligence in all domains.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">📊 Market Insights</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-lg">Total Market Value</span>
                <span className="text-white text-2xl font-bold">$12.8T</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-lg">Growth Rate</span>
                <span className="text-white text-2xl font-bold">+340%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-lg">Job Creation</span>
                <span className="text-white text-2xl font-bold">45M+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-lg">Investment</span>
                <span className="text-white text-2xl font-bold">$2.1T</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">🎯 Key Opportunities</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-cyan-200">AI-powered automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-cyan-200">Quantum computing applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-cyan-200">Neural interface development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-cyan-200">Space technology commercialization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-cyan-200">Climate tech solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Ahead of the Future</h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            Don't get left behind. Join the technological revolution and shape the future with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </a>
            <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold text-lg">
              Learn More
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FutureTechTrends2026;