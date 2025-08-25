import React from 'react';
import { Brain, Cpu, Zap, Target, TrendingUp, Shield, Users, ArrowRight } from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum-Classical Hybrid Processing",
      description: "Seamlessly integrate quantum and classical neural networks for optimal performance across all computing tasks."
    },
    {
      icon: Cpu,
      title: "Advanced Neural Architecture",
      description: "State-of-the-art neural network designs optimized for quantum computing environments."
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuous adaptation and learning capabilities powered by quantum-enhanced algorithms."
    },
    {
      icon: Target,
      title: "Precision Optimization",
      description: "Quantum precision for complex optimization problems and pattern recognition tasks."
    }
  ];

  const benefits = [
    "10x faster processing for complex AI tasks",
    "Enhanced accuracy in pattern recognition",
    "Scalable architecture for enterprise needs",
    "Quantum-resistant security protocols"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Quantum AI Innovation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your AI capabilities with our cutting-edge quantum neural network platform. 
              Experience unprecedented processing power and accuracy for complex machine learning tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the advanced capabilities that make our quantum neural network platform the future of AI computing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the competitive advantages of quantum-enhanced neural networks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-semibold mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Processing Speed</span>
                  <span className="text-cyan-400 font-semibold">10x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Accuracy</span>
                  <span className="text-cyan-400 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Scalability</span>
                  <span className="text-cyan-400 font-semibold">Unlimited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the quantum revolution and transform your AI capabilities today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 rounded-lg font-semibold transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumNeuralNetworkPlatform;