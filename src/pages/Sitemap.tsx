import { Link } from 'react-router-dom';
import { Home, Users, Building, BookOpen, MessageCircle, Zap, Brain, Cloud, Shield, ShoppingCart, Code, Globe, ArrowRight, Star, FileText, Calendar, HelpCircle, Target, TrendingUp, Rocket, Network, DollarSign } from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: unknown;
  color: string;
  pages: SitemapPage[];
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Data Analytics & AI',
    icon: BarChart3,
    links: [
      { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
      { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Healthcare data analysis' },
      { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'AI-powered trading' },
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    links: [
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', path: '/services/helpdesk', description: 'Customer support system' },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Performance tracking & insights' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support system' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio transcription service' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Returns processing system' },
    ]
  },
  {
    title: 'Industry Solutions',
    icon: Building,
    links: [
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Enterprise-grade solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare industry solutions' },
    ]
  },
  {
    title: 'Specialized Services',
    icon: Star,
    links: [
      { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', description: 'Legal document AI' },
      { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', description: 'Content creation AI' },
      { name: 'AI HR Platform', path: '/services/ai-hr-platform', description: 'HR automation platform' },
      { name: 'AI Content Creation', path: '/services/ai-content-creation', description: 'AI content generation' },
      { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity', description: 'AI security solutions' },
    ]
  },
  {
    title: 'Advanced Service Showcases',
    icon: Target,
    links: [
      { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', description: 'Revolutionary AI & Quantum Solutions' },
      { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', description: 'Cutting-edge Innovation & Emerging Tech' },
      { name: '2029 Cutting-Edge Services', path: '/zion-cutting-edge-services-2029', description: 'Future-ready Technology Solutions' },
      { name: 'Comprehensive Services 2025', path: '/comprehensive-services-showcase-2025', description: 'Comprehensive service overview' },
      { name: 'Innovative Services 2025', path: '/innovative-services-showcase-2025', description: 'Innovative service showcase' },
      { name: 'Ultimate Innovative Services 2025', path: '/ultimate-innovative-services-showcase-2025', description: 'Ultimate innovative services' },
      { name: 'New Services 2025', path: '/new-services-showcase-2025', description: 'New service offerings' },
    ]
  },
  {
    title: 'Pricing & Guides',
    icon: DollarSign,
    links: [
      { name: 'Comprehensive Pricing 2026', path: '/comprehensive-pricing-2026', description: '2026 pricing guide' },
      { name: 'Comprehensive Pricing 2028', path: '/comprehensive-pricing-2028', description: '2028 pricing guide' },
      { name: 'Comprehensive Pricing Guide 2027', path: '/comprehensive-pricing-guide-2027', description: '2027 pricing guide' },
    ]
  }
];

interface SitemapSection {
  title: string;
  icon: any;
  description: string;
  links: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
}

const Sitemap: React.FC = () => {
  const sitemapSections: SitemapSection[] = [
    {
      title: 'Main Pages',
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
        { name: 'SMB Solutions', href: '/solutions/smb', description: 'Small to medium business growth', featured: false },
        { name: 'Startup Solutions', href: '/solutions/startup', description: 'Accelerate your startup growth', featured: false },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', description: 'Industry 4.0 and smart manufacturing', featured: false },
        { name: 'Retail Solutions', href: '/solutions/retail', description: 'E-commerce and retail innovation', featured: false },
        { name: 'Education Solutions', href: '/solutions/education', description: 'Educational technology solutions', featured: false },
        { name: 'Energy Solutions', href: '/solutions/energy', description: 'Energy sector digital transformation', featured: false }
      ]
    },
    {
      title: 'Resources & Support',
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
    {
      title: 'Interactive & Demo',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      pages: [
        { name: 'Interactive Demos', href: '/demo', description: 'Try our AI services and solutions', featured: true },
        { name: 'Schedule Demo', href: '/schedule-demo', description: 'Book a personalized demo session', featured: true },
        { name: 'Request Quote', href: '/request-quote', description: 'Get a custom quote for your needs', featured: true },
        { name: 'Marketplace', href: '/marketplace', description: 'Browse and purchase our services', featured: true }
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: FileText,
      color: 'from-gray-500 to-slate-500',
      pages: [
        { name: 'Privacy Policy', href: '/privacy', description: 'Data privacy and protection policy', featured: true },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions of service', featured: true },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and preferences', featured: true },
        { name: 'Legal Information', href: '/legal', description: 'Legal notices and compliance', featured: false }
      ]
    },
    {
      title: 'Specialized Services',
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
    <>
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-full mb-6">
              <Map className="w-8 h-8 text-zion-cyan" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Navigate through our comprehensive website structure to find exactly what you're looking for.
            </p>
          </motion.div>

          {/* Main Pages */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Home className="w-6 h-6 text-zion-cyan mr-3" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-3">
                      <page.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{page.description}</p>
                  <Link 
                    to={page.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors group-hover:translate-x-1"
                  >
                    Visit Page
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Services */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Settings className="w-6 h-6 text-zion-cyan mr-3" />
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicePages.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-3">
                      <service.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors group-hover:translate-x-1"
                  >
                    Explore Service
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Legal Pages */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Shield className="w-6 h-6 text-zion-cyan mr-3" />
              Legal & Policies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-3">
                      <page.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{page.description}</p>
                  <Link 
                    to={page.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors group-hover:translate-x-1"
                  >
                    Read Policy
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-16 border-t border-zion-blue-light/20"
          >
            <p className="text-zion-slate-light mb-4">
              Can't find what you're looking for? Contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-semibold"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300 font-semibold"
              >
                Help Center
              </Link>
            </div>
            <p className="text-zion-slate-light text-sm mt-8">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}


export default Sitemap;