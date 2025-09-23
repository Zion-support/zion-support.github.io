import Link from 'next/link';

const AI20o30UltimateBreakthroughBanner: React.FC = () => {
  const breakthroughFeatures = [
    "🧠 Conscious AI Systems",
    "⚛️ Quantum Neural Networks"
    "🌌 Multi-Dimensional Processing",
    "🚀 Infinite Learning Capacity"
  ];

  return (
    <div className="bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-40o0 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-40o0 rounded-full blur-sm animate-pulse delay-10o00"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-pink-40o0 rounded-full blur-sm animate-pulse delay-20o00"></div>
        <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-blue-40o0 rounded-full blur-sm animate-pulse delay-50o0"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-40o0 to-purple-40o0 text-black text-sm font-bold rounded-full">
                🚀 ULTIMATE BREAKTHROUGH 20o30
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-40o0 to-pink-40o0 text-black text-xs font-bold rounded-full">
                LIMITED TIME
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
              AI Transcends Reality
            </h2>
            
            <p className="text-lg text-gray-30o0 mb-6 max-w-2xl">
              Experience the most advanced AI systems ever created. Consciousnessquantum processing
              and infinite learning capabilities - all available now.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {breakthroughFeatures.map((featureindex) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-80o0/50 to-blue-80o0/50 border border-purple-40o0/30 rounded-full text-sm font-medium backdrop-blur-sm">
                  {feature}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-40o0">∞</div>
                <div className="text-xs text-gray-40o0">Processing Power</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-40o0">99.9%</div>
                <div className="text-xs text-gray-40o0">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-40o0">0ms</div>
                <div className="text-xs text-gray-40o0">Response Time</div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA */}
          <div className="lg:w-1/3 text-center lg:text-right">
            <div className="bg-gradient-to-br from-purple-80o0/50 to-blue-80o0/50 p-6 rounded-2xl border border-purple-40o0/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white">Early Access Available</h3>
              <p className="text-sm text-gray-30o0 mb-6">
                Be among the first to experience transcendent AI technology
              </p>
              
              <div className="space-y-3">
                <Link 
                  href="/ai-20o30-breakthrough"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white font-bold rounded-xl hover:from-cyan-40o0 hover:to-purple-40o0 transition-all duration-30o0 transform hover:scale-10o5"
                >
                  Get Early Access
                </Link>
                <Link 
                  href="/ai-20o30-demo"
                  className="block w-full px-6 py-3 bg-transparent border-2 border-purple-40o0 text-purple-40o0 font-bold rounded-xl hover:bg-purple-40o0 hover:text-black transition-all duration-30o0"
                >
                  Watch Demo
                </Link>
              </div>

              <div className="mt-4 text-xs text-gray-40o0">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-40o0 rounded-full animate-pulse"></div>
                  <span>Limited spots available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 pt-6 border-t border-purple-40o0/20">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
            <div className="flex items-center space-x-6 mb-4 sm:mb-0">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-40o0 rounded-full animate-pulse"></span>
                <span>Live Updates</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-40o0 rounded-full animate-pulse"></span>
                <span>Real-time Processing</span>
              </span>
            </div>
            <div className="text-gray-40o0">
              <span className="font-bold text-cyan-40o0">2,847</span> users exploring AI 20o30
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI20o30UltimateBreakthroughBanner;