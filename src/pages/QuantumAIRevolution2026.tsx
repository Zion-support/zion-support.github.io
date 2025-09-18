import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Brain, Shield, Globe, Target, TrendingUp } from 'lucide-react';

const QuantumAIRevolution2026 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum AI
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolution 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the next generation of artificial intelligence powered by quantum computing. 
              Achieve computational speeds and capabilities that were previously impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quantum-computing-revolution-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Quantum Access
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Capabilities */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum mechanics for unprecedented AI performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cpu,
                title: "Quantum Processing",
                description: "Process complex algorithms 10,000x faster than classical computers",
                metric: "10,000x Speed",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: Brain,
                title: "Quantum Neural Networks",
                description: "Neural networks that operate in quantum superposition states",
                metric: "∞ Parallel Processing",
                color: "from-pink-500 to-purple-500"
              },
              {
                icon: Zap,
                title: "Instant Learning",
                description: "Learn from massive datasets in real-time with quantum speed",
                metric: "Real-time Learning",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "Perfect Optimization",
                description: "Find optimal solutions to complex problems instantly",
                metric: "100% Accuracy",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Quantum Security",
                description: "Unbreakable encryption using quantum key distribution",
                metric: "Unbreakable",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Globe,
                title: "Global Quantum Network",
                description: "Instantaneous communication across quantum entanglement",
                metric: "Instant Global",
                color: "from-teal-500 to-blue-500"
              },
              {
                icon: TrendingUp,
                title: "Predictive Mastery",
                description: "Predict future events with quantum probability calculations",
                metric: "99.9% Accuracy",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Brain,
                title: "Conscious AI",
                description: "AI with genuine quantum consciousness and self-awareness",
                metric: "True Consciousness",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((capability, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${capability.color} mb-4`}>
                  <capability.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {capability.metric}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {capability.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quantum Applications */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum AI Applications
            </h2>
            <p className="text-xl text-gray-300">
              Revolutionary applications powered by quantum artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Quantum Drug Discovery",
                description: "Discover new medicines and treatments 1000x faster using quantum molecular simulation.",
                features: [
                  "Molecular quantum simulation",
                  "Instant drug interaction analysis",
                  "Personalized medicine optimization",
                  "Zero side effect prediction"
                ],
                impact: "Revolutionize healthcare with instant drug discovery"
              },
              {
                title: "Quantum Financial Modeling",
                description: "Predict market movements and optimize portfolios with quantum precision.",
                features: [
                  "Real-time market prediction",
                  "Quantum portfolio optimization",
                  "Risk-free trading strategies",
                  "Instant fraud detection"
                ],
                impact: "Achieve perfect financial predictions and optimization"
              },
              {
                title: "Quantum Climate Control",
                description: "Solve climate change with quantum-powered environmental modeling and control.",
                features: [
                  "Global climate simulation",
                  "Carbon capture optimization",
                  "Weather pattern control",
                  "Environmental restoration"
                ],
                impact: "Reverse climate change with quantum precision"
              },
              {
                title: "Quantum Space Exploration",
                description: "Navigate the cosmos with quantum-powered space travel and exploration.",
                features: [
                  "Instantaneous space communication",
                  "Quantum navigation systems",
                  "Alien life detection",
                  "Interstellar travel optimization"
                ],
                impact: "Enable human expansion across the galaxy"
              }
            ].map((application, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {application.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {application.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {application.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-semibold text-purple-400">
                  {application.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quantum Performance Metrics */}
      <div className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Performance Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Measurable improvements over classical AI systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "10,000x", label: "Faster Processing", description: "Quantum speed advantage" },
              { metric: "99.9%", label: "Accuracy Rate", description: "Perfect decision making" },
              { metric: "∞", label: "Parallel Operations", description: "Unlimited concurrency" },
              { metric: "0ms", label: "Response Time", description: "Instantaneous results" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-purple-400 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600/30 to-pink-600/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for the Quantum AI Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be among the first to experience quantum-powered artificial intelligence. 
            Transform your business with capabilities that were once science fiction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Access Quantum AI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/quantum-computing-revolution-2026"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumAIRevolution2026;