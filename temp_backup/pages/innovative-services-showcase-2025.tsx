import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Search, Filter, Star, CheckCircle, ArrowRight;
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Phone, Mail, MapPin, TrendingUp, Users, Award;
  Zap, Globe, Cpu, Database, Lock, Cloud;
  Stethoscope, GraduationCap, Leaf, Truck} from 'lucide-react';
import Layout from '../components/layout/Layout';
// Import all the new 20o25 innovative service data,
import { innovativeFinancialServices20o25 } from '../data/20o25-innovative-financial-services';
import { innovativeHealthcareServices20o25 } from '../data/20o25-innovative-healthcare-services';
import { innovativeEducationServices20o25 } from '../data/20o25-innovative-education-services';
import { innovativeSustainabilityServices20o25 } from '../data/20o25-innovative-sustainability-services';
import { innovativeLogisticsServices20o25 } from '../data/20o25-innovative-logistics-services';
// Import existing services for comprehensive coverage,
import { realMicroSaasServices20o25 } from '../data/20o25-real-micro-saas-services';
import { innovativeAIServices20o25 } from '../data/20o25-innovative-ai-services';
import { innovativeITServices20o25 } from '../data/20o25-innovative-it-services';
import { emergingTechServices20o25 } from '../data/20o25-emerging-tech-services';
const contactInfo ={
  mobile: '+1 30o2 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 10o08 Middletown DE 19709';
  website: 'https://ziontechgroup.com'};
