import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award,
  Clock,
  Heart,
  Eye,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Globe,
  Building2,
  TrendingUp,
  CheckCircle,
  Plus
} from 'lucide-react';

const talentCategories = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Expert AI engineers, data scientists, and ML specialists',
    icon: Brain,
    count: '150+',
    color: 'from-purple-600 to-pink-600',
    skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'MLOps']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Cloud architects, DevOps engineers, and infrastructure specialists',
    icon: Cloud,
    count: '200+',
    color: 'from-blue-600 to-cyan-600',
    skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Security experts, penetration testers, and compliance specialists',
    icon: Shield,
    count: '120+',
    color: 'from-red-600 to-orange-600',
    skills: ['Penetration Testing', 'SOC', 'Compliance', 'Threat Intelligence']
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    description: 'Data engineers, analysts, and business intelligence specialists',
    icon: BarChart3,
    count: '180+',
    color: 'from-green-600 to-emerald-600',
    skills: ['Big Data', 'Data Warehousing', 'Business Intelligence', 'ETL']
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Full-stack developers, mobile developers, and software architects',
    icon: Code,
    count: '300+',
    color: 'from-indigo-600 to-purple-600',
    skills: ['React', 'Node.js', 'Python', 'Java', 'Mobile Development']
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technologies',
    description: 'Quantum computing, blockchain, and IoT specialists',
    icon: Rocket,
    count: '80+',
    color: 'from-yellow-600 to-orange-600',
    skills: ['Quantum Computing', 'Blockchain', 'IoT', 'Edge Computing']
  }
];

const featuredTalents = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    title: 'Senior AI Research Scientist',
    category: 'AI & Machine Learning',
    experience: '8+ years',
    location: 'San Francisco, CA',
    rating: 4.9,
    reviews: 47,
    hourlyRate: '$180',
    skills: ['Deep Learning', 'Computer Vision', 'NLP', 'PyTorch', 'Research'],
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: true
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    title: 'Cloud Infrastructure Architect',
    category: 'Cloud & DevOps',
    experience: '12+ years',
    location: 'Austin, TX',
    rating: 4.8,
    reviews: 63,
    hourlyRate: '$160',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Microservices', 'Architecture'],
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: true
  },
  {
    id: 3,
    name: 'Alex Thompson',
    title: 'Cybersecurity Consultant',
    category: 'Cybersecurity',
    experience: '10+ years',
    location: 'Washington, DC',
    rating: 4.9,
    reviews: 38,
    hourlyRate: '$175',
    skills: ['Penetration Testing', 'SOC', 'Compliance', 'Incident Response'],
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: true
  }
];

const Talent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTalents = featuredTalents.filter(talent => {
    if (selectedCategory !== 'all' && talent.category !== talentCategories.find(cat => cat.id === selectedCategory)?.title) {
      return false;
    }
    if (searchQuery && !talent.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Top-Tier
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Tech Talent
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Connect with world-class technology professionals, AI specialists, and industry experts 
              ready to transform your projects and accelerate innovation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for skills, expertise, or talent..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>1000+ Verified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Availability</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Explore Talent Categories</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Find specialized professionals across all technology domains, from AI and machine learning 
              to cybersecurity and emerging technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talentCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group cursor-pointer transition-all duration-300 hover:scale-105`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? 'all' : category.id)}
              >
                <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl h-full relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-white/90 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/80 font-semibold">{category.count} Professionals</span>
                      <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-white/20 rounded-full text-white/90 text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talents Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Talent</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Meet our top-rated professionals who have consistently delivered exceptional results 
              for clients across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTalents.map((talent, index) => (
              <motion.div
                key={talent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={talent.image} 
                      alt={talent.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/50"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{talent.name}</h3>
                      <p className="text-cyan-400 font-medium">{talent.title}</p>
                    </div>
                  </div>
                  {talent.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span>{talent.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{talent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-green-400">{talent.availability}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{talent.rating}</span>
                    <span className="text-slate-400">({talent.reviews} reviews)</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{talent.hourlyRate}/hr</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.slice(0, 4).map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    <Eye className="w-4 h-4" />
                    View Profile
                  </button>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                    <Heart className="w-4 h-4" />
                    Connect
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/talent/directory"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 group"
            >
              Browse All Talent
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Tech Talent?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you need a single specialist or an entire team, our talent network 
              connects you with verified professionals ready to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <Plus className="w-5 h-5" />
                Post a Job
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-slate-700/50 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                <Users className="w-5 h-5" />
                Talk to Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Talent;