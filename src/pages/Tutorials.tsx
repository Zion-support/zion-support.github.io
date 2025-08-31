import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Play, Clock, Star, Users, BookOpen, Video, Code, Brain, Shield, Database, Globe, Zap, ArrowRight, Filter, TrendingUp, Lightbulb, Target, Award, Eye, MessageCircle, Type, BarChart3, Settings, Rocket, Heart, Download, Share2 } from 'lucide-react';

const Tutorials = () => {
  const tutorialCategories = [
    {
      title: "Beginner",
      description: "Perfect for those new to AI and technology",
      color: "from-green-500 to-emerald-500",
      count: "12"
    },
    {
      title: "Intermediate",
      description: "For users with some experience",
      color: "from-yellow-500 to-orange-500",
      count: "18"
    },
    {
      title: "Advanced",
      description: "Complex topics for experienced users",
      color: "from-red-500 to-pink-500",
      count: "8"
<<<<<<< HEAD
    },
    {
      title: "Expert",
      description: "Cutting-edge research and techniques",
      color: "from-purple-500 to-indigo-500",
      count: "5"
    }
=======
    },;
    {;
      title: "Expert",;
      description: "Cutting-edge research and techniques",;
      color: "from-purple-500 to-indigo-500",;
      count: "5";
    };
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  ];
  const featuredTutorials = [
    {
      title: "AI Autonomous Research Assistant Implementation",
      description: "Learn to implement and configure AI Autonomous Research Assistant systems for enterprise research and intelligence gathering.",
      category: "Advanced",
      duration: "75 min",
      instructor: "Dr. Sarah Chen",
      rating: 4.9,
      students: "1.2k",
      thumbnail: "/images/tutorials/ai-autonomous-research.jpg"
    },
    {
      title: "AI Supply Chain Optimization Setup",
      description: "Master the implementation of AI-powered supply chain optimization solutions for cost reduction and efficiency improvement.",
      category: "Expert",
      duration: "90 min",
      instructor: "Michael Rodriguez",
      rating: 4.8,
      students: "856",
      thumbnail: "/images/tutorials/ai-supply-chain.jpg"
    },
    {
      title: "Building Your First AI Chatbot",
      description: "Learn to create a conversational AI chatbot using our platform. This comprehensive tutorial covers everything from data preparation to deployment.",
      category: "Beginner",
      duration: "45 min",
      instructor: "Dr. Sarah Chen",
      rating: 4.8,
      students: "2.3k",
      thumbnail: "/images/tutorials/ai-chatbot.jpg"
    },
    {
      title: "Quantum Neural Network Implementation",
      description: "Dive deep into quantum computing and implement neural networks that leverage quantum properties for enhanced performance.",
      category: "Advanced",
      duration: "90 min",
      instructor: "Michael Rodriguez",
      rating: 4.9,
      students: "856",
      thumbnail: "/images/tutorials/quantum-neural.jpg"
    },
    {
      title: "Cybersecurity Best Practices",
      description: "Master essential cybersecurity concepts and implement robust security measures to protect your applications and data.",
      category: "Intermediate",
      duration: "60 min",
      instructor: "James Wilson",
      rating: 4.7,
      students: "1.5k",
      thumbnail: "/images/tutorials/cybersecurity.jpg"
    },
    {
      title: "AI Model Optimization",
      description: "Learn advanced techniques to optimize your AI models for better performance, faster inference, and reduced resource consumption.",
<<<<<<< HEAD
      category: "Expert",
      duration: "75 min",
      instructor: "Dr. Emily Watson",
      rating: 4.6,
      students: "623",
      thumbnail: "/images/tutorials/ai-optimization.jpg"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredTutorials = featuredTutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tutorial.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const sortedTutorials = [...filteredTutorials].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      case 'students':
        return parseInt(b.students.replace('k', '000')) - parseInt(a.students.replace('k', '000'));
      default:
        return parseInt(b.students.replace('k', '000')) - parseInt(a.students.replace('k', '000'));
    }
  });

