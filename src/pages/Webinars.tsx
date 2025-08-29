
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
  Search
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
      duration: '60 min',
      speaker: 'David Chen',
      speakerTitle: 'Cloud Solutions Architect',
      speakerAvatar: '/images/speakers/david-chen.jpg',
      featured: false,
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      tags: ['Cloud Native', 'Microservices', 'DevOps', 'Scalability'],
      attendees: 734,
      recording: true,
      slides: true
    },
    {
      id: 'digital-twin-implementation',
      title: 'Digital Twin Implementation: From Concept to Reality',
      description: 'Step-by-step guide to implementing digital twins in manufacturing, healthcare, and smart cities.',
      category: 'IoT & Digital Twins',
      date: '2024-12-03',
      time: '14:30 EST',
      duration: '80 min',
      speaker: 'Dr. Emily Johnson',
      speakerTitle: 'IoT Research Lead',
      speakerAvatar: '/images/speakers/emily-johnson.jpg',
      featured: false,
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      tags: ['Digital Twin', 'IoT', 'Manufacturing', 'Smart Cities'],
      attendees: 623,
      recording: true,
      slides: true
    },
    {
      id: 'ai-healthcare-diagnostics',
      title: 'AI in Healthcare Diagnostics: Clinical Applications',
      description: 'Explore AI applications in medical imaging, disease prediction, and clinical decision support systems.',
      category: 'AI & Healthcare',
      date: '2024-11-30',
      time: '15:00 EST',
      duration: '70 min',
      speaker: 'Dr. Michael Brown',
      speakerTitle: 'Healthcare AI Specialist',
      speakerAvatar: '/images/speakers/michael-brown.jpg',
      featured: false,
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      tags: ['AI Healthcare', 'Medical Imaging', 'Diagnostics', 'Clinical AI'],
      attendees: 445,
      recording: true,
      slides: true
    },
    {
      id: 'blockchain-business-applications',
      title: 'Blockchain Beyond Cryptocurrency: Business Applications',
      description: 'Discover practical blockchain applications in supply chain, identity management, and decentralized finance.',
      category: 'Blockchain & Web3',
      date: '2024-11-28',
      time: '16:30 EST',
      duration: '65 min',
      speaker: 'Lisa Rodriguez',
      speakerTitle: 'Blockchain Solutions Lead',
      speakerAvatar: '/images/speakers/lisa-rodriguez.jpg',
      featured: false,
      icon: Lock,
      color: 'from-orange-500 to-red-500',
      tags: ['Blockchain', 'Supply Chain', 'Identity', 'DeFi'],
      attendees: 567,
      recording: true,
      slides: true
    },
    {
      id: 'edge-computing-iot',
      title: 'Edge Computing & IoT: Real-Time Processing at Scale',
      description: 'Learn about edge computing architectures and IoT deployment strategies for real-time applications.',
      category: 'Edge Computing & IoT',
      date: '2024-11-25',
      time: '14:00 EST',
      duration: '55 min',
      speaker: 'Robert Kim',
      speakerTitle: 'Edge Computing Engineer',
      speakerAvatar: '/images/speakers/robert-kim.jpg',
      featured: false,
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Distributed Systems'],
      attendees: 389,
      recording: true,
      slides: true
    },
    {
      id: 'sustainable-technology-practices',
      title: 'Sustainable Technology: Green Computing Practices',
      description: 'Implement energy-efficient computing, sustainable software development, and ESG technology practices.',
      category: 'Sustainability',
      date: '2024-11-22',
      time: '15:30 EST',
      duration: '60 min',
      speaker: 'Dr. Amanda Green',
      speakerTitle: 'Sustainability Technology Lead',
      speakerAvatar: '/images/speakers/amanda-green.jpg',
      featured: false,
      icon: Target,
      color: 'from-emerald-500 to-green-500',
      tags: ['Sustainability', 'Green Computing', 'ESG', 'Energy Efficiency'],
      attendees: 234,
      recording: true,
      slides: true
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation: Streamlining Business Processes',
      description: 'Learn how to automate complex business workflows using AI and machine learning technologies.',
      category: 'AI & Automation',
      date: '2024-11-20',
      time: '16:00 EST',
      duration: '70 min',
      speaker: 'Chris Anderson',
      speakerTitle: 'Automation Solutions Architect',
      speakerAvatar: '/images/speakers/chris-anderson.jpg',
      featured: false,
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      tags: ['AI Automation', 'Workflow', 'Business Processes', 'ML'],
      attendees: 456,
      recording: true,
      slides: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: webinars.length, active: true },
    { id: 'ai', name: 'AI & Analytics', count: webinars.filter(w => w.category.includes('AI')).length, active: false },
    { id: 'quantum', name: 'Quantum Technology', count: webinars.filter(w => w.category.includes('Quantum')).length, active: false },
    { id: 'security', name: 'Cybersecurity', count: webinars.filter(w => w.category.includes('Cybersecurity')).length, active: false },
    { id: 'cloud', name: 'Cloud & DevOps', count: webinars.filter(w => w.category.includes('Cloud')).length, active: false },
    { id: 'iot', name: 'IoT & Digital Twins', count: webinars.filter(w => w.category.includes('IoT')).length, active: false },
    { id: 'healthcare', name: 'AI & Healthcare', count: webinars.filter(w => w.category.includes('Healthcare')).length, active: false },
    { id: 'blockchain', name: 'Blockchain & Web3', count: webinars.filter(w => w.category.includes('Blockchain')).length, active: false },
    { id: 'edge', name: 'Edge Computing & IoT', count: webinars.filter(w => w.category.includes('Edge')).length, active: false },
    { id: 'sustainability', name: 'Sustainability', count: webinars.filter(w => w.category.includes('Sustainability')).length, active: false },
    { id: 'automation', name: 'AI & Automation', count: webinars.filter(w => w.category.includes('Automation')).length, active: false }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && webinar.category.includes('AI')) ||
      (selectedCategory === 'quantum' && webinar.category.includes('Quantum')) ||
      (selectedCategory === 'security' && webinar.category.includes('Cybersecurity')) ||
      (selectedCategory === 'cloud' && webinar.category.includes('Cloud')) ||
      (selectedCategory === 'iot' && webinar.category.includes('IoT')) ||
      (selectedCategory === 'healthcare' && webinar.category.includes('Healthcare')) ||
      (selectedCategory === 'blockchain' && webinar.category.includes('Blockchain')) ||
      (selectedCategory === 'edge' && webinar.category.includes('Edge')) ||
      (selectedCategory === 'sustainability' && webinar.category.includes('Sustainability')) ||
      (selectedCategory === 'automation' && webinar.category.includes('Automation'));
    
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredWebinars = webinars.filter(webinar => webinar.featured);
  const upcomingWebinars = webinars.filter(webinar => webinar.status === 'upcoming');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, quantum computing, cybersecurity, cloud computing, and emerging technologies"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert-Led Webinars
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Learn from industry leaders about cutting-edge technologies and practical applications
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>{webinars.length} Expert Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Live & Recorded</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Free Resources</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about upcoming webinars, exclusive content, and early access 
              to registration for our most popular sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;
