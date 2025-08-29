
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Clock3, 
  Users, 
  Play, 
  BookOpen, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Zap,
  Rocket,
  Heart,
  Globe,
  Cpu,
  Leaf,
  Star,
  Target,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Sparkles,
  DollarSign,
  Award,
  Truck,
  Building,
  PenTool,
  Eye,
  Server,
  Lock,
  Settings,
  Key,
  Atom,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  MailIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Webinars: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', count: 24, icon: '🎯' },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8, icon: '🤖' },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6, icon: '🛡️' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', count: 5, icon: '☁️' },
    { id: 'data-analytics', name: 'Data Analytics', count: 3, icon: '📊' },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 2, icon: '🔗' }
  ];

  const featuredWebinars = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence: Transforming Decision Making',
      description: 'Discover how AI is revolutionizing business intelligence and enabling data-driven decision making at unprecedented speeds.',
      category: 'AI & Machine Learning',
      date: '2025-01-15',
      time: '2:00 PM EST',
      duration: '90 minutes',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'AI Research Director',
      attendees: 1250,
      tags: ['AI', 'Business Intelligence', 'Data Science', 'Machine Learning'],
      color: 'from-purple-500 to-pink-500',
      icon: Brain,
      recording: true,
      slides: true
    },
    {
      id: 2,
      title: 'Next-Generation Cybersecurity: AI vs. AI Threats',
      description: 'Explore the cutting-edge of cybersecurity where AI systems battle AI-powered threats in real-time.',
      category: 'Cybersecurity',
      date: '2025-01-20',
      time: '1:00 PM EST',
      duration: '75 minutes',
      speaker: 'Michael Rodriguez',
      speakerTitle: 'Cybersecurity Expert',
      attendees: 980,
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security'],
      color: 'from-red-500 to-orange-500',
      icon: Shield,
      recording: true,
      slides: true
    },
    {
      id: 3,
      title: 'Cloud-Native Architecture: Building for Scale',
      description: 'Learn the principles and practices of building scalable, resilient cloud-native applications.',
      category: 'Cloud & DevOps',
      date: '2025-01-25',
      time: '3:00 PM EST',
      duration: '60 minutes',
      speaker: 'Jennifer Kim',
      speakerTitle: 'Cloud Architect',
      attendees: 750,
      tags: ['Cloud', 'DevOps', 'Architecture', 'Scalability'],
      color: 'from-blue-500 to-cyan-500',
      icon: Cloud,
      recording: false,
      slides: true
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Quantum Computing: The Future of Problem Solving',
      description: 'An in-depth exploration of quantum computing principles and their applications in solving complex problems.',
      category: 'Emerging Tech',
      date: '2024-12-15',
      time: '2:00 PM EST',
      duration: '90 minutes',
      speaker: 'Dr. Alex Thompson',
      speakerTitle: 'Quantum Physicist',
      attendees: 2100,
      tags: ['Quantum Computing', 'Physics', 'Technology', 'Innovation'],
      color: 'from-indigo-500 to-purple-500',
      icon: Atom,
      recording: true,
      slides: true
    },
    {
      id: 5,
      title: 'Sustainable Technology: Green Solutions for Business',
      description: 'Discover how businesses can leverage sustainable technology to reduce environmental impact while improving efficiency.',
      category: 'Sustainability',
      date: '2024-12-10',
      time: '1:00 PM EST',
      duration: '75 minutes',
      speaker: 'Emma Wilson',
      speakerTitle: 'Sustainability Consultant',
      attendees: 890,
      tags: ['Sustainability', 'Green Tech', 'Business', 'Environment'],
      color: 'from-green-500 to-emerald-500',
      icon: Leaf,
      recording: true,
      slides: true
    }
  ];

  const filteredWebinars = [...featuredWebinars, ...pastWebinars].filter(webinar => {
    const matchesCategory = activeCategory === 'all' || webinar.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry leaders and stay ahead of the curve."
        keywords="webinars, AI, cybersecurity, cloud computing, technology education, online learning"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Expert-Led
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Technology Webinars
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join industry experts and thought leaders as they share insights on the latest AI, cybersecurity, 
              cloud computing, and emerging technology trends. Stay ahead of the curve with our comprehensive webinar series.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
              >
                View Upcoming Webinars
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Browse Past Sessions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Webinar</h2>
              <p className="text-gray-300">Search and filter through our extensive collection of technology webinars</p>
            </motion.div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search webinars by title, speaker, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Webinars</h2>
            <p className="text-gray-400">Don't miss these highly anticipated sessions with industry experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                {/* Header */}
                <div className={`h-32 bg-gradient-to-br ${webinar.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <webinar.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">
                      {webinar.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {webinar.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/30 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(webinar.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock3 className="w-3 h-3" />
                      {webinar.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {webinar.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{webinar.speaker}</p>
                      <p className="text-xs text-gray-400">{webinar.speakerTitle}</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 group">
                    <Play className="w-4 h-4" />
                    Register Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      {pastWebinars.length > 0 && (
        <section className="py-16">
          <div className="container-responsive">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Past Webinars
            </h2>
            <div className="space-y-6">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <webinar.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm font-medium rounded-full mb-3">
                            {webinar.category}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                            {webinar.title}
                          </h3>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(webinar.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {webinar.attendees.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4">
                        {webinar.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700/30 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 text-gray-400" />
                        </div>
                        <div className="text-sm text-gray-400">
                          <span className="text-white font-medium">{webinar.speaker}</span> • {webinar.speakerTitle}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {webinar.recording && (
                          <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group">
                            <Play className="w-4 h-4" />
                            Watch Recording
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        )}
                        {webinar.slides && (
                          <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 group">
                            <BookOpen className="w-4 h-4" />
                            Download Slides
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Never Miss a Webinar
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Stay updated with our latest webinars and technology insights. Subscribe to our newsletter 
              and get notified about upcoming sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Subscribe to Newsletter
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                View All Webinars
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Webinars;
