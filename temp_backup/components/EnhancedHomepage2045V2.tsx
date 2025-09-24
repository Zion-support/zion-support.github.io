import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import Link from 'next/link',
import {
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon;
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity;
  Users, Building, Cloud, Code, Palette, Lightbulb, Award, Clock, CheckCircle, ArrowUpRight;
  DollarSign, Package, Search, Heart as HeartIcon, Code as CodeIcon, Phone, Mail, MapPin} from 'lucide-react',
import Head from 'next/head',
// Import our new revolutionary services,
import { innovativeMicroSaasServices20o25V2 } from '../data/20o25-innovative-micro-saas-expansion-v2',
import { innovativeITServices20o25V2 } from '../data/20o25-innovative-it-services-expansion-v2',
import { innovativeAIServices20o25V2 } from '../data/20o25-innovative-ai-services-expansion-v2',
// Lazy load components for better performance,
const ServiceCard = lazy(() => import('./ServiceCard')),
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics')),
const InteractiveDemo = lazy(() => import('./InteractiveDemo')),
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer')),
const EnhancedHomepage20o45V2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const [isClient, setIsClient] = useState(false),
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),
  const [isLoading, setIsLoading] = useState(false),
  const [userInteraction, setUserInteraction] = useState(false),
  const [hoveredService, setHoveredService] = useState<string | null>(null),
  useEffect(() => {
    setIsVisible(true),
    setIsClient(true),
    // Auto-rotate featured services,
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6)}, 60o00),
    // Track mouse movement for parallax effects,
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })};
    window.addEventListener('mousemove', handleMouseMove),
    return () => {
      clearInterval(interval),
      window.removeEventListener('mousemove', handleMouseMove)};
  }, []),
  // Combine all innovative services,
  const allInnovativeServices = [
    ...innovativeMicroSaasServices20o25V2;
    ...innovativeITServices20o25V2;
    ...innovativeAIServices20o25V2],
  // Filter services by category,
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allInnovativeServices,
    return allInnovativeServices.filter(service =>,
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||,
      (service as any).type?.toLowerCase().includes(selectedCategory.toLowerCase()))};
  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-50o0 to-pink-50o0', count: allInnovativeServices.length };
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-50o0 to-blue-50o0', count: innovativeAIServices20o25V2.length };
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-blue-50o0 to-indigo-50o0', count: innovativeITServices20o25V2.length };
    { id: 'saas', name: 'Micro SAAS', icon: Building, color: 'from-emerald-50o0 to-teal-50o0', count: innovativeMicroSaasServices20o25V2.length };
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-indigo-50o0 to-purple-50o0', count: allInnovativeServices.filter(s => s.category.includes('Quantum')).length };
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-50o0 to-orange-50o0', count: allInnovativeServices.filter(s => s.category.includes('Security')).length }
  ],
  const features = [
    { icon: Brain, title: "AI Content Creation Suite", description: "Create engaging content 10x faster with AI-powered tools", href: "/ai-content-creation-suite", color: "from-purple-50o0 to-pink-50o0" };
    { icon: Users, title: "Intelligent Customer Success Platform", description: "Predict and prevent churn with AI-powered insights", href: "/intelligent-customer-success-platform", color: "from-blue-50o0 to-cyan-50o0" };
    { icon: DollarSign, title: "Automated Financial Planning", description: "AI-powered financial planning for individuals and businesses", href: "/automated-financial-planning-assistant", color: "from-emerald-50o0 to-teal-50o0" };
    { icon: Shield, title: "Quantum-Safe Cybersecurity", description: "Future-proof security against quantum computing threats", href: "/quantum-safe-cybersecurity-platform", color: "from-red-50o0 to-orange-50o0" };
    { icon: Code, title: "Autonomous DevOps Intelligence", description: "AI-powered DevOps automation and optimization", href: "/autonomous-devops-intelligence-platform", color: "from-blue-50o0 to-indigo-50o0" };
    { icon: Atom, title: "Quantum AI Hybrid Computing", description: "Combine quantum computing with AI for breakthrough solutions", href: "/quantum-ai-hybrid-computing-platform", color: "from-indigo-50o0 to-purple-50o0" }
  ],
  const stats = [
    { number: "50o00+", label: "Innovative Services", icon: Star };
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp };
    { number: "24/7", label: "AI Support Available", icon: Brain };
    { number: "30o0+", label: "Countries Served", icon: Globe }
  ],
  const fadeInUp ={
    initial: { opacity: 0, y: 30 };
    animate: { opacity: 1, y: 0 };
    transition: { duration: 0.6 }
  };
  const staggerContainer ={
    initial: {};
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  return (
    <>,
      <Head>,
        <title>Zion Tech Group - Revolutionary Technology Solutions 20o45</title>,
        <meta name="description" content="Discover cutting-edge AI, IT infrastructure, and micro SAAS solutions. Transform your business with our innovative technology services."  />,
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, quantum computing, cybersecurity, blockchain, edge computing"  />,
        <meta name="viewport" content="width=device-width, initial-scale=1"  />,
        <link rel="canonical" href="https: //ziontechgroup.com"  />,
      </Head>,
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-black relative overflow-hidden">,
        {/* Futuristic Animated Background */}
        <div className="absolute inset-0 overflow-hidden">,
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size: 50px_50px] animate-pulse"  />,
          {/* Floating Particles */}
          <div className="absolute inset-0">,
            {[...Array(20)].map((_, i) => (
              <motion.div,
                key={i}
                className="absolute w-2 h-2 bg-cyan-40o0 rounded-full opacity-60",
                style={{
                  left: `${Math.random() * 10o0}%`;
                  top: `${Math.random() * 10o0}%`}}
                animate={{
                  y: [0, -20, 0];
                  opacity: [0.6, 1, 0.6]}}
                transition={{
                  duration: 3 + Math.random() * 2;
                  repeat: Infinity as any;
                  delay: Math.random() * 2}}
               />))}
          </div>,
          {/* Neon Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-50o0/10 rounded-full blur-3xl animate-pulse"  />,
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl animate-pulse delay-10o00"  />,
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-50o0/10 rounded-full blur-3xl animate-pulse delay-20o00"  />,
        </div>,
        {/* Main Content */}
        <div className="relative z-10">,
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center px-4 sm: px-6 lg:px-8">,
            <div className="max-w-7xl mx-auto text-center">,
              <motion.div,
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8">,
                {/* Main Heading with Neon Effect */}
                <div className="relative">,
                  <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">,
                    <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">,
                      Revolutionary,
                    </span>,
                    <br  />,
                    <span className="bg-gradient-to-r from-pink-40o0 via-purple-50o0 to-cyan-40o0 bg-clip-text text-transparent">,
                      Technology,
                    </span>,
                    <br  />,
                    <span className="bg-gradient-to-r from-emerald-40o0 via-teal-50o0 to-blue-40o0 bg-clip-text text-transparent">,
                      Solutions 20o45,
                    </span>,
                  </h1>,
                  {/* Neon Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-40o0/20 via-blue-50o0/20 to-purple-60o0/20 blur-3xl -z-10"  />,
                </div>,
                {/* Subtitle */}
                <p className="text-xl md: text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">,
                  Transform your business with cutting-edge AI, quantum computing, and innovative micro SAAS solutions.,
                  Experience the future of technology today.,
                </p>,
                {/* CTA Buttons */}
                <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">,
                  <motion.button,
                    whileHover={{ scale: 1.0o5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full text-lg shadow-lg hover: shadow-cyan-50o0/25 transition-all duration-30o0 overflow-hidden">,
                    <span className="relative z-10">Explore Services</span>,
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0 to-cyan-50o0 opacity-0 group-hover:opacity-10o0 transition-opacity duration-30o0"  />,
                    <ArrowRight className="ml-2 inline-block w-5 h-5 group-hover:translate-x-1 transition-transform duration-30o0"  />,
                  </motion.button>,
                  <motion.button,
                    whileHover={{ scale: 1.0o5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-full text-lg hover: bg-cyan-40o0 hover:text-black transition-all duration-30o0">,
                    <Play className="mr-2 inline-block w-5 h-5"  />,
                    Watch Demo,
                  </motion.button>,
                </div>,
                {/* Contact Information */}
                <div className="mt-12 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-cyan-50o0/20">,
                  <div className="grid grid-cols-1 md: grid-cols-3 gap-6 text-center">,
                    <div className="space-y-2">,
                      <Phone className="w-6 h-6 text-cyan-40o0 mx-auto"  />,
                      <p className="text-gray-30o0">+1 30o2 464 0950</p>,
                    </div>,
                    <div className="space-y-2">,
                      <Mail className="w-6 h-6 text-cyan-40o0 mx-auto"  />,
                      <p className="text-gray-30o0">kleber@ziontechgroup.com</p>,
                    </div>,
                    <div className="space-y-2">,
                      <MapPin className="w-6 h-6 text-cyan-40o0 mx-auto"  />,
                      <p className="text-gray-30o0">Middletown DE 19709</p>,
                    </div>,
                  </div>,
                </div>,
              </motion.div>,
            </div>,
          </section>,
          {/* Services Categories */}
          <section className="py-20 px-4 sm: px-6 lg:px-8">,
            <div className="max-w-7xl mx-auto">,
              <motion.div,
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16">,
                <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                  <span className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                    Revolutionary Services,
                  </span>,
                </h2>,
                <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                  Discover our comprehensive suite of innovative technology solutions designed to transform your business,
                </p>,
              </motion.div>,
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">,
                {categories.map((category) => (
                  <motion.button,
                    key={category.id}
                    whileHover={{ scale: 1.0o5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
                      selectedCategory === category.id,
                        ? 'bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white shadow-lg shadow-cyan-50o0/25',
                        : 'bg-gray-80o0/50 text-gray-30o0 hover: bg-gray-70o0/50 border border-gray-60o0/50',
                    }`}
                  >,
                    <category.icon className="w-5 h-5 inline-block mr-2"  />,
                    {category.name}
                    <span className="ml-2 px-2 py-1 bg-gray-70o0/50 rounded-full text-sm">,
                      {category.count}
                    </span>,
                  </motion.button>))}
              </div>,
              {/* Services Grid */}
              <motion.div,
                variants={staggerContainer}
                initial="initial",
                whileInView="animate",
                viewport={{ once: true }}
                className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
                {getFilteredServices().slice(0, 9).map((service, index) => (
                  <motion.div,
                    key={service.id}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="group relative">,
                    <div className="relative p-6 bg-gradient-to-br from-gray-90o0/80 to-gray-80o0/80 backdrop-blur-sm rounded-2xl border border-gray-70o0/50 hover: border-cyan-50o0/50 transition-all duration-30o0 h-full">,
                      {/* Service Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover: scale-110 transition-transform duration-30o0`}>,
                        {service.icon === 'brain' && <Brain className="w-8 h-8 text-white"  />}
                        {service.icon === 'users' && <Users className="w-8 h-8 text-white"  />}
                        {service.icon === 'dollar-sign' && <DollarSign className="w-8 h-8 text-white"  />}
                        {service.icon === 'shield' && <Shield className="w-8 h-8 text-white"  />}
                        {service.icon === 'code' && <Code className="w-8 h-8 text-white"  />}
                        {service.icon === 'atom' && <Atom className="w-8 h-8 text-white"  />}
                        {service.icon === 'package' && <Package className="w-8 h-8 text-white"  />}
                        {service.icon === 'server' && <Database className="w-8 h-8 text-white"  />}
                        {service.icon === 'link' && <Globe className="w-8 h-8 text-white"  />}
                        {service.icon === 'search' && <Search className="w-8 h-8 text-white"  />}
                        {service.icon === 'heart' && <HeartIcon className="w-8 h-8 text-white"  />}
                      </div>,
                      {/* Service Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover: text-cyan-40o0 transition-colors duration-30o0">,
                        {service.name}
                      </h3>,
                      <p className="text-gray-30o0 mb-4 line-clamp-3">,
                        {service.description}
                      </p>,
                      {/* Pricing */}
                      <div className="mb-4">,
                        <span className="text-2xl font-bold text-cyan-40o0">,
                          {(service as any).pricing?.starter || service.price}
                        </span>,
                        <span className="text-gray-40o0 ml-2">/month</span>,
                      </div>,
                      {/* Features Preview */}
                      <div className="mb-6">,
                        <div className="flex flex-wrap gap-2">,
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-80o0/50 text-gray-30o0 text-xs rounded-full">,
                              {feature}
                            </span>))}
                        </div>,
                      </div>,
                      {/* CTA Button */}
                      <Link
                        href={service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 group-hover:shadow-lg group-hover:shadow-cyan-50o0/25">,
                        Learn More,
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-30o0"  />,
                      </Link>,
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute top-4 right-4">,
                          <span className="px-3 py-1 bg-gradient-to-r from-pink-50o0 to-purple-60o0 text-white text-xs font-semibold rounded-full">,
                            Popular,
                          </span>,
                        </div>)}
                    </div>,
                  </motion.div>))}
              </motion.div>,
              {/* View All Services Button */}
              <motion.div,
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12">,
                <Link
                  href="/services",
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-semibold rounded-full text-lg hover: from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 shadow-lg hover:shadow-purple-50o0/25">,
                  View All Services,
                  <ArrowRight className="ml-2 w-5 h-5"  />,
                </Link>,
              </motion.div>,
            </div>,
          </section>,
          {/* Stats Section */}
          <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-gray-90o0/50 to-black/50">,
            <div className="max-w-7xl mx-auto">,
              <motion.div,
                variants={staggerContainer}
                initial="initial",
                whileInView="animate",
                viewport={{ once: true }}
                className="grid grid-cols-2 md: grid-cols-4 gap-8">,
                {stats.map((stat, index) => (
                  <motion.div,
                    key={index}
                    variants={fadeInUp}
                    className="text-center group">,
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-50o0/20 to-blue-60o0/20 p-5 group-hover: scale-110 transition-transform duration-30o0">,
                      <stat.icon className="w-10 h-10 text-cyan-40o0"  />,
                    </div>,
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-40o0 transition-colors duration-30o0">,
                      {stat.number}
                    </div>,
                    <div className="text-gray-40o0 group-hover: text-gray-30o0 transition-colors duration-30o0">,
                      {stat.label}
                    </div>,
                  </motion.div>))}
              </motion.div>,
            </div>,
          </section>,
          {/* Features Section */}
          <section className="py-20 px-4 sm: px-6 lg:px-8">,
            <div className="max-w-7xl mx-auto">,
              <motion.div,
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16">,
                <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                  <span className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                    Featured Solutions,
                  </span>,
                </h2>,
                <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                  Explore our most innovative and transformative technology solutions,
                </p>,
              </motion.div>,
              <motion.div,
                variants={staggerContainer}
                initial="initial",
                whileInView="animate",
                viewport={{ once: true }}
                className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
                {features.map((feature, index) => (
                  <motion.div,
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="group">,
                    <Link href={feature.href}>,
                      <div className="relative p-8 bg-gradient-to-br from-gray-90o0/80 to-gray-80o0/80 backdrop-blur-sm rounded-2xl border border-gray-70o0/50 hover: border-cyan-50o0/50 transition-all duration-30o0 h-full">,
                        {/* Feature Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover: scale-110 transition-transform duration-30o0`}>,
                          <feature.icon className="w-8 h-8 text-white"  />,
                        </div>,
                        {/* Feature Content */}
                        <h3 className="text-xl font-bold text-white mb-4 group-hover: text-cyan-40o0 transition-colors duration-30o0">,
                          {feature.title}
                        </h3>,
                        <p className="text-gray-30o0 mb-6 line-clamp-3">,
                          {feature.description}
                        </p>,
                        {/* Learn More */}
                        <div className="inline-flex items-center text-cyan-40o0 group-hover: text-cyan-30o0 transition-colors duration-30o0">,
                          Learn More,
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-30o0"  />,
                        </div>,
                      </div>,
                    </Link>,
                  </motion.div>))}
              </motion.div>,
            </div>,
          </section>,
          {/* CTA Section */}
          <section className="py-20 px-4 sm: px-6 lg:px-8">,
            <div className="max-w-4xl mx-auto text-center">,
              <motion.div,
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8">,
                <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                  <span className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                    Ready to Transform,
                  </span>,
                  <br  />,
                  <span className="text-white">Your Business?</span>,
                </h2>,
                <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">,
                  Join thousands of businesses already leveraging our revolutionary technology solutions.,
                  Get started today and experience the future of business technology.,
                </p>,
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">,
                  <motion.button,
                    whileHover={{ scale: 1.0o5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full text-lg shadow-lg hover: shadow-cyan-50o0/25 transition-all duration-30o0">,
                    <span className="relative z-10">Get Started Today</span>,
                    <ArrowRight className="ml-2 inline-block w-5 h-5 group-hover:translate-x-1 transition-transform duration-30o0"  />,
                  </motion.button>,
                  <motion.button,
                    whileHover={{ scale: 1.0o5 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-full text-lg hover: bg-cyan-40o0 hover:text-black transition-all duration-30o0">,
                    Schedule Demo,
                  </motion.button>,
                </div>,
                {/* Contact Information */}
                <div className="mt-12 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-cyan-50o0/20">,
                  <div className="grid grid-cols-1 md: grid-cols-3 gap-6 text-center">,
                    <div className="space-y-2">,
                      <Phone className="w-6 h-6 text-cyan-40o0 mx-auto"  />,
                      <p className="text-gray-30o0">+1 30o2 464 0950</p>,
                      <p className="text-sm text-gray-40o0">Call Us</p>,
                    </div>,
                    <div className="space-y-2">,
                      <Mail className="w-6 h-6 text-cyan-40o0 mx-auto"  />,
                      <p className="text-gray-30o0">kleber@ziontechgroup.com</p>,
                      <p className="text-sm text-gray-40o0">Email Us</p>,
                    </div>,
                    <div className="space-y-2">,
                      <MapPin className="w-6 h-6 text-cyan-40o0 mx-auto"  />,
                      <p className="text-gray-30o0">364 E Main St STE 10o08</p>,
                      <p className="text-sm text-gray-40o0">Middletown DE 19709</p>,
                    </div>,
                  </div>,
                </div>,
              </motion.div>,
            </div>,
          </section>,
        </div>,
      </div>,
    </>),
};
export default EnhancedHomepage20o45V2;