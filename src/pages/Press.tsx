import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Clock, 
  Download, 
  ExternalLink, 
  ArrowRight, 
  Search, 
  Filter,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Building2,
  Users,
  Globe,
  Award,
  TrendingUp,
  Star,
  Eye,
  Share2,
  Bookmark,
  Image,
  Video,
  File,
  Archive
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Press() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [expandedPress, setExpandedPress] = useState<string | null>(null);

  const pressCategories = [
    { id: 'all', name: 'All Press', count: 18 },
    { id: 'press-releases', name: 'Press Releases', count: 8 },
    { id: 'media-coverage', name: 'Media Coverage', count: 5 },
    { id: 'awards', name: 'Awards & Recognition', count: 3 },
    { id: 'company-news', name: 'Company News', count: 2 }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' }
  ];

  const pressReleases = [
    {
      id: 'press-001',
      title: 'Zion Tech Group Announces Revolutionary AI-Powered Quantum Computing Platform',
      excerpt: 'Breakthrough technology combines artificial intelligence with quantum computing to solve previously unsolvable problems in cryptography, drug discovery, and financial modeling.',
      content: 'Zion Tech Group today announced the launch of its revolutionary AI-powered quantum computing platform, marking a significant milestone in the convergence of artificial intelligence and quantum computing technologies. This breakthrough platform leverages advanced machine learning algorithms to optimize quantum circuit design, enabling unprecedented computational power for complex problem-solving across multiple industries. The platform has already demonstrated remarkable results in cryptography, reducing encryption cracking time from years to hours, and in drug discovery, accelerating molecular simulation by orders of magnitude. Financial institutions are also leveraging the platform for portfolio optimization and risk assessment, achieving results that were previously impossible with classical computing methods.',
      category: 'press-releases',
      publishDate: '2024-01-20',
      embargoDate: '2024-01-20',
      contact: 'press@ziontechgroup.com',
      phone: '+1 302 464 0950',
      featured: true,
      tags: ['AI', 'Quantum Computing', 'Platform Launch', 'Innovation'],
      views: 3247,
      shares: 189,
      attachments: [
        { name: 'Press Release PDF', type: 'pdf', size: '2.1 MB', url: '/press/ai-quantum-platform-release.pdf' },
        { name: 'Product Images', type: 'archive', size: '15.2 MB', url: '/press/ai-quantum-platform-images.zip' },
        { name: 'Executive Quotes', type: 'pdf', size: '0.8 MB', url: '/press/executive-quotes.pdf' }
      ]
    },
    {
      id: 'press-002',
      title: 'Zion Tech Group Named Leader in AI-Powered Business Solutions by Gartner',
      excerpt: 'Recognition validates company\'s commitment to delivering cutting-edge AI solutions that drive real business value for clients.',
      category: 'awards',
      publishDate: '2024-01-15',
      embargoDate: '2024-01-15',
      contact: 'press@ziontechgroup.com',
      phone: '+1 302 464 0950',
      featured: true,
      tags: ['Gartner', 'AI Leadership', 'Recognition', 'Business Solutions'],
      views: 2156,
      shares: 156,
      attachments: [
        { name: 'Gartner Report Excerpt', type: 'pdf', size: '1.5 MB', url: '/press/gartner-report-excerpt.pdf' },
        { name: 'Company Response', type: 'pdf', size: '0.9 MB', url: '/press/company-response.pdf' }
      ]
    },
    {
      id: 'press-003',
      title: 'Strategic Partnership: Zion Tech Group Joins Forces with Microsoft Azure',
      excerpt: 'Partnership to deliver enhanced cloud-native AI solutions and accelerate digital transformation for enterprise clients.',
      category: 'press-releases',
      publishDate: '2024-01-10',
      embargoDate: '2024-01-10',
      contact: 'partnerships@ziontechgroup.com',
      phone: '+1 302 464 0950',
      featured: true,
      tags: ['Partnership', 'Microsoft', 'Azure', 'Cloud', 'AI'],
      views: 1892,
      shares: 203,
      attachments: [
        { name: 'Partnership Announcement', type: 'pdf', size: '1.8 MB', url: '/press/microsoft-partnership-announcement.pdf' },
        { name: 'Joint Solutions Overview', type: 'pdf', size: '3.2 MB', url: '/press/joint-solutions-overview.pdf' }
      ]
    }
  ];

  const mediaCoverage = [
    {
      id: 'media-001',
      title: 'TechCrunch: "Zion Tech Group\'s AI Breakthrough Could Revolutionize Financial Services"',
      excerpt: 'Leading technology publication highlights our quantum computing achievements in portfolio optimization.',
      category: 'media-coverage',
      source: 'TechCrunch',
      author: 'Sarah Chen',
      publishDate: '2024-01-18',
      url: 'https://techcrunch.com/2024/01/18/zion-tech-group-ai-breakthrough',
      featured: false,
      tags: ['TechCrunch', 'Financial Services', 'AI', 'Media Coverage'],
      views: 1567,
      shares: 89
    },
    {
      id: 'media-002',
      title: 'Forbes: "The Future of AI: How Zion Tech Group is Shaping Tomorrow\'s Technology"',
      excerpt: 'Forbes explores our innovative approach to AI and quantum computing integration.',
      category: 'media-coverage',
      source: 'Forbes',
      author: 'Michael Rodriguez',
      publishDate: '2024-01-12',
      url: 'https://forbes.com/2024/01/12/future-ai-zion-tech-group',
      featured: false,
      tags: ['Forbes', 'AI Future', 'Technology', 'Innovation'],
      views: 2034,
      shares: 178
    },
    {
      id: 'media-003',
      title: 'Wired: "Quantum Computing Meets AI: The Zion Tech Group Revolution"',
      excerpt: 'Wired magazine covers our groundbreaking work in quantum-AI convergence.',
      category: 'media-coverage',
      source: 'Wired',
      author: 'Dr. Emily Watson',
      publishDate: '2024-01-08',
      url: 'https://wired.com/2024/01/08/quantum-ai-zion-tech-group',
      featured: false,
      tags: ['Wired', 'Quantum Computing', 'AI', 'Revolution'],
      views: 1789,
      shares: 145
    }
  ];

  const mediaKit = {
    companyOverview: {
      name: 'Zion Tech Group',
      founded: '2020',
      headquarters: 'Middletown, Delaware',
      employees: '500+',
      description: 'Leading provider of AI-powered business solutions and quantum computing technology',
      website: 'https://ziontechgroup.com'
    },
    leadership: [
      {
        name: 'Dr. Sarah Johnson',
        title: 'Chief Executive Officer',
        bio: 'Former AI researcher at Stanford, PhD in Computer Science',
        photo: '/press/leadership/sarah-johnson.jpg',
        contact: 'sarah.johnson@ziontechgroup.com'
      },
      {
        name: 'Michael Chen',
        title: 'Chief Technology Officer',
        bio: 'Quantum computing expert with 15+ years in emerging technologies',
        photo: '/press/leadership/michael-chen.jpg',
        contact: 'michael.chen@ziontechgroup.com'
      },
      {
        name: 'Lisa Thompson',
        title: 'Chief Marketing Officer',
        bio: 'Marketing veteran with expertise in B2B technology',
        photo: '/press/leadership/lisa-thompson.jpg',
        contact: 'lisa.thompson@ziontechgroup.com'
      }
    ],
    assets: [
      {
        name: 'Company Logo',
        type: 'image',
        formats: ['SVG', 'PNG', 'JPG'],
        sizes: ['Full Color', 'White', 'Black'],
        url: '/press/assets/company-logo.zip'
      },
      {
        name: 'Product Screenshots',
        type: 'image',
        formats: ['PNG', 'JPG'],
        sizes: ['High Resolution', 'Web Ready'],
        url: '/press/assets/product-screenshots.zip'
      },
      {
        name: 'Executive Headshots',
        type: 'image',
        formats: ['JPG', 'PNG'],
        sizes: ['Professional', 'High Resolution'],
        url: '/press/assets/executive-headshots.zip'
      },
      {
        name: 'Company Fact Sheet',
        type: 'document',
        formats: ['PDF'],
        description: 'Key facts and figures about Zion Tech Group',
        url: '/press/assets/company-fact-sheet.pdf'
      },
      {
        name: 'Product Brochures',
        type: 'document',
        formats: ['PDF'],
        description: 'Comprehensive product information and specifications',
        url: '/press/assets/product-brochures.zip'
      }
    ]
  };

  const pressContact = {
    general: {
      email: 'press@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    specialized: [
      {
        area: 'Technology & Product',
        contact: 'tech-press@ziontechgroup.com',
        phone: '+1 302 464 0951'
      },
      {
        area: 'Partnerships & Business',
        contact: 'business-press@ziontechgroup.com',
        phone: '+1 302 464 0952'
      },
      {
        area: 'Financial & Investor',
        contact: 'investor-relations@ziontechgroup.com',
        phone: '+1 302 464 0953'
      }
    ]
  };

  const togglePressExpansion = (pressId: string) => {
    setExpandedPress(expandedPress === pressId ? null : pressId);
  };

  const filteredPress = [...pressReleases, ...mediaCoverage].filter(press => {
    if (selectedCategory !== 'all' && press.category !== selectedCategory) return false;
    if (selectedYear !== 'all' && !press.publishDate.startsWith(selectedYear)) return false;
    if (searchQuery) {
      return press.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             press.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
             press.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'press-releases': return 'bg-blue-500/20 text-blue-400';
      case 'media-coverage': return 'bg-green-500/20 text-green-400';
      case 'awards': return 'bg-yellow-500/20 text-yellow-400';
      case 'company-news': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <File className="w-5 h-5 text-red-400" />;
      case 'image': return <Image className="w-5 h-5 text-blue-400" />;
      case 'video': return <Video className="w-5 h-5 text-purple-400" />;
      case 'archive': return <Archive className="w-5 h-5 text-orange-400" />;
      default: return <FileText className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press Room - Zion Tech Group"
        description="Access our latest press releases, media kit, and press contact information. Stay updated with Zion Tech Group's latest announcements and media coverage."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6">
              <FileText className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Press
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Room
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Access our latest press releases, media kit, and press contact information. 
              Stay updated with Zion Tech Group's latest announcements and media coverage.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search press releases, media coverage, and announcements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                >
                  {pressCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Press Releases */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most important announcements and breakthrough stories that are 
              shaping the future of technology and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pressReleases.filter(press => press.featured).map((press, index) => (
              <motion.div
                key={press.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(press.category)}`}>
                        {pressCategories.find(c => c.id === press.category)?.name}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {press.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {press.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(press.publishDate)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Embargo: {formatDate(press.embargoDate)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Mail className="w-4 h-4" />
                        {press.contact}
                      </div>
                      <button
                        onClick={() => togglePressExpansion(press.id)}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        {expandedPress === press.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    
                    {expandedPress === press.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {press.content}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Tags:</h4>
                          <div className="flex flex-wrap gap-2">
                            {press.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Attachments:</h4>
                          <div className="space-y-2">
                            {press.attachments.map((attachment, idx) => (
                              <a
                                key={idx}
                                href={attachment.url}
                                className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                              >
                                {getFileIcon(attachment.type)}
                                <div className="flex-1">
                                  <div className="text-sm text-white font-medium">{attachment.name}</div>
                                  <div className="text-xs text-gray-400">{attachment.size}</div>
                                </div>
                                <Download className="w-4 h-4 text-cyan-400" />
                              </a>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            {press.views.toLocaleString()} views
                          </div>
                          <div className="flex items-center gap-2">
                            <Share2 className="w-4 h-4" />
                            {press.shares} shares
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Media Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recent coverage from leading technology publications and media outlets 
              highlighting our innovations and achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaCoverage.map((media, index) => (
              <motion.div
                key={media.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(media.category)}`}>
                        {pressCategories.find(c => c.id === media.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {media.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {media.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(media.publishDate)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Building2 className="w-4 h-4" />
                        {media.source}
                      </div>
                      <a
                        href={media.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        {media.views.toLocaleString()} views
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        {media.shares} shares
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Media Kit
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download our media kit containing company information, executive bios, 
              logos, and other assets for journalists and media professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Company Overview</h3>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Company Name:</span>
                    <div className="text-white font-medium">{mediaKit.companyOverview.name}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Founded:</span>
                    <div className="text-white font-medium">{mediaKit.companyOverview.founded}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Headquarters:</span>
                    <div className="text-white font-medium">{mediaKit.companyOverview.headquarters}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Employees:</span>
                    <div className="text-white font-medium">{mediaKit.companyOverview.employees}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Description:</span>
                    <div className="text-white font-medium">{mediaKit.companyOverview.description}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Website:</span>
                    <a 
                      href={mediaKit.companyOverview.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {mediaKit.companyOverview.website}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Leadership Team</h3>
              <div className="space-y-4">
                {mediaKit.leadership.map((leader, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                        <Users className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1">{leader.name}</h4>
                        <p className="text-cyan-400 text-sm mb-2">{leader.title}</p>
                        <p className="text-gray-400 text-sm mb-2">{leader.bio}</p>
                        <a 
                          href={`mailto:${leader.contact}`}
                          className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                        >
                          {leader.contact}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Assets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Downloadable Assets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaKit.assets.map((asset, index) => (
                <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    {getFileIcon(asset.type)}
                    <div>
                      <h4 className="text-white font-semibold">{asset.name}</h4>
                      {asset.description && (
                        <p className="text-gray-400 text-sm">{asset.description}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Available Formats:</div>
                    <div className="flex flex-wrap gap-2">
                      {asset.formats.map((format, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {asset.sizes && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Available Sizes:</div>
                      <div className="flex flex-wrap gap-2">
                        {asset.sizes.map((size, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <a
                    href={asset.url}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Press Contact
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our press team is available to assist journalists, media professionals, 
              and industry analysts with inquiries, interviews, and story development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a
                href={`mailto:${pressContact.general.email}`}
                className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white group-hover:text-cyan-400 transition-colors">{pressContact.general.email}</span>
              </a>
              
              <a
                href={`tel:${pressContact.general.phone}`}
                className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white group-hover:text-cyan-400 transition-colors">{pressContact.general.phone}</span>
              </a>
              
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-700/50 bg-slate-800/30">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white text-sm">{pressContact.general.address}</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Specialized Press Contacts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pressContact.specialized.map((contact, index) => (
                  <div key={index} className="text-center">
                    <div className="text-cyan-400 font-semibold mb-2">{contact.area}</div>
                    <a 
                      href={`mailto:${contact.contact}`}
                      className="text-white hover:text-cyan-400 transition-colors block"
                    >
                      {contact.contact}
                    </a>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}