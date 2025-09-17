import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightSparklesZapBrainTrendingUpTargetUsersAwardStarGlobe

export default function AI2025RevolutionaryContentPromotionBanner() {
  const features = [
    {
      icon: Brain,
      title: 'Interactive Learning',
      description: 'Hands-on AI mastery with real-time feedback'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Latest AI breakthroughs and innovations'
    },
    {
      icon: TrendingUp,
      title: 'Business Solutions',
      description: 'AI-powered enterprise transformation'
    },
    {
      icon: Target,
      title: 'Proven Results',
      description: '2,500% average ROI across implementations'
    }
  ];

  const highlights = [
    '50,000+ Active Learners',
    '99.9% Success Rate',
    '1000x Faster Processing',
    '24/7 Autonomous Operations'
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-white text-lg font-medium mb-6">
            <Sparkles className="h-5 w-5 mr-3" />
            2025 Revolutionary Content Launch
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            The Future of AI is Here
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the most advanced AI technologiesinteractive learning platformsand business solutions that are revolutionizing industries worldwide
          </p>
          
          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {highlights.map((highlightindex) => (
              <div key={index} className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((featureindex) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Learning Hub */}
          <a 
            href="/ai-interactive-learning-hub-2025"
            className="group bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/20"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
              AI Interactive Learning Hub
            </h3>
            <p className="text-gray-300 mb-6">
              Master AI technologies through hands-oninteractive experiences. Transform from beginner to expert with our comprehensive learning ecosystem.
            </p>
            <div className="flex items-center text-blue-300 font-medium group-hover:text-blue-200 transition-colors">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Technologies */}
          <a 
            href="/cutting-edge-ai-technologies-2025"
            className="group bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 hover:from-purple-600/30 hover:to-indigo-600/30 transition-all duration-300 transform hover:-translate-y-2 border border-purple-500/20"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
              Cutting-Edge AI Technologies
            </h3>
            <p className="text-gray-300 mb-6">
              Explore revolutionary AI technologies including quantum neural networksconsciousness AIand neural interfaces shaping the future.
            </p>
            <div className="flex items-center text-purple-300 font-medium group-hover:text-purple-200 transition-colors">
              Explore Tech
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Business Solutions */}
          <a 
            href="/ai-powered-business-solutions-2025"
            className="group bg-gradient-to-br from-indigo-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 hover:from-indigo-600/30 hover:to-blue-600/30 transition-all duration-300 transform hover:-translate-y-2 border border-indigo-500/20"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
              AI Business Solutions
            </h3>
            <p className="text-gray-300 mb-6">
              Transform your enterprise with AI-powered automationautonomous operationsand intelligent business processes delivering unprecedented ROI.
            </p>
            <div className="flex items-center text-indigo-300 font-medium group-hover:text-indigo-200 transition-colors">
              Transform Business
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the AI Revolution
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be among the first to experience the future of AI. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/ai-interactive-learning-hub-2025"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}