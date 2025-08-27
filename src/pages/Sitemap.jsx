import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Settings, 
  Globe,
  FileText,
  Shield,
  HelpCircle,
  Building,
  Briefcase,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
export default function Sitemap() {
  const sitemapStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' }
      ]
    },
    {
      title: 'Services',
      icon: Settings,
      pages: [
        { name: 'All Services', path: '/services', description: 'Overview of our services' },
        { name: 'Comprehensive Services', path: '/comprehensive-services', description: 'Detailed service catalog' },
        { name: 'Pricing', path: '/comprehensive-pricing', description: 'Service pricing information' }
      ]
    },
    {
      title: 'Marketplace',
      icon: Globe,
      pages: [
        { name: 'Marketplace', path: '/marketplace', description: 'AI and tech marketplace' },
        { name: 'Services', path: '/services', description: 'Browse available services' },
        { name: 'Talent', path: '/talent', description: 'Find skilled professionals' },
        { name: 'Equipment', path: '/equipment', description: 'Technology equipment listings' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' }
      ]
    },
    {
      title: 'Company',
      icon: Building,
      pages: [
        { name: 'Partners', path: '/partners', description: 'Partnership opportunities' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'Events', path: '/events', description: 'Upcoming events and webinars' }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      pages: [
        { name: 'Help Center', path: '/help', description: 'Support documentation' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: Shield,
      pages: [
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection information' },
        { name: 'Security', path: '/security', description: 'Security practices' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }
      ]
    },
    {
      title: 'User Account',
      icon: Users,
      pages: [
        { name: 'Login', path: '/login', description: 'User authentication' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' },
        { name: 'Profile', path: '/profile', description: 'User profile management' },
        { name: 'Settings', path: '/settings', description: 'Account settings' }
      ]
    }
  ];
  const quickLinks = [
    { name: 'Get Started', path: '/contact', description: 'Start your journey with Zion Tech Group' },
    { name: 'View Services', path: '/comprehensive-services', description: 'Explore our AI and technology solutions' },
    { name: 'Join Marketplace', path: '/marketplace', description: 'Connect with talent and opportunities' },
    { name: 'Contact Sales', path: '/contact', description: 'Speak with our sales team' },
    { name: 'Get Support', path: '/help', description: 'Find help and resources' },
    { name: 'View Pricing', path: '/comprehensive-pricing', description: 'Understand our pricing structure' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Navigate our website easily with this comprehensive overview of all pages and sections
          </p>
        </div>
      </section>
      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {link.name}
                </h3>
                <p className="text-zion-slate-light text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Sitemap Structure */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Complete Site Structure
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {sitemapStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-zion-blue-dark/50 rounded-lg border border-zion-cyan/20 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <section.icon className="w-6 h-6 text-zion-cyan" />
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                <div className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="border-l-2 border-zion-cyan/30 pl-4">
                      <Link
                        to={page.path}
                        className="block hover:bg-zion-cyan/10 p-2 rounded transition-colors"
                      >
                        <h4 className="text-white font-medium hover:text-zion-cyan transition-colors">
                          {page.name}
                        </h4>
                        <p className="text-zion-slate-light text-sm">{page.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 text-center">
              <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 text-center">
              <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a 
                href="tel:+13024640950"
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                +1 302 464 0950
              </a>
            </div>
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 text-center">
              <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Resources */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 text-center">
              <FileText className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-zion-slate-light text-sm mb-4">Technical documentation and guides</p>
              <Link to="/help" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                View Docs →
              </Link>
            </div>
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 text-center">
              <Briefcase className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">API Reference</h3>
              <p className="text-zion-slate-light text-sm mb-4">Developer API documentation</p>
              <Link to="/api" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                API Docs →
              </Link>
            </div>
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 text-center">
              <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-zion-slate-light text-sm mb-4">Join our community forum</p>
              <Link to="/community" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                Join Forum →
              </Link>
            </div>
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 text-center">
              <Globe className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Status Page</h3>
              <p className="text-zion-slate-light text-sm mb-4">System status and updates</p>
              <Link to="/status" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                Check Status →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Finding Something?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you navigate our website and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Contact Us
              </button>
            </Link>
            <Link to="/help">
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Get Help
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
