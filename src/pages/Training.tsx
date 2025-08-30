<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
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
      title: 'AI Autonomous Research Assistant Implementation',
      description: 'Comprehensive training on implementing and managing AI Autonomous Research Assistant systems for enterprise research and intelligence.',
      category: 'ai-ml',
      level: 'intermediate',
      format: 'hybrid',
      duration: '10 weeks',
      hours: 60,
      price: 3999,
      location: 'Online + San Francisco',
      startDate: '2025-02-15',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 89,
      featured: true,
      certification: 'AI Autonomous Research Specialist',
      tags: ['AI Research', 'Autonomous Systems', 'Business Intelligence', 'Research Automation'],
      modules: [
        'AI Autonomous Research Fundamentals',
        'System Architecture and Design',
        'Data Source Integration',
        'Research Workflow Automation',
        'Quality Assurance and Validation'
      ],
      skills: ['AI Research', 'System Architecture', 'Data Integration', 'Workflow Automation', 'Quality Assurance']
    },
    {
      id: 2,
      title: 'AI Supply Chain Optimization Specialist',
      description: 'Advanced training on implementing AI-powered supply chain optimization solutions for cost reduction and efficiency improvement.',
      category: 'ai-ml',
      level: 'advanced',
      format: 'hybrid',
      duration: '12 weeks',
      hours: 80,
      price: 4499,
      location: 'Online + Chicago',
      startDate: '2025-02-20',
      instructor: 'Michael Rodriguez',
      rating: 4.8,
      students: 67,
      featured: true,
      certification: 'AI Supply Chain Optimization Expert',
      tags: ['Supply Chain', 'AI Optimization', 'Cost Reduction', 'Predictive Analytics'],
      modules: [
        'Supply Chain AI Fundamentals',
        'Demand Forecasting and Planning',
        'Inventory Optimization Algorithms',
        'Route Optimization and Logistics',
        'Performance Measurement and ROI'
      ],
      skills: ['Supply Chain Management', 'AI Optimization', 'Predictive Analytics', 'Logistics', 'Performance Analysis']
    },
    {
      id: 3,
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
      id: 8,
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
      title: 'Cloud Native Development',
      description: 'Master modern cloud development practices including microservices, containers, and serverless architectures.',
      category: 'cloud',
      level: 'intermediate',
      format: 'online',
      duration: '10 weeks',
      hours: 80,
      price: 1999,
      location: 'Online',
      startDate: '2025-03-10',
      instructor: 'Alex Thompson',
      rating: 4.7,
      students: 234,
      featured: false,
      certification: 'Cloud Native Developer',
      tags: ['Cloud Computing', 'Microservices', 'Containers', 'DevOps'],
      modules: [
        'Cloud Architecture Fundamentals',
        'Container Orchestration with Kubernetes',
        'Microservices Design Patterns',
        'Serverless Computing',
        'DevOps and CI/CD'
      ],
      skills: ['Cloud Architecture', 'Kubernetes', 'Microservices', 'Serverless', 'DevOps']
    },
    {
      id: 4,
      title: 'Data Science for Business',
      description: 'Transform business data into actionable insights using advanced analytics and machine learning techniques.',
      category: 'data',
      level: 'intermediate',
      format: 'hybrid',
      duration: '12 weeks',
      hours: 100,
      price: 2999,
      location: 'Online + Boston, MA',
      startDate: '2025-04-01',
      instructor: 'Dr. Emily Watson',
      rating: 4.9,
      students: 189,
      featured: true,
      certification: 'Data Science Professional',
      tags: ['Data Science', 'Machine Learning', 'Analytics', 'Business Intelligence'],
      modules: [
        'Data Analysis Fundamentals',
        'Statistical Methods and Hypothesis Testing',
        'Machine Learning Algorithms',
        'Data Visualization and Storytelling',
        'Business Applications and ROI'
      ],
      skills: ['Data Analysis', 'Statistics', 'Machine Learning', 'Data Visualization', 'Business Intelligence']
    },
    {
      id: 5,
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles and their applications in solving complex computational problems.',
      category: 'emerging',
      level: 'beginner',
      format: 'online',
      duration: '6 weeks',
      hours: 30,
      price: 1499,
      location: 'Online',
      startDate: '2025-03-20',
      instructor: 'Dr. James Wilson',
      rating: 4.6,
      students: 67,
      featured: false,
      certification: 'Quantum Computing Basics',
      tags: ['Quantum Computing', 'Physics', 'Algorithms', 'Future Technology'],
      modules: [
        'Quantum Mechanics Basics',
        'Qubits and Quantum Gates',
        'Quantum Algorithms',
        'Quantum Error Correction',
        'Real-World Applications'
      ],
      skills: ['Quantum Mechanics', 'Quantum Algorithms', 'Error Correction', 'Quantum Applications']
    },
    {
      id: 6,
      title: 'Digital Transformation Leadership',
      description: 'Lead successful digital transformation initiatives with proven strategies and change management techniques.',
      category: 'leadership',
      level: 'advanced',
      format: 'in-person',
      duration: '4 weeks',
      hours: 32,
      price: 3999,
      location: 'Chicago, IL',
      startDate: '2025-04-15',
      instructor: 'Lisa Park',
      rating: 4.8,
      students: 45,
      featured: true,
      certification: 'Digital Transformation Leader',
      tags: ['Leadership', 'Change Management', 'Digital Strategy', 'Innovation'],
      modules: [
        'Digital Strategy Development',
        'Change Management and Culture',
        'Technology Assessment and Selection',
        'Stakeholder Engagement',
        'Success Metrics and KPIs'
      ],
      skills: ['Strategic Planning', 'Change Management', 'Technology Assessment', 'Stakeholder Management']
    }
  ];

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

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
    const matchesFormat = activeFormat === 'all' || program.format === activeFormat;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
