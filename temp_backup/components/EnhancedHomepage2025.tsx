import React, { useState, useEffect } from 'react',
import Layout from './layout/Layout',
import { motion, AnimatePresence } from 'framer-motion',
import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket,
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List, Atom, Eye, Target, Sparkles} from 'lucide-react',
import Link from 'next/link',
// Import our new innovative services,
import { innovative20o25AdvancedServices } from '../data/innovative-20o25-advanced-services',
import { innovative20o40FuturisticServices } from '../data/innovative-20o40-futuristic-services',
// Loading fallback component,
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-90o0 via-purple-90o0 to-gray-90o0">,
    <motion.div,
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center">,
      <div className="relative">,
        <Loader2 className="w-16 h-16 text-cyan-40o0 animate-spin mx-auto mb-4"  />,
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-full blur-xl opacity-20 animate-pulse"></div>,
      </div>,
      <p className="text-xl text-gray-30o0 mb-2">Loading Zion Tech Group 20o25...</p>,
      <p className="text-sm text-gray-50o0">Preparing your futuristic digital transformation journey</p>,
    </motion.div>,
  </div>),
const EnhancedHomepage20o25: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true),
  const [isVisible, setIsVisible] = useState(false),
  const [activeSection, setActiveSection] = useState('hero'),
  const [searchQuery, setSearchQuery] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('All'),
  useEffect(() => {
    // Simulate content loading with better timing,
    const timer = setTimeout(() => {
      setIsLoading(false),
      setIsVisible(true)}, 80o0),
    return () => clearTimeout(timer)}, []),
  // Intersection Observer for better performance,
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)}
          })},
        { threshold: 0.3, rootMargin: '-10o0px' }
      ),
      const sections = document.querySelectorAll('section[id]'),
      sections.forEach((section) => observer.observe(section)),
      return () => observer.disconnect()}
  }, []),
  const fadeInUp ={
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  const staggerContainer ={
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2}
    }
  },
  const backgroundVariants ={
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: "easeOut" }
  },
  const getColorClasses = (index: number) => {
    const colors = [
      'from-cyan-40o0 to-blue-50o0from-purple-40o0 to-pink-50o0',
      'from-emerald-40o0 to-teal-50o0from-orange-40o0 to-red-50o0',
      'from-indigo-40o0 to-purple-50o0from-yellow-40o0 to-orange-50o0'],
    return colors[index % colors.length]},
  // Filter services based on search and category,
  const filteredServices = innovative20o25AdvancedServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||,
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||,
                         service.category.toLowerCase().includes(searchQuery.toLowerCase()),
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory,
    return matchesSearch && matchesCategory}),
  // Get unique categories,
  const categories = ['All', ...Array.from(new Set(innovative20o25AdvancedServices.map(service => service.category)))],
  if (isLoading) {
    return <LoadingFallback  />}
