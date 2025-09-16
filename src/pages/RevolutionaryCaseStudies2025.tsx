import React from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Tech Corporation",
      industry: "Technology",
      challenge: "Legacy systems causing 40% operational inefficiency and $2M annual losses",
      solution: "Implemented autonomous AI agents and quantum-enhanced processing",
      results: [
        "400% increase in operational efficiency",
        "60% reduction in operational costs",
        "99.9% system uptime achieved",
        "$5M annual cost savings"
      ],
      timeline: "6 months",
      technologies: ["Autonomous AI", "Quantum Computing", "Machine Learning"],
      image: "🏢",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Healthcare AI Revolution",
      company: "MedTech Innovations",
      industry: "Healthcare",
      challenge: "Diagnostic accuracy at 85% with 30% false positives in critical cases",
      solution: "Deployed neural interface AI and quantum medical imaging",
      results: [
        "98.5% diagnostic accuracy achieved",
        "95% reduction in false positives",
        "50% faster diagnosis times",
        "Saved 1,000+ lives annually"
      ],
      timeline: "4 months",
      technologies: ["Neural AI", "Quantum Imaging", "Predictive Analytics"],
      image: "🏥",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Financial Services Quantum Leap",
      company: "Quantum Finance Group",
      industry: "Finance",
      challenge: "Risk assessment taking 48 hours with 20% accuracy in volatile markets",
      solution: "Quantum computing for real-time risk analysis and AI-powered trading",
      results: [
        "Real-time risk assessment (0.1 seconds)",
        "99.2% accuracy in market predictions",
        "300% increase in trading profits",
        "Zero security breaches"
      ],
      timeline: "3 months",
      technologies: ["Quantum Computing", "AI Trading", "Blockchain Security"],
      image: "💰",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Manufacturing Intelligence",
      company: "Smart Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Production line efficiency at 70% with 15% defect rate",
      solution: "Edge AI computing and predictive maintenance systems",
      results: [
        "95% production line efficiency",
        "99.5% defect-free production",
        "50% reduction in maintenance costs",
        "Zero unplanned downtime"
      ],
      timeline: "5 months",
      technologies: ["Edge AI", "IoT Sensors", "Predictive Maintenance"],
      image: "🏭",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Retail Personalization Revolution",
      company: "NextGen Retail",
      industry: "Retail",
      challenge: "Customer satisfaction at 60% with low personalization",
      solution: "Conscious AI systems for personalized shopping experiences",
      results: [
        "95% customer satisfaction rate",
        "200% increase in sales",
        "80% improvement in customer retention",
        "Personalized recommendations for 100% of customers"
      ],
      timeline: "2 months",
      technologies: ["Conscious AI", "Personalization Engine", "Real-time Analytics"],
      image: "🛍️",
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 6,
      title: "Smart City Implementation",
      company: "Future City Council",
      industry: "Government",
      challenge: "Traffic congestion causing 2-hour delays and high pollution",
      solution: "AI-powered traffic management and autonomous vehicle coordination",
      results: [
        "70% reduction in traffic congestion",
        "50% decrease in travel times",
        "40% reduction in air pollution",
        "90% citizen satisfaction"
      ],
      timeline: "8 months",
      technologies: ["Smart City AI", "Autonomous Vehicles", "IoT Networks"],
      image: "🏙️",
      color: "from-cyan-600 to-blue-600"
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
              🏆 REVOLUTIONARY CASE STUDIES • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our cutting-edge AI and technology solutions have transformed businesses across industries, delivering unprecedented results and measurable impact.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl">{study.image}</div>
                <div className={`px-4 py-2 bg-gradient-to-r ${study.color} rounded-full text-sm font-semibold`}>
                  {study.industry}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
              <div className="text-lg text-purple-300 mb-4">{study.company}</div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-cyan-400">Challenge:</h4>
                <p className="text-gray-300 mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold mb-2 text-emerald-400">Solution:</h4>
                <p className="text-gray-300 mb-4">{study.solution}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-yellow-400">Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">
                  <span className="text-gray-400">Timeline:</span> <span className="text-white font-semibold">{study.timeline}</span>
                </div>
                <div className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">
                  <span className="text-gray-400">Technologies:</span> <span className="text-white font-semibold">{study.technologies.length}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-purple-400">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${study.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Read Full Case Study →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📊 Success Metrics</h2>
          <p className="text-xl opacity-90">Combined results from all our case studies</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-lg opacity-90">Companies Transformed</div>
          </div>
          <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-5xl font-bold text-cyan-400 mb-2">$2.5B+</div>
            <div className="text-lg opacity-90">Cost Savings Generated</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
            <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Support Available</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the companies that have already revolutionized their operations with our AI solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Download Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;