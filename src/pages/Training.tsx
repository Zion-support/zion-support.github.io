import { SEO } from '@/components/SEO';


import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, Clock, Star, Search, Play, Brain, Cloud, Shield, Database, Zap, Globe, Target, Calendar, MapPin, DollarSign, FileText, Network, Star as StarIcon } from 'lucide-react';

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
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Enhance your team's skills with our comprehensive training programs.
          </p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We're developing comprehensive training programs. Check back soon!
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>);
};
export default Training;
