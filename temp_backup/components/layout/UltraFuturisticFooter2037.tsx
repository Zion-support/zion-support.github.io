import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Shield, Rocket, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, MessageCircle
} from 'lucide-react',



const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'AI Consciousness Evolution 2038', href: '/ai-consciousness-evolution-2037', featured: true },
      { name: 'Quantum AI Hybrid Platform', href: '/quantum-ai-hybrid-platform', featured: true },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', featured: true },
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite', featured: true },
      { name: 'AI Emotional Intelligence Coach', href: '/ai-emotional-intelligence-coach', featured: true },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', featured: true },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', featured: true },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'AI-Powered DevOps Automation', href: '/ai-powered-devops-automation' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Consciousness Evolution 2037', href: '/ai-consciousness-evolution-2037' },
      { name: 'AI Emotional Intelligence Coach', href: '/ai-emotional-intelligence-coach' },
      { name: 'AI Autonomous Business Operations', href: '/autonomous-business-operations-platform' },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform' },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform' },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity Platform', href: '/ai-powered-cybersecurity' },
      { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    color: 'from-emerald-500 to-cyan-500',
    links: [
      { name: 'AI Content Generator', href: '/ai-content-generator' },
      { name: 'AI Code Review', href: '/ai-code-review' },
      { name: 'AI HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent' },
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha' }
    ]
  },
  {
    title: 'Specialized Solutions',
    description: 'Industry-specific and specialized services',
    icon: <Target className="w-5 h-5 text-pink-400" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation' },
      { name: 'API Performance Testing', href: '/api-performance-testing' },
      { name: 'Sales Copilot', href: '/sales-copilot' },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager' },
      { name: 'SSO in a Box', href: '/sso-in-a-box' },
      { name: 'Status Pages & SLO Monitor', href: '/status-pages-slo' },
      { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder' },
      { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor' },
      { name: 'Uptime SLO Monitor', href: '/uptime-slo-monitor' }
    ]
  },
  {
    title: 'Contact Information',
    description: 'Get in touch with our team',
    icon: <MessageCircle className="w-5 h-5 text-cyan-400" />,
    color: 'from-cyan-500 to-blue-500',
    links: [
      { name: 'Mobile: +1 302 464 0950', href: 'tel:+13024640950' },
      { name: 'Email: kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
      { name: 'Address: 364 E Main St STE 1008 Middletown DE 19709', href: '#' },
      { name: 'Website: ziontechgroup.com', href: 'https://ziontechgroup.com' },
      { name: 'Business Hours: Mon-Fri 9AM-6PM EST', href: '#' },
      { name: 'Get Quote', href: '/contact' },
      { name: 'Book Demo', href: '/contact' },
      { name: 'Live Chat', href: '/support' },
      { name: 'Technical Support', href: '/support' },
      { name: 'Sales Inquiries', href: '/contact' }
    ]
  }
],

export default function UltraFuturisticFooter2037() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }),
  },

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/services#ai-services' },
        { name: 'Quantum Computing', href: '/services#quantum-services' },
        { name: 'Cloud Infrastructure', href: '/services#cloud-services' },
        { name: 'Cybersecurity', href: '/services#security-services' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Holographic & Metaverse', href: '/services#metaverse-services' },
        { name: 'Biotechnology', href: '/services#biotech-services' },
        { name: 'All Services', href: '/services' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions#enterprise' },
        { name: 'Healthcare Technology', href: '/solutions#healthcare' },
        { name: 'Financial Services', href: '/solutions#financial' },
        { name: 'Manufacturing & IoT', href: '/solutions#manufacturing' },
        { name: 'Education & Training', href: '/solutions#education' },
        { name: 'Government & Defense', href: '/solutions#government' },
        { name: 'Research & Development', href: '/research' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership Team', href: '/about#leadership' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Press Releases', href: '/press' },
        { name: 'Investor Relations', href: '/investors' },
        { name: 'Partnerships', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developers' },
        { name: 'Support Center', href: '/support' },
        { name: 'Training & Certification', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    }
  ],

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ],

  const stats = [
    { icon: Users, value: '500+', label: 'Global Clients' },
    { icon: Rocket, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '99.9%', label: 'Uptime SLA' },
    { icon: Shield, value: '100%', label: 'Security Compliance' }
  ],

const UltraFuturisticFooter2037: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticFooter2037</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraFuturisticFooter2037,
