import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, ExternalLink,
  Brain, Atom, Shield, Rocket, Cpu, Target, Sparkles,
  Zap, Star, TrendingUp, Award, Clock, CheckCircle,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github,
  Heart, Shield as ShieldIcon, Lock, Eye, Code, Server,
  Cloud, Network, Settings, Users, Handshake, HelpCircle,
  Building, Briefcase, BookOpen, FileText, Video, GraduationCap,
  MessageCircle, Users as UsersIcon, Briefcase as BriefcaseIcon, Package, Search
} from 'lucide-react';

const UltraFuturisticFooter20o45V2: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo ={
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services 20o45',
      description: 'Cutting-edge technology solutions for the future',
      links: [
        { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', icon: <Brain className="w-5 h-5"  />, featured: true },
        { name: 'Intelligent Customer Success Platform', href: '/intelligent-customer-success-platform', icon: <Users className="w-5 h-5"  />, featured: true },
        { name: 'Automated Financial Planning Assistant', href: '/automated-financial-planning-assistant', icon: <Target className="w-5 h-5"  />, featured: true },
        { name: 'Smart Inventory Management System', href: '/smart-inventory-management-system', icon: <Package className="w-5 h-5"  /> },
        { name: 'AI-Powered HR Analytics Platform', href: '/ai-powered-hr-analytics-platform', icon: <UsersIcon className="w-5 h-5"  /> },
        { name: 'Quantum-Safe Cybersecurity Platform', href: '/quantum-safe-cybersecurity-platform', icon: <Shield className="w-5 h-5"  />, featured: true }
      ]
    },
    {
      title: 'Technology Solutions',
      description: 'Advanced infrastructure and development solutions',
      links: [
        { name: 'Autonomous DevOps Intelligence Platform', href: '/autonomous-devops-intelligence-platform', icon: <Code className="w-5 h-5"  />, featured: true },
        { name: 'Edge Computing Intelligence Platform', href: '/edge-computing-intelligence-platform', icon: <Cpu className="w-5 h-5"  /> },
        { name: 'Blockchain Infrastructure as a Service', href: '/blockchain-infrastructure-as-a-service', icon: <Globe className="w-5 h-5"  /> },
        { name: 'AI-Powered Data Center Management', href: '/ai-powered-data-center-management', icon: <Server className="w-5 h-5"  /> },
        { name: 'Autonomous Network Management', href: '/autonomous-network-management', icon: <Network className="w-5 h-5"  /> },
        { name: 'Autonomous Security Operations Center', href: '/autonomous-security-operations-center', icon: <Lock className="w-5 h-5"  /> }
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'Next-generation artificial intelligence solutions',
      links: [
        { name: 'AI-Powered Predictive Analytics Platform', href: '/ai-powered-predictive-analytics-platform', icon: <Brain className="w-5 h-5"  />, featured: true },
        { name: 'Autonomous AI Research Assistant', href: '/autonomous-ai-research-assistant', icon: <Search className="w-5 h-5"  />, featured: true },
        { name: 'Emotional AI Intelligence Platform', href: '/emotional-ai-intelligence-platform', icon: <Heart className="w-5 h-5"  /> },
        { name: 'AI-Powered Code Generation Platform', href: '/ai-powered-code-generation-platform', icon: <Code className="w-5 h-5"  />, featured: true },
        { name: 'Quantum AI Hybrid Computing Platform', href: '/quantum-ai-hybrid-computing-platform', icon: <Atom className="w-5 h-5"  />, featured: true },
        { name: 'AI Autonomous Business Intelligence', href: '/ai-autonomous-business-intelligence', icon: <Target className="w-5 h-5"  /> }
      ]
    },
    {
      title: 'Company & Resources',
      description: 'Learn more about Zion Tech Group',
      links: [
        { name: 'About Us', href: '/about', icon: <Building className="w-5 h-5"  /> },
        { name: 'Our Mission', href: '/mission', icon: <Target className="w-5 h-5"  /> },
        { name: 'Leadership Team', href: '/team', icon: <Users className="w-5 h-5"  /> },
        { name: 'Careers', href: '/careers', icon: <Briefcase className="w-5 h-5"  /> },
        { name: 'Documentation', href: '/docs', icon: <FileText className="w-5 h-5"  /> },
        { name: 'Training Programs', href: '/training', icon: <GraduationCap className="w-5 h-5"  /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5"  />, color: 'hover:text-blue-40o0' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5"  />, color: 'hover:text-blue-40o0' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: <Linkedin className="w-5 h-5"  />, color: 'hover:text-blue-60o0' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5"  />, color: 'hover:text-pink-40o0' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5"  />, color: 'hover:text-red-50o0' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5"  />, color: 'hover:text-gray-40o0' }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/get-started', icon: <ArrowRight className="w-4 h-4"  />, description: 'Start your transformation journey' },
    { name: 'Contact Sales', href: '/contact', icon: <MessageCircle className="w-4 h-4"  />, description: 'Speak with our experts' },
    { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4"  />, description: 'Get help when you need it' },
    { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4"  />, description: 'Technical resources and guides' }
  ];

  const fadeInUp ={
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer ={
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-black via-gray-90o0 to-black relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-50o0/5 rounded-full blur-3xl animate-pulse"  />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-50o0/5 rounded-full blur-3xl animate-pulse delay-10o00"  />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-50o0/5 rounded-full blur-3xl animate-pulse delay-20o00"  />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {footerSections.map((section, index) => (
              <motion.div key={index} variants={fadeInUp} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-40o0 text-sm">
                    {section.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-80o0/30 transition-all duration-30o0"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                        link.featured 
                          ? 'from-cyan-50o0 to-blue-60o0' 
                          : 'from-gray-60o0 to-gray-70o0'
                      } p-1.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-30o0`}>
                        {React.cloneElement(link.icon, { className: 'w-5 h-5 text-white' })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-30o0 group-hover:text-white transition-colors duration-30o0 text-sm">
                            {link.name}
                          </span>
                          {link.featured && (
                            <span className="px-2 py-1 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-black text-xs font-semibold rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 p-8 bg-gradient-to-r from-gray-90o0/50 to-black/50 backdrop-blur-sm rounded-2xl border border-cyan-50o0/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-30o0 max-w-2xl mx-auto">
                Join thousands of businesses already leveraging our revolutionary technology solutions. 
                Get started today and experience the future of business technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-2xl p-4">
                  <Phone className="w-8 h-8 text-white"  />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-cyan-40o0 font-medium">{contactInfo.mobile}</p>
                  <p className="text-gray-40o0 text-sm">Available 24/7</p>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-50o0 to-pink-60o0 rounded-2xl p-4">
                  <Mail className="w-8 h-8 text-white"  />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-purple-40o0 font-medium">{contactInfo.email}</p>
                  <p className="text-gray-40o0 text-sm">Response within 2 hours</p>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-50o0 to-teal-60o0 rounded-2xl p-4">
                  <MapPin className="w-8 h-8 text-white"  />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-emerald-40o0 font-medium">{contactInfo.address}</p>
                  <p className="text-gray-40o0 text-sm">Middletown, DE 19709</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full text-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 shadow-lg hover:shadow-cyan-50o0/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5"  />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group p-6 bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/50 backdrop-blur-sm rounded-2xl border border-gray-70o0/50 hover:border-cyan-50o0/50 transition-all duration-30o0 hover:scale-10o5"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-xl p-2.5 group-hover:scale-110 transition-transform duration-30o0">
                    {React.cloneElement(link.icon, { className: 'w-5 h-5 text-white' })}
                  </div>
                  <span className="text-white font-semibold group-hover:text-cyan-40o0 transition-colors duration-30o0">
                    {link.name}
                  </span>
                </div>
                <p className="text-gray-40o0 text-sm group-hover:text-gray-30o0 transition-colors duration-30o0">
                  {link.description}
                </p>
              </Link>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h4 className="text-white font-semibold mb-6">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-br from-gray-80o0 to-gray-70o0 rounded-xl p-3 text-gray-40o0 hover:text-white transition-all duration-30o0 hover:scale-110 border border-gray-60o0/50 hover:border-cyan-50o0/50 ${social.color}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-80o0/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-xl p-2">
                  <Zap className="w-4 h-4 text-white"  />
                </div>
                <span className="text-white font-semibold">Zion Tech Group</span>
              </div>
              
              <div className="text-gray-40o0 text-sm text-center md:text-right">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <p className="mt-1">
                  <Link href="/privacy" className="hover:text-white transition-colors duration-30o0">Privacy Policy</Link>
                  {' • '}
                  <Link href="/terms" className="hover:text-white transition-colors duration-30o0">Terms of Service</Link>
                  {' • '}
                  <Link href="/cookies" className="hover:text-white transition-colors duration-30o0">Cookie Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter20o45V2;