<<<<<<< HEAD

    const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
    const matchesFormat = activeFormat === 'all' || program.format === activeFormat;

    return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
=======
    
    return matchesCategory && matchesLevel && matchesFormat && matchesSearch;
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : GraduationCap;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'from-green-500 to-emerald-500';
      case 'intermediate':
        return 'from-blue-500 to-cyan-500';
      case 'advanced':
        return 'from-purple-500 to-pink-500';
      case 'expert':
        return 'from-red-500 to-orange-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'online':
        return Globe;
      case 'in-person':
        return MapPin;
      case 'hybrid':
        return Network;
      case 'self-paced':
        return Clock;
      default:
        return GraduationCap;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <SEO 
        title="Training Programs - Zion Tech Group"
        description="Professional training programs in AI, cybersecurity, cloud computing, and emerging technologies. Upskill your team with expert-led courses and certifications."
        keywords="training programs, AI training, cybersecurity training, cloud computing courses, professional development, Zion Tech Group, technology education"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
                <GraduationCap className="w-5 h-5 text-zion-purple mr-2" />
                <span className="text-zion-purple font-medium">Professional Training</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional Training Programs
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
                Upskill your team with expert-led training in AI, cybersecurity, cloud computing, 
                and emerging technologies. Earn industry-recognized certifications.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan-light" />
                  <input
                    type="text"
                    placeholder="Search training programs, skills, or instructors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-zion-cyan-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-zion-purple text-white shadow-lg'
                        : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="text-sm opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Level and Format Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Skill Level</h3>
                <div className="flex flex-wrap gap-3">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setActiveLevel(level.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        activeLevel === level.id
                          ? 'bg-zion-purple text-white shadow-lg'
                          : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {level.name} ({level.count})
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Format</h3>
                <div className="flex flex-wrap gap-3">
                  {formats.map((format) => (
                    <button
                      key={format.id}
                      onClick={() => setActiveFormat(format.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        activeFormat === format.id
                          ? 'bg-zion-purple text-white shadow-lg'
                          : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {format.name} ({format.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredPrograms.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-zion-cyan-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No training programs found</h3>
                <p className="text-zion-cyan-light">
                  Try adjusting your search terms or filters.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zion-purple/20 border border-zion-purple/30">
                            <span className="text-zion-purple text-sm font-medium">
                              {getCategoryName(program.category)}
                            </span>
                          </div>
                          {program.featured && (
                            <div className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-500">
                              Featured
                            </div>
                          )}
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-white group-hover:text-zion-purple transition-colors duration-300 mb-3">
                          {program.title}
                        </CardTitle>
                        
                        <CardDescription className="text-zion-cyan-light leading-relaxed mb-4">
                          {program.description}
                        </CardDescription>
                        
                        <div className="flex items-center space-x-4 text-sm text-zion-cyan-light mb-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{program.students} students</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{program.rating}</span>
                          </div>
                        </div>
<<<<<<< HEAD
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
=======
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3 mb-6 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Instructor:</span>
                            <span className="text-white">{program.instructor}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Start Date:</span>
                            <span className="text-white">{formatDate(program.startDate)}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Location:</span>
                            <span className="text-white">{program.location}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Price:</span>
                            <span className="text-white">${program.price.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Skills You'll Gain:</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.skills.slice(0, 4).map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-white/10 rounded text-xs text-zion-cyan-light border border-white/20"
                              >
                                {skill}
                              </span>
                            ))}
                            {program.skills.length > 4 && (
                              <span className="px-2 py-1 bg-white/10 rounded text-xs text-zion-cyan-light border border-white/20">
                                +{program.skills.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Learn More
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
          </div>
        </section>

<<<<<<< HEAD
      {/* All Training Programs */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            All Training Programs
          </h2>

          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredPrograms.map((program)  => (
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
=======
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Upskill Your Team?
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
                Contact us to discuss custom training programs tailored to your organization's 
                specific needs and learning objectives.
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Button>
                
                <Button
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Talk to Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Training;
