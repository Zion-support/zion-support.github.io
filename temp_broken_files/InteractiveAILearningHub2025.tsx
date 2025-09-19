"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  BookOpen,
  Play,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight;
  Download;
  Share2;
  Bookmark;
  Award;
  Brain;
  Code;
  BarChart3;
  Zap;
  Globe;
  Smartphone;
  Database;
  Shield;
  Target;
  TrendingUp;
  Filter;
  Search,
} from 'lucide-react';
const InteractiveAILearningHub2025 = () => {,
  const [activeCategorysetActiveCategory] = useState('all');
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedLevelsetSelectedLevel] = useState('all');
  const [bookmarkedCoursesetBookmarkedCourses] = useState(new Set());
  const categories = [,
    { id: ''allname: 'All 'Topicsicon: Braincount: 48 ,};
    { id: ''fundamentalsname: 'AI 'Fundamentalsicon: BookOpencount: 12 ,};
    { id: 'machine-'learningname: 'Machine 'Learningicon: Codecount: 10 ,};
    { id: 'data-'sciencename: 'Data 'Scienceicon: BarChart3count: 8 ,};
    { id: ''automationname: ''Automationicon: Zapcount: 6 ,};
    { id: ''applicationsname: 'AI 'Applicationsicon: Globecount: 12 ,}
  ];
  const levels = [,
    { id: ''allname: 'All 'Levelscolor: 'gray' ,};
    { id: ''beginnername: ''Beginnercolor: 'green' ,};
    { id: ''intermediatename: ''Intermediatecolor: 'blue' ,};
    { id: ''advancedname: ''Advancedcolor: 'purple' ,}
  ];
  const courses = [,
    {,
      id: 1;
      title: 'AI Fundamentals: From Zero to Hero';
      category: 'fundamentals';
      level: 'beginner';
      description: 'Master the core concepts of artificial intelligencemachine learningand neural networks.';
      duration: '8 hours';
      students: '12.5K';
      rating: 4.8;
      price: 'Free';
      instructor: 'Dr. Sarah Chen';
      instructorAvatar: '/api/placeholder/40/40';
      thumbnail: '/api/placeholder/400/250';
      modules: 12;
      certificate: true;
      featured: true;
      tags: ['AI 'BasicsNeural 'Networks', 'Machine Learning'],
    };
    {,
      id: 2;
      title: 'Advanced Machine Learning with Python';
      category: 'machine-learning';
      level: 'intermediate';
      description: 'Deep dive into advanced ML algorithmsmodel optimizationand real-world applications.';
      duration: '15 hours';
      students: '8.2K';
      rating: 4.9;
      price: '$99';
      instructor: 'Prof. Michael Rodriguez';
      instructorAvatar: '/api/placeholder/40/40';
      thumbnail: '/api/placeholder/400/250';
      modules: 20;
      certificate: true;
      featured: true;
      tags: [Python', 'Scikit-'learnTensorFlow'],
    };
    {,
      id: 3;
      title: 'Data Science for AI Applications';
      category: 'data-science';
      level: 'intermediate';
      description: 'Learn data preprocessingfeature engineeringand visualization for AI projects.';
      duration: '12 hours';
      students: '6.8K';
      rating: 4.7;
      price: '$79';
      instructor: 'Dr. Jennifer Park';
      instructorAvatar: '/api/placeholder/40/40';
      thumbnail: '/api/placeholder/400/250';
      modules: 16;
      certificate: true;
      featured: false;
      tags: ['Data 'AnalysisPandas'Visualization'],};
    {,
      id: 4;
      title: 'AI Automation: Building Smart Workflows';
      category: 'automation';
      level: 'advanced';
      description: 'Create intelligent automation systems using AI and workflow optimization techniques.';
      duration: '10 hours';
      students: '4.5K';
      rating: 4.9;
      price: '$149';
      instructor: 'Alex Thompson';
      instructorAvatar: '/api/placeholder/40/40';
      thumbnail: '/api/placeholder/400/250';
      modules: 14;
      certificate: true;
      featured: true;
      tags: ['Workflow 'AutomationRPA'AI Integration'],};
    {,
      id: 5;
      title: 'AI in Healthcare: Real-World Applications';
      category: 'applications';
      level: 'intermediate';
      description: 'Explore how AI is transforming healthcare with case studies and practical examples.';
      duration: '6 hours';
      students: '3.2K';
      rating: 4.6;
      price: '$59';
      instructor: 'Dr. Lisa Wang';
      instructorAvatar: '/api/placeholder/40/40';
      thumbnail: '/api/placeholder/400/250';
      modules: 8;
      certificate: true;
      featured: false;
      tags: ['Healthcare 'AIMedical 'Imaging', 'Diagnostics'],
    };
    {,
      id: 6;
      title: 'Building AI-Powered Mobile Apps';
      category: 'applications';
      level: 'advanced';
      description: 'Integrate AI capabilities into mobile applications using modern frameworks.';
      duration: '14 hours';
      students: '5.1K';
      rating: 4.8;
      price: '$129';
      instructor: 'Mark Johnson';
      instructorAvatar: '/api/placeholder/40/40';
      thumbnail: '/api/placeholder/400/250';
      modules: 18;
      certificate: true;
      featured: true;
      tags: ['Mobile 'AIReact 'Native', 'TensorFlow Lite'],
    }
  ];
  const filteredCourses = courses.filter(course => {,
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||,
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||,
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesLevel && matchesSearch;
  });
  const toggleBookmark = (courseId) => {,
    setBookmarkedCourses(prev => {,
      const newSet = new Set(prev);
      if (newSet.has(courseId)) {,
        newSet.delete(courseId);
      } else {,
        newSet.add(courseId);
      }
      return newSet;
    });
  };
  const containerVariants = {,
    hidden: { opacity: 0 ,};
    visible: {,
      opacity: 1;
      transition: {,
        staggerChildren: 0.1,}
    }
  };
  const itemVariants = {,
    hidden: { y: 20opacity: 0 ,};
    visible: {,
      y: 0;
      opacity: 1;
      transition: {,
        duration: 0.5,}
    }
  };
  return (,
    <div className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Header */,}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="text-center mb-16",
        >,
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">,
            <BookOpen className="w-4 h-4 mr-2" />,
            AI Learning Hub,
          </div>,
          <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">,
            Master AI with,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">,
              Interactive Learning,
            </span>,
          </h2>,
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
            Learn AI from industry experts with hands-on projectsreal-world case studies,
            and interactive content designed for all skill levels.,
          </p>,
        </div>,
        {/* Search and Filters */,}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="mb-12",
        >,
          <div className="flex flex-col lg: flex-row gap-6 items-center justify-between">,
            {/* Search */,}
            <div className="relative w-full lg: w-96">,
              <input,
                type="text",
                placeholder="Search coursestopicsor instructors...",
                value={searchQuery,}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white border border-gray-200 rounded-xl focus: ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",
              />,
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />,
            </div>,
            {/* Level Filter */,}
            <div className="flex gap-2">,
              {levels.map((level) => (,
                <button,
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${,
                    selectedLevel === level.id,
                      ? `bg-${level.color}-600 text-white shadow-lg`,
                      : 'bg-white text-gray-700 hover: bg-gray-50 border border-gray-200',}`}
                >,
                  {level.name}
                </button>,
              ))}
            </div>,
          </div>,
        </div>,
        {/* Category Filter */}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="flex flex-wrap justify-center gap-4 mb-12",
        >,
          {categories.map((category) => (,
            <button,
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${,
                activeCategory === category.id,
                  ? 'bg-purple-600 text-white shadow-lg',
                  : 'bg-white text-gray-700 hover: bg-gray-50 border border-gray-200',}`}
            >,
              <category.icon className="w-5 h-5 mr-2" />,
              {category.name}
              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">,
                {category.count}
              </span>,
            </button>,
          ))}
        </div>,
        {/* Courses Grid */}
        <div,
          whileInView="visible",
          className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8",
        >,
          <div>,
            {filteredCourses.map((course) => (,
              <div,
                key={course.id,}
                className="group bg-white rounded-2xl shadow-lg hover: shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100",
              >,
                {/* Course Thumbnail */,}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden">,
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20" />,
                  <div className="absolute top-4 right-4 flex space-x-2">,
                    {course.featured && (,
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">,
                        Featured,
                      </span>,
                    )}
                    <button,
                      onClick={() => toggleBookmark(course.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors ${,
                        bookmarkedCourses.has(course.id),
                          ? 'bg-yellow-500 text-white',
                          : 'bg-white/20 text-white hover: bg-white/30',}`}
                    >,
                      <Bookmark className={`w-4 h-4 ${bookmarkedCourses.has(course.id) ? 'fill-current' : ''}`} />,
                    </button>,
                  </div>,
                  <div className="absolute inset-0 flex items-center justify-center">,
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">,
                      <Play className="w-8 h-8 text-white" />,
                    </div>,
                  </div>,
                  <div className="absolute bottom-4 left-4 right-4">,
                    <div className="flex items-center justify-between text-white text-sm">,
                      <div className="flex items-center">,
                        <Clock className="w-4 h-4 mr-1" />,
                        {course.duration}
                      </div>,
                      <div className="flex items-center">,
                        <Users className="w-4 h-4 mr-1" />,
                        {course.students}
                      </div>,
                    </div>,
                  </div>,
                </div>,
                {/* Course Content */}
                <div className="p-6">,
                  {/* Level Badge */}
                  <div className="mb-3">,
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${,
                      course.level === 'beginner' ? 'bg-green-100 text-green-800' :,
                      course.level === 'intermediate' ? 'bg-blue-100 text-blue-800' :,
                      'bg-purple-100 text-purple-800',
                    }`}>,
                      {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                    </span>,
                  </div>,
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover: text-purple-600 transition-colors">,
                    {course.title,}
                  </h3>,
                  <p className="text-gray-600 mb-4 line-clamp-2">,
                    {course.description}
                  </p>,
                  {/* Instructor */}
                  <div className="flex items-center mb-4">,
                    <img,
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full mr-3",
                    />,
                    <div>,
                      <div className="text-sm font-medium text-gray-900">,
                        {course.instructor}
                      </div>,
                      <div className="text-xs text-gray-500">,
                        Instructor,
                      </div>,
                    </div>,
                  </div>,
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">,
                    {course.tags.slice(02).map((tagindex) => (,
                      <span,
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs",
                      >,
                        {tag}
                      </span>,
                    ))}
                  </div>,
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">,
                    <div className="flex items-center">,
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />,
                      <span className="text-sm font-medium text-gray-900">,
                        {course.rating}
                      </span>,
                    </div>,
                    <div className="text-sm text-gray-500">,
                      {course.modules} modules,
                    </div>,
                  </div>,
                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">,
                    <div className="text-2xl font-bold text-gray-900">,
                      {course.price}
                    </div>,
                    <div className="flex space-x-2">,
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover: bg-purple-700 transition-colors flex items-center">,
                        <Play className="w-4 h-4 mr-2" />,
                        Start,
                      </button>,
                      <button className="p-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">,
                        <Share2 className="w-4 h-4" />,
                      </button>,
                    </div>,
                  </div>,
                  {/* Certificate Badge */,}
                  {course.certificate && (,
                    <div className="mt-3 flex items-center text-sm text-green-600">,
                      <Award className="w-4 h-4 mr-1" />,
                      Certificate included,
                    </div>,
                  )}
                </div>,
              </div>,
            ))}
          </div>,
        </div>,
        {/* Learning Paths Section */}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="mt-20",
        >,
          <div className="text-center mb-12">,
            <h3 className="text-3xl font-bold text-gray-900 mb-4">,
              Structured Learning Paths,
            </h3>,
            <p className="text-xl text-gray-600">,
              Follow curated learning paths designed by industry experts,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {[,
              {,
                title: 'AI Career Starter';
                description: 'Complete path from beginner to job-ready AI professional';
                courses: 8;
                duration: '6 months';
                level: 'Beginner to Intermediate';
                color: 'green',};
              {,
                title: 'ML Engineer Track';
                description: 'Advanced machine learning and engineering skills';
                courses: 12;
                duration: '8 months';
                level: 'Intermediate to Advanced';
                color: 'blue',};
              {,
                title: 'AI Research Path';
                description: 'Cutting-edge research and innovation in AI';
                courses: 10;
                duration: '10 months';
                level: 'Advanced';
                color: 'purple',}
            ].map((pathindex) => (,
              <div,
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover: shadow-xl transition-shadow",
              >,
                <div className={`w-12 h-12 bg-${path.color,}-100 rounded-xl flex items-center justify-center mb-4`}>,
                  <Target className={`w-6 h-6 text-${path.color}-600`} />,
                </div>,
                <h4 className="text-xl font-bold text-gray-900 mb-2">,
                  {path.title}
                </h4>,
                <p className="text-gray-600 mb-4">,
                  {path.description}
                </p>,
                <div className="space-y-2 text-sm text-gray-500 mb-4">,
                  <div className="flex justify-between">,
                    <span>Courses: </span>,
                    <span className="font-medium">{path.courses,}</span>,
                  </div>,
                  <div className="flex justify-between">,
                    <span>Duration: </span>,
                    <span className="font-medium">{path.duration,}</span>,
                  </div>,
                  <div className="flex justify-between">,
                    <span>Level: </span>,
                    <span className="font-medium">{path.level,}</span>,
                  </div>,
                </div>,
                <button className={`w-full bg-${path.color}-600 text-white py-2 rounded-lg font-medium hover: bg-${path.color,}-700 transition-colors`}>,
                  Start Learning Path,
                </button>,
              </div>,
            ))}
          </div>,
        </div>,
        {/* CTA Section */}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="text-center mt-20",
        >,
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">,
            <h3 className="text-2xl font-bold mb-4">,
              Ready to Start Your AI Journey?,
            </h3>,
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">,
              Join thousands of learners mastering AI with our comprehensive courses,
              hands-on projectsand expert guidance.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">,
                Browse All Courses,
                <ArrowRight className="w-5 h-5 ml-2" />,
              </button>,
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">,
                Download Learning Guide,
              </button>,
            </div>,
          </div>,
        </div>,
      </div>,
    </div>,
  ),};
export default InteractiveAILearningHub2025;