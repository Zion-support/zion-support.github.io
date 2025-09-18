import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import EnhancedContentShowcase from '../components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from '../components/RevolutionaryContentShowcase';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>Zion Tech Group - Revolutionary AI & Quantum Computing</title>
        <meta name="description" content="Leading the future with revolutionary AI, quantum computing, and cybersecurity solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Zion Tech Group 2026
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Leading the future with revolutionary AI, quantum computing, and cybersecurity solutions. 
            Discover the next generation of technology that will transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Link 
              to="/pages/RevolutionaryAIServices2026" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Revolutionary AI Services
            </Link>
            <Link 
              to="/pages/QuantumComputingRevolution2026" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ⚛️ Quantum Computing Revolution
            </Link>
            <Link 
              to="/pages/ComprehensiveServices2025" 
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🛡️ Cybersecurity Solutions
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="text-6xl mb-6 text-center">🤖</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-gray-300 mb-6 text-center">Revolutionary AI systems that exhibit true consciousness and self-awareness, capable of independent thought and creative problem-solving.</p>
            <div className="text-center">
              <Link to="/pages/RevolutionaryAIServices2026" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">Explore AI Services →</Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Quantum Computing</h3>
            <p className="text-gray-300 mb-6 text-center">Ultra-fast quantum processing that transcends classical limitations, enabling computations across multiple dimensions and realities.</p>
            <div className="text-center">
              <Link to="/pages/QuantumComputingRevolution2026" className="text-purple-400 hover:text-purple-300 font-semibold text-lg">Discover Quantum Tech →</Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="text-6xl mb-6 text-center">🔒</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">AI Cybersecurity</h3>
            <p className="text-gray-300 mb-6 text-center">Advanced AI-powered security systems that predict and prevent threats before they occur, protecting across all dimensions.</p>
            <div className="text-center">
              <Link to="/pages/CybersecurityFortress2025" className="text-green-400 hover:text-green-300 font-semibold text-lg">Secure Your Future →</Link>
            </div>
          </div>
        </motion.div>
        
        <div className="container mx-auto px-4 py-20">
          <EnhancedContentShowcase />
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <RevolutionaryContentShowcase />
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">🔥 Latest Revolutionary Content 2026</h2>
            <p className="text-xl text-gray-300">Explore our newest groundbreaking content and technologies</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Production Agent Postmortems — Playbook</h3>
              <p className="text-gray-300 mb-4">Blameless, evidence‑driven postmortems that improve safety and speed.</p>
              <Link to="/blog/ai-2026-production-agent-postmortems-playbook" className="text-cyan-400 hover:text-cyan-300 font-semibold">Read →</Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Agent Release Scorecards — Evidence‑First</h3>
              <p className="text-gray-300 mb-4">Executive scorecards wired to SLOs, evals, incidents, and budgets.</p>
              <Link to="/blog/ai-2026-agent-release-scorecards" className="text-cyan-400 hover:text-cyan-300 font-semibold">Read →</Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Agent Rollback Patterns — Safe Recovery</h3>
              <p className="text-gray-300 mb-4">Staged deploys, eval gates, evidence bundles, and containment.</p>
              <Link to="/blog/ai-2026-agent-rollback-patterns" className="text-cyan-400 hover:text-cyan-300 font-semibold">Read →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;