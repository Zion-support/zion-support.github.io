
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need.
          </p>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteStructure.map((section, sectionIdx) => (
            <div key={sectionIdx} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.pages.map((page, pageIdx) => (
                  <Link
                    key={pageIdx}
                    to={page.path}
                    className="block p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {page.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">{page.description}</p>
                      </div>
                      <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/services"
              className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">🤖</div>
              <div className="font-semibold text-white">All Services</div>
            </Link>
            <Link
              to="/solutions/enterprise"
              className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-center hover:from-purple-600 hover:to-pink-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">💼</div>
              <div className="font-semibold text-white">Solutions</div>
            </Link>
            <Link
              to="/case-studies"
              className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-center hover:from-green-600 hover:to-emerald-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-white">Case Studies</div>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-center hover:from-orange-600 hover:to-red-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="font-semibold text-white">Contact Us</div>
            </Link>
          </div>
        </div>

        {/* SEO Information */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            This sitemap helps search engines and users navigate our website effectively. 
            All pages are optimized for SEO and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;