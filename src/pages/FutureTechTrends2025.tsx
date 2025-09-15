import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Eye,
  Code,
  Layers,
  BarChart3,
  Smartphone,
  Wifi,
  Server,
  Calendar,
  Clock
} from 'lucide-react';

const FutureTechTrends2025: React.FC = () => {
  const trends = [
    {
      title: 'AI-Powered Autonomous Systems',
      description: 'Self-governing AI systems that make complex decisions without human intervention',
      icon: Brain,
      impact: 'High',
      timeline: 'Q2 2025',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Internet',
      description: 'Ultra-secure quantum communication networks spanning the globe',
      icon: Shield,
      impact: 'Revolutionary',
      timeline: 'Q3 2025',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Neural Interface Devices',
      description: 'Direct brain-computer interfaces for enhanced human capabilities',
      icon: Eye,
      impact: 'Game-changing',
      timeline: 'Q4 2025',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Digital Twin Ecosystems',
      description: 'Complete digital replicas of entire cities and systems',
      icon: Layers,
      impact: 'Transformative',
      timeline: 'Q1 2026',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const predictions = [
    {
      category: 'Artificial Intelligence',
      prediction: 'AI will achieve human-level reasoning capabilities',
      confidence: '95%',
      timeframe: '2025-2026'
    },
    {
      category: 'Quantum Computing',
      prediction: 'Quantum computers will solve previously unsolvable problems',
      confidence: '88%',
      timeframe: '2025-2027'
    },
    {
      category: 'Biotechnology',
      prediction: 'Gene editing will become routine medical practice',
      confidence: '92%',
      timeframe: '2025-2028'
    },
    {
      category: 'Space Technology',
      prediction: 'Commercial space travel will become mainstream',
      confidence: '85%',
      timeframe: '2025-2029'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">Future Technology Trends</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Trends 2025
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Discover the revolutionary technologies that will shape our future
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Trends
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Emerging Technologies</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The most impactful technologies that will define the next decade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${trend.color} rounded-xl flex items-center justify-center`}>
                    <trend.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{trend.title}</h3>
                    <p className="text-gray-300 mb-4">{trend.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full">
                        {trend.impact}
                      </span>
                      <span className="text-gray-400">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {trend.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictions Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Expert Predictions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              What industry experts predict for the future of technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {predictions.map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
              >
                <h3 className="text-lg font-bold mb-3 text-cyan-400">{prediction.category}</h3>
                <p className="text-gray-300 text-sm mb-4">{prediction.prediction}</p>
                <div className="space-y-2">
                  <div className="text-xs text-gray-400">Confidence: {prediction.confidence}</div>
                  <div className="text-xs text-gray-400">Timeline: {prediction.timeframe}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking professionals who trust Zion Tech Group for cutting-edge solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureTechTrends2025;