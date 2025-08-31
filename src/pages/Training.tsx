import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  Search, 
  Filter, 
  Play, 
  Download, 
  ExternalLink, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Globe, 
  Target, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  DollarSign, 
  FileText, 
  Lightbulb, 
  Microscope, 
  Rocket, 
  Code, 
  Network, 
  Cpu, 
  Lock, 
  BarChart3, 
  Palette, 
  Smartphone, 
  Eye
} from 'lucide-react';

export default function Training() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: GraduationCap, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 7 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 4 },
    { id: 'strategy', name: 'Digital Strategy', icon: Target, count: 3 },
    { id: 'leadership', name: 'Leadership & Management', icon: Users, count: 4 }
  ];

  const levels = [
    { id: 'all', name: 'All Levels', count: 0 },
    { id: 'beginner', name: 'Beginner', count: 0 },
    { id: 'intermediate', name: 'Intermediate', count: 0 },
    { id: 'advanced', name: 'Advanced', count: 0 },
    { id: 'expert', name: 'Expert', count: 0 }
  ];

  const formats = [
    { id: 'all', name: 'All Formats', count: 0 },
    { id: 'online', name: 'Online', count: 0 },
    { id: 'in-person', name: 'In-Person', count: 0 },
    { id: 'hybrid', name: 'Hybrid', count: 0 },
    { id: 'self-paced', name: 'Self-Paced', count: 0 }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: 'AI Fundamentals & Machine Learning',
      description: 'Master the basics of artificial intelligence and machine learning algorithms',
      category: 'ai-ml',
      level: 'beginner',
      format: 'online',
      duration: '8 weeks',
      instructor: 'Dr. Sarah Chen',
      rating: 4.8,
      students: 1247,
      price: '$299',
      image: '/images/training/ai-fundamentals.jpg',
      tags: ['Python', 'TensorFlow', 'Neural Networks', 'Data Science'],
      features: [
        'Hands-on projects with real datasets',
        'Live Q&A sessions with experts',
        'Certificate upon completion',
        'Lifetime access to materials'
      ]
    },
    {
      id: 2,
      title: 'Advanced Cloud Architecture',
      description: 'Design and implement scalable cloud solutions for enterprise applications',
      category: 'cloud',
      level: 'advanced',
      format: 'hybrid',
      duration: '12 weeks',
      instructor: 'Michael Rodriguez',
      rating: 4.9,
      students: 892,
      price: '$499',
      image: '/images/training/cloud-architecture.jpg',
      tags: ['AWS', 'Azure', 'Kubernetes', 'Microservices'],
      features: [
        'Real-world case studies',
        'Architecture design workshops',
        'Industry best practices',
        'Networking opportunities'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Masterclass',
      description: 'Comprehensive security training covering threat detection and prevention',
      category: 'security',
      level: 'intermediate',
      format: 'in-person',
      duration: '6 weeks',
      instructor: 'Lisa Thompson',
      rating: 4.7,
      students: 1563,
      price: '$399',
      image: '/images/training/cybersecurity.jpg',
      tags: ['Penetration Testing', 'Incident Response', 'Compliance', 'Risk Management'],
      features: [
        'Hands-on lab exercises',
        'Security tool training',
        'Industry certifications',
        'Career guidance'
      ]
    },
    {
      id: 4,
      title: 'Data Science & Analytics Bootcamp',
      description: 'Intensive program covering data analysis, visualization, and machine learning',
      category: 'data',
      level: 'intermediate',
      format: 'hybrid',
      duration: '10 weeks',
      instructor: 'Dr. Alex Johnson',
      rating: 4.8,
      students: 987,
      price: '$449',
      image: '/images/training/data-science.jpg',
      tags: ['Python', 'R', 'SQL', 'Tableau', 'Machine Learning'],
      features: [
        'Real-world data projects',
        'Industry case studies',
        'Portfolio development',
        'Career placement support'
      ]
    },
    {
      id: 5,
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles and applications',
      category: 'emerging',
      level: 'advanced',
      format: 'online',
      duration: '6 weeks',
      instructor: 'Dr. Maria Santos',
      rating: 4.9,
      students: 456,
      price: '$599',
      image: '/images/training/quantum-computing.jpg',
      tags: ['Quantum Mechanics', 'Qubits', 'Quantum Algorithms', 'IBM Q'],
      features: [
        'Hands-on quantum programming',
        'Access to quantum computers',
        'Research collaboration opportunities',
        'Advanced certification'
      ]
    },
    {
      id: 6,
      title: 'Digital Transformation Leadership',
      description: 'Strategic leadership program for digital transformation initiatives',
      category: 'strategy',
      level: 'expert',
      format: 'in-person',
      duration: '4 weeks',
      instructor: 'Jennifer Park',
      rating: 4.8,
      students: 234,
      price: '$3999',
      image: '/images/training/digital-transformation.jpg',
      tags: ['Leadership', 'Digital Strategy', 'Change Management', 'Innovation'],
      features: [
        'Executive coaching sessions',
        'Industry networking events',
        'Strategic planning workshops',
        'Executive certification'
      ]
    }
  ];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
    const matchesFormat = activeFormat === 'all' || program.format === activeFormat;

    return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
  });

  // Update counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = trainingPrograms.length;
    } else {
      category.count = trainingPrograms.filter(program => program.category === category.id).length;
    }
  });

  levels.forEach(level => {
    if (level.id === 'all') {
      level.count = trainingPrograms.length;
    } else {
      level.count = trainingPrograms.filter(program => program.level === level.id).length;
    }
  });

  formats.forEach(format => {
    if (format.id === 'all') {
      format.count = trainingPrograms.length;
    } else {
      format.count = trainingPrograms.filter(program => program.format === format.id).length;
    }
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : GraduationCap;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-orange-400';
      case 'expert': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'online': return Globe;
      case 'in-person': return MapPin;
      case 'hybrid': return Users;
      case 'self-paced': return Clock;
      default: return BookOpen;
    }
  };

  return (
    <>
      <SEO 
        title="Training & Development - Zion Tech Group"
        description="Comprehensive training programs in AI, cloud computing, cybersecurity, and emerging technologies. Advance your career with expert-led courses."
        keywords="training, AI courses, cloud computing, cybersecurity, machine learning, professional development"
        canonicalUrl="https://ziontechgroup.com/training"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <motion.div
          className="relative py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Training & Development
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Master cutting-edge technologies with our comprehensive training programs. 
                From AI fundamentals to advanced cloud architecture, advance your skills with expert-led courses.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <div className="container mx-auto px-4 pb-12">
          <motion.div
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search training programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Tabs */}
            <div className="space-y-4">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <category.icon className="w-4 h-4" />
                        {category.name}
                        <span className="text-xs opacity-75">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Levels and Formats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Skill Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setActiveLevel(level.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeLevel === level.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        {level.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Format</h3>
                  <div className="flex flex-wrap gap-2">
                    {formats.map((format) => (
                      <button
                        key={format.id}
                        onClick={() => setActiveFormat(format.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeFormat === format.id
                            ? 'bg-green-600 text-white'
                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        {format.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Training Programs Grid */}
        <div className="container mx-auto px-4 pb-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="h-full bg-slate-800/80 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 rounded-xl overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                          {program.category.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-white">{program.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl text-white mb-2 line-clamp-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-300 line-clamp-3">
                      {program.description}
                    </p>
                  </div>
                  
                  <div className="px-6 pb-6 space-y-4">
                    {/* Program Details */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="w-4 h-4" />
                        <span>{program.students} students</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="w-4 h-4" />
                        <span>{program.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <DollarSign className="w-4 h-4" />
                        <span>{program.price}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {program.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-md border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {program.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-800/50 text-gray-300 text-xs rounded-md">
                          +{program.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {program.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center justify-center">
                        <Play className="w-4 h-4 mr-2" />
                        Enroll Now
                      </button>
                      <button className="border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredPrograms.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No training programs found</h3>
              <p className="text-gray-300">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Join thousands of professionals who have transformed their careers with our expert-led training programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Browse All Courses
                </button>
                
                <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
