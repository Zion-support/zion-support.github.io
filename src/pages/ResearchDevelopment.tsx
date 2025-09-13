import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
import { 
  FlaskConical, 
  Lightbulb, 
  Microscope, 
  Rocket, 
<<<<<<< HEAD
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
=======
  Brain, 
  Atom,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  GraduationCap,
  Target,
  Eye,
  Heart
} from 'lucide-react';

const ResearchDevelopment: React.FC = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Pioneering next-generation AI algorithms and machine learning models for real-world applications.',
      focus: [
        'Large Language Models',
        'Computer Vision',
        'Natural Language Processing',
        'Reinforcement Learning',
        'AI Ethics & Safety'
      ]
    },
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Exploring the frontiers of quantum computing for solving complex computational problems.',
      focus: [
        'Quantum Algorithms',
        'Quantum Cryptography',
        'Quantum Machine Learning',
        'Quantum Error Correction',
        'Quantum-Classical Hybrid Systems'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Privacy',
      description: 'Developing advanced security protocols and privacy-preserving technologies.',
      focus: [
        'Zero-Trust Architecture',
        'Blockchain Security',
        'Privacy-Preserving ML',
        'Threat Intelligence',
        'Secure Multi-Party Computation'
      ]
    },
    {
      icon: Cloud,
      title: 'Edge Computing & IoT',
      description: 'Creating intelligent edge computing solutions for the Internet of Things.',
      focus: [
        'Edge AI Processing',
        'IoT Security',
        'Real-time Analytics',
        'Edge-Cloud Orchestration',
        '5G Integration'
      ]
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      description: 'Advancing data science methodologies for extracting insights from complex datasets.',
      focus: [
        'Big Data Processing',
        'Predictive Analytics',
        'Data Visualization',
        'Statistical Modeling',
        'Business Intelligence'
      ]
    },
    {
      icon: Rocket,
      title: 'Emerging Technologies',
      description: 'Exploring cutting-edge technologies that will shape the future of computing.',
      focus: [
        'Neuromorphic Computing',
        'Biocomputing',
        'Optical Computing',
        'DNA Storage',
        'Quantum Internet'
      ]
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
    }
  ];

  const currentProjects = [
    {
<<<<<<< HEAD
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
=======
      title: 'Quantum Neural Networks',
      description: 'Developing hybrid quantum-classical neural networks for enhanced machine learning capabilities.',
      status: 'In Progress',
      timeline: '18 months',
      team: '8 researchers',
      funding: '$2.5M'
    },
    {
      title: 'AI-Powered Cybersecurity',
      description: 'Creating intelligent threat detection systems using advanced machine learning algorithms.',
      status: 'Active',
      timeline: '12 months',
      team: '6 researchers',
      funding: '$1.8M'
    },
    {
      title: 'Edge AI Framework',
      description: 'Building a comprehensive framework for deploying AI models on edge devices.',
      status: 'Planning',
      timeline: '24 months',
      team: '10 researchers',
      funding: '$3.2M'
    },
    {
      title: 'Quantum Internet Protocol',
      description: 'Developing secure communication protocols for the future quantum internet.',
      status: 'Research Phase',
      timeline: '36 months',
      team: '12 researchers',
      funding: '$4.1M'
    }
  ];

  const publications = [
    {
      title: 'Quantum Machine Learning: A Survey of Current Approaches',
      authors: 'Dr. Sarah Chen, Dr. James Thompson, et al.',
      journal: 'Nature Machine Intelligence',
      year: '2024',
      doi: '10.1038/s42256-024-00001-x'
    },
    {
      title: 'Edge Computing for AI: Challenges and Opportunities',
      authors: 'Dr. Michael Rodriguez, Dr. Emily Wang',
      journal: 'IEEE Transactions on Edge Computing',
      year: '2024',
      doi: '10.1109/TEDGE.2024.00001'
    },
    {
      title: 'Privacy-Preserving Machine Learning in Healthcare',
      authors: 'Dr. David Kim, Dr. Lisa Zhang',
      journal: 'Journal of Medical Internet Research',
      year: '2023',
      doi: '10.2196/12345'
    },
    {
      title: 'Quantum Cryptography: Post-Quantum Security',
      authors: 'Dr. Robert Johnson, Dr. Maria Garcia',
      journal: 'Cryptography and Communications',
      year: '2023',
      doi: '10.1007/s12095-023-00001-x'
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
    }
  ];

  const partnerships = [
    {
<<<<<<< HEAD
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
=======
      name: 'Stanford University',
      type: 'Academic Research',
      focus: 'Quantum Computing & AI',
      logo: '🏛️'
    },
    {
      name: 'MIT CSAIL',
      type: 'Research Collaboration',
      focus: 'Machine Learning & Robotics',
      logo: '🎓'
    },
    {
      name: 'Google Research',
      type: 'Industry Partnership',
      focus: 'Quantum AI & Cloud Computing',
      logo: '🔍'
    },
    {
      name: 'IBM Research',
      type: 'Technology Alliance',
      focus: 'Quantum Computing & AI Ethics',
      logo: '💻'
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
    }
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Research & Development
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Pushing the boundaries of technology through cutting-edge research, innovative solutions, 
            and collaborative partnerships that shape the future of computing.
          </motion.p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Research Focus Areas</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Our multidisciplinary research spans the most promising and impactful areas of technology innovation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mb-6">
                  <area.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-zion-cyan/80 mb-6 leading-relaxed">{area.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Research Focus</h4>
                  <ul className="space-y-2">
                    {area.focus.map((focus, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-cyan/80 text-sm">
                        <Target className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {focus}
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
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
<<<<<<< HEAD
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
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Current Research Projects</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Active research initiatives that are pushing the boundaries of what's possible in technology.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                    project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Planning' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
                  }`}>
                    {project.status}
                  </span>
                </div>
<<<<<<< HEAD
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Timeline:</span>
                    <span className="text-white">{project.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team Size:</span>
                    <span className="text-white">{project.team}</span>
=======
                
                <p className="text-zion-cyan/80 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-zion-cyan font-bold">{project.timeline}</div>
                    <div className="text-zion-cyan/60 text-sm">Timeline</div>
                  </div>
                  <div>
                    <div className="text-zion-cyan font-bold">{project.team}</div>
                    <div className="text-zion-cyan/60 text-sm">Team Size</div>
                  </div>
                  <div>
                    <div className="text-zion-cyan font-bold">{project.funding}</div>
                    <div className="text-zion-cyan/60 text-sm">Funding</div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
                  </div>
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Research Publications</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Our research contributions published in leading scientific journals and conferences.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                    <p className="text-zion-cyan/80 mb-2">{pub.authors}</p>
                    <div className="flex items-center gap-4 text-sm text-zion-cyan/60">
                      <span>{pub.journal}</span>
                      <span>{pub.year}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-zion-cyan text-sm mb-2">DOI</div>
                    <div className="text-zion-cyan/80 text-sm font-mono">{pub.doi}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Research Partnerships</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Collaborating with leading academic institutions and industry partners to advance technology research.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <div className="text-zion-cyan mb-2">{partner.type}</div>
                <p className="text-zion-cyan/80 text-sm">{partner.focus}</p>
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Research Mission
            </h2>
            <p className="text-xl text-zion-cyan/80 mb-8">
              Whether you're a researcher, student, or industry partner, there are many ways to collaborate 
              with us on cutting-edge technology research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Opportunities
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                Contact Research Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default ResearchDevelopment;
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
