import React from 'react';
import { motion } from 'framer-motion';
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

const Sitemap: React.FC = (): JSX.Element => {
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
        { name: 'Comprehensive Services Showcase 2029', href: '/services/showcase-2029', description: '2029 showcase' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
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
    },
    {
      title: 'Business Solutions',
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Enterprise services' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Healthcare services' },
        { name: 'Financial Solutions', href: '/solutions/financial', description: 'Financial services' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', description: 'Manufacturing services' },
        { name: 'Retail Solutions', href: '/solutions/retail', description: 'Retail services' },
        { name: 'Government Solutions', href: '/solutions/government', description: 'Government services' },
        { name: 'Education Solutions', href: '/solutions/education', description: 'Education services' },
        { name: 'Space Technology', href: '/space-tech', description: 'Space tech' },
        { name: 'Quantum Technology', href: '/quantum-technology', description: 'Quantum tech' },
        { name: 'Green IT', href: '/green-it', description: 'Sustainable technology' },
        { name: 'Mobile Development', href: '/mobile', description: 'Mobile solutions' }
      ]
    },
    {
      title: 'Marketplace',
      icon: Globe,
      color: 'from-teal-500 to-cyan-500',
      links: [
        { name: 'Marketplace', href: '/marketplace', description: 'Main marketplace' },
        { name: 'Products', href: '/marketplace/products', description: 'Product marketplace' },
        { name: 'Talent', href: '/marketplace/talent', description: 'Talent marketplace' },
        { name: 'Equipment', href: '/marketplace/equipment', description: 'Equipment marketplace' },
        { name: 'Services', href: '/marketplace/services', description: 'Service marketplace' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
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
                    <a
                      href={link.href}
                      className="block group hover:bg-white/5 rounded-lg p-3 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-gray-300 text-sm mt-1">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white/5 border-t border-white/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help guide you to the right solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-semibold"
              >
                Contact Us
              </a>
              <a
                href="/help"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/20"
              >
                Get Help
              </a>
              <a
                href="/search"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/20"
              >
                Search Site
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;