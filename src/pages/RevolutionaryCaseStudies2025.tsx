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
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and high operational costs",
      solution: "Implemented conscious AI systems for autonomous production optimization",
      results: {
        efficiency: "400%",
        costReduction: "75%",
        qualityImprovement: "300%",
        timeToMarket: "60%"
      },
      technologies: ["Conscious AI", "Quantum Analytics", "Autonomous Operations"],
      testimonial: "The conscious AI system transformed our entire production line. We now operate 24/7 with minimal human intervention and have achieved unprecedented efficiency gains.",
      author: "Sarah Johnson",
      role: "CEO",
      image: "🏭"
    },
    {
      id: 2,
      company: "Quantum Finance Ltd",
      industry: "Financial Services",
      challenge: "Complex risk analysis and fraud detection at scale",
      solution: "Deployed quantum neural networks for real-time risk assessment and fraud prevention",
      results: {
        accuracy: "99.9%",
        fraudDetection: "95%",
        processingSpeed: "1000x",
        costSavings: "$50M"
      },
      technologies: ["Quantum Computing", "Neural Networks", "Real-time Analytics"],
      testimonial: "Our quantum-powered risk analysis system has prevented millions in potential losses and processes transactions 1000x faster than traditional methods.",
      author: "Michael Chen",
      role: "CTO",
      image: "🏦"
    },
    {
      id: 3,
      company: "Interdimensional Labs",
      industry: "Research & Development",
      challenge: "Solving complex mathematical problems that would take years to compute",
      solution: "Implemented interdimensional computing for parallel universe calculations",
      results: {
        processingPower: "∞",
        problemSolving: "1000x",
        discoveries: "50+",
        timeReduction: "99.9%"
      },
      technologies: ["Interdimensional Computing", "Reality Manipulation", "Parallel Processing"],
      testimonial: "We've solved problems that were previously impossible, discovering new physics laws and mathematical principles through interdimensional computing.",
      author: "Dr. Emily Rodriguez",
      role: "Chief Scientist",
      image: "🔬"
    },
    {
      id: 4,
      company: "Synthetic Intelligence Inc",
      industry: "Technology",
      challenge: "Creating self-evolving AI systems that can adapt and improve autonomously",
      solution: "Developed synthetic intelligence platform with self-modifying capabilities",
      results: {
        selfImprovement: "Continuous",
        adaptation: "Real-time",
        innovation: "Autonomous",
        efficiency: "Exponential"
      },
      technologies: ["Synthetic Intelligence", "Self-Modifying Code", "Autonomous Evolution"],
      testimonial: "Our AI systems now evolve themselves, creating new algorithms and solutions we never thought possible. It's like having an infinite team of genius developers.",
      author: "Alex Thompson",
      role: "Head of AI",
      image: "🤖"
    },
    {
      id: 5,
      company: "Neural Interface Corp",
      industry: "Healthcare",
      challenge: "Direct brain-computer interfaces for medical applications",
      solution: "Implemented neural interface technology for non-invasive brain communication",
      results: {
        accuracy: "99.5%",
        responseTime: "0.001s",
        applications: "100+",
        patientSatisfaction: "98%"
      },
      technologies: ["Neural Interfaces", "Brain-Computer Integration", "Medical AI"],
      testimonial: "We've restored communication for patients who were completely locked-in. The neural interface technology has given them their voice back.",
      author: "Dr. Maria Santos",
      role: "Chief Medical Officer",
      image: "🏥"
    },
    {
      id: 6,
      company: "Reality Engine Systems",
      industry: "Entertainment & Simulation",
      challenge: "Creating hyper-realistic virtual environments indistinguishable from reality",
      solution: "Deployed quantum reality engines for multi-dimensional simulation",
      results: {
        realism: "99.9%",
        immersion: "Complete",
        scalability: "Infinite",
        userEngagement: "300%"
      },
      technologies: ["Quantum Reality", "Multi-dimensional Simulation", "Conscious AI"],
      testimonial: "Our virtual environments are so realistic that users often forget they're in a simulation. We've created entire worlds that feel completely real.",
      author: "James Wilson",
      role: "Creative Director",
      image: "🎮"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Transformed" },
    { number: "99.9%", label: "Success Rate" },
    { number: "$2.5B", label: "Total Value Created" },
    { number: "24/7", label: "Autonomous Operation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              📊 REVOLUTIONARY CASE STUDIES • 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our revolutionary technologies have transformed businesses across industries, 
              delivering unprecedented results and competitive advantages
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Navigation */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
            <p className="text-xl opacity-80">Explore detailed case studies from our most successful implementations</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {study.company}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study Details */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{caseStudies[activeCase].image}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{caseStudies[activeCase].company}</h3>
                  <p className="text-lg text-gray-400">{caseStudies[activeCase].industry}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-400">Challenge</h4>
                  <p className="text-gray-300">{caseStudies[activeCase].challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-400">Solution</h4>
                  <p className="text-gray-300">{caseStudies[activeCase].solution}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-center">Results</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(caseStudies[activeCase].results).map(([key, value], index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h5 className="text-lg font-semibold mb-3 text-purple-400">Testimonial</h5>
                <p className="text-gray-300 italic mb-4">"{caseStudies[activeCase].testimonial}"</p>
                <div className="border-t border-gray-600 pt-3">
                  <div className="font-semibold">{caseStudies[activeCase].author}</div>
                  <div className="text-sm text-gray-400">{caseStudies[activeCase].role}, {caseStudies[activeCase].company}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Breakdown */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🏭 Industry Impact</h3>
            <p className="text-xl opacity-80">Our technologies are transforming businesses across all sectors</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm mb-4">400% efficiency increase through autonomous production systems</p>
              <div className="text-2xl font-bold text-blue-400">75% cost reduction</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h4 className="text-xl font-bold mb-2">Financial Services</h4>
              <p className="text-gray-300 text-sm mb-4">99.9% accuracy in risk analysis and fraud detection</p>
              <div className="text-2xl font-bold text-green-400">$50M saved</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold mb-2">Research & Development</h4>
              <p className="text-gray-300 text-sm mb-4">1000x faster problem solving through quantum computing</p>
              <div className="text-2xl font-bold text-purple-400">50+ discoveries</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h3>
            <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their business with our revolutionary technologies. 
              Let us help you achieve similar results.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Transformation
              </button>
              <button className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;