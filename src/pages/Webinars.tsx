import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  ExternalLink,
  ArrowRight,
  Filter,
  Search,
  BookOpen,
  Video,
  MessageCircle,
  Star,
  TrendingUp,
  Lightbulb,
  Target,
  Zap,
  Globe,
  Building,
  Cpu,
  Shield,
  Database,
  Brain,
  Rocket,
  Award,
  Eye,
  Download,
  Share2,
  Heart,
  Bookmark,
  Clock3,
  UserCheck,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  Grid,
  List,
  Filter as FilterIcon,
  SortAsc,
  SortDesc,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Copy,
  Link as LinkIcon,
  Mail,
  Phone,
  MapPin,
  Globe2,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Lock,
  Unlock,
  Key,
  EyeOff,
  EyeOn,
  Camera,
  CameraOff,
  Microphone,
  MicrophoneOff,
  Volume2,
  VolumeX,
  Volume1,
  Volume,
  Mute,
  Unmute,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlaySquare,
  PauseSquare,
  StopSquare,
  PlayButton,
  PauseButton,
  StopButton,
  PlayIcon,
  PauseIcon,
  StopIcon,
  PlayIcon2,
  PauseIcon2,
  StopIcon2,
  PlayIcon3,
  PauseIcon3,
  StopIcon3,
  PlayIcon4,
  PauseIcon4,
  StopIcon4,
  PlayIcon5,
  PauseIcon5,
  StopIcon5,
  PlayIcon6,
  PauseIcon6,
  StopIcon6,
  PlayIcon7,
  PauseIcon7,
  StopIcon7,
  PlayIcon8,
  PauseIcon8,
  StopIcon8,
  PlayIcon9,
  PauseIcon9,
  StopIcon9,
  PlayIcon10,
  PauseIcon10,
  StopIcon10
} from 'lucide-react';

