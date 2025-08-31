import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Play, Users, Award, Clock, Star, 
  Search, Filter, ArrowRight, ExternalLink, Download,
  CheckCircle, Video, FileText, Globe, Building, 
  Brain, Shield, Cloud, Rocket, Zap, TrendingUp
} from 'lucide-react';

export default function Training() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const trainingCategories = [
    { id: 'all', name: 'All Courses', icon: BookOpen, color: 'from-blue-500 to-purple-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-green-500 to-emerald-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'data', name: 'Data Analytics', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { id: 'business', name: 'Business & Strategy', icon: Building, color: 'from-yellow-500 to-orange-500' }
  ];

  const skillLevels = [
    { id: 'all', name: 'All Levels', color: 'from-gray-500 to-gray-600' },
    { id: 'beginner', name: 'Beginner', color: 'from-green-500 to-emerald-500' },
    { id: 'intermediate', name: 'Intermediate', color: 'from-blue-500 to-indigo-500' },
    { id: 'advanced', name: 'Advanced', color: 'from-purple-500 to-pink-500' },
    { id: 'expert', name: 'Expert', color: 'from-red-500 to-orange-500' }
  ];

  const trainingCourses = [
    {
      id: 1,
      title: 'AI Fundamentals for Business Leaders',
      description: 'Learn the basics of AI and how it can transform your business operations and strategy.',
      category: 'ai-ml',
      level: 'beginner',
      duration: '8 hours',
      format: 'Online Course',
      instructor: 'Dr. Emily Watson',
      rating: 4.8,
      students: 1247,
      price: '$299',
      features: ['Video lectures', 'Interactive exercises', 'Certificate', 'Lifetime access'],
      image: '/training/ai-fundamentals.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Machine Learning Implementation',
      description: 'Master advanced ML techniques and implement production-ready machine learning solutions.',
      category: 'ai-ml',
      level: 'advanced',
      duration: '16 hours',
      format: 'Online Course',
      instructor: 'Dr. Emily Watson',
      rating: 4.9,
      students: 892,
      price: '$599',
      features: ['Hands-on projects', 'Code examples', 'Certificate', 'Community access'],
      image: '/training/advanced-ml.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Architecture & DevOps Best Practices',
      description: 'Design scalable cloud architectures and implement DevOps practices for modern applications.',
      category: 'cloud',
      level: 'intermediate',
      duration: '12 hours',
      format: 'Online Course',
      instructor: 'Michael Rodriguez',
      rating: 4.7,
      students: 1563,
      price: '$449',
      features: ['Real-world scenarios', 'Architecture diagrams', 'Certificate', 'Expert support'],
      image: '/training/cloud-architecture.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity for Enterprise',
      description: 'Comprehensive security training covering threat detection, prevention, and response strategies.',
      category: 'security',
      level: 'intermediate',
      duration: '14 hours',
      format: 'Online Course',
      instructor: 'David Kim',
      rating: 4.8,
      students: 1103,
      price: '$499',
      features: ['Security labs', 'Case studies', 'Certificate', 'Security toolkit'],
      image: '/training/cybersecurity.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Data Science & Analytics Masterclass',
      description: 'Transform raw data into actionable insights using modern analytics tools and techniques.',
      category: 'data',
      level: 'intermediate',
      duration: '18 hours',
      format: 'Online Course',
      instructor: 'Dr. Emily Watson',
      rating: 4.6,
      students: 1347,
      price: '$549',
      features: ['Data projects', 'Tool training', 'Certificate', 'Dataset access'],
      image: '/training/data-science.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Transformation Strategy',
      description: 'Develop comprehensive digital transformation strategies for modern organizations.',
      category: 'business',
      level: 'beginner',
      duration: '10 hours',
      format: 'Online Course',
      instructor: 'Sarah Chen',
      rating: 4.7,
      students: 987,
      price: '$399',
      features: ['Strategy frameworks', 'Case studies', 'Certificate', 'Consultation session'],
      image: '/training/digital-transformation.jpg',
      featured: false
    },
    {
      id: 7,
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles and their applications in business.',
      category: 'ai-ml',
      level: 'intermediate',
      duration: '12 hours',
      format: 'Online Course',
      instructor: 'Dr. Emily Watson',
      rating: 4.9,
      students: 456,
      price: '$699',
      features: ['Quantum simulations', 'Theory & practice', 'Certificate', 'Research access'],
      image: '/training/quantum-computing.jpg',
      featured: false
    },
    {
      id: 8,
      title: 'Enterprise Security Architecture',
      description: 'Design and implement comprehensive security architectures for large organizations.',
      category: 'security',
      level: 'expert',
      duration: '20 hours',
      format: 'Online Course',
      instructor: 'David Kim',
      rating: 4.8,
      students: 234,
      price: '$799',
      features: ['Architecture design', 'Security audits', 'Certificate', 'Expert mentorship'],
      image: '/training/enterprise-security.jpg',
      featured: false
    }
  ];

  const featuredPrograms = [
    {
      title: 'AI Professional Certification',
      description: 'Comprehensive AI certification program covering fundamentals to advanced applications',
      duration: '6 months',
      level: 'Intermediate to Advanced',
      price: '$2,999',
      features: ['6 core courses', 'Capstone project', 'Industry certification', 'Career support'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Cloud Solutions Architect',
      description: 'Become a certified cloud architect with hands-on experience in multiple platforms',
      duration: '4 months',
      level: 'Intermediate to Advanced',
      price: '$2,499',
      features: ['Multi-cloud training', 'Real projects', 'AWS/Azure certification', 'Job placement'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity Specialist',
      description: 'Comprehensive security training with practical penetration testing and defense',
      duration: '5 months',
      level: 'Intermediate to Advanced',
      price: '$2,799',
      features: ['Security labs', 'Penetration testing', 'Industry certification', 'Security toolkit'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const trainingFormats = [
    {
      title: 'Online Courses',
      description: 'Self-paced learning with video lectures, exercises, and assessments',
      icon: Play,
      color: 'from-blue-500 to-indigo-500',
      features: ['24/7 access', 'Self-paced', 'Interactive content', 'Progress tracking']
    },
    {
      title: 'Live Workshops',
      description: 'Real-time interactive sessions with industry experts',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      features: ['Real-time interaction', 'Expert guidance', 'Q&A sessions', 'Networking']
    },
    {
      title: 'Corporate Training',
      description: 'Customized training programs for organizations and teams',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      features: ['Customized content', 'Team training', 'On-site delivery', 'ROI tracking']
    },
    {
      title: 'Certification Programs',
      description: 'Comprehensive programs leading to industry-recognized certifications',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      features: ['Industry recognition', 'Comprehensive curriculum', 'Career support', 'Alumni network']
    }
  ];

  const filteredCourses = trainingCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const featuredCourses = filteredCourses.filter(course => course.featured);
  const regularCourses = filteredCourses.filter(course => !course.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Training</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Develop cutting-edge skills with our comprehensive training programs in AI, cloud computing, cybersecurity, and digital transformation
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <BookOpen className="w-5 h-5" />
              <span>Expert Instructors</span>
              <span>•</span>
              <Award className="w-5 h-5" />
              <span>Industry Certifications</span>
              <span>•</span>
              <Users className="w-5 h-5" />
              <span>Global Community</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {trainingCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
                      : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Level Filter */}
            <div className="flex flex-wrap gap-2">
              {skillLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedLevel === level.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
                      : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Certification Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive programs designed to accelerate your career and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                  <p className="text-gray-300 mb-4">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{program.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Level:</span>
                      <span className="text-white">{program.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-blue-400 font-semibold">{program.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Program Features:</h4>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      {featuredCourses.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Featured Courses
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
                Top-rated courses handpicked by our experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-400">Featured Course</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                        {trainingCategories.find(c => c.id === course.category)?.name}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students} students
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{course.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-white font-medium">{course.rating}</span>
                        <span className="text-gray-400">({course.students} reviews)</span>
                      </div>
                      <span className="text-blue-400 font-bold text-lg">{course.price}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Course Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                      Enroll Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Courses Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              All Training Courses
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Explore our complete catalog of professional development courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Online Course</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                      {trainingCategories.find(c => c.id === course.category)?.name}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-white text-sm">{course.rating}</span>
                      <span className="text-gray-400 text-xs">({course.students})</span>
                    </div>
                    <span className="text-blue-400 font-bold">{course.price}</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {course.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training Formats
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the learning format that works best for you and your team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${format.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <format.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{format.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{format.description}</p>
                
                <div className="space-y-2">
                  {format.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who have transformed their careers with Zion Tech Group training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Courses
              </button>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Corporate Training
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
