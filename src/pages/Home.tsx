import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useNotifications } from '../components/NotificationSystem';
import React from 'react';
import React from 'react';
import React from 'react';

import React from 'react';

=======
>>>>>>> origin/merge-new-content-1757989975
import { Helmet } from 'react-helmet-async';
import EnhancedContentShowcase from '../components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from '../components/RevolutionaryContentShowcase';
import EnhancedContentAdvertising from '../components/EnhancedContentAdvertising';
import UltimateBreakthroughBanner from '../components/UltimateBreakthroughBanner';
import NeuralRealityBanner from '../components/NeuralRealityBanner';
import RevolutionaryTechAdvertisingBanner from '../components/RevolutionaryTechAdvertisingBanner';
import InteractiveTechShowcase from '../components/InteractiveTechShowcase';
import UltimateTechShowcase2027Banner from '../components/UltimateTechShowcase2027Banner';
import ComprehensiveServices2028Banner from '../components/ComprehensiveServices2028Banner';
import RevolutionaryTechBlog2027Banner from '../components/RevolutionaryTechBlog2027Banner';
import UltimateTechAdvertisingBanner from '../components/UltimateTechAdvertisingBanner';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-50e5

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary technology solutions and insights for the future. 
            Leading the way in AI, quantum computing, and next-generation innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/ai-innovation-hub-2025"
              className="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-200 group"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300">
                AI Innovation Hub 2025
              </h3>
              <p className="text-gray-300">
                Cutting-edge artificial intelligence solutions and research for the future.
              </p>
            </Link>
            
            <Link
              to="/quantum-computing-revolution-2025"
              className="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-200 group"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400 group-hover:text-purple-300">
                Quantum Computing Revolution
              </h3>
              <p className="text-gray-300">
                Revolutionary quantum computing technologies and applications.
              </p>
            </Link>
            
            <Link
              to="/neural-interface-revolution-2025"
              className="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-pink-500 transition-all duration-200 group"
            >
              <h3 className="text-xl font-semibold mb-3 text-pink-400 group-hover:text-pink-300">
                Neural Interface Revolution
              </h3>
              <p className="text-gray-300">
                Next-generation brain-computer interface technologies.
              </p>
            </Link>
          </div>
        </div>
<<<<<<< HEAD
      </section>
=======

<<<<<<< HEAD
        {/* Revolutionary Content Banner */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
=======
        {/* Content Showcases */}
        <div className="container mx-auto px-4 py-20">
          <EnhancedContentShowcase />
        </div>

        <div className="container mx-auto px-4 py-20">
          <RevolutionaryContentShowcase />
        </div>

        {/* Enhanced Content Advertising */}
        <EnhancedContentAdvertising />

        {/* Revolutionary Tech Advertising Banner */}
        <RevolutionaryTechAdvertisingBanner />

        {/* Interactive Tech Showcase */}
        <InteractiveTechShowcase />

        {/* Call to Action */}
        <divsection className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
>>>>>>> cursor/create-and-deploy-new-content-376e
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
>>>>>>> cursor/create-and-deploy-new-content-36f9
          </div>
        </div>
      </div>
>>>>>>> origin/merge-new-content-1757989975
    </div>
  );
};

export default Home;