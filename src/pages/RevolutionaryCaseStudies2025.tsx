import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      category: "enterprise",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Optimize supply chain operations and reduce costs by 40%",
      solution: "Implemented conscious AI systems for autonomous decision making",
      results: [
        "40% reduction in operational costs",
        "300% increase in productivity",
        "99.9% accuracy in demand forecasting",
        "$50M annual savings"
      ],
      technologies: ["Conscious AI", "Quantum Processing", "Neural Networks"],
      image: "🏭",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Healthcare AI Revolution",
      category: "healthcare",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Accelerate drug discovery and improve patient outcomes",
      solution: "Deployed quantum AI for molecular simulation and neural interfaces for patient monitoring",
      results: [
        "75% faster drug discovery process",
        "90% improvement in diagnostic accuracy",
        "60% reduction in treatment costs",
        "Saved 10,000+ lives annually"
      ],
      technologies: ["Quantum AI", "Neural Interfaces", "Reality Engine"],
      image: "🏥",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 3,
      title: "Financial Services Innovation",
      category: "finance",
      company: "Quantum Bank",
      industry: "Financial Services",
      challenge: "Enhance fraud detection and risk management",
      solution: "Integrated quantum neural networks with reality engine for real-time analysis",
      results: [
        "99.8% fraud detection accuracy",
        "50% reduction in false positives",
        "Real-time risk assessment",
        "$100M prevented in fraud losses"
      ],
      technologies: ["Quantum Neural Networks", "Reality Engine", "Conscious AI"],
      image: "🏦",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Education Transformation",
      category: "education",
      company: "Future Learning Institute",
      industry: "Education",
      challenge: "Personalize learning experiences for 1M+ students",
      solution: "Created neural interface AI for adaptive learning and reality engine for immersive experiences",
      results: [
        "85% improvement in learning outcomes",
        "70% increase in student engagement",
        "Personalized learning paths for each student",
        "50% reduction in dropout rates"
      ],
      technologies: ["Neural Interfaces", "Reality Engine", "Conscious AI"],
      image: "🎓",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Space Exploration Breakthrough",
      category: "technology",
      company: "Cosmic Ventures",
      industry: "Space Technology",
      challenge: "Optimize space mission planning and autonomous operations",
      solution: "Deployed quantum AI for mission optimization and reality engine for training simulations",
      results: [
        "90% improvement in mission success rate",
        "60% reduction in mission costs",
        "Autonomous spacecraft operations",
        "Successful Mars colonization mission"
      ],
      technologies: ["Quantum AI", "Reality Engine", "Conscious AI"],
      image: "🚀",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "Environmental Conservation",
      category: "environment",
      company: "EcoTech Solutions",
      industry: "Environmental",
      challenge: "Monitor and protect endangered ecosystems",
      solution: "Implemented reality engine for ecosystem simulation and conscious AI for conservation planning",
      results: [
        "95% accuracy in ecosystem monitoring",
        "40% improvement in conservation effectiveness",
        "Real-time environmental threat detection",
        "Protected 1M+ acres of critical habitat"
      ],
      technologies: ["Reality Engine", "Conscious AI", "Quantum Processing"],
      image: "🌍",
      gradient: "from-teal-600 to-cyan-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Industries', icon: '🌟' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance', icon: '🏦' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'technology', name: 'Technology', icon: '🚀' },
    { id: 'environment', name: 'Environment', icon: '🌍' }
  ];

  const filteredCaseStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🏆 REVOLUTIONARY CASE STUDIES • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our revolutionary technologies are transforming businesses across industries. 
              Real results, real impact, real transformation.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                View All Studies
              </button>
              <button className="border border-green-400 text-green-200 px-8 py-4 rounded-lg hover:bg-green-500/20 transition-colors font-semibold text-lg">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-6xl mb-6 text-center">{study.image}</div>
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${study.gradient} rounded-full text-sm font-bold mb-4`}>
                {study.industry}
              </div>
              <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
              <p className="text-gray-300 mb-4 font-semibold">{study.company}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-green-300">Challenge:</h4>
                <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold mb-2 text-blue-300">Solution:</h4>
                <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-purple-300">Key Results:</h4>
                <ul className="space-y-2">
                  {study.results.slice(0, 3).map((result, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-cyan-300">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button className={`w-full bg-gradient-to-r ${study.gradient} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Read Full Case Study
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Success Metrics */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-green-500/30"
        >
          <h2 className="text-4xl font-bold mb-8">Proven Results Across Industries</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Successful Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">$2B+</div>
              <div className="text-gray-300">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join hundreds of companies already transforming their businesses with our revolutionary technologies. 
            Let's create your success story together.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border border-green-400 text-green-200 px-12 py-4 rounded-lg hover:bg-green-500/20 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;