
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Clock, 
  Play, 
  ExternalLink, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Database,
  Globe,
  Rocket,
  Atom,
  Heart,
  Lock,
  TrendingUp,
  Target,
  Zap,
  BookOpen,
  Video,
  Mic,
  Star,
  Clock3,
  MapPin,
  Tag,
  Filter,
  Search,
  Mail
} from 'lucide-react';

const Webinars: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const webinars = [
    {
      id: 'ai-business-intelligence-2024',
      title: 'AI Business Intelligence: Transforming Decision Making in 2024',
      description: 'Learn how AI is revolutionizing business intelligence with real-time analytics, predictive insights, and automated reporting.',
      category: 'AI & Analytics',
      date: '2024-12-15',
      time: '14:00 EST',
      duration: '60 min',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'AI Research Director',
      speakerAvatar: '/images/speakers/sarah-chen.jpg',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Decision Making'],
      attendees: 1247,
      recording: true,
      slides: true
    },
    {
      id: 'quantum-computing-applications',
      title: 'Quantum Computing Applications: Beyond the Hype',
      description: 'Explore practical applications of quantum computing in optimization, cryptography, and machine learning.',
      category: 'Quantum Technology',
      date: '2024-12-10',
      time: '15:30 EST',
      duration: '90 min',
      speaker: 'Dr. James Wilson',
      speakerTitle: 'Quantum Computing Lead',
      speakerAvatar: '/images/speakers/james-wilson.jpg',
      featured: true,
      icon: Atom,
      color: 'from-blue-500 to-indigo-500',
      tags: ['Quantum Computing', 'Optimization', 'Cryptography', 'ML'],
      attendees: 892,
      recording: true,
      slides: true
    },
    {
      id: 'cybersecurity-ai-defense',
      title: 'AI-Powered Cybersecurity: Defending Against Modern Threats',
      description: 'Discover how AI is enhancing cybersecurity with threat detection, automated response, and predictive security.',
      category: 'Cybersecurity',
      date: '2024-12-08',
      time: '13:00 EST',
      duration: '75 min',
      speaker: 'Alex Thompson',
      speakerTitle: 'Cybersecurity Architect',
      speakerAvatar: '/images/speakers/alex-thompson.jpg',
      featured: true,
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Automation'],
      attendees: 1567,
      recording: true,
      slides: true
    },
    {
      id: 'cloud-native-architecture',
      title: 'Building Cloud-Native Applications for Scale',
      description: 'Learn best practices for designing and deploying cloud-native applications with microservices and containers.',
      category: 'Cloud & DevOps',
      date: '2024-12-05',
      time: '16:00 EST',
      duration: '80 min',
      speaker: 'Maria Rodriguez',
      speakerTitle: 'Cloud Architecture Lead',
      speakerAvatar: '/images/speakers/maria-rodriguez.jpg',
      featured: true,
      icon: Cloud,
      color: 'from-green-500 to-teal-500',
      tags: ['Cloud Native', 'Microservices', 'Containers', 'DevOps'],
      attendees: 1034,
      recording: true,
      slides: true
    },
    {
      id: 'data-analytics-revolution',
      title: 'The Data Analytics Revolution: From Insights to Action',
      description: 'Explore cutting-edge data analytics techniques and how they\'re transforming business decision-making processes.',
      category: 'Data & Analytics',
      date: '2024-12-03',
      time: '14:30 EST',
      duration: '70 min',
      speaker: 'Dr. Michael Chang',
      speakerTitle: 'Data Science Director',
      speakerAvatar: '/images/speakers/michael-chang.jpg',
      featured: true,
      icon: Database,
      color: 'from-orange-500 to-red-500',
      tags: ['Data Analytics', 'Business Intelligence', 'Machine Learning', 'Insights'],
      attendees: 1189,
      recording: true,
      slides: true
    },
    {
      id: 'digital-transformation-strategy',
      title: 'Digital Transformation Strategy: A Comprehensive Guide',
      description: 'Master the art of digital transformation with proven strategies, frameworks, and real-world case studies.',
      category: 'Digital Strategy',
      date: '2024-11-30',
      time: '15:00 EST',
      duration: '90 min',
      speaker: 'Jennifer Lee',
      speakerTitle: 'Digital Transformation Consultant',
      speakerAvatar: '/images/speakers/jennifer-lee.jpg',
      featured: true,
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500',
      tags: ['Digital Transformation', 'Strategy', 'Innovation', 'Change Management'],
      attendees: 1456,
      recording: true,
      slides: true
    }
  ];

  const pastWebinars = [
    {
      id: 'ai-ethics-frameworks',
      title: 'AI Ethics Frameworks: Building Responsible AI Systems',
      description: 'Learn about ethical considerations in AI development and implementation.',
      category: 'AI Ethics',
      date: '2024-11-25',
      speaker: 'Dr. Emily Watson',
      speakerTitle: 'AI Ethics Researcher',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Compliance'],
      attendees: 876,
      recording: true,
      slides: true
    },
    {
      id: 'blockchain-business-applications',
      title: 'Blockchain in Business: Real-World Applications',
      description: 'Discover practical blockchain applications beyond cryptocurrency.',
      category: 'Blockchain',
      date: '2024-11-20',
      speaker: 'David Kim',
      speakerTitle: 'Blockchain Solutions Architect',
      icon: Lock,
      color: 'from-indigo-500 to-purple-500',
      tags: ['Blockchain', 'Business Applications', 'Supply Chain', 'Smart Contracts'],
      attendees: 654,
      recording: true,
      slides: true
    }
  ];

  const categories = [
    { name: 'all', count: webinars.length, icon: Globe },
    { name: 'AI & Analytics', count: webinars.filter(w => w.category === 'AI & Analytics').length, icon: Brain },
    { name: 'Quantum Technology', count: webinars.filter(w => w.category === 'Quantum Technology').length, icon: Atom },
    { name: 'Cybersecurity', count: webinars.filter(w => w.category === 'Cybersecurity').length, icon: Shield },
    { name: 'Cloud & DevOps', count: webinars.filter(w => w.category === 'Cloud & DevOps').length, icon: Cloud },
    { name: 'Data & Analytics', count: webinars.filter(w => w.category === 'Data & Analytics').length, icon: Database },
    { name: 'Digital Strategy', count: webinars.filter(w => w.category === 'Digital Strategy').length, icon: Rocket }
  ];

  const featuredWebinars = webinars.filter(webinar => webinar.featured);
  
  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and digital transformation. Gain insights from industry leaders and stay ahead of technology trends."
        keywords="webinars, AI, cybersecurity, cloud computing, digital transformation, technology training, expert insights"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert-Led <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Webinars</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join industry experts and thought leaders for in-depth discussions on cutting-edge technologies, 
              best practices, and emerging trends that are shaping the future of business and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <Video className="w-5 h-5" />
                Browse All Webinars
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <Mic className="w-5 h-5" />
                Become a Speaker
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search webinars by title, description, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.name
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name} ({category.count})
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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

      {/* All Webinars */}
      {filteredWebinars.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">All Webinars</h2>
              <p className="text-gray-400">Explore our complete collection of webinars and training sessions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group bg-slate-800/30 border border-slate-700/30 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50"
                >
                  {/* Header */}
                  <div className={`h-24 bg-gradient-to-br ${webinar.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-3 right-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${webinar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <webinar.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-3 text-sm line-clamp-2">
                      {webinar.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(webinar.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {webinar.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 text-gray-400" />
                      </div>
                      <div className="text-xs">
                        <p className="text-white font-medium">{webinar.speaker}</p>
                        <p className="text-gray-400">{webinar.speakerTitle}</p>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 text-sm">
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
      )}

      {/* Past Webinars */}
      {pastWebinars.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
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
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Expand Your Knowledge?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who are already learning from our expert-led webinars. 
              Stay ahead of the curve with cutting-edge insights and practical knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <Calendar className="w-5 h-5" />
                View Upcoming Webinars
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <Mail className="w-5 h-5" />
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Webinars;
