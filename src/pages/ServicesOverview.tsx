import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Globe, 
  Star, 
  Zap, 
  Lock, 
  Cpu, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  Users as TeamIcon,
  Globe as GlobalIcon,
  Zap as LightningIcon
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, CONTACT_INFO } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', ...MICRO_SAAS_CATEGORIES];

  const featuredServices = MICRO_SAAS_SERVICES.filter(service => service.featured);

  const stats = [
    { label: 'Services Available', value: MICRO_SAAS_SERVICES.length, icon: Star },
    { label: 'Categories', value: MICRO_SAAS_CATEGORIES.length, icon: Globe },
    { label: 'AI-Powered', value: MICRO_SAAS_SERVICES.filter(s => s.category === 'AI Services').length, icon: Brain },
    { label: 'Global Reach', value: '50+', icon: GlobalIcon },
  ];

  return (
    <>
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group"
        description="Explore our complete portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services designed to transform your business. Transform your business with cutting-edge solutions."
        canonical="/services-overview"
        url="https://ziontechgroup.com/services-overview"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Complete Services Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our comprehensive range of AI-powered micro SAAS services, enterprise IT solutions, and cutting-edge technology services designed to transform your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Get Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                Contact Sales Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    {service.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    {service.currency}{service.price}
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    AI Score: {service.aiScore}%
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                  <Link to="/request-quote">
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive services organized by technology category and business need
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    {service.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-cyan-400">
                    {service.currency}{service.price}
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    AI Score: {service.aiScore}%
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-slate-600 text-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                  <Link to="/request-quote">
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-First Approach',
                description: 'All our solutions leverage the latest AI and machine learning technologies for maximum efficiency and intelligence.',
                color: 'from-purple-600 to-pink-600'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level security with SOC 2 Type II compliance, ISO 27001 certification, and 24/7 threat monitoring.',
                color: 'from-red-600 to-pink-600'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized performance with 99.9% uptime guarantee and sub-second response times for critical operations.',
                color: 'from-yellow-600 to-orange-600'
              },
              {
                icon: TeamIcon,
                title: 'Expert Team',
                description: 'Certified professionals with 10+ years of experience in AI, cybersecurity, and enterprise technology.',
                color: 'from-blue-600 to-cyan-600'
              },
              {
                icon: GlobalIcon,
                title: 'Global Support',
                description: '24/7 support across all time zones with dedicated account managers and multilingual assistance.',
                color: 'from-green-600 to-emerald-600'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Track record of helping 500+ companies achieve digital transformation and operational excellence.',
                color: 'from-indigo-600 to-purple-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
                  Schedule Demo
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-cyan-100">
              <p className="text-sm">
                Need immediate assistance? Call us at{' '}
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-semibold hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}