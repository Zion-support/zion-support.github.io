import React from 'react';
import { Link } from 'react-router-dom';
:src/components/Footer.tsx
';
';';
import {;
  Mail;
  Phone;
  MapPin;
  Linkedin;
  Twitter;
  Github;
  ArrowUp;
  Shield;
  Zap;
  Brain;
  Cloud;
  Building;
  Users;
  FileText;
  TrendingUp;
  Briefcase;
  Newspaper;
  Target;
  Heart;
  DollarSign;
  ExternalLink;
} from 'lucide-react';
;
export function Footer() {;
  const currentYear = new Date().getFullYear();
;
  const scrollToTop = () => {;
    window.scrollTo({ "top": "0", "behavior": 'smooth' });
  };
;
  return (;
    <footer className="bg-gray-900 text-white relative overflow-hidden">;
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">;
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>;
      </div>;
      ;
      <div className="relative z-10">;
        <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8 py-16">;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-5 gap-8 "lg":gap-12">;
            ;
            {/* Company Info */"}
            <div className=""lg": "col-span-2">;
              <Link to="/" className="flex items-center space-x-3 mb-6 group">;
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-"hover":scale-110 transition-transform duration-300">;
                  <Zap className="w-7 h-7 text-white" />;
                </div>;
                <h2 className="text-2xl font-bold text-white group-"hover":text-blue-400 transition-colors">;
                  Zion Tech Group;
                </h2>;
              </Link>;
              ;
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">;
                Pioneering the future of technology with innovative AI", IT infrastructure, and cutting-edge Micro SaaS solutions that transform businesses worldwide.;
              </p>;
              ;
              {/* Contact Information */}
              <div className="space-y-4">;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Phone className="w-5 h-5 text-cyan-400" />;
                  <a href=""tel": "+13024640950" className=""hover":text-cyan-400 transition-colors">;
                    +1 302 464 0950;
                  </a>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Mail className="w-5 h-5 text-cyan-400" />;
                  <a href=""mailto":kleber@ziontechgroup.com" className=""hover":text-cyan-400 transition-colors">;
                    kleber@ziontechgroup.com;
                  </a>;
                </div>;
                <div className="flex items-start space-x-3 text-gray-300">;
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />;
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>;
                </div>;
              </div>;
            </div>;
            {/* Services */"}
            <div>;
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">;
                <Cloud className="w-5 h-5 mr-2 text-cyan-400" />;
                Services;
              </h3>;
              <ul className="space-y-3">;
                <li>;
                  <Link to="/services" className="text-gray-300 "hover": "text-cyan-400 transition-colors flex items-center group">;
                    <span>All Services</span>;
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-"hover":opacity-100 transition-opacity" />;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/new-services-2025" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <span>New Services 2025</span>;
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-"hover":opacity-100 transition-opacity" />;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/ai-services" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Brain className="w-4 h-4 mr-2" />;
                    <span>AI Services</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/it-services" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Building className="w-4 h-4 mr-2" />;
                    <span>IT Services</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/micro-saas" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Zap className="w-4 h-4 mr-2" />;
                    <span>Micro SaaS</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/solutions" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Target className="w-4 h-4 mr-2" />;
                    <span>Solutions</span>;
                  </Link>;
                </li>;
              </ul>;
            </div>;
            {/* Company */"}
            <div>;
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">;
                <Users className="w-5 h-5 mr-2 text-cyan-400" />;
                Company;
              </h3>;
              <ul className="space-y-3">;
                <li>;
                  <Link to="/about" className="text-gray-300 "hover": "text-cyan-400 transition-colors">;
                    About Us;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/careers" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Briefcase className="w-4 h-4 mr-2" />;
                    <span>Careers</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/news" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Newspaper className="w-4 h-4 mr-2" />;
                    <span>News</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/contact" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    Contact;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/help" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    Help Center;
                  </Link>;
                </li>;
              </ul>;
            </div>;
            {/* Resources */"}
            <div>;
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">;
                <FileText className="w-5 h-5 mr-2 text-cyan-400" />;
                Resources;
              </h3>;
              <ul className="space-y-3">;
                <li>;
                  <Link to="/pricing" className="text-gray-300 "hover": "text-cyan-400 transition-colors flex items-center group">;
                    <DollarSign className="w-4 h-4 mr-2" />;
                    <span>Pricing</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/comprehensive-pricing-guide-2025" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <TrendingUp className="w-4 h-4 mr-2" />;
                    <span>Pricing Guide 2025</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/white-papers" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    White Papers;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/faq" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    FAQ;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/request-quote" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    Request Quote;
                  </Link>;
                </li>;
              </ul>;
            </div>;
          </div>;
          {/* Social Media & Additional Links */"}
          <div className="border-t border-gray-800 mt-12 pt-8">;
            <div className="flex flex-col "lg": "flex-row justify-between items-center space-y-6 "lg":space-y-0">;
              ;
              {/* Social Media */"}
              <div className="flex items-center space-x-6">;
                <span className="text-gray-400 text-sm">Follow "us": "</span>;
                <div className="flex space-x-4">;
                  <a;
                    href="#";
                    className="text-gray-400 "hover":text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";
                    aria-label="LinkedIn";
                  >;
                    <Linkedin className="w-5 h-5" />;
                  </a>;
                  <a;
                    href="#";
                    className="text-gray-400 "hover":text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";
                    aria-label="Twitter";
                  >;
                    <Twitter className="w-5 h-5" />;
                  </a>;
                  <a;
                    href="#";
                    className="text-gray-400 "hover":text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";
                    aria-label="GitHub";
                  >;
                    <Github className="w-5 h-5" />;
                  </a>;
                </div>;
              </div>;
              {/* Legal Links */"}
              <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">;
                <Link to="/privacy" className="text-gray-400 "hover": "text-cyan-400 transition-colors flex items-center">;
                  <Shield className="w-4 h-4 mr-1" />;
                  Privacy Policy;
                </Link>;
                <Link to="/terms" className="text-gray-400 "hover":text-cyan-400 transition-colors">;
                  Terms of Service;
                </Link>;
                <Link to="/cookies" className="text-gray-400 "hover":text-cyan-400 transition-colors">;
                  Cookie Policy;
                </Link>;
              </div>;
              {/* Back to Top */"}
              <button;
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 "hover": "text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";
                aria-label="Back to top";
              >;
                <ArrowUp className="w-4 h-4" />;
                <span className="text-sm">Back to Top</span>;
              </button>;
            </div>;
          </div>;
          {/* Copyright */"}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">;
            <div className="flex flex-col "md": "flex-row justify-between items-center space-y-4 "md":space-y-0">;
              <p className="text-gray-400 text-sm flex items-center">;
                © {currentYear"} Zion Tech Group. All rights reserved.;
                <Heart className="w-4 h-4 mx-2 text-red-500" />;
                Made with passion for innovation.;
              </p>;
              <div className="flex items-center space-x-4 text-sm text-gray-400">;
                <span>Powered by cutting-edge technology</span>;
                <div className="flex space-x-2">;
                  <Brain className="w-4 h-4 text-cyan-400" />;
                  <Cloud className="w-4 h-4 text-blue-400" />;
                  <Shield className="w-4 h-4 text-green-400" />;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Globe,
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  ArrowUp,
:src/components/Footer.tsx
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
:src/components/Footer.tsx
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
import React, { useState } from 'react';
import Link from 'next/link';
  TrendingUp,
  Briefcase,
  Newspaper,
  Target,
  Heart,
:src/components/Footer.tsx
  DollarSign
import { Zap, Phone, Mail, MapPin } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Zion Tech Group</h2>
            </Link>
            <p className="text-gray-300 mb-6">
              Pioneering the future of technology with innovative AI, IT, and Micro SaaS solutions.
            </p>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400">IT Services</Link></li>
              <li><Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400">Micro SaaS</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-cyan-400">Solutions</Link></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400">Careers</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-cyan-400">News</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400">Contact</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400">Terms</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Brain,
  Shield,
  Code,
  Building2,
  FileText,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  BarChart3,
  ArrowUp,
  ExternalLink,
  Clock,
  Award,
  Sparkles,
  Award,
  ArrowRight,
  Star,
  Lock,
  Eye,
  Atom,
  Network,
  ArrowUp,
  Heart,
  Star,
  CheckCircle,
  Award,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,';
  ChevronDown';';
  Palette,
  ChevronDown
:src/components/Footer.tsx
} from 'lucide-react';
export function Footer() {
} from 'lucide-react';
export function Footer(props: any) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['company']));
  Server,
  ShoppingCart,
  Smartphone,
  Database,
  Clock,
  Code,
  BookOpen,
  Truck,
  ExternalLink,
  ChevronDown,
  Copyright
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
interface FooterLink {
  name: string;
  path: string;
  icon: any;
  external?: boolean;
}
interface FooterSection {
  title: string;
  icon: any;
  links: FooterLink[];
}
const footerSections = [
  {
    title: 'Company',
    icon: Globe,
    links: [
      { name: 'About Us', path: '/about', icon: Users },
      { name: 'Partners', path: '/partners', icon: Users },
      { name: 'Careers', path: '/careers', icon: Briefcase },
      { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'Contact', path: '/contact', icon: Phone },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Help Center', path: '/help', icon: HelpCircle }
    ]
  },
  {
    title: 'Core Services',
    icon: Zap,
    links: [
      { name: 'AI Services', path: '/ai-services', icon: Brain },
      { name: 'IT Services', path: '/it-services', icon: Server },
      { name: 'Micro SaaS', path: '/micro-saas', icon: ShoppingCart },
      { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
      { name: 'Cybersecurity', path: '/services/ai-cybersecurity-platform', icon: Shield },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap }
    ]
  },
  {
    title: 'AI & Research Services',
    icon: Brain,
    links: [
      { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: FileText },
      { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: TrendingUp },
      { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart },
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
      { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
      { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', icon: DollarSign },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', icon: MessageCircle }
    ]
  },
  {
    title: 'Advanced Technology',
    icon: Cpu,
    links: [
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Cpu },
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
      { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
      { name: 'Space Technology', path: '/space-tech', icon: Satellite },
      { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network },
      { name: 'Zero Trust Network', path: '/services/zero-trust-network-access', icon: Lock },
      { name: 'Sustainable Technology', path: '/services/sustainable-technology', icon: Leaf },
      { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', icon: TrendingUp }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', icon: DollarSign },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', icon: BarChart3 },
      { name: 'IT Consulting', path: '/it-consulting', icon: Cpu },
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    links: [
      { name: 'Micro SaaS Platform', path: '/micro-saas', icon: ShoppingCart },
      { name: 'Micro CRM', path: '/services/micro-crm', icon: Users },
      { name: 'Helpdesk Platform', path: '/services/helpdesk', icon: MessageCircle },
      { name: 'Website Analytics', path: '/services/website-analytics', icon: BarChart3 },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', icon: HelpCircle },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', icon: TrendingUp },
      { name: 'Mobile Survey', path: '/services/mobile-survey', icon: Smartphone },
      { name: 'Email Sequencer', path: '/services/email-sequencer', icon: Mail },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', icon: Video },
      { name: 'Returns Management', path: '/services/returns-management', icon: Truck }
    ]
  },
  {
    title: 'Support & Resources',
    icon: HelpCircle,
    links: [
      { name: 'Help Center', path: '/help', icon: HelpCircle },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Blog', path: '/blog', icon: BookOpen },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'Pricing', path: '/pricing', icon: DollarSign },
      { name: 'Contact Support', path: '/contact', icon: MessageCircle },
      { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
      { name: 'Sitemap', path: '/sitemap', icon: FileText }
    ]
  }
];
const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-500' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-500' },
  { name: 'YouTube', icon: TestTube, href: 'https://youtube.com/ziontechgroup', color: 'hover:text-red-600' }
];
export function Footer(props: any) {
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set());
  const [showScrollTop, setShowScrollTop] = React.useState<any>(false);
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ChevronDown,
} from 'lucide-react';
export default function Footer(props: any) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['company']));
  // Handle scroll to show/hide scroll to top button
  React.useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    const handleScroll = (props: any) => {
      const scrollToTopButton = document.getElementById('scroll-to-top');
      if (scrollToTopButton) {
        if (window.pageYOffset > 300) {
          scrollToTopButton.classList.remove('hidden');
        } else {
          scrollToTopButton.classList.add('hidden');
        }
      }
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Toggle section expansion (for mobile)
  const toggleSection = (props: any) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    }
    );
  };
  // Scroll to top function
  const scrollToTop = (props: any) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }
    );
  };
export default function Footer(props: any) {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Leadership Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & News', href: '/press' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/services/ai' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Digital Transformation', href: '/services/digital' },
        { name: 'IT Consulting', href: '/services/consulting' },
        { name: 'Micro SAAS', href: '/services/micro-saas' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Retail', href: '/solutions/retail' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Training', href: '/training' },
        { name: 'Community', href: '/community' },
        { name: 'System Status', href: '/status' },
        { name: 'Request Quote', href: '/request-quote' }
      ]
    }
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight } from 'lucide-react';
ursor/automate-test-fix-improve-and-merge-code-99d1,"}
    );,"})"
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Facebook, 
  Instagram,
  Youtube,
  ArrowRight,
  Shield,
  Cloud,
  Zap,
  Users,
  BarChart3,
  Settings,
  FileText,
  HelpCircle,
  Award,
  CheckCircle,
  Star,
  Lock,
  Eye,
  Network,
  Database,
  Cpu,
  Smartphone,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette} from "lucide-react
