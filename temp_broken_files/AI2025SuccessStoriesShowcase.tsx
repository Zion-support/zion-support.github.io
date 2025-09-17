import React from 'react';
const AI2025SuccessStoriesShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.03%22%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%3D%221.5%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Award className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-purple-300 font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Results from
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Real Companies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies across industries are achieving remarkable results with our AI solutions. 
            See the measurable impact and transformation stories.
          </p>
        </div>
        {/* Success Stories Carousel */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Story Navigation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Featured Success Stories</h3>
              {successStories.map((storyindex) => (
                <div
                  key={story.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStory === index
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveStory(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${story.color}`}>
                      <story.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{story.company}</h4>
                      <p className="text-sm text-gray-300">{story.industry}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
            {/* Active Story Display */}
            <div className="lg:col-span-2">
                <div
                  key={activeStory}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20"
                >
                  {/* Story Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${successStories[activeStory].color}`}>
                      <successStories[activeStory].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{successStories[activeStory].company}</h3>
                      <p className="text-purple-300 font-medium">{successStories[activeStory].industry}</p>
                    </div>
                  </div>
                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-red-400" />
                        Challenge
                      </h4>
                      <p className="text-gray-300">{successStories[activeStory].challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                        Solution
                      </h4>
                      <p className="text-gray-300">{successStories[activeStory].solution}</p>
                    </div>
                  </div>
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {Object.entries(successStories[activeStory].results).map(([keyvalue]index) => (
                      <div key={key} className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-sm text-gray-300 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-300 italic mb-2">"{successStories[activeStory].testimonial}"</p>
                        <p className="text-sm text-purple-300 font-medium">- {successStories[activeStory].company} Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Overall Metrics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Proven Impact Across All Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metricindex) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Industries Served */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Trusted Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industryindex) => (
              <div
                key={index}
                className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-3 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                  <industry.icon className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors" />
                </div>
                <div className="text-lg font-semibold text-white mb-1">{industry.name}</div>
                <div className="text-sm text-gray-400">{industry.count} companies</div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI solutions and expert implementation team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AI2025SuccessStoriesShowcase;
