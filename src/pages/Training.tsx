import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Play,
  Download,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Target,
  Award,
  TrendingUp,
  Lightbulb,
  Search,
  Filter,
  ChevronDown,
  ExternalLink,
  Video,
  FileText,
  Certificate,
  Clock3,
  DollarSign
} from 'lucide-react';

const Training: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const trainingCategories = [
    { id: 'all', name: 'All Programs', icon: GraduationCap, count: 8 },
    { id: 'technical', name: 'Technical', icon: Code, count: 3 },
    { id: 'business', name: 'Business', icon: Target, count: 2 },
    { id: 'certification', name: 'Certification', icon: Certificate, count: 3 }
  ];

  const trainingLevels = [
    { id: 'all', name: 'All Levels', count: 8 },
    { id: 'beginner', name: 'Beginner', count: 2 },
    { id: 'intermediate', name: 'Intermediate', count: 3 },
    { id: 'advanced', name: 'Advanced', count: 3 }
  ];

  const trainingPrograms = [
    {
      id: 1,
      name: 'AI & Machine Learning Fundamentals',
      category: 'technical',
      level: 'beginner',
      description: 'Learn the basics of AI and machine learning with hands-on projects and real-world applications.',
      duration: '8 weeks',
      format: 'Online + Live Sessions',
      price: '$2,499',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 1247,
      features: [
        'Python programming basics',
        'Machine learning algorithms',
        'Data preprocessing techniques',
        'Model evaluation and validation',
        'Real-world project portfolio'
      ],
      certification: 'AI Fundamentals Certificate',
      nextStart: 'March 15, 2024'
    },
    {
      id: 2,
      name: 'Cybersecurity Professional',
      category: 'certification',
      level: 'intermediate',
      description: 'Comprehensive cybersecurity training covering threat detection, incident response, and security architecture.',
      duration: '12 weeks',
      format: 'Hybrid Learning',
      price: '$3,999',
      instructor: 'Michael Rodriguez',
      rating: 4.8,
      students: 892,
      features: [
        'Network security fundamentals',
        'Penetration testing',
        'Incident response procedures',
        'Security compliance frameworks',
        'Hands-on lab exercises'
      ],
      certification: 'Cybersecurity Professional Certification',
      nextStart: 'April 1, 2024'
    },
    {
      id: 3,
      name: 'Cloud Architecture & DevOps',
      category: 'technical',
      level: 'intermediate',
      description: 'Master cloud infrastructure design and DevOps practices for scalable applications.',
      duration: '10 weeks',
      format: 'Online + Workshops',
      price: '$3,299',
      instructor: 'Jennifer Kim',
      rating: 4.7,
      students: 756,
      features: [
        'AWS/Azure fundamentals',
        'Infrastructure as Code',
        'CI/CD pipeline design',
        'Container orchestration',
        'Monitoring and logging'
      ],
      certification: 'Cloud DevOps Specialist',
      nextStart: 'March 22, 2024'
    },
    {
      id: 4,
      name: 'Digital Transformation Leadership',
      category: 'business',
      level: 'advanced',
      description: 'Strategic leadership program for driving digital transformation initiatives in organizations.',
      duration: '6 weeks',
      format: 'Executive Sessions',
      price: '$5,999',
      instructor: 'Dr. Robert Johnson',
      rating: 4.9,
      students: 234,
      features: [
        'Change management strategies',
        'Technology roadmap planning',
        'Stakeholder engagement',
        'ROI measurement',
        'Case study analysis'
      ],
      certification: 'Digital Transformation Leader',
      nextStart: 'May 1, 2024'
    },
    {
      id: 5,
      name: 'Data Science & Analytics',
      category: 'technical',
      level: 'intermediate',
      description: 'Comprehensive data science program covering statistics, visualization, and predictive modeling.',
      duration: '14 weeks',
      format: 'Online + Mentorship',
      price: '$4,199',
      instructor: 'Dr. Emily Watson',
      rating: 4.8,
      students: 634,
      features: [
        'Statistical analysis',
        'Data visualization',
        'Predictive modeling',
        'Big data technologies',
        'Industry case studies'
      ],
      certification: 'Data Science Professional',
      nextStart: 'April 8, 2024'
    },
    {
      id: 6,
      name: 'Project Management for Tech',
      category: 'business',
      level: 'beginner',
      description: 'Essential project management skills tailored for technology projects and teams.',
      duration: '6 weeks',
      format: 'Online Learning',
      price: '$1,999',
      instructor: 'David Thompson',
      rating: 4.6,
      students: 445,
      features: [
        'Agile methodologies',
        'Risk management',
        'Team collaboration',
        'Project planning tools',
        'Stakeholder communication'
      ],
      certification: 'Tech Project Manager',
      nextStart: 'March 29, 2024'
    },
    {
      id: 7,
      name: 'Advanced AI Engineering',
      category: 'certification',
      level: 'advanced',
      description: 'Advanced AI engineering program for experienced developers and data scientists.',
      duration: '16 weeks',
      format: 'Intensive Bootcamp',
      price: '$6,999',
      instructor: 'Dr. Alex Chen',
      rating: 4.9,
      students: 189,
      features: [
        'Deep learning architectures',
        'Natural language processing',
        'Computer vision',
        'AI ethics and governance',
        'Research project'
      ],
      certification: 'Advanced AI Engineer',
      nextStart: 'June 1, 2024'
    },
    {
      id: 8,
      name: 'Enterprise Security Architect',
      category: 'certification',
      level: 'advanced',
      description: 'Advanced security architecture program for enterprise-level security professionals.',
      duration: '18 weeks',
      format: 'Hybrid + Mentorship',
      price: '$7,499',
      instructor: 'Lisa Martinez',
      rating: 4.8,
      students: 156,
      features: [
        'Security architecture design',
        'Zero trust implementation',
        'Compliance frameworks',
        'Security automation',
        'Enterprise case studies'
      ],
      certification: 'Enterprise Security Architect',
      nextStart: 'July 1, 2024'
    }
  ];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || program.level === selectedLevel;
    const matchesSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-500/20';
      case 'intermediate': return 'bg-yellow-500/20';
      case 'advanced': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  const learningResources = [
    {
      icon: Video,
      title: 'Video Library',
      description: 'Access to 500+ hours of training videos',
      count: '500+ hours',
      type: 'Videos'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and reference materials',
      count: '200+ guides',
      type: 'Documents'
    },
    {
      icon: BookOpen,
      title: 'Practice Labs',
      description: 'Hands-on exercises and real-world scenarios',
      count: '50+ labs',
      type: 'Labs'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with peers and instructors',
      count: '2,500+ members',
      type: 'Community'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Trends Webinar',
      date: 'March 20, 2024',
      time: '2:00 PM EST',
      instructor: 'Dr. Sarah Chen',
      type: 'Webinar'
    },
    {
      title: 'Cybersecurity Workshop',
      date: 'March 25, 2024',
      time: '10:00 AM EST',
      instructor: 'Michael Rodriguez',
      type: 'Workshop'
    },
    {
      title: 'Cloud Migration Seminar',
      date: 'April 5, 2024',
      time: '1:00 PM EST',
      instructor: 'Jennifer Kim',
      type: 'Seminar'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {' '}Training
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Advance your career with our comprehensive training programs. From technical skills to business leadership, 
            we offer industry-leading courses designed to accelerate your professional growth.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search training programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {trainingCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-cyan-500/50 hover:bg-slate-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Level Filters */}
              <div className="flex flex-wrap gap-3">
                {trainingLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedLevel === level.id
                        ? 'bg-purple-500 border-purple-500 text-white'
                        : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-purple-500/50 hover:bg-slate-700'
                    }`}
                  >
                    <span>{level.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs ml-2">
                      {level.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Training Programs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
              >
                {/* Program Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)} ${getLevelBg(program.level)}`}>
                      {program.level}
                    </span>
                  </div>
                </div>

                {/* Program Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {program.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{program.duration}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{program.price}</span>
                  </div>
                </div>

                {/* Instructor and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">{program.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white">{program.rating}</span>
                    <span className="text-xs text-gray-400">({program.students})</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">What You'll Learn</h4>
                  <div className="space-y-1">
                    {program.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                    {program.features.length > 3 && (
                      <div className="text-xs text-gray-400 text-center">
                        +{program.features.length - 3} more topics
                      </div>
                    )}
                  </div>
                </div>

                {/* Certification and Start Date */}
                <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                    <Certificate className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">Certification</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">{program.certification}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>Next start: {program.nextStart}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive library of learning materials, practice labs, and community resources 
              to enhance your learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 text-center">
                  {resource.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 text-center">
                  {resource.description}
                </p>

                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{resource.count}</span>
                </div>

                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full">
                    {resource.type}
                  </span>
                </div>

                <button className="w-full bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-600 transition-colors">
                  Access Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our live events, webinars, and workshops to learn from industry experts 
              and connect with fellow professionals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {event.type}
                    </span>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4" />
                      <span>{event.instructor}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our training programs. 
              Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <GraduationCap className="w-5 h-5 mr-2" />
                Browse All Programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Speak with Advisor
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Training;