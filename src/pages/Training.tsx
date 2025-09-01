import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
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
      instructor: 'Jennifer Kim',
      location: 'Remote + DC',
      startDate: '2025-03-01',
      seats: 30,
      availableSeats: 12,
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
      instructor: 'Alex Thompson',
      location: 'Remote',
      startDate: '2025-02-01',
      seats: 50,
      availableSeats: 25,
      tags: ['Data Science', 'Analytics', 'Python', 'SQL'],
      featured: false
    },
    {
      id: 'devops-mastery',
      title: 'DevOps & CI/CD Mastery',
      description: 'Comprehensive DevOps training covering automation, containerization, and continuous integration/deployment.',
      category: 'devops',
      level: 'advanced',
      format: 'in-person',
      duration: '7 weeks',
      price: '$2,900',
      rating: 4.8,
      reviews: 134,
      instructor: 'David Wilson',
      location: 'Austin',
      startDate: '2025-02-25',
      seats: 18,
      availableSeats: 5,
      tags: ['DevOps', 'Docker', 'Kubernetes', 'Jenkins'],
      featured: true
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles, algorithms, and their potential applications.',
      category: 'emerging',
      level: 'beginner',
      format: 'hybrid',
      duration: '6 weeks',
      price: '$3,500',
      rating: 4.9,
      reviews: 67,
      instructor: 'Dr. Elena Rodriguez',
      location: 'Remote + Boston',
      startDate: '2025-03-10',
      seats: 15,
      availableSeats: 2,
      tags: ['Quantum Computing', 'Physics', 'Algorithms'],
      featured: true
    }
  ];

  // Calculate counts for categories, levels, and formats
  useEffect(() => {
    const updateCounts = () => {
      const categoryCounts = categories.map(cat => ({
        ...cat,
        count: cat.id === 'all' ? trainingPrograms.length : trainingPrograms.filter(p => p.category === cat.id).length
      }));

      const levelCounts = levels.map(lev => ({
        ...lev,
        count: lev.id === 'all' ? trainingPrograms.length : trainingPrograms.filter(p => p.level === lev.id).length
      }));

      const formatCounts = formats.map(fmt => ({
        ...fmt,
        count: fmt.id === 'all' ? trainingPrograms.length : trainingPrograms.filter(p => p.format === fmt.id).length
      }));

      // Update the arrays (in a real app, you'd use state setters)
      categories.splice(0, categories.length, ...categoryCounts);
      levels.splice(0, levels.length, ...levelCounts);
      formats.splice(0, formats.length, ...formatCounts);
    };

    updateCounts();
  }, []);

  // Filter and search training programs
  const filteredPrograms = useMemo(() => {
    return trainingPrograms.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           program.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
      const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
      const matchesFormat = activeFormat === 'all' || program.format === activeFormat;
      
      return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
    });
  }, [searchQuery, activeCategory, activeLevel, activeFormat]);

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'ai-ml': return Brain;
      case 'cloud': return Cloud;
      case 'cybersecurity': return Shield;
      case 'data': return Database;
      case 'devops': return Zap;
      case 'emerging': return TrendingUp;
      default: return GraduationCap;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'expert': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'in-person': return MapPin;
      case 'hybrid': return Users;
      case 'self-paced': return Play;
      default: return BookOpen;
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
    <>
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Professional training programs and certifications in AI, cloud computing, cybersecurity, and emerging technologies."
        keywords="training, certification, AI training, cloud computing, cybersecurity, professional development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Training</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advance your career with expert-led training programs in cutting-edge technologies. 
                From AI fundamentals to advanced cybersecurity, we've got you covered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search training programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                <select
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name} ({level.count})
                    </option>
                  ))}
                </select>

                <select
                  value={activeFormat}
                  onChange={(e) => setActiveFormat(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

        {/* Featured Programs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Programs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and highly-rated training programs designed to accelerate your career growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {trainingPrograms.filter(p => p.featured).map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                        <getCategoryIcon categoryId={program.category} className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {program.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{program.duration}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-300">{program.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{program.instructor}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{program.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{program.rating}</span>
                        <span className="text-xs text-gray-400">({program.reviews})</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${getLevelColor(program.level)}`}>
                        {program.level}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span className="text-green-400">{program.availableSeats}</span> of {program.seats} seats available
                      </div>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Programs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'All Training Programs'}
              </h2>
              <p className="text-gray-400">
                {filteredPrograms.length} programs found
              </p>
            </div>

            <div className="space-y-4">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <getCategoryIcon categoryId={program.category} className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                          <p className="text-gray-300 mb-3">{program.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-400 mb-1">{program.price}</div>
                          <div className="flex items-center gap-1 justify-end">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{program.rating}</span>
                            <span className="text-xs text-gray-400">({program.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{program.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{program.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{formatDate(program.startDate)}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(program.level)}`}>
                            {program.level}
                          </span>
                          <span className="text-sm text-gray-400">
                            {program.availableSeats} of {program.seats} seats available
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                            Enroll Now
                          </button>
                          <button className="px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their careers with our expert-led training programs. 
                Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  <GraduationCap className="w-5 h-5 mr-2 inline" />
                  Browse All Programs
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  <Award className="w-5 h-5 mr-2 inline" />
                  Get Certified
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Training;