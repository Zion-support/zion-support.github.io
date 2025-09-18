import React from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Revolution",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and high operational costs",
      solution: "Implemented autonomous AI agents and quantum processing systems",
      results: {
        efficiency: "+400%",
        costSavings: "$12M",
        accuracy: "99.9%",
        timeReduction: "80%"
      },
      testimonial: "The AI revolution has completely transformed our operations. We've achieved results we never thought possible.",
      author: "Sarah Johnson, CEO"
    },
    {
      id: 2,
      title: "Healthcare AI Transformation",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Slow diagnosis processes and medical error rates",
      solution: "Deployed conscious AI diagnostic systems with neural interface integration",
      results: {
        accuracy: "99.8%",
        speed: "+500%",
        errorReduction: "95%",
        patientSatisfaction: "98%"
      },
      testimonial: "Our AI systems now diagnose conditions faster and more accurately than ever before.",
      author: "Dr. Michael Chen, Chief Medical Officer"
    },
    {
      id: 3,
      title: "Educational Revolution Platform",
      company: "Future Learning Institute",
      industry: "Education",
      challenge: "Personalized learning at scale and student engagement",
      solution: "Implemented quantum-enhanced AI tutoring systems",
      results: {
        engagement: "+300%",
        performance: "+250%",
        completion: "95%",
        satisfaction: "97%"
      },
      testimonial: "Students are achieving learning outcomes we never imagined possible.",
      author: "Prof. Lisa Rodriguez, Director of Innovation"
    }
  ];

  const getResultColor = (value: string) => {
    if (value.includes('∞') || value.includes('100%')) return 'text-green-400';
    if (value.includes('+')) return 'text-cyan-400';
    if (value.includes('$')) return 'text-emerald-400';
    return 'text-purple-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-semibold mb-6">
              📊 REVOLUTIONARY CASE STUDIES 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing the transformative power of our revolutionary technologies
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl">{study.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <div className="flex items-center space-x-2 text-sm opacity-80">
                      <span>{study.company}</span>
                      <span>•</span>
                      <span>{study.industry}</span>
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 bg-gradient-to-r ${study.color} text-white text-xs font-semibold rounded-full`}>
                  SUCCESS
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-red-400">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-green-400">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">Description:</h4>
                  <p className="text-gray-300 text-sm">{study.description}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">{study.results.efficiency}</div>
                  <div className="text-xs opacity-80">Efficiency Gain</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{study.results.costSavings}</div>
                  <div className="text-xs opacity-80">Cost Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{study.results.accuracy}</div>
                  <div className="text-xs opacity-80">Accuracy Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-orange-400">{study.results.timeReduction}</div>
                  <div className="text-xs opacity-80">Time Reduction</div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className={`w-full bg-gradient-to-r ${study.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                View Detailed Case Study →
              </button>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Overall Success Metrics</h2>
            <p className="text-xl opacity-90">Combined results across all our revolutionary AI implementations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">+400%</div>
              <div className="text-lg opacity-80">Average Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">$98M</div>
              <div className="text-lg opacity-80">Total Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.8%</div>
              <div className="text-lg opacity-80">Average Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-lg opacity-80">Companies Transformed</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation →
            </button>
            <button className="border border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;