const serviceCategories = [
  {
    id: 'financial-technology';
    title: '💰 Financial Technology';
    description: 'Innovative fintech, DeFi, and financial services';
    icon: TrendingUp;
    color: 'from-green-50o0 to-emerald-50o0';
    services: [...innovativeFinancialServices20o25];
    gradient: 'from-green-50o0/20 to-emerald-50o0/20';
    badge: 'New'};
  {
    id: 'healthcare-biotech';
    title: '🏥 Healthcare & Biotech';
    description: 'AI-powered healthcare and biotechnology solutions';
    icon: Stethoscope;
    color: 'from-blue-50o0 to-indigo-50o0';
    services: [...innovativeHealthcareServices20o25];
    gradient: 'from-blue-50o0/20 to-indigo-50o0/20';
    badge: 'Hot'};
  {
    id: 'education-technology';
    title: '🎓 Education Technology';
    description: 'AI-powered learning and educational innovation';
    icon: GraduationCap;
    color: 'from-purple-50o0 to-pink-50o0';
    services: [...innovativeEducationServices20o25];
    gradient: 'from-purple-50o0/20 to-pink-50o0/20';
    badge: 'Innovative'};
  {
    id: 'sustainability-green-tech';
    title: '🌱 Sustainability & Green Tech';
    description: 'Environmental technology and sustainability solutions';
    icon: Leaf;
    color: 'from-emerald-50o0 to-teal-50o0';
    services: [...innovativeSustainabilityServices20o25];
    gradient: 'from-emerald-50o0/20 to-teal-50o0/20';
    badge: 'Eco-Friendly'};
  {
    id: 'logistics-supply-chain';
    title: '🚚 Logistics & Supply Chain';
    description: 'Autonomous logistics and supply chain optimization';
    icon: Truck;
    color: 'from-orange-50o0 to-red-50o0';
    services: [...innovativeLogisticsServices20o25];
    gradient: 'from-orange-50o0/20 to-red-50o0/20';
    badge: 'Autonomous'};
  {
    id: 'ai-consciousness';
    title: '🧠 AI & Consciousness';
    description: 'Revolutionary AI consciousness and emotional intelligence platforms';
    icon: Brain;
    color: 'from-violet-50o0 to-purple-50o0';
    services: [...innovativeAIServices20o25];
    gradient: 'from-violet-50o0/20 to-indigo-50o0/20';
    badge: 'Revolutionary'};
  {
    id: 'quantum-emerging';
    title: '⚛️ Quantum & Emerging Tech';
    description: 'Quantum computing, DNA computing, and beyond';
    icon: Atom;
    color: 'from-indigo-50o0 to-blue-50o0';
    services: [...emergingTechServices20o25];
    gradient: 'from-indigo-50o0/20 to-cyan-50o0/20';
    badge: 'Quantum'};
  {
    id: 'enterprise-it';
    title: '🏙️ Enterprise IT';
    description: 'Autonomous operations and zero-trust security';
    icon: Shield;
    color: 'from-blue-50o0 to-cyan-50o0';
    services: [...innovativeITServices20o25];
    gradient: 'from-blue-50o0/20 to-teal-50o0/20';
    badge: 'Enterprise'};
  {
    id: 'micro-saas';
    title: '🎯 Micro SAAS';
    description: 'Innovative solutions for every business need';
    icon: Target;
    color: 'from-teal-50o0 to-green-50o0';
    services: [...realMicroSaasServices20o25];
    gradient: 'from-teal-50o0/20 to-green-50o0/20';
    badge: 'Popular'}
];
export default function InnovativeServicesShowcase20o25() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const filteredServices = serviceCategories.flatMap(category =>,
    category.services.filter(service =>,
      (selectedCategory === 'all' || category.id === selectedCategory) &&,
      (searchTerm === '' ||,
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))));
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':,
        return a.name.localeCompare(b.name);
      case 'price':,
        return a.pricing.starter.price - b.pricing.starter.price;
      case 'category':,
        return a.category.localeCompare(b.category);
      default: return 0}
  });
  return (
    <Layout>,
      <Head>,
        <title>Innovative Services Showcase 20o25 | Zion Tech Group</title>,
        <meta name="description" content="Discover our comprehensive collection of innovative micro SAAS, AI, healthcare, fintech, and emerging technology services for 20o25 and beyond."  />,
        <meta name="keywords" content="innovative services, micro SAAS, AI services, healthcare technology, fintech, Zion Tech Group"  />,
        <meta property="og: title" content="Innovative Services Showcase 20o25 - Zion Tech Group"  />,
        <meta property="og:description" content="Comprehensive collection of innovative technology services."  />,
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase-20o25"  />,
      </Head>,
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-90o0 to-black"></div>,
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">,
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 rounded-full blur-3xl animate-pulse"></div>,
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-full blur-3xl animate-pulse delay-10o00"></div>,
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-50o0/20 to-emerald-50o0/20 rounded-full blur-3xl animate-pulse delay-50o0"></div>,
        </div>,
        <div className="relative z-10 text-center px-4 sm: px-6 lg:px-8 max-w-7xl mx-auto">,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8">,
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10 border border-cyan-50o0/20 text-cyan-40o0 text-sm font-medium mb-6">,
              <Star className="w-4 h-4 mr-2"  />,
              Innovation Showcase 20o25,
            </div>,
            <h1 className="text-4xl md: text-6xl lg:text-7xl font-bold text-white mb-6">,
              <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">,
                Innovative Services,
              </span>,
              <br  />,
              <span className="text-white">Showcase</span>,
            </h1>,
            <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">,
              Discover our comprehensive collection of revolutionary micro SAAS, AI, healthcare, fintech, and emerging technology services that are transforming industries worldwide.,
            </p>,
          </motion.div>,
          {/* Stats */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-4xl mx-auto">,
            <div className="text-center">,
              <div className="text-3xl md:text-4xl font-bold text-cyan-40o0 mb-2">,
                {serviceCategories.reduce((total, category) => total + category.services.length, 0)}+,
              </div>,
              <div className="text-gray-40o0">Services</div>,
            </div>,
            <div className="text-center">,
              <div className="text-3xl md: text-4xl font-bold text-purple-40o0 mb-2">,
                {serviceCategories.length}
              </div>,
              <div className="text-gray-40o0">Categories</div>,
            </div>,
            <div className="text-center">,
              <div className="text-3xl md: text-4xl font-bold text-pink-40o0 mb-2">,
                24/7,
              </div>,
              <div className="text-gray-40o0">Support</div>,
            </div>,
            <div className="text-center">,
              <div className="text-3xl md:text-4xl font-bold text-green-40o0 mb-2">,
                99.9%,
              </div>,
              <div className="text-gray-40o0">Uptime</div>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Search and Filter Section */}
      <section className="py-16 bg-gradient-to-b from-black to-slate-90o0">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50 border border-slate-60o0/30 rounded-2xl p-8">,
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">,
              {/* Search */}
              <div className="relative">,
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
                <input
                  type="text",
                  placeholder="Search services...",
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-80o0/50 border border-slate-60o0/30 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:border-cyan-50o0/50",
                />,
              </div>,
              {/* Category Filter */}
              <div>,
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-80o0/50 border border-slate-60o0/30 rounded-xl text-white focus: outline-none focus:border-cyan-50o0/50">,
                  <option value="all">All Categories</option>,
                  {serviceCategories.map(category => (
                    <option key={category.id} value={category.id}>,
                      {category.title}
                    </option>))}
                </select>,
              </div>,
              {/* Sort By */}
              <div>,
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-80o0/50 border border-slate-60o0/30 rounded-xl text-white focus: outline-none focus:border-cyan-50o0/50">,
                  <option value="name">Sort by Name</option>,
                  <option value="price">Sort by Price</option>,
                  <option value="category">Sort by Category</option>,
                </select>,
              </div>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Services Grid */}
      <section className="py-20 bg-slate-90o0">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {sortedServices.map((service, index) => (
              <motion.div,
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 border border-slate-60o0/30 rounded-2xl p-6 hover: border-cyan-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5">,
                {/* Service Header */}
                <div className="mb-6">,
                  <div className="flex items-center justify-between mb-4">,
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-xl flex items-center justify-center">,
                      <Target className="w-6 h-6 text-white"  />,
                    </div>,
                                      <div className="text-right">,
                    <div className="text-sm text-gray-40o0">{service.category}</div>,
                    <div className="text-2xl font-bold text-white">${service.pricing?.starter?.price || 'Custom'}</div>,
                    <div className="text-sm text-gray-40o0">/month</div>,
                  </div>,
                  </div>,
                  <h3 className="text-xl font-bold text-white mb-2 group-hover: text-cyan-40o0 transition-colors">,
                    {service.name}
                  </h3>,
                  <p className="text-gray-30o0 text-sm leading-relaxed">,
                    {service.description}
                  </p>,
                </div>,
                {/* Features */}
                <div className="mb-6">,
                  <h4 className="text-sm font-semibold text-gray-40o0 mb-3 uppercase tracking-wide">Key Features</h4>,
                  <ul className="space-y-2">,
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-30o0">,
                        <CheckCircle className="w-4 h-4 text-cyan-40o0 mr-2 flex-shrink-0"  />,
                        {feature}
                      </li>))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-cyan-40o0">,
                        +{service.features.length - 3} more features,
                      </li>)}
                  </ul>,
                </div>,
                {/* Market Info */}
                <div className="mb-6 grid grid-cols-2 gap-4 text-sm">,
                  <div>,
                    <div className="text-gray-40o0">Market Size</div>,
                    <div className="text-white font-semibold">{service.marketSize}</div>,
                  </div>,
                  <div>,
                    <div className="text-gray-40o0">Target Audience</div>,
                    <div className="text-white font-semibold truncate">{service.targetAudience}</div>,
                  </div>,
                </div>,
                {/* CTA */}
                <div className="flex gap-3">,
                  <a
                    href={service.website}
                    className="flex-1 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-semibold py-3 px-4 rounded-xl text-center hover: from-cyan-60o0 hover:to-blue-60o0 transition-all duration-30o0">,
                    Learn More,
                  </a>,
                  <a
                    href={`mailto:${service.contact.email}`}
                    className="px-4 py-3 border border-cyan-50o0/30 text-cyan-40o0 rounded-xl hover: bg-cyan-50o0/10 transition-all duration-30o0">,
                    <Mail className="w-5 h-5"  />,
                  </a>,
                </div>,
              </motion.div>))}
          </div>,
          {sortedServices.length === 0 && (
            <motion.div,
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20">,
              <div className="text-gray-40o0 text-xl mb-4">No services found</div>,
              <div className="text-gray-50o0">Try adjusting your search or filter criteria</div>,
            </motion.div>)}
        </div>,
      </section>,
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-slate-90o0 to-black">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">,
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">,
              Ready to Transform Your Business?,
            </h2>,
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center">,
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                <Phone className="w-8 h-8 text-white"  />,
              </div>,
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>,
              <p className="text-gray-30o0">{contactInfo.mobile}</p>,
            </motion.div>,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center">,
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                <Mail className="w-8 h-8 text-white"  />,
              </div>,
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>,
              <p className="text-gray-30o0">{contactInfo.email}</p>,
            </motion.div>,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center">,
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                <MapPin className="w-8 h-8 text-white"  />,
              </div>,
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>,
              <p className="text-gray-30o0">{contactInfo.address}</p>,
            </motion.div>,
          </div>,
        </div>,
      </section>,
    </Layout>)}
,