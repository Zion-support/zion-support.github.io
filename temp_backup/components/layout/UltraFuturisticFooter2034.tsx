import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Atom, Shield, Rocket, 
  Globe, Mail, Phone, MapPin, ArrowRight,
  Star, Sparkles, Cpu, Lock, Cloud, 
  BarChart3, Settings, Eye, Award, Clock, 
  Heart, Lightbulb, Target, BookOpen, Truck, 
  DollarSign, Palette, Code, Database, Users,
  Twitter, Linkedin, Facebook, Instagram, Youtube,
  Github, MessageCircle, MessageSquare
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    services: [
      { name: 'AI Business Intelligence Suite Pro', href: '/ai-business-intelligence-suite-pro' },
      { name: 'AI Content Creation Studio', href: '/ai-content-creation-studio' },
      { name: 'Autonomous Customer Service AI', href: '/autonomous-customer-service-ai' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    services: [
      { name: 'Quantum-Safe Cybersecurity Platform', href: '/quantum-safe-cybersecurity-platform' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Sensing Platform', href: '/quantum-sensing-platform' },
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform' },
      { name: 'Bio-Computing Platform', href: '/bio-computing-platform' },
      { name: 'Space-Based Computing Platform', href: '/space-based-computing-platform' },
      { name: 'Holographic Computing Interface', href: '/holographic-computing-interface' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform' },
      { name: 'Fusion Power Simulation Platform', href: '/fusion-power-simulation-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform' },
      { name: 'Edge AI Computing Platform', href: '/edge-ai-computing-platform' },
      { name: 'IoT Security & Management Platform', href: '/iot-security-management-platform' },
      { name: 'Healthcare AI Platform', href: '/healthcare-ai-platform' },
      { name: 'Financial AI Trading Platform', href: '/financial-ai-trading-platform' },
      { name: 'Manufacturing AI Platform', href: '/manufacturing-ai-platform' },
      { name: 'Retail AI Platform', href: '/retail-ai-platform' },
      { name: 'Energy AI Platform', href: '/energy-ai-platform' },
      { name: 'Transportation AI Platform', href: '/transportation-ai-platform' },
      { name: 'Education AI Platform', href: '/education-ai-platform' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    services: [
      { name: 'Blockchain-as-a-Service Platform', href: '/blockchain-as-a-service-platform' },
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Leadership Team', href: '/leadership', description: 'Meet our executive team' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Press', href: '/news', description: 'Latest company updates' },
  { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
  { name: 'Investors', href: '/investors', description: 'Investment information' },
  { name: 'Contact Us', href: '/contact', description: 'Get in touch' },
  { name: 'Locations', href: '/locations', description: 'Global presence' },
  { name: 'Sustainability', href: '/sustainability', description: 'Environmental commitment' },
  { name: 'Diversity & Inclusion', href: '/diversity-inclusion', description: 'Our values' },
  { name: 'Terms of Service', href: '/terms', description: 'Legal terms' },
  { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' }
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: '#', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: '#', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: '#', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: '#', icon: <Github className="w-5 h-5" /> },
  { name: 'Discord', href: '#', icon: <MessageCircle className="w-5 h-5" /> },
  { name: 'Slack', href: '#', icon: <MessageSquare className="w-5 h-5" /> }
];

const stats = [
  { number: '500+', label: 'Services Delivered', icon: Star, color: 'text-cyan-400' },
  { number: '1000+', label: 'Happy Clients', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: Award, color: 'text-green-400' },
  { number: '300%', label: 'Average ROI', icon: TrendingUp, color: 'text-orange-400' }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function UltraFuturisticFooter2034() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticFooter2034</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default UltraFuturisticFooter2034;