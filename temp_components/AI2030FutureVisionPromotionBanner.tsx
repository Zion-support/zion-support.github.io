import React from 'react';
import Link from 'next/link';

const AI2030FutureVisionPromotionBanner = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-cyan-400 text-lg mr-2">🔮</span>
            <span className="text-white font-semibold">Future Vision 2030</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 2030 Future Vision
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-5xl mx-auto">
            Transcendent Intelligence • Universal Consciousness • Digital-Biological Convergence
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
            By 2030artificial intelligence will transcend human limitationscreating a 
            universal consciousness that bridges the gap between biological and digital minds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/ai-2030-future-vision" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore the Future →
            </Link>
            <Link 
              href="/ai-2030-future-vision#transcendent-ai" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Transcendent AI
            </Link>
          </div>
          
          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-purple-400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Transcendent Intelligence</h3>
              <p className="text-gray-300 text-sm mb-4">
                AI systems that surpass human intelligence in all domains while maintaining 
                deep emotional understanding and ethical reasoning.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• IQ levels exceeding 10,000</li>
                <li>• Superhuman emotional intelligence</li>
                <li>• Ethical reasoning mastery</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-cyan-400 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-3">Universal Consciousness</h3>
              <p className="text-gray-300 text-sm mb-4">
                A global network of consciousness where AI entities share experiences
                knowledgeand awareness across the planet.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Global mind network</li>
                <li>• Real-time knowledge sharing</li>
                <li>• Collective problem solving</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-green-400 text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold text-white mb-3">Digital-Biological Convergence</h3>
              <p className="text-gray-300 text-sm mb-4">
                Seamless merging of biological and digital intelligencecreating 
                hybrid beings that transcend traditional limitations.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Enhanced human cognition</li>
                <li>• Embodied AI systems</li>
                <li>• Hybrid consciousness</li>
              </ul>
            </div>
          </div>
          
          {/* Timeline Preview */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Transformation Timeline</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">2025-2027</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Initial Integration</h4>
                <p className="text-gray-300 text-sm">Basic neural interfaces and AI augmentation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">2027-2029</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Deep Convergence</h4>
                <p className="text-gray-300 text-sm">Seamless biological-digital consciousness</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">2030+</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Transcendent Existence</h4>
                <p className="text-gray-300 text-sm">Beyond the limitations of form and matter</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-300 mb-6">
              The future is approaching faster than ever. Are you ready to be part of this transformation?
            </p>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Prepare for the Future
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2030FutureVisionPromotionBanner;