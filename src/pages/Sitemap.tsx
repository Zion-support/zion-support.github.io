import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
import { 
  Home, 
  Briefcase, 
  Users, 
  Phone, 
  FileText, 
  Shield, 
<<<<<<< HEAD
  Cookie, 
<<<<<<< HEAD
  Globe,
  Brain,
  Cloud,
  Zap,
  Users
=======
=======
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
  Globe,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a191
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  Brain, 
  Cpu,
  Cloud,
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
  Globe,
  Rocket,
  Heart,
  Building,
  ShoppingCart,
  DollarSign,
  Factory,
  Award,
  Mail,
  ArrowRight
} from 'lucide-react';

export default function Sitemap() {
  const mainPages = [
    { path: '/', title: 'Home', description: 'Welcome to Zion Tech Group', icon: Home },
    { path: '/about', title: 'About Us', description: 'Learn about our company and mission', icon: Users },
    { path: '/team', title: 'Our Team', description: 'Meet our talented team members', icon: Users },
    { path: '/mission', title: 'Our Mission', description: 'Discover our mission and vision', icon: Award },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team', icon: Phone },
    { path: '/careers', title: 'Careers', description: 'Join our growing team', icon: Users }
  ];

  const servicePages = [
    { path: '/services', title: 'All Services', description: 'Comprehensive service overview', icon: Briefcase },
    { path: '/services/ai-autonomous-systems', title: 'AI Autonomous Systems', description: 'Advanced AI solutions', icon: Brain },
    { path: '/services/ai-business-intelligence', title: 'AI Business Intelligence', description: 'Data-driven insights', icon: Brain },
    { path: '/services/cybersecurity', title: 'Cybersecurity Services', description: 'Security and compliance', icon: Shield },
    { path: '/services/quantum-technology', title: 'Quantum Technology', description: 'Next-gen computing', icon: Cpu },
    { path: '/services/it-infrastructure', title: 'IT Infrastructure', description: 'Complete IT solutions', icon: Cloud },
    { path: '/micro-saas-services', title: 'Micro SAAS Solutions', description: 'Custom software development', icon: Cpu }
  ];

  const solutionPages = [
    { path: '/solutions/enterprise', title: 'Enterprise Solutions', description: 'Large-scale business transformation', icon: Building },
    { path: '/solutions/healthcare', title: 'Healthcare Solutions', description: 'Medical technology innovation', icon: Heart },
    { path: '/solutions/financial', title: 'Financial Solutions', description: 'Fintech and banking solutions', icon: DollarSign },
    { path: '/solutions/manufacturing', title: 'Manufacturing Solutions', description: 'Smart manufacturing', icon: Factory },
    { path: '/solutions/retail', title: 'Retail Solutions', description: 'Digital retail transformation', icon: ShoppingCart }
  ];

  const technologyPages = [
    { path: '/quantum-neural-network-platform', title: 'Quantum Neural Networks', description: 'Quantum-powered AI', icon: Brain },
    { path: '/ai-autonomous-business-manager', title: 'AI Business Manager', description: 'Autonomous business operations', icon: Brain },
    { path: '/ai-autonomous-research-assistant', title: 'AI Research Assistant', description: 'Research automation', icon: Brain },
    { path: '/autonomous-business-operations-platform', title: 'Autonomous Business Platform', description: 'Self-operating systems', icon: Rocket },
    { path: '/ai-powered-it-asset-management', title: 'AI Asset Management', description: 'Intelligent IT management', icon: Cloud }
  ];

  const resourcePages = [
    { path: '/pricing', title: 'Pricing', description: 'Transparent pricing plans', icon: DollarSign },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and results', icon: FileText },
    { path: '/blog', title: 'Blog', description: 'Latest insights and updates', icon: FileText },
    { path: '/help', title: 'Help Center', description: 'Support and documentation', icon: FileText },
    { path: '/docs', title: 'Documentation', description: 'Technical documentation', icon: FileText },
    { path: '/support', title: 'Support', description: 'Technical support services', icon: Phone }
  ];

  const legalPages = [
    { path: '/privacy', title: 'Privacy Policy', description: 'Data protection and privacy', icon: Shield },
    { path: '/terms', title: 'Terms of Service', description: 'Service terms and conditions', icon: FileText },
    { path: '/cookies', title: 'Cookie Policy', description: 'Cookie usage information', icon: Shield },
    { path: '/accessibility', title: 'Accessibility', description: 'Accessibility commitment', icon: Users }
  ];

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a191
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
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
<<<<<<< HEAD
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
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a191
=======
  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <div key={title} className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <IconComponent className="w-5 h-5 mr-2 text-cyan-400" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="block p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-200 group"
          >
            <h4 className="font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
              {page.title}
            </h4>
            <p className="text-sm text-gray-400">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sitemap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Navigate through all the pages and sections of our website to find exactly 
            what you're looking for.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              {renderPageSection('Main Pages', mainPages, Home)}
              {renderPageSection('Services', servicePages, Briefcase)}
              {renderPageSection('Solutions', solutionPages, Building)}
            </div>

            {/* Right Column */}
            <div>
              {renderPageSection('Technology Platforms', technologyPages, Rocket)}
              {renderPageSection('Resources', resourcePages, FileText)}
              {renderPageSection('Legal & Support', legalPages, Shield)}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quick Navigation
            </h2>
            <p className="text-gray-400">
              Popular destinations and frequently accessed pages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/services"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
              <p className="text-sm text-gray-400">Explore our comprehensive service offerings</p>
            </Link>

            <Link
              to="/pricing"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pricing Plans</h3>
              <p className="text-sm text-gray-400">Transparent pricing for all our services</p>
            </Link>

            <Link
              to="/contact"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
              <p className="text-sm text-gray-400">Contact our team for inquiries</p>
            </Link>

            <Link
              to="/careers"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Join Our Team</h3>
              <p className="text-sm text-gray-400">Career opportunities at Zion Tech Group</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Can't find what you're looking for? Our team is here to help you navigate 
            our website and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Visit Help Center</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zion Tech Group Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive range of services, solutions, and resources. 
            Find everything you need to transform your business with cutting-edge technology.
          </p>
        </motion.div>

        {/* Sitemap Content */}
        <div className="space-y-8">
          {renderPageSection('Main Pages', mainPages, Map)}
          {renderPageSection('Services', servicePages, Settings)}
          {renderPageSection('Legal & Support', legalPages, Shield)}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
  );
}