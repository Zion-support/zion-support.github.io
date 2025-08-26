import React from 'react';
import { Link } from 'react-router-dom';

const Tutorials: React.FC = () => {
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
    },
    {
      title: "Expert",
      description: "Cutting-edge research and techniques",
      color: "from-purple-500 to-indigo-500",
      count: "5"
    }
  ];

  const featuredTutorials = [
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
      category: "Expert",
      duration: "75 min",
      instructor: "Dr. Emily Watson",
      rating: 4.6,
      students: "623",
      thumbnail: "/images/tutorials/model-optimization.jpg"
    }
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
      title: "Machine Learning Model Deployment",
      category: "Advanced",
      duration: "65 min",
      instructor: "Michael Rodriguez",
      rating: 4.7,
      students: "345"
    }
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
    {
      title: "Quantum Computing Engineer",
      description: "Learn quantum algorithms and applications",
      courses: 5,
      duration: "10 weeks",
      level: "Advanced to Expert"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Video
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Tutorials
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master cutting-edge technologies with our comprehensive video tutorials. 
              From AI fundamentals to advanced quantum computing, learn at your own pace 
              with expert instructors.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search for tutorials, topics, or instructors..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300">
                Search
              </button>
            </div>
          </div>
          
          {/* Difficulty Levels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tutorialCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{category.count}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{category.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Featured Tutorials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Tutorials</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 text-xs rounded-full border ${
                      tutorial.category === 'Beginner' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                      tutorial.category === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                      tutorial.category === 'Advanced' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                      'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    }`}>
                      {tutorial.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-300">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{tutorial.duration}</span>
                      <span>{tutorial.students} students</span>
                    </div>
                    <span className="text-sm text-blue-400">Instructor: {tutorial.instructor}</span>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Start Learning
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Learning Paths */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningPaths.map((path, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{path.title}</h3>
                  <p className="text-gray-300 mb-4">{path.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Courses:</span>
                      <span>{path.courses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span>{path.level}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 border border-gray-600 text-white text-sm rounded-lg hover:bg-gray-800 transition-all duration-300">
                    View Path
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Tutorials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recently Added</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentTutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tutorial.category === 'Beginner' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      tutorial.category === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                      'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {tutorial.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-xs text-gray-300">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">Instructor: {tutorial.instructor}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span>{tutorial.duration}</span> • <span>{tutorial.students} students</span>
                    </div>
                    <button className="px-4 py-2 border border-gray-600 text-white text-sm rounded-lg hover:bg-gray-800 transition-all duration-300">
                      Watch
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of learners who are mastering cutting-edge technologies 
                with our comprehensive tutorial library. Start your learning journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/help-center"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Browse All Tutorials
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Request Tutorial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;