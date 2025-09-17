import React from 'react';
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Lightbulb className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Revolutionary Innovations 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Next Wave of
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Innovation</span>
            <br />
            is Here
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover groundbreaking technologies that will reshape entire industries and 
            create new possibilities that were once thought impossible.
          </p>
        </div>
        {/* Innovations Grid */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {innovations.map((innovationindex) => (
            <div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-4">
                    {innovation.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {innovation.title}
                    </h3>
                    <div className="text-sm text-gray-400">{innovation.timeline}</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full">
                  <span className="text-blue-300 text-sm font-medium">{innovation.impact}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {innovation.description}
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>In Active Development</span>
              </div>
            </div>
          ))}
        </div>
        {/* Stats Section */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Unprecedented Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((statindex) => (
              <div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-bold text-blue-300 mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Be Among the First to Experience the Future
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our exclusive early access program and be the first to experience 
              these revolutionary technologies that will define the next decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Join Early Access
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RevolutionaryInnovationBanner2026;
</div></div>