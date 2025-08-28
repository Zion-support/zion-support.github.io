import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Home, 
  Settings, 
  Target, 
  DollarSign, 
  FileText, 
  BookOpen, 
  User, 
  Mail, 
  Users, 
  Shield,
  FileCheck,
  HelpCircle,
  BookOpen as Docs,
  Newspaper, 
  Calendar, 
  Users as Partners,
  Users as Team,
  MessageSquare,
  ShoppingCart,
  Users as Talent,
  Package,
  Brain,
  TestTube,
  ShoppingBag,
  Cloud,
  Box,
  BarChart3,
  Server,
  Brain as AIBusinessIntelligence,
  Atom,
  Zap,
  Shield as Cybersecurity,
  Link,
  Heart,
  Rocket,
  Leaf,
  Brain as AutonomousAI
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const mainPages = [
    { name: 'Home', href: '/', icon: Home, description: 'Main landing page' },
    { name: 'About', href: '/about', icon: User, description: 'Company information' },
    { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch' },
    { name: 'Careers', href: '/careers', icon: Users, description: 'Job opportunities' },
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights' },
    { name: 'News', href: '/news', icon: Newspaper, description: 'Company news' },
    { name: 'Events', href: '/events', icon: Calendar, description: 'Upcoming events' },
    { name: 'Team', href: '/team', icon: Team, description: 'Our team' },
    { name: 'Partners', href: '/partners', icon: Partners, description: 'Partnerships' },
  ];

  const servicePages = [
    { name: 'Services Overview', href: '/services', icon: Settings, description: 'All services' },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain, description: 'AI-powered solutions' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud infrastructure' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Box, description: 'Digital twin platform' },
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Data insights' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'IT services' },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: AIBusinessIntelligence, description: 'AI BI solutions' },
    { name: 'Micro SaaS', href: '/services/micro-saas', icon: ShoppingBag, description: 'Micro SaaS products' },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Quantum solutions' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Zap, description: 'IoT services' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Cybersecurity, description: 'Security solutions' },
    { name: 'Blockchain', href: '/services/blockchain', icon: Link, description: 'Blockchain platform' },
    { name: 'Healthcare Tech', href: '/services/ai-healthcare-platform', icon: Heart, description: 'Healthcare solutions' },
    { name: 'Space Tech', href: '/services/space-tech', icon: Rocket, description: 'Space technology' },
    { name: 'Green Tech', href: '/services/sustainable-technology', icon: Leaf, description: 'Sustainability' },
    { name: 'Autonomous AI', href: '/services/ai-autonomous-research-assistant', icon: AutonomousAI, description: 'Autonomous systems' },
  ];

  const solutionPages = [
    { name: 'Solutions', href: '/solutions', icon: Target, description: 'Business solutions' },
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
    { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Pricing plans' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageSquare, description: 'Get a quote' },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart, description: 'Product marketplace' },
    { name: 'Talent Solutions', href: '/talent', icon: Talent, description: 'Hire talent' },
    { name: 'Equipment Services', href: '/equipment', icon: Package, description: 'Equipment rental' },
  ];

  const resourcePages = [
    { name: 'Research & Development', href: '/research-development', icon: TestTube, description: 'R&D initiatives' },
    { name: 'Documentation', href: '/docs', icon: Docs, description: 'Technical docs' },
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support & help' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Privacy information' },
    { name: 'Terms of Service', href: '/terms', icon: FileCheck, description: 'Terms & conditions' },
    { name: 'Cookie Policy', href: '/cookies', icon: FileCheck, description: 'Cookie information' },
  ];

  const renderPageSection = (title: string, pages: any[], className: string = '') => (
    <div className={`${className}`}>
      <h3 className="text-xl font-bold text-cyan-400 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.name}
            to={page.href}
            className="group p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                <page.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                  {page.name}
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-1">
                  {page.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of all pages and services available on Zion Tech Group website."
      />
      
      <div className="container-responsive py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Complete Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore all the pages, services, and resources available on our website. 
            Find exactly what you're looking for with our comprehensive navigation guide.
          </p>
        </div>

        <div className="space-y-16">
          {renderPageSection('Main Pages', mainPages)}
          {renderPageSection('Services', servicePages)}
          {renderPageSection('Solutions & Business', solutionPages)}
          {renderPageSection('Resources & Support', resourcePages)}
        </div>

        <div className="mt-16 p-8 bg-slate-800/30 border border-cyan-400/20 rounded-xl">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
            Need Help Finding Something?
          </h3>
          <p className="text-gray-300 text-center mb-6">
            Can't find what you're looking for? Our team is here to help you navigate our services.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/help"
              className="px-6 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-all duration-200"
            >
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;