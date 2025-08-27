import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  Star,
  Cpu,
  Atom,
  Network,
  BarChart3,
  TrendingUp,
  Heart,
  Lock,
  Eye,
  Leaf,
  Rocket,
  Building,
  Target,
  Code,
  Server,
  Smartphone,
  Database,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Newspaper,
  FileText,
  Video,
  TestTube,
  CheckCircle,
  Activity,
  GraduationCap,
  Sparkles,
  Award,
  Truck,
  Coins,
  Satellite
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Globe,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'Company information' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' },
        { name: 'Services Overview', path: '/services', description: 'All services' },
        { name: 'Solutions', path: '/solutions', description: 'Industry solutions' },
        { name: 'Team', path: '/team', description: 'Our team' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership opportunities' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'News', path: '/news', description: 'Company news' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', path: '/white-papers', description: 'Research and insights' },
        { name: 'Webinars', path: '/webinars', description: 'Educational content' },
        { name: 'Training', path: '/training', description: 'Learning programs' },
        { name: 'Support', path: '/support', description: 'Customer support' },
        { name: 'Help Center', path: '/help', description: 'Self-service help' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get pricing' },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing' },
        { name: 'Status', path: '/status', description: 'System status' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy information' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookies Policy', path: '/cookies', description: 'Cookie information' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility features' }
      ]
    },
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', path: '/services/ai-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', path: '/services/interview-assessment', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Generator', path: '/services/ai-content-generator', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support', description: 'Intelligent support automation' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project coordination' },
        { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', description: 'Automated customer service' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Financial data analysis' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Marketing process automation' },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', description: 'Independent research automation' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Supply chain efficiency' },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Content marketing tools' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', description: 'Legal document processing' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Healthcare data analysis' },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'Automated trading systems' },
        { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', description: 'Content creation tools' },
        { name: 'AI Autonomous Code Reviewer', path: '/services/ai-autonomous-code-reviewer', description: 'Automated code review' }
      ]
    },
    {
      title: 'Cloud & DevOps Services',
      icon: Cloud,
      links: [
        { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' },
        { name: 'IT Consulting', path: '/services/it-consulting', description: 'Technology strategy & planning' }
      ]
    },
    {
      title: 'Cybersecurity Services',
      icon: Shield,
      links: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Advanced security solutions' },
        { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Secure network access' },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      links: [
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum ML algorithms' },
        { name: 'Space Technology', path: '/services/space-tech', description: 'Space tech solutions' }
      ]
    },
    {
      title: 'Data & Analytics Services',
      icon: BarChart3,
      links: [
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
        { name: 'Business Intelligence', path: '/services/business-intelligence', description: 'Performance metrics & reporting' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'AI-powered analytics' },
        { name: 'Performance Analytics', path: '/components/PerformanceAnalytics', description: 'Performance monitoring' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      links: [
        { name: 'Micro SaaS Platform', path: '/services/micro-saas-solutions', description: 'Niche software solutions' },
        { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', path: '/services/helpdesk', description: 'Customer support system' },
        { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation' },
        { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio to text conversion' },
        { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey tools' },
        { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
        { name: 'Website Analytics', path: '/services/website-analytics', description: 'Website performance tracking' },
        { name: 'Returns Management', path: '/services/returns-management', description: 'Product returns handling' },
        { name: 'Customer Feedback Surveys', path: '/services/mobile-feedback-surveys', description: 'Customer feedback collection' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      links: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare industry solutions' },
        { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Manufacturing optimization' },
        { name: 'Green IT Solutions', path: '/services/green-it', description: 'Sustainable technology' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Eco-friendly solutions' }
      ]
    },
    {
      title: 'Marketplace',
      icon: ShoppingCart,
      links: [
        { name: 'Marketplace Home', path: '/marketplace', description: 'AI services marketplace' },
        { name: 'Products', path: '/marketplace/products', description: 'AI products' },
        { name: 'Talent', path: '/marketplace/talent', description: 'AI experts and consultants' },
        { name: 'Equipment', path: '/marketplace/equipment', description: 'AI hardware and tools' },
        { name: 'Services', path: '/marketplace/services', description: 'AI services' }
      ]
    },
    {
      title: 'Research & Development',
      icon: TestTube,
      links: [
        { name: 'Research & Development', path: '/research-development', description: 'R&D initiatives' },
        { name: 'AI Research', path: '/ai-research', description: 'AI research projects' },
        { name: 'Innovation Hub', path: '/innovation-hub', description: 'Innovation center' },
        { name: 'Technology Lab', path: '/tech-lab', description: 'Technology laboratory' }
      ]
    },
    {
      title: 'Developer Resources',
      icon: Code,
      links: [
        { name: 'Developer Portal', path: '/developers', description: 'Developer resources' },
        { name: 'API Documentation', path: '/docs', description: 'API documentation' },
        { name: 'SDK Downloads', path: '/sdk', description: 'Software development kits' },
        { name: 'Code Examples', path: '/examples', description: 'Code samples and examples' },
        { name: 'Integration Guides', path: '/integrations', description: 'Integration tutorials' }
      ]
    },
    {
      title: 'Specialized Services',
      icon: Star,
      links: [
        { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support services' },
        { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'Large language model content' },
        { name: 'Mobile Launch', path: '/mobile-launch', description: 'Mobile app development' },
        { name: 'Analytics Dashboard', path: '/analytics', description: 'Analytics and reporting' },
        { name: 'Match Service', path: '/match', description: 'Service matching' },
        { name: 'Search', path: '/search', description: 'Site search functionality' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete navigation guide to all our AI services, solutions, and resources. Find everything you need on our comprehensive sitemap."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Globe className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Complete Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive collection of AI services, solutions, and resources. 
            Find exactly what you need to transform your business with cutting-edge technology.
          </p>
        </motion.div>

        {/* Sitemap Sections */}
        <motion.div 
          className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              variants={sectionVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.path}
                    className="block group hover:bg-slate-700/50 rounded-lg p-3 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-200">
                          {link.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {link.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Navigation */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold"
              >
                Back to Home
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200 font-semibold"
              >
                View All Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200 font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div 
          className="mt-12 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
