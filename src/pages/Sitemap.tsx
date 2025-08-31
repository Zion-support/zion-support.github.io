import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Brain,
  Cloud,
  Shield,
  Target,
  Building2,
  Users,
  BookOpen,
  Rocket,
  Lock,
  Server,
  Database,
  Network,
  Activity,
  TrendingUp,
  Workflow,
  DollarSign,
  Atom,
  Satellite,
  Heart,
  Factory,
  ShoppingCart,
  Briefcase,
  Award,
  FileText,
  Video,
  GraduationCap,
  Lightbulb,
  HelpCircle,
  Handshake,
  PenTool,
  Monitor,
  Layers,
  Star,
  Sparkles,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Home,
  Settings,
  Zap,
  BarChart3,
  Smartphone,
  MessageCircle,
  Search,
  Eye,
  Globe
} from 'lucide-react';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", href: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", href: "/about", description: "Learn about our company and mission" },
        { name: "Contact", href: "/contact", description: "Get in touch with our team" },
        { name: "Pricing", href: "/pricing", description: "View our competitive pricing plans" },
        { name: "Support", href: "/support", description: "Get help and support resources" }
      ]
    },
    {
      title: "AI & Automation Services",
      icon: Brain,
      links: [
        { name: "AI Enterprise Intelligence Platform", href: "/services/ai-enterprise-intelligence-platform", description: "Advanced business intelligence powered by AI" },
        { name: "AI Autonomous Business Operations", href: "/services/ai-autonomous-business-operations-platform", description: "Automated business process management" },
        { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics-platform", description: "Deep customer insights and analytics" },
        { name: "AI Project Management Platform", href: "/services/ai-project-management-platform", description: "Intelligent project management solutions" },
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform", description: "Comprehensive business automation" },
        { name: "AI Data Analytics Platform", href: "/services/ai-data-analytics-platform", description: "Advanced data processing and insights" },
        { name: "AI Business Intelligence Dashboard", href: "/services/ai-business-intelligence-dashboard", description: "Real-time business intelligence" },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", description: "Automated workflow management" },
        { name: "AI Customer Support Automation", href: "/services/ai-customer-support-automation", description: "Automated customer service solutions" },
        { name: "AI Marketing Automation Platform", href: "/services/ai-marketing-automation-platform", description: "Intelligent marketing campaigns" },
        { name: "AI Customer Success Automation", href: "/services/ai-customer-success-automation", description: "Automated customer success management" }
      ]
    },
    {
      title: "Cloud & Infrastructure Services",
      icon: Cloud,
      links: [
        { name: "Quantum Edge Computing Solutions", href: "/services/quantum-edge-computing-solutions", description: "Next-generation quantum computing" },
        { name: "IT Infrastructure Management", href: "/services/it-infrastructure-management", description: "Comprehensive IT infrastructure solutions" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops", description: "Modern cloud development and operations" },
        { name: "Cybersecurity Solutions", href: "/services/cybersecurity", description: "Advanced security and protection" },
        { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform", description: "AI-powered security solutions" },
        { name: "Blockchain Enterprise Solutions", href: "/services/blockchain-enterprise-solutions", description: "Enterprise blockchain implementation" },
        { name: "Digital Transformation", href: "/services/digital-transformation", description: "Complete digital modernization" },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer", description: "Cloud cost optimization solutions" }
      ]
    },
    {
      title: "Specialized Solutions",
      icon: Target,
      links: [
        { name: "AI Healthcare Analytics Platform", href: "/services/ai-healthcare-analytics-platform", description: "Healthcare data insights and analytics" },
        { name: "AI Financial Trading Platform", href: "/services/ai-financial-trading-platform", description: "Intelligent financial trading systems" },
        { name: "AI Space Technology Platform", href: "/services/ai-space-technology-platform", description: "Space technology and satellite solutions" },
        { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization-platform", description: "Supply chain efficiency optimization" },
        { name: "AI Legal Document Automation", href: "/services/ai-legal-document-automation-platform", description: "Automated legal document processing" },
        { name: "AI HR Platform", href: "/services/ai-hr-platform", description: "Human resources management solutions" },
        { name: "Micro SaaS Solutions", href: "/services/micro-saas-solutions-comprehensive", description: "Specialized micro SaaS applications" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", description: "AI-powered sales assistance" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", description: "Automated compliance management" },
        { name: "AI Predictive Maintenance", href: "/services/ai-predictive-maintenance", description: "Predictive maintenance solutions" },
        { name: "AI Financial Risk Management", href: "/services/ai-financial-risk-management-platform", description: "Financial risk assessment and management" },
        { name: "AI Autonomous Logistics Platform", href: "/services/ai-autonomous-logistics-platform", description: "Automated logistics and shipping" },
        { name: "AI Powered SEO", href: "/services/ai-powered-seo", description: "AI-driven SEO optimization" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building2,
      links: [
        { name: "Healthcare Solutions", href: "/solutions/healthcare", description: "Healthcare industry technology solutions" },
        { name: "Financial Services", href: "/solutions/financial", description: "Financial sector digital solutions" },
        { name: "Manufacturing Solutions", href: "/solutions/manufacturing", description: "Manufacturing industry automation" },
        { name: "Retail & E-commerce", href: "/solutions/retail", description: "Retail and e-commerce platforms" },
        { name: "Government Solutions", href: "/solutions/government", description: "Government and public sector solutions" },
        { name: "All Solutions", href: "/solutions", description: "View all industry solutions" }
      ]
    },
    {
      title: "Technology Solutions",
      icon: Rocket,
      links: [
        { name: "Quantum Edge Computing", href: "/solutions/quantum-edge-computing", description: "Quantum computing implementations" },
        { name: "AI Autonomous Business", href: "/solutions/ai-autonomous-business", description: "Autonomous business operations" },
        { name: "Blockchain & Web3", href: "/solutions/blockchain-web3", description: "Blockchain and Web3 technologies" },
        { name: "IoT Edge Computing", href: "/solutions/iot-edge-computing", description: "Internet of Things solutions" },
        { name: "Space Technology", href: "/solutions/space-tech", description: "Space and satellite technologies" }
      ]
    },
    {
      title: "Company Information",
      icon: Users,
      links: [
        { name: "About Us", href: "/about", description: "Our company story and mission" },
        { name: "Leadership Team", href: "/leadership", description: "Meet our executive leadership" },
        { name: "Careers", href: "/careers", description: "Join our growing team" },
        { name: "News & Updates", href: "/news", description: "Latest company news" },
        { name: "Events", href: "/events", description: "Upcoming events and webinars" },
        { name: "Partners", href: "/partners", description: "Our strategic partnerships" }
      ]
    },
    {
      title: "Resources & Learning",
      icon: BookOpen,
      links: [
        { name: "Blog", href: "/blog", description: "Technology insights and articles" },
        { name: "Case Studies", href: "/case-studies", description: "Customer success stories" },
        { name: "White Papers", href: "/white-papers", description: "In-depth technical papers" },
        { name: "Documentation", href: "/docs", description: "Technical documentation" },
        { name: "Research & Development", href: "/research-development", description: "Our R&D initiatives" },
        { name: "Webinars", href: "/webinars", description: "Educational webinars" },
        { name: "Training", href: "/training", description: "Training and certification" },
        { name: "Help Center", href: "/help", description: "Support and help resources" }
      ]
    },
    {
      title: "Innovation Hub",
      icon: Star,
      links: [
        { name: "Innovation Services Hub", href: "/innovative-services-hub", description: "Central hub for all innovation services" },
        { name: "Innovation Showcase 2026", href: "/innovative-services-showcase-2026", description: "Future technology showcase" },
        { name: "Innovation Showcase 2032", href: "/innovative-services-showcase-2032", description: "Advanced future technologies" },
        { name: "Comprehensive Services 2025", href: "/comprehensive-services-showcase-2025", description: "Current comprehensive services" },
        { name: "Pricing Guide 2032", href: "/comprehensive-pricing-guide-2032", description: "Future pricing structure" },
        { name: "All Services", href: "/services", description: "Complete services overview" }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: Shield,
      links: [
        { name: "Privacy Policy", href: "/privacy", description: "How we protect your privacy" },
        { name: "Terms of Service", href: "/terms", description: "Service terms and conditions" },
        { name: "Cookie Policy", href: "/cookies", description: "Cookie usage and preferences" },
        { name: "Accessibility", href: "/accessibility", description: "Accessibility commitment" },
        { name: "Security", href: "/security", description: "Security policies and practices" },
        { name: "Compliance", href: "/compliance", description: "Regulatory compliance information" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of all pages and services offered by Zion Tech Group. Find all our AI solutions, cloud services, and resources in one organized view."
        keywords="sitemap, navigation, AI services, cloud solutions, technology services, Zion Tech Group"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Website Sitemap
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Navigate through all our pages, services, and resources. Find everything you need to know about 
            Zion Tech Group's comprehensive technology solutions and offerings.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-cyan-400">50+</p>
                <p className="text-sm text-slate-400">AI Services</p>
              </div>
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-purple-400">15+</p>
                <p className="text-sm text-slate-400">Cloud Solutions</p>
              </div>
              <Cloud className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-400">10+</p>
                <p className="text-sm text-slate-400">Industry Solutions</p>
              </div>
              <Target className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-yellow-400">25+</p>
                <p className="text-sm text-slate-400">Resources</p>
              </div>
              <BookOpen className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sitemapSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div 
                key={section.title}
                className="bg-slate-800/30 rounded-xl p-8 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block p-4 bg-slate-900/30 rounded-lg border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-900/50 transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-sm text-slate-400 mt-1 line-clamp-2">
                            {link.description}
                          </p>
                        </div>
                        <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Globe className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help you navigate our extensive range of services and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/help"
                className="inline-flex items-center px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600 hover:border-cyan-500"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Help Center
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600 hover:border-cyan-500"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Services
              </Link>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;