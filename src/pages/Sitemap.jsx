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
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      title: 'Services',
      icon: Settings,
      pages: [
        { name: 'All Services', path: '/services', description: 'Overview of our services' },
        { name: 'AI Solutions', path: '/services/ai', description: 'Artificial Intelligence services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and threat protection' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Cloud infrastructure and automation' },
        { name: 'IoT Solutions', path: '/services/iot', description: 'Internet of Things solutions' },
        { name: 'Quantum Computing', path: '/services/quantum', description: 'Next-generation computing' },
        { name: 'Blockchain & Web3', path: '/services/blockchain', description: 'Distributed ledger technology' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Business process optimization' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Network and system management' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and news' },
        { name: 'News', path: '/news', description: 'Company and industry news' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation hub' },
        { name: 'Help Center', path: '/help-center', description: 'Self-service support' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      title: 'Company',
      icon: Building,
      pages: [
        { name: 'Our Team', path: '/team', description: 'Meet our experts' },
        { name: 'Mission', path: '/mission', description: 'Our purpose and values' },
        { name: 'Solutions', path: '/solutions', description: 'Industry solutions' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' }
      ]
    },
    {
      title: 'Support',
      icon: HelpCircle,
      pages: [
        { name: 'Contact Support', path: '/contact', description: 'Get technical support' },
        { name: 'Status Page', path: '/status', description: 'Service status and updates' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', path: '/api', description: 'API documentation' }
      ]
    },
    {
      title: 'Legal',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@ziontechgroup.com',
      href: 'mailto:contact@ziontechgroup.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Tech Street, Innovation City, IC 12345',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Map</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Navigate through all our pages and services to find exactly what you're looking for.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapStructure.map((section, sectionIndex) => (
              <div
                key={section.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link
                        to={page.path}
                        className="block p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                      >
                        <div className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                          {page.name}
                        </div>
                        <div className="text-sm text-zion-slate-light mt-1">
                          {page.description}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-zion-slate-light">
              Have questions? We're here to help you navigate and find the right solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                {contact.href !== '#' ? (
                  <a
                    href={contact.href}
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-zion-slate-light">{contact.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Explore our services and discover how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
