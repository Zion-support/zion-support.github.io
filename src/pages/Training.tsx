import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Video, 
  Users, 
  Award, 
  Clock, 
  Star, 
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  CheckCircle,
  Zap,
  Brain,
  Rocket,
  Shield,
  Cloud,
  Cpu,
  Globe,
  TrendingUp,
  Building2,
  HeartHandshake,
  Target,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  ShoppingCart,
  Lock,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Scale,
  Car,
  Home,
  Factory,
  City,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

export default function Training() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const trainingCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Master artificial intelligence and machine learning technologies',
      courses: [
        {
          title: 'AI Business Intelligence Fundamentals',
          description: 'Learn the basics of AI-powered business intelligence and analytics',
          duration: '8 hours',
          level: 'Beginner',
          rating: 4.8,
          students: 1250,
          featured: true,
          href: '/training/ai-business-intelligence-fundamentals',
          topics: ['AI Basics', 'Business Intelligence', 'Data Analytics', 'Machine Learning']
        },
        {
          title: 'Advanced AI Implementation',
          description: 'Deep dive into implementing AI solutions in enterprise environments',
          duration: '12 hours',
          level: 'Advanced',
          rating: 4.9,
          students: 890,
          featured: true,
          href: '/training/advanced-ai-implementation',
          topics: ['AI Architecture', 'Enterprise Integration', 'Performance Optimization', 'Scalability']
        },
        {
          title: 'AI Ethics & Governance',
          description: 'Understanding ethical considerations and governance in AI systems',
          duration: '6 hours',
          level: 'Intermediate',
          rating: 4.7,
          students: 650,
          featured: false,
          href: '/training/ai-ethics-governance',
          topics: ['AI Ethics', 'Governance', 'Compliance', 'Risk Management']
        }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      description: 'Master cloud infrastructure and DevOps practices',
      courses: [
        {
          title: 'Cloud Infrastructure Fundamentals',
          description: 'Essential cloud computing concepts and infrastructure management',
          duration: '10 hours',
          level: 'Beginner',
          rating: 4.8,
          students: 980,
          featured: true,
          href: '/training/cloud-infrastructure-fundamentals',
          topics: ['Cloud Computing', 'Infrastructure', 'Scalability', 'Security']
        },
        {
          title: 'DevOps Pipeline Mastery',
          description: 'Build and optimize CI/CD pipelines for modern applications',
          duration: '14 hours',
          level: 'Intermediate',
          rating: 4.9,
          students: 720,
          featured: true,
          href: '/training/devops-pipeline-mastery',
          topics: ['CI/CD', 'Automation', 'Deployment', 'Monitoring']
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      description: 'Learn modern cybersecurity practices and threat prevention',
      courses: [
        {
          title: 'Cybersecurity Fundamentals',
          description: 'Core cybersecurity concepts and best practices',
          duration: '8 hours',
          level: 'Beginner',
          rating: 4.8,
          students: 1100,
          featured: true,
          href: '/training/cybersecurity-fundamentals',
          topics: ['Security Basics', 'Threat Prevention', 'Risk Assessment', 'Compliance']
        },
        {
          title: 'Advanced Threat Detection',
          description: 'Advanced techniques for detecting and responding to cyber threats',
          duration: '12 hours',
          level: 'Advanced',
          rating: 4.9,
          students: 580,
          featured: false,
          href: '/training/advanced-threat-detection',
          topics: ['Threat Intelligence', 'Incident Response', 'Forensics', 'Advanced Analytics']
        }
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      description: 'Explore cutting-edge technologies and future innovations',
      courses: [
        {
          title: 'Quantum Computing Basics',
          description: 'Introduction to quantum computing principles and applications',
          duration: '6 hours',
          level: 'Beginner',
          rating: 4.7,
          students: 450,
          featured: false,
          href: '/training/quantum-computing-basics',
          topics: ['Quantum Mechanics', 'Quantum Algorithms', 'Applications', 'Future Trends']
        },
        {
          title: 'Blockchain & Web3',
          description: 'Understanding blockchain technology and Web3 applications',
          duration: '8 hours',
          level: 'Intermediate',
          rating: 4.8,
          students: 680,
          featured: true,
          href: '/training/blockchain-web3',
          topics: ['Blockchain', 'Smart Contracts', 'DeFi', 'Web3']
        }
      ]
    }
  ];

  const featuredCourses = [
    {
      title: 'AI Business Intelligence Fundamentals',
      description: 'Learn the basics of AI-powered business intelligence and analytics',
      category: 'AI & Machine Learning',
      duration: '8 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 1250,
      href: '/training/ai-business-intelligence-fundamentals',
      image: '/images/training/ai-bi-course.jpg'
    },
    {
      title: 'Cloud Infrastructure Fundamentals',
      description: 'Essential cloud computing concepts and infrastructure management',
      category: 'Cloud & DevOps',
      duration: '10 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 980,
      href: '/training/cloud-infrastructure-fundamentals',
      image: '/images/training/cloud-course.jpg'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Core cybersecurity concepts and best practices',
      category: 'Cybersecurity',
      duration: '8 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 1100,
      href: '/training/cybersecurity-fundamentals',
      image: '/images/training/cybersecurity-course.jpg'
    }
  ];

  const learningPaths = [
    {
      title: 'AI Developer Path',
      description: 'Complete path to become an AI developer',
      duration: '40 hours',
      courses: 6,
      level: 'Beginner to Advanced',
      href: '/training/paths/ai-developer',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Architect Path',
      description: 'Master cloud architecture and design',
      duration: '50 hours',
      courses: 8,
      level: 'Intermediate to Advanced',
      href: '/training/paths/cloud-architect',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Expert Path',
      description: 'Become a cybersecurity professional',
      duration: '45 hours',
      courses: 7,
      level: 'Beginner to Advanced',
      href: '/training/paths/cybersecurity-expert',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const filteredCategories = trainingCategories.filter(category =>
    selectedCategory === 'all' || category.id === selectedCategory
  );

  const allCourses = filteredCategories.flatMap(category => 
    category.courses.filter(course =>
      selectedLevel === 'all' || course.level === selectedLevel
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Training & Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master cutting-edge technologies with our comprehensive training programs designed for professionals
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Training Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300"
              >
                View Course Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start your learning journey with our most popular and comprehensive courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={course.href}
                  className="block bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full overflow-hidden"
                >
                  {/* Course Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center relative">
                    <GraduationCap className="w-16 h-16 text-cyan-400" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-cyan-400 text-white text-xs rounded-full font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full">
                        {course.category}
                      </span>
                      <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white">{course.rating}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 lg:py-24 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learning Paths
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Structured learning paths to guide you from beginner to expert level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={path.href}
                  className="block p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full text-center"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${path.color} w-fit mx-auto mb-6`}>
                    <path.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {path.description}
                  </p>
                  
                  <div className="space-y-3 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{path.courses} courses</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{path.level}</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="font-medium">Start Learning</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Course Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive course library organized by technology areas
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {trainingCategories.map(category => (
                <option key={category.id} value={category.id}>{category.title}</option>
              ))}
            </select>
            
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.courses
                    .filter(course => selectedLevel === 'all' || course.level === selectedLevel)
                    .map((course) => (
                    <Link
                      key={course.title}
                      to={course.href}
                      className="block p-6 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-700/50 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="px-2 py-1 bg-slate-600/50 text-cyan-400 text-xs rounded-full">
                          {course.level}
                        </span>
                        {course.featured && (
                          <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">
                        {course.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{course.rating}</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of professionals who have already advanced their careers with our training programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Training Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300"
              >
                Request Custom Training
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
