import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, 
  Microscope, 
  TestTube, 
  Brain, 
  Rocket, 
  Zap,
  Shield,
  Cloud,
  Lock,
  Code,
  Heart,
  Globe,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3,
  Cpu,
  Database,
  Network,
  Atom,
  Telescope,
  Beaker,
  GraduationCap,
  FileText,
  Video,
  Download,
  Share2
} from 'lucide-react';

const researchAreas = [
  {
    id: 'quantum-ai',
    title: 'Quantum AI & Machine Learning',
    description: 'Exploring the intersection of quantum computing and artificial intelligence to solve previously intractable problems.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    projects: [
      'Quantum Neural Networks',
      'Quantum-Classical Hybrid Algorithms',
      'Quantum Machine Learning Optimization'
    ],
    publications: 12,
    patents: 3,
    team: 8
  },
  {
    id: 'cybersecurity-ai',
    title: 'AI-Powered Cybersecurity',
    description: 'Developing next-generation security systems using artificial intelligence and machine learning.',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    projects: [
      'Threat Detection & Response',
      'Zero-Trust Architecture',
      'Quantum-Safe Cryptography'
    ],
    publications: 8,
    patents: 2,
    team: 6
  },
  {
    id: 'edge-computing',
    title: 'Edge Computing & IoT',
    description: 'Researching distributed computing paradigms and intelligent edge devices for next-generation applications.',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    projects: [
      'Edge AI Processing',
      'IoT Security Protocols',
      'Distributed Computing Optimization'
    ],
    publications: 15,
    patents: 4,
    team: 10
  },
  {
    id: 'sustainable-tech',
    title: 'Sustainable Technology',
    description: 'Developing green computing solutions and energy-efficient technologies for a sustainable future.',
    icon: Heart,
    color: 'from-green-500 to-emerald-500',
    projects: [
      'Green AI Algorithms',
      'Energy-Efficient Computing',
      'Carbon-Neutral Data Centers'
    ],
    publications: 9,
    patents: 2,
    team: 5
  },
  {
    id: 'blockchain-research',
    title: 'Blockchain & Web3',
    description: 'Advancing blockchain technology and decentralized systems for secure, transparent applications.',
    icon: Lock,
    color: 'from-indigo-500 to-purple-500',
    projects: [
      'Scalable Blockchain Protocols',
      'DeFi Security',
      'Web3 Infrastructure'
    ],
    publications: 11,
    patents: 3,
    team: 7
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin Technology',
    description: 'Creating virtual representations of physical systems for simulation, monitoring, and optimization.',
    icon: Globe,
    color: 'from-yellow-500 to-orange-500',
    projects: [
      'Industrial Digital Twins',
      'Smart City Modeling',
      'Predictive Maintenance Systems'
    ],
    publications: 7,
    patents: 1,
    team: 4
  }
];

const researchProjects = [
  {
    id: 'quantum-neural-network',
    title: 'Quantum Neural Network Architecture',
    area: 'Quantum AI & Machine Learning',
    status: 'Active',
    duration: '18 months',
    team: ['Dr. Sarah Chen', 'Dr. James Wilson', 'Alex Rodriguez'],
    description: 'Developing a novel quantum neural network architecture that leverages quantum superposition and entanglement for enhanced machine learning capabilities.',
    milestones: [
      'Quantum circuit design completed',
      'Hybrid classical-quantum training implemented',
      'Performance benchmarks established'
    ],
    nextSteps: 'Integration with existing AI frameworks',
    funding: '$2.5M',
    partners: ['Quantum Computing Corp', 'AI Research Institute']
  },
  {
    id: 'ai-threat-detection',
    title: 'AI-Powered Threat Detection System',
    area: 'AI-Powered Cybersecurity',
    status: 'Active',
    duration: '12 months',
    team: ['Lisa Thompson', 'David Park', 'Maria Santos'],
    description: 'Building an intelligent threat detection system that uses machine learning to identify and respond to cybersecurity threats in real-time.',
    milestones: [
      'Threat detection algorithms developed',
      'Real-time monitoring system deployed',
      'False positive rate reduced to 0.1%'
    ],
    nextSteps: 'Integration with enterprise security platforms',
    funding: '$1.8M',
    partners: ['CyberSec Solutions', 'Enterprise Security Corp']
  },
  {
    id: 'edge-ai-processing',
    title: 'Edge AI Processing Framework',
    area: 'Edge Computing & IoT',
    status: 'Active',
    duration: '15 months',
    team: ['Dr. Robert Kim', 'Kevin Johnson', 'Sophie Turner'],
    description: 'Creating a framework for deploying and optimizing AI models on edge devices for real-time processing and decision-making.',
    milestones: [
      'Edge AI runtime environment developed',
      'Model optimization algorithms implemented',
      'Performance benchmarks on various devices'
    ],
    nextSteps: 'Open-source release and community adoption',
    funding: '$2.1M',
    partners: ['IoT Device Manufacturers', 'Edge Computing Consortium']
  },
  {
    id: 'green-ai-algorithms',
    title: 'Green AI Algorithm Development',
    area: 'Sustainable Technology',
    status: 'Planning',
    duration: '24 months',
    team: ['Dr. Elena Rodriguez', 'Carlos Mendez', 'Jennifer Lee'],
    description: 'Researching and developing AI algorithms that minimize computational requirements while maintaining performance.',
    milestones: [
      'Energy efficiency metrics defined',
      'Initial algorithm prototypes developed',
      'Partnership with energy research institutions'
    ],
    nextSteps: 'Large-scale testing and validation',
    funding: '$3.2M',
    partners: ['Energy Research Institute', 'Green Computing Foundation']
  }
];

