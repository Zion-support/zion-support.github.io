import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cpu, Rocket, Zap, ArrowRight, CheckCircle, Star, 
  Users, BarChart3, Heart, Eye, Atom, Activity, Code, Database, 
  Server, Network, Lock, Cloud, Target, TrendingUp, Briefcase, 
  Globe, Phone, Mail, MapPin, Palette, Camera, Video, Music, 
  Gamepad2, Car, Plane, Ship, Leaf, Sun, Wind, Smartphone, 
  Watch, Headphones, Printer, Wifi, Bluetooth, Satellite, 
  Telescope, Microscope, Beaker, Pill, Stethoscope, Calculator, 
  BookOpen, GraduationCap, DollarSign, CreditCard, ShoppingCart, 
  Truck, Warehouse, Factory, Building2, Home, Store, Bank, 
  Insurance, Law, Gavel, FileText, Calendar, Clock, Timer, 
  Stopwatch, Thermometer, Gauge, Compass, Map, Search, Filter, 
  SortAsc, SortDesc, ChevronDown, ChevronUp, ExternalLink, 
  Download, Upload, Share, Bookmark, MessageCircle, PhoneCall, 
  VideoCall, MailOpen, Send, Plus, Minus, Bot, GitFork, Sparkles
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: string;
  benefits: string[];
  icon: any;
  color: string;
  featured: boolean;
  cta: string;
  ctaLink: string;
  marketPrice: string;
  roi: string;
}

