import React from 'react';
const AIToolsUltimateShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%253D%2522%25239C92AC%2522%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-indigo-400 mr-2" />
            <span className="text-indigo-300 font-medium">AI Tools Ultimate Collection 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful AI Tools for
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Every Business Need
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI-powered tools designed to 
            revolutionize productivitydevelopmentanalyticsand more. 
            Choose from 50+ cutting-edge solutions.
          </p>
        </div>
        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((statindex) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
                  <StatIcon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
        {/* Category Navigation */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(categories).map(([keycategory]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>
        {/* Category Header */}
        <div
          key={activeCategory}
          className="text-center mb-12"
        >
          {(() => {
            const category = categories[activeCategory];
            const Icon = category.icon;
            return (
              <div>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
            );
          })()}
        </div>
        {/* Tools Grid */}
        <div
          key={activeCategory}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {tools[activeCategory].map((toolindex) => {
            const ToolIcon = tool.icon;
            return (
              <div
                key={index}
                onHoverStart={() => setHoveredTool(index)}
                onHoverEnd={() => setHoveredTool(null)}
                className="group relative"
              >
                <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 ${
                  hoveredTool === index ? 'scale-105 shadow-2xl' : ''
                }`}>
                  {/* Tool Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.color}`}>
                      <ToolIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-bold text-white">{tool.rating}</span>
                    </div>
                  </div>
                  {/* Tool Info */}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {tool.features.map((featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-400">
                      <Users className="w-4 h-4 inline mr-1" />
                      {tool.users} users
                    </div>
                    <div className={`text-lg font-bold ${
                      tool.price === 'Free' ? 'text-green-400' : 'text-white'
                    }`}>
                      {tool.price}
                    </div>
                  </div>
                  {/* Action Button */}
                  <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                    tool.price === 'Free'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                  } hover:scale-105`}>
                    {tool.price === 'Free' ? 'Get Started' : 'Try Free Trial'}
                  </button>
                </div>
                {/* Hover Effect */}
                {hoveredTool === index && (
                  <div
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  >
                    Popular
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* CTA Section */}
        <div
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Workflow?
              </h3>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join over 1 million users who are already experiencing the power 
                of our AI tools. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );



export default AIToolsUltimateShowcase2026;
