import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  Building,
  Users,
  Heart,
  Rocket,
  BarChart3,
  Target,
  Lock,
  Code,
  Clock,
  Eye,
  DollarSign,
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Facebook,
  Instagram,
  Briefcase
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our company" },
        { name: "Our Mission", path: "/mission", description: "Our vision and mission" },
        { name: "Team", path: "/team", description: "Meet our leadership team" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Careers", path: "/careers", description: "Join our team" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "News", path: "/news", description: "Latest company news" },
        { name: "Blog", path: "/blog", description: "Industry insights and updates" }
      ]
    },
    {
      title: "AI & Autonomous Systems",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      links: [
        { name: "AI Services", path: "/ai-services", description: "Comprehensive AI solutions" },
        { name: "AI Solutions", path: "/ai-solutions", description: "AI-powered business solutions" },
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Advanced autonomous AI systems" },
        { name: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "AI-powered research automation" },
        { name: "AI Business Solutions", path: "/ai-business-solutions", description: "AI for business transformation" },
        { name: "AI Matcher", path: "/ai-matcher", description: "AI-powered service matching" },
        { name: "AI Agent Orchestrator", path: "/ai-agent-orchestrator", description: "AI agent management platform" }
      ]
    },
    {
      title: "Quantum Technology",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      links: [
        { name: "Quantum Technology", path: "/services/quantum-technology", description: "Quantum computing solutions" },
        { name: "Quantum Neural Network Platform", path: "/quantum-neural-network-platform", description: "Quantum-powered neural networks" },
        { name: "Quantum Cloud Infrastructure", path: "/quantum-cloud-infrastructure", description: "Quantum cloud services" },
        { name: "Quantum Financial Trading", path: "/quantum-financial-trading", description: "Quantum trading algorithms" },
        { name: "Quantum Services", path: "/quantum-services", description: "Comprehensive quantum solutions" }
      ]
    },
    {
      title: "Business Operations",
      icon: Building,
      color: "from-green-500 to-emerald-500",
      links: [
        { name: "Autonomous Business Operations Platform", path: "/autonomous-business-operations-platform", description: "Self-operating business systems" },
        { name: "AI-Powered IT Asset Management", path: "/ai-powered-it-asset-management", description: "Intelligent IT asset management" },
        { name: "Enterprise Solutions", path: "/enterprise-solutions", description: "Enterprise-grade solutions" },
        { name: "Digital Transformation", path: "/digital-transformation", description: "Business transformation services" },
        { name: "Business Intelligence", path: "/services/ai-business-intelligence", description: "Advanced business analytics" }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      links: [
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Complete security solutions" },
        { name: "SOC2 Compliance Automation", path: "/soc2-compliance-automation", description: "Automated compliance management" },
        { name: "Advanced Cybersecurity Suite", path: "/advanced-cybersecurity-suite", description: "Comprehensive security platform" },
        { name: "AI-Powered Enterprise Security", path: "/ai-powered-enterprise-security", description: "AI-enhanced security" },
        { name: "Security Assessment", path: "/services/security-assessment", description: "Security audit and testing" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-blue-500 to-indigo-500",
      links: [
        { name: "Cloud DevOps", path: "/cloud-devops", description: "Cloud development and operations" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Complete IT infrastructure solutions" },
        { name: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "High-speed 5G connectivity" },
        { name: "Specialized IT Infrastructure", path: "/services/specialized-it-infrastructure", description: "Custom infrastructure solutions" },
        { name: "Network Infrastructure", path: "/services/network-infrastructure", description: "Robust network solutions" },
        { name: "Managed IT Services", path: "/services/managed-it-services", description: "24/7 IT support" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      icon: Code,
      color: "from-orange-500 to-yellow-500",
      links: [
        { name: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Scalable software solutions" },
        { name: "Innovative Micro SAAS Services", path: "/innovative-micro-saas-services", description: "Cutting-edge SAAS platforms" },
        { name: "Micro SAAS", path: "/micro-saas", description: "Micro software-as-a-service" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building,
      color: "from-purple-500 to-violet-500",
      links: [
        { name: "Industry Solutions", path: "/services/industry-solutions", description: "Industry-specific solutions" },
        { name: "Enterprise Solutions", path: "/solutions/enterprise", description: "Enterprise-grade solutions" },
        { name: "Healthcare Solutions", path: "/solutions/healthcare", description: "Healthcare technology solutions" },
        { name: "Financial Solutions", path: "/solutions/financial", description: "Fintech solutions" },
        { name: "Manufacturing Solutions", path: "/solutions/manufacturing", description: "Smart manufacturing" },
        { name: "Retail Solutions", path: "/solutions/retail", description: "Digital retail transformation" },
        { name: "Government Solutions", path: "/solutions/government", description: "Public sector technology" }
      ]
    },
    {
      title: "Services & Solutions",
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
      links: [
        { name: "Services", path: "/services", description: "All our services" },
        { name: "Services Overview", path: "/services-overview", description: "Comprehensive service overview" },
        { name: "Services Showcase", path: "/services-showcase", description: "Featured services" },
        { name: "New Services", path: "/new-services", description: "Latest technology services" },
        { name: "Comprehensive Services Overview", path: "/comprehensive-services-overview", description: "Complete service catalog" },
        { name: "Comprehensive Innovative Services", path: "/comprehensive-innovative-services", description: "Innovative service offerings" },
        { name: "Innovative New Services", path: "/services/innovative-new-services", description: "Cutting-edge services" },
        { name: "Innovative Services", path: "/innovative-services", description: "Innovative technology solutions" },
        { name: "Innovative Services Showcase", path: "/innovative-services-showcase", description: "Showcase of innovations" }
      ]
    },
    {
      title: "Resources & Support",
      icon: Users,
      color: "from-green-500 to-blue-500",
      links: [
        { name: "Case Studies", path: "/case-studies", description: "Success stories and case studies" },
        { name: "Help Center", path: "/help", description: "Support and documentation" },
        { name: "White Papers", path: "/white-papers", description: "Industry research and insights" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Emerging Tech", path: "/emerging-tech", description: "Latest technology trends" },
        { name: "Research & Development", path: "/research-development", description: "R&D initiatives" },
        { name: "Events", path: "/events", description: "Upcoming events" },
        { name: "Testimonials", path: "/testimonials", description: "Client feedback" }
      ]
    },
    {
      title: "Talent & Community",
      icon: Users,
      color: "from-pink-500 to-red-500",
      links: [
        { name: "Talent Directory", path: "/talent-directory", description: "Find top talent" },
        { name: "Talents", path: "/talents", description: "Talent showcase" },
        { name: "Community", path: "/community", description: "Join our community" },
        { name: "Marketplace", path: "/marketplace", description: "Technology marketplace" }
      ]
    },
    {
      title: "Company Information",
      icon: Building,
      color: "from-gray-500 to-slate-500",
      links: [
        { name: "Pricing", path: "/pricing", description: "Service pricing and plans" },
        { name: "Leadership", path: "/leadership", description: "Executive leadership team" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Privacy Policy", path: "/privacy", description: "Privacy and data protection" },
        { name: "Cookies Policy", path: "/cookies", description: "Cookie usage policy" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility statement" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Complete navigation guide to all pages and services offered by Zion Tech Group
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Last updated: {currentYear} | Total sections: {sitemapSections.length}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sitemapSections.map((section, index) => (
              <a
                key={index}
                href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 text-center group"
              >
                <section.icon className="w-6 h-6 mx-auto mb-2 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                  {section.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-16">
          {sitemapSections.map((section, index) => (
            <section
              key={index}
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-20"
            >
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color} mr-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.path}
                    className="group p-6 bg-gray-800/30 hover:bg-gray-700/40 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200 mb-2">
                      {link.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                      <span className="text-sm font-medium">Visit Page</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact & Social Section */}
        <section className="mt-20 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                    <contact.icon className="w-5 h-5 text-cyan-400" />
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Follow Us</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-gray-800/30 hover:bg-gray-700/40 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 group"
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                    <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <div className="mt-16 text-center">
          <a
            href="#top"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </div>
  );
}