import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Server, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
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
  Crown,
  Sparkles,
  Flame,
  DollarSign,
  Workflow,
  Target,
  Building,
  FileText,
  Video,
  TestTube,
  CheckCircle,
  Briefcase,
  Newspaper,
  ArrowRight
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'Company information' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'Team', path: '/team', description: 'Meet our experts' },
        { name: 'News', path: '/news', description: 'Company updates' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'Help Center', path: '/help', description: 'Support resources' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get pricing' },
        { name: 'Pricing', path: '/pricing', description: 'Service costs' },
        { name: 'Marketplace', path: '/marketplace', description: 'AI solutions marketplace' },
        { name: 'Login', path: '/login', description: 'Access your account' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' },
        { name: 'Search', path: '/search', description: 'Find services and content' },
      ]
    },
    {
      title: 'Featured Services',
      icon: Star,
      featured: true,
      links: [
        { name: '2026 Services Overview', path: '/services2026', description: 'Revolutionary AI & Quantum Solutions', featured: true },
        { name: '2027 Services Overview', path: '/services2027', description: 'Cutting-edge Innovation & Emerging Tech', featured: true },
        { name: 'AI Solutions Hub', path: '/ai-solutions', description: 'Comprehensive AI services', featured: true },
        { name: 'IT Services', path: '/it-services', description: 'Technology infrastructure solutions', featured: true },
        { name: 'Micro SaaS Solutions', path: '/micro-saas', description: 'Niche software solutions', featured: true },
        { name: 'Comprehensive Services', path: '/comprehensive-services', description: 'Full-service technology consulting', featured: true },
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
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing workflows' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Financial insights & predictions' },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', description: 'Independent research automation' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Supply chain intelligence' },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Complete content automation' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', description: 'Legal document processing' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'Automated trading systems' },
        { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', description: 'Creative content automation' },
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
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      icon: Shield,
      links: [
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security solutions' },
        { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Advanced network security' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection information' },
        { name: 'Security', path: '/security', description: 'Security practices & policies' },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      links: [
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', description: 'Predictive analytics' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum ML algorithms' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Green tech solutions' },
        { name: 'Green IT Solutions', path: '/services/green-it', description: 'Environmentally conscious IT' },
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      links: [
        { name: 'Micro SaaS Platform', path: '/services/micro-saas-solutions', description: 'Niche software solutions' },
        { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', path: '/services/helpdesk', description: 'Customer support system' },
        { name: 'Customer Feedback Surveys', path: '/services/mobile-feedback-surveys', description: 'Feedback collection tools' },
        { name: 'Returns Management', path: '/services/returns-management', description: 'Return process automation' },
        { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation workflows' },
        { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio-to-text conversion' },
        { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation' },
        { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
        { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile data collection' },
        { name: 'Website Analytics', path: '/services/website-analytics', description: 'Web performance insights' },
        { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support management' },
      ]
    },
    {
      title: 'Business Solutions',
      icon: Building,
      links: [
        { name: 'Solutions Overview', path: '/solutions', description: 'Industry-specific solutions' },
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large business solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Manufacturing Solutions', path: '/services/manufacturing-solutions', description: 'Industry 4.0 solutions' },
        { name: 'Talent Solutions', path: '/talent', description: 'Human resources technology' },
        { name: 'Equipment Services', path: '/equipment', description: 'Hardware & equipment' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation & R&D' },
        { name: 'Training', path: '/training', description: 'Professional development' },
        { name: 'Support', path: '/support', description: 'Technical support services' },
      ]
    },
    {
      title: 'Resources & Documentation',
      icon: FileText,
      links: [
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'Developer Portal', path: '/developers', description: 'Developer resources' },
        { name: 'API Reference', path: '/api', description: 'API documentation' },
        { name: 'White Papers', path: '/white-papers', description: 'Research papers' },
        { name: 'Webinars', path: '/webinars', description: 'Educational content' },
        { name: 'Status Page', path: '/status', description: 'Service status' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation guide' },
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection' },
        { name: 'Terms of Service', path: '/terms', description: 'Service terms' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete navigation guide for Zion Tech Group's AI, quantum computing, and technology services."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete navigation guide for Zion Tech Group's comprehensive suite of AI, quantum computing, 
            and cutting-edge technology services. Find everything you need to transform your business.
          </p>
        </motion.div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                  section.featured 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                    : 'bg-gradient-to-br from-cyan-400 to-blue-500'
                }`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${
                    section.featured ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {section.title}
                  </h2>
                  {section.featured && (
                    <span className="text-sm text-yellow-300">Featured</span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {link.name}
                        </div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-1">
                          {link.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Explore our services or get in touch to discuss how we can help transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="text-sm mt-2">
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
}
