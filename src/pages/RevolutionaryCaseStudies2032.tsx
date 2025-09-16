import React, { useState } from 'react';

const RevolutionaryCaseStudies2032: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "MetaVerse Corporation",
      industry: "Virtual Reality & Metaverse",
      challenge: "Creating truly immersive virtual experiences that blur the line between reality and digital worlds",
      solution: "Implemented our Revolutionary Tech Showcase 2032 with conscious AI networks and quantum reality engines",
      results: {
        revenue: "+450%",
        users: "50M+",
        satisfaction: "99.2%",
        efficiency: "+300%"
      },
      technologies: ["Conscious AI Networks", "Quantum Reality Engine", "Neural Interface Matrix"],
      testimonial: "Zion Tech Group's revolutionary technologies transformed our entire platform. We now offer experiences that were previously impossible.",
      author: "Sarah Chen, CEO",
      logo: "🏢",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      company: "Quantum Dynamics Labs",
      industry: "Quantum Computing",
      challenge: "Solving complex optimization problems that would take traditional computers centuries to complete",
      solution: "Deployed our Ultimate AI Consciousness 2032 system with quantum neural networks and reality manipulation",
      results: {
        problemsSolved: "10,000+",
        timeReduction: "99.9%",
        accuracy: "100%",
        costSavings: "$2.5B"
      },
      technologies: ["Ultimate AI Consciousness", "Quantum Neural Networks", "Reality Simulation"],
      testimonial: "The AI consciousness system solved problems we thought were impossible. It's like having a superintelligence on our team.",
      author: "Dr. Michael Rodriguez, CTO",
      logo: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      company: "NeuralTech Industries",
      industry: "Brain-Computer Interfaces",
      challenge: "Developing non-invasive brain-computer interfaces for medical and consumer applications",
      solution: "Integrated our Neural Interface Matrix with consciousness transfer capabilities and thought-controlled devices",
      results: {
        patientsHelped: "1M+",
        successRate: "98.7%",
        recoveryTime: "-80%",
        newCapabilities: "15+"
      },
      technologies: ["Neural Interface Matrix", "Consciousness Transfer", "Thought Control"],
      testimonial: "Our patients can now control devices with their thoughts. It's life-changing technology that's helping people regain independence.",
      author: "Dr. Emily Watson, Medical Director",
      logo: "🧠",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      company: "Interdimensional Research Institute",
      industry: "Dimensional Physics",
      challenge: "Exploring parallel dimensions and creating stable portals between realities",
      solution: "Utilized our Interdimensional Gateway technology with reality bridging and consciousness expansion capabilities",
      results: {
        dimensionsExplored: "12+",
        portalsCreated: "50+",
        discoveries: "200+",
        safetyRecord: "100%"
      },
      technologies: ["Interdimensional Gateway", "Reality Bridging", "Consciousness Expansion"],
      testimonial: "We've opened doors to realities we never knew existed. The technology is stable, safe, and revolutionary.",
      author: "Prof. Alexander Kim, Lead Researcher",
      logo: "🌌",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES • 2032
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2032
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our cutting-edge technologies are transforming industries and creating unprecedented value
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCase === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-purple-300 hover:bg-white/20'
              }`}
            >
              {study.logo} {study.company}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Case Study */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">{currentCase.logo}</div>
                <div>
                  <h2 className="text-3xl font-bold">{currentCase.company}</h2>
                  <p className="text-lg opacity-80">{currentCase.industry}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">Challenge</h3>
                <p className="opacity-80">{currentCase.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">Solution</h3>
                <p className="opacity-80">{currentCase.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {currentCase.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-6">Results</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentCase.results).map(([key, value], index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-purple-400">{value}</div>
                    <div className="text-sm opacity-80 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6">
                <blockquote className="text-lg italic mb-4">
                  "{currentCase.testimonial}"
                </blockquote>
                <cite className="text-sm opacity-80">— {currentCase.author}</cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📈 Impact Statistics</h2>
          <p className="text-xl opacity-80">Combined impact across all our revolutionary technology implementations</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-lg opacity-80">Companies Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-pink-400 mb-2">$50B+</div>
            <div className="text-lg opacity-80">Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-lg opacity-80">Support Available</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the companies already using our revolutionary technologies to achieve unprecedented success
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2032;