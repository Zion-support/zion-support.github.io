import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Legacy system modernization and AI integration",
      solution: "Implemented comprehensive AI transformation with autonomous business processes",
      results: [
        "40% reduction in operational costs",
        "300% increase in productivity",
        "99.9% system uptime",
        "$50M annual savings"
      ],
      technologies: ["AI Consciousness", "Quantum Computing", "Neural Interfaces"],
      testimonial: "The transformation has been revolutionary. We've achieved unprecedented efficiency and innovation.",
      author: "Sarah Johnson, CTO",
      image: "🏢"
    },
    {
      company: "HealthFirst Medical",
      industry: "Healthcare",
      challenge: "Diagnostic accuracy and patient care optimization",
      solution: "Deployed AI-powered diagnostic systems and personalized treatment plans",
      results: [
        "95% diagnostic accuracy improvement",
        "50% faster diagnosis times",
        "30% reduction in medical errors",
        "200% increase in patient satisfaction"
      ],
      technologies: ["AI Diagnostics", "Neural Pattern Recognition", "Predictive Analytics"],
      testimonial: "Our patients are receiving better care than ever before. The AI systems have transformed our practice.",
      author: "Dr. Michael Chen, Chief Medical Officer",
      image: "🏥"
    },
    {
      company: "FinanceMax Bank",
      industry: "Financial Services",
      challenge: "Fraud detection and risk management",
      solution: "Implemented advanced AI fraud detection and quantum-secured systems",
      results: [
        "99.8% fraud detection rate",
        "60% reduction in false positives",
        "25% increase in trading profits",
        "Zero security breaches"
      ],
      technologies: ["Quantum Cryptography", "AI Fraud Detection", "Risk Analytics"],
      testimonial: "The security improvements have been remarkable. Our customers trust us more than ever.",
      author: "Jennifer Martinez, Chief Security Officer",
      image: "💰"
    },
    {
      company: "ManufacturingPro Inc",
      industry: "Manufacturing",
      challenge: "Production efficiency and quality control",
      solution: "Integrated AI-powered predictive maintenance and quality optimization",
      results: [
        "35% reduction in downtime",
        "20% increase in production efficiency",
        "90% reduction in defects",
        "50% improvement in worker safety"
      ],
      technologies: ["Predictive Maintenance", "Quality AI", "Safety Monitoring"],
      testimonial: "Our production lines have never been more efficient. The AI systems predict issues before they occur.",
      author: "Robert Kim, Production Director",
      image: "🏭"
    }
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 text-white">
            📊 REVOLUTIONARY CASE STUDIES • 2025
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Case Studies 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover how leading companies have transformed their operations with our revolutionary technology solutions
          </p>
        </motion.div>

        {/* Case Study Selector */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {caseStudies.map((caseStudy, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                selectedCase === index
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:shadow-md hover:scale-102'
              }`}
            >
              <div className="text-4xl mb-3">{caseStudy.image}</div>
              <div className="font-semibold text-sm mb-1">{caseStudy.company}</div>
              <div className="text-xs opacity-70">{caseStudy.industry}</div>
            </button>
          ))}
        </motion.div>

        {/* Case Study Details */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-6">{currentCase.image}</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentCase.company}</h2>
                  <div className="text-lg text-gray-600">{currentCase.industry}</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">{currentCase.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution</h3>
                  <p className="text-gray-700 leading-relaxed">{currentCase.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentCase.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {result.split(' ')[0]}
                      </div>
                      <div className="text-sm text-gray-600">
                        {result.split(' ').slice(1).join(' ')}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Client Testimonial</h4>
                <blockquote className="text-gray-700 italic mb-4">
                  "{currentCase.testimonial}"
                </blockquote>
                <div className="text-sm text-gray-600">
                  — {currentCase.author}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Overall Success Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "Client Satisfaction", value: "98%" },
              { metric: "Average ROI", value: "400%" },
              { metric: "Implementation Success", value: "100%" },
              { metric: "Technology Adoption", value: "95%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-100">{stat.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join these successful companies and start your transformation journey today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Transformation
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300">
              Download Case Study
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;