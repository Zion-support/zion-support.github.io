import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Search,
  Calendar,
  Clock,
  User,
  Users,
  Play,
  ArrowRight,
  Filter,
  BookOpen,
  Star,
  Tag,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Eye,
  Download,
  Share2,
  Bookmark,
  MessageCircle,
  Award,
  CheckCircle,
  Target,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database
} from 'lucide-react';

const Training: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'Emerging Technologies', 'Industry Solutions'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const trainingPrograms = [
    {
      id: 1,
      title: 'AI Fundamentals for Business Leaders',
      description: 'Comprehensive introduction to artificial intelligence concepts, applications, and strategic implementation for business executives and decision-makers.',
      category: 'AI & Machine Learning',
      level: 'Beginner',
      instructor: 'Dr. Sarah Chen',
      duration: '8 weeks',
      totalHours: 40,
      maxStudents: 25,
      currentStudents: 18,
      rating: 4.8,
      featured: true,
      price: '$2,499',
      tags: ['AI', 'Business Strategy', 'Leadership', 'Digital Transformation'],
      overview: 'This program provides business leaders with a solid foundation in AI concepts...',
      curriculum: [
        'Introduction to AI and Machine Learning',
        'AI in Business Strategy and Operations',
        'Ethical Considerations and Risk Management',
        'Implementation Planning and ROI Analysis',
        'Case Studies and Best Practices'
      ],
      outcomes: [
        'Understand AI fundamentals and business applications',
        'Develop AI strategy and implementation roadmap',
        'Evaluate AI solutions and vendors',
        'Lead AI transformation initiatives'
      ]
    },
    {
      id: 2,
      title: 'Advanced Cybersecurity Architecture',
      description: 'Deep dive into enterprise cybersecurity architecture, threat modeling, and advanced security implementation strategies.',
      category: 'Cybersecurity',
      level: 'Advanced',
      instructor: 'Michael Rodriguez',
      duration: '12 weeks',
      totalHours: 60,
      maxStudents: 20,
      currentStudents: 15,
      rating: 4.9,
      featured: true,
      price: '$3,999',
      tags: ['Cybersecurity', 'Architecture', 'Threat Modeling', 'Enterprise Security'],
      overview: 'Advanced cybersecurity program for experienced security professionals...',
      curriculum: [
        'Advanced Threat Modeling and Risk Assessment',
        'Zero Trust Architecture Implementation',
        'Cloud Security and DevSecOps',
        'Incident Response and Forensics',
        'Security Automation and Orchestration'
      ],
      outcomes: [
        'Design enterprise security architectures',
        'Implement advanced security controls',
        'Lead security transformation initiatives',
        'Develop incident response strategies'
      ]
    },
    {
      id: 3,
      title: 'Cloud-Native Development Mastery',
      description: 'Master cloud-native development practices, microservices architecture, and modern DevOps methodologies.',
      category: 'Cloud Computing',
      level: 'Intermediate',
      instructor: 'Dr. Emily Watson',
      duration: '10 weeks',
      totalHours: 50,
      maxStudents: 30,
      currentStudents: 22,
      rating: 4.7,
      featured: false,
      price: '$2,999',
      tags: ['Cloud Computing', 'Microservices', 'DevOps', 'Containerization'],
      overview: 'Comprehensive cloud-native development program...',
      curriculum: [
        'Cloud-Native Architecture Principles',
        'Microservices Design and Implementation',
        'Container Orchestration with Kubernetes',
        'CI/CD Pipeline Development',
        'Monitoring and Observability'
      ],
      outcomes: [
        'Build scalable cloud-native applications',
        'Implement microservices architecture',
        'Deploy and manage containerized applications',
        'Establish DevOps practices and pipelines'
      ]
    },
    {
      id: 4,
      title: 'Data Science and Analytics Bootcamp',
      description: 'Intensive bootcamp covering data science fundamentals, statistical analysis, and machine learning applications.',
      category: 'AI & Machine Learning',
      level: 'Intermediate',
      instructor: 'Dr. James Thompson',
      duration: '6 weeks',
      totalHours: 35,
      maxStudents: 35,
      currentStudents: 28,
      rating: 4.6,
      featured: false,
      price: '$1,999',
      tags: ['Data Science', 'Machine Learning', 'Analytics', 'Statistics'],
      overview: 'Data science bootcamp for professionals...',
      curriculum: [
        'Data Science Fundamentals and Statistics',
        'Data Wrangling and Preprocessing',
        'Machine Learning Algorithms',
        'Data Visualization and Storytelling',
        'Real-world Project Implementation'
      ],
      outcomes: [
        'Apply data science methodologies',
        'Build and evaluate ML models',
        'Create compelling data visualizations',
        'Solve real-world business problems'
      ]
    },
    {
      id: 5,
      title: 'Blockchain Development Fundamentals',
      description: 'Learn blockchain technology fundamentals, smart contract development, and decentralized application building.',
      category: 'Emerging Technologies',
      level: 'Beginner',
      instructor: 'Lisa Chang',
      duration: '8 weeks',
      totalHours: 45,
      maxStudents: 25,
      currentStudents: 20,
      rating: 4.5,
      featured: false,
      price: '$2,299',
      tags: ['Blockchain', 'Smart Contracts', 'DApps', 'Web3'],
      overview: 'Blockchain development fundamentals program...',
      curriculum: [
        'Blockchain Technology Fundamentals',
        'Smart Contract Development',
        'Decentralized Application Architecture',
        'Blockchain Security and Best Practices',
        'Industry Applications and Use Cases'
      ],
      outcomes: [
        'Understand blockchain technology principles',
        'Develop smart contracts',
        'Build decentralized applications',
        'Apply blockchain in business contexts'
      ]
    },
    {
      id: 6,
      title: 'Digital Transformation Leadership',
      description: 'Executive program focused on leading digital transformation initiatives and organizational change management.',
      category: 'Digital Transformation',
      level: 'Expert',
      instructor: 'Robert Kim',
      duration: '16 weeks',
      totalHours: 80,
      maxStudents: 15,
      currentStudents: 12,
      rating: 4.9,
      featured: true,
      price: '$5,999',
      tags: ['Digital Transformation', 'Leadership', 'Change Management', 'Strategy'],
      overview: 'Executive digital transformation leadership program...',
      curriculum: [
        'Digital Transformation Strategy Development',
        'Organizational Change Management',
        'Technology Portfolio Management',
        'Innovation and Disruption Strategies',
        'Digital Culture and Talent Development'
      ],
      outcomes: [
        'Lead digital transformation initiatives',
        'Manage organizational change effectively',
        'Develop digital innovation strategies',
        'Build digital-first organizational culture'
      ]
    },
    {
      id: 7,
      title: 'IoT and Edge Computing Solutions',
      description: 'Comprehensive training on Internet of Things technologies, edge computing, and connected device solutions.',
      category: 'Emerging Technologies',
      level: 'Intermediate',
      instructor: 'Dr. Alex Johnson',
      duration: '10 weeks',
      totalHours: 55,
      maxStudents: 28,
      currentStudents: 19,
      rating: 4.7,
      featured: false,
      price: '$2,799',
      tags: ['IoT', 'Edge Computing', 'Connected Devices', 'Data Processing'],
      overview: 'IoT and edge computing solutions program...',
      curriculum: [
        'IoT Architecture and Protocols',
        'Edge Computing and Fog Computing',
        'Sensor Networks and Data Collection',
        'Real-time Data Processing',
        'IoT Security and Privacy'
      ],
      outcomes: [
        'Design IoT solutions and architectures',
        'Implement edge computing strategies',
        'Build connected device ecosystems',
        'Ensure IoT security and compliance'
      ]
    },
    {
      id: 8,
      title: 'Sustainable Technology Implementation',
      description: 'Learn how to implement green technology solutions and sustainable IT practices in enterprise environments.',
      category: 'Industry Solutions',
      level: 'Intermediate',
      instructor: 'Maria Garcia',
      duration: '8 weeks',
      totalHours: 40,
      maxStudents: 30,
      currentStudents: 24,
      rating: 4.6,
      featured: false,
      price: '$2,199',
      tags: ['Sustainability', 'Green IT', 'Energy Efficiency', 'ESG'],
      overview: 'Sustainable technology implementation program...',
      curriculum: [
        'Sustainable Technology Principles',
        'Green IT Implementation Strategies',
        'Energy Efficiency and Carbon Reduction',
        'ESG Reporting and Compliance',
        'Sustainable Technology ROI Analysis'
      ],
      outcomes: [
        'Implement sustainable technology solutions',
        'Reduce environmental impact',
        'Develop ESG strategies',
        'Measure sustainability ROI'
      ]
    }
  ];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || program.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredPrograms = trainingPrograms.filter(program => program.featured);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-orange-500/20 text-orange-400';
      case 'Expert': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Training Programs
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Professional development programs designed to advance your career in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search training programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Training Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Programs</h2>
            <p className="text-gray-300">Our most popular and highly-rated training programs</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}>
                    {program.level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {program.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {program.instructor}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration} ({program.totalHours}h)
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {program.currentStudents}/{program.maxStudents}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{program.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-cyan-400">{program.price}</div>
                  <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Training Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Training Programs</h2>
            <p className="text-gray-300">
              {filteredPrograms.length} programs found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </motion.div>

          {filteredPrograms.length > 0 ? (
            <div className="space-y-6">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {program.featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full font-medium">
                              Featured
                            </span>
                          )}
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                            {program.category}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}>
                            {program.level}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">{program.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{program.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {program.instructor}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {program.duration} ({program.totalHours}h)
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {program.currentStudents}/{program.maxStudents} enrolled
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div className="text-right mb-4">
                        <div className="text-3xl font-bold text-cyan-400 mb-1">
                          {program.price}
                        </div>
                        <div className="text-gray-400 text-sm">Program Fee</div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Enroll Now
                        </button>
                        <button className="w-full px-4 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No training programs found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedLevel('All');
                }}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our training programs and gain the skills needed for the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
