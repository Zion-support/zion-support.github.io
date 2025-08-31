import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { FlaskConical, BookOpen, Users, Clock, Star, Search, Filter, Download, ExternalLink, ArrowRight, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle, Calendar, MapPin, DollarSign, FileText, Lightbulb, Microscope, Rocket, Code, Network, Cpu, Lock, BarChart3, Palette, Smartphone, Eye, Star as StarIcon  } from 'lucide-react';
export default function Research() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const categories = [
    { id: 'all', name: 'All Categories', icon: <FlaskConical className="w-5 h-5" />, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 12 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: 8 },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 6 },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: 10 },
    { id: 'emerging', name: 'Emerging Technologies', icon: <Zap className="w-5 h-5" />, count: 7 },
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className="w-5 h-5" />, count: 4 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: <Network className="w-5 h-5" />, count: 5 }
  ];
  const statuses = [
    { id: 'all', name: 'All Statuses', count: 0 },
    { id: 'active', name: 'Active', count: 0 },
    { id: 'completed', name: 'Completed', count: 0 },
    { id: 'planning', name: 'Planning', count: 0 },
    { id: 'published', name: 'Published', count: 0 }
  ];
  const types = [
    { id: 'all', name: 'All Types', count: 0 },
    { id: 'research', name: 'Research Papers', count: 0 },
    { id: 'patents', name: 'Patents', count: 0 },
    { id: 'prototypes', name: 'Prototypes', count: 0 },
    { id: 'collaborations', name: 'Collaborations', count: 0 }
  ];
  const researchProjects = [
    {
      id: 1,
      title: 'Quantum-Classical Hybrid Computing: A New Paradigm for Enterprise Applications',
      authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'Dr. Emily Watson'],
      abstract: 'This groundbreaking research explores the integration of quantum and classical computing systems to solve complex enterprise problems previously thought intractable.',
      category: 'quantum',
      status: 'active',
      type: 'research',
      startDate: '2024-01-01',
      endDate: '2025-12-31',
      leadResearcher: 'Dr. Elena Vasquez',
      team: ['Dr. Elena Vasquez', 'Dr. Michael Chen', 'Sarah Johnson', 'Alex Rodriguez'],
      funding: 2500000,
      institution: 'MIT',
      abstract: 'This research investigates the potential of quantum machine learning algorithms to solve complex financial optimization problems that are computationally intractable for classical computers.',
      methodology: 'Hybrid quantum-classical approach using variational quantum algorithms',
      expectedOutcomes: ['Quantum advantage demonstration', 'Financial model improvements', 'Patent applications'],
      publications: [
        {
          title: 'Quantum Algorithms for Portfolio Optimization',
          journal: 'Nature Quantum Information',
          year: 2024,
          doi: '10.1038/s41534-024-00800-5',
          citations: 23
        }
      ],
      tags: ['Quantum Computing', 'Machine Learning', 'Finance', 'Optimization', 'Risk Assessment'],
      featured: true,
      progress: 65,
      impact: 'high'
    },
    {
      id: 2,
      title: 'Federated Learning for Privacy-Preserving Healthcare Analytics',
      description: 'Developing secure federated learning frameworks that enable healthcare institutions to collaborate on AI models without sharing sensitive patient data.',
      category: 'ai-ml',
      status: 'completed',
      type: 'research',
      startDate: '2023-06-01',
      endDate: '2024-11-30',
      leadResearcher: 'Dr. Sarah Chen',
      team: ['Dr. Sarah Chen', 'Dr. James Wilson', 'Lisa Anderson', 'David Kim'],
      funding: 1800000,
      institution: 'Stanford University',
      abstract: 'This project addresses the critical need for privacy-preserving machine learning in healthcare by developing novel federated learning approaches.',
      methodology: 'Differential privacy, secure multi-party computation, federated averaging',
      expectedOutcomes: ['Privacy-preserving framework', 'Healthcare AI models', 'Open-source toolkit'],
      publications: [
        {
          title: 'Privacy-Preserving Federated Learning in Healthcare',
          journal: 'Nature Machine Intelligence',
          year: 2024,
          doi: '10.1038/s42256-024-00789-8',
          citations: 45
        },
        {
          title: 'Secure Multi-Party Computation for Medical Data',
          journal: 'IEEE Transactions on Medical Imaging',
          year: 2024,
          doi: '10.1109/TMI.2024.001234',
          citations: 18
        }
      ],
      tags: ['Federated Learning', 'Healthcare', 'Privacy', 'AI Ethics', 'Medical Imaging'],
      featured: true,
      progress: 100,
      impact: 'very-high'
    },
    {
      id: 3,
      title: 'Zero-Trust Architecture for Industrial IoT',
      description: 'Researching and implementing zero-trust security frameworks specifically designed for industrial IoT environments.',
      category: 'security',
      status: 'active',
      type: 'prototypes',
      startDate: '2024-03-01',
      endDate: '2025-08-31',
      leadResearcher: 'Michael Rodriguez',
      team: ['Michael Rodriguez', 'Dr. Jennifer Park', 'Robert Kim', 'Emily Watson'],
      funding: 1200000,
      institution: 'Carnegie Mellon University',
      abstract: 'This project develops and validates zero-trust security architectures for critical infrastructure and industrial IoT systems.',
      methodology: 'Threat modeling, security architecture design, prototype development, penetration testing',
      expectedOutcomes: ['Zero-trust framework', 'Security prototypes', 'Best practices guide'],
      publications: [
        {
          title: 'Zero-Trust Security for Industrial IoT',
          journal: 'IEEE Security & Privacy',
          year: 2024,
          doi: '10.1109/MSEC.2024.001234',
          citations: 12
        }
      ],
      tags: ['Zero-Trust', 'Industrial IoT', 'Cybersecurity', 'Critical Infrastructure', 'Security Architecture'],
      featured: false,
      progress: 40,
      impact: 'high'
    },
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Predictive Analytics for Patient Outcomes',
      authors: ['Dr. Jennifer Lee', 'Dr. Carlos Mendez'],
      abstract: 'Exploring the application of ML algorithms to predict patient outcomes and improve treatment planning in clinical settings.',
      category: 'healthcare',
      year: '2024',
      readTime: '14 min',
      views: '1.6k',
      downloads: '612',
      journal: 'Healthcare Technology Review',
      doi: '10.1007/HTR.2024.003456',
      tags: ['Healthcare ML', 'Predictive Analytics', 'Patient Care']
    },
    {
      id: 5,
      title: 'Blockchain for Supply Chain Transparency',
      description: 'Investigating blockchain technology applications for enhancing supply chain transparency and traceability.',
      category: 'emerging',
      status: 'completed',
      type: 'collaborations',
      startDate: '2023-01-01',
      endDate: '2024-06-30',
      leadResearcher: 'Dr. Robert Kim',
      team: ['Dr. Robert Kim', 'Sarah Johnson', 'Alex Thompson', 'Emily Chen'],
      funding: 900000,
      institution: 'Columbia University',
      abstract: 'This project explores how blockchain technology can improve supply chain transparency and enable better tracking of products from source to consumer.',
      methodology: 'Blockchain design, smart contracts, supply chain modeling, pilot implementation',
      expectedOutcomes: ['Blockchain framework', 'Supply chain pilots', 'Industry partnerships'],
      publications: [
        {
          title: 'Blockchain-Enabled Supply Chain Transparency',
          journal: 'Journal of Supply Chain Management',
          year: 2024,
          doi: '10.1111/jscm.12345',
          citations: 28
        }
      ],
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Smart Contracts', 'Traceability'],
      featured: false,
      progress: 100,
      impact: 'medium'
    },
    {
      id: 6,
      title: 'Natural Language Processing: Advances in Multilingual Understanding',
      authors: ['Dr. Rachel Green', 'Dr. Kevin O\'Brien'],
      abstract: 'Recent developments in NLP techniques for understanding and processing multiple languages simultaneously.',
      category: 'ai-ml',
      status: 'active',
      type: 'research',
      startDate: '2024-09-01',
      endDate: '2026-08-31',
      leadResearcher: 'Dr. Jennifer Park',
      team: ['Dr. Jennifer Park', 'Dr. Michael Chen', 'Robert Wilson', 'Lisa Rodriguez'],
      funding: 2200000,
      institution: 'Georgia Tech',
      abstract: 'This project investigates neuromorphic computing approaches to create energy-efficient AI systems for edge computing applications.',
      methodology: 'Neuromorphic architecture design, spiking neural networks, hardware-software co-design',
      expectedOutcomes: ['Neuromorphic framework', 'Energy-efficient models', 'Hardware prototypes'],
      publications: [
        {
          title: 'Neuromorphic Computing for Edge AI Applications',
          journal: 'Nature Electronics',
          year: 2024,
          doi: '10.1038/s41928-024-01123-4',
          citations: 19
        }
      ],
      tags: ['Neuromorphic Computing', 'Edge AI', 'Energy Efficiency', 'Spiking Neural Networks', 'Hardware Design'],
      featured: true,
      progress: 55,
      impact: 'high'
    }
  ];
  // Update counts
  categories.forEach(cat => {
    cat.count = researchProjects.filter(p => p.category === cat.id).length;
  });
  statuses.forEach(status => {
    status.count = researchProjects.filter(p => p.status === status.id).length;
  });
  types.forEach(type => {
    type.count = researchProjects.filter(p => p.type === type.id).length;
  });
  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
    const matchesType = activeType === 'all' || project.type === activeType;
    return matchesSearch && matchesCategory && matchesStatus && matchesType;
  });
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml': return 'text-blue-400';
      case 'security': return 'text-red-400';
      case 'emerging': return 'text-green-400';
      case 'healthcare': return 'text-purple-400';
      default: return 'text-zion-slate-light';
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'completed': return 'text-blue-400';
      case 'planned': return 'text-yellow-400';
      case 'on-hold': return 'text-orange-400';
      default: return 'text-zion-slate-light';
    }
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };
  const formatFunding = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-ml': return <Brain className="w-4 h-4" />;
      case 'cloud': return <Cloud className="w-4 h-4" />;
      case 'security': return <Shield className="w-4 h-4" />;
      case 'data': return <Database className="w-4 h-4" />;
      case 'emerging': return <Zap className="w-4 h-4" />;
      case 'quantum': return <Cpu className="w-4 h-4" />;
      case 'iot': return <Network className="w-4 h-4" />;
      default: return <FlaskConical className="w-4 h-4" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'very-high': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-zion-slate-light';
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Research & Publications - Zion Tech Group"
        description="Explore Zion Tech Group's cutting-edge research in AI, cybersecurity, quantum computing, and emerging technologies. Access our latest publications and thought leadership content."
        keywords="research, publications, AI research, cybersecurity research, quantum computing, technology research, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Research & Publications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover cutting-edge research in AI, cybersecurity, quantum computing, and emerging technologies. 
            Our team of researchers and engineers are pushing the boundaries of what's possible.
          </p>
        </div>
      </div>
      {/* Search and Filters */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search research papers, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Categories */}
              <div className="space-y-3">
                <label className="text-white font-medium">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 4).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              {/* Status */}
              <div className="space-y-3">
                <label className="text-white font-medium">Status</label>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <button
                      key={status.id}
                      onClick={() => setActiveStatus(status.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeStatus === status.id
                          ? 'bg-zion-purple text-white'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {status.name} ({status.count})
                    </button>
                  ))}
                </div>
              </div>
              {/* Types */}
              <div className="space-y-3">
                <label className="text-white font-medium">Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setActiveType(type.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeType === type.id
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {type.name} ({type.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Research */}
      {researchProjects.filter(p => p.featured).length > 0 && (
        <div className="py-12 bg-zion-slate-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Featured Research Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {researchProjects.filter(p => p.featured).map((project) => (
                <div
                  key={project.id}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-gradient-to-br from-zion-blue to-zion-purple">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === project.category)?.name}
                      </span>
                      <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                        {statuses.find(s => s.id === project.status)?.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4">{project.description}</p>
                    <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.team.length} researchers
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {project.publications.length} publications
                      </div>
                    </div>
                    <button className="w-full bg-zion-cyan text-zion-slate-dark py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* All Research Projects */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            All Research Projects
          </h2>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredProjects.map((project)  => (
                <div
                  key={project.id}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(project.category)}
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === project.category)?.name}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                        {statuses.find(s => s.id === project.status)?.name}
                      </div>
                      <div className={`text-xs font-medium ${getImpactColor(project.impact)}`}>
                        {project.impact.replace('-', ' ').toUpperCase()} Impact
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-zion-slate-light mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{formatFunding(project.funding)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{project.team.length} researchers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{project.publications.length} publications</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                      <div
                        className="bg-zion-cyan h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="w-4 h-4" />
                        Lead: {project.leadResearcher}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.institution}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-zion-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-zion-purple-light transition-colors inline-flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Details
                      </button>
                      {project.publications.length > 0 && (
                        <button className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                          Papers
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* All Research */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">All Research Papers</h2>
          <div className="text-center mb-6">
            <p className="text-gray-400">Showing {filteredResearch.length} of {featuredResearch.length + allResearch.length} papers</p>
          </div>
          
          {filteredResearch.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No research papers found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredResearch.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.05 }}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-gray-400 text-sm">{paper.year}</span>
                        <span className="text-gray-400 text-sm">•</span>
                        <span className="text-gray-400 text-sm">{paper.readTime} read</span>
                        {paper.featured && (
                          <>
                            <span className="text-gray-400 text-sm">•</span>
                            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Featured</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{paper.title}</h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{paper.abstract}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{paper.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>{paper.downloads}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-6 text-right">
                      <div className="text-sm text-gray-400 mb-2">{paper.journal}</div>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Research Community
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Collaborate with leading researchers, access cutting-edge technology, and contribute to breakthrough innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
              Explore Collaborations
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-slate-dark transition-colors">
              Contact Research Team
            </button>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
