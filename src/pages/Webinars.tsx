
import React from 'react';
import { SEO } from '../components/SEO';
import { Users, Calendar, Clock, Play, ExternalLink, ArrowRight, Star, Eye, Tag, Search, Filter, TrendingUp, Brain, Shield, Cloud, Zap, Video, Mic, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Webinars() {
  const webinars = [
    {
      title: 'AI Implementation Strategies for SMBs',
      description: 'Learn practical approaches to implementing AI solutions in small and medium businesses. Discover cost-effective strategies and real-world success stories.',
      host: 'Dr. Emily Johnson',
      date: '2024-02-15',
      time: '10:00 AM EST',
      duration: '60 minutes',
      category: 'AI & Machine Learning',
      tags: ['AI', 'SMB', 'Implementation', 'Strategy'],
      featured: true,
      color: 'from-purple-500 to-pink-500',
      spots: '100 remaining',
      type: 'Live Webinar',
      thumbnail: '/webinars/ai-smb-implementation.jpg'
    },
    {
      title: 'Future of Cloud Computing and DevOps',
      description: 'Explore emerging trends in cloud infrastructure and development operations. Learn about the latest tools, practices, and strategies for modern development teams.',
      host: 'Cloud Architecture Team',
      date: '2024-02-20',
      time: '2:00 PM EST',
      duration: '90 minutes',
      category: 'Cloud & DevOps',
      tags: ['Cloud', 'DevOps', 'Infrastructure', 'Trends'],
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      spots: '75 remaining',
      type: 'Workshop',
      thumbnail: '/webinars/cloud-devops-future.jpg'
    },
    {
      title: 'Cybersecurity in the AI Era: Threats & Solutions',
      description: 'Expert analysis of emerging cybersecurity challenges and AI-powered security solutions. Learn how to protect your organization in the age of intelligent threats.',
      host: 'Marcus Rodriguez',
      date: '2024-02-25',
      time: '11:00 AM EST',
      duration: '75 minutes',
      category: 'Cybersecurity',
      tags: ['Security', 'AI', 'Threats', 'Protection'],
      featured: true,
      color: 'from-red-500 to-orange-500',
      spots: '50 remaining',
      type: 'Expert Panel',
      thumbnail: '/webinars/cybersecurity-ai-era.jpg'
    },
    {
      title: 'Digital Transformation Workshop: Complete Guide',
      description: 'Step-by-step guide to successful digital transformation implementation. Learn from real-world case studies and expert insights.',
      host: 'Digital Transformation Team',
      date: '2024-03-01',
      time: '9:00 AM EST',
      duration: '120 minutes',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'Strategy', 'Implementation', 'Workshop'],
      featured: false,
      color: 'from-green-500 to-emerald-500',
      spots: '25 remaining',
      type: 'Interactive Workshop',
      thumbnail: '/webinars/digital-transformation-workshop.jpg'
    },
    {
      title: 'Quantum Computing for Business Leaders',
      description: 'Understand the business implications of quantum computing and how to prepare your organization for the quantum future.',
      host: 'Dr. James Kim',
      date: '2024-03-05',
      time: '1:00 PM EST',
      duration: '60 minutes',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Business', 'Strategy', 'Future'],
      featured: false,
      color: 'from-indigo-500 to-purple-500',
      spots: '80 remaining',
      type: 'Executive Briefing',
      thumbnail: '/webinars/quantum-computing-business.jpg'
    },
    {
      title: 'IoT and Edge Computing: Real-World Applications',
      description: 'Explore practical applications of IoT and edge computing across industries. See how organizations are leveraging these technologies for competitive advantage.',
      host: 'IoT Solutions Team',
      date: '2024-03-10',
      time: '10:00 AM EST',
      duration: '90 minutes',
      category: 'IoT & Edge Computing',
      tags: ['IoT', 'Edge Computing', 'Applications', 'Case Studies'],
      featured: false,
      color: 'from-emerald-500 to-green-500',
      spots: '60 remaining',
      type: 'Technical Deep-Dive',
      thumbnail: '/webinars/iot-edge-applications.jpg'
    }
  ];

  const categories = [
    { name: 'All', count: webinars.length, active: true },
    { name: 'AI & Machine Learning', count: webinars.filter(w => w.category === 'AI & Machine Learning').length, active: false },
    { name: 'Cloud & DevOps', count: webinars.filter(w => w.category === 'Cloud & DevOps').length, active: false },
    { name: 'Cybersecurity', count: webinars.filter(w => w.category === 'Cybersecurity').length, active: false },
    { name: 'Digital Transformation', count: webinars.filter(w => w.category === 'Digital Transformation').length, active: false },
    { name: 'Quantum Computing', count: webinars.filter(w => w.category === 'Quantum Computing').length, active: false },
    { name: 'IoT & Edge Computing', count: webinars.filter(w => w.category === 'IoT & Edge Computing').length, active: false }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars, workshops, and learning sessions. Gain insights into AI, cybersecurity, cloud computing, and emerging technologies from industry experts."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert-Led
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent"> Learning</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our live webinars, workshops, and expert panels to learn from industry leaders 
              about the latest trends in technology and business transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Request Custom Session
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.name
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-orange-500/10 hover:text-orange-400 border border-slate-600'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Sessions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and highly anticipated webinars and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWebinars.filter(w => w.featured).map((webinar, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                </div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Video className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    webinar.type === 'Live Webinar' ? 'bg-blue-500/20 text-blue-400' :
                    webinar.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                    webinar.type === 'Expert Panel' ? 'bg-purple-500/20 text-purple-400' :
                    webinar.type === 'Interactive Workshop' ? 'bg-orange-500/20 text-orange-400' :
                    webinar.type === 'Executive Briefing' ? 'bg-indigo-500/20 text-indigo-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {webinar.type}
                  </span>
                  <span className="text-sm text-gray-400">{webinar.spots}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{webinar.title}</h3>
                <p className="text-gray-300 mb-6">{webinar.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>Hosted by {webinar.host}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{webinar.date} at {webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{webinar.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {webinar.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Webinars */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Upcoming Sessions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete calendar of webinars, workshops, and learning events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.map((webinar, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${webinar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Video className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    webinar.type === 'Live Webinar' ? 'bg-blue-500/20 text-blue-400' :
                    webinar.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                    webinar.type === 'Expert Panel' ? 'bg-purple-500/20 text-purple-400' :
                    webinar.type === 'Interactive Workshop' ? 'bg-orange-500/20 text-orange-400' :
                    webinar.type === 'Executive Briefing' ? 'bg-indigo-500/20 text-indigo-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {webinar.type}
                  </span>
                  <span className="text-xs text-gray-400">{webinar.spots}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{webinar.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{webinar.description}</p>
                
                <div className="space-y-2 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>{webinar.host}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{webinar.date} • {webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{webinar.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {webinar.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300 text-sm">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Sessions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access recordings and materials from our previous webinars and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI in Healthcare: Current State and Future Outlook',
                host: 'Dr. Sarah Chen',
                date: '2024-01-15',
                duration: '75 minutes',
                views: 2847,
                category: 'AI & Machine Learning'
              },
              {
                title: 'Cybersecurity Best Practices for Remote Work',
                host: 'Security Team',
                date: '2024-01-10',
                duration: '60 minutes',
                views: 2156,
                category: 'Cybersecurity'
              },
              {
                title: 'Cloud Migration Strategies and Best Practices',
                host: 'Cloud Architecture Team',
                date: '2024-01-05',
                duration: '90 minutes',
                views: 1892,
                category: 'Cloud & DevOps'
              }
            ].map((webinar, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-500 to-slate-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{webinar.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{webinar.category}</p>
                
                <div className="space-y-2 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>{webinar.host}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-3 h-3" />
                    <span>{webinar.views.toLocaleString()} views</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700 text-white font-medium rounded-lg transition-all duration-300 text-sm">
                  Watch Recording
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with New Sessions
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get notified about upcoming webinars, workshops, 
              and learning opportunities delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Learning Sessions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team can create custom webinars, workshops, and training sessions 
              tailored to your organization's specific needs and challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Request Custom Session
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
