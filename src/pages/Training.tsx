import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import { SEO } from '../components/SEO';

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
      title: 'Data Science & Analytics',
      description: 'Learn data analysis, visualization, and statistical modeling techniques',
      category: 'data',
      level: 'intermediate',
      format: 'online',
      duration: '10 weeks',
      instructor: 'Dr. James Wilson',
      rating: 4.6,
      students: 2103,
      price: '$349',
      image: '/images/training/data-science.jpg',
      tags: ['Python', 'R', 'SQL', 'Tableau', 'Machine Learning'],
      features: [
        'Real-world data projects',
        'Statistical analysis tools',
        'Data visualization skills',
        'Portfolio development'
      ]
    },
    {
      id: 5,
      title: 'Digital Transformation Leadership',
      description: 'Lead organizational change and digital transformation initiatives',
      category: 'leadership',
      level: 'expert',
      format: 'hybrid',
      duration: '4 weeks',
      instructor: 'Jennifer Park',
      rating: 4.8,
      students: 45,
      price: '$3999',
      image: '/images/training/digital-leadership.jpg',
      tags: ['Leadership', 'Digital Transformation', 'Change Management', 'Strategy'],
      features: [
        'Digital Strategy Development',
        'Change Management and Culture',
        'Technology Selection and Implementation',
        'Stakeholder Management',
        'Success Measurement'
      ]
    }
  ];

  // Update counts
  React.useEffect(() => {
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = trainingPrograms.length;
      } else {
        cat.count = trainingPrograms.filter(program => program.category === cat.id).length;
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
  }, []);

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
    const matchesFormat = activeFormat === 'all' || program.format === activeFormat;

    return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? React.createElement(category.icon, { className: "w-5 h-5" }) : <GraduationCap className="w-5 h-5" />;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-orange-400';
      case 'expert': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'online': return <Globe className="w-4 h-4" />;
      case 'in-person': return <MapPin className="w-4 h-4" />;
      case 'hybrid': return <Users className="w-4 h-4" />;
      case 'self-paced': return <Clock className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <>
      <SEO 
        title="Training & Development - Zion Tech Group"
        description="Comprehensive training programs in AI, cloud computing, cybersecurity, and emerging technologies. Advance your career with expert-led courses."
        keywords="training, AI courses, cloud computing, cybersecurity, machine learning, professional development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Training & Development
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Master cutting-edge technologies with our comprehensive training programs. 
                From AI fundamentals to advanced cloud architecture, advance your skills with expert-led courses.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search training programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filter Tabs */}
              <div className="space-y-4">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-medium text-slate-300 mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
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
                    <h3 className="text-sm font-medium text-slate-300 mb-3">Skill Level</h3>
                    <div className="flex flex-wrap gap-2">
                      {levels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setActiveLevel(level.id)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeLevel === level.id
                              ? 'bg-purple-600 text-white'
                              : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                          }`}
                        >
                          {level.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-300 mb-3">Format</h3>
                    <div className="flex flex-wrap gap-2">
                      {formats.map((format) => (
                        <button
                          key={format.id}
                          onClick={() => setActiveFormat(format.id)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeFormat === format.id
                              ? 'bg-green-600 text-white'
                              : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
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
        </div>

        {/* Training Programs Grid */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            {filteredPrograms.length === 0 ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No training programs found</h3>
                <p className="text-slate-400">
                  Try adjusting your search criteria or filters to find what you're looking for.
                </p>
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="h-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                      {/* Header */}
                      <div className="p-6 border-b border-slate-700">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <GraduationCap className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                              {program.category.replace('-', ' ')}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-white">{program.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                          {program.title}
                        </h3>
                        <p className="text-slate-300 line-clamp-3">
                          {program.description}
                        </p>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Program Details */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Clock className="w-4 h-4" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Users className="w-4 h-4" />
                            <span>{program.students} students</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Users className="w-4 h-4" />
                            <span>{program.instructor}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <DollarSign className="w-4 h-4" />
                            <span>{program.price}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {program.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-md border border-blue-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                          {program.tags.length > 3 && (
                            <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-md">
                              +{program.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Features */}
                        <div className="space-y-2">
                          {program.features.slice(0, 2).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-400">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2">
                          <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                            <Play className="w-4 h-4 mr-2 inline" />
                            Enroll Now
                          </button>
                          <button className="p-2 border border-slate-600 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join thousands of professionals who have transformed their careers with our expert-led training programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors hover:scale-105">
                  Browse All Courses
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-slate-900 transition-colors">
                  Contact Training Team
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
