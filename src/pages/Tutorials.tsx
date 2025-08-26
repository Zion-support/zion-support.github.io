import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Play, Clock, Star, Users, BookOpen, Video, Code, Brain, Shield, Database, Globe, Zap, ArrowRight, Filter, TrendingUp, Lightbulb, Target, Award, Eye, MessageCircle, Type, BarChart3, Settings, Rocket, Heart, Download, Share2 } from 'lucide-react';

export default function Tutorials() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 12 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 10 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 8 },
    { id: 'integration', name: 'Integrations', icon: Globe, count: 7 }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels', count: 45 },
    { id: 'beginner', name: 'Beginner', count: 20 },
    { id: 'intermediate', name: 'Intermediate', count: 15 },
    { id: 'advanced', name: 'Advanced', count: 10 }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Building Your First AI Chatbot',
      description: 'Learn how to create an intelligent chatbot using our AI platform. This comprehensive tutorial covers everything from setup to deployment.',
      category: 'ai-ml',
      difficulty: 'beginner',
      duration: '45 min',
      rating: 4.8,
      students: 1247,
      thumbnail: '/images/tutorials/ai-chatbot.jpg',
      instructor: 'Dr. Sarah Chen',
      tags: ['AI', 'Chatbot', 'NLP', 'Beginner'],
      featured: true,
      icon: MessageCircle
    },
    {
      id: 2,
      title: 'Implementing Computer Vision with AI',
      description: 'Discover how to build image recognition systems using computer vision and deep learning techniques.',
      category: 'ai-ml',
      difficulty: 'intermediate',
      duration: '75 min',
      rating: 4.9,
      students: 892,
      thumbnail: '/images/tutorials/computer-vision.jpg',
      instructor: 'Michael Rodriguez',
      tags: ['Computer Vision', 'Deep Learning', 'Image Recognition', 'Intermediate'],
      featured: true,
      icon: Eye
    },
    {
      id: 3,
      title: 'Natural Language Processing Fundamentals',
      description: 'Master the basics of NLP including text processing, sentiment analysis, and language understanding.',
      category: 'ai-ml',
      difficulty: 'intermediate',
      duration: '90 min',
      rating: 4.7,
      students: 1563,
      thumbnail: '/images/tutorials/nlp-fundamentals.jpg',
      instructor: 'Dr. Elena Petrova',
      tags: ['NLP', 'Text Processing', 'Sentiment Analysis', 'Intermediate'],
      featured: false,
      icon: Type
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Learn essential security practices for protecting your AI applications and data from cyber threats.',
      category: 'security',
      difficulty: 'intermediate',
      duration: '60 min',
      rating: 4.8,
      students: 2341,
      thumbnail: '/images/tutorials/cybersecurity.jpg',
      instructor: 'Alex Thompson',
      tags: ['Security', 'Cybersecurity', 'Best Practices', 'Intermediate'],
      featured: true,
      icon: Shield
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard Creation',
      description: 'Build interactive dashboards to visualize and analyze your data effectively.',
      category: 'data',
      difficulty: 'beginner',
      duration: '50 min',
      rating: 4.6,
      students: 987,
      thumbnail: '/images/tutorials/data-dashboard.jpg',
      instructor: 'Maria Garcia',
      tags: ['Data Analytics', 'Dashboard', 'Visualization', 'Beginner'],
      featured: false,
      icon: BarChart3
    },
    {
      id: 6,
      title: 'Workflow Automation with AI',
      description: 'Automate business processes using AI-powered workflow engines and decision trees.',
      category: 'automation',
      difficulty: 'advanced',
      duration: '120 min',
      rating: 4.9,
      students: 456,
      thumbnail: '/images/tutorials/workflow-automation.jpg',
      instructor: 'David Kim',
      tags: ['Automation', 'Workflow', 'AI', 'Advanced'],
      featured: false,
      icon: Zap
    },
    {
      id: 7,
      title: 'API Integration Masterclass',
      description: 'Learn how to integrate external APIs and services with your AI applications.',
      category: 'integration',
      difficulty: 'intermediate',
      duration: '80 min',
      rating: 4.7,
      students: 723,
      thumbnail: '/images/tutorials/api-integration.jpg',
      instructor: 'Sarah Johnson',
      tags: ['API', 'Integration', 'Web Services', 'Intermediate'],
      featured: false,
      icon: Globe
    },
    {
      id: 8,
      title: 'Advanced Machine Learning Models',
      description: 'Deep dive into advanced ML techniques including ensemble methods and neural networks.',
      category: 'ai-ml',
      difficulty: 'advanced',
      duration: '150 min',
      rating: 4.9,
      students: 389,
      thumbnail: '/images/tutorials/advanced-ml.jpg',
      instructor: 'Dr. James Wilson',
      tags: ['Machine Learning', 'Neural Networks', 'Advanced', 'Deep Learning'],
      featured: false,
      icon: Brain
    }
  ];

  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);
  const filteredTutorials = tutorials.filter(tutorial => 
    (selectedCategory === 'all' || tutorial.category === selectedCategory) &&
    (selectedDifficulty === 'all' || tutorial.difficulty === selectedDifficulty) &&
    (searchQuery === '' || tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
     tutorial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const stats = [
    { label: 'Total Tutorials', value: '45+', icon: BookOpen },
    { label: 'Active Students', value: '15K+', icon: Users },
    { label: 'Hours of Content', value: '60+', icon: Clock },
    { label: 'Expert Instructors', value: '12+', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Learn <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI & Technology</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master cutting-edge AI technologies through our comprehensive video tutorials, hands-on projects, and expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              Start Learning
            </button>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get Support
            </Link>
          </div>
        </div>

        {/* Tutorial Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tutorials, topics, or instructors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Category and Difficulty Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </button>
                );
              })}
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedDifficulty === difficulty.id
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {difficulty.name} ({difficulty.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Tutorials */}
        {featuredTutorials.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Featured Tutorials
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial) => {
                const Icon = tutorial.icon;
                return (
                  <div key={tutorial.id} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{tutorial.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">({tutorial.students.toLocaleString()})</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {tutorial.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-400">by {tutorial.instructor}</div>
                      <div className="flex items-center gap-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          tutorial.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                          tutorial.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                        <Play className="w-4 h-4" />
                        Start Learning
                      </button>
                      <button className="p-3 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Tutorials */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              All Tutorials
            </h2>
            <div className="text-gray-300">
              Showing {filteredTutorials.length} of {tutorials.length} tutorials
            </div>
          </div>
          
          {filteredTutorials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => {
                const Icon = tutorial.icon;
                return (
                  <div key={tutorial.id} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {tutorial.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{tutorial.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">({tutorial.students.toLocaleString()})</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {tutorial.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-400">by {tutorial.instructor}</div>
                      <div className="flex items-center gap-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          tutorial.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                          tutorial.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                        <Play className="w-4 h-4" />
                        Start Learning
                      </button>
                      <button className="p-3 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No tutorials found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already learning AI and technology with our comprehensive tutorial library. 
              Start your learning journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Browse All Tutorials
              </button>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}