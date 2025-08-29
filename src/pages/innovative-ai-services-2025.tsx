import React from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight, Brain, Rocket, Users, Zap, Shield, TrendingUp, Code, Database, Cpu, Target, Globe, Heart, Leaf, Star } from 'lucide-react';

export default function InnovativeAIServices2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative AI Services 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI services for 2025. Next-generation solutions that push the boundaries of what's possible with artificial intelligence."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Cutting-Edge AI Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative AI Services
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of artificial intelligence with our groundbreaking services. 
              From autonomous systems to creative AI, we're redefining what's possible in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                Explore Innovation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Innovations
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Breakthrough technologies that will transform industries in 2025 and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Autonomous AI Systems */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous AI Systems</h3>
              <p className="text-gray-400 mb-4">
                Self-learning systems that operate independently and adapt to changing environments.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Self-Driving Vehicles</div>
                <div>• Autonomous Drones</div>
                <div>• Smart Robotics</div>
                <div>• Adaptive Networks</div>
              </div>
            </div>

            {/* Creative AI */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-pink-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Creative AI</h3>
              <p className="text-gray-400 mb-4">
                AI systems that generate art, music, literature, and creative content.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• AI Art Generation</div>
                <div>• Music Composition</div>
                <div>• Creative Writing</div>
                <div>• Design Automation</div>
              </div>
            </div>

            {/* Emotional Intelligence AI */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Emotional Intelligence AI</h3>
              <p className="text-gray-400 mb-4">
                AI systems that understand and respond to human emotions and social cues.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Emotion Recognition</div>
                <div>• Sentiment Analysis</div>
                <div>• Social AI Assistants</div>
                <div>• Mental Health Support</div>
              </div>
            </div>

            {/* Quantum AI */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum AI</h3>
              <p className="text-gray-400 mb-4">
                AI algorithms running on quantum computers for unprecedented processing power.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Quantum Machine Learning</div>
                <div>• Quantum Optimization</div>
                <div>• Quantum Neural Networks</div>
                <div>• Quantum Cryptography</div>
              </div>
            </div>

            {/* Neuromorphic Computing */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Neuromorphic Computing</h3>
              <p className="text-gray-400 mb-4">
                Brain-inspired computing architectures that mimic neural networks.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Brain-Inspired Chips</div>
                <div>• Spiking Neural Networks</div>
                <div>• Cognitive Computing</div>
                <div>• Adaptive Learning</div>
              </div>
            </div>

            {/* Swarm Intelligence */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Swarm Intelligence</h3>
              <p className="text-gray-400 mb-4">
                Coordinated AI systems that work together like natural swarms.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Multi-Agent Systems</div>
                <div>• Distributed AI</div>
                <div>• Collective Intelligence</div>
                <div>• Emergent Behavior</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              How our innovative AI services are solving real-world problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Healthcare Revolution</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">AI Doctors</h4>
                    <p className="text-gray-400">Autonomous diagnostic systems that work 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Drug Discovery</h4>
                    <p className="text-gray-400">AI-powered pharmaceutical research acceleration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Personalized Medicine</h4>
                    <p className="text-gray-400">AI-driven treatment plans based on genetics</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Smart Cities & Infrastructure</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Autonomous Transportation</h4>
                    <p className="text-gray-400">Self-driving vehicles and smart traffic systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Energy Management</h4>
                    <p className="text-gray-400">AI-optimized power grids and renewable energy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Environmental Monitoring</h4>
                    <p className="text-gray-400">Real-time pollution and climate tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Foundation
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on the latest breakthroughs in AI research and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Next-Gen AI Models</h3>
              <p className="text-gray-400">
                GPT-5, Claude 3, and custom large language models
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Frameworks</h3>
              <p className="text-gray-400">
                PyTorch 3.0, TensorFlow 3.0, and custom AI frameworks
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Edge Computing</h3>
              <p className="text-gray-400">
                Distributed AI processing for real-time applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Innovative AI?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay ahead of the competition with cutting-edge AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">First-Mover Advantage</h3>
              <p className="text-gray-400">
                Be among the first to adopt breakthrough AI technologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Unprecedented Performance</h3>
              <p className="text-gray-400">
                Achieve results that were impossible with traditional AI
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Future-Proof Solutions</h3>
              <p className="text-gray-400">
                Built for the challenges of tomorrow, not just today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Lead the AI Revolution?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the pioneers who are shaping the future with innovative AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
              Start Innovating Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200 text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}