import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryCaseStudies2026: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const caseStudies = [
    {
      id: 'quantum-medical',
      title: 'Quantum-Enhanced Medical Diagnosis',
      company: 'MedTech Global',
      industry: 'Healthcare',
      challenge: 'Reducing diagnostic time for complex diseases from weeks to minutes',
      solution: 'Implemented quantum-AI fusion system for molecular analysis',
      results: {
        timeReduction: '95%',
        accuracy: '99.7%',
        costSavings: '$50M',
        patientsServed: '2.5M'
      },
      technologies: ['Quantum Computing', 'AI Diagnostics', 'Molecular Simulation'],
      timeline: '18 months',
      impact: 'Revolutionized early disease detection and treatment planning',
      image: '🏥',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'neural-manufacturing',
      title: 'Neural Interface Manufacturing Control',
      company: 'AutoTech Industries',
      industry: 'Manufacturing',
      challenge: 'Improving precision and efficiency in automated manufacturing',
      solution: 'Deployed neural interface technology for direct human-machine control',
      results: {
        efficiency: '+400%',
        precision: '99.9%',
        wasteReduction: '80%',
        energySavings: '60%'
      },
      technologies: ['Neural Interfaces', 'Brain-Computer Control', 'IoT Integration'],
      timeline: '12 months',
      impact: 'Transformed manufacturing precision and worker safety',
      image: '🏭',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'ai-climate',
      title: 'AI-Powered Climate Solutions',
      company: 'EcoFuture Corp',
      industry: 'Environmental',
      challenge: 'Developing effective climate change mitigation strategies',
      solution: 'Implemented synthetic intelligence for climate modeling and optimization',
      results: {
        carbonReduction: '85%',
        energyEfficiency: '+300%',
        costSavings: '$200M',
        globalImpact: '50 countries'
      },
      technologies: ['Synthetic Intelligence', 'Climate Modeling', 'Predictive Analytics'],
      timeline: '24 months',
      impact: 'Significantly reduced carbon footprint across multiple industries',
      image: '🌱',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'holographic-education',
      title: 'Holographic Educational Platform',
      company: 'EduTech Innovations',
      industry: 'Education',
      challenge: 'Creating immersive learning experiences for complex subjects',
      solution: 'Developed holographic reality system for interactive education',
      results: {
        engagement: '+500%',
        retention: '90%',
        accessibility: 'Global',
        costReduction: '70%'
      },
      technologies: ['Holographic Computing', 'VR/AR', 'AI Tutoring'],
      timeline: '15 months',
      impact: 'Revolutionized education accessibility and effectiveness',
      image: '🎓',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'consciousness-finance',
      title: 'Consciousness-Based Financial AI',
      company: 'FinTech Revolution',
      industry: 'Finance',
      challenge: 'Improving ethical decision-making in financial services',
      solution: 'Deployed consciousness computing for ethical financial AI',
      results: {
        ethicalCompliance: '100%',
        fraudDetection: '99.8%',
        customerSatisfaction: '98%',
        profitIncrease: '45%'
      },
      technologies: ['Consciousness Computing', 'Ethical AI', 'Blockchain'],
      timeline: '20 months',
      impact: 'Set new standards for ethical AI in financial services',
      image: '💰',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 'interdimensional-logistics',
      title: 'Interdimensional Supply Chain Optimization',
      company: 'LogiTech Solutions',
      industry: 'Logistics',
      challenge: 'Optimizing global supply chains across multiple dimensions',
      solution: 'Implemented interdimensional computing for supply chain management',
      results: {
        deliveryTime: '-90%',
        costReduction: '75%',
        globalReach: '100%',
        reliability: '99.9%'
      },
      technologies: ['Interdimensional Computing', 'Quantum Optimization', 'IoT Networks'],
      timeline: '30 months',
      impact: 'Revolutionized global logistics and supply chain management',
      image: '🚚',
      color: 'from-indigo-600 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing the transformative power of cutting-edge technologies
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-80">Click on any case study to explore the full details</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${caseStudy.color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
            >
              <div className="text-6xl mb-4 text-center">{caseStudy.image}</div>
              <h3 className="text-2xl font-bold mb-2 text-center">{caseStudy.title}</h3>
              <p className="text-lg opacity-80 mb-4 text-center">{caseStudy.company}</p>
              <p className="text-sm opacity-60 mb-4 text-center">{caseStudy.industry}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-60">Timeline:</span>
                  <span className="text-sm font-semibold">{caseStudy.timeline}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-60">Impact:</span>
                  <span className="text-sm font-semibold">{caseStudy.impact}</span>
                </div>
              </div>

              <button className={`w-full bg-gradient-to-r ${caseStudy.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                {selectedCase === caseStudy.id ? 'Show Less' : 'View Details'}
              </button>

              {selectedCase === caseStudy.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/20"
                >
                  <h4 className="text-lg font-bold mb-3">Challenge</h4>
                  <p className="text-sm opacity-80 mb-4">{caseStudy.challenge}</p>
                  
                  <h4 className="text-lg font-bold mb-3">Solution</h4>
                  <p className="text-sm opacity-80 mb-4">{caseStudy.solution}</p>
                  
                  <h4 className="text-lg font-bold mb-3">Key Results</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(caseStudy.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-green-400">{value}</div>
                        <div className="text-xs opacity-60 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-bold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">📈 Impact Statistics</h2>
          <p className="text-xl opacity-80">Cumulative impact across all our implementations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 text-center"
          >
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-4">Cost Savings</h3>
            <div className="text-4xl font-bold text-green-400 mb-2">$2.5B+</div>
            <p className="text-sm opacity-60">Total savings across all projects</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 text-center"
          >
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-4">Companies Served</h3>
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <p className="text-sm opacity-60">Organizations transformed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 text-center"
          >
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
            <div className="text-4xl font-bold text-purple-400 mb-2">50M+</div>
            <p className="text-sm opacity-60">Lives positively affected</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 text-center"
          >
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Efficiency Gain</h3>
            <div className="text-4xl font-bold text-orange-400 mb-2">300%</div>
            <p className="text-sm opacity-60">Average improvement</p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join hundreds of organizations that have already transformed their operations with our revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Download Case Studies
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2026;