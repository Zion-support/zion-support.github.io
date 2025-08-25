import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Map, 
  Home, 
  Info, 
  Settings, 
  MessageSquare, 
  HelpCircle, 
  FileText, 
  Shield, 
  Cookie, 
  Brain,
  Cloud,
  Zap,
  Users,
  Rocket,
  Lock,
  Database,
  Network,
  BarChart3,
  BookOpen,
  Server,
  Target,
  TrendingUp,
  Code,
  TestTube,
  Atom,
  Wifi,
  Building,
  Briefcase,
  Newspaper
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const mainPages = [
    { name: 'Home', href: '/', icon: Home, description: 'Main landing page' },
    { name: 'About Us', href: '/about', icon: Info, description: 'Company information and mission' },
    { name: 'Services', href: '/services', icon: Settings, description: 'Overview of all services' },
    { name: 'Contact', href: '/contact', icon: MessageSquare, description: 'Get in touch with us' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support and resources' },
    { name: 'Request Quote', href: '/quote', icon: FileText, description: 'Get a custom quote' },
  ];

  const servicePages = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain, description: 'Machine Learning & AI Services' },
    { name: 'Cloud Infrastructure', href: '/cloud-devops', icon: Cloud, description: 'AWS, Azure, GCP Solutions' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security & Compliance' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap, description: 'Business Process Modernization' },
    { name: 'Quantum Technology', href: '/quantum-technology', icon: Atom, description: 'Quantum Computing Solutions' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise IT Services' },
    { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions', icon: Rocket, description: 'Scalable SaaS Platforms' },
  ];

  const aiServices = [
    { name: 'AI Autonomous Systems', href: '/services/ai-autonomous-systems', icon: Brain, description: 'Autonomous AI Solutions' },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3, description: 'AI-Powered Analytics' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: MessageSquare, description: 'Marketing AI Tools' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Process Automation' },
    { name: 'AI Code Review', href: '/ai-autonomous-code-review', icon: Code, description: 'Automated Code Analysis' },
    { name: 'AI Content Generation', href: '/ai-content-generator', icon: FileText, description: 'Content Creation AI' },
  ];

  const blockchainServices = [
    { name: 'Blockchain Enterprise', href: '/blockchain-enterprise-solutions', icon: Database, description: 'Enterprise Blockchain' },
    { name: 'DeFi Solutions', href: '/services/blockchain-defi-solutions', icon: Lock, description: 'Decentralized Finance' },
    { name: 'Blockchain Analytics', href: '/ai-blockchain-analytics', icon: BarChart3, description: 'Blockchain Data Analysis' },
  ];

  const iotServices = [
    { name: 'IoT Management Platform', href: '/services/iot-management-platform', icon: Network, description: 'IoT Device Management' },
    { name: 'IoT Data Analytics', href: '/iot-data-analytics', icon: BarChart3, description: 'IoT Data Processing' },
  ];

  const quantumServices = [
    { name: 'Quantum Neural Network', href: '/quantum-neural-network-platform', icon: Brain, description: 'Quantum AI Platform' },
    { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', icon: Cloud, description: 'Quantum Cloud Services' },
    { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', icon: TrendingUp, description: 'Quantum Trading Algorithms' },
  ];

  const emergingTech = [
    { name: 'Space Technology', href: '/space-tech', icon: Rocket, description: 'Space Tech Solutions' },
    { name: 'Research & Development', href: '/research-development', icon: TestTube, description: 'R&D Services' },
    { name: '5G Enterprise Solutions', href: '/5g-enterprise-solutions', icon: Wifi, description: '5G Network Solutions' },
  ];

  const companyPages = [
    { name: 'Mission', href: '/mission', icon: Target, description: 'Our mission and vision' },
    { name: 'Team', href: '/team', icon: Users, description: 'Meet our team' },
    { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Job opportunities' },
    { name: 'Partners', href: '/partners', icon: Users, description: 'Partnership programs' },
    { name: 'News', href: '/news', icon: Newspaper, description: 'Latest updates' },
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Industry insights' },
  ];

  const supportPages = [
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
    { name: 'Webinars', href: '/webinars', icon: FileText, description: 'Educational content' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research papers' },
    { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical docs' },
    { name: 'Developer Portal', href: '/developer-portal', icon: Code, description: 'Developer resources' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Data protection and privacy' },
    { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie, description: 'Cookie usage information' },
  ];

  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <IconComponent className="w-6 h-6 text-zion-cyan mr-3" />
        {title}
      </h2>
      <ul className="space-y-3">
        {pages.map((page) => (
          <li key={page.href}>
            <Link 
              to={page.href} 
              className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
            >
              <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 group-hover:bg-zion-cyan transition-colors"></span>
              <span className="font-medium">{page.name}</span>
              <span className="ml-2 text-sm text-zion-slate-light opacity-75">- {page.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
        <main className="container mx-auto px-4 py-8 pt-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-6 flex items-center justify-center">
              <Map className="w-12 h-12 text-zion-cyan mr-4" />
              Website Sitemap
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Navigate through all the pages and services offered by Zion Tech Group. 
              Find exactly what you're looking for with our comprehensive site structure.
            </p>
          </motion.div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {renderPageSection('Main Pages', mainPages, Home)}
            {renderPageSection('Core Services', servicePages, Settings)}
            {renderPageSection('AI Services', aiServices, Brain)}
            {renderPageSection('Blockchain Solutions', blockchainServices, Database)}
            {renderPageSection('IoT Services', iotServices, Network)}
            {renderPageSection('Quantum Technology', quantumServices, Atom)}
            {renderPageSection('Emerging Tech', emergingTech, Rocket)}
            {renderPageSection('Company', companyPages, Building)}
            {renderPageSection('Support & Resources', supportPages, HelpCircle)}
            {renderPageSection('Legal & Privacy', legalPages, Shield)}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Finding Something?
            </h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate 
              our services and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/help"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Help
              </Link>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}