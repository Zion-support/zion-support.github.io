import React from 'react',
import { motion } from 'framer-motion',
import { 
  Rocket,
  Star, 
  Brain, 
  Atom, 
  Shield, 
  Target, 
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github
} from 'lucide-react',



const footerSections = [
  {
    title: '2038 Featured Services',
    description: 'Our latest revolutionary solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    links: [
      { name: 'AI Services', href: '/ai-services', featured: true },
      { name: 'Quantum Services', href: '/quantum-services', featured: true },
      { name: 'Space Technology', href: '/space-technology', featured: true },
      { name: 'IT Solutions', href: '/it-services', featured: true },
      { name: 'Healthcare Solutions', href: '/healthcare-solutions', featured: true },
      { name: 'Financial Solutions', href: '/financial-solutions', featured: true },
      { name: 'Government Solutions', href: '/government-technology-solutions', featured: true },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Services', href: '/ai-services' },
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
    links: [
      { name: 'Quantum Services', href: '/quantum-services' },
      { name: 'Space Technology', href: '/space-technology' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'IT Services', href: '/it-services' },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity Platform', href: '/ai-powered-cybersecurity' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation' }
    ]
  },
  {
    title: 'Industry Solutions',
    description: 'Tailored solutions for specific industries',
    icon: <Target className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: 'Solutions Overview', href: '/solutions' },
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Solutions', href: '/financial-solutions' },
      { name: 'Manufacturing AI Solutions', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology Solutions', href: '/retail-technology-solutions' },
      { name: 'Government Technology Solutions', href: '/government-technology-solutions' },
      { name: 'Education Technology Solutions', href: '/education-technology-solutions' },
      { name: 'Energy & Utilities Solutions', href: '/energy-utilities-solutions' }
    ]
  },
  {
    title: 'Quick Links',
    description: 'Essential pages and resources',
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'Services Overview', href: '/services' },
      { name: 'Pricing Plans', href: '/pricing' },
      { name: '2026 Services Showcase', href: '/ultimate-2026-services-showcase' },
      { name: '2035 Futuristic Services', href: '/ultimate-2035-futuristic-services-showcase' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Blog & News', href: '/news' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Partners', href: '/partners' }
    ]
  }
],

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
],

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' }
],

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' }
],

const UltraFuturisticFooter2036: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticFooter2036</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraFuturisticFooter2036,
