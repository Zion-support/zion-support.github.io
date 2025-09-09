import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Filter,
  Star,
  MessageCircle,
  Heart,
  Eye,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  Globe,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Zap,
  Palette,
  Brain
} from 'lucide-react';

const Talent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Talent', icon: Users },
    { id: 'development', name: 'Development', icon: Cpu },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'data', name: 'Data & Analytics', icon: Database },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'ai', name: 'AI & ML', icon: Brain }
  ];

  const talent = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior Full-Stack Developer',
      category: 'development',
      description: 'Experienced developer with expertise in React, Node.js, and cloud technologies.',
      hourlyRate: 85,
      rating: 4.9,
      reviews: 47,
      location: 'San Francisco, CA',
      availability: 'Full-time',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
      experience: '8+ years',
      image: '/api/placeholder/100/100',
      badge: 'Top Rated'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'UX/UI Designer',
      category: 'design',
      description: 'Creative designer specializing in user experience and interface design.',
      hourlyRate: 75,
      rating: 4.8,
      reviews: 32,
      location: 'New York, NY',
      availability: 'Part-time',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      experience: '6+ years',
      image: '/api/placeholder/100/100',
      badge: 'Featured'
    },
    {
      id: 3,
      name: 'David Kim',
      title: 'Data Scientist',
      category: 'data',
      description: 'Expert in machine learning, data analysis, and statistical modeling.',
      hourlyRate: 95,
      rating: 4.9,
      reviews: 28,
      location: 'Austin, TX',
      availability: 'Full-time',
      skills: ['Python', 'TensorFlow', 'SQL', 'Statistics'],
      experience: '7+ years',
      image: '/api/placeholder/100/100',
      badge: 'Expert'
    },
    {
      id: 4,
      name: 'Lisa Thompson',
      title: 'DevOps Engineer',
      category: 'cloud',
      description: 'Infrastructure specialist with deep knowledge of cloud platforms and automation.',
      hourlyRate: 90,
      rating: 4.7,
      reviews: 41,
      location: 'Seattle, WA',
      availability: 'Full-time',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      experience: '9+ years',
      image: '/api/placeholder/100/100',
      badge: 'Certified'
    },
    {
      id: 5,
      name: 'Alex Johnson',
      title: 'Cybersecurity Specialist',
      category: 'security',
      description: 'Security expert with experience in penetration testing and security architecture.',
      hourlyRate: 100,
      rating: 4.8,
      reviews: 23,
      location: 'Washington, DC',
      availability: 'Contract',
      skills: ['Penetration Testing', 'Security Auditing', 'Compliance', 'Incident Response'],
      experience: '10+ years',
      image: '/api/placeholder/100/100',
      badge: 'Security+'
    },
    {
      id: 6,
      name: 'Emma Wilson',
      title: 'Mobile App Developer',
      category: 'mobile',
      description: 'Skilled mobile developer specializing in iOS and Android applications.',
      hourlyRate: 80,
      rating: 4.6,
      reviews: 35,
      location: 'Los Angeles, CA',
      availability: 'Part-time',
      skills: ['Swift', 'Kotlin', 'React Native', 'Firebase'],
      experience: '5+ years',
      image: '/api/placeholder/100/100',
      badge: 'Verified'
    }
  ];

  const filteredTalent = talent.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || person.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-600/20 rounded-full">
              <Users className="h-16 w-16 text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Talent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Marketplace
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect with top-tier technology professionals and experts. 
            Find the perfect talent for your projects and business needs.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for talent, skills, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 border-purple-500 text-white'
                        : 'bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Talent Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredTalent.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No talent found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTalent.map((person, index) => (
                <motion.div
                  key={person.id}
                  className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {/* Header */}
                  <div className="p-6 border-b border-slate-700">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                          <Users className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                          <p className="text-purple-400 font-medium">{person.title}</p>
                        </div>
                      </div>
                      {person.badge && (
                        <span className="px-2 py-1 text-xs font-semibold bg-purple-600 text-white rounded-full">
                          {person.badge}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{person.description}</p>
                    
                    {/* Rating and Reviews */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(person.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">
                        {person.rating} ({person.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {person.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        {person.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        {person.availability}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Briefcase className="h-4 w-4" />
                        {person.experience}
                      </div>
                      <div className="flex items-center gap-2 text-purple-400 font-semibold">
                        <DollarSign className="h-4 w-4" />
                        ${person.hourlyRate}/hr
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </button>
                      <button className="px-4 py-2 border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 rounded-lg transition-colors duration-200">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="px-4 py-2 border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 rounded-lg transition-colors duration-200">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Looking for Talent?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the perfect match? Our team can help you find specialized talent 
              or connect you with custom solutions for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Post a Job
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Custom Search
              </a>
              <a
                href="/marketplace"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <ArrowRight className="inline mr-2 h-5 w-5" />
                Browse All Talent
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Talent;