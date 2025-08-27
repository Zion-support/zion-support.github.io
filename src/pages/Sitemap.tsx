import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Brain, 
  Zap, 
  Link as LinkIcon, 
  Settings, 
  Cloud, 
  Users, 
  Code, 
  Shield, 
  Database, 
  Leaf,
  Building2,
  Briefcase,
  FileText,
  HelpCircle,
  BarChart3,
  UserCheck,
  Server,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Sitemap() {
  const sitemapData = {
    main: [
      { name: 'Home', path: '/', icon: Home, description: 'Main homepage with company overview and services' },
      { name: 'About Us', path: '/about', icon: Building2, description: 'Company information and mission' },
      { name: 'Contact', path: '/contact', icon: Mail, description: 'Get in touch with our team' },
      { name: 'Login', path: '/login', icon: Users, description: 'Access your account' }
    ],
    aiServices: [
      { name: 'AI Customer Success Automation', path: '/ai-customer-success-automation', icon: Brain, description: 'AI-powered customer success automation' },
      { name: 'AI Content Marketing Automation', path: '/ai-content-marketing-automation', icon: Brain, description: 'Automated content marketing with AI' },
      { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution', icon: Brain, description: 'Advanced AI consciousness research' },
      { name: 'AI Autonomous Ecosystem', path: '/ai-autonomous-ecosystem', icon: Brain, description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', path: '/ai-ethics-governance', icon: Brain, description: 'Ethical AI development frameworks' },
      { name: 'AI Business Process Automation', path: '/ai-autonomous-business-process-automation', icon: Brain, description: 'Intelligent process automation' },
      { name: 'AI Customer Intelligence Platform', path: '/ai-customer-intelligence-platform', icon: Brain, description: 'Customer insights and analytics' },
      { name: 'AI Financial Fraud Detection', path: '/ai-financial-fraud-detection', icon: Brain, description: 'AI-powered fraud prevention' },
      { name: 'Autonomous Vehicle AI', path: '/autonomous-vehicle-ai', icon: Brain, description: 'Next-generation vehicle AI systems' }
    ],
    quantumServices: [
      { name: 'Quantum Encryption Gateway', path: '/quantum-encryption-gateway', icon: Zap, description: 'Unbreakable quantum encryption' },
      { name: 'Quantum Threat Detection', path: '/quantum-threat-detection', icon: Zap, description: 'Advanced threat detection with quantum computing' },
      { name: 'Quantum Identity Verification', path: '/quantum-identity-verification', icon: Zap, description: 'Quantum-secure identity systems' },
      { name: 'Quantum Compliance Automation', path: '/quantum-compliance-automation', icon: Zap, description: 'Automated compliance using quantum tech' },
      { name: 'Quantum Network Security', path: '/quantum-network-security', icon: Zap, description: 'Quantum-resistant network protocols' },
      { name: 'Quantum Networking', path: '/quantum-networking', icon: Zap, description: 'Revolutionary quantum networking' },
      { name: 'Quantum Data Center', path: '/quantum-data-center', icon: Zap, description: 'Next-generation quantum data centers' },
      { name: 'Quantum Materials Discovery', path: '/quantum-materials-discovery', icon: Zap, description: 'Accelerated materials research' },
      { name: 'Quantum Internet Security', path: '/quantum-internet-security', icon: Zap, description: 'Secure the future internet' }
    ],
    blockchainServices: [
      { name: 'Blockchain Enterprise Platform', path: '/blockchain-enterprise-platform', icon: LinkIcon, description: 'Enterprise-grade blockchain solutions' }
    ],
    autonomousServices: [
      { name: 'Autonomous IT Operations', path: '/autonomous-it-operations', icon: Settings, description: 'Self-managing IT infrastructure' }
    ],
    marketplace: [
      { name: 'Marketplace', path: '/marketplace', icon: Code, description: 'Main marketplace hub' },
      { name: 'Talent', path: '/talent', icon: UserCheck, description: 'Find tech professionals' },
      { name: 'Equipment', path: '/equipment', icon: Server, description: 'Technology infrastructure' },
      { name: 'Green IT', path: '/green-it', icon: Leaf, description: 'Sustainable technology solutions' }
    ],
    company: [
      { name: 'Partners', path: '/partners', icon: Briefcase, description: 'Strategic partnerships' },
      { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
      { name: 'Blog', path: '/blog', icon: FileText, description: 'Latest news and insights' }
    ],
    support: [
      { name: 'Help Center', path: '/help', icon: HelpCircle, description: 'Get help and support' },
      { name: 'FAQ', path: '/faq', icon: FileText, description: 'Frequently asked questions' },
      { name: 'System Status', path: '/status', icon: BarChart3, description: 'Platform status and uptime' }
    ],
    legal: [
      { name: 'Terms of Service', path: '/terms', icon: FileText, description: 'Platform terms and conditions' },
      { name: 'Privacy Policy', path: '/privacy', icon: Shield, description: 'Data protection and privacy' },
      { name: 'Security', path: '/security', icon: Shield, description: 'Security measures and protocols' },
      { name: 'Cookies', path: '/cookies', icon: FileText, description: 'Cookie usage information' },
      { name: 'Accessibility', path: '/accessibility', icon: Users, description: 'Accessibility commitment' }
    ]
  };

  const renderSection = (title, items, icon: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
          <icon className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="group p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-200 border border-transparent hover:border-zion-cyan/30"
          >
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                <item.icon className="w-3 h-3 text-zion-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                  {item.name}
                </h4>
                <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO 
        title="Sitemap | Zion Tech Group"
        description="Complete overview of our website structure, services, and pages. Navigate easily through all our offerings."
        keywords="sitemap, website structure, navigation, services, pages, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Website
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  {" "}Sitemap
                </span>
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Complete overview of our website structure, services, and pages. 
                Navigate easily through all our offerings and find exactly what you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Explore All Pages
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Pages */}
              {renderSection('Main Pages', sitemapData.main, Home)}
              
              {/* AI Services */}
              {renderSection('AI & Machine Learning Services', sitemapData.aiServices, Brain)}
              
              {/* Quantum Services */}
              {renderSection('Quantum Computing Services', sitemapData.quantumServices, Zap)}
              
              {/* Blockchain Services */}
              {renderSection('Blockchain & Web3 Services', sitemapData.blockchainServices, LinkIcon)}
              
              {/* Autonomous Services */}
              {renderSection('Autonomous IT Services', sitemapData.autonomousServices, Settings)}
              
              {/* Marketplace */}
              {renderSection('Marketplace', sitemapData.marketplace, Code)}
              
              {/* Company */}
              {renderSection('Company', sitemapData.company, Building2)}
              
              {/* Support */}
              {renderSection('Support & Resources', sitemapData.support, HelpCircle)}
              
              {/* Legal */}
              {renderSection('Legal & Policies', sitemapData.legal, Shield)}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-12 text-center border border-zion-cyan/20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Our team is here to help you navigate our services and find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Contact Us
                  </motion.button>
                </Link>
                <Link to="/help">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-zion-cyan hover:text-zion-cyan transition-all duration-300"
                  >
                    Get Help
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
