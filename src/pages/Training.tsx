import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  Award, 
  Play, 
  Download, 
  ExternalLink, 
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Globe,
  Zap,
  Brain,
  Cloud,
  Shield,
  Cpu,
  Network,
  BarChart3,
  Code,
  Database,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Settings,
  Palette,
  Rocket,
  Target,
  TrendingUp,
  Lightbulb,
  Briefcase,
  UserCheck,
  FileText,
  Video,
  Headphones,
  Bookmark,
  Share2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Training: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const trainingCategories = [
    {
      id: 'all',
      name: 'All Training',
      icon: GraduationCap,
      color: 'from-blue-600 to-cyan-600',
      count: '50+'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      count: '15+'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      count: '12+'
    },
    {
      id: 'security',
      name: 'Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      count: '10+'
    },
    {
      id: 'quantum',
      name: 'Quantum Tech',
      icon: Cpu,
      color: 'from-indigo-600 to-purple-600',
      count: '8+'
    },
    {
      id: 'iot-edge',
      name: 'IoT & Edge',
      icon: Network,
      color: 'from-yellow-600 to-orange-600',
      count: '5+'
    }
  ];

  const skillLevels = [
    { id: 'all', name: 'All Levels', color: 'from-gray-500 to-slate-500' },
    { id: 'beginner', name: 'Beginner', color: 'from-green-500 to-emerald-500' },
    { id: 'intermediate', name: 'Intermediate', color: 'from-blue-500 to-cyan-500' },
    { id: 'advanced', name: 'Advanced', color: 'from-purple-500 to-pink-500' },
    { id: 'expert', name: 'Expert', color: 'from-red-500 to-orange-500' }
  ];

  const featuredCourses = [
    {
      title: 'AI Business Intelligence Masterclass',
      description: 'Learn to implement AI-powered business intelligence solutions',
      category: 'AI Services',
      level: 'Intermediate',
      duration: '8 weeks',
      format: 'Online',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 1250,
      price: '$1,299',
      originalPrice: '$1,599',
      features: ['Live Sessions', 'Project Portfolio', 'Certificate', '1-on-1 Mentoring'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/training/ai-business-intelligence'
    },
    {
      title: 'Cloud Migration & DevOps Excellence',
      description: 'Master cloud migration strategies and DevOps best practices',
      category: 'Cloud & DevOps',
      level: 'Advanced',
      duration: '10 weeks',
      format: 'Hybrid',
      instructor: 'Mike Rodriguez',
      rating: 4.8,
      students: 980,
      price: '$1,499',
      originalPrice: '$1,899',
      features: ['Hands-on Labs', 'Real Projects', 'Industry Certification', 'Career Support'],
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      link: '/training/cloud-migration-devops'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Design and implement comprehensive zero trust security frameworks',
      category: 'Security',
      level: 'Expert',
      duration: '6 weeks',
      format: 'Online',
      instructor: 'Alex Thompson',
      rating: 4.9,
      students: 750,
      price: '$1,199',
      originalPrice: '$1,399',
      features: ['Security Lab Access', 'Compliance Training', 'Expert Certification', 'Network Access'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/training/zero-trust-security'
    },
    {
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles and applications',
      category: 'Quantum Tech',
      level: 'Beginner',
      duration: '4 weeks',
      format: 'Online',
      instructor: 'Dr. Emily Watson',
      rating: 4.7,
      students: 2100,
      price: '$799',
      originalPrice: '$999',
      features: ['Interactive Simulations', 'Quantum Lab Access', 'Foundation Certificate', 'Community Access'],
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      link: '/training/quantum-computing-fundamentals'
    }
  ];

  const trainingPrograms = [
    {
      title: 'AI Solutions Architect',
      description: 'Comprehensive program to become an AI solutions architect',
      duration: '6 months',
      format: 'Hybrid',
      level: 'Advanced to Expert',
      modules: 12,
      projects: 8,
      certification: 'AI Solutions Architect Professional',
      price: '$4,999',
      originalPrice: '$6,499',
      features: [
        'Comprehensive AI curriculum',
        'Real-world project portfolio',
        'Industry expert mentorship',
        'Career placement support',
        'Lifetime access to resources'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/training/programs/ai-solutions-architect'
    },
    {
      title: 'Cloud & DevOps Engineering',
      description: 'Full-stack cloud and DevOps engineering program',
      duration: '8 months',
      format: 'Hybrid',
      level: 'Intermediate to Advanced',
      modules: 15,
      projects: 10,
      certification: 'Cloud & DevOps Engineering Professional',
      price: '$5,499',
      originalPrice: '$6,999',
      features: [
        'Multi-cloud expertise',
        'DevOps automation mastery',
        'Infrastructure as code',
        'Performance optimization',
        'Industry best practices'
      ],
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      link: '/training/programs/cloud-devops-engineering'
    },
    {
      title: 'Cybersecurity Leadership',
      description: 'Advanced cybersecurity and leadership development program',
      duration: '7 months',
      format: 'Hybrid',
      level: 'Advanced to Expert',
      modules: 14,
      projects: 6,
      certification: 'Cybersecurity Leadership Professional',
      price: '$5,999',
      originalPrice: '$7,499',
      features: [
        'Strategic security planning',
        'Incident response leadership',
        'Compliance management',
        'Team leadership skills',
        'Executive communication'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/training/programs/cybersecurity-leadership'
    }
  ];

  const upcomingWorkshops = [
    {
      title: 'AI Implementation Workshop',
      date: 'Dec 20, 2024',
      time: '9:00 AM - 5:00 PM EST',
      type: 'In-Person',
      location: 'New York, NY',
      capacity: 25,
      price: '$299',
      instructor: 'Dr. Sarah Chen',
      description: 'Hands-on workshop for implementing AI solutions in business',
      topics: ['AI Strategy Planning', 'Model Selection', 'Implementation Best Practices', 'ROI Measurement']
    },
    {
      title: 'Cloud Security Bootcamp',
      date: 'Jan 15, 2025',
      time: '10:00 AM - 6:00 PM EST',
      type: 'Virtual',
      capacity: 50,
      price: '$199',
      instructor: 'Alex Thompson',
      description: 'Intensive cloud security training with hands-on labs',
      topics: ['Cloud Security Fundamentals', 'Identity Management', 'Data Protection', 'Compliance']
    },
    {
      title: 'Quantum Computing Workshop',
      date: 'Jan 25, 2025',
      time: '1:00 PM - 9:00 PM EST',
      type: 'Hybrid',
      location: 'San Francisco, CA',
      capacity: 30,
      price: '$399',
      instructor: 'Dr. Emily Watson',
      description: 'Introduction to quantum computing with practical applications',
      topics: ['Quantum Principles', 'Qubit Operations', 'Quantum Algorithms', 'Real Applications']
    }
  ];

  const learningResources = [
    {
      title: 'Video Library',
      icon: Video,
      description: 'Access to 500+ training videos and tutorials',
      count: '500+ videos',
      link: '/training/videos'
    },
    {
      title: 'Documentation',
      icon: FileText,
      description: 'Comprehensive training materials and guides',
      count: '200+ guides',
      link: '/training/docs'
    },
    {
      title: 'Practice Labs',
      icon: Code,
      description: 'Hands-on practice environments and exercises',
      count: '100+ labs',
      link: '/training/labs'
    },
    {
      title: 'Community Forum',
      icon: Users,
      description: 'Connect with fellow learners and instructors',
      count: '10,000+ members',
      link: '/training/community'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Senior Data Scientist',
      company: 'TechCorp Inc.',
      rating: 5,
      comment: 'The AI Solutions Architect program transformed my career. The hands-on projects and expert mentorship were invaluable.',
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      company: 'CloudFlow Systems',
      rating: 5,
      comment: 'Excellent cloud and DevOps training. I gained practical skills that I use daily in my role.',
      avatar: 'DK'
    },
    {
      name: 'Amanda Foster',
      role: 'Security Manager',
      company: 'SecureNet Solutions',
      rating: 5,
      comment: 'The cybersecurity leadership program gave me the skills and confidence to lead security initiatives.',
      avatar: 'AF'
    }
  ];

  const filteredCourses = () => {
    let courses = featuredCourses;
    
    if (selectedCategory !== 'all') {
      courses = courses.filter(course => course.category.toLowerCase().includes(selectedCategory));
    }
    
    if (selectedLevel !== 'all') {
      courses = courses.filter(course => course.level.toLowerCase() === selectedLevel);
    }
    
    return courses;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Education - Zion Tech Group"
        description="Comprehensive training programs, courses, and workshops to advance your technology skills and career with Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advance Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Tech Career
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive training programs, expert-led courses, and hands-on workshops designed to accelerate your technology expertise and career growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/training/programs"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Programs
              </Link>
              <Link
                to="/training/courses"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Browse Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Training Categories</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Choose from our comprehensive range of technology training areas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trainingCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`text-center p-4 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-cyan-400/20'
                    : 'border-slate-700 hover:border-slate-600 hover:bg-slate-800/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-white mb-1">{category.name}</div>
                <div className="text-xs text-slate-400">{category.count}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Level Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Filter by Skill Level</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedLevel === level.id
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Courses</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Master in-demand technology skills with our expert-led courses.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses().map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={course.link}>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <course.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{course.price}</div>
                        <div className="text-slate-400 line-through text-sm">{course.originalPrice}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">{course.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Users className="w-4 h-4" />
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Globe className="w-4 h-4" />
                        <span>{course.format}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Target className="w-4 h-4" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{course.rating}</span>
                        </div>
                        <span className="text-slate-400 text-sm">({course.students} students)</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Training Programs</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Transform your career with our intensive, project-based training programs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={program.link}>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full">
                    <div className="text-center mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <program.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4">{program.description}</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Duration:</span>
                        <span className="text-white">{program.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Format:</span>
                        <span className="text-white">{program.format}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Level:</span>
                        <span className="text-white">{program.level}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Modules:</span>
                        <span className="text-white">{program.modules}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Projects:</span>
                        <span className="text-white">{program.projects}</span>
                      </div>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-white mb-1">{program.price}</div>
                      <div className="text-slate-400 line-through text-sm">{program.originalPrice}</div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">View Program Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Workshops</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Join our intensive hands-on workshops to gain practical skills quickly.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">{workshop.type}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{workshop.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{workshop.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{workshop.date} at {workshop.time}</span>
                  </div>
                  {workshop.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{workshop.location}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Capacity: {workshop.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserCheck className="w-4 h-4" />
                    <span>Instructor: {workshop.instructor}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{workshop.price}</div>
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Learning Resources</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Access our comprehensive library of learning materials and resources.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={resource.link}>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">{resource.description}</p>
                    <div className="text-cyan-400 text-sm font-medium mb-4">{resource.count}</div>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Access Resource</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">What Our Students Say</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Hear from professionals who have transformed their careers with our training programs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-300 text-sm mb-6 italic">"{testimonial.comment}"</p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    <div className="text-slate-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Advance Your Career?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join thousands of professionals who have accelerated their careers with our comprehensive training programs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/training/programs"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
