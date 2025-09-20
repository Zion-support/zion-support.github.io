import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Play, Clock, Star, Users, BookOpen, Video, Code, Brain, Shield, Database, Globe, Zap, ArrowRight, Filter, TrendingUp, Lightbulb, Target, Award, Eye, MessageCircle, Type, BarChart3, Settings, Rocket, Heart, Download, Share2 } from "lucide-react"
const Tutorials = () () => {
  const tutorialCategories = [
    {
      tit,
  l: e: "Beginner",descripti,
  o: n: "Perfect for those new to AI and technology",col,
  o: r: "from-green-500 to-emerald-500",cou,
  n: t: "12"
    }, {
      tit,
  l: e: "Intermediate",descripti,
  o: n: "For users with some experience",col,
  o: r: "from-yellow-500 to-orange-500",cou,
  n: t: "18"
    }, {
      tit,
  l: e: "Advanced",descripti,
  o: n: "Complex topics for experienced users",col,
  o: r: "from-red-500 to-pink-500",cou,
  n: t: "8"
    }, {
      tit,
  l: e: "Expert",descripti,
  o: n: "Cutting-edge research and techniques",col,
  o: r: "from-purple-500 to-indigo-500",cou,
  n: t: "5"
    }
  ]
  const featuredTutorials = [
    {
      tit,
  l: e: "AI Autonomous Research Assistant Implementation",descripti,
  o: n: "Learn to implement and configure AI Autonomous Research Assistant systems for enterprise research and intelligence gathering.",catego,
  r: y: "Advanced",durati,
  o: n: "75 min",instruct,
  o: r: "Dr. Sarah Chen",rati,
  n: g: 4.9,studen,
  t: s: "1.2k",thumbna,
  i: l: "/images/tutorials/ai-autonomous-research.jpg"
    }, {
      tit,
  l: e: "AI Supply Chain Optimization Setup",descripti,
  o: n: "Master the implementation of AI-powered supply chain optimization solutions for cost reduction and efficiency improvement.",catego,
  r: y: "Expert",durati,
  o: n: "90 min",instruct,
  o: r: "Michael Rodriguez",rati,
  n: g: 4.8,studen,
  t: s: "856",thumbna,
  i: l: "/images/tutorials/ai-supply-chain.jpg"
    }, {
      tit,
  l: e: "Building Your First AI Chatbot",descripti,
  o: n: "Learn to create a conversational AI chatbot using our platform. This comprehensive tutorial covers everything from data preparation to deployment.",catego,
  r: y: "Beginner",durati,
  o: n: "45 min",instruct,
  o: r: "Dr. Sarah Chen",rati,
  n: g: 4.8,studen,
  t: s: "2.3k",thumbna,
  i: l: "/images/tutorials/ai-chatbot.jpg"
    }, {
      tit,
  l: e: "Quantum Neural Network Implementation",descripti,
  o: n: "Dive deep into quantum computing and implement neural networks that leverage quantum properties for enhanced performance.",catego,
  r: y: "Advanced",durati,
  o: n: "90 min",instruct,
  o: r: "Michael Rodriguez",rati,
  n: g: 4.9,studen,
  t: s: "856",thumbna,
  i: l: "/images/tutorials/quantum-neural.jpg"
    }, {
      tit,
  l: e: "Cybersecurity Best Practices",descripti,
  o: n: "Master essential cybersecurity concepts and implement robust security measures to protect your applications and data.",catego,
  r: y: "Intermediate",durati,
  o: n: "60 min",instruct,
  o: r: "James Wilson",rati,
  n: g: 4.7,studen,
  t: s: "1.5k",thumbna,
  i: l: "/images/tutorials/cybersecurity.jpg"
    }, {
      tit,
  l: e: "AI Model Optimization",descripti,
  o: n: "Learn advanced techniques to optimize your AI models for better performance, faster inference, and reduced resource consumption."
      catego,
  r: y: "Expert",durati,
  o: n: "75 min",instruct,
  o: r: "Dr. Emily Watson",rati,
  n: g: 4.6,studen,
  t: s: "623",thumbna,
  i: l: "/images/tutorials/model-optimization.jpg"
    }
  ]
  const recentTutorials = [
    {
      tit,
  l: e: "Data Pipeline Automation",catego,
  r: y: "Intermediate",durati,
  o: n: "40 min",instruct,
  o: r: "David Kim",rati,
  n: g: 4.5,studen,
  t: s: "432"
    }, {
      tit,
  l: e: "Cloud Infrastructure Setup",catego,
  r: y: "Beginner",durati,
  o: n: "35 min",instruct,
  o: r: "Lisa Thompson",rati,
  n: g: 4.4,studen,
  t: s: "789"
    }, {
      tit,
  l: e: "API Integration Patterns",catego,
  r: y: "Intermediate",durati,
  o: n: "50 min",instruct,
  o: r: "Dr. Sarah Chen",rati,
  n: g: 4.6,studen,
  t: s: "567"
    }, {
      tit,
  l: e: "Machine Learning Model Deployment",catego,
  r: y: "Advanced",durati,
  o: n: "65 min",instruct,
  o: r: "Michael Rodriguez",rati,
  n: g: 4.7,studen,
  t: s: "345"
    }
  ]
  const learningPaths = [
    {
      tit,
  l: e: "AI Developer Path",descripti,
  o: n: "Complete path from beginner to AI expert",cours,
  e: s: 8,durati,
  o: n: "12 weeks",lev,
  e: l: "Beginner to Expert"
    }, {
      tit,
  l: e: "Cybersecurity Specialist",descripti,
  o: n: "Master security and compliance",cours,
  e: s: 6,durati,
  o: n: "8 weeks",lev,
  e: l: "Intermediate to Expert"
    }, {
      tit,
  l: e: "Quantum Computing Engineer",descripti,
  o: n: "Learn quantum algorithms and applications",cours,
  e: s: 5,durati,
  o: n: "10 weeks",lev,
  e: l: "Advanced to Expert"
    }
  ]
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-6xl,
  m: d: text-7xl font-bold text-white mb-8 leading-tight">
            Interactive{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Tutorials
            </span>
          </h1>
          <p className="text-xl,
  m: d:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Master cutting-edge technologies with our comprehensive tutorials
            hands-on projects, and expert-led learning paths.
          </p>

          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg,
  hove: r:scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-cyan/25">
              Start Learning
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300">
              Browse Tutorials
            </button>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Featured Tutorials
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Start your learning journey with our most popular and highly-rated tutorials
              covering the latest in AI, cybersecurity, and emerging technologies.
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <div
                key={index}
                className="className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden,
  hove: r:border-zion-cyan/40 transition-all duration-300 group";"
              >
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
                  <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
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
                    <button className="text-zion-cyan,
  hove: r:text-white transition-colors duration-300">
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
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Learning Paths
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Follow structured learning paths designed to take you from beginner
              to expert in your chosen technology domain.
            </p>
          </div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 text-center,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
              >
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
                    <Clock className="w-4 h-4" />
                    {path.duration}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-4 h-4" />
                    {path.level}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-semibold,
  hove: r:scale-105 transition-all duration-300">
                  Start Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of learners who are already mastering cutting-edge technologies
            with our comprehensive tutorial library and expert-led courses.
          </p>

          <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg,
  hove: r:scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-cyan/25">
              Get Started Today
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tutorials