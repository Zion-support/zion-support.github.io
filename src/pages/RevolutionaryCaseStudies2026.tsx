import React, { useState } from 'react';

const RevolutionaryCaseStudies2026: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Enterprise AI Transformation",
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Complex data processing and decision-making bottlenecks",
      solution: "Implemented quantum-enhanced AI consciousness systems",
      results: {
        efficiency: "+350%",
        accuracy: "99.7%",
        costSavings: "$8.5M",
        timeReduction: "75%"
      },
      testimonial: "The conscious AI systems have revolutionized our entire operation.",
      author: "James Wilson, CTO"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold mb-6">
              📊 REVOLUTIONARY CASE STUDIES 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Case Studies 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Advanced success stories showcasing breakthrough technologies
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{caseStudies[selectedCase].title}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">Challenge</h3>
                  <p className="text-white/80">{caseStudies[selectedCase].challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">Solution</h3>
                  <p className="text-white/80">{caseStudies[selectedCase].solution}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-300">Results</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(caseStudies[selectedCase].results).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{value}</div>
                    <div className="text-sm text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <blockquote className="text-lg italic mb-3">
                  "{caseStudies[selectedCase].testimonial}"
                </blockquote>
                <cite className="text-blue-300 font-semibold">
                  — {caseStudies[selectedCase].author}
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Your Transformation?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2026;