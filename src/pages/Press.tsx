import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Newspaper, Calendar, User, Tag, Search, Filter,
  ArrowRight, ExternalLink, Globe, Award, Rocket,
  Brain, Shield, Cloud, TrendingUp, Star, Zap, Download, Building,
  FileText, Image, Video, Phone, Mail, MapPin, Users, Eye,
  Share2, Bookmark, Heart, MessageCircle, Linkedin, Twitter
} from 'lucide-react';

export default function Press() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const pressCategories = [
    { id: 'all', name: 'All Press', icon: Newspaper },
    { id: 'releases', name: 'Press Releases', icon: FileText },
    { id: 'news', name: 'News Coverage', icon: Globe },
    { id: 'awards', name: 'Awards & Recognition', icon: Award },
    { id: 'partnerships', name: 'Partnerships', icon: Users },
    { id: 'product', name: 'Product Launches', icon: Rocket },
    { id: 'company', name: 'Company News', icon: Building }
  ];

  const yearFilters = [
    { id: 'all', name: 'All Years' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' },
    { id: '2021', name: '2021' }
  ];

  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      category: 'product',
      date: '2024-01-15',
      author: 'Zion Tech Group',
      summary: 'New platform combines advanced AI algorithms with zero-trust security principles to provide unprecedented protection against cyber threats.',
      featured: true,
      tags: ['AI', 'Cybersecurity', 'Zero Trust', 'Product Launch'],
      readTime: '3 min read',
      views: 15420
    },
    {
      id: 2,
      title: 'Zion Tech Group Named Leader in Gartner Magic Quadrant for Cloud Security',
      category: 'awards',
      date: '2024-01-10',
      author: 'Zion Tech Group',
      summary: 'Company recognized for its innovative approach to cloud security and comprehensive threat protection solutions.',
      featured: true,
      tags: ['Award', 'Gartner', 'Cloud Security', 'Recognition'],
      readTime: '2 min read',
      views: 12850
    },
    {
      id: 3,
      title: 'Strategic Partnership with Microsoft Azure Announced',
      category: 'partnerships',
      date: '2024-01-05',
      author: 'Zion Tech Group',
      summary: 'Partnership will deliver enhanced cloud security solutions and accelerate digital transformation for enterprise customers.',
      featured: false,
      tags: ['Partnership', 'Microsoft', 'Azure', 'Cloud'],
      readTime: '4 min read',
      views: 9870
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands European Operations',
      category: 'company',
      date: '2023-12-20',
      author: 'Zion Tech Group',
      summary: 'New office in Berlin strengthens presence in European market and supports growing customer base.',
      featured: false,
      tags: ['Expansion', 'Europe', 'Berlin', 'Growth'],
      readTime: '3 min read',
      views: 7560
    },
    {
      id: 5,
      title: 'Q4 2023 Financial Results Exceed Expectations',
      category: 'company',
      date: '2023-12-15',
      author: 'Zion Tech Group',
      summary: 'Strong revenue growth driven by increased demand for cybersecurity and AI solutions.',
      featured: false,
      tags: ['Financial', 'Q4 2023', 'Growth', 'Results'],
      readTime: '5 min read',
      views: 11200
    },
    {
      id: 6,
      title: 'New Research Reveals Emerging Cyber Threat Patterns',
      category: 'news',
      date: '2023-12-10',
      author: 'Zion Tech Group',
      summary: 'Comprehensive study identifies new attack vectors and provides recommendations for enhanced security measures.',
      featured: false,
      tags: ['Research', 'Threats', 'Security', 'Study'],
      readTime: '6 min read',
      views: 8930
    }
  ];

  const mediaResources = [
    {
      id: 1,
      name: 'Company Logo Pack',
      type: 'image',
      description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
      size: '2.4 MB',
      downloads: 1250
    },
    {
      id: 2,
      name: 'Executive Headshots',
      type: 'image',
      description: 'Professional photos of key leadership team members',
      size: '8.7 MB',
      downloads: 890
    },
    {
      id: 3,
      name: 'Product Screenshots',
      type: 'image',
      description: 'High-quality screenshots of our platform interfaces',
      size: '15.2 MB',
      downloads: 2100
    },
    {
      id: 4,
      name: 'Company Overview Video',
      type: 'video',
      description: '2-minute company overview and mission statement',
      size: '45.8 MB',
      downloads: 3400
    },
    {
      id: 5,
      name: 'Brand Guidelines',
      type: 'document',
      description: 'Comprehensive brand style guide and usage rules',
      size: '3.1 MB',
      downloads: 1560
    },
    {
      id: 6,
      name: 'Fact Sheet 2024',
      type: 'document',
      description: 'Key company facts, statistics, and achievements',
      size: '1.8 MB',
      downloads: 2780
    }
  ];

  const companyInfo = {
    name: 'Zion Tech Group',
    founded: '2018',
    headquarters: 'San Francisco, CA',
    employees: '500+',
    customers: '1000+',
    countries: '25+',
    description: 'Zion Tech Group is a leading technology company specializing in AI-powered cybersecurity, cloud solutions, and digital transformation services.',
    mission: 'To empower organizations with cutting-edge technology solutions that drive innovation and secure digital futures.',
    vision: 'To be the global leader in intelligent, secure, and sustainable technology solutions.'
  };

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'info@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Drive, San Francisco, CA 94105',
    socialMedia: {
      linkedin: 'https://linkedin.com/company/ziontechgroup',
      twitter: 'https://twitter.com/ziontechgroup',
      website: 'https://ziontechgroup.com'
    }
  };

  const filteredPress = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         release.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         release.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || release.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || release.date.startsWith(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const featuredPress = filteredPress.filter(release => release.featured);
  const regularPress = filteredPress.filter(release => !release.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      releases: 'bg-blue-100 text-blue-800',
      news: 'bg-green-100 text-green-800',
      awards: 'bg-yellow-100 text-yellow-800',
      partnerships: 'bg-purple-100 text-purple-800',
      product: 'bg-red-100 text-red-800',
      company: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return Image;
      case 'video': return Video;
      case 'document': return FileText;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest news, press releases, and media resources from Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#press-releases"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Newspaper className="w-5 h-5 mr-2" />
                View Press Releases
              </a>
              <a
                href="#media-resources"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Media Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search press releases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {pressCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {yearFilters.map((year) => (
                    <option key={year.id} value={year.id} className="bg-slate-800 text-white">
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
      {featuredPress.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Press Releases</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPress.map((release) => (
                  <motion.div
                    key={release.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(release.category)}`}>
                        {pressCategories.find(c => c.id === release.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{release.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{release.title}</h3>
                    <p className="text-gray-300 mb-4">{release.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {release.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded text-sm text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{formatDate(release.date)}</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {release.views.toLocaleString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Press Releases */}
      <section id="press-releases" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Press Releases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPress.map((release) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(release.category)}`}>
                      {pressCategories.find(c => c.id === release.category)?.name}
                    </span>
                    <span className="text-gray-400 text-sm">{release.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{release.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{release.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {release.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/10 rounded text-sm text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{formatDate(release.date)}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {release.views.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Resources */}
      <section id="media-resources" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Media Resources</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Download high-quality media assets, company information, and press materials for your coverage
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaResources.map((resource) => {
                const IconComponent = getTypeIcon(resource.type);
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{resource.name}</h3>
                        <p className="text-sm text-gray-400">{resource.type}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{resource.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{resource.size}</span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {resource.downloads.toLocaleString()}
                      </span>
                    </div>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">About Zion Tech Group</h3>
                <p className="text-gray-300 mb-6">{companyInfo.description}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Founded: {companyInfo.founded}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Headquarters: {companyInfo.headquarters}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Employees: {companyInfo.employees}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Countries: {companyInfo.countries}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Mission & Vision</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Mission</h4>
                    <p className="text-gray-300">{companyInfo.mission}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Vision</h4>
                    <p className="text-gray-300">{companyInfo.vision}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Press Contact</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              For media inquiries, press releases, or interview requests, please contact our press team
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Press Email</h3>
                <p className="text-gray-300">{contactInfo.pressEmail}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <p className="text-gray-300">ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href={`mailto:${contactInfo.pressEmail}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Press Team
              </a>
              <a
                href={contactInfo.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Follow on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
