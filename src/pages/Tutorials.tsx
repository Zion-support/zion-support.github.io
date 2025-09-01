import { Link } from 'react - router - dom';
import React, { useState } from 'react';
export default Tutorials;
import {


  Search,
  Play,
  Clock,
  Star,
  Users,
  BookOpen,
  Video,
  Code,
  Brain,
  Shield,
  Database,
  Globe,
  Zap,
  ArrowRight,
  Filter,
  TrendingUp,
  Lightbulb,
  Target,
  Award,
  Eye,
  MessageCircle,
  Type,
  BarChart3,
  Settings,
  Rocket,
  Heart,
  Download,
  Share2,
} from 'lucide - react';

const Tutorials = () => {
  const tutorialCategories = [
    {
      title: 'Beginner',
      description: 'Perfect for those new to AI and technology',
      color: 'from - green - 500 to - emerald - 500',
      count: '12',
    },
    {
      title: 'Intermediate',
      description: 'For users with some experience',
      color: 'from - yellow - 500 to - orange - 500',
      count: '18',
    },
    {
      title: 'Advanced',
      description: 'Complex topics for experienced users',
      color: 'from - red - 500 to - pink - 500',
      count: '8',
    },
    {
      title: 'Expert',
      description: 'Cutting - edge research and techniques',
      color: 'from - purple - 500 to - indigo - 500',
      count: '5',
    },
  ];

  const featuredTutorials = [
    {
      title: 'AI Autonomous Research Assistant Implementation',
      description:
        'Learn to implement and configure AI Autonomous Research Assistant systems for enterprise research and intelligence gathering.',
      category: 'Advanced',
      duration: '75 min',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: '1.2k',
      thumbnail: '/images / tutorials / ai - autonomous - research.jpg',
    },
    {
      title: 'AI Supply Chain Optimization Setup',
      description:
        'Master the implementation of AI - powered supply chain optimization solutions for cost reduction and efficiency improvement.',
      category: 'Expert',
      duration: '90 min',
      instructor: 'Michael Rodriguez',
      rating: 4.8,
      students: '856',
      thumbnail: '/images / tutorials / ai - supply - chain.jpg',
    },
    {
      title: 'Building Your First AI Chatbot',
      description:
        'Learn to create a conversational AI chatbot using our platform. This comprehensive tutorial covers everything from data preparation to deployment.',
      category: 'Beginner',
      duration: '45 min',
      instructor: 'Dr. Sarah Chen',
      rating: 4.8,
      students: '2.3k',
      thumbnail: '/images / tutorials / ai - chatbot.jpg',
    },
    {
      title: 'Quantum Neural Network Implementation',
      description:
        'Dive deep into quantum computing and implement neural networks that leverage quantum properties for enhanced performance.',
      category: 'Advanced',
      duration: '90 min',
      instructor: 'Michael Rodriguez',
      rating: 4.9,
      students: '856',
      thumbnail: '/images / tutorials / quantum - neural.jpg',
    },
    {
      title: 'Cybersecurity Best Practices',
      description:
        'Master essential cybersecurity concepts and implement robust security measures to protect your applications and data.',
      category: 'Intermediate',
      duration: '60 min',
      instructor: 'James Wilson',
      rating: 4.7,
      students: '1.5k',
      thumbnail: '/images / tutorials / cybersecurity.jpg',
    },
    {
      title: 'AI Model Optimization',
      description:
        'Learn advanced techniques to optimize your AI models for better performance, faster inference, and reduced resource consumption.',
      category: 'Expert',
      duration: '75 min',
      instructor: 'Dr. Emily Watson',
      rating: 4.6,
      students: '623',
      thumbnail: '/images / tutorials / ai - optimization.jpg',
    },
  ];

  const [searchTerm, setSearchTerm] = useState ('') ;
  const [selectedCategory, setSelectedCategory] = useState ('all') ;
  const [sortBy, setSortBy] = useState ('popular') ;

  const filteredTutorials = featuredTutorials.filter (tutorial => {
    const matchesSearch = tutorial.title.toLowerCase () .includes (searchTerm.toLowerCase () ) ||
      tutorial.description.toLowerCase () .includes (searchTerm.toLowerCase () ) ;
    const matchesCategory = selectedCategory === 'all' ||
      tutorial.category.toLowerCase () === selectedCategory.toLowerCase () ;
    return matchesSearch && matchesCategory;
  }) ;

  const sortedTutorials = [...filteredTutorials].sort ( (a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'duration':
        return parseInt (a.duration) - parseInt (b.duration) ;
      case 'students':
        return (parseInt (b.students.replace ('k', '000') ) -
          parseInt (a.students.replace ('k', '000') ) ) ;
      default:
        return (parseInt (b.students.replace ('k', '000') ) -
          parseInt (a.students.replace ('k', '000') ) ) ;
    }
  }) ;

  return (<div
      role="button"
      className="min - h-screen bg - gradient - to - br from - slate - 50 to - slate - 100 dark:from - slate - 900 dark:to - slate - 800"
    >
      {/* Header */}
      <div
        role="button"
        className="bg - white dark:bg - slate - 800 shadow - sm border - b border - slate - 200 dark:border - slate - 700"
      >
        <div
          role="button"
          className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8"
        >
          <div role="button" className="text - center">
            <h1 className="text - 4xl font - bold text - slate - 900 dark:text - white mb - 4">
              AI & Technology Tutorials
            </h1>
            <p className="text - xl text - slate - 600 dark:text - slate - 400 max - w-3xl mx - auto">
              Master the latest AI technologies, cybersecurity practices, and
              digital transformation strategies with our comprehensive tutorial
              library.
            </p>
          </div>
        </div>
      </div>

      <div
        role="button"
        className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8"
      >
        {/* Search and Filters */}
        <div
          role="button"
          className="bg - white dark:bg - slate - 800 rounded - lg shadow - sm border border - slate - 200 dark:border - slate - 700 p - 6 mb - 8"
        >
          <div role="button" className="flex flex - col lg:flex - row gap - 4">
            {/* Search */}
            <div role="button" className="flex - 1">
              <div role="button" className="relative">
                <Search className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text - slate - 400 w - 5 h - 5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={e => setSearchTerm (e.target.value) }
                  className="w - full pl - 10 pr - 4 py - 3 border border - slate - 300 dark:border - slate - 600 rounded - lg bg - white dark:bg - slate - 700 text - slate - 900 dark:text - white placeholder - slate - 500 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div role="button" className="lg:w - 48">
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory (e.target.value) }
                className="w - full px - 4 py - 3 border border - slate - 300 dark:border - slate - 600 rounded - lg bg - white dark:bg - slate - 700 text - slate - 900 dark:text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent"
              >
                <option value="all">All Categories</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            {/* Sort */}
            <div role="button" className="lg:w - 48">
              <select
                value={sortBy}
                onChange={e => setSortBy (e.target.value) }
                className="w - full px - 4 py - 3 border border - slate - 300 dark:border - slate - 600 rounded - lg bg - white dark:bg - slate - 700 text - slate - 900 dark:text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent"
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
        <div
          role="button"
          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6 mb - 8"
        >
          {tutorialCategories.map ( (category, index) => (<div
              role="button"
              key={index}
              className={`bg - gradient - to - br ${category.color} rounded - lg p - 6 text - white shadow - lg hover:shadow - xl transition - all duration - 300 transform hover:-translate - y-1`}
            >
              <div
                role="button"
                className="flex items - center justify - between mb - 4"
              >
                <h3 className="text - lg font - semibold">{category.title}</h3>
                <span className="bg - white bg - opacity - 20 px - 3 py - 1 rounded - full text - sm font - medium">
                  {category.count}
                </span>
              </div>
              <p className="text - white text - opacity - 90 text - sm">
                {category.description}
              </p>
            </div>) ) }
        </div>

        {/* Tutorials Grid */}
        <div
          role="button"
          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6"
        >
          {sortedTutorials.map ( (tutorial, index) => (<div
              role="button"
              key={index}
              className="bg - white dark:bg - slate - 800 rounded - lg shadow - sm border border - slate - 200 dark:border - slate - 700 overflow - hidden hover:shadow - lg transition - all duration - 300 transform hover:-translate - y-1"
            >
              {/* Thumbnail */}
              <div
                role="button"
                className="relative h - 48 bg - gradient - to - br from - slate - 200 to - slate - 300 dark:from - slate - 700 dark:to - slate - 600"
              >
                <div
                  role="button"
                  className="absolute inset - 0 flex items - center justify - center"
                >
                  <Play className="w - 16 h - 16 text - slate - 400" />
                </div>
                <div role="button" className="absolute top - 3 right - 3">
                  <span
                    className={`px - 2 py - 1 text - xs font - medium rounded - full ${
                      tutorial.category === 'Beginner'
                        ? 'bg - green - 100 text - green - 800'
                        : tutorial.category === 'Intermediate'
                          ? 'bg - yellow - 100 text - yellow - 800'
                          : tutorial.category === 'Advanced'
                            ? 'bg - red - 100 text - red - 800'
                            : 'bg - purple - 100 text - purple - 800'
                    }`}
                  >
                    {tutorial.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div role="button" className="p - 6">
                <h3 className="text - lg font - semibold text - slate - 900 dark:text - white mb - 2 line - clamp - 2">
                  {tutorial.title}
                </h3>
                <p className="text - slate - 600 dark:text - slate - 400 text - sm mb - 4 line - clamp - 3">
                  {tutorial.description}
                </p>

                {/* Meta */}
                <div
                  role="button"
                  className="flex items - center justify - between text - sm text - slate - 500 dark:text - slate - 400 mb - 4"
                >
                  <div role="button" className="flex items - center gap - 2">
                    <Clock className="w - 4 h - 4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div role="button" className="flex items - center gap - 2">
                    <Users className="w - 4 h - 4" />
                    <span>{tutorial.students}</span>
                  </div>
                </div>

                {/* Instructor and Rating */}
                <div
                  role="button"
                  className="flex items - center justify - between mb - 4"
                >
                  <div role="button" className="flex items - center gap - 2">
                    <div
                      role="button"
                      className="w - 8 h - 8 bg - gradient - to - br from - cyan - 500 to - blue - 500 rounded - full flex items - center justify - center"
                    >
                      <span className="text - white text - xs font - medium">
                        {tutorial.instructor
                          .split (' ') .map (n => n[0]) .join ('') }
                      </span>
                    </div>
                    <span className="text - sm text - slate - 700 dark:text - slate - 300">
                      {tutorial.instructor}
                    </span>
                  </div>
                  <div role="button" className="flex items - center gap - 1">
                    <Star className="w - 4 h - 4 text - yellow - 400 fill - current" />
                    <span className="text - sm font - medium">
                      {tutorial.rating}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div role="button" className="flex items - center gap - 3">
                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button"
                    className="flex - 1 bg - cyan - 600 hover:bg - cyan - 700 text - white px - 4 py - 2 rounded - lg font - medium transition - colors flex items - center justify - center gap - 2"
                  >
                    <Play className="w - 4 h - 4" />
                    Start Learning
                  </button>
                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button"
                    className="p - 2 text - slate - 400 hover:text - slate - 600 dark:hover:text - slate - 200 transition - colors"
                  >
                    <Heart className="w - 5 h - 5" />
                  </button>
                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button"
                    className="p - 2 text - slate - 400 hover:text - slate - 600 dark:hover:text - slate - 200 transition - colors"
                  >
                    <Share2 className="w - 5 h - 5" />
                  </button>
                </div>
              </div>
            </div>) ) }
        </div>

        {/* Load More */}
        {sortedTutorials.length > 0 && (<div role="button" className="text - center mt - 12">
            <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button"
              className="bg - white dark:bg - slate - 800 hover:bg - slate - 50 dark:hover:bg - slate - 700 text - slate - 700 dark:text - slate - 300 px - 8 py - 3 rounded - lg border border - slate - 300 dark:border - slate - 600 font - medium transition - all duration - 300 hover:shadow - lg transform hover:-translate - y-1"
            >
              Load More Tutorials
            </button>
          </div>) }

        {/* Empty State */}
        {sortedTutorials.length === 0 && (<div role="button" className="text - center py - 16">
            <BookOpen className="w - 16 h - 16 text - slate - 400 mx - auto mb - 4" />
            <h3 className="text - xl font - semibold text - slate - 900 dark:text - white mb - 2">
              No tutorials found
            </h3>
            <p className="text - slate - 600 dark:text - slate - 400 mb - 6">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
            <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button"
              onClick={ () => {
                setSearchTerm ('') ;
                setSelectedCategory ('all') ;
                setSortBy ('popular') ;
              }}
              className="bg - cyan - 600 hover:bg - cyan - 700 text - white px - 6 py - 2 rounded - lg font - medium transition - colors"
            >
              Clear Filters
            </button>
          </div>) }
      </div>
    </div>) ;
};
