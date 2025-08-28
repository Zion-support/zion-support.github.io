
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { BookOpen, Users, Video, Certificate, Clock, Star, Play, Download, ExternalLink, Calendar, MapPin, TrendingUp, Brain, Code, Database, Cloud, Shield } from 'lucide-react';

const Training: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen, count: 45 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'development', name: 'Software Development', icon: Code, count: 12 },
    { id: 'data', name: 'Data Analytics', icon: Database, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 7 }
  ];

  const levels = [
    { id: 'all', name: 'All Levels', color: 'bg-gray-500' },
    { id: 'beginner', name: 'Beginner', color: 'bg-green-500' },
    { id: 'intermediate', name: 'Intermediate', color: 'bg-yellow-500' },
    { id: 'advanced', name: 'Advanced', color: 'bg-red-500' }
  ];

  const courses = [
    {
      id: 1,
      title: 'AI Fundamentals for Business',
      description: 'Learn the basics of artificial intelligence and how to apply it to business problems',
      category: 'ai',
      level: 'beginner',
      duration: '8 weeks',
      hours: 40,
      instructor: 'Dr. Sarah Chen',
      rating: 4.8,
      students: 1247,
      price: '$299',
      featured: true,
      image: '/images/courses/ai-fundamentals.jpg',
      topics: ['Machine Learning Basics', 'Neural Networks', 'Business Applications', 'Ethics in AI']
    },
    {
      id: 2,
      title: 'Advanced Machine Learning',
      description: 'Deep dive into advanced ML algorithms and real-world implementation',
      category: 'ai',
      level: 'advanced',
      duration: '12 weeks',
      hours: 60,
      instructor: 'Prof. Michael Rodriguez',
      rating: 4.9,
      students: 856,
      price: '$499',
      featured: true,
      image: '/images/courses/advanced-ml.jpg',
      topics: ['Deep Learning', 'Computer Vision', 'NLP', 'Model Deployment']
    },
    {
      id: 3,
      title: 'Full-Stack Development with AI',
      description: 'Build complete applications that integrate AI services and modern web technologies',
      category: 'development',
      level: 'intermediate',
      duration: '10 weeks',
      hours: 50,
      instructor: 'Alex Thompson',
      rating: 4.7,
      students: 1023,
      price: '$399',
      featured: false,
      image: '/images/courses/fullstack-ai.jpg',
      topics: ['React & Node.js', 'API Integration', 'AI Services', 'Deployment']
    },
    {
      id: 4,
      title: 'Data Science for Business Intelligence',
      description: 'Transform raw data into actionable business insights using modern analytics tools',
      category: 'data',
      level: 'intermediate',
      duration: '8 weeks',
      hours: 35,
      instructor: 'Dr. Emily Watson',
      rating: 4.6,
      students: 789,
      price: '$349',
      featured: false,
      image: '/images/courses/data-science.jpg',
      topics: ['Data Analysis', 'Visualization', 'Statistical Modeling', 'Business Metrics']
    },
    {
      id: 5,
      title: 'Cloud-Native AI Applications',
      description: 'Deploy and scale AI applications using modern cloud infrastructure',
      category: 'cloud',
      level: 'advanced',
      duration: '6 weeks',
      hours: 30,
      instructor: 'David Kim',
      rating: 4.8,
      students: 567,
      price: '$449',
      featured: false,
      image: '/images/courses/cloud-ai.jpg',
      topics: ['AWS/Azure', 'Containerization', 'Kubernetes', 'MLOps']
    },
    {
      id: 6,
      title: 'AI Security & Compliance',
      description: 'Learn to secure AI systems and ensure regulatory compliance',
      category: 'ai',
      level: 'intermediate',
      duration: '6 weeks',
      hours: 25,
      instructor: 'Lisa Park',
      rating: 4.7,
      students: 432,
      price: '$299',
      featured: false,
      image: '/images/courses/ai-security.jpg',
      topics: ['AI Security', 'Privacy Protection', 'Regulatory Compliance', 'Risk Assessment']
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Healthcare Workshop',
      date: '2024-02-15',
      time: '10:00 AM - 2:00 PM',
      location: 'Virtual',
      instructor: 'Dr. Sarah Chen',
      spots: 50,
      registered: 32,
      price: 'Free'
    },
    {
      title: 'Machine Learning Bootcamp',
      date: '2024-02-20',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      instructor: 'Prof. Michael Rodriguez',
      spots: 30,
      registered: 28,
      price: '$199'
    },
    {
      title: 'Data Analytics Certification',
      date: '2024-03-01',
      time: '6:00 PM - 8:00 PM',
      location: 'Virtual',
      instructor: 'Dr. Emily Watson',
      spots: 100,
      registered: 67,
      price: '$99'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Comprehensive training programs, workshops, and certification courses in AI, machine learning, and modern technology development."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Training & Certification
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive training programs. 
              From AI fundamentals to advanced development, gain the skills you need to succeed.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <BookOpen className="w-5 h-5" />
                Browse Courses
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Calendar className="w-5 h-5" />
                View Schedule
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Certificate className="w-5 h-5" />
                Get Certified
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">45+</div>
            <div className="text-gray-400">Courses</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">5K+</div>
            <div className="text-gray-400">Students</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Certificate className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-gray-400">Completion Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Star className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">4.8</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              );
            })}
          </div>

          {/* Level Filter */}
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedLevel === level.id
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <span className="font-medium">{level.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.filter(course => course.featured).map((course) => (
            <div key={course.id} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-200 group">
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                  <span className="text-white font-medium">{course.title}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    course.level === 'beginner' ? 'bg-green-500/20 text-green-400' :
                    course.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-blue-400 font-bold text-lg">{course.price}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.topics.slice(0, 3).map((topic, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                    {course.topics.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        +{course.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                    Enroll Now
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">All Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-200 group">
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                  <span className="text-white font-medium">{course.title}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    course.level === 'beginner' ? 'bg-green-500/20 text-green-400' :
                    course.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-blue-400 font-bold text-lg">{course.price}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                    Enroll Now
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                  {event.price === 'Free' ? 'Free' : `$${event.price}`}
                </span>
                <span className="text-sm text-gray-400">
                  {event.spots - event.registered} spots left
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3">{event.title}</h3>
              
              <div className="space-y-2 text-sm text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{event.instructor}</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our training programs. 
            Start your learning journey today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors">
              <BookOpen className="w-5 h-5" />
              Browse All Courses
            </button>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors">
              <Users className="w-5 h-5" />
              Talk to an Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
