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
<<<<<<< HEAD
  Eye
} from 'lucide-react';

=======
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

>>>>>>> cursor/add-new-services-and-advertise-them-650b
export default function Research() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Categories', icon: FlaskConical, count: 0 },
=======
  const categories: Category[] = [
    { id: 'all', name: 'All Categories', icon: FlaskConical, count: 52 },
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
<<<<<<< HEAD
          citations: 18
=======
          citations: 32
>>>>>>> cursor/add-new-services-and-advertise-them-650b
        }
      ],
      tags: ['Federated Learning', 'Healthcare', 'Privacy', 'Machine Learning', 'Security'],
      featured: true,
      progress: 100,
<<<<<<< HEAD
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
=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
<<<<<<< HEAD
    },
    {
      id: 6,
      title: 'Neuromorphic Computing for Edge AI',
      description: 'Researching brain-inspired computing architectures for energy-efficient AI processing at the edge.',
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

=======
    }
  ];

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.leadResearcher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
    const matchesType = activeType === 'all' || project.type === activeType;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesType;
  });

<<<<<<< HEAD
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : FlaskConical;
=======
  const toggleProjectExpansion = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  };

  const getStatusColor = (status: string) => {
    switch (status) {
<<<<<<< HEAD
      case 'active': return 'text-green-400';
      case 'completed': return 'text-blue-400';
      case 'planning': return 'text-yellow-400';
      case 'published': return 'text-purple-400';
      default: return 'text-gray-400';
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
<<<<<<< HEAD
      case 'very-high': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
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

  return (
    <>
      <SEO 
        title="Research & Innovation - Zion Tech Group"
        description="Pushing the boundaries of technology through cutting-edge research, innovative solutions, and collaborative partnerships."
        keywords="research, innovation, AI research, quantum computing, cybersecurity, technology research"
        canonicalUrl="https://ziontechgroup.com/research"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <FlaskConical className="w-16 h-16 text-blue-400" />
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Research & Innovation
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Pushing the boundaries of technology through cutting-edge research, innovative solutions, and collaborative partnerships.
            </p>
          </div>
<<<<<<< HEAD
        </div>

        {/* Search and Filters */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search research projects..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        <category.icon className="w-4 h-4" />
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
                            ? 'bg-purple-500 text-white'
                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700 hover:text-white'
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
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700 hover:text-white'
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
          <div className="py-12 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                Featured Research Projects
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {researchProjects.filter(p => p.featured).map((project) => (
                  <div
                    key={project.id}
                    className="bg-slate-800/50 border border-slate-600/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 text-white">
                          <span className={`text-sm font-medium ${getImpactColor(project.impact)}`}>
                            {project.impact.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-sm">{formatFunding(project.funding)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <getCategoryIcon categoryId={project.category} className="w-5 h-5" />
                        <span className="text-sm text-gray-300 bg-gray-600/20 px-2 py-1 rounded-full">
                          {categories.find(c => c.id === project.category)?.name}
                        </span>
                        <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                          {statuses.find(s => s.id === project.status)?.name}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                      <div className="flex items-center justify-between mb-4 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.team.length} researchers
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {project.publications.length} publications
                        </div>
                      </div>

                      <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-slate-800/50 border border-slate-600/50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <getCategoryIcon categoryId={project.category} className="w-5 h-5" />
                        <span className="text-sm text-gray-300 bg-gray-600/20 px-2 py-1 rounded-full">
                          {categories.find(c => c.id === project.category)?.name}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-medium">
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
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-600/20 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-300">
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
                      <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-600/20 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">
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
                        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors inline-flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Details
                        </button>
                        {project.publications.length > 0 && (
                          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                            Papers
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FlaskConical className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No research projects found</h3>
                <p className="text-gray-300">
                  Try adjusting your search terms or browse all categories
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Research Community
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Collaborate with leading researchers, access cutting-edge technology, and contribute to breakthrough innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Explore Collaborations
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Research Team
              </button>
            </div>
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
