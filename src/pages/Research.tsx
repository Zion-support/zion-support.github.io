import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  BarChart,
  PieChart,
  LineChart,
  Settings,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2
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
  featured: boolean;
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

const Research: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [activeType, setActiveType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: FlaskConical, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 8 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 10 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 7 },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu, count: 4 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, count: 5 }
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
        }
      ],
      tags: ['Federated Learning', 'Healthcare', 'Privacy', 'Machine Learning', 'Security'],
      featured: true,
      progress: 100,
      impact: 'high'
    },
    {
      id: 3,
      title: 'Edge AI for Autonomous Vehicle Perception',
      description: 'Developing lightweight AI models for real-time object detection and scene understanding in autonomous vehicles.',
      category: 'ai-ml',
      status: 'active',
      type: 'research',
      startDate: '2024-03-01',
      endDate: '2026-02-28',
      leadResearcher: 'Dr. Robert Kim',
      team: ['Dr. Robert Kim', 'Dr. Emily Zhang', 'Mark Thompson', 'Jessica Lee'],
      funding: 3200000,
      institution: 'Carnegie Mellon University',
      abstract: 'This research focuses on developing efficient AI models that can run on edge devices for autonomous vehicle perception systems.',
      methodology: 'Neural architecture search, model compression, edge computing optimization',
      expectedOutcomes: ['Real-time perception system', 'Efficient AI models', 'Safety validation framework'],
      publications: [],
      tags: ['Autonomous Vehicles', 'Edge Computing', 'Computer Vision', 'AI Optimization'],
      featured: false,
      progress: 35,
      impact: 'medium'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'completed': return 'text-blue-400 bg-blue-400/20';
      case 'planning': return 'text-yellow-400 bg-yellow-400/20';
      case 'published': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
    const matchesType = activeType === 'all' || project.type === activeType;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Research & Development - Zion Tech Group"
        description="Explore our cutting-edge research projects in AI, quantum computing, cybersecurity, and emerging technologies. Discover our innovations and collaborations."
        keywords="research, development, AI research, quantum computing, cybersecurity research, Zion Tech Group, innovation"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research & Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future through cutting-edge research in AI, quantum computing, 
              cybersecurity, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Projects</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search research projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                <select
                  value={activeStatus}
                  onChange={(e) => setActiveStatus(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {statuses.map(status => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                <select
                  value={activeType}
                  onChange={(e) => setActiveType(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {types.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Research Projects</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge research projects span multiple domains, from quantum computing 
              to healthcare AI, driving innovation and technological advancement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  </div>
                  {project.featured && (
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(project.impact)}`}>
                    {project.impact.charAt(0).toUpperCase() + project.impact.slice(1)} Impact
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Lead Researcher:</span>
                    <span className="text-white">{project.leadResearcher}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Institution:</span>
                    <span className="text-white">{project.institution}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Funding:</span>
                    <span className="text-white">${(project.funding / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Progress:</span>
                    <span className="text-white">{project.progress}%</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{project.team.length} researchers</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FileText className="w-4 h-4" />
                    <span>{project.publications.length} publications</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300 text-lg">No research projects found matching your criteria.</p>
              <p className="text-gray-400 text-sm">Try adjusting your search terms or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Research Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">52</div>
              <div className="text-gray-300 text-sm">Active Projects</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">127</div>
              <div className="text-gray-300 text-sm">Publications</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">89</div>
              <div className="text-gray-300 text-sm">Researchers</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">23</div>
              <div className="text-gray-300 text-sm">Patents</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Collaborate with Our Research Team
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in collaborating on cutting-edge research? We partner with universities, 
              research institutions, and industry leaders to drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Research Team
              </Link>
              <a
                href="mailto:research@ziontechgroup.com?subject=Research Collaboration"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Propose Collaboration
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;
