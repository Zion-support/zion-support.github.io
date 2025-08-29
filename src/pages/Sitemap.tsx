import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  FileText, 
  Globe, 
  Heart, 
  Lock, 
  Rocket, 
  Shield, 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  Zap,
  Building,
  Scale,
  Truck,
  PenTool,
  Target,
  BookOpen,
  HelpCircle,
  DollarSign,
  Play,
  MessageCircle,
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const mainPages = [
    { name: 'Home', path: '/', description: 'Zion Tech Group - Revolutionary AI Solutions' },
    { name: 'About Us', path: '/about', description: 'Learn about our mission and team' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with our experts' },
    { name: 'Careers', path: '/careers', description: 'Join our innovative team' },
    { name: 'Partners', path: '/partners', description: 'Strategic partnerships and alliances' },
    { name: 'Legal', path: '/legal', description: 'Legal information and policies' },
  ];

  const coreServices = [
    { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science Solutions' },
    { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Medical AI & Diagnostics Platform' },
    { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'AI-Powered Trading Systems' },
    { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Supply Chain AI Solutions' },
    { name: 'AI Legal Document Analysis', path: '/services/ai-legal-document-analysis', description: 'Legal AI & Document Processing' },
    { name: 'AI Content Creation', path: '/services/ai-content-creation', description: 'Content Generation & Optimization' },
    { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity', description: 'AI-Powered Security Solutions' },
    { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Marketing AI & Automation' },
    { name: 'AI Project Management', path: '/services/ai-project-management', description: 'Project Management AI Solutions' },
    { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Workflow Automation with AI' },
  ];

  const infrastructureServices = [
    { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'DevOps & Infrastructure Solutions' },
    { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual Replicas & Simulation' },
    { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'IT Infrastructure Solutions' },
    { name: 'Data Analytics', path: '/services/data-analytics', description: 'Data Analytics & Insights' },
    { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'IoT & Edge Computing Solutions' },
    { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Quantum Computing Solutions' },
    { name: 'Green IT', path: '/services/green-it', description: 'Sustainable Technology Solutions' },
    { name: 'Space Technology', path: '/space-tech', description: 'Space & Aerospace Technology' },
  ];

  const specializedServices = [
    { name: 'Micro SaaS Products', path: '/services/micro-saas', description: 'AI automations with transparent pricing' },
    { name: 'AI Customer Support', path: '/services/ai-customer-support', description: 'AI-Powered Customer Support' },
    { name: 'AI HR Platform', path: '/services/ai-hr-platform', description: 'HR & Recruitment AI Solutions' },
    { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', description: 'Predictive Maintenance AI' },
    { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', description: 'Workflow Orchestration AI' },
    { name: 'Incident Response Platform', path: '/services/incident-response-platform', description: 'Security Incident Response' },
    { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', description: 'AI-Powered Interview Assessment' },
    { name: 'Machine Learning', path: '/services/MachineLearning', description: 'Machine Learning Solutions' },
  ];

  const innovativeServices = [
    { name: 'Innovative Services 2025', path: '/services/innovative-2025', description: 'Cutting-edge AI Services for 2025' },
    { name: 'Innovative Micro SAAS Services 2025', path: '/innovative-micro-saas-services-2025', description: 'Advanced Micro SAAS Solutions' },
    { name: 'Innovative Services Showcase 2027', path: '/innovative-services-showcase-2027', description: 'Future Technology Showcase' },
    { name: 'Innovative Services Overview', path: '/services/overview', description: 'Comprehensive Services Overview' },
    { name: 'Revolutionary Services 2030', path: '/revolutionary-services-2030', description: 'Future Technology Solutions' },
    { name: 'Comprehensive Services Landing 2025', path: '/comprehensive-services-landing-2025', description: 'Complete Services Portfolio' },
    { name: 'Comprehensive Services Landing 2027', path: '/comprehensive-services-landing-2027', description: 'Advanced Services Portfolio' },
    { name: 'Comprehensive Services Landing 2030', path: '/comprehensive-services-landing-2030', description: 'Future Services Portfolio' },
    { name: 'Enhanced Services Landing', path: '/services/enhanced', description: 'Enhanced Services Overview' },
    { name: 'Comprehensive Services Advertising', path: '/services/comprehensive-advertising', description: 'Services Marketing Solutions' },
    { name: 'Comprehensive Services Showcase 2030', path: '/services/showcase-2030', description: 'Future Services Showcase' },
  ];

  const solutions = [
    { name: 'Enterprise Solutions', path: '/solutions', description: 'Large-scale business transformations' },
    { name: 'Healthcare Solutions', path: '/solutions#healthcare', description: 'Digital health transformation' },
    { name: 'Financial Solutions', path: '/solutions#financial', description: 'Fintech innovation & compliance' },
    { name: 'Manufacturing Solutions', path: '/solutions#manufacturing', description: 'Smart manufacturing & automation' },
    { name: 'Legal Solutions', path: '/solutions#legal', description: 'Legal tech & compliance' },
    { name: 'Research & Development', path: '/research-development', description: 'Innovation & R&D support' },
    { name: 'Industry Solutions', path: '/industry-solutions', description: 'Industry-specific solutions' },
    { name: 'Financial Solutions', path: '/financial-solutions', description: 'Financial technology solutions' },
    { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Manufacturing technology solutions' },
  ];

  const resources = [
    { name: 'Blog & Insights', path: '/blog', description: 'Latest industry trends and insights' },
    { name: 'Case Studies', path: '/case-studies', description: 'Real-world success stories' },
    { name: 'White Papers', path: '/white-papers', description: 'In-depth research and analysis' },
    { name: 'Webinars', path: '/webinars', description: 'Expert-led learning sessions' },
    { name: 'Documentation', path: '/docs', description: 'Technical guides and APIs' },
    { name: 'FAQ & Support', path: '/faq', description: 'Get help and answers' },
    { name: 'Training & Certification', path: '/training', description: 'Professional development' },
    { name: 'Research & Development', path: '/research-development', description: 'Innovation & R&D insights' },
  ];

  const pricingAndBusiness = [
    { name: 'Pricing', path: '/pricing', description: 'Transparent pricing information' },
    { name: 'Pricing Guide 2025', path: '/pricing-guide-2025', description: 'Complete pricing information for 2025' },
    { name: 'Pricing Guide 2027', path: '/comprehensive-pricing-guide-2027', description: 'Comprehensive pricing guide for 2027' },
    { name: 'Pricing Guide 2030', path: '/pricing-guide-2030', description: 'Future pricing information' },
    { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
    { name: 'Schedule Demo', path: '/schedule-demo', description: 'Schedule a product demonstration' },
    { name: 'Marketplace', path: '/marketplace', description: 'AI solutions marketplace' },
  ];

  const supportAndCommunity = [
    { name: 'Support Center', path: '/support', description: 'Technical support and help' },
    { name: 'Community Forum', path: '/community', description: 'Join our community' },
    { name: 'Developer Portal', path: '/developers', description: 'Developer resources and APIs' },
    { name: 'Demo', path: '/demo', description: 'Product demonstrations' },
    { name: 'Status', path: '/status', description: 'System status and monitoring' },
    { name: 'Talent', path: '/talent', description: 'Talent and recruitment' },
  ];

  const legalAndPrivacy = [
    { name: 'Privacy Policy', path: '/privacy', description: 'Privacy and data protection' },
    { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' },
    { name: 'Legal Information', path: '/legal', description: 'Legal information and policies' },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const renderSection = (title: string, items: any[], icon: any, featured = false) => (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold text-white flex items-center gap-2 ${
        featured ? 'text-cyan-400' : ''
      }`}>
        {React.createElement(icon, { className: "w-5 h-5" })}
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
            >
              <span>{item.name}</span>
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
            <p className="text-xs text-gray-500 mt-1 ml-4">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-responsive py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Zion Tech Group Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete navigation guide to all our services, solutions, and resources. 
            Find exactly what you need to transform your business with AI technology.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-16 border border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300 text-sm">{contactInfo.address}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {contactInfo.website}
              </a>
            </div>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* Main Pages */}
          {renderSection('Main Pages', mainPages, Zap, true)}
          
          {/* Core AI Services */}
          {renderSection('Core AI Services', coreServices, Brain, true)}
          
          {/* Infrastructure Services */}
          {renderSection('Infrastructure Services', infrastructureServices, Cloud, true)}
          
          {/* Specialized Services */}
          {renderSection('Specialized Services', specializedServices, Code, false)}
          
          {/* Innovative Services */}
          {renderSection('Innovative Services', innovativeServices, Rocket, true)}
          
          {/* Solutions */}
          {renderSection('Industry Solutions', solutions, Target, true)}
          
          {/* Resources */}
          {renderSection('Resources & Learning', resources, BookOpen, false)}
          
          {/* Pricing & Business */}
          {renderSection('Pricing & Business', pricingAndBusiness, DollarSign, true)}
          
          {/* Support & Community */}
          {renderSection('Support & Community', supportAndCommunity, Users, false)}
          
          {/* Legal & Privacy */}
          {renderSection('Legal & Privacy', legalAndPrivacy, Shield, false)}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI solutions. Get in touch today to learn how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/request-quote"
              className="p-4 rounded-xl border border-cyan-400/50 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <div className="p-2 rounded-lg mx-auto mb-3 w-fit bg-cyan-500/20 text-cyan-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-cyan-400">Request Quote</span>
            </Link>
            
            <Link
              to="/schedule-demo"
              className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <div className="p-2 rounded-lg mx-auto mb-3 w-fit bg-slate-700/50 text-gray-400 group-hover:text-cyan-400">
                <Play className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">Schedule Demo</span>
            </Link>
            
            <Link
              to="/contact"
              className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <div className="p-2 rounded-lg mx-auto mb-3 w-fit bg-slate-700/50 text-gray-400 group-hover:text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">Contact Us</span>
            </Link>
            
            <Link
              to="/services"
              className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <div className="p-2 rounded-lg mx-auto mb-3 w-fit bg-slate-700/50 text-gray-400 group-hover:text-cyan-400">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">View Services</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Zion Tech Group. All rights reserved. | 
            <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-2">Privacy Policy</Link> | 
            <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
