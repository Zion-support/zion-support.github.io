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
  Eye, 
  Star as StarIcon,
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Navigation,
  Compass,
  Home,
  ShoppingCart,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  MinusCircle,
  PlusCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckSquare,
  Square,
  Radio,
  ToggleLeft,
  ToggleRight,
  Sliders,
  SlidersHorizontal,
  Volume1,
  Volume3,
  Mic,
  MicOff,
  Headphones,
  Speaker,
  SpeakerOff,
  Play as PlayIcon,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Rewind as RewindIcon,
  FastForward as FastForwardIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle as ShuffleIcon2,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Rewind as RewindIcon2,
  FastForward as FastForwardIcon2,
  Repeat as RepeatIcon2,
  Repeat1 as Repeat1Icon2
} from 'lucide-react';

interface ResearchProject {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  type: string;
  startDate: string;
  endDate: string;
  leadResearcher: string;
  team: string[];
  funding: number;
  institution: string;
  abstract: string;
  methodology: string;
  expectedOutcomes: string[];
  publications: Publication[];
  tags: string[];
  featured?: boolean;
  progress: number;
  impact: string;
}

interface Publication {
  title: string;
  journal: string;
  year: number;
  doi: string;
  citations: number;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
}

interface Status {
  id: string;
  name: string;
  count: number;
}

interface Type {
  id: string;
  name: string;
  count: number;
}

