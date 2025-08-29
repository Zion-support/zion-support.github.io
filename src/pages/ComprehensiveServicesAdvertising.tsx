import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap,
  Brain,
  Globe,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Cloud,
  Smartphone,
  Code,
  BarChart3,
  Users,
  Target,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Award,
  ArrowUpRight,
  Search
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_CATEGORIES_2030, SERVICE_STATISTICS_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensiveServicesAdvertising() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: COMPREHENSIVE_SERVICES_INDEX_2030.length },
    ...SERVICE_CATEGORIES_2030.map(category => ({
      id: category,
      name: category,
      icon: '🔧',
      count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === category).length
    }))
  ];

  return (
    <>
      <SEO 
        title="Comprehensive AI & IT Services 2030 | Zion Tech Group"
        description="Discover our cutting-edge AI, IT infrastructure, and emerging technology services. Transform your business with innovative solutions delivering 300-2000% ROI."
        keywords="AI services, IT infrastructure, quantum computing, blockchain, cybersecurity, cloud solutions, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">AI & IT Services 2030</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI, quantum computing, blockchain, and emerging technologies. 
                Achieve unprecedented ROI and competitive advantage.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400">{SERVICE_STATISTICS_2030.totalServices}+</div>
                  <div className="text-gray-300">Innovative Services</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">{SERVICE_STATISTICS_2030.totalCategories}</div>
                  <div className="text-gray-300">Technology Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-pink-400">{SERVICE_STATISTICS_2030.averageRating}/5</div>
                  <div className="text-gray-300">Average Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">${SERVICE_STATISTICS_2030.averagePrice.toLocaleString()}</div>
                  <div className="text-gray-300">Average Investment</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts today to discuss your technology needs and discover how our innovative solutions can drive your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available 24/7</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Quick response guaranteed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-400">Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered business intelligence to quantum computing and emerging technologies, 
                we offer the most comprehensive suite of innovative solutions in the industry.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">{service.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Investment:</span>
                      <span className="text-lg font-bold text-green-400">
                        ${service.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Market Price:</span>
                      <span className="text-sm text-gray-300">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">ROI:</span>
                      <span className="text-sm text-yellow-400 font-semibold">{service.roi}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Setup Time:</span>
                      <span className="text-sm text-gray-300">{service.setupTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">AI Score: {service.aiScore}%</span>
                    </div>
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company. We're your strategic partner in digital transformation, 
                delivering innovative solutions that drive real business results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Proven Excellence",
                  description: "Consistently rated 4.8+ stars across all services with thousands of satisfied clients worldwide.",
                  color: "text-yellow-400"
                },
                {
                  icon: TrendingUp,
                  title: "Exceptional ROI",
                  description: "Our services deliver 300-2000% ROI, ensuring your investment generates maximum returns.",
                  color: "text-green-400"
                },
                {
                  icon: Zap,
                  title: "Rapid Implementation",
                  description: "Most services deployed in 3-8 weeks, ensuring quick time-to-value and competitive advantage.",
                  color: "text-blue-400"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level security with SOC 2 compliance and 99.99% uptime guarantees.",
                  color: "text-purple-400"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 ${feature.color}`}>
                    <feature.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of successful businesses that have already transformed their operations 
                with our cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}