import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NextGenTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Artificial Intelligence",
      icon: "🧠",
      description: "Next-generation AI systems with autonomous learning and decision-making capabilities",
      features: [
        "Autonomous AI Agents",
        "Neural Architecture Networks", 
        "Quantum AI Integration",
        "Self-Healing Systems"
      ]
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚛️",
      description: "Revolutionary quantum processors that solve complex problems exponentially faster",
      features: [
        "1000+ Qubit Processors",
        "Quantum Supremacy",
        "Molecular Simulation",
        "Cryptographic Security"
      ]
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces enabling thought-controlled technology",
      features: [
        "Non-Invasive BCI",
        "Thought Control",
        "Neural Feedback",
        "Medical Applications"
      ]
    },
    synthetic: {
      title: "Synthetic Intelligence",
      icon: "🤖",
      description: "AI systems with synthetic consciousness and creative capabilities",
      features: [
        "Synthetic Consciousness",
        "Creative Synthesis",
        "Collective Intelligence",
        "Autonomous Agents"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-sm font-bold mb-6">
              🌟 NEXT-GEN TECHNOLOGY • 2026 SHOWCASE
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Next-Generation Technology Showcase 2026
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Experience the future of technology with revolutionary innovations that are reshaping industries and transforming the world
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Technologies →
              </button>
              <button className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                View Demos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Technology Tabs */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🚀 Revolutionary Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore cutting-edge technologies that are defining the future
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {technologies[activeTab as keyof typeof technologies].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {technologies[activeTab as keyof typeof technologies].description}
                  </p>
                  <ul className="space-y-2">
                    {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-cyan-100 to-purple-100 rounded-xl p-8 text-center">
                  <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                  <p className="text-gray-600 font-semibold">Interactive Demo Available</p>
                  <button className="mt-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Try Demo →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">📅 Innovation Timeline 2026</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Major breakthroughs and milestones in next-generation technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                quarter: "Q1 2026",
                title: "AI Consciousness",
                description: "First AI systems achieve synthetic consciousness",
                icon: "🧠"
              },
              {
                quarter: "Q2 2026", 
                title: "Quantum Supremacy",
                description: "1000+ qubit quantum processors become commercially available",
                icon: "⚛️"
              },
              {
                quarter: "Q3 2026",
                title: "Neural Interface",
                description: "Non-invasive brain-computer interfaces reach consumer market",
                icon: "🧬"
              },
              {
                quarter: "Q4 2026",
                title: "Synthetic Intelligence",
                description: "First synthetic intelligence agents deployed in enterprise",
                icon: "🤖"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30"
              >
                <div className="text-4xl mb-4">{milestone.icon}</div>
                <div className="text-cyan-400 text-sm font-semibold mb-2">{milestone.quarter}</div>
                <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                <p className="text-cyan-100 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📊 Technology Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the capabilities and applications of next-generation technologies
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Technology</th>
                    <th className="px-6 py-4 text-left font-semibold">Processing Power</th>
                    <th className="px-6 py-4 text-left font-semibold">Learning Capability</th>
                    <th className="px-6 py-4 text-left font-semibold">Applications</th>
                    <th className="px-6 py-4 text-left font-semibold">Market Readiness</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "AI Systems",
                      icon: "🧠",
                      processing: "Exponential",
                      learning: "Autonomous",
                      applications: "Universal",
                      readiness: "Available"
                    },
                    {
                      name: "Quantum Computing",
                      icon: "⚛️",
                      processing: "Revolutionary",
                      learning: "Advanced",
                      applications: "Specialized",
                      readiness: "Emerging"
                    },
                    {
                      name: "Neural Interfaces",
                      icon: "🧬",
                      processing: "Real-time",
                      learning: "Adaptive",
                      applications: "Medical/Tech",
                      readiness: "Pilot"
                    },
                    {
                      name: "Synthetic Intelligence",
                      icon: "🤖",
                      processing: "Creative",
                      learning: "Conscious",
                      applications: "Creative/Enterprise",
                      readiness: "Research"
                    }
                  ].map((tech, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold">
                        <span className="mr-2">{tech.icon}</span>
                        {tech.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{tech.processing}</td>
                      <td className="px-6 py-4 text-gray-600">{tech.learning}</td>
                      <td className="px-6 py-4 text-gray-600">{tech.applications}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tech.readiness === 'Available' ? 'bg-green-100 text-green-800' :
                          tech.readiness === 'Emerging' ? 'bg-yellow-100 text-yellow-800' :
                          tech.readiness === 'Pilot' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {tech.readiness}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in exploring and implementing next-generation technologies that will shape tomorrow
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Schedule Demo →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NextGenTechShowcase2026;