import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, 
  Lightbulb, 
  Microscope, 
  Rocket, 
  Brain,
  Zap,
  Target,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Globe
} from 'lucide-react';

export default function ResearchDevelopment() {
  const researchAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Advancing machine learning algorithms, neural networks, and cognitive computing systems",
      focus: ["Deep Learning", "Natural Language Processing", "Computer Vision", "AI Ethics"]
    },
    {
      icon: Zap,
      title: "Quantum Computing",
      description: "Exploring quantum algorithms and quantum-resistant cryptography",
      focus: ["Quantum Algorithms", "Quantum Cryptography", "Quantum Machine Learning", "Error Correction"]
    },
    {
      icon: Rocket,
      title: "Emerging Technologies",
      description: "Researching cutting-edge technologies that will shape the future",
      focus: ["Blockchain", "IoT", "Edge Computing", "5G/6G Networks"]
    },
    {
      icon: Target,
      title: "Cybersecurity Innovation",
      description: "Developing next-generation security solutions and threat detection",
      focus: ["Zero Trust Architecture", "AI-Powered Security", "Threat Intelligence", "Privacy-Preserving Tech"]
    }
  ];

  const currentProjects = [
    {
      title: "AI-Powered Cybersecurity Platform",
      description: "Developing an intelligent threat detection system using machine learning",
      status: "In Progress",
      timeline: "Q2 2025",
      team: "12 researchers"
    },
    {
      title: "Quantum-Resistant Encryption",
      description: "Creating post-quantum cryptographic algorithms for future security",
      status: "Research Phase",
      timeline: "Q4 2025",
      team: "8 researchers"
    },
    {
      title: "Edge AI Computing",
      description: "Optimizing AI models for edge devices and IoT applications",
      status: "Prototype Development",
      timeline: "Q1 2026",
      team: "15 researchers"
    }
  ];

  const partnerships = [
    {
      name: "MIT Computer Science",
      focus: "AI & Machine Learning Research",
      logo: "MIT"
    },
    {
      name: "Stanford University",
      focus: "Quantum Computing & Cryptography",
      logo: "Stanford"
    },
    {
      name: "Carnegie Mellon",
      focus: "Cybersecurity & Privacy",
      logo: "CMU"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-6">
              <FlaskConical className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Research & Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pushing the boundaries of technology through innovative research and cutting-edge development
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center"><Users className="w-4 h-4 mr-2" /> 50+ Researchers</span>
              <span className="flex items-center"><Award className="w-4 h-4 mr-2" /> 25+ Patents</span>
              <span className="flex items-center"><Globe className="w-4 h-4 mr-2" /> Global Partnerships</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Research Focus Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our multidisciplinary research spans cutting-edge technologies that will define the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-6">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="text-purple-400 font-semibold">Research Focus:</h4>
                  <ul className="space-y-1">
                    {area.focus.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Active Research Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ongoing research initiatives that are pushing the boundaries of what's possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                    project.status === 'Research Phase' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Timeline:</span>
                    <span className="text-white">{project.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team Size:</span>
                    <span className="text-white">{project.team}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Academic Partnerships
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collaborating with leading universities to advance technology research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{partner.logo}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
                <p className="text-gray-300">{partner.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Innovation by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantifying our impact on technology advancement
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Research Papers", icon: TrendingUp },
              { number: "25+", label: "Patents Filed", icon: Award },
              { number: "15+", label: "Research Partners", icon: Users },
              { number: "100M+", label: "Research Funding", icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Research Team
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of groundbreaking research that shapes the future of technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              View Research Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Collaborate With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
