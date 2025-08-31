<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Calendar,
  ExternalLink,
  Download,
  Filter,
  ChevronDown,
  ChevronRight,
  Globe,
  Lightbulb,
  BarChart3,
  Microscope,
  Award,
  Clock,
  Eye,
  Share2,
  Shield,
  Cloud,
  Heart,
  Zap
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Research: React.FC = () => {
=======
import React, { useState } from 'react.ts';
<<<<<<< HEAD
import { FlaskConical, BookOpen, Users, Clock, Star, Search, Filter, Download, ExternalLink, ArrowRight, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle, Calendar, MapPin, DollarSign, FileText, Lightbulb, Microscope, Rocket, Code, Network, Cpu, Lock, BarChart3, Palette, Smartphone, Eye, Star as StarIcon export default function Research(...args: any[]): any {
=======
import { FlaskConical, BookOpen, Users, Clock, Star, Search, Filter, Download, ExternalLink, ArrowRight, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle, Calendar, MapPin, DollarSign, FileText, Lightbulb, Microscope, Rocket, Code, Network, Cpu, Lock, BarChart3, Palette, Smartphone, Eye, Star as StarIcon               } from 'lucide-react.ts';

export default function Research(...args: any[]): any {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const researchCategories = [
    { id: 'all', name: 'All Research', count: 47 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 18 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12 },
    { id: 'cloud', name: 'Cloud Computing', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 5 },
    { id: 'healthcare', name: 'Healthcare Tech', count: 4 }
  ];

  const years = [
    { id: 'all', name: 'All Years', count: 47 },
    { id: '2024', name: '2024', count: 12 },
    { id: '2023', name: '2023', count: 15 },
    { id: '2022', name: '2022', count: 11 },
    { id: '2021', name: '2021', count: 9 }
  ];

  const featuredResearch = [
    {
      id: 1,
      title: 'Quantum-Classical Hybrid Computing: A New Paradigm for Enterprise Applications',
      authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'Dr. Emily Watson'],
      abstract: 'This groundbreaking research explores the integration of quantum and classical computing systems to solve complex enterprise problems previously thought intractable.',
      category: 'quantum',
      year: '2024',
      readTime: '15 min',
      views: '2.4k',
      downloads: '856',
      journal: 'IEEE Transactions on Quantum Computing',
      doi: '10.1109/TQC.2024.001234',
      tags: ['Quantum Computing', 'Hybrid Systems', 'Enterprise Applications'],
      featured: true
    },
    {
      id: 2,
      title: 'AI-Powered Cybersecurity: Detecting Zero-Day Threats in Real-Time',
      authors: ['Dr. James Thompson', 'Dr. Lisa Park'],
      abstract: 'Our research demonstrates how machine learning algorithms can identify and neutralize previously unknown cyber threats within milliseconds of detection.',
      category: 'cybersecurity',
      year: '2024',
      readTime: '12 min',
      views: '3.1k',
      downloads: '1.2k',
      journal: 'Journal of Cybersecurity Research',
      doi: '10.1007/JCR.2024.005678',
      tags: ['AI Security', 'Zero-Day Threats', 'Real-Time Detection'],
      featured: true
    },
    {
      id: 3,
      title: 'Sustainable Cloud Infrastructure: Energy-Efficient Data Center Design',
      authors: ['Dr. Robert Kim', 'Dr. Amanda Foster', 'Dr. David Wilson'],
      abstract: 'This study presents innovative approaches to designing cloud infrastructure that reduces energy consumption by up to 40% while maintaining performance.',
      category: 'cloud',
      year: '2023',
      readTime: '18 min',
      views: '1.8k',
      downloads: '743',
      journal: 'Sustainable Computing: Informatics and Systems',
      doi: '10.1016/SUSCOM.2023.009876',
      tags: ['Green Computing', 'Data Centers', 'Energy Efficiency'],
      featured: true
    }
  ];

  const allResearch = [
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
      title: 'Edge Computing for IoT: Distributed Intelligence in Smart Cities',
      authors: ['Dr. Alex Johnson', 'Dr. Maria Garcia'],
      abstract: 'Research on deploying edge computing solutions to enable real-time processing in Internet of Things applications.',
      category: 'cloud',
      year: '2024',
      readTime: '16 min',
      views: '1.3k',
      downloads: '489',
      journal: 'Internet of Things Journal',
      doi: '10.1109/IOTJ.2024.007890',
      tags: ['Edge Computing', 'IoT', 'Smart Cities']
    },
    {
      id: 6,
      title: 'Natural Language Processing: Advances in Multilingual Understanding',
      authors: ['Dr. Rachel Green', 'Dr. Kevin O\'Brien'],
      abstract: 'Recent developments in NLP techniques for understanding and processing multiple languages simultaneously.',
      category: 'ai-ml',
      year: '2023',
      readTime: '13 min',
      views: '2.1k',
      downloads: '789',
      journal: 'Computational Linguistics',
      doi: '10.1007/CL.2023.004567',
      tags: ['NLP', 'Multilingual', 'Language Processing']
    },
    {
      id: 7,
      title: 'Blockchain Security: Cryptographic Protocols for Distributed Systems',
      authors: ['Dr. Thomas Brown', 'Dr. Sophia Martinez'],
      abstract: 'Analysis of security protocols and cryptographic methods for ensuring integrity in blockchain networks.',
      category: 'cybersecurity',
      year: '2023',
      readTime: '17 min',
      views: '1.9k',
      downloads: '654',
      journal: 'Cryptography and Security',
      doi: '10.1007/CRYPT.2023.008765',
      tags: ['Blockchain', 'Cryptography', 'Distributed Systems']
    },
    {
      id: 8,
      title: 'Quantum Machine Learning: Algorithms for the Post-Classical Era',
      authors: ['Dr. William Davis', 'Dr. Olivia Taylor'],
      abstract: 'Exploring quantum algorithms that can potentially outperform classical machine learning approaches.',
      category: 'quantum',
      year: '2023',
      readTime: '20 min',
      views: '1.4k',
      downloads: '567',
      journal: 'Quantum Information Processing',
      doi: '10.1007/QIP.2023.006543',
      tags: ['Quantum ML', 'Quantum Algorithms', 'Post-Classical Computing']
    }
  ];

  const researchAreas = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Cutting-edge research in AI algorithms, neural networks, and machine learning applications',
      icon: Lightbulb,
      projects: 18,
      researchers: 12,
      publications: 25
    },
    {
      title: 'Cybersecurity & Privacy',
      description: 'Advanced security protocols, threat detection, and privacy-preserving technologies',
      icon: Shield,
      projects: 12,
      researchers: 8,
      publications: 18
    },
    {
      title: 'Cloud Computing & Infrastructure',
      description: 'Scalable cloud solutions, distributed systems, and infrastructure optimization',
      icon: Cloud,
      projects: 8,
      researchers: 6,
      publications: 12
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum algorithms, hybrid systems, and quantum-classical integration',
      icon: Microscope,
      projects: 5,
      researchers: 4,
      publications: 8
    },
    {
      title: 'Healthcare Technology',
      description: 'Digital health solutions, medical AI, and healthcare data analytics',
      icon: Heart,
      projects: 4,
      researchers: 3,
      publications: 6
    },
    {
      title: 'Emerging Technologies',
      description: 'Blockchain, IoT, edge computing, and next-generation technologies',
      icon: Zap,
      projects: 6,
      researchers: 5,
      publications: 10
    }
  ];

  const stats = [
    { label: 'Research Papers', value: '47+', icon: BookOpen },
    { label: 'Active Projects', value: '23', icon: TrendingUp },
    { label: 'Research Team', value: '38', icon: Users },
    { label: 'Publications', value: '79', icon: Globe }
  ];

  const filteredResearch = [...featuredResearch, ...allResearch].filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || item.year === selectedYear;
    
    return matchesSearch && matchesCategory && matchesYear;
  });