export default function Research() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const categories: Category[] = [
    { id: 'all', name: 'All Categories', icon: FlaskConical, count: 52 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 8 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 10 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 7 },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu, count: 4 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, count: 5 }
  ];

  const statuses: Status[] = [
    { id: 'all', name: 'All Statuses', count: 52 },
    { id: 'active', name: 'Active', count: 18 },
    { id: 'completed', name: 'Completed', count: 24 },
    { id: 'planning', name: 'Planning', count: 6 },
    { id: 'published', name: 'Published', count: 4 }
  ];

  const types: Type[] = [
    { id: 'all', name: 'All Types', count: 52 },
    { id: 'research', name: 'Research Papers', count: 28 },
    { id: 'patents', name: 'Patents', count: 12 },
    { id: 'prototypes', name: 'Prototypes', count: 8 },
    { id: 'collaborations', name: 'Collaborations', count: 4 }
  ];

  const researchProjects: ResearchProject[] = [
    {
      id: 1,
      title: 'Quantum Machine Learning for Financial Modeling',
      description: 'Exploring the application of quantum computing algorithms to enhance financial risk assessment and portfolio optimization.',
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
          citations: 32
        }
      ],
      tags: ['Federated Learning', 'Healthcare', 'Privacy', 'Machine Learning', 'Security'],
      featured: true,
      progress: 100,
      impact: 'high'
    },
    {
      id: 3,
      title: 'Edge Computing for Autonomous Vehicle Networks',
      description: 'Researching distributed edge computing architectures to enable real-time decision making in autonomous vehicle networks.',
      category: 'iot',
      status: 'active',
      type: 'research',
      startDate: '2024-03-01',
      endDate: '2026-02-28',
      leadResearcher: 'Dr. Robert Kim',
      team: ['Dr. Robert Kim', 'Dr. Jennifer Lee', 'Mark Thompson', 'Emily Davis'],
      funding: 3200000,
      institution: 'Carnegie Mellon University',
      abstract: 'This project focuses on developing edge computing solutions for autonomous vehicles to enable real-time processing and decision-making capabilities.',
      methodology: 'Distributed edge computing, real-time processing, network optimization',
      expectedOutcomes: ['Edge computing framework', 'Autonomous vehicle protocols', 'Performance benchmarks'],
      publications: [
        {
          title: 'Edge Computing in Autonomous Vehicle Networks',
          journal: 'IEEE Transactions on Vehicular Technology',
          year: 2024,
          doi: '10.1109/TVT.2024.005678',
          citations: 18
        }
      ],
      tags: ['Edge Computing', 'Autonomous Vehicles', 'IoT', 'Real-time Systems', 'Network Optimization'],
      featured: false,
      progress: 35,
      impact: 'medium'
    },
    {
      id: 4,
      title: 'Blockchain-Based Supply Chain Transparency',
      description: 'Developing blockchain solutions to enhance transparency and traceability in global supply chains.',
      category: 'emerging',
      status: 'completed',
      type: 'prototypes',
      startDate: '2023-01-01',
      endDate: '2024-06-30',
      leadResearcher: 'Dr. Maria Rodriguez',
      team: ['Dr. Maria Rodriguez', 'Dr. David Brown', 'Anna Wilson', 'Carlos Martinez'],
      funding: 1200000,
      institution: 'University of California, Berkeley',
      abstract: 'This project explores the use of blockchain technology to create transparent and immutable supply chain records.',
      methodology: 'Blockchain development, smart contracts, supply chain modeling',
      expectedOutcomes: ['Blockchain framework', 'Supply chain protocols', 'Case studies'],
      publications: [
        {
          title: 'Blockchain for Supply Chain Transparency',
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
    }
  ];

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.leadResearcher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
    const matchesType = activeType === 'all' || project.type === activeType;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesType;
  });

  const toggleProjectExpansion = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'completed':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'planning':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'published':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'low':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      <SEO 
        title="Research & Development - Zion Tech Group"
        description="Explore our cutting-edge research projects in AI, quantum computing, cybersecurity, and emerging technologies. Discover our innovations and breakthroughs."
        keywords="research, development, AI, quantum computing, cybersecurity, emerging technologies, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                  <FlaskConical className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Research &{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Pushing the boundaries of technology through innovative research in AI, quantum computing, 
                cybersecurity, and emerging technologies that shape the future.
              </p>
              
              {/* Search Form */}
              <form className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search research projects, researchers, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Status</label>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <button
                      key={status.id}
                      onClick={() => setActiveStatus(status.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeStatus === status.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {status.name}
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full ml-2">
                        {status.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setActiveType(type.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeType === type.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {type.name}
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full ml-2">
                        {type.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                Research Projects ({filteredProjects.length})
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">
                  Showing {filteredProjects.length} of {researchProjects.length} projects
                </span>
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid gap-6">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
                  >
                    <div className="p-6">
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getImpactColor(project.impact)}`}>
                              {project.impact} Impact
                            </span>
                            {project.featured && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                Featured
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-300 text-lg leading-relaxed mb-4">{project.description}</p>
                        </div>
                        <button
                          onClick={() => toggleProjectExpansion(project.id)}
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                        >
                          {expandedProject === project.id ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {/* Project Meta */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div>
                          <span className="text-gray-400 text-sm">Lead Researcher</span>
                          <div className="text-white font-medium">{project.leadResearcher}</div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Institution</span>
                          <div className="text-white font-medium">{project.institution}</div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Funding</span>
                          <div className="text-white font-medium">{formatCurrency(project.funding)}</div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Progress</span>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-white text-sm font-medium">{project.progress}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Content */}
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-white/20 pt-6 mt-6"
                        >
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Abstract */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Abstract</h4>
                              <p className="text-gray-300 leading-relaxed">{project.abstract}</p>
                            </div>

                            {/* Methodology */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Methodology</h4>
                              <p className="text-gray-300 leading-relaxed">{project.methodology}</p>
                            </div>

                            {/* Expected Outcomes */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Expected Outcomes</h4>
                              <ul className="space-y-2">
                                {project.expectedOutcomes.map((outcome, index) => (
                                  <li key={index} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    {outcome}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Publications */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Publications</h4>
                              <div className="space-y-3">
                                {project.publications.map((pub, index) => (
                                  <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                                    <h5 className="text-white font-medium mb-1">{pub.title}</h5>
                                    <p className="text-gray-400 text-sm mb-2">{pub.journal}, {pub.year}</p>
                                    <div className="flex items-center justify-between text-sm">
                                      <span className="text-cyan-400">DOI: {pub.doi}</span>
                                      <span className="text-gray-400">{pub.citations} citations</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Team */}
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Research Team</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.team.map((member, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-2 bg-white/10 text-gray-300 rounded-lg text-sm border border-white/20"
                                >
                                  {member}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Research Projects Found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or filters to find research projects.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setActiveStatus('all');
                    setActiveType('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Research Community
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Collaborate with leading researchers, access cutting-edge facilities, and contribute to 
                breakthrough discoveries that shape the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Collaborate With Us
                </a>
                <a
                  href="/careers"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Research Opportunities
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
