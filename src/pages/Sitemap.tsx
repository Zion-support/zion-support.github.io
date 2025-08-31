import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Home, 
  Building, 
  Users, 
  FileText, 
  Settings, 
  Shield, 
  Globe, 
  Rocket, 
  Brain, 
  Cloud, 
  Cpu, 
  Database, 
  Lock, 
  Search, 
  BookOpen, 
  MessageCircle, 
  DollarSign, 
  Star,
  Zap,
  Target,
  TrendingUp,
  Heart,
  Atom,
  Leaf,
  Code,
  ShoppingCart,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  HelpCircle
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About Us', href: '/about', description: 'Company information and team' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership programs' },
        { name: 'Legal', href: '/legal', description: 'Legal information' },
        { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' }
      ]
    },
    {
      title: 'Services',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'All Services', href: '/services', description: 'Complete service catalog' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered analytics' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare AI solutions' },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', description: 'Legal AI automation' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain AI' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'Financial AI platform' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'Content generation AI' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'IoT and edge computing' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Digital twin technology' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Cloud and DevOps services' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data analysis solutions' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'IT infrastructure services' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', description: 'Micro SaaS solutions' }
      ]
    },
    {
      title: 'Innovative Services',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', description: 'Future technology solutions' },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', description: '2025 innovative services' },
        { name: 'Innovative Services Showcase 2027', href: '/innovative-services-showcase-2027', description: '2027 showcase' },
        { name: 'Comprehensive Services Landing 2025', href: '/services/comprehensive-2025', description: '2025 comprehensive services' },
        { name: 'Comprehensive Services Landing 2027', href: '/services/comprehensive-2027', description: '2027 comprehensive services' },
        { name: 'Comprehensive Services Landing 2030', href: '/services/comprehensive-2030', description: '2030 comprehensive services' },
        { name: 'Enhanced Services Landing', href: '/services/enhanced', description: 'Enhanced services overview' },
        { name: 'Comprehensive Services Advertising', href: '/services/comprehensive-advertising', description: 'Advertising services' },
        { name: 'Comprehensive Services Showcase 2030', href: '/services/showcase-2030', description: '2030 showcase' },
        { name: 'Comprehensive Services Showcase 2031', href: '/services/showcase-2031', description: '2031 showcase' },
        { name: 'Comprehensive Services Showcase 2025', href: '/services/showcase-2025', description: '2025 showcase' },
        { name: 'Comprehensive Services Showcase 2026', href: '/services/showcase-2026', description: '2026 showcase' },
        { name: 'Comprehensive Services Showcase 2027', href: '/services/showcase-2027', description: '2027 showcase' },
        { name: 'Comprehensive Services Showcase 2028', href: '/services/showcase-2028', description: '2028 showcase' },
        { name: 'Comprehensive Services Showcase 2029', href: '/services/showcase-2029', description: '2029 showcase' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      links: [
        { name: 'Blog', href: '/blog', description: 'Latest industry trends and insights' },
        { name: 'Case Studies', href: '/case-studies', description: 'Real-world success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis' },
        { name: 'Webinars', href: '/webinars', description: 'Expert-led learning sessions' },
        { name: 'Documentation', href: '/docs', description: 'Technical guides and APIs' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions and help' },
        { name: 'Community', href: '/community', description: 'Developer community and forums' },
        { name: 'Training', href: '/training', description: 'Professional development and training' },
        { name: 'API Reference', href: '/api-docs', description: 'API documentation and reference' },
        { name: 'Developer Portal', href: '/developers', description: 'Developer resources and tools' }
      ]
    },
    {
      title: 'Interactive & Demo',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      links: [
        { name: 'Interactive Demos', href: '/demo', description: 'Try our AI services and solutions' },
        { name: 'Schedule Demo', href: '/schedule-demo', description: 'Book a personalized demo session' },
        { name: 'Request Quote', href: '/request-quote', description: 'Get a custom quote for your needs' },
        { name: 'Marketplace', href: '/marketplace', description: 'Browse and purchase our services' }
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: FileText,
      color: 'from-gray-500 to-slate-500',
      links: [
        { name: 'Privacy Policy', href: '/privacy', description: 'Data privacy and protection policy' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions of service' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and preferences' },
        { name: 'Legal Information', href: '/legal', description: 'Legal notices and compliance' }
      ]
    },
    {
      title: 'Specialized Services',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      links: [
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales assistance' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cloud cost optimization' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated compliance monitoring' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Intelligent email automation' },
        { name: 'Mobile Feedback Surveys', href: '/services/mobile-feedback-surveys', description: 'Customer feedback collection' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'Compliance automation platform' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'Large language model content creation' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations optimization' },
        { name: 'Returns Management', href: '/services/returns-management', description: 'Product returns automation' },
        { name: 'Email Sequencer', href: '/services/email-sequencer', description: 'Automated email sequences' },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', description: 'Audio content transcription' }
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
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group's website. Find all our pages, services, and resources organized by category."
        keywords="sitemap, website navigation, Zion Tech Group, services, pages"
        canonicalUrl="https://ziontechgroup.com/sitemap"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <motion.div
          className="relative py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Site Map
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Navigate through our comprehensive website structure to find exactly what you're looking for
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    to={action.href}
                    className={`block p-4 rounded-xl bg-gradient-to-r ${action.color} text-white text-center hover:scale-105 transition-transform duration-300`}
                  >
                    <action.icon className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">{action.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sitemap Content */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                {/* Section Header */}
                <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                
                {/* Links */}
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className="block group hover:bg-slate-700/40 rounded-lg p-3 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                              {link.name}
                            </h3>
                            <p className="text-gray-300 text-sm mt-1">
                              {link.description}
                            </p>
                          </div>
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
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;