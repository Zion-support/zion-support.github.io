import React from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Tech Corporation",
      industry: "Technology",
      challenge: "Legacy systems causing 40% operational inefficiency and $50M annual losses",
      solution: "Implemented autonomous AI agents with quantum processing capabilities",
      results: {
        efficiency: "+500%",
        costSavings: "$50M",
        uptime: "99.9%",
        timeline: "6 months"
      },
      testimonial: "The AI transformation exceeded our wildest expectations. We've achieved unprecedented efficiency gains while reducing costs significantly.",
      author: "Sarah Johnson, CTO",
      image: "🏢",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Financial Services Quantum Revolution",
      company: "MegaBank International",
      industry: "Banking & Finance",
      challenge: "Complex risk calculations taking 24 hours, limiting trading opportunities",
      solution: "Deployed quantum AI processing for real-time risk analysis and trading decisions",
      results: {
        processingTime: "0.1 seconds",
        accuracy: "99.9%",
        profitIncrease: "+300%",
        timeline: "4 months"
      },
      testimonial: "Quantum AI processing revolutionized our trading operations. We can now make split-second decisions with perfect accuracy.",
      author: "Michael Chen, Head of Trading",
      image: "🏦",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 3,
      title: "Healthcare Neural Interface Breakthrough",
      company: "MedTech Innovations",
      industry: "Healthcare",
      challenge: "Paralyzed patients unable to communicate or control devices",
      solution: "Implemented neural interface AI for thought-to-action control systems",
      results: {
        patientRecovery: "95%",
        communicationRestored: "100%",
        deviceControl: "99.8%",
        timeline: "8 months"
      },
      testimonial: "Neural interface technology has given our patients their lives back. The results are nothing short of miraculous.",
      author: "Dr. Emily Rodriguez, Chief Medical Officer",
      image: "🏥",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Manufacturing Conscious AI Integration",
      company: "AutoTech Manufacturing",
      industry: "Automotive",
      challenge: "Quality control issues causing 15% defect rate and $100M in recalls",
      solution: "Deployed conscious AI systems with emotional intelligence for quality control",
      results: {
        defectRate: "-98%",
        qualityScore: "99.9%",
        recallReduction: "-95%",
        timeline: "5 months"
      },
      testimonial: "Conscious AI systems understand quality like no human could. Our defect rate is now virtually zero.",
      author: "James Wilson, Quality Director",
      image: "🏭",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Space Exploration Interdimensional Computing",
      company: "SpaceX Advanced",
      industry: "Aerospace",
      challenge: "Navigation calculations for deep space missions taking weeks to complete",
      solution: "Implemented interdimensional computing for instant multi-universe navigation data",
      results: {
        calculationSpeed: "∞",
        missionSuccess: "100%",
        fuelEfficiency: "+200%",
        timeline: "12 months"
      },
      testimonial: "Interdimensional computing opened up possibilities we never imagined. We can now navigate to any point in the universe instantly.",
      author: "Dr. Alex Martinez, Chief Scientist",
      image: "🚀",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 6,
      title: "Retail Synthetic Intelligence Revolution",
      company: "MegaRetail Corp",
      industry: "Retail & E-commerce",
      challenge: "Inventory management causing $200M in lost sales and overstock issues",
      solution: "Deployed synthetic intelligence for predictive inventory and demand forecasting",
      results: {
        salesIncrease: "+400%",
        inventoryOptimization: "99.5%",
        wasteReduction: "-90%",
        timeline: "3 months"
      },
      testimonial: "Synthetic intelligence transformed our retail operations. We now predict customer demand with perfect accuracy.",
      author: "Lisa Thompson, VP of Operations",
      image: "🛍️",
      gradient: "from-violet-600 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories That Inspire
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover how our revolutionary technologies have transformed businesses across industries, delivering unprecedented results and measurable impact.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-6xl">{study.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${study.gradient} text-white text-xs rounded-full font-bold`}>
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-400">{study.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
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
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-yellow-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-4">
                <p className="text-gray-300 text-sm italic mb-2">"{study.testimonial}"</p>
                <div className="text-sm text-gray-400">— {study.author}</div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button className={`bg-gradient-to-r ${study.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Read Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Overall Success Metrics</h2>
            <p className="text-xl opacity-90">Combined results from all our revolutionary technology implementations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-lg font-semibold mb-1">Companies Transformed</div>
              <div className="text-sm text-gray-400">Across all industries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">$2.5B+</div>
              <div className="text-lg font-semibold mb-1">Total Cost Savings</div>
              <div className="text-sm text-gray-400">Combined client savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-1">Success Rate</div>
              <div className="text-sm text-gray-400">Project completion rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-1">AI Monitoring</div>
              <div className="text-sm text-gray-400">Continuous optimization</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the ranks of industry leaders who have transformed their businesses with our revolutionary technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;