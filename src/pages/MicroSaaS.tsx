import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Calendar, PenTool, BarChart3, Users, DollarSign, ExternalLink, Shield, FileSearch, Bug, Globe, CreditCard, ShoppingCart, Bell, Languages, Database, Cpu, Lock, TrendingUp, Heart, Building, Truck, Camera, Mic, Palette, Target } from 'lucide-react';

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
    // New innovative micro SaaS products
    {
      icon: FileSearch,
      name: 'AI Document Intelligence Hub',
      desc: 'Extract, classify, and analyze documents with AI-powered OCR and intelligent data extraction.',
      pricing: 'From $89/mo + $0.10/page',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: BarChart3,
      name: 'Predictive Analytics Engine',
      desc: 'Build and deploy ML models for forecasting, anomaly detection, and predictive insights.',
      pricing: 'From $199/mo + $0.50/prediction',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Shield,
      name: 'Compliance Automation Suite',
      desc: 'Automated compliance monitoring for GDPR, CCPA, SOC2, and industry-specific regulations.',
      pricing: 'From $149/mo per compliance framework',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Globe,
      name: 'Global Content Localization',
      desc: 'AI-powered content translation, cultural adaptation, and multi-language SEO optimization.',
      pricing: 'From $79/mo + $0.05/word',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Users,
      name: 'Employee Experience Platform',
      desc: 'HR automation with onboarding, performance tracking, and employee engagement analytics.',
      pricing: 'From $5/employee/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce Intelligence Suite',
      desc: 'Customer behavior analytics, inventory optimization, and conversion rate optimization.',
      pricing: 'From $99/mo + 1% revenue increase',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: MessageSquare,
      name: 'Multi-Channel Support Hub',
      desc: 'Unified customer support across email, chat, social media, and phone with AI routing.',
      pricing: 'From $129/mo per agent',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Database,
      name: 'Data Pipeline Orchestrator',
      desc: 'Visual ETL pipeline builder with data quality monitoring and automated scheduling.',
      pricing: 'From $199/mo + $0.01/GB processed',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Cpu,
      name: 'Edge Computing Management',
      desc: 'Deploy and manage edge applications with real-time monitoring and auto-scaling.',
      pricing: 'From $79/mo per edge node',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Lock,
      name: 'Identity & Access Governance',
      desc: 'Enterprise identity management with SSO, MFA, and role-based access control.',
      pricing: 'From $3/user/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: TrendingUp,
      name: 'Revenue Operations Platform',
      desc: 'Unified revenue operations with sales forecasting, pipeline management, and analytics.',
      pricing: 'From $199/mo + $0.50/opportunity',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Heart,
      name: 'Healthcare Compliance Manager',
      desc: 'HIPAA, HITECH, and healthcare compliance automation with audit trails.',
      pricing: 'From $299/mo per provider',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Building,
      name: 'Manufacturing IoT Platform',
      desc: 'Industrial IoT monitoring with predictive maintenance and quality control analytics.',
      pricing: 'From $149/mo per production line',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: CreditCard,
      name: 'Financial Risk Analytics',
      desc: 'Real-time risk assessment, fraud detection, and regulatory compliance for financial services.',
      pricing: 'From $399/mo + $0.01/transaction',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Zap,
      name: 'Energy Management System',
      desc: 'Smart energy monitoring, optimization, and sustainability reporting for enterprises.',
      pricing: 'From $89/mo per facility',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Truck,
      name: 'Supply Chain Visibility',
      desc: 'End-to-end supply chain tracking with real-time analytics and predictive insights.',
      pricing: 'From $199/mo + $0.10/shipment',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Camera,
      name: 'Computer Vision Platform',
      desc: 'AI-powered image and video analysis for quality control, security, and automation.',
      pricing: 'From $299/mo + $0.01/image processed',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Mic,
      name: 'Voice AI Assistant Platform',
      desc: 'Build and deploy custom voice assistants with natural language processing.',
      pricing: 'From $149/mo + $0.05/minute',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Palette,
      name: 'AI Design Assistant',
      desc: 'AI-powered design generation, brand consistency, and creative asset management.',
      pricing: 'From $79/mo + $0.10/design generated',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Target,
      name: 'Marketing Attribution Engine',
      desc: 'Multi-touch attribution modeling with ROI optimization and campaign performance analytics.',
      pricing: 'From $199/mo + 1% of ad spend',
      href: 'https://ziontechgroup.com/services'
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

