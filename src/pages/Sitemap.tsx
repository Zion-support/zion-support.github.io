import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Users, 
  FileText, 
  Settings, 
  Shield, 
  Globe, 
  Rocket, 
  Brain, 
  Cloud, 
  Cpu, 
  Database, 
  Lock, 
  Search, 
  BookOpen, 
  MessageCircle, 
  DollarSign, 
  Star,
  Zap,
  Target,
  TrendingUp,
  Heart,
  Atom,
  Leaf,
  Code,
  ShoppingCart,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About Us', href: '/about', description: 'Company information and team' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership programs' },
        { name: 'Legal', href: '/legal', description: 'Legal information' },
        { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' }
      ]
    },
    {
      title: 'Services',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'All Services', href: '/services', description: 'Complete service catalog' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered analytics' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare AI solutions' },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', description: 'Legal AI automation' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain AI' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'Financial AI platform' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'Content generation AI' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'IoT and edge computing' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Digital twin technology' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Cloud and DevOps services' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data analysis solutions' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'IT infrastructure services' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', description: 'Micro SaaS solutions' }
      ]
    },
    {
      title: 'Innovative Services',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', description: 'Future technology solutions' },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', description: '2025 innovative services' },
        { name: 'Innovative Services Showcase 2027', href: '/innovative-services-showcase-2027', description: '2027 showcase' },
        { name: 'Comprehensive Services Landing 2025', href: '/services/comprehensive-2025', description: '2025 comprehensive services' },
        { name: 'Comprehensive Services Landing 2027', href: '/services/comprehensive-2027', description: '2027 comprehensive services' },
        { name: 'Comprehensive Services Landing 2030', href: '/services/comprehensive-2030', description: '2030 comprehensive services' },
        { name: 'Enhanced Services Landing', href: '/services/enhanced', description: 'Enhanced services overview' },
        { name: 'Comprehensive Services Advertising', href: '/services/comprehensive-advertising', description: 'Advertising services' },
        { name: 'Comprehensive Services Showcase 2030', href: '/services/showcase-2030', description: '2030 showcase' },
        { name: 'Comprehensive Services Showcase 2031', href: '/services/showcase-2031', description: '2031 showcase' },
        { name: 'Comprehensive Services Showcase 2025', href: '/services/showcase-2025', description: '2025 showcase' },
        { name: 'Comprehensive Services Showcase 2026', href: '/services/showcase-2026', description: '2026 showcase' },
        { name: 'Comprehensive Services Showcase 2027', href: '/services/showcase-2027', description: '2027 showcase' },
        { name: 'Comprehensive Services Showcase 2028', href: '/services/showcase-2028', description: '2028 showcase' },
        { name: 'Comprehensive Services Showcase 2029', href: '/services/showcase-2029', description: '2029 showcase' },
        { name: 'Comprehensive Services Showcase 2030', href: '/services/showcase-2030', description: '2030 showcase' },
        { name: 'Comprehensive Services Showcase 2031', href: '/services/showcase-2031', description: '2031 showcase' },
        { name: 'Comprehensive Services Showcase 2032', href: '/services/showcase-2032', description: '2032 showcase' },
        { name: 'Comprehensive Services Showcase 2033', href: '/services/showcase-2033', description: '2033 showcase' },
        { name: 'Comprehensive Services Showcase 2034', href: '/services/showcase-2034', description: '2034 showcase' },
        { name: 'Comprehensive Services Showcase 2035', href: '/services/showcase-2035', description: '2035 showcase' },
        { name: 'Comprehensive Services Showcase 2036', href: '/services/showcase-2036', description: '2036 showcase' },
        { name: 'Comprehensive Services Showcase 2037', href: '/services/showcase-2037', description: '2037 showcase' },
        { name: 'Comprehensive Services Showcase 2038', href: '/services/showcase-2038', description: '2038 showcase' },
        { name: 'Comprehensive Services Showcase 2039', href: '/services/showcase-2039', description: '2039 showcase' },
        { name: 'Comprehensive Services Showcase 2040', href: '/services/showcase-2040', description: '2040 showcase' },
        { name: 'Comprehensive Services Showcase 2041', href: '/services/showcase-2041', description: '2041 showcase' },
        { name: 'Comprehensive Services Showcase 2042', href: '/services/showcase-2042', description: '2042 showcase' },
        { name: 'Comprehensive Services Showcase 2043', href: '/services/showcase-2043', description: '2043 showcase' },
        { name: 'Comprehensive Services Showcase 2044', href: '/services/showcase-2044', description: '2044 showcase' },
        { name: 'Comprehensive Services Showcase 2045', href: '/services/showcase-2045', description: '2045 showcase' },
        { name: 'Comprehensive Services Showcase 2046', href: '/services/showcase-2046', description: '2046 showcase' },
        { name: 'Comprehensive Services Showcase 2047', href: '/services/showcase-2047', description: '2047 showcase' },
        { name: 'Comprehensive Services Showcase 2048', href: '/services/showcase-2048', description: '2048 showcase' },
        { name: 'Comprehensive Services Showcase 2049', href: '/services/showcase-2049', description: '2049 showcase' },
        { name: 'Comprehensive Services Showcase 2050', href: '/services/showcase-2050', description: '2050 showcase' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      links: [
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations', description: 'AI-powered business automation' },
        { name: 'AI Content Creation Studio Pro', href: '/services/ai-content-creation-studio', description: 'AI content generation platform' },
        { name: 'AI Financial Operations & Compliance', href: '/services/fintech-operations-compliance', description: 'AI financial compliance platform' },
        { name: 'AI-Powered Sustainability Analytics', href: '/services/sustainable-tech-analytics', description: 'Sustainability analytics platform' },
        { name: 'AI Quantum Machine Learning', href: '/services/ai-quantum-machine-learning', description: 'Quantum AI solutions' },
        { name: 'AI Edge Computing Platform', href: '/services/ai-edge-computing-platform', description: 'Edge AI computing' },
        { name: 'AI Digital Twin Platform', href: '/services/ai-digital-twin-platform', description: 'Digital twin AI' },
        { name: 'AI Supply Chain Risk Management', href: '/services/ai-supply-chain-risk-management', description: 'Supply chain AI risk' },
        { name: 'AI ESG Compliance Platform', href: '/services/ai-esg-compliance-platform', description: 'ESG compliance AI' }
      ]
    },
    {
      title: 'Quantum & Advanced Tech',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      links: [
        { name: 'Quantum-Safe Cryptography Platform', href: '/services/quantum-safe-cryptography', description: 'Post-quantum cryptography' },
        { name: 'Space Technology Innovation Platform', href: '/services/space-tech-innovation', description: 'Space tech solutions' },
        { name: 'Quantum Computing Platform', href: '/services/quantum-computing', description: 'Quantum computing solutions' },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum AI hybrid' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'IoT edge solutions' },
        { name: 'Digital Twin Technology', href: '/services/digital-twin', description: 'Digital twin solutions' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      links: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'AI security solutions' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Zero trust security' },
        { name: 'Security Headers CSP', href: '/services/security-headers-csp', description: 'Security configuration' },
        { name: 'DSR Portal', href: '/services/dsr-portal', description: 'Data subject rights' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cloud cost optimization' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      color: 'from-teal-500 to-cyan-500',
      links: [
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', href: '/api', description: 'API documentation' },
        { name: 'Developer Portal', href: '/developer', description: 'Developer resources' },
        { name: 'Help Center', href: '/help', description: 'Help and support' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Training', href: '/training', description: 'Training programs' },
        { name: 'Webinars', href: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', href: '/white-papers', description: 'Research papers' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'News', href: '/news', description: 'Company news' },
        { name: 'Press', href: '/press', description: 'Press releases' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'Research & Development', href: '/research-development', description: 'R&D initiatives' }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group's website. Find all our pages, services, and resources organized by category."
        keywords="sitemap, website navigation, Zion Tech Group, services, pages"
        canonicalUrl="https://ziontechgroup.com/sitemap"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <motion.div
          className="relative py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Site Map
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Navigate through our comprehensive website structure to find exactly what you're looking for
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Sitemap Content */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                {/* Section Header */}
                <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                
                {/* Links */}
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className="block group hover:bg-slate-700/40 rounded-lg p-3 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {link.name}
                            </h3>
                            <p className="text-slate-400 text-sm mt-1">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help Finding Something?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our team is here to help guide you to the right solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2 inline" />
                  Contact Us
                </Link>
                
                <Link
                  to="/help"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2 inline" />
                  Get Help
                </Link>
                
                <Link
                  to="/search"
                  className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2 inline" />
                  Search Site
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}