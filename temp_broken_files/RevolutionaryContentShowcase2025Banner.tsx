import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightBookOpenVideoFileTextUsersTrendingUpPlayAward

export default function RevolutionaryContentShowcase2025Banner() {
  const contentTypes = [
    { icon: BookOpename: "Articles"count: "150+"color: "blue" },
    { icon: Videoname: "Videos"count: "75+"color: "purple" },
    { icon: FileTextname: "Guides"count: "50+"color: "green" },
    { icon: Usersname: "Community"count: "200+"color: "yellow" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-2xl p-8 mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%239C92AC%22 fill-opacity%3D%220.1%22%3E%3Cpath d="M30 30c0-16.569-13.431-30-30-30v30h30z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-purple-400 mr-3 animate-pulse" />
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                📚 REVOLUTIONARY CONTENT
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Revolutionary Content Showcase 2025
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Immerse yourself in 500+ pieces of premium AI content including breakthrough articles
              video tutorialsimplementation guidesand community insights from industry experts.
            </p>

            {/* Content Types */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {contentTypes.map((typeindex) => {
                const IconComponent = type.icon;
                const colorClasses = {
                  blue: "text-blue-400 bg-blue-500/20",
                  purple: "text-purple-400 bg-purple-500/20",
                  green: "text-green-400 bg-green-500/20",
                  yellow: "text-yellow-400 bg-yellow-500/20"
                };
                
                return (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${colorClasses[type.color as keyof typeof colorClasses]}`}>
                    <div className="flex items-center">
                      <IconComponent className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">{type.name}</span>
                    </div>
                    <span className="text-sm font-bold">{type.count}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/revolutionary-content-showcase-2025"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Content Library
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <a 
                href="/blog/ai-2025-revolutionary-breakthroughs"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Latest Articles
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-shrink-0 lg:ml-8">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/40 to-orange-400/40 rounded-full flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white animate-pulse" />
                  </div>
                </div>
              </div>
              
              {/* Floating Content Icons */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center animate-bounce">
                <Video className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s' }}>
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content Preview */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Featured This Week</h3>
            <a href="/revolutionary-content-showcase-2025" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              View All Featured
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center mb-2">
                <Play className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-purple-400 text-xs font-semibold">VIDEO</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Quantum AI Masterclass</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">2.5 hours</span>
                <Award className="h-3 w-3 text-yellow-400" />
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center mb-2">
                <FileText className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-blue-400 text-xs font-semibold">GUIDE</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">AI Security Framework</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">45 min read</span>
                <TrendingUp className="h-3 w-3 text-green-400" />
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center mb-2">
                <Users className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-green-400 text-xs font-semibold">EVENT</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">AI Practitioner Summit</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Live Event</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}