export function Footer(...args: an y[]): any {,
  const currentYear = new Date().getFullYear(),
  const [activeSection, setActiveSection] = useState<any>(null)"
  const footerSections = []}, {"
      title: "AI & Quantum Solutions",
icon: Brai n,"
category: "Core Services","
services: [ { name: "AI Customer Success Automation", href: "/services/ai-customer-success-automation", badge: "Popular" }, { name: "AI Healthcare Analytics Platform", href: "/services/ai-healthcare-analytics-platform", badge: "New" }, { name: "AI Financial Risk Management", href: "/services/ai-financial-risk-management-enhanced", badge: "Featured" }, { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization-enhanced", badge: "Trending" }, { name: "AI Legal Document Automation", href: "/services/ai-legal-document-automation-platform", badge: "Innovative" }, { name: "AI Mental Health Support", href: "/services/ai-mental-health-support-platform", badge: "Healthcare" }, { name: "AI Smart Home Energy Management", href: "/services/ai-smart-home-energy-management-platform", badge: "IoT" }, { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", badge: "Logistics" }, { name: "AI-Powered SEO", href: "/services/ai-powered-seo", badge: "Marketing" }, { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", badge: "Quantum" }, { name: "AI Space Technology", href: "/services/ai-space-technology-platform", badge: "Space Tech" }, { name: "AI Carbon Footprint Management", href: "/services/ai-carbon-footprint-management-platform", badge: "Green Tech" }, { name: "AI Autonomous Manufacturing", href: "/services/ai-autonomous-manufacturing-platform", badge: "Manufacturing" }, { name: "AI Enterprise Resource Planning", href: "/services/ai-enterprise-resource-planning", badge: "ERP" }, { name: "AI Autonomous Business Operations", href: "/services/ai-autonomous-business-operations-platform", badge: "Automation" }, { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics-platform", badge: "Analytics" }"
      title: "AI Cybersecurity & Infrastructure",
icon: Shiel d,"
category: "Security & Infrastructure","
services: [ { name: "AI-Powered DevOps Automation", href: "/services/ai-powered-devops-automation", badge: "New" }, { name: "AI-Powered Cybersecurity Suite", href: "/services/ai-powered-cybersecurity-suite", badge: "Security" }, { name: "Enterprise IT Infrastructure Management", href: "/services/enterprise-it-infrastructure-management", badge: "Infrastructure" }, { name: "Cloud Migration & Optimization", href: "/services/cloud-migration-and-optimization", badge: "Cloud" }, { name: "AI Data Analytics Platform", href: "/services/ai-data-analytics-platform", badge: "Analytics" }, { name: "AI DevOps Automation", href: "/services/ai-devops-automation", badge: "DevOps" }, { name: "Edge Computing Platform", href: "/services/edge-computing-platform", badge: "Edge" }"
      title: "Micro SaaS Solutions",
icon: Cod e,"
category: "Micro SaaS","
services: [ { name: "AI Email Automation Suite", href: "/services/ai-email-automation-suite", badge: "New" }, { name: "AI Social Media Scheduler", href: "/services/ai-social-media-scheduler", badge: "New" }, { name: "AI Customer Insights Platform", href: "/services/ai-customer-insights-platform", badge: "New" }, { name: "Micro CRM", href: "/services/micro-crm", badge: "Popular" }, { name: "Helpdesk Platform", href: "/services/helpdesk-platform", badge: "Support" }, { name: "Website Analytics", href: "/services/website-analytics", badge: "Analytics" }"
      title: "Solutions","
links: [ { name: "Enterprise Solutions", href: "/enterprise" }, { name: "Healthcare Tech", href: "/solutions/healthcare" }, { name: "Financial Solutions", href: "/financial-solutions" }, { name: "Manufacturing", href: "/manufacturing-solutions" }, { name: "Industry Solutions", href: "/industry-solutions" }, { name: "Emerging Tech", href: "/emerging-tech" }"
      title: "Company","
links: [ { name: "About Us", href: "/about" }, { name: "Our Team", href: "/about/team" }, { name: "Careers", href: "/careers" }, { name: "Partners", href: "/partners" }, { name: "News & Updates", href: "/news" }, { name: "Case Studies", href: "/case-studies" }"
      title: "Quantum Computing & Emerging Tech",
icon: Ato m,"
services: [ { name: "AI-Quantum Hybrid Computing Platform", href: "/services/ai-quantum-hybrid-platform" }, { name: "Quantum Computing as a Service", href: "/services/quantum-computing-as-a-service" }, { name: "AI Space Technology Platform", href: "/services/ai-space-technology-platform" }, { name: "AI IoT Edge Computing Platform", href: "/services/ai-iot-edge-computing-platform" }"
      title: "Resources","
links: [ { name: "Documentation", href: "/docs" }, { name: "White Papers", href: "/white-papers" }, { name: "Support Center", href: "/help" }, { name: "Training", href: "/training" }, { name: "Blog", href: "/blog" }, { name: "Research", href: "/research-development" }
export function Footer(props: any) {
  const scrollToTop = (props: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' }
    );
  };
  ]"
  const solutions = []
  const contactInfo = [
    { icon: Mai l, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto: klebe r@ziontechgroup.com" },
    { icon: Phon e, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPi n, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Glob e, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
];
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Protection", href: "/data-protection" },
    { name: "Accessibility", href: "/accessibility" }
  ];
  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github }
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-12">
        <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-5 gap-8">
          {/* Company Info */}
<div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white"  />
              </div>
              <span className="font-bold text-lg">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-zion-cyan" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-zion-cyan" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-zion-cyan flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover: tex t-blue-400 transition-colors">
                <Linkedin className="w-5 h-5"  />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover: tex t-blue-400 transition-colors">
                <Twitter className="w-5 h-5"  />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover: tex t-blue-400 transition-colors">
                <Facebook className="w-5 h-5"  />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover: tex t-blue-400 transition-colors">
                <Instagram className="w-5 h-5"  />
              </a>
            </div>
          </div>
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {section.title}
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover: tex t-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
</ul>
  Building2,
  FileText,
  Users,
  Briefcase,
  Network,';
  Newspaper';';
} from 'lucide-react';';
';';
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
  Palette,
  ChevronDown
  DollarSign,
  ExternalLink
} from 'lucide-react';
  Clock
} from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }
    );
  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Cloud Solutions', href: '/solutions/cloud-migration' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Data Analytics', href: '/services/data-analytics' },
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
      { name: 'Healthcare', href: '/solutions/healthcare' },
      { name: 'Finance', href: '/solutions/finance' },
      { name: 'Government', href: '/solutions/government' },
      { name: 'Retail', href: '/solutions/retail' },
      { name: 'Education', href: '/solutions/education' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'News', href: '/news' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'API Documentation', href: '/api-docs' },
      { name: 'Support', href: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' },
      { name: 'Security', href: '/security' },
    ],
  };
