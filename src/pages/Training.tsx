import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Users, 
  Award, 
  Clock, 
  Star, 
  Download, 
  ExternalLink,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Database,
  Zap,
  Globe,
  Target,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Training() {
  const learningPaths = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Master AI technologies and machine learning fundamentals',
      duration: '8-12 weeks',
      difficulty: 'Intermediate to Advanced',
      courses: [
        { title: 'AI Fundamentals', duration: '4 weeks', level: 'Beginner', href: '/training/ai-fundamentals' },
        { title: 'Machine Learning Basics', duration: '6 weeks', level: 'Intermediate', href: '/training/ml-basics' },
        { title: 'Deep Learning with Neural Networks', duration: '8 weeks', level: 'Advanced', href: '/training/deep-learning' },
        { title: 'AI Business Applications', duration: '4 weeks', level: 'Intermediate', href: '/training/ai-business' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Learn cloud infrastructure and DevOps practices',
      duration: '6-10 weeks',
      difficulty: 'Beginner to Advanced',
      courses: [
        { title: 'Cloud Computing Fundamentals', duration: '4 weeks', level: 'Beginner', href: '/training/cloud-fundamentals' },
        { title: 'DevOps Pipeline Automation', duration: '6 weeks', level: 'Intermediate', href: '/training/devops-automation' },
        { title: 'Container Orchestration', duration: '6 weeks', level: 'Advanced', href: '/training/container-orchestration' },
        { title: 'Cloud Security Best Practices', duration: '4 weeks', level: 'Intermediate', href: '/training/cloud-security' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Master cybersecurity principles and practices',
      duration: '8-12 weeks',
      difficulty: 'Intermediate to Advanced',
      courses: [
        { title: 'Cybersecurity Fundamentals', duration: '6 weeks', level: 'Beginner', href: '/training/cybersecurity-fundamentals' },
        { title: 'Network Security', duration: '6 weeks', level: 'Intermediate', href: '/training/network-security' },
        { title: 'Zero Trust Architecture', duration: '8 weeks', level: 'Advanced', href: '/training/zero-trust' },
        { title: 'Incident Response', duration: '4 weeks', level: 'Advanced', href: '/training/incident-response' }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      description: 'Lead organizational digital transformation initiatives',
      duration: '6-8 weeks',
      difficulty: 'Intermediate to Advanced',
      courses: [
        { title: 'Digital Strategy', duration: '4 weeks', level: 'Intermediate', href: '/training/digital-strategy' },
        { title: 'Change Management', duration: '4 weeks', level: 'Intermediate', href: '/training/change-management' },
        { title: 'Technology Roadmapping', duration: '6 weeks', level: 'Advanced', href: '/training/technology-roadmapping' },
        { title: 'Digital Innovation', duration: '4 weeks', level: 'Advanced', href: '/training/digital-innovation' }
      ]
    }
  ];

  const featuredCourses = [
    {
      title: 'AI Business Intelligence Masterclass',
      description: 'Learn how to implement AI-powered business intelligence solutions',
      instructor: 'Dr. Sarah Chen',
      duration: '8 weeks',
      level: 'Advanced',
      rating: 4.9,
      students: 1247,
      price: '$1,299',
      originalPrice: '$1,599',
      badge: 'Bestseller',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/training/ai-business-intelligence'
    },
    {
      title: 'Cloud DevOps Professional',
      description: 'Master cloud infrastructure and DevOps automation',
      instructor: 'Mike Rodriguez',
      duration: '10 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: 892,
      price: '$999',
      originalPrice: '$1,299',
      badge: 'Popular',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/training/cloud-devops-professional'
    },
    {
      title: 'Cybersecurity Leadership',
      description: 'Develop cybersecurity leadership and strategic thinking skills',
      instructor: 'Lisa Thompson',
      duration: '12 weeks',
      level: 'Advanced',
      rating: 4.9,
      students: 567,
      price: '$1,499',
      originalPrice: '$1,899',
      badge: 'New',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/training/cybersecurity-leadership'
    }
  ];

  const trainingFormats = [
    {
      title: 'Online Self-Paced',
      description: 'Learn at your own pace with 24/7 access to course materials',
      icon: BookOpen,
      features: ['Flexible scheduling', 'Lifetime access', 'Interactive exercises', 'Certificate of completion'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Live Virtual Classes',
      description: 'Real-time interactive sessions with expert instructors',
      icon: Users,
      features: ['Live Q&A sessions', 'Peer collaboration', 'Real-time feedback', 'Scheduled sessions'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'In-Person Workshops',
      description: 'Hands-on training in our state-of-the-art facilities',
      icon: Target,
      features: ['Hands-on practice', 'Networking opportunities', 'Direct instructor access', 'Equipment provided'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Corporate Training',
      description: 'Customized training programs for organizations',
      icon: Globe,
      features: ['Tailored content', 'Team building', 'On-site delivery', 'Custom assessments'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const certifications = [
    {
      title: 'AI Solutions Specialist',
      description: 'Certified expertise in AI implementation and management',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      duration: '6 months',
      level: 'Advanced',
      href: '/certifications/ai-solutions-specialist'
    },
    {
      title: 'Cloud DevOps Engineer',
      description: 'Professional certification in cloud and DevOps practices',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      duration: '8 months',
      level: 'Intermediate',
      href: '/certifications/cloud-devops-engineer'
    },
    {
      title: 'Cybersecurity Professional',
      description: 'Comprehensive cybersecurity certification program',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      duration: '10 months',
      level: 'Advanced',
      href: '/certifications/cybersecurity-professional'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Comprehensive training programs, courses, and certifications in AI, cloud computing, cybersecurity, and digital transformation."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Training & Certification
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Master cutting-edge technologies with our comprehensive training programs and earn industry-recognized certifications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Featured Courses
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <Link
                to={course.href}
                className="block bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 h-full"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.badge === 'Bestseller' ? 'bg-yellow-500/20 text-yellow-400' :
                      course.badge === 'Popular' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {course.badge}
                    </span>
                    <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center`}>
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{course.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Instructor:</span>
                      <span className="text-white">{course.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-white">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Level:</span>
                      <span className="text-white">{course.level}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{course.rating}</span>
                      <span className="text-slate-400 text-sm">({course.students} students)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{course.price}</span>
                      <span className="text-slate-400 line-through">{course.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Paths */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Learning Paths
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center`}>
                    <path.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{path.title}</h3>
                    <p className="text-slate-400 text-sm">{path.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-sm text-slate-400">Duration</div>
                    <div className="text-white font-semibold">{path.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-sm text-slate-400">Difficulty</div>
                    <div className="text-white font-semibold">{path.difficulty}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {path.courses.map((course) => (
                    <Link
                      key={course.title}
                      to={course.href}
                      className="block p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {course.title}
                          </div>
                          <div className="text-sm text-slate-400">
                            {course.duration} • {course.level}
                          </div>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Formats */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Training Formats
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trainingFormats.map((format, index) => (
            <motion.div
              key={format.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${format.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <format.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">{format.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{format.description}</p>
                
                <div className="space-y-2">
                  {format.features.map((feature, idx) => (
                    <div key={idx} className="text-slate-300 text-sm flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Professional Certifications
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="group"
              >
                <Link
                  to={cert.href}
                  className="block bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{cert.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-sm text-slate-400">Duration</div>
                      <div className="text-white font-semibold">{cert.duration}</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-sm text-slate-400">Level</div>
                      <div className="text-white font-semibold">{cert.level}</div>
                    </div>
                  </div>
                  
                  <div className="w-full py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-300">
                    Learn More
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Training Consultation
            </Link>
            <Link
              to="/help"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Browse All Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
