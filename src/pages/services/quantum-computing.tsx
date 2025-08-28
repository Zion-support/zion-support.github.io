import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Shield, 
  Rocket, 
  Globe, 
  BarChart3, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp
} from 'lucide-react';

export default function QuantumComputing() {
  const features = [
    {
      icon: Brain,
      title: 'Quantum AI Integration',
      description: 'Seamlessly integrate quantum computing with AI algorithms for unprecedented performance'
    },
    {
      icon: Zap,
      title: 'Quantum Speed Optimization',
      description: 'Leverage quantum parallelism for exponential speed improvements in complex calculations'
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Cryptography',
      description: 'Future-proof your security with post-quantum cryptographic algorithms'
    },
    {
      icon: Rocket,
      title: 'Quantum Machine Learning',
      description: 'Train ML models on quantum hardware for superior pattern recognition'
    }
  ];

  const useCases = [
    {
      title: 'Financial Modeling',
      description: 'Portfolio optimization, risk assessment, and algorithmic trading',
      icon: BarChart3
    },
    {
      title: 'Drug Discovery',
      description: 'Molecular simulation and protein folding for pharmaceutical research',
      icon: Target
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Complex logistics optimization and route planning',
      icon: Globe
    },
    {
      title: 'Climate Modeling',
      description: 'Advanced weather prediction and climate change analysis',
      icon: TrendingUp
    }
  ];

  const benefits = [
    'Exponential speed improvements for complex calculations',
    'Superior optimization capabilities for NP-hard problems',
    'Enhanced machine learning and AI performance',
    'Future-proof quantum-resistant security',
    'Competitive advantage in research and development',
    'Scalable solutions for enterprise applications'
  ];

  return (
    <>
      <SEO 
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Revolutionary quantum computing solutions for enterprise applications. Quantum AI, optimization, and cryptography services."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                Quantum Computing Solutions
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum Computing
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolution
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Harness the power of quantum mechanics to solve previously unsolvable problems. 
                Our quantum computing solutions deliver exponential performance improvements for 
                complex calculations and optimization challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Computing Features
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our quantum computing platform combines cutting-edge hardware with advanced algorithms 
                to deliver unprecedented computational power.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Computing Use Cases
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Discover how quantum computing can transform your industry and solve 
                previously impossible challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-slate-300">{useCase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Quantum Computing?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Quantum computing represents the next frontier in computational power, 
                offering capabilities that classical computers simply cannot match.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Join the quantum revolution and discover how our solutions can transform 
                your business operations and research capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Your Quantum Journey
                </button>
                <button className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}