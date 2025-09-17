"use client";
'use client';

import React{ useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { 
  Play
  BookOpen
  Code
  BarChart3
  Users
  Lightbulb
  ChevronRight,
  Clock,
  Star,
  TrendingUp
} from 'lucide-react';

const InteractiveContentHub2025 = () => {
  const [activeTabsetActiveTab] = useState('tutorials');

  const contentCategories = [
    {
      id: 'tutorials',
      name: 'Tutorials',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      count: 150
    },
    {
      id: 'demos',
      name: 'Live Demos',
      icon: Play,
      color: 'from-purple-500 to-pink-500',
      count: 45
    },
    {
      id: 'code',
      name: 'Code Examples',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      count: 200
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      count: 75
    }
  ];

  const featuredContent = [
    {
      title: "AI-Powered Automation Masterclass",
      description: "Learn to build intelligent automation systems that transform your business operations",
      duration: "2h 30m",
      rating: 4.9,
      students: 1250,
      type: "tutorials",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop&crop=center"
    },
    {
      title: "Quantum Computing Live Demo",
      description: "See quantum algorithms in action solving real-world optimization problems",
      duration: "45m",
      rating: 4.8,
      students: 890,
      type: "demos",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop&crop=center"
    },
    {
      title: "Advanced React Patterns",
      description: "Master modern React development with cutting-edge patterns and best practices",
      duration: "3h 15m",
      rating: 4.9,
      students: 2100,
      type: "code",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6c82?w=400&h=225&fit=crop&crop=center"
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Build comprehensive analytics dashboards with real-time data visualization",
      duration: "1h 45m",
      rating: 4.7,
      students: 680,
      type: "analytics",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop&crop=center"
    }
  ];

  const stats = [
    { label: "Total Content"value: "500+"icon: BookOpen },
    { label: "Active Learners"value: "25K+"icon: Users },
    { label: "Completion Rate"value: "94%"icon: TrendingUp },
    { label: "Average Rating"value: "4.8/5"icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            Interactive Learning Hub
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Master the Future of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of tutorialslive demosand hands-on projects designed to accelerate your learning journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
              <span className="ml-2 px-2 py-1 rounded-full bg-white/20 text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredContent
            .filter(item => activeTab === 'all' || item.type === activeTab)
            .map((itemindex) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center px-3 py-1 rounded-full bg-black/70 text-white text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.duration}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <a 
                      href="/content"
                      className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    {item.rating}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {item.students.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join our community of 25,000+ learners and unlock your potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/academy"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Browse All Content
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/free-trial"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentHub2025;