import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightWrenchCodeDatabaseBarChart3ShieldZapBrainStar

export default function AIToolsUtilities2025Banner() {
  const tools = [
    { icon: Codename: "Dev Tools"color: "blue" },
    { icon: Databasename: "Data & Analytics"color: "green" },
    { icon: BarChart3name: "Business Intelligence"color: "purple" },
    { icon: Shieldname: "Security"color: "red" },
    { icon: Zapname: "Automation"color: "yellow" },
    { icon: Brainame: "AI & ML"color: "pink" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border border-blue-500/30 rounded-2xl p-8 mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <Wrench className="h-8 w-8 text-blue-400 mr-3 animate-pulse" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                🛠️ NEW TOOLS COLLECTION
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI Tools & Utilities 2025
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Discover 100+ powerful AI tools and utilities designed to accelerate your development
              streamline operationsand maximize productivity across all business functions.
            </p>

            {/* Tool Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {tools.map((toolindex) => {
                const IconComponent = tool.icon;
                const colorClasses = {
                  blue: "text-blue-400 bg-blue-500/20",
                  green: "text-green-400 bg-green-500/20",
                  purple: "text-purple-400 bg-purple-500/20",
                  red: "text-red-400 bg-red-500/20",
                  yellow: "text-yellow-400 bg-yellow-500/20",
                  pink: "text-pink-400 bg-pink-500/20"
                };
                
                return (
                  <div key={index} className={`flex items-center p-3 rounded-lg ${colorClasses[tool.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/ai-tools-utilities-2025"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get Custom Solutions
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-shrink-0 lg:ml-8">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/40 to-pink-400/40 rounded-full flex items-center justify-center">
                    <Wrench className="h-16 w-16 text-white animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                </div>
              </div>
              
              {/* Floating Tool Icons */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center animate-bounce">
                <Code className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Database className="h-4 w-4 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s' }}>
                <Zap className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">100+</div>
              <div className="text-sm text-gray-400">AI Tools Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">6</div>
              <div className="text-sm text-gray-400">Tool Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">4.8</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}