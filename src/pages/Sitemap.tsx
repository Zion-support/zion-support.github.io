import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Zap, 
  Shield, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Globe, 
  Cpu, 
  Brain,
  ArrowRight,
  Star,
  Building,
  Code,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Search,
  PenTool,
  Workflow,
  Atom,
  Truck,
  Heart,
  Lock,
  Award,
  Phone,
  Mail,
  MapPin,
  ShoppingCart
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Sitemap() {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', href: '/', description: 'Main homepage' },
        { name: 'Home 2026', href: '/home2026', description: '2026 vision and services' },
        { name: 'About Us', href: '/about', description: 'Company information and mission' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
        { name: 'Leadership', href: '/leadership', description: 'Meet our leadership team' },
        { name: 'Team', href: '/team', description: 'Our team members' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership opportunities' },
        { name: 'News', href: '/news', description: 'Latest company news' },
        { name: 'Events', href: '/events', description: 'Upcoming events' },
        { name: 'Blog', href: '/blog', description: 'Industry insights and articles' }
      ]
    },
    {
      title: 'Services Overview',
      icon: Zap,
      links: [
        { name: 'Services', href: '/services', description: 'All our services' },
        { name: '2026 Services', href: '/services2026', description: 'Revolutionary 2026 services', featured: true },
        { name: 'AI Services', href: '/ai-services', description: 'AI-focused services' },
        { name: 'IT Services', href: '/it-services', description: 'IT infrastructure and consulting' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Micro SaaS solutions' },
        { name: 'Solutions', href: '/solutions', description: 'Industry solutions' },
        { name: 'AI Solutions', href: '/ai-solutions', description: 'Comprehensive AI solutions' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'Request Quote', href: '/request-quote', description: 'Get a custom quote' },
        { name: 'Pricing', href: '/pricing', description: 'Service pricing' }
      ]
    },
    {
      title: 'AI & Technology Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered analytics' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', description: 'Process automation' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator', description: 'AI content creation' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support', description: 'Intelligent support' },
        { name: 'AI Data Analytics', href: '/services/ai-data-analytics', description: 'Data insights' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', description: 'Marketing optimization' },
        { name: 'AI Project Manager', href: '/services/ai-project-manager', description: 'Project management AI' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Sales assistance' },
        { name: 'AI HR Talent Platform', href: '/services/ai-hr-talent-platform', description: 'HR solutions' }
      ]
    },
    {
      title: 'Specialized Services',
      icon: Rocket,
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', description: 'Quantum solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'IoT and edge computing' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Digital twin platform' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Cloud and DevOps' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'IT infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' },
        { name: 'Sustainability', href: '/services/sustainability', description: 'Green IT solutions' },
        { name: 'Space Tech', href: '/services/space-tech', description: 'Space technology' },
        { name: 'Blockchain Services', href: '/services/blockchain-services', description: 'Blockchain solutions' },
        { name: '5G Solutions', href: '/services/five-g-enterprise-solutions', description: '5G enterprise solutions' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Building,
      links: [
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Compliance automation' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Email automation' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', description: 'Feedback collection' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'Content creation' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' },
        { name: 'Returns Management', href: '/services/returns-management', description: 'RMA automation' },
        { name: 'Email Sequencer', href: '/services/email-sequencer', description: 'Email sequences' },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', description: 'Audio transcription' },
        { name: 'Micro CRM', href: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Website Analytics', href: '/services/website-analytics', description: 'Privacy-first analytics' }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', href: '/help', description: 'Help and support' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
        { name: 'Developers', href: '/developers', description: 'Developer portal' },
        { name: 'API Reference', href: '/developers', description: 'API documentation' },
        { name: 'Training', href: '/training', description: 'Training programs' },
        { name: 'Support', href: '/support', description: 'Technical support' },
        { name: 'Status', href: '/status', description: 'Service status' },
        { name: 'White Papers', href: '/white-papers', description: 'Research papers' },
        { name: 'Webinars', href: '/webinars', description: 'Educational webinars' }
      ]
    },
    {
      title: 'Marketplace & Solutions',
      icon: ShoppingCart,
      links: [
        { name: 'Marketplace', href: '/marketplace', description: 'Product marketplace' },
        { name: 'Marketplace Products', href: '/marketplace/products', description: 'Available products' },
        { name: 'Marketplace Talent', href: '/marketplace/talent', description: 'Talent solutions' },
        { name: 'Marketplace Equipment', href: '/marketplace/equipment', description: 'Equipment services' },
        { name: 'Marketplace Services', href: '/marketplace/services', description: 'Service marketplace' },
        { name: 'Talent Solutions', href: '/talent', description: 'Talent acquisition' },
        { name: 'Equipment Services', href: '/equipment', description: 'Equipment management' },
        { name: 'Green IT', href: '/green-it', description: 'Sustainable technology' },
        { name: 'Research & Development', href: '/research-development', description: 'R&D initiatives' }
      ]
    },
    {
      title: 'Legal & Privacy',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', href: '/privacy', description: 'Privacy information' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
        { name: 'Cookies Policy', href: '/cookies', description: 'Cookie usage' },
        { name: 'Security', href: '/security', description: 'Security measures' },
        { name: 'Accessibility', href: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Map</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Navigate our comprehensive website structure. Find all pages, services, and resources 
              organized by category for easy discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.href}
                      className="flex items-start justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </span>
                          {link.featured && (
                            <Star className="w-4 h-4 text-yellow-400" />
                          )}
                        </div>
                        <p className="text-slate-400 text-sm mt-1">{link.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-3" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-xl text-slate-300">
                Get in touch with us for any questions or assistance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-slate-300 text-sm">
                  {contactInfo.address}
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Quick Navigation</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/contact"
                className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Get Started</h3>
                <p className="text-slate-300 text-sm">Contact us to begin your journey</p>
              </Link>

              <Link
                to="/services"
                className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105"
              >
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Our Services</h3>
                <p className="text-slate-300 text-sm">Explore our comprehensive solutions</p>
              </Link>

              <Link
                to="/about"
                className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105"
              >
                <Building className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">About Us</h3>
                <p className="text-slate-300 text-sm">Learn about our company and mission</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
