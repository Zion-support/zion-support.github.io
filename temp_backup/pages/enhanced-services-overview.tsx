import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import {
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap,
  DollarSign, Shield, Mail, MapPin, Rocket, Brain,
  Sparkles, Atom, Target, Microscope, Search, Filter,
  ExternalLink, Users, Clock, BarChart3, Award, Globe,
  Cpu, Database, Lock, MessageSquare, BarChart, ShoppingCart,
  UserCheck, FileText, Palette, Camera, Video, Music} from 'lucide-react',
import Button from '../components/ui/Button',
import UltraFuturisticBackground20o35 from '../components/ui/UltraFuturisticBackground20o35',
import UltraFuturisticNavigation20o33 from '../components/layout/UltraFuturisticNavigation20o33',
import UltraFuturisticFooter20o34 from '../components/layout/UltraFuturisticFooter20o34',
export default function EnhancedServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [searchQuery, setSearchQuery] = useState(''),
  const contactInfo ={
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
    website: 'https://ziontechgroup.com'},
  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'Artificial Intelligence',
      description: 'Revolutionary AI solutions including consciousness platforms, emotional intelligence, and autonomous business systems.',
      icon: Brain,
      color: 'from-violet-50o0 to-purple-60o0',
      services: [
        'AI Consciousness Evolution PlatformAI Emotional Intelligence Platform',
        'AI Autonomous Business ManagerAI Creativity Orchestrator',
        'AI Content Generation & OptimizationAI Sales Automation',
        'AI HR RecruitmentAI Legal Contract Analysis'],
      pricing: { starting: '$1,499', range: '$1,499 - $9,999' },
      benefits: ['30o0% ROI improvement80% time savings', 'Enhanced decision making'],
      href: '/ai-services',
      featured: true},
    {
      id: 'quantum-services',
      name: 'Quantum Computing',
      description: 'Cutting-edge quantum computing solutions for security, finance, and emerging technology applications.',
      icon: Atom,
      color: 'from-indigo-50o0 to-blue-60o0',
      services: [
        'Quantum Internet Security GatewayQuantum Financial Trading Platform',
        'Quantum AI Brain-Computer InterfaceQuantum Blockchain Infrastructure',
        'Quantum Cybersecurity SolutionsQuantum Energy Optimization',
        'Quantum Logistics PlatformQuantum Metaverse Development'],
      pricing: { starting: '$2,999', range: '$2,999 - $19,999' },
      benefits: ['Unbreakable securityExponential performance', 'Future-proof technology'],
      href: '/quantum-services',
      featured: true},
    {
      id: 'space-technology',
      name: 'Space Technology',
      description: 'Advanced space technology solutions including mining automation, satellite systems, and space infrastructure.',
      icon: Rocket,
      color: 'from-teal-50o0 to-emerald-60o0',
      services: [
        'Space Mining Automation PlatformSatellite Constellation Management',
        'Space Debris Tracking SystemSpace Tourism Platform',
        'Space Resource AnalyticsSpace Weather Monitoring',
        'Space Communication NetworksSpace Manufacturing Systems'],
      pricing: { starting: '$4,999', range: '$4,999 - $49,999' },
      benefits: ['Access to space resourcesGlobal connectivity', 'Innovation leadership'],
      href: '/space-technology',
      featured: true},
    {
      id: 'enterprise-it',
      name: 'Enterprise IT Solutions',
      description: 'Comprehensive enterprise IT solutions including infrastructure, security, and operations automation.',
      icon: Cpu,
      color: 'from-blue-50o0 to-cyan-60o0',
      services: [
        'Autonomous DevOps PlatformZero Trust Network Architecture',
        'Edge Computing OrchestrationAI IT Operations Center',
        'Cloud Infrastructure ManagementData Center Automation',
        'Network Security MonitoringIT Asset Management'],
      pricing: { starting: '$1,999', range: '$1,999 - $29,999' },
      benefits: ['Operational efficiencyCost reduction', 'Security enhancement'],
      href: '/enterprise-it',
      featured: true},
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Market-ready micro SAAS services for business automation, marketing, and operational efficiency.',
      icon: Target,
      color: 'from-green-50o0 to-yellow-60o0',
      services: [
        'AI Content Calendar ProSmart Invoice Automation',
        'Customer Success AutomationAI Sales Pipeline Optimizer',
        'HR Automation SuiteE-commerce Automation Platform',
        'Project Management AIData Analytics Automation'],
      pricing: { starting: '$19', range: '$19 - $499' },
      benefits: ['Quick implementationAffordable pricing', 'Immediate ROI'],
      href: '/enhanced-micro-saas-showcase',
      featured: true},
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Advanced cybersecurity solutions including threat detection, incident response, and security automation.',
      icon: Shield,
      color: 'from-red-50o0 to-pink-60o0',
      services: [
        'AI Threat Detection SystemIncident Response Automation',
        'Vulnerability Assessment PlatformSecurity Awareness Training',
        'Compliance Monitoring SystemPenetration Testing Automation',
        'Security Operations CenterRisk Assessment AI'],
      pricing: { starting: '$79', range: '$79 - $999' },
      benefits: ['Threat preventionCompliance assurance', 'Risk mitigation'],
      href: '/security',
      featured: false},
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Comprehensive data analytics solutions including collection, processing, and visualization automation.',
      icon: BarChart3,
      color: 'from-orange-50o0 to-red-60o0',
      services: [
        'Data Pipeline AutomationReal-time Analytics Dashboard',
        'Predictive Analytics PlatformData Quality Monitoring',
        'Business Intelligence SuiteData Visualization Tools',
        'Machine Learning PipelineData Governance Platform'],
      pricing: { starting: '$49', range: '$49 - $799' },
      benefits: ['Data-driven decisionsOperational insights', 'Performance optimization'],
      href: '/ai-data-analytics',
      featured: false},
    {
      id: 'content-creation',
      name: 'Content Creation',
      description: 'AI-powered content creation and management solutions for marketing and communication.',
      icon: FileText,
      color: 'from-pink-50o0 to-rose-60o0',
      services: [
        'AI Content GeneratorVideo Editing AI Platform',
        'Social Media AutomationContent Calendar Management',
        'SEO Optimization ToolsMultimedia Content Creation',
        'Content Performance AnalyticsBrand Voice AI'],
      pricing: { starting: '$29', range: '$29 - $399' },
      benefits: ['Content quality improvementTime savings', 'Engagement increase'],
      href: '/ai-content-generator',
      featured: false},
    {
      id: 'automation',
      name: 'Business Automation',
      description: 'Comprehensive business process automation solutions for operational efficiency.',
      icon: Zap,
      color: 'from-yellow-50o0 to-orange-60o0',
      services: [
        'Workflow Automation PlatformProcess Mining Tools',
        'RPA ImplementationBusiness Process Optimization',
        'Automation ConsultingIntegration Services',
        'Performance MonitoringAutomation Strategy'],
      pricing: { starting: '$99', range: '$99 - $1,999' },
      benefits: ['Process efficiencyCost reduction', 'Error elimination'],
      href: '/automation',
      featured: false},
    {
      id: 'research-development',
      name: 'Research & Development',
      description: 'Cutting-edge R&D services including emerging technology research and innovation consulting.',
      icon: Microscope,
      color: 'from-purple-50o0 to-indigo-60o0',
      services: [
        'Emerging Technology ResearchInnovation Strategy Consulting',
        'Prototype DevelopmentTechnology Assessment',
        'Patent ResearchMarket Analysis',
        'Technology TransferInnovation Workshops'],
      pricing: { starting: '$199', range: '$199 - $2,999' },
      benefits: ['Innovation leadershipCompetitive advantage', 'Future readiness'],
      href: '/emerging-tech',
      featured: false}
  ],
  const filteredCategories = serviceCategories.filter(category =>,
    selectedCategory === 'all' || category.id === selectedCategory),
  const containerVariants ={
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1}
    }
  },
  const itemVariants ={
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6}
    }
  },
  return (
    <>,
      <Head>,
        <title>Enhanced Services Overview 20o25 | Zion Tech Group - Comprehensive Technology Solutions</title>,
        <meta name="description" content="Explore our comprehensive range of technology services including AI, quantum computing, space technology, enterprise IT, and micro SAAS solutions. Transform your business with cutting-edge technology."  />,
        <meta name="keywords" content="technology services, AI services, quantum computing, space technology, enterprise IT, micro SAAS, cybersecurity, data analytics, content creation, business automation, research development"  />,
        <meta name="author" content="Zion Tech Group"  />,
        <meta name="robots" content="index, follow"  />,
        {/* Open Graph */}
        <meta property="og: title" content="Enhanced Services Overview 20o25 | Zion Tech Group"  />,
        <meta property="og:description" content="Comprehensive technology solutions for the future. AI, quantum computing, space technology, and more."  />,
        <meta property="og: url" content="https://ziontechgroup.com/enhanced-services-overview"  />,
        <meta property="og:type" content="website"  />,
        <meta property="og:site_name" content="Zion Tech Group"  />,
        {/* Twitter Card */}
        <meta name="twitter: card" content="summary_large_image"  />,
        <meta name="twitter:title" content="Enhanced Services Overview 20o25 | Zion Tech Group"  />,
        <meta name="twitter:description" content="Comprehensive technology solutions for the future."  />,
        <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-overview"  />,
      </Head>,
      <UltraFuturisticBackground20o35>,
        <UltraFuturisticNavigation20o33  />,
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32">,
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,
            {/* Animated Badge */}
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-50o0/20 to-purple-60o0/20 border border-cyan-50o0/30 rounded-full text-cyan-30o0 text-lg font-medium mb-8 backdrop-blur-sm">,
              <Star className="w-5 h-5 mr-2 text-cyan-40o0"  />,
              20o25 Comprehensive Services Overview,
            </motion.div>,
            {/* Main Heading */}
            <motion.h1,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md: text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">,
              <span className="bg-gradient-to-r from-cyan-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text text-transparent">,
                Complete,
              </span>,
              <br  />,
              <span className="text-white">Technology</span>,
              <br  />,
              <span className="bg-gradient-to-r from-green-40o0 via-yellow-50o0 to-orange-50o0 bg-clip-text text-transparent">,
                Ecosystem,
              </span>,
            </motion.h1>,
            {/* Subheading */}
            <motion.p,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md: text-2xl text-gray-30o0 max-w-4xl mx-auto mb-12 leading-relaxed">,
              From revolutionary AI consciousness platforms to cutting-edge quantum computing solutions,
              discover our comprehensive range of technology services designed to transform businesses and advance humanity.,
            </motion.p>,
            {/* Stats */}
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">,
              <div className="text-center">,
                <div className="text-3xl md:text-4xl font-bold text-cyan-40o0 mb-2">10+</div>,
                <div className="text-gray-30o0 text-sm">Service Categories</div>,
              </div>,
              <div className="text-center">,
                <div className="text-3xl md:text-4xl font-bold text-purple-40o0 mb-2">10o0+</div>,
                <div className="text-gray-30o0 text-sm">Individual Services</div>,
              </div>,
              <div className="text-center">,
                <div className="text-3xl md:text-4xl font-bold text-pink-40o0 mb-2">$50o0B+</div>,
                <div className="text-gray-30o0 text-sm">Market Opportunity</div>,
              </div>,
              <div className="text-center">,
                <div className="text-3xl md:text-4xl font-bold text-green-40o0 mb-2">24/7</div>,
                <div className="text-gray-30o0 text-sm">Global Support</div>,
              </div>,
            </motion.div>,
            {/* CTA Buttons */}
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm: flex-row gap-6 justify-center">,
              <motion.a,
                href="#services",
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-bold text-lg rounded-xl hover: from-cyan-60o0 hover:to-purple-70o0 transition-all duration-20o0 shadow-2xl shadow-cyan-50o0/25">,
                <span>Explore Services</span>,
                <ArrowRight className="w-6 h-6"  />,
              </motion.a>,
              <motion.a,
                href={`tel:${contactInfo.mobile}`}
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-50o0/50 text-cyan-30o0 font-bold text-lg rounded-xl hover: bg-cyan-50o0/10 hover:border-cyan-40o0 transition-all duration-20o0">,
                <span>Get Started</span>,
                <Phone className="w-6 h-6"  />,
              </motion.a>,
            </motion.div>,
          </div>,
        </section>,
        {/* Services Overview Section */}
        <section id="services" className="py-20 relative">,
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
            {/* Section Header */}
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16">,
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                <span className="bg-gradient-to-r from-cyan-40o0 to-purple-50o0 bg-clip-text text-transparent">,
                  Revolutionary,
                </span>,
                <span className="text-white"> Service Categories</span>,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                Discover our comprehensive range of technology services designed to transform every aspect of your business operations.,
              </p>,
            </motion.div>,
            {/* Category Filter */}
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12">,
              <div className="flex flex-wrap justify-center gap-4">,
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-20o0 ${
                    selectedCategory === 'all',
                      ? 'bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white shadow-lg',
                      : 'bg-black/30 border border-cyan-50o0/30 text-gray-30o0 hover: border-cyan-40o0'}`}
                >,
                  All Categories,
                </button>,
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-20o0 ${
                      selectedCategory === category.id,
                        ? 'bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white shadow-lg',
                        : 'bg-black/30 border border-cyan-50o0/30 text-gray-30o0 hover: border-cyan-40o0'}`}
                  >,
                    {category.name}
                  </button>))}
              </div>,
            </motion.div>,
            {/* Services Grid */}
            <motion.div,
              variants={containerVariants}
              initial="hidden",
              whileInView="visible",
              className="grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-3 gap-8">,
              {filteredCategories.map((category, index) => (
                <motion.div,
                  key={category.id}
                  variants={itemVariants}
                  className={`group relative bg-gradient-to-br from-black/40 to-purple-90o0/20 border border-cyan-50o0/30 rounded-2xl p-6 hover: border-cyan-40o0/60 transition-all duration-30o0 hover:shadow-2xl hover:shadow-cyan-50o0/20 backdrop-blur-sm ${
                    category.featured ? 'ring-2 ring-cyan-40o0/30' : ''}`}
                >,
                  {/* Featured Badge */}
                  {category.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white text-xs font-bold px-3 py-1 rounded-full">,
                      Featured,
                    </div>)}
,
                  {/* Category Header */}
                  <div className="mb-6">,
                    <div className="flex items-start justify-between mb-4">,
                      <div className="flex-1">,
                        <h3 className="text-xl font-bold text-white mb-2 group-hover: text-cyan-30o0 transition-colors">,
                          {category.name}
                        </h3>,
                        <p className="text-gray-30o0 text-sm leading-relaxed">{category.description}</p>,
                      </div>,
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} border border-cyan-50o0/30 rounded-2xl flex items-center justify-center`}>,
                        <category.icon className="w-8 h-8 text-white"  />,
                      </div>,
                    </div>,
                  </div>,
                  {/* Services List */}
                  <div className="mb-6">,
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">,
                      <Sparkles className="w-4 h-4 mr-2 text-cyan-40o0"  />,
                      Key Services,
                    </h4>,
                    <div className="space-y-2">,
                      {category.services.slice(0, 4).map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-30o0">,
                          <CheckCircle className="w-4 h-4 mr-2 text-green-40o0 flex-shrink-0"  />,
                          <span>{service}</span>,
                        </div>))}
                      {category.services.length > 4 && (
                        <div className="text-sm text-cyan-40o0 font-medium">,
                          +{category.services.length - 4} more services,
                        </div>)}
                    </div>,
                  </div>,
                  {/* Pricing */}
                  <div className="mb-6">,
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">,
                      <DollarSign className="w-4 h-4 mr-2 text-green-40o0"  />,
                      Pricing,
                    </h4>,
                    <div className="text-lg font-bold text-green-40o0">,
                      Starting at {category.pricing.starting}
                    </div>,
                    <div className="text-sm text-gray-40o0">,
                      Range: {category.pricing.range}
                    </div>,
                  </div>,
                  {/* Benefits */}
                  <div className="mb-6">,
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">,
                      <TrendingUp className="w-4 h-4 mr-2 text-yellow-40o0"  />,
                      Key Benefits,
                    </h4>,
                    <div className="space-y-2">,
                      {category.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-sm text-gray-30o0">,
                          • {benefit}
                        </div>))}
                    </div>,
                  </div>,
                  {/* Action Buttons */}
                  <div className="flex space-x-3">,
                    <motion.a,
                      href={category.href}
                      whileHover={{ scale: 1.0o5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-medium rounded-lg hover: from-cyan-60o0 hover:to-purple-70o0 transition-all duration-20o0 text-sm">,
                      <span>Explore Category</span>,
                      <ArrowRight className="w-4 h-4 ml-2"  />,
                    </motion.a>,
                    <motion.a,
                      href={`tel:${contactInfo.mobile}`}
                      whileHover={{ scale: 1.0o5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center px-4 py-3 bg-black/50 border border-cyan-50o0/50 text-cyan-30o0 font-medium rounded-lg hover: bg-cyan-50o0/10 hover:border-cyan-40o0 transition-all duration-20o0 text-sm">,
                      <Phone className="w-4 h-4"  />,
                    </motion.a>,
                  </div>,
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50o0/5 to-purple-60o0/5 rounded-2xl opacity-0 group-hover: opacity-10o0 transition-opacity duration-30o0 pointer-events-none"  />,
                </motion.div>))}
            </motion.div>,
          </div>,
        </section>,
        {/* Contact Section */}
        <section className="py-20 relative">,
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >,
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                Ready to Transform Your Business?,
              </h2>,
              <p className="text-xl text-gray-30o0 mb-8">,
                Get in touch with our team to discuss how our comprehensive technology solutions can drive growth and innovation for your organization.,
              </p>,
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">,
                <div className="flex items-center justify-center space-x-3 p-4 bg-black/30 border border-cyan-50o0/20 rounded-lg">,
                  <Phone className="w-5 h-5 text-cyan-40o0"  />,
                  <span className="text-white">{contactInfo.mobile}</span>,
                </div>,
                <div className="flex items-center justify-center space-x-3 p-4 bg-black/30 border border-cyan-50o0/20 rounded-lg">,
                  <Mail className="w-5 h-5 text-cyan-40o0"  />,
                  <span className="text-white">{contactInfo.email}</span>,
                </div>,
                <div className="flex items-center justify-center space-x-3 p-4 bg-black/30 border border-cyan-50o0/20 rounded-lg">,
                  <MapPin className="w-5 h-5 text-cyan-40o0"  />,
                  <span className="text-white">{contactInfo.address}</span>,
                </div>,
              </div>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <motion.a,
                  href={`tel:${contactInfo.mobile}`}
                  whileHover={{ scale: 1.0o5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-bold text-lg rounded-xl hover: from-cyan-60o0 hover:to-purple-70o0 transition-all duration-20o0">,
                  <Phone className="w-6 h-6"  />,
                  <span>Call Now</span>,
                </motion.a>,
                <motion.a,
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.0o5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-50o0/50 text-cyan-30o0 font-bold text-lg rounded-xl hover: bg-cyan-50o0/10 hover:border-cyan-40o0 transition-all duration-20o0">,
                  <Mail className="w-6 h-6"  />,
                  <span>Email Us</span>,
                </motion.a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        <UltraFuturisticFooter20o34  />,
      </UltraFuturisticBackground20o35>,
    </>)}