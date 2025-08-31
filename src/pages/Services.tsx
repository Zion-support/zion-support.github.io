import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  Atom,
  Car,
  Building2,
  PenTool,
  MessageSquare as MessageSquareIcon
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES_2025 } from '../data/comprehensiveServices2025';

type Service = {
  title: string;
  description: string;
  priceRange: string;
  learnMoreUrl?: string;
  ctaUrl?: string;
};

const featuredServices: Service[] = [
  {
    title: 'AI Development & MLOps',
    description: 'Custom LLMs, RAG, fine-tuning, and MLOps pipelines on AWS/Azure/GCP.',
    priceRange: '$8,000 - $120,000',
    learnMoreUrl: 'https://learn.microsoft.com/azure/machine-learning/',
  },
  {
    title: 'Cloud Migration & Modernization',
    description: 'Lift-and-shift, containerization, and serverless refactors with IaC.',
    priceRange: '$15,000 - $250,000',
    learnMoreUrl: 'https://aws.amazon.com/migration-hub/',
  },
  {
    title: 'Zero-Trust Cybersecurity',
    description: 'ZTA architecture, SOC hardening, SIEM, EDR/XDR integrations.',
    priceRange: '$5,000 - $90,000',
    learnMoreUrl: 'https://cloud.google.com/security-command-center',
  },
  {
    title: 'Data Engineering & Analytics',
    description: 'ELT/ETL, data lakes/warehouses, BI dashboards, KPI design.',
    priceRange: '$7,500 - $140,000',
    learnMoreUrl: 'https://cloud.google.com/bigquery/docs',
  },
  {
    title: 'IoT & Edge Platforms',
    description: 'Secure device onboarding, telemetry pipelines, OTA, and twin modeling.',
    priceRange: '$12,000 - $180,000',
    learnMoreUrl: 'https://learn.microsoft.com/azure/iot-hub/',
  },
  {
    title: 'Quantum Readiness Advisory',
    description: 'PQ crypto readiness, QC PoCs, and quantum-inspired optimizations.',
    priceRange: '$6,000 - $60,000',
    learnMoreUrl: 'https://quantum.microsoft.com/azure-quantum',
  },
];

const microSaaS: Service[] = [
  {
    title: 'LeadGen AI Microsite',
    description: 'SEO + AI chat, CRM integration, and analytics for B2B lead capture.',
    priceRange: '$99 - $499/mo',
    learnMoreUrl: 'https://vercel.com/ai',
  },
  {
    title: 'Agentic Support Bot',
    description: 'Retrieval-augmented agent with help center and Slack/Teams connectors.',
    priceRange: '$149 - $999/mo',
    learnMoreUrl: 'https://platform.openai.com/',
  },
  {
    title: 'Automated Reporting Studio',
    description: 'Auto-ingest spreadsheets/CSV, generate dashboards and scheduled PDFs.',
    priceRange: '$79 - $399/mo',
    learnMoreUrl: 'https://www.metabase.com/',
  },
  {
    title: 'Security Posture Scanner',
    description: 'Continuous cloud config checks and CIS benchmarks with alerts.',
    priceRange: '$199 - $1,499/mo',
    learnMoreUrl: 'https://www.aquasec.com/cloud-security/',
  },
  {
    title: 'Image/Doc OCR Pipeline',
    description: 'OCR + LLM extraction for invoices, IDs, and contracts at scale.',
    priceRange: '$0.50 - $2.00 / 1k tokens + hosting',
    learnMoreUrl: 'https://platform.openai.com/docs/guides/vision',
  },
  {
    title: 'Synthetic Data Generator',
    description: 'Privacy-safe tabular and text data generation to augment small datasets.',
    priceRange: '$299 - $1,999/mo',
    learnMoreUrl: 'https://huggingface.co/',
  },
];


