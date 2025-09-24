import React, { useState, useEffect, useRef, useCallback } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import {
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Star, Sparkles,
  Grid, List, TrendingUp,
  Calendar, Calculator, GraduationCap,
  Cpu, Cloud, Settings, Monitor, Palette, Network, Layers, Code, Heart, ShoppingCart, Clock, MessageCircle, HelpCircle, Building,
  Zap, Infinity, Eye, Heart as HeartIcon, Code as CodeIcon, Palette as PaletteIcon,
  BookOpen, User} from 'lucide-react',
interface NavigationItem {
  label: string,
  href?: string,
  children?: NavigationItem[],
  icon?: React.ReactNode,
  description?: string,
  badge?: string}
,
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Zap className="w-4 h-4"  />},
  {
    label: 'Services',
    children: [
      {
        name: 'All Services',
        href: '/services',
        description: 'Complete revolutionary services overview',
        icon: <Grid className="w-4 h-4"  />,
        featured: true},
      {
        name: '20o25 Innovative Services Showcase',
        href: '/comprehensive-20o25-innovative-services-showcase',
        description: 'Comprehensive showcase of our latest innovations',
        icon: <Star className="w-4 h-4"  />,
        color: 'from-purple-50o0 to-pink-50o0',
        featured: true},
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-20o40',
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4"  />,
        description: 'Advanced AI solutions for enterprise'},
      {
        label: 'Quantum Computing',
        href: '/quantum-computing',
        icon: <Atom className="w-4 h-4"  />,
        description: 'Next-generation quantum solutions'},
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Lock className="w-4 h-4"  />,
        description: 'Enterprise security solutions'},
      {
        label: 'Cloud Platform',
        href: '/cloud-platform',
        icon: <Globe className="w-4 h-4"  />,
        description: 'Innovative space solutions'},
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Star className="w-4 h-4"  />,
        description: 'Innovative space solutions'},
      {
        label: 'Innovative 20o40 Services',
        href: '/innovative-20o40-futuristic-services-showcase',
        icon: <Star className="w-4 h-4"  />,
        description: 'Cutting-edge futuristic technology solutions'},
      {
        label: 'View All Services',
        href: '/services',
        icon: <Briefcase className="w-4 h-4"  />,
        description: 'Explore our comprehensive technology solutions',
        badge: 'New',
        neonColor: 'shadow-blue-40o0/50',
        children: [
          {
            label: 'Comprehensive 20o40 Showcase',
            href: '/comprehensive-20o40-services-showcase',
            icon: <Star className="w-4 h-4"  />,
            description: 'All our revolutionary services in one place',
            featured: true,
            neonColor: 'shadow-yellow-40o0/50'},
          {
            label: 'AI & Machine Learning',
            href: '/services?category=ai-ml',
            icon: <Brain className="w-4 h-4"  />,
            description: 'Advanced AI solutions for enterprise',
            featured: true,
            neonColor: 'shadow-purple-40o0/50'},
          {
            label: 'Quantum Computing',
            href: '/services?category=quantum',
            icon: <Atom className="w-4 h-4"  />,
            description: 'Next-generation quantum solutions',
            featured: true,
            neonColor: 'shadow-blue-40o0/50'},
          {
            label: 'Space Technology',
            href: '/services?category=space-tech',
            icon: <Rocket className="w-4 h-4"  />,
            description: 'Innovative space tech applications',
            featured: true,
            neonColor: 'shadow-pink-40o0/50'},
      {
        label: 'Quantum Cybersecurity 20o45',
        href: '/quantum-cybersecurity-platform-20o45',
        icon: <Shield className="w-4 h-4"  />,
        color: 'from-red-50o0 to-orange-50o0'},
      {
        name: 'Brain-Computer Interface',
        href: '/brain-computer-interface-20o40',
        description: 'Neural interface technology',
        icon: <Brain className="w-4 h-4"  />,
        color: 'from-pink-50o0 to-purple-50o0'},
      {
        name: 'AI Autonomous Research 20o41',
        href: '/ai-autonomous-research-20o41',
        description: 'Autonomous AI research systems',
        icon: <Brain className="w-4 h-4"  />,
        color: 'from-emerald-50o0 to-teal-50o0'},
      {
        name: 'AI Content Personalization 20o41',
        href: '/ai-content-personalization-20o41',
        description: 'Conscious content personalization',
        icon: <Brain className="w-4 h-4"  />,
        color: 'from-pink-50o0 to-purple-50o0'},
      {
        name: 'AI Ethics & Governance 20o41',
        href: '/ai-ethics-governance-20o41',
        description: 'Ethical AI governance',
        icon: <Shield className="w-4 h-4"  />,
        color: 'from-green-50o0 to-blue-50o0'},
      {
        name: 'AI Autonomous Ecosystem 20o41',
        href: '/ai-autonomous-ecosystem-20o41',
        description: 'Autonomous AI ecosystems',
        icon: <Network className="w-4 h-4"  />,
        color: 'from-indigo-50o0 to-purple-50o0'},
      {
        name: 'AI Predictive Maintenance 20o41',
        href: '/ai-predictive-maintenance-20o41',
        description: 'Predictive maintenance AI',
        icon: <Wrench className="w-4 h-4"  />,
        color: 'from-orange-50o0 to-red-50o0'},
      {
        name: 'AI Customer Success 20o41',
        href: '/ai-customer-success-20o41',
        description: 'Customer success AI',
        icon: <Users className="w-4 h-4"  />,
        color: 'from-blue-50o0 to-cyan-50o0'},
      {
        name: 'AI Sales Intelligence 20o41',
        href: '/ai-sales-intelligence-20o41',
        description: 'Sales intelligence AI',
        icon: <TrendingUp className="w-4 h-4"  />,
        color: 'from-emerald-50o0 to-teal-50o0'},
      {
        name: 'Quantum Internet Security 20o41',
        href: '/quantum-internet-security-20o41',
        description: 'Quantum internet security',
        icon: <Shield className="w-4 h-4"  />,
        color: 'from-red-50o0 to-orange-50o0'},
      {
        name: 'Brain-Computer Interface',
        href: '/brain-computer-interface-20o40',
        description: 'Direct neural integration',
        icon: <Brain className="w-4 h-4"  />,
        color: 'from-purple-50o0 to-pink-50o0'},
      {
        name: 'AI Emotional Intelligence',
        href: '/ai-emotional-intelligence-20o40',
        description: 'Consciousness-based empathy',
        icon: <Heart className="w-4 h-4"  />,
        color: 'from-red-50o0 to-pink-50o0'}
    ]},
  {
    label: 'Company',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4"  />,
        description: 'Our mission and team'},
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Award className="w-4 h-4"  />,
        description: 'Success stories and results'},
      {
        label: 'Careers',
        href: '/careers',
        icon: <Users className="w-4 h-4"  />,
        description: 'Join our team'},
      {
        label: 'News & Updates',
        href: '/news',
        icon: <Globe className="w-4 h-4"  />,
        description: 'Latest company news'}
    ]},
  {
    label: 'Resources',
    children: [
      {
        label: 'Blog',
        href: '/blog',
        icon: <Globe className="w-4 h-4"  />,
        description: 'Industry insights and articles'},
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Globe className="w-4 h-4"  />,
        description: 'Technical guides and APIs'},
      {
        label: 'Support',
        href: '/support',
        icon: <Phone className="w-4 h-4"  />,
        description: 'Help and assistance'},
      {
        label: 'Get Started',
        href: '/get-started',
        icon: <ArrowRight className="w-4 h-4"  />,
        description: 'Quick start guide'}
    ]},
  {
    label: 'Company',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4"  />,
        description: 'Learn about Zion Tech Group'},
      {
        label: 'Careers',
        href: '/careers',
        icon: <Star className="w-4 h-4"  />,
        description: 'Join our team'},
      {
        label: 'Partners',
        href: '/partners',
        icon: <Users className="w-4 h-4"  />,
        description: 'Strategic partnerships'},
      {
        label: 'News',
        href: '/news',
        icon: <Globe className="w-4 h-4"  />,
        description: 'Latest updates and insights'}
    ]},
  {
    label: 'Resources',
    children: [
      {
        label: 'Blog',
        href: '/blog',
        icon: <BookOpen className="w-4 h-4"  />,
        description: 'Industry insights and analysis'},
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Target className="w-4 h-4"  />,
        description: 'Success stories and implementations'},
      {
        label: 'Support',
        href: '/support',
        icon: <HelpCircle className="w-4 h-4"  />,
        description: 'Technical support and documentation'},
      {
        label: 'Training',
        href: '/training',
        icon: <Users className="w-4 h-4"  />,
        description: 'Professional development programs'}
    ]},
  {
    name: 'Innovative Services 20o25',
    href: '/services',
    icon: <Sparkles className="w-5 h-5"  />,
    description: 'Cutting-edge innovative technology solutions',
    badge: 'Innovative',
    category: 'innovative',
    color: 'from-yellow-50o0 to-orange-50o0',
    children: [
      {
        name: 'Cybersecurity & Threat Intelligence',
        href: '/services#cybersecurity-threat-intelligence',
        description: 'Advanced cybersecurity solutions',
        icon: <Shield className="w-4 h-4"  />,
        featured: true},
      {
        name: 'AI Emotional Intelligence 20o40',
        href: '/ai-emotional-intelligence-20o40',
        description: 'Advanced emotional AI with consciousness',
        icon: <HeartIcon className="w-4 h-4"  />,
        featured: true},
      {
        name: 'Brain-Computer Interface 20o40',
        href: '/brain-computer-interface-20o40',
        description: 'Direct neural integration',
        icon: <Brain className="w-4 h-4"  />},
      {
        name: 'AI Autonomous Research 20o41',
        href: '/ai-autonomous-research-20o41',
        description: 'Fully autonomous AI research',
        icon: <CodeIcon className="w-4 h-4"  />,
        featured: true},
      {
        name: 'AI Content Personalization 20o41',
        href: '/ai-content-personalization-20o41',
        description: 'Consciousness-based content AI',
        icon: <PaletteIcon className="w-4 h-4"  />,
        featured: true},
      {
        name: 'AI Ethics & Governance 20o41',
        href: '/ai-ethics-governance-20o41',
        description: 'Comprehensive AI ethics framework',
        icon: <Shield className="w-4 h-4"  />},
      {
        name: 'AI Autonomous Research Assistant',
        href: '/ai-autonomous-research-assistant',
        description: 'Fully autonomous research and analysis',
        icon: <Search className="w-4 h-4"  />,
        featured: true},
      {
        name: 'AI Autonomous Content Factory',
        href: '/ai-autonomous-content-factory',
        description: 'End-to-end autonomous content creation',
        icon: <Palette className="w-4 h-4"  />},
      {
        name: 'AI Autonomous Customer Success',
        href: '/ai-autonomous-customer-success',
        description: 'Intelligent customer success automation',
        icon: <Users className="w-4 h-4"  />},
      {
        name: 'AI Autonomous Sales Intelligence',
        href: '/ai-autonomous-sales-intelligence',
        description: 'Intelligent sales automation',
        icon: <TrendingUp className="w-4 h-4"  />},
      {
        name: 'AI Autonomous Product Management',
        href: '/ai-autonomous-product-management',
        description: 'Intelligent product lifecycle management',
        icon: <Settings className="w-4 h-4"  />}
    ]},
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5"  />,
    description: 'Quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    color: 'from-blue-50o0 to-cyan-50o0',
    children: [
      {
        name: 'Quantum Neural Ecosystem 20o40',
        href: '/quantum-neural-ecosystem-20o40',
        description: 'Quantum-powered neural networks',
        icon: <Atom className="w-4 h-4"  />,
        description: 'Next-generation quantum solutions',
        featured: true,
        badge: 'New'},
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Satellite className="w-4 h-4"  />,
        description: 'Innovative space solutions',
        featured: true},
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4"  />,
        description: 'Enterprise security solutions',
        featured: true},
      {
        name: 'Quantum Internet Security 20o41',
        href: '/quantum-internet-security-20o41',
        description: 'Quantum internet protection',
        icon: <Network className="w-4 h-4"  />,
        featured: true},
      {
        label: 'Micro SaaS',
        href: '/micro-saas',
        icon: <Layers className="w-4 h-4"  />,
        description: 'Rapid deployment SaaS solutions',
        featured: true},
      {
        name: 'Quantum Bio-Computing 20o41',
        href: '/quantum-bio-computing-20o41',
        description: 'Quantum biological computing',
        icon: <Atom className="w-4 h-4"  />},
      {
        name: 'Quantum-Ready Cloud Infrastructure',
        href: '/quantum-ready-cloud-infrastructure',
        description: 'Future-proof cloud infrastructure',
        icon: <Server className="w-4 h-4"  />,
        featured: true}
    ]},
    {
    name: 'Enterprise Solutions',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5"  />,
    description: 'Advanced enterprise infrastructure',
    badge: 'Enterprise',
    category: 'it',
    color: 'from-orange-50o0 to-red-50o0',
    children: [
      {
        name: 'All IT Services',
        href: '/it-services',
        description: 'Complete enterprise solutions overview',
        icon: <Grid className="w-4 h-4"  />,
        featured: true},
      {
        name: 'Autonomous Business Intelligence 20o40',
        href: '/autonomous-business-intelligence-20o40',
        description: 'Consciousness-driven BI',
        icon: <BarChart3 className="w-4 h-4"  />},
      {
        name: 'AI Customer Success 20o41',
        href: '/ai-customer-success-20o41',
        description: 'Autonomous customer management',
        icon: <Heart className="w-4 h-4"  />},
      {
        name: 'AI Sales Intelligence 20o41',
        href: '/ai-sales-intelligence-20o41',
        description: 'Consciousness-based sales AI',
        icon: <TrendingUp className="w-4 h-4"  />},
      {
        name: 'AI Autonomous Ecosystem 20o41',
        href: '/ai-autonomous-ecosystem-20o41',
        description: 'Multi-AI coordination',
        icon: <Network className="w-4 h-4"  />},
      {
        name: 'AI Predictive Maintenance 20o41',
        href: '/ai-predictive-maintenance-20o41',
        description: 'Consciousness-based maintenance',
        icon: <Monitor className="w-4 h-4"  />}
    ]},
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Code className="w-5 h-5"  />,
    description: 'Innovative micro SAAS platforms',
    badge: 'Micro SAAS',
    category: 'micro-saas',
    color: 'from-green-50o0 to-emerald-50o0',
    children: [
      {
        name: 'AI-Powered Email Automation',
        href: '/ai-powered-email-automation',
        description: 'Intelligent email marketing automation',
        icon: <Mail className="w-4 h-4"  />,
        featured: true},
      {
        name: 'Smart Invoice Automation',
        href: '/smart-invoice-automation',
        description: 'Intelligent invoice processing',
        icon: <FileText className="w-4 h-4"  />},
      {
        name: 'AI-Powered Customer Support',
        href: '/ai-powered-customer-support',
        description: 'Intelligent customer support automation',
        icon: <MessageCircle className="w-4 h-4"  />},
      {
        name: 'Smart Project Management',
        href: '/smart-project-management',
        description: 'AI-powered project management',
        icon: <Target className="w-4 h-4"  />},
      {
        name: 'AI-Powered SEO Optimization',
        href: '/ai-powered-seo-optimization',
        description: 'Intelligent SEO automation',
        icon: <Search className="w-4 h-4"  />}
    ]},
  {
    name: 'Resources & Support',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5"  />,
    description: 'Knowledge and support resources',
    category: 'resources',
    color: 'from-indigo-50o0 to-purple-50o0',
    children: [
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Comprehensive service documentation',
        icon: <FileText className="w-4 h-4"  />},
      {
        name: 'API Reference',
        href: '/api',
        description: 'Developer API documentation',
        icon: <Code className="w-4 h-4"  />},
      {
        name: 'Support Center',
        href: '/support',
        description: '24/7 technical support',
        icon: <HelpCircle className="w-4 h-4"  />},
      {
        name: 'Training & Certification',
        href: '/training',
        description: 'Professional training programs',
        icon: <GraduationCap className="w-4 h-4"  />},
      {
        name: 'Community Forum',
        href: '/community',
        description: 'User community and discussions',
        icon: <Users className="w-4 h-4"  />}
    ]},
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5"  />,
    description: 'About Zion Tech Group',
    badge: 'Company',
    category: 'company',
    color: 'from-emerald-50o0 to-teal-50o0',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Learn about our mission and team',
        icon: <Building className="w-4 h-4"  />,
        featured: true},
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our revolutionary team',
        icon: <Users className="w-4 h-4"  />},
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch with us',
        icon: <Mail className="w-4 h-4"  />},
      {
        name: 'News',
        href: '/news',
        description: 'Latest company updates',
        icon: <Globe className="w-4 h-4"  />}
    ]},
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5"  />,
    description: 'Educational content and tools',
    badge: 'Resources',
    category: 'resources',
    color: 'from-yellow-50o0 to-orange-50o0',
    children: [
      {
        name: 'Blog',
        href: '/blog',
        description: 'Insights and articles',
        icon: <BookOpen className="w-4 h-4"  />,
        featured: true},
      {
        name: 'Whitepapers',
        href: '/whitepapers',
        description: 'Research and technical docs',
        icon: <FileText className="w-4 h-4"  />},
      {
        name: 'Webinars',
        href: '/webinars',
        description: 'Live and recorded sessions',
        icon: <Video className="w-4 h-4"  />},
      {
        name: 'Support',
        href: '/support',
        description: 'Help and documentation',
        icon: <HelpCircle className="w-4 h-4"  />}
    ]},
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5"  />,
    description: 'About Zion Tech Group',
    category: 'company',
    color: 'from-gray-50o0 to-slate-50o0',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Learn about our mission and vision',
        icon: <Building className="w-4 h-4"  />},
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team',
        icon: <MessageCircle className="w-4 h-4"  />},
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our revolutionary team',
        icon: <User className="w-4 h-4"  />},
      {
        name: 'News',
        href: '/news',
        description: 'Latest updates and insights',
        icon: <Globe className="w-4 h-4"  />}
    ]},
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5"  />,
    description: 'Educational and support resources',
    category: 'resources',
    color: 'from-indigo-50o0 to-purple-50o0',
    children: [
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation and guides',
        icon: <Code className="w-4 h-4"  />},
      {
        name: 'Support',
        href: '/support',
        description: 'Get help and support',
        icon: <HelpCircle className="w-4 h-4"  />},
      {
        name: 'Blog',
        href: '/blog',
        description: 'Insights and thought leadership',
        icon: <BookOpen className="w-4 h-4"  />},
      {
        name: 'Training',
        href: '/training',
        description: 'Learn our technologies',
        icon: <GraduationCap className="w-4 h-4"  />}
    ]}
],
const contactInfo ={
  phone: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08, Middletown DE 19709'},
const UltraFuturisticNavigation20o40: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [isDarkMode, setIsDarkMode] = useState(true),
  const [searchQuery, setSearchQuery] = useState(''),
  const [isSearchOpen, setIsSearchOpen] = useState(false),
  const router = useRouter(),
  const navRef = useRef<HTMLElement>(null),
  // Close mobile menu when route changes,
  useEffect(() => {
    setIsOpen(false),
    setActiveDropdown(null)}, [router.asPath]),
  // Handle click outside to close dropdowns,
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)}
    },
    document.addEventListener('mousedown', handleClickOutside),
    return () => document.removeEventListener('mousedown', handleClickOutside)}, []),
  // Handle keyboard navigation,
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(),
      action()}
  },
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode),
    // Add theme persistence logic here},
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(),
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`),
      setIsSearchOpen(false),
      setSearchQuery('')}
  },
  const handleSearchResultClick = (url: string) => {
    router.push(url),
    setShowSearch(false),
    setSearchQuery(''),
    setSearchResults([])},
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-80o0/50",
      role="navigation",
      aria-label="Main navigation">,
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white py-2">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="flex items-center justify-between text-sm">,
            <div className="flex items-center space-x-6">,
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 hover: text-blue-20o0 transition-colors duration-20o0">,
                <Phone className="w-3 h-3"  />,
                <span>{contactInfo.phone}</span>,
              </a>,
              <a
                href={`mailto: ${contactInfo.email}`}
                className="flex items-center space-x-2 hover: text-blue-20o0 transition-colors duration-20o0">,
                <Mail className="w-3 h-3"  />,
                <span>{contactInfo.email}</span>,
              </a>,
              <a
                href={`https: //maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                target="_blank",
                rel="noopener noreferrer",
                className="flex items-center space-x-2 hover: text-blue-20o0 transition-colors duration-20o0">,
                <MapPin className="w-3 h-3"  />,
                <span className="hidden sm:inline">Middletown, DE</span>,
              </a>,
            </div>,
            <div className="flex items-center space-x-4">,
              <span className="text-blue-20o0">Monday - Friday: 9:0o0 AM - 6:0o0 PM EST</span>,
            </div>,
          </div>,
        </div>,
      </div>,
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">,
        <div className="flex items-center justify-between h-16 lg:h-20">,
          {/* Logo */}
          <div className="flex-shrink-0">,
            <Link href="/" className="flex items-center space-x-2" aria-label="Zion Tech Group Home">,
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 rounded-lg flex items-center justify-center">,
                <Zap className="w-6 h-6 text-white" aria-hidden="true"  />,
              </div>,
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-40o0 to-purple-60o0 bg-clip-text text-transparent">,
                Zion Tech Group,
              </span>,
            </Link>,
          </div>,
          {/* Desktop Navigation */}
          <div className="hidden lg: flex lg:items-center lg:space-x-8">,
            {navigationItems.map((item) => (
              <div key={item.label} className="relative">,
                {item.children ? (
                  <div>,
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-30o0 hover: text-white transition-colors duration-20o0 group-hover:text-cyan-40o0">,
                      <span>{item.label}</span>,
                      <ChevronDown className={`w-4 h-4 transition-transform duration-20o0 ${
                        activeDropdown === item.label ? 'rotate-180' : ''}`}  />,
                    </button>,
                    {/* Dropdown Menu */}
                    <AnimatePresence>,
                      {activeDropdown === item.label && (
                        <motion.div,
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-80o0/95 backdrop-blur-md border border-gray-70o0/50 rounded-2xl shadow-2xl overflow-hidden">,
                          <div className="p-4 space-y-2">,
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="flex items-start space-x-3 p-3 rounded-xl hover: bg-gray-80o0/50 transition-all duration-30o0 group",
                                onClick={() => setActiveDropdown(null)}
                              >,
                                <div className="w-8 h-8 bg-gray-80o0/50 rounded-lg flex items-center justify-center group-hover: bg-cyan-50o0/20 transition-colors duration-30o0">,
                                  {child.icon}
                                </div>,
                                <div className="flex-1 min-w-0">,
                                  <h4 className="font-medium text-white group-hover: text-cyan-40o0 transition-colors duration-30o0">,
                                    {child.label}
                                  </h4>,
                                  {child.description && (
                                    <p className="text-sm text-gray-40o0 mt-1">,
                                      {child.description}
                                    </p>)}
                                </div>,
                              </Link>))}
                          </div>,
                        </div>,
                      </motion.div>)}
                  </AnimatePresence>)}
              </div>))}
          </div>,
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">,
            {/* Search */}
            <div className="relative" ref={searchRef}>,
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-40o0 hover: text-white hover:bg-gray-80o0/50 rounded-lg transition-all duration-30o0">,
                <Search className="w-5 h-5"  />,
              </button>,
              <AnimatePresence>,
                {isSearchOpen && (
                  <motion.div,
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-80 bg-gray-90o0/95 backdrop-blur-md border border-gray-70o0/50 rounded-2xl shadow-2xl p-4">,
                    <form onSubmit={handleSearch} className="space-y-4">,
                      <div>,
                        <input
                          ref={searchInputRef}
                          type="text",
                          placeholder="Search services...",
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-80o0/50 border border-gray-60o0/50 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:border-cyan-50o0 focus:ring-1 focus:ring-cyan-50o0/50 transition-all duration-30o0",
                        />,
                      </div>,
                      <button
                        type="submit",
                        className="w-full px-4 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium rounded-xl hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5">,
                        Search,
                      </button>,
                    </form>,
                  </motion.div>)}
              </AnimatePresence>,
            </div>,
            {/* CTA Button */}
            <Link
              href="/contact",
              className="hidden sm: inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium rounded-xl hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25">,
              Get Started,
              <ArrowRight className="w-4 h-4 ml-2"  />,
            </Link>,
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg: hidden p-2 text-gray-40o0 hover:text-white hover:bg-gray-80o0/50 rounded-lg transition-all duration-30o0">,
              {isMobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}
            </button>,
          </div>,
        </div>,
      </div>,
      {/* Mobile Menu */}
      <AnimatePresence>,
        {isOpen && (
          <motion.div,
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg: hidden bg-gray-90o0/95 backdrop-blur-md border-t border-gray-80o0/50",
            ref={mobileMenuRef}
          >,
            <div className="px-4 py-6 space-y-4">,
              {navigationItems.map((item) => (
                <div key={item.label}>,
                  {item.children ? (
                    <div>,
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-30o0 hover: text-white hover:bg-gray-80o0/50 rounded-lg transition-all duration-30o0">,
                        <div className="flex items-center space-x-3">,
                          {item.icon}
                          <span className="font-medium">{item.label}</span>,
                        </div>,
                        <ChevronDown className={`w-4 h-4 transition-transform duration-30o0 ${
                          activeDropdown === item.label ? 'rotate-180' : ''}`}  />,
                      </button>,
                      {activeDropdown === item.label && (
                        <div className="ml-8 mt-2 space-y-2">,
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="block px-4 py-2 text-gray-40o0 hover: text-white hover:bg-gray-80o0/50 rounded-lg transition-all duration-30o0",
                              onClick={() => setIsMobileMenuOpen(false)}
                            >,
                              {child.label}
                            </Link>))}
                        </div>)}
                    </div>) : (
                    <Link
                      href={item.href || '#'}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-30o0 hover: text-white hover:bg-gray-80o0/50 rounded-lg transition-all duration-30o0",
                      onClick={() => setIsMobileMenuOpen(false)}
                    >,
                      {item.icon}
                      <span className="font-medium">{item.label}</span>,
                    </Link>)}
                </div>))}