:src/components/Footer.tsx
  const footerSections = [';
    {';';
      title: 'Company',
      icon: Building2,';
      links: [';';
        { name: 'About Us', path: '/about', icon: Users },';';
        { name: 'Our Story', path: '/about/story', icon: FileText },';';
        { name: 'Team', path: '/about/team', icon: Users },';';
        { name: 'Careers', path: '/careers', icon: Briefcase },';';
        { name: 'Partners', path: '/partners', icon: Network },';';
        { name: 'Press', path: '/press', icon: Newspaper },';';
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },';
    {';';
      title: 'AI & Quantum Solutions',';
      icon: Brain,';';
      category: 'Core Services',';
      services: [';';
        { name: 'AI Customer Success Automation', href: '/services/ai-customer-success-automation', badge: 'Popular' },';';
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', badge: 'New' },';';
        { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management-enhanced', badge: 'Featured' },';';
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization-enhanced', badge: 'Trending' },';';
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation-platform', badge: 'Innovative' },';';
        { name: 'AI Mental Health Support', href: '/services/ai-mental-health-support-platform', badge: 'Healthcare' },';';
        { name: 'AI Smart Home Energy Management', href: '/services/ai-smart-home-energy-management-platform', badge: 'IoT' },';';
        { name: 'AI Autonomous Logistics', href: '/services/ai-autonomous-logistics-platform', badge: 'Logistics' },';';
        { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', badge: 'Marketing' },';';
        { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing-solutions', badge: 'Quantum' },';';
        { name: 'AI Space Technology', href: '/services/ai-space-technology-platform', badge: 'Space Tech' },';';
        { name: 'AI Carbon Footprint Management', href: '/services/ai-carbon-footprint-management-platform', badge: 'Green Tech' },';';
        { name: 'AI Autonomous Manufacturing', href: '/services/ai-autonomous-manufacturing-platform', badge: 'Manufacturing' },';';
        { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning', badge: 'ERP' },';';
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations-platform', badge: 'Automation' },';';
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics-platform', badge: 'Analytics' }
      ]
    },';
    {';';
      title: 'AI Cybersecurity & Infrastructure',';
      icon: Shield,';';
      category: 'Security & Infrastructure',';
      services: [';';
        { name: 'AI-Powered DevOps Automation', href: '/services/ai-powered-devops-automation', badge: 'New' },';';
        { name: 'AI-Powered Cybersecurity Suite', href: '/services/ai-powered-cybersecurity-suite', badge: 'Security' },';';
        { name: 'Enterprise IT Infrastructure Management', href: '/services/enterprise-it-infrastructure-management', badge: 'Infrastructure' },';';
        { name: 'Cloud Migration & Optimization', href: '/services/cloud-migration-and-optimization', badge: 'Cloud' },';';
        { name: 'AI Data Analytics Platform', href: '/services/ai-data-analytics-platform', badge: 'Analytics' },';';
        { name: 'AI DevOps Automation', href: '/services/ai-devops-automation', badge: 'DevOps' },';';
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', badge: 'Edge' }
      ]
    },';
    {';';
      title: 'Micro SaaS Solutions',';
      icon: Code,';';
      category: 'Micro SaaS',';
      services: [';';
        { name: 'AI Email Automation Suite', href: '/services/ai-email-automation-suite', badge: 'New' },';';
        { name: 'AI Social Media Scheduler', href: '/services/ai-social-media-scheduler', badge: 'New' },';';
        { name: 'AI Customer Insights Platform', href: '/services/ai-customer-insights-platform', badge: 'New' },';';
        { name: 'Micro CRM', href: '/services/micro-crm', badge: 'Popular' },';';
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', badge: 'Support' },';';
        { name: 'Website Analytics', href: '/services/website-analytics', badge: 'Analytics' }
      ]
    },';
    {';';
      title: 'Solutions',';
      links: [';';
        { name: 'Enterprise Solutions', href: '/enterprise' },';';
        { name: 'Healthcare Tech', href: '/solutions/healthcare' },';';
        { name: 'Financial Solutions', href: '/financial-solutions' },';';
        { name: 'Manufacturing', href: '/manufacturing-solutions' },';';
        { name: 'Industry Solutions', href: '/industry-solutions' },';';
        { name: 'Emerging Tech', href: '/emerging-tech' }
      ]
    },';
    {';';
      title: 'Resources',';
      links: [';';
        { name: 'Documentation', href: '/docs' },';';
        { name: 'White Papers', href: '/white-papers' },';';
        { name: 'Support Center', href: '/help' },';';
        { name: 'Training', href: '/training' },';';
        { name: 'Blog', href: '/blog' },';';
        { name: 'Research', href: '/research-development' }
      ]
    }
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
  ];
  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Award, value: '50+', label: 'Expert Team Members' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Zion Tech Group</h3>
                <p className="text-gray-400">AI & Technology Solutions</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              and digital transformation services. We help businesses thrive in the digital age.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          {/* Service Sections */}
          {footerSections.slice(1, 4).map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">{section.title}
              </div>
              <div className="space-y-2">
                {section.services ? (
                  section.services.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{service.name}</span>
                        {service.badge && (
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))
                ) : (
                  section.links?.slice(0, 6).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <span>{link.name}</span>
                    </Link>
                  ))
                )}
              </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Micro SaaS</Link></li>
              <li><Link href="/blockchain-solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blockchain Solutions</Link></li>
              <li><Link href="/iot-solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">IoT Solutions</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">All Solutions</Link></li>
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Partners</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400"  />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400 text-sm">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400"  />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400 text-sm">San Francisco, CA</p>
        {/* Contact & Social Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>Get in Touch</span>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Follow Us
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Documentation</Link></li>
              <li><Link href="/api" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">API Reference</Link></li>
              <li><Link href="/pricing-guide" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Pricing Guide</Link></li>
              <li><Link href="/training" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Training</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Support</Link></li>
              <li><Link href="/help" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Help Center</Link></li>
            </ul>
  // Scroll to top
      const scrollToTopButton = document.getElementById('scroll-to-top');
      if (scrollToTopButton) {
        if (window.pageYOffset > 300) {
          scrollToTopButton.classList.remove('hidden');
        } else {
          scrollToTopButton.classList.add('hidden');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Toggle section expansion (for mobile)
  const toggleSection = (props: any) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    }
    );
  };
  // Scroll to top function
  const scrollToTop = (props: any) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }
    );
  };
  // Handle link click
  const handleLinkClick = (props: any) => {
    if (link.external) {
      window.open(link.path, '_blank', 'noopener,noreferrer');
    } else {
      // Handle internal navigation
    }
  };
  const footerSections = [
    {
      title: 'Company',
      icon: Globe,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Partners', path: '/partners', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Solutions', path: '/solutions', icon: Target },
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Blog', path: '/blog', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Research Services',
      icon: Brain,
      links: [
        { name: 'Comprehensive Services Showcase 2025', path: '/comprehensive-services-showcase-2025', icon: Sparkles },
        { name: 'AI Business Intelligence Platform', path: '/services/ai-business-intelligence-platform', icon: BarChart3 },
        { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', icon: FileText },
        { name: 'AI Customer Support Platform', path: '/services/ai-customer-support-platform', icon: MessageSquare },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI Cybersecurity Suite', path: '/services/ai-cybersecurity-suite', icon: Shield },
        { name: 'AI Data Analytics & BI', path: '/services/ai-data-analytics-bi', icon: BarChart3 },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain }
      ]
    },
    {
      title: 'Advanced Technology',
      icon: Cpu,
      links: [
        { name: 'Cloud Infrastructure & DevOps', path: '/services/cloud-infrastructure-devops', icon: Cloud },
        { name: 'Cybersecurity & Compliance', path: '/services/cybersecurity-compliance', icon: Shield },
        { name: 'Quantum Computing Services', path: '/services/quantum-computing-services', icon: Atom },
        { name: 'Blockchain & Web3 Solutions', path: '/services/blockchain-web3-solutions', icon: Cpu },
        { name: 'IoT & Edge Computing Services', path: '/services/iot-edge-computing-services', icon: Network },
        { name: 'Digital Twin Solutions', path: '/services/digital-twin-solutions', icon: Eye },
        { name: 'Space Technology Solutions', path: '/services/space-technology-solutions', icon: Satellite },
        { name: 'Green IT Solutions', path: '/services/green-it-solutions', icon: Leaf },
        { name: 'Zero Trust Network Architecture', path: '/services/zero-trust-network-architecture', icon: Lock }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'IT Services', path: '/it-services', icon: Building },
        { name: 'Micro SaaS Solutions', path: '/micro-saas-solutions', icon: Zap },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Blockchain Solutions', path: '/services/blockchain', icon: Coins }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Rocket,
      links: [
        { name: 'Metaverse Development', path: '/services/metaverse-development', icon: Gamepad2 },
        { name: 'AI Content Creation', path: '/services/ai-content-creation', icon: FileText },
        { name: 'AI HR Platform', path: '/services/ai-hr-platform', icon: Users },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', icon: Leaf },
        { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', icon: Activity },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', icon: Atom },
        { name: 'Edge Computing', path: '/services/edge-computing', icon: Network },
        { name: 'Green Computing', path: '/services/green-computing', icon: Leaf }
      ]
    }
  ];
  const contactInfo = [
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: '123 Tech Street, Innovation City, IC 12345', href: '#' }
  ];
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">';
        <div className="absolute inset-0" style="{{{';';
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style="{{{
          backgroundImage: `url("data; %3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http: //www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}"} />
      </div>
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Leading the future of technology with cutting-edge AI solutions, 
                  quantum computing innovations, and transformative micro SAAS services.
                </p>
                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-300">
                      <item.icon className="w-4 h-4 text-blue-400" />
                      <a 
                        href={item.href} 
                        target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        {item.text}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                {/* Mobile Section Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full lg:hidden text-left"
                >
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSections.has(section.title) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {/* Desktop Section Header */}
                <h4 className="text-lg font-semibold text-white hidden lg:block">{section.title}</h4>
                {/* Links */}
                <AnimatePresence>
                  <div className={`space-y-3 ${
                    expandedSections.has(section.title) ? 'block' : 'hidden lg:block'
                  }`}>
                    {section.links.map((link) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <button
                          onClick={() => handleLinkClick(link)}
                          className="text-slate-300 hover:text-white transition-colors text-left flex items-center gap-2 group"
                        >
                          <link .icon className="w-4 h-4"  />
                          <span>{link.name}</span>
                          {link.external && (
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          {/* Divider */}
          <div className="border-t border-slate-700 my-12" />
          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Copyright and Legal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <Copyright className="w-4 h-4" />
                <span>2024 Zion Tech Group. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="/privacy" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Privacy
                </a>
                <a href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms
                </a>
                <a href="/cookies" className="text-slate-400 hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </motion.div>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <h3 className="text-lg font-semibold text-white">Follow Us
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-300 ${link.color} transition-all duration-200`}
                  >
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <link .icon className="w-5 h-5"  />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-slate-700"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="text-blue-400 font-medium mb-3">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link href="/docs" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link href="/white-papers" className="hover:text-blue-400 transition-colors">White Papers</Link></li>
                <li><Link href="/webinars" className="hover:text-blue-400 transition-colors">Webinars</Link></li>
              </ul>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
        {/* Copyright */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-slate-400">
                <Copyright className="w-4 h-4" />
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
              </div>
              <div className="flex space-x-6 text-sm text-slate-400">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      {/* Made with Love */}
      <div className="text-center py-6 border-t border-slate-700">
        <p className="text-slate-400 text-sm">
          Made with <Heart className="inline w-4 h-4 text-red-500" /> by the Zion Tech Group team
        </p>
      </div>
    </footer>
  );
}
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Leadership Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & News', href: '/newsroom' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/services/ai-services' },
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'Cybersecurity', href: '/services/it/cybersecurity' },
        { name: 'Cloud Services', href: '/services/it/cloud-finops' },
        { name: 'Platform Engineering', href: '/services/it/platform-engineering' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions' },
        { name: 'Healthcare Tech', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Industry Solutions', href: '/solutions/industry' },
        { name: 'Emerging Tech', href: '/solutions/emerging' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Training', href: '/training' },
        { name: 'Community', href: '/community' },
        { name: 'System Status', href: '/status' },
        { name: 'Request Quote', href: '/request-quote' }
      ]
    }
  ];
  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/company/ziontechgroup", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/ziontechgroup", color: "hover:text-blue-400" },
    { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com/ziontechgroup", color: "hover:text-blue-400" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/ziontechgroup", color: "hover:text-blue-400" },
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/ziontechgroup", color: "hover:text-gray-400" }
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
export function Footer(props: any) {
  const scrollToTop = (props: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' }
    );
  };
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI & Analytics", href: "/services/ai-analytics" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "IoT & Edge", href: "/services/iot-edge" },
        { name: "Quantum Computing", href: "/services/quantum-computing" },
        { name: "Blockchain", href: "/services/blockchain" },
        { name: "Digital Twin", href: "/services/digital-twin" },
        { name: "Sustainability", href: "/services/sustainability" }
      ]
    },
    {
      title: "Micro SAAS",
      links: [
        { name: "AI Business Intelligence", href: "/micro-saas/ai-business-intelligence" },
        { name: "Customer Experience", href: "/micro-saas/customer-experience" },
        { name: "Supply Chain", href: "/micro-saas/supply-chain" },
        { name: "Cybersecurity", href: "/micro-saas/cybersecurity" },
        { name: "IoT Edge Computing", href: "/micro-saas/iot-edge" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact Support", href: "/contact" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Status Page", href: "/status" }
      ]
    }
  ];
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Protection", href: "/data-protection" },
    { name: "Accessibility", href: "/accessibility" }
  ];
  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github }
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the future of technology with innovative AI solutions, 
              quantum computing, and cutting-edge digital transformation services.
            </p>
            <div className="flex space-x-4">
:src/components/Footer.tsx
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
:src/components/Footer.tsx
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${social.color}`}
                >
                  {social.icon}
                </a>
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
:src/components/Footer.tsx
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/ai-solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-devops" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/data-analytics" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>
          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/enterprise" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/healthcare" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Healthcare Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/finance" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Financial Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/retail" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Retail Solutions
                </Link>
              </li>
            </ul>
          </div>
          {/* Company & Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Newspaper className="w-4 h-4 mr-2" />
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {section.title}
              </h3>
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/ai-solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-devops" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/data-analytics" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>
          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/enterprise" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/healthcare" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Healthcare Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/finance" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Financial Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/retail" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Retail Solutions
                </Link>
              </li>
            </ul>
          </div>
          {/* Company & Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Newspaper className="w-4 h-4 mr-2" />
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
:src/components/Footer.tsx
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">Sitemap</Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-blue-400 transition-colors">Accessibility</Link>
              <Link href="/status" className="text-gray-400 hover:text-blue-400 transition-colors">System Status</Link>
            </div>
          </div>
        </div>
      </div>
</footer>
  );
};
export default Footer;
      {/* Scroll to Top Button */}
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hidden z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
        {/* Social Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Zion Tech Group. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for innovation.</span>
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Zion Tech Group
                </h2>
              </Link>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Pioneering the future of technology with innovative AI, IT infrastructure, and cutting-edge Micro SaaS solutions that transform businesses worldwide.
              </p>
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Cloud className="w-5 h-5 mr-2 text-cyan-400" />
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <span>All Services</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/new-services-2025" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <span>New Services 2025</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <Brain className="w-4 h-4 mr-2" />
                    <span>AI Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <Building className="w-4 h-4 mr-2" />
                    <span>IT Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <Zap className="w-4 h-4 mr-2" />
                    <span>Micro SaaS</span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <Target className="w-4 h-4 mr-2" />
                    <span>Solutions</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-cyan-400" />
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>Careers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <Newspaper className="w-4 h-4 mr-2" />
                    <span>News</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-cyan-400" />
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/comprehensive-pricing" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span>Pricing Guide 2025</span>
                  </Link>
                </li>
                <li>
                  <Link to="/white-papers" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    White Papers
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/request-quote" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Request Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Social Media & Additional Links */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Social Media */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-3">Stay Updated
            <p className="text-gray-400 text-sm mb-4">
              Get the latest insights on AI, technology trends, and business innovation.
            </p>
            <div className="flex space-x-2">
              <input type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
                />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: fro m-blue-700 hover: t o-purple-700 transition-all duration-300">
Subscribe
              <input type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm flex items-center">
                © {currentYear} Zion Tech Group. All rights reserved.
                <Heart className="w-4 h-4 mx-2 text-red-500" />
                Made with passion for innovation.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Powered by cutting-edge technology</span>
                <div className="flex space-x-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  <Cloud className="w-4 h-4 text-blue-400" />
                  <Shield className="w-4 h-4 text-green-400" />
                </div>
              </div>
{/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md: fle x-row justify-between items-center space-y-4 md: spac e-y-0">
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover: tex t-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover: tex t-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover: tex t-white transition-colors">
Cookie Policy
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">Sitemap</Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-blue-400 transition-colors">Accessibility</Link>
              <Link href="/status" className="text-gray-400 hover:text-blue-400 transition-colors">System Status</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
:src/components/Footer.tsx
}
}
</button>
</div>
</div>
</motion>
</motion>
</ChevronDown>
</motion>
</div>
</any>
</string>
</Set>
</any>
</string>
</Set>
</string>
</Set>
}
}
;';;';
}
};
export default Footer;