<<<<<<< HEAD
=======
  statuses.forEach(status = > {;
    status.count = researchProjects.filter(p => p.status === status.id).length;
  });

  types.forEach(type = > {;
    type.count = researchProjects.filter(p => p.type === type.id).length;
  });
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

  const filteredProjects = researchProjects.filter(project => {;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
    const matchesType = activeType === 'all' || project.type === activeType;

    return matchesSearch && matchesCategory && matchesStatus && matchesType;
  });

<<<<<<< HEAD
  const getCategoryIcon = (categoryId: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    return categories.find(c => c.id === categoryId)?.icon || <FlaskConical className="w-5 h-5" />};

  const getCategoryIcon = (categoryId: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    return categories.find(c => c.id === categoryId)?.icon || <FlaskConical className="w-5 h-5" />;
  };

  const getStatusColor = (status: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (status) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      case 'active': return 'text-green-400';
      case 'completed': return 'text-blue-400';
      case 'planning': return 'text-yellow-400';
      case 'published': return 'text-purple-400';
<<<<<<< HEAD
      default: return 'text-zion-slate-light';

=======
      default: return 'text-zion-slate-light'}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

<<<<<<< HEAD
  const getImpactColor = (impact: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (impact) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      case 'very-high': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
<<<<<<< HEAD
      default: return 'text-zion-slate-light';

=======
      default: return 'text-zion-slate-light'}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

