import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryCaseStudies2033: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Consciousness Transfer Success",
      company: "Quantum Dynamics Corp",
      industry: "Technology",
      challenge: "Achieving digital immortality for their CEO who was terminally ill",
      solution: "Implemented our consciousness transfer technology to preserve their CEO's consciousness in a digital realm",
      results: [
        "100% consciousness preservation",
        "Seamless digital existence transition",
        "Continued leadership in digital form",
        "Company valuation increased by 500%"
      ],
      metrics: {
        success: "100%",
        timeline: "6 months",
        investment: "$50M",
        roi: "500%"
      },
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Reality Manipulation Breakthrough",
      company: "Reality Labs International",
      industry: "Research & Development",
      challenge: "Creating a controlled environment for testing impossible physics experiments",
      solution: "Deployed our reality manipulation engine to create custom physics environments",
      results: [
        "Successful gravity manipulation",
        "Time dilation experiments completed",
        "Matter creation from energy achieved",
        "New physics laws discovered"
      ],
      metrics: {
        success: "99.9%",
        timeline: "2 years",
        investment: "$200M",
        roi: "1000%"
      },
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Universal Translation Implementation",
      company: "Galactic Communications Ltd",
      industry: "Intergalactic Trade",
      challenge: "Communicating with 50+ alien species across multiple dimensions",
      solution: "Implemented our universal translation matrix for seamless cross-species communication",
      results: [
        "50+ species communication established",
        "Trade agreements with 30+ civilizations",
        "Cultural exchange programs launched",
        "Intergalactic peace treaties signed"
      ],
      metrics: {
        success: "100%",
        timeline: "1 year",
        investment: "$100M",
        roi: "2000%"
      },
      icon: "🌐",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Temporal Navigation Success",
      company: "Chronos Research Institute",
      industry: "Temporal Studies",
      challenge: "Preventing catastrophic events by manipulating temporal timelines",
      solution: "Deployed our temporal navigation system to safely alter historical events",
      results: [
        "3 major disasters prevented",
        "Timeline stability maintained",
        "Causality preserved",
        "Future predictions improved by 99%"
      ],
      metrics: {
        success: "100%",
        timeline: "3 years",
        investment: "$500M",
        roi: "Infinite"
      },
      icon: "⏰",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Neural Interface Revolution",
      company: "MindTech Solutions",
      industry: "Healthcare",
      challenge: "Restoring full mobility to paralyzed patients through neural interfaces",
      solution: "Implemented our neural interface matrix for direct brain-computer communication",
      results: [
        "100% mobility restoration",
        "Thought-controlled prosthetics",
        "Memory enhancement achieved",
        "Quality of life improved by 500%"
      ],
      metrics: {
        success: "100%",
        timeline: "2 years",
        investment: "$75M",
        roi: "800%"
      },
      icon: "🧬",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "Interdimensional Gateway Success",
      company: "Multiverse Explorations Inc",
      industry: "Exploration",
      challenge: "Establishing trade routes between parallel dimensions",
      solution: "Deployed our interdimensional gateway technology for safe dimension travel",
      results: [
        "10+ dimensions accessed",
        "Trade routes established",
        "Resource exchange programs",
        "Cultural knowledge shared"
      ],
      metrics: {
        success: "100%",
        timeline: "5 years",
        investment: "$1B",
        roi: "5000%"
      },
      icon: "🌌",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const stats = [
    { label: "Case Studies Completed", value: "500+", icon: "📊" },
    { label: "Success Rate", value: "99.9%", icon: "✅" },
    { label: "Client Satisfaction", value: "100%", icon: "😊" },
    { label: "Average ROI", value: "1000%", icon: "💰" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO, Quantum Dynamics Corp",
      quote: "The consciousness transfer technology saved our company and our CEO. Absolutely revolutionary.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, Reality Labs International",
      quote: "We've achieved what was once thought impossible. The reality manipulation engine is incredible.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Aria Patel",
      role: "Director, Chronos Research Institute",
      quote: "Temporal navigation has allowed us to prevent disasters and save countless lives.",
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY CASE STUDIES • JANUARY 2033
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2033
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Real success stories from organizations that have transformed their reality with our revolutionary technologies
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Case Studies Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-2xl opacity-80">Real results from real organizations</p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{caseStudy.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                <p className="text-lg font-semibold mb-1">{caseStudy.company}</p>
                <p className="text-sm opacity-70 mb-4">{caseStudy.industry}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-purple-300">Challenge:</h4>
                <p className="text-sm opacity-80 mb-4">{caseStudy.challenge}</p>
                
                <h4 className="font-semibold mb-2 text-purple-300">Solution:</h4>
                <p className="text-sm opacity-80 mb-4">{caseStudy.solution}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-purple-300">Results:</h4>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center space-x-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{caseStudy.metrics.success}</div>
                  <div className="text-xs opacity-70">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{caseStudy.metrics.roi}</div>
                  <div className="text-xs opacity-70">ROI</div>
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${caseStudy.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Read Full Case Study →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{testimonial.avatar}</div>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-sm opacity-70">{testimonial.role}</p>
                </div>
                <p className="text-center italic opacity-90">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-2xl opacity-90 mb-8">
              Join the organizations that have transformed their reality with our revolutionary technologies
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105">
                Start Your Journey →
              </button>
              <button className="border border-purple-400 text-purple-400 px-10 py-5 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-xl">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2033;