import React from 'react';
import Head from 'next/head';
import { Atom, Cpu, Shield, Zap, Target, CheckCircle, ArrowRight, Brain } from 'lucide-react';

export default function QuantumTechnologyPage() {
  return (
    <>
      <Head>
        <title>Quantum Technology — Zion Tech Group</title>
        <meta name="description" content="Explore the future with Zion Tech Group's quantum technology solutions. From quantum computing to quantum cryptography, we're pioneering the next generation of technology." />
        <meta property="og:title" content="Quantum Technology — Zion Tech Group" />
        <meta property="og:description" content="Explore the future with Zion Tech Group's quantum technology solutions. From quantum computing to quantum cryptography, we're pioneering the next generation of technology." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Quantum Technology
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Pioneering the quantum revolution with cutting-edge quantum computing, quantum cryptography, and quantum sensing solutions that will transform industries and solve previously impossible problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Explore Quantum Solutions
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300">
                View Case Studies
              </a>
            </div>
          </div>
        </section>

        {/* Quantum Technology Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Quantum Technology Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                <Cpu className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quantum Computing</h3>
                <p className="text-white/70">
                  Leverage quantum bits (qubits) to solve complex computational problems that are impossible for classical computers.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                <Shield className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quantum Cryptography</h3>
                <p className="text-white/70">
                  Unbreakable encryption using quantum key distribution and quantum-resistant algorithms for ultimate security.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                <Zap className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quantum Sensing</h3>
                <p className="text-white/70">
                  Ultra-sensitive detection systems for medical imaging, environmental monitoring, and precision measurements.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
                <Brain className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quantum Machine Learning</h3>
                <p className="text-white/70">
                  Quantum algorithms that accelerate machine learning tasks and enable new AI capabilities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                <Target className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quantum Optimization</h3>
                <p className="text-white/70">
                  Solve complex optimization problems in logistics, finance, and manufacturing with quantum algorithms.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl p-6">
                <Atom className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quantum Materials</h3>
                <p className="text-white/70">
                  Advanced materials with quantum properties for next-generation electronics and energy systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Applications by Industry */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-fuchsia-400">Quantum Applications by Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Financial Services</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Portfolio optimization and risk assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>High-frequency trading algorithms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Fraud detection and cybersecurity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Monte Carlo simulations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Healthcare & Pharmaceuticals</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Drug discovery and molecular modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Medical imaging and diagnostics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Protein folding and genomics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Personalized medicine optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Manufacturing & Logistics</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Supply chain optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Production scheduling and routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Quality control and defect detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Energy efficiency optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Energy & Climate</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Climate modeling and prediction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Renewable energy optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Carbon capture and storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Smart grid management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Advantage */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Quantum Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Why Quantum Technology?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">Exponential Speedup</h4>
                      <p className="text-white/70">Quantum algorithms can solve certain problems exponentially faster than classical computers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Unbreakable Security</h4>
                      <p className="text-white/70">Quantum cryptography provides theoretically unbreakable encryption for sensitive communications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">Precision Sensing</h4>
                      <p className="text-white/70">Quantum sensors offer unprecedented sensitivity for medical, environmental, and industrial applications.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Quantum Readiness Assessment</h3>
                <p className="text-white/80 mb-6">
                  Not sure if your organization is ready for quantum technology? We provide comprehensive assessments to evaluate your quantum readiness and develop a strategic roadmap.
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                  Get Quantum Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Development Timeline */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-fuchsia-400">Quantum Development Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  Q1
                </div>
                <h3 className="text-xl font-semibold mb-3">Quantum Assessment</h3>
                <p className="text-white/70">
                  Evaluate your organization's quantum readiness and identify opportunities for quantum advantage.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  Q2
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategy Development</h3>
                <p className="text-white/70">
                  Develop a comprehensive quantum technology strategy and implementation roadmap.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  Q3
                </div>
                <h3 className="text-xl font-semibold mb-3">Pilot Implementation</h3>
                <p className="text-white/70">
                  Launch pilot quantum projects to demonstrate value and build organizational capabilities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  Q4
                </div>
                <h3 className="text-xl font-semibold mb-3">Scale & Optimize</h3>
                <p className="text-white/70">
                  Scale successful pilots and continuously optimize quantum solutions for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Embrace the Quantum Future?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and position your organization at the forefront of the next technological breakthrough.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg flex items-center gap-2">
                Start Your Quantum Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 text-lg">
                Explore All Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}