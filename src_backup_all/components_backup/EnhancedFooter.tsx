import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Github,
  Youtube,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Cloud,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
  Target,
  CheckCircle,
  Heart,
  MessageCircle,
  HelpCircle,
  BookOpen,
  ShoppingCart,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Services", href: "/ai-services", icon: Brain },
        { name: "IT Services", href: "/it-services", icon: Cpu },
        { name: "Micro SaaS", href: "/micro-saas", icon: ShoppingCart },
        { name: "2025 Services", href: "/comprehensive-services-showcase-2025", icon: Star },
        { name: "2026 Services", href: "/services2026", icon: TrendingUp },
        { name: "2027 Services", href: "/services2027", icon: Rocket },
        { name: "2029 Services", href: "/innovative-services-showcase-2029", icon: Sparkles },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise", href: "/solutions/enterprise", icon: Building },
        { name: "Healthcare", href: "/solutions/healthcare", icon: Heart },
        { name: "Finance", href: "/solutions/finance", icon: DollarSign },
        { name: "Manufacturing", href: "/solutions/manufacturing", icon: Factory },
        { name: "Retail", href: "/solutions/retail", icon: ShoppingBag },
        { name: "Education", href: "/solutions/education", icon: GraduationCap },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", icon: Users },
        { name: "Our Team", href: "/team", icon: Users },
        { name: "Careers", href: "/careers", icon: Star },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "News", href: "/news", icon: Newspaper },
        { name: "Blog", href: "/blog", icon: BookOpen },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs", icon: FileText },
        { name: "API Reference", href: "/api", icon: Code },
        { name: "Developer Portal", href: "/developers", icon: Terminal },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Webinars", href: "/webinars", icon: Video },
        { name: "Training", href: "/training", icon: GraduationCap },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help", icon: HelpCircle },
        { name: "Contact Support", href: "/contact", icon: MessageCircle },
        { name: "Status Page", href: "/status", icon: Activity },
        { name: "Request Quote", href: "/request-quote", icon: DollarSign },
        { name: "FAQ", href: "/faq", icon: HelpCircle },
        { name: "Live Chat", href: "/chat", icon: MessageCircle },
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin, color: "hover:text-blue-400" },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter, color: "hover:text-blue-400" },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook, color: "hover:text-blue-600" },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram, color: "hover:text-pink-400" },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github, color: "hover:text-gray-400" },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube, color: "hover:text-red-400" },
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm font-semibold">Future of Technology</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
                Transforming businesses through intelligent automation and revolutionary innovations.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-cyan-400" />}
                {section.title === "Solutions" && <Target className="w-5 h-5 mr-2 text-blue-400" />}
                {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-purple-400" />}
                {section.title === "Resources" && <BookOpen className="w-5 h-5 mr-2 text-green-400" />}
                {section.title === "Support" && <HelpCircle className="w-5 h-5 mr-2 text-pink-400" />}
                {section.title}
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
                    >
                      <link.icon className="w-4 h-4 mr-2 text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright and legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
                <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Accessibility
                </Link>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-slate-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className={`w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-slate-700/50"
          >
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-300 mb-4">
                Get the latest insights on AI, emerging technologies, and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-10 w-1 h-1 bg-blue-400 rounded-full opacity-80 animate-pulse delay-2000"></div>
    </footer>
  );
}

export default EnhancedFooter;