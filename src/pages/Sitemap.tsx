import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Server,
  Rocket,
  Shield,
  Cloud,
  Atom,
  Sparkles,
  TrendingUp,
  Building,
  Heart,
  DollarSign,
  Truck,
  BookOpen,
  Satellite,
  Users,
  FileText,
  HelpCircle,
  MessageCircle,
  Code,
  Cpu,
  Globe,
  Zap
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Core Pages',
      icon: Zap,
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About', href: '/about', description: 'Company information' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' },
        { name: 'Services', href: '/services', description: 'Our service offerings' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership programs' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Privacy', href: '/privacy', description: 'Privacy policy' },
        { name: 'Accessibility', href: '/accessibility', description: 'Accessibility information' },
        { name: 'System Status', href: '/status', description: 'Service status' }
      ]
    },
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered business insights' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated compliance management' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI sales automation' },
        { name: 'AI-Powered SEO', href: '/services/ai-seo', description: 'AI-driven SEO optimization' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment', description: 'AI interview evaluation' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', description: 'Content creation automation' },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', description: 'Automated customer service' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI project coordination' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Financial data analysis' },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', description: 'Legal document processing' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'Automated trading systems' },
        { name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite', description: 'Content generation platform' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Workflow automation' },
        { name: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform', description: 'Data management' },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', description: 'CX insights' },
        { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management', description: 'Risk assessment' },
        { name: 'AI HR Talent Acquisition', href: '/services/ai-hr-talent-acquisition', description: 'Talent recruitment' },
        { name: 'AI IoT Edge Computing', href: '/services/ai-iot-edge-computing', description: 'Edge AI solutions' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', description: 'Predictive analytics' },
        { name: 'AI Sustainable Technology', href: '/services/ai-sustainable-technology', description: 'Green AI solutions' },
        { name: 'AI Quantum Machine Learning', href: '/services/ai-quantum-machine-learning', description: 'Quantum AI' },
        { name: 'AI Supply Chain Risk Management', href: '/services/ai-supply-chain-risk-management', description: 'Supply chain AI' },
        { name: 'AI ESG Compliance Platform', href: '/services/ai-esg-compliance-platform', description: 'ESG compliance' },
        { name: 'AI Digital Twin Platform', href: '/services/ai-digital-twin-platform', description: 'Digital twin solutions' },
        { name: 'AI Quantum Computing Platform', href: '/services/ai-quantum-computing-platform', description: 'Quantum computing' },
        { name: 'AI Edge Computing Platform', href: '/services/ai-edge-computing-platform', description: 'Edge computing' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'HR automation' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'Content generation' },
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', description: 'Research automation' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain AI' }
      ]
    },
    {
      title: 'Technology Services',
      icon: Server,
      links: [
        { name: 'Cloud Computing', href: '/services/cloud-computing', description: 'Scalable cloud solutions' },
        { name: 'DevOps & CI/CD', href: '/services/devops', description: 'Development operations' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data insights' },
        { name: 'API Development', href: '/services/api-development', description: 'API solutions' },
        { name: 'Mobile Development', href: '/services/mobile-development', description: 'Mobile apps' },
        { name: 'Web Development', href: '/services/web-development', description: 'Web applications' },
        { name: 'Database Management', href: '/services/database-management', description: 'Database solutions' },
        { name: 'Infrastructure as Code', href: '/services/infrastructure-as-code', description: 'IaC solutions' },
        { name: 'Microservices Architecture', href: '/services/microservices', description: 'Microservices design' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      links: [
        { name: 'Healthcare Technology', href: '/industries/healthcare', description: 'Healthcare solutions' },
        { name: 'Financial Services', href: '/industries/financial', description: 'FinTech solutions' },
        { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Manufacturing tech' },
        { name: 'Retail & E-commerce', href: '/industries/retail', description: 'Retail solutions' },
        { name: 'Education Technology', href: '/industries/education', description: 'EdTech solutions' },
        { name: 'Energy & Utilities', href: '/industries/energy', description: 'Energy solutions' },
        { name: 'Transportation & Logistics', href: '/industries/transportation', description: 'Transport solutions' },
        { name: 'Real Estate', href: '/industries/real-estate', description: 'Real estate tech' },
        { name: 'Government', href: '/industries/government', description: 'Government solutions' },
        { name: 'Non-Profit', href: '/industries/non-profit', description: 'Non-profit tech' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      links: [
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', href: '/api/docs', description: 'API documentation' },
        { name: 'Developer Portal', href: '/developers', description: 'Developer resources' },
        { name: 'Knowledge Base', href: '/knowledge-base', description: 'Help articles' },
        { name: 'Video Tutorials', href: '/tutorials', description: 'Learning videos' },
        { name: 'Webinars', href: '/webinars', description: 'Educational content' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'Research papers' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'News & Updates', href: '/news', description: 'Company news' }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete site navigation and structure for Zion Tech Group website."
        keywords="sitemap, navigation, website structure, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
              <Globe className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Site Map
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Navigate our website easily with this comprehensive overview of all pages and sections.
            </p>
          </motion.div>

          {/* Sitemap Sections */}
          <div className="space-y-12">
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      className="group"
                    >
                      <a
                        href={link.href}
                        className="block p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 rounded-lg transition-all duration-300 group-hover:scale-105"
                      >
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
                          {link.name}
                        </h3>
                        <p className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors duration-200">
                          {link.description}
                        </p>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Need Help Finding Something?</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate our website and find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contact Support
              </a>
              <a
                href="/search"
                className="border border-pink-400 text-pink-400 hover:bg-pink-400/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Search Site
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}