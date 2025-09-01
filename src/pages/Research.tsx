import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FlaskConical, 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  Search, 
  Filter, 
  Download, 
  ExternalLink, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Globe, 
  Target, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  DollarSign, 
  FileText, 
  Lightbulb, 
  Microscope, 
  Rocket, 
  Code, 
  Network, 
  Cpu, 
  Lock, 
  BarChart3, 
  Palette, 
  Smartphone, 
  Eye 
} from 'lucide-react';

const Research: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [activeType, setActiveType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 45, icon: Globe },
    { id: 'ai', name: 'Artificial Intelligence', count: 18, icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', count: 8, icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12, icon: Shield },
    { id: 'cloud', name: 'Cloud & Edge', count: 10, icon: Cloud },
    { id: 'emerging', name: 'Emerging Tech', count: 7, icon: Rocket }
  ];

  const statuses = [
    { id: 'all', name: 'All Statuses', count: 45 },
    { id: 'active', name: 'Active', count: 22 },
    { id: 'completed', name: 'Completed', count: 15 },
    { id: 'planning', name: 'Planning', count: 8 }
  ];

  const types = [
    { id: 'all', name: 'All Types', count: 45 },
    { id: 'academic', name: 'Academic', count: 20 },
    { id: 'industry', name: 'Industry', count: 15 },
    { id: 'government', name: 'Government', count: 10 }
  ];

  const researchProjects = [
    {
      id: '1',
      title: 'Quantum Machine Learning for Drug Discovery',
      description: 'Developing quantum algorithms to accelerate pharmaceutical research and drug discovery processes.',
      institution: 'MIT Research Lab',
      status: 'active',
      impact: 'high-impact',
      progress: 75,
      team: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'Alex Thompson'],
      funding: 2500000,
      category: 'quantum',
      type: 'academic',
      featured: true,
      publications: [
        { title: 'Quantum ML in Pharmaceutical Research', journal: 'Nature', year: 2024 },
        { title: 'Algorithmic Advances in Drug Discovery', journal: 'Science', year: 2023 }
      ],
      tags: ['Quantum ML', 'Drug Discovery', 'Pharmaceuticals', 'AI']
    },
    {
      id: '2',
      title: 'AI-Powered Cybersecurity Threat Detection',
      description: 'Advanced machine learning systems for real-time threat detection and response in enterprise networks.',
      institution: 'Stanford Security Lab',
      status: 'completed',
      impact: 'high-impact',
      progress: 100,
      team: ['Dr. James Wilson', 'Lisa Park', 'David Kim'],
      funding: 1800000,
      category: 'cybersecurity',
      type: 'industry',
      featured: false,
      publications: [
        { title: 'ML-Based Threat Detection Systems', journal: 'IEEE Security', year: 2024 }
      ],
      tags: ['Cybersecurity', 'Machine Learning', 'Threat Detection', 'Enterprise']
    },
    {
      id: '3',
      title: 'Edge Computing for IoT Networks',
      description: 'Optimizing edge computing architectures for large-scale IoT deployments and real-time data processing.',
      institution: 'UC Berkeley IoT Lab',
      status: 'active',
      impact: 'medium-impact',
      progress: 60,
      team: ['Dr. Emily Davis', 'Robert Johnson', 'Maria Garcia'],
      funding: 1200000,
      category: 'cloud',
      type: 'academic',
      featured: true,
      publications: [
        { title: 'Edge Computing in IoT Environments', journal: 'ACM Computing', year: 2024 }
      ],
      tags: ['Edge Computing', 'IoT', 'Real-time Processing', 'Networks']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400';
      case 'planning':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high-impact':
        return 'bg-orange-500/20 text-orange-400';
      case 'medium-impact':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'low-impact':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
    const matchesType = activeType === 'all' || project.type === activeType;
    return matchesSearch && matchesCategory && matchesStatus && matchesType;
  });

  // Update counts
  categories.forEach(cat => {
    if (cat.id === 'all') {
      cat.count = researchProjects.length;
    } else {
      cat.count = researchProjects.filter(project => project.category === cat.id).length;
    }
  });

  statuses.forEach(status => {
    if (status.id === 'all') {
      status.count = researchProjects.length;
    } else {
      status.count = researchProjects.filter(project => project.status === status.id).length;
    }
  });

  types.forEach(type => {
    if (type.id === 'all') {
      type.count = researchProjects.length;
    } else {
      type.count = researchProjects.filter(project => project.type === type.id).length;
    }
  });

  return (
    <>
      <SEO
        title="Research & Development - Zion Tech Group"
        description="Explore our cutting-edge research projects, publications, and innovations in AI, quantum computing, cybersecurity, and emerging technologies."
        keywords="research, development, AI, quantum computing, cybersecurity, publications, patents, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Microscope className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research &{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our cutting-edge research projects, publications, and
              innovations in AI, quantum computing, cybersecurity, and
              emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search research projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/20 text-lg"
                />
              </div>
              
              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          activeCategory === category.id
                            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                        }`}
                      >
                        {category.name}
                        <span className="text-xs opacity-75 ml-2">
                          ({category.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Status Filter */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg">Status</h3>
                  <div className="flex flex-wrap gap-2">
                    {statuses.map(status => (
                      <button
                        key={status.id}
                        onClick={() => setActiveStatus(status.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          activeStatus === status.id
                            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                        }`}
                      >
                        {status.name}
                        <span className="text-xs opacity-75 ml-2">
                          ({status.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Type Filter */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg">Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {types.map(type => (
                      <button
                        key={type.id}
                        onClick={() => setActiveType(type.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          activeType === type.id
                            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                        }`}
                      >
                        {type.name}
                        <span className="text-xs opacity-75 ml-2">
                          ({type.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-xl">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {project.institution}
                      </p>
                    </div>
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-400/30">
                      Featured
                    </span>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Status and Progress */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                    >
                      {project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(project.impact)}`}
                    >
                      {project.impact.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getProgressColor(project.progress)}`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-gray-400 text-xs">
                      {project.progress}%
                    </span>
                  </div>
                </div>
                
                {/* Team and Funding */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{project.team.length} researchers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span>${(project.funding / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
                
                {/* Publications */}
                {project.publications.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-white font-medium text-sm mb-3">
                      Publications ({project.publications.length})
                    </h4>
                    <div className="space-y-3">
                      {project.publications.slice(0, 2).map((pub, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50"
                        >
                          <p className="text-gray-300 text-xs font-medium">
                            {pub.title}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {pub.journal}, {pub.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800/50 text-gray-300 text-xs rounded-lg border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25">
                    View Details
                  </button>
                  <button className="px-6 py-3 bg-slate-700/50 text-gray-300 rounded-xl hover:bg-slate-600/50 transition-colors border border-slate-600/50">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Microscope className="w-20 h-20 text-gray-400 mx-auto mb-6" />
              <h3 className="text-white text-2xl font-semibold mb-3">
                No research projects found
              </h3>
              <p className="text-gray-400 text-lg">
                Try adjusting your search criteria or filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Research;