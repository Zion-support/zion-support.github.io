import React from 'react';
import { SEO } from '@/components/SEO';

export default function Training() {
	return (
		<div className="min-h-screen bg-slate-900 text-white py-16">
			<SEO title="Training - Zion Tech Group" description="Workshops and training programs to upskill your team." />
			<div className="container mx-auto px-4 max-w-4xl">
				<h1 className="text-4xl font-bold mb-4">Training</h1>
				<p className="text-zinc-300">Hands-on workshops and certification-aligned programs.</p>
			</div>
		</div>
	);
}

import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, Clock, Star, Search, Filter, Play, Download, ExternalLink, ArrowRight, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle, Calendar, MapPin, DollarSign, FileText, Lightbulb, Microscope, Rocket, Code, Network, Cpu, Lock, BarChart3, Palette, Smartphone, Eye, Star as StarIcon } from 'lucide-react';

export default function Training() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: <GraduationCap className="w-5 h-5" />, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: 7 },
    { id: 'emerging', name: 'Emerging Technologies', icon: <Zap className="w-5 h-5" />, count: 4 },
    { id: 'strategy', name: 'Digital Strategy', icon: <Target className="w-5 h-5" />, count: 3 },
    { id: 'leadership', name: 'Leadership & Management', icon: <Users className="w-5 h-5" />, count: 4 }
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
      title: 'AI Fundamentals for Business Leaders',
      description: 'Essential AI concepts and strategies for business leaders to drive digital transformation and innovation.',
      category: 'ai-ml',
      level: 'beginner',
      format: 'hybrid',
      duration: '8 weeks',
      hours: 40,
      price: 2499,
      location: 'Online + NYC',
      startDate: '2025-03-01',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 156,
      featured: true,
      certification: 'AI Business Leadership Certificate',
      tags: ['AI', 'Leadership', 'Digital Transformation', 'Strategy'],
      modules: [
        'AI Fundamentals and Business Impact',
        'Machine Learning Applications',
        'AI Strategy Development',
        'Implementation Roadmap',
        'ROI Measurement and KPIs'
      ],
      skills: ['AI Strategy', 'Business Analysis', 'Change Management', 'Data Literacy']
    },
    {
      id: 2,
      title: 'Advanced Cybersecurity Architecture',
      description: 'Comprehensive training on designing and implementing enterprise-grade security architectures.',
      category: 'security',
      level: 'advanced',
      format: 'in-person',
      duration: '6 weeks',
      hours: 60,
      price: 3499,
      location: 'San Francisco, CA',
      startDate: '2025-03-15',
      instructor: 'Michael Rodriguez',
      rating: 4.8,
      students: 89,
      featured: true,
      certification: 'Cybersecurity Architecture Professional',
      tags: ['Cybersecurity', 'Architecture', 'Enterprise', 'Security Design'],
      modules: [
        'Security Architecture Principles',
        'Threat Modeling and Risk Assessment',
        'Identity and Access Management',
        'Network Security Design',
        'Incident Response Planning'
      ],
      skills: ['Security Architecture', 'Risk Assessment', 'IAM', 'Network Security', 'Incident Response']
    },
    {
      id: 3,
      title: 'Cloud-Native Application Development',
      description: 'Learn to build scalable, resilient applications using modern cloud-native technologies and practices.',
      category: 'cloud',
      level: 'intermediate',
      format: 'online',
      duration: '10 weeks',
      hours: 80,
      price: 1999,
      location: 'Online',
      startDate: '2025-02-20',
      instructor: 'David Kim',
      rating: 4.7,
      students: 234,
      featured: false,
      certification: 'Cloud-Native Developer',
      tags: ['Cloud Computing', 'Application Development', 'Microservices', 'DevOps'],
      modules: [
        'Cloud-Native Principles',
        'Container Technologies (Docker, Kubernetes)',
        'Microservices Architecture',
        'CI/CD Pipelines',
        'Monitoring and Observability'
      ],
      skills: ['Docker', 'Kubernetes', 'Microservices', 'CI/CD', 'Cloud Platforms']
    },
    {
      id: 4,
      title: 'Data Science for Business Intelligence',
      description: 'Transform raw data into actionable insights using advanced analytics and visualization techniques.',
      category: 'data',
      level: 'intermediate',
      format: 'hybrid',
      duration: '12 weeks',
      hours: 100,
      price: 2999,
      location: 'Online + Chicago',
      startDate: '2025-04-01',
      instructor: 'Dr. Robert Kim',
      rating: 4.6,
      students: 178,
      featured: false,
      certification: 'Data Science Professional',
      tags: ['Data Science', 'Business Intelligence', 'Analytics', 'Visualization'],
      modules: [
        'Data Analysis Fundamentals',
        'Statistical Methods and Modeling',
        'Machine Learning for Business',
        'Data Visualization and Storytelling',
        'Business Intelligence Tools'
      ],
      skills: ['Python', 'R', 'SQL', 'Tableau', 'Statistical Analysis', 'Machine Learning']
    },
    {
      id: 5,
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles and their potential applications in business.',
      category: 'emerging',
      level: 'beginner',
      format: 'online',
      duration: '6 weeks',
      hours: 30,
      price: 1499,
      location: 'Online',
      startDate: '2025-05-01',
      instructor: 'Dr. Elena Vasquez',
      rating: 4.9,
      students: 67,
      featured: true,
      certification: 'Quantum Computing Fundamentals',
      tags: ['Quantum Computing', 'Emerging Tech', 'Future Computing', 'Innovation'],
      modules: [
        'Quantum Mechanics Basics',
        'Qubits and Quantum Gates',
        'Quantum Algorithms',
        'Quantum Applications',
        'Future of Quantum Computing'
      ],
      skills: ['Quantum Mechanics', 'Quantum Algorithms', 'Innovation Strategy', 'Technology Trends']
    },
    {
      id: 6,
      title: 'Digital Transformation Leadership',
      description: 'Strategic leadership skills for driving successful digital transformation initiatives.',
      category: 'leadership',
      level: 'advanced',
      format: 'in-person',
      duration: '4 weeks',
      hours: 32,
      price: 3999,
      location: 'Boston, MA',
      startDate: '2025-06-01',
      instructor: 'Jennifer Park',
      rating: 4.8,
      students: 45,
      featured: false,
      certification: 'Digital Transformation Leader',
      tags: ['Leadership', 'Digital Transformation', 'Change Management', 'Strategy'],
      modules: [
        'Digital Strategy Development',
        'Change Management and Culture',
        'Technology Selection and Implementation',
        'Stakeholder Management',
        'Success Measurement'
      ],
      skills: ['Strategic Planning', 'Change Management', 'Stakeholder Management', 'Technology Strategy']
    }
  ];

  // Update counts
  categories.forEach(cat => {
    cat.count = trainingPrograms.filter(p => p.category === cat.id).length;
  });

  levels.forEach(level => {
    level.count = trainingPrograms.filter(p => p.level === level.id).length;
  });

  formats.forEach(format => {
    format.count = trainingPrograms.filter(p => p.format === format.id).length;
  });

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
    return categories.find(c => c.id === categoryId)?.icon || <GraduationCap className="w-5 h-5" />;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-orange-400';
      case 'expert': return 'text-red-400';
      default: return 'text-zion-slate-light';
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'online': return <Globe className="w-4 h-4" />;
      case 'in-person': return <MapPin className="w-4 h-4" />;
      case 'hybrid': return <Users className="w-4 h-4" />;
      case 'self-paced': return <Clock className="w-4 h-5" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <GraduationCap className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Professional Training & Certification
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Advance your career with our industry-leading training programs, expert-led courses, and recognized certifications.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search training programs..."
                className="w-full pl-12 pr-4 py-4 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Categories */}
              <div className="space-y-3">
                <label className="text-white font-medium">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 4).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Levels */}
              <div className="space-y-3">
                <label className="text-white font-medium">Level</label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setActiveLevel(level.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeLevel === level.id
                          ? 'bg-zion-purple text-white'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {level.name} ({level.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Formats */}
              <div className="space-y-3">
                <label className="text-white font-medium">Format</label>
                <div className="flex flex-wrap gap-2">
                  {formats.map((format) => (
                    <button
                      key={format.id}
                      onClick={() => setActiveFormat(format.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeFormat === format.id
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {format.name} ({format.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      {trainingPrograms.filter(p => p.featured).length > 0 && (
        <div className="py-12 bg-zion-slate-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Featured Training Programs
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {trainingPrograms.filter(p => p.featured).map((program) => (
                <div
                  key={program.id}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-gradient-to-br from-zion-blue to-zion-purple">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 text-white">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{program.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{formatDate(program.startDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{program.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {getCategoryIcon(program.category)}
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === program.category)?.name}
                      </span>
                      <span className={`text-sm font-medium ${getLevelColor(program.level)}`}>
                        {levels.find(l => l.id === program.level)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4">{program.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {program.students} students
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        ${program.price.toLocaleString()}
                      </div>
                    </div>
                    
                    <button className="w-full bg-zion-cyan text-zion-slate-dark py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Training Programs */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            All Training Programs
          </h2>
          
          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(program.category)}
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === program.category)?.name}
                      </span>
                      {program.featured && (
                        <span className="px-2 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-zion-slate-light mb-1">
                        {getFormatIcon(program.format)}
                        <span>{formats.find(f => f.id === program.format)?.name}</span>
                      </div>
                      <div className={`text-sm font-medium ${getLevelColor(program.level)}`}>
                        {levels.find(l => l.id === program.level)?.name}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{program.title}</h3>
                  <p className="text-zion-slate-light mb-4">{program.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Starts {formatDate(program.startDate)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration} ({program.hours}h)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{program.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>${program.price.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {program.students} students
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {program.rating}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-zion-slate-light">
                      <FileText className="w-4 h-4" />
                      <span>{program.certification}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="bg-zion-purple text-white px-6 py-2 rounded-lg font-semibold hover:bg-zion-purple-light transition-colors inline-flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="bg-zion-cyan text-zion-slate-dark px-6 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <GraduationCap className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No training programs found</h3>
              <p className="text-zion-slate-light">
                Try adjusting your search terms or browse all categories
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
              Browse All Programs
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-slate-dark transition-colors">
              Contact Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
