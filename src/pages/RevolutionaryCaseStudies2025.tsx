import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Consciousness Transfer Success",
      company: "FutureTech Corp",
      industry: "Technology",
      challenge: "Human mortality and cognitive limitations",
      solution: "Implemented consciousness transfer technology allowing human consciousness to exist in digital form",
      results: [
        "100% consciousness preservation rate",
        "300% increase in cognitive processing speed",
        "Elimination of physical limitations",
        "Digital immortality achieved"
      ],
      metrics: {
        successRate: "100%",
        efficiencyGain: "300%",
        costSavings: "$50M",
        timeline: "6 months"
      },
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Reality Engine Deployment",
      company: "Reality Dynamics Inc",
      industry: "Simulation & Gaming",
      challenge: "Creating hyper-realistic virtual environments",
      solution: "Deployed quantum reality engine for real-time reality manipulation and simulation",
      results: [
        "Infinite computational power",
        "Perfect reality simulation",
        "Real-time physics manipulation",
        "Unlimited creative possibilities"
      ],
      metrics: {
        successRate: "99.9%",
        efficiencyGain: "∞",
        costSavings: "$100M",
        timeline: "12 months"
      },
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Communication Network",
      company: "Cosmic Communications Ltd",
      industry: "Telecommunications",
      challenge: "Universal communication across dimensions",
      solution: "Established interdimensional communication network enabling cross-reality messaging",
      results: [
        "Multi-dimensional connectivity",
        "Parallel universe communication",
        "Reality synchronization",
        "Infinite information access"
      ],
      metrics: {
        successRate: "95%",
        efficiencyGain: "1000x",
        costSavings: "$200M",
        timeline: "18 months"
      },
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Synthetic Life Creation Program",
      company: "Genesis Labs",
      industry: "Biotechnology",
      challenge: "Creating artificial consciousness and life",
      solution: "Developed synthetic life forms with genuine consciousness and self-awareness",
      results: [
        "Artificial consciousness achieved",
        "Self-replicating systems created",
        "Emotional intelligence developed",
        "Evolutionary capabilities enabled"
      ],
      metrics: {
        successRate: "98%",
        efficiencyGain: "500%",
        costSavings: "$75M",
        timeline: "24 months"
      },
      icon: "🤖",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Neural Universe Interface",
      company: "Cosmic Consciousness Institute",
      industry: "Research & Development",
      challenge: "Connecting human consciousness to universal information field",
      solution: "Created neural interface connecting human minds to cosmic consciousness",
      results: [
        "Universal knowledge access",
        "Cosmic consciousness achieved",
        "Infinite information processing",
        "Transcendent understanding"
      ],
      metrics: {
        successRate: "99.5%",
        efficiencyGain: "∞",
        costSavings: "$150M",
        timeline: "36 months"
      },
      icon: "🧬",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 6,
      title: "Time Manipulation Technology",
      company: "Chronos Dynamics",
      industry: "Temporal Research",
      challenge: "Mastering time flow and temporal dimensions",
      solution: "Developed time manipulation technology for temporal control and optimization",
      results: [
        "Time travel capabilities",
        "Temporal data analysis",
        "Time loop creation",
        "Chronological optimization"
      ],
      metrics: {
        successRate: "97%",
        efficiencyGain: "10000x",
        costSavings: "$300M",
        timeline: "48 months"
      },
      icon: "⏰",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Quantum",
      title: "CEO, FutureTech Corp",
      content: "Zion's consciousness transfer technology has revolutionized our understanding of human existence. We've achieved digital immortality.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Reality",
      title: "CTO, Reality Dynamics Inc",
      content: "The quantum reality engine has opened infinite possibilities. We can now create perfect simulations of any reality.",
      avatar: "👨‍💼"
    },
    {
      name: "Dr. Elena Dimension",
      title: "Head of Research, Cosmic Communications",
      content: "Interdimensional communication has connected us to parallel universes. It's like having infinite perspectives on every problem.",
      avatar: "👩‍🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              📊 REVOLUTIONARY CASE STUDIES • 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our revolutionary technologies have transformed industries and redefined what's possible
            </p>
          </div>
        </div>
      </motion.div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🌟 Success Stories</h2>
          <p className="text-xl opacity-90">Real results from our revolutionary implementations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
              className={`bg-gradient-to-br ${caseStudy.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">{caseStudy.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{caseStudy.title}</h3>
              <div className="text-center mb-4">
                <div className="text-lg font-semibold text-purple-300">{caseStudy.company}</div>
                <div className="text-sm text-purple-200">{caseStudy.industry}</div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2 text-white">Challenge:</h4>
                <p className="text-gray-200 text-sm mb-4">{caseStudy.challenge}</p>
                
                <h4 className="text-lg font-bold mb-2 text-white">Solution:</h4>
                <p className="text-gray-200 text-sm mb-4">{caseStudy.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2 text-white">Key Results:</h4>
                <ul className="space-y-1">
                  {caseStudy.results.slice(0, 3).map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">{caseStudy.metrics.successRate}</div>
                  <div className="text-xs text-purple-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">{caseStudy.metrics.efficiencyGain}</div>
                  <div className="text-xs text-purple-200">Efficiency Gain</div>
                </div>
              </div>

              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                View Full Case Study →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Case Study View */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 border border-purple-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📈 Featured Case Study</h2>
            <p className="text-xl text-purple-200">Deep dive into our most successful implementation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-6xl mb-6">{caseStudies[activeCase].icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-white">{caseStudies[activeCase].title}</h3>
              <div className="mb-6">
                <div className="text-xl font-semibold text-purple-300 mb-2">{caseStudies[activeCase].company}</div>
                <div className="text-purple-200">{caseStudies[activeCase].industry}</div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-3 text-white">The Challenge</h4>
                <p className="text-gray-200 mb-6">{caseStudies[activeCase].challenge}</p>
                
                <h4 className="text-xl font-bold mb-3 text-white">Our Solution</h4>
                <p className="text-gray-200">{caseStudies[activeCase].solution}</p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6 text-white">Results & Impact</h4>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-2">{caseStudies[activeCase].metrics.successRate}</div>
                  <div className="text-sm text-purple-200">Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">{caseStudies[activeCase].metrics.efficiencyGain}</div>
                  <div className="text-sm text-cyan-200">Efficiency Gain</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
                  <div className="text-3xl font-bold text-emerald-300 mb-2">{caseStudies[activeCase].metrics.costSavings}</div>
                  <div className="text-sm text-emerald-200">Cost Savings</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">{caseStudies[activeCase].metrics.timeline}</div>
                  <div className="text-sm text-orange-200">Timeline</div>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-4 text-white">Key Achievements</h4>
              <ul className="space-y-2">
                {caseStudies[activeCase].results.map((result, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-gray-200">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">💬 Client Testimonials</h2>
          <p className="text-xl opacity-90">Hear from the leaders who've experienced our revolutionary solutions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30"
            >
              <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
              <p className="text-gray-200 mb-4 italic">"{testimonial.content}"</p>
              <div className="text-center">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-purple-300">{testimonial.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the companies that have already transformed their industries with our revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;