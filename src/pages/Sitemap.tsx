<<<<<<< HEAD
import {}
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
  ArrowRight,  Star,
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
  DollarSign} from 'lucide-react';

interface SitemapSection {}
  title: string;
  icon: unknown;
  color: string;
  pages: SitemapPage[]}
interface SitemapPage {}
  name: string;
  href: string;
  description: string;
  featured?: boolean}
;
const Sitemap: React.FC = props {}
  const sitemapSections: SitemapSection[] = []
    {}
'
''
'''
      title: 'Main Pages',''
      icon: Home,'''
      color: 'from-blue-500 to-cyan-500',
      pages: []
        {}
'
''
'''
          name: 'Home','''
          href: '/','''
          description: 'Main landing page with company overview and services',
          featured: true},
        {}
'
''
'''
          name: 'About','''
          href: '/about','''
          description: 'Company information, mission, and team details',
          featured: true},
        {}
'
''
'''
          name: 'Contact','''
          href: '/contact','''
          description: 'Contact information and inquiry forms',
          featured: true},
        {}
'
''
'''
          name: 'Pricing','''
          href: '/pricing','''
          description: 'Service pricing and package information',
          featured: true},
        {}
'
''
'''
          name: 'Careers','''
          href: '/careers','''
          description: 'Job opportunities and career information',
          featured: false},
        {}
'
''
'''
          name: 'Partners','''
          href: '/partners','''
          description: 'Partnership opportunities and programs',
          featured: false}
      ]},
    {}
'
''
'''
      title: 'AI & Machine Learning Services',''
      icon: Brain,'''
      color: 'from-purple-500 to-pink-500',
      pages: []
        {}
'
''
'''
          name: 'AI Business Intelligence','''
          href: '/services/ai-business-intelligence','''
          description: 'AI-powered business analytics and insights',
          featured: true},
        {}
'
''
'''
          name: 'AI Content Creation','''
          href: '/services/ai-content-creation','''
          description: 'AI-generated content and copywriting',
          featured: true},
        {}
'
''
'''
          name: 'AI Cybersecurity','''
          href: '/services/ai-cybersecurity','''
          description: 'AI-powered security and threat detection',
          featured: true},
        {}
'
''
'''
          name: 'AI Financial Analytics','''
          href: '/services/ai-financial-analytics','''
          description: 'Financial data analysis and insights',
          featured: true},
        {}
'
''
'''
          name: 'AI Healthcare Analytics','''
          href: '/services/ai-healthcare-analytics','''
          description: 'Healthcare data analysis and insights',
          featured: true},
        {}
'
''
'''
          name: 'AI HR Platform','''
          href: '/services/ai-hr-platform','''
          description: 'Human resources automation and analytics',
          featured: true},
        {}
'
''
'''
          name: 'AI Marketing Automation','''
          href: '/services/ai-marketing-automation','''
          description: 'Intelligent marketing campaigns',
          featured: true},
        {}
'
''
'''
          name: 'AI Supply Chain Optimization','''
          href: '/services/ai-supply-chain-optimization','''
          description: 'Supply chain AI and optimization',
          featured: true},
        {}
'
''
'''
          name: 'AI Workflow Orchestrator','''
          href: '/services/ai-workflow-orchestrator','''
          description: 'AI-powered workflow automation',
          featured: true},
        {}
'
''
'''
          name: 'AI Autonomous Research Assistant','''
          href: '/services/ai-autonomous-research-assistant','''
          description: 'Research automation and insights',
          featured: true},
        {}
'
''
'''
          name: 'AI Content Marketing Suite','''
          href: '/services/ai-content-marketing-suite','''
          description: 'Comprehensive content marketing platform',
          featured: true},
        {}
'
''
'''
          name: 'AI Quantum Hybrid Platform','''
          href: '/services/ai-quantum-hybrid-platform','''
          description: 'Quantum-AI integration platform',
          featured: true}
      ]},
    {}
'
''
'''
      title: 'Cloud & Infrastructure Services',''
      icon: Cloud,'''
      color: 'from-green-500 to-blue-500',
      pages: []
        {}
'
''
'''
          name: 'Cloud DevOps','''
          href: '/services/cloud-devops','''
          description: 'Cloud infrastructure and DevOps services',
          featured: true},
        {}
'
''
'''
          name: 'IT Infrastructure','''
          href: '/services/it-infrastructure','''
          description: 'Enterprise infrastructure management',
          featured: true},
        {}
