import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ULTIMATE_INNOVATIVE_SERVICES_2027 } from '@/data/ultimateInnovativeServices2027';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { 
  Star, 
  Zap, 
  TrendingUp, 
  Users, 
  Shield, 
  Globe, 
  Rocket, 
  Brain,
  Cpu,
  Database,
  Network,
  Leaf,
  Satellite,
  Smartphone,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Award,
  Search
} from 'lucide-react';

export default function UltimateInnovativeServices2027() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'aiScore' | 'rating' | 'price'>('aiScore');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="h-5 w-5" /> },
    { id: 'AI & Automation', name: 'AI & Automation', icon: <Brain className="h-5 w-5" /> },
    { id: 'Emerging Tech', name: 'Emerging Tech', icon: <Rocket className="h-5 w-5" /> },
    { id: 'IT Services', name: 'IT Services', icon: <Cpu className="h-5 w-5" /> },
    { id: 'Security & Compliance', name: 'Security & Compliance', icon: <Shield className="h-5 w-5" /> },
    { id: 'Green Tech', name: 'Green Tech', icon: <Leaf className="h-5 w-5" /> },
    { id: 'Space Technology', name: 'Space Technology', icon: <Satellite className="h-5 w-5" /> }
  ];

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2027
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'aiScore') return b.aiScore - a.aiScore;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price') return a.price.starter - b.price.starter;
      return 0;
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Ultimate Innovative Services 2027 - Zion Tech Group"
        description="Discover cutting-edge AI, IT, and emerging technology services for 2027. Transform your business with our innovative micro SAAS solutions."
        keywords="AI services, IT solutions, emerging technology, micro SAAS, 2027 innovations, quantum computing, space technology"
        canonical="https://ziontechgroup.com/ultimate-innovative-services-2027"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-cyan-dark">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent mb-6">
              Ultimate Innovative Services 2027
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover the future of technology with our cutting-edge AI, IT, and emerging technology solutions. 
              Transform your business with innovative micro SAAS services designed for 2027 and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-zion-blue/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan/30">
                <Brain className="h-5 w-5 text-zion-cyan mr-2" />
                <span className="text-white font-medium">AI-Powered Solutions</span>
              </div>
              <div className="flex items-center bg-zion-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple/30">
                <Rocket className="h-5 w-5 text-zion-purple-light mr-2" />
                <span className="text-white font-medium">Emerging Tech</span>
              </div>
              <div className="flex items-center bg-zion-cyan/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan/30">
                <Globe className="h-5 w-5 text-zion-cyan mr-2" />
                <span className="text-white font-medium">Global Reach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-zion-blue-dark/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-zion-slate-dark border-zion-cyan'
                      : 'bg-transparent text-white border-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                  }`}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="aiScore">Sort by AI Score</option>
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-zion-blue/10 via-zion-purple/10 to-zion-cyan/10 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      service.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {service.status}
                    </span>
                  </div>

                  {/* AI Score */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-zion-cyan/20 backdrop-blur-sm rounded-full px-3 py-1 border border-zion-cyan/30">
                      <Brain className="h-4 w-4 text-zion-cyan" />
                      <span className="text-zion-cyan text-sm font-bold">{service.aiScore}</span>
                    </div>
                  </div>

                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.category === 'AI & Automation' && <Brain className="h-8 w-8 text-white" />}
                    {service.category === 'Emerging Tech' && <Rocket className="h-8 w-8 text-white" />}
                    {service.category === 'IT Services' && <Cpu className="h-8 w-8 text-white" />}
                    {service.category === 'Security & Compliance' && <Shield className="h-8 w-8 text-white" />}
                    {service.category === 'Green Tech' && <Leaf className="h-8 w-8 text-white" />}
                    {service.category === 'Space Technology' && <Satellite className="h-8 w-8 text-white" />}
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light text-xs rounded-full border border-zion-purple/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-zion-purple/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zion-slate-light text-sm">Starting from:</span>
                        <span className="text-zion-cyan font-bold text-lg">
                          ${service.price.starter.toLocaleString()}/month
                        </span>
                      </div>
                      <div className="text-zion-slate-light text-xs">
                        Professional: ${service.price.professional}/month | Enterprise: ${service.price.enterprise}/month
                      </div>
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                      </div>
                      <span className="text-zion-cyan text-sm font-medium">
                        {service.rating}/5.0
                      </span>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-zion-slate-light text-xs">
                            <CheckCircle className="h-3 w-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <a
                        href={service.website}
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-2 px-4 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="px-4 py-2 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                      >
                        Contact
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-4 border-t border-zion-purple/20">
                      <div className="text-center">
                        <p className="text-zion-slate-light text-xs mb-2">Contact us for custom pricing</p>
                        <div className="flex items-center justify-center gap-4 text-xs">
                          <a
                            href={`tel:${service.contactInfo.phone}`}
                            className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                          >
                            {service.contactInfo.phone}
                          </a>
                          <a
                            href={`mailto:${service.contactInfo.email}`}
                            className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                          >
                            {service.contactInfo.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-zion-purple-light" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-cyan-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Get in touch with our team to discuss how our innovative services can drive your business forward in 2027 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovative Services 2027 Inquiry"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-bold text-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}