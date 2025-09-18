import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const SuccessStoriesShowcase = () => {
  const stories = [
    {
      company: 'TechCorp Global',
      industry: 'Technology',
      challenge: 'Manual data processing taking 40+ hours weekly',
      solution: 'Implemented AI-powered automation system',
      results: {
        timeSaved: '95%',
        roi: '3,200%',
        accuracy: '99.8%'
      },
      quote: 'Zion Tech Group transformed our entire operation. What used to take days now happens in minutes.',
      author: 'Sarah JohnsonCEO',
      logo: '🏢'
    },
    {
      company: 'FinanceMax Solutions',
      industry: 'Financial Services',
      challenge: 'Risk assessment taking 2 weeks per client',
      solution: 'Deployed quantum-enhanced analytics platform',
      results: {
        timeSaved: '90%',
        roi: '4,500%',
        accuracy: '99.9%'
      },
      quote: 'The quantum computing solutions gave us an edge that competitors simply cannot match.',
      author: 'Michael ChenCTO',
      logo: '💰'
    },
    {
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Patient data analysis bottleneck',
      solution: 'Neural interface-powered diagnostic system',
      results: {
        timeSaved: '85%',
        roi: '2,800%',
        accuracy: '99.7%'
      },
      quote: 'Our diagnostic accuracy improved dramatically while reducing analysis time by 85%.',
      author: 'Dr. Emily RodriguezChief Medical Officer',
      logo: '🏥'
    },
    {
      company: 'ManufacturingPlus',
      industry: 'Manufacturing',
      challenge: 'Production line optimization inefficiencies',
      solution: 'Autonomous operations management system',
      results: {
        timeSaved: '92%',
        roi: '5,100%',
        accuracy: '99.9%'
      },
      quote: 'The autonomous systems run our production 24/7 with zero downtime. Incredible results.',
      author: 'David ParkOperations Director',
      logo: '🏭'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            🏆 Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real businesses achieving extraordinary results with our revolutionary AI solutions. See how companies are transforming their operations and achieving unprecedented ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {stories.map((storyindex) => (
            <div
              key={story.company}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              {/* Company Header */}
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{story.logo}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                  <p className="text-gray-400">{story.industry}</p>
                </div>
              </div>
              {/* Challenge & Solution */}
              <div className="mb-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">❌ Challenge:</h4>
                  <p className="text-gray-300">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">✅ Solution:</h4>
                  <p className="text-gray-300">{story.solution}</p>
                </div>
              </div>
              {/* Results */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-green-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">{story.results.timeSaved}</div>
                  <div className="text-sm text-gray-300">Time Saved</div>
                </div>
                <div className="text-center bg-blue-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-400">{story.results.roi}</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="text-center bg-purple-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">{story.results.accuracy}</div>
                  <div className="text-sm text-gray-300">Accuracy</div>
                </div>
              </div>
              {/* Quote */}
              <blockquote className="border-l-4 border-cyan-400 pl-4 mb-4">
                <p className="text-gray-300 italic">"{story.quote}"</p>
                <cite className="text-cyan-400 font-semibold">— {story.author}</cite>
              </blockquote>
            </div>
          ))}
        </div>
        {/* Statistics Summary */}
        <div
          className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            📊 Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Companies Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">3,200%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">90%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            🚀 Ready to Join These Success Stories?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with our revolutionary AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/case-studies" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              📖 Read All Case Studies
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              💬 Start Your Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default SuccessStoriesShowcase;