const publications = [
  {
    id: 'quantum-ai-2024',
    title: 'Quantum-Enhanced Neural Networks for Complex Pattern Recognition',
    authors: ['Dr. Sarah Chen', 'Dr. James Wilson', 'Alex Rodriguez'],
    journal: 'Nature Machine Intelligence',
    year: 2024,
    doi: '10.1038/s42256-024-00001-x',
    abstract: 'This paper presents a novel quantum neural network architecture that demonstrates superior performance in complex pattern recognition tasks...',
    citations: 45,
    category: 'Quantum AI & Machine Learning'
  },
  {
    id: 'ai-security-2024',
    title: 'Real-Time AI-Powered Threat Detection in Enterprise Networks',
    authors: ['Lisa Thompson', 'David Park', 'Maria Santos'],
    journal: 'IEEE Security & Privacy',
    year: 2024,
    doi: '10.1109/SP.2024.00001',
    abstract: 'We present a comprehensive study of AI-powered threat detection systems deployed in enterprise environments...',
    citations: 32,
    category: 'AI-Powered Cybersecurity'
  },
  {
    id: 'edge-computing-2024',
    title: 'Optimizing AI Models for Edge Computing Environments',
    authors: ['Dr. Robert Kim', 'Kevin Johnson', 'Sophie Turner'],
    journal: 'ACM Computing Surveys',
    year: 2024,
    doi: '10.1145/0000000.0000000',
    abstract: 'This survey provides a comprehensive overview of techniques for deploying AI models on edge devices...',
    citations: 28,
    category: 'Edge Computing & IoT'
  },
  {
    id: 'sustainable-ai-2023',
    title: 'Energy-Efficient AI Algorithms for Sustainable Computing',
    authors: ['Dr. Elena Rodriguez', 'Carlos Mendez'],
    journal: 'Sustainable Computing: Informatics and Systems',
    year: 2023,
    doi: '10.1016/j.suscom.2023.00001',
    abstract: 'We explore the development of AI algorithms that minimize energy consumption while maintaining performance...',
    citations: 19,
    category: 'Sustainable Technology'
  }
];

const patents = [
  {
    id: 'patent-001',
    title: 'Quantum Neural Network Training Method',
    inventors: ['Dr. Sarah Chen', 'Dr. James Wilson'],
    patentNumber: 'US 11,234,567',
    filingDate: '2023-03-15',
    issueDate: '2024-01-20',
    status: 'Granted',
    category: 'Quantum AI & Machine Learning',
    abstract: 'A method for training quantum neural networks using hybrid classical-quantum optimization techniques...'
  },
  {
    id: 'patent-002',
    title: 'AI-Powered Threat Response System',
    inventors: ['Lisa Thompson', 'David Park'],
    patentNumber: 'US 11,345,678',
    filingDate: '2023-06-20',
    issueDate: '2024-02-15',
    status: 'Granted',
    category: 'AI-Powered Cybersecurity',
    abstract: 'An intelligent system for automatically detecting and responding to cybersecurity threats...'
  },
  {
    id: 'patent-003',
    title: 'Edge AI Model Optimization Framework',
    inventors: ['Dr. Robert Kim', 'Kevin Johnson'],
    patentNumber: 'US 11,456,789',
    filingDate: '2023-09-10',
    issueDate: '2024-03-01',
    status: 'Granted',
    category: 'Edge Computing & IoT',
    abstract: 'A framework for optimizing AI models for deployment on edge computing devices...'
  }
];

