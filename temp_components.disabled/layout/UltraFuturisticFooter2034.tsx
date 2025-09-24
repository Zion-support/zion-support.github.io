import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  Zap, Mail, Phone, MapPin, Globe;
  Twitter, Linkedin, Facebook, Instagram;
  Youtube, Github, ArrowRight, Star;
  Shield, Rocket, Brain, Atom, DollarSign;
  Users, FileText, HelpCircle, Settings;
  TrendingUp, Award, CheckCircle, Clock;
  Globe as GlobeIcon, Cpu, Database, Lock;
  Heart, Palette, GraduationCap, Hospital, Coins, Leaf, Scale} from 'lucide-react',
const contactInfo ={
  mobile: '+1 30o2 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 10o08 Middletown DE 19709';
  website: 'https://ziontechgroup.com'};
const footerSections = [
  {
    title: 'AI & Consciousness';
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-20o25' };
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' };
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' };
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' };
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' };
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine' };
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' };
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
    ]};
  {
    title: 'Quantum & Emerging Tech';
    links: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' };
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' };
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' };
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' };
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' };
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' };
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' };
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' };
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' };
      { name: 'Quantum Robotics', href: '/quantum-robotics' };
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' };
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' };
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
    ]};
  {
    title: 'Enterprise IT';
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' };
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' };
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' };
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' };
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' };
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' };
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' };
      { name: 'Quantum Networking', href: '/quantum-networking' }
    ]};
  {
    title: 'Micro SAAS';
    icon: <Rocket className="w-5 h-5 text-purple-40o0"  />;
    services: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory' };
      { name: 'Quantum CRM Intelligence Suite', href: '/quantum-crm-intelligence-suite' };
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' };
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro' };
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro' };
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro' };
      { name: 'AI Financial Intelligence Pro', href: '/ai-financial-intelligence-pro' };
      { name: 'AI Sustainability Platform Pro', href: '/ai-sustainability-platform-pro' };
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform' };
      { name: 'AI Legal Contract Analyzer Pro', href: '/ai-legal-contract-analyzer-pro' }
    ]}
],
const companyLinks = [
  { name: 'About Us', href: '/about' };
  { name: 'Leadership Team', href: '/leadership' };
  { name: 'Careers', href: '/careers' };
  { name: 'News & Press', href: '/news' };
  { name: 'Partners', href: '/partners' };
  { name: 'Investors', href: '/investors' };
  { name: 'Contact Us', href: '/contact' };
  { name: 'Locations', href: '/locations' };
  { name: 'Sustainability', href: '/sustainability' };
  { name: 'Diversity & Inclusion', href: '/diversity-inclusion' }
],
const resourceLinks = [
  { name: 'Documentation', href: '/docs' };
  { name: 'API Reference', href: '/api-documentation' };
  { name: 'Case Studies', href: '/case-studies' };
  { name: 'Blog & News', href: '/blog' };
  { name: 'Support Center', href: '/support' };
  { name: 'Training & Certification', href: '/training' };
  { name: 'Community Forum', href: '/community' };
  { name: 'Developer Resources', href: '/developer-resources' };
  { name: 'Research & Development', href: '/research-development' };
  { name: 'White Papers', href: '/white-papers' }
],
const solutionLinks = [
  { name: 'Healthcare Solutions', href: '/healthcare-solutions' };
  { name: 'Financial Services', href: '/financial-solutions' };
  { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' };
  { name: 'Retail Technology', href: '/retail-technology-solutions' };
  { name: 'Education Technology', href: '/education-technology-solutions' };
  { name: 'Government Solutions', href: '/government-technology-solutions' };
  { name: 'Energy & Utilities', href: '/energy-utilities-solutions' };
  { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions' };
  { name: 'Real Estate Technology', href: '/real-estate-technology-solutions' };
  { name: 'Entertainment & Media', href: '/entertainment-media-solutions' }
],
const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-40o0' };
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-60o0' };
  { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-50o0' };
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-50o0' };
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-50o0' };
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-40o0' }
],
const quickLinks = [
  { name: 'All Services', href: '/comprehensive-services-showcase-20o25' };
  { name: 'Pricing', href: '/pricing' };
  { name: 'Contact', href: '/contact' };
  { name: 'Support', href: '/support' };
  { name: 'Documentation', href: '/docs' };
  { name: 'API Reference', href: '/api-docs' }
],
export default function UltraFuturisticFooter20o34() {
  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-50o0/20 overflow-hidden">,
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">,
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-50o0/5 via-transparent to-transparent"  />,
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-50o0/50 to-transparent"  />,
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-50o0/30 to-transparent"  />,
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-50o0/30 to-transparent"  />,
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-50o0/30 to-transparent"  />,
      </div>,
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-12">,
          {/* Company Information */}
          <div className="space-y-6">,
            <div className="flex items-center space-x-3">,
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-lg flex items-center justify-center">,
                <Zap className="w-6 h-6 text-white"  />,
              </div>,
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                Zion Tech Group,
              </span>,
            </div>,
            <p className="text-gray-30o0 text-sm leading-relaxed">,
              Pioneering the future of technology with revolutionary AI, quantum computing, and emerging technology solutions that transform businesses and accelerate innovation.,
            </p>,
            <div className="flex space-x-4">,
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 border border-cyan-50o0/30 rounded-lg flex items-center justify-center hover: from-cyan-50o0/30 hover:to-blue-50o0/30 transition-all duration-30o0 group">,
                <Twitter className="w-5 h-5 text-cyan-40o0 group-hover:text-cyan-30o0 transition-colors"  />,
              </a>,
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 border border-cyan-50o0/30 rounded-lg flex items-center justify-center hover:from-cyan-50o0/30 hover:to-blue-50o0/30 transition-all duration-30o0 group">,
                <Linkedin className="w-5 h-5 text-cyan-40o0 group-hover:text-cyan-30o0 transition-colors"  />,
              </a>,
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 border border-cyan-50o0/30 rounded-lg flex items-center justify-center hover:from-cyan-50o0/30 hover:to-blue-50o0/30 transition-all duration-30o0 group">,
                <Github className="w-5 h-5 text-cyan-40o0 group-hover:text-cyan-30o0 transition-colors"  />,
              </a>,
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 border border-cyan-50o0/30 rounded-lg flex items-center justify-center hover:from-cyan-50o0/30 hover:to-blue-50o0/30 transition-all duration-30o0 group">,
                <Youtube className="w-5 h-5 text-cyan-40o0 group-hover:text-cyan-30o0 transition-colors"  />,
              </a>,
            </div>,
          </div>,
          {/* AI & Technology Services */}
          <div className="space-y-6">,
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">,
              <Brain className="w-5 h-5 text-cyan-40o0"  />,
              <span>AI & Technology</span>,
            </h3>,
            <ul className="space-y-3">,
              <li><a href="/ai-services" className="text-gray-30o0 hover: text-cyan-40o0 transition-colors text-sm">AI Consciousness Platform</a></li>,
              <li><a href="/ai-autonomous-research-assistant" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">Autonomous Research AI</a></li>,
              <li><a href="/ai-emotional-intelligence-training" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">Emotional Intelligence AI</a></li>,
              <li><a href="/ai-predictive-maintenance-platform" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">Predictive Maintenance</a></li>,
              <li><a href="/ai-content-personalization-engine" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">Content Personalization</a></li>,
              <li><a href="/ai-autonomous-ecosystem-manager" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">Autonomous Ecosystem</a></li>,
              <li><a href="/ai-ethics-governance-framework" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">AI Ethics & Governance</a></li>,
              <li><a href="/ai-creativity-studio" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">AI Creativity Studio</a></li>,
            </ul>,
          </div>,
          {/* Quantum & Emerging Tech */}
          <div className="space-y-6">,
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">,
              <Atom className="w-5 h-5 text-purple-40o0"  />,
              <span>Quantum & Emerging</span>,
            </h3>,
            <ul className="space-y-3">,
              <li><a href="/space-resource-mining-platform" className="text-gray-30o0 hover: text-purple-40o0 transition-colors text-sm">Space Resource Mining</a></li>,
              <li><a href="/brain-computer-interface-platform" className="text-gray-30o0 hover:text-purple-40o0 transition-colors text-sm">Brain-Computer Interface</a></li>,
              <li><a href="/quantum-materials-discovery-platform" className="text-gray-30o0 hover:text-purple-40o0 transition-colors text-sm">Quantum Materials</a></li>,
              <li><a href="/autonomous-vehicle-ai-platform" className="text-gray-30o0 hover:text-purple-40o0 transition-colors text-sm">Autonomous Vehicles</a></li>,
              <li><a href="/quantum-bio-computing-platform" className="text-gray-30o0 hover:text-purple-40o0 transition-colors text-sm">Quantum Bio-Computing</a></li>,
              <li><a href="/quantum-energy-platform" className="text-gray-30o0 hover:text-purple-40o0 transition-colors text-sm">Quantum Energy</a></li>,
              <li><a href="/metaverse-ai-development-platform" className="text-gray-30o0 hover:text-purple-40o0 transition-colors text-sm">Metaverse Development</a></li>,
              <li><a href="/quantum-networking" className="text-gray-30o0 hover:text-purple-40o0 transition-colors text-sm">Quantum Networking</a></li>,
            </ul>,
          </div>,
          {/* Enterprise IT & Infrastructure */}
          <div className="space-y-6">,
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">,
              <Shield className="w-5 h-5 text-blue-40o0"  />,
              <span>Enterprise IT</span>,
            </h3>,
            <ul className="space-y-3">,
              <li><a href="/quantum-secure-cloud-infrastructure" className="text-gray-30o0 hover: text-blue-40o0 transition-colors text-sm">Quantum-Secure Cloud</a></li>,
              <li><a href="/autonomous-it-operations-center" className="text-gray-30o0 hover:text-blue-40o0 transition-colors text-sm">Autonomous IT Operations</a></li>,
              <li><a href="/edge-computing-orchestration-platform" className="text-gray-30o0 hover:text-blue-40o0 transition-colors text-sm">Edge Computing</a></li>,
              <li><a href="/blockchain-infrastructure-platform" className="text-gray-30o0 hover:text-blue-40o0 transition-colors text-sm">Blockchain Infrastructure</a></li>,
              <li><a href="/ai-powered-devops-platform" className="text-gray-30o0 hover:text-blue-40o0 transition-colors text-sm">AI-Powered DevOps</a></li>,
              <li><a href="/zero-trust-security-platform" className="text-gray-30o0 hover:text-blue-40o0 transition-colors text-sm">Zero Trust Security</a></li>,
              <li><a href="/quantum-networking" className="text-gray-30o0 hover:text-blue-40o0 transition-colors text-sm">Quantum Networking</a></li>,
              <li><a href="/advanced-it-infrastructure-services" className="text-gray-30o0 hover:text-blue-40o0 transition-colors text-sm">Advanced Infrastructure</a></li>,
            </ul>,
          </div>,
        </div>,
        {/* Additional Service Categories */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-12">,
          {/* Micro SAAS Solutions */}
          <div className="space-y-6">,
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">,
              <Rocket className="w-5 h-5 text-green-40o0"  />,
              <span>Micro SAAS Solutions</span>,
            </h3>,
            <ul className="space-y-3">,
              <li><a href="/ai-customer-success-platform" className="text-gray-30o0 hover: text-green-40o0 transition-colors text-sm">AI Customer Success</a></li>,
              <li><a href="/intelligent-supply-chain-optimization" className="text-gray-30o0 hover:text-green-40o0 transition-colors text-sm">Supply Chain Optimization</a></li>,
              <li><a href="/ai-financial-planning-platform" className="text-gray-30o0 hover:text-green-40o0 transition-colors text-sm">Financial Planning AI</a></li>,
              <li><a href="/intelligent-hr-analytics-platform" className="text-gray-30o0 hover:text-green-40o0 transition-colors text-sm">HR Analytics Platform</a></li>,
              <li><a href="/ai-sales-intelligence-platform" className="text-gray-30o0 hover:text-green-40o0 transition-colors text-sm">Sales Intelligence AI</a></li>,
              <li><a href="/ai-powered-decision-engine" className="text-gray-30o0 hover:text-green-40o0 transition-colors text-sm">AI Decision Engine</a></li>,
              <li><a href="/intelligent-content-automation-platform" className="text-gray-30o0 hover:text-green-40o0 transition-colors text-sm">Content Automation</a></li>,
              <li><a href="/smart-crm-intelligence-suite" className="text-gray-30o0 hover:text-green-40o0 transition-colors text-sm">Smart CRM Suite</a></li>,
            </ul>,
          </div>,
          {/* Business Solutions */}
          <div className="space-y-6">,
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">,
              <Target className="w-5 h-5 text-orange-40o0"  />,
              <span>Business Solutions</span>,
            </h3>,
            <ul className="space-y-3">,
              <li><a href="/ai-business-intelligence-suite" className="text-gray-30o0 hover: text-orange-40o0 transition-colors text-sm">Business Intelligence</a></li>,
              <li><a href="/ai-marketing-automation-platform" className="text-gray-30o0 hover:text-orange-40o0 transition-colors text-sm">Marketing Automation</a></li>,
              <li><a href="/ai-sales-intelligence-platform" className="text-gray-30o0 hover:text-orange-40o0 transition-colors text-sm">Sales Intelligence</a></li>,
              <li><a href="/ai-customer-service-platform" className="text-gray-30o0 hover:text-orange-40o0 transition-colors text-sm">Customer Service AI</a></li>,
              <li><a href="/ai-hr-recruitment-platform" className="text-gray-30o0 hover:text-orange-40o0 transition-colors text-sm">HR & Recruitment</a></li>,
              <li><a href="/ai-project-management-suite" className="text-gray-30o0 hover:text-orange-40o0 transition-colors text-sm">Project Management</a></li>,
              <li><a href="/ai-financial-analytics-platform" className="text-gray-30o0 hover:text-orange-40o0 transition-colors text-sm">Financial Analytics</a></li>,
              <li><a href="/innovative-business-solutions" className="text-gray-30o0 hover:text-orange-40o0 transition-colors text-sm">All Business Solutions</a></li>,
            </ul>,
          </div>,
          {/* Resources & Support */}
          <div className="space-y-6">,
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">,
              <BookOpen className="w-5 h-5 text-pink-40o0"  />,
              <span>Resources & Support</span>,
            </h3>,
            <ul className="space-y-3">,
              <li><a href="/docs" className="text-gray-30o0 hover: text-pink-40o0 transition-colors text-sm">Documentation</a></li>,
              <li><a href="/api-documentation" className="text-gray-30o0 hover:text-pink-40o0 transition-colors text-sm">API Reference</a></li>,
              <li><a href="/case-studies" className="text-gray-30o0 hover:text-pink-40o0 transition-colors text-sm">Case Studies</a></li>,
              <li><a href="/blog" className="text-gray-30o0 hover:text-pink-40o0 transition-colors text-sm">Blog & News</a></li>,
              <li><a href="/support" className="text-gray-30o0 hover:text-pink-40o0 transition-colors text-sm">Support Center</a></li>,
              <li><a href="/training" className="text-gray-30o0 hover:text-pink-40o0 transition-colors text-sm">Training & Certification</a></li>,
              <li><a href="/community" className="text-gray-30o0 hover:text-pink-40o0 transition-colors text-sm">Community Forum</a></li>,
              <li><a href="/developer-resources" className="text-gray-30o0 hover:text-pink-40o0 transition-colors text-sm">Developer Resources</a></li>,
            </ul>,
          </div>,
        </div>,
        {/* Contact Information & Quick Links */}
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-12">,
          {/* Contact Information */}
          <div className="space-y-6">,
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">,
              <Phone className="w-5 h-5 text-cyan-40o0"  />,
              <span>Contact Information</span>,
            </h3>,
            <div className="space-y-4">,
              <div className="flex items-center space-x-3">,
                <Phone className="w-5 h-5 text-cyan-40o0"  />,
                <span className="text-gray-30o0">+1 30o2 464 0950</span>,
              </div>,
              <div className="flex items-center space-x-3">,
                <Mail className="w-5 h-5 text-cyan-40o0"  />,
                <span className="text-gray-30o0">kleber@ziontechgroup.com</span>,
              </div>,
              <div className="flex items-center space-x-3">,
                <MapPin className="w-5 h-5 text-cyan-40o0"  />,
                <span className="text-gray-30o0">364 E Main St STE 10o08 Middletown DE 19709</span>,
              </div>,
              <div className="flex items-center space-x-3">,
                <Globe className="w-5 h-5 text-cyan-40o0"  />,
                <span className="text-gray-30o0">https: //ziontechgroup.com</span>,
              </div>,
            </div>,
          </div>,
          {/* Quick Links */}
          <div className="space-y-6">,
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">,
              <Zap className="w-5 h-5 text-cyan-40o0"  />,
              <span>Quick Links</span>,
            </h3>,
            <div className="grid grid-cols-2 gap-4">,
              <a href="/comprehensive-services-showcase-20o25" className="text-gray-30o0 hover: text-cyan-40o0 transition-colors text-sm">All Services</a>,
              <a href="/revolutionary-20o25-services-showcase" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">20o25 Services</a>,
              <a href="/revolutionary-20o26-services" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">20o26 Services</a>,
              <a href="/ultimate-20o26-services-showcase" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">Ultimate 20o26</a>,
              <a href="/pricing" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">Pricing</a>,
              <a href="/about" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">About Us</a>,
              <a href="/careers" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">Careers</a>,
              <a href="/contact" className="text-gray-30o0 hover:text-cyan-40o0 transition-colors text-sm">Contact</a>,
            </div>,
          </div>,
        </div>,
      </div>,
        {/* Bottom Section */}
        <div className="pt-8 border-t border-cyan-50o0/20">,
          <div className="flex flex-col md: flex-row justify-between items-center space-y-4 md:space-y-0">,
            <div className="text-gray-40o0 text-sm">,
              © 20o25 Zion Tech Group. All rights reserved. Pioneering the future of technology.,
            </div>,
            <div className="flex space-x-6 text-sm">,
              <a href="/terms" className="text-gray-40o0 hover:text-cyan-40o0 transition-colors">Terms of Service</a>,
              <a href="/privacy" className="text-gray-40o0 hover:text-cyan-40o0 transition-colors">Privacy Policy</a>,
              <a href="/cookies" className="text-gray-40o0 hover:text-cyan-40o0 transition-colors">Cookies</a>,
              <a href="/accessibility" className="text-gray-40o0 hover:text-cyan-40o0 transition-colors">Accessibility</a>,
            </div>,
          </div>,
        </div>,
      </div>,
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">,
        <div className="absolute top-1/4 left-1/6 w-2 h-32 bg-gradient-to-b from-cyan-50o0/20 to-transparent"  />,
        <div className="absolute top-1/3 right-1/6 w-2 h-24 bg-gradient-to-b from-blue-50o0/20 to-transparent"  />,
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-40o0/20 rounded-full animate-pulse"  />,
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-40o0/20 rounded-full animate-pulse delay-10o00"  />,
      </div>,
    </footer>)}
,