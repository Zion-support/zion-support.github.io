import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  Clock, 
  Users, 
  Star, 
  Play, 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Database 
} from 'lucide-react';

interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  format: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  instructor: string;
  location: string;
  startDate: string;
  seats: number;
  availableSeats: number;
  tags: string[];
  featured: boolean;
}

const Training: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');
  const [results, setResults] = useState<TrainingProgram[]>([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 0 },
    { id: 'cloud', name: 'Cloud Computing', count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 0 },
    { id: 'data', name: 'Data Analytics', count: 0 },
    { id: 'devops', name: 'DevOps', count: 0 },
    { id: 'emerging', name: 'Emerging Tech', count: 0 }
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
    { id: 'in-person', name: 'In-Person', count: 0 },
    { id: 'hybrid', name: 'Hybrid', count: 0 },
    { id: 'self-paced', name: 'Self-Paced', count: 0 }
  ];

  const trainingPrograms: TrainingProgram[] = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals & Machine Learning',
      description: 'Comprehensive introduction to artificial intelligence and machine learning concepts, algorithms, and practical applications.',
      category: 'ai-ml',
      level: 'beginner',
      format: 'hybrid',
      duration: '8 weeks',
      price: '$2,500',
      rating: 4.8,
      reviews: 156,
      instructor: 'Dr. Sarah Chen',
      location: 'Remote + NYC',
      startDate: '2025-02-15',
      seats: 25,
      availableSeats: 8,
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
      featured: true
    },
    {
      id: 'cloud-architecture',
      title: 'Advanced Cloud Architecture',
      description: 'Design and implement scalable, secure cloud infrastructure using AWS, Azure, and Google Cloud Platform.',
      category: 'cloud',
      level: 'advanced',
      format: 'in-person',
      duration: '6 weeks',
      price: '$3,200',
      rating: 4.9,
      reviews: 89,
      instructor: 'Michael Rodriguez',
      location: 'San Francisco',
      startDate: '2025-02-20',
      seats: 20,
      availableSeats: 3,
      tags: ['Cloud', 'AWS', 'Azure', 'Architecture'],
      featured: true
    },
    {
      id: 'cyber-defense',
      title: 'Cybersecurity Defense Strategies',
      description: 'Learn advanced cybersecurity techniques including threat detection, incident response, and security architecture.',
      category: 'cybersecurity',
      level: 'intermediate',
      format: 'hybrid',
      duration: '10 weeks',
      price: '$2,800',
      rating: 4.7,
      reviews: 203,
      instructor: 'Alex Thompson',
      location: 'Remote + DC',
      startDate: '2025-02-25',
      seats: 30,
      availableSeats: 15,
      tags: ['Cybersecurity', 'Threat Detection', 'Incident Response'],
      featured: false
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      description: 'Master data analysis, visualization, and statistical modeling techniques for business intelligence.',
      category: 'data',
      level: 'intermediate',
      format: 'self-paced',
      duration: '12 weeks',
      price: '$1,800',
      rating: 4.6,
      reviews: 178,
      instructor: 'Dr. Emily Watson',
      location: 'Remote',
      startDate: '2025-03-01',
      seats: 50,
      availableSeats: 25,
      tags: ['Data Science', 'Analytics', 'Python', 'SQL'],
      featured: false
    }
  ];

  useEffect(() => {
    setResults(trainingPrograms);
    updateCounts();
  }, []);

  const updateCounts = () => {
    // Update category counts
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = trainingPrograms.length;
      } else {
        cat.count = trainingPrograms.filter(program => program.category === cat.id).length;
      }
    });

    // Update level counts
    levels.forEach(level => {
      if (level.id === 'all') {
        level.count = trainingPrograms.length;
      } else {
        level.count = trainingPrograms.filter(program => program.level === level.id).length;
      }
    });

    // Update format counts
    formats.forEach(format => {
      if (format.id === 'all') {
        format.count = trainingPrograms.length;
      } else {
        format.count = trainingPrograms.filter(program => program.format === format.id).length;
      }
    });
  };

  const filteredResults = useMemo(() => {
    return trainingPrograms.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
      const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
      const matchesFormat = activeFormat === 'all' || program.format === activeFormat;

      return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
    });
  }, [searchQuery, activeCategory, activeLevel, activeFormat]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-ml':
        return <Brain className="w-5 h-5" />;
      case 'cloud':
        return <Cloud className="w-5 h-5" />;
      case 'cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'data':
        return <Database className="w-5 h-5" />;
      case 'devops':
        return <Zap className="w-5 h-5" />;
      case 'emerging':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced':
        return 'bg-orange-500/20 text-orange-400';
      case 'expert':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'in-person':
        return 'bg-purple-500/20 text-purple-400';
      case 'hybrid':
        return 'bg-indigo-500/20 text-indigo-400';
      case 'self-paced':
        return 'bg-teal-500/20 text-teal-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml':
        return 'from-purple-500 to-pink-500';
      case 'cloud':
        return 'from-blue-500 to-cyan-500';
      case 'cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'data':
        return 'from-green-500 to-emerald-500';
      case 'devops':
        return 'from-indigo-500 to-purple-500';
      case 'emerging':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <>
      <SEO
        title="Training & Education - Zion Tech Group"
        description="Comprehensive training programs and educational resources in AI, cloud computing, cybersecurity, data analytics, and emerging technologies."
        keywords="training, education, courses, AI training, cloud computing, cybersecurity, data analytics, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Training &{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive training programs and educational resources in AI,
              cloud computing, cybersecurity, data analytics, and emerging
              technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search training programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                />
              </div>
              
              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Categories */}
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeCategory === category.id
                            ? 'bg-indigo-500 text-white'
                            : 'text-gray-300 hover:bg-slate-700/50'
                        }`}
                      >
                        {category.name}
                        <span className="float-right text-xs opacity-75">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Levels */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Skill Level</h3>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setActiveLevel(level.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeLevel === level.id
                            ? 'bg-indigo-500 text-white'
                            : 'text-gray-300 hover:bg-slate-700/50'
                        }`}
                      >
                        {level.name}
                        <span className="float-right text-xs opacity-75">({level.count})</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Formats */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Format</h3>
                  <div className="space-y-2">
                    {formats.map((format) => (
                      <button
                        key={format.id}
                        onClick={() => setActiveFormat(format.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeFormat === format.id
                            ? 'bg-indigo-500 text-white'
                            : 'text-gray-300 hover:bg-slate-700/50'
                        }`}
                      >
                        {format.name}
                        <span className="float-right text-xs opacity-75">({format.count})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                Training Programs ({filteredResults.length})
              </h2>
            </div>
            
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredResults.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-400/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(program.category)} rounded-xl flex items-center justify-center`}>
                        {getCategoryIcon(program.category)}
                      </div>
                      {program.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{program.description}</p>
                    
                    {/* Meta Information */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-400">Instructor:</span>
                        <span className="text-white ml-2">{program.instructor}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white ml-2">{program.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Price:</span>
                        <span className="text-green-400 font-medium ml-2">{program.price}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Start Date:</span>
                        <span className="text-white ml-2">{new Date(program.startDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}>
                        {program.level}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFormatColor(program.format)}`}>
                        {program.format}
                      </span>
                      {program.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-800/50 text-gray-300 text-xs rounded border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Rating and Seats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(program.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                        <span className="text-gray-400 text-sm ml-2">({program.reviews})</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Seats:</span>
                        <span className="text-white ml-1">{program.availableSeats}/{program.seats}</span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-sm">
                        Enroll Now
                      </button>
                      <button className="px-4 py-2 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 text-sm">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <GraduationCap className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Programs Found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;