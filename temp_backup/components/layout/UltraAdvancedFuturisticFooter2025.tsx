import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Github, 
  ArrowUp, Crown, Zap, Brain, Rocket,
  Shield, Users, BookOpen, Briefcase, Atom
} from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

interface FooterLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'AI & Machine Learning', href: '/ai-services', description: 'Advanced AI solutions' },
      { label: 'Quantum Computing', href: '/quantum-computing', description: 'Next-gen quantum tech' },
      { label: 'Space Technology', href: '/space-tech', description: 'Innovative space solutions' },
      { label: 'Q4 2025 Innovation', href: '/innovative-2025-q4-showcase', description: 'Latest revolutionary services' },
      { label: 'Pricing Guide', href: '/comprehensive-pricing-2025-q4', description: 'Comprehensive pricing' },
      { label: 'Cybersecurity', href: '/cybersecurity', description: 'Enterprise security' },
      { label: 'Cloud Solutions', href: '/cloud-platform', description: 'Scalable cloud infrastructure' },
      { label: 'View All Services', href: '/services', description: 'Complete service portfolio' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4.0' },
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' },
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' },
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about', description: 'Our mission and values' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
      { label: 'White Papers', href: '/white-papers', description: 'In-depth research' },
      { label: 'Webinars', href: '/webinars', description: 'Educational content' },
      { label: 'Documentation', href: '/docs', description: 'Technical guides' },
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
      { label: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { label: 'Support', href: '/support', description: 'Help & assistance' }
    ]
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Finance', href: '/financial-solutions', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/manufacturing-ai-solutions', description: 'Industry 4.0' },
      { label: 'Government', href: '/government-technology-solutions', description: 'Public sector' },
      { label: 'Education', href: '/education-technology-solutions', description: 'EdTech solutions' }
    ]
  }
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', external: true },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', external: true },
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub', external: true }
];

const quickLinks = [
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
];

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraAdvancedFuturisticFooter2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraAdvancedFuturisticFooter2025;
