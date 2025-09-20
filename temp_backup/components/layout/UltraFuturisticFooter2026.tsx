import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Mail, Phone, MapPin, 
  Linkedin, Github, Twitter, Facebook, Instagram, Youtube,
  Shield, Zap, Brain, Atom, Building, Cpu, ChevronRight, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    name: 'AI & Autonomous Systems',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    description: 'Revolutionary AI systems that operate independently',
    services: [
      { name: 'AI Legal Research Assistant', href: '/ai-autonomous-legal-research-assistant' },
      { name: 'AI Financial Risk Manager', href: '/ai-autonomous-financial-risk-manager' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-autonomous-medical-diagnostics' },
      { name: 'AI Supply Chain Optimizer', href: '/ai-autonomous-supply-chain-optimizer' },
      { name: 'AI Cybersecurity Sentinel', href: '/ai-autonomous-cybersecurity-sentinel' },
      { name: 'AI Customer Success Orchestrator', href: '/ai-autonomous-customer-success-orchestrator' },
      { name: 'AI HR Intelligence Suite', href: '/ai-autonomous-hr-intelligence-suite' },
      { name: 'AI Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator' },
      { name: 'AI Sales Intelligence', href: '/ai-autonomous-sales-intelligence' },
      { name: 'AI Product Intelligence', href: '/ai-autonomous-product-intelligence' }
    ]
  },
  {
    name: 'Quantum Technology',
    icon: Atom,
    color: 'from-blue-500 to-indigo-600',
    description: 'Next-generation quantum computing solutions',
    services: [
      { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform' },
      { name: 'Neuromorphic Computing Infrastructure', href: '/neuromorphic-computing-infrastructure' },
      { name: 'Holographic Data Center Platform', href: '/holographic-data-center-platform' },
      { name: 'Bio-Computing Infrastructure', href: '/bio-computing-infrastructure' },
      { name: 'Quantum Internet Backbone', href: '/quantum-internet-backbone' },
      { name: 'Quantum Financial Intelligence Platform', href: '/quantum-financial-intelligence-platform' },
      { name: 'Quantum Supply Chain Optimization', href: '/quantum-supply-chain-optimization' },
      { name: 'Quantum Cybersecurity Intelligence', href: '/quantum-cybersecurity-intelligence' },
      { name: 'Quantum Data Analytics Platform', href: '/quantum-data-analytics-platform' },
      { name: 'Quantum IoT Intelligence Platform', href: '/quantum-iot-intelligence-platform' },
      { name: 'Quantum AI Hybrid Intelligence', href: '/quantum-ai-hybrid-intelligence' },
      { name: 'Quantum Medical Imaging Platform', href: '/quantum-medical-imaging-platform' },
      { name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform' },
      { name: 'Quantum Genomics Analysis Platform', href: '/quantum-genomics-analysis-platform' },
      { name: 'Quantum Biotechnology Platform', href: '/quantum-biotechnology-platform' },
      { name: 'Quantum Medical Device Intelligence', href: '/quantum-medical-device-intelligence' }
    ]
  },
  {
    name: 'IT Infrastructure',
    icon: Cpu,
    color: 'from-green-500 to-teal-600',
    description: 'Cutting-edge infrastructure solutions',
    services: [
      { name: 'Cloud Migration Services', href: '/cloud-migration' },
      { name: 'DevOps Automation', href: '/devops-automation' },
      { name: 'Edge Computing Solutions', href: '/edge-computing' },
      { name: 'Data Center Optimization', href: '/data-center-optimization' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'AI Autonomous DevOps Platform', href: '/ai-autonomous-devops-platform' },
      { name: 'Zero Trust Security Orchestrator', href: '/zero-trust-security-orchestrator' },
      { name: 'Quantum Edge Computing Infrastructure', href: '/quantum-edge-computing-infrastructure' },
      { name: 'AI Autonomous Data Center Manager', href: '/ai-autonomous-data-center-manager' },
      { name: 'Quantum Network Security Platform', href: '/quantum-network-security-platform' },
      { name: 'AI Autonomous Cloud Migration', href: '/ai-autonomous-cloud-migration' },
      { name: 'Quantum Storage Optimization', href: '/quantum-storage-optimization' },
      { name: 'AI Autonomous Network Orchestrator', href: '/ai-autonomous-network-orchestrator' },
      { name: 'Quantum Compliance Automation', href: '/quantum-compliance-automation' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    icon: Building,
    color: 'from-orange-500 to-red-600',
    description: 'Innovative software-as-a-service solutions',
    services: [
      { name: 'AI Content Factory Pro', href: '/ai-autonomous-content-factory-pro' },
      { name: 'Quantum CRM Intelligence Suite', href: '/quantum-crm-intelligence-suite' },
      { name: 'AI HR Platform', href: '/ai-autonomous-hr-platform' },
      { name: 'Quantum Financial Intelligence Platform', href: '/quantum-financial-intelligence-platform' },
      { name: 'AI Education Platform', href: '/ai-autonomous-education-platform' }
    ]
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    description: 'Advanced security and protection solutions',
    services: [
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Threat Intelligence Platform', href: '/threat-intelligence-platform' },
      { name: 'Compliance Automation', href: '/compliance-automation' },
      { name: 'SOC2 Compliance Automation', href: '/soc2-compliance-automation' },
      { name: 'Vulnerability Assessment & Penetration Testing', href: '/vulnerability-assessment-penetration-testing' }
    ]
  },
  {
    name: 'Emerging Technology',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    description: 'Cutting-edge emerging technology solutions',
    services: [
      { name: 'Blockchain Enterprise Intelligence', href: '/blockchain-enterprise-intelligence-platform' },
      { name: 'Metaverse Digital Reality Orchestrator', href: '/metaverse-digital-reality-orchestrator' },
      { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-platform' },
      { name: 'Neuromorphic Computing Infrastructure', href: '/neuromorphic-computing-infrastructure' },
      { name: 'Holographic Computing Platform', href: '/holographic-computing-platform' },
      { name: 'Bio-Computing Infrastructure', href: '/bio-computing-infrastructure' },
      { name: 'Autonomous Robotics Orchestrator', href: '/autonomous-robotics-orchestrator' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    icon: Shield,
    color: 'from-emerald-500 to-green-600',
    description: 'Advanced healthcare and biotechnology solutions',
    services: [
      { name: 'AI Autonomous Medical Diagnostics', href: '/ai-autonomous-medical-diagnostics' },
      { name: 'AI Autonomous Patient Care Orchestrator', href: '/ai-autonomous-patient-care-orchestrator' },
      { name: 'AI Autonomous Clinical Trials Manager', href: '/ai-autonomous-clinical-trials-manager' },
      { name: 'AI Autonomous Healthcare Compliance', href: '/ai-autonomous-healthcare-compliance' },
      { name: 'AI Autonomous Telehealth Platform', href: '/ai-autonomous-telehealth-platform' }
    ]
  },
  {
    name: 'Industry Solutions',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    description: 'Industry-specific technology solutions',
    services: [
      { name: 'Healthcare AI Solutions', href: '/healthcare-ai-solutions' },
      { name: 'Financial Technology Solutions', href: '/financial-solutions' },
      { name: 'Manufacturing AI Solutions', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology Solutions', href: '/retail-technology-solutions' },
      { name: 'Energy & Utilities Solutions', href: '/energy-utilities-solutions' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Mission', href: '/mission' },
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Services Showcase', href: '/2026-comprehensive-services-showcase' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'White Papers', href: '/white-papers' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
];

const UltraFuturisticFooter2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticFooter2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticFooter2026;
