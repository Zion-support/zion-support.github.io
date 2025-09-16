import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Legacy system integration and real-time data processing",
      solution: "AI-powered autonomous systems with quantum-enhanced processing",
      results: {
        "Efficiency Gain": "+400%",
        "Cost Reduction": "$15M annually",
        "Processing Speed": "1000x faster",
        "ROI": "1200% in 6 months"
      },
      testimonial: "Zion Tech Group transformed our entire operation. The AI systems they implemented have revolutionized our manufacturing process.",
      author: "Sarah Johnson, CTO",
      image: "🏭",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Fraud detection and risk management at scale",
      solution: "Neural interface technology with real-time pattern recognition",
      results: {
        "Fraud Detection": "99.9% accuracy",
        "False Positives": "-95% reduction",
        "Processing Time": "0.001 seconds",
        "Cost Savings": "$50M annually"
      },
      testimonial: "The neural interface technology has given us unprecedented insights into financial patterns. It's like having a crystal ball.",
      author: "Michael Chen, CEO",
      image: "💼",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 3,
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Medical diagnosis accuracy and treatment optimization",
      solution: "Quantum computing with AI-driven medical analysis",
      results: {
        "Diagnosis Accuracy": "99.8%",
        "Treatment Success": "+60%",
        "Time to Diagnosis": "-80%",
        "Patient Outcomes": "+150%"
      },
      testimonial: "This technology has saved countless lives. The quantum-enhanced AI can detect diseases we never knew existed.",
      author: "Dr. Emily Rodriguez, Chief Medical Officer",
      image: "🏥",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      company: "RetailMax Corporation",
      industry: "Retail & E-commerce",
      challenge: "Supply chain optimization and customer personalization",
      solution: "Autonomous AI agents with predictive analytics",
      results: {
        "Supply Chain Efficiency": "+300%",
        "Customer Satisfaction": "98.5%",
        "Inventory Optimization": "+250%",
        "Revenue Growth": "+180%"
      },
      testimonial: "The AI agents work 24/7 optimizing our entire supply chain. It's like having a team of geniuses working around the clock.",
      author: "David Park, VP of Operations",
      image: "🛒",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      company: "EnergyGrid Systems",
      industry: "Energy & Utilities",
      challenge: "Smart grid management and renewable energy integration",
      solution: "Quantum neural networks with real-time energy optimization",
      results: {
        "Energy Efficiency": "+200%",
        "Cost Reduction": "$100M annually",
        "Renewable Integration": "+400%",
        "Grid Stability": "99.99% uptime"
      },
      testimonial: "The quantum neural networks have revolutionized our energy grid. We're now the most efficient utility company in the world.",
      author: "Lisa Thompson, Chief Technology Officer",
      image: "⚡",
      color: "from-yellow-600 to-orange-600"
    },
    {
      id: 6,
      company: "LogiChain International",
      industry: "Logistics & Transportation",
      challenge: "Route optimization and fleet management at global scale",
      solution: "AI-powered autonomous logistics with quantum optimization",
      results: {
        "Route Efficiency": "+350%",
        "Fuel Savings": "$75M annually",
        "Delivery Time": "-70%",
        "Customer Satisfaction": "99.2%"
      },
      testimonial: "The quantum optimization algorithms have transformed our logistics network. We can now deliver anywhere in the world in record time.",
      author: "James Wilson, Chief Operations Officer",
      image: "🚚",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🏆 SUCCESS STORIES • REAL RESULTS
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Case Studies
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-2xl opacity-90 max-w-4xl mx-auto"
          >
            Discover how leading organizations have transformed their operations and achieved unprecedented success with our revolutionary technology solutions.
          </motion.p>
        </motion.div>

        {/* Case Study Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setActiveCase(index)}
              className={`bg-gradient-to-br ${study.color} rounded-2xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 ${
                activeCase === index ? 'ring-4 ring-white/50' : ''
              }`}
            >
              <div className="text-6xl mb-4 text-center">{study.image}</div>
              <h3 className="text-2xl font-bold mb-2 text-center">{study.company}</h3>
              <p className="text-white/90 text-center mb-4">{study.industry}</p>
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Results:</h4>
                <div className="space-y-1 text-sm">
                  {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span>{key}:</span>
                      <span className="font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <span className="text-sm text-white/80">Click to view details →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Case Study View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{caseStudies[activeCase].image}</div>
                  <div>
                    <h2 className="text-4xl font-bold text-purple-300 mb-2">
                      {caseStudies[activeCase].company}
                    </h2>
                    <p className="text-xl text-white/90">{caseStudies[activeCase].industry}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300 mb-3">Challenge</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {caseStudies[activeCase].challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-purple-300 mb-3">Solution</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {caseStudies[activeCase].solution}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
                    <h3 className="text-2xl font-bold text-purple-300 mb-4">Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(caseStudies[activeCase].results).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-3xl font-bold text-purple-300 mb-2">{value}</div>
                          <div className="text-sm text-white/70">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 border border-white/20 mb-8">
                  <h3 className="text-2xl font-bold text-purple-300 mb-4">Client Testimonial</h3>
                  <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                    "{caseStudies[activeCase].testimonial}"
                  </blockquote>
                  <div className="text-right">
                    <div className="font-semibold text-purple-300">{caseStudies[activeCase].author}</div>
                    <div className="text-white/70">{caseStudies[activeCase].company}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-purple-300">Technology Used</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      AI Systems
                    </span>
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Quantum Computing
                    </span>
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Neural Interfaces
                    </span>
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Predictive Analytics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Statistics Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-purple-300">Proven Results Across Industries</h2>
            <p className="text-xl text-white/90">Our technology has delivered measurable results for organizations worldwide</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 text-center border border-purple-400/30"
            >
              <div className="text-5xl font-bold text-purple-300 mb-2">500+</div>
              <div className="text-white/90 text-lg">Successful Deployments</div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-8 text-center border border-cyan-400/30"
            >
              <div className="text-5xl font-bold text-cyan-300 mb-2">$2.5B+</div>
              <div className="text-white/90 text-lg">Cost Savings Generated</div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl p-8 text-center border border-emerald-400/30"
            >
              <div className="text-5xl font-bold text-emerald-300 mb-2">99.9%</div>
              <div className="text-white/90 text-lg">Client Satisfaction Rate</div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-8 text-center border border-orange-400/30"
            >
              <div className="text-5xl font-bold text-orange-300 mb-2">24/7</div>
              <div className="text-white/90 text-lg">Support Available</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h2 className="text-4xl font-bold mb-6 text-purple-300">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the ranks of industry leaders who have transformed their operations with our revolutionary technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
                Start Your Transformation
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;