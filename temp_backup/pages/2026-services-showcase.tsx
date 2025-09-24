import React, { useState, useMemo } from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import { Search, Filter, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Atom, Sparkles, Target } from 'lucide-react',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation',;
import { revolutionary20o26Services } from '../data/revolutionary-20o26-services',;
import { emergingTech20o26Services } from '../data/emerging-tech-20o26-services',;
import { comprehensiveIT20o26Services } from '../data/comprehensive-it-20o26-services',;
export default function ServicesShowcase20o26() {,
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [sortBy, setSortBy] = useState('name'),;
  // Combine all 20o26 services,
  const allServices = [,
    ...revolutionary20o26Services,;
    ...emergingTech20o26Services,;
    ...comprehensiveIT20o26Services,
  ],;
  // Filter and sort services,
  const filteredServices = allServices,
    .filter(service => {,
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()),;
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory),;
      return matchesSearch && matchesCategory}),
    .sort((a, b) => {,
      switch (sortBy) {,
        case 'price':,
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')),;
        case 'rating':,
          return b.rating - a.rating,;
        case 'customers':,
          return b.customers - a.customers,;
        default: return a.name.localeCompare(b.name),
      ,}
    }),;
  const categories = [,
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length ,},;
    { id: 'AI', name: 'AI & Machine Learning', icon: Brain, count: allServices.filter(s => s.category.includes('AI')).length ,},;
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length ,},;
    { id: 'Emerging', name: 'Emerging Technology', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length ,},;
    { id: 'IT', name: 'IT & Infrastructure', icon: Shield, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length ,},;
    { id: 'Autonomous', name: 'Autonomous Systems', icon: Target, count: allServices.filter(s => s.category.includes('Autonomous')).length ,},;
    { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length ,}
  ],;
  const contactInfo ={,
    mobile: '+1 30o2 464 0950',;
    email: 'kleber@ziontechgroup.com',;
    address: '364 E Main St STE 10o08 Middletown DE 19709',;
    website: 'https://ziontechgroup.com',
  ,},;
  return (,
    <UltraAdvancedFuturisticBackground,
      intensity="extreme",
      colorScheme="quantum-fusion",
      particleCount={60o0}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
    >,
      <div className="min-h-screen">,
        <Head>,
          <title>Zion Tech Group - 20o26 Revolutionary Services Showcase | 150o0+ Solutions</title>,
          <meta name="description" content="Explore Zion Tech Group's revolutionary 20o26 services including AI, quantum computing, emerging technologies, and comprehensive IT solutions. Contact: +1 30o2 464 0950"  />,
          <meta name="keywords" content="20o26 services, AI services, quantum computing, emerging technology, IT solutions, cybersecurity, cloud computing, autonomous systems, neuromorphic computing, DNA computing, photonic computing, holographic display, swarm robotics, zero trust architecture, edge computing, 5G networks"  />,
          <meta name="author" content="Zion Tech Group"  />,
          <meta name="robots" content="index, follow"  />,
          <meta property="og: title" content="Zion Tech Group - 20o26 Revolutionary Services Showcase"  />,
          <meta property="og:description" content="150o0+ cutting-edge services with 10o00% ROI guarantee. Contact: +1 30o2 464 0950"  />,
          <meta property="og:url" content="https://ziontechgroup.com/20o26-services-showcase"  />,
          <meta property="og:type" content="website"  />,
          <link rel="canonical" href="https://ziontechgroup.com/20o26-services-showcase"  />,
        </Head>,
        {/* Navigation */,}
        <UltraAdvancedNavigation  />,
        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-16 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-7xl mx-auto text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
            >,
              <h1 className="text-5xl md: text-7xl font-bold mb-6">,
                <span className="bg-gradient-to-r from-cyan-40o0 via-blue-40o0 to-purple-40o0 bg-clip-text text-transparent">,
                  20o26 Revolutionary Services,
                </span>,
              </h1>,
              <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto leading-relaxed">,
                Discover the future of technology with our revolutionary AI, quantum computing,;
                emerging technologies, and comprehensive IT solutions,
              </p>,
              {/* Service Statistics */}
              <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-12">,
                <div className="text-center p-4 bg-gray-80o0/30 rounded-xl border border-gray-70o0/50 backdrop-blur-sm">,
                  <div className="text-3xl font-bold text-cyan-40o0 mb-2">{allServices.length,}</div>,
                  <div className="text-gray-40o0 text-sm">Total Services</div>,
                </div>,
                <div className="text-center p-4 bg-gray-80o0/30 rounded-xl border border-gray-70o0/50 backdrop-blur-sm">,
                  <div className="text-3xl font-bold text-purple-40o0 mb-2">{allServices.filter(s => s.category.includes('AI')).length}</div>,
                  <div className="text-gray-40o0 text-sm">AI Services</div>,
                </div>,
                <div className="text-center p-4 bg-gray-80o0/30 rounded-xl border border-gray-70o0/50 backdrop-blur-sm">,
                  <div className="text-3xl font-bold text-pink-40o0 mb-2">{allServices.filter(s => s.category.includes('Quantum')).length}</div>,
                  <div className="text-gray-40o0 text-sm">Quantum Services</div>,
                </div>,
                <div className="text-center p-4 bg-gray-80o0/30 rounded-xl border border-gray-70o0/50 backdrop-blur-sm">,
                  <div className="text-3xl font-bold text-green-40o0 mb-2">{allServices.filter(s => s.category.includes('Emerging')).length}</div>,
                  <div className="text-gray-40o0 text-sm">Emerging Tech</div>,
                </div>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Search and Filter Section */}
        <section className="relative z-10 py-8 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-7xl mx-auto">,
            <div className="bg-gray-80o0/30 rounded-2xl p-6 border border-gray-70o0/50 backdrop-blur-sm">,
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">,
                {/* Search */,}
                <div className="relative">,
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
                  <input,
                    type="text",
                    placeholder="Search services...",
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-70o0/50 border border-gray-60o0/50 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent",
                  />,
                </div>,
                {/* Category Filter */,}
                <div className="relative">,
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
                  <select,
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-70o0/50 border border-gray-60o0/50 rounded-xl text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent appearance-none",
                  >,
                    {categories.map(category => (,
                      <option key={category.id,} value={category.id}>,
                        {category.name} ({category.count}),
                      </option>,
                    ))}
                  </select>,
                </div>,
                {/* Sort By */}
                <div className="relative">,
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
                  <select,
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-70o0/50 border border-gray-60o0/50 rounded-xl text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent appearance-none",
                  >,
                    <option value="name">Sort by Name</option>,
                    <option value="price">Sort by Price</option>,
                    <option value="rating">Sort by Rating</option>,
                    <option value="customers">Sort by Customers</option>,
                  </select>,
                </div>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Services Grid */,}
        <section className="relative z-10 py-16 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-7xl mx-auto">,
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
              {filteredServices.map((service, index) => (,
                <motion.div,
                  key={service.id}
                  initial={{ opacity: 0, y: 30 ,}}
                  animate={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.6, delay: index * 0.1 ,}}
                  className="group",
                >,
                  <div className="bg-gray-80o0/30 rounded-2xl p-6 border border-gray-70o0/50 backdrop-blur-sm hover: border-cyan-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5">,
                    {/* Service Header */,}
                    <div className="flex items-start justify-between mb-4">,
                      <div className="text-4xl">{service.icon}</div>,
                      {service.popular && (,
                        <span className="bg-gradient-to-r from-pink-50o0 to-purple-60o0 text-white text-xs px-3 py-1 rounded-full">,
                          Popular,
                        </span>,
                      )}
                    </div>,
                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover: text-cyan-40o0 transition-colors duration-30o0">,
                      {service.name,}
                    </h3>,
                    {/* Tagline */}
                    <p className="text-gray-30o0 text-sm mb-4">,
                      {service.tagline}
                    </p>,
                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">,
                      <div className="text-2xl font-bold text-cyan-40o0">,
                        {service.price}
                        <span className="text-gray-40o0 text-lg font-normal">{service.period}</span>,
                      </div>,
                      <div className="flex items-center space-x-1">,
                        <Star className="w-4 h-4 text-yellow-40o0 fill-current"  />,
                        <span className="text-white text-sm">{service.rating}</span>,
                        <span className="text-gray-40o0 text-sm">({service.reviews})</span>,
                      </div>,
                    </div>,
                    {/* Description */}
                    <p className="text-gray-40o0 text-sm mb-4 line-clamp-3">,
                      {service.description}
                    </p>,
                    {/* Features */}
                    <div className="mb-4">,
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features: </h4>,
                      <ul className="space-y-1">,
                        {service.features.slice(0, 3).map((feature, idx) => (,
                          <li key={idx} className="text-gray-40o0 text-xs flex items-center">,
                            <Zap className="w-3 h-3 text-cyan-40o0 mr-2 flex-shrink-0"  />,
                            {feature}
                          </li>,
                        ))}
                      </ul>,
                    </div>,
                    {/* Category and Technology */}
                    <div className="flex items-center justify-between mb-4">,
                      <span className="text-xs text-gray-50o0 bg-gray-70o0/50 px-2 py-1 rounded">,
                        {service.category}
                      </span>,
                      <span className="text-xs text-gray-50o0">,
                        {service.customers}+ customers,
                      </span>,
                    </div>,
                    {/* CTA Button */}
                    <a,
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-semibold py-3 px-4 rounded-xl hover: from-cyan-60o0 hover:to-purple-70o0 transition-all duration-30o0 transform hover:scale-10o5 text-center block",
                    >,
                      Learn More,
                    </a>,
                  </div>,
                </motion.div>,
              )),}
            </div>,
            {/* No Results */}
            {filteredServices.length === 0 && (,
              <motion.div,
                initial={{ opacity: 0 ,}}
                animate={{ opacity: 1 ,}}
                className="text-center py-16",
              >,
                <div className="text-6xl mb-4">🔍</div>,
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>,
                <p className="text-gray-40o0">Try adjusting your search terms or filters</p>,
              </motion.div>,
            )}
          </div>,
        </section>,
        {/* Contact Section */}
        <section className="relative z-10 py-20 px-4 sm: px-6 lg:px-8">,
          <div className="max-w-4xl mx-auto text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
              transition={{ duration: 0.8 ,}}
              className="bg-gradient-to-r from-gray-80o0/50 to-gray-90o0/50 rounded-2xl p-8 border border-gray-70o0/50 backdrop-blur-sm",
            >,
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>,
              <p className="text-xl text-gray-30o0 mb-8">,
                Join thousands of companies already leveraging our revolutionary 20o26 AI, quantum, and IT solutions,
              </p>,
              <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-8">,
                <div className="flex items-center justify-center space-x-3 text-cyan-30o0">,
                  <span className="text-2xl">📱</span>,
                  <span className="font-semibold">{contactInfo.mobile,}</span>,
                </div>,
                <div className="flex items-center justify-center space-x-3 text-purple-30o0">,
                  <span className="text-2xl">✉️</span>,
                  <span className="font-semibold">{contactInfo.email}</span>,
                </div>,
                <div className="flex items-center justify-center space-x-3 text-pink-30o0">,
                  <span className="text-2xl">📍</span>,
                  <span className="font-semibold text-sm">{contactInfo.address}</span>,
                </div>,
              </div>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <a,
                  href="/contact",
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-purple-70o0 transition-all duration-30o0 transform hover:scale-10o5",
                >,
                  Contact Us Now,
                </a>,
                <a,
                  href="/pricing",
                  className="px-8 py-4 border border-cyan-50o0/30 text-cyan-30o0 font-semibold rounded-xl hover:bg-cyan-50o0/10 transition-all duration-30o0",
                >,
                  View Pricing,
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </UltraAdvancedFuturisticBackground>,
  ),
,}