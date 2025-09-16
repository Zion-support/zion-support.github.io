import React, { useState } from 'react';

const RevolutionaryCaseStudies2029: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Conscious AI Implementation at Fortune 500",
      company: "GlobalTech Industries",
      industry: "Manufacturing",
      challenge: "Implementing conscious AI systems to optimize production and reduce waste",
      solution: "Deployed our revolutionary conscious AI platform with quantum processing capabilities",
      results: {
        efficiency: "+400%",
        costSavings: "$2.5B",
        accuracy: "99.9%",
        wasteReduction: "95%"
      },
      description: "A comprehensive transformation using conscious AI that achieved unprecedented efficiency gains and cost savings.",
      technologies: ["Conscious AI", "Quantum Computing", "Neural Interfaces"],
      duration: "18 months",
      team: "150+ experts",
      featured: true
    },
    {
      id: 2,
      title: "Quantum AI Drug Discovery Breakthrough",
      company: "MediTech Solutions",
      industry: "Healthcare",
      challenge: "Accelerate drug discovery process by 1000x while maintaining safety standards",
      solution: "Implemented quantum AI fusion systems with neural interface technology",
      results: {
        efficiency: "+1000x",
        costSavings: "$500M",
        accuracy: "99.9%",
        drugsDiscovered: "25+"
      },
      description: "Revolutionary drug discovery platform using quantum AI that identified 25+ new life-saving medications.",
      technologies: ["Quantum AI", "Neural Interfaces", "Molecular Simulation"],
      duration: "12 months",
      team: "80+ experts",
      featured: true
    },
    {
      id: 3,
      title: "Interdimensional Computing Space Mission",
      company: "SpaceTech Innovations",
      industry: "Aerospace",
      challenge: "Launch quantum-powered space exploration mission to discover new planets",
      solution: "Deployed interdimensional computing systems with quantum consciousness",
      results: {
        efficiency: "+500%",
        costSavings: "$1B",
        accuracy: "99.99%",
        planetsDiscovered: "10+"
      },
      description: "Breakthrough space exploration mission using interdimensional computing that discovered 10+ new planets.",
      technologies: ["Interdimensional Computing", "Quantum Consciousness", "Neural Interfaces"],
      duration: "24 months",
      team: "200+ experts",
      featured: true
    }
  ];

  const getResultColor = (value: string) => {
    if (value.includes('+') || value.includes('%')) return 'text-green-500';
    if (value.includes('-')) return 'text-red-500';
    return 'text-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES • 2029
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Revolutionary Case Studies 2029
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover how our revolutionary technologies are transforming industries and creating unprecedented value
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCase === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {caseStudy.title}
            </button>
          ))}
        </div>

        {/* Selected Case Study */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{caseStudies[selectedCase].title}</h2>
                  <p className="text-gray-600">{caseStudies[selectedCase].company} • {caseStudies[selectedCase].industry}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Challenge</h3>
                  <p className="text-gray-700">{caseStudies[selectedCase].challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Solution</h3>
                  <p className="text-gray-700">{caseStudies[selectedCase].solution}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Description</h3>
                  <p className="text-gray-700">{caseStudies[selectedCase].description}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Results</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(caseStudies[selectedCase].results).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 text-center">
                    <div className={`text-2xl font-bold ${getResultColor(value)}`}>{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[selectedCase].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{caseStudies[selectedCase].duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{caseStudies[selectedCase].team}</div>
                    <div className="text-sm text-gray-600">Team Size</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {caseStudies[selectedCase].featured ? '⭐ Featured' : '📋 Standard'}
                    </div>
                    <div className="text-sm text-gray-600">Status</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Case Studies Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">All Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{caseStudy.title}</h3>
                    <p className="text-sm text-gray-600">{caseStudy.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">{caseStudy.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    {caseStudy.duration} • {caseStudy.team}
                  </div>
                  <button
                    onClick={() => setSelectedCase(index)}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the companies that are already transforming their operations with our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2029;