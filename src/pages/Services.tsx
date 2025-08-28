import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain,
  Cloud,
  Shield,
  Zap,
  Server,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Lock,
  Users,
  FileText,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Rocket,
  Atom,
  Network,
  Eye,
  Truck,
  MessageCircle,
  Target,
  Briefcase,
  Newspaper,
  HelpCircle,
  Video,
  TestTube,
  GraduationCap,
  GitFork,
  ExternalLink,
  ChevronDown,
  Copyright,
  MessageSquare,
  Building,
  DollarSign,
  Sparkles,
  Heart,
  Coins,
  Satellite,
  Leaf,
  Gamepad2,
  Cpu,
  Database,
  Clock,
  Code,
  BookOpen,
  Smartphone,
  Activity,
  ShoppingCart,
  PenTool
} from 'lucide-react';

interface Service {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  features: string[];
  featured?: boolean;
}

interface ServiceCategory {
  title: string;
  icon: any;
  description: string;
  color: string;
  services: Array<{
    name: string;
    path: string;
    description: string;
    featured?: boolean;
  }>;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Advanced AI-powered solutions and automation',
    color: 'from-zion-cyan to-zion-purple',
    services: [
      { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', description: 'AI-powered workflow automation', featured: true },
      { name: 'AI Data Governance Platform', path: '/services/ai-data-governance-platform', description: 'AI-powered data governance', featured: true },
      { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics', description: 'AI-powered customer insights' },
      { name: 'AI Business Intelligence Analytics', path: '/services/ai-business-intelligence-analytics', description: 'Advanced analytics & ML insights' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
      { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
      { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', description: 'AI-powered candidate evaluation' },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
      { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project optimization' },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
      { name: 'AI Financial Risk Management', path: '/services/ai-financial-risk-management', description: 'AI-powered financial risk assessment' },
      { name: 'AI Code Review Security Scanner', path: '/services/ai-code-review-security-scanner', description: 'Automated code security analysis' },
      { name: 'AI DevOps Automation Platform', path: '/services/ai-devops-automation-platform', description: 'AI-driven DevOps automation' },
      { name: 'AI Customer Experience Support', path: '/services/ai-customer-experience-support', description: 'Enhanced customer experience' },
      { name: 'AI Marketing Automation Personalization', path: '/services/ai-marketing-automation-personalization', description: 'Personalized marketing automation' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration platform' },
      { name: 'AI Quantum Financial Trading', path: '/services/ai-quantum-financial-trading', description: 'Quantum-AI trading platform' },
      { name: 'AI Autonomous Supply Chain', path: '/services/ai-autonomous-supply-chain', description: 'AI-powered supply chain automation' },
      { name: 'AI Cybersecurity Threat Intelligence', path: '/services/ai-cybersecurity-threat-intelligence', description: 'AI-powered threat detection' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Infrastructure, automation, and cloud solutions',
    color: 'from-blue-500 to-cyan-500',
    services: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling', featured: true },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy & planning' },
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale enterprise solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Security, compliance, and data protection',
    color: 'from-red-500 to-orange-500',
    services: [
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security platform', featured: true },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Content security policy' },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'Data subject rights portal' },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Zero trust security model' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated compliance management' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Quantum computing, IoT, and cutting-edge tech',
    color: 'from-purple-500 to-pink-500',
    services: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Quantum computing solutions', featured: true },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Edge computing infrastructure' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
      { name: 'Space Technology', path: '/space-tech', description: 'Space technology solutions' },
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Digital twin technology' },
      { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Digital transformation consulting' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Specialized software-as-a-service solutions',
    color: 'from-green-500 to-emerald-500',
    services: [
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management', featured: true },
      { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support platform' },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Website performance analytics' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support management' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio transcription service' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation platform' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Returns processing system' },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation platform' }
    ]
  }
];

const contactInfo = [
  { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = selectedCategory
    ? serviceCategories.filter(cat => cat.title === selectedCategory)
    : serviceCategories;

  const filteredServices = searchTerm
    ? serviceCategories.flatMap(cat => 
        cat.services.filter(service => 
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-slate-dark to-zion-slate opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered solutions, cloud infrastructure, 
              cybersecurity, and emerging technology services designed to transform your business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <SearchIcon className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300">
              Explore our most popular and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={`#${category.title.toLowerCase().replace(/\s/g, '-')}`}
                  className="block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300">
              Browse our comprehensive range of services by category
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.title
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    className="group"
                  >
                    <Link
                      to={service.path}
                      className="block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105 h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        {service.featured && (
                          <Star className="w-5 h-5 text-yellow-400" />
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.name}
                      </h4>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Removed features as per new structure */}

                      <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Search Results
              </h2>
              <p className="text-xl text-gray-300">
                Found {filteredServices.length} services matching "{searchTerm}"
              </p>
            </motion.div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={`${service.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      to={service.path}
                      className="block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105 h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        {service.featured && (
                          <Star className="w-5 h-5 text-yellow-400" />
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.name}
                      </h4>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Removed features as per new structure */}

                      <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-300 mb-4">
                  No services found matching "{searchTerm}"
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss how our services can transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <a
                  href={contact.href}
                  className="text-white hover:text-zion-cyan transition-colors duration-300"
                >
                  {contact.text}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Search Icon Component
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}