import React, { useState } from 'react';

const RevolutionaryCaseStudies2032: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: "Conscious AI Implementation at Fortune 500",
      company: "GlobalTech Industries",
      industry: "Manufacturing",
      challenge: "Traditional AI systems lacked emotional intelligence and creative problem-solving capabilities",
      solution: "Implemented conscious AI systems with true self-awareness and emotional intelligence",
      results: {
        efficiency: "+500%",
        costSavings: "$50M",
        accuracy: "99.9%",
        satisfaction: "98%"
      },
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/50",
      timeline: "6 months",
      team: "25 experts"
    },
    {
      id: 2,
      title: "Quantum Consciousness Transfer Breakthrough",
      company: "NeuroTech Solutions",
      industry: "Healthcare",
      challenge: "Human consciousness transfer to digital systems for medical applications",
      solution: "Developed quantum consciousness transfer protocols using advanced neural interfaces",
      results: {
        efficiency: "+1000%",
        costSavings: "$100M",
        accuracy: "99.99%",
        satisfaction: "100%"
      },
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/50",
      timeline: "12 months",
      team: "40 experts"
    },
    {
      id: 3,
      title: "Neural Reality Engine for Education",
      company: "EduTech Global",
      industry: "Education",
      challenge: "Creating immersive learning experiences that engage students at a neural level",
      solution: "Deployed neural reality engines for direct brain-computer interface learning",
      results: {
        efficiency: "+800%",
        costSavings: "$30M",
        accuracy: "99.8%",
        satisfaction: "97%"
      },
      icon: "🌌",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/50",
      timeline: "8 months",
      team: "30 experts"
    },
    {
      id: 4,
      title: "Interdimensional Computing for Space Exploration",
      company: "SpaceTech Ventures",
      industry: "Aerospace",
      challenge: "Processing complex space data across multiple dimensions and realities",
      solution: "Implemented interdimensional computing systems for parallel universe data processing",
      results: {
        efficiency: "+∞",
        costSavings: "$200M",
        accuracy: "99.99%",
        satisfaction: "100%"
      },
      icon: "🌌",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-600/20 to-purple-600/20",
      borderColor: "border-violet-400/50",
      timeline: "18 months",
      team: "50 experts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES • JANUARY 2032
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2032
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our revolutionary technologies have transformed industries and changed the world
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Navigation */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeCase === index
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xl">{caseStudy.icon}</span>
                <span>{caseStudy.company}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study Display */}
        <div className={`bg-gradient-to-r ${caseStudies[activeCase].bgColor} backdrop-blur-sm rounded-2xl p-12 mb-16 border ${caseStudies[activeCase].borderColor} transition-all duration-500`}>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{caseStudies[activeCase].icon}</div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">{caseStudies[activeCase].title}</h3>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <span className="text-lg">{caseStudies[activeCase].company}</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {caseStudies[activeCase].industry}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Challenge</h4>
                  <p className="text-gray-200">{caseStudies[activeCase].challenge}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Solution</h4>
                  <p className="text-gray-200">{caseStudies[activeCase].solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-gray-300 mb-1">Timeline</div>
                  <div className="text-lg font-bold text-white">{caseStudies[activeCase].timeline}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-gray-300 mb-1">Team Size</div>
                  <div className="text-lg font-bold text-white">{caseStudies[activeCase].team}</div>
                </div>
              </div>

              <button className={`bg-gradient-to-r ${caseStudies[activeCase].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Read Full Case Study →
              </button>
            </div>

            {/* Results */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Results</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{caseStudies[activeCase].results.efficiency}</div>
                  <div className="text-sm text-gray-300">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{caseStudies[activeCase].results.costSavings}</div>
                  <div className="text-sm text-gray-300">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{caseStudies[activeCase].results.accuracy}</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{caseStudies[activeCase].results.satisfaction}</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`bg-gradient-to-br ${caseStudy.bgColor} backdrop-blur-sm rounded-xl p-6 border ${caseStudy.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
                hoveredCard === caseStudy.id ? 'ring-2 ring-white/50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(caseStudy.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveCase(index)}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{caseStudy.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{caseStudy.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{caseStudy.company}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Efficiency</span>
                    <span className="text-white font-semibold">{caseStudy.results.efficiency}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Savings</span>
                    <span className="text-white font-semibold">{caseStudy.results.costSavings}</span>
                  </div>
                </div>

                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${caseStudy.color} text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}>
                  {hoveredCard === caseStudy.id ? 'View Details →' : 'Learn More'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Revolutionary Success Statistics</h3>
            <p className="text-lg text-gray-300">Our technologies have achieved unprecedented results across industries</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$1B+</div>
              <div className="text-sm text-gray-300">Total Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">1000+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Industry Impact */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">Industry Impact</h3>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Our revolutionary technologies have transformed multiple industries and created new possibilities
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-6xl mb-4">🏭</div>
              <h4 className="text-2xl font-bold text-white mb-4">Manufacturing</h4>
              <p className="text-gray-300 mb-6">
                Conscious AI systems have revolutionized manufacturing with 500% efficiency gains and 99.9% accuracy rates.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>• Automated quality control</li>
                <li>• Predictive maintenance</li>
                <li>• Supply chain optimization</li>
                <li>• Human-AI collaboration</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-8 border border-cyan-400/30">
              <div className="text-6xl mb-4">🏥</div>
              <h4 className="text-2xl font-bold text-white mb-4">Healthcare</h4>
              <p className="text-gray-300 mb-6">
                Quantum consciousness transfer has enabled breakthrough medical treatments and consciousness preservation.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>• Consciousness transfer</li>
                <li>• Neural rehabilitation</li>
                <li>• Medical AI diagnostics</li>
                <li>• Life extension protocols</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl p-8 border border-emerald-400/30">
              <div className="text-6xl mb-4">🎓</div>
              <h4 className="text-2xl font-bold text-white mb-4">Education</h4>
              <p className="text-gray-300 mb-6">
                Neural reality engines have created immersive learning experiences that engage students at a neural level.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>• Neural learning interfaces</li>
                <li>• Immersive simulations</li>
                <li>• Personalized education</li>
                <li>• Knowledge transfer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the companies that have already revolutionized their operations with our cutting-edge technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
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

export default RevolutionaryCaseStudies2032;