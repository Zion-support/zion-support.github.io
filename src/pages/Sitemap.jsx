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
  Leaf,
  Mail,
  Phone,
  MapPin
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
        { name: 'Comprehensive Services', path: '/comprehensive-services', description: 'Full service overview' },
        { name: 'AI & Analytics', path: '/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security and protection services' },
        { name: 'Cloud Solutions', path: '/cloud-solutions', description: 'Cloud infrastructure and services' },
        { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing solutions' },
        { name: 'Blockchain & Web3', path: '/blockchain', description: 'Blockchain and decentralized solutions' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'On-site IT support and services' },
        { name: '2029 Services Showcase', path: '/services/showcase-2029', description: 'Advanced 2029 services showcase' }
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
        { name: 'Status Page', path: '/status', description: 'System status and uptime' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation' }
      ]
    },
    {
      category: 'Legal & Policy',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Map</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Navigate through our comprehensive technology services, marketplace, and company information
          </p>
        </div>

        {/* Sitemap Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {sitemapStructure.map((section, index) => (
            <div key={index} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-3">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">{section.category}</h2>
              </div>
              
              <div className="space-y-3">
                {section.pages.map((page, pageIndex) => (
                  <div key={pageIndex} className="group">
                    <Link 
                      to={page.path}
                      className="block text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                    >
                      {page.name}
                    </Link>
                    <p className="text-zion-slate-light text-sm group-hover:text-zion-slate-light/80 transition-colors">
                      {page.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-zion-slate-light">
              Get in touch with Zion Tech Group for all your technology needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-cyan">{contactInfo.phone}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-cyan">{contactInfo.email}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-cyan text-sm">{contactInfo.address}</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
            >
              <Globe className="w-4 h-4 mr-2" />
              Visit our website
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Links</h2>
            <p className="text-zion-slate-light">
              Access our most popular services and resources
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              to="/services"
              className="p-4 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-center hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <Settings className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <span className="text-white font-medium">Services</span>
            </Link>
            
            <Link 
              to="/marketplace"
              className="p-4 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-center hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <span className="text-white font-medium">Marketplace</span>
            </Link>
            
            <Link 
              to="/contact"
              className="p-4 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-center hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <span className="text-white font-medium">Contact</span>
            </Link>
            
            <Link 
              to="/services/showcase-2029"
              className="p-4 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-center hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <span className="text-white font-medium">2029 Showcase</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
