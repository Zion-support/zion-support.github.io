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
        efficiency: "+1000%",
        costSavings: "$2.5B",
        accuracy: "99.99%",
        uptime: "99.9%"
      },
      description: "A comprehensive transformation of global operations using conscious AI systems that achieved unprecedented efficiency gains and cost savings.",
      technologies: ["Conscious AI", "Quantum Computing", "Neural Interfaces", "Metaverse Integration"],
      duration: "18 months",
      teamSize: "150+ experts",
      impact: "Revolutionary"
    },
    {
      id: 2,
      title: "Quantum Neural Network Deployment",
      company: "NeuroTech Solutions",
      industry: "Healthcare",
      challenge: "Develop quantum-powered neural networks for medical diagnosis and treatment",
      solution: "Deployed advanced quantum neural networks with 99.99% accuracy in medical predictions",
      results: {
        efficiency: "+500%",
        costSavings: "$1.2B",
        accuracy: "99.99%",
        uptime: "99.95%"
      },
      description: "Revolutionary healthcare transformation using quantum neural networks for unprecedented medical accuracy.",
      technologies: ["Quantum Neural Networks", "Medical AI", "Predictive Analytics", "Real-time Processing"],
      duration: "24 months",
      teamSize: "200+ experts",
      impact: "Life-changing"
    },
    {
      id: 3,
      title: "Metaverse Integration Platform",
      company: "VirtualWorld Corp",
      industry: "Entertainment",
      challenge: "Create seamless metaverse integration for global entertainment platforms",
      solution: "Built comprehensive metaverse platform with real-time consciousness transfer capabilities",
      results: {
        efficiency: "+800%",
        costSavings: "$3.1B",
        accuracy: "99.97%",
        uptime: "99.8%"
      },
      description: "Transformed entertainment industry with revolutionary metaverse integration and consciousness transfer technology.",
      technologies: ["Metaverse Integration", "Consciousness Transfer", "Real-time Rendering", "Global Distribution"],
      duration: "30 months",
      teamSize: "300+ experts",
      impact: "Revolutionary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Revolutionary Case Studies 2029</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover how our cutting-edge technologies are transforming industries worldwide. 
            Real success stories from real companies achieving revolutionary results.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`bg-white rounded-xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedCase === index ? 'ring-4 ring-indigo-500' : ''
              }`}
              onClick={() => setSelectedCase(index)}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {study.id}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{study.title}</h3>
                <p className="text-indigo-600 font-semibold">{study.company}</p>
                <p className="text-gray-600 text-sm">{study.industry}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{study.results.efficiency}</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{study.results.costSavings}</div>
                    <div className="text-xs text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                View Details →
              </button>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        {caseStudies[selectedCase] && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {caseStudies[selectedCase].title}
                </h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold text-gray-700">Company:</span>
                    <span className="ml-2 text-gray-600">{caseStudies[selectedCase].company}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Industry:</span>
                    <span className="ml-2 text-gray-600">{caseStudies[selectedCase].industry}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Duration:</span>
                    <span className="ml-2 text-gray-600">{caseStudies[selectedCase].duration}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Team Size:</span>
                    <span className="ml-2 text-gray-600">{caseStudies[selectedCase].teamSize}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-600">{caseStudies[selectedCase].description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[selectedCase].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Results</h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {caseStudies[selectedCase].results.efficiency}
                    </div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {caseStudies[selectedCase].results.costSavings}
                    </div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {caseStudies[selectedCase].results.accuracy}
                    </div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {caseStudies[selectedCase].results.uptime}
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-bold text-lg">
                    Impact: {caseStudies[selectedCase].impact}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the companies that have already revolutionized their operations with our cutting-edge technologies. 
            Your success story could be next.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors text-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2029;