import React, { useState } from 'react';

const RevolutionaryCaseStudies2029: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Conscious AI Implementation at Fortune 500",
      company: "Global Tech Corp",
      industry: "Technology",
      challenge: "Implementing conscious AI systems across enterprise operations",
      solution: "Deployed advanced AI consciousness platform with emotional intelligence",
      results: {
        "Efficiency Gain": "+300%",
        "Cost Reduction": "-40%",
        "Customer Satisfaction": "+95%",
        "ROI": "+250%"
      },
      timeline: "6 months",
      team: "15 AI specialists",
      technologies: ["Conscious AI", "Quantum Computing", "Neural Networks"],
      image: "🧠"
    },
    {
      id: 2,
      title: "Quantum Reality Engine for Space Exploration",
      company: "Space Dynamics Inc",
      industry: "Aerospace",
      challenge: "Simulating complex space environments for mission planning",
      solution: "Developed quantum reality engine for accurate space simulation",
      results: {
        "Simulation Accuracy": "+99.9%",
        "Mission Success Rate": "+85%",
        "Cost Savings": "$50M",
        "Time Reduction": "-60%"
      },
      timeline: "12 months",
      team: "25 quantum engineers",
      technologies: ["Quantum Computing", "Reality Simulation", "Space Tech"],
      image: "🚀"
    },
    {
      id: 3,
      title: "Interdimensional Portal for Resource Access",
      company: "Infinite Resources Ltd",
      industry: "Mining & Resources",
      challenge: "Accessing resources from parallel dimensions",
      solution: "Created stable interdimensional portal technology",
      results: {
        "Resource Access": "+∞",
        "Cost Efficiency": "+500%",
        "Environmental Impact": "-90%",
        "Supply Chain": "+1000%"
      },
      timeline: "18 months",
      team: "30 interdimensional scientists",
      technologies: ["Interdimensional Tech", "Portal Physics", "Resource Management"],
      image: "🌌"
    }
  ];

  const getValueColor = (value: string) => {
    if (value.includes('+') || value.includes('%')) return 'text-green-500';
    if (value.includes('-')) return 'text-red-500';
    return 'text-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES • JANUARY 2029
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Revolutionary Case Studies 2029
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover how our revolutionary technologies have transformed businesses across industries
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                onClick={() => setSelectedCase(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCase === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {caseStudy.image} {caseStudy.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Study */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-6xl mb-6">{caseStudies[selectedCase].image}</div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                {caseStudies[selectedCase].title}
              </h2>
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-semibold text-gray-600">Company:</span>
                  <span className="ml-2 text-gray-900">{caseStudies[selectedCase].company}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Industry:</span>
                  <span className="ml-2 text-gray-900">{caseStudies[selectedCase].industry}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Timeline:</span>
                  <span className="ml-2 text-gray-900">{caseStudies[selectedCase].timeline}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Team Size:</span>
                  <span className="ml-2 text-gray-900">{caseStudies[selectedCase].team}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Challenge</h3>
              <p className="text-gray-600 mb-6">{caseStudies[selectedCase].challenge}</p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Solution</h3>
              <p className="text-gray-600 mb-6">{caseStudies[selectedCase].solution}</p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudies[selectedCase].technologies.map((tech, index) => (
                  <span key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Results & Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(caseStudies[selectedCase].results).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${getValueColor(value)}`}>
                  {value}
                </div>
                <div className="text-purple-100 text-lg">{key}</div>
              </div>
            ))}
          </div>
        </div>

        {/* All Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={caseStudy.id}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                selectedCase === index ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setSelectedCase(index)}
            >
              <div className="text-4xl mb-4">{caseStudy.image}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{caseStudy.title}</h3>
              <p className="text-gray-600 mb-4">{caseStudy.company}</p>
              <div className="space-y-2">
                {Object.entries(caseStudy.results).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-sm text-gray-600">{key}:</span>
                    <span className={`text-sm font-semibold ${getValueColor(value)}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join these successful companies and experience the power of revolutionary technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Success Story
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2029;