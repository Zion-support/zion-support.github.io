import React from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $50M annual losses",
      solution: "Implemented AI consciousness platform with quantum-enhanced decision making",
      results: [
        "300% increase in operational efficiency",
        "$50M annual cost savings",
        "99.9% system uptime achieved",
        "Zero human error in critical processes"
      ],
      timeline: "6 months",
      roi: "500%",
      image: "🏭",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Neural Interface Medical Breakthrough",
      company: "Advanced Medical Research Institute",
      industry: "Healthcare",
      challenge: "Paralyzed patients unable to communicate or control assistive devices",
      solution: "Deployed direct neural interface technology for thought-based communication",
      results: [
        "100% patient communication restoration",
        "85% mobility improvement",
        "Zero invasive procedures required",
        "Real-time neural feedback achieved"
      ],
      timeline: "3 months",
      roi: "Invaluable",
      image: "🏥",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Quantum Computing Financial Revolution",
      company: "International Banking Group",
      industry: "Finance",
      challenge: "Complex risk calculations taking 24+ hours, limiting trading opportunities",
      solution: "Quantum reality engine for instant financial modeling and risk assessment",
      results: [
        "99.9% faster risk calculations",
        "$2B additional trading opportunities",
        "Zero calculation errors",
        "Real-time market predictions"
      ],
      timeline: "4 months",
      roi: "1000%",
      image: "🏦",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Space Exploration AI Assistant",
      company: "National Space Agency",
      industry: "Aerospace",
      challenge: "Mission-critical decisions requiring instant analysis of complex space data",
      solution: "AI consciousness system with quantum processing for space mission optimization",
      results: [
        "100% mission success rate",
        "50% reduction in mission costs",
        "Real-time anomaly detection",
        "Autonomous mission planning"
      ],
      timeline: "8 months",
      roi: "2000%",
      image: "🚀",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 5,
      title: "Climate Change Quantum Solution",
      company: "Global Environmental Foundation",
      industry: "Environmental",
      challenge: "Climate modeling too slow to predict and prevent environmental disasters",
      solution: "Quantum reality engine for instant climate simulation and prediction",
      results: [
        "99.8% prediction accuracy",
        "Real-time disaster prevention",
        "50% faster response times",
        "Global climate optimization"
      ],
      timeline: "12 months",
      roi: "Priceless",
      image: "🌍",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 6,
      title: "Educational Neural Enhancement",
      company: "Global University Network",
      industry: "Education",
      challenge: "Students struggling with complex subjects and slow learning curves",
      solution: "Neural interface learning system with AI consciousness tutoring",
      results: [
        "300% faster learning rates",
        "95% student satisfaction",
        "Zero learning disabilities",
        "Personalized AI tutoring"
      ],
      timeline: "6 months",
      roi: "400%",
      image: "🎓",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES • 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Success Stories
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover how our cutting-edge technology has transformed industries and created unprecedented value for organizations worldwide
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{study.image}</div>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-300 text-lg">{study.company}</p>
                <span className="inline-block px-3 py-1 bg-gray-700 rounded-full text-sm mt-2">
                  {study.industry}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-blue-300">Challenge</h4>
                <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold mb-2 text-purple-300">Solution</h4>
                <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-green-300">Results</h4>
                <ul className="space-y-2">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-300">{study.timeline}</div>
                  <div className="text-xs text-gray-400">Timeline</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-300">{study.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-300">100%</div>
                  <div className="text-xs text-gray-400">Success</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Global Impact Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-lg text-gray-300">Successful Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-300 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">$50B+</div>
              <div className="text-lg text-gray-300">Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-300 mb-2">24/7</div>
              <div className="text-lg text-gray-300">Support Available</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <p className="text-lg italic mb-4">
                "The AI consciousness platform revolutionized our operations. We achieved 300% efficiency gains in just 6 months."
              </p>
              <div className="text-blue-300 font-semibold">- Sarah Johnson, CEO, Global Manufacturing Corp</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <p className="text-lg italic mb-4">
                "Quantum computing gave us the edge we needed. Our risk calculations are now instant and 100% accurate."
              </p>
              <div className="text-purple-300 font-semibold">- Michael Chen, CTO, International Banking Group</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <p className="text-lg italic mb-4">
                "Neural interfaces restored hope for our patients. The technology is truly life-changing."
              </p>
              <div className="text-emerald-300 font-semibold">- Dr. Lisa Rodriguez, Medical Director, AMRI</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of organizations that have transformed their operations with our revolutionary technology. 
            Let's create your success story together.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;