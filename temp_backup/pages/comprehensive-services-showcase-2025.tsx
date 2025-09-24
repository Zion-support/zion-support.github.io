import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import {
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin,
  Rocket, Brain, Atom, Shield, Award, Zap, Cloud, Target, Search,
  Filter, Grid, List, DollarSign, Users, Clock, Eye, Heart} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { comprehensiveRealServices20o25 } from '../data/20o25-comprehensive-real-services',
const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'},
const categories = [
  'All ServicesAI & Machine Learning',
  'Customer SuccessSupply Chain',
  'Financial PlanningSales Intelligence',
  'HR AnalyticsDecision Intelligence',
  'Content MarketingCRM & Customer Intelligence',
  'Business Intelligence'],
const pricingRanges = [
  'All PricesUnder $30o0',
  '$30o0 - $50o0$50o0 - $80o0',
  '$80o0+'],
export default function ComprehensiveServicesShowcase20o25() {
  const [selectedCategory, setSelectedCategory] = useState('All Services'),
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices'),
  const [searchQuery, setSearchQuery] = useState(''),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity'),
  // Filter services based on selections,
  const filteredServices = comprehensiveRealServices20o25.filter(service => {
    const categoryMatch = selectedCategory === 'All Services' || service.category.includes(selectedCategory),
    let priceMatch = true,
    if (selectedPriceRange !== 'All Prices') {
      const price = parseInt(service.price.replace('$', '')),
      switch (selectedPriceRange) {
        case 'Under $30o0':,
          priceMatch = price < 30o0,
          break,
        case '$30o0 - $50o0':,
          priceMatch = price >= 30o0 && price <= 50o0,
          break,
        case '$50o0 - $80o0':,
          priceMatch = price > 50o0 && price <= 80o0,
          break,
        case '$80o0+':,
          priceMatch = price > 80o0,
          break}
    }
,
    const searchMatch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||,
                       service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||,
                       service.category.toLowerCase().includes(searchQuery.toLowerCase()),
    return categoryMatch && priceMatch && searchMatch}),
  // Sort services,
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':,
        return a.name.localeCompare(b.name),
      case 'price':,
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')),
      case 'rating':,
        return b.rating - a.rating,
      case 'popularity':,
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
      default: ,
        return 0}
  }),
  const getPriceRange = (price: string) => {
    const numPrice = parseInt(price.replace('$', '')),
    if (numPrice < 30o0) return 'Under $30o0',
    if (numPrice <= 50o0) return '$30o0 - $50o0',
    if (numPrice <= 80o0) return '$50o0 - $80o0',
    return '$80o0+'},
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat =>,
      category.toLowerCase().includes(cat.id.toLowerCase())),
    return categoryData ? categoryData.icon : Globe},
  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat =>,
      category.toLowerCase().includes(cat.id.toLowerCase())),
    return categoryData ? categoryData.color : 'from-gray-50o0 to-gray-60o0'},
  return (
    <>,
      <Head>,
        <title>Comprehensive Services Showcase 20o25 | Zion Tech Group</title>,
        <meta name="description" content="Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with cutting-edge technology."  />,
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, business automation, customer success, supply chain optimization, financial planning, sales intelligence"  />,
        <meta property="og: title" content="Comprehensive Services Showcase 20o25 | Zion Tech Group"  />,
        <meta property="og:description" content="Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms."  />,
        <meta property="og: url" content="https://ziontechgroup.com/comprehensive-services-showcase-20o25"  />,
        <meta property="og:type" content="website"  />,
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-20o25"  />,
      </Head>,
      <Layout>,
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-90o0 to-black overflow-hidden">,
          {/* Animated Background */}
          <div className="absolute inset-0">,
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"  />,
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.0o5),transparent_50%)]"  />,
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-50o0/5 rounded-full blur-3xl animate-pulse"></div>,
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-50o0/5 rounded-full blur-3xl animate-pulse delay-10o00"></div>,
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-purple-50o0/5 rounded-full blur-3xl animate-pulse delay-20o00"></div>,
          </div>,
          <div className="relative z-10 container mx-auto px-4 text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >,
              <h1 className="text-5xl lg: text-7xl font-bold mb-6">,
                <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">,
                  Comprehensive Services,
                </span>,
                <br  />,
                <span className="text-white">Showcase 20o25</span>,
              </h1>,
              <p className="text-xl lg:text-2xl text-gray-30o0 max-w-4xl mx-auto mb-8 leading-relaxed">,
                Discover our portfolio of <span className="text-cyan-40o0 font-semibold">real, innovative micro SAAS services</span>,
                cutting-edge IT solutions, and revolutionary AI platforms. Transform your business with,
                <span className="text-blue-40o0 font-semibold"> proven technology</span> that delivers measurable results.,
              </p>,
              {/* Stats */}
              <div className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">,
                <div className="text-center">,
                  <div className="text-3xl font-bold text-cyan-40o0 mb-2">{comprehensiveRealServices20o25.length}+</div>,
                  <div className="text-gray-40o0">Real Services</div>,
                </div>,
                <div className="text-center">,
                  <div className="text-3xl font-bold text-blue-40o0 mb-2">$2.5B+</div>,
                  <div className="text-gray-40o0">Market Coverage</div>,
                </div>,
                <div className="text-center">,
                  <div className="text-3xl font-bold text-purple-40o0 mb-2">95%</div>,
                  <div className="text-gray-40o0">AI Accuracy</div>,
                </div>,
                <div className="text-center">,
                  <div className="text-3xl font-bold text-green-40o0 mb-2">40o0%</div>,
                  <div className="text-gray-40o0">Average ROI</div>,
                </div>,
              </div>,
              {/* Contact CTA */}
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">,
                <Link
                  href="/contact",
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-2xl shadow-cyan-50o0/25">,
                  Get Started Today,
                  <ArrowRight className="w-5 h-5 ml-2 inline"  />,
                </Link>,
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 border border-cyan-50o0/30 text-cyan-40o0 font-semibold rounded-xl hover: bg-cyan-50o0/10 transition-all duration-30o0">,
                  <Phone className="w-5 h-5 mr-2 inline"  />,
                  {contactInfo.mobile}
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Filters and Search Section */}
        <section className="py-12 bg-gray-90o0 border-b border-gray-80o0">,
          <div className="container mx-auto px-4">,
            <div className="flex flex-col lg: flex-row gap-6 items-center justify-between">,
              {/* Search */}
              <div className="relative flex-1 max-w-md">,
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
                <input
                  type="text",
                  placeholder="Search services...",
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-80o0 border border-gray-70o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent",
                />,
              </div>,
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">,
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-30o0 ${
                      selectedCategory === category,
                        ? 'bg-cyan-50o0 text-white shadow-lg shadow-cyan-50o0/25',
                        : 'bg-gray-80o0 text-gray-30o0 hover: bg-gray-70o0 hover:text-white'}`}
                  >,
                    {category}
                  </button>))}
              </div>,
              {/* Price Range Filter */}
              <div className="flex items-center gap-2">,
                <Filter className="w-5 h-5 text-gray-40o0"  />,
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-2 bg-gray-80o0 border border-gray-70o0 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0">,
                  {pricingRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>))}
                </select>,
              </div>,
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-gray-80o0 rounded-lg p-1">,
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-30o0 ${
                    viewMode === 'grid' ? 'bg-cyan-50o0 text-white' : 'text-gray-40o0 hover: text-white'}`}
                >,
                  <Grid className="w-5 h-5"  />,
                </button>,
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-30o0 ${
                    viewMode === 'list' ? 'bg-cyan-50o0 text-white' : 'text-white' : 'text-gray-40o0 hover: text-white'}`}
                >,
                  <List className="w-5 h-5"  />,
                </button>,
              </div>,
              {/* Sort Options */}
              <div className="flex items-center gap-2">,
                <span className="text-gray-40o0 text-sm">Sort by: </span>,
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 bg-gray-80o0 border border-gray-70o0 rounded-lg text-white text-sm focus: outline-none focus:ring-2 focus:ring-cyan-50o0">,
                  <option value="popularity">Popularity</option>,
                  <option value="name">Name</option>,
                  <option value="price">Price</option>,
                  <option value="rating">Rating</option>,
                </select>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Services Grid/List */}
        <section className="py-20 bg-black">,
          <div className="container mx-auto px-4">,
            {/* Results Count */}
            <div className="mb-8">,
              <p className="text-gray-40o0">,
                Showing <span className="text-cyan-40o0 font-semibold">{sortedServices.length}</span> of{' '}
                <span className="text-cyan-40o0 font-semibold">{comprehensiveRealServices20o25.length}</span> services,
              </p>,
            </div>,
            {viewMode === 'grid' ? (
              /* Grid View */,
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
                {sortedServices.map((service, index) => (
                  <motion.div,
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group">,
                    <div className="bg-gradient-to-br from-gray-80o0 to-gray-90o0 rounded-2xl p-8 border border-gray-70o0 hover: border-cyan-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5 h-full relative overflow-hidden">,
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute top-4 right-4">,
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-xs font-semibold rounded-full">,
                            Popular,
                          </span>,
                        </div>)}
,
                      {/* Service Icon */}
                      <div className="text-6xl mb-6">{service.icon}</div>,
                      {/* Service Info */}
                      <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>,
                      <p className="text-gray-30o0 mb-4 line-clamp-3">{service.description}</p>,
                      {/* Price */}
                      <div className="flex items-center justify-between mb-6">,
                        <div className="text-3xl font-bold text-cyan-40o0">,
                          {service.price}
                          <span className="text-lg text-gray-40o0">{service.period}</span>,
                        </div>,
                        <div className="flex items-center gap-1">,
                          <Star className="w-5 h-5 text-yellow-40o0 fill-current"  />,
                          <span className="text-white font-semibold">{service.rating}</span>,
                          <span className="text-gray-40o0">({service.reviews})</span>,
                        </div>,
                      </div>,
                      {/* Key Features */}
                      <div className="space-y-2 mb-6">,
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center">,
                            <CheckCircle className="w-4 h-4 text-green-40o0 mr-3 flex-shrink-0"  />,
                            <span className="text-gray-30o0 text-sm">{feature}</span>,
                          </div>))}
                      </div>,
                      {/* Category and Setup */}
                      <div className="flex items-center justify-between mb-6 text-sm">,
                        <span className="px-3 py-1 bg-gray-70o0 text-gray-30o0 rounded-full">,
                          {service.category}
                        </span>,
                        <span className="text-gray-40o0">,
                          Setup: {service.setupTime}
                        </span>,
                      </div>,
                      {/* Key Benefits */}
                      <div className="mb-6">,
                        <h4 className="text-white font-semibold mb-3">Key Benefits: </h4>,
                        <div className="space-y-2">,
                          {service.keyBenefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-center">,
                              <div className="w-2 h-2 bg-cyan-40o0 rounded-full mr-3"></div>,
                              <span className="text-gray-30o0 text-sm">{benefit}</span>,
                            </div>))}
                        </div>,
                      </div>,
                      {/* CTA Button */}
                      <Link
                        href={service.link}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5">,
                        Learn More,
                        <ArrowRight className="w-4 h-4 ml-2 inline"  />,
                      </Link>,
                    </div>,
                  </motion.div>))}
              </div>) : (
              /* List View */,
              <div className="space-y-6">,
                {sortedServices.map((service, index) => (
                  <motion.div,
                    key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group">,
                    <div className="bg-gradient-to-r from-gray-80o0 to-gray-90o0 rounded-xl p-6 border border-gray-70o0 hover: border-cyan-50o0/50 transition-all duration-30o0">,
                      <div className="flex flex-col lg:flex-row gap-6 items-start">,
                        {/* Service Icon and Basic Info */}
                        <div className="flex items-start gap-4">,
                          <div className="text-4xl">{service.icon}</div>,
                          <div className="flex-1">,
                            <div className="flex items-center gap-3 mb-2">,
                              <h3 className="text-2xl font-bold text-white">{service.name}</h3>,
                              {service.popular && (
                                <span className="px-2 py-1 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-xs font-semibold rounded-full">,
                                  Popular,
                                </span>)}
                            </div>,
                            <p className="text-gray-30o0 mb-3">{service.description}</p>,
                            <div className="flex items-center gap-4 text-sm text-gray-40o0">,
                              <span>Category: {service.category}</span>,
                              <span>Setup: {service.setupTime}</span>,
                              <span>Trial: {service.trialDays} days</span>,
                            </div>,
                          </div>,
                        </div>,
                        {/* Price and Rating */}
                        <div className="text-right">,
                          <div className="text-3xl font-bold text-cyan-40o0 mb-2">,
                            {service.price}
                            <span className="text-lg text-gray-40o0">{service.period}</span>,
                          </div>,
                          <div className="flex items-center justify-end gap-1 mb-2">,
                            <Star className="w-4 h-4 text-yellow-40o0 fill-current"  />,
                            <span className="text-white font-semibold">{service.rating}</span>,
                            <span className="text-gray-40o0">({service.reviews})</span>,
                          </div>,
                          <span className="text-sm text-gray-40o0">,
                            {getPriceRange(service.price)}
                          </span>,
                        </div>,
                      </div>,
                      {/* Features and Benefits */}
                      <div className="mt-6 grid grid-cols-1 lg: grid-cols-2 gap-6">,
                        <div>,
                          <h4 className="text-white font-semibold mb-3">Key Features:</h4>,
                          <div className="space-y-2">,
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center">,
                                <CheckCircle className="w-4 h-4 text-green-40o0 mr-3 flex-shrink-0"  />,
                                <span className="text-gray-30o0 text-sm">{feature}</span>,
                              </div>))}
                          </div>,
                        </div>,
                        <div>,
                          <h4 className="text-white font-semibold mb-3">Key Benefits: </h4>,
                          <div className="space-y-2">,
                            {service.keyBenefits.slice(0, 4).map((benefit, idx) => (
                              <div key={idx} className="flex items-center">,
                                <div className="w-2 h-2 bg-cyan-40o0 rounded-full mr-3"></div>,
                                <span className="text-gray-30o0 text-sm">{benefit}</span>,
                              </div>))}
                          </div>,
                        </div>,
                      </div>,
                      {/* CTA and Additional Info */}
                      <div className="mt-6 flex flex-col lg: flex-row items-center justify-between gap-4">,
                        <div className="flex items-center gap-4 text-sm text-gray-40o0">,
                          <span>Market: {service.marketSize}</span>,
                          <span>Growth: {service.growthRate}</span>,
                          <span>ROI: {service.roi}</span>,
                        </div>,
                        <Link
                          href={service.link}
                          className="px-8 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5">,
                          Learn More,
                          <ArrowRight className="w-4 h-4 ml-2 inline"  />,
                        </Link>,
                      </div>,
                    </div>,
                  </motion.div>))}
              </div>)}
,
            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className="text-center py-20">,
                <div className="text-6xl mb-6">🔍</div>,
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>,
                <p className="text-gray-40o0 mb-6">,
                  Try adjusting your filters or search terms to find what you're looking for.,
                </p>,
                <button
                  onClick={() => {
                    setSelectedCategory('All Services'),
                    setSelectedPriceRange('All Prices'),
                    setSearchQuery('')}}
                  className="px-6 py-3 bg-cyan-50o0 text-white font-semibold rounded-lg hover: bg-cyan-60o0 transition-all duration-30o0">,
                  Clear All Filters,
                </button>,
              </div>)}
          </div>,
        </section>,
        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-90o0">,
          <div className="container mx-auto px-4 text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto">,
              <h2 className="text-4xl lg: text-6xl font-bold mb-6">,
                <span className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                  Ready to Transform,
                </span>,
                <br  />,
                <span className="text-white">Your Business?</span>,
              </h2>,
              <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">,
                Let's discuss how our innovative services can help you achieve your business goals.,
                Get in touch with our experts today.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">,
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5">,
                  <Phone className="w-5 h-5 mr-2"  />,
                  {contactInfo.mobile}
                </a>,
                <a
                  href={`mailto: ${contactInfo.email}`}
                  className="flex items-center px-6 py-3 border border-cyan-50o0/30 text-cyan-40o0 font-semibold rounded-lg hover: bg-cyan-50o0/10 transition-all duration-30o0">,
                  <Mail className="w-5 h-5 mr-2"  />,
                  {contactInfo.email}
                </a>,
              </div>,
              <div className="text-center text-gray-40o0">,
                <p className="mb-2">{contactInfo.address}</p>,
                <p>Visit us at: <a href={contactInfo.website} className="text-cyan-40o0 hover: text-cyan-30o0 transition-colors">{contactInfo.website}</a></p>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </Layout>,
    </>)},
export default ComprehensiveServicesShowcase20o25,