'
''
'''
          name: 'Digital Twin Platform','''
          href: '/services/digital-twin','''
          description: 'Virtual replicas and simulation',
          featured: true},
        {}
'
''
'''
          name: 'Data Analytics','''
          href: '/services/data-analytics','''
          description: 'Business intelligence and data insights',
          featured: true},
        {}
'
''
'''
          name: 'IoT Edge Computing','''
          href: '/services/iot-edge-computing','''
          description: 'Smart device networks and edge computing',
          featured: true},
        {}
'
''
'''
          name: 'AI DevOps Automation Platform','''
          href: '/services/ai-devops-automation-platform','''
          description: 'AI-powered DevOps automation',
          featured: true}
      ]},
    {}
'
''
'''
      title: 'Security & Compliance Services',''
      icon: Shield,'''
      color: 'from-red-500 to-orange-500',
      pages: []
        {}
'
''
'''
          name: 'Zero Trust Network Access','''
          href: '/services/zero-trust-network-access','''
          description: 'Modern security architecture',
          featured: true},
        {}
'
''
'''
          name: 'Security Headers & CSP','''
          href: '/services/security-headers-csp','''
          description: 'Web security hardening',
          featured: true},
        {}
'
''
'''
          name: 'DSR Privacy Portal','''
          href: '/services/dsr-portal','''
          description: 'GDPR/CCPA compliance portal',
          featured: true},
        {}
'
''
'''
          name: 'AI Cybersecurity Suite','''
          href: '/services/ai-cybersecurity-suite','''
          description: 'Advanced AI security solutions',
          featured: true},
        {}
'
''
'''
          name: 'AI Code Review Security Scanner','''
          href: '/services/ai-code-review-security-scanner','''
          description: 'Automated security code review',
          featured: true}
      ]},
    {}
'
''
'''
      title: 'Micro SaaS Solutions',''
      icon: ShoppingCart,'''
      color: 'from-yellow-500 to-orange-500',
      pages: []
        {}
'
''
'''
          name: 'Micro CRM','''
          href: '/services/micro-crm','''
          description: 'Customer relationship management',
          featured: true},
        {}
'
''
'''
          name: 'Helpdesk Platform','''
          href: '/services/helpdesk','''
          description: 'Customer support system',
          featured: true},
        {}
'
''
'''
          name: 'Website Analytics','''
          href: '/services/website-analytics','''
          description: 'Performance tracking and insights',
          featured: true},
        {}
'
''
'''
          name: 'Affiliate Tracking','''
          href: '/services/affiliate-tracking','''
          description: 'Affiliate marketing tracking',
          featured: true},
        {}
'
''
'''
          name: 'Mobile Survey','''
          href: '/services/mobile-survey','''
          description: 'Mobile feedback and surveys',
          featured: true},
        {}
'
''
'''
          name: 'AI Project Management','''
          href: '/services/ai-project-management','''
          description: 'AI-powered project management',
          featured: true},
        {}
'
''
'''
          name: 'AI Customer Support Automation','''
          href: '/services/ai-customer-support-automation','''
          description: 'Automated customer support',
          featured: true},
        {}
'
''
'''
          name: 'AI Financial Analytics','''
          href: '/services/ai-financial-analytics','''
          description: 'Financial analysis and insights',
          featured: true},
        {}
'
''
'''
          name: 'AI Marketing Automation','''
          href: '/services/ai-marketing-automation','''
          description: 'Marketing campaign automation',
          featured: true}
      ]},
    {}
'
''
'''
      title: 'Industry Solutions',''
      icon: Building,'''
      color: 'from-indigo-500 to-purple-500',
      pages: []
        {}
'
''
'''
          name: 'Enterprise Solutions','''
          href: '/solutions/enterprise','''
          description: 'Large-scale business transformations',
          featured: true},
        {}
'
''
'''
          name: 'Healthcare Solutions','''
          href: '/solutions/healthcare','''
          description: 'Digital health transformation',
          featured: true},
        {}
'
''
'''
          name: 'Financial Solutions','''
          href: '/solutions/financial','''
          description: 'Fintech innovation and compliance',
          featured: true},
        {}
'
''
'''
          name: 'Government Solutions','''
          href: '/solutions/government','''
          description: 'Public sector innovation',
          featured: false},
        {}
