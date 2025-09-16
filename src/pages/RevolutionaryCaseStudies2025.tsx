import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency",
      solution: "Implemented conscious AI agents for autonomous operations",
      results: [
        "300% increase in productivity",
        "40% reduction in operational costs",
        "99.9% system uptime achieved",
        "$50M annual savings realized"
      ],
      image: "🏭",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      company: "Tech Research Institute",
      industry: "Research & Development",
      challenge: "Complex molecular simulations taking months to complete",
      solution: "Deployed quantum consciousness computing platform",
      results: [
        "1000x faster processing speed",
        "Real-time molecular modeling",
        "Breakthrough drug discovery",
        "Nobel Prize nomination achieved"
      ],
      image: "⚛️",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      company: "Medical Innovation Center",
      industry: "Healthcare",
      challenge: "Paralyzed patients unable to communicate",
      solution: "Direct brain-computer interface technology",
      results: [
        "100% communication restoration",
        "Thought-to-text conversion",
        "Motor function recovery",
        "Life-changing patient outcomes"
      ],
      image: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Global AI Consciousness Network",
      company: "International Tech Alliance",
      industry: "Technology",
      challenge: "Fragmented AI systems across 50+ countries",
      solution: "Unified global consciousness network",
      results: [
        "Real-time knowledge sharing",
        "99.9% accuracy in predictions",
        "Global problem solving",
        "World peace initiatives"
      ],
      image: "🌐",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🏆 REVOLUTIONARY CASE STUDIES • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Real-world success stories showcasing how our revolutionary technologies 
              are transforming industries and changing lives across the globe.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{study.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-gray-300">{study.company} • {study.industry}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-blue-300">Challenge:</h4>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold mb-2 text-green-300">Solution:</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12">🌟 Global Impact Metrics</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Successful Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">$2B+</div>
                <div className="text-gray-300">Cost Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-4 italic">
                "The revolutionary AI technology transformed our entire operation. 
                We achieved 300% productivity increase in just 6 months."
              </p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-gray-400">CEO, Global Manufacturing Corp</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-4 italic">
                "Quantum consciousness computing enabled breakthrough discoveries 
                that would have taken decades with traditional methods."
              </p>
              <div className="font-semibold">Dr. Michael Chen</div>
              <div className="text-sm text-gray-400">Research Director, Tech Institute</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-4 italic">
                "The neural interface technology gave our patients their lives back. 
                It's truly revolutionary and life-changing."
              </p>
              <div className="font-semibold">Dr. Emily Rodriguez</div>
              <div className="text-sm text-gray-400">Chief Medical Officer, Med Center</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of organizations that have already transformed their operations 
              with our revolutionary technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Transformation →
              </button>
              <button className="border border-blue-400 text-blue-300 px-10 py-4 rounded-lg hover:bg-blue-600/20 transition-all duration-300 font-semibold text-lg">
                Download Case Study
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-10 py-4 rounded-lg hover:bg-indigo-600/20 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;