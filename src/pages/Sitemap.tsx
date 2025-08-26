import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Network, 
  Rocket, 
  ShoppingCart,
  Building,
  Users,
  HelpCircle,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const siteStructure = {
    mainPages: [
      { name: 'Home', href: '/', description: 'Welcome to Zion Tech Group' },
      { name: 'About Us', href: '/about', description: 'Learn about our mission and values' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
      { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
      { name: 'Sitemap', href: '/sitemap', description: 'Site navigation guide' }
    ],
    aiServices: [
      { name: 'AI Consciousness Simulator', href: '/ai-services/consciousness-simulator', description: 'Advanced AI consciousness research platform' },
      { name: 'Quantum Emotion Processor', href: '/ai-services/quantum-emotion', description: 'Quantum-powered emotional intelligence' },
      { name: 'AI Autonomous Systems', href: '/ai-services/autonomous-systems', description: 'Self-managing AI infrastructure' },
      { name: 'Neural Network Architect', href: '/ai-services/neural-architect', description: 'Custom neural network design' },
      { name: 'AI Ethics Framework', href: '/ai-services/ai-ethics', description: 'Ethical AI development tools' },
      { name: 'Predictive Analytics', href: '/ai-services/predictive-analytics', description: 'AI-powered business insights' }
    ],
    microSaas: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', description: 'Intelligent business analytics platform' },
      { name: 'Customer Experience Hub', href: '/micro-saas/customer-experience', description: '360° customer journey management' },
      { name: 'Quantum Computing Suite', href: '/micro-saas/quantum-computing', description: 'Quantum computing solutions' },
      { name: 'Supply Chain Optimizer', href: '/micro-saas/supply-chain', description: 'AI-powered supply chain management' },
      { name: 'Cybersecurity Platform', href: '/micro-saas/cybersecurity', description: 'Advanced threat protection' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', description: 'Edge computing solutions' },
      { name: 'Content Creation AI', href: '/micro-saas/content-creation', description: 'AI-powered content generation' },
      { name: 'HR Management Suite', href: '/micro-saas/hr-platform', description: 'Modern HR management platform' }
    ],
    itServices: [
      { name: 'Infrastructure Management', href: '/it-services/infrastructure', description: 'Complete infrastructure solutions' },
      { name: 'Digital Transformation', href: '/it-services/digital-transformation', description: 'Digital transformation consulting' },
      { name: 'IT Consulting', href: '/it-services/consulting', description: 'Expert IT consulting services' },
      { name: 'Onsite Support', href: '/it-services/onsite-support', description: '24/7 onsite technical support' },
      { name: 'Green IT Solutions', href: '/it-services/green-it', description: 'Sustainable IT infrastructure' },
      { name: '5G Network Solutions', href: '/it-services/5g-solutions', description: 'Next-gen network infrastructure' }
    ],
    emergingTech: [
      { name: 'Quantum Computing', href: '/emerging-tech/quantum-computing', description: 'Quantum computing solutions' },
      { name: 'Blockchain & DeFi', href: '/emerging-tech/blockchain-defi', description: 'Blockchain and DeFi platforms' },
      { name: 'Space Technology', href: '/emerging-tech/space-tech', description: 'Space technology innovations' },
      { name: 'Biotechnology', href: '/emerging-tech/biotech', description: 'Biotech and healthcare solutions' },
      { name: 'Nanotechnology', href: '/emerging-tech/nanotech', description: 'Nanotechnology applications' },
      { name: 'Augmented Reality', href: '/emerging-tech/ar-vr', description: 'AR/VR development services' }
    ],
    marketplace: [
      { name: 'AI Products', href: '/marketplace/ai-products', description: 'AI-powered products and tools' },
      { name: 'IT Equipment', href: '/marketplace/it-equipment', description: 'Professional IT equipment' },
      { name: 'Software Solutions', href: '/marketplace/software', description: 'Enterprise software solutions' },
      { name: 'Professional Services', href: '/marketplace/services', description: 'Expert professional services' },
      { name: 'Talent Network', href: '/marketplace/talent', description: 'Skilled professionals network' },
      { name: 'Innovation Hub', href: '/marketplace/innovation', description: 'Innovation and R&D services' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy', description: 'Data protection and privacy' },
      { name: 'Terms of Service', href: '/terms', description: 'Legal terms and conditions' },
      { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and preferences' }
    ]
  };

  const renderSection = (title: string, icon: any, items: any[], color: string) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}>
          <icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Link
              to={item.href}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
            >
              <CheckCircle className="w-4 h-4 text-zion-cyan mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {item.name}
                </h4>
                <p className="text-sm text-zion-slate-light mt-1">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Site
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Map
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Navigate through our comprehensive website structure to find exactly what you're looking for.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Pages */}
            {renderSection('Main Pages', Building, siteStructure.mainPages, 'from-zion-cyan to-zion-blue')}
            
            {/* AI Services */}
            {renderSection('AI Services', Brain, siteStructure.aiServices, 'from-zion-cyan to-zion-purple')}
            
            {/* Micro SAAS */}
            {renderSection('Micro SAAS', Code, siteStructure.microSaas, 'from-zion-purple to-zion-cyan')}
            
            {/* IT Services */}
            {renderSection('IT Services', Network, siteStructure.itServices, 'from-zion-blue to-zion-purple')}
            
            {/* Emerging Tech */}
            {renderSection('Emerging Tech', Rocket, siteStructure.emergingTech, 'from-zion-cyan to-zion-blue')}
            
            {/* Marketplace */}
            {renderSection('Marketplace', ShoppingCart, siteStructure.marketplace, 'from-zion-purple to-zion-cyan')}
            
            {/* Legal */}
            {renderSection('Legal & Policies', Users, siteStructure.legal, 'from-zion-blue to-zion-cyan')}
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zion-slate/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Quick Links</h3>
              </div>
              <div className="space-y-3">
                <Link to="/contact" className="block p-3 text-zion-cyan hover:text-zion-purple transition-colors duration-300">
                  Contact Support
                </Link>
                <Link to="/help" className="block p-3 text-zion-cyan hover:text-zion-purple transition-colors duration-300">
                  Help Center
                </Link>
                <Link to="/status" className="block p-3 text-zion-cyan hover:text-zion-purple transition-colors duration-300">
                  System Status
                </Link>
                <Link to="/api" className="block p-3 text-zion-cyan hover:text-zion-purple transition-colors duration-300">
                  API Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our support team is here to help you navigate our services and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/help"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;