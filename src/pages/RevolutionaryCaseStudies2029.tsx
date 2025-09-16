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
      solution: "Deployed our Conscious AI Development Platform with quantum consciousness processing",
      results: {
        efficiency: "+400%",
        costReduction: "$50M",
        wasteReduction: "95%",
        timeToMarket: "-60%"
      },
      technologies: ["Conscious AI", "Quantum Computing", "Neural Networks"],
      duration: "6 months",
      status: "Completed"
    },
    {
      id: 2,
      title: "Neural Reality Interface for Healthcare",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Creating immersive training environments for complex surgical procedures",
      solution: "Implemented Neural Reality Interface with full sensory immersion capabilities",
      results: {
        trainingEfficiency: "+300%",
        errorReduction: "90%",
        patientOutcomes: "+85%",
        costSavings: "$25M"
      },
      technologies: ["Neural Reality", "VR/AR", "AI Simulation"],
      duration: "8 months",
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Molecular AI for Drug Discovery",
      company: "BioPharma Corp",
      industry: "Pharmaceuticals",
      challenge: "Accelerating drug discovery process using molecular-level AI processing",
      solution: "Deployed Molecular AI Systems with DNA-level programming capabilities",
      results: {
        discoverySpeed: "+500%",
        successRate: "+200%",
        costReduction: "$100M",
        timeToMarket: "-70%"
      },
      technologies: ["Molecular AI", "DNA Programming", "Quantum Processing"],
      duration: "12 months",
      status: "Completed"
    },
    {
      id: 4,
      title: "Interdimensional Computing for Space Exploration",
      company: "SpaceTech Ventures",
      industry: "Aerospace",
      challenge: "Processing massive amounts of space data for mission planning and navigation",
      solution: "Implemented Interdimensional Computing for cross-dimensional data processing",
      results: {
        processingPower: "∞",
        dataAccuracy: "99.99%",
        missionSuccess: "+150%",
        fuelEfficiency: "+40%"
      },
      technologies: ["Interdimensional Computing", "Quantum Processing", "Space-Time Algorithms"],
      duration: "18 months",
      status: "In Progress"
    },
    {
      id: 5,
      title: "Quantum Consciousness for Financial Markets",
      company: "Quantum Finance",
      industry: "Financial Services",
      challenge: "Predicting market movements with unprecedented accuracy using quantum consciousness",
      solution: "Deployed Quantum Consciousness Engine for multi-dimensional market analysis",
      results: {
        predictionAccuracy: "98.5%",
        profitIncrease: "+250%",
        riskReduction: "80%",
        tradingSpeed: "+1000%"
      },
      technologies: ["Quantum Consciousness", "AI Prediction", "Neural Networks"],
      duration: "9 months",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES • JANUARY 2029
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Case Studies 2029
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Real-world success stories showcasing the transformative power of our revolutionary technologies
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedCase === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setSelectedCase(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  caseStudy.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                  caseStudy.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {caseStudy.status}
                </span>
                <span className="text-sm opacity-70">{caseStudy.duration}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">{caseStudy.title}</h3>
              <div className="mb-4">
                <p className="text-lg font-semibold text-purple-300">{caseStudy.company}</p>
                <p className="text-sm opacity-70">{caseStudy.industry}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-purple-300">Challenge:</h4>
                <p className="text-sm opacity-90">{caseStudy.challenge}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-purple-300">Solution:</h4>
                <p className="text-sm opacity-90">{caseStudy.solution}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries(caseStudy.results).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{value}</div>
                    <div className="text-xs opacity-70 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-purple-300">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-purple-500/20 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        {selectedCase !== null && (
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-purple-400/30">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {caseStudies[selectedCase].title} - Detailed Analysis
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-300">Company:</h4>
                    <p>{caseStudies[selectedCase].company}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300">Industry:</h4>
                    <p>{caseStudies[selectedCase].industry}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300">Duration:</h4>
                    <p>{caseStudies[selectedCase].duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300">Status:</h4>
                    <p>{caseStudies[selectedCase].status}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Key Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(caseStudies[selectedCase].results).map(([key, value]) => (
                    <div key={key} className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">{value}</div>
                      <div className="text-sm opacity-70 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Technologies Implemented</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudies[selectedCase].technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-center mb-8">Success Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">$500M+</div>
              <div className="text-lg opacity-90">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the companies that are already using our revolutionary technologies to achieve unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Project
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2029;