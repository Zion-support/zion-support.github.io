import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Users, Search, Briefcase, Star, Award, TrendingUp, Globe, Zap } from 'lucide-react';

export default function Talent() {
  const features = [
    {
      icon: Search,
      title: 'AI-Powered Talent Discovery',
      description: 'Advanced algorithms to find the perfect match for your organization'
    },
    {
      icon: Briefcase,
      title: 'Specialized Tech Recruitment',
      description: 'Expert recruiters focused on AI, Quantum Computing, and emerging technologies'
    },
    {
      icon: Star,
      title: 'Top-Tier Candidates',
      description: 'Access to the best talent in the technology industry'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous screening and verification processes'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth Support',
      description: 'Continuous development and advancement opportunities'
    },
    {
      icon: Globe,
      title: 'Global Talent Pool',
      description: 'Worldwide network of qualified professionals'
    }
  ];

  const services = [
    {
      title: 'Executive Search',
      description: 'C-level and senior leadership recruitment',
      price: 'Custom'
    },
    {
      title: 'Technical Recruitment',
      description: 'AI, ML, Quantum Computing, and IT professionals',
      price: '15-25%'
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible staffing solutions for project-based work',
      price: 'Hourly rates'
    },
    {
      title: 'Talent Assessment',
      description: 'AI-powered skills evaluation and personality testing',
      price: 'Per assessment'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Talent Solutions - Zion Tech Group"
        description="Discover top-tier technology talent with our AI-powered recruitment solutions. Specialized in AI, Quantum Computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Top Talent</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with exceptional technology professionals through our AI-powered talent solutions. 
              Specialized in AI, Quantum Computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Find Talent
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                Post a Job
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Talent Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology and industry expertise to find the perfect candidates for your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Talent Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive recruitment solutions tailored to your organization's needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Next Star?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI-powered talent solutions connect you with exceptional professionals who can drive your organization forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                Schedule a Consultation
              </button>
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