,
  return (
    <Layout>,
      <div className="min-h-screen bg-gradient-to-br from-gray-90o0 via-purple-90o0 to-gray-90o0">,
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">,
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 rounded-full blur-3xl animate-pulse"></div>,
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-full blur-3xl animate-pulse delay-10o00"></div>,
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-50o0/20 to-teal-50o0/20 rounded-full blur-3xl animate-pulse delay-20o00"></div>,
        </div>,
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">,
          <div className="max-w-7xl mx-auto text-center relative z-10">,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8">,
              <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">,
                Welcome to the{' '}
                <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">,
                  Future of Technology,
                </span>,
              </h1>,
              <p className="text-xl md: text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">,
                Zion Tech Group delivers cutting-edge AI, Quantum Computing, and Space Technology solutions,
                that transform businesses and drive innovation into the next decade.,
              </p>,
            </motion.div>,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-12">,
              <Link
                href="/services",
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-semibold rounded-2xl hover:from-cyan-50o0 hover:to-blue-60o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25">,
                Explore Our Services,
                <ArrowRight className="w-5 h-5 ml-2"  />,
              </Link>,
              <Link
                href="/contact",
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-2xl hover:bg-cyan-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5">,
                Get Started Today,
              </Link>,
            </motion.div>,
            {/* Contact Information */}
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md: grid-cols-3 gap-6 max-w-4xl mx-auto">,
              <div className="flex items-center justify-center space-x-3 text-gray-30o0">,
                <Phone className="w-5 h-5 text-cyan-40o0"  />,
                <span>+1 30o2 464 0950</span>,
              </div>,
              <div className="flex items-center justify-center space-x-3 text-gray-30o0">,
                <Mail className="w-5 h-5 text-cyan-40o0"  />,
                <span>kleber@ziontechgroup.com</span>,
              </div>,
              <div className="flex items-center justify-center space-x-3 text-gray-30o0">,
                <MapPin className="w-5 h-5 text-cyan-40o0"  />,
                <span>Middletown DE 19709</span>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Search and Filter Section */}
        <section className="py-16 px-4 bg-gray-90o0/50 backdrop-blur-sm">,
          <div className="max-w-6xl mx-auto">,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12">,
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                Discover Our{' '}
                <span className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                  Innovative Services,
                </span>,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                Explore our comprehensive portfolio of cutting-edge solutions designed to drive your business into the future,
              </p>,
            </motion.div>,
            {/* Search and Category Filter */}
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md: flex-row gap-6 mb-12">,
              <div className="flex-1 relative">,
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
                <input
                  type="text",
                  placeholder="Search services...",
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-80o0/50 border border-gray-70o0 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-40o0 focus:border-transparent backdrop-blur-sm",
                />,
              </div>,
              <div className="flex flex-wrap gap-2">,
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-30o0 ${
                      selectedCategory === category,
                        ? 'bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white shadow-lg shadow-cyan-50o0/25',
                        : 'bg-gray-80o0/50 text-gray-30o0 hover: bg-gray-70o0/50 border border-gray-70o0'}`}
                  >,
                    {category}
                  </button>))}
              </div>,
            </motion.div>,
            {/* Services Grid */}
            <motion.div,
              variants={staggerContainer}
              initial="initial",
              whileInView="animate",
              viewport={{ once: true }}
              className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {filteredServices.map((service, index) => (
                <motion.div,
                  key={service.id}
                  variants={fadeInUp}
                  className="group relative">,
                  <div className={`absolute inset-0 bg-gradient-to-r ${getColorClasses(index)} rounded-2xl blur-xl group-hover: blur-2xl transition-all duration-50o0 opacity-20`}></div>,
                  <div className="relative bg-gray-80o0/50 backdrop-blur-sm border border-gray-70o0/50 rounded-2xl p-8 hover: border-cyan-40o0/50 transition-all duration-30o0 h-full group-hover:shadow-2xl group-hover:shadow-cyan-50o0/25">,
                    <div className="flex items-start justify-between mb-6">,
                      <div className="text-4xl">{service.category.includes('AI') ? '🤖' : service.category.includes('Quantum') ? '⚛️' : service.category.includes('Space') ? '🚀' : '💡'}</div>,
                      <div className="flex items-center space-x-1">,
                        <Star className="w-4 h-4 text-yellow-40o0 fill-current"  />,
                        <span className="text-sm text-gray-30o0">{service.rating}</span>,
                        <span className="text-xs text-gray-50o0">({service.reviews})</span>,
                      </div>,
                    </div>,
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>,
                    <p className="text-gray-30o0 mb-4 text-sm leading-relaxed">{service.description}</p>,
                    <div className="space-y-3 mb-6">,
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">,
                          <div className="w-2 h-2 bg-cyan-40o0 rounded-full"></div>,
                          <span className="text-gray-30o0 text-sm">{feature}</span>,
                        </div>))}
                    </div>,
                    <div className="mb-6">,
                      <span className="text-2xl font-bold text-cyan-40o0">,
                        {service.price}
                      </span>,
                    </div>,
                    {/* CTA Button */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-semibold rounded-xl hover: from-cyan-50o0 hover:to-blue-60o0 transition-all duration-30o0 focus:outline-none focus:ring-4 focus:ring-cyan-40o0/50 group-hover:shadow-lg group-hover:shadow-cyan-40o0/25">,
                      Learn More,
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-30o0"  />,
                    </Link>,
                  </div>,
                </motion.div>))}
            </motion.div>,
            {/* View All Services Button */}
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12">,
              <Link
                href="/services",
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-2xl hover: bg-cyan-40o0 hover:text-black transition-all duration-30o0 focus:outline-none focus:ring-4 focus:ring-cyan-40o0/50 text-lg">,
                View All Services,
                <ArrowRight className="w-6 h-6 ml-3"  />,
              </Link>,
            </motion.div>,
          </div>,
        </section>,
        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-20 px-4 bg-gray-90o0/30 backdrop-blur-sm">,
          <div className="max-w-7xl mx-auto">,
            <motion.div,
              variants={fadeInUp}
              initial="initial",
              whileInView="animate",
              viewport={{ once: true }}
              className="text-center mb-16">,
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                Why Choose <span className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">Zion Tech Group</span>,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                We combine cutting-edge technology with proven expertise to deliver solutions that drive real business transformation,
              </p>,
            </motion.div>,
            {/* Features Grid */}
            <motion.div,
              variants={staggerContainer}
              initial="initial",
              whileInView="animate",
              viewport={{ once: true }}
              className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {[
                {
                  icon: Brain,
                  title: "AI-First Approach",
                  description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation"},
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-grade security protocols and compliance standards protect your business and data"},
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized performance and rapid deployment ensure your solutions are always ahead of the curve"},
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Our specialists bring decades of combined experience in cutting-edge technology implementation"},
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "24/7 support and worldwide deployment capabilities to serve your business anywhere"},
                {
                  icon: Heart,
                  title: "Customer Success",
                  description: "We're committed to your success with ongoing support, training, and optimization"}
              ].map((feature, index) => (
                <motion.div,
                  key={index}
                  variants={fadeInUp}
                  className="group relative">,
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-40o0/10 to-blue-50o0/10 rounded-2xl blur-xl group-hover: blur-2xl transition-all duration-50o0 opacity-0 group-hover:opacity-10o0"></div>,
                  <div className="relative bg-gray-80o0/30 backdrop-blur-sm border border-gray-70o0/50 rounded-2xl p-8 hover:border-cyan-40o0/50 transition-all duration-30o0 h-full group-hover:shadow-2xl group-hover:shadow-cyan-50o0/25">,
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0">,
                      <feature.icon className="w-8 h-8 text-white"  />,
                    </div>,
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>,
                    <p className="text-gray-30o0 leading-relaxed">{feature.description}</p>,
                  </div>,
                </motion.div>))}
            </motion.div>,
          </div>,
        </section>,
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-90o0/20 to-blue-90o0/20 backdrop-blur-sm">,
          <div className="max-w-4xl mx-auto text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >,
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                Ready to Transform Your Business?,
              </h2>,
              <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">,
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">,
                <Link
                  href="/contact",
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-semibold rounded-2xl hover:from-cyan-50o0 hover:to-blue-60o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25">,
                  Get Started Today,
                  <ArrowRight className="w-5 h-5 ml-2"  />,
                </Link>,
                <Link
                  href="/demo",
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-2xl hover:bg-cyan-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5">,
                  Request Demo,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </Layout>)},
export default EnhancedHomepage20o25,