<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Brain, 
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
  Clock
 } from 'lucide-react.ts';

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

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
const Services: React.FC = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'digital', name: 'Digital Transformation', icon: Zap },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket }
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
    },
    {
      title: "HR Screening Assistant",
      description: "Summarizes resumes, auto-screens candidates, and schedules interviews.",
      features: [
        "ATS integration",
        "Bias-mitigation controls",
        "Compliance exports",
        "Interview scheduling"
      ],
      pricing: "$149 - $599/month",
      cta: "Talk to sales",
      ctaLink: "/contact",
      icon: Users,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "AI Project Management",
      description: "Intelligent project tracking, resource allocation, and risk prediction.",
      features: [
        "AI-powered scheduling",
        "Risk prediction",
        "Resource optimization",
        "Progress tracking"
      ],
      pricing: "$199 - $699/month",
      cta: "Start free trial",
      ctaLink: "/contact",
      icon: Rocket,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const innovativeAIServices = [
    {
      title: "AI Autonomous Research Assistant",
      description: "AI-powered autonomous research that discovers, analyzes, and synthesizes information across multiple sources.",
      features: [
        "Autonomous Research",
        "Multi-Source Analysis",
        "Intelligent Summarization",
        "Real-time Updates"
      ],
      pricing: "$299 - $1,999/month",
      cta: "Learn More",
      ctaLink: "/services/ai-autonomous-research-assistant",
      icon: Brain,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Transform your supply chain with AI that predicts demand, optimizes inventory, and reduces costs.",
      features: [
        "AI-Powered Forecasting",
        "Real-time Visibility",
        "Intelligent Routing",
        "Risk Management"
      ],
      pricing: "$499 - $2,999/month",
      cta: "Learn More",
      ctaLink: "/services/ai-supply-chain-optimization",
      icon: Network,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "AI Content Marketing Suite",
      description: "AI-powered content creation, optimization, and distribution for maximum engagement.",
      features: [
        "AI Content Generation",
        "Audience Intelligence",
        "SEO Optimization",
        "Performance Analytics"
      ],
      pricing: "$199 - $1,499/month",
      cta: "Learn More",
      ctaLink: "/services/ai-content-marketing-suite",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Workflow Orchestrator",
      description: "Intelligent workflow automation that learns from your processes and optimizes them continuously.",
      features: [
        "Process Learning",
        "Automated Optimization",
        "Integration Hub",
        "Performance Analytics"
      ],
      pricing: "$399 - $1,999/month",
      cta: "Learn More",
      ctaLink: "/services/ai-workflow-orchestrator",
      icon: GitFork,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI Customer Experience Analytics",
      description: "Deep insights into customer behavior with predictive analytics and personalized recommendations.",
      features: [
        "Behavioral Analysis",
        "Predictive Insights",
        "Personalization Engine",
        "ROI Tracking"
      ],
      pricing: "$349 - $1,799/month",
      cta: "Learn More",
      ctaLink: "/services/ai-customer-experience-analytics",
      icon: BarChart3,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "AI Financial Risk Management",
      description: "Intelligent financial risk assessment with AI-driven predictive analytics.",
      features: [
        "Risk Assessment",
        "Predictive Analytics",
        "Compliance Monitoring",
        "Real-time Alerts"
      ],
      pricing: "$599 - $2,999/month",
      cta: "Learn More",
      ctaLink: "/services/ai-financial-risk-management",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? coreServices: anycoreServices.filter(service  => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-20 text-white">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services & Micro SaaS
          </h1>
          <p className="text-base md:text-xl text-slate-300">
            Practical, production-grade solutions with transparent pricing and modern stacks.
          </p>
        </header>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">Enterprise Services</h2>
          <div className="grid sm: anygrid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s)  => (
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
          <div className="grid sm: anygrid-cols-2 lg:grid-cols-3 gap-6">
            {microSaaS.map((s)  => (
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

        <section className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300">Have a project in mind? Get a tailored proposal.</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="tel:+13024640950" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Email kleber@ziontechgroup.com</a>
              <a href="/request-quote" className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Request a Quote</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

=======
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Cutting-edge technology solutions designed to transform your business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">AI Development</h3>
            <p className="text-gray-300 mb-6">Custom AI models and machine learning solutions.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$5,000 - $50,000</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
            <p className="text-gray-300 mb-6">Seamless cloud migration and scalable architecture.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$10,000 - $100,000</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-6">Comprehensive security solutions and assessments.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$3,000 - $25,000</p>
          </div>
        </div>
        {/* New: Micro-SaaS Solutions */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4">Micro-SaaS Solutions</h2>
          <p className="text-gray-300 mb-10 max-w-4xl">Fast-to-deploy, subscription-based tools that solve specific business problems with clear ROI.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">AI Sales Email Optimizer</h3>
              <p className="text-gray-300 mb-4">Auto-drafts and A/B tests emails based on CRM context to raise reply rates.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>CRM integration (HubSpot, Salesforce)</li>
                <li>Sequence testing and analytics</li>
                <li>Compliance guardrails</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$299 - $799/month</p>
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Get a demo →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Support Ticket Triage Copilot</h3>
              <p className="text-gray-300 mb-4">Classifies, deduplicates, and suggests resolutions; integrates with Zendesk/Jira.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Auto-priority and routing</li>
                <li>Knowledge base suggestions</li>
                <li>First-response macros</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$249 - $999/month</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">See solution →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Invoice OCR + Reconciliation</h3>
              <p className="text-gray-300 mb-4">Extracts line-items and auto-matches to POs; exports to QuickBooks/Xero.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Vendor anomaly detection</li>
                <li>Tax and currency support</li>
                <li>Audit trails</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$199 - $799/month</p>
              <a href="https://ziontechgroup.com/services" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">SEO Content Planner</h3>
              <p className="text-gray-300 mb-4">Keyword clustering, brief generation, and on-page optimization recommendations.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Competitor gap analysis</li>
                <li>Automatic internal linking</li>
                <li>Publish to CMS</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$99 - $399/month</p>
              <a href="https://ziontechgroup.com/pricing" className="text-cyan-300 hover:text-cyan-200 font-semibold">Pricing →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">HR Screening Assistant</h3>
              <p className="text-gray-300 mb-4">Summarizes resumes, auto-screens candidates, and schedules interviews.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>ATS integration</li>
                <li>Bias-mitigation controls</li>
                <li>Compliance exports</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$149 - $599/month</p>
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Talk to sales →</a>
            </div>
          </div>
        </div>

        {/* New: AI Services & Solutions */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4">AI Services & Solutions</h2>
          <p className="text-gray-300 mb-10 max-w-4xl">From strategy to production MLOps, we deliver outcomes, not experiments.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">AI Strategy & Roadmapping</h3>
              <p className="text-gray-300 mb-4">Use-case discovery, ROI modeling, and architecture blueprints.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$8,000 - $35,000</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Explore engagements →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Custom LLM Apps & Integrations</h3>
              <p className="text-gray-300 mb-4">Build copilots, RAG search, and workflow agents integrated with your stack.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$15,000 - $150,000</p>
              <a href="https://ziontechgroup.com/research-development" className="text-cyan-300 hover:text-cyan-200 font-semibold">See R&D →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Computer Vision & OCR</h3>
              <p className="text-gray-300 mb-4">Detection, tracking, and document understanding for real-world operations.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$20,000 - $120,000</p>
              <a href="https://ziontechgroup.com/case-studies" className="text-cyan-300 hover:text-cyan-200 font-semibold">View case studies →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">MLOps & Platform Engineering</h3>
              <p className="text-gray-300 mb-4">Feature stores, CI/CD for models, observability, and governance.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$25,000 - $180,000</p>
              <a href="https://ziontechgroup.com/partners" className="text-cyan-300 hover:text-cyan-200 font-semibold">Our partners →</a>
            </div>
          </div>
        </div>

        {/* New: IT Services & Modernization */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4">IT Services & Modernization</h2>
          <p className="text-gray-300 mb-10 max-w-4xl">End-to-end services to secure, scale, and streamline your technology footprint.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Cloud Cost Optimization</h3>
              <p className="text-gray-300 mb-4">FinOps audits, rightsizing, reserved instances, and tagging strategies.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$6,000 - $45,000</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Zero Trust Security</h3>
              <p className="text-gray-300 mb-4">Identity-first controls, microsegmentation, and continuous verification.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$12,000 - $95,000</p>
              <a href="https://ziontechgroup.com/advanced-cybersecurity" className="text-cyan-300 hover:text-cyan-200 font-semibold">Security services →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Data Platform Modernization</h3>
              <p className="text-gray-300 mb-4">Lakehouse design, ETL pipelines, and real-time analytics platforms.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$18,000 - $140,000</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Get details →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Managed IT & Onsite Support</h3>
              <p className="text-gray-300 mb-4">SLAs, patching, endpoint management, and onsite troubleshooting.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$2,000 - $25,000/month</p>
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Contact us →</a>
            </div>
          </div>
        </div>

        {/* CTA and Contact */}
        <div className="mt-24 text-left">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Ready to start?</h3>
            <p className="text-gray-300 mb-6 max-w-3xl">Talk with our experts to scope a pilot or request a tailored quote. We respond within 24 hours.</p>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <a href="https://ziontechgroup.com/contact" className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 font-semibold">Book a consultation</a>
              <a href="tel:+13024640950" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Address: 364 E Main St STE 1008, Middletown, DE 19709 • Website: ziontechgroup.com
            </div>
          </div>
        </div>
        <div className="mt-16">
          <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            📞 Call +1 (302) 464-0950
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
