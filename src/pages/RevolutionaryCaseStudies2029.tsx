import React, { useState } from 'react';

const RevolutionaryCaseStudies2029: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Conscious AI Implementation at Fortune 500",
      company: "GlobalTech Industries",
      industry: "Manufacturing",
      challenge: "Transform legacy manufacturing systems with conscious AI while maintaining 99.9% uptime",
      solution: "Implemented our revolutionary conscious AI systems with quantum-powered processing",
      results: {
        efficiency: "+500%",
        costSavings: "$1.2B",
        accuracy: "99.99%",
        uptime: "99.9%"
      },
      description: "A comprehensive transformation using conscious AI systems that achieved unprecedented efficiency gains",
      technologies: ["Conscious AI", "Quantum Computing", "Neural Interfaces"],
      duration: "12 months",
      team: "75+ experts",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Healthcare Revolution",
      company: "MediTech Solutions",
      industry: "Healthcare",
      challenge: "Accelerate drug discovery process by 1000x while maintaining safety standards",
      solution: "Deployed quantum AI fusion systems with neural interface technology",
      results: {
        efficiency: "+1000%",
        costSavings: "$800M",
        accuracy: "99.95%",
        uptime: "99.8%"
      },
      description: "Revolutionary healthcare transformation using quantum AI for drug discovery",
      technologies: ["Quantum AI", "Neural Interfaces", "Molecular Simulation"],
      duration: "18 months",
      team: "100+ experts",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Integration",
      company: "NeuroTech Corp",
      industry: "Technology",
      challenge: "Create seamless brain-computer interfaces for enhanced human capabilities",
      solution: "Developed advanced neural interface technology with consciousness transfer capabilities",
      results: {
        efficiency: "+300%",
        costSavings: "$500M",
        accuracy: "99.9%",
        uptime: "99.7%"
      },
      description: "Breakthrough neural interface technology that enables direct brain-computer communication",
      technologies: ["Neural Interfaces", "Consciousness Transfer", "Brain-Computer Integration"],
      duration: "24 months",
      team: "50+ experts",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES • 2029
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Revolutionary Case Studies 2029
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover how our revolutionary technologies are transforming industries and creating unprecedented value for organizations worldwide
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                selectedCase === index ? 'ring-4 ring-purple-500' : ''
              }`}
              onClick={() => setSelectedCase(index)}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                  {study.featured && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900">{study.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{study.company}</p>
                <p className="text-gray-700 mb-6 text-sm">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{study.results.efficiency}</div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{study.results.costSavings}</div>
                    <div className="text-xs text-gray-500">Cost Savings</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{study.duration}</span>
                  <span>{study.team}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Case Study Details */}
        {caseStudies[selectedCase] && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  {caseStudies[selectedCase].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {caseStudies[selectedCase].description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-700">{caseStudies[selectedCase].challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-700">{caseStudies[selectedCase].solution}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Results</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">{caseStudies[selectedCase].results.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">{caseStudies[selectedCase].results.costSavings}</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">{caseStudies[selectedCase].results.accuracy}</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">{caseStudies[selectedCase].results.uptime}</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    View Full Case Study →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the revolution and see how our technologies can transform your business with unprecedented results
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
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