export default function ResearchDevelopment() {
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredProjects = selectedArea === 'all' && selectedStatus === 'all' 
    ? researchProjects 
    : researchProjects.filter(project => {
        const areaMatch = selectedArea === 'all' || project.area === selectedArea;
        const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
        return areaMatch && statusMatch;
      });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Research & Development
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Pushing the boundaries of technology through cutting-edge research, innovative development, 
              and breakthrough discoveries that shape the future of AI, quantum computing, and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <FlaskConical className="w-5 h-5" />
                <span className="font-semibold">6 Research Areas</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-purple">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">50+ Publications</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-blue">
                <Award className="w-5 h-5" />
                <span className="font-semibold">15+ Patents</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our multidisciplinary research spans cutting-edge technologies, from quantum AI to sustainable computing, 
              driving innovation across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Projects */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Projects</h4>
                  <ul className="space-y-2">
                    {area.projects.map((project, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-zion-slate-light text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zion-slate-light/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-cyan">{area.publications}</div>
                    <div className="text-xs text-zion-slate-light">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-purple">{area.patents}</div>
                    <div className="text-xs text-zion-slate-light">Patents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-blue">{area.team}</div>
                    <div className="text-xs text-zion-slate-light">Researchers</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Research Projects */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Active Research Projects
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our ongoing research initiatives that are pushing the boundaries of technology 
              and creating solutions for tomorrow's challenges.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
            >
              <option value="all">All Research Areas</option>
              {researchAreas.map((area) => (
                <option key={area.id} value={area.area}>{area.title}</option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Planning">Planning</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-2">
                      {project.status}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-zion-slate-light text-sm">{project.area}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-zion-cyan">{project.funding}</div>
                    <div className="text-xs text-zion-slate-light">Funding</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Team */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Research Team</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.team.map((member, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-full text-zion-slate-light text-sm"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Milestones */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Recent Milestones</h4>
                  <ul className="space-y-2">
                    {project.milestones.slice(0, 2).map((milestone, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-zion-slate-light text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-zion-slate-light/20">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </span>
                  </div>
                  <Link
                    to={`/research/${project.id}`}
                    className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Publications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our research findings are published in leading academic journals and conferences, 
              contributing to the global knowledge base in technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-zion-purple text-sm font-medium">
                    {pub.category}
                  </span>
                  <span className="text-zion-slate-light text-sm">{pub.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {pub.title}
                </h3>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Authors</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.authors.map((author, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-full text-zion-slate-light text-xs"
                      >
                        {author}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                  {pub.abstract}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                    <span className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{pub.journal}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{pub.citations} citations</span>
                    </span>
                  </div>
                  <Link
                    to={`/publications/${pub.id}`}
                    className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Patents & Intellectual Property
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our innovative research has resulted in numerous patents that protect our intellectual property 
              and enable commercialization of breakthrough technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {patents.map((patent, index) => (
              <motion.div
                key={patent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-zion-blue/10 border border-zion-blue/20 rounded-full text-zion-blue text-sm font-medium">
                    {patent.status}
                  </span>
                  <span className="text-zion-slate-light text-sm">{patent.issueDate}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4 leading-tight">
                  {patent.title}
                </h3>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Inventors</h4>
                  <div className="flex flex-wrap gap-2">
                    {patent.inventors.map((inventor, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-full text-zion-slate-light text-xs"
                      >
                        {inventor}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                  {patent.abstract}
                </p>

                <div className="space-y-2 text-sm text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Patent Number:</span>
                    <span className="text-zion-cyan font-mono">{patent.patentNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span>{patent.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Research Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Are you passionate about pushing the boundaries of technology? Join our research team 
              and contribute to breakthrough discoveries that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                View Research Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Collaborate With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
