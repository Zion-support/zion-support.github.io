import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  Brain, 
  Shield, 
  Cloud, 
  Server, 
  BarChart3, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Star,
  Atom,
  Network,
  Eye,
  PenTool,
  Globe,
  Cpu,
  Lock,
  TrendingUp,
  Rocket,
  Heart,
  Briefcase,
  Newspaper,
  FileText,
  Leaf,
  Building,
  Truck,
  Mail,
  Video,
  Satellite,
  TestTube,
  Code,
  Zap,
  Target
} from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: any;
  description: string;
  links: Array<{
    name: string;
    path: string;
    icon: any;
    description?: string;
  }>;
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Home,
    description: 'Core website pages and navigation',
    links: [
      { name: 'Home', path: '/', icon: Home, description: 'Main landing page' },
      { name: 'About Us', path: '/about', icon: Users, description: 'Company information and team' },
      { name: 'Contact', path: '/contact', icon: MessageCircle, description: 'Get in touch with us' },
      { name: 'Blog', path: '/blog', icon: BookOpen, description: 'Latest news and insights' },
      { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Job opportunities' },
      { name: 'Partners', path: '/partners', icon: Users, description: 'Partnership information' },
      { name: 'News', path: '/news', icon: Newspaper, description: 'Company news and updates' },
      { name: 'Case Studies', path: '/case-studies', icon: FileText, description: 'Success stories' },
      { name: 'FAQ', path: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
      { name: 'Help Center', path: '/help', icon: HelpCircle, description: 'Support and documentation' },
      { name: 'Pricing', path: '/pricing', icon: DollarSign, description: 'Service pricing information' },
      { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart, description: 'Product and service marketplace' },
      { name: 'Sitemap', path: '/sitemap', icon: FileText, description: 'This page' }
    ]
  },
  {
    title: 'AI & Machine Learning Services',
    icon: Brain,
    description: 'Advanced artificial intelligence and machine learning solutions',
    links: [
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3, description: 'Advanced analytics & ML insights' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization' },
      { name: 'AI-Powered SEO', path: '/services/ai-seo', icon: TrendingUp, description: 'Machine learning SEO optimization' },
      { name: 'Interview Assessment AI', path: '/services/interview-assessment', icon: Users, description: 'AI-powered candidate evaluation' },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: PenTool, description: 'Automated content creation' },
      { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', icon: MessageCircle, description: 'Intelligent support automation' },
      { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target, description: 'AI-driven project optimization' },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', icon: DollarSign, description: 'Intelligent financial insights' },
      { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain, description: 'AI-powered research automation' },
      { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: TrendingUp, description: 'Supply chain intelligence' },
      { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart, description: 'Healthcare AI solutions' },
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield, description: 'AI-powered security' }
    ]
  },
  {
    title: 'Cloud & Infrastructure Services',
    icon: Cloud,
    description: 'Cloud computing, DevOps, and infrastructure solutions',
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling' },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions' },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation' },
      { name: 'IT Consulting', path: '/it-consulting', icon: Cpu, description: 'Technology strategy & planning' },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap, description: 'Strategic technology consulting' }
    ]
  },
  {
    title: 'Cybersecurity Services',
    icon: Shield,
    description: 'Advanced security and compliance solutions',
    links: [
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening' },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance' },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', icon: Lock, description: 'Modern security architecture' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Cutting-edge and future technologies',
    links: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom, description: 'Next-gen computational power' },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network, description: 'Smart device networks' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Atom, description: 'Quantum-AI integration' },
      { name: 'Space Technology', path: '/space-tech', icon: Satellite, description: 'Space-based solutions' },
      { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye, description: 'Virtual system replicas' }
    ]
  },
  {
    title: 'Data & Analytics Services',
    icon: BarChart3,
    description: 'Business intelligence and data analytics solutions',
    links: [
      { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3, description: 'Business intelligence & insights' },
      { name: 'Website Analytics', path: '/services/website-analytics', icon: BarChart3, description: 'Performance tracking & insights' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Niche software solutions and platforms',
    links: [
      { name: 'Micro SaaS Platform', path: '/micro-saas', icon: ShoppingCart, description: 'Niche software solutions' },
      { name: 'Micro CRM', path: '/services/micro-crm', icon: Users, description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', path: '/services/helpdesk', icon: MessageCircle, description: 'Customer support system' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', icon: HelpCircle, description: 'IT support automation' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', icon: TrendingUp, description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', icon: TestTube, description: 'Mobile survey solutions' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', icon: Mail, description: 'Email automation' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', icon: Video, description: 'Audio transcription services' },
      { name: 'Returns Management', path: '/services/returns-management', icon: Truck, description: 'Returns processing automation' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: Building,
    description: 'Specialized solutions for specific industries',
    links: [
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building, description: 'Large enterprise solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart, description: 'Healthcare industry solutions' },
      { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', icon: Cpu, description: 'Manufacturing automation' },
      { name: 'Retail Solutions', path: '/retail-solutions', icon: ShoppingCart, description: 'Retail technology solutions' },
      { name: 'Government Solutions', path: '/government-solutions', icon: Building, description: 'Public sector solutions' },
      { name: 'Education Solutions', path: '/education-solutions', icon: BookOpen, description: 'Educational technology' }
    ]
  },
  {
    title: 'Service Showcases',
    icon: Star,
    description: 'Comprehensive service overviews and showcases',
    links: [
      { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', icon: Star, description: 'Revolutionary AI & Quantum Solutions' },
      { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', icon: Star, description: 'Cutting-edge Innovation & Emerging Tech' },
      { name: '2029 Cutting-Edge Services', path: '/zion-cutting-edge-services-2029', icon: Star, description: 'Future-ready Technology Solutions' },
      { name: 'AI Solutions Hub', path: '/ai-solutions', icon: Brain, description: 'Comprehensive AI services overview' }
    ]
  }
];

export function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zion Tech Group Sitemap
            </h1>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
              Complete overview of all our services, solutions, and resources. Navigate through our comprehensive technology ecosystem.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="text-cyan-300">{section.description}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                    className="group"
                  >
                    <Link
                      to={link.path}
                      className="block p-4 bg-zion-slate-dark/30 hover:bg-zion-slate-dark/50 border border-cyan-400/10 hover:border-cyan-400/30 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                          <link.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {link.name}
                          </h3>
                          {link.description && (
                            <p className="text-sm text-gray-400 mt-1">{link.description}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
              >
                Go Home
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Sitemap;
