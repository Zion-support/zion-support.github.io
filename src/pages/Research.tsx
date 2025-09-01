import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
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
        return 'bg-red-500/20 text-red-400';
      case 'medium-impact':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'low-impact':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.institution.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
    const matchesType = activeType === 'all' || project.type === activeType;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesType;
  });

  return (
    <>
      <SEO 
        title="Research & Development - Zion Tech Group"
        description="Explore cutting-edge research projects in AI, quantum computing, cybersecurity, and emerging technologies."
        keywords="research, development, AI research, quantum computing, cybersecurity research, emerging technologies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Development</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Exploring the frontiers of technology through cutting-edge research in AI, quantum computing, 
                cybersecurity, and emerging technologies.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search research projects, institutions, or topics..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 font-medium">Categories:</span>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 font-medium">Status:</span>
                {statuses.map((status) => (
                  <button
                    key={status.id}
                    onClick={() => setActiveStatus(status.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeStatus === status.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    {status.name} ({status.count})
                  </button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 font-medium">Type:</span>
                {types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeType === type.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    {type.name} ({type.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 ${
                    project.featured ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  {project.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Featured Project</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white pr-4">{project.title}</h3>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(project.impact)}`}>
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="font-medium">Institution:</span>
                      <span className="ml-2 text-cyan-400">{project.institution}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span className="font-medium">Funding:</span>
                      <span className="ml-2 text-green-400">${(project.funding / 1000000).toFixed(1)}M</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-400">
                      <Target className="w-4 h-4 mr-2" />
                      <span className="font-medium">Progress:</span>
                      <div className="ml-2 flex-1 bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="ml-2 text-cyan-400">{project.progress}%</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Team Members:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.team.map((member, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.publications.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Publications:</h4>
                      <div className="space-y-2">
                        {project.publications.map((pub, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                            <div>
                              <p className="text-sm text-white font-medium">{pub.title}</p>
                              <p className="text-xs text-gray-400">{pub.journal}, {pub.year}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-cyan-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200">
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </button>
                    <button className="flex items-center px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors duration-200">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Research Collaboration?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for research partners and collaborators. Let's explore how we can work together 
                to advance technology and solve complex challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  <FlaskConical className="w-5 h-5 mr-2" />
                  Start Collaboration
                </a>
                <a
                  href="/partners"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  View Partnerships
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Research;