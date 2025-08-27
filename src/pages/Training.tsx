import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Star, Play, Download, Certificate, Target, TrendingUp, Brain, Shield, Cloud, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TrainingCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  instructor: string;
  rating: number;
  students: number;
  price: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
}

interface TrainingCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  courseCount: number;
}

const Training: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const trainingCategories: TrainingCategory[] = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Master artificial intelligence and machine learning',
      icon: Brain,
      color: 'bg-purple-500',
      courseCount: 12
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Learn security best practices and techniques',
      icon: Shield,
      color: 'bg-red-500',
      courseCount: 8
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Master cloud infrastructure and DevOps',
      icon: Cloud,
      color: 'bg-blue-500',
      courseCount: 15
    },
    {
      id: 'data-science',
      name: 'Data Science',
      description: 'Analyze data and extract insights',
      icon: TrendingUp,
      color: 'bg-green-500',
      courseCount: 10
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Lead organizational change and innovation',
      icon: Zap,
      color: 'bg-orange-500',
      courseCount: 6
    }
  ];

  const trainingCourses: TrainingCourse[] = [
    // AI & ML Courses
    {
      id: 'ml-fundamentals',
      title: 'Machine Learning Fundamentals',
      description: 'Learn the basics of machine learning algorithms and techniques',
      duration: '8 weeks',
      level: 'beginner',
      category: 'ai-ml',
      instructor: 'Dr. Sarah Chen',
      rating: 4.8,
      students: 1247,
      price: '$299',
      features: ['Hands-on projects', 'Real-world datasets', 'Certificate of completion', 'Lifetime access'],
      icon: Brain,
      color: 'bg-purple-500'
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning with Neural Networks',
      description: 'Advanced course on deep learning architectures and applications',
      duration: '12 weeks',
      level: 'advanced',
      category: 'ai-ml',
      instructor: 'Prof. Michael Rodriguez',
      rating: 4.9,
      students: 892,
      price: '$499',
      features: ['GPU access', 'Advanced projects', 'Research collaboration', 'Industry mentorship'],
      icon: Brain,
      color: 'bg-purple-500'
    },
    {
      id: 'nlp-specialization',
      title: 'Natural Language Processing',
      description: 'Master NLP techniques for text analysis and generation',
      duration: '10 weeks',
      level: 'intermediate',
      category: 'ai-ml',
      instructor: 'Dr. Emily Watson',
      rating: 4.7,
      students: 756,
      price: '$399',
      features: ['NLP projects', 'Language models', 'API integration', 'Portfolio building'],
      icon: Brain,
      color: 'bg-purple-500'
    },

    // Cybersecurity Courses
    {
      id: 'cyber-basics',
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security concepts and best practices',
      duration: '6 weeks',
      level: 'beginner',
      category: 'cybersecurity',
      instructor: 'James Wilson',
      rating: 4.6,
      students: 1103,
      price: '$249',
      features: ['Security labs', 'Threat analysis', 'Compliance overview', 'Career guidance'],
      icon: Shield,
      color: 'bg-red-500'
    },
    {
      id: 'penetration-testing',
      title: 'Ethical Hacking & Penetration Testing',
      description: 'Learn offensive security techniques and methodologies',
      duration: '10 weeks',
      level: 'advanced',
      category: 'cybersecurity',
      instructor: 'Alex Thompson',
      rating: 4.9,
      students: 634,
      price: '$449',
      features: ['Virtual labs', 'Real-world scenarios', 'Certification prep', 'Industry tools'],
      icon: Shield,
      color: 'bg-red-500'
    },

    // Cloud & DevOps Courses
    {
      id: 'aws-fundamentals',
      title: 'AWS Cloud Practitioner',
      description: 'Master AWS cloud services and architecture',
      duration: '8 weeks',
      level: 'beginner',
      category: 'cloud-devops',
      instructor: 'Maria Garcia',
      rating: 4.7,
      students: 1456,
      price: '$349',
      features: ['AWS credits', 'Hands-on labs', 'Exam preparation', 'Practice tests'],
      icon: Cloud,
      color: 'bg-blue-500'
    },
    {
      id: 'kubernetes-mastery',
      title: 'Kubernetes Mastery',
      description: 'Advanced container orchestration and management',
      duration: '12 weeks',
      level: 'advanced',
      category: 'cloud-devops',
      instructor: 'David Kim',
      rating: 4.8,
      students: 523,
      price: '$499',
      features: ['Multi-cluster setup', 'Production scenarios', 'Monitoring tools', 'Best practices'],
      icon: Cloud,
      color: 'bg-blue-500'
    },

    // Data Science Courses
    {
      id: 'data-analysis',
      title: 'Data Analysis with Python',
      description: 'Learn data manipulation and analysis techniques',
      duration: '8 weeks',
      level: 'beginner',
      category: 'data-science',
      instructor: 'Dr. Lisa Park',
      rating: 4.6,
      students: 987,
      price: '$299',
      features: ['Python programming', 'Data visualization', 'Statistical analysis', 'Real datasets'],
      icon: TrendingUp,
      color: 'bg-green-500'
    },

    // Digital Transformation Courses
    {
      id: 'change-management',
      title: 'Digital Change Management',
      description: 'Lead successful digital transformation initiatives',
      duration: '6 weeks',
      level: 'intermediate',
      category: 'digital-transformation',
      instructor: 'Robert Chen',
      rating: 4.5,
      students: 445,
      price: '$399',
      features: ['Case studies', 'Strategy frameworks', 'Leadership skills', 'Implementation guide'],
      icon: Zap,
      color: 'bg-orange-500'
    }
  ];

  const filteredCourses = trainingCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Training & Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advance your career with our comprehensive training programs in AI, cybersecurity, cloud computing, and digital transformation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Training Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {trainingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
                className={`text-center p-4 rounded-xl border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/5'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{category.description}</p>
                <span className="text-sm text-zion-cyan font-medium">{category.courseCount} courses</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Training Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Courses' : `${trainingCategories.find(cat => cat.id === selectedCategory)?.name} Courses`}
            </h2>
            <span className="text-gray-500">{filteredCourses.length} courses found</span>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Course Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                        <course.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                        <div className="flex items-center mt-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                          <span className="text-sm text-gray-500 ml-2">({course.students})</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>

                    {/* Course Details */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{course.instructor}</span>
                      </div>
                    </div>

                    {/* Course Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">What you'll learn:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Course Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-2xl font-bold text-zion-cyan">{course.price}</div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                          <Play className="w-4 h-4 mr-2 inline" />
                          Preview
                        </button>
                        <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your category or level filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Training Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 text-white"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl mb-8 text-zion-cyan-light">
              Professional development that accelerates your career growth
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Certificate className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">Industry Recognition</h3>
                <p className="text-sm text-zion-cyan-light">
                  Certificates recognized by leading tech companies
                </p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">Expert Instructors</h3>
                <p className="text-sm text-zion-cyan-light">
                  Learn from industry professionals and experts
                </p>
              </div>

              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">Career Focused</h3>
                <p className="text-sm text-zion-cyan-light">
                  Skills that directly impact your career advancement
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Corporate Training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Corporate Training Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Training Programs</h3>
              <p className="text-gray-600 mb-4">
                Tailored training solutions designed specifically for your organization's needs and objectives.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Customized curriculum
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  On-site or virtual delivery
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Team-specific scenarios
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-dark font-medium"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enterprise Learning Platform</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive learning management system for enterprise training and skill development.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Progress tracking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Certification management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Analytics and reporting
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-dark font-medium"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our training programs. 
              Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan-dark transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/help"
                className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Training;
