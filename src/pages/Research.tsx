import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Microscope, 
  Flask, 
  Brain, 
  Search, 
  Filter, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Network, 
  Cpu, 
  Globe, 
  Lightbulb, 
  Rocket, 
  Award, 
  CheckCircle, 
  ExternalLink, 
  Download, 
  FileText, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Target, 
  Eye, 
  Lock, 
  Server, 
  Smartphone, 
  Wifi, 
  Satellite, 
  Atom, 
  Dna, 
  TestTube, 
  Beaker, 
  GraduationCap, 
  Briefcase, 
  Handshake, 
  Building2
} from 'lucide-react';

export default function Research() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const categories = [
    { id: 'all', name: 'All Research Areas', icon: Microscope },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud Computing', icon: Cloud },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'biotech', name: 'Biotechnology', icon: Dna },
    { id: 'iot', name: 'Internet of Things', icon: Wifi },
    { id: 'blockchain', name: 'Blockchain', icon: Network }
  ];

  const statuses = [
    { id: 'all', name: 'All Statuses', icon: Eye },
    { id: 'active', name: 'Active Research', icon: TrendingUp },
    { id: 'completed', name: 'Completed', icon: CheckCircle },
    { id: 'planning', name: 'Planning Phase', icon: Calendar }
  ];

  const researchProjects = [
    {
      id: 1,
      title: 'Advanced AI-Powered Threat Detection Systems',
      description: 'Developing next-generation cybersecurity solutions using machine learning algorithms to detect and prevent sophisticated cyber attacks in real-time.',
      category: 'ai-ml',
      status: 'active',
      lead: 'Dr. Sarah Chen',
      leadTitle: 'CTO & AI Research Lead',
      leadAvatar: '/images/team/sarah-chen.jpg',
      team: 8,
      startDate: '2024-01-15',
      estimatedCompletion: '2025-06-30',
      budget: '$2.5M',
      partners: ['MIT', 'Stanford', 'DARPA'],
      tags: ['AI', 'Cybersecurity', 'Machine Learning', 'Real-time Detection'],
      image: '🛡️',
      progress: 65,
      publications: 3,
      patents: 2,
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Resistant Cryptography Framework',
      description: 'Researching and developing cryptographic algorithms that can withstand attacks from quantum computers, ensuring long-term security of digital communications.',
      category: 'cybersecurity',
      status: 'active',
      lead: 'Dr. Emily Watson',
      leadTitle: 'Cybersecurity Director',
      leadAvatar: '/images/team/emily-watson.jpg',
      team: 6,
      startDate: '2024-03-01',
      estimatedCompletion: '2026-12-31',
      budget: '$1.8M',
      partners: ['NIST', 'University of Maryland', 'IBM Research'],
      tags: ['Quantum Computing', 'Cryptography', 'Post-Quantum', 'Security'],
      image: '🔐',
      progress: 40,
      publications: 2,
      patents: 1,
      featured: true
    },
    {
      id: 3,
      title: 'Edge Computing for IoT Networks',
      description: 'Exploring distributed computing architectures that bring processing power closer to IoT devices, reducing latency and improving network efficiency.',
      category: 'iot',
      status: 'active',
      lead: 'Marcus Rodriguez',
      leadTitle: 'Head of Cloud & DevOps',
      leadAvatar: '/images/team/marcus-rodriguez.jpg',
      team: 5,
      startDate: '2024-02-15',
      estimatedCompletion: '2025-09-30',
      budget: '$1.2M',
      partners: ['Intel', 'Cisco', 'University of California'],
      tags: ['Edge Computing', 'IoT', 'Distributed Systems', 'Network Optimization'],
      image: '🌐',
      progress: 55,
      publications: 1,
      patents: 0,
      featured: false
    },
    {
      id: 4,
      title: 'Biometric Authentication Using Neural Networks',
      description: 'Developing advanced biometric identification systems that combine multiple biometric modalities with deep learning for enhanced security and accuracy.',
      category: 'ai-ml',
      status: 'completed',
      lead: 'AI Research Team',
      leadTitle: 'Senior AI Researchers',
      leadAvatar: '/images/team/ai-team.jpg',
      team: 7,
      startDate: '2023-06-01',
      estimatedCompletion: '2024-05-31',
      budget: '$1.5M',
      partners: ['FBI', 'Department of Homeland Security', 'Carnegie Mellon'],
      tags: ['Biometrics', 'Neural Networks', 'Authentication', 'Security'],
      image: '👁️',
      progress: 100,
      publications: 5,
      patents: 3,
      featured: false
    },
    {
      id: 5,
      title: 'Blockchain-Based Supply Chain Transparency',
      description: 'Researching blockchain applications for creating transparent, traceable supply chains that improve efficiency and reduce fraud.',
      category: 'blockchain',
      status: 'active',
      lead: 'Blockchain Research Team',
      leadTitle: 'Blockchain Specialists',
      leadAvatar: '/images/team/blockchain-team.jpg',
      team: 4,
      startDate: '2024-04-01',
      estimatedCompletion: '2025-12-31',
      budget: '$900K',
      partners: ['Walmart', 'Maersk', 'MIT Media Lab'],
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Traceability'],
      image: '⛓️',
      progress: 30,
      publications: 1,
      patents: 0,
      featured: false
    },
    {
      id: 6,
      title: 'Quantum Machine Learning Algorithms',
      description: 'Exploring the intersection of quantum computing and machine learning to develop algorithms that can solve complex problems exponentially faster.',
      category: 'quantum',
      status: 'planning',
      lead: 'Quantum Research Team',
      leadTitle: 'Quantum Computing Experts',
      leadAvatar: '/images/team/quantum-team.jpg',
      team: 6,
      startDate: '2025-01-01',
      estimatedCompletion: '2027-06-30',
      budget: '$3.2M',
      partners: ['Google Quantum AI', 'IBM Quantum', 'University of Waterloo'],
      tags: ['Quantum Computing', 'Machine Learning', 'Algorithms', 'Quantum Advantage'],
      image: '⚛️',
      progress: 0,
      publications: 0,
      patents: 0,
      featured: false
    },
    {
      id: 7,
      title: 'Sustainable Cloud Infrastructure',
      description: 'Researching energy-efficient cloud computing architectures and renewable energy integration for sustainable data center operations.',
      category: 'cloud',
      status: 'active',
      lead: 'Sustainability Team',
      leadTitle: 'Environmental Engineers',
      leadAvatar: '/images/team/sustainability-team.jpg',
      team: 5,
      startDate: '2024-01-01',
      estimatedCompletion: '2025-12-31',
      budget: '$1.1M',
      partners: ['Microsoft', 'Amazon Web Services', 'Stanford Energy'],
      tags: ['Sustainability', 'Cloud Computing', 'Renewable Energy', 'Green Tech'],
      image: '🌱',
      progress: 45,
      publications: 2,
      patents: 1,
      featured: false
    },
    {
      id: 8,
      title: 'Neuromorphic Computing for AI',
      description: 'Developing brain-inspired computing architectures that mimic neural networks for more efficient AI processing and learning.',
      category: 'ai-ml',
      status: 'planning',
      lead: 'Neuromorphic Team',
      leadTitle: 'Computational Neuroscientists',
      leadAvatar: '/images/team/neuromorphic-team.jpg',
      team: 8,
      startDate: '2025-03-01',
      estimatedCompletion: '2028-06-30',
      budget: '$4.1M',
      partners: ['Intel Neuromorphic', 'IBM Research', 'MIT Brain Sciences'],
      tags: ['Neuromorphic Computing', 'AI', 'Neural Networks', 'Brain-Inspired'],
      image: '🧠',
      progress: 0,
      publications: 0,
      patents: 0,
      featured: false
    }
  ];

  const publications = [
    {
      id: 1,
      title: 'Advanced Threat Detection Using Deep Learning: A Comprehensive Study',
      authors: ['Dr. Sarah Chen', 'Dr. Emily Watson', 'Marcus Rodriguez'],
      journal: 'IEEE Transactions on Cybersecurity',
      year: 2024,
      doi: '10.1109/TCS.2024.001234',
      citations: 45,
      abstract: 'This paper presents a novel approach to cybersecurity threat detection using deep neural networks...',
      tags: ['AI', 'Cybersecurity', 'Deep Learning'],
      pdfUrl: '/research/papers/threat-detection-2024.pdf'
    },
    {
      id: 2,
      title: 'Quantum-Resistant Cryptographic Protocols: Implementation and Analysis',
      authors: ['Dr. Emily Watson', 'Quantum Research Team'],
      journal: 'Cryptography and Communications',
      year: 2024,
      doi: '10.1007/CRC.2024.005678',
      citations: 32,
      abstract: 'We analyze the performance and security characteristics of post-quantum cryptographic algorithms...',
      tags: ['Quantum Computing', 'Cryptography', 'Post-Quantum'],
      pdfUrl: '/research/papers/quantum-crypto-2024.pdf'
    },
    {
      id: 3,
      title: 'Edge Computing Optimization for IoT Networks: A Machine Learning Approach',
      authors: ['Marcus Rodriguez', 'IoT Research Team'],
      journal: 'IEEE Internet of Things Journal',
      year: 2024,
      doi: '10.1109/JIOT.2024.009876',
      citations: 28,
      abstract: 'This research explores the application of machine learning techniques to optimize edge computing...',
      tags: ['Edge Computing', 'IoT', 'Machine Learning'],
      pdfUrl: '/research/papers/edge-computing-2024.pdf'
    }
  ];

  const filteredProjects = researchProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'from-green-500 to-emerald-600';
      case 'completed': return 'from-blue-500 to-indigo-600';
      case 'planning': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active Research';
      case 'completed': return 'Completed';
      case 'planning': return 'Planning Phase';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="Research & Development - Zion Tech Group"
        description="Explore our cutting-edge research projects in AI, cybersecurity, quantum computing, and emerging technologies. Discover innovation at Zion Tech Group."
        keywords="research, development, AI, cybersecurity, quantum computing, innovation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Research &
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Development</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Pushing the boundaries of technology through innovative research in AI, cybersecurity, 
              quantum computing, and emerging technologies. Discover the future with us.
            </motion.p>
            
            {/* Search and Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search research projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                {statuses.map((status) => (
                  <button
                    key={status.id}
                    onClick={() => setSelectedStatus(status.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 whitespace-nowrap ${
                      selectedStatus === status.id
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    <status.icon className="w-4 h-4" />
                    <span>{status.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Research Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Research Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our most innovative and impactful research initiatives that are shaping the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchProjects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                    <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-sm font-medium rounded-full`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{project.team} researchers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Started {new Date(project.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span>${project.budget}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4" />
                      <span>{project.progress}% complete</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {project.lead.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {project.lead}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {project.leadTitle}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/research/${project.id}`}
                      className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Research Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Research Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {filteredProjects.length} projects found
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                          {categories.find(c => c.id === project.category)?.name}
                        </span>
                        <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-sm font-medium rounded-full`}>
                          {getStatusText(project.status)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center justify-between">
                        <span>Progress: {project.progress}%</span>
                        <span>Budget: {project.budget}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Publications: {project.publications}</span>
                        <span>Patents: {project.patents}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/research/${project.id}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors text-sm"
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No research projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research Publications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our latest research findings published in leading academic journals and conferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                    Published {pub.year}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{pub.citations} citations</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-3">
                  {pub.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                  {pub.abstract}
                </p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span className="line-clamp-1">{pub.authors.join(', ')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{pub.journal}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {pub.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      to={pub.pdfUrl}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors text-sm"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </Link>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      DOI
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our research contributions and achievements in numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Microscope, number: '12+', label: 'Active Research Projects' },
              { icon: BookOpen, number: '25+', label: 'Published Papers' },
              { icon: Award, number: '8+', label: 'Patents Filed' },
              { icon: Users, number: '50+', label: 'Research Partners' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Join Our Research
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Collaborate with us on cutting-edge research projects. Partner with our team 
            to advance technology and create innovative solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
