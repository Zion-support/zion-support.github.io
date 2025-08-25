import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Building, 
  Users, 
  Heart, 
  Rocket, 
  Code, 
  BarChart3, 
  Target, 
  Network, 
  Eye, 
  Clock, 
  Star, 
  Globe, 
  FileText, 
  Calendar, 
  Video, 
  Zap, 
  TrendingUp, 
  ShoppingCart,
  Lock,
  Database,
  Palette,
  Workflow
} from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Star,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company' },
        { name: 'Our Mission', path: '/mission', description: 'Our vision and mission' },
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Our partnerships' }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      icon: Brain,
      pages: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Business Manager', path: '/services/ai-autonomous-business-manager', description: 'Intelligent business management' },
        { name: 'AI Business Platform', path: '/services/ai-autonomous-business-platform', description: 'Comprehensive business platform' },
        { name: 'AI Code Review', path: '/services/ai-autonomous-code-review', description: 'Intelligent code review automation' },
        { name: 'AI Creative Director', path: '/services/ai-autonomous-creative-director', description: 'AI-powered creative content generation' },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Intelligent process automation' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization' },
        { name: 'AI Content Generation', path: '/services/ai-content-generation-automation', description: 'Automated content creation' },
        { name: 'AI Consciousness Evolution', path: '/services/ai-consciousness-evolution', description: 'Advanced AI consciousness research' }
      ]
    },
    {
      title: 'Technology & Infrastructure',
      icon: Cpu,
      pages: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Complete security solutions' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions' },
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity' },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions' },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', description: 'Custom software solutions' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      pages: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', description: 'Decentralized applications' },
        { name: 'IoT Data Analytics', path: '/services/iot-data-analytics', description: 'Connected device management' },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Emerging Technology', path: '/emerging-tech', description: 'Cutting-edge technology solutions' }
      ]
    },
    {
      title: 'Solutions & Industries',
      icon: Building,
      pages: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'AI-powered healthcare solutions' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Fintech solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Smart manufacturing' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Digital retail transformation' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Government technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: FileText,
      pages: [
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and results' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Help Center', path: '/help', description: 'Support and documentation' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research papers' },
        { name: 'Testimonials', path: '/testimonials', description: 'Client success stories' }
      ]
    },
    {
      title: 'Business & Legal',
      icon: Shield,
      pages: [
        { name: 'Pricing', path: '/pricing', description: 'Transparent pricing plans' },
        { name: 'Marketplace', path: '/marketplace', description: 'Technology marketplace' },
        { name: 'Community', path: '/community', description: 'Join our community' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms of service' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie policy' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  const servicePages = [
    { name: 'AI Solutions', href: '/services/ai', icon: Brain, description: 'Machine Learning & AI Services' },
    { name: 'Cloud Infrastructure', href: '/services/cloud', icon: Cloud, description: 'AWS, Azure, GCP Solutions' },
    { name: 'Cybersecurity', href: '/services/security', icon: Shield, description: 'Security & Compliance' },
    { name: 'Digital Transformation', href: '/services/transformation', icon: Zap, description: 'Business Process Modernization' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Data protection and privacy' },
    { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie, description: 'Cookie usage information' },
  ];

  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-md rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <IconComponent className="w-6 h-6 mr-3 text-cyan-400" />
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => {
          const PageIcon = page.icon;
          return (
            <Link
              key={page.name}
              to={page.href}
              className="group p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-cyan-400/50"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PageIcon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {page.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zion Tech Group Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive range of services, solutions, and resources. 
            Find everything you need to transform your business with cutting-edge technology.
          </p>
        </div>
      </div>

        {/* Sitemap Content */}
        <div className="space-y-8">
          {renderPageSection('Main Pages', mainPages, Map)}
          {renderPageSection('Services', servicePages, Settings)}
          {renderPageSection('Legal & Support', legalPages, Shield)}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap;