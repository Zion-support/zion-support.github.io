import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Building, 
  Users, 
  Heart, 
  Rocket, 
  Code, 
  BarChart3, 
  Target, 
  Network, 
  Eye, 
  Clock, 
  Star, 
  Globe, 
  FileText, 
  Calendar, 
  Video, 
  Zap, 
  TrendingUp, 
  ShoppingCart,
  Lock,
  Database,
  Palette,
  Workflow,
  Home,
  Info,
  Phone,
  DollarSign,
  BookOpen,
  HelpCircle,
  Users as TeamIcon,
  Briefcase,
  Shield as SecurityIcon,
  Server,
  RefreshCw,
  MessageSquare
} from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company' },
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Get Started', path: '/get-started', description: 'Start your journey with us' }
      ]
    },
    {
      title: 'Services',
      icon: Code,
      pages: [
        { name: 'AI Solutions', path: '/services/ai', description: 'AI-powered business solutions' },
        { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure & automation' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Advanced security solutions' },
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Robust IT foundations' },
        { name: 'Digital Transformation', path: '/services/transformation', description: 'Business modernization' },
        { name: 'Consulting', path: '/services/consulting', description: 'Strategic technology guidance' }
      ]
    },
    {
      title: 'Solutions',
      icon: Building,
      pages: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Fintech & banking solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Industry 4.0 solutions' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'E-commerce & retail tech' }
      ]
    },
    {
      title: 'Resources',
      icon: BookOpen,
      pages: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and updates' },
        { name: 'Events', path: '/events', description: 'Upcoming events and conferences' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research papers' },
        { name: 'Tutorials', path: '/tutorials', description: 'Step-by-step guides' },
        { name: 'Research & Development', path: '/research-development', description: 'Our R&D initiatives' }
      ]
    },
    {
      title: 'Specialized Technologies',
      icon: Rocket,
      pages: [
        { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Space Tech', path: '/space-tech', description: 'Space technology solutions' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' }
      ]
    },
    {
      title: 'Support & Legal',
      icon: HelpCircle,
      pages: [
        { name: 'Help Center', path: '/help-center', description: 'Get help and support' },
        { name: 'Support', path: '/support', description: 'Technical support services' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Our privacy practices' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' }
      ]
    },
    {
      title: 'Business Tools',
      icon: BarChart3,
      pages: [
        { name: 'Pricing', path: '/pricing', description: 'Service pricing and plans' },
        { name: 'Service Comparison', path: '/service-comparison', description: 'Compare our services' },
        { name: 'Service Portfolio', path: '/service-portfolio', description: 'View our service portfolio' },
        { name: 'Service Recommendations', path: '/service-recommendations', description: 'Get personalized recommendations' },
        { name: 'Service Innovation Hub', path: '/service-innovation-hub', description: 'Innovation showcase' },
        { name: 'Services Showcase', path: '/services-showcase', description: 'Featured services' }
=======

const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Our story and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Pricing", path: "/pricing", description: "Our service pricing" },
        { name: "Careers", path: "/careers", description: "Join our team" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "All Services", path: "/services", description: "Complete service overview" },
        { name: "AI Solutions", path: "/services/ai", description: "Artificial Intelligence services" },
        { name: "Cloud & DevOps", path: "/services/cloud", description: "Cloud infrastructure and automation" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security and threat protection" },
        { name: "IT Infrastructure", path: "/services/infrastructure", description: "Network and system management" },
        { name: "Digital Transformation", path: "/services/transformation", description: "Business process optimization" },
        { name: "Consulting", path: "/services/consulting", description: "Technology strategy and advisory" },
        { name: "Quantum Technology", path: "/quantum-technology", description: "Next-generation computing" },
        { name: "Space Tech", path: "/space-tech", description: "Space technology solutions" },
        { name: "Micro SAAS", path: "/micro-saas", description: "Scalable software solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Our Team", path: "/team", description: "Meet our experts" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories" },
        { name: "Research & Development", path: "/research-development", description: "Innovation hub" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "Events", path: "/events", description: "Upcoming events" },
        { name: "Webinars", path: "/webinars", description: "Educational content" },
        { name: "White Papers", path: "/white-papers", description: "Research and analysis" },
        { name: "Tutorials", path: "/tutorials", description: "Learning resources" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help", description: "Self-service support" },
        { name: "Support Portal", path: "/support", description: "Technical support" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Status", path: "/status", description: "Service status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" }
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
      ]
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Site Map
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all the pages and resources available on the Zion Tech Group website. 
            Find exactly what you're looking for with our comprehensive site navigation.
          </p>
        </div>

        {/* Site Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {siteStructure.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="block p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {page.name}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {page.description}
                    </div>
                  </Link>
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all our pages and services. Find everything you need about Zion Tech Group's 
            technology solutions, resources, and company information.
          </p>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section) => (
            <div key={section.title} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-3">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.links.map((link) => (
                  <div key={link.name} className="group">
                    <Link
                      to={link.path}
                      className="block p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-blue-500/30"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {link.description}
                      </p>
                      <div className="mt-3 flex items-center text-blue-400 text-sm font-medium">
                        Visit Page
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
                ))}
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Quick Links */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/contact"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            >
              <Phone className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">Contact Us</span>
            </Link>
            
            <Link
              to="/get-started"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            >
              <Rocket className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-900 group-hover:text-green-600">Get Started</span>
            </Link>
            
            <Link
              to="/pricing"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            >
              <DollarSign className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Pricing</span>
            </Link>
            
            <Link
              to="/support"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            >
              <HelpCircle className="h-8 w-8 text-orange-600 mb-2" />
              <span className="text-sm font-medium text-gray-900 group-hover:text-orange-600">Support</span>
=======
        {/* Quick Links Section */}
        <div className="mt-16 bg-slate-800/50 rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/contact"
              className="text-center p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="text-center p-4 bg-slate-700 rounded-lg text-white font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              View Services
            </Link>
            <Link
              to="/pricing"
              className="text-center p-4 bg-slate-700 rounded-lg text-white font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-center p-4 bg-slate-700 rounded-lg text-white font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              About Us
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
            </Link>
          </div>
        </div>

        {/* Contact Information */}
<<<<<<< HEAD
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding Something?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you navigate our website 
            and find the information you need.
=======
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-gray-300 mb-8">
            Can't find what you're looking for? Our team is here to help.
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
import { 
  MapIcon, 
  CogIcon, 
  CubeIcon, 
  ShieldCheckIcon,
  RocketLaunchIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <MapIcon className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate through all the pages and services available on Zion Tech Group's website. 
              Find exactly what you're looking for with our comprehensive site structure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Main Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Core Pages</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Services Overview</Link></li>
                <li><Link to="/services-showcase" className="text-gray-300 hover:text-white transition-colors duration-300">Services Showcase</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors duration-300">Team</Link></li>
                <li><Link to="/leadership" className="text-gray-300 hover:text-white transition-colors duration-300">Leadership</Link></li>
                <li><Link to="/partners" className="text-gray-300 hover:text-white transition-colors duration-300">Partners</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors duration-300">Case Studies</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/help-center" className="text-gray-300 hover:text-white transition-colors duration-300">Help Center</Link></li>
                <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors duration-300">Support</Link></li>
                <li><Link to="/tutorials" className="text-gray-300 hover:text-white transition-colors duration-300">Tutorials</Link></li>
                <li><Link to="/webinars" className="text-gray-300 hover:text-white transition-colors duration-300">Webinars</Link></li>
                <li><Link to="/white-papers" className="text-gray-300 hover:text-white transition-colors duration-300">White Papers</Link></li>
                <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors duration-300">News</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors duration-300">Cookie Policy</Link></li>
                <li><Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors duration-300">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Technology Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <CogIcon className="h-10 w-10 text-blue-400 mr-3" />
            AI & Technology Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">AI Business Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/ai-autonomous-business-manager" className="text-gray-300 hover:text-white transition-colors duration-300">AI Autonomous Business Manager</Link></li>
                <li><Link to="/ai-autonomous-research-assistant" className="text-gray-300 hover:text-white transition-colors duration-300">AI Research Assistant</Link></li>
                <li><Link to="/ai-autonomous-systems-platform" className="text-gray-300 hover:text-white transition-colors duration-300">AI Systems Platform</Link></li>
                <li><Link to="/ai-business-intelligence-suite" className="text-gray-300 hover:text-white transition-colors duration-300">AI Business Intelligence</Link></li>
                <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-white transition-colors duration-300">AI Content Generator</Link></li>
                <li><Link to="/ai-code-review" className="text-gray-300 hover:text-white transition-colors duration-300">AI Code Review</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">AI Autonomous Systems</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/ai-autonomous-decision-engine" className="text-gray-300 hover:text-white transition-colors duration-300">AI Decision Engine</Link></li>
                <li><Link to="/ai-autonomous-ecosystem" className="text-gray-300 hover:text-white transition-colors duration-300">AI Ecosystem</Link></li>
                <li><Link to="/ai-autonomous-business-operations" className="text-gray-300 hover:text-white transition-colors duration-300">AI Business Operations</Link></li>
                <li><Link to="/ai-autonomous-devops" className="text-gray-300 hover:text-white transition-colors duration-300">AI DevOps</Link></li>
                <li><Link to="/ai-autonomous-security" className="text-gray-300 hover:text-white transition-colors duration-300">AI Security</Link></li>
                <li><Link to="/ai-autonomous-testing" className="text-gray-300 hover:text-white transition-colors duration-300">AI Testing</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">AI Specialized Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/ai-autonomous-education-professor" className="text-gray-300 hover:text-white transition-colors duration-300">AI Education</Link></li>
                <li><Link to="/ai-autonomous-healthcare-physician" className="text-gray-300 hover:text-white transition-colors duration-300">AI Healthcare</Link></li>
                <li><Link to="/ai-autonomous-legal-counsel" className="text-gray-300 hover:text-white transition-colors duration-300">AI Legal Counsel</Link></li>
                <li><Link to="/ai-autonomous-logistics" className="text-gray-300 hover:text-white transition-colors duration-300">AI Logistics</Link></li>
                <li><Link to="/ai-autonomous-manufacturing" className="text-gray-300 hover:text-white transition-colors duration-300">AI Manufacturing</Link></li>
                <li><Link to="/ai-autonomous-robotics" className="text-gray-300 hover:text-white transition-colors duration-300">AI Robotics</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">AI Research & Development</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/ai-biomedical-research" className="text-gray-300 hover:text-white transition-colors duration-300">AI Biomedical Research</Link></li>
                <li><Link to="/ai-biotech-drug-discovery" className="text-gray-300 hover:text-white transition-colors duration-300">AI Drug Discovery</Link></li>
                <li><Link to="/ai-blockchain-analytics" className="text-gray-300 hover:text-white transition-colors duration-300">AI Blockchain Analytics</Link></li>
                <li><Link to="/ai-brain-computer-interface" className="text-gray-300 hover:text-white transition-colors duration-300">AI Brain Interface</Link></li>
                <li><Link to="/ai-climate-prediction" className="text-gray-300 hover:text-white transition-colors duration-300">AI Climate Prediction</Link></li>
                <li><Link to="/ai-consciousness-evolution" className="text-gray-300 hover:text-white transition-colors duration-300">AI Consciousness</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI Content & Marketing</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/ai-content-creation" className="text-gray-300 hover:text-white transition-colors duration-300">AI Content Creation</Link></li>
                <li><Link to="/ai-content-factory" className="text-gray-300 hover:text-white transition-colors duration-300">AI Content Factory</Link></li>
                <li><Link to="/ai-content-marketing-automation" className="text-gray-300 hover:text-white transition-colors duration-300">AI Marketing Automation</Link></li>
                <li><Link to="/ai-creativity-studio" className="text-gray-300 hover:text-white transition-colors duration-300">AI Creativity Studio</Link></li>
                <li><Link to="/ai-market-research" className="text-gray-300 hover:text-white transition-colors duration-300">AI Market Research</Link></li>
                <li><Link to="/ai-ad-creative-generator" className="text-gray-300 hover:text-white transition-colors duration-300">AI Ad Creative Generator</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">AI Infrastructure</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/ai-autonomous-vehicle-platform" className="text-gray-300 hover:text-white transition-colors duration-300">AI Vehicle Platform</Link></li>
                <li><Link to="/ai-autonomous-vehicles" className="text-gray-300 hover:text-white transition-colors duration-300">AI Vehicles</Link></li>
                <li><Link to="/ai-computer-vision-platform" className="text-gray-300 hover:text-white transition-colors duration-300">AI Computer Vision</Link></li>
                <li><Link to="/ai-powered-enterprise-security" className="text-gray-300 hover:text-white transition-colors duration-300">AI Enterprise Security</Link></li>
                <li><Link to="/ai-automation-services" className="text-gray-300 hover:text-white transition-colors duration-300">AI Automation Services</Link></li>
                <li><Link to="/ai-agents" className="text-gray-300 hover:text-white transition-colors duration-300">AI Agents</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum & Advanced Tech */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <CubeIcon className="h-10 w-10 text-purple-400 mr-3" />
            Quantum & Advanced Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Quantum Computing</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/quantum-technology" className="text-gray-300 hover:text-white transition-colors duration-300">Quantum Technology</Link></li>
                <li><Link to="/quantum-neural-network-platform" className="text-gray-300 hover:text-white transition-colors duration-300">Quantum Neural Network Platform</Link></li>
                <li><Link to="/quantum-edge-computing-platform" className="text-gray-300 hover:text-white transition-colors duration-300">Quantum Edge Computing</Link></li>
                <li><Link to="/quantum-cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors duration-300">Quantum Cloud Infrastructure</Link></li>
                <li><Link to="/quantum-financial-trading" className="text-gray-300 hover:text-white transition-colors duration-300">Quantum Financial Trading</Link></li>
                <li><Link to="/quantum-services" className="text-gray-300 hover:text-white transition-colors duration-300">Quantum Services</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">5G & Network Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/5g-enterprise-network" className="text-gray-300 hover:text-white transition-colors duration-300">5G Enterprise Network</Link></li>
                <li><Link to="/5g-enterprise-solutions" className="text-gray-300 hover:text-white transition-colors duration-300">5G Enterprise Solutions</Link></li>
                <li><Link to="/5g-network-optimization" className="text-gray-300 hover:text-white transition-colors duration-300">5G Network Optimization</Link></li>
                <li><Link to="/5g-private-network-solutions" className="text-gray-300 hover:text-white transition-colors duration-300">5G Private Network Solutions</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Advanced Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/advanced-ai-automation-services" className="text-gray-300 hover:text-white transition-colors duration-300">Advanced AI Automation</Link></li>
                <li><Link to="/advanced-cybersecurity-suite" className="text-gray-300 hover:text-white transition-colors duration-300">Advanced Cybersecurity</Link></li>
                <li><Link to="/advanced-it-infrastructure-services" className="text-gray-300 hover:text-white transition-colors duration-300">Advanced IT Infrastructure</Link></li>
                <li><Link to="/advanced-research-automation" className="text-gray-300 hover:text-white transition-colors duration-300">Advanced Research Automation</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Business Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <ShieldCheckIcon className="h-10 w-10 text-green-400 mr-3" />
            Infrastructure & Business Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">IT & Infrastructure</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/it-services" className="text-gray-300 hover:text-white transition-colors duration-300">IT Services</Link></li>
                <li><Link to="/it-onsite-services" className="text-gray-300 hover:text-white transition-colors duration-300">IT Onsite Services</Link></li>
                <li><Link to="/iot-services" className="text-gray-300 hover:text-white transition-colors duration-300">IoT Services</Link></li>
                <li><Link to="/mobile-services" className="text-gray-300 hover:text-white transition-colors duration-300">Mobile Services</Link></li>
                <li><Link to="/green-it" className="text-gray-300 hover:text-white transition-colors duration-300">Green IT</Link></li>
                <li><Link to="/enterprise-it" className="text-gray-300 hover:text-white transition-colors duration-300">Enterprise IT</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Business Operations</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/autonomous-business-operations-platform" className="text-gray-300 hover:text-white transition-colors duration-300">Autonomous Business Operations Platform</Link></li>
                <li><Link to="/autonomous-devops-platform" className="text-gray-300 hover:text-white transition-colors duration-300">Autonomous DevOps Platform</Link></li>
                <li><Link to="/ai-powered-it-asset-management" className="text-gray-300 hover:text-white transition-colors duration-300">AI-Powered IT Asset Management</Link></li>
                <li><Link to="/autonomous-business-operations" className="text-gray-300 hover:text-white transition-colors duration-300">Autonomous Business Operations</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Specialized Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/space-tech" className="text-gray-300 hover:text-white transition-colors duration-300">Space Tech</Link></li>
                <li><Link to="/micro-saas" className="text-gray-300 hover:text-white transition-colors duration-300">Micro SaaS</Link></li>
                <li><Link to="/industry-solutions" className="text-gray-300 hover:text-white transition-colors duration-300">Industry Solutions</Link></li>
                <li><Link to="/manufacturing-solutions" className="text-gray-300 hover:text-white transition-colors duration-300">Manufacturing Solutions</Link></li>
                <li><Link to="/marketplace" className="text-gray-300 hover:text-white transition-colors duration-300">Marketplace</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <RocketLaunchIcon className="h-10 w-10 text-orange-400 mr-3" />
            Special Solutions & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Network & Security</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/zero-trust-network-architecture" className="text-gray-300 hover:text-white transition-colors duration-300">Zero Trust Network Architecture</Link></li>
                <li><Link to="/soc2-compliance-automation" className="text-gray-300 hover:text-white transition-colors duration-300">SOC2 Compliance Automation</Link></li>
                <li><Link to="/accessibility-auditor" className="text-gray-300 hover:text-white transition-colors duration-300">Accessibility Auditor</Link></li>
                <li><Link to="/accessibility-scanner" className="text-gray-300 hover:text-white transition-colors duration-300">Accessibility Scanner</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI Tools & Platforms</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/agentic-rag" className="text-gray-300 hover:text-white transition-colors duration-300">Agentic RAG</Link></li>
                <li><Link to="/agentic-rag-helpdesk" className="text-gray-300 hover:text-white transition-colors duration-300">Agentic RAG Helpdesk</Link></li>
                <li><Link to="/agentic-sales-outreach" className="text-gray-300 hover:text-white transition-colors duration-300">Agentic Sales Outreach</Link></li>
                <li><Link to="/affiliate-attribution-hub" className="text-gray-300 hover:text-white transition-colors duration-300">Affiliate Attribution Hub</Link></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Service Management</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/service-innovation-hub" className="text-gray-300 hover:text-white transition-colors duration-300">Service Innovation Hub</Link></li>
                <li><Link to="/service-portfolio-dashboard" className="text-gray-300 hover:text-white transition-colors duration-300">Service Portfolio Dashboard</Link></li>
                <li><Link to="/service-recommendations" className="text-gray-300 hover:text-white transition-colors duration-300">Service Recommendations</Link></li>
                <li><Link to="/service-comparison" className="text-gray-300 hover:text-white transition-colors duration-300">Service Comparison</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our comprehensive sitemap should help you navigate to the right page. 
            If you still need assistance, don't hesitate to contact us.
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
=======
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
            >
              Contact Support
            </Link>
            <Link
<<<<<<< HEAD
              to="/help-center"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Visit Help Center
=======
              to="/help"
              className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              Help Center
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
            </Link>
          </div>
        </div>
      </div>
=======
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
    </div>
  );
};

export default Sitemap;