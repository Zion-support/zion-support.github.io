import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Filter, 
  Star, 
  Award, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Globe, 
  Zap, 
  Code, 
  Database, 
  Network, 
  Lock, 
  Eye,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Talent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const talentCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      count: 45,
      description: 'AI engineers, data scientists, and ML specialists'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      count: 32,
      description: 'Security analysts, penetration testers, and compliance experts'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      count: 38,
      description: 'Cloud architects, DevOps engineers, and infrastructure specialists'
    },
    {
      id: 'software-development',
      name: 'Software Development',
      icon: Code,
      color: 'from-green-600 to-emerald-600',
      count: 67,
      description: 'Full-stack developers, mobile developers, and system architects'
    },
    {
      id: 'data-analytics',
      name: 'Data & Analytics',
      icon: Database,
      color: 'from-indigo-600 to-purple-600',
      count: 28,
      description: 'Data engineers, analysts, and business intelligence specialists'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      count: 23,
      description: 'Transformation consultants and change management experts'
    }
  ];

  const featuredTalent = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior AI Research Scientist',
      category: 'ai-ml',
      experience: '8+ years',
      location: 'San Francisco, CA',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      rating: 4.9,
      projects: 47,
      hourlyRate: '$150-200',
      availability: 'Available',
      avatar: '/avatars/sarah-chen.jpg',
      description: 'PhD in Computer Science with expertise in large language models and AI ethics.'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      title: 'Cybersecurity Architect',
      category: 'cybersecurity',
      experience: '12+ years',
      location: 'New York, NY',
      skills: ['Zero Trust', 'SOC 2', 'Incident Response', 'Threat Hunting'],
      rating: 4.8,
      projects: 63,
      hourlyRate: '$180-250',
      availability: 'Available',
      avatar: '/avatars/marcus-rodriguez.jpg',
      description: 'Former CISO with deep expertise in enterprise security architecture.'
    },
    {
      id: 3,
      name: 'Alex Thompson',
      title: 'Cloud Infrastructure Engineer',
      category: 'cloud-devops',
      experience: '6+ years',
      location: 'Austin, TX',
      skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      rating: 4.7,
      projects: 34,
      hourlyRate: '$120-180',
      availability: 'Available',
      avatar: '/avatars/alex-thompson.jpg',
      description: 'Expert in multi-cloud architecture and infrastructure automation.'
    },
    {
      id: 4,
      name: 'Dr. Emily Watson',
      title: 'Healthcare Technology Consultant',
      category: 'digital-transformation',
      experience: '10+ years',
      location: 'Boston, MA',
      skills: ['HIPAA', 'Healthcare IT', 'Digital Health', 'Compliance'],
      rating: 4.9,
      projects: 29,
      hourlyRate: '$160-220',
      availability: 'Available',
      avatar: '/avatars/emily-watson.jpg',
      description: 'Former healthcare executive specializing in digital transformation.'
    }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 0 },
    { id: 'remote', name: 'Remote', count: 89 },
    { id: 'san-francisco', name: 'San Francisco', count: 23 },
    { id: 'new-york', name: 'New York', count: 18 },
    { id: 'austin', name: 'Austin', count: 15 },
    { id: 'boston', name: 'Boston', count: 12 },
    { id: 'seattle', name: 'Seattle', count: 11 },
    { id: 'delaware', name: 'Delaware', count: 8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Talent - Zion Tech Group"
        description="Discover top-tier technology talent for your projects. AI experts, cybersecurity specialists, cloud engineers, and more."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover Top Tech Talent
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Connect with world-class technology professionals specializing in AI, cybersecurity, 
              cloud computing, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for talent, skills, or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="all">All Categories</option>
            {talentCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
          
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name} {location.count > 0 && `(${location.count})`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Talent Categories */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Explore Talent Categories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talentCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-slate-400 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-medium">{category.count} professionals</span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Talent */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Featured Talent
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredTalent.map((talent, index) => (
            <motion.div
              key={talent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{talent.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{talent.title}</p>
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{talent.experience}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{talent.location}</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{talent.rating}</span>
                  </div>
                  <span className="text-sm text-slate-400">{talent.projects} projects</span>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4">{talent.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {talent.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-cyan-400 font-medium">{talent.hourlyRate}</span>
                  <span className="text-slate-400 text-sm ml-2">/hour</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    talent.availability === 'Available' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {talent.availability}
                  </span>
                  <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Custom Talent Solutions?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            We can help you find the perfect talent for your specific project requirements. 
            Our team will work with you to understand your needs and match you with the right professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium">
              Request Custom Search
            </button>
            <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}