import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Rocket,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Target,
  BarChart3
} from 'lucide-react';

export default function ResearchDevelopment() {
  const researchAreas = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced neural networks, autonomous systems, and next-generation AI architectures that push the boundaries of what\'s possible.',
      features: [
        'Neural architecture optimization',
        'Autonomous decision-making systems',
        'AI ethics and responsible development',
        'Multi-agent coordination'
      ]
    },
    {
      icon: Zap,
      title: 'Quantum Computing',
      description: 'Exploring quantum algorithms, quantum machine learning, and the intersection of quantum and classical computing.',
      features: [
        'Quantum algorithm development',
        'Quantum machine learning',
        'Quantum error correction',
        'Hybrid quantum-classical systems'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Next-generation security protocols, threat detection, and zero-trust architectures for the modern digital landscape.',
      features: [
        'Zero-trust security frameworks',
        'AI-powered threat detection',
        'Quantum-resistant cryptography',
        'Behavioral analysis systems'
      ]
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Distributed computing architectures that bring processing power closer to data sources for real-time applications.',
      features: [
        'Edge AI deployment',
        'Real-time data processing',
        'Distributed systems optimization',
        'Edge security protocols'
      ]
    },
    {
      icon: Globe,
      title: 'IoT & Smart Cities',
      description: 'Connected infrastructure, sensor networks, and intelligent systems that transform urban environments.',
      features: [
        'Smart infrastructure monitoring',
        'Environmental sensing networks',
        'Urban mobility optimization',
        'Energy management systems'
      ]
    },
    {
      icon: Rocket,
      title: 'Space Technology',
      description: 'Satellite systems, space-based computing, and technologies that extend our reach beyond Earth.',
      features: [
        'Satellite communication systems',
        'Space-based data processing',
        'Orbital computing platforms',
        'Space exploration technologies'
      ]
    }
  ];

  const researchProjects = [
    {
      title: 'Autonomous AI Systems',
      description: 'Developing self-learning AI systems that can operate independently in complex environments.',
      status: 'In Progress',
      progress: 75,
      team: 'AI Research Lab',
      timeline: 'Q2 2025'
    },
    {
      title: 'Quantum-Classical Hybrid Computing',
      description: 'Creating systems that leverage both quantum and classical computing for optimal performance.',
      status: 'Planning',
      progress: 25,
      team: 'Quantum Computing Lab',
      timeline: 'Q3 2025'
    },
    {
      title: 'Zero-Trust Security Framework',
      description: 'Building comprehensive security systems that verify every access attempt and transaction.',
      status: 'Completed',
      progress: 100,
      team: 'Cybersecurity Lab',
      timeline: 'Q1 2025'
    }
  ];

  const publications = [
    {
      title: 'Advances in Neural Architecture Search',
      authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez',
      journal: 'Nature Machine Intelligence',
      year: 2025,
      doi: '10.1038/s42256-025-00001-x'
    },
    {
      title: 'Quantum Machine Learning for Drug Discovery',
      authors: 'Dr. Emily Watson, Dr. David Kim',
      journal: 'Science Advances',
      year: 2024,
      doi: '10.1126/sciadv.abc1234'
    },
    {
      title: 'Edge Computing Security Protocols',
      authors: 'Dr. James Wilson, Dr. Lisa Chen',
      journal: 'IEEE Security & Privacy',
      year: 2024,
      doi: '10.1109/MSP.2024.1234567'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4 mr-2" />
                Innovation & Discovery
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Research &{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future through cutting-edge research in AI, quantum computing, and emerging technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Research Focus Areas
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We explore emerging technologies and translate them into practical solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:bg-zion-blue-dark/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Current Research Projects
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Active research initiatives that are pushing the boundaries of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zion-slate-light">Progress</span>
                      <span className="text-white">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-zion-slate-dark rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-zion-cyan to-zion-blue h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-zion-slate-light">Team:</span>
                      <div className="text-white font-medium">{project.team}</div>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Timeline:</span>
                      <div className="text-white font-medium">{project.timeline}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Recent Publications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our research contributions to the scientific community
            </p>
          </div>
          
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-6 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{publication.title}</h3>
                    <p className="text-zion-cyan mb-2">{publication.authors}</p>
                    <p className="text-zion-slate-light text-sm mb-2">
                      {publication.journal} • {publication.year}
                    </p>
                    <p className="text-zion-slate-light text-sm font-mono">
                      DOI: {publication.doi}
                    </p>
                  </div>
                  <div className="ml-6">
                    <BookOpen className="w-8 h-8 text-zion-cyan" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join Our Research Team
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're always looking for talented researchers and engineers to join our mission
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
            <button className="px-8 py-4 bg-transparent border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Contact Research Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
