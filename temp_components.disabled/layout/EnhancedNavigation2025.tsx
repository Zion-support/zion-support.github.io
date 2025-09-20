import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings,
  TrendingUp, Stethoscope, GraduationCap, Leaf, Truck
} from 'lucide-react',
import SearchComponent from '../SearchComponent',
import ThemeToggle from '../ThemeToggle',

interface NavigationItem {
  name: string,
  href: string,
  icon?: React.ReactNode,
  description?: string,
  children?: NavigationItem[],
  badge?: string,
  title?: string
}

const navigationItems: NavigationItem[] = [
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Cutting-Edge Services 2025', href: '/cutting-edge-services-showcase-2025', description: 'Latest revolutionary services' },
      { name: 'Cutting-Edge Pricing 2025', href: '/cutting-edge-pricing-2025', description: 'Latest pricing for revolutionary services' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' },
      { name: 'AI Autonomous Code Generation', href: '/ai-autonomous-code-generation', description: 'AI that writes code' },
      { name: 'AI Autonomous Marketing', href: '/ai-autonomous-marketing-platform', description: 'Autonomous marketing AI' },
      { name: 'AI Autonomous Sales', href: '/ai-autonomous-sales-platform', description: 'AI that closes deals' },
      { name: 'AI Autonomous Customer Service', href: '/ai-autonomous-customer-service', description: 'Autonomous support AI' },
      { name: 'AI Autonomous HR', href: '/ai-autonomous-hr-platform', description: 'Autonomous HR management' },
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    children: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    children: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture', description: 'Advanced network security' },
      { name: 'Autonomous DevOps', href: '/autonomous-devops-orchestrator', description: 'AI-powered infrastructure' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration-platform', description: 'Distributed computing optimization' },
      { name: 'AI Cybersecurity', href: '/ai-powered-cybersecurity-platform', description: 'Intelligent threat detection' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent development automation' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum-enhanced cloud computing' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced cybersecurity' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Seamless cloud transitions' },
      { name: 'Autonomous Data Center', href: '/autonomous-data-center-platform', description: 'AI-managed data centers' },
      { name: 'Advanced IT Infrastructure', href: '/advanced-it-infrastructure-services', description: 'Quantum computing, edge computing, zero-trust security, and autonomous data centers' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', description: 'Churn prediction and retention' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI-powered logistics' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform', description: 'Intelligent financial analysis' },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform', description: 'People intelligence' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'Intelligent decision making' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform', description: 'AI content creation' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite', description: 'AI-enhanced CRM' },
      { name: 'Financial Analytics', href: '/automated-financial-analytics-platform', description: 'AI financial analysis' },
      { name: 'Project Management', href: '/intelligent-project-management-suite', description: 'AI project optimization' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Advanced analytics' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation-platform', description: 'Intelligent marketing' },
      { name: 'Customer Service AI', href: '/ai-customer-service-platform', description: 'Automated support' },
      { name: 'HR & Recruitment', href: '/ai-hr-recruitment-platform', description: 'AI talent management' },
      { name: 'Legal Contract Analysis', href: '/ai-legal-contract-analyzer', description: 'Legal document review' },
      { name: 'AI Autonomous Content Studio', href: '/ai-autonomous-content-studio', description: 'Autonomous content creation' },
      { name: 'Quantum Financial Trading', href: '/quantum-enhanced-financial-trading', description: 'Quantum-powered trading' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform', description: 'Medical AI diagnostics' },
      { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing-ai-platform', description: 'AI manufacturing' },
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'AI-powered business intelligence, marketing, sales, customer service, and HR solutions' }
    ]
  },
  {
    name: 'Creative & Design',
    href: '/creative-services',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered creative and design solutions',
    children: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'Metaverse Development', href: '/metaverse-development-studio', description: '3D world creation' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse-platform', description: 'Quantum-enhanced experiences' },
      { name: '3D Design & Modeling', href: '/3d-design-platform', description: 'Advanced 3D creation tools' },
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'Automated video content' },
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-generated music' }
    ]
  },
  {
    name: 'Financial Technology',
    href: '/financial-technology',
    icon: <TrendingUp className="w-5 h-5" />,
    description: 'Innovative fintech and financial services',
    badge: 'New',
    children: [
      { name: 'Quantum Trading Algorithm Pro', href: '/quantum-trading-algorithm', description: 'AI-powered trading algorithms' },
      { name: 'DeFi Nexus Platform', href: '/defi-nexus-platform', description: 'Decentralized finance solutions' },
      { name: 'AI Credit Intelligence', href: '/ai-credit-intelligence', description: 'AI-powered credit scoring' },
      { name: 'InsurTech Pro Platform', href: '/insurtech-pro-platform', description: 'Insurance technology solutions' },
      { name: 'RegTech Compliance Suite', href: '/regtech-compliance-suite', description: 'Regulatory compliance automation' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare-biotech',
    icon: <Shield className="w-5 h-5" />,
    description: 'AI-powered healthcare solutions',
    badge: 'Hot',
    children: [
      { name: 'AI Diagnostic Pro Platform', href: '/ai-diagnostic-platform', description: 'Medical AI diagnostics' },
      { name: 'TeleMed Pro Platform', href: '/telemed-pro-platform', description: 'Telemedicine solutions' },
      { name: 'BioTech Research Hub', href: '/biotech-research-hub', description: 'Biotechnology research platform' },
      { name: 'Healthcare Analytics Pro', href: '/healthcare-analytics-pro', description: 'Healthcare analytics suite' },
      { name: 'Mental Health AI Companion', href: '/mental-health-ai-companion', description: 'AI mental health support' }
    ]
  },
  {
    name: 'Education Technology',
    href: '/education-technology',
    icon: <Brain className="w-5 h-5" />,
    description: 'AI-powered learning platforms',
    children: [
      { name: 'AI Learning Pro Platform', href: '/ai-learning-pro-platform', description: 'Personalized AI learning' },
      { name: 'VR Education Studio', href: '/vr-education-studio', description: 'Virtual reality education' },
      { name: 'Blockchain Credentials Pro', href: '/blockchain-credentials-pro', description: 'Secure credential verification' },
      { name: 'AI Language Learning Pro', href: '/ai-language-learning-pro', description: 'AI language instruction' },
      { name: 'STEM Education Hub', href: '/stem-education-hub', description: 'STEM learning platform' }
    ]
  },
  {
    name: 'Sustainability & Green Tech',
    href: '/sustainability-green-tech',
    icon: <Globe className="w-5 h-5" />,
    description: 'Environmental technology solutions',
    children: [
      { name: 'CarbonTrack Pro Platform', href: '/carbon-track-pro-platform', description: 'Carbon footprint tracking' },
      { name: 'Renewable Energy Optimizer Pro', href: '/renewable-energy-optimizer-pro', description: 'Energy optimization' },
      { name: 'Smart Building Pro Platform', href: '/smart-building-pro-platform', description: 'Building automation' },
      { name: 'Circular Economy Hub', href: '/circular-economy-hub', description: 'Circular economy platform' },
      { name: 'Smart Water Management Pro', href: '/smart-water-management-pro', description: 'Water management system' }
    ]
  },
  {
    name: 'Logistics & Supply Chain',
    href: '/logistics-supply-chain',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Autonomous logistics solutions',
    children: [
      { name: 'Space Mining Platform', href: '/space-resource-mining-platform', description: 'Asteroid mining operations' },
      { name: 'Space Technology AI', href: '/space-technology-ai-platform', description: 'AI space solutions' },
      { name: 'Metaverse Development', href: '/metaverse-ai-development-platform', description: 'Metaverse platforms' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform', description: 'Holographic events' },
      { name: 'Space Logistics', href: '/space-logistics-platform', description: 'Space transportation' },
      { name: 'Satellite Technology', href: '/satellite-technology-platform', description: 'Satellite solutions' },
      { name: 'Space Research', href: '/space-research-platform', description: 'Space exploration tools' },
      { name: 'Space Mining Analytics', href: '/space-mining-analytics', description: 'Mining data analysis' }
    ]
  },
  {
    name: 'Research & Development',
    href: '/research-development',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Cutting-edge research and development services',
    children: [
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed research' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological research automation' },
      { name: 'Neuroscience Research', href: '/neuroscience-research-platform', description: 'Brain research tools' },
      { name: 'Climate Research AI', href: '/climate-research-ai', description: 'Environmental research automation' }
    ]
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Truck className="w-5 h-5" />,
    description: 'Specialized solutions for specific industries',
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'Medical AI applications' },
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'Fintech AI solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Industrial automation' },
      { name: 'Retail AI', href: '/retail-ai-solutions', description: 'Retail optimization' },
      { name: 'Education AI', href: '/education-ai-solutions', description: 'Educational technology' },
      { name: 'Transportation AI', href: '/transportation-ai-solutions', description: 'Smart transportation' }
    ]
  },
  {
    name: 'Pricing & Plans',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Flexible pricing options for all services',
    children: [
      { name: '2025 Pricing', href: '/pricing-2025', description: 'Current year pricing' },
      { name: '2026 Pricing', href: '/pricing-2026', description: 'Next year pricing' },
      { name: 'Enterprise Plans', href: '/enterprise-pricing', description: 'Large organization pricing' },
      { name: 'Startup Plans', href: '/startup-pricing', description: 'Small business pricing' },
      { name: 'Custom Solutions', href: '/custom-pricing', description: 'Tailored pricing' },
      { name: 'ROI Calculator', href: '/roi-calculator', description: 'Calculate your return on investment' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Educational resources and documentation',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' },
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
      { name: 'Research Papers', href: '/research-papers', description: 'Academic publications' }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: <Settings className="w-5 h-5" />,
    description: 'Technical support and customer service',
    children: [
      { name: 'Help Center', href: '/help', description: 'Self-service support' },
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' },
      { name: 'Training Programs', href: '/training', description: 'Skill development' },
      { name: 'Community Forum', href: '/community', description: 'User community' },
      { name: 'Status Page', href: '/status', description: 'Service status' }
    ]
  }
],

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news' },
  { name: 'Contact', href: '/contact', description: 'Get in touch' }
],

export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  // Removed unused isScrolled state and duplicate scroll handler

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  },

  const closeDropdown = () => {
    setActiveDropdown(null),
  },



const EnhancedNavigation2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedNavigation2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default EnhancedNavigation2025,
