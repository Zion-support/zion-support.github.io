import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Rocket, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Users,
  Globe,
  Cpu,
  Database,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  DollarSign,
  Clock,
  Award,
  Lightbulb,
  Settings,
  Palette,
  Search,
  Filter,
  FileText
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'ai', label: 'AI & ML', icon: Brain },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'micro-saas', label: 'Micro SAAS', icon: Zap },
    { id: 'infrastructure', label: 'Infrastructure', icon: Server }
  ];

  const allServices = [
    // Core Services
    {
      id: 'ai-development',
      category: 'ai',
      title: 'AI Development',
      description: 'Custom AI models and machine learning solutions.',
      price: '$5,000 - $50,000',
      icon: Brain,
      features: ['Custom ML Models', 'Data Pipeline Design', 'Model Training & Optimization', 'Production Deployment'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cloud-migration',
      category: 'cloud',
      title: 'Cloud Migration',
      description: 'Seamless cloud migration and scalable architecture.',
      price: '$10,000 - $100,000',
      icon: Cloud,
      features: ['Multi-cloud Strategy', 'Architecture Design', 'Data Migration', 'Performance Optimization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cybersecurity',
      category: 'security',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and assessments.',
      price: '$3,000 - $25,000',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      color: 'from-red-500 to-orange-500'
    },
    // Micro-SaaS Solutions
    {
      id: 'ai-sales-email-optimizer',
      category: 'micro-saas',
      title: 'AI Sales Email Optimizer',
      description: 'Auto-drafts and A/B tests emails based on CRM context to raise reply rates.',
      price: '$299 - $799/month',
      icon: Mail,
      features: ['CRM Integration', 'Sequence Testing', 'Analytics Dashboard', 'Compliance Guardrails'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'support-ticket-triage',
      category: 'micro-saas',
      title: 'Support Ticket Triage Copilot',
      description: 'Classifies, deduplicates, and suggests resolutions; integrates with Zendesk/Jira.',
      price: '$249 - $999/month',
      icon: Bot,
      features: ['Auto-priority Routing', 'Knowledge Base Suggestions', 'First-response Macros', 'Integration APIs'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'invoice-ocr',
      category: 'micro-saas',
      title: 'Invoice OCR + Reconciliation',
      description: 'Extracts line-items and auto-matches to POs; exports to QuickBooks/Xero.',
      price: '$199 - $799/month',
      icon: FileText,
      features: ['Vendor Anomaly Detection', 'Tax & Currency Support', 'Audit Trails', 'ERP Integration'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'seo-content-planner',
      category: 'micro-saas',
      title: 'SEO Content Planner',
      description: 'Keyword clustering, brief generation, and on-page optimization recommendations.',
      price: '$99 - $399/month',
      icon: Search,
      features: ['Competitor Gap Analysis', 'Automatic Internal Linking', 'CMS Integration', 'Performance Tracking'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'hr-screening-assistant',
      category: 'micro-saas',
      title: 'HR Screening Assistant',
      description: 'Summarizes resumes, auto-screens candidates, and schedules interviews.',
      price: '$149 - $599/month',
      icon: Users,
      features: ['ATS Integration', 'Bias-mitigation Controls', 'Compliance Exports', 'Interview Scheduling'],
      color: 'from-pink-500 to-rose-500'
    },
    // AI Services & Solutions
    {
      id: 'ai-strategy',
      category: 'ai',
      title: 'AI Strategy & Roadmapping',
      description: 'Use-case discovery, ROI modeling, and architecture blueprints.',
      price: '$8,000 - $35,000',
      icon: Target,
      features: ['Use-case Discovery', 'ROI Modeling', 'Architecture Blueprints', 'Implementation Roadmap'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'custom-llm-apps',
      category: 'ai',
      title: 'Custom LLM Apps & Integrations',
      description: 'Build copilots, RAG search, and workflow agents integrated with your stack.',
      price: '$15,000 - $150,000',
      icon: Code,
      features: ['Copilot Development', 'RAG Search Systems', 'Workflow Agents', 'Stack Integration'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'computer-vision',
      category: 'ai',
      title: 'Computer Vision & OCR',
      description: 'Detection, tracking, and document understanding for real-world operations.',
      price: '$20,000 - $120,000',
      icon: Eye,
      features: ['Object Detection', 'Document Understanding', 'Real-time Processing', 'Custom Models'],
      color: 'from-emerald-600 to-green-600'
    },
    {
      id: 'mlops-platform',
      category: 'ai',
      title: 'MLOps & Platform Engineering',
      description: 'Feature stores, CI/CD for models, observability, and governance.',
      price: '$25,000 - $180,000',
      icon: Workflow,
      features: ['Feature Stores', 'CI/CD for Models', 'Observability', 'Governance Framework'],
      color: 'from-orange-600 to-red-600'
    },
    // IT Services & Modernization
    {
      id: 'cloud-cost-optimization',
      category: 'cloud',
      title: 'Cloud Cost Optimization',
      description: 'FinOps audits, rightsizing, reserved instances, and tagging strategies.',
      price: '$6,000 - $45,000',
      icon: DollarSign,
      features: ['FinOps Audits', 'Rightsizing Analysis', 'Reserved Instances', 'Tagging Strategies'],
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'zero-trust-security',
      category: 'security',
      title: 'Zero Trust Security',
      description: 'Identity-first controls, microsegmentation, and continuous verification.',
      price: '$12,000 - $95,000',
      icon: Lock,
      features: ['Identity Controls', 'Microsegmentation', 'Continuous Verification', 'Threat Detection'],
      color: 'from-red-600 to-pink-600'
    },
    {
      id: 'data-platform-modernization',
      category: 'infrastructure',
      title: 'Data Platform Modernization',
      description: 'Lakehouse design, ETL pipelines, and real-time analytics platforms.',
      price: '$18,000 - $140,000',
      icon: Database,
      features: ['Lakehouse Design', 'ETL Pipelines', 'Real-time Analytics', 'Data Governance'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'managed-it-support',
      category: 'infrastructure',
      title: 'Managed IT & Onsite Support',
      description: 'SLAs, patching, endpoint management, and onsite troubleshooting.',
      price: '$2,000 - $25,000/month',
      icon: Settings,
      features: ['SLA Management', 'Automated Patching', 'Endpoint Management', 'Onsite Support'],
      color: 'from-gray-600 to-slate-600'
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeFilter === 'all' || service.category === activeFilter;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">2025 Innovation Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Cutting-edge technology solutions designed to transform your business with AI, cloud, security, and innovative micro SAAS services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20"
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-cyan-500 border-cyan-400 text-white'
                      : 'bg-white/10 border-cyan-400/30 text-cyan-400 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3">Key Features:</div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-cyan-400 mb-6">
                  {service.price}
                </div>

                {/* CTA Button */}
                <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:scale-105">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
          >
            <h3 className="text-3xl font-bold text-white mb-4 text-center">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
              Talk with our experts to scope a pilot or request a tailored quote. We respond within 24 hours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-cyan-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6 text-cyan-400" />
                <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-lg"
              >
                Call Now
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;