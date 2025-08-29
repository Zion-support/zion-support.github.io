import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Calendar, PenTool, BarChart3, Users, DollarSign, ExternalLink, Shield, FileSearch, Bug, Globe, CreditCard, ShoppingCart, Bell, Languages, Workflow, Database, FileText, Cloud, Server, Cpu, Lock, Heart, Leaf, Rocket, Building, Network, Zap, TrendingUp, Video, Wrench } from 'lucide-react';

const MicroSaaS: React.FC = () => {
  const products = [
    {
      icon: Mail,
      name: 'AI Email Responder',
      desc: 'Auto-drafts replies, classifies intents, and flags priority emails across Gmail/365 with human review.',
      pricing: 'From $49/mo per inbox',
      href: 'https://ziontechgroup.com/micro-saas'
    },
    {
      icon: MessageSquare,
      name: 'Smart Helpdesk & Chat',
      desc: 'Tickets, knowledge base, and AI chat trained on your docs. Integrates with Slack/Teams.',
      pricing: 'From $99/mo',
      href: 'https://ziontechgroup.com/micro-saas'
    },
    {
      icon: Calendar,
      name: 'Meeting Copilot',
      desc: 'Auto-notes, action items, and summaries for Zoom, Meet, and Teams with CRM sync.',
      pricing: 'From $39/user/mo',
      href: 'https://ziontechgroup.com/micro-saas'
    },
    {
      icon: PenTool,
      name: 'Content Studio',
      desc: 'Generate blogs, emails, and SEO briefs with brand voice and channel-specific formats.',
      pricing: 'From $79/mo',
      href: 'https://ziontechgroup.com/micro-saas'
    },
    {
      icon: BarChart3,
      name: 'Analytics Pulse',
      desc: 'Plug-and-play dashboards with anomaly alerts and goal tracking. Connects to GA4, Stripe, HubSpot.',
      pricing: 'From $59/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Users,
      name: 'Onboarding Flow',
      desc: 'Guided walkthroughs, tooltips, checklists and in-app NPS. No-code targeting segments.',
      pricing: 'From $69/mo',
      href: 'https://ziontechgroup.com/micro-saas'
    },
    // New diversified, real micro SaaS ideas
    {
      icon: FileSearch,
      name: 'Privacy Request Portal (DSR)',
      desc: 'Hosted data subject request intake with verification, workflow, and export/delete automation (GDPR/CCPA).',
      pricing: 'From $99/mo + $0.50/request',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Bug,
      name: 'Security Headers & CSP Manager',
      desc: 'Continuously audits and deploys HTTP security headers and Content Security Policy for your domains.',
      pricing: 'From $49/mo per domain',
      href: 'https://ziontechgroup.com/it-services'
    },
    {
      icon: Globe,
      name: 'SEO Health Monitor',
      desc: 'Automated crawls, schema checks, sitemap health, and Core Web Vitals alerts with weekly insights.',
      pricing: 'From $39/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: CreditCard,
      name: 'SaaS Billing Dunning & Recovery',
      desc: 'Smart retries, reminders, and card updater integrations to reduce failed payments and churn.',
      pricing: 'From $79/mo + 1% recovered',
      href: 'https://ziontechgroup.com/micro-saas'
    },
    {
      icon: ShoppingCart,
      name: 'Checkout A/B Optimizer',
      desc: 'Low-code experiments for checkout steps, fields, and copy; integrates with Stripe/Shopify.',
      pricing: 'From $99/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Bell,
      name: 'Status & Incident Hub',
      desc: 'Hosted status page with synthetic checks, webhook integrations, on-call notifications, and postmortems.',
      pricing: 'From $59/mo',
      href: 'https://ziontechgroup.com/it-services'
    },
    {
      icon: Languages,
      name: 'Multilingual UX Localizer',
      desc: 'String extraction, machine translation + human review, versioning, and per-locale rollout controls.',
      pricing: 'From $69/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Users,
      name: 'AI Customer Success Platform',
      desc: 'Intelligent customer success with predictive analytics, churn prevention, and automated engagement.',
      pricing: 'From $299/mo',
      href: 'https://ziontechgroup.com/services/ai-customer-success-platform'
    },
    // New innovative micro SaaS services
    {
      icon: Shield,
      name: 'AI Compliance Copilot',
      desc: 'Automated regulatory compliance monitoring, risk assessment, and audit trail management for GDPR, SOC2, HIPAA.',
      pricing: 'From $199/mo',
      href: 'https://ziontechgroup.com/services/ai-compliance-assistant'
    },
    {
      icon: BarChart3,
      name: 'AI Business Intelligence Suite',
      desc: 'Self-service BI with AI-powered insights, predictive analytics, and automated reporting for business users.',
      pricing: 'From $399/mo',
      href: 'https://ziontechgroup.com/services/ai-business-intelligence'
    },
    {
      icon: MessageSquare,
      name: 'AI Sales Copilot',
      desc: 'Intelligent lead scoring, sales forecasting, and automated follow-up sequences with CRM integration.',
      pricing: 'From $149/mo',
      href: 'https://ziontechgroup.com/services/ai-sales-copilot'
    },
    {
      icon: Workflow,
      name: 'AI Workflow Orchestrator',
      desc: 'Multi-agent workflow automation with intelligent routing, decision making, and performance optimization.',
      pricing: 'From $89/mo',
      href: 'https://ziontechgroup.com/services/ai-workflow-orchestrator'
    },
    {
      icon: Database,
      name: 'AI Data Governance Platform',
      desc: 'Automated data classification, compliance monitoring, and intelligent access control with audit trails.',
      pricing: 'From $179/mo',
      href: 'https://ziontechgroup.com/services/ai-data-governance'
    },
    {
      icon: FileText,
      name: 'LLM Content Studio Pro',
      desc: 'Advanced AI content generation with brand voice consistency, SEO optimization, and multi-language support.',
      pricing: 'From $129/mo',
      href: 'https://ziontechgroup.com/services/llm-content-studio'
    },
    {
      icon: Cloud,
      name: 'Cloud FinOps Optimizer',
      desc: 'Automated cloud cost optimization, budget management, and resource utilization analytics.',
      pricing: 'From $199/mo',
      href: 'https://ziontechgroup.com/services/cloud-finops-optimizer'
    },
    {
      icon: Server,
      name: 'Edge Computing Platform',
      desc: 'Distributed edge computing with ultra-low latency, real-time analytics, and global edge network.',
      pricing: 'From $299/mo',
      href: 'https://ziontechgroup.com/services/edge-computing-platform'
    },
    {
      icon: Cpu,
      name: 'Quantum AI Platform',
      desc: 'Hybrid quantum-classical AI platform for complex optimization problems and advanced simulations.',
      pricing: 'From $1,999/mo',
      href: 'https://ziontechgroup.com/services/quantum-ai-platform'
    },
    {
      icon: Lock,
      name: 'Zero Trust Security Suite',
      desc: 'Comprehensive zero trust implementation with identity verification, access control, and continuous monitoring.',
      pricing: 'From $399/mo',
      href: 'https://ziontechgroup.com/services/zero-trust-network-architecture'
    },
    {
      icon: Globe,
      name: 'IoT Edge Computing Platform',
      desc: 'Scalable IoT infrastructure with edge analytics, device management, and real-time data processing.',
      pricing: 'From $249/mo',
      href: 'https://ziontechgroup.com/services/iot-edge'
    },
    {
      icon: Heart,
      name: 'AI Healthcare Analytics Platform',
      desc: 'Advanced healthcare data analytics with patient risk scoring and clinical decision support.',
      pricing: 'From $599/mo',
      href: 'https://ziontechgroup.com/services/ai-healthcare-analytics'
    },
    {
      icon: Leaf,
      name: 'Sustainability Analytics Platform',
      desc: 'Environmental impact tracking, carbon footprint analysis, and sustainability reporting automation.',
      pricing: 'From $199/mo',
      href: 'https://ziontechgroup.com/services/sustainability'
    },
    {
      icon: Rocket,
      name: 'Space Technology Solutions',
      desc: 'Satellite communications, space data analytics, and orbital mechanics optimization platform.',
      pricing: 'From $2,999/mo',
      href: 'https://ziontechgroup.com/services/space-tech'
    },
    {
      icon: Building,
      name: 'Digital Twin Platform',
      desc: 'Real-time digital simulation and monitoring for industrial processes and infrastructure.',
      pricing: 'From $799/mo',
      href: 'https://ziontechgroup.com/services/digital-twin'
    },
    {
      icon: Network,
      name: 'Blockchain Enterprise Platform',
      desc: 'Enterprise blockchain implementation with smart contracts, DeFi protocols, and supply chain tracking.',
      pricing: 'From $499/mo',
      href: 'https://ziontechgroup.com/services/blockchain-enterprise-solutions'
    },
    {
      icon: Zap,
      name: 'AI Autonomous Operations Platform',
      desc: 'Fully automated business processes with intelligent decision-making and self-healing capabilities.',
      pricing: 'From $899/mo',
      href: 'https://ziontechgroup.com/services/ai-autonomous-business-operations'
    },
    {
      icon: TrendingUp,
      name: 'AI Supply Chain Optimization',
      desc: 'Intelligent supply chain analytics, demand forecasting, and inventory optimization platform.',
      pricing: 'From $349/mo',
      href: 'https://ziontechgroup.com/services/ai-supply-chain-optimization'
    },
    {
      icon: Users,
      name: 'Multilingual CX Orchestrator',
      desc: '50+ language support with AI-powered translation, sentiment analysis, and locale-aware responses.',
      pricing: 'From $199/mo',
      href: 'https://ziontechgroup.com/services/multilingual-cx-orchestrator'
    },
    {
      icon: Video,
      name: 'AI Video Intelligence Platform',
      desc: 'Advanced video analytics, transcription, speaker diarization, and content summarization.',
      pricing: 'From $299/mo',
      href: 'https://ziontechgroup.com/services/ai-video-intelligence'
    },
    {
      icon: FileSearch,
      name: 'AI Document Intelligence',
      desc: 'OCR, form extraction, document classification, and intelligent document processing.',
      pricing: 'From $179/mo',
      href: 'https://ziontechgroup.com/services/ai-document-intelligence'
    },
    {
      icon: Wrench,
      name: 'Platform Engineering Hub',
      desc: 'Internal developer platforms with golden paths, Backstage portals, and governance frameworks.',
      pricing: 'From $399/mo',
      href: 'https://ziontechgroup.com/services/platform-engineering'
    },
    {
      icon: Database,
      name: 'Data Lakehouse Platform',
      desc: 'Unified data platform combining data lake and warehouse capabilities with MLOps integration.',
      pricing: 'From $599/mo',
      href: 'https://ziontechgroup.com/services/data-lakehouse-platform'
    },
    {
      icon: Shield,
      name: 'AI Threat Intelligence Platform',
      desc: 'Real-time threat detection, behavioral analysis, and automated incident response.',
      pricing: 'From $299/mo',
      href: 'https://ziontechgroup.com/services/ai-threat-intelligence'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h1 className="text-4xl font-bold sm:text-5xl">Micro SaaS products you can launch this week</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Pick a ready-to-run tool or have us tailor it for your workflow. Secure, scalable, and priced for fast ROI.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 text-sm font-semibold text-cyan-300">{p.pricing}</div>
              {('href' in p) && p.href && (
                <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href={p.href} target="_blank" rel="noreferrer">
                  Learn more <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <div className="mb-2 font-semibold text-white">How we deliver</div>
          <ul className="grid gap-2 sm:grid-cols-2">
            <li>Provisioned in your cloud or ours</li>
            <li>Single-tenant or multi-tenant options</li>
            <li>SSO, RBAC, and audit logging available <Shield className="inline h-3 w-3" /></li>
            <li>White-label branding and custom integrations</li>
          </ul>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <DollarSign className="h-3 w-3" />
            Typical setup: $1k–$10k depending on SSO/compliance and data migration.
          </div>
          <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/micro-saas" target="_blank" rel="noreferrer">
            See micro SaaS overview <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Talk to product lead</Link>
            <Link to="/request-quote" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
          </div>
          <div className="mt-6 text-xs text-slate-400">
            Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaS;

