import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  Mail,
  Video,
  GraduationCap
} from 'lucide-react';

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
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Security, compliance, and data protection',
    color: 'from-red-500 to-orange-500',
    services: [
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'Advanced AI-powered security', featured: true },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Modern security architecture' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' }
    ]
  },
  {
    title: 'Digital Transformation',
    icon: Zap,
    description: 'Strategic technology consulting and transformation',
    color: 'from-yellow-500 to-orange-500',
    services: [
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas', featured: true },
      { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy & planning' },
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Next-generation technology solutions',
    color: 'from-indigo-500 to-purple-500',
    services: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power', featured: true },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
      { name: 'Space Technology', path: '/space-tech', description: 'Space-based solutions' }
    ]
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    description: 'Business intelligence and data insights',
    color: 'from-green-500 to-teal-500',
    services: [
      { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights', featured: true },
      { name: 'Business Intelligence', path: '/services/ai-business-intelligence-analytics', description: 'Performance metrics & reporting' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Niche software solutions and tools',
    color: 'from-purple-500 to-pink-500',
    services: [
      { name: 'Micro SaaS Platform', path: '/micro-saas', description: 'Niche software solutions', featured: true },
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support system' },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Performance tracking & insights' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support system' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio to text conversion' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Automated email campaigns' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Product returns system' },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation' }
    ]
  }
];

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  const allServices = [
    // AI & Analytics Services
    {
      name: 'AI & Analytics',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-purple-600 to-pink-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration', 'Real-time monitoring'],
      pricing: 'Custom pricing',
      featured: true,
      marketPrice: '$15,000 - $50,000/month',
      roi: '400-800%'
    },
    {
      name: 'AI Business Intelligence Platform',
      description: 'Advanced analytics and business intelligence powered by machine learning',
      category: 'AI & Analytics',
      icon: BarChart3,
      href: '/services/ai-business-intelligence',
      color: 'from-blue-600 to-cyan-600',
      features: ['Predictive analytics', 'Data visualization', 'Business insights', 'Performance tracking'],
      pricing: 'From $2,500/month',
      featured: true,
      marketPrice: '$2,500 - $7,500/month',
      roi: '300-600%'
    },
    {
      name: 'AI Content Generation Platform',
      description: 'AI-powered content creation and optimization for marketing and communications',
      category: 'AI & Analytics',
      icon: BookOpen,
      href: '/services/ai-content-generation-platform',
      color: 'from-green-600 to-emerald-600',
      features: ['Content creation', 'SEO optimization', 'Brand consistency', 'Multi-format support'],
      pricing: 'From $199/month',
      featured: false,
      marketPrice: '$199 - $599/month',
      roi: '250-500%'
    },
    {
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaign optimization and customer engagement',
      category: 'AI & Analytics',
      icon: Target,
      href: '/services/ai-marketing-automation',
      color: 'from-orange-600 to-red-600',
      features: ['Campaign optimization', 'Customer segmentation', 'A/B testing', 'ROI tracking'],
      pricing: 'From $399/month',
      featured: false,
      marketPrice: '$399 - $1,299/month',
      roi: '200-400%'
    },
    // Micro SaaS Solutions
    {
      name: 'AI Project Management Platform',
      description: 'AI-powered project management with intelligent task prioritization and resource optimization',
      category: 'Micro SaaS',
      icon: Briefcase,
      href: '/services/ai-project-management-platform',
      color: 'from-indigo-600 to-purple-600',
      features: ['Task prioritization', 'Resource optimization', 'Risk prediction', 'Team collaboration'],
      pricing: 'From $299/month',
      featured: true,
      marketPrice: '$299 - $899/month',
      roi: '350-700%'
    },
    {
      name: 'AI Cybersecurity Threat Detection',
      description: 'Advanced AI-powered cybersecurity with real-time threat detection and automated response',
      category: 'Micro SaaS',
      icon: ShieldCheck,
      href: '/services/ai-cybersecurity-threat-detection',
      color: 'from-red-600 to-orange-600',
      features: ['Real-time threat detection', 'Automated response', 'Advanced analytics', 'Compliance reporting'],
      pricing: 'From $399/month',
      featured: true,
      marketPrice: '$399 - $1,199/month',
      roi: '400-800%'
    },
    {
      name: 'AI Financial Trading Platform',
      description: 'Revolutionary AI-powered trading platform with intelligent market analysis and automation',
      category: 'Micro SaaS',
      icon: TrendingUp,
      href: '/services/ai-financial-trading-platform',
      color: 'from-green-600 to-blue-600',
      features: ['Market analysis', 'Trading automation', 'Portfolio optimization', 'Risk management'],
      pricing: 'From $199/month',
      featured: false,
      marketPrice: '$199 - $799/month',
      roi: '500-1000%'
    },
    {
      name: 'AI Healthcare Analytics Platform',
      description: 'Transform healthcare delivery with AI-powered diagnosis support and predictive analytics',
      category: 'Micro SaaS',
      icon: Heart,
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['Diagnosis support', 'Predictive analytics', 'Patient monitoring', 'Clinical insights'],
      pricing: 'From $799/month',
      featured: false,
      marketPrice: '$799 - $2,499/month',
      roi: '300-600%'
    },
    // IT Services
    {
      name: 'Cloud & DevOps Services',
      description: 'Comprehensive cloud infrastructure and DevOps automation solutions',
      category: 'IT Services',
      icon: Cloud,
      href: '/services/cloud-devops',
      color: 'from-blue-500 to-indigo-600',
      features: ['Infrastructure automation', 'CI/CD pipelines', 'Cloud migration', 'Monitoring & alerting'],
      pricing: 'From $1,500/month',
      featured: true,
      marketPrice: '$1,500 - $5,000/month',
      roi: '250-500%'
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation services',
      category: 'IT Services',
      icon: Rocket,
      href: '/services/digital-transformation',
      color: 'from-purple-500 to-pink-600',
      features: ['Process optimization', 'Technology assessment', 'Change management', 'Implementation support'],
      pricing: 'Custom pricing',
      featured: true,
      marketPrice: '$10,000 - $50,000/month',
      roi: '200-400%'
    },
    {
      name: 'AI Supply Chain Optimization',
      description: 'AI-powered supply chain optimization for improved efficiency and cost reduction',
      category: 'IT Services',
      icon: Truck,
      href: '/services/ai-supply-chain-optimization',
      color: 'from-green-500 to-teal-600',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management'],
      pricing: 'From $999/month',
      featured: false,
      marketPrice: '$999 - $3,999/month',
      roi: '300-600%'
    },
    {
      name: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing applications for complex problem solving',
      category: 'IT Services',
      icon: Atom,
      href: '/services/quantum-computing',
      color: 'from-purple-600 to-violet-600',
      features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research applications'],
      pricing: 'Custom pricing',
      featured: false,
      marketPrice: '$5,000 - $25,000/month',
      roi: '500-1000%'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', count: allServices.filter(s => s.category === 'Micro SaaS').length },
    { id: 'IT Services', name: 'IT Services', count: allServices.filter(s => s.category === 'IT Services').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI, micro SaaS, and IT services. 
              From intelligent automation to advanced analytics, we deliver innovative solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
              >
                Get Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={service.href}
                        className="block group bg-zion-slate/50 rounded-xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-zion-slate/70"
                      >
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-300">
              Discover cutting-edge solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.featured && (
                        <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing and ROI */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="text-center p-2 bg-blue-600/20 rounded">
                        <div className="text-blue-300">Our Price</div>
                        <div className="text-white font-semibold">{service.pricing}</div>
                      </div>
                      <div className="text-center p-2 bg-green-600/20 rounded">
                        <div className="text-green-300">ROI</div>
                        <div className="text-white font-semibold">{service.roi}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> f532d9f18df2cd6f10cfe4751a99601c6e9de18e
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"
              >
                View Pricing
              </Link>
              <Link
                to="/sitemap"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"
              >
                Full Sitemap
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Featured Service Showcases</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest and most innovative service collections
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {[
            { name: '2025 New Innovative Services', path: '/new-innovative-services-2025', description: 'Revolutionary AI & Micro SAAS Solutions', color: 'from-zion-cyan to-zion-purple' },
            { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', description: 'Revolutionary AI & Quantum Solutions', color: 'from-yellow-500 to-orange-500' },
            { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', description: 'Cutting-edge Innovation & Emerging Tech', color: 'from-purple-500 to-pink-500' },
            { name: '2029 Cutting-Edge Services', path: '/zion-cutting-edge-services-2029', description: 'Future-ready Technology Solutions', color: 'from-indigo-500 to-purple-500' },
            { name: '2029 Comprehensive Services Showcase', path: '/comprehensive-services-showcase-2029', description: 'Complete Portfolio of AI, IT & Micro SaaS Solutions', color: 'from-cyan-500 to-purple-500' }
          ].map((showcase, index) => (
            <motion.div
              key={showcase.path}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <Link
                to={showcase.path}
                className="block p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${showcase.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {showcase.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {showcase.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  <p className="text-gray-400 text-lg">{category.description}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 + serviceIndex * 0.05 }}
                  >
                    <Link
                      to={service.path}
                      className={`block p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full group ${
                        service.featured ? 'ring-2 ring-zion-cyan/30' : ''
                      }`}
                    >
                      {service.featured && (
                        <div className="flex items-center mb-3">
                          <Star className="w-4 h-4 text-zion-cyan mr-2" />
                          <span className="text-xs text-zion-cyan font-medium">Featured</span>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                        {service.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-cyan/20 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and discover how our services can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 font-semibold"
              >
                Contact Us
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20 font-semibold"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}