=======
      category: "Expert",;
      duration: "75 min",;
      instructor: "Dr. Emily Watson",;
      rating: 4.6,;
      students: "623",;
      thumbnail: "/images/tutorials/model-optimization.jpg";
    };
  ];
  const recentTutorials = [
    {
      title: "Data Pipeline Automation",
      category: "Intermediate",
      duration: "40 min",
      instructor: "David Kim",
      rating: 4.5,
      students: "432"
    },
    {
      title: "Cloud Infrastructure Setup",
      category: "Beginner",
      duration: "35 min",
      instructor: "Lisa Thompson",
      rating: 4.4,
      students: "789"
    },
    {
      title: "API Integration Patterns",
      category: "Intermediate",
      duration: "50 min",
      instructor: "Dr. Sarah Chen",
      rating: 4.6,
      students: "567"
    },
    {
      title: "Machine Learning Model Deployment",;
      category: "Advanced",;
      duration: "65 min",;
      instructor: "Michael Rodriguez",;
      rating: 4.7,;
      students: "345";
    };
  ];
  const learningPaths = [
    {
      title: "AI Developer Path",
      description: "Complete path from beginner to AI expert",
      courses: 8,
      duration: "12 weeks",
      level: "Beginner to Expert"
    },
    {
      title: "Cybersecurity Specialist",
      description: "Master security and compliance",
      courses: 6,
      duration: "8 weeks",
      level: "Intermediate to Expert"
    },
    {;
      title: "Quantum Computing Engineer",;
      description: "Learn quantum algorithms and applications",;
      courses: 5,;
      duration: "10 weeks",;
      level: "Advanced to Expert";
    };
  ];
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              AI & Technology Tutorials
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Master the latest AI technologies, cybersecurity practices, and digital transformation strategies with our comprehensive tutorial library.
            </p>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Shortest Duration</option>
                <option value="students">Most Students</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tutorialCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  {category.count}
                </span>
              </div>
              <p className="text-white text-opacity-90 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-slate-400" />
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    tutorial.category === 'Beginner' ? 'bg-green-100 text-green-800' :
                    tutorial.category === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    tutorial.category === 'Advanced' ? 'bg-red-100 text-red-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {tutorial.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {tutorial.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {tutorial.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
=======
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Interactive{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Tutorials
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Master cutting-edge technologies with our comprehensive tutorials,
            hands-on projects, and expert-led learning paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Start Learning
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Browse Tutorials
            </button>
          </div>
        </div>
      </section>
      {/* Featured Tutorials */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Tutorials
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Start your learning journey with our most popular and highly-rated tutorials
              covering the latest in AI, cybersecurity, and emerging technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                {/* Tutorial Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-zion-cyan" />
                </div>
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.category}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {tutorial.title}
                  </h3>
                  {/* Description */}
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {tutorial.description}
                  </p>
                  {/* Tutorial Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {tutorial.instructor}
                    </div>
                    <div className="flex items-center text-zion-cyan text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {tutorial.students} students
                    </div>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-zion-cyan text-sm">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {tutorial.rating}
                    </div>
                    <button className="text-zion-cyan hover:text-white transition-colors duration-300">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Learning Paths */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learning Paths
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Follow structured learning paths designed to take you from beginner
              to expert in your chosen technology domain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300"
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{path.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{path.description}</p>
                <div className="space-y-2 mb-6 text-zion-slate-light">
                  <div className="flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {path.courses} courses
                  </div>
                  <div className="flex items-center justify-center gap-2">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{tutorial.students}</span>
                  </div>
                </div>
<<<<<<< HEAD

                {/* Instructor and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        {tutorial.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{tutorial.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{tutorial.rating}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Start Learning
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
=======
                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Path
                </button>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD

        {/* Load More */}
        {sortedTutorials.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-600 font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Load More Tutorials
            </button>
          </div>
        )}

        {/* Empty State */}
        {sortedTutorials.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No tutorials found
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('popular');
              }}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutorials;
=======
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of learners who are already mastering cutting-edge technologies
            with our comprehensive tutorial library and expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Get Started Today
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Contact Us
            </button>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}
export default Tutorials;
}}}}}}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