export default function Webinars() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const webinars = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation: A Comprehensive Guide",
      description: "Learn how artificial intelligence is revolutionizing business processes and discover practical strategies for implementing AI solutions in your organization.",
      category: "Artificial Intelligence",
      date: "2025-01-15",
      time: "2:00 PM EST",
      duration: "90 minutes",
      speaker: "Dr. Sarah Chen",
      speakerTitle: "Chief AI Officer",
      company: "Zion Tech Group",
      attendees: 1250,
      rating: 4.8,
      tags: ["AI", "Digital Transformation", "Business Strategy"],
      image: "/images/webinars/ai-transformation.jpg",
      isLive: false,
      isUpcoming: true
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of Quantum Computing",
      description: "Explore the future of cybersecurity as quantum computing becomes a reality. Understand the threats and opportunities for securing your digital assets.",
      category: "Cybersecurity",
      date: "2025-01-22",
      time: "1:00 PM EST",
      duration: "75 minutes",
      speaker: "Michael Rodriguez",
      speakerTitle: "Cybersecurity Expert",
      company: "Zion Tech Group",
      attendees: 980,
      rating: 4.9,
      tags: ["Cybersecurity", "Quantum Computing", "Security"],
      image: "/images/webinars/cybersecurity-quantum.jpg",
      isLive: false,
      isUpcoming: true
    },
    {
      id: 3,
      title: "Cloud-Native Architecture: Best Practices for 2025",
      description: "Discover the latest trends in cloud-native development and learn how to build scalable, resilient applications for the modern cloud landscape.",
      category: "Cloud Computing",
      date: "2025-01-29",
      time: "3:00 PM EST",
      duration: "60 minutes",
      speaker: "Emily Watson",
      speakerTitle: "Cloud Architect",
      company: "Zion Tech Group",
      attendees: 1100,
      rating: 4.7,
      tags: ["Cloud Computing", "Architecture", "Best Practices"],
      image: "/images/webinars/cloud-architecture.jpg",
      isLive: false,
      isUpcoming: true
    },
    {
      id: 4,
      title: "Blockchain Solutions for Enterprise: Real-World Applications",
      description: "Explore practical blockchain implementations in enterprise environments and learn how to leverage this technology for business innovation.",
      category: "Blockchain",
      date: "2025-02-05",
      time: "2:30 PM EST",
      duration: "80 minutes",
      speaker: "David Kim",
      speakerTitle: "Blockchain Specialist",
      company: "Zion Tech Group",
      attendees: 750,
      rating: 4.6,
      tags: ["Blockchain", "Enterprise", "Innovation"],
      image: "/images/webinars/blockchain-enterprise.jpg",
      isLive: false,
      isUpcoming: true
    },
    {
      id: 5,
      title: "Data Analytics and Business Intelligence: Driving Decisions",
      description: "Learn how to transform raw data into actionable insights that drive business decisions and create competitive advantages.",
      category: "Data Analytics",
      date: "2025-02-12",
      time: "1:30 PM EST",
      duration: "70 minutes",
      speaker: "Lisa Thompson",
      speakerTitle: "Data Scientist",
      company: "Zion Tech Group",
      attendees: 1350,
      rating: 4.8,
      tags: ["Data Analytics", "Business Intelligence", "Decision Making"],
      image: "/images/webinars/data-analytics.jpg",
      isLive: false,
      isUpcoming: true
    },
    {
      id: 6,
      title: "IoT Solutions for Smart Cities and Infrastructure",
      description: "Discover how Internet of Things technology is transforming urban infrastructure and creating smarter, more efficient cities.",
      category: "Internet of Things",
      date: "2025-02-19",
      time: "2:00 PM EST",
      duration: "85 minutes",
      speaker: "Robert Johnson",
      speakerTitle: "IoT Solutions Architect",
      company: "Zion Tech Group",
      attendees: 920,
      rating: 4.7,
      tags: ["IoT", "Smart Cities", "Infrastructure"],
      image: "/images/webinars/iot-smart-cities.jpg",
      isLive: false,
      isUpcoming: true
    }
  ];

  const categories = ['all', 'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Blockchain', 'Data Analytics', 'Internet of Things'];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = activeCategory === 'all' || webinar.category === activeCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedWebinars = [...filteredWebinars].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date) - new Date(b.date);
      case 'rating':
        return b.rating - a.rating;
      case 'attendees':
        return b.attendees - a.attendees;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Video className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Expert{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Webinars
=======
import Link from 'next/link';
import { Video, Brain, Cpu, Shield, Zap, Rocket, Building } from 'lucide-react';
export default function Webinars() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const categories = [
        { id: 'all', name: 'All Topics', icon: Video },
        { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
        { id: 'quantum', name: 'Quantum Technology', icon: Cpu },
        { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
        { id: 'cloud', name: 'Cloud & DevOps', icon: Zap },
        { id: 'business', name: 'Business Solutions', icon: Building },
        { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket }
    ];
    const statuses = [
        { id: 'all', name: 'All Webinars' },
        { id: 'upcoming', name: 'Upcoming' },
        { id: 'live', name: 'Live Now' },
        { id: 'recorded', name: 'Recorded' }
    ];
    const Webinars = () => {
        const webinars = [
            {
                title: "AI-Powered Business Transformation",
                date: "March 25, 2024",
                duration: "60 minutes",
                speaker: "Dr. Sarah Chen",
                description: "Learn how AI is revolutionizing business operations and creating new opportunities for growth.",
                category: "AI & Business"
            },
            {
                title: "Cybersecurity Best Practices 2024",
                date: "April 10, 2024",
                duration: "45 minutes",
                speaker: "Michael Rodriguez",
                description: "Essential cybersecurity strategies to protect your business from evolving threats.",
                category: "Security"
            },
            {
                title: "Cloud Migration Strategies",
                date: "April 25, 2024",
                duration: "75 minutes",
                speaker: "David Kim",
                description: "Step-by-step guide to successful cloud migration and optimization.",
                category: "Cloud & DevOps"
            }
        ];
        return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Webinars
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Join industry experts for in-depth discussions on technology trends, 
              best practices, and innovative solutions that drive business transformation.
            </p>
<<<<<<< HEAD
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Upcoming Webinars
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Subscribe to Series
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Webinar
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Search through our extensive library of webinars and filter by category, 
              speaker, or topic to find exactly what you need.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search webinars by title, speaker, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white border border-zion-cyan/20'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </motion.div>

          {/* Sort Options */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <span className="text-zion-slate-light">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="date">Date</option>
                <option value="rating">Rating</option>
                <option value="attendees">Popularity</option>
                <option value="title">Title</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sortedWebinars.map((webinar) => (
              <motion.div 
                key={webinar.id}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Webinar Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <Video className="w-16 h-16 text-zion-cyan" />
                </div>
                
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                      {webinar.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {webinar.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                    {webinar.description}
                  </p>
                  
                  {/* Webinar Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(webinar.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.time} • {webinar.duration}
                    </div>
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.speaker} • {webinar.speakerTitle}
                    </div>
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Building className="w-4 h-4 mr-2" />
                      {webinar.company}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {webinar.attendees.toLocaleString()} attendees
                    </div>
                    <div className="flex items-center text-zion-cyan text-sm">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {webinar.rating}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {webinar.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-zion-blue-dark/50 text-zion-slate-light text-xs rounded-full border border-zion-cyan/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Informed and Inspired
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Subscribe to our webinar series and never miss an opportunity to learn 
              from industry experts and technology leaders. Get notified about upcoming 
              sessions and access to exclusive content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
=======
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {webinars.map((webinar, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{webinar.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                <p className="text-gray-300 mb-4">{webinar.description}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {webinar.date}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {webinar.duration}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    {webinar.speaker}
                  </p>
                </div>
                
                <Link to="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Register Now
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our webinar series and never miss an opportunity to learn 
                from industry experts and technology leaders.
              </p>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
                Subscribe to Webinars
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
<<<<<<< HEAD
          </motion.div>
=======
          </div>
=======
import {CogIcon} from '@heroicons/react/24/outline';

const $page: React.FC = () => {}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400"/>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
            Contact Us for More Information
          </Link>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
=======
};

export default $page;
        </></></>);
    };
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
}