'
''
'''
          name: 'SMB Solutions','''
          href: '/solutions/smb','''
          description: 'Small to medium business growth',
          featured: false},
        {}
'
''
'''
          name: 'Startup Solutions','''
          href: '/solutions/startup','''
          description: 'Accelerate your startup growth',
          featured: false},
        {}
'
''
'''
          name: 'Manufacturing Solutions','''
          href: '/solutions/manufacturing','''
          description: 'Industry 4.0 and smart manufacturing',
          featured: false},
        {}
'
''
'''
          name: 'Retail Solutions','''
          href: '/solutions/retail','''
          description: 'E-commerce and retail innovation',
          featured: false},
        {}
'
''
'''
          name: 'Education Solutions','''
          href: '/solutions/education','''
          description: 'Educational technology solutions',
          featured: false},
        {}
'
''
'''
          name: 'Energy Solutions','''
          href: '/solutions/energy','''
          description: 'Energy sector digital transformation',
          featured: false}
      ]},
    {}
'
''
'''
      title: 'Resources & Support',''
      icon: BookOpen,'''
      color: 'from-orange-500 to-red-500',
      pages: []
        {}
'
''
'''
          name: 'Blog','''
          href: '/blog','''
          description: 'Latest industry trends and insights',
          featured: true},
        {}
'
''
'''
          name: 'Case Studies','''
          href: '/case-studies','''
          description: 'Real-world success stories',
          featured: true},
        {}
'
''
'''
          name: 'White Papers','''
          href: '/white-papers','''
          description: 'In-depth research and analysis',
          featured: true},
        {}
'
''
'''
          name: 'Webinars','''
          href: '/webinars','''
          description: 'Expert-led learning sessions',
          featured: true},
        {}
'
''
'''
          name: 'Documentation','''
          href: '/docs','''
          description: 'Technical guides and APIs',
          featured: true},
        {}
'
''
'''
          name: 'FAQ','''
          href: '/faq','''
          description: 'Frequently asked questions and help',
          featured: true},
        {}
'
''
'''
          name: 'Community','''
          href: '/community','''
          description: 'Developer community and forums',
          featured: true},
        {}
'
''
'''
          name: 'Training','''
          href: '/training','''
          description: 'Professional development and training',
          featured: false},
        {}
'
''
'''
          name: 'API Reference','''
          href: '/api-docs','''
          description: 'API documentation and reference',
          featured: false},
        {}
'
''
'''
          name: 'Developer Portal','''
          href: '/developers','''
          description: 'Developer resources and tools',
          featured: false}
      ]},
    {}
'
''
'''
      title: 'Interactive & Demo',''
      icon: Zap,'''
      color: 'from-cyan-500 to-blue-500',
      pages: []
        {}
'
''
'''
          name: 'Interactive Demos','''
          href: '/demo','''
          description: 'Try our AI services and solutions',
          featured: true},
        {}
'
''
'''
          name: 'Schedule Demo','''
          href: '/schedule-demo','''
          description: 'Book a personalized demo session',
          featured: true},
        {}
'
''
'''
          name: 'Request Quote','''
          href: '/request-quote','''
          description: 'Get a custom quote for your needs',
          featured: true},
        {}
'
''
'''
          name: 'Marketplace','''
          href: '/marketplace','''
          description: 'Browse and purchase our services',
          featured: true}
      ]},
    {}
'
''
'''
      title: 'Legal & Compliance',''
      icon: FileText,'''
      color: 'from-gray-500 to-slate-500',
      pages: []
        {}
'
''
'''
          name: 'Privacy Policy','''
          href: '/privacy','''
          description: 'Data privacy and protection policy',
          featured: true},
        {}
'
''
'''
          name: 'Terms of Service','''
          href: '/terms','''
          description: 'Terms and conditions of service',
          featured: true},
        {}
'
''
'''
          name: 'Cookie Policy','''
          href: '/cookies','''
          description: 'Cookie usage and preferences',
          featured: true},
        {}
'
''
'''
          name: 'Legal Information','''
          href: '/legal','''
          description: 'Legal notices and compliance',
          featured: false}
      ]},
    {}
'
''
'''
      title: 'Specialized Services',''
      icon: Target,'''
      color: 'from-pink-500 to-rose-500',
      pages: []
        {}
