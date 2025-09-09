import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Info, 
  Settings, 
  ShoppingCart, 
  Users, 
  FileText, 
  Shield, 
  HelpCircle,
  Globe,
  Building,
  Briefcase,
  MessageSquare,
  BookOpen,
  Star,
  Zap,
  Brain,
  Cloud,
  Lock,
  Server,
  Database,
  Network,
  Cpu,
  Rocket,
  Heart,
  Leaf
} from 'lucide-react';

export default function Sitemap() {
  const sitemapStructure = [
    {
      category: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      category: 'Services',
      icon: Settings,
      pages: [
        { name: 'All Services', path: '/services', description: 'Complete service catalog' },
        { name: 'AI & Analytics', path: '/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security and protection services' },
        { name: 'Cloud Solutions', path: '/cloud-solutions', description: 'Cloud infrastructure and services' },
        { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing solutions' },
        { name: 'Blockchain & Web3', path: '/blockchain', description: 'Blockchain and decentralized solutions' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'On-site IT support and services' }
      ]
    },
    {
      category: 'Marketplace',
      icon: ShoppingCart,
      pages: [
        { name: 'Products', path: '/marketplace', description: 'Browse and purchase products' },
        { name: 'Talent', path: '/talent', description: 'Find skilled professionals' },
        { name: 'Equipment', path: '/equipment', description: 'Technology equipment and hardware' },
        { name: 'Categories', path: '/categories', description: 'Browse by category' }
      ]
    },
    {
      category: 'Company',
      icon: Building,
      pages: [
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'News', path: '/news', description: 'Company announcements' }
      ]
    },
    {
      category: 'Support & Resources',
      icon: HelpCircle,
      pages: [
        { name: 'Help Center', path: '/help', description: 'Support and documentation' },
        { name: 'Security', path: '/security', description: 'Security information and policies' },
        { name: 'System Status', path: '/status', description: 'Current system status' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' }
      ]
    },
    {
      category: 'Legal & Policies',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Usage terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }
      ]
    },
    {
      category: 'Specialized Services',
      icon: Zap,
      pages: [
        { name: 'AI Content Generator', path: '/ai-content-generator', description: 'AI-powered content creation' },
        { name: 'AI Code Review', path: '/ai-code-review', description: 'Automated code analysis' },
        { name: 'Financial Solutions', path: '/financial-solutions', description: 'Financial technology services' },
        { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Industry 4.0 solutions' },
        { name: 'IoT Services', path: '/iot-services', description: 'Internet of Things solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: '5G network solutions' }
      ]
    },
    {
      category: 'Enterprise',
      icon: Briefcase,
      pages: [
        { name: 'Enterprise Plans', path: '/enterprise-plans', description: 'Enterprise service packages' },
        { name: 'Enterprise Demo', path: '/enterprise-demo', description: 'Request a demonstration' },
        { name: 'Enterprise Admin', path: '/enterprise-admin', description: 'Enterprise administration' },
        { name: 'Enterprise Billing', path: '/enterprise-billing', description: 'Billing and invoicing' }
      ]
    },
    {
      category: 'User Account',
      icon: Users,
      pages: [
        { name: 'Login', path: '/login', description: 'User authentication' },
        { name: 'Sign Up', path: '/signup', description: 'Create new account' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' },
        { name: 'Profile', path: '/profile', description: 'User profile management' },
        { name: 'Forgot Password', path: '/forgot-password', description: 'Password recovery' }
      ]
    },
    {
      category: 'Community & Forums',
      icon: MessageSquare,
      pages: [
        { name: 'Community', path: '/community', description: 'User community' },
        { name: 'Forum', path: '/forum', description: 'Discussion forums' },
        { name: 'Create Post', path: '/create-post', description: 'Create new forum post' },
        { name: 'Community Profile', path: '/community-profile', description: 'Community member profiles' }
      ]
    },
    {
      category: 'Projects & Portfolio',
      icon: Star,
      pages: [
        { name: 'Projects', path: '/projects', description: 'Project showcase' },
        { name: 'Portfolio Builder', path: '/portfolio-builder', description: 'Build your portfolio' },
        { name: 'Project Details', path: '/project-details', description: 'Detailed project information' },
        { name: 'Project Room', path: '/project-room', description: 'Project collaboration space' }
      ]
    },
    {
      category: 'Advanced Technologies',
      icon: Brain,
      pages: [
        { name: 'Emerging Tech', path: '/emerging-tech', description: 'Cutting-edge technologies' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-operating systems' },
        { name: 'Digital Twin', path: '/digital-twin', description: 'Digital twin technology' },
        { name: 'Edge Computing', path: '/edge-computing', description: 'Edge computing solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', path: '/contact', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { name: 'View Services', path: '/services', icon: Settings, color: 'from-zion-purple to-zion-cyan' },
    { name: 'Browse Marketplace', path: '/marketplace', icon: ShoppingCart, color: 'from-zion-blue to-zion-purple' },
    { name: 'Contact Support', path: '/help', icon: HelpCircle, color: 'from-zion-cyan to-zion-green' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Site Map
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Navigate through all the pages and sections of Zion Tech Group. Find what you're looking for quickly and easily.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {link.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Sitemap Structure */}
        <div className="space-y-12">
          {sitemapStructure.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.pages.map((page, pageIndex) => (
                  <Link
                    key={pageIndex}
                    to={page.path}
                    className="group bg-zinc-700/30 rounded-lg p-4 hover:bg-zinc-700/50 transition-colors border border-transparent hover:border-zion-cyan/30"
                  >
                    <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors mb-2">
                      {page.name}
                    </h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-3 text-zion-cyan text-sm font-medium group-hover:text-zion-cyan-light transition-colors">
                      Visit Page →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            If you can't find the page or information you need, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-zion-blue rounded-lg font-medium hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-zion-blue transition-colors"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Help Center
            </Link>
          </div>
        </div>

        {/* Search Functionality */}
        <div className="mt-16 bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Search Our Site</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for pages, services, or information..."
                className="w-full pl-12 pr-4 py-4 bg-zinc-700/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            </div>
            <p className="text-zion-slate-light text-center mt-4 text-sm">
              Use our search to quickly find specific pages or information across the entire site.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-zion-slate-light">
          <p className="text-sm">
            This sitemap is automatically generated and updated regularly. 
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

// Add the missing Search icon import
const Search = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
