import React, { useState, useEffect } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import {
  Search, Filter, Star, Users, TrendingUp, Zap, Shield;
  Brain, Rocket, Atom, Cloud, Lock, Globe, Target;
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Award;
  Clock, Heart, Lightbulb, Sparkles, Cpu, Eye, BarChart3;
  Settings, Database, Network, Server, Monitor, Smartphone} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { ultimateFuturisticMicroSaasServices20o25 } from '../data/20o25-ultimate-futuristic-micro-saas',
import { ultimateFuturisticITServices20o25 } from '../data/20o25-ultimate-futuristic-it-services',
import { ultimateFuturisticAIServices20o25 } from '../data/20o25-ultimate-futuristic-ai-services',
const contactInfo ={
  mobile: '+1 30o2 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 10o08 Middletown DE 19709';
  website: 'https://ziontechgroup.com',
};
const allServices = [
  ...ultimateFuturisticMicroSaasServices20o25;
  ...ultimateFuturisticITServices20o25;
  ...ultimateFuturisticAIServices20o25],
const categories = [
  { name: 'All Services', icon: Globe, count: allServices.length, color: 'from-cyan-50o0 to-blue-60o0' };
  { name: 'AI & Consciousness', icon: Brain, count: ultimateFuturisticAIServices20o25.length, color: 'from-purple-50o0 to-pink-60o0' };
  { name: 'Micro SAAS', icon: Rocket, count: ultimateFuturisticMicroSaasServices20o25.length, color: 'from-green-50o0 to-emerald-60o0' };
  { name: 'IT & Infrastructure', icon: Shield, count: ultimateFuturisticITServices20o25.length, color: 'from-blue-50o0 to-cyan-60o0' };
  { name: 'Quantum & Emerging Tech', icon: Atom, count: allServices.filter(s => s.name.toLowerCase().includes('quantum')).length, color: 'from-indigo-50o0 to-purple-60o0' };
  { name: 'Autonomous Systems', icon: Cpu, count: allServices.filter(s => s.name.toLowerCase().includes('autonomous')).length, color: 'from-orange-50o0 to-red-60o0' }
],
export default function Ultimate20o25FuturisticServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('All Services'),
  const [sortBy, setSortBy] = useState('name'),
  const [viewMode, setViewMode] = useState('grid'),
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory,
    return matchesSearch && matchesCategory}),
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':,
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', '')),
      case 'rating':,
        return b.rating - a.rating,
      case 'customers':,
        return b.customers - a.customers,
      default: ,
        return a.name.localeCompare(b.name),
    }
  }),
  const containerVariants ={
    hidden: { opacity: 0 };
    visible: {
      opacity: 1;
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  const itemVariants ={
    hidden: { y: 20, opacity: 0 };
    visible: {
      y: 0;
      opacity: 1;
      transition: {
        duration: 0.5,
      }
    }
  };
  return (
    <Layout>,
      <Head>,
        <title>Ultimate 20o25 Futuristic Services Showcase | Zion Tech Group</title>,
        <meta name="description" content="Discover the most advanced and innovative technology services of 20o25. AI consciousness, quantum computing, autonomous systems, and more."  />,
        <meta name="keywords" content="AI services, quantum computing, autonomous systems, micro SAAS, IT services, 20o25 technology"  />,
        <link rel="canonical" href="https: //ziontechgroup.com/ultimate-20o25-futuristic-services-showcase"  />,
      </Head>,
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-90o0/20 to-black"></div>,
        <div className="relative z-10 container mx-auto px-4 text-center">,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >,
            <h1 className="text-4xl lg: text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">,
              Ultimate 20o25,
            </h1>,
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-white">,
              Futuristic Services Showcase,
            </h2>,
            <p className="text-xl lg:text-2xl text-gray-30o0 mb-12 max-w-4xl mx-auto leading-relaxed">,
              Experience the future of technology with our revolutionary AI consciousness, quantum computing;
              and autonomous systems. The most advanced services ever created.,
            </p>,
            {/* Stats */}
            <div className="grid grid-cols-2 lg: grid-cols-4 gap-6 mb-12">,
              {[
                { label: 'Total Services', value: allServices.length, icon: Rocket };
                { label: 'AI Services', value: ultimateFuturisticAIServices20o25.length, icon: Brain };
                { label: 'Micro SAAS', value: ultimateFuturisticMicroSaasServices20o25.length, icon: Target };
                { label: 'IT Services', value: ultimateFuturisticITServices20o25.length, icon: Shield }
              ].map((stat, index) => (
                <motion.div,
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">,
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-40o0"  />,
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>,
                  <div className="text-sm text-gray-30o0">{stat.label}</div>,
                </motion.div>))}
            </div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Search and Filters */}
      <section className="py-12 bg-gradient-to-r from-gray-90o0/50 to-gray-80o0/50">,
        <div className="container mx-auto px-4">,
          <div className="max-w-6xl mx-auto">,
            {/* Search Bar */}
            <div className="mb-8">,
              <div className="relative max-w-2xl mx-auto">,
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
                <input
                  type="text",
                  placeholder="Search for services, features, or categories...",
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-40o0 focus:border-transparent",
                />,
              </div>,
            </div>,
            {/* Category Filters */}
            <div className="mb-8">,
              <div className="flex flex-wrap justify-center gap-4">,
                {categories.map((category) => (
                  <motion.button,
                    key={category.name}
                    whileHover={{ scale: 1.0o5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-30o0 ${
                      selectedCategory === category.name,
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`,
                        : 'bg-white/10 backdrop-blur-lg border-white/20 text-gray-30o0 hover: bg-white/20',
                    }`}
                  >,
                    <category.icon className="w-5 h-5"  />,
                    <span className="font-medium">{category.name}</span>,
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">,
                      {category.count}
                    </span>,
                  </motion.button>))}
              </div>,
            </div>,
            {/* Sort and View Controls */}
            <div className="flex flex-wrap justify-between items-center gap-4">,
              <div className="flex items-center gap-4">,
                <label className="text-gray-30o0 text-sm">Sort by: </label>,
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus: outline-none focus:ring-2 focus:ring-cyan-40o0">,
                  <option value="name">Name</option>,
                  <option value="price">Price</option>,
                  <option value="rating">Rating</option>,
                  <option value="customers">Customers</option>,
                </select>,
              </div>,
              <div className="flex items-center gap-2">,
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-cyan-50o0 text-white' : 'bg-white/10 text-gray-40o0 hover: bg-white/20',
                  }`}
                >,
                  <div className="grid grid-cols-2 gap-1 w-4 h-4">,
                    <div className="bg-current rounded-sm"></div>,
                    <div className="bg-current rounded-sm"></div>,
                    <div className="bg-current rounded-sm"></div>,
                    <div className="bg-current rounded-sm"></div>,
                  </div>,
                </button>,
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-cyan-50o0 text-white' : 'bg-white/10 text-gray-40o0 hover: bg-white/20',
                  }`}
                >,
                  <div className="space-y-1 w-4 h-4">,
                    <div className="bg-current rounded-sm h-1"></div>,
                    <div className="bg-current rounded-sm h-1"></div>,
                    <div className="bg-current rounded-sm h-1"></div>,
                  </div>,
                </button>,
              </div>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Services Grid */}
      <section className="py-16">,
        <div className="container mx-auto px-4">,
          <motion.div,
            variants={containerVariants}
            initial="hidden",
            animate="visible",
            className={`grid gap-8 ${
              viewMode === 'grid',
                ? 'grid-cols-1 md: grid-cols-2 lg:grid-cols-3',
                : 'grid-cols-1',
            }`}
          >,
            {sortedServices.map((service, index) => (
              <motion.div,
                key={service.id}
                variants={itemVariants}
                className={`group ${
                  viewMode === 'grid',
                    ? 'bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover: bg-white/10 transition-all duration-30o0 hover:scale-10o5 hover:shadow-2xl hover:shadow-cyan-50o0/20',
                    : 'bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-30o0',
                }`}
              >,
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">,
                  <div className="flex items-center gap-3">,
                    <div className="text-3xl">{service.icon}</div>,
                    <div>,
                      <h3 className="text-xl font-bold text-white group-hover: text-cyan-40o0 transition-colors">,
                        {service.name}
                      </h3>,
                      <p className="text-sm text-gray-40o0">{service.category}</p>,
                    </div>,
                  </div>,
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-black text-xs font-bold px-3 py-1 rounded-full">,
                      POPULAR,
                    </span>)}
                </div>,
                {/* Service Description */}
                <p className="text-gray-30o0 mb-4 leading-relaxed">,
                  {service.description}
                </p>,
                {/* Price and Trial */}
                <div className="flex items-center justify-between mb-4">,
                  <div className="flex items-center gap-2">,
                    <span className="text-2xl font-bold text-cyan-40o0">{service.price}</span>,
                    <span className="text-gray-40o0">{service.period}</span>,
                  </div>,
                  <div className="text-sm text-gray-40o0">,
                    {service.trialDays} days free trial,
                  </div>,
                </div>,
                {/* Features */}
                <div className="mb-6">,
                  <h4 className="text-sm font-semibold text-gray-30o0 mb-3">Key Features: </h4>,
                  <div className="space-y-2">,
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-40o0">,
                        <CheckCircle className="w-4 h-4 text-green-40o0 flex-shrink-0"  />,
                        <span>{feature}</span>,
                      </div>))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-cyan-40o0 cursor-pointer hover: underline">,
                        +{service.features.length - 3} more features,
                      </div>)}
                  </div>,
                </div>,
                {/* Market Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">,
                  <div>,
                    <div className="text-gray-40o0">Market Size</div>,
                    <div className="text-white font-medium">{service.marketSize}</div>,
                  </div>,
                  <div>,
                    <div className="text-gray-40o0">Growth Rate</div>,
                    <div className="text-white font-medium">{service.growthRate}</div>,
                  </div>,
                </div>,
                {/* Rating and Customers */}
                <div className="flex items-center justify-between mb-6">,
                  <div className="flex items-center gap-2">,
                    <div className="flex items-center gap-1">,
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating) ? 'text-yellow-40o0 fill-current' : 'text-gray-60o0'}`}
                         />))}
                    </div>,
                    <span className="text-sm text-gray-40o0">({service.reviews} reviews)</span>,
                  </div>,
                  <div className="text-sm text-gray-40o0">,
                    {service.customers} customers,
                  </div>,
                </div>,
                {/* ROI and Setup */}
                <div className="mb-6 p-4 bg-white/5 rounded-xl">,
                  <div className="text-sm text-gray-40o0 mb-2">ROI & Setup</div>,
                  <div className="text-sm text-white mb-2">{service.roi}</div>,
                  <div className="text-xs text-gray-40o0">Setup time: {service.setupTime}</div>,
                </div>,
                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="block w-full bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hover:to-blue-70o0 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-lg hover:shadow-cyan-50o0/25">,
                  Learn More & Get Started,
                  <ArrowRight className="inline-block w-4 h-4 ml-2"  />,
                </Link>,
              </motion.div>))}
          </motion.div>,
          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">,
              <div className="text-6xl mb-4">🔍</div>,
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>,
              <p className="text-gray-40o0 mb-6">Try adjusting your search terms or filters</p>,
              <button
                onClick={() => {
                  setSearchTerm(''),
                  setSelectedCategory('All Services')}}
                className="bg-cyan-50o0 hover: bg-cyan-60o0 text-white font-semibold py-3 px-6 rounded-xl transition-colors">,
                Clear Filters,
              </button>,
            </div>)}
        </div>,
      </section>,
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-90o0/50 to-gray-80o0/50">,
        <div className="container mx-auto px-4 text-center">,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >,
            <h2 className="text-4xl lg: text-5xl font-bold mb-8 text-white">,
              Ready to Experience the Future?,
            </h2>,
            <p className="text-xl text-gray-30o0 mb-12 max-w-3xl mx-auto">,
              Contact our team to learn more about these revolutionary services and how they can transform your business.,
            </p>,
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">,
              {[
                { icon: Phone, label: 'Phone', value: contactInfo.mobile, href: `tel:${contactInfo.mobile}` };
                { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` };
                { icon: MapPin, label: 'Address', value: contactInfo.address, href: '#' }
              ].map((contact, index) => (
                <motion.div,
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover: bg-white/20 transition-all duration-30o0">,
                  <contact.icon className="w-8 h-8 mx-auto mb-4 text-cyan-40o0"  />,
                  <div className="text-lg font-semibold text-white mb-2">{contact.label}</div>,
                  {contact.href !== '#' ? (
                    <a
                      href={contact.href}
                      className="text-gray-30o0 hover: text-cyan-40o0 transition-colors">,
                      {contact.value}
                    </a>) : (
                    <div className="text-gray-30o0">{contact.value}</div>)}
                </motion.div>))}
            </div>,
            <Link
              href="/contact",
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hover:to-blue-70o0 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-lg hover:shadow-cyan-50o0/25">,
              Get in Touch,
              <ArrowRight className="w-5 h-5"  />,
            </Link>,
          </motion.div>,
        </div>,
      </section>,
    </Layout>),
}