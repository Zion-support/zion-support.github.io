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
  Eye,
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Navigation,
  Compass,
  Home,
  ShoppingCart,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  MinusCircle,
  PlusCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckSquare,
  Square,
  Radio,
  ToggleLeft,
  ToggleRight,
  Sliders,
  SlidersHorizontal,
  Volume1,
  Volume3,
  Mic,
  MicOff,
  Headphones,
  Speaker,
  SpeakerOff,
  Play as PlayIcon,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Rewind as RewindIcon,
  FastForward as FastForwardIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle as ShuffleIcon2,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Rewind as RewindIcon2,
  FastForward as FastForwardIcon2,
  Repeat as RepeatIcon2,
  Repeat1 as Repeat1Icon2
} from 'lucide-react';

interface TrainingProgram {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  format: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  instructor: string;
  location: string;
  startDate: string;
  seats: number;
  availableSeats: number;
  tags: string[];
  featured?: boolean;
  popular?: boolean;
  new?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
}

interface Level {
  id: string;
  name: string;
  count: number;
}

interface Format {
  id: string;
  name: string;
  count: number;
}

export default function Training() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const categories: Category[] = [
    { id: 'all', name: 'All Categories', icon: GraduationCap, count: 37 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 7 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 4 },
    { id: 'strategy', name: 'Digital Strategy', icon: Target, count: 3 },
    { id: 'leadership', name: 'Leadership & Management', icon: Users, count: 4 }
  ];

  const levels: Level[] = [
    { id: 'all', name: 'All Levels', count: 37 },
    { id: 'beginner', name: 'Beginner', count: 12 },
    { id: 'intermediate', name: 'Intermediate', count: 15 },
    { id: 'advanced', name: 'Advanced', count: 8 },
    { id: 'expert', name: 'Expert', count: 2 }
  ];

  const formats: Format[] = [
    { id: 'all', name: 'All Formats', count: 37 },
    { id: 'online', name: 'Online', count: 20 },
    { id: 'in-person', name: 'In-Person', count: 12 },
    { id: 'hybrid', name: 'Hybrid', count: 3 },
    { id: 'self-paced', name: 'Self-Paced', count: 2 }
  ];

  const trainingPrograms: TrainingProgram[] = [
    {
      id: 1,
      title: 'AI Fundamentals & Machine Learning',
      description: 'Master the basics of artificial intelligence and machine learning algorithms with hands-on projects and real-world applications.',
      category: 'ai-ml',
      level: 'beginner',
      format: 'online',
      duration: '8 weeks',
      price: 1299,
      rating: 4.8,
      reviews: 156,
      instructor: 'Dr. Sarah Chen',
      location: 'Online',
      startDate: '2025-02-15',
      seats: 50,
      availableSeats: 23,
      tags: ['AI', 'Machine Learning', 'Python', 'Data Science'],
      featured: true,
      popular: true
    },
    {
      id: 2,
      title: 'Advanced Cybersecurity Operations',
      description: 'Deep dive into advanced cybersecurity techniques, threat hunting, and incident response strategies.',
      category: 'security',
      level: 'advanced',
      format: 'in-person',
      duration: '5 days',
      price: 2499,
      rating: 4.9,
      reviews: 89,
      instructor: 'Michael Rodriguez',
      location: 'San Francisco, CA',
      startDate: '2025-03-10',
      seats: 25,
      availableSeats: 8,
      tags: ['Cybersecurity', 'Threat Hunting', 'Incident Response', 'SOC'],
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Architecture & DevOps',
      description: 'Learn modern cloud architecture patterns and DevOps practices for scalable applications.',
      category: 'cloud',
      level: 'intermediate',
      format: 'hybrid',
      duration: '6 weeks',
      price: 1799,
      rating: 4.7,
      reviews: 134,
      instructor: 'Jennifer Kim',
      location: 'Hybrid (Online + NYC)',
      startDate: '2025-02-20',
      seats: 40,
      availableSeats: 15,
      tags: ['Cloud', 'DevOps', 'AWS', 'Kubernetes'],
      popular: true
    },
    {
      id: 4,
      title: 'Data Science & Business Intelligence',
      description: 'Transform data into actionable insights with advanced analytics and visualization techniques.',
      category: 'data',
      level: 'intermediate',
      format: 'online',
      duration: '10 weeks',
      price: 1599,
      rating: 4.6,
      reviews: 98,
      instructor: 'Dr. Alex Thompson',
      location: 'Online',
      startDate: '2025-02-25',
      seats: 60,
      availableSeats: 32,
      tags: ['Data Science', 'BI', 'SQL', 'Tableau'],
      new: true
    },
    {
      id: 5,
      title: 'Quantum Computing Fundamentals',
      description: 'Explore the revolutionary world of quantum computing and its applications in cryptography and optimization.',
      category: 'emerging',
      level: 'expert',
      format: 'in-person',
      duration: '3 days',
      price: 3999,
      rating: 4.9,
      reviews: 45,
      instructor: 'Dr. Elena Petrov',
      location: 'Boston, MA',
      startDate: '2025-04-05',
      seats: 20,
      availableSeats: 5,
      tags: ['Quantum Computing', 'Cryptography', 'Optimization', 'Physics'],
      featured: true
    },
    {
      id: 6,
      title: 'Digital Transformation Strategy',
      description: 'Develop comprehensive digital transformation strategies for enterprise organizations.',
      category: 'strategy',
      level: 'advanced',
      format: 'online',
      duration: '4 weeks',
      price: 999,
      rating: 4.5,
      reviews: 67,
      instructor: 'David Park',
      location: 'Online',
      startDate: '2025-03-01',
      seats: 35,
      availableSeats: 18,
      tags: ['Digital Transformation', 'Strategy', 'Change Management', 'Innovation']
    }
  ];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = !searchQuery || 
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
    const matchesFormat = activeFormat === 'all' || program.format === activeFormat;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
  });

  const toggleProgramExpansion = (programId: number) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'intermediate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'advanced':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'expert':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'online':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'in-person':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'hybrid':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'self-paced':
        return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <>
      <SEO 
        title="Training & Workshops - Zion Tech Group"
        description="Comprehensive training programs and workshops to upskill your team in AI, cybersecurity, cloud computing, and emerging technologies."
        keywords="training, workshops, AI training, cybersecurity training, cloud computing, data science, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Training &{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Workshops
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Accelerate your team's growth with our comprehensive training programs. 
                From AI fundamentals to advanced cybersecurity, we've got you covered.
              </p>
              
              {/* Search Form */}
              <form className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search training programs, skills, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Level and Format Filters */}
              <div className="flex items-center gap-4">
                {/* Level Filter */}
                <select
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name} ({level.count})
                    </option>
                  ))}
                </select>

                {/* Format Filter */}
                <select
                  value={activeFormat}
                  onChange={(e) => setActiveFormat(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {formats.map((format) => (
                    <option key={format.id} value={format.id}>
                      {format.name} ({format.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {filteredPrograms.length} Training Programs
                </h2>
                {searchQuery && (
                  <p className="text-gray-400 mt-2">
                    Results for "{searchQuery}"
                  </p>
                )}
              </div>
              <div className="text-gray-400">
                Showing {filteredPrograms.length} of {trainingPrograms.length} total programs
              </div>
            </div>

            {/* Programs Grid */}
            {filteredPrograms.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="p-6">
                      {/* Program Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            {program.featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                Featured
                              </span>
                            )}
                            {program.popular && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                Popular
                              </span>
                            )}
                            {program.new && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                New
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">{program.description}</p>
                        </div>
                      </div>

                      {/* Program Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Instructor:</span>
                          <span className="text-white">{program.instructor}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Duration:</span>
                          <span className="text-white">{program.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Start Date:</span>
                          <span className="text-white">{new Date(program.startDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Available Seats:</span>
                          <span className="text-white">{program.availableSeats}/{program.seats}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {program.tags.length > 3 && (
                          <span className="text-gray-400 text-xs px-2 py-1">
                            +{program.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Level and Format Badges */}
                      <div className="flex items-center gap-2 mb-6">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(program.level)}`}>
                          {program.level.charAt(0).toUpperCase() + program.level.slice(1)}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getFormatColor(program.format)}`}>
                          {program.format.charAt(0).toUpperCase() + program.format.slice(1)}
                        </span>
                      </div>

                      {/* Rating and Price */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{program.rating}</span>
                          <span>({program.reviews})</span>
                        </div>
                        <div className="text-2xl font-bold text-white">
                          ${program.price.toLocaleString()}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Enroll Now
                        </button>
                        <button 
                          onClick={() => toggleProgramExpansion(program.id)}
                          className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors"
                        >
                          {expandedProgram === program.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Expanded Details */}
                      {expandedProgram === program.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-white/10"
                        >
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-white font-semibold mb-2">What You'll Learn:</h4>
                              <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  Hands-on practical experience with real-world projects
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  Industry-recognized certification upon completion
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  Access to exclusive learning resources and materials
                                </li>
                              </ul>
                            </div>
                            
                            <div className="flex gap-3">
                              <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm">
                                <Download className="w-4 h-4 inline mr-2" />
                                Download Brochure
                              </button>
                              <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm">
                                <MessageCircle className="w-4 h-4 inline mr-2" />
                                Contact Instructor
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
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
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-2">No training programs found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or filters to find the perfect training program.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setActiveLevel('all');
                    setActiveFormat('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Clear All Filters
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
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Custom Training for Your Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We offer tailored training programs designed specifically for your organization's needs. 
                Let's discuss how we can help upskill your team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Training
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  📞 Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
