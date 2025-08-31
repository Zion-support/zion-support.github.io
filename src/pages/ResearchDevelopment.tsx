import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Cpu, Shield, Cloud, Zap, TestTube, Users, Globe, ArrowRight, Star } from 'lucide-react';

const ResearchDevelopment = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Advancing the frontiers of AI with autonomous systems, neural networks, and intelligent automation.",
      focus: ["Neural Networks", "Autonomous Systems", "Natural Language Processing", "Computer Vision"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Quantum Computing",
      description: "Exploring quantum algorithms and applications for solving complex computational problems.",
      focus: ["Quantum Algorithms", "Quantum Cryptography", "Financial Modeling", "Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Privacy",
      description: "Developing next-generation security solutions and privacy-preserving technologies.",
      focus: ["Zero-Trust Architecture", "Threat Detection", "Privacy Engineering", "Compliance Automation"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud & Edge Computing",
      description: "Innovating distributed computing architectures and edge intelligence solutions.",
      focus: ["Edge AI", "Distributed Systems", "5G Networks", "IoT Integration"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Blockchain & Web3",
      description: "Researching decentralized systems and next-generation blockchain technologies.",
      focus: ["Smart Contracts", "DeFi Protocols", "Web3 Infrastructure", "Token Economics"],
      color: "from-green-500 to-emerald-500"
    },
    {
                  icon: TestTube,
      title: "Emerging Technologies",
      description: "Exploring cutting-edge technologies that will shape the future of computing.",
      focus: ["Neuromorphic Computing", "DNA Storage", "Quantum Internet", "Space Computing"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const currentProjects = [
    {
      title: "AI-Powered Drug Discovery",
      description: "Using machine learning to accelerate pharmaceutical research and development",
      progress: 75,
      team: "12 researchers",
      timeline: "18 months"
    },
    {
      title: "Quantum-Safe Cryptography",
      description: "Developing post-quantum cryptographic algorithms for future security needs",
      progress: 60,
      team: "8 researchers",
      timeline: "24 months"
    },
    {
      title: "Edge AI for IoT",
      description: "Creating intelligent edge computing solutions for Internet of Things applications",
      progress: 85,
      team: "15 researchers",
      timeline: "12 months"
    }
  ];

  const partnerships = [
    {
      name: "Stanford University",
      focus: "AI Research & Quantum Computing",
      logo: "S"
    },
    {
      name: "MIT",
      focus: "Machine Learning & Robotics",
      logo: "M"
    },
    {
      name: "NASA",
      focus: "Space Technology & Computing",
      logo: "N"
    },
    {
      name: "DARPA",
      focus: "Defense Technology",
      logo: "D"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Research &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Development
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Pushing the boundaries of technology through innovative research and cutting-edge development
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                Collaborate With Us
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                View Publications
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Research Focus Areas
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 mb-4">{area.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Research Focus</h4>
                    <ul className="space-y-1">
                      {area.focus.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Current Research Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-cyan-400">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Team</span>
                    <span className="text-white">{project.team}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Timeline</span>
                    <span className="text-white">{project.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Partnerships */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Research Partnerships
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{partner.logo}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm">{partner.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Collaborate With Us</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Interested in research collaboration or want to learn more about our R&D initiatives?
              Let's explore opportunities to work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                View Publications
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment;
