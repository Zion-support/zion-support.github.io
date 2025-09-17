import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NewShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-900 via-violet-900 to-purple-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-fuchsia-400 to-violet-500 text-white rounded-full text-sm font-semibold mb-6">
            🌟 AUTONOMOUS AI SHOWCASE 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Autonomous AI Systems 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the future of autonomous artificial intelligence systems that operate independently, 
            make complex decisions, and continuously evolve to solve real-world challenges.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Autonomous AI
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-fuchsia-900 transition-colors">
              Watch AI Demo
            </button>
          </div>
        </div>

        {/* Autonomous AI Capabilities */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Self-Learning Systems</h3>
            <p className="text-gray-300 mb-6">
              AI systems that continuously learn and adapt without human intervention, 
              improving their performance over time through experience and feedback.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Reinforcement learning</li>
              <li>• Unsupervised adaptation</li>
              <li>• Meta-learning algorithms</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Decision Making</h3>
            <p className="text-gray-300 mb-6">
              Advanced AI systems that can analyze complex situations, weigh multiple factors, 
              and make optimal decisions in real-time without human oversight.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Multi-objective optimization</li>
              <li>• Risk assessment</li>
              <li>• Ethical decision frameworks</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold text-white mb-4">Self-Healing Architecture</h3>
            <p className="text-gray-300 mb-6">
              AI systems that can detect, diagnose, and repair their own issues, 
              ensuring continuous operation and optimal performance.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Automated error detection</li>
              <li>• Self-repair mechanisms</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
        </div>

        {/* Autonomous Applications */}
        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Autonomous AI Applications</h2>
            <p className="text-xl text-violet-100">Revolutionary AI systems operating independently across industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🚗</div>
              <h4 className="text-lg font-semibold text-white mb-2">Autonomous Vehicles</h4>
              <p className="text-violet-100 text-sm">Self-driving cars with advanced AI navigation and safety systems</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="text-lg font-semibold text-white mb-2">Smart Manufacturing</h4>
              <p className="text-violet-100 text-sm">Autonomous production lines with self-optimizing processes</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg font-semibold text-white mb-2">Autonomous Healthcare</h4>
              <p className="text-violet-100 text-sm">AI systems for diagnosis, treatment, and patient monitoring</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="text-lg font-semibold text-white mb-2">Autonomous Networks</h4>
              <p className="text-violet-100 text-sm">Self-managing network infrastructure with intelligent routing</p>
            </div>
          </div>
        </div>

        {/* AI Evolution Timeline */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Evolution Journey</h2>
            <p className="text-xl text-gray-600">From rule-based systems to fully autonomous AI</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1.0
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rule-Based AI</h3>
              <p className="text-gray-600">Simple if-then logic systems with predefined rules and responses</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2.0
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600">Statistical models that learn patterns from data and make predictions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3.0
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deep Learning</h3>
              <p className="text-gray-600">Neural networks that can process complex data and recognize patterns</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4.0
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous AI</h3>
              <p className="text-gray-600">Self-managing systems that operate independently and evolve continuously</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Autonomous AI Technology Stack</h2>
            <p className="text-xl text-fuchsia-100">Cutting-edge technologies powering autonomous AI systems</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                🧠
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Neural Networks</h4>
              <p className="text-fuchsia-100 text-sm">Advanced deep learning architectures for complex pattern recognition</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                🎯
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Reinforcement Learning</h4>
              <p className="text-fuchsia-100 text-sm">AI systems that learn through trial and error interactions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                🔄
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Meta-Learning</h4>
              <p className="text-fuchsia-100 text-sm">AI that learns how to learn, adapting to new tasks quickly</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                🌐
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Distributed AI</h4>
              <p className="text-fuchsia-100 text-sm">Coordinated AI systems working together across networks</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Autonomous AI Success Stories</h2>
            <p className="text-xl text-gray-600">Real-world implementations delivering measurable results</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-fuchsia-50 to-violet-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Supply Chain</h3>
                <p className="text-gray-600 mb-4">AI system reduced inventory costs by 40% and improved delivery times by 60% through autonomous optimization.</p>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">40% Cost Reduction</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">60% Faster Delivery</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Customer Service</h3>
                <p className="text-gray-600 mb-4">AI system handles 90% of customer inquiries autonomously with 95% satisfaction rate.</p>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">90% Automation</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">95% Satisfaction</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready for Autonomous AI?</h3>
              <p className="text-gray-600 mb-6">
                Partner with Zion Tech Group to deploy autonomous AI systems that operate independently, 
                continuously learn, and deliver exceptional results.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Deploy Autonomous AI
                </button>
                <button className="w-full border border-fuchsia-600 text-fuchsia-600 py-3 rounded-lg hover:bg-fuchsia-50 transition-colors">
                  Download AI Strategy Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">85%</div>
            <div className="text-gray-300">Task Automation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">System Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">70%</div>
            <div className="text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Autonomous Operation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Future with Autonomous AI</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the autonomous AI revolution with Zion Tech Group's cutting-edge systems that operate independently, 
            learn continuously, and deliver unprecedented results.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Deploy Autonomous AI Today
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-fuchsia-900 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewShowcase2025;