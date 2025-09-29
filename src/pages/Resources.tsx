import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  ArrowRight, 
  Search, 
  Filter,
  Calendar,
  User,
  Clock,
  Star,
  ExternalLink
} from 'lucide-react';
import Header from '../components/Header';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'whitepapers', name: 'Whitepapers', count: 8 },
    { id: 'guides', name: 'Guides', count: 6 },
    { id: 'webinars', name: 'Webinars', count: 5 },
    { id: 'tools', name: 'Tools', count: 3 },
    { id: 'templates', name: 'Templates', count: 2 }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI Implementation Guide: From Strategy to Success',
      type: 'whitepaper',
      category: 'whitepapers',
      description: 'Comprehensive guide to implementing AI solutions in your organization. Learn best practices, common pitfalls, and success strategies.',
      downloadCount: 2847,
      rating: 4.9,
      pages: 45,
      publishDate: '2024-01-15',
      author: 'Dr. Sarah Chen',
      featured: true,
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Cybersecurity Framework for Modern Enterprises',
      type: 'whitepaper',
      category: 'whitepapers',
      description: 'A detailed framework for building robust cybersecurity defenses in today\'s threat landscape.',
      downloadCount: 1923,
      rating: 4.8,
      pages: 38,
      publishDate: '2024-01-10',
      author: 'Michael Rodriguez',
      featured: false,
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Cloud Migration Checklist: Step-by-Step Guide',
      type: 'guide',
      category: 'guides',
      description: 'Complete checklist for migrating your infrastructure to the cloud safely and efficiently.',
      downloadCount: 3456,
      rating: 4.9,
      pages: 12,
      publishDate: '2024-01-08',
      author: 'Jennifer Lee',
      featured: true,
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'The Future of AI in Business: 2024 Trends',
      type: 'webinar',
      category: 'webinars',
      description: 'Join our experts as they discuss the latest AI trends and how they\'re reshaping business operations.',
      duration: '45 min',
      viewCount: 12543,
      rating: 4.7,
      publishDate: '2024-01-20',
      author: 'Dr. Alex Kumar',
      featured: false,
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'ROI Calculator for Digital Transformation',
      type: 'tool',
      category: 'tools',
      description: 'Interactive calculator to estimate the ROI of your digital transformation initiatives.',
      downloadCount: 892,
      rating: 4.6,
      publishDate: '2024-01-05',
      author: 'Zion Tech Team',
      featured: false,
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'IT Security Policy Template',
      type: 'template',
      category: 'templates',
      description: 'Comprehensive IT security policy template that you can customize for your organization.',
      downloadCount: 1567,
      rating: 4.8,
      pages: 25,
      publishDate: '2024-01-03',
      author: 'Security Team',
      featured: false,
      image: '/api/placeholder/400/300'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'whitepaper':
      case 'guide':
        return <FileText className="w-5 h-5" />;
      case 'webinar':
        return <Video className="w-5 h-5" />;
      case 'tool':
        return <BookOpen className="w-5 h-5" />;
      case 'template':
        return <FileText className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Resources - Zion Tech Group | Whitepapers, Guides & Tools</title>
        <meta name="description" content="Access our comprehensive library of resources including whitepapers, guides, webinars, and tools to accelerate your digital transformation journey." />
        <meta name="keywords" content="resources, whitepapers, guides, webinars, tools, templates, AI, cybersecurity, cloud migration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Access our comprehensive library of whitepapers, guides, webinars, and tools to accelerate your digital transformation journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-zion-slate-dark/50 border border-zion-slate-light/20 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:bg-zion-slate-dark/70 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Resources</h2>
            <p className="text-zion-slate-light">Our most popular and impactful resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                <div className="relative">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-zion-cyan/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    {getTypeIcon(resource.type)}
                    {resource.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                    Featured
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-zion-slate mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {resource.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(resource.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-zion-slate-light text-sm">{resource.rating}</span>
                      </div>
                      <div className="text-zion-slate-light text-sm">
                        {resource.downloadCount?.toLocaleString()} downloads
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-zion-cyan hover:bg-zion-blue-light text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                    <Download className="w-5 h-5" />
                    Download Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70 hover:text-white'
                }`}
              >
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* All Resources */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-zion-slate-light">
              {filteredResources.length} resources found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                <div className="relative">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-zion-cyan/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    {getTypeIcon(resource.type)}
                    {resource.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-zion-slate mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {resource.author}
                      </div>
                      {resource.pages && (
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {resource.pages} pages
                        </div>
                      )}
                      {resource.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {resource.duration}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-zion-slate-light text-sm">{resource.rating}</span>
                    </div>
                    <div className="text-zion-slate-light text-sm">
                      {resource.downloadCount?.toLocaleString()} downloads
                    </div>
                  </div>

                  <button className="w-full bg-zion-cyan hover:bg-zion-blue-light text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                    <Download className="w-5 h-5" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Resources
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get notified when we release new whitepapers, guides, and tools. Join thousands of professionals who trust our insights.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
              />
              <button className="bg-white text-zion-blue hover:bg-zion-slate-light px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;