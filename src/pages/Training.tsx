import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
  GraduationCap,
  BookOpen,
  Play,
  Clock,
  User,
  Star,
  Search,
  Filter,
  Calendar,
  Eye,
  Heart,
  Share2,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Server,
  Shield,
  Cloud,
  Target,
  Rocket,
  BarChart3,
  Atom,
  Network,
  Lock,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  FileText,
  Video,
  Globe,
  Phone,
  Mail,
  MapPin,
  Settings,
  Tool,
  Wrench,
  Cog,
  Key,
  Unlock,
  EyeOff,
  Copy,
  Check,
  X,
  Plus,
  Minus,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Bookmark,
  Download,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Archive,
  Tag,
  Hash,
  Database
=======
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  Search, 
  Filter, 
  Play, 
  Download, 
  ExternalLink, 
  ArrowRight, 
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
  Calendar, 
  MapPin, 
  DollarSign, 
  FileText, 
  Lightbulb, 
  Microscope, 
  Rocket, 
  Code, 
  Network, 
  Cpu, 
  Lock, 
  BarChart3, 
  Palette, 
  Smartphone, 
  Eye,
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
  Bookmark,
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
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
} from 'lucide-react';

interface TrainingProgram {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  format: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  instructor: string;
  location: string;
  startDate: string;
  seats: number;
  availableSeats: number;
  tags: string[];
  featured?: boolean;
  popular?: boolean;
  new?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
}

interface Level {
  id: string;
  name: string;
  count: number;
}

interface Format {
  id: string;
  name: string;
  count: number;
}

