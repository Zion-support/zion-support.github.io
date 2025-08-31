import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Mail
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
        { name: 'Comprehensive Services Showcase 2029', href: '/services/showcase-2029', description: '2029 showcase' },
        { name: 'Comprehensive Services Showcase 2030', href: '/services/showcase-2030', description: '2030 showcase' },
        { name: 'Comprehensive Services Showcase 2031', href: '/services/showcase-2031', description: '2031 showcase' },
        { name: 'Comprehensive Services Showcase 2032', href: '/services/showcase-2032', description: '2032 showcase' },
        { name: 'Comprehensive Services Showcase 2033', href: '/services/showcase-2033', description: '2033 showcase' },
        { name: 'Comprehensive Services Showcase 2034', href: '/services/showcase-2034', description: '2034 showcase' },
        { name: 'Comprehensive Services Showcase 2035', href: '/services/showcase-2035', description: '2035 showcase' },
        { name: 'Comprehensive Services Showcase 2036', href: '/services/showcase-2036', description: '2036 showcase' },
        { name: 'Comprehensive Services Showcase 2037', href: '/services/showcase-2037', description: '2037 showcase' },
        { name: 'Comprehensive Services Showcase 2038', href: '/services/showcase-2038', description: '2038 showcase' },
        { name: 'Comprehensive Services Showcase 2039', href: '/services/showcase-2039', description: '2039 showcase' },
        { name: 'Comprehensive Services Showcase 2040', href: '/services/showcase-2040', description: '2040 showcase' },
        { name: 'Comprehensive Services Showcase 2041', href: '/services/showcase-2041', description: '2041 showcase' },
        { name: 'Comprehensive Services Showcase 2042', href: '/services/showcase-2042', description: '2042 showcase' },
        { name: 'Comprehensive Services Showcase 2043', href: '/services/showcase-2043', description: '2043 showcase' },
        { name: 'Comprehensive Services Showcase 2044', href: '/services/showcase-2044', description: '2044 showcase' },
        { name: 'Comprehensive Services Showcase 2045', href: '/services/showcase-2045', description: '2045 showcase' },
        { name: 'Comprehensive Services Showcase 2046', href: '/services/showcase-2046', description: '2046 showcase' },
        { name: 'Comprehensive Services Showcase 2047', href: '/services/showcase-2047', description: '2047 showcase' },
        { name: 'Comprehensive Services Showcase 2048', href: '/services/showcase-2048', description: '2048 showcase' },
        { name: 'Comprehensive Services Showcase 2049', href: '/services/showcase-2049', description: '2049 showcase' },
        { name: 'Comprehensive Services Showcase 2050', href: '/services/showcase-2050', description: '2050 showcase' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      links: [
        { name: 'AI Enterprise Automation', href: '/services/ai-enterprise-automation', description: 'Enterprise AI automation' },
        { name: 'AI Enterprise Intelligence', href: '/services/ai-enterprise-intelligence', description: 'Enterprise AI intelligence' },
        { name: 'AI Data Analytics', href: '/services/ai-data-analytics', description: 'AI-powered data analysis' },
        { name: 'AI Autonomous Research', href: '/services/ai-autonomous-research', description: 'Autonomous research AI' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'AI trading platform' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Quantum Hybrid', href: '/services/ai-quantum-hybrid', description: 'Quantum AI hybrid platform' },
        { name: 'AI Quantum Neural Network', href: '/services/ai-quantum-neural-network', description: 'Quantum neural networks' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain AI' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI sales assistant' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'AI compliance tools' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI project coordination' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Workflow automation' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', description: 'Predictive maintenance AI' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'HR automation AI' },
        { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management', description: 'Financial risk AI' },
        { name: 'AI Business Intelligence Dashboard', href: '/services/ai-business-intelligence-dashboard', description: 'BI dashboard AI' },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', description: 'Customer support AI' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', description: 'Marketing automation AI' },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-creation-studio', description: 'Content creation AI' },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', description: 'CX analytics AI' },
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations', description: 'Autonomous business AI' },
        { name: 'AI Content Intelligence', href: '/services/ai-content-intelligence', description: 'Content intelligence AI' },
        { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning', description: 'ERP AI solutions' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform', description: 'Customer success AI' },
        { name: 'AI Supply Chain Intelligence', href: '/services/ai-supply-chain-intelligence', description: 'Supply chain intelligence AI' },
        { name: 'AI Autonomous Logistics', href: '/services/ai-autonomous-logistics', description: 'Autonomous logistics AI' },
        { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', description: 'AI SEO optimization' }
      ]
    },
    {
      title: 'IT & Infrastructure',
      icon: Building, // Changed from Server to Building as Server is not imported
      color: 'from-orange-500 to-red-500',
      links: [
        { name: 'Infrastructure Management', href: '/services/it-infrastructure-management', description: 'IT infrastructure services' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Cloud and DevOps solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security solutions' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Digital transformation services' },
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', description: 'Quantum computing solutions' },
        { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing-solutions', description: 'Quantum edge computing' },
        { name: 'Edge Computing', href: '/services/edge-computing-solutions', description: 'Edge computing solutions' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'Enterprise blockchain' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', description: 'IoT edge solutions' },
        { name: 'Cloud FinOps', href: '/services/cloud-finops-optimizer', description: 'Cloud financial operations' }
      ]
    },
    {
      title: 'Solutions & Industries',
      icon: Target,
      color: 'from-teal-500 to-green-500',
      links: [
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Healthcare technology solutions' },
        { name: 'Financial Solutions', href: '/solutions/financial', description: 'Financial technology solutions' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', description: 'Manufacturing technology' },
        { name: 'Government Solutions', href: '/solutions/government', description: 'Government technology solutions' },
        { name: 'Retail Solutions', href: '/solutions/retail', description: 'Retail technology solutions' },
        { name: 'Enterprise Solutions', href: '/enterprise', description: 'Enterprise technology solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation', description: 'Digital transformation solutions' },
        { name: 'Cloud Solutions', href: '/cloud-solutions', description: 'Cloud technology solutions' },
        { name: 'Emerging Technology', href: '/emerging-tech', description: 'Emerging technology solutions' },
        { name: 'Quantum Edge Computing', href: '/solutions/quantum-edge-computing', description: 'Quantum edge solutions' },
        { name: 'AI Autonomous Business', href: '/solutions/ai-autonomous-business', description: 'Autonomous business solutions' },
        { name: 'Blockchain & Web3', href: '/solutions/blockchain-web3', description: 'Blockchain and Web3 solutions' },
        { name: 'IoT Edge Computing', href: '/solutions/iot-edge-computing', description: 'IoT edge computing solutions' },
        { name: 'Space Technology', href: '/solutions/space-tech', description: 'Space technology solutions' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500',
      links: [
        { name: 'Blog', href: '/blog', description: 'Industry insights and updates' },
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
        { name: 'White Papers', href: '/white-papers', description: 'Research white papers' },
        { name: 'Webinars', href: '/webinars', description: 'Educational webinars' },
        { name: 'Training', href: '/training', description: 'Training programs' },
        { name: 'Research & Development', href: '/research-development', description: 'R&D initiatives' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'Help Center', href: '/help', description: 'Help and support resources' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'API Documentation', href: '/api', description: 'API reference' },
        { name: 'Developer Portal', href: '/developer-portal', description: 'Developer resources' },
        { name: 'Status Page', href: '/status', description: 'Service status information' }
      ]
    },
    {
      title: 'Company & Legal',
      icon: Building,
      color: 'from-gray-500 to-slate-500',
      links: [
        { name: 'About Us', href: '/about', description: 'Company information' },
        { name: 'Leadership', href: '/leadership', description: 'Leadership team' },
        { name: 'Careers', href: '/careers', description: 'Career opportunities' },
        { name: 'News', href: '/news', description: 'Company news' },
        { name: 'Events', href: '/events', description: 'Company events' },
        { name: 'Partners', href: '/partners', description: 'Partnership programs' },
        { name: 'Contact', href: '/contact', description: 'Contact information' },
        { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms of service' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie policy' },
        { name: 'Accessibility', href: '/accessibility', description: 'Accessibility information' },
        { name: 'Security', href: '/security', description: 'Security information' },
        { name: 'Compliance', href: '/compliance', description: 'Compliance information' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
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
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Site Map
                </h1>
                <p className="text-lg text-cyan-400 tracking-wider">
                  Complete Navigation Guide
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of services, solutions, and resources.
              Find exactly what you need to transform your business with cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-cyan-400 uppercase tracking-wider">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="block p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/70 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {link.description}
                          </p>
                        </div>
                        <div className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                          →
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-16 space-x-4">
          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
          >
            Contact Us
          </Link>
          <Link
            to="/help"
            className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300 font-semibold"
          >
            Get Help
          </Link>
          <Link
            to="/search"
            className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300 font-semibold"
          >
            Search Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;