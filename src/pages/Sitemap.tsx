import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  ArrowRight, 
  Building, 
  Cloud, 
  Code, 
  Database, 
  Globe, 
  Shield, 
  Users, 
  Zap,
  Brain,
  Rocket,
  Heart,
  PenTool,
  Atom,
  Cpu,
  Server,
  BarChart3,
  FileText,
  BookOpen,
  Target,
  MessageCircle,
  HelpCircle,
  DollarSign,
  ShoppingCart,
  Award,
  Lock,
  Settings
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getYear() + 1900;

  const mainPages = [
    { name: 'Home', href: '/', icon: Globe, description: 'Main landing page' },
    { name: 'About', href: '/about', icon: Building, description: 'Company information' },
    { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch' },
    { name: 'Services', href: '/services', icon: Zap, description: 'Our service offerings' },
    { name: 'Solutions', href: '/solutions', icon: Target, description: 'Industry solutions' },
    { name: 'Resources', href: '/resources', icon: BookOpen, description: 'Knowledge base' },
    { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing' },
    { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
    { name: 'Case Studies', href: '/case-studies', icon: Target, description: 'Success stories' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research papers' },
    { name: 'Webinars', href: '/webinars', icon: Users, description: 'Live events' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
    { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical guides' },
    { name: 'Partners', href: '/partners', icon: Users, description: 'Partnership opportunities' },
    { name: 'Careers', href: '/careers', icon: Award, description: 'Job opportunities' },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart, description: 'Product marketplace' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get a quote' },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3, description: 'Client dashboard' },
    { name: 'Login', href: '/login', icon: Lock, description: 'Client login' },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Privacy information' },
    { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', icon: Settings, description: 'Cookie information' },
    { name: 'Legal', href: '/legal', icon: Shield, description: 'Legal information' }
  ];

  const aiServices = [
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart, description: 'Medical AI & Diagnostics' },
    { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: PenTool, description: 'Content Generation & Optimization' },
    { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', icon: Shield, description: 'AI-Powered Security' },
    { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-document-analyzer', icon: FileText, description: 'Legal document processing' },
    { name: 'AI Real Estate Investment Analyzer', href: '/services/ai-real-estate-investment-analyzer', icon: Building, description: 'Real estate analysis' },
    { name: 'AI Restaurant Management System', href: '/services/ai-restaurant-management-system', icon: ShoppingCart, description: 'Restaurant automation' },
    { name: 'AI Fitness Coaching Platform', href: '/services/ai-fitness-coaching-platform', icon: Heart, description: 'Fitness and health coaching' },
    { name: 'AI E-commerce Personalization Engine', href: '/services/ai-ecommerce-personalization-engine', icon: ShoppingCart, description: 'E-commerce optimization' },
    { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Database, description: 'Supply chain management' },
    { name: 'AI Video Content Creation Studio', href: '/services/ai-video-content-creation-studio', icon: PenTool, description: 'Video content creation' },
    { name: 'AI Customer Churn Prediction', href: '/services/ai-customer-churn-prediction', icon: Users, description: 'Customer retention analysis' },
    { name: 'AI Financial Fraud Detection', href: '/services/ai-financial-fraud-detection', icon: Shield, description: 'Financial security' },
    { name: 'AI Energy Management System', href: '/services/ai-energy-management-system', icon: Zap, description: 'Energy optimization' }
  ];

  const coreServices = [
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'Digital Twin Platform', href: '/services/digital-twin', icon: Globe, description: 'Virtual Replicas & Simulation' },
    { name: 'Data Analytics & BI', href: '/services/data-analytics', icon: BarChart3, description: 'Business Intelligence & Analytics' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Server & Network Management' },
    { name: 'Micro SaaS Products', href: '/services/micro-saas', icon: Zap, description: 'Specialized Software Solutions' },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Quantum AI & Optimization' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu, description: 'IoT & Real-time Processing' }
  ];

  const solutions = [
    { name: 'Enterprise AI', href: '/solutions/enterprise-ai', icon: Building, description: 'Large-scale AI implementation' },
    { name: 'SMB Solutions', href: '/solutions/smb-solutions', icon: Building, description: 'Affordable tech for small business' },
    { name: 'Startup Accelerator', href: '/solutions/startup-accelerator', icon: Rocket, description: 'Tech solutions for startups' },
    { name: 'Government & Defense', href: '/solutions/government-defense', icon: Shield, description: 'Secure government solutions' },
    { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart, description: 'Medical & health technology' },
    { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'Fintech & banking solutions' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical guides & APIs' },
    { name: 'Blog', href: '/blog', icon: FileText, description: 'Industry insights & updates' },
    { name: 'Case Studies', href: '/case-studies', icon: Target, description: 'Success stories & results' },
    { name: 'Webinars', href: '/webinars', icon: Users, description: 'Live events & training' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research & analysis' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
    { name: 'Pricing', href: '/pricing', description: 'Transparent pricing plans' },
    { name: 'Support', href: '/support', icon: MessageCircle, description: 'Technical support & help' }
  ];

  const specialPages = [
    { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', icon: Rocket, description: 'Future Technology Solutions' },
    { name: 'Comprehensive Services 2030', href: '/comprehensive-services-2030', icon: Brain, description: 'Complete AI & Tech Solutions' },
    { name: 'Enhanced Services Landing', href: '/services/enhanced', icon: Zap, description: 'Enhanced service offerings' },
    { name: 'Comprehensive Services 2025', href: '/comprehensive-services-showcase-2025', icon: Brain, description: '2025 service showcase' },
    { name: 'Innovative AI Services 2025', href: '/innovative-ai-services-2025', icon: Brain, description: '2025 AI innovations' },
    { name: 'Innovative Micro SAAS 2025', href: '/innovative-micro-saas-services-2025', icon: Zap, description: '2025 Micro SAAS' }
  ];

  const renderSection = (title: string, items: any[], icon?: React.ComponentType<any>) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        {icon && <icon.type {...icon.props} className="w-5 h-5 mr-2 text-cyan-400" />}
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="group p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300"
          >
            <div className="flex items-start space-x-3">
              {item.icon && (
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-200">
                    {item.description}
                  </p>
                )}
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
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
