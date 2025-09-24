import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  Search, Filter, Star, Users, TrendingUp,
  Brain, Atom, Shield, Rocket, Globe,
  CheckCircle, ArrowRight, Phone, Mail, MapPin,
  Zap, Cpu, Database, Lock, Cloud,
  BarChart3, Settings, Eye, Award, Clock,
  ChevronDown, ChevronUp, Filter as FilterIcon} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { innovativeNewServices } from '../data/20o25-innovative-new-services',
import { emergingTechBreakthroughs } from '../data/20o25-emerging-tech-breakthroughs',
import { specializedEnterpriseServices } from '../data/20o25-specialized-enterprise-services',
const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'},
const allServices = [
  ...innovativeNewServices,
  ...emergingTechBreakthroughs,
  ...specializedEnterpriseServices],
const categories = [
  'All ServicesAI & Analytics',
  'Quantum ComputingCybersecurity',
  'DevOps & AutomationEdge Computing',
  'Blockchain & Web3Content & Marketing',
  'Healthcare AIFinancial AI',
  'Industrial AIRetail AI',
  'Energy AITransportation AI',
  'Education AIReal Estate AI',
  'Neuromorphic ComputingBio-Computing',
  'Space ComputingHolographic Computing',
  'Neural InterfacesFusion Energy'],
const priceRanges = [
  'All PricesUnder $50o0',
  '$50o0 - $1,0o00$1,0o00 - $2,0o00',
  '$2,0o00+'],
export default function InnovativeServicesShowcase20o25() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('All Services'),
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices'),
  const [sortBy, setSortBy] = useState('popularity'),
  const [showFilters, setShowFilters] = useState(false),
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory,
    let matchesPrice = true,
    if (selectedPriceRange === 'Under $50o0') {
      matchesPrice = parseInt(service.price.replace('$', '').replace(, '')) < 50o0} else if (selectedPriceRange === '$50o0 - $1,0o00') {
      const price = parseInt(service.price.replace('$', '').replace(, '')),
      matchesPrice = price >= 50o0 && price < 10o00} else if (selectedPriceRange === '$1,0o00 - $2,0o00') {
      const price = parseInt(service.price.replace('$', '').replace(, '')),
      matchesPrice = price >= 10o00 && price < 20o00} else if (selectedPriceRange === '$2,0o00+') {
      matchesPrice = parseInt(service.price.replace('$', '').replace(, '')) >= 20o00}
