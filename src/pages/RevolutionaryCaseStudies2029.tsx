import React from 'react';

const RevolutionaryCaseStudies2029: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global AI Transformation: Fortune 500 Revolution",
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Transform legacy systems across 50+ global offices with conscious AI integration while maintaining 99.9% uptime.",
      solution: "Implemented our revolutionary conscious AI systems with quantum-powered processing and neural interface integration.",
      results: {
        efficiency: "+1000%",
        costSavings: "$2.5B",
        accuracy: "99.99%",
        uptime: "99.9%"
      },
      description: "A comprehensive transformation of global operations using conscious AI systems that achieved unprecedented efficiency gains and cost savings.",
      technologies: ["Conscious AI", "Quantum Computing", "Neural Interfaces", "Metaverse Integration"],
      duration: "18 months",
      team: "150+ experts",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Revolution: Quantum AI Drug Discovery",
      company: "MediTech Solutions",
      industry: "Healthcare",
      challenge: "Accelerate drug discovery process by 1000x while maintaining safety and efficacy standards for life-saving medications.",
      solution: "Deployed quantum AI fusion systems with neural interface technology for molecular simulation and drug interaction analysis.",
      results: {
        efficiency: "+1000x",
        costSavings: "$500M",
        accuracy: "99.9%",
        drugsDiscovered: "25+"
      },
      description: "Revolutionary drug discovery platform using quantum AI that identified 25+ new life-saving medications in record time.",
      technologies: ["Quantum AI", "Neural Interfaces", "Molecular Simulation", "Conscious AI"],
      duration: "12 months",
      team: "80+ experts",
      featured: true
    },
    {
      id: 3,
      title: "Space Exploration: Interdimensional Computing Mission",
      company: "SpaceTech Innovations",
      industry: "Aerospace",
      challenge: "Launch the first quantum-powered space exploration mission to discover new planets and advance human knowledge.",
      solution: "Implemented interdimensional computing systems with quantum consciousness for space navigation and data processing.",
      results: {
        efficiency: "+500%",
        costSavings: "$1B",
        accuracy: "99.99%",
        planetsDiscovered: "10+"
      },
      description: "Breakthrough space exploration mission using interdimensional computing that discovered 10+ new planets and unlocked infinite possibilities.",
      technologies: ["Interdimensional Computing", "Quantum Consciousness", "Neural Interfaces", "Metaverse Tech"],
      duration: "24 months",
      team: "200+ experts",
      featured: true
    },
    {
      id: 4,
      title: "Manufacturing Revolution: Autonomous AI Production",
      company: "AutoManufacturing Inc",
      industry: "Manufacturing",
      challenge: "Implement fully autonomous manufacturing systems across 100+ facilities while maintaining quality and safety standards.",
      solution: "Deployed conscious AI agents with quantum processing for autonomous decision-making and quality control.",
      results: {
        efficiency: "+800%",
        costSavings: "$1.2B",
        accuracy: "99.95%",
        defects: "-99%"
      },
      description: "Complete transformation of manufacturing operations using autonomous AI systems that achieved near-perfect quality and efficiency.",
      technologies: ["Conscious AI", "Quantum Processing", "Neural Interfaces", "Autonomous Systems"],
      duration: "15 months",
      team: "120+ experts",
      featured: false
    },
    {
      id: 5,
      title: "Financial Services: Quantum AI Trading",
      company: "QuantumFinance Group",
      industry: "Finance",
      challenge: "Develop quantum AI trading systems that can process market data at quantum speed for optimal investment decisions.",
      solution: "Created quantum AI fusion platform with neural interface integration for real-time market analysis and trading.",
      results: {
        efficiency: "+2000%",
        costSavings: "$800M",
        accuracy: "99.8%",
        returns: "+150%"
      },
      description: "Revolutionary financial trading platform using quantum AI that achieved unprecedented returns and market analysis accuracy.",
      technologies: ["Quantum AI", "Neural Interfaces", "Real-time Processing", "Conscious AI"],
      duration: "10 months",
      team: "60+ experts",
      featured: false
    },
    {
      id: 6,
      title: "Education Transformation: Neural Learning Systems",
      company: "EduTech Global",
      industry: "Education",
      challenge: "Revolutionize education with neural interface technology that enables direct knowledge transfer and accelerated learning.",
      solution: "Implemented neural interface learning systems with conscious AI for personalized education and knowledge enhancement.",
      results: {
        efficiency: "+500%",
        costSavings: "$300M",
        accuracy: "99.9%",
        learningSpeed: "+1000%"
      },
      description: "Breakthrough education platform using neural interfaces that accelerated learning by 1000% while maintaining perfect accuracy.",
      technologies: ["Neural Interfaces", "Conscious AI", "Learning Systems", "Knowledge Transfer"],
      duration: "14 months",
      team: "90+ experts",
      featured: false
    }
  ];

  const getResultColor = (value: string) => {
    if (value.includes('+') || value.includes('%')) return 'text-green-500';
    if (value.includes('-')) return 'text-red-500';
    return 'text-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🏆 REVOLUTIONARY CASE STUDIES • JANUARY 2029
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Revolutionary Case Studies 2029
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover how our revolutionary technologies are transforming industries and creating unprecedented value across the globe
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌟 Featured Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-bold">
                      FEATURED
                    </span>
                    <span className="text-sm text-gray-500">{study.industry}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Company:</strong> {study.company}
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-2xl font-bold ${getResultColor(value)}`}>{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Read Full Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📚 All Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold">
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Company:</strong> {study.company}
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(study.results).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-bold ${getResultColor(value)}`}>{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {study.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{study.duration}</span>
                    <span>{study.team}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">📊 Our Success Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg font-semibold mb-2">Successful Projects</div>
              <div className="text-sm opacity-80">Across all industries</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">$10B+</div>
              <div className="text-lg font-semibold mb-2">Value Created</div>
              <div className="text-sm opacity-80">For our clients</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Success Rate</div>
              <div className="text-sm opacity-80">Project completion</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg font-semibold mb-2">Lives Impacted</div>
              <div className="text-sm opacity-80">Worldwide</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of organizations that have already transformed their operations with our revolutionary technologies. Let's create your success story together.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation →
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2029;