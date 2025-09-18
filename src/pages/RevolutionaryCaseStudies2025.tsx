import React from 'react';

const RevolutionaryCaseStudies2025 = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $2M annual losses",
      solution: "Implemented conscious AI systems with autonomous decision-making capabilities",
      results: {
        efficiency: "+400%",
        costSavings: "$5M annually",
        accuracy: "99.9%",
        timeline: "6 months"
      },
      description: "Transformed a traditional manufacturing company into an AI-powered operation that reduced costs by 60% and increased productivity by 400% across all departments.",
      technologies: ["Conscious AI", "Autonomous Systems", "Predictive Analytics", "Real-time Optimization"],
      image: "🏭"
    },
      id: 2,
      title: "Quantum Financial Optimization",
      company: "Financial Services Inc",
      industry: "Finance",
      challenge: "Complex portfolio optimization taking weeks to process with suboptimal results",
      solution: "Deployed quantum-enhanced AI for real-time financial modeling and risk analysis",
        processing: "1000x faster",
        accuracy: "99.8%",
        returns: "+35%",
        timeline: "4 months"
      description: "Revolutionized financial portfolio management using quantum computing to process complex optimization problems in real-time, achieving unprecedented accuracy and returns.",
      technologies: ["Quantum Computing", "Financial AI", "Risk Analysis", "Real-time Processing"],
      image: "💰"
      id: 3,
      title: "Neural Interface Healthcare",
      company: "Healthcare Systems Ltd",
      industry: "Healthcare",
      challenge: "Manual diagnosis processes causing delays and 15% misdiagnosis rate",
      solution: "Integrated neural interface AI for direct brain-computer communication in medical diagnosis",
        speed: "10x faster",
        efficiency: "+300%",
        timeline: "8 months"
      description: "Pioneered neural interface technology in healthcare, enabling doctors to interact directly with AI systems for faster, more accurate diagnoses.",
      technologies: ["Neural Interfaces", "Medical AI", "Brain-Computer Interface", "Diagnostic Systems"],
      image: "🏥"
      id: 4,
      title: "Quantum Drug Discovery",
      company: "Pharmaceutical Research Co",
      industry: "Pharmaceuticals",
      challenge: "Drug discovery process taking 10+ years with 90% failure rate",
      solution: "Implemented quantum molecular simulation for accelerated drug discovery",
        success: "+200%",
        cost: "-70%",
        timeline: "12 months"
      description: "Revolutionized pharmaceutical research using quantum computing to simulate molecular interactions, reducing drug discovery time from 10 years to 1 year.",
      technologies: ["Quantum Simulation", "Molecular AI", "Drug Discovery", "Biotechnology"],
      image: "💊"
      id: 5,
      title: "Autonomous Supply Chain",
      company: "Logistics Global Ltd",
      industry: "Logistics",
      challenge: "Supply chain disruptions causing $10M annual losses and 30% delivery delays",
      solution: "Deployed autonomous AI agents for end-to-end supply chain optimization",
        efficiency: "+250%",
        delays: "-95%",
        cost: "-40%",
        timeline: "5 months"
      description: "Created the world's first fully autonomous supply chain using AI agents that predict, prevent, and resolve disruptions in real-time.",
      technologies: ["Autonomous AI", "Supply Chain Optimization", "Predictive Analytics", "Real-time Monitoring"],
      image: "🚚"
      id: 6,
      title: "Quantum Climate Modeling",
      company: "Environmental Research Institute",
      industry: "Environmental Science",
      challenge: "Climate models taking months to process with limited accuracy",
      solution: "Implemented quantum-enhanced climate simulation for high-precision modeling",
        accuracy: "1000x detail",
        speed: "100x faster",
        resolution: "1km precision",
        timeline: "9 months"
      description: "Advanced climate science using quantum computing to create the most detailed and accurate climate models ever developed.",
      technologies: ["Quantum Computing", "Climate AI", "Environmental Modeling", "Data Science"],
      image: "🌍"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🏆 REVOLUTIONARY CASE STUDIES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing how our revolutionary technologies are transforming industries and driving unprecedented results
            </p>
          </div>
        </div>
      </div>
      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="text-6xl mr-6">{study.image}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <div className="text-gray-300 mb-4">
                    <div className="font-semibold">{study.company}</div>
                    <div className="text-sm">{study.industry}</div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-purple-400">Challenge</h4>
                <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold mb-2 text-cyan-400">Solution</h4>
                <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(study.results).map(([key, value], idx) => (
                  <div key={idx} className="text-center bg-gray-800/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-400">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">{key}</div>
                ))}
                <h4 className="text-lg font-semibold mb-2 text-emerald-400">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full text-sm border border-purple-400/30">
                      {tech}
                    </span>
                  ))}
              <p className="text-gray-300 text-sm mb-6">{study.description}</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read Full Case Study →
              </button>
          ))}
        {/* Success Metrics */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-gray-700/50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Success Metrics</h2>
            <p className="text-xl opacity-90">
              Measurable results across all our revolutionary implementations
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-lg font-semibold mb-1">Projects Completed</div>
              <div className="text-gray-400 text-sm">Across all industries</div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-1">Success Rate</div>
              <div className="text-gray-400 text-sm">Project delivery success</div>
              <div className="text-5xl font-bold text-emerald-400 mb-2">$50M+</div>
              <div className="text-lg font-semibold mb-1">Cost Savings</div>
              <div className="text-gray-400 text-sm">Total client savings</div>
              <div className="text-5xl font-bold text-pink-400 mb-2">300%</div>
              <div className="text-lg font-semibold mb-1">Average ROI</div>
              <div className="text-gray-400 text-sm">Return on investment</div>
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their operations with our revolutionary technologies. Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Download Case Studies
    </div>
  );
};
export default RevolutionaryCaseStudies2025;
