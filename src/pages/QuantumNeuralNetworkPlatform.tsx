import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, TrendingUp, Users, Globe } from 'lucide-react';

export default function QuantumNeuralNetworkPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Quantum Neural Network Platform
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Revolutionizing AI with quantum computing and neural networks for unprecedented computational power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Quantum-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Neural Processing</h3>
              <p className="text-zion-slate-light">
                Leverage quantum computing principles to process neural networks at unprecedented speeds
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Lightning Fast Training</h3>
              <p className="text-zion-slate-light">
                Train complex neural networks in minutes instead of hours with quantum acceleration
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Security</h3>
              <p className="text-zion-slate-light">
                Unbreakable encryption and security protocols powered by quantum mechanics
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Scalable Architecture</h3>
              <p className="text-zion-slate-light">
                Scale from small prototypes to enterprise-level quantum neural networks seamlessly
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Development</h3>
              <p className="text-zion-slate-light">
                Multi-user quantum neural network development with real-time collaboration
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Global Quantum Network</h3>
              <p className="text-zion-slate-light">
                Access quantum computing resources worldwide through our distributed network
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Revolutionary Use Cases
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Drug Discovery</h3>
              <p className="text-zion-slate-light text-lg">
                Accelerate pharmaceutical research by simulating molecular interactions at quantum speeds
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Protein folding prediction</li>
                <li>• Drug molecule optimization</li>
                <li>• Clinical trial simulation</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Financial Modeling</h3>
              <p className="text-zion-slate-light text-lg">
                Revolutionize risk assessment and portfolio optimization with quantum neural networks
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Market prediction models</li>
                <li>• Risk assessment algorithms</li>
                <li>• Portfolio optimization</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Climate Modeling</h3>
              <p className="text-zion-slate-light text-lg">
                Predict climate patterns and environmental changes with unprecedented accuracy
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Weather pattern prediction</li>
                <li>• Climate change modeling</li>
                <li>• Natural disaster forecasting</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">AI Research</h3>
              <p className="text-zion-slate-light text-lg">
                Push the boundaries of artificial intelligence with quantum-enhanced neural networks
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Advanced language models</li>
                <li>• Computer vision systems</li>
                <li>• Autonomous decision making</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple to-zion-cyan">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the quantum revolution and transform your AI capabilities with our cutting-edge platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Start Your Quantum Journey
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-purple px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}