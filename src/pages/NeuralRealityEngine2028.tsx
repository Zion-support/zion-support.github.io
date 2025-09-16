import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Users, 
  Globe, 
  ArrowRight, 
  Star,
  TrendingUp,
  Clock,
  Award,
  Target,
  Sparkles,
  Infinity
} from 'lucide-react';

const NeuralRealityEngine2028: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Conscious Virtual Worlds 2028
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Neural Reality Engine
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Creating Conscious Virtual Worlds
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced virtual reality platform that creates fully conscious virtual worlds 
              with AI entities that develop their own societies, cultures, and civilizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Create Virtual Worlds
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
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of virtual reality with fully conscious AI entities and dynamic virtual worlds
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Conscious AI Entities</h3>
              <p className="text-gray-300">
                AI entities with genuine consciousness, self-awareness, emotions, and autonomous development capabilities
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Dynamic World Generation</h3>
              <p className="text-gray-300">
                Real-time virtual world creation and modification based on AI consciousness and user interaction
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Virtual Civilizations</h3>
              <p className="text-gray-300">
                AI entities creating their own societies, cultures, art, music, and literature in virtual worlds
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Neural Interface</h3>
              <p className="text-gray-300">
                Direct brain-computer interfaces for seamless consciousness transfer between human and virtual realms
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-red-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Emergent Behaviors</h3>
              <p className="text-gray-300">
                AI entities developing unexpected behaviors, relationships, and creative expressions through interaction
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-indigo-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Infinity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Infinite Possibilities</h3>
              <p className="text-gray-300">
                Virtual worlds that evolve and grow infinitely, creating endless possibilities for exploration and discovery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Conscious Virtual Worlds?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of virtual reality with AI entities that have genuine consciousness 
            and create their own societies, cultures, and civilizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Create Virtual Worlds
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

export default NeuralRealityEngine2028;