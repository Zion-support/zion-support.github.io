import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  Brain, 
  Layers, 
  ArrowRight, 
  Star,
  TrendingUp,
  Clock,
  Award,
  Target,
  Infinity,
  Sparkles
} from 'lucide-react';

const InterdimensionalComputing2028: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium mb-6">
              <Infinity className="w-4 h-4 mr-2" />
              Infinite Possibilities 2028
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Interdimensional Computing
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Access Infinite Realities
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary technology that accesses parallel universes and alternate realities 
              to solve problems impossible in our single dimension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Access Infinite Knowledge
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/case-studies" 
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infinite Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access knowledge and solutions from infinite parallel universes and alternate realities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Dimensional Access</h3>
              <p className="text-gray-300">
                Quantum tunneling through dimensional barriers to access parallel universes and alternate realities
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Multi-Reality Problem Solving</h3>
              <p className="text-gray-300">
                Access solutions from parallel universes and synthesize insights across infinite dimensional spaces
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Reality Synthesis</h3>
              <p className="text-gray-300">
                Combine insights from multiple dimensions to create solutions that transcend dimensional limitations
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-pink-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Infinite Knowledge</h3>
              <p className="text-gray-300">
                Access scientific knowledge from advanced civilizations and parallel technological developments
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Breakthrough Innovation</h3>
              <p className="text-gray-300">
                Discover innovations from parallel universes and accelerate development through dimensional collaboration
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-red-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Infinity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Infinite Possibilities</h3>
              <p className="text-gray-300">
                Explore infinite possibility spaces and optimize outcomes across all conceivable realities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how interdimensional computing is transforming every industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Scientific Discovery</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  Access scientific knowledge from advanced civilizations
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  Explore alternate physics laws and principles
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  Discover solutions from parallel technological developments
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  Accelerate research through dimensional collaboration
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Medical Breakthroughs</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Access cures from alternate medical realities
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Explore treatments from parallel universes
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Discover healing methods from advanced civilizations
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Synthesize medical knowledge across dimensions
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Business Innovation</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Access business strategies from successful parallel companies
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Explore market data from alternate economic realities
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Discover innovations from parallel technological developments
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Optimize business outcomes across infinite possibilities
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Climate Solutions</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  Access environmental solutions from sustainable parallel worlds
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  Explore energy technologies from advanced civilizations
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  Discover climate restoration methods from alternate realities
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  Synthesize environmental solutions across dimensions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infinite Impact
            </h2>
            <p className="text-xl text-gray-300">
              See how interdimensional computing is transforming the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                1000x
              </div>
              <div className="text-white font-semibold mb-2">Acceleration</div>
              <div className="text-gray-300">Space technology development</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-white font-semibold mb-2">Possibilities</div>
              <div className="text-gray-300">Access to infinite realities</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-white font-semibold mb-2">Success Rate</div>
              <div className="text-gray-300">Problem solving across dimensions</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-white font-semibold mb-2">Knowledge</div>
              <div className="text-gray-300">From infinite civilizations</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Access Infinite Realities?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the power of interdimensional computing and access infinite knowledge 
            from parallel universes and alternate realities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Access Infinite Knowledge
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterdimensionalComputing2028;