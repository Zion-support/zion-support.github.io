import React from 'react';
const UltimateContentAdvertisingBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/30 rounded-full animate-bounce delay-1000" />
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-pink-500/30 rounded-full animate-bounce delay-2000" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            key={currentSlide}
            className="text-center"
          >
            {/* Main Content */}
            <div className="mb-8">
              <div
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6"
              >
                {currentContent.icon}
              </div>
              <divh2
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                {currentContent.title}
              </divh2>
              <divp
                className="text-xl md:text-2xl text-blue-100 mb-6"
              >
                {currentContent.subtitle}
              </divp>
              <divp
                className="text-lg text-gray-200 mb-8 max-w-4xl mx-auto"
              >
                {currentContent.description}
              </divp>
            </div>
            {/* Stats and CTA */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
            >
              <div className="flex items-center gap-2 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-lg font-semibold">{currentContent.stats}</span>
              </div>
              <div className="flex gap-4">
                <a
                  href={currentContent.href}
                  className={`group relative inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentContent.color} text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <span className="mr-2">{currentContent.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="group inline-flex items-center px-6 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>
            {/* Additional CTAs */}
            <div
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="/case-studies"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Case Studies
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Schedule Consultation
              </a>
              <a
                href="/webinars"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Users className="w-4 h-4" />
                Join Webinar
              </a>
            </div>
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {advertisingContent.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};
export default UltimateContentAdvertisingBanner2025;