,
    return matchesSearch && matchesCategory && matchesPrice}),
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':,
        return b.rating - a.rating,
      case 'price-low':,
        return parseInt(a.price.replace('$', '').replace(, '')) - parseInt(b.price.replace('$', '').replace(, '')),
      case 'price-high':,
        return parseInt(b.price.replace('$', '').replace(, '')) - parseInt(a.price.replace('$', '').replace(, '')),
      case 'newest':,
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
      default: ,
        return 0}
  }),
  const containerVariants ={
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1}
    }
  },
  const itemVariants ={
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5}
    }
  },
  return (
    <Layout>,
      <Head>,
        <title>20o25 Innovative Services Showcase - Zion Tech Group</title>,
        <meta name="description" content="Discover our comprehensive portfolio of innovative AI, quantum computing, and emerging technology services. Transform your business with cutting-edge solutions."  />,
        <meta name="keywords" content="AI services, quantum computing, emerging technology, enterprise solutions, micro SAAS, Zion Tech Group"  />,
        <link rel="canonical" href="https: //ziontechgroup.com/20o25-innovative-services-showcase"  />,
      </Head>,
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-br from-purple-90o0/20 via-blue-90o0/20 to-cyan-90o0/20"  />,
        <div className="relative z-10 max-w-7xl mx-auto text-center">,
          <motion.h1,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md: text-7xl font-bold bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent mb-6">,
            20o25 Innovative Services,
          </motion.h1>,
          <motion.p,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">,
            Discover our comprehensive portfolio of cutting-edge AI, quantum computing, and emerging technology services.,
            Transform your business with innovative solutions that drive growth and competitive advantage.,
          </motion.p>,
          {/* Stats */}
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">,
            <div className="text-center">,
              <div className="text-3xl md:text-4xl font-bold text-cyan-40o0 mb-2">{allServices.length}+</div>,
              <div className="text-gray-40o0">Services</div>,
            </div>,
            <div className="text-center">,
              <div className="text-3xl md: text-4xl font-bold text-blue-40o0 mb-2">25+</div>,
              <div className="text-gray-40o0">Categories</div>,
            </div>,
            <div className="text-center">,
              <div className="text-3xl md:text-4xl font-bold text-purple-40o0 mb-2">99.9%</div>,
              <div className="text-gray-40o0">Uptime</div>,
            </div>,
            <div className="text-center">,
              <div className="text-3xl md:text-4xl font-bold text-green-40o0 mb-2">24/7</div>,
              <div className="text-gray-40o0">Support</div>,
            </div>,
          </motion.div>,
          {/* Contact Info */}
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-gray-70o0">,
            <div className="flex flex-col md: flex-row items-center justify-center gap-6 text-gray-30o0">,
              <div className="flex items-center gap-2">,
                <Phone className="w-5 h-5 text-cyan-40o0"  />,
                <span>{contactInfo.mobile}</span>,
              </div>,
              <div className="flex items-center gap-2">,
                <Mail className="w-5 h-5 text-blue-40o0"  />,
                <span>{contactInfo.email}</span>,
              </div>,
              <div className="flex items-center gap-2">,
                <MapPin className="w-5 h-5 text-purple-40o0"  />,
                <span>{contactInfo.address}</span>,
              </div>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Search and Filters */}
      <section className="py-8 px-4 bg-black/20">,
        <div className="max-w-7xl mx-auto">,
          <div className="flex flex-col lg: flex-row gap-6 items-center justify-between">,
            {/* Search */}
            <div className="relative flex-1 max-w-md">,
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
              <input
                type="text",
                placeholder="Search services...",
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/30 border border-gray-70o0 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent",
              />,
            </div>,
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-black/30 border border-gray-70o0 rounded-xl text-white hover: bg-black/50 transition-colors">,
              <FilterIcon className="w-5 h-5"  />,
              Filters,
              {showFilters ? <ChevronUp className="w-4 h-4"  /> : <ChevronDown className="w-4 h-4"  />}
            </button>,
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-black/30 border border-gray-70o0 rounded-xl text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0">,
              <option value="popularity">Sort by Popularity</option>,
              <option value="price-low">Price: Low to High</option>,
              <option value="price-high">Price: High to Low</option>,
              <option value="newest">Newest First</option>,
            </select>,
          </div>,
          {/* Filters */}
          {showFilters && (
            <motion.div,
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">,
              {/* Category Filter */}
              <div>,
                <label className="block text-sm font-medium text-gray-30o0 mb-2">Category</label>,
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-black/30 border border-gray-70o0 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0">,
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>))}
                </select>,
              </div>,
              {/* Price Range Filter */}
              <div>,
                <label className="block text-sm font-medium text-gray-30o0 mb-2">Price Range</label>,
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-black/30 border border-gray-70o0 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0">,
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>))}
                </select>,
              </div>,
            </motion.div>)}
        </div>,
      </section>,
      {/* Services Grid */}
      <section className="py-16 px-4">,
        <div className="max-w-7xl mx-auto">,
          <motion.div,
            variants={containerVariants}
            initial="hidden",
            animate="visible",
            className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {sortedServices.map((service) => (
              <motion.div,
                key={service.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-gray-90o0/50 to-black/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-70o0 hover: border-cyan-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5">,
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-black text-xs font-bold px-3 py-1 rounded-full">,
                    Popular,
                  </div>)}
,
                {/* Service Icon and Header */}
                <div className="flex items-start justify-between mb-4">,
                  <div className="text-4xl">{service.icon}</div>,
                  <div className="text-right">,
                    <div className="text-2xl font-bold text-white">{service.price}</div>,
                    <div className="text-sm text-gray-40o0">{service.period}</div>,
                  </div>,
                </div>,
                {/* Service Name and Tagline */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover: text-cyan-40o0 transition-colors">,
                  {service.name}
                </h3>,
                <p className="text-gray-30o0 text-sm mb-4 line-clamp-2">,
                  {service.tagline}
                </p>,
                {/* Features */}
                <div className="mb-6">,
                  <h4 className="text-sm font-semibold text-gray-40o0 mb-3">Key Features</h4>,
                  <div className="space-y-2">,
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-30o0">,
                        <CheckCircle className="w-4 h-4 text-green-40o0 flex-shrink-0"  />,
                        <span className="line-clamp-1">{feature}</span>,
                      </div>))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-50o0">,
                        +{service.features.length - 3} more features,
                      </div>)}
                  </div>,
                </div>}})))