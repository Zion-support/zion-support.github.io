import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Target, 
  Rocket, 
  Atom, 
  Network,
  Eye,
  Cpu,
  Lock,
  MessageCircle,
  FileText,
  ShoppingCart,
  TrendingUp,
  Globe,
  Star,
  ArrowRight,
  Building,
  Heart,
  Factory,
  DollarSign,
  ShoppingBag,
  BookOpen,
  HelpCircle,
  Phone,
  MapPin,
  Mail
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'Company information' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' },
        { name: 'Services', path: '/services', description: 'Overview of all services' },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing information' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership information' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Help Center', path: '/help', description: 'Support and documentation' }
      ]
    },
    {
      title: 'Service Overviews',
      icon: Star,
      links: [
        { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', description: 'Revolutionary AI & Quantum Solutions' },
        { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', description: 'Cutting-edge Innovation & Emerging Tech' },
        { name: '2029 Cutting-Edge Services', path: '/zion-cutting-edge-services-2029', description: 'Future-ready Technology Solutions' },
        { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', path: '/it-services', description: 'Information Technology services' },
        { name: 'Micro SaaS', path: '/micro-saas', description: 'Micro Software as a Service' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project optimization' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
        { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', description: 'AI-powered workflow management' },
        { name: 'AI Data Governance Platform', path: '/services/ai-data-governance-platform', description: 'Data governance with AI' },
        { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics', description: 'Customer experience insights' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Supply chain optimization' },
        { name: 'AI Financial Risk Management', path: '/services/ai-financial-risk-management', description: 'Financial risk assessment' },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', description: 'Autonomous research AI' },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Content marketing automation' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Business intelligence with AI' },
        { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', description: 'Legal document processing' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Healthcare data analytics' },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'AI-powered trading' },
        { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', description: 'Content creation automation' },
        { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity', description: 'Cybersecurity with AI' },
        { name: 'AI HR Platform', path: '/services/ai-hr-platform', description: 'HR automation platform' },
        { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', description: 'Predictive maintenance AI' },
        { name: 'AI Content Creation', path: '/services/ai-content-creation', description: 'AI content generation' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      links: [
        { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      links: [
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Modern security architecture' },
        { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Comprehensive security solutions' }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Zap,
      links: [
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy & planning' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      links: [
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'Space Technology', path: '/services/space-tech', description: 'Space-based solutions' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum ML algorithms' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Green computing solutions' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      links: [
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Performance metrics & reporting' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      links: [
        { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support system' },
        { name: 'Website Analytics', path: '/services/website-analytics', description: 'Performance tracking & insights' },
        { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support system' },
        { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
        { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
        { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation' },
        { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio transcription service' },
        { name: 'Returns Management', path: '/services/returns-management', description: 'Returns processing system' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      links: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare industry solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Manufacturing industry solutions' },
        { name: 'Financial Solutions', path: '/solutions/finance', description: 'Financial industry solutions' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group's website. Find all our pages, services, and solutions organized by category." />
        <meta name="keywords" content="sitemap, navigation, pages, services, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Complete{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Sitemap
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Navigate through all our pages, services, and solutions. 
                Everything you need to know about Zion Tech Group is organized here.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-b border-cyan-400/10 pb-2 last:border-b-0">
                        <a
                          href={link.path}
                          className="block text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 mb-1"
                        >
                          {link.name}
                        </a>
                        <p className="text-gray-400 text-sm">{link.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Can't Find What You're{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Looking For?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team for personalized assistance and custom solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/help"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-cyan-400/30 transition-all duration-300"
                >
                  Help Center
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sitemap;