<<<<<<< HEAD
  const formatDate = (dateString: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',;
      month: 'short';
    })};

  const formatFunding = (amount: anyanyanyanyanyanyanyanyanyanyanyanyanynumber)               => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`} else if (amount >= 1000) {;
      return `$${(amount / 1000).toFixed(0)}K`};
    return `$${amount.toLocaleString()}`};
=======
  const formatDate = (dateString: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      year: 'numeric',;
      month: 'short';
    });
  };

  const formatFunding = (amount: anyanyanyanyanyanyanyanyanyanyanyanyanynumber)              => {;
    if (amount >= 1000000) {;
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;

    return `$${amount.toLocaleString()}`;
  };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search research papers, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {researchCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {years.map(year => (
                    <option key={year.id} value={year.id}>
                      {year.name} ({year.count})
                    </option>
                  ))}
<<<<<<< HEAD
                </select>
=======
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
                          : 'bg-zion-slate text-zion-slate-light hover: anyanyanyanyanyanyanyanyanyanyanyanyanybg-zion-slate-light hover:text-white'
                      }`}

                      {type.name} ({type.count})
                    </button>
                  ))}
                </div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Research Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="text-cyan-400 font-semibold">{area.projects}</div>
                    <div className="text-gray-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-semibold">{area.researchers}</div>
                    <div className="text-gray-500">Researchers</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-semibold">{area.publications}</div>
                    <div className="text-gray-500">Papers</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Featured Research */}
<<<<<<< HEAD
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Research</h2>
          <div className="space-y-6">
            {featuredResearch.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Featured</span>
                      <span className="text-gray-400 text-sm">{paper.year}</span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{paper.readTime} read</span>
=======
      {researchProjects.filter(p               => p.featured).length > 0 && (
        <div className="py-12 bg-zion-slate-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Featured Research Projects
            </h2>
            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8 max-w-6xl mx-auto">
              {researchProjects.filter(p               => p.featured).map((project) => (
                <div
                  key={project.id}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow"

                  <div className="relative h-48 bg-gradient-to-br from-zion-blue to-zion-purple">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                        Featured
                      </span>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{paper.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{paper.abstract}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{paper.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 text-right">
                    <div className="text-sm text-gray-400 mb-2">Published in</div>
                    <div className="text-sm text-white mb-2">{paper.journal}</div>
                    <div className="text-xs text-cyan-400 mb-3">DOI: {paper.doi}</div>
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
<<<<<<< HEAD
                <div className="border-t border-white/10 pt-4">
                  <div className="text-sm text-gray-400 mb-2">Authors:</div>
                  <div className="flex flex-wrap gap-2">
                    {paper.authors.map((author, authorIndex) => (
                      <span key={authorIndex} className="text-sm text-white">{author}</span>
=======
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
            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredProjects.map((project)               => (
                <div
                  key={project.id}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow"

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

                        {tag}
                      </span>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    ))}
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
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Interested in Our Research?</h2>
            <p className="text-gray-300 mb-6">
              Stay updated with our latest research, collaborate on projects, or explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <BookOpen className="w-4 h-4 mr-2" />
                Subscribe to Research Updates
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Users className="w-4 h-4 mr-2" />
                Collaborate With Us
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Research;
