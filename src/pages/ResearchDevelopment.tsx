import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { 
  Brain, 
  Atom, 
  Flask, 
  Microscope, 
  Rocket, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Globe, 
  Users, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Lightbulb,
  Code,
  Server,
  Cloud,
  Lock,
  Eye,
  Heart,
  Satellite,
  Dna,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2
} from 'lucide-react';

const ResearchDevelopment: React.FC = () => {
  const researchAreas = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Advanced AI research in consciousness simulation, neural networks, and autonomous systems',
      icon: Brain,
      color: 'from-zion-cyan to-zion-blue',
      projects: [
        'AI Consciousness Simulator',
        'Quantum Neural Networks',
        'Autonomous Decision Systems',
        'Natural Language Processing',
        'Computer Vision & Recognition',
        'Predictive Analytics'
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Breakthrough research in quantum algorithms, cryptography, and quantum supremacy',
      icon: Atom,
      color: 'from-zion-purple to-zion-cyan',
      projects: [
        'Quantum Algorithm Development',
        'Quantum Cryptography',
        'Quantum Error Correction',
        'Quantum Machine Learning',
        'Quantum Simulation',
        'Post-Quantum Security'
      ]
    },
    {
      title: 'Biotechnology & Healthcare',
      description: 'Innovative research in medical technology, drug discovery, and personalized medicine',
      icon: Dna,
      color: 'from-zion-cyan to-zion-purple',
      projects: [
        'CRISPR Gene Editing',
        'Drug Discovery AI',
        'Personalized Medicine',
        'Medical Device Innovation',
        'Biomarker Research',
        'Regenerative Medicine'
      ]
    },
    {
      title: 'Space Technology',
      description: 'Cutting-edge research in satellite technology, space exploration, and orbital systems',
      icon: Satellite,
      color: 'from-zion-blue to-zion-cyan',
      projects: [
        'Satellite Design & Engineering',
        'Space Propulsion Systems',
        'Orbital Mechanics',
        'Space Debris Management',
        'Interplanetary Communication',
        'Space Mining Technology'
      ]
    },
    {
      title: 'Nanotechnology',
      description: 'Research in molecular manufacturing, nanomaterials, and nanoscale devices',
      icon: Microscope,
      color: 'from-zion-purple to-zion-blue',
      projects: [
        'Molecular Manufacturing',
        'Nanomaterials Development',
        'Nanoelectronics',
        'Nanomedicine',
        'Quantum Dots',
        'Carbon Nanotubes'
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      description: 'Advanced research in threat detection, privacy-preserving technologies, and secure systems',
      icon: Shield,
      color: 'from-zion-cyan to-zion-purple',
      projects: [
        'Zero-Knowledge Proofs',
        'Homomorphic Encryption',
        'Threat Intelligence',
        'Privacy-Preserving ML',
        'Blockchain Security',
        'Post-Quantum Cryptography'
      ]
    }
  ];

  const currentProjects = [
    {
      name: 'Quantum Consciousness Interface',
      description: 'Developing a quantum-based interface for human-AI consciousness interaction',
      status: 'In Progress',
      progress: 75,
      team: 'Dr. Sarah Chen, Dr. Michael Rodriguez, AI Research Team',
      funding: '$2.5M',
      timeline: 'Q4 2025'
    },
    {
      name: 'Autonomous Space Mining Platform',
      description: 'AI-powered autonomous system for asteroid mining and resource extraction',
      status: 'Research Phase',
      progress: 45,
      team: 'Dr. James Wilson, Space Engineering Team',
      funding: '$5.0M',
      timeline: 'Q2 2026'
    },
    {
      name: 'Biocompatible Neural Implants',
      description: 'Next-generation neural implants for medical and enhancement applications',
      status: 'Prototype Development',
      progress: 60,
      team: 'Dr. Emily Park, Biomedical Team',
      funding: '$3.2M',
      timeline: 'Q3 2025'
    },
    {
      name: 'Post-Quantum Cryptography Framework',
      description: 'Developing cryptographic standards resistant to quantum attacks',
      status: 'Testing Phase',
      progress: 85,
      team: 'Dr. Robert Kim, Security Research Team',
      funding: '$1.8M',
      timeline: 'Q1 2026'
    }
  ];

  const researchPartners = [
    {
      name: 'MIT Technology Institute',
      logo: '🏛️',
      focus: 'AI & Quantum Computing',
      collaboration: 'Joint Research Projects'
    },
    {
      name: 'Stanford Research Lab',
      logo: '🎓',
      focus: 'Biotechnology & Medicine',
      collaboration: 'Clinical Trials & Testing'
    },
    {
      name: 'NASA Advanced Concepts',
      logo: '🚀',
      focus: 'Space Technology',
      collaboration: 'Space Mission Development'
    },
    {
      name: 'CERN Research Center',
      logo: '⚛️',
      focus: 'Particle Physics',
      collaboration: 'Quantum Research'
    }
  ];

  const publications = [
    {
      title: 'Quantum Neural Networks: A New Paradigm for AI',
      authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez',
      journal: 'Nature Machine Intelligence',
      year: 2025,
      impact: 'High',
      doi: '10.1038/s42256-025-00001-1'
    },
    {
      title: 'Autonomous Space Mining: AI-Driven Resource Extraction',
      authors: 'Dr. James Wilson, Space Engineering Team',
      journal: 'Space Technology & Applications',
      year: 2025,
      impact: 'Medium',
      doi: '10.1016/j.space.2025.001'
    },
    {
      title: 'Biocompatible Neural Interfaces: Future of Human Enhancement',
      authors: 'Dr. Emily Park, Biomedical Team',
      journal: 'Biomedical Engineering',
      year: 2024,
      impact: 'High',
      doi: '10.1016/j.bme.2024.002'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEOHead 
        title="Research & Development"
        description="Cutting-edge research in AI, quantum computing, biotechnology, space technology, and nanotechnology. Leading innovation for the future."
        keywords="research, development, AI research, quantum computing, biotechnology, space technology, nanotechnology, innovation"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-blue/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Research & Development
              </span>
              <br />
              <span className="text-white">Pioneering the Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 leading-relaxed">
              At Zion Tech Group, we're not just building the future—we're inventing it. 
              Our R&D division pushes the boundaries of what's possible in AI, quantum computing, 
              biotechnology, space technology, and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Explore Research Areas
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Join Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Research <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our multidisciplinary research spans the most cutting-edge technologies of our time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mr-4`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6">{area.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {area.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{project}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    to={`/research/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Current <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Active research initiatives that are shaping the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'In Progress' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Research Phase' ? 'bg-blue-500/20 text-blue-400' :
                    project.status === 'Prototype Development' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-zion-slate-light mb-6">{project.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zion-slate-light">Progress</span>
                      <span className="text-zion-cyan">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-zion-slate-dark/50 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-zion-cyan to-zion-blue h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-zion-slate-light">Team:</span>
                      <p className="text-white font-medium">{project.team}</p>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Funding:</span>
                      <p className="text-white font-medium">{project.funding}</p>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Timeline:</span>
                      <p className="text-white font-medium">{project.timeline}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Partners */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Research <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Collaborating with world-leading institutions to advance human knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-zion-slate-light text-sm mb-2">{partner.focus}</p>
                <p className="text-zion-cyan text-xs">{partner.collaboration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recent <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Publications</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our research contributions to the global scientific community
            </p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{publication.title}</h3>
                    <p className="text-zion-slate-light mb-2">{publication.authors}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-zion-cyan">{publication.journal}</span>
                      <span className="text-zion-slate-light">{publication.year}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        publication.impact === 'High' ? 'bg-green-500/20 text-green-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {publication.impact} Impact
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <a 
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                    >
                      View Paper <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Research</span> Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Help us push the boundaries of what's possible and shape the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Submit Research Proposal
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment;
