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
      description: "Transformed a traditional manufacturing operation into a fully automated, AI-driven facility that increased efficiency by 400% while reducing costs by $12M annually.",
      technologies: ["Autonomous AI Agents", "Quantum Processing", "Predictive Analytics", "Computer Vision"],
      image: "🏭",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Healthcare AI Breakthrough",
      company: "Metropolitan Health System",
      industry: "Healthcare",
      challenge: "Slow diagnostic processes and high error rates",
      solution: "Deployed neural interface AI and quantum diagnostic systems",
      results: {
        efficiency: "+300%",
        costSavings: "$8M",
        accuracy: "99.7%",
        timeReduction: "75%"
      },
      description: "Revolutionized patient care with AI-powered diagnostic systems that reduced diagnosis time by 75% while achieving 99.7% accuracy in medical predictions.",
      technologies: ["Neural Interface AI", "Quantum Diagnostics", "Predictive Analytics", "Computer Vision"],
      image: "🏥",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Financial Services Transformation",
      company: "Global Investment Bank",
      industry: "Finance",
      challenge: "Fraud detection inefficiencies and manual processes",
      solution: "Integrated conversational AI and advanced analytics systems",
      results: {
        efficiency: "+500%",
        costSavings: "$25M",
        accuracy: "99.9%",
        timeReduction: "90%"
      },
      description: "Eliminated financial fraud with AI systems that achieved 99.9% accuracy in fraud detection, preventing $25M in potential losses while reducing processing time by 90%.",
      technologies: ["Conversational AI", "Predictive Analytics", "Computer Vision", "Quantum Processing"],
      image: "🏦",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Retail AI Revolution",
      company: "E-Commerce Giant",
      industry: "Retail",
      challenge: "Poor customer experience and inventory management",
      solution: "Deployed autonomous AI agents and computer vision systems",
      results: {
        efficiency: "+350%",
        costSavings: "$15M",
        accuracy: "99.8%",
        timeReduction: "85%"
      },
      description: "Transformed customer experience with AI-powered personalization and automated inventory management, increasing customer satisfaction by 350% while reducing costs by $15M.",
      technologies: ["Autonomous AI Agents", "Computer Vision", "Predictive Analytics", "Conversational AI"],
      image: "🛍️",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Transportation AI Innovation",
      company: "Global Logistics Corp",
      industry: "Transportation",
      challenge: "Route optimization and fleet management inefficiencies",
      solution: "Implemented quantum AI processing and predictive analytics",
      results: {
        efficiency: "+450%",
        costSavings: "$20M",
        accuracy: "99.6%",
        timeReduction: "70%"
      },
      description: "Optimized global logistics with AI systems that reduced fuel costs by 40% and improved delivery times by 70% through intelligent route optimization.",
      technologies: ["Quantum AI Processing", "Predictive Analytics", "Computer Vision", "Autonomous AI Agents"],
      image: "🚛",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 6,
      title: "Energy Sector Revolution",
      company: "Renewable Energy Corp",
      industry: "Energy",
      challenge: "Inefficient energy distribution and grid management",
      solution: "Deployed neural interface AI and quantum optimization systems",
      results: {
        efficiency: "+380%",
        costSavings: "$18M",
        accuracy: "99.8%",
        timeReduction: "65%"
      },
      description: "Revolutionized energy distribution with AI systems that optimized grid performance, reduced energy waste by 60%, and saved $18M in operational costs.",
      technologies: ["Neural Interface AI", "Quantum Optimization", "Predictive Analytics", "Computer Vision"],
      image: "⚡",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🏆 REVOLUTIONARY CASE STUDIES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Case Studies
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our cutting-edge AI solutions are transforming industries and delivering unprecedented results for businesses worldwide.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with our cutting-edge AI solutions. Start your transformation journey today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
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