import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Atom, Rocket, Shield, Target, 
  Phone, Mail, MapPin, Globe, ExternalLink,
  Twitter, Linkedin, Github, Facebook, Instagram,
  ArrowRight, Star, TrendingUp, Users, Award
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    name: 'AI & Consciousness',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    services: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' }
    ]
  },
  {
    name: 'Financial Technology',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    services: [
      { name: 'Neural Finance AI', href: '/neural-finance-ai' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'Quantum Risk Financial Manager', href: '/quantum-risk-financial-manager' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    icon: Microscope,
    color: 'from-red-500 to-pink-600',
    services: [
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'Biotech AI', href: '/biotech-ai' }
    ]
  },
  {
    name: 'Education & Learning',
    icon: Users,
    color: 'from-yellow-500 to-orange-600',
    services: [
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro' },
      { name: 'AI Education Platform', href: '/ai-education-platform' }
    ]
  },
  {
    name: 'Energy & Sustainability',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    services: [
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }
    ]
  },
  {
    name: 'Robotics & Automation',
    icon: Rocket,
    color: 'from-pink-500 to-purple-600',
    services: [
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform' },
      { name: 'Industrial Automation AI', href: '/industrial-automation-ai' }
    ]
  },
  {
    name: 'Supply Chain & Logistics',
    icon: Network,
    color: 'from-indigo-500 to-blue-600',
    services: [
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
      { name: 'AI Logistics Platform', href: '/ai-logistics-platform' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    services: [
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform' },
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' }
    ]
  },
  {
    name: 'Enterprise IT',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' }
    ]
  },
  {
    name: 'Space & Metaverse',
    icon: Star,
    color: 'from-purple-500 to-pink-600',
    services: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform' },
      { name: 'Metaverse Development Studio Pro', href: '/metaverse-development-studio-pro' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform' },
      { name: 'Space Colonization Services', href: '/space-colonization-services' }
    ]
  },
  {
    name: 'Content & Marketing',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    services: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'Marketing AI Platform', href: '/marketing-ai-platform' }
    ]
  },
  {
    name: 'Sales & CRM',
    icon: BarChart3,
    color: 'from-emerald-500 to-teal-600',
    services: [
      { name: 'AI Sales Automation', href: '/ai-sales-automation' },
      { name: 'Customer Intelligence Platform', href: '/customer-intelligence-platform' }
    ]
  },
  {
    name: 'Cybersecurity',
    icon: ShieldCheck,
    color: 'from-red-500 to-orange-600',
    services: [
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'AI Threat Detection', href: '/ai-threat-detection' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Services Advertising', href: '/services-advertising' },
  { name: 'Market Pricing', href: '/market-pricing' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/contact' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-documentation-generator' },
  { name: 'Status Page', href: '/status-pages-slo' },
  { name: 'VAPT Services', href: '/vulnerability-assessment-penetration-testing' },
  { name: 'Mobile Device Management (MDM)', href: '/mobile-device-management' },
  { name: 'Security', href: '/security' },
  { name: 'Privacy Policy', href: '/privacy' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://www.youtube.com/@ziontechgroup', icon: Youtube }
];

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-purple-500 to-indigo-600',
      services: [
        { name: 'AI Consciousness Platform', href: '/services/ai-consciousness-platform' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' },
        { name: 'Autonomous AI Agents', href: '/services/autonomous-ai-agents' },
        { name: 'AI Content Factory', href: '/services/ai-content-factory' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: <Atom className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-600',
      services: [
        { name: 'Quantum Neural Interface', href: '/services/quantum-neural-interface' },
        { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading' },
        { name: 'Quantum Internet Protocol', href: '/services/quantum-internet-protocol' },
        { name: 'Quantum Sensors Network', href: '/services/quantum-sensors-network' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: <Rocket className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-600',
      services: [
        { name: 'Holographic Metaverse', href: '/services/holographic-metaverse-platform' },
        { name: 'Neuromorphic Computing', href: '/services/neuromorphic-computing' },
        { name: 'Synthetic Biology', href: '/services/synthetic-biology-platform' },
        { name: 'Brain-Computer Interface', href: '/services/brain-computer-interface' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: <Target className="w-5 h-5" />,
      color: 'from-orange-500 to-red-600',
      services: [
        { name: 'Smart Inventory Manager', href: '/services/smart-inventory-manager' },
        { name: 'Customer Success Automation', href: '/services/customer-success-automation' },
        { name: 'AI Sales Coach', href: '/services/ai-sales-coach' },
        { name: 'Smart HR Assistant', href: '/services/smart-hr-assistant' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' }
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Developer Tools', href: '/developer-tools' },
    { name: 'Integration Guides', href: '/integrations' },
    { name: 'Best Practices', href: '/best-practices' },
    { name: 'Community Forum', href: '/community' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'GDPR', href: '/gdpr' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> }
  ];

  const stats = [
    { label: 'Services', value: '500+', icon: <Zap className="w-6 h-6" /> },
    { label: 'Clients', value: '10K+', icon: <Users className="w-6 h-6" /> },
    { label: 'ROI Average', value: '800%', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Uptime', value: '99.9%', icon: <Star className="w-6 h-6" /> }
  ];

const EnhancedFooter: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedFooter</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedFooter;
