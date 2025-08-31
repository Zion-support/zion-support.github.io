import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Globe,
  Cpu,
  Database,
  Lock,
  Cloud,
  Rocket,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Target,
  Handshake,
  Lightbulb,
  Network,
  Smartphone,
  Star,
  CheckCircle,
  Award,
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Home
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapData = {
    main: {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Team', path: '/team', description: 'Meet our team members' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'News', path: '/news', description: 'Latest company news' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' }
      ]
    },
    services: {
      title: 'Services',
      icon: Zap,
      pages: [
        { name: 'All Services', path: '/services', description: 'Complete service portfolio' },
        { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', path: '/it-services', description: 'Information Technology services' },
        { name: 'Micro SaaS', path: '/micro-saas', description: 'Software-as-a-Service products' }
      ]
    },
    aiServices: {
      title: 'AI Services',
      icon: Brain,
      pages: [
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'AI-powered supply chain management' },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-driven security solutions' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum AI integration' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'AI-powered analytics' },
        { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation-platform', description: 'Legal document processing' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics-platform', description: 'Healthcare data analytics' },
        { name: 'AI Financial Trading Platform', path: '/services/ai-financial-trading-platform', description: 'Financial trading automation' },
        { name: 'AI Real Estate Investment', path: '/services/ai-real-estate-investment-platform', description: 'Real estate AI solutions' }
      ]
    },
    itServices: {
      title: 'IT Services',
      icon: Shield,
      pages: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Cloud infrastructure and DevOps' },
        { name: 'Zero Trust Network Architecture', path: '/services/zero-trust-network-architecture', description: 'Advanced network security' },
        { name: 'AI Compliance Copilot', path: '/services/ai-compliance-copilot', description: 'AI-powered compliance' },
        { name: 'Blockchain Enterprise Solutions', path: '/services/blockchain-enterprise-solutions', description: 'Blockchain technology' },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Quantum computing solutions' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge', description: 'Internet of Things solutions' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Business modernization' },
        { name: 'Healthcare Technology', path: '/services/healthcare-tech', description: 'Healthcare IT solutions' },
        { name: 'Space Technology', path: '/services/space-tech', description: 'Aerospace technology' },
        { name: 'Sustainability Technology', path: '/services/sustainability', description: 'Green technology solutions' }
      ]
    },
    solutions: {
      title: 'Industry Solutions',
      icon: Building2,
      pages: [
        { name: 'All Solutions', path: '/solutions', description: 'Complete solutions overview' },
        { name: 'Enterprise Solutions', path: '/enterprise', description: 'Enterprise-grade solutions' },
        { name: 'Healthcare Solutions', path: '/healthcare', description: 'Healthcare technology' },
        { name: 'Financial Solutions', path: '/financial', description: 'Financial technology' },
        { name: 'Manufacturing Solutions', path: '/manufacturing', description: 'Manufacturing technology' },
        { name: 'Retail Solutions', path: '/retail', description: 'Retail technology' },
        { name: 'Government Solutions', path: '/government', description: 'Government technology' },
        { name: 'Education Solutions', path: '/education', description: 'Educational technology' },
        { name: 'Startup Solutions', path: '/startup-solutions', description: 'Startup technology' },
        { name: 'Supply Chain Solutions', path: '/supply-chain', description: 'Supply chain technology' }
      ]
    },
    resources: {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', path: '/white-papers', description: 'Research papers' },
        { name: 'Webinars', path: '/webinars', description: 'Educational events' },
        { name: 'Training', path: '/training', description: 'Learning resources' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Help Center', path: '/help', description: 'Support resources' }
      ]
    },
    support: {
      title: 'Support & Contact',
      icon: HelpCircle,
      pages: [
        { name: 'Help Center', path: '/help', description: 'Get support' },
        { name: 'Contact Support', path: '/contact', description: 'Contact our team' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get pricing information' },
        { name: 'Schedule Demo', path: '/schedule-demo', description: 'Book a demonstration' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' },
        { name: 'Login', path: '/login', description: 'Sign in to your account' },
        { name: 'Sign Up', path: '/signup', description: 'Create a new account' }
      ]
    },
    legal: {
      title: 'Legal & Policies',
      icon: Lock,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy information' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage' },
        { name: 'Security', path: '/security', description: 'Security measures' },
        { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility features' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our services, solutions, and resources." />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Helmet>

      {/* Header */}
      <div className="bg-zion-blue-dark border-b border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Website Sitemap
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Complete overview of all pages, services, and resources available on the Zion Tech Group website.
            </p>
          </div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(sitemapData).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <div key={key} className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.pages.map((page) => (
                    <div key={page.path} className="border-l-2 border-zion-purple/30 pl-4 py-2">
                      <Link 
                        to={page.path}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium block mb-1"
                      >
                        {page.name}
                      </Link>
                      <p className="text-zion-slate-light text-sm">{page.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Additional Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
              <p className="text-zion-slate-light text-sm">+1 302 464 0950</p>
              <p className="text-zion-slate-light text-sm">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light text-sm">364 E Main St STE 1008</p>
              <p className="text-zion-slate-light text-sm">Middletown DE 19709</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <p className="text-zion-slate-light text-sm">ziontechgroup.com</p>
              <p className="text-zion-slate-light text-sm">Innovation Group</p>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-6 py-3 rounded-lg font-medium hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
