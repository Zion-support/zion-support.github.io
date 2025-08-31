import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  ArrowRight, 
  Search,
  Filter,
  Play,
  Download,
  Award,
  CheckCircle,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Code,
  Database,
  Network,
  Smartphone,
  Lock,
  Server,
  Cpu,
  BarChart3,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Calendar,
  MapPin,
  Clock3,
  DollarSign,
  Certificate
} from 'lucide-react';

export default function Training() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3 },
    { id: 'development', name: 'Software Development', icon: Code },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'mobile', name: 'Mobile & Web', icon: Smartphone }
  ];

  const levels = [
    { id: 'all', name: 'All Levels', icon: Users },
    { id: 'beginner', name: 'Beginner', icon: BookOpen },
    { id: 'intermediate', name: 'Intermediate', icon: GraduationCap },
    { id: 'advanced', name: 'Advanced', icon: Award }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: 'AI Fundamentals & Machine Learning',
      description: 'Master the basics of artificial intelligence and machine learning algorithms. Learn to build and deploy ML models.',
      category: 'ai-ml',
      level: 'beginner',
      duration: '8 weeks',
      hours: '40 hours',
      price: '$1,200',
      rating: 4.8,
      students: 1250,
      instructor: 'Dr. Sarah Chen',
      instructorTitle: 'CTO & AI Research Lead',
      instructorAvatar: '/images/team/sarah-chen.jpg',
      features: ['Hands-on projects', 'Real-world case studies', 'Industry certification', 'Lifetime access'],
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
      image: '🧠',
      startDate: '2024-10-01',
      enrollmentOpen: true,
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Cybersecurity & Threat Intelligence',
      description: 'Deep dive into cybersecurity threats, penetration testing, and threat intelligence gathering.',
      category: 'cybersecurity',
      level: 'advanced',
      duration: '12 weeks',
      hours: '60 hours',
      price: '$1,800',
      rating: 4.9,
      students: 890,
      instructor: 'Dr. Emily Watson',
      instructorTitle: 'Cybersecurity Director',
      instructorAvatar: '/images/team/emily-watson.jpg',
      features: ['Penetration testing labs', 'Threat hunting', 'Security certifications', 'Career guidance'],
      tags: ['Cybersecurity', 'Penetration Testing', 'Threat Intelligence', 'Ethical Hacking'],
      image: '🛡️',
      startDate: '2024-10-15',
      enrollmentOpen: true,
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Architecture & DevOps Engineering',
      description: 'Learn cloud-native architecture, containerization, and DevOps practices for modern applications.',
      category: 'cloud',
      level: 'intermediate',
      duration: '10 weeks',
      hours: '50 hours',
      price: '$1,500',
      rating: 4.7,
      students: 1100,
      instructor: 'Marcus Rodriguez',
      instructorTitle: 'Head of Cloud & DevOps',
      instructorAvatar: '/images/team/marcus-rodriguez.jpg',
      features: ['AWS/Azure labs', 'Docker & Kubernetes', 'CI/CD pipelines', 'Cloud certifications'],
      tags: ['Cloud Computing', 'DevOps', 'Docker', 'Kubernetes'],
      image: '☁️',
      startDate: '2024-10-08',
      enrollmentOpen: true,
      featured: false
    },
    {
      id: 4,
      title: 'Data Science & Business Intelligence',
      description: 'Transform raw data into actionable insights. Learn data visualization, statistical analysis, and BI tools.',
      category: 'data',
      level: 'intermediate',
      duration: '10 weeks',
      hours: '50 hours',
      price: '$1,400',
      rating: 4.6,
      students: 950,
      instructor: 'Data Science Team',
      instructorTitle: 'Senior Data Scientists',
      instructorAvatar: '/images/team/data-team.jpg',
      features: ['Real datasets', 'Tableau & Power BI', 'Statistical analysis', 'Business insights'],
      tags: ['Data Science', 'Business Intelligence', 'Statistics', 'Visualization'],
      image: '📊',
      startDate: '2024-10-22',
      enrollmentOpen: true,
      featured: false
    },
    {
      id: 5,
      title: 'Full-Stack Web Development',
      description: 'Master modern web development with React, Node.js, and cloud deployment.',
      category: 'development',
      level: 'beginner',
      duration: '12 weeks',
      hours: '60 hours',
      price: '$1,600',
      rating: 4.5,
      students: 1350,
      instructor: 'Development Team',
      instructorTitle: 'Senior Developers',
      instructorAvatar: '/images/team/dev-team.jpg',
      features: ['Project portfolio', 'Code reviews', 'Deployment skills', 'Industry best practices'],
      tags: ['React', 'Node.js', 'Full-Stack', 'Web Development'],
      image: '💻',
      startDate: '2024-11-01',
      enrollmentOpen: true,
      featured: false
    },
    {
      id: 6,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      category: 'mobile',
      level: 'intermediate',
      duration: '10 weeks',
      hours: '50 hours',
      price: '$1,400',
      rating: 4.7,
      students: 780,
      instructor: 'Mobile Team',
      instructorTitle: 'Mobile Development Lead',
      instructorAvatar: '/images/team/mobile-team.jpg',
      features: ['App store deployment', 'Cross-platform development', 'UI/UX design', 'Performance optimization'],
      tags: ['React Native', 'Flutter', 'Mobile Development', 'App Store'],
      image: '📱',
      startDate: '2024-11-08',
      enrollmentOpen: true,
      featured: false
    },
    {
      id: 7,
      title: 'Network Security & Infrastructure',
      description: 'Secure network infrastructure and implement enterprise-grade security solutions.',
      category: 'infrastructure',
      level: 'advanced',
      duration: '8 weeks',
      hours: '40 hours',
      price: '$1,300',
      rating: 4.8,
      students: 650,
      instructor: 'Infrastructure Team',
      instructorTitle: 'Network Security Specialists',
      instructorAvatar: '/images/team/infra-team.jpg',
      features: ['Network labs', 'Security tools', 'Compliance training', 'Industry certifications'],
      tags: ['Network Security', 'Infrastructure', 'Compliance', 'Enterprise'],
      image: '🌐',
      startDate: '2024-11-15',
      enrollmentOpen: true,
      featured: false
    },
    {
      id: 8,
      title: 'Blockchain & Web3 Development',
      description: 'Explore blockchain technology and build decentralized applications.',
      category: 'development',
      level: 'intermediate',
      duration: '8 weeks',
      hours: '40 hours',
      price: '$1,500',
      rating: 4.6,
      students: 520,
      instructor: 'Blockchain Team',
      instructorTitle: 'Blockchain Developers',
      instructorAvatar: '/images/team/blockchain-team.jpg',
      features: ['Smart contracts', 'DApp development', 'Blockchain labs', 'Industry projects'],
      tags: ['Blockchain', 'Web3', 'Smart Contracts', 'DApps'],
      image: '⛓️',
      startDate: '2024-11-22',
      enrollmentOpen: true,
      featured: false
    }
  ];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || program.level === selectedLevel;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="Training Programs - Zion Tech Group"
        description="Comprehensive training programs in AI, cybersecurity, cloud computing, and more. Learn from industry experts and advance your career."
        keywords="training, courses, AI, cybersecurity, cloud computing, data science, web development, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Professional
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Training</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Master cutting-edge technologies with our expert-led training programs. 
              Gain practical skills and industry certifications to advance your career.
            </motion.p>
            
            {/* Search and Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search training programs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 whitespace-nowrap ${
                      selectedLevel === level.id
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    <level.icon className="w-4 h-4" />
                    <span>{level.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Training Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our most popular and highly-rated training programs designed to accelerate your career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPrograms.filter(p => p.featured).map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                      {categories.find(c => c.id === program.category)?.name}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
                      {levels.find(l => l.id === program.level)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock3 className="w-4 h-4" />
                      <span>{program.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{program.students} students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>{program.rating}/5.0</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {program.instructor.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {program.instructor}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {program.instructorTitle}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {program.price}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {program.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {program.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/training/${program.id}`}
                      className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Training Programs */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Training Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {filteredPrograms.length} programs found
            </p>
          </div>

          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                          {categories.find(c => c.id === program.category)?.name}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
                          {levels.find(l => l.id === program.level)?.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{program.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {program.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center justify-between">
                        <span>Duration: {program.duration}</span>
                        <span>Hours: {program.hours}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Students: {program.students}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                          {program.price}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {program.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {program.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                            +{program.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/training/${program.id}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors text-sm"
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No training programs found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive learning experience designed for career advancement and skill development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Industry Certifications',
                description: 'Earn recognized certifications to boost your career prospects'
              },
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with real-world experience'
              },
              {
                icon: CheckCircle,
                title: 'Practical Projects',
                description: 'Apply your knowledge through hands-on, real-world projects'
              },
              {
                icon: Clock,
                title: 'Flexible Learning',
                description: 'Study at your own pace with lifetime access to materials'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Advance Your Career?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of professionals who have transformed their careers with our training programs. 
            Start your journey today!
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/webinars"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Webinars
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