const Services: React.FC = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'digital', name: 'Digital Transformation', icon: Zap },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'smart-city', name: 'Smart City', icon: Building2 },
    { id: 'autonomous', name: 'Autonomous Systems', icon: Car }
  ];

  const coreServices = [
    {
      category: 'ai',
      icon: Brain,
      title: "AI Business Intelligence Elite",
      description: "Advanced AI-powered analytics platform with real-time insights, predictive analytics, and automated reporting.",
      features: ["GPT-4 & Claude 3.5 Integration", "Real-time BI", "Predictive Analytics", "Enterprise Security"],
      pricing: "$2,500 - $12,000/month",
      color: "from-purple-500 to-pink-500",
      featured: true,
      href: "/services/ai-business-intelligence-elite"
    },
    {
      category: 'security',
      icon: Shield,
      title: "AI Cybersecurity Elite",
      description: "Military-grade AI-powered cybersecurity platform with real-time threat detection and automated response.",
      features: ["AI Threat Detection", "Zero-Day Protection", "Automated Response", "Compliance Ready"],
      pricing: "$3,500 - $18,000/month",
      color: "from-red-500 to-orange-500",
      featured: true,
      href: "/services/ai-cybersecurity-elite"
    },
    {
      category: 'quantum',
      icon: Atom,
      title: "Quantum Computing Elite",
      description: "Access to cutting-edge quantum computing with AI-quantum hybrid systems for complex problem solving.",
      features: ["1000+ Qubit Access", "AI-Quantum Hybrid", "Quantum-Safe Crypto", "Global Network"],
      pricing: "$8,500 - $45,000/month",
      color: "from-blue-500 to-cyan-500",
      featured: true,
      href: "/services/quantum-computing-elite"
    },
    {
      category: 'micro-saas',
      icon: Rocket,
      title: "Micro-SaaS Platform Elite",
      description: "Complete platform to launch and scale your micro-SaaS business with proven templates and automation.",
      features: ["Rapid Launch", "Built-in Payments", "AI Automation", "Multi-tenant Architecture"],
      pricing: "$2,500 - $12,000/month",
      color: "from-green-500 to-emerald-500",
      featured: true,
      href: "/services/micro-saas-platform-elite"
    },
    {
      category: 'ai',
      icon: FileText,
      title: "AI Intelligent Contract Management Platform",
      description: "Revolutionize your contract management with AI-powered analysis, risk assessment, and automation.",
      features: ["AI Contract Analysis", "Risk Assessment", "Compliance Monitoring", "Automated Workflows"],
      pricing: "$299 - $1,999/month",
      color: "from-blue-500 to-purple-500",
      featured: true,
      href: "/services/ai-intelligent-contract-management-platform"
    },
    {
      category: 'security',
      icon: Shield,
      title: "AI Financial Fraud Detection Platform",
      description: "Protect your business with the most advanced AI-powered fraud detection system.",
      features: ["Real-time Detection", "90% Accuracy", "Multi-channel Monitoring", "Automated Response"],
      pricing: "$499 - $3,999/month",
      color: "from-red-500 to-orange-500",
      featured: true,
      href: "/services/ai-financial-fraud-detection-platform"
    },
    {
      category: 'ai',
      icon: Truck,
      title: "AI Supply Chain Optimization Platform",
      description: "Transform your supply chain with AI-powered optimization and real-time analytics.",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Cost Reduction"],
      pricing: "$399 - $2,499/month",
      color: "from-green-500 to-blue-500",
      featured: true,
      href: "/services/ai-supply-chain-optimization-platform"
    },
    {
      category: 'ai',
      icon: Heart,
      title: "AI Healthcare Analytics Platform",
      description: "Transform healthcare delivery with AI-powered analytics and predictive insights.",
      features: ["Patient Risk Assessment", "Clinical Decision Support", "Population Health", "Cost Optimization"],
      pricing: "$599 - $3,999/month",
      color: "from-blue-500 to-green-500",
      featured: true,
      href: "/services/ai-healthcare-analytics-platform"
    },
    {
      category: 'ai',
      icon: Bot,
      title: "AI Autonomous Business Operations Platform",
      description: "Transform your business with fully autonomous AI operations and intelligent automation.",
      features: ["Process Automation", "Intelligent Decision Making", "24/7 Operations", "Cost Reduction"],
      pricing: "$799 - $4,999/month",
      color: "from-purple-500 to-blue-500",
      featured: true,
      href: "/services/ai-autonomous-business-operations-platform"
    },
    {
      category: 'ai',
      icon: Brain,
      title: "AI Development & Strategy",
      description: "Custom AI models, machine learning solutions, and strategic AI roadmapping for your business.",
      features: ["Custom AI Models", "ML Strategy", "Data Analytics", "AI Integration"],
      pricing: "$5,000 - $50,000",
      color: "from-purple-500 to-pink-500"
    },
    {
      category: 'cloud',
      icon: Cloud,
      title: "Cloud Migration & Architecture",
      description: "Seamless cloud migration, scalable architecture, and cost optimization strategies.",
      features: ["AWS/Azure/GCP", "Cost Optimization", "Scalability", "Security"],
      pricing: "$10,000 - $100,000",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: 'security',
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessments, threat detection, and compliance frameworks.",
      features: ["Security Audits", "Threat Detection", "Compliance", "Incident Response"],
      pricing: "$3,000 - $25,000",
      color: "from-red-500 to-orange-500"
    },
    {
      category: 'digital',
      icon: Zap,
      title: "Digital Transformation",
      description: "Strategic consulting and implementation to modernize your technology stack.",
      features: ["Process Optimization", "Technology Stack", "Change Management", "ROI Analysis"],
      pricing: "$15,000 - $75,000",
      color: "from-yellow-500 to-orange-500"
    },
    {
      category: 'ai',
      icon: Users,
      title: "AI-Powered Analytics",
      description: "Advanced business intelligence and predictive analytics solutions.",
      features: ["Predictive Models", "Real-time Insights", "Custom Dashboards", "Data Integration"],
      pricing: "$8,000 - $40,000",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: 'cloud',
      icon: Server,
      title: "DevOps Automation",
      description: "CI/CD pipelines, infrastructure as code, and automated deployment solutions.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Automation"],
      pricing: "$6,000 - $35,000",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // New innovative services
  const innovativeServices = [
    {
      category: 'autonomous',
      icon: Car,
      title: "AI Autonomous Vehicle Management Platform",
      description: "Revolutionary AI platform for managing autonomous vehicle fleets with unprecedented safety and efficiency.",
      features: ["AI-Powered Decision Making", "Military-Grade Security", "360° Environmental Awareness", "Global Fleet Management"],
      pricing: "$15,000 - $120,000/month",
      color: "from-blue-500 to-cyan-500",
      featured: true,
      href: "/services/ai-autonomous-vehicle-management-platform"
    },
    {
      category: 'smart-city',
      icon: Building2,
      title: "AI Smart City Infrastructure Management",
      description: "Transform cities into smart, sustainable environments with AI-powered infrastructure management.",
      features: ["AI Traffic Management", "Smart Energy Grid", "Environmental Monitoring", "Public Safety"],
      pricing: "$25,000 - $200,000/month",
      color: "from-green-500 to-emerald-500",
      featured: true,
      href: "/services/ai-smart-city-infrastructure-management"
    },
    {
      category: 'quantum',
      icon: Atom,
      title: "AI Quantum Financial Trading Platform",
      description: "World's first AI-powered quantum financial platform for unprecedented trading performance.",
      features: ["1000+ Qubit Access", "AI Market Predictions", "Quantum-Safe Security", "Global Market Access"],
      pricing: "$5,000 - $100,000/month",
      color: "from-purple-500 to-pink-500",
      featured: true,
      href: "/services/ai-quantum-financial-trading-platform"
    },
    {
      category: 'ai',
      icon: PenTool,
      title: "AI Content Marketing Suite",
      description: "Generate 10x more content in 1/10th the time with AI-powered content creation and optimization.",
      features: ["AI Content Generation", "SEO Optimization", "Multi-Channel Support", "Performance Analytics"],
      pricing: "$99 - $999/month",
      color: "from-orange-500 to-red-500",
      featured: true,
      href: "/services/ai-content-marketing-suite"
    },
    {
      category: 'ai',
      icon: MessageSquareIcon,
      title: "AI Customer Support Automation",
      description: "24/7 AI-powered customer support that reduces costs by 70% while improving satisfaction by 40%.",
      features: ["AI Chatbots", "Multi-Channel Support", "Sentiment Analysis", "Knowledge Base Integration"],
      pricing: "$199 - $1,999/month",
      color: "from-indigo-500 to-purple-500",
      featured: true,
      href: "/services/ai-customer-support-automation"
    }
  ];

  const microSaasServices = [
    {
      title: "AI Sales Email Optimizer",
      description: "Auto-drafts and A/B tests emails based on CRM context to raise reply rates.",
      features: [
        "CRM integration (HubSpot, Salesforce)",
        "Sequence testing and analytics",
        "Compliance guardrails",
        "AI-powered subject lines"
      ],
      pricing: "$299 - $799/month",
      cta: "Get a demo",
      ctaLink: "/contact",
      icon: Mail,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Support Ticket Triage Copilot",
      description: "Classifies, deduplicates, and suggests resolutions; integrates with Zendesk/Jira.",
      features: [
        "Auto-priority and routing",
        "Knowledge base suggestions",
        "First-response macros",
        "Sentiment analysis"
      ],
      pricing: "$249 - $999/month",
      cta: "See solution",
      ctaLink: "/services",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Invoice OCR + Reconciliation",
      description: "Extracts line-items and auto-matches to POs; exports to QuickBooks/Xero.",
      features: [
        "Vendor anomaly detection",
        "Tax and currency support",
        "Audit trails",
        "Multi-format support"
      ],
      pricing: "$199 - $799/month",
      cta: "Learn more",
      ctaLink: "/services",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "SEO Content Planner",
      description: "Keyword clustering, brief generation, and on-page optimization recommendations.",
      features: [
        "Competitor gap analysis",
        "Automatic internal linking",
        "Publish to CMS",
        "Performance tracking"
      ],
      pricing: "$99 - $399/month",
      cta: "Pricing",
      ctaLink: "/pricing",
      icon: Search,
      color: "from-orange-500 to-red-500"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? coreServices : coreServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-20 text-white">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services & Micro SaaS
          </h1>
          <p className="text-base md:text-xl text-slate-300 mb-6">
            Practical, production-grade solutions with transparent pricing and modern stacks.
          </p>
          
          {/* Company Contact Information */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Zion Tech Group - Your Technology Partner</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Contact Information</h3>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-green-400 mr-2" />
                    <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-blue-400 mr-2" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-red-400 mr-2" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 text-purple-400 mr-2" />
                    <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">https://ziontechgroup.com</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Why Choose Zion Tech Group?</h3>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>Cutting-edge AI & Quantum Technology</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>Proven ROI & Fast Implementation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>24/7 Expert Support & Maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>Enterprise-grade Security & Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">Enterprise Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">{s.priceRange}</span>
                  {s.learnMoreUrl && (
                    <a className="text-sm text-cyan-400 hover:text-cyan-300 underline" href={s.learnMoreUrl} target="_blank" rel="noreferrer">
                      Reference
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Micro SaaS Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaaS.map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">{s.priceRange}</span>
                  {s.learnMoreUrl && (
                    <a className="text-sm text-purple-300 hover:text-purple-200 underline" href={s.learnMoreUrl} target="_blank" rel="noreferrer">
                      Learn more
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Services Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-green-300 mb-6">Core Services</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {coreServices.map((service) => (
              <motion.div
                key={service.title}
                className={`bg-gradient-to-br ${service.color} border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.pricing}</span>
                  {service.href && (
                    <a 
                      href={service.href}
                      className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Micro SaaS Services Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-orange-300 mb-6">Micro SaaS Solutions</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {microSaasServices.map((service) => (
              <motion.div
                key={service.title}
                className={`bg-gradient-to-br ${service.color} border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.pricing}</span>
                  <a 
                    href={service.ctaLink}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {service.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Innovative AI Services Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-pink-300 mb-6">Innovative AI Services</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {innovativeAIServices.map((service) => (
              <motion.div
                key={service.title}
                className={`bg-gradient-to-br ${service.color} border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.pricing}</span>
                  <a 
                    href={service.ctaLink}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {service.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comprehensive Services Showcase */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-6">Comprehensive Service Solutions</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {COMPREHENSIVE_SERVICES_2025.map((service) => (
              <motion.div
                key={service.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:border-yellow-400/40"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-yellow-400 font-semibold text-lg">
                      {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                    </span>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center text-slate-300 text-sm">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    <p>ROI: {service.roi}</p>
                    <p>Delivery: {service.estimatedDelivery}</p>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                    >
                      Contact Sales
                    </a>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300">Have a project in mind? Get a tailored proposal.</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="tel:+13024640950" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Email kleber@ziontechgroup.com</a>
              <a href="/request-quote" className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Request a Quote</a>
        </section>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of AI-powered solutions, cloud services, cybersecurity, 
              and innovative micro-SaaS platforms designed to transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.filter(service => service.featured).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-2xl font-bold text-blue-400 mb-6">{service.pricing}</div>
                
                {service.href && (
                  <a
                    href={service.href}
                    className="inline-flex items-center space-x-2 w-full justify-center py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 group-hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our complete portfolio of technology solutions and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="text-lg font-bold text-blue-400 mb-4">{service.pricing}</div>
                
                {service.href && (
                  <a
                    href={service.href}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lightweight, focused applications that solve specific business problems with AI-powered automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-lg font-bold text-blue-400 mb-4">{service.pricing}</div>
                
                <a
                  href={service.ctaLink}
                  className="inline-flex items-center justify-center w-full py-2 px-4 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  {service.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss how our innovative solutions can drive your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

