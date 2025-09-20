
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import EnhancedContentShowcase from '../components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from '../components/RevolutionaryContentShowcase';
import EnhancedContentAdvertising from '../components/EnhancedContentAdvertising';
import UltimateBreakthroughBanner from '../components/UltimateBreakthroughBanner';
import NeuralRealityBanner from '../components/NeuralRealityBanner';
import RevolutionaryTechAdvertisingBanner from '../components/RevolutionaryTechAdvertisingBanner';
import InteractiveTechShowcase from '../components/InteractiveTechShowcase';

const Home: React.FC = () => {
  const { addNotification } = useNotifications();
  useEffect(() => {
    // Welcome notification
    addNotification({
      type: 'info',
      title: 'Welcome to Zion Tech Group 2026!',
      message: 'Explore our revolutionary AI, quantum computing, and cybersecurity solutions.',
      duration: 5000
    });
  }, [addNotification]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Zion Tech Group 2026
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Leading the future with revolutionary AI, quantum computing, and cybersecurity solutions. 
            Discover the next generation of technology that will transform your business.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Link 
              to="/pages/AIInnovationHub2026" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore AI Innovation Hub 2026
            </Link>
            <Link 
              to="/pages/TechTrends2026" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover Tech Trends 2026
            </Link>
            <Link 
              to="/pages/ComprehensiveTechInsights2026" 
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Tech Insights 2026
            </Link>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Advanced artificial intelligence solutions for modern businesses. 
              From machine learning to autonomous systems.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary quantum computing technologies that will reshape 
              the future of computation and problem-solving.
            </p>
            <Link 
              to="/pages/TechTrends2026" 
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Explore Trends →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive cybersecurity solutions to protect your business 
              from evolving threats in the digital landscape.
            </p>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Technology Showcase 2026
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of technology with our comprehensive collection of 
              cutting-edge innovations, AI breakthroughs, and quantum computing advancements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">AI Innovation Hub</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Discover the latest AI technologies and their real-world applications.
                </p>
                <Link 
                  to="/pages/AIInnovationHub2026" 
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Explore Hub
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Tech Trends 2026</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Stay ahead with the most important technology trends of 2026.
                </p>
                <Link 
                  to="/pages/TechTrends2026" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  View Trends
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Tech Insights</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Deep dive into comprehensive technology insights and analysis.
                </p>
                <Link 
                  to="/pages/ComprehensiveTechInsights2026" 
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Get Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;