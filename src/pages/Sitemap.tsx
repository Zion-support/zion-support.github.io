import React from 'react';
import { Link } from 'react-router-dom';
import { Sitemap, Home, Users, Settings, FileText, Shield, Mail, HelpCircle, Building, Briefcase, Brain, Cloud, Rocket, Heart, Globe, Lock, Cpu, Zap, Star, TrendingUp, MessageCircle, DollarSign, BookOpen, Phone, MapPin } from 'lucide-react';

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'Company information' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership information' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'Help Center', path: '/help', description: 'Support and documentation' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing information' },
        { name: 'Marketplace', path: '/marketplace', description: 'Product and service marketplace' },
        { name: 'Revolutionary Services 2030', path: '/revolutionary-services-2030', description: 'Future technology solutions' },
      ]
    },
    {
      title: "Core Services",
      icon: Settings,
      links: [
        { name: "AI Services", path: "/ai-services", description: "Comprehensive AI solutions" },
        { name: "IT Services", path: "/it-services", description: "Enterprise IT solutions" },
        { name: "Micro SaaS", path: "/micro-saas", description: "Scalable software solutions" },
        { name: "Cloud & DevOps", path: "/services/cloud-devops", description: "Infrastructure & automation" },
        { name: "Digital Twin", path: "/services/digital-twin", description: "Simulation & monitoring" },
        { name: "Data Analytics", path: "/services/data-analytics", description: "Business intelligence" },
        { name: "IoT & Edge", path: "/services/iot-edge", description: "Connected ecosystems" },
        { name: "Blockchain Solutions", path: "/services/blockchain-enterprise-solutions", description: "DeFi & smart contracts" }
      ]
    },
    {
      title: "Specialized Services",
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', path: '/services/ai-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', path: '/services/interview-assessment', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project optimization' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Supply chain AI optimization' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'AI Legal Document Analysis', path: '/services/ai-legal-document-analysis', description: 'Legal document processing AI' },
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Advanced network security' },
      ]
    },
    {
      title: "Advanced Solutions",
      icon: Rocket,
      links: [
        { name: "Quantum AI Platform", path: "/services/quantum-ai-platform", description: "Next-gen quantum computing" },
        { name: "AI Cybersecurity Suite", path: "/services/ai-cybersecurity-suite", description: "Advanced security solutions" },
        { name: "AI Healthcare Analytics", path: "/services/ai-healthcare-analytics", description: "Healthcare data insights" },
        { name: "Zero Trust Architecture", path: "/services/zero-trust-network-architecture", description: "Advanced security framework" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Enterprise infrastructure" },
        { name: "Space Technology", path: "/services/space-tech", description: "Aerospace innovation" },
        { name: "Innovative Services 2025", path: "/innovative-services-showcase-2025", description: "Latest cutting-edge solutions" },
        { name: "Revolutionary Services 2030", path: "/revolutionary-services-showcase-2030", description: "Future-ready services" }
      ]
    },
    {
      title: "Pricing & Solutions",
      icon: DollarSign,
      links: [
        { name: "Pricing Guide", path: "/pricing-guide", description: "Comprehensive pricing information" },
        { name: "Pricing 2027", path: "/pricing", description: "Current year pricing strategies" },
        { name: "Pricing 2030", path: "/pricing-2030", description: "Advanced pricing strategies" },
        { name: "Request Quote", path: "/request-quote", description: "Get custom pricing" },
        { name: "Marketplace", path: "/marketplace", description: "Explore our solutions" }
      ]
    },
    {
      title: "Support & Resources",
      icon: HelpCircle,
      links: [
        { name: "Help Center", path: "/help", description: "Find answers to common questions" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Support Portal", path: "/support", description: "Technical support and assistance" },
        { name: "Documentation", path: "/docs", description: "Technical guides and API references" },
        { name: "Training", path: "/training", description: "Learning resources and courses" },
        { name: "Webinars", path: "/webinars", description: "Educational sessions and workshops" },
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories and projects" }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: Shield,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "How we protect your data" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility statement" },
        { name: "Security", path: "/security", description: "Security practices" },
        { name: "Compliance", path: "/compliance", description: "Regulatory compliance" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", path: "/contact", description: "Start your project with us", icon: MessageCircle },
    { name: "Request Quote", path: "/request-quote", description: "Get a custom quote", icon: DollarSign },
    { name: "Services Overview", path: "/services-overview", description: "Explore all services", icon: Settings },
    { name: "AI Solutions", path: "/ai-services", description: "Discover AI capabilities", icon: Brain },
    { name: "Pricing Guide", path: "/pricing-guide", description: "View pricing options", icon: DollarSign },
    { name: "Support Center", path: "/help", description: "Get help and support", icon: HelpCircle },
    { name: "Documentation", path: "/docs", description: "Technical resources", icon: BookOpen },
    { name: "Contact Sales", path: "/contact", description: "Talk to our experts", icon: Phone }
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: Mail, text: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: MapPin, text: "364 E Main St STE 1008, Middletown DE 19709", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of all pages, services, and resources available on Zion Tech Group website."
        keywords="sitemap, navigation, pages, services, Zion Tech Group"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all our pages, services, and resources. Find exactly what you're looking for with our comprehensive site structure.
          </p>
        </div>

        {/* Main Pages */}
        {renderSection('Main Pages', mainPages, Globe)}

        {/* AI Services */}
        {renderSection('AI Services', aiServices, Brain)}

        {/* Core Services */}
        {renderSection('Core Services', coreServices, Zap)}

        {/* Solutions */}
        {renderSection('Industry Solutions', solutions, Target)}

        {/* Resources */}
        {renderSection('Resources & Learning', resources, BookOpen)}

        {/* Special Pages */}
        {renderSection('Special Pages', specialPages, Rocket)}

        {/* Quick Navigation */}
        <div className="mt-16 p-8 bg-slate-800/50 rounded-xl border border-slate-700/50">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/"
              className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-200 group"
            >
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm text-white">Home</span>
            </Link>
            <Link
              to="/services"
              className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-200 group"
            >
              <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm text-white">Services</span>
            </Link>
            <Link
              to="/contact"
              className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-200 group"
            >
              <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm text-white">Contact</span>
            </Link>
            <Link
              to="/about"
              className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-200 group"
            >
              <Building className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm text-white">About</span>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-gray-400">
          <p className="text-sm">
            Last updated: {new Date().toLocaleDateString()} | 
            Total pages: {mainPages.length + aiServices.length + coreServices.length + solutions.length + resources.length + specialPages.length}
          </p>
          <p className="text-xs mt-2">
            Can't find what you're looking for? <Link to="/contact" className="text-cyan-400 hover:text-cyan-300">Contact us</Link> for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
