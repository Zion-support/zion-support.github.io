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
<<<<<<< HEAD
  Share2,
  Eye
} from 'lucide-react';

=======
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

>>>>>>> cursor/add-new-services-and-advertise-them-650b
export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPast, setShowPast] = useState(false);
  const [expandedWebinar, setExpandedWebinar] = useState<number | null>(null);

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Target, count: 0 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: TrendingUp, count: 0 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 0 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 0 }
=======
  const categories: Category[] = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 4 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 3 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart, count: 2 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 1 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 1 }
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
<<<<<<< HEAD
      title: 'Zero-Trust Security: Implementation Strategies for 2025',
      description: 'Learn practical strategies for implementing zero-trust security architecture in your organization.',
      category: 'cybersecurity',
      type: 'upcoming',
      date: '2025-02-20T15:00:00Z',
      duration: '45 min',
      speakers: ['Alex Thompson', 'Dr. James Wilson'],
      maxAttendees: 300,
      currentAttendees: 189,
=======
      title: 'Next-Generation Cybersecurity: AI-Powered Threat Detection',
      description: 'Explore cutting-edge cybersecurity solutions that leverage artificial intelligence for proactive threat detection and automated response.',
      category: 'cybersecurity',
      type: 'upcoming',
      date: '2025-02-15T13:00:00Z',
      duration: '90 min',
      speakers: ['Jennifer Kim', 'Cybersecurity Experts', 'AI Security Team'],
      maxAttendees: 500,
      currentAttendees: 342,
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      featured: false,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Automated Response'],
      thumbnail: '/images/webinars/ai-cybersecurity-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
<<<<<<< HEAD
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'AI Ethics in Enterprise: Building Responsible AI Systems',
      category: 'ai-ml',
      speaker: 'Dr. James Wilson, AI Ethics Specialist',
      date: '2024-01-15',
      time: '14:00 EST',
      duration: '75 minutes',
      attendees: 380,
      maxAttendees: 400,
      summary: 'Comprehensive guide to implementing ethical AI practices in enterprise environments.',
      tags: ['AI Ethics', 'Responsible AI', 'Enterprise', 'Governance'],
      registrationUrl: null,
      watchUrl: '/webinars/ai-ethics-enterprise/watch',
      isLive: false
    },
    {
      id: 5,
      title: 'Cybersecurity Threat Intelligence: Staying Ahead of Attacks',
      category: 'cybersecurity',
      speaker: 'Rachel Green, Threat Intelligence Lead',
      date: '2024-01-22',
      time: '15:00 EST',
      duration: '90 minutes',
      attendees: 420,
      maxAttendees: 450,
      summary: 'Advanced threat intelligence strategies for proactive cybersecurity defense.',
      tags: ['Threat Intelligence', 'Cybersecurity', 'Proactive Defense', 'Security'],
      registrationUrl: null,
      watchUrl: '/webinars/cybersecurity-threat-intelligence/watch',
      isLive: false
    },
    {
      id: 6,
      title: 'Digital Twin Technology: ROI and Implementation Strategies',
      category: 'digital-transformation',
      speaker: 'David Kim, Digital Twin Expert',
      date: '2024-02-08',
      time: '14:00 EST',
      duration: '60 minutes',
      attendees: 280,
      maxAttendees: 350,
      summary: 'Explore practical applications of digital twin technology and how to measure return on investment.',
      tags: ['Digital Twin', 'IoT', 'ROI', 'Digital Transformation'],
      registrationUrl: null,
      watchUrl: '/webinars/digital-twin-technology-roi/watch',
      isLive: false
    },
    {
      id: 7,
      title: 'Quantum Computing in Healthcare: Drug Discovery Breakthroughs',
      category: 'quantum-computing',
      speaker: 'Dr. Michael Chang, Quantum Research Lead',
      date: '2024-03-15',
      time: '15:00 EST',
      duration: '90 minutes',
      attendees: 180,
      maxAttendees: 250,
      summary: 'Discover how quantum computing is revolutionizing drug discovery and healthcare research.',
      tags: ['Quantum Computing', 'Healthcare', 'Drug Discovery', 'Research'],
      registrationUrl: null,
      watchUrl: '/webinars/quantum-computing-healthcare/watch',
      isLive: false
    },
    {
      id: 8,
      title: 'Sustainable IT: Green Computing Strategies for Enterprise',
      category: 'sustainability',
      speaker: 'Lisa Park, Sustainability Director',
      date: '2024-03-22',
      time: '14:00 EST',
      duration: '60 minutes',
      attendees: 220,
      maxAttendees: 300,
      summary: 'Learn practical strategies for implementing sustainable IT practices and reducing carbon footprint.',
      tags: ['Sustainability', 'Green IT', 'Enterprise', 'Carbon Footprint'],
      registrationUrl: null,
      watchUrl: '/webinars/sustainable-it-enterprise/watch',
      isLive: false
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    }
  ];

  const allWebinars = [...upcomingWebinars, ...pastWebinars];
  const displayedWebinars = showPast ? allWebinars : upcomingWebinars;

