import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import {
  X, ChevronRight, Home, Star, Users;
  Settings, HelpCircle, Mail, Phone, MapPin;
  Brain, Atom, Shield, Rocket, DollarSign;
  Globe, Cpu, Database, Lock, Zap;
  TrendingUp, Award, CheckCircle, Clock;
  ArrowRight, Search, Menu, X as CloseIcon;
  Target, BookOpen, Truck, BarChart3;
  Sparkles, Eye, Lightbulb, Palette, Code} from 'lucide-react',
interface SidebarItem {
  name: string,
  href: string,
  icon?: React.ReactNode,
  description?: string,
  children?: SidebarItem[],
  badge?: string,
  isNew?: boolean,
  isHot?: boolean}
,
const contactInfo ={
  mobile: '+1 30o2 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 10o08 Middletown DE 19709';
  website: 'https://ziontechgroup.com'};
const sidebarItems: SidebarItem[] = [
  {
    name: 'All Services';
    href: '/comprehensive-services-showcase-20o25';
    icon: <Globe className="w-5 h-5"  />;
    description: 'Complete portfolio of all technology services';
    badge: 'Showcase';
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-20o25', description: 'Complete services portfolio' };
      { name: 'Service Categories', href: '/comprehensive-services-showcase-20o25#categories', description: 'Browse by category' };
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-20o25#pricing', description: 'Compare service costs' };
      { name: 'Service Search', href: '/comprehensive-services-showcase-20o25#search', description: 'Find specific services' };
      { name: 'Latest Innovations', href: '/revolutionary-20o25-services-showcase', description: 'Cutting-edge solutions' };
      { name: '20o26 Services', href: '/revolutionary-20o26-services', description: 'Next generation solutions' };
      { name: '20o27 Services', href: '/revolutionary-20o27-services-showcase', description: 'Future-ready services' };
      { name: 'Ultimate 20o26', href: '/ultimate-20o26-services-showcase', description: 'Premium service collection' }
    ]};
  {
    name: 'AI & Consciousness';
    href: '/ai-services';
    icon: <Brain className="w-5 h-5"  />;
    description: 'Revolutionary AI consciousness and emotional intelligence';
    badge: 'New';
    isNew: true;
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-20o25', description: 'Emotional intelligence and self-awareness' };
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' };
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' };
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' };
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' };
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' };
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' };
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' };
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' };
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' };
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' };
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' };
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' };
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]};
  {
    name: 'Quantum & Emerging Tech';
    href: '/quantum-services';
    icon: <Atom className="w-5 h-5"  />;
    description: 'Quantum computing and breakthrough technologies';
    badge: 'Hot';
    isHot: true;
    children: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' };
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' };
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' };
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' };
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' };
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' };
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' };
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' };
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' };
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' };
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' };
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' };
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
    ]};
  {
    name: 'Enterprise IT';
    href: '/enterprise-it';
    icon: <Shield className="w-5 h-5"  />;
    description: 'Enterprise solutions and infrastructure';
    children: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' };
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture', description: 'Advanced network security' };
      { name: 'Autonomous DevOps', href: '/autonomous-devops-orchestrator', description: 'AI-powered infrastructure' };
      { name: 'Edge Computing', href: '/edge-computing-orchestration-platform', description: 'Distributed computing optimization' };
      { name: 'AI Cybersecurity', href: '/ai-powered-cybersecurity-platform', description: 'Intelligent threat detection' };
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' };
      { name: 'IoT Security Management', href: '/iot-security-management-platform', description: 'Connected device security' };
      { name: 'Data Privacy Management', href: '/data-privacy-management-platform', description: 'Compliance and privacy' };
      { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization-platform', description: 'AI-powered cost reduction' }
    ]};
  {
    name: 'Micro SAAS';
    href: '/micro-saas';
    icon: <Rocket className="w-5 h-5"  />;
    description: 'Innovative business solutions for modern enterprises';
    badge: 'Popular';
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Data-driven insights' };
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Automated content creation' };
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Intelligent support automation' };
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' };
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Campaign optimization' };
      { name: 'AI Project Management', href: '/ai-project-management-platform', description: 'Intelligent project coordination' };
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial insights and optimization' };
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'HR operations automation' };
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Supply chain optimization' };
      { name: 'AI Legal Analysis', href: '/ai-legal-document-analysis', description: 'Legal document processing' }
    ]};
  {
    name: 'Creative & Design';
    href: '/creative-services';
    icon: <Palette className="w-5 h-5"  />;
    description: 'AI-powered creative and design solutions';
    children: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' };
      { name: 'Metaverse Development', href: '/metaverse-development-studio', description: '3D world creation' };
      { name: 'Quantum Metaverse', href: '/quantum-metaverse-platform', description: 'Quantum-enhanced experiences' };
      { name: '3D Design & Modeling', href: '/3d-design-platform', description: 'Advanced 3D creation tools' };
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'Automated video content' };
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-generated music' }
    ]};
  {
    name: 'Research & Development';
    href: '/research-development';
    icon: <BookOpen className="w-5 h-5"  />;
    description: 'Cutting-edge research and development services';
    children: [
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed research' };
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' };
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration solutions' };
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological research automation' };
      { name: 'Neuroscience Research', href: '/neuroscience-research-platform', description: 'Brain research tools' };
      { name: 'Climate Research AI', href: '/climate-research-ai', description: 'Environmental research automation' }
    ]};
  {
    name: 'Industry Solutions';
    href: '/industry-solutions';
    icon: <Truck className="w-5 h-5"  />;
    description: 'Specialized solutions for specific industries';
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'Medical AI applications' };
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'Fintech AI solutions' };
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Industrial automation' };
      { name: 'Retail AI', href: '/retail-ai-solutions', description: 'Retail optimization' };
      { name: 'Education AI', href: '/education-ai-solutions', description: 'Educational technology' };
      { name: 'Transportation AI', href: '/transportation-ai-solutions', description: 'Smart transportation' }
    ]};
  {
    name: 'Pricing & Plans';
    href: '/pricing';
    icon: <DollarSign className="w-5 h-5"  />;
    description: 'Flexible pricing options for all services';
    children: [
      { name: '20o25 Pricing', href: '/pricing-20o25', description: 'Current year pricing' };
      { name: '20o26 Pricing', href: '/pricing-20o26', description: 'Next year pricing' };
      { name: 'Enterprise Plans', href: '/enterprise-pricing', description: 'Large organization pricing' };
      { name: 'Startup Plans', href: '/startup-pricing', description: 'Small business pricing' };
      { name: 'Custom Solutions', href: '/custom-pricing', description: 'Tailored pricing' };
      { name: 'ROI Calculator', href: '/roi-calculator', description: 'Calculate your return on investment' }
    ]};
  {
    name: 'Resources';
    href: '/resources';
    icon: <BookOpen className="w-5 h-5"  />;
    description: 'Educational resources and documentation';
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' };
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' };
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' };
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' };
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' };
      { name: 'Research Papers', href: '/research-papers', description: 'Academic publications' }
    ]};
  {
    name: 'Support';
    href: '/support';
    icon: <Settings className="w-5 h-5"  />;
    description: 'Technical support and customer service';
    children: [
      { name: 'Help Center', href: '/help', description: 'Self-service support' };
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' };
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' };
      { name: 'Training Programs', href: '/training', description: 'Skill development' };
      { name: 'Community Forum', href: '/community', description: 'User community' };
      { name: 'Status Page', href: '/status', description: 'Service status' }
    ]}
],
const resources = [
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4"  /> };
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4"  /> };
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4"  /> };
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4"  /> };
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4"  /> };
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4"  /> }
],
  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections),
    if (newExpanded.has(title)) {
      newExpanded.delete(title)} else {
      newExpanded.add(title)}
    setExpandedSections(newExpanded)};
  const filteredServices = sidebarItems.flatMap(item =>,
    item.children?.filter(child =>,
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||,
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())) || []),
  return (
    <motion.aside,
      initial={{ x: -30o0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-50o0/20 shadow-2xl shadow-cyan-50o0/20 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-50o0/50 scrollbar-track-transparent">,
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-50o0/20 p-4">,
        <div className="flex items-center space-x-3 mb-4">,
          <div className="relative">,
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-lg flex items-center justify-center">,
              <Zap className="w-6 h-6 text-white"  />,
            </div>,
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-lg blur-lg opacity-50"></div>,
          </div>,
          <div>,
            <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent">,
              Zion Tech Group,
            </h2>,
            <p className="text-xs text-gray-40o0">Navigation</p>,
          </div>,
        </div>,
        {/* Contact Info */}
        <div className="space-y-2 text-xs text-gray-30o0">,
          <div className="flex items-center space-x-2">,
            <Phone className="w-3 h-3 text-cyan-40o0"  />,
            <span>{contactInfo.mobile}</span>,
          </div>,
          <div className="flex items-center space-x-2">,
            <Mail className="w-3 h-3 text-cyan-40o0"  />,
            <span>{contactInfo.email}</span>,
          </div>,
          <div className="flex items-center space-x-2">,
            <Globe className="w-3 h-3 text-cyan-40o0"  />,
            <span>{contactInfo.website}</span>,
          </div>,
        </div>,
      </div>,
      {/* Navigation Sections */}
      <div className="p-4 space-y-2">,
        {sidebarSections.map((section) => (
          <div key={section.title} className="space-y-1">,
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-3 text-left text-gray-30o0 hover: text-white hover:bg-cyan-50o0/10 rounded-lg transition-all duration-20o0 group">,
              <div className="flex items-center space-x-3">,
                <div className="text-cyan-40o0 group-hover:text-cyan-30o0 transition-colors duration-20o0">,
                  {section.icon}
                </div>,
                <span className="font-medium">{section.title}</span>,
                {section.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-full">,
                    {section.badge}
                  </span>)}
              </div>,
              {expandedSections.has(section.title) ? (
                <ChevronDown className="w-4 h-4 text-gray-50o0 group-hover: text-cyan-40o0 transition-colors duration-20o0"  />) : (
                <ChevronRight className="w-4 h-4 text-gray-50o0 group-hover:text-cyan-40o0 transition-colors duration-20o0"  />)}
            </button>,
            <AnimatePresence>,
              {expandedSections.has(section.title) && (
                <motion.div,
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-8 space-y-1">,
                  <CloseIcon className="w-5 h-5"  />,
                </button>,
              </div>,
              {/* Search Bar */}
              <div className="relative">,
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-40o0"  />,
                <input
                  type="text",
                  placeholder="Search services...",
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-80o0/50 border border-gray-70o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0/50 focus:border-cyan-50o0/50",
                />,
              </div>,
              {/* Search Results */}
              {searchQuery && (
                <div className="mt-4 space-y-2">,
                  <h4 className="text-sm font-medium text-gray-30o0">Search Results</h4>,
                  {filteredServices.length > 0 ? (
                    <div className="space-y-1">,
                      {filteredServices.slice(0, 5).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={onClose}
                          className="block p-2 rounded-lg hover: bg-gray-80o0/30 transition-colors duration-20o0 group">,
                          <div className="text-sm font-medium text-gray-30o0 group-hover:text-white transition-colors duration-20o0">,
                            {service.name}
                          </div>,
                          <div className="text-xs text-gray-50o0">,
                            {service.description}
                          </div>,
                        </Link>))}
                      {filteredServices.length > 5 && (
                        <div className="text-xs text-cyan-40o0 text-center">,
                          +{filteredServices.length - 5} more results,
                        </div>)}
                    </div>) : (
                    <div className="text-sm text-gray-50o0 text-center py-2">,
                      No services found,
                    </div>)}
                </div>)}
            </div>,
            {/* Contact Information */}
            <div className="p-6 border-b border-cyan-50o0/30">,
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">,
                <Mail className="w-5 h-5 text-cyan-40o0"  />,
                <span>Contact Information</span>,
              </h3>,
              <div className="space-y-3">,
                <div className="flex items-center space-x-3 text-gray-30o0">,
                  <Phone className="w-4 h-4 text-cyan-40o0"  />,
                  <a href={`tel: ${contactInfo.mobile}`} className="hover: text-cyan-40o0 transition-colors duration-20o0">,
                    {contactInfo.mobile}
                  </a>,
                </div>,
                <div className="flex items-center space-x-3 text-gray-30o0">,
                  <Mail className="w-4 h-4 text-cyan-40o0"  />,
                  <a href={`mailto: ${contactInfo.email}`} className="hover: text-cyan-40o0 transition-colors duration-20o0">,
                    {contactInfo.email}
                  </a>,
                </div>,
                <div className="flex items-start space-x-3 text-gray-30o0">,
                  <MapPin className="w-4 h-4 text-cyan-40o0 mt-1"  />,
                  <span className="text-sm">{contactInfo.address}</span>,
                </div>,
              </div>,
            </div>,
            {/* Quick Stats */}
            <div className="p-6 border-b border-cyan-50o0/30">,
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">,
                <TrendingUp className="w-5 h-5 text-cyan-40o0"  />,
                <span>Company Stats</span>,
              </h3>,
              <div className="grid grid-cols-2 gap-4">,
                {stats.map((stat, index) => (
                  <motion.div,
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-center p-3 bg-gray-80o0/30 rounded-lg border border-gray-70o0/30">,
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>,
                    <div className="text-xs text-gray-40o0">{stat.label}</div>,
                  </motion.div>))}
              </div>,
            </div>,
            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-50o0/30">,
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">,
                <Star className="w-5 h-5 text-cyan-40o0"  />,
                <span>Quick Links</span>,
              </h3>,
              <div className="space-y-2">,
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover: bg-gray-80o0/50 transition-colors duration-20o0 group">,
                    <div className="text-gray-40o0 group-hover:text-cyan-40o0 transition-colors duration-20o0">,
                      {link.icon}
                    </div>,
                    <span className="text-gray-30o0 group-hover: text-white transition-colors duration-20o0">,
                      {link.name}
                    </span>,
                  </Link>))}
              </div>,
            </div>,
            {/* Service Categories */}
            <div className="p-6 border-b border-cyan-50o0/30">,
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">,
                <Rocket className="w-5 h-5 text-cyan-40o0"  />,
                <span>Service Categories</span>,
              </h3>,
              <div className="space-y-2">,
                {sidebarItems.map((item) => (
                  <div key={item.name}>,
                    <button
                      onClick={() => toggleCategory(item.name)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover: bg-gray-80o0/50 transition-colors duration-20o0 group">,
                      <div className="flex items-center space-x-3">,
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.isHot ? 'from-indigo-50o0 to-purple-60o0' : 'from-cyan-50o0 to-blue-60o0'} rounded-lg flex items-center justify-center`}>,
                          {item.icon}
                        </div>,
                        <span className="text-gray-30o0 group-hover: text-white transition-colors duration-20o0">,
                          {item.name}
                        </span>,
                      </div>,
                      <ChevronRight
                        className={`w-4 h-4 text-gray-40o0 transition-transform duration-20o0 ${
                          expandedCategory === item.name ? 'rotate-90' : ''}`} ,
                       />,
                    </button>,
                    <AnimatePresence>,
                      {expandedCategory === item.name && (
                        <motion.div,
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-2 space-y-1">,
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={onClose}
                              className="flex items-center justify-between p-2 rounded-lg hover: bg-gray-80o0/30 transition-colors duration-20o0 group">,
                              <span className="text-sm text-gray-40o0 group-hover:text-cyan-40o0 transition-colors duration-20o0">,
                                {child.name}
                              </span>,
                              {child.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-full">,
                                  {child.badge}
                                </span>)}
                            </Link>))}
                        </motion.div>)}
                    </AnimatePresence>,
                  </div>))}
              </div>,
            </div>,
            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-50o0/30">,
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">,
                <Zap className="w-5 h-5 text-cyan-40o0"  />,
                <span>Quick Links</span>,
              </h3>,
              <div className="space-y-2">,
                <Link
                  href="/contact",
                  onClick={onClose}
                  className="block p-3 rounded-lg hover: bg-gray-80o0/50 transition-colors duration-20o0 group">,
                  <div className="font-medium text-gray-30o0 group-hover:text-white transition-colors duration-20o0">,
                    Contact Us,
                  </div>,
                  <div className="text-xs text-gray-50o0">Get in touch with our team</div>,
                </Link>,
                <Link
                  href="/pricing",
                  onClick={onClose}
                  className="block p-3 rounded-lg hover: bg-gray-80o0/50 transition-colors duration-20o0 group">,
                  <div className="font-medium text-gray-30o0 group-hover:text-white transition-colors duration-20o0">,
                    View Pricing,
                  </div>,
                  <div className="text-xs text-gray-50o0">Explore our pricing plans</div>,
                </Link>,
                <Link
                  href="/about",
                  onClick={onClose}
                  className="block p-3 rounded-lg hover: bg-gray-80o0/50 transition-colors duration-20o0 group">,
                  <div className="font-medium text-gray-30o0 group-hover:text-white transition-colors duration-20o0">,
                    About Us,
                  </div>,
                  <div className="text-xs text-gray-50o0">Learn about Zion Tech Group</div>,
                </Link>,
              </div>,
            </div>,
            <div className="text-center p-3 bg-gray-80o0/50 rounded-lg">,
              <div className="text-lg font-bold text-blue-40o0">10o00+</div>,
              <div className="text-xs text-gray-40o0">Clients</div>,
            </div>,
            <div className="text-center p-3 bg-gray-80o0/50 rounded-lg">,
              <div className="text-lg font-bold text-purple-40o0">24/7</div>,
              <div className="text-xs text-gray-40o0">Support</div>,
            </div>,
            <div className="text-center p-3 bg-gray-80o0/50 rounded-lg">,
              <div className="text-lg font-bold text-green-40o0">99.9%</div>,
              <div className="text-xs text-gray-40o0">Uptime</div>,
            </div>,
          </div>,
        </div>,
        {/* CTA Section */}
        <div className="pt-4 border-t border-gray-80o0 px-3">,
          <Link
            href="/contact",
            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hover:to-blue-70o0 text-white font-medium rounded-lg transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-lg hover:shadow-cyan-50o0/25">,
            <span>Get Started Today</span>,
            <ArrowRight className="w-4 h-4 ml-2 inline"  />,
          </Link>,
        </div>,
      </div>,
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-40o0 rounded-full animate-pulse"></div>,
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-blue-40o0 rounded-full animate-pulse delay-10o00"></div>,
      <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-40o0 rounded-full animate-pulse delay-20o00"></div>,
    </motion.aside>)};
export default EnhancedSidebar20o25})))