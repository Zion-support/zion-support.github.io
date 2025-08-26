import React from 'react';
import { Link } from 'react-router-dom';
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
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
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
    </div>
  );
};

export default Sitemap;