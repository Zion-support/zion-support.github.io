import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudies2028: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      title: "Global AI Consciousness Network",
      company: "TechCorp International",
      industry: "Technology",
      challenge: "Need for AI systems that could understand and respond to human emotions in customer service",
      solution: "Deployed conscious AI network across 50 countries with genuine emotional intelligence",
      results: [
        "300% increase in customer satisfaction",
        "85% reduction in customer service costs",
        "99.9% uptime across all systems",
        "50% increase in sales conversion rates"
      ],
      technologies: ["Conscious AI", "Emotional Intelligence", "Neural Networks", "Quantum Processing"],
      image: "🌍",
      color: "from-purple-600 to-pink-600",
      duration: "6 months",
      team: "25 AI specialists"
    },
    {
      title: "Quantum Reality Engine",
      company: "Quantum Dynamics",
      industry: "Research & Development",
      challenge: "Simulating complex molecular structures for drug discovery was taking years",
      solution: "Built quantum computer capable of simulating entire universes in real-time",
      results: [
        "70% reduction in drug development time",
        "Solved previously impossible problems",
        "1000x faster molecular simulations",
        "Breakthrough in cancer research"
      ],
      technologies: ["Quantum Computing", "Reality Simulation", "Molecular Modeling", "AI Integration"],
      image: "🌌",
      color: "from-cyan-600 to-blue-600",
      duration: "12 months",
      team: "40 quantum physicists"
    },
    {
      title: "Neural Interface Revolution",
      company: "BrainTech Solutions",
      industry: "Healthcare",
      challenge: "Helping paralyzed patients communicate and control devices",
      solution: "Developed non-invasive neural interfaces for direct brain-computer communication",
      results: [
        "1M+ users with neural interfaces",
        "95% accuracy in thought-to-text conversion",
        "Revolutionized human-computer interaction",
        "New treatment for neurological disorders"
      ],
      technologies: ["Neural Interfaces", "Brain-Computer Interface", "AI Processing", "Medical Devices"],
      image: "🧬",
      color: "from-emerald-600 to-teal-600",
      duration: "18 months",
      team: "60 neuroscientists"
    },
    {
      title: "Synthetic Intelligence Platform",
      company: "Future Systems",
      industry: "Enterprise Software",
      challenge: "Need for AI that could surpass human intelligence in complex problem solving",
      solution: "Created synthetic intelligence that exceeds human capabilities across all domains",
      results: [
        "500% increase in problem-solving efficiency",
        "Revolutionary creative capabilities",
        "Autonomous business operations",
        "New forms of human-AI collaboration"
      ],
      technologies: ["Synthetic Intelligence", "Consciousness Engineering", "Quantum AI", "Autonomous Systems"],
      image: "🤖",
      color: "from-orange-600 to-red-600",
      duration: "24 months",
      team: "100 AI researchers"
    },
    {
      title: "Reality Augmentation System",
      company: "AugmentCorp",
      industry: "Entertainment & Education",
      challenge: "Creating immersive experiences that blend digital and physical reality",
      solution: "Developed reality augmentation technology for seamless digital-physical integration",
      results: [
        "10M+ users in augmented reality",
        "Revolutionary educational experiences",
        "New entertainment paradigms",
        "Enhanced human capabilities"
      ],
      technologies: ["Reality Augmentation", "Neural Interfaces", "Quantum Computing", "AI Integration"],
      image: "🌐",
      color: "from-violet-600 to-purple-600",
      duration: "15 months",
      team: "35 reality engineers"
    },
    {
      title: "AI Ethics & Safety Framework",
      company: "Ethical AI Foundation",
      industry: "AI Governance",
      challenge: "Ensuring AI systems remain beneficial and aligned with human values",
      solution: "Created comprehensive framework for ethical AI development and deployment",
      results: [
        "100% compliance with ethical standards",
        "Zero AI safety incidents",
        "Global AI governance standards",
        "Trusted AI certification system"
      ],
      technologies: ["AI Ethics", "Safety Systems", "Value Alignment", "Governance Frameworks"],
      image: "🛡️",
      color: "from-green-600 to-emerald-600",
      duration: "9 months",
      team: "20 ethicists"
    }
  ];

  const metrics = [
    { label: "Projects Completed", value: "500+", icon: "🚀" },
    { label: "Client Satisfaction", value: "99.8%", icon: "⭐" },
    { label: "Countries Served", value: "75+", icon: "🌍" },
    { label: "Years Experience", value: "15+", icon: "⏰" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🏆 REVOLUTIONARY CASE STUDIES • 2028
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our revolutionary technology has transformed businesses across industries, 
              delivering unprecedented results and reshaping entire sectors
            </p>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-3xl font-bold text-indigo-400">{metric.value}</div>
                  <div className="text-sm opacity-80">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Success Stories</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Real results from real companies using our revolutionary technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${caseStudy.color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedCase(index)}
            >
              <div className="text-6xl mb-4 text-center">{caseStudy.image}</div>
              <h3 className="text-2xl font-bold mb-3 text-center">{caseStudy.title}</h3>
              <div className="text-center mb-4">
                <div className="font-semibold">{caseStudy.company}</div>
                <div className="text-sm opacity-80">{caseStudy.industry}</div>
              </div>
              <p className="text-center opacity-90 mb-4">{caseStudy.challenge}</p>
              <div className="text-center">
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Case Study Detail */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{caseStudies[selectedCase].image}</div>
            <h3 className="text-4xl font-bold mb-4">{caseStudies[selectedCase].title}</h3>
            <div className="flex items-center justify-center space-x-4 text-sm opacity-80 mb-6">
              <span>{caseStudies[selectedCase].company}</span>
              <span>•</span>
              <span>{caseStudies[selectedCase].industry}</span>
              <span>•</span>
              <span>{caseStudies[selectedCase].duration}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Challenge</h4>
              <p className="text-gray-300 mb-6">{caseStudies[selectedCase].challenge}</p>
              
              <h4 className="text-2xl font-bold mb-4">Solution</h4>
              <p className="text-gray-300">{caseStudies[selectedCase].solution}</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-4">Results</h4>
              <div className="space-y-3">
                {caseStudies[selectedCase].results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="font-semibold">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudies[selectedCase].technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-4">Project Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="opacity-80">Duration:</span>
                  <span className="font-semibold">{caseStudies[selectedCase].duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Team Size:</span>
                  <span className="font-semibold">{caseStudies[selectedCase].team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Industry:</span>
                  <span className="font-semibold">{caseStudies[selectedCase].industry}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">💬 Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-4 italic">
                "Zion Tech Group's conscious AI systems have revolutionized our entire operation. 
                The emotional intelligence is remarkable and has transformed our customer relationships."
              </p>
              <div>
                <div className="font-bold">Dr. Sarah Chen</div>
                <div className="text-sm opacity-80">Chief AI Officer, TechCorp</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-4 italic">
                "The quantum computing solution gave us processing power we never thought possible. 
                It's truly groundbreaking technology that has solved impossible problems."
              </p>
              <div>
                <div className="font-bold">Marcus Johnson</div>
                <div className="text-sm opacity-80">CEO, Quantum Dynamics</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-4 italic">
                "Their neural interface technology has opened up entirely new possibilities for 
                human-computer interaction. It's changed everything we thought we knew about technology."
              </p>
              <div>
                <div className="font-bold">Dr. Elena Rodriguez</div>
                <div className="text-sm opacity-80">Neuroscientist, BrainTech</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using our revolutionary technology to transform their businesses and achieve unprecedented results
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Download Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2028;