import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  Download, 
  Search, 
  Filter, 
  Star, 
  ExternalLink, 
  ArrowRight, 
  BookOpen, 
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
  Eye,
  Share2,
  Heart,
  Rocket,
  ChevronDown,
  ChevronUp,
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

interface Webinar {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'upcoming' | 'past';
  date: string;
  duration: string;
  speakers: string[];
  maxAttendees: number;
  currentAttendees: number;
  featured?: boolean;
  tags: string[];
  thumbnail: string;
  registrationRequired: boolean;
  recordingAvailable: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
}

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPast, setShowPast] = useState(false);
  const [expandedWebinar, setExpandedWebinar] = useState<number | null>(null);

  const categories: Category[] = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 4 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 3 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart, count: 2 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 1 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 1 }
  ];

  const upcomingWebinars: Webinar[] = [
    {
      id: 1,
      title: 'AI Autonomous Research Assistant: Revolutionizing Business Intelligence',
      description: 'Discover how our revolutionary AI Autonomous Research Assistant is transforming how businesses gather, analyze, and synthesize information across multiple sources.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-10T14:00:00Z',
      duration: '75 min',
      speakers: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'AI Research Team'],
      maxAttendees: 600,
      currentAttendees: 487,
      featured: true,
      tags: ['AI Research', 'Autonomous Systems', 'Business Intelligence', 'Innovation'],
      thumbnail: '/images/webinars/ai-autonomous-research-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 2,
      title: 'AI Supply Chain Optimization: Reducing Costs by Up to 30%',
      description: 'Learn how AI-powered supply chain optimization can predict demand, optimize inventory, and reduce costs significantly for your organization.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-12T15:00:00Z',
      duration: '60 min',
      speakers: ['Michael Rodriguez', 'Supply Chain Experts', 'AI Implementation Team'],
      maxAttendees: 400,
      currentAttendees: 298,
      featured: true,
      tags: ['Supply Chain', 'AI Optimization', 'Cost Reduction', 'Predictive Analytics'],
      thumbnail: '/images/webinars/ai-supply-chain-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 3,
      title: 'Next-Generation Cybersecurity: AI-Powered Threat Detection',
      description: 'Explore cutting-edge cybersecurity solutions that leverage artificial intelligence for proactive threat detection and automated response.',
      category: 'cybersecurity',
      type: 'upcoming',
      date: '2025-02-15T13:00:00Z',
      duration: '90 min',
      speakers: ['Jennifer Kim', 'Cybersecurity Experts', 'AI Security Team'],
      maxAttendees: 500,
      currentAttendees: 342,
      featured: false,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Automated Response'],
      thumbnail: '/images/webinars/ai-cybersecurity-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Building Scalable Applications',
      description: 'Master the principles of cloud-native architecture and learn how to design applications that scale automatically and are resilient to failures.',
      category: 'cloud-devops',
      type: 'upcoming',
      date: '2025-02-18T16:00:00Z',
      duration: '75 min',
      speakers: ['David Park', 'Cloud Architects', 'DevOps Engineers'],
      maxAttendees: 350,
      currentAttendees: 215,
      featured: false,
      tags: ['Cloud Native', 'Microservices', 'Scalability', 'DevOps'],
      thumbnail: '/images/webinars/cloud-native-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    }
  ];

  const pastWebinars: Webinar[] = [
    {
      id: 5,
      title: 'Digital Transformation in Healthcare: AI-Powered Patient Care',
      description: 'Learn how healthcare organizations are leveraging AI and digital technologies to improve patient outcomes and operational efficiency.',
      category: 'healthcare-tech',
      type: 'past',
      date: '2025-01-20T14:00:00Z',
      duration: '60 min',
      speakers: ['Dr. Elena Petrov', 'Healthcare IT Leaders', 'AI Healthcare Team'],
      maxAttendees: 450,
      currentAttendees: 450,
      featured: false,
      tags: ['Healthcare', 'Digital Transformation', 'AI', 'Patient Care'],
      thumbnail: '/images/webinars/healthcare-digital-2025.jpg',
      registrationRequired: false,
      recordingAvailable: true
    },
    {
      id: 6,
      title: 'Quantum Computing: The Future of Problem Solving',
      description: 'Explore the revolutionary potential of quantum computing and its applications in cryptography, optimization, and scientific research.',
      category: 'quantum-computing',
      type: 'past',
      date: '2025-01-15T15:00:00Z',
      duration: '90 min',
      speakers: ['Dr. Alex Thompson', 'Quantum Physicists', 'Research Team'],
      maxAttendees: 300,
      currentAttendees: 300,
      featured: true,
      tags: ['Quantum Computing', 'Cryptography', 'Optimization', 'Research'],
      thumbnail: '/images/webinars/quantum-computing-2025.jpg',
      registrationRequired: false,
      recordingAvailable: true
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green IT Solutions for Enterprises',
      description: 'Discover how organizations can reduce their carbon footprint while maintaining high performance through sustainable technology practices.',
      category: 'sustainability',
      type: 'past',
      date: '2025-01-10T13:00:00Z',
      duration: '60 min',
      speakers: ['Lisa Wang', 'Sustainability Experts', 'Green IT Team'],
      maxAttendees: 400,
      currentAttendees: 400,
      featured: false,
      tags: ['Sustainability', 'Green IT', 'Carbon Footprint', 'Enterprise'],
      thumbnail: '/images/webinars/sustainable-tech-2025.jpg',
      registrationRequired: false,
      recordingAvailable: true
    }
  ];

  const allWebinars = [...upcomingWebinars, ...pastWebinars];
  const displayedWebinars = showPast ? allWebinars : upcomingWebinars;

  const filteredWebinars = displayedWebinars.filter(webinar => {
    const matchesSearch = !searchQuery || 
      webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleWebinarExpansion = (webinarId: number) => {
    setExpandedWebinar(expandedWebinar === webinarId ? null : webinarId);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeUntil = (dateString: string) => {
    const now = new Date();
    const webinarDate = new Date(dateString);
    const diffTime = webinarDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Past';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks`;
    return `${Math.ceil(diffDays / 30)} months`;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'cybersecurity':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'cloud-devops':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'digital-transformation':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'healthcare-tech':
        return 'text-pink-400 bg-pink-400/10 border-pink-400/20';
      case 'quantum-computing':
        return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20';
      case 'sustainability':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our live webinars and access recorded sessions on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry experts."
        keywords="webinars, live sessions, AI webinars, cybersecurity webinars, cloud computing, Zion Tech Group"
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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Live{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Webinars
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Join our expert-led webinars on cutting-edge technologies. 
                From AI breakthroughs to cybersecurity insights, stay ahead of the curve.
              </p>
              
              {/* Search Form */}
              <form className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search webinars, topics, or speakers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
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

              {/* View Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
                  <button
                    onClick={() => setShowPast(false)}
                    className={`px-4 py-2 rounded-md transition-all duration-300 ${
                      !showPast
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setShowPast(true)}
                    className={`px-4 py-2 rounded-md transition-all duration-300 ${
                      showPast
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    All Webinars
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webinars Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {showPast ? 'All Webinars' : 'Upcoming Webinars'}
                </h2>
                {searchQuery && (
                  <p className="text-gray-400 mt-2">
                    Results for "{searchQuery}"
                  </p>
                )}
              </div>
              <div className="text-gray-400">
                Showing {filteredWebinars.length} of {displayedWebinars.length} webinars
              </div>
            </div>

            {/* Webinars Grid */}
            {filteredWebinars.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWebinars.map((webinar, index) => (
                  <motion.div
                    key={webinar.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="p-6">
                      {/* Webinar Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            {webinar.featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                Featured
                              </span>
                            )}
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(webinar.category)}`}>
                              {categories.find(c => c.id === webinar.category)?.name}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">{webinar.description}</p>
                        </div>
                      </div>

                      {/* Webinar Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Date & Time:</span>
                          <span className="text-white">{formatDate(webinar.date)}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Duration:</span>
                          <span className="text-white">{webinar.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Speakers:</span>
                          <span className="text-white">{webinar.speakers.length} speaker{webinar.speakers.length !== 1 ? 's' : ''}</span>
                        </div>
                        {webinar.type === 'upcoming' && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Attendees:</span>
                            <span className="text-white">{webinar.currentAttendees}/{webinar.maxAttendees}</span>
                          </div>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {webinar.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {webinar.tags.length > 3 && (
                          <span className="text-gray-400 text-xs px-2 py-1">
                            +{webinar.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Time Until */}
                      {webinar.type === 'upcoming' && (
                        <div className="mb-6">
                          <div className="text-center">
                            <span className="text-sm text-gray-400">Starts in</span>
                            <div className="text-2xl font-bold text-cyan-400">
                              {getTimeUntil(webinar.date)}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {webinar.type === 'upcoming' ? (
                          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Register Now
                          </button>
                        ) : (
                          <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                            <Play className="w-4 h-4" />
                            Watch Recording
                          </button>
                        )}
                        <button 
                          onClick={() => toggleWebinarExpansion(webinar.id)}
                          className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors"
                        >
                          {expandedWebinar === webinar.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Expanded Details */}
                      {expandedWebinar === webinar.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-white/10"
                        >
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-white font-semibold mb-2">Speakers:</h4>
                              <ul className="space-y-1 text-sm text-gray-300">
                                {webinar.speakers.map((speaker, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    {speaker}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex gap-3">
                              {webinar.type === 'upcoming' ? (
                                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm">
                                  <Calendar className="w-4 h-4 inline mr-2" />
                                  Add to Calendar
                                </button>
                              ) : (
                                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm">
                                  <Download className="w-4 h-4 inline mr-2" />
                                  Download Slides
                                </button>
                              )}
                              <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm">
                                <Share2 className="w-4 h-4 inline mr-2" />
                                Share
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📺</div>
                <h3 className="text-2xl font-bold text-white mb-2">No webinars found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or filters to find the perfect webinar.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
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
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have expertise to share? We're always looking for industry leaders and subject matter experts 
                to present on cutting-edge topics. Let's discuss how we can collaborate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Propose a Webinar
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  📞 Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
