import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Video, 
  Users, 
  Certificate, 
  Clock,
  Star,
  Play,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Search,
  Filter,
  Calendar,
  MapPin,
  Globe,
  Zap,
  Shield,
  Database,
  Brain
} from 'lucide-react';

const Training: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCourse, setExpandedCourse] = useState<Set<string>>(new Set(['ai-fundamentals']));

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