'
''
'''
          name: 'AI Sales Copilot','''
          href: '/services/ai-sales-copilot','''
          description: 'AI-powered sales assistance',
          featured: true},
        {}
'
''
'''
          name: 'Cloud FinOps Optimizer','''
          href: '/services/cloud-finops-optimizer','''
          description: 'Cloud cost optimization',
          featured: true},
        {}
'
''
'''
          name: 'AI Compliance Assistant','''
          href: '/services/ai-compliance-assistant','''
          description: 'Automated compliance monitoring',
          featured: true},
        {}
'
''
'''
          name: 'AI Auto Email Responder','''
          href: '/services/ai-auto-email-responder','''
          description: 'Intelligent email automation',
          featured: true},
        {}
'
''
'''
          name: 'Mobile Feedback Surveys','''
          href: '/services/mobile-feedback-surveys','''
          description: 'Customer feedback collection',
          featured: true},
        {}
'
''
'''
          name: 'AI Compliance Copilot','''
          href: '/services/ai-compliance-copilot','''
          description: 'Compliance automation platform',
          featured: true},
        {}
'
''
'''
          name: 'LLM Content Studio','''
          href: '/services/llm-content-studio','''
          description: 'Large language model content creation',
          featured: true},
        {}
'
''
'''
          name: 'FinOps Advisor','''
          href: '/services/finops-advisor','''
          description: 'Financial operations optimization',
          featured: true},
        {}
'
''
'''
          name: 'Returns Management','''
          href: '/services/returns-management','''
          description: 'Product returns automation',
          featured: true},
        {}
'
''
'''
          name: 'Email Sequencer','''
          href: '/services/email-sequencer','''
          description: 'Automated email sequences',
          featured: true},
        {}