export default function Training() {
  const [searchQuery, setSearchQuery] = useState('');
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Courses', icon: GraduationCap, count: 89 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 24 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 18 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 16 },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3, count: 14 },
    { id: 'development', name: 'Software Development', icon: Code, count: 12 },
    { id: 'devops', name: 'DevOps & Automation', icon: Server, count: 5 }
  ];

  const levels = [
    { id: 'all', name: 'All Levels', count: 89 },
    { id: 'beginner', name: 'Beginner', count: 32 },
    { id: 'intermediate', name: 'Intermediate', count: 35 },
    { id: 'advanced', name: 'Advanced', count: 22 }
  ];

  const courses = [
    {
      id: 1,
      title: 'AI Fundamentals: From Theory to Practice',
      description: 'Master the fundamentals of artificial intelligence and machine learning with hands-on projects and real-world applications.',
      category: 'ai-ml',
      level: 'beginner',
      instructor: 'Dr. Sarah Chen',
      duration: '8 weeks',
      totalHours: 40,
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      students: 1247,
      featured: true,
      tags: ['AI', 'Machine Learning', 'Python', 'Fundamentals'],
      thumbnail: '/images/courses/ai-fundamentals.jpg',
      certificate: true,
      liveSessions: true,
      projects: 5,
      quizzes: 12,
      abstract: 'This comprehensive course covers the essential concepts of AI and machine learning, providing both theoretical understanding and practical implementation skills.',
      learningOutcomes: [
        'Understand core AI and ML concepts',
        'Implement basic ML algorithms in Python',
        'Build and train neural networks',
        'Deploy ML models in production'
      ],
      curriculum: [
        'Introduction to AI and ML',
        'Python for Data Science',
        'Supervised Learning Algorithms',
        'Neural Networks and Deep Learning',
        'Model Evaluation and Deployment'
      ]
    },
    {
      id: 2,
      title: 'Advanced Machine Learning Engineering',
      description: 'Learn advanced ML engineering practices including MLOps, model deployment, and production-scale machine learning systems.',
      category: 'ai-ml',
      level: 'advanced',
      instructor: 'Alex Johnson',
      duration: '10 weeks',
      totalHours: 60,
      price: 499,
      originalPrice: 599,
      rating: 4.9,
      students: 856,
      featured: true,
      tags: ['MLOps', 'Engineering', 'Production', 'Advanced'],
      thumbnail: '/images/courses/advanced-ml-engineering.jpg',
      certificate: true,
      liveSessions: true,
      projects: 8,
      quizzes: 20,
      abstract: 'Advanced course focusing on production ML systems, covering MLOps, model serving, monitoring, and scaling ML applications.',
      learningOutcomes: [
        'Design production ML pipelines',
        'Implement MLOps best practices',
        'Deploy and monitor ML models',
        'Scale ML systems for enterprise use'
      ],
      curriculum: [
        'MLOps Fundamentals',
        'Model Serving and APIs',
        'Monitoring and Observability',
        'Scaling ML Infrastructure',
        'Security and Compliance'
      ]
    },
    {
      id: 3,
      title: 'Cloud-Native Application Development',
      description: 'Master cloud-native development practices including microservices, containers, and serverless architectures.',
      category: 'cloud',
      level: 'intermediate',
      instructor: 'Jennifer Kim',
      duration: '6 weeks',
      totalHours: 35,
      price: 349,
      originalPrice: 449,
      rating: 4.7,
      students: 1123,
      featured: false,
      tags: ['Cloud', 'Microservices', 'Containers', 'Serverless'],
      thumbnail: '/images/courses/cloud-native-development.jpg',
      certificate: true,
      liveSessions: true,
      projects: 6,
      quizzes: 15,
      abstract: 'Learn to build scalable, resilient applications using modern cloud-native technologies and best practices.',
      learningOutcomes: [
        'Design microservices architectures',
        'Implement containerization strategies',
        'Deploy to cloud platforms',
        'Build serverless applications'
      ],
      curriculum: [
        'Microservices Design',
        'Docker and Containers',
        'Kubernetes Orchestration',
        'Serverless Computing',
        'Cloud Deployment Strategies'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals for Developers',
      description: 'Essential cybersecurity knowledge for developers, covering secure coding practices, threat modeling, and security testing.',
      category: 'security',
      level: 'beginner',
      instructor: 'Michael Rodriguez',
      duration: '5 weeks',
      totalHours: 25,
      price: 249,
      originalPrice: 299,
      rating: 4.6,
      students: 987,
      featured: false,
      tags: ['Security', 'Secure Coding', 'Threat Modeling', 'Testing'],
      thumbnail: '/images/courses/cybersecurity-fundamentals.jpg',
      certificate: true,
      liveSessions: false,
      projects: 4,
      quizzes: 10,
      abstract: 'Comprehensive introduction to cybersecurity concepts and practices specifically designed for software developers.',
      learningOutcomes: [
        'Understand common security vulnerabilities',
        'Implement secure coding practices',
        'Perform threat modeling',
        'Conduct security testing'
      ],
      curriculum: [
        'Security Fundamentals',
        'Common Vulnerabilities',
        'Secure Coding Practices',
        'Threat Modeling',
        'Security Testing'
      ]
    },
    {
      id: 5,
      title: 'Data Engineering and Analytics',
      description: 'Build robust data pipelines and analytics systems using modern data engineering tools and practices.',
      category: 'data',
      level: 'intermediate',
      instructor: 'David Thompson',
      duration: '8 weeks',
      totalHours: 45,
      price: 399,
      originalPrice: 499,
      rating: 4.8,
      students: 756,
      featured: false,
      tags: ['Data Engineering', 'Analytics', 'Pipelines', 'Big Data'],
      thumbnail: '/images/courses/data-engineering-analytics.jpg',
      certificate: true,
      liveSessions: true,
      projects: 7,
      quizzes: 18,
      abstract: 'Learn to design, build, and maintain data pipelines and analytics systems for modern data-driven organizations.',
      learningOutcomes: [
        'Design data architecture',
        'Build ETL/ELT pipelines',
        'Implement data warehousing',
        'Create analytics dashboards'
      ],
      curriculum: [
        'Data Architecture Design',
        'ETL/ELT Pipeline Development',
        'Data Warehousing',
        'Stream Processing',
        'Analytics and Visualization'
      ]
    },
    {
      id: 6,
      title: 'DevOps and CI/CD Mastery',
      description: 'Master DevOps practices including continuous integration, deployment, and infrastructure as code.',
      category: 'devops',
      level: 'intermediate',
      instructor: 'Rachel Green',
      duration: '7 weeks',
      totalHours: 40,
      price: 379,
      originalPrice: 479,
      rating: 4.7,
      students: 634,
      featured: false,
      tags: ['DevOps', 'CI/CD', 'Infrastructure', 'Automation'],
      thumbnail: '/images/courses/devops-cicd-mastery.jpg',
      certificate: true,
      liveSessions: true,
      projects: 6,
      quizzes: 16,
      abstract: 'Comprehensive DevOps course covering modern practices, tools, and methodologies for efficient software delivery.',
      learningOutcomes: [
        'Implement CI/CD pipelines',
        'Manage infrastructure as code',
        'Automate deployment processes',
        'Monitor and optimize systems'
      ],
      curriculum: [
        'DevOps Fundamentals',
        'CI/CD Pipeline Design',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring and Observability'
      ]
    },
    {
      id: 7,
      title: 'Full-Stack Web Development',
      description: 'Learn modern full-stack development using React, Node.js, and cloud technologies.',
      category: 'development',
      level: 'beginner',
      instructor: 'Marcus Chen',
      duration: '12 weeks',
      totalHours: 70,
      price: 449,
      originalPrice: 549,
      rating: 4.8,
      students: 1456,
      featured: false,
      tags: ['Web Development', 'React', 'Node.js', 'Full-Stack'],
      thumbnail: '/images/courses/full-stack-development.jpg',
      certificate: true,
      liveSessions: true,
      projects: 10,
      quizzes: 25,
      abstract: 'Comprehensive full-stack development course covering frontend, backend, and deployment using modern technologies.',
      learningOutcomes: [
        'Build responsive web applications',
        'Develop RESTful APIs',
        'Implement authentication and security',
        'Deploy applications to the cloud'
      ],
      curriculum: [
        'HTML, CSS, and JavaScript',
        'React Frontend Development',
        'Node.js Backend Development',
        'Database Design and APIs',
        'Deployment and DevOps'
      ]
    },
    {
      id: 8,
      title: 'Blockchain Development Fundamentals',
      description: 'Introduction to blockchain technology and smart contract development using Ethereum and Solidity.',
      category: 'development',
      level: 'intermediate',
      instructor: 'Lisa Park',
      duration: '6 weeks',
      totalHours: 30,
      price: 329,
      originalPrice: 399,
      rating: 4.5,
      students: 423,
      featured: false,
      tags: ['Blockchain', 'Smart Contracts', 'Ethereum', 'Solidity'],
      thumbnail: '/images/courses/blockchain-development.jpg',
      certificate: true,
      liveSessions: false,
      projects: 5,
      quizzes: 12,
      abstract: 'Learn blockchain fundamentals and develop smart contracts using Ethereum and Solidity programming language.',
      learningOutcomes: [
        'Understand blockchain technology',
        'Develop smart contracts',
        'Deploy on Ethereum network',
        'Build DApp frontends'
      ],
      curriculum: [
        'Blockchain Fundamentals',
        'Ethereum and Smart Contracts',
        'Solidity Programming',
        'DApp Development',
        'Testing and Deployment'
      ]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-zinc-500/20 text-zinc-400';
    }
  };

  const handleEnroll = (courseId: number, title: string) => {
    // Simulate enrollment
    console.log(`Enrolling in: ${title}`);
    // In a real app, this would open an enrollment form
  };

  const handlePreview = (courseId: number, title: string) => {
    // Simulate preview
    console.log(`Previewing: ${title}`);
    // In a real app, this would show course preview
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Training & Courses
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Master cutting-edge technologies with our expert-led training programs, 
              hands-on projects, and industry-recognized certifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Hands-on Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Certifications</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {levels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name} ({level.count})
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                    : 'bg-zinc-700/50 text-zinc-400 border border-zinc-600 hover:bg-zinc-700/70'
                }`}
              >
                <Grid className="w-4 h-4 mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                    : 'bg-zinc-700/50 text-zinc-400 border border-zinc-600 hover:bg-zinc-700/70'
                }`}
              >
                <List className="w-4 h-4 mx-auto" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-3 bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg hover:bg-zion-cyan/30 transition-colors flex items-center justify-center">
                <GraduationCap className="w-4 h-4 mr-2" />
                My Courses
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-zinc-400"
        >
          Showing {filteredCourses.length} of {courses.length} courses
        </motion.div>
      </div>

      {/* Featured Courses Section */}
      {filteredCourses.filter(c => c.featured).length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Courses</h2>
            <p className="text-zinc-300">Our most popular and highly-rated training programs</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourses.filter(c => c.featured).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-zion-cyan" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-bold text-white">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {course.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-lg mb-6">
                    {course.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-zion-cyan">Learning Outcomes:</h4>
                    <ul className="space-y-2">
                      {course.learningOutcomes.slice(0, 3).map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start space-x-3 text-zinc-300">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-zinc-400">
                      <div>By {course.instructor}</div>
                      <div>{course.duration} • {course.totalHours} hours</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">${course.price}</div>
                      <div className="text-sm text-zinc-400 line-through">${course.originalPrice}</div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleEnroll(course.id, course.title)}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Enroll Now
                    </button>
                    <button
                      onClick={() => handlePreview(course.id, course.title)}
                      className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* All Courses Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">All Courses</h2>
          <p className="text-zinc-300">Browse our complete course catalog</p>
        </motion.div>

        {filteredCourses.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredCourses.map((course, index) => (
  GraduationCap, 


  const toggleCourse = (courseId: string) => {
    const newExpanded = new Set(expandedCourse);
    if (newExpanded.has(courseId)) {
      newExpanded.delete(courseId);
    } else {
      newExpanded.add(courseId);
    }
    setExpandedCourse(newExpanded);
  };

  const trainingCategories = [
    { id: 'all', label: 'All Courses', icon: GraduationCap },
    { id: 'ai', label: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Database },
    { id: 'security', label: 'Cybersecurity', icon: Shield },
    { id: 'data', label: 'Data Analytics', icon: Zap }
  ];

  const courses = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals & Business Applications',
      category: 'ai',
      level: 'Beginner',
      duration: '8 weeks',
      format: 'Online + Live Sessions',
      rating: 4.8,
      students: 1250,
      price: '$1,200',
      description: 'Master the fundamentals of artificial intelligence and learn how to apply AI solutions to real business challenges.',
      modules: [
        'Introduction to AI and Machine Learning',
        'Business Use Cases and ROI Analysis',
        'Data Preparation and Feature Engineering',
        'Model Selection and Training',
        'Deployment and Monitoring',
        'Ethics and Responsible AI'
      ],
      instructor: 'Dr. Sarah Chen',
      nextStart: '2024-02-15',
      certification: true,
      featured: true
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI-Powered Cybersecurity',
      category: 'security',
      level: 'Intermediate',
      duration: '6 weeks',
      format: 'Online + Hands-on Labs',
      rating: 4.9,
      students: 890,
      price: '$1,500',
      description: 'Learn to implement AI-driven security solutions for threat detection, prevention, and response.',
      modules: [
        'AI in Threat Detection',
        'Behavioral Analysis',
        'Automated Incident Response',
        'Security Analytics',
        'Compliance and Governance',
        'Real-world Case Studies'
      ],
      instructor: 'Michael Rodriguez',
      nextStart: '2024-02-20',
      certification: true,
      featured: true
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Strategies',
      category: 'cloud',
      level: 'Intermediate',
      duration: '4 weeks',
      format: 'Online + Project-based',
      rating: 4.7,
      students: 650,
      price: '$900',
      description: 'Develop comprehensive cloud migration strategies for enterprise applications and infrastructure.',
      modules: [
        'Migration Planning and Assessment',
        'Cloud Architecture Design',
        'Data Migration Strategies',
        'Application Modernization',
        'Testing and Validation',
        'Post-migration Optimization'
      ],
      instructor: 'Jennifer Kim',
      nextStart: '2024-03-01',
      certification: true,
      featured: false
    },
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics',
      category: 'data',
      level: 'Advanced',
      duration: '10 weeks',
      format: 'Online + Mentorship',
      rating: 4.9,
      students: 450,
      price: '$2,000',
      description: 'Master advanced data analytics techniques including predictive modeling, statistical analysis, and visualization.',
      modules: [
        'Statistical Analysis Fundamentals',
        'Predictive Modeling Techniques',
        'Data Visualization Best Practices',
        'Big Data Processing',
        'Real-time Analytics',
        'Business Intelligence Implementation'
      ],
      instructor: 'Dr. Robert Thompson',
      nextStart: '2024-03-10',
      certification: true,
      featured: false
    }
  ];

  const trainingPrograms = [
    {
      title: 'Enterprise Training Program',
      description: 'Customized training solutions for large organizations',
      icon: Users,
      features: [
        'Tailored curriculum for your industry',
        'On-site or virtual delivery options',
        'Dedicated training coordinator',
        'Progress tracking and reporting',
        'Post-training support and consultation'
      ],
      duration: '3-12 months',
      participants: '10-500+ employees'
    },
    {
      title: 'Certification Program',
      description: 'Industry-recognized certifications in key technology areas',
      icon: Certificate,
      features: [
        'Comprehensive exam preparation',
        'Practice tests and assessments',
        'Official certification upon completion',
        'Continuing education credits',
        'Professional development tracking'
      ],
      duration: '6-12 months',
      participants: 'Individual professionals'
    },
    {
      title: 'Workshop Series',
      description: 'Intensive hands-on workshops for specific skills',
      icon: Zap,
      features: [
        'Focused skill development',
        'Hands-on practical exercises',
        'Expert-led instruction',
        'Immediate application opportunities',
        'Follow-up support and resources'
      ],
      duration: '1-5 days',
      participants: 'Small groups (5-20)'
    }
  ];

  const filteredCourses = courses.filter(course =>
    (selectedCategory === 'all' || course.category === selectedCategory) &&
    (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
     course.instructor.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <GraduationCap className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Training & Education
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Develop the skills you need to succeed in the digital age. Our comprehensive training programs 
            combine expert instruction with hands-on experience to accelerate your career growth.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for courses, topics, or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {trainingCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.filter(course => course.featured).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className={`bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-zion-cyan/30 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    {course.featured && (
                      <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-zinc-300">{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{course.instructor}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-zinc-400">
                        {course.students} students
                      </span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">${course.price}</div>
                        <div className="text-xs text-zinc-400 line-through">${course.originalPrice}</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEnroll(course.id, course.title)}
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                      >
                        Enroll
                      </button>
                      <button
                        onClick={() => handlePreview(course.id, course.title)}
                        className="px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-all duration-300"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {course.featured && (
                          <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-3">
                            Featured
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-white mb-2">
                          {course.title}
                        </h3>
                        
                        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                          {course.description}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-zinc-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{course.instructor}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration} • {course.totalHours}h</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{course.students} students</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Play className="w-4 h-4" />
                            <span>{course.projects} projects</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {course.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-3 ml-6">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-zinc-300">{course.rating}</span>
                        </div>
                        
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">${course.price}</div>
                          <div className="text-xs text-zinc-400 line-through">${course.originalPrice}</div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEnroll(course.id, course.title)}
                            className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                          >
                            Enroll
                          </button>
                          <button
                            onClick={() => handlePreview(course.id, course.title)}
                            className="px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-all duration-300"
                          >
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center py-16"
          >
            <GraduationCap className="w-16 h-16 text-zinc-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
            <p className="text-zinc-400 mb-6">
              Try adjusting your search terms or browse all categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
=======
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const categories: Category[] = [
    { id: 'all', name: 'All Categories', icon: GraduationCap, count: 37 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 7 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 4 },
    { id: 'strategy', name: 'Digital Strategy', icon: Target, count: 3 },
    { id: 'leadership', name: 'Leadership & Management', icon: Users, count: 4 }
  ];

  const levels: Level[] = [
    { id: 'all', name: 'All Levels', count: 37 },
    { id: 'beginner', name: 'Beginner', count: 12 },
    { id: 'intermediate', name: 'Intermediate', count: 15 },
    { id: 'advanced', name: 'Advanced', count: 8 },
    { id: 'expert', name: 'Expert', count: 2 }
  ];

  const formats: Format[] = [
    { id: 'all', name: 'All Formats', count: 37 },
    { id: 'online', name: 'Online', count: 20 },
    { id: 'in-person', name: 'In-Person', count: 12 },
    { id: 'hybrid', name: 'Hybrid', count: 3 },
    { id: 'self-paced', name: 'Self-Paced', count: 2 }
  ];

  const trainingPrograms: TrainingProgram[] = [
    {
      id: 1,
      title: 'AI Fundamentals & Machine Learning',
      description: 'Master the basics of artificial intelligence and machine learning algorithms with hands-on projects and real-world applications.',
      category: 'ai-ml',
      level: 'beginner',
      format: 'online',
      duration: '8 weeks',
      price: 1299,
      rating: 4.8,
      reviews: 156,
      instructor: 'Dr. Sarah Chen',
      location: 'Online',
      startDate: '2025-02-15',
      seats: 50,
      availableSeats: 23,
      tags: ['AI', 'Machine Learning', 'Python', 'Data Science'],
      featured: true,
      popular: true
    },
    {
      id: 2,
      title: 'Advanced Cybersecurity Operations',
      description: 'Deep dive into advanced cybersecurity techniques, threat hunting, and incident response strategies.',
      category: 'security',
      level: 'advanced',
      format: 'in-person',
      duration: '5 days',
      price: 2499,
      rating: 4.9,
      reviews: 89,
      instructor: 'Michael Rodriguez',
      location: 'San Francisco, CA',
      startDate: '2025-03-10',
      seats: 25,
      availableSeats: 8,
      tags: ['Cybersecurity', 'Threat Hunting', 'Incident Response', 'SOC'],
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Architecture & DevOps',
      description: 'Learn modern cloud architecture patterns and DevOps practices for scalable applications.',
      category: 'cloud',
      level: 'intermediate',
      format: 'hybrid',
      duration: '6 weeks',
      price: 1799,
      rating: 4.7,
      reviews: 134,
      instructor: 'Jennifer Kim',
      location: 'Hybrid (Online + NYC)',
      startDate: '2025-02-20',
      seats: 40,
      availableSeats: 15,
      tags: ['Cloud', 'DevOps', 'AWS', 'Kubernetes'],
      popular: true
    },
    {
      id: 4,
      title: 'Data Science & Business Intelligence',
      description: 'Transform data into actionable insights with advanced analytics and visualization techniques.',
      category: 'data',
      level: 'intermediate',
      format: 'online',
      duration: '10 weeks',
      price: 1599,
      rating: 4.6,
      reviews: 98,
      instructor: 'Dr. Alex Thompson',
      location: 'Online',
      startDate: '2025-02-25',
      seats: 60,
      availableSeats: 32,
      tags: ['Data Science', 'BI', 'SQL', 'Tableau'],
      new: true
    },
    {
      id: 5,
      title: 'Quantum Computing Fundamentals',
      description: 'Explore the revolutionary world of quantum computing and its applications in cryptography and optimization.',
      category: 'emerging',
      level: 'expert',
      format: 'in-person',
      duration: '3 days',
      price: 3999,
      rating: 4.9,
      reviews: 45,
      instructor: 'Dr. Elena Petrov',
      location: 'Boston, MA',
      startDate: '2025-04-05',
      seats: 20,
      availableSeats: 5,
      tags: ['Quantum Computing', 'Cryptography', 'Optimization', 'Physics'],
      featured: true
    },
    {
      id: 6,
      title: 'Digital Transformation Strategy',
      description: 'Develop comprehensive digital transformation strategies for enterprise organizations.',
      category: 'strategy',
      level: 'advanced',
      format: 'online',
      duration: '4 weeks',
      price: 999,
      rating: 4.5,
      reviews: 67,
      instructor: 'David Park',
      location: 'Online',
      startDate: '2025-03-01',
      seats: 35,
      availableSeats: 18,
      tags: ['Digital Transformation', 'Strategy', 'Change Management', 'Innovation']
    }
  ];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = !searchQuery || 
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
    const matchesFormat = activeFormat === 'all' || program.format === activeFormat;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
  });

  const toggleProgramExpansion = (programId: number) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'intermediate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'advanced':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'expert':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'online':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'in-person':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'hybrid':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'self-paced':
        return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <>
      <SEO 
        title="Training & Workshops - Zion Tech Group"
        description="Comprehensive training programs and workshops to upskill your team in AI, cybersecurity, cloud computing, and emerging technologies."
        keywords="training, workshops, AI training, cybersecurity training, cloud computing, data science, Zion Tech Group"
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
                Training &{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Workshops
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Accelerate your team's growth with our comprehensive training programs. 
                From AI fundamentals to advanced cybersecurity, we've got you covered.
              </p>
              
              {/* Search Form */}
              <form className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search training programs, skills, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
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

              {/* Level and Format Filters */}
              <div className="flex items-center gap-4">
                {/* Level Filter */}
                <select
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name} ({level.count})
                    </option>
                  ))}
                </select>

                {/* Format Filter */}
                <select
                  value={activeFormat}
                  onChange={(e) => setActiveFormat(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {formats.map((format) => (
                    <option key={format.id} value={format.id}>
                      {format.name} ({format.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {filteredPrograms.length} Training Programs
                </h2>
                {searchQuery && (
                  <p className="text-gray-400 mt-2">
                    Results for "{searchQuery}"
                  </p>
                )}
              </div>
              <div className="text-gray-400">
                Showing {filteredPrograms.length} of {trainingPrograms.length} total programs
              </div>
            </div>

            {/* Programs Grid */}
            {filteredPrograms.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="p-6">
                      {/* Program Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            {program.featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                Featured
                              </span>
                            )}
                            {program.popular && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                Popular
                              </span>
                            )}
                            {program.new && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                New
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">{program.description}</p>
                        </div>
                      </div>

                      {/* Program Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Instructor:</span>
                          <span className="text-white">{program.instructor}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Duration:</span>
                          <span className="text-white">{program.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Start Date:</span>
                          <span className="text-white">{new Date(program.startDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Available Seats:</span>
                          <span className="text-white">{program.availableSeats}/{program.seats}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {program.tags.length > 3 && (
                          <span className="text-gray-400 text-xs px-2 py-1">
                            +{program.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Level and Format Badges */}
                      <div className="flex items-center gap-2 mb-6">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(program.level)}`}>
                          {program.level.charAt(0).toUpperCase() + program.level.slice(1)}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getFormatColor(program.format)}`}>
                          {program.format.charAt(0).toUpperCase() + program.format.slice(1)}
                        </span>
                      </div>

                      {/* Rating and Price */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{program.rating}</span>
                          <span>({program.reviews})</span>
                        </div>
                        <div className="text-2xl font-bold text-white">
                          ${program.price.toLocaleString()}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Enroll Now
                        </button>
                        <button 
                          onClick={() => toggleProgramExpansion(program.id)}
                          className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors"
                        >
                          {expandedProgram === program.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Expanded Details */}
                      {expandedProgram === program.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-white/10"
                        >
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-white font-semibold mb-2">What You'll Learn:</h4>
                              <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  Hands-on practical experience with real-world projects
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  Industry-recognized certification upon completion
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  Access to exclusive learning resources and materials
                                </li>
                              </ul>
                            </div>
                            
                            <div className="flex gap-3">
                              <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm">
                                <Download className="w-4 h-4 inline mr-2" />
                                Download Brochure
                              </button>
                              <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm">
                                <MessageCircle className="w-4 h-4 inline mr-2" />
                                Contact Instructor
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
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-2">No training programs found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or filters to find the perfect training program.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setActiveLevel('all');
                    setActiveFormat('all');
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
                Need Custom Training for Your Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We offer tailored training programs designed specifically for your organization's needs. 
                Let's discuss how we can help upskill your team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Training
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
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have already transformed their careers with our training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/webinars"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Free Webinars
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        course.category === 'ai' ? 'bg-purple-500/20 text-purple-400' :
                        course.category === 'security' ? 'bg-red-500/20 text-red-400' :
                        course.category === 'cloud' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {course.category.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs font-medium">
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} students
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{course.price}</span>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* All Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">All Courses</h2>
          <div className="space-y-4">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCourse(course.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          course.category === 'ai' ? 'bg-purple-500/20 text-purple-400' :
                          course.category === 'security' ? 'bg-red-500/20 text-red-400' :
                          course.category === 'cloud' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {course.category.toUpperCase()}
                        </span>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs font-medium">
                          {course.level}
                        </span>
                        {course.certification && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">
                            CERTIFIED
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{course.title}</h3>
                      <p className="text-gray-400 text-sm">{course.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students} students
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {course.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{course.price}</div>
                      <div className="text-sm text-gray-400">Next: {course.nextStart}</div>
                    </div>
                    {expandedCourse.has(course.id) ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedCourse.has(course.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Course Modules</h4>
                          <div className="space-y-2">
                            {course.modules.map((module, moduleIndex) => (
                              <div key={moduleIndex} className="flex items-center space-x-2 text-sm">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                <span className="text-gray-300">{module}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Course Details</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Instructor:</span>
                              <span className="text-white">{course.instructor}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Format:</span>
                              <span className="text-white">{course.format}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Next Start:</span>
                              <span className="text-white">{course.nextStart}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Certification:</span>
                              <span className="text-white">{course.certification ? 'Yes' : 'No'}</span>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                              Enroll in Course
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Training Programs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{program.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{program.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Participants:</span>
                    <span className="text-white">{program.participants}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Advance Your Career?</h2>
            <p className="text-gray-300 mb-6">
              Join thousands of professionals who have transformed their careers with our training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Contact Training Team
                <Users className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Training;
