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
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const Training: React.FC = () => {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
                Master cutting-edge technologies with our comprehensive training programs. 
                From AI fundamentals to advanced cloud architecture, advance your skills with expert-led courses.
              </p>
            </motion.div>
          </div>
        </motion.div>
        {/* Search and Filters */}
        <div className="container mx-auto px-4 pb-12">
          <motion.div
            className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-blue-light/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search training programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Filter Tabs */}
            <div className="space-y-4">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium text-zion-slate-light mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <category.icon className="w-4 h-4" />
                        {category.name}
                        <span className="text-xs opacity-75">({category.count})</span>
                      </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                    </button>
                  ))}
                </div>
              </div>
              {/* Levels and Formats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-zion-slate-light mb-3">Skill Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setActiveLevel(level.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeLevel === level.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white'
                        }`}
                      >
                        {level.name}
                      </button>
                    ))}
                  </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zion-slate-light mb-3">Format</h3>
                  <div className="flex flex-wrap gap-2">
                    {formats.map((format) => (
                      <button
                        key={format.id}
                        onClick={() => setActiveFormat(format.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeFormat === format.id
                            ? 'bg-green-600 text-white'
                            : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white'
                        }`}
                      >
                        {format.name}
                      </button>
                    ))}
                  </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
                <Card className="h-full bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/20 hover:border-zion-blue-light/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-zion-slate-light uppercase tracking-wide">
                          {program.category.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-white">{program.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white mb-2 line-clamp-2">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-zion-slate-light line-clamp-3">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Program Details */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                        <Users className="w-4 h-4" />
                        <span>{program.students} students</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Users className="w-4 h-4" />
                        <span>{program.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <DollarSign className="w-4 h-4" />
                        <span>{program.price}</span>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {program.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zion-blue-dark/30 text-zion-cyan text-xs rounded-md border border-zion-cyan/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {program.tags.length > 3 && (
                        <span className="px-2 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-xs rounded-md">
                          +{program.tags.length - 3} more
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                        </span>
                      )}
                    </div>
                    {/* Features */}
                    <div className="space-y-2">
                      {program.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Play className="w-4 h-4 mr-2" />
                        Enroll Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          {/* No Results */}
          {filteredPrograms.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-zion-slate-dark/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-zion-slate-light" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No training programs found</h3>
              <p className="text-zion-slate-light">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};
export default Training;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
