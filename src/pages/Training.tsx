import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Video, BookOpen, Shield, Clock, Star, ArrowRight, Play, Download } from 'lucide-react';

export default function Training() {
  const trainingCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Master artificial intelligence and machine learning fundamentals',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      courses: [
        { title: 'AI Fundamentals', duration: '8 hours', level: 'Beginner', rating: 4.8 },
        { title: 'Machine Learning Basics', duration: '12 hours', level: 'Intermediate', rating: 4.7 },
        { title: 'Deep Learning Applications', duration: '16 hours', level: 'Advanced', rating: 4.9 }
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Learn essential cybersecurity concepts and practices',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      courses: [
        { title: 'Cybersecurity Essentials', duration: '6 hours', level: 'Beginner', rating: 4.6 },
        { title: 'Zero Trust Architecture', duration: '10 hours', level: 'Intermediate', rating: 4.8 },
        { title: 'Incident Response', duration: '14 hours', level: 'Advanced', rating: 4.7 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Master cloud computing and DevOps practices',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      courses: [
        { title: 'Cloud Fundamentals', duration: '8 hours', level: 'Beginner', rating: 4.5 },
        { title: 'DevOps Practices', duration: '12 hours', level: 'Intermediate', rating: 4.6 },
        { title: 'Container Orchestration', duration: '16 hours', level: 'Advanced', rating: 4.8 }
      ]
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Explore Internet of Things and edge computing technologies',
      icon: Video,
      color: 'from-green-500 to-emerald-500',
      courses: [
        { title: 'IoT Fundamentals', duration: '6 hours', level: 'Beginner', rating: 4.4 },
        { title: 'Edge Computing', duration: '10 hours', level: 'Intermediate', rating: 4.6 },
        { title: 'IoT Security', duration: '12 hours', level: 'Advanced', rating: 4.7 }
      ]
    }
  ];

  const featuredCourses = [
    {
      title: 'Complete AI Business Intelligence Course',
      description: 'Learn how to implement AI-powered business intelligence solutions from scratch.',
      instructor: 'Dr. Sarah Chen',
      duration: '20 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: '2.3k',
      price: '$299',
      featured: true
    },
    {
      title: 'Zero Trust Security Implementation',
      description: 'Comprehensive guide to implementing zero trust architecture in enterprise environments.',
      instructor: 'Michael Rodriguez',
      duration: '16 hours',
      level: 'Advanced',
      rating: 4.8,
      students: '1.8k',
      price: '$399',
      featured: true
    },
    {
      title: 'IoT Edge Computing Masterclass',
      description: 'Master IoT edge computing with hands-on projects and real-world applications.',
      instructor: 'Emily Watson',
      duration: '18 hours',
      level: 'Intermediate',
      rating: 4.7,
      students: '1.5k',
      price: '$349',
      featured: true
    }
  ];

  const learningPaths = [
    {
      title: 'AI Developer Path',
      description: 'Complete path to become an AI developer',
      duration: '6 months',
      courses: 12,
      level: 'Beginner to Advanced',
      icon: GraduationCap
    },
    {
      title: 'Cybersecurity Expert Path',
      description: 'Comprehensive cybersecurity certification path',
      duration: '8 months',
      courses: 15,
      level: 'Beginner to Advanced',
      icon: Shield
    },
    {
      title: 'Cloud Architect Path',
      description: 'Full-stack cloud architecture training',
      duration: '7 months',
      courses: 14,
      level: 'Intermediate to Advanced',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Learning - Zion Tech Group"
        description="Comprehensive training programs, courses, and learning paths for AI, cybersecurity, cloud computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Training &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Learning
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Master cutting-edge technologies with our comprehensive training programs. 
              From AI fundamentals to advanced cybersecurity, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and highly-rated courses to accelerate your learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 h-48 flex items-center justify-center">
                  <Play className="w-16 h-16 text-cyan-400" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {course.level}
                    </span>
                    <span className="text-2xl font-bold text-white">{course.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{course.title}</h3>
                  <p className="text-slate-300 mb-4">{course.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Instructor:</span>
                      <span className="text-white">{course.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-white">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Students:</span>
                      <span className="text-white">{course.students}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                      ))}
                      <span className="text-slate-400 text-sm ml-2">{course.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive training programs organized by technology area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-slate-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.courses.map((course, idx) => (
                    <div key={idx} className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{course.title}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400 text-sm">{course.duration}</span>
                          <span className="text-slate-400 text-sm">•</span>
                          <span className="text-slate-400 text-sm">{course.level}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-slate-300 text-sm">{course.rating}</span>
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center">
                          View Course
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Learning Paths
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Structured learning journeys designed to take you from beginner to expert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <path.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{path.title}</h3>
                <p className="text-slate-300 mb-6">{path.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Duration:</span>
                    <span className="text-white">{path.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Courses:</span>
                    <span className="text-white">{path.courses}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Level:</span>
                    <span className="text-white">{path.level}</span>
                  </div>
                </div>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                  Start Path
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have already transformed their careers 
              with our comprehensive training programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Browse All Courses
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Training Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