<<<<<<< HEAD
  // Update category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = allWebinars.length;
    } else {
      category.count = allWebinars.filter(webinar => webinar.category === category.id).length;
    }
  });

  const filteredWebinars = allWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (webinar.speaker && webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (webinar.description && webinar.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (webinar.summary && webinar.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTimeFilter = showPast ? pastWebinars.includes(webinar) : upcomingWebinars.includes(webinar);
=======
  const filteredWebinars = displayedWebinars.filter(webinar => {
    const matchesSearch = !searchQuery || 
      webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    
    return matchesSearch && matchesCategory;
  });

<<<<<<< HEAD
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

=======
  const toggleWebinarExpansion = (webinarId: number) => {
    setExpandedWebinar(expandedWebinar === webinarId ? null : webinarId);
  };

>>>>>>> cursor/add-new-services-and-advertise-them-650b
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

<<<<<<< HEAD
  const getRegistrationStatus = (webinar: any) => {
    if (webinar.isLive) {
      return { status: 'Live Now', color: 'from-red-500 to-pink-500', icon: Play };
    } else if (webinar.attendees >= webinar.maxAttendees) {
      return { status: 'Full', color: 'from-gray-500 to-slate-500', icon: Users };
    } else if (webinar.watchUrl) {
      return { status: 'Watch Now', color: 'from-blue-500 to-cyan-500', icon: Play };
    } else {
      return { status: 'Register Now', color: 'from-green-500 to-emerald-500', icon: CheckCircle };
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    }
  };

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our live webinars and access recorded sessions on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry experts."
        keywords="webinars, live sessions, AI webinars, cybersecurity webinars, cloud computing, Zion Tech Group"
      />
      
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Video className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Expert Webinars</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Webinars
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. 
                Learn from industry leaders and gain practical insights to transform your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe to Webinars
                </motion.button>
                <a 
                  href="/contact"
                  className="px-8 py-4 border border-purple-400 text-purple-400 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filters */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search webinars, speakers, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Time Filter */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Show:</span>
                <button
                  onClick={() => setShowPast(false)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    !showPast
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setShowPast(true)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    showPast
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Past Webinars
                </button>
              </div>
              
              <div className="text-gray-300">
                {filteredWebinars.length} webinars found
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </div>
            </div>
          </div>
        </section>

        {/* Webinars Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            {filteredWebinars.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
                <p className="text-gray-300">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWebinars.map((webinar, index) => {
                  const registrationStatus = getRegistrationStatus(webinar);
                  
                  return (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="h-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                              <span className="text-purple-400 text-sm font-medium">
                                {getCategoryName(webinar.category)}
                              </span>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${registrationStatus.color}`}>
                              {registrationStatus.status}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-3">
                            {webinar.title}
                          </h3>
                          
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {webinar.summary || webinar.description}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{webinar.attendees || webinar.currentAttendees}/{webinar.maxAttendees}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{webinar.duration}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-3 mb-6 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">Speaker:</span>
                              <span className="text-white">{webinar.speaker || webinar.speakers?.join(', ')}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">Date:</span>
                              <span className="text-white">{formatDate(webinar.date)}</span>
                            </div>
                            {webinar.time && (
                              <div className="flex items-center justify-between">
                                <span className="text-gray-300">Time:</span>
                                <span className="text-white">{webinar.time}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3">Tags:</h4>
                            <div className="flex flex-wrap gap-2">
                              {webinar.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 border border-white/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            {webinar.registrationUrl ? (
                              <a
                                href={webinar.registrationUrl}
                                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-500/80 hover:to-blue-500/80 text-white px-4 py-2 rounded-lg font-semibold text-center inline-flex items-center justify-center"
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Register
                              </a>
                            ) : webinar.watchUrl ? (
                              <a
                                href={webinar.watchUrl}
                                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-500/80 hover:to-blue-500/80 text-white px-4 py-2 rounded-lg font-semibold text-center inline-flex items-center justify-center"
                              >
                                <Play className="w-4 h-4 mr-2" />
                                Watch Now
                              </a>
                            ) : null}
                            
                            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-4 py-2 rounded-lg transition-colors">
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
<<<<<<< HEAD
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
=======
              <p className="text-xl text-gray-300 mb-8">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                Have expertise to share? We're always looking for industry leaders and subject matter experts 
                to present on cutting-edge topics. Let's discuss how we can collaborate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-500/80 hover:to-blue-500/80 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                  <Video className="w-5 h-5 mr-2" />
                  Propose a Webinar
                </button>
                
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View All Webinars
                </button>
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
