import React from 'react';
import { 
  Brain, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  Sparkles,
  Rocket,
  Infinity,
  Target
} from 'lucide-react';
import { newContent2027, newServices2027 } from '../data/newContent2027';
const RevolutionaryContentShowcase2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              REVOLUTIONARY CONTENT 2027
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              The Future is Now
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover groundbreaking AI innovations, quantum consciousness breakthroughs, and interdimensional business solutions that are reshaping reality itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <div className="flex items-center justify-center">
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Revolutionary Content
                </div>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Join the Revolution
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">1000x</div>
              <div className="text-gray-600">Faster Discovery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">∞</div>
              <div className="text-gray-600">Infinite Markets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Quantum Processing</div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Content */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Revolutionary Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most advanced AI innovations and technological breakthroughs that are reshaping our world.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newContent2027.map((content, index) => (
              <div key={content.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {content.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-2">{content.title}</h3>
                    <p className="text-white/90 text-sm">{content.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        {index === 0 && <Brain className="w-4 h-4 text-white" />}
                        {index === 1 && <Zap className="w-4 h-4 text-white" />}
                        {index === 2 && <Globe className="w-4 h-4 text-white" />}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{content.author}</p>
                        <p className="text-sm text-gray-500">{content.authorRole}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{content.readTime}</p>
                      <p className="text-sm text-gray-500">{content.publishDate}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-center">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI solutions and interdimensional technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newServices2027.map((service, index) => (
              <div key={service.id} className="group relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded-full shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Globe className="w-8 h-8 text-white" />}
                    {index === 1 && <Brain className="w-8 h-8 text-white" />}
                    {index === 2 && <Users className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-purple-600 mb-4">{service.price}</div>
                </div>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of forward-thinking companies already using our revolutionary AI solutions to reshape their industries and unlock infinite possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              <div className="flex items-center justify-center">
                <Target className="w-5 h-5 mr-2" />
                Start Your Transformation
              </div>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 mr-2" />
                View Case Studies
              </div>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-300 mb-2">10,000+</div>
              <div className="text-gray-300">Companies Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300 mb-2">99.9%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-300 mb-2">∞</div>
              <div className="text-gray-300">Possibilities Unlocked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
              <div className="text-gray-300">Revolutionary Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default RevolutionaryContentShowcase2027;
