import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';

export default function QuantumNeuralNetworkPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum Neural Network
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Revolutionize your AI capabilities with our cutting-edge quantum neural network platform. 
              Experience unprecedented computational power and breakthrough AI performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Powered AI Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Harness the power of quantum computing to supercharge your neural networks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Processing</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Leverage quantum superposition and entanglement for exponentially faster neural network training and inference.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Exponential Speed</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Achieve computational speeds that are orders of magnitude faster than classical computing approaches.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Security</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Built-in quantum encryption and security protocols ensure your AI models and data remain protected.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Scale your quantum neural networks from small prototypes to enterprise-grade deployments seamlessly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaborative Development</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Enable teams to collaborate on quantum AI projects with real-time sharing and version control.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Quantum Network</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Access quantum computing resources worldwide through our distributed quantum network infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform industries with quantum-powered AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Drug Discovery & Healthcare</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Accelerate pharmaceutical research with quantum neural networks that can simulate molecular interactions 
                  and predict drug efficacy in hours instead of years.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Molecular dynamics simulation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Protein folding prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Drug-target interaction modeling
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Financial Modeling & Trading</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Revolutionize financial markets with quantum AI that can process millions of data points 
                  and identify patterns invisible to classical algorithms.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Risk assessment and portfolio optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Algorithmic trading strategies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Fraud detection and prevention
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Climate & Energy Research</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Tackle climate change with quantum AI that can model complex environmental systems 
                  and optimize renewable energy solutions.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Weather pattern prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Energy grid optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Carbon capture modeling
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Enable next-generation autonomous vehicles and robotics with quantum AI that can process 
                  sensor data and make decisions in real-time.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Real-time decision making
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Sensor fusion and processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Predictive maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of AI?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
            Join the quantum revolution and unlock unprecedented AI capabilities. 
            Our team of quantum computing experts is ready to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30 flex items-center justify-center gap-2"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}