import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, 
  Brain, 
  Atom, 
  Rocket, 
  Globe, 
  Cpu, 
  Shield, 
  Cloud,
  Zap,
  Lightbulb,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  Target,
  BarChart3,
  Code,
  Database,
  Network,
  Lock
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function ResearchDevelopment() {
  const researchAreas = [
    {
      name: 'Artificial Intelligence & Machine Learning',
      icon: Brain,
      description: 'Advancing the frontiers of AI with cutting-edge research in neural networks, natural language processing, and computer vision.',
      projects: [
        'Quantum Neural Networks',
        'Federated Learning Systems',
        'Explainable AI Frameworks',
        'Multi-Modal AI Models'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Exploring quantum algorithms and quantum machine learning for solving complex computational problems.',
      projects: [
        'Quantum Error Correction',
        'Quantum Machine Learning',
        'Quantum Cryptography',
        'Quantum Optimization'
      ],
      color: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Edge Computing & IoT',
      icon: Cpu,
      description: 'Developing next-generation edge computing platforms for real-time data processing and IoT applications.',
      projects: [
        'Edge AI Processing',
        'IoT Security Protocols',
        '5G Edge Networks',
        'Autonomous Edge Systems'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Cybersecurity & Privacy',
      icon: Shield,
      description: 'Researching advanced security protocols, zero-trust architectures, and privacy-preserving technologies.',
      projects: [
        'Zero-Knowledge Proofs',
        'Homomorphic Encryption',
        'Threat Intelligence',
        'Privacy-Preserving ML'
      ],
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'Sustainable Technology',
      icon: Globe,
      description: 'Developing green computing solutions and sustainable technology practices for environmental impact reduction.',
      projects: [
        'Green AI Algorithms',
        'Energy-Efficient Computing',
        'Carbon-Neutral Data Centers',
        'Sustainable IoT Networks'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Space Technology',
      icon: Rocket,
      description: 'Advancing space-based computing, satellite technology, and interplanetary communication systems.',
      projects: [
        'Satellite AI Processing',
        'Space-Based Quantum Networks',
        'Interplanetary Internet',
        'Space Debris Tracking'
      ],
      color: 'from-slate-600 to-gray-600'
    }
  ];

  const currentProjects = [
    {
      title: 'Quantum AI Platform Development',
      status: 'In Progress',
      progress: 75,
      description: 'Building a hybrid quantum-classical AI platform for solving complex optimization problems.',
      team: 12,
      timeline: 'Q2 2025',
      category: 'Quantum Computing'
    },
    {
      title: 'Edge AI Security Framework',
      status: 'Research Phase',
      progress: 45,
      description: 'Developing secure AI processing capabilities for edge computing environments.',
      team: 8,
      timeline: 'Q3 2025',
      category: 'Cybersecurity'
    },
    {
      title: 'Sustainable Cloud Infrastructure',
      status: 'Prototype',
      progress: 60,
      description: 'Creating energy-efficient cloud computing solutions with renewable energy integration.',
      team: 15,
      timeline: 'Q4 2025',
      category: 'Sustainable Tech'
    },
    {
      title: 'Multi-Modal AI Models',
      status: 'Testing',
      progress: 85,
      description: 'Advanced AI models that can process text, image, and audio simultaneously.',
      team: 10,
      timeline: 'Q1 2026',
      category: 'AI/ML'
    }
  ];

  const publications = [
    {
      title: 'Quantum Machine Learning for Financial Optimization',
      authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez',
      journal: 'Nature Quantum Information',
      year: 2024,
      doi: '10.1038/s41534-024-00800-3',
      abstract: 'Novel quantum algorithms for portfolio optimization and risk assessment in financial markets.'
    },
    {
      title: 'Edge Computing Security in IoT Networks',
      authors: 'Dr. James Wilson, Dr. Emily Zhang',
      journal: 'IEEE Transactions on Cybersecurity',
      year: 2024,
      doi: '10.1109/TCS.2024.001234',
      abstract: 'Advanced security protocols for edge computing environments in industrial IoT applications.'
    },
    {
      title: 'Sustainable AI: Energy-Efficient Neural Networks',
      authors: 'Dr. Lisa Thompson, Dr. David Kim',
      journal: 'ACM Computing Surveys',
      year: 2024,
      doi: '10.1145/1234567.1234567',
      abstract: 'Methods for reducing the carbon footprint of large-scale AI model training and inference.'
    }
  ];

  const partnerships = [
    {
      name: 'MIT Computer Science & AI Lab',
      focus: 'Quantum Computing Research',
      status: 'Active',
      projects: 3
    },
    {
      name: 'Stanford AI Research',
      focus: 'Machine Learning & Ethics',
      status: 'Active',
      projects: 2
    },
    {
      name: 'NASA Ames Research Center',
      focus: 'Space Technology & Computing',
      status: 'Planning',
      projects: 1
    },
    {
      name: 'European Organization for Nuclear Research (CERN)',
      focus: 'High-Performance Computing',
      status: 'Active',
      projects: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Research & Development - Zion Tech Group"
        description="Explore Zion Tech Group's cutting-edge research initiatives in AI, quantum computing, cybersecurity, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-6"
          >
            <FlaskConical className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Research & Development
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Pushing the boundaries of technology through innovative research in AI, quantum computing, 
            cybersecurity, and emerging technologies that will shape the future.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Collaborate With Us
            </Link>
            <Link
              to="/careers"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Join Our R&D Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Research Focus Areas
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${area.color} mb-6`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{area.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3">Current Projects:</h4>
                  {area.projects.map((project) => (
                    <div key={project} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {project}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Active Research Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm font-medium">
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-400">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Team Size:</span>
                    <span className="text-white ml-2">{project.team} members</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Timeline:</span>
                    <span className="text-white ml-2">{project.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Recent Publications
          </motion.h2>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {pub.authors} • {pub.journal} • {pub.year}
                </p>
                <p className="text-gray-300 mb-3">{pub.abstract}</p>
                <div className="flex items-center gap-4">
                  <span className="text-blue-400 text-sm font-medium">DOI: {pub.doi}</span>
                  <Link
                    to={`/publications/${pub.doi}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                  >
                    Read Full Paper →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Research Partnerships
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 mb-3">{partner.focus}</p>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    partner.status === 'Active' 
                      ? 'bg-green-600/20 border border-green-600/30 text-green-400'
                      : 'bg-yellow-600/20 border border-yellow-600/30 text-yellow-400'
                  }`}>
                    {partner.status}
                  </span>
                  <span className="text-gray-400 text-sm">{partner.projects} projects</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Join Our Research Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Be part of groundbreaking research that will shape the future of technology
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/careers"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Research Positions
            </Link>
            <Link
              to="/contact"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Discuss Collaboration
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}