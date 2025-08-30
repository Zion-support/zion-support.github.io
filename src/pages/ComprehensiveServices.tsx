import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, DollarSign, ExternalLink, Workflow, MessageSquare, Globe, TrendingUp, Sparkles, Bot, Shield, FileText, Users, BarChart3, Cloud, ShieldCheck, Star, Phone, Mail, MapPin, Zap, Rocket, Car, Dna, Robot, Eye, Atom, Microscope, City, RefreshCw, Globe2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { zionCuttingEdgeServices2029 } from '../../data/zion-2029-cutting-edge-services';
import { zionEmergingTechServices2029 } from '../../data/zion-2029-emerging-tech-services';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Cloud,
  Cpu,
  Database,
  Rocket,
  Target,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Workflow,
  Atom,
  MessageCircle,
  PenTool,
  Calendar,
  Heart,
  DollarSign,
  ShoppingBag,
  Settings,
  Globe,
  Award,
  TrendingUp
<<<<<<< HEAD
import { SEO } from '../components/SEO';
=======
} from 'lucide-react';
import SEO from '../components/SEO';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function ComprehensiveServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  // Combine all services
  const allServices = [...zionCuttingEdgeServices2029, ...zionEmergingTechServices2029];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return b.isPopular ? 1 : -1;
    }
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const microSaaS = [
    {
      title: 'SOC 2 Evidence Collector',
      desc: 'Automate evidence collection across AWS, GCP, Azure, Okta, and SaaS tools with time-stamped control mappings.',
      price: '$499–$1,499/mo',
      cta: 'https://ziontechgroup.com/services/soc2-compliance-automation',
      features: ['Prebuilt integrations (AWS, GCP, Azure, Okta, GitHub)', 'Automated screenshots and policy snapshots', 'Continuous control monitoring', 'Auditor export packages']
    },
    {
      title: 'Contract Risk Analyzer',
      desc: 'AI parses vendor/customer contracts, flags risky clauses, and suggests redlines aligned to your playbook.',
      price: '$299–$999/mo',
      cta: 'https://ziontechgroup.com',
      features: ['LLM clause classification', 'Deviation scoring vs. standards', 'One-click redline suggestions', 'Secure data handling']
    },
    {
      title: 'Churn Predictor for SaaS',
      desc: 'Connect Stripe, Mixpanel, and Intercom to predict churn and trigger save plays automatically.',
      price: '$199–$799/mo',
      cta: 'https://ziontechgroup.com',
      features: ['Cohort churn models', 'Alerts to Slack/Email', 'Playbooks and A/B experiments', 'No-code connectors']
    },
    {
      title: 'AI RFP Copilot',
      desc: 'Auto-assemble tailored RFP responses from your knowledge base with confidence citations.',
      price: '$249–$1,249/mo',
      cta: 'https://ziontechgroup.com',
      features: ['Semantic retrieval over KB', 'Tone/style controls', 'Compliance guardrails', 'Export to Word/PDF']
    },
    {
      title: 'FinOps Cost Anomaly Detector',
      desc: 'Continuously scans AWS, Azure, and GCP for cost spikes, identifies root causes, and opens auto-remediation tickets.',
      price: '$299–$1,299/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features: ['Real-time anomaly alerts', 'Service- and tag-level drilldowns', 'Forecast vs. actuals variance', 'Slack/Jira integrations']
    },
    {
<<<<<<< HEAD
      title: "Business Intelligence",
      description: "Data-driven insights",
      icon: BarChart3,
      services: [
        { name: "Data Analytics", path: "/services/data-analytics" },
        { name: "AI Data Analytics", path: "/services/ai-data-analytics" },
        { name: "Business Intelligence", path: "/services/ai-business-intelligence" }
      ]

=======
      title: 'Vendor Security Monitoring',
      desc: 'Continuously monitors vendor attack surface, breach news, and policy compliance for third-party risk management.',
      price: '$249–$999/mo',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features: ['Dark web/domain monitoring', 'Security questionnaire scoring', 'Policy mapping to SOC 2/ISO 27001', 'Executive risk reports']
    },
    {
      title: 'Data Quality & Lineage Monitor',
      desc: 'Automated data tests, schema drift detection, and lineage maps across Snowflake, BigQuery, and Redshift.',
      price: '$399–$1,499/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features: ['Column-level lineage', 'Freshness and completeness SLIs', 'dbt integration', 'Incident paging with ownership']
    },
    {
      title: 'API Monetization Hub',
      desc: 'Usage metering, subscription plans, rate limiting, and Stripe billing for your public/private APIs.',
      price: '$199–$899/mo + 1% usage',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features: ['Per-endpoint metering', 'Self-serve developer portal', 'JWT/OAuth2 auth', 'Stripe/Chargebee integrations']
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const itServices = [
    {
      title: 'Cloud Migration Factory',
      desc: 'Blueprint, migrate, and optimize workloads to AWS/Azure/GCP with cost governance.',
      price: 'Projects from $15,000',
      cta: 'https://ziontechgroup.com',
      features: ['Landing zone setup', 'App discovery and TCO', 'Infra-as-Code (Terraform)', 'FinOps and tagging policies']
    },
    {
      title: 'Managed Kubernetes (EKS/AKS/GKE)',
      desc: 'Secure, observable clusters with GitOps, autoscaling, and SLO dashboards.',
      price: '$3,500–$12,000/mo',
      cta: 'https://ziontechgroup.com',
      features: ['GitOps with ArgoCD', 'Service mesh (Istio/Linkerd)', 'Zero-trust policies', 'Golden paths for services']
    },
    {
      title: 'Zero Trust & IAM Hardening',
      desc: 'Design and implement zero trust network access and identity least-privilege.',
      price: 'Engagements from $12,000',
      cta: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
      features: ['Okta/Azure AD architecture', 'Device posture and SSO', 'Policy-as-Code (OPA)', 'Continuous verification']
    },
    {
      title: 'Observability & Resilience',
      desc: 'Unified logs, metrics, traces with SLOs and chaos engineering runs.',
      price: 'Projects from $9,000',
      cta: 'https://ziontechgroup.com',
      features: ['OpenTelemetry pipelines', 'SLO error budgets', 'Synthetic tests', 'Chaos experiments']
    },
    {
      title: 'Microsoft 365 Security Hardening',
      desc: 'Secure Microsoft 365 with baseline policies, Conditional Access, DLP, and identity governance.',
      price: 'Packages from $7,500',
      cta: 'https://ziontechgroup.com/contact',
      features: ['Defender baseline policies', 'Conditional Access hardening', 'DLP and sensitivity labels', 'Admin RBAC and audit']
    },
    {
      title: 'Modern Data Platform (Lakehouse)',
      desc: 'Design and implement a scalable lakehouse on Databricks or Snowflake with medallion architecture.',
      price: 'Projects from $25,000',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features: ['Ingestion with CDC', 'Bronze/Silver/Gold layers', 'Quality tests and lineage', 'Cost governance and caching']
    },
    {
      title: 'SRE as a Service',
      desc: 'Reliability engineering, SLOs, error budgets, incident response, and chaos drills for critical systems.',
      price: '$6,000–$20,000/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features: ['SLO design and dashboards', 'On-call runbooks', 'Game days and chaos testing', 'Postmortem program']
    },
    {
      title: 'Network Observability & Zero Trust',
      desc: 'eBPF-powered observability, microsegmentation, and ZTNA rollout across hybrid networks.',
      price: 'Engagements from $18,000',
      cta: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
      features: ['eBPF flow visibility', 'Microsegmentation policy design', 'ZTNA rollout', 'Continuous verification']
    }
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Comprehensive Services - Zion Tech Group"
        description="Explore our complete portfolio of innovative technology solutions including AI, Quantum Computing, Cloud DevOps, IoT, and Micro SaaS services."
        keywords="technology services, AI solutions, quantum computing, cloud services, IoT solutions, Zion Tech Group"
      />
=======
  const aiSolutions = [
    {
      title: 'Private RAG Platform',
      desc: 'Deploy secure Retrieval Augmented Generation with vector DBs and governance.',
      price: '$1,999–$7,999/mo',
      cta: 'https://ziontechgroup.com',
      features: ['Multi-tenant isolation', 'PII redaction and masking', 'Eval harness and guardrails', 'Vendor-agnostic LLMs']
    },
    {
      title: 'Vision AI Defect Detection',
      desc: 'Edge and cloud pipelines to detect manufacturing defects and reduce scrap.',
      price: 'POC from $8,000',
      cta: 'https://ziontechgroup.com',
      features: ['Edge inferencing', 'Active learning loops', 'MLOps with CI/CD', 'Audit trails and labeling']
    },
    {
      title: 'AI Sales Copilot',
      desc: 'Automate research, first-touch emails, call notes, and CRM hygiene with approvals.',
      price: '$149–$699/user/mo',
      cta: 'https://ziontechgroup.com',
      features: ['Account research digests', 'Sequencing with human-in-the-loop', 'Meeting summaries to CRM', 'Compliance logging']
    },
    {
      title: 'GenAI App Accelerator',
      desc: 'From ideation to production with secure foundations, evals, and cost controls.',
      price: 'Engagements from $20,000',
      cta: 'https://ziontechgroup.com',
      features: ['Prompt and function design', 'Eval suites and canaries', 'Safety filters and monitoring', 'Cost + latency SLO design']
    },
    {
      title: 'Contact Center QA & Insights',
      desc: 'Multilingual LLM scoring of calls/chats with auto-coaching, compliance checks, and CSAT prediction.',
      price: '$1,499–$4,999/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features: ['Auto QA rubrics', 'Redaction and PII controls', 'Supervisor dashboards', 'CRM sync (Salesforce/HubSpot)']
    },
    {
      title: 'Intelligent Document Processing',
      desc: 'High-accuracy extraction and validation for invoices, claims, KYC, and logistics documents.',
      price: '$0.02–$0.08/page + platform fee',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features: ['Few-shot templates', 'Human-in-the-loop validation', 'Field-level confidence', 'Export to ERP/DB']
    },
    {
      title: 'AI Code & Security Reviewer',
      desc: 'Static + LLM hybrid reviews for security, performance, and style with auto-fix suggestions.',
      price: '$299–$999/repo/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features: ['OWASP/CWE checks', 'Performance anti-patterns', 'Org-wide policy gates', 'PR comments and autofix']
    },
    {
      title: 'Managed MLOps Platform',
      desc: 'End-to-end ML lifecycle with experiment tracking, model registry, deployment, and evaluations.',
      price: '$2,499–$9,999/mo',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features: ['Feature store and lineage', 'Canary and shadow deploys', 'Live evals and guardrails', 'Cost and latency SLOs']
    }
  ];
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  const linkItem = (href: string, label = 'Learn more') => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-zion-cyan hover:underline">
      <span>{label}</span>
      <ExternalLink className="ml-2 h-4 w-4" />
    </a>
  );

  const Section: React.FC<{ icon: React.ReactNode; title: string; description: string; items: { title: string; desc: string; price: string; cta: string; features: string[]; }[]; gradient: string; }>
    = ({ icon, title, description, items, gradient }) => (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${gradient} text-white`}>
          <div className="flex items-center mb-6">
            <div className="mr-3">{icon}</div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          </div>
        )}
        {service.isNew && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            New
          </div>
        )}
      </div>
      
      <p className="text-gray-300 mb-2 font-medium">{service.tagline}</p>
      <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
        <span className="text-gray-400">{service.period}</span>
        <p className="text-sm text-gray-500 mt-1">{service.marketPrice}</p>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? "text-yellow-400" : "text-gray-600"}`} />
            ))}
          </div>
          <span className="text-sm text-gray-400 ml-2">({service.reviews} reviews)</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
        <div className="grid grid-cols-1 gap-1">
          {service.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
        <div className="grid grid-cols-1 gap-1">
          {service.benefits.slice(0, 3).map((benefit, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
              {benefit}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 p-3 bg-slate-700/30 rounded-lg">
        <div className="text-xs text-gray-400 mb-1">Market Size: {service.marketSize}</div>
        <div className="text-xs text-gray-400 mb-1">Growth Rate: {service.growthRate}</div>
        <div className="text-xs text-gray-400">ROI: {service.roi}</div>
      </div>

      <div className="flex gap-2">
        <Link
          to={service.link}
          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
        <a
          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
          className="inline-flex items-center justify-center px-3 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          title="Contact Sales"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="Comprehensive Services - Zion Tech Group"
        description="Micro SaaS, IT services, and AI solutions with clear pricing, links, and rapid delivery."
        keywords="micro saas, it services, ai solutions, soc2 automation, kubernetes, rag platform"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center max-w-4xl mx-auto"

=======
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Cutting-Edge Technology Solutions
            </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <br />
              <span className="text-white">Comprehensive Services</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              From artificial intelligence to quantum computing, discover our complete portfolio
              of innovative solutions designed to transform your business.
            </p>
=======
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Leading the future with revolutionary AI, quantum computing, space technology, and emerging tech solutions. 
              Transform your business with our cutting-edge micro SAAS, IT infrastructure, and AI innovation services.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="tel:+13024640950" className="inline-flex items-center bg-zion-cyan text-black font-semibold px-4 py-2 rounded-md">
                <Phone className="h-4 w-4 mr-2" /> Call Us
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center border border-white/20 px-4 py-2 rounded-md">
                <Mail className="h-4 w-4 mr-2" /> Email
              </a>
              <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-white/20 px-4 py-2 rounded-md">
                <MapPin className="h-4 w-4 mr-2" /> Visit
              </a>
            </div>
          </div>
        </header>

        {/* Sections */}
        <Section
          icon={<Sparkles className="h-6 w-6" />}
          title="Micro SaaS Products"
          description="Subscription software for security, legal, revenue, and operations with fast time-to-value."
          items={microSaaS}
          gradient="from-violet-900/60 to-indigo-900/40"
        />

        <Section
          icon={<Cloud className="h-6 w-6" />}
          title="IT Services"
          description="Cloud, platform, and security engagements by seasoned architects and SREs."
          items={itServices}
          gradient="from-sky-900/60 to-teal-900/40"
        />

        <Section
          icon={<Cpu className="h-6 w-6" />}
          title="AI Solutions"
          description="Applied AI with governance, privacy, and business outcomes at the core."
          items={aiSolutions}
          gradient="from-fuchsia-900/60 to-rose-900/40"
        />

        {/* Contact CTA */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Talk to an expert</h2>
              <p className="text-white/80 mb-6">We will scope your needs and share a clear proposal with milestones and pricing.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="tel:+13024640950" className="flex items-center p-4 rounded-lg bg-black/40 border border-white/10">
                  <Phone className="h-5 w-5 text-zion-cyan mr-3" /> {contact.phone}
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center p-4 rounded-lg bg-black/40 border border-white/10">
                  <Mail className="h-5 w-5 text-zion-cyan mr-3" /> {contact.email}
                </a>
                <div className="flex items-center p-4 rounded-lg bg-black/40 border border-white/10">
                  <MapPin className="h-5 w-5 text-zion-cyan mr-3" /> {contact.address}
                </div>
              </div>
            </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"

                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"

                Request Quote
              </Link>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Our Website
              </a>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"

                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-cyan-400 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
=======
      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                <option value="popular" className="bg-slate-800 text-white">Most Popular</option>
                <option value="rating" className="bg-slate-800 text-white">Highest Rated</option>
                <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
                <option value="newest" className="bg-slate-800 text-white">Newest</option>
              </select>
            </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Service Categories</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet
              every aspect of your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${
                  category.featured ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-blue-500/5' : 'border-slate-700/50'
                }`}

                {category.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-semibold">Featured Category</span>
                  </div>
                )}

                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-slate-300 mb-6">{category.description}</p>

                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link
                        to={service.path}
                        className="flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors"

                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/services#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"

                  View All {category.title}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
=======
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {filteredServices.length} Revolutionary Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology solutions designed to transform industries and drive innovation
            </p>
          </motion.div>
          
          {sortedServices.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {sortedServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or browse all categories</p>
            </div>
          )}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive technology services can revolutionize
              your operations and drive innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"

                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"

                Get Custom Quote
              </Link>
=======
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-cyan-400">Business</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cutting-edge services can help you achieve your business goals and drive innovation. 
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default ComprehensiveServices;}}
=======
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
