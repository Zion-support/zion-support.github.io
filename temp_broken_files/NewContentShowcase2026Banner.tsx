import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
const NewContentShowcase2026Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Fresh Content 2026
            </h2>
            <Sparkles className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Discover our latest breakthrough content covering AI innovations, sustainable technology, 
            healthcare breakthroughs, and financial revolutions
          </p>
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Customer Experience</h3>
              <p className="text-sm text-gray-300">500% satisfaction boost</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sustainable AI</h3>
              <p className="text-sm text-gray-300">90% energy reduction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial AI</h3>
              <p className="text-sm text-gray-300">300% better returns</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Sparkles className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Education AI</h3>
              <p className="text-sm text-gray-300">400% performance boost</p>
            </div>
          </div>
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog"
              className="group bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              Explore New Content
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/ai-innovation-hub-2026"
              className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              AI Innovation Hub
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          {/* Latest articles preview */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">AI Customer Experience Revolution</h4>
                <p className="text-sm text-gray-300 mb-4">500% satisfaction boost through AI personalization</p>
                <Link to="/blog/ai-powered-customer-experience-revolution-2026" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                  Read More →
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">Sustainable AI Green Computing</h4>
                <p className="text-sm text-gray-300 mb-4">90% energy reduction with environmental responsibility</p>
                <Link to="/blog/sustainable-ai-green-computing-future" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                  Read More →
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">AI Healthcare Breakthrough</h4>
                <p className="text-sm text-gray-300 mb-4">Early disease detection 5 years ahead</p>
                <Link to="/blog/ai-driven-healthcare-breakthrough-early-disease-detection" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default NewContentShowcase2026Banner;