'
''
'''
          name: 'Podcast Transcription','''
          href: '/services/podcast-transcription','''
          description: 'Audio content transcription',
          featured: true}
      ]}
  ];

  return()
    <div className="min-h-screen bg-slate-900 text-white pt-20">""""
      <div className="max-w-7xl mx-auto">""""
        <div className="text-center">""""
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">""""
            <SitemapIcon className="h-10 w-10 text-white"  />"""
          </div>"          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Complete Sitemap"""
          </h1>""""
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Navigate through our comprehensive website structure and discover;
            all the services, resources, and information available at Zion Tech;
            Group.
          </p>
        </div>"""
""""
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteStructure.map((section, sectionIndex) => (
            <div"""
              key={section.title}""""
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700""""
            >""""
              <div className="flex items-center space-x-3 mb-6">""""
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">""""
                  <section.icon className="w-5 h-5 text-white" />"""
                </div>""""
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>"""
""""
              <div className="space-y-4">"""
                {section.links.map((link, linkIndex) => (""""
                  <div key={link.path} className="group">
                    <Link"""
                      to={link.path}""""
                      className="block p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group-hover:border-cyan-500/50 border border-transparent""""
                    >""""
                      <div className="flex items-start justify-between">""""
                        <div className="flex-1">""""
                          <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">
                            {link.name}"""
                          </h3>""""
                          <p className="text-sm text-slate-300">
                            {link.description}
                          </p>"""
                        </div>""""
                        <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">""""
                          <ArrowRight className="w-4 h-4 text-cyan-400"  />                        </div>
                      </div>
                    </Link>
                  </div>) ) }
              </div>
            </div>) ) }
        </div>
"""
        {/* CTA Section */}""""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">""""
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center">""""
            <h2 className="text-3xl font-bold text-white mb-4">'
              Can't Find What You're Looking For?"""
            </h2>""""
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you navigate our services and find the;
              perfect solution for your business needs.
            </p>"""
""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"""
              <Link""""
                to="/contact""""
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors""""
              >""""
                <MessageCircle className="w-5 h-5 mr-2"  />                Contact Us;
              </Link>"""
              <Link""""
                to="/schedule-demo""""
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors""""
              >""""
                <Calendar className="w-5 h-5 mr-2"  />                Schedule Demo;
              </Link>"""
              <Link""""
                to="/faq""""
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors""""
              >""""
                <HelpCircle className="w-5 h-5 mr-2"  />                View FAQ;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};'"""
'"'"""
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {

  Globe,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Atom,
  Zap,
  Users,
  Building,
  Code,
  Database,
  Network,
  Lock,
  Eye,
  Heart,
  Factory,
  ShoppingCart,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  TrendingUp,
  BarChart3,
  PenTool,
  Server,
  Smartphone,
  Cpu,
  Truck,
  FileText,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Star,
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Award,
  ChevronRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface SitemapSection {

  title: string;
  icon: React.ComponentType<any>;
  description: string;
  links: SitemapLink[];
}

interface SitemapLink {

  name: string;
  path: string;
  description?: string;
  featured?: boolean;
}

const Sitemap: React.FC = () => {

  const sitemapSections: SitemapSection[] = [
    {

      title: 'Main Pages',
      icon: Globe,
      description: 'Core website pages and information',
      links: [
        { name: 'Home', path: '/', description: 'Main landing page', featured: true },
        { name: 'About Us', path: '/about', description: 'Company information and mission', featured: true },
        { name: 'Our Team', path: '/team', description: 'Meet our leadership and experts', featured: true },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us', featured: true },
        { name: 'News', path: '/news', description: 'Latest updates and announcements', featured: true },
        { name: 'Blog', path: '/blog', description: 'Industry insights and articles' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Search', path: '/search', description: 'Search our content and services' }
      ]
    },
    {

      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Artificial intelligence and machine learning solutions',
      links: [
        { name: 'AI Services Overview', path: '/ai-services', description: 'Comprehensive AI solutions', featured: true },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', path: '/services/ai-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', path: '/services/interview-assessment', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Generator', path: '/services/ai-content-generator', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support', description: 'Intelligent support automation' },
        { name: 'AI Autonomous Research', path: '/services/ai-autonomous-research-assistant', description: 'Automated research capabilities' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project management' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Marketing automation with AI' }
      ]
    },
    {

      title: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum computing solutions',
      links: [
        { name: 'Quantum Computing Services', path: '/services/quantum-computing', description: 'Quantum computing solutions', featured: true },
        { name: 'Quantum AI Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'AI and quantum computing integration' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum-enhanced ML algorithms' },
        { name: 'Quantum Financial Trading', path: '/services/quantum-financial-trading', description: 'Quantum algorithms for finance' },
        { name: 'Quantum Neural Networks', path: '/services/quantum-neural-network-platform', description: 'Quantum neural network solutions' },
        { name: 'Quantum Edge Computing', path: '/services/quantum-edge-computing-platform', description: 'Edge computing with quantum capabilities' }
      ]
    },
    {

      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and DevOps automation',
      links: [
        { name: 'Cloud DevOps Services', path: '/services/cloud-devops', description: 'Cloud and DevOps solutions', featured: true },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transitions' },
        { name: 'Container Orchestration', path: '/services/kubernetes', description: 'Kubernetes and container management' },
        { name: 'Infrastructure as Code', path: '/services/infrastructure-as-code', description: 'Automated infrastructure deployment' }
      ]
    },
    {

      title: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security and compliance solutions',
      links: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Comprehensive security solutions', featured: true },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered threat detection' },
        { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance portal' },
        { name: 'Zero Trust Network', path: '/services/zero-trust-network-access', description: 'Zero trust security architecture' },
        { name: 'Threat Intelligence', path: '/services/ai-autonomous-threat-intelligence', description: 'AI-powered threat analysis' },
        { name: 'Mobile Security', path: '/services/ai-autonomous-mobile-security', description: 'Mobile device security' },
        { name: 'Forensics & Investigation', path: '/services/ai-autonomous-forensics', description: 'Digital forensics with AI' }
      ]
    },
    {

      title: 'Digital Transformation',
      icon: Rocket,
      description: 'Strategic technology consulting and transformation',
      links: [
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic transformation consulting', featured: true },
        { name: 'IT Consulting', path: '/services/it-consulting', description: 'Technology strategy and planning' },
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Business Intelligence', path: '/services/business-intelligence', description: 'Performance metrics and reporting' },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence and insights' },
        { name: 'Process Optimization', path: '/services/process-optimization', description: 'Workflow and process improvement' },
        { name: 'Change Management', path: '/services/change-management', description: 'Organizational change support' }
      ]
    },
    {

      title: 'Micro SaaS Solutions',
      icon: Zap,
      description: 'Affordable software solutions for small businesses',
      links: [
        { name: 'Micro SaaS Platform', path: '/micro-saas', description: 'Micro SaaS solutions overview', featured: true },
        { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', path: '/services/helpdesk', description: 'Customer support system' },
        { name: 'Project Management', path: '/services/project-management', description: 'Project tracking and collaboration' },
        { name: 'Inventory Management', path: '/services/inventory-management', description: 'Stock and inventory tracking' },
        { name: 'Accounting Software', path: '/services/accounting-software', description: 'Financial management tools' },
        { name: 'HR Platform', path: '/services/ai-hr-platform', description: 'Human resources management' }
      ]
    },
    {

      title: 'Emerging Technologies',
      icon: TrendingUp,
      description: 'Cutting-edge and future technologies',
      links: [
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks', featured: true },
        { name: 'Blockchain Solutions', path: '/services/blockchain', description: 'Distributed ledger technology' },
        { name: 'Space Technology', path: '/services/space-tech', description: 'Space and satellite solutions' },
        { name: 'Metaverse Development', path: '/services/metaverse-development', description: 'Virtual world creation' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Green technology solutions' },
        { name: 'Green Computing', path: '/services/green-computing', description: 'Energy-efficient computing' },
        { name: '5G Solutions', path: '/services/5g-solutions', description: 'Next-generation network infrastructure' }
      ]
    },
    {

      title: 'Industry Solutions',
      icon: Building,
      description: 'Industry-specific technology solutions',
      links: [
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions', featured: true },
        { name: 'Financial Services', path: '/solutions/financial', description: 'Fintech and banking solutions' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Industry 4.0 and smart manufacturing' },
        { name: 'Retail & E-commerce', path: '/solutions/retail', description: 'Digital retail transformation' },
        { name: 'Education Technology', path: '/solutions/education', description: 'EdTech and learning platforms' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector technology' },
        { name: 'Energy & Utilities', path: '/solutions/energy', description: 'Energy sector technology' }
      ]
    },
    {

      title: 'Resources & Support',
      icon: BookOpen,
      description: 'Documentation, support, and learning resources',
      links: [
        { name: 'Help Center', path: '/help', description: 'Comprehensive help and support', featured: true },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', path: '/api', description: 'API documentation and guides' },
        { name: 'Training Programs', path: '/training', description: 'Skill development courses' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars and events' },
        { name: 'White Papers', path: '/white-papers', description: 'Industry research and insights' },
        { name: 'Video Tutorials', path: '/tutorials', description: 'Step-by-step video guides' }
      ]
    },
    {

      title: 'Company & Legal',
      icon: Users,
      description: 'Company information and legal documents',
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data privacy and protection', featured: true },
        { name: 'Terms of Service', path: '/terms', description: 'Service terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage and management' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete website structure' },
        { name: 'Press Kit', path: '/press', description: 'Media resources and information' },
        { name: 'Investor Relations', path: '/investors', description: 'Financial and investor information' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities and culture' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', path: '/contact', icon: ArrowRight, featured: true },
    { name: 'Request Quote', path: '/request-quote', icon: DollarSign },
    { name: 'Schedule Demo', path: '/demo', icon: Calendar },
    { name: 'Support Portal', path: '/support', icon: HelpCircle },
    { name: 'Partner Program', path: '/partners', icon: Users },
    { name: 'Developer Hub', path: '/developer', icon: Code }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group's website. Find all our services, solutions, and resources organized by category."
        keywords="sitemap, Zion Tech Group, website structure, services, solutions, navigation"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete Website
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive website structure and discover all the services, 
              solutions, and resources Zion Tech Group has to offer.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`p-4 rounded-xl transition-all duration-300 text-center group ${

                    link.featured
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 hover:border-cyan-400/60'
                      : 'bg-white/5 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40'
                  }`}
                >
                  <div className={`w-8 h-8 mx-auto mb-2 ${

                    link.featured ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                  } transition-colors duration-300`}>
                    <link.icon className="w-full h-full" />
                  </div>
                  <p className={`text-sm font-medium ${

                    link.featured ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  } transition-colors duration-300`}>
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
                    <section.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    <p className="text-gray-400 text-sm">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.path}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        {link.featured && (
                          <Star className="w-4 h-4 text-yellow-400" />
                        )}
                        <div>
                          <p className={`font-medium transition-colors duration-200 ${

                            link.featured 
                              ? 'text-cyan-400' 
                              : 'text-white group-hover:text-cyan-400'
                          }`}>
                            {link.name}
                          </p>
                          {link.description && (
                            <p className="text-gray-400 text-sm">{link.description}</p>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate 
              our services and find the right solution for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Middletown, DE</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/search"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Search Our Site
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
