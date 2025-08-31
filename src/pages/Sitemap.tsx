import React from 'react';
import { motion } from 'framer-motion';
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
  DollarSign
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

const Sitemap: React.FC = () => {
  const sitemapSections: SitemapSection[] = [
    { title: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      pages: [
        { name: 'Home', href: '/', description: 'Main landing page with comp overview and services', featured: true },
        { name: 'About', href: '/about', description: 'Comp information, mission, and team details', featured: true },
        { name: 'Contact', href: '/contact', description: 'Contact information and inquiry forms', featured: true },
        { name: 'Pricing', href: '/pricing', description: 'Service pricing and package information', featured: true },
        { name: 'Careers', href: '/careers', description: 'Job opportunities and career information', featured: false },
        { name: 'Partners', href: '/partners', description: 'Partnership opportunities and programs', featured: false }
      ]
    },
    { title: 'AI & Machine Learning Services',
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
    { title: 'Cloud & Infrastructure Services',
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
    { title: 'Security & Compliance Services',
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
    { title: 'Micro SaaS Solutions',
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
    { title: 'Industry Solutions',
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      pages: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale business transformations', featured: true },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Digital health transformation', featured: true },
        { name: 'Financial Solutions', href: '/solutions/financial', description: 'Fintech innovation and compliance', featured: true },
        { name: 'Government Solutions', href: '/solutions/government', description: 'Public sector innovation', featured: false },
        { name: 'SMB Solutions', href: '/solutions/smb', description: 'Small to medium business growth', featured: false },
        { name: 'Startup Solutions', href: '/solutions/startup', description: 'Accelerate your startup growth', featured: false },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', description: 'Industry 4.0 and smart manufacturing', featured: false },
        { name: 'Retail Solutions', href: '/solutions/retail', description: 'E-commerce and retail innovation', featured: false },
        { name: 'Education Solutions', href: '/solutions/education', description: 'Educational technology solutions', featured: false },
        { name: 'Energy Solutions', href: '/solutions/energy', description: 'Energy sector digital transformation', featured: false }
      ]
    },
    { title: 'Resources & Support',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      pages: [
        { name: 'Blog', href: '/blog', description: 'Latest industry trends and insights', featured: true },
        { name: 'Case Studies', href: '/case-studies', description: 'Real-world success stories', featured: true },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis', featured: true },
        { name: 'Webinars', href: '/webinars', description: 'Expert-led learning sessions', featured: true },
        { name: 'Documentation', href: '/docs', description: 'Technical guides and APIs', featured: true },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions and help', featured: true },
        { name: 'Community', href: '/community', description: 'Developer community and forums', featured: true },
        { name: 'Training', href: '/training', description: 'Professional development and training', featured: false },
        { name: 'API Reference', href: '/api-docs', description: 'API documentation and reference', featured: false },
        { name: 'Developer Portal', href: '/developers', description: 'Developer resources and tools', featured: false }
      ]
    },
    { title: 'Interactive & Demo',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      pages: [
        { name: 'Interactive Demos', href: '/demo', description: 'Try our AI services and solutions', featured: true },
        { name: 'Schedule Demo', href: '/schedule-demo', description: 'Book a personalized demo session', featured: true },
        { name: 'Request Quote', href: '/request-quote', description: 'Get a custom quote for your needs', featured: true },
        { name: 'Marketplace', href: '/marketplace', description: 'Browse and purchase our services', featured: true }
      ]
    },
    { title: 'Legal & Compliance',
      icon: FileText,
      color: 'from-gray-500 to-slate-500',
      pages: [
        { name: 'Privacy Policy', href: '/privacy', description: 'Data privacy and protection policy', featured: true },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions of service', featured: true },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and preferences', featured: true },
        { name: 'Legal Information', href: '/legal', description: 'Legal notices and compliance', featured: false }
      ]
    },
    { title: 'Specialized Services',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      pages: [
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales assistance', featured: true },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cloud cost optimization', featured: true },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated compliance monitoring', featured: true },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Intelligent email automation', featured: true },
        { name: 'Mobile Feedback Surveys', href: '/services/mobile-feedback-surveys', description: 'Customer feedback collection', featured: true },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'Compliance automation platform', featured: true },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'Large language model content creation', featured: true },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations optimization', featured: true },
        { name: 'Returns Management', href: '/services/returns-management', description: 'Product returns automation', featured: true },
        { name: 'Email Sequencer', href: '/services/email-sequencer', description: 'Automated email sequences', featured: true },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', description: 'Audio content transcription', featured: true }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Started', href: '/contact', icon: Rocket, color: 'from-cyan-500 to-blue-500' },
    { name: 'Request Quote', href: '/request-quote', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, color: 'from-purple-500 to-pink-500' },
    { name: 'View Pricing', href: '/pricing', icon: DollarSign, color: 'from-orange-500 to-red-500' },
    { name: 'Join Community', href: '/community', icon: Users, color: 'from-indigo-500 to-purple-500' },
    { name: 'Try Demos', href: '/demo', icon: Zap, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6     }}
            className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete overview of all pages and services available on the Zion Tech Group website. 
              Navigate through our comprehensive offerings and find exactly what you need.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quick Actions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get started quickly with our most popular actions and services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={action.href}
                className={`group p-4 bg-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-all duration-300 text-center border border-white/20 hover:border-white/40`}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {action.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sitemap Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mr-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.pages.map((page, pageIndex) => (
                  <motion.div
                    key={page.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: pageIndex * 0.05 }}
                    className="group">
                    <Link
                      to={page.href}
                      className="block p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {page.name}
                        </h3>
                        {page.featured && (
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                        )}
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {page.description}
                      </p>
                      
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="text-sm font-medium">Visit Page</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you navigate our services and find the perfect solution 
            for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <Link
              to="/schedule-demo"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
              <HelpCircle className="w-5 h-5 mr-2" />
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
