import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Search, 
  Filter,
  Star,
  Clock,
  User,
  Calendar,
  Tag,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Brain,
  Shield,
  Cpu,
  Database,
  Cloud,
  Zap,
  Target,
  TrendingUp,
  Lightbulb,
  Award,
  Eye,
  MessageCircle,
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
  Globe,
  Building,
  Rocket,
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
export default function WhitePapers() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation: A Comprehensive Guide for Enterprise Leaders",
      category: "Digital Transformation",
      date: "2025-01-10",
      author: "Dr. Sarah Chen",
      description: "Explore how artificial intelligence is revolutionizing business operations and driving digital transformation across industries. This comprehensive guide provides actionable insights for enterprise leaders.",
      topics: ["AI", "Digital Transformation", "Business Strategy", "Enterprise"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "45 min read",
      pageCount: 28,
      downloads: 2847,
      rating: 4.8
    },
    {
      id: 2,
      title: "Quantum Computing in Cybersecurity: Next-Generation Threat Detection",
      category: "Cybersecurity",
      date: "2024-12-15",
      author: "Dr. James Wilson",
      description: "Explore how quantum computing is transforming cybersecurity, from quantum-resistant cryptography to advanced threat detection algorithms.",
      topics: ["Quantum Computing", "Cybersecurity", "Cryptography", "Threat Detection"],
      downloadUrl: "#",
      isPremium: true,
      readTime: "60 min read",
      pageCount: 35,
      downloads: 1923,
      rating: 4.9
    },
    {
      id: 3,
      title: "Autonomous AI Systems: Ethical Considerations and Implementation Guidelines",
      category: "AI Ethics",
      date: "2024-11-20",
      author: "Dr. Emily Watson",
      description: "A deep dive into the ethical considerations surrounding autonomous AI systems, with practical guidelines for responsible implementation.",
      topics: ["AI Ethics", "Autonomous Systems", "Responsible AI", "Implementation"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "40 min read",
      pageCount: 22,
      downloads: 1654,
      rating: 4.7
    },
    {
      id: 4,
      title: "Cloud-Native Architecture: Building Scalable and Resilient Systems",
      category: "Cloud & Infrastructure",
      date: "2024-10-25",
      author: "David Kim",
      description: "Learn the principles of cloud-native architecture and how to design systems that are scalable, resilient, and cost-effective.",
      topics: ["Cloud Architecture", "Scalability", "Resilience", "Cost Optimization"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "35 min read",
      pageCount: 25,
      downloads: 2156,
      rating: 4.6
    },
    {
      id: 5,
      title: "Machine Learning Operations (MLOps): Best Practices for Production AI",
      category: "AI & Machine Learning",
      date: "2024-09-30",
      author: "Marcus Rodriguez",
      description: "Comprehensive guide to MLOps, covering model deployment, monitoring, and maintenance in production environments.",
      topics: ["MLOps", "Model Deployment", "Production AI", "Monitoring"],
      downloadUrl: "#",
      isPremium: true,
      readTime: "50 min read",
      pageCount: 30,
      downloads: 1892,
      rating: 4.8
    },
    {
      id: 6,
      title: "Zero-Trust Security Architecture: Implementation and Best Practices",
      category: "Cybersecurity",
      date: "2024-08-15",
      author: "Alex Thompson",
      description: "Detailed implementation guide for zero-trust security architecture, including practical examples and best practices.",
      topics: ["Zero-Trust", "Security Architecture", "Implementation", "Best Practices"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "30 min read",
      pageCount: 20,
      downloads: 2341,
      rating: 4.7
    }
  ];
  const categories = [
    { name: "All", count: 6, active: true },
    { name: "AI & Machine Learning", count: 2, active: false },
    { name: "Cybersecurity", count: 2, active: false },
    { name: "Digital Transformation", count: 1, active: false },
    { name: "Cloud & Infrastructure", count: 1, active: false },
    { name: "AI Ethics", count: 1, active: false }
  ];
  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = activeCategory === 'all' || paper.category === activeCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const sortedWhitePapers = [...filteredWhitePapers].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'rating':
        return b.rating - a.rating;
      case 'downloads':
        return b.downloads - a.downloads;
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
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              White{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Papers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive collection of research papers, technical documents, 
              and industry insights on cutting-edge technology trends and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Papers
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Subscribe to Updates
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
              Find Your Perfect Research Paper
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Search through our extensive library of white papers and filter by category, 
              author, or topic to find exactly what you need.
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
                placeholder="Search white papers by title, author, or topic..."
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
                key={category.name}
                onClick={() => setActiveCategory(category.name === 'All' ? 'all' : category.name)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === (category.name === 'All' ? 'all' : category.name)
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white border border-zion-cyan/20'
                }`}
              >
                {category.name} ({category.count})
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
                <option value="downloads">Popularity</option>
                <option value="title">Title</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>
      {/* White Papers Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sortedWhitePapers.map((paper) => (
              <motion.div 
                key={paper.id}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Paper Header */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                      {paper.category}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {paper.title}
                  </h3>
                  {/* Description */}
                  <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                    {paper.description}
                  </p>
                  {/* Paper Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {paper.author}
                    </div>
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(paper.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {paper.readTime} • {paper.pageCount} pages
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloads.toLocaleString()} downloads
                    </div>
                    <div className="flex items-center text-zion-cyan text-sm">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {paper.rating}
                    </div>
                  </div>
                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.topics.slice(0, 3).map((topic, index) => (
                      <span key={index} className="px-2 py-1 bg-zion-blue-dark/50 text-zion-slate-light text-xs rounded-full border border-zion-cyan/20">
                        {topic}
                      </span>
                    ))}
                    {paper.topics.length > 3 && (
                      <span className="px-2 py-1 bg-zion-blue-dark/50 text-zion-slate-light text-xs rounded-full border border-zion-cyan/20">
                        +{paper.topics.length - 3} more
                      </span>
                    )}
                  </div>
                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                    <Download className="w-4 h-4" />
                    Download Paper
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
              Stay Informed with Latest Research
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Subscribe to our white paper updates and never miss the latest research, 
              insights, and technical documentation from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe to Updates
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
