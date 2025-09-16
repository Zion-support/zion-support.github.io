import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  CheckCircle,
  Star,
  ExternalLink,
  Play
} from 'lucide-react';

const RevolutionaryCaseStudies2026: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Legacy system modernization and AI integration",
      solution: "Complete digital transformation with AI-powered automation",
      results: {
        efficiency: "500%",
        costReduction: "60%",
        timeToMarket: "75%",
        customerSatisfaction: "95%"
      },
      duration: "6 months",
      teamSize: "50+ experts",
      image: "/images/case-studies/techcorp-transformation.jpg",
      testimonial: "The transformation was incredible. We achieved results we never thought possible.",
      author: "Sarah Chen, CTO",
      tags: ["AI Integration", "Digital Transformation", "Automation"],
      featured: true
    },
    {
      id: 2,
      company: "HealthTech Innovations",
      industry: "Healthcare",
      challenge: "Patient data management and predictive analytics",
      solution: "AI-powered healthcare platform with predictive diagnostics",
      results: {
        efficiency: "400%",
        costReduction: "45%",
        timeToMarket: "80%",
        customerSatisfaction: "98%"
      },
      duration: "8 months",
      teamSize: "30+ experts",
      image: "/images/case-studies/healthtech-ai.jpg",
      testimonial: "Our patient outcomes improved dramatically with the new AI system.",
      author: "Dr. Michael Rodriguez, CEO",
      tags: ["Healthcare AI", "Predictive Analytics", "Patient Care"],
      featured: true
    },
    {
      id: 3,
      company: "FinanceFlow Solutions",
      industry: "Financial Services",
      challenge: "Fraud detection and risk management",
      solution: "Advanced AI fraud detection system with real-time monitoring",
      results: {
        efficiency: "600%",
        costReduction: "70%",
        timeToMarket: "85%",
        customerSatisfaction: "99%"
      },
      duration: "4 months",
      teamSize: "25+ experts",
      image: "/images/case-studies/finance-ai.jpg",
      testimonial: "Fraud detection accuracy increased to 99.9% with zero false positives.",
      author: "Elena Kim, CISO",
      tags: ["Fraud Detection", "Risk Management", "Real-time Analytics"],
      featured: true
    },
    {
      id: 4,
      company: "EduTech Academy",
      industry: "Education",
      challenge: "Personalized learning at scale",
      solution: "AI-powered adaptive learning platform",
      results: {
        efficiency: "350%",
        costReduction: "50%",
        timeToMarket: "90%",
        customerSatisfaction: "97%"
      },
      duration: "10 months",
      teamSize: "40+ experts",
      image: "/images/case-studies/edutech-ai.jpg",
      testimonial: "Student engagement and learning outcomes improved dramatically.",
      author: "Prof. David Chen, Director",
      tags: ["EdTech", "Personalized Learning", "Adaptive AI"],
      featured: true
    },
    {
      id: 5,
      company: "ManufacturingMax",
      industry: "Manufacturing",
      challenge: "Supply chain optimization and predictive maintenance",
      solution: "IoT and AI-powered smart manufacturing system",
      results: {
        efficiency: "450%",
        costReduction: "55%",
        timeToMarket: "70%",
        customerSatisfaction: "94%"
      },
      duration: "12 months",
      teamSize: "60+ experts",
      image: "/images/case-studies/manufacturing-ai.jpg",
      testimonial: "Our production efficiency and quality control reached new heights.",
      author: "Marcus Johnson, COO",
      tags: ["Smart Manufacturing", "IoT", "Predictive Maintenance"],
      featured: true
    },
    {
      id: 6,
      company: "RetailRevolution",
      industry: "Retail",
      challenge: "Customer experience and inventory management",
      solution: "AI-powered retail optimization platform",
      results: {
        efficiency: "300%",
        costReduction: "40%",
        timeToMarket: "65%",
        customerSatisfaction: "96%"
      },
      duration: "5 months",
      teamSize: "35+ experts",
      image: "/images/case-studies/retail-ai.jpg",
      testimonial: "Customer satisfaction and sales increased significantly.",
      author: "Lisa Wang, VP Operations",
      tags: ["Retail AI", "Customer Experience", "Inventory Management"],
      featured: true
    }
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Case Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how leading companies transformed their businesses with our cutting-edge AI solutions and achieved unprecedented success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">50+ Success Stories</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">500% Average ROI</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">99% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Case Study Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy, index) => (
            <motion.button
              key={caseStudy.id}
              onClick={() => setSelectedCase(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                selectedCase === index
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{caseStudy.company}</h3>
                {caseStudy.featured && (
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                )}
              </div>
              <p className="text-gray-300 text-sm mb-4">{caseStudy.industry}</p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Selected Case Study Details */}
      <motion.div
        key={selectedCase}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Case Study Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">{currentCase.company}</h2>
                <p className="text-xl text-gray-300 mb-6">{currentCase.industry}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Challenge</h3>
                  <p className="text-gray-300">{currentCase.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Solution</h3>
                  <p className="text-gray-300">{currentCase.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Testimonial</h3>
                  <blockquote className="text-gray-300 italic text-lg">
                    "{currentCase.testimonial}"
                  </blockquote>
                  <cite className="text-purple-400 font-semibold">— {currentCase.author}</cite>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm text-white font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Results and Visual */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(currentCase.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{currentCase.duration}</div>
                  <div className="text-gray-400 text-sm">Duration</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{currentCase.teamSize}</div>
                  <div className="text-gray-400 text-sm">Team Size</div>
                </div>
              </div>

              <button className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Case Study Video
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-white/20">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the companies that have already transformed their businesses with our revolutionary AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Case Studies
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryCaseStudies2026;