const ComprehensiveServicesShowcase2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: 0 },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket, count: 0 },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'it-services', name: 'IT Services', icon: Server, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'analytics', name: 'Analytics & BI', icon: BarChart3, count: 0 }
  ];

  const allServices: Service[] = [
    // MICRO-SAAS SERVICES
    {
      id: 'ai-sales-optimizer',
      title: 'AI Sales Email Optimizer Pro',
      description: 'Revolutionary AI-powered sales email optimization platform that increases reply rates by 300%',
      category: 'micro-saas',
      features: [
        'GPT-4 & Claude 3.5 Integration',
        'CRM Integration (HubSpot, Salesforce)',
        'A/B Testing & Analytics Dashboard',
        'Compliance Guardrails & GDPR',
        'AI-Powered Subject Line Generation',
        'Sequence Testing & Optimization',
        'Real-time Performance Metrics',
        'Multi-language Support'
      ],
      pricing: '$299 - $1,299/month',
      benefits: [
        'Increase reply rates by 300%',
        'Save 15+ hours per week',
        'Improve conversion by 45%',
        'Reduce compliance risks',
        'Scale sales operations efficiently'
      ],
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      cta: 'Start Free Trial',
      ctaLink: '/contact',
      marketPrice: '$500 - $2,000/month',
      roi: '450% ROI in 6 months'
    },
    {
      id: 'support-ticket-copilot',
      title: 'AI Support Ticket Triage Copilot',
      description: 'Intelligent ticket management system that reduces response time by 80% and improves customer satisfaction',
      category: 'micro-saas',
      features: [
        'Auto-priority Classification',
        'Smart Routing & Deduplication',
        'Knowledge Base Integration',
        'Sentiment Analysis',
        'First-Response Macros',
        'Multi-platform Support (Zendesk, Jira)',
        'Performance Analytics',
        'Custom Workflow Automation'
      ],
      pricing: '$249 - $1,499/month',
      benefits: [
        'Reduce response time by 80%',
        'Improve customer satisfaction by 35%',
        'Handle 3x more tickets',
        'Reduce agent workload by 60%',
        '24/7 automated support'
      ],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      cta: 'Schedule Demo',
      ctaLink: '/contact',
      marketPrice: '$400 - $1,800/month',
      roi: '380% ROI in 4 months'
    },
    {
      id: 'invoice-ocr-reconciliation',
      title: 'Smart Invoice OCR + Reconciliation',
      description: 'AI-powered invoice processing that extracts data with 99.5% accuracy and automates reconciliation',
      category: 'micro-saas',
      features: [
        '99.5% OCR Accuracy Rate',
        'Multi-format Support (PDF, Image, Email)',
        'Vendor Anomaly Detection',
        'Tax & Currency Support',
        'Audit Trails & Compliance',
        'QuickBooks/Xero Integration',
        'Real-time Processing',
        'Custom Workflow Rules'
      ],
      pricing: '$199 - $999/month',
      benefits: [
        'Process invoices 10x faster',
        'Reduce manual errors by 95%',
        'Save 20+ hours per month',
        'Improve compliance',
        'Real-time financial insights'
      ],
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      cta: 'Get Started',
      ctaLink: '/contact',
      marketPrice: '$300 - $1,200/month',
      roi: '520% ROI in 3 months'
    },
    {
      id: 'seo-content-planner',
      title: 'AI SEO Content Planner & Optimizer',
      description: 'Comprehensive SEO platform that generates content strategies and optimizes for search engines',
      category: 'micro-saas',
      features: [
        'Keyword Clustering & Analysis',
        'Competitor Gap Analysis',
        'Content Brief Generation',
        'On-page Optimization',
        'Internal Linking Automation',
        'Performance Tracking',
        'CMS Integration',
        'AI Content Suggestions'
      ],
      pricing: '$99 - $599/month',
      benefits: [
        'Increase organic traffic by 200%',
        'Improve search rankings',
        'Generate 50+ content ideas weekly',
        'Save 25+ hours per week',
        'Data-driven content strategy'
      ],
      icon: Search,
      color: 'from-orange-500 to-red-500',
      featured: false,
      cta: 'Start Planning',
      ctaLink: '/contact',
      marketPrice: '$150 - $800/month',
      roi: '320% ROI in 8 months'
    },
    {
      id: 'customer-experience-analytics',
      title: 'AI Customer Experience Analytics Platform',
      description: 'Advanced analytics platform that provides deep insights into customer behavior and preferences',
      category: 'micro-saas',
      features: [
        'Behavioral Analysis Engine',
        'Predictive Customer Insights',
        'Personalization Engine',
        'ROI Tracking & Attribution',
        'Real-time Dashboards',
        'Multi-channel Integration',
        'Custom Segmentation',
        'Automated Reporting'
      ],
      pricing: '$349 - $1,799/month',
      benefits: [
        'Improve customer retention by 40%',
        'Increase conversion rates by 35%',
        'Reduce churn by 50%',
        'Personalize customer experiences',
        'Data-driven decision making'
      ],
      icon: BarChart3,
      color: 'from-teal-500 to-cyan-500',
      featured: false,
      cta: 'Analyze Now',
      ctaLink: '/contact',
      marketPrice: '$500 - $2,500/month',
      roi: '410% ROI in 6 months'
    },

    // AI SERVICES
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Elite',
      description: 'Next-generation AI-powered business intelligence platform with predictive analytics and automated insights',
      category: 'ai-services',
      features: [
        'GPT-4 & Claude 3.5 Integration',
        'Real-time Data Processing',
        'Predictive Analytics Engine',
        'Natural Language Queries',
        'Automated Report Generation',
        'Advanced Data Visualization',
        'Enterprise Security',
        'Multi-source Integration'
      ],
      pricing: '$2,500 - $12,000/month',
      benefits: [
        'Make decisions 10x faster',
        'Uncover hidden insights',
        'Predict market trends',
        'Automate reporting',
        'Improve operational efficiency'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      cta: 'Get Demo',
      ctaLink: '/contact',
      marketPrice: '$5,000 - $20,000/month',
      roi: '280% ROI in 12 months'
    },
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI Cybersecurity Elite Suite',
      description: 'Military-grade AI-powered cybersecurity platform with real-time threat detection and automated response',
      category: 'ai-services',
      features: [
        'AI Threat Detection',
        'Zero-Day Protection',
        'Automated Incident Response',
        'Compliance Monitoring',
        'Behavioral Analysis',
        'Threat Intelligence',
        '24/7 Monitoring',
        'Custom Security Policies'
      ],
      pricing: '$3,500 - $18,000/month',
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce response time by 90%',
        'Compliance automation',
        'Cost-effective security',
        'Peace of mind'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: true,
      cta: 'Secure Now',
      ctaLink: '/contact',
      marketPrice: '$8,000 - $25,000/month',
      roi: '350% ROI in 9 months'
    },
    {
      id: 'ai-autonomous-research',
      title: 'AI Autonomous Research Assistant',
      description: 'Intelligent research platform that automates data collection, analysis, and report generation',
      category: 'ai-services',
      features: [
        'Automated Data Collection',
        'Intelligent Analysis',
        'Report Generation',
        'Multi-source Integration',
        'Custom Research Templates',
        'Real-time Updates',
        'Collaboration Tools',
        'Export & Sharing'
      ],
      pricing: '$1,500 - $8,000/month',
      benefits: [
        'Reduce research time by 80%',
        'Improve accuracy by 95%',
        'Generate insights 24/7',
        'Scale research operations',
        'Cost-effective research'
      ],
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      cta: 'Start Researching',
      ctaLink: '/contact',
      marketPrice: '$3,000 - $12,000/month',
      roi: '420% ROI in 6 months'
    },

    // IT SERVICES
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Modernization',
      description: 'Comprehensive cloud migration services with modern architecture and cost optimization',
      category: 'it-services',
      features: [
        'AWS/Azure/GCP Migration',
        'Lift-and-Shift Strategy',
        'Containerization',
        'Serverless Architecture',
        'Cost Optimization',
        'Security Implementation',
        'Performance Monitoring',
        'Disaster Recovery'
      ],
      pricing: '$15,000 - $250,000',
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability',
        'Enhanced security',
        'Better performance',
        '24/7 availability'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      featured: false,
      cta: 'Migrate Now',
      ctaLink: '/contact',
      marketPrice: '$25,000 - $500,000',
      roi: '180% ROI in 18 months'
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation & CI/CD',
      description: 'End-to-end DevOps automation with continuous integration, deployment, and monitoring',
      category: 'it-services',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Monitoring & Alerting',
        'Security Scanning',
        'Performance Optimization',
        'Backup & Recovery',
        'Team Training'
      ],
      pricing: '$6,000 - $35,000',
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve team productivity',
        'Better code quality',
        'Faster time to market'
      ],
      icon: GitFork,
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      cta: 'Automate Now',
      ctaLink: '/contact',
      marketPrice: '$10,000 - $50,000',
      roi: '250% ROI in 12 months'
    },

    // QUANTUM COMPUTING
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Elite Platform',
      description: 'Access to cutting-edge quantum computing with AI-quantum hybrid systems for complex problem solving',
      category: 'quantum',
      features: [
        '1000+ Qubit Access',
        'AI-Quantum Hybrid Systems',
        'Quantum-Safe Cryptography',
        'Global Network Access',
        'Custom Algorithm Development',
        'Performance Optimization',
        'Expert Consultation',
        'Training & Support'
      ],
      pricing: '$8,500 - $45,000/month',
      benefits: [
        'Solve impossible problems',
        'Exponential speed improvements',
        'Future-proof cryptography',
        'Competitive advantage',
        'Research leadership'
      ],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      cta: 'Access Quantum',
      ctaLink: '/contact',
      marketPrice: '$15,000 - $100,000/month',
      roi: '500% ROI in 24 months'
    }
  ];

  // Calculate category counts
  categories.forEach(cat => {
    cat.count = allServices.filter(service => 
      cat.id === 'all' || service.category === cat.id
    ).length;
  });

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-20 text-white">
        {/* Header */}
        <motion.header 
          className="text-center max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Comprehensive Services Showcase 2029
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Discover our revolutionary micro-SaaS, AI services, and IT solutions designed to transform your business in 2029 and beyond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="inline-block w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
        </motion.header>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:border-cyan-400/40'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 ${
                service.featured ? 'ring-2 ring-cyan-400/50' : ''
              }`}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                {service.featured && (
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Service Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-300 mb-3 uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-300 mb-3 uppercase tracking-wide">Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-300">
                      <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & ROI */}
              <div className="mb-6 p-4 bg-white/5 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold text-cyan-300">{service.pricing}</span>
                  <span className="text-sm text-green-400 font-medium">{service.roi}</span>
                </div>
                <div className="text-xs text-slate-400">
                  Market Price: {service.marketPrice}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={service.ctaLink}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.section 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a personalized consultation and discover how our innovative services can drive your success in 2029
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2029;