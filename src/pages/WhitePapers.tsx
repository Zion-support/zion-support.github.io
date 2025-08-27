import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';
import { FileText, Download, Calendar, User, BookOpen, Brain, Atom, Shield, Wifi, Leaf, Cloud, BarChart3 } from 'lucide-react';

interface WhitePaper {
	id: number;
	title: string;
	description: string;
	category: string;
	date: string;
	author: string;
	downloads: string;
	tags: string[];
	pdfUrl: string;
}

const WhitePapers: React.FC = () => {
	const whitePapers: WhitePaper[] = [
		{
			id: 1,
			title: 'AI-Powered Business Transformation: A Comprehensive Guide',
			description: 'Explore how artificial intelligence is revolutionizing business operations and creating new opportunities for growth and innovation.',
			category: 'AI & Business',
			date: 'March 2024',
			author: 'Dr. Sarah Chen',
			downloads: '2,500+',
			tags: ['AI', 'Digital Transformation', 'Business Strategy'],
			pdfUrl: '#',
		},
		{
			id: 2,
			title: 'Cybersecurity in the Digital Age: Threats and Solutions',
			description: 'Comprehensive analysis of modern cybersecurity challenges and effective defense strategies for enterprises.',
			category: 'Security',
			date: 'February 2024',
			author: 'Alex Thompson',
			downloads: '1,800+',
			tags: ['Cybersecurity', 'Threat Defense', 'Enterprise Security'],
			pdfUrl: '#',
		},
		{
			id: 3,
			title: 'Cloud Migration Strategies: Best Practices and Implementation',
			description: 'Step-by-step guide to successful cloud migration with real-world case studies and optimization techniques.',
			category: 'Cloud & DevOps',
			date: 'January 2024',
			author: 'David Kim',
			downloads: '3,200+',
			tags: ['Cloud Computing', 'Migration', 'DevOps'],
			pdfUrl: '#',
		},
		{
			id: 4,
			title: 'Quantum Computing: Applications in Enterprise Technology',
			description: 'Understanding quantum computing\'s potential impact on business operations and future technology trends.',
			category: 'Emerging Tech',
			date: 'December 2023',
			author: 'Prof. Michael Rodriguez',
			downloads: '1,600+',
			tags: ['Quantum Computing', 'Enterprise', 'Technology'],
			pdfUrl: '#',
		},
		{
			id: 5,
			title: 'Edge Computing and IoT: Building the Connected Future',
			description: 'Comprehensive guide to edge computing infrastructure and IoT integration for smart city and industrial applications.',
			category: 'Edge Computing',
			date: 'November 2023',
			author: 'Dr. Emily Watson',
			downloads: '1,654',
			tags: ['Edge Computing', 'IoT', 'Smart Cities'],
			pdfUrl: '#',
		},
		{
			id: 6,
			title: 'Blockchain Technology: Beyond Cryptocurrency',
			description: 'Exploring blockchain applications in supply chain, healthcare, and enterprise systems.',
			category: 'Blockchain',
			date: 'October 2023',
			author: 'David Kim',
			downloads: '2,341',
			tags: ['Blockchain', 'Supply Chain', 'Enterprise'],
			pdfUrl: '#',
		},
	];

	const categories = [
		'All Categories',
		'AI & Business',
		'Security',
		'Cloud & DevOps',
		'Emerging Tech',
		'Edge Computing',
		'Blockchain',
		'Green IT',
		'Data Analytics',
	];

	const [selectedCategory, setSelectedCategory] = useState('All Categories');
	const [searchQuery, setSearchQuery] = useState('');

	const filteredPapers = whitePapers.filter((paper) => {
		const matchesCategory = selectedCategory === 'All Categories' || paper.category === selectedCategory;
		const matchesSearch =
			paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			paper.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
		return matchesCategory && matchesSearch;
	});

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			{/* Hero Section */}
			<section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<div className="mb-8">
						<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
							<FileText className="w-4 h-4 mr-2" />
							Research & Insights
						</div>
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
							White
							<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Papers</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
							Access our comprehensive research papers and technical documentation to stay ahead of technology trends and industry insights.
						</p>
					</div>

					{/* Search Bar */}
					<div className="max-w-md mx-auto mb-8">
						<input
							type="text"
							placeholder="Search white papers..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full px-4 py-3 bg-slate-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
						/>
					</div>

					{/* Categories Filter */}
					<div className="flex flex-wrap gap-4 justify-center">
						{categories.map((category, index) => (
							<button
								key={index}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
									selectedCategory === category
										? 'bg-blue-600 text-white'
										: 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* White Papers Grid */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{filteredPapers.length === 0 ? (
						<div className="text-center py-16">
							<BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
							<p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredPapers.map((paper) => (
								<div key={paper.id} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
									<div className="flex items-center justify-between mb-4">
										<span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
											{paper.category}
										</span>
										<div className="flex items-center text-gray-400 text-sm">
											<Download className="w-4 h-4 mr-1" />
											{paper.downloads}
										</div>
									</div>

									<h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{paper.title}</h3>

									<p className="text-gray-300 mb-4 line-clamp-3">{paper.description}</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{paper.tags.map((tag, idx) => (
											<span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs">
												{tag}
											</span>
										))}
									</div>

									<div className="flex items-center justify-between text-sm text-gray-400 mb-4">
										<div className="flex items-center">
											<User className="w-4 h-4 mr-1" />
											{paper.author}
										</div>
										<div className="flex items-center">
											<Calendar className="w-4 h-4 mr-1" />
											{paper.date}
										</div>
									</div>

									<a
										href={paper.pdfUrl}
										className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
									>
										<Download className="w-4 h-4 mr-2" />
										Download PDF
									</a>
								</div>
							))}
						</div>
					)}
				</div>
			</section>

			{/* Featured Research */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Research Areas</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Explore our key research domains and stay informed about the latest technology trends and innovations.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{ name: 'Artificial Intelligence', icon: Brain },
							{ name: 'Quantum Computing', icon: Atom },
							{ name: 'Cybersecurity', icon: Shield },
							{ name: 'Edge Computing', icon: Wifi },
							{ name: 'Blockchain', icon: Link },
							{ name: 'Green IT', icon: Leaf },
							{ name: 'Cloud Computing', icon: Cloud },
							{ name: 'Data Analytics', icon: BarChart3 },
						].map((category, index) => (
							<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<category.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-white">{category.name}</h3>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Informed with Our Research</h2>
					<p className="text-xl text-gray-300 mb-8">
						Get access to cutting-edge research and insights that can transform your business and technology strategy.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/contact"
							className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
						>
							Request Custom Research
						</Link>
						<Link
							to="/resources"
							className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
						>
							View All Resources
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default WhitePapers;
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
