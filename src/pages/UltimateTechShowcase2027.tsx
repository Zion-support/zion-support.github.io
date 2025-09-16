import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const UltimateTechShowcase2027: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Quantum Consciousness Computing",
      description: "Revolutionary quantum processors that integrate consciousness patterns for unprecedented computational power",
      icon: "🧠",
      features: ["Consciousness Integration", "Quantum Entanglement", "Neural Pattern Recognition", "Reality Simulation"],
      status: "In Development",
      timeline: "Q3 2027"
    },
    {
      id: 2,
      title: "Interdimensional Neural Networks",
      description: "AI systems that operate across multiple dimensions, accessing parallel realities for enhanced problem-solving",
      icon: "🌌",
      features: ["Multi-Dimensional Processing", "Parallel Reality Access", "Consciousness Transfer", "Reality Manipulation"],
      status: "Prototype Ready",
      timeline: "Q2 2027"
    },
    {
      id: 3,
      title: "Synthetic Biology AI",
      description: "Advanced biotechnology systems that create and manage synthetic life forms for various applications",
      icon: "🧬",
      features: ["Synthetic Life Creation", "Biological Computing", "DNA Programming", "Evolutionary Algorithms"],
      status: "Beta Testing",
      timeline: "Q1 2027"
    },
    {
      id: 4,
      title: "Holographic Reality Engine",
      description: "Complete holographic environment creation with full sensory integration and consciousness transfer",
      icon: "🌟",
      features: ["Full Sensory Holography", "Consciousness Transfer", "Reality Overlay", "Multi-User Environments"],
      status: "Advanced Development",
      timeline: "Q4 2027"
    },
    {
      id: 5,
      title: "Space-Time Manipulation AI",
      description: "AI systems capable of manipulating space-time fabric for advanced transportation and communication",
      icon: "⏰",
      features: ["Time Dilation Control", "Space Folding", "Temporal Communication", "Reality Anchoring"],
      status: "Research Phase",
      timeline: "Q1 2028"
    },
    {
      id: 6,
      title: "Consciousness Cloud Platform",
      description: "Distributed consciousness computing platform that allows shared intelligence across multiple entities",
      icon: "☁️",
      features: ["Shared Intelligence", "Consciousness Backup", "Collective Problem Solving", "Distributed Learning"],
      status: "Alpha Testing",
      timeline: "Q2 2027"
    }
  ];

  const successStories = [
    {
      company: "Neural Dynamics Corp",
      result: "300% increase in computational efficiency",
      technology: "Quantum Consciousness Computing",
      testimonial: "This technology has revolutionized our research capabilities beyond our wildest expectations."
    },
    {
      company: "Reality Labs Inc",
      result: "Complete virtual reality transformation",
      technology: "Holographic Reality Engine",
      testimonial: "Our users can now experience fully immersive realities that are indistinguishable from physical reality."
    },
    {
      company: "BioTech Solutions",
      result: "Breakthrough in synthetic biology",
      technology: "Synthetic Biology AI",
      testimonial: "We've created the first fully functional synthetic organisms with AI-guided evolution."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ultimate Tech Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Discover the most advanced technologies of 2027 including quantum consciousness computing, interdimensional neural networks, and holographic reality engines." />
        <meta name="keywords" content="Quantum Computing, Neural Networks, Holographic Reality, Synthetic Biology, Space-Time Manipulation, Consciousness Computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 ULTIMATE TECH SHOWCASE • 2027
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Future Technologies
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Experience the most revolutionary technologies that will define the future of humanity. 
                From quantum consciousness to interdimensional computing, discover what's possible in 2027.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Cutting-edge innovations that push the boundaries of what's possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                <p className="text-purple-100 mb-6 text-center">{tech.description}</p>
                
                <div className="space-y-2 mb-6">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-purple-200">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tech.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-300' :
                    tech.status === 'Prototype Ready' ? 'bg-green-500/20 text-green-300' :
                    tech.status === 'Beta Testing' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {tech.status}
                  </span>
                  <span className="text-sm text-purple-300">{tech.timeline}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Real results from companies using our revolutionary technologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                  <p className="text-purple-200 mb-4">{story.technology}</p>
                  <div className="text-2xl font-bold text-green-400 mb-4">{story.result}</div>
                  <p className="text-white/80 italic">"{story.testimonial}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the revolution and be among the first to experience these groundbreaking technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Schedule Demo →
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UltimateTechShowcase2027;