import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap,
  BookOpen,
  Play,
  Clock,
  Users,
  Star,
  TrendingUp,
  Award,
  Certificate,
  ChevronRight,
  Search,
  Filter,
  Grid,
  List,
  Calendar,
  MapPin,
  User,
  CheckCircle,
  ArrowRight,
  Download,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Video,
  FileText,
  Code,
  Brain,
  Cloud,
  Shield,
  Zap,
  Database,
  Lock,
  Rocket,
  Target,
  Clock3,
  DollarSign,
  Tag,
  Building,
  Users2,
  Lightbulb,
  TargetIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Training() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [selectedLevel, setSelectedLevel] = React.useState('all');

  const trainingCategories = [
    { id: 'all', name: 'All Training', count: 45, color: 'from-cyan-500 to-blue-600' },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 12, color: 'from-purple-500 to-pink-600' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', count: 8, color: 'from-blue-500 to-cyan-600' },
    { id: 'security', name: 'Cybersecurity', count: 6, color: 'from-red-500 to-orange-600' },
    { id: 'data', name: 'Data & Analytics', count: 7, color: 'from-green-500 to-emerald-600' },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 5, color: 'from-indigo-500 to-purple-600' },
    { id: 'leadership', name: 'Leadership & Strategy', count: 4, color: 'from-yellow-500 to-orange-600' },
    { id: 'technical', name: 'Technical Skills', count: 3, color: 'from-slate-500 to-gray-600' }
  ];

  const skillLevels = [
    { id: 'all', name: 'All Levels', color: 'from-slate-500 to-gray-600' },
    { id: 'beginner', name: 'Beginner', color: 'from-green-500 to-emerald-600' },
    { id: 'intermediate', name: 'Intermediate', color: 'from-yellow-500 to-orange-600' },
    { id: 'advanced', name: 'Advanced', color: 'from-red-500 to-pink-600' },
    { id: 'expert', name: 'Expert', color: 'from-purple-500 to-indigo-600' }
  ];

  const trainingPrograms = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals & Machine Learning',
      category: 'ai-ml',
      level: 'beginner',
      description: 'Master the basics of artificial intelligence and machine learning with hands-on projects and real-world applications.',
      duration: '8 weeks',
      hours: 120,
      students: 2847,
      rating: 4.9,
      price: 1299,
      originalPrice: 1599,
      featured: true,
      instructor: 'Dr. Sarah Chen',
      instructorTitle: 'AI Research Director',
      instructorAvatar: '/images/instructors/sarah-chen.jpg',
      startDate: 'Jan 15, 2025',
      format: 'Online',
      certificate: true,
      tags: ['Python', 'TensorFlow', 'Neural Networks', 'Data Science'],
      modules: [
        'Introduction to AI & ML',
        'Python for Data Science',
        'Machine Learning Algorithms',
        'Deep Learning Fundamentals',
        'Natural Language Processing',
        'Computer Vision Basics',
        'AI Ethics & Responsible AI',
        'Capstone Project'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud Architecture & DevOps Engineering',
      category: 'cloud-devops',
      level: 'intermediate',
      description: 'Learn to design scalable cloud architectures and implement DevOps practices for modern software development.',
      duration: '10 weeks',
      hours: 150,
      students: 1923,
      rating: 4.8,
      price: 1499,
      originalPrice: 1899,
      featured: true,
      instructor: 'Mike Rodriguez',
      instructorTitle: 'Cloud Solutions Architect',
      instructorAvatar: '/images/instructors/mike-rodriguez.jpg',
      startDate: 'Jan 20, 2025',
      format: 'Hybrid',
      certificate: true,
      tags: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'CI/CD'],
      modules: [
        'Cloud Computing Fundamentals',
        'AWS & Azure Services',
        'Containerization & Orchestration',
        'Infrastructure as Code',
        'CI/CD Pipeline Design',
        'Monitoring & Observability',
        'Security & Compliance',
        'Performance Optimization',
        'Disaster Recovery',
        'Capstone Project'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'cybersecurity-mastery',
      title: 'Cybersecurity Mastery Program',
      category: 'security',
      level: 'advanced',
      description: 'Comprehensive cybersecurity training covering threat detection, incident response, and security architecture.',
      duration: '12 weeks',
      hours: 180,
      students: 1456,
      rating: 4.9,
      price: 1799,
      originalPrice: 2199,
      featured: false,
      instructor: 'David Kim',
      instructorTitle: 'Chief Security Officer',
      instructorAvatar: '/images/instructors/david-kim.jpg',
      startDate: 'Jan 25, 2025',
      format: 'Online',
      certificate: true,
      tags: ['Threat Intelligence', 'Penetration Testing', 'Zero Trust', 'Compliance'],
      modules: [
        'Security Fundamentals',
        'Network Security',
        'Application Security',
        'Threat Intelligence',
        'Incident Response',
        'Penetration Testing',
        'Security Architecture',
        'Compliance & Governance',
        'Emerging Threats',
        'Security Operations',
        'Digital Forensics',
        'Capstone Project'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & Analytics',
      category: 'data',
      level: 'intermediate',
      description: 'Build robust data pipelines and analytics solutions for modern business intelligence and decision making.',
      duration: '9 weeks',
      hours: 135,
      students: 1678,
      rating: 4.7,
      price: 1399,
      originalPrice: 1699,
      featured: false,
      instructor: 'Lisa Wang',
      instructorTitle: 'Data Engineering Lead',
      instructorAvatar: '/images/instructors/lisa-wang.jpg',
      startDate: 'Feb 1, 2025',
      format: 'Online',
      certificate: true,
      tags: ['Big Data', 'Apache Spark', 'Data Warehousing', 'ETL', 'Analytics'],
      modules: [
        'Data Engineering Fundamentals',
        'Big Data Technologies',
        'Data Pipeline Design',
        'Data Warehousing',
        'ETL & Data Integration',
        'Stream Processing',
        'Data Quality & Governance',
        'Business Intelligence',
        'Machine Learning Integration',
        'Capstone Project'
      ],
      icon: Database,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Leadership',
      category: 'digital-transformation',
      level: 'expert',
      description: 'Lead successful digital transformation initiatives with strategic planning and change management expertise.',
      duration: '6 weeks',
      hours: 90,
      students: 892,
      rating: 4.9,
      price: 1999,
      originalPrice: 2499,
      featured: true,
      instructor: 'Dr. James Wilson',
      instructorTitle: 'Digital Strategy Consultant',
      instructorAvatar: '/images/instructors/james-wilson.jpg',
      startDate: 'Feb 10, 2025',
      format: 'Hybrid',
      certificate: true,
      tags: ['Strategy', 'Change Management', 'Innovation', 'Leadership'],
      modules: [
        'Digital Strategy Development',
        'Change Management',
        'Innovation & Disruption',
        'Technology Assessment',
        'Organizational Design',
        'Stakeholder Management',
        'Risk Management',
        'Success Metrics',
        'Capstone Project'
      ],
      icon: Rocket,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'technical-leadership',
      title: 'Technical Leadership & Team Management',
      category: 'leadership',
      level: 'advanced',
      description: 'Develop leadership skills for technical teams, project management, and strategic technical decision making.',
      duration: '8 weeks',
      hours: 120,
      students: 1234,
      rating: 4.8,
      price: 1599,
      originalPrice: 1999,
      featured: false,
      instructor: 'Alex Thompson',
      instructorTitle: 'VP of Engineering',
      instructorAvatar: '/images/instructors/alex-thompson.jpg',
      startDate: 'Feb 15, 2025',
      format: 'Online',
      certificate: true,
      tags: ['Leadership', 'Project Management', 'Team Building', 'Communication'],
      modules: [
        'Technical Leadership Fundamentals',
        'Team Building & Management',
        'Project Management',
        'Strategic Planning',
        'Communication & Influence',
        'Conflict Resolution',
        'Performance Management',
        'Innovation Leadership',
        'Capstone Project'
      ],
      icon: Users2,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const upcomingWebinars = [
    {
      title: 'AI in Healthcare: Opportunities & Challenges',
      date: 'Dec 15, 2024',
      time: '2:00 PM PST',
      duration: '90 min',
      instructor: 'Dr. Sarah Chen',
      attendees: 156,
      featured: true,
      description: 'Explore the latest AI applications in healthcare and discuss ethical considerations and implementation challenges.',
      category: 'ai-ml'
    },
    {
      title: 'Cloud Security Best Practices Workshop',
      date: 'Dec 18, 2024',
      time: '10:00 AM PST',
      duration: '120 min',
      instructor: 'Mike Rodriguez',
      attendees: 89,
      featured: false,
      description: 'Hands-on workshop covering cloud security fundamentals, threat modeling, and security automation.',
      category: 'cloud-devops'
    },
    {
      title: 'Digital Transformation Success Stories',
      date: 'Dec 20, 2024',
      time: '1:00 PM PST',
      duration: '60 min',
      instructor: 'Dr. James Wilson',
      attendees: 234,
      featured: true,
      description: 'Learn from successful digital transformation initiatives across different industries and company sizes.',
      category: 'digital-transformation'
    }
  ];

  const learningPaths = [
    {
      title: 'AI & ML Career Path',
      description: 'Complete path from beginner to AI expert',
      duration: '6 months',
      courses: 8,
      level: 'Beginner to Expert',
      color: 'from-purple-500 to-pink-600',
      icon: Brain,
      featured: true
    },
    {
      title: 'Cloud & DevOps Engineer',
      description: 'Become a certified cloud and DevOps professional',
      duration: '8 months',
      courses: 10,
      level: 'Intermediate to Advanced',
      color: 'from-blue-500 to-cyan-600',
      icon: Cloud,
      featured: false
    },
    {
      title: 'Cybersecurity Specialist',
      description: 'Master cybersecurity and become a security expert',
      duration: '10 months',
      courses: 12,
      level: 'Intermediate to Expert',
      color: 'from-red-500 to-orange-600',
      icon: Shield,
      featured: false
    },
    {
      title: 'Data Science Professional',
      description: 'Complete data science and analytics training',
      duration: '7 months',
      courses: 9,
      level: 'Beginner to Advanced',
      color: 'from-green-500 to-emerald-600',
      icon: Database,
      featured: false
    }
  ];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || program.level === selectedLevel;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'text-green-400 bg-green-400/10';
      case 'intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'advanced': return 'text-orange-400 bg-orange-400/10';
      case 'expert': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Comprehensive training programs, courses, and certification paths in AI, cloud computing, cybersecurity, and digital transformation. Advance your career with expert-led training."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Training &
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Certification
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advance your career with expert-led training programs in AI, cloud computing, cybersecurity, and digital transformation
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search training programs, courses, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">45+</div>
                <div className="text-slate-400 text-sm">Training Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15K+</div>
                <div className="text-slate-400 text-sm">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-slate-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-slate-400 text-sm">Expert Instructors</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Learning Paths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Learning Path</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Structured learning paths designed to take you from beginner to expert in your chosen field
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  path.featured 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {path.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured Path</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center`}>
                    <path.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{path.title}</h3>
                    <p className="text-slate-400 text-sm">{path.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {path.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {path.courses} courses
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    {path.level}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Explore Path
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filters and View Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Training Programs</h2>
              <p className="text-slate-400">Find the perfect training program for your career goals</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-purple-500 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-purple-500 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {trainingCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {skillLevels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trainingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedCategory === category.id
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-slate-700 hover:border-slate-600 bg-slate-800/30'
                }`}
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-3`}>
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-medium text-white mb-1">{category.name}</div>
                <div className="text-xs text-slate-400">{category.count} programs</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Training Programs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={program.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  program.featured 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {program.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured Program</span>
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{program.description}</p>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}>
                        {program.level}
                      </span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {program.duration}
                      </span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <Clock3 className="w-3 h-3" />
                        {program.hours}h
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Modules:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.modules.slice(0, 6).map((module, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {module}
                      </div>
                    ))}
                    {program.modules.length > 6 && (
                      <div className="text-xs text-slate-500 col-span-2">
                        +{program.modules.length - 6} more modules
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={program.instructorAvatar}
                      alt={program.instructor}
                      className="w-8 h-8 rounded-full bg-slate-700"
                    />
                    <div>
                      <div className="text-sm font-medium text-white">{program.instructor}</div>
                      <div className="text-xs text-slate-400">{program.instructorTitle}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{formatPrice(program.price)}</div>
                    <div className="text-sm text-slate-400 line-through">{formatPrice(program.originalPrice)}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {program.students.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {program.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {program.startDate}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium">
                    Enroll Now
                  </button>
                  <button className="py-3 px-4 border border-slate-600 text-slate-300 rounded-lg hover:border-slate-500 hover:text-white transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button className="py-3 px-4 border border-slate-600 text-slate-300 rounded-lg hover:border-slate-500 hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Webinars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Upcoming Webinars</h2>
              <p className="text-slate-400">Free live sessions with industry experts</p>
            </div>
            <Link
              to="/webinars"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All Webinars
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <div
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  webinar.featured 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {webinar.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured Webinar</span>
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">{webinar.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{webinar.description}</p>
                  
                  <div className="space-y-2 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {webinar.date} at {webinar.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {webinar.instructor}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {webinar.attendees} registered
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium">
                  Register Free
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with our expert-led training programs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Browse All Programs
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Certificate className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Certifications</h3>
              <p className="text-slate-400 text-sm">Earn recognized certifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Instructors</h3>
              <p className="text-slate-400 text-sm">Learn from industry leaders</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Career Growth</h3>
              <p className="text-slate-400 text-sm">Advance your professional path</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
