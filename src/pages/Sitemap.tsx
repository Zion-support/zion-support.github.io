import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Building, 
  BookOpen, 
  MessageCircle, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart, 
  BarChart3, 
  Code, 
  Globe, 
  ArrowRight, 
  Star, 
  FileText, 
  Calendar, 
  HelpCircle, 
  Settings, 
  Target, 
  TrendingUp, 
  Heart, 
  Award, 
  Rocket, 
  Atom, 
  Lock, 
  Database, 
  Network, 
  Smartphone, 
  Wifi, 
  Leaf, 
  Factory, 
  City, 
  Car, 
  Building2, 
  DollarSign,
  UserCheck
} from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: any;
  color: string;
  pages: SitemapPage[];
}

interface SitemapPage {
  name: string;
  href: string;
  description: string;
  featured?: boolean;
}

export default function Sitemap() {
  const sitemapSections: SitemapSection[] = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      pages: [
        { name: 'Home', href: '/', description: 'Main landing page with company overview and services', featured: true },
        { name: 'About', href: '/about', description: 'Company information, mission, and team details', featured: true },
        { name: 'Contact', href: '/contact', description: 'Contact information and inquiry forms', featured: true },
        { name: 'Pricing', href: '/pricing', description: 'Service pricing and package information', featured: true },
        { name: 'Careers', href: '/careers', description: 'Job opportunities and career information', featured: false },
        { name: 'Partners', href: '/partners', description: 'Partnership opportunities and programs', featured: false }
      ]
    },
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      pages: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered business analytics and insights', featured: true },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'AI-generated content and copywriting', featured: true },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI-powered security and threat detection', featured: true },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Financial data analysis and insights', featured: true },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data analysis and insights', featured: true },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'Human resources automation and analytics', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', description: 'Intelligent marketing campaigns', featured: true },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain AI and optimization', featured: true },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'AI-powered workflow automation', featured: true },
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', description: 'Research automation and insights', featured: true },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', description: 'Comprehensive content marketing platform', featured: true },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration platform', featured: true }
      ]
    },
    {
      title: 'Cloud & Infrastructure Services',
      icon: Cloud,
      color: 'from-green-500 to-blue-500',
      pages: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Cloud infrastructure and DevOps services', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure management', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'Virtual replicas and simulation', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence and data insights', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Smart device networks and edge computing', featured: true },
        { name: 'AI DevOps Automation Platform', href: '/services/ai-devops-automation-platform', description: 'AI-powered DevOps automation', featured: true }
      ]
    },
    {
      title: 'Security & Compliance Services',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      pages: [
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Modern security architecture', featured: true },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', description: 'Web security hardening', featured: true },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', description: 'GDPR/CCPA compliance portal', featured: true },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Advanced AI security solutions', featured: true },
        { name: 'AI Code Review Security Scanner', href: '/services/ai-code-review-security-scanner', description: 'Automated security code review', featured: true }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-yellow-500 to-orange-500',
      pages: [
        { name: 'Micro CRM', href: '/services/micro-crm', description: 'Customer relationship management', featured: true },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', description: 'Customer support system', featured: true },
        { name: 'Website Analytics', href: '/services/website-analytics', description: 'Performance tracking and insights', featured: true },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', description: 'Affiliate marketing tracking', featured: true },
        { name: 'Mobile Survey', href: '/services/mobile-survey', description: 'Mobile feedback and surveys', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI-powered project management', featured: true },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', description: 'Automated customer support', featured: true },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Financial analysis and insights', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', description: 'Marketing campaign automation', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      pages: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale business transformations', featured: true },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Digital health transformation', featured: true },
        { name: 'Financial Solutions', href: '/solutions/financial', description: 'Fintech innovation and compliance', featured: true },
        { name: 'Government Solutions', href: '/solutions/government', description: 'Public sector innovation', featured: false },
        { name: 'Education Solutions', href: '/solutions/education', description: 'Digital learning transformation', featured: false },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', description: 'Industry 4.0 and smart manufacturing', featured: false }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      color: 'from-teal-500 to-green-500',
      pages: [
        { name: 'Support Center', href: '/support', description: 'Help articles and support resources', featured: true },
        { name: 'Documentation', href: '/docs', description: 'Technical documentation and guides', featured: true },
        { name: 'API Reference', href: '/api', description: 'API documentation and examples', featured: true },
        { name: 'Training Programs', href: '/training', description: 'Professional training and certification', featured: true },
        { name: 'Community Forum', href: '/community', description: 'User community and discussions', featured: false },
        { name: 'Blog', href: '/blog', description: 'Industry insights and company updates', featured: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Map</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all our services, solutions, and resources. Find exactly what you need to transform your business.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sitemapSections.map((section, index) => (
              <div
                key={section.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mr-4`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="border-l-2 border-slate-600 pl-4">
                      <Link
                        to={page.href}
                        className="block group hover:translate-x-2 transition-transform duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className={`font-semibold ${page.featured ? 'text-cyan-400' : 'text-white'} group-hover:text-cyan-300 transition-colors duration-200`}>
                              {page.name}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">{page.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Home', href: '/', icon: Home },
              { name: 'Services', href: '/services', icon: Zap },
              { name: 'About', href: '/about', icon: Users },
              { name: 'Contact', href: '/contact', icon: MessageCircle },
              { name: 'Support', href: '/support', icon: HelpCircle },
              { name: 'Pricing', href: '/pricing', icon: DollarSign },
              { name: 'Partners', href: '/partners', icon: UserCheck },
              { name: 'Careers', href: '/careers', icon: Rocket }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="flex flex-col items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-cyan-400/50 transition-all duration-200 hover:transform hover:scale-105"
              >
                <link.icon className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-white text-sm font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}