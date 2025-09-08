import React from 'react';'
import { Link  } from 'react-router-dom';'
:src/components/Footer.tsx;
';'
';';'
import {Mail;
  }
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
    window.scrollTo({ "top": "0", "behavior": 'smooth' })
};
;
  return (;
    <footer className="bg-gray-900 text-white relative overflow-hidden">;
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">;"
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>;"
      </div>;<div className="relative z-10">;"
        <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8 py-16">;"
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-5 gap-8 "lg":gap-12">;{/* Company Info */"}"
            <div className=""lg": "col-span-2">;"
              <Link to="/" className="flex items-center space-x-3 mb-6 group">;"
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-"hover":scale-110 transition-transform duration-300">;"
                  <Zap className="w-7 h-7 text-white" />;"
                </div>;
                <h2 className="text-2xl font-bold text-white group-"hover":text-blue-400 transition-colors">;"
                  Zion Tech Group;
                </h2>;
              </Link>;<p className="text-gray-300 mb-6 text-lg leading-relaxed">;"
                Pioneering the future of technology with innovative AI", IT infrastructure, and cutting-edge Micro SaaS solutions that transform businesses worldwide.;"
              </p>;{/* Contact Information */}
              <div className="space-y-4">;"
                <div className="flex items-center space-x-3 text-gray-300">;"
                  <Phone className="w-5 h-5 text-cyan-400" />;"
                  <a href=""tel": "+13024640950" className=""hover":text-cyan-400 transition-colors">;"
                    +1 302 464 0950;
                  </a>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;"
                  <Mail className="w-5 h-5 text-cyan-400" />;"
                  <a href=""mailto":kleber@ziontechgroup.com" className=""hover":text-cyan-400 transition-colors">;"
                    kleber@ziontechgroup.com;
                  </a>;
                </div>;
                <div className="flex items-start space-x-3 text-gray-300">;"
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />;"
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>;
                </div>;
              </div>;
            </div>;
            {/* Services */"}"
            <div>;
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">;"
                <Cloud className="w-5 h-5 mr-2 text-cyan-400" />;"
                Services;
              </h3>;
              <ul className="space-y-3">;"
                <li>;
                  <Link to="/services" className="text-gray-300 "hover": "text-cyan-400 transition-colors flex items-center group">;"
                    <span>All Services</span>;
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-"hover":opacity-100 transition-opacity" />;"
                  </Link>;
                </li>;
                <li>;
                  <Link to="/new-services-2025" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;"
                    <span>New Services 2025</span>;
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-"hover":opacity-100 transition-opacity" />;"
                  </Link>;
                </li>;
                <li>;
                  <Link to="/ai-services" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;"
                    <Brain className="w-4 h-4 mr-2" />;"
                    <span>AI Services</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/it-services" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;"
                    <Building className="w-4 h-4 mr-2" />;"
                    <span>IT Services</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/micro-saas" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;"
                    <Zap className="w-4 h-4 mr-2" />;"
                    <span>Micro SaaS</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/solutions" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;"
                    <Target className="w-4 h-4 mr-2" />;"
                    <span>Solutions</span>;
                  </Link>;
                </li>;
              </ul>;
            </div>;
            {/* Company */"}"
            <div>;
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">;"
                <Users className="w-5 h-5 mr-2 text-cyan-400" />;"
                Company;
              </h3>;
              <ul className="space-y-3">;"
                <li>;
                  <Link to="/about" className="text-gray-300 "hover": "text-cyan-400 transition-colors">;"
                    About Us;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/careers" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;"
                    <Briefcase className="w-4 h-4 mr-2" />;"
                    <span>Careers</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/news" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;"
                    <Newspaper className="w-4 h-4 mr-2" />;"
                    <span>News</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/contact" className="text-gray-300 "hover":text-cyan-400 transition-colors">;"
                    Contact;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/help" className="text-gray-300 "hover":text-cyan-400 transition-colors">;"
                    Help Center;
                  </Link>;
                </li>;
              </ul>;
            </div>;
            {/* Resources */"}"
            <div>;
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">;"
                <FileText className="w-5 h-5 mr-2 text-cyan-400" />;"
                Resources;
              </h3>;
              <ul className="space-y-3">;"
                <li>;
                  <Link to="/pricing" className="text-gray-300 "hover": "text-cyan-400 transition-colors flex items-center group">;"
                    <DollarSign className="w-4 h-4 mr-2" />;"
                    <span>Pricing</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/comprehensive-pricing-guide-2025" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;"
                    <TrendingUp className="w-4 h-4 mr-2" />;"
                    <span>Pricing Guide 2025</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/white-papers" className="text-gray-300 "hover":text-cyan-400 transition-colors">;"
                    White Papers;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/faq" className="text-gray-300 "hover":text-cyan-400 transition-colors">;"
                    FAQ;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/request-quote" className="text-gray-300 "hover":text-cyan-400 transition-colors">;"
                    Request Quote;
                  </Link>;
                </li>;
              </ul>;
            </div>;
          </div>;
          {/* Social Media & Additional Links */"}"
          <div className="border-t border-gray-800 mt-12 pt-8">;"
            <div className="flex flex-col "lg": "flex-row justify-between items-center space-y-6 "lg":space-y-0">;{/* Social Media */"}"
              <div className="flex items-center space-x-6">;"
                <span className="text-gray-400 text-sm">Follow "us": "</span>;"
                <div className="flex space-x-4">;"
                  <a;
                    href="#";"
                    className="text-gray-400 "hover":text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";"
                    aria-label="LinkedIn";"
                  >;
                    <Linkedin className="w-5 h-5" />;"
                  </a>;
                  <a;
                    href="#";"
                    className="text-gray-400 "hover":text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";"
                    aria-label="Twitter";"
                  >;
                    <Twitter className="w-5 h-5" />;"
                  </a>;
                  <a;
                    href="#";"
                    className="text-gray-400 "hover":text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";"
                    aria-label="GitHub";"
                  >;
                    <Github className="w-5 h-5" />;"
                  </a>;
                </div>;
              </div>;
              {/* Legal Links */"}"
              <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">;"
                <Link to="/privacy" className="text-gray-400 "hover": "text-cyan-400 transition-colors flex items-center">;"
                  <Shield className="w-4 h-4 mr-1" />;"
                  Privacy Policy;
                </Link>;
                <Link to="/terms" className="text-gray-400 "hover":text-cyan-400 transition-colors">;"
                  Terms of Service;
                </Link>;
                <Link to="/cookies" className="text-gray-400 "hover":text-cyan-400 transition-colors">;"
                  Cookie Policy;
                </Link>;
              </div>;
              {/* Back to Top */"}"
              <button;
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 "hover": "text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";"
                aria-label="Back to top";"
              >;
                <ArrowUp className="w-4 h-4" />;"
                <span className="text-sm">Back to Top</span>;"
              </button>;
            </div>;
          </div>;
          {/* Copyright */"}"
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">;"
            <div className="flex flex-col "md": "flex-row justify-between items-center space-y-4 "md":space-y-0">;"
              <p className="text-gray-400 text-sm flex items-center">;"
                © {currentYear"} Zion Tech Group. All rights reserved.;"
                <Heart className="w-4 h-4 mx-2 text-red-500" />;"
                Made with passion for innovation.;
              </p>;
              <div className="flex items-center space-x-4 text-sm text-gray-400">;"
                <span>Powered by cutting-edge technology</span>;
                <div className="flex space-x-2">;"
                  <Brain className="w-4 h-4 text-cyan-400" />;"
                  <Cloud className="w-4 h-4 text-blue-400" />;"
                  <Shield className="w-4 h-4 text-green-400" />;"
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
import Link from 'next/link';'
import { motion  } from 'framer-motion';'
import { Phone,Mail,MapPin,Facebook,Twitter,Linkedin,Instagram,Github,Mail,Phone,MapPin,ArrowUp,Globe,import {Mail,Phone,MapPin,Linkedin,Twitter,Github,ArrowUp,:src/components/Footer.tsx;
  }
  Shield,Zap,Brain,Cloud,Building,Users,FileText,:src/components/Footer.tsx;
  Video,TestTube,TrendingUp,CheckCircle,Briefcase,Newspaper,Target,Rocket,Heart,DollarSign,import React, { useState  } from 'react';'
  TrendingUp,Briefcase,Newspaper,Target,Heart,:src/components/Footer.tsx;
  DollarSign;
import { Zap, Phone, Mail, MapPin  } from 'lucide-react';'
export function Footer() {const currentYear = new Date().getFullYear()return (<footer className="bg-gray-900 text-white">;"
      <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-16">;"
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8">;"
          {/* Company Info */}
          <div className=""lg":col-span-1">;"
            <Link to="/" className="flex items-center space-x-3 mb-6">;"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">;"
                <Zap className="w-6 h-6 text-white" />;"
              </div>;
              <h2 className="text-2xl font-bold text-white">Zion Tech Group</h2>;"
            </Link>;
            <p className="text-gray-300 mb-6">;"
              Pioneering the future of technology with innovative AI, IT, and Micro SaaS solutions.;
            </p>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>;"
            <ul className="space-y-3">;"
              <li><Link to="/ai-services" className="text-gray-300 "hover":text-cyan-400">AI Services</Link></li>;"
              <li><Link to="/it-services" className="text-gray-300 "hover":text-cyan-400">IT Services</Link></li>;"
              <li><Link to="/micro-saas" className="text-gray-300 "hover":text-cyan-400">Micro SaaS</Link></li>;"
              <li><Link to="/solutions" className="text-gray-300 "hover":text-cyan-400">Solutions</Link></li>;"
            </ul>;
          </div>;
          {/* Company */}
          <div>;
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>;"
            <ul className="space-y-3">;"
              <li><Link to="/about" className="text-gray-300 "hover":text-cyan-400">About Us</Link></li>;"
              <li><Link to="/careers" className="text-gray-300 "hover":text-cyan-400">Careers</Link></li>;"
              <li><Link to="/news" className="text-gray-300 "hover":text-cyan-400">News</Link></li>;"
              <li><Link to="/contact" className="text-gray-300 "hover":text-cyan-400">Contact</Link></li>;"
            </ul>;
          </div>;
          {/* Contact Info */}
          <div>;
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>;"
            <div className="space-y-3">;"
              <div className="flex items-center space-x-3">;"
                <Phone className="w-5 h-5 text-cyan-400" />;"
                <span className="text-gray-300">+1 302 464 0950</span>;"
              </div>;
              <div className="flex items-center space-x-3">;"
                <Mail className="w-5 h-5 text-cyan-400" />;"
                <span className="text-gray-300">kleber@ziontechgroup.com</span>;"
              </div>;
              <div className="flex items-start space-x-3">;"
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />;"
                <span className="text-gray-300">;"
                  364 E Main St STE 1008<br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">;"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-6">;"
          <div className="flex flex-col "md":flex-row items-center justify-between">;"
            <div className="text-gray-400 text-sm mb-4 "md":mb-0">;"
              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex items-center space-x-6 text-sm">;"
              <Link to="/privacy" className="text-gray-400 "hover":text-cyan-400">Privacy</Link>;"
              <Link to="/terms" className="text-gray-400 "hover":text-cyan-400">Terms</Link>;"
              <Link to="/cookies" className="text-gray-400 "hover":text-cyan-400">Cookies</Link>;"
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  )}
import { Twitter,Linkedin,Facebook,Instagram,Github,Mail,Phone,MapPin,Globe,Zap,Brain,Shield,Code,Building2,FileText,Users,HardDrive,TrendingUp,Building2,FileText,HelpCircle,Activity,Cpu,GraduationCap,BarChart3,ArrowUp,ExternalLink,Clock,Award,Sparkles,Award,ArrowRight,Star,Lock,Eye,Atom,Network,ArrowUp,Heart,Star,CheckCircle,Award,Rocket,Target,Handshake,Lightbulb,Database,Network,Smartphone,Lock,Code,Server,Chip,Wifi,ShieldCheck,Bot,Workflow,Eye,Sparkles,Atom,Leaf,Gamepad2,Coins,Satellite,MessageCircle,Search,BarChart,Users2,Settings,Palette,';'
  }
  ChevronDown';';'
  Palette,ChevronDown;
:src/components/Footer.tsx;
 } from 'lucide-react';'
export function Footer() {} from 'lucide-react';'
export function Footer() {const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['company']))Server,ShoppingCart,Smartphone,Database,Clock,Code,BookOpen,Truck,ExternalLink,ChevronDown,Copyright;'
} from 'lucide-react';'
import { AnimatePresence  } from 'framer-motion';'
interface FooterLink  {"name": string;
  }
  "path": string;
  "icon": any;
  external?: boolean;
}
interface FooterSection  {"title": string;
  }
  "icon": any;
  "links": FooterLink[];
}
const footerSections = [;
  {"title": 'Company',"icon": Globe,"links": [;'
      { "name": 'About Us', "path": '/about', "icon": Users },{ "name": 'Partners', "path": '/partners', "icon": Users },{ "name": 'Careers', "path": '/careers', "icon": Briefcase },{ "name": 'AI Solutions', "path": '/ai-solutions', "icon": Brain },{ "name": 'Blog', "path": '/blog', "icon": Newspaper },{ "name": 'Contact', "path": '/contact', "icon": Phone },{ "name": 'News', "path": '/news', "icon": Newspaper },{ "name": 'Case Studies', "path": '/case-studies', "icon": FileText },{ "name": 'FAQ', "path": '/faq', "icon": HelpCircle },{ "name": 'Help Center', "path": '/help', "icon": HelpCircle }'
    ];
  },{"title": 'Core Services',"icon": Zap,"links": [;'
      { "name": 'AI Services', "path": '/ai-services', "icon": Brain },{ "name": 'IT Services', "path": '/it-services', "icon": Server },{ "name": 'Micro SaaS', "path": '/micro-saas', "icon": ShoppingCart },{ "name": 'Cloud DevOps', "path": '/services/cloud-devops', "icon": Cloud },{ "name": 'Cybersecurity', "path": '/services/ai-cybersecurity-platform', "icon": Shield },{ "name": 'Digital Transformation', "path": '/services/digital-transformation', "icon": Zap }'
    ];
  },{"title": 'AI & Research Services',"icon": Brain,"links": [;'
      { "name": 'AI Autonomous Research Assistant', "path": '/services/ai-autonomous-research-assistant', "icon": Brain },{ "name": 'AI Content Marketing Suite', "path": '/services/ai-content-marketing-suite', "icon": FileText },{ "name": 'AI Supply Chain Optimization', "path": '/services/ai-supply-chain-optimization', "icon": TrendingUp },{ "name": 'AI Healthcare Platform', "path": '/services/ai-healthcare-platform', "icon": Heart },{ "name": 'AI Business Intelligence', "path": '/services/ai-business-intelligence', "icon": BarChart3 },{ "name": 'AI Project Management', "path": '/services/ai-project-management', "icon": Target },{ "name": 'AI Sales Copilot', "path": '/services/ai-sales-copilot', "icon": Users },{ "name": 'AI Marketing Automation', "path": '/services/ai-marketing-automation', "icon": TrendingUp },{ "name": 'AI Financial Analytics', "path": '/services/ai-financial-analytics', "icon": DollarSign },{ "name": 'AI Customer Support Automation', "path": '/services/ai-customer-support-automation', "icon": MessageCircle }'
    ];
  },{"title": 'Advanced Technology',"icon": Cpu,"links": [;'
      { "name": 'AI Quantum Hybrid Platform', "path": '/services/ai-quantum-hybrid-platform', "icon": Cpu },{ "name": 'AI Cybersecurity Platform', "path": '/services/ai-cybersecurity-platform', "icon": Shield },{ "name": 'Quantum Computing', "path": '/services/quantum-computing', "icon": Atom },{ "name": 'Space Technology', "path": '/space-tech', "icon": Satellite },{ "name": 'Digital Twin', "path": '/services/digital-twin', "icon": Eye },{ "name": 'IoT Edge Computing', "path": '/services/iot-edge-computing', "icon": Network },{ "name": 'Zero Trust Network', "path": '/services/zero-trust-network-access', "icon": Lock },{ "name": 'Sustainable Technology', "path": '/services/sustainable-technology', "icon": Leaf },{ "name": 'AI Predictive Maintenance', "path": '/services/ai-predictive-maintenance', "icon": TrendingUp }'
    ];
  },{"title": 'Cloud & Infrastructure',"icon": Cloud,"links": [;'
      { "name": 'Cloud DevOps', "path": '/services/cloud-devops', "icon": Cloud },{ "name": 'IT Infrastructure', "path": '/services/it-infrastructure', "icon": Server },{ "name": 'FinOps Advisor', "path": '/services/finops-advisor', "icon": DollarSign },{ "name": 'Cloud FinOps Optimizer', "path": '/services/cloud-finops-optimizer', "icon": BarChart3 },{ "name": 'IT Consulting', "path": '/it-consulting', "icon": Cpu },{ "name": 'Enterprise Solutions', "path": '/solutions/enterprise', "icon": Building },{ "name": 'Healthcare Solutions', "path": '/solutions/healthcare', "icon": Heart }'
    ];
  },{"title": 'Micro SaaS Solutions',"icon": ShoppingCart,"links": [;'
      { "name": 'Micro SaaS Platform', "path": '/micro-saas', "icon": ShoppingCart },{ "name": 'Micro CRM', "path": '/services/micro-crm', "icon": Users },{ "name": 'Helpdesk Platform', "path": '/services/helpdesk', "icon": MessageCircle },{ "name": 'Website Analytics', "path": '/services/website-analytics', "icon": BarChart3 },{ "name": 'IT Helpdesk', "path": '/services/it-helpdesk', "icon": HelpCircle },{ "name": 'Affiliate Tracking', "path": '/services/affiliate-tracking', "icon": TrendingUp },{ "name": 'Mobile Survey', "path": '/services/mobile-survey', "icon": Smartphone },{ "name": 'Email Sequencer', "path": '/services/email-sequencer', "icon": Mail },{ "name": 'Podcast Transcription', "path": '/services/podcast-transcription', "icon": Video },{ "name": 'Returns Management', "path": '/services/returns-management', "icon": Truck }'
    ];
  },{"title": 'Support & Resources',"icon": HelpCircle,"links": [;'
      { "name": 'Help Center', "path": '/help', "icon": HelpCircle },{ "name": 'FAQ', "path": '/faq', "icon": HelpCircle },{ "name": 'Blog', "path": '/blog', "icon": BookOpen },{ "name": 'News', "path": '/news', "icon": Newspaper },{ "name": 'Case Studies', "path": '/case-studies', "icon": FileText },{ "name": 'Pricing', "path": '/pricing', "icon": DollarSign },{ "name": 'Contact Support', "path": '/contact', "icon": MessageCircle },{ "name": 'Marketplace', "path": '/marketplace', "icon": ShoppingCart },{ "name": 'Sitemap', "path": '/sitemap', "icon": FileText }'
    ];
  }
];
const socialLinks = [;
  { "name": 'LinkedIn', "icon": Linkedin, "href": '"https"://linkedin.com/company/ziontechgroup', "color": '"hover":text-blue-500' },{ "name": 'GitHub', "icon": Github, "href": '"https"://github.com/ziontechgroup', "color": '"hover":text-gray-400' },{ "name": 'Twitter', "icon": Twitter, "href": '"https"://twitter.com/ziontechgroup', "color": '"hover":text-blue-400' },{ "name": 'Facebook', "icon": Facebook, "href": '"https"://facebook.com/ziontechgroup', "color": '"hover":text-blue-600' },{ "name": 'Instagram', "icon": Instagram, "href": '"https"://instagram.com/ziontechgroup', "color": '"hover":text-pink-500' },{ "name": 'YouTube', "icon": TestTube, "href": '"https"://youtube.com/ziontechgroup', "color": '"hover":text-red-600' }'
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
      setShowScrollTop(window.scrollY > 400)
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
      setShowScrollTop(window.scrollY > 400)}window.addEventListener('scroll', handleScroll)return () => window.removeEventListener('scroll', handleScroll)}, [])// Toggle section expansion (for mobile)const toggleSection = ("props": any) => {setExpandedSections((prev) => {const newSet = new Set(prev)if (newSet.has(title)) {newSet.delete(title)} else {newSet.add(title)}'
      return newSet;
    }
    )
};
  // Scroll to top function
  const scrollToTop = (props: any) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }
    )
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
    )
};
  ]"
  const solutions = []
  const contactInfo = [
    { icon: Mai l, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto: klebe r@ziontechgroup.com" },
    { icon: Phon e, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPi n, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Glob e, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
];
  const legalLinks = [;
    { "name": "Privacy Policy", "href": "/privacy" },{ "name": "Terms of Service", "href": "/terms" },{ "name": "Cookie Policy", "href": "/cookies" },{ "name": "Data Protection", "href": "/data-protection" },{ "name": "Accessibility", "href": "/accessibility" }"
  ];
    { "name": "Facebook", "href": ""https"://facebook.com/ziontechgroup", "icon": Facebook },{ "name": "Twitter", "href": ""https"://twitter.com/ziontechgroup", "icon": Twitter },{ "name": "LinkedIn", "href": ""https"://linkedin.com/company/ziontechgroup", "icon": Linkedin },{ "name": "Instagram", "href": ""https"://instagram.com/ziontechgroup", "icon": Instagram },{ "name": "YouTube", "href": ""https"://youtube.com/ziontechgroup", "icon": Youtube },{ "name": "GitHub", "href": ""https"://github.com/ziontechgroup", "icon": Github }"
  ];
  const currentYear = new Date().getFullYear()return (<footer className="bg-gray-900 text-white">;"
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 "sm": p x-6 "lg": p x-8 py-12">;"
        <div className="grid grid-cols-1 "md": gri d-cols-2 "lg": gri d-cols-5 gap-8">;"
          {/* Company Info */}
<div className="space-y-4">;"
            <div className="flex items-center space-x-2">;"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;"
                <Zap className="w-6 h-6 text-white" />;"
              </div>;
              <span className="font-bold text-lg">Zion Tech Group</span>;"
            </div>;
            <p className="text-gray-400 mb-4">;"
              Leading technology solutions provider specializing in AI, cybersecurity,cloud infrastructure, and digital transformation services.;
            </p>;
            {/* Contact Information */}
            <div className="space-y-3 mb-6">;"
              <div className="flex items-center text-gray-300">;"
                <Phone className="w-4 h-4 mr-3 text-zion-cyan" />;"
                <a href={`"tel":${contactInfo.phone}`} className=""hover":text-white transition-colors">;"                  {contactInfo.phone}
                </a>;
              </div>;
              <div className="flex items-center text-gray-300">;"
                <Mail className="w-4 h-4 mr-3 text-zion-cyan" />;"
                <a href={`"mailto":${contactInfo.email}`} className=""hover":text-white transition-colors">;"                  {contactInfo.email}
                </a>;
              </div>;
              <div className="flex items-start text-gray-300">;"
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-zion-cyan flex-shrink-0" />;"
                <span>{contactInfo.address}</span>;
              </div>;
            </div>;
            {/* Social Links */}
            <div className="flex space-x-4">;"
              <a href=""https"://linkedin.com/company/ziontechgroup" className="text-gray-400 "hover": tex t-blue-400 transition-colors">;"
                <Linkedin className="w-5 h-5" />;"
              </a>;
              <a href=""https"://twitter.com/ziontechgroup" className="text-gray-400 "hover": tex t-blue-400 transition-colors">;"
                <Twitter className="w-5 h-5" />;"
              </a>;
              <a href=""https"://facebook.com/ziontechgroup" className="text-gray-400 "hover": tex t-blue-400 transition-colors">;"
                <Facebook className="w-5 h-5" />;"
              </a>;
              <a href=""https"://instagram.com/ziontechgroup" className="text-gray-400 "hover": tex t-blue-400 transition-colors">;"
                <Instagram className="w-5 h-5" />;"
              </a>;
            </div>;
          </div>;
          {/* Footer Sections */}
          {footerSections.map((section) => (<div key={section.title} className="space-y-4">;"
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">;"
                {section.title}
              <ul className="space-y-2">;"
                {section.links.map((link) => (<li key={link.name}>;
                    <Link;
                      to={link.href}
                      className="text-gray-400 "hover": tex t-white transition-colors text-sm";"
                    >;
                      {link.name}
                    </Link>;
                  </li>;
                ))}
</ul>;
  Building2,FileText,Users,Briefcase,Network,';'
  Newspaper';';'
} from 'lucide-react';';'
';';'
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Github  } from 'lucide-react';'
  Palette,ChevronDown;
  DollarSign,ExternalLink;
} from 'lucide-react';'
  Clock;
} from 'lucide-react';'
const Footer = () => {const currentYear = new Date().getFullYear()const scrollToTop = () => {window.scrollTo({ "top": 0, "behavior": 'smooth' }'
    )const footerLinks = {"services": [;
      { "name": 'AI Services', "href": '/ai-services' },{ "name": 'IT Services', "href": '/it-services' },{ "name": 'Micro SaaS', "href": '/micro-saas' },{ "name": 'Cloud Solutions', "href": '/solutions/cloud-migration' },{ "name": 'Cybersecurity', "href": '/services/cybersecurity' },{ "name": 'Data Analytics', "href": '/services/data-analytics' }],"solutions": [;'
      { "name": 'Enterprise Solutions', "href": '/solutions/enterprise' },{ "name": 'Healthcare', "href": '/solutions/healthcare' },{ "name": 'Finance', "href": '/solutions/finance' },{ "name": 'Government', "href": '/solutions/government' },{ "name": 'Retail', "href": '/solutions/retail' },{ "name": 'Education', "href": '/solutions/education' }],"company": [;'
      { "name": 'About Us', "href": '/about' },{ "name": 'Our Team', "href": '/team' },{ "name": 'Careers', "href": '/careers' },{ "name": 'Partners', "href": '/partners' },{ "name": 'Case Studies', "href": '/case-studies' },{ "name": 'News', "href": '/news' }],"resources": [;'
      { "name": 'Blog', "href": '/blog' },{ "name": 'White Papers', "href": '/white-papers' },{ "name": 'Webinars', "href": '/webinars' },{ "name": 'Tutorials', "href": '/tutorials' },{ "name": 'API Documentation', "href": '/api-docs' },{ "name": 'Support', "href": '/support' }],"legal": [;'
      { "name": 'Privacy Policy', "href": '/privacy' },{ "name": 'Terms of Service', "href": '/terms' },{ "name": 'Cookie Policy', "href": '/cookies' },{ "name": 'Compliance', "href": '/compliance' },{ "name": 'Security', "href": '/security' }]}:src/components/Footer.tsx;'
  const footerSections = [';'
    {';';'
      }
      "title": 'Company',"icon": Building2,';'
      "links": [';';'
        { "name": 'About Us', "path": '/about', "icon": Users },';';'
        { "name": 'Our Story', "path": '/about/story', "icon": FileText },';';'
        { "name": 'Team', "path": '/about/team', "icon": Users },';';'
        { "name": 'Careers', "path": '/careers', "icon": Briefcase },';';'
        { "name": 'Partners', "path": '/partners', "icon": Network },';';'
        { "name": 'Press', "path": '/press', "icon": Newspaper },';';'
        { "name": 'Contact', "path": '/contact', "icon": Phone }'
      ];
    },';'
    {';';'
      }
      "title": 'AI & Quantum Solutions',';'
      "icon": Brain,';';'
      "category": 'Core Services',';'
      "services": [';';'
        { "name": 'AI Customer Success Automation', "href": '/services/ai-customer-success-automation', "badge": 'Popular' },';';'
        { "name": 'AI Healthcare Analytics Platform', "href": '/services/ai-healthcare-analytics-platform', "badge": 'New' },';';'
        { "name": 'AI Financial Risk Management', "href": '/services/ai-financial-risk-management-enhanced', "badge": 'Featured' },';';'
        { "name": 'AI Supply Chain Optimization', "href": '/services/ai-supply-chain-optimization-enhanced', "badge": 'Trending' },';';'
        { "name": 'AI Legal Document Automation', "href": '/services/ai-legal-document-automation-platform', "badge": 'Innovative' },';';'
        { "name": 'AI Mental Health Support', "href": '/services/ai-mental-health-support-platform', "badge": 'Healthcare' },';';'
        { "name": 'AI Smart Home Energy Management', "href": '/services/ai-smart-home-energy-management-platform', "badge": 'IoT' },';';'
        { "name": 'AI Autonomous Logistics', "href": '/services/ai-autonomous-logistics-platform', "badge": 'Logistics' },';';'
        { "name": 'AI-Powered SEO', "href": '/services/ai-powered-seo', "badge": 'Marketing' },';';'
        { "name": 'Quantum Edge Computing', "href": '/services/quantum-edge-computing-solutions', "badge": 'Quantum' },';';'
        { "name": 'AI Space Technology', "href": '/services/ai-space-technology-platform', "badge": 'Space Tech' },';';'
        { "name": 'AI Carbon Footprint Management', "href": '/services/ai-carbon-footprint-management-platform', "badge": 'Green Tech' },';';'
        { "name": 'AI Autonomous Manufacturing', "href": '/services/ai-autonomous-manufacturing-platform', "badge": 'Manufacturing' },';';'
        { "name": 'AI Enterprise Resource Planning', "href": '/services/ai-enterprise-resource-planning', "badge": 'ERP' },';';'
        { "name": 'AI Autonomous Business Operations', "href": '/services/ai-autonomous-business-operations-platform', "badge": 'Automation' },';';'
        { "name": 'AI Customer Experience Analytics', "href": '/services/ai-customer-experience-analytics-platform', "badge": 'Analytics' }'
      ];
    },';'
    {';';'
      }
      "title": 'AI Cybersecurity & Infrastructure',';'
      "icon": Shield,';';'
      "category": 'Security & Infrastructure',';'
      "services": [';';'
        { "name": 'AI-Powered DevOps Automation', "href": '/services/ai-powered-devops-automation', "badge": 'New' },';';'
        { "name": 'AI-Powered Cybersecurity Suite', "href": '/services/ai-powered-cybersecurity-suite', "badge": 'Security' },';';'
        { "name": 'Enterprise IT Infrastructure Management', "href": '/services/enterprise-it-infrastructure-management', "badge": 'Infrastructure' },';';'
        { "name": 'Cloud Migration & Optimization', "href": '/services/cloud-migration-and-optimization', "badge": 'Cloud' },';';'
        { "name": 'AI Data Analytics Platform', "href": '/services/ai-data-analytics-platform', "badge": 'Analytics' },';';'
        { "name": 'AI DevOps Automation', "href": '/services/ai-devops-automation', "badge": 'DevOps' },';';'
        { "name": 'Edge Computing Platform', "href": '/services/edge-computing-platform', "badge": 'Edge' }'
      ];
    },';'
    {';';'
      }
      "title": 'Micro SaaS Solutions',';'
      "icon": Code,';';'
      "category": 'Micro SaaS',';'
      "services": [';';'
        { "name": 'AI Email Automation Suite', "href": '/services/ai-email-automation-suite', "badge": 'New' },';';'
        { "name": 'AI Social Media Scheduler', "href": '/services/ai-social-media-scheduler', "badge": 'New' },';';'
        { "name": 'AI Customer Insights Platform', "href": '/services/ai-customer-insights-platform', "badge": 'New' },';';'
        { "name": 'Micro CRM', "href": '/services/micro-crm', "badge": 'Popular' },';';'
        { "name": 'Helpdesk Platform', "href": '/services/helpdesk-platform', "badge": 'Support' },';';'
        { "name": 'Website Analytics', "href": '/services/website-analytics', "badge": 'Analytics' }'
      ];
    },';'
    {';';'
      }
      "title": 'Solutions',';'
      "links": [';';'
        { "name": 'Enterprise Solutions', "href": '/enterprise' },';';'
        { "name": 'Healthcare Tech', "href": '/solutions/healthcare' },';';'
        { "name": 'Financial Solutions', "href": '/financial-solutions' },';';'
        { "name": 'Manufacturing', "href": '/manufacturing-solutions' },';';'
        { "name": 'Industry Solutions', "href": '/industry-solutions' },';';'
        { "name": 'Emerging Tech', "href": '/emerging-tech' }'
      ];
    },';'
    {';';'
      }
      "title": 'Resources',';'
      "links": [';';'
        { "name": 'Documentation', "href": '/docs' },';';'
        { "name": 'White Papers', "href": '/white-papers' },';';'
        { "name": 'Support Center', "href": '/help' },';';'
        { "name": 'Training', "href": '/training' },';';'
        { "name": 'Blog', "href": '/blog' },';';'
        { "name": 'Research', "href": '/research-development' }'
      ];
    }
    { "name": 'Facebook', "href": '#', "icon": Facebook },{ "name": 'Twitter', "href": '#', "icon": Twitter },{ "name": 'LinkedIn', "href": '#', "icon": Linkedin },{ "name": 'Instagram', "href": '#', "icon": Instagram },{ "name": 'YouTube', "href": '#', "icon": Youtube }];'
  const stats = [;
    { "icon": Users, "value": '500+', "label": 'Projects Completed' },{ "icon": Award, "value": '50+', "label": 'Expert Team Members' },{ "icon": Shield, "value": '99.9%', "label": 'Uptime Guarantee' },{ "icon": Clock, "value": '24/7', "label": 'Support Available' }];'
  return (<footer className="bg-gray-900 text-white">;"
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">;"
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-6 gap-8">;"
          {/* Company Info */}
          <div className=""lg":col-span-2">;"
            <Link href="/" className="flex items-center space-x-2 mb-6">;"
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;"
                <span className="text-white font-bold text-2xl">Z</span>;"
              </div>;
              <div>;
                <h3 className="text-2xl font-bold">Zion Tech Group</h3>;"
                <p className="text-gray-400">AI & Technology Solutions</p>;"
              </div>;
            </Link>;
            <p className="text-gray-300 mb-6 leading-relaxed">;"
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure,and digital transformation services. We help businesses thrive in the digital age.;
            </p>;
            {/* Contact Info */}
            <div className="space-y-3 mb-6">;"
              <div className="flex items-center space-x-3">;"
                <Phone className="w-5 h-5 text-blue-400" />;"
                <span className="text-gray-300">+1 302 464 0950</span>;"
              </div>;
              <div className="flex items-center space-x-3">;"
                <Mail className="w-5 h-5 text-blue-400" />;"
                <span className="text-gray-300">kleber@ziontechgroup.com</span>;"
              </div>;
              <div className="flex items-start space-x-3">;"
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />;"
                <span className="text-gray-300">;"
                  364 E Main St STE 1008<br />;
                  Middletown, DE 19709;
                </span>;
              </div>;
            </div>;
          {/* Service Sections */}
          {footerSections.slice(1, 4).map((section) => (<div key={section.title} className="space-y-4">;"
              <div className="flex items-center space-x-2">;"
                <section.icon className="w-5 h-5 text-blue-400" />;"
                <h3 className="font-semibold text-white">{section.title}"
              </div>;
              <div className="space-y-2">;"
                {section.services ? (section.services.slice(0, 6).map((service) => (<Link;
                      }
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-300 "hover":text-blue-400 transition-colors duration-200 group";"
                    >;
                      <div className="flex items-center justify-between">;"
                        <span>{service.name}</span>;
                        {service.badge && (<span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">;"
                            {service.badge}
                          </span>;
                        )}
                      </div>;
                    </Link>;
                  ))) : (section.links?.slice(0, 6).map((link) => (<Link;
                      key={link.name}
                      href={link.href}
                      className="block text-sm text-gray-300 "hover":text-blue-400 transition-colors duration-200 group";"
                    >;
                      <span>{link.name}</span>;
                    </Link>;
                  )))}
              </div>;
            {/* Social Links */}
            <div className="flex space-x-4">;"
              {socialLinks.map((social) => (<Link;
                  }
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center "hover":bg-blue-600 transition-colors duration-200";"
                >;
                  <social.icon className="w-5 h-5" />;"
                </Link>;
              ))}
            </div>;
          </div>;
          {/* Services */}
          <div className="space-y-4">;"
            <h3 className="text-lg font-semibold">Services;"
            <ul className="space-y-2">;"
              <li><Link href="/ai-services" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">AI Services</Link></li>;"
              <li><Link href="/it-services" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">IT Services</Link></li>;"
              <li><Link href="/micro-saas" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Micro SaaS</Link></li>;"
              <li><Link href="/blockchain-solutions" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Blockchain Solutions</Link></li>;"
              <li><Link href="/iot-solutions" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">IoT Solutions</Link></li>;"
              <li><Link href="/solutions" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">All Solutions</Link></li>;"
          <div>;
            <h4 className="text-lg font-semibold mb-6">Services</h4>;"
            <ul className="space-y-3">;"
              {footerLinks.services.map((link) => (<li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text-gray-300 "hover":text-blue-400 transition-colors duration-200 flex items-center group";"
                  >;
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-"hover":opacity-100 transition-opacity duration-200" />;"
                    {link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Solutions */}
          <div>;
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>;"
            <ul className="space-y-3">;"
              {footerLinks.solutions.map((link) => (<li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text-gray-300 "hover":text-blue-400 transition-colors duration-200 flex items-center group";"
                  >;
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-"hover":opacity-100 transition-opacity duration-200" />;"
                    {link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Company */}
          <div className="space-y-4">;"
            <h3 className="text-lg font-semibold">Company;"
            <ul className="space-y-2">;"
              <li><Link href="/about" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">About Us</Link></li>;"
              <li><Link href="/team" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Our Team</Link></li>;"
              <li><Link href="/careers" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Careers</Link></li>;"
              <li><Link href="/blog" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Blog</Link></li>;"
              <li><Link href="/case-studies" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Case Studies</Link></li>;"
              <li><Link href="/partners" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Partners</Link></li>;"
            </ul>;
          </div>;
          {/* Contact */}
          <div className="space-y-4">;"
            <h3 className="text-lg font-semibold">Contact;"
            <div className="space-y-3">;"
              <div className="flex items-center space-x-3">;"
                <Phone className="w-4 h-4 text-cyan-400" />;"
                <a href=""tel":+13024640950" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">;"
                  +1 302 464 0950;
                </a>;
              </div>;
            </div>;
            <div className="flex items-center space-x-3">;"
              <Mail className="w-5 h-5 text-blue-400" />;"
              <div>;
                <p className="text-white font-medium">Email</p>;"
                <p className="text-gray-400 text-sm">contact@ziontechgroup.com</p>;"
              </div>;
            </div>;
            <div className="flex items-center space-x-3">;"
              <MapPin className="w-5 h-5 text-blue-400" />;"
              <div>;
                <p className="text-white font-medium">Location</p>;"
                <p className="text-gray-400 text-sm">San Francisco, CA</p>;"
        {/* Contact & Social Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">;"
          <div className="grid grid-cols-1 "md":grid-cols-2 gap-8">;"
            {/* Contact Information */}
            <div className="space-y-4">;"
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">;"
                <Mail className="w-5 h-5 text-blue-400" />;"
                <span>Get in Touch</span>;
              <div className="space-y-3">;"
                <div className="flex items-center space-x-3 text-gray-400">;"
                  <Mail className="w-4 h-4 text-blue-400" />;"
                  <span>kleber@ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-400">;"
                  <Phone className="w-4 h-4 text-blue-400" />;"
                  <span>+1 302 464 0950</span>;
                </div>;
                <div className="flex items-start space-x-3 text-gray-400">;"
                  <MapPin className="w-4 h-4 text-blue-400 mt-1" />;"
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;
              </div>;
            </div>;
            {/* Social Links */}
            <div className="space-y-4">;"
              <h3 className="text-lg font-semibold text-white">Follow Us;"
              <div className="flex space-x-4">;"
                {socialLinks.map((social) => {const Icon = social.icon;
                  }
                  return (<a;
                      key={social.name}
                      href={social.href}
                      target="_blank";"
                      rel="noopener noreferrer";"
                      className="text-gray-400 "hover":text-blue-400 transition-colors";"
                      aria-label={social.name}
                    >;
                      <Icon className="w-5 h-5" />;"
                    </a>;
                  )})}
              </div>;
            </div>;
          </div>;
          {/* Resources */}
          <div className="space-y-4">;"
            <h3 className="text-lg font-semibold">Resources;"
            <ul className="space-y-2">;"
              <li><Link href="/docs" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Documentation</Link></li>;"
              <li><Link href="/api" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">API Reference</Link></li>;"
              <li><Link href="/pricing-guide" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Pricing Guide</Link></li>;"
              <li><Link href="/training" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Training</Link></li>;"
              <li><Link href="/support" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Support</Link></li>;"
              <li><Link href="/help" className="text-gray-400 "hover":text-cyan-400 transition-colors text-sm">Help Center</Link></li>;"
            </ul>;
  // Scroll to top;
      const scrollToTopButton = document.getElementById('scroll-to-top')if (scrollToTopButton) {if (window.pageYOffset > 300) {scrollToTopButton.classList.remove('hidden')} else {scrollToTopButton.classList.add('hidden')}'
      }
    }window.addEventListener('scroll', handleScroll)return () => window.removeEventListener('scroll', handleScroll)}, [])// Toggle section expansion (for mobile)const toggleSection = ("props": any) => {setExpandedSections((prev) => {const newSet = new Set(prev)if (newSet.has(title)) {newSet.delete(title)} else {newSet.add(title)}'
      return newSet;
    }
    )
};
  // Scroll to top function
  const scrollToTop = (props: any) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }
    )
};
  // Handle link click
  const handleLinkClick = (props: any) => {
    if (link.external) {
      window.open(link.path, '_blank', 'noopener,noreferrer');
    } else {
      // Handle internal navigation
    }
  }const footerSections = [;
    {"title": 'Company',"icon": Globe,"links": [;'
        { "name": 'About Us', "path": '/about', "icon": Users },{ "name": 'Partners', "path": '/partners', "icon": Users },{ "name": 'Careers', "path": '/careers', "icon": Briefcase },{ "name": 'Solutions', "path": '/solutions', "icon": Target },{ "name": 'AI Solutions', "path": '/ai-solutions', "icon": Brain },{ "name": 'Blog', "path": '/blog', "icon": Newspaper },{ "name": 'Contact', "path": '/contact', "icon": Phone }'
      ];
    },{"title": 'AI & Research Services',"icon": Brain,"links": [;'
        { "name": 'Comprehensive Services Showcase 2025', "path": '/comprehensive-services-showcase-2025', "icon": Sparkles },{ "name": 'AI Business Intelligence Platform', "path": '/services/ai-business-intelligence-platform', "icon": BarChart3 },{ "name": 'AI Content Creation Suite', "path": '/services/ai-content-creation-suite', "icon": FileText },{ "name": 'AI Customer Support Platform', "path": '/services/ai-customer-support-platform', "icon": MessageSquare },{ "name": 'AI Sales Copilot', "path": '/services/ai-sales-copilot', "icon": Users },{ "name": 'AI Cybersecurity Suite', "path": '/services/ai-cybersecurity-suite', "icon": Shield },{ "name": 'AI Data Analytics & BI', "path": '/services/ai-data-analytics-bi', "icon": BarChart3 },{ "name": 'AI Autonomous Research Assistant', "path": '/services/ai-autonomous-research-assistant', "icon": Brain }'
      ];
    },{"title": 'Advanced Technology',"icon": Cpu,"links": [;'
        { "name": 'Cloud Infrastructure & DevOps', "path": '/services/cloud-infrastructure-devops', "icon": Cloud },{ "name": 'Cybersecurity & Compliance', "path": '/services/cybersecurity-compliance', "icon": Shield },{ "name": 'Quantum Computing Services', "path": '/services/quantum-computing-services', "icon": Atom },{ "name": 'Blockchain & Web3 Solutions', "path": '/services/blockchain-web3-solutions', "icon": Cpu },{ "name": 'IoT & Edge Computing Services', "path": '/services/iot-edge-computing-services', "icon": Network },{ "name": 'Digital Twin Solutions', "path": '/services/digital-twin-solutions', "icon": Eye },{ "name": 'Space Technology Solutions', "path": '/services/space-technology-solutions', "icon": Satellite },{ "name": 'Green IT Solutions', "path": '/services/green-it-solutions', "icon": Leaf },{ "name": 'Zero Trust Network Architecture', "path": '/services/zero-trust-network-architecture', "icon": Lock }'
      ];
    },{"title": 'Core Services',"icon": Zap,"links": [;'
        { "name": 'Cloud & DevOps', "path": '/services/cloud-devops', "icon": Cloud },{ "name": 'IT Infrastructure', "path": '/services/it-infrastructure', "icon": Building },{ "name": 'Data Analytics', "path": '/services/data-analytics', "icon": TrendingUp },{ "name": 'Digital Transformation', "path": '/services/digital-transformation', "icon": Rocket },{ "name": 'IT Services', "path": '/it-services', "icon": Building },{ "name": 'Micro SaaS Solutions', "path": '/micro-saas-solutions', "icon": Zap },{ "name": 'Cybersecurity', "path": '/services/cybersecurity', "icon": Shield },{ "name": 'Blockchain Solutions', "path": '/services/blockchain', "icon": Coins }'
      ];
    },{"title": 'Emerging Tech',"icon": Rocket,"links": [;'
        { "name": 'Metaverse Development', "path": '/services/metaverse-development', "icon": Gamepad2 },{ "name": 'AI Content Creation', "path": '/services/ai-content-creation', "icon": FileText },{ "name": 'AI HR Platform', "path": '/services/ai-hr-platform', "icon": Users },{ "name": 'Sustainable Technology', "path": '/services/sustainable-technology', "icon": Leaf },{ "name": 'AI Predictive Maintenance', "path": '/services/ai-predictive-maintenance', "icon": Activity },{ "name": 'Quantum Machine Learning', "path": '/services/quantum-machine-learning', "icon": Atom },{ "name": 'Edge Computing', "path": '/services/edge-computing', "icon": Network },{ "name": 'Green Computing', "path": '/services/green-computing', "icon": Leaf }'
      ];
    }
  ];
    { "icon": Mail, "text": 'info@ziontechgroup.com', "href": '"mailto":info@ziontechgroup.com' },{ "icon": Phone, "text": '+1 (555) 123-4567', "href": '"tel":+15551234567' },{ "icon": MapPin, "text": '123 Tech Street, Innovation City, IC 12345', "href": '#' }'
  ];
  return (<footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">;"
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">';'