,
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-80o0">,
                <Link
                  href="/contact",
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium rounded-xl hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0",
                  onClick={() => setIsMobileMenuOpen(false)}
                >,
                  Get Started,
                  <ArrowRight className="w-4 h-4 ml-2 inline"  />,
                </Link>,
              </div>,
            </div>,
          </motion.div>)}
      </AnimatePresence>,
    </nav>)},
                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-90o0/95 backdrop-blur-md border border-gray-70o0 rounded-xl shadow-2xl">,
                      <div className="p-4 space-y-3">,
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || '#'}
                            className="flex items-start space-x-3 p-3 rounded-lg hover: bg-gray-80o0/50 transition-colors group",
                            onClick={closeAllDropdowns}
                          >,
                            <div className="w-8 h-8 bg-gray-80o0 rounded-lg flex items-center justify-center group-hover: bg-cyan-50o0/20 transition-colors">,
                              {child.icon}
                            </div>,
                            <div className="flex-1">,
                              <div className="text-white font-medium group-hover: text-cyan-40o0 transition-colors">,
                                {child.label}
                              </div>,
                              <div className="text-sm text-gray-40o0 mt-1">,
                                {child.description}
                              </div>,
                            </div>,
                          </Link>))}
                      </div>,
                    </div>)}
                </div>))}
            </div>,
            {/* Right Side Actions */}
            <div className="hidden lg: flex items-center space-x-4">,
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 text-gray-40o0 hover: text-white transition-colors rounded-lg hover:bg-gray-80o0/50",
                aria-label="Search">,
                <Search className="w-5 h-5"  />,
              </button>,
              {/* Contact Button */}
              <Link
                href="/contact",
                className="px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5",
                onClick={closeAllDropdowns}
              >,
                Get Started,
              </Link>,
            </div>,
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg: hidden p-2 text-gray-40o0 hover:text-white transition-colors rounded-lg hover:bg-gray-80o0/50",
              aria-label="Toggle mobile menu">,
              {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}
            </button>,
          </div>,
        </div>,
        {/* Mobile Navigation */}
        <AnimatePresence>,
          {isOpen && (
            <motion.div,
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg: hidden bg-gray-90o0/95 backdrop-blur-md border-t border-gray-80o0/50">,
              <div className="px-4 py-6 space-y-4">,
                {/* Mobile Search */}
                <div className="relative">,
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
                  <input
                    type="text",
                    placeholder="Search...",
                    className="w-full pl-10 pr-4 py-3 bg-gray-80o0 border border-gray-70o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0",
                   />,
                </div>,
                {/* Mobile Menu Items */}
                {navigationItems.map((item) => (
                  <div key={item.label}>,
                    {item.children ? (
                      <div>,
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="w-full flex items-center justify-between px-3 py-3 text-left text-gray-30o0 hover: text-white transition-colors rounded-lg hover:bg-gray-80o0/50">,
                          <span>{item.label}</span>,
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}  />,
                        </button>,
                        {activeDropdown === item.label && (
                          <div className="ml-4 mt-2 space-y-2">,
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="block px-3 py-2 text-gray-40o0 hover: text-white transition-colors rounded-lg hover:bg-gray-80o0/50",
                                onClick={closeAllDropdowns}
                              >,
                                {child.label}
                              </Link>))}
                          </div>)}
                      </div>) : (
                      <Link
                        href={item.href || '#'}
                        className="block px-3 py-3 text-gray-30o0 hover: text-white transition-colors rounded-lg hover:bg-gray-80o0/50",
                        onClick={closeAllDropdowns}
                      >,
                        {item.label}
                      </Link>)}
                  </div>))}
,
                {/* Mobile Contact Button */}
                <Link
                  href="/contact",
                  className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium text-center rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0",
                  onClick={closeAllDropdowns}
                >,
                  Get Started,
                </Link>,
              </div>,
            </motion.div>)}
        </AnimatePresence>,
      </nav>,
    </>)}]