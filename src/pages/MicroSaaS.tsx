import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Calendar, PenTool, BarChart3, Users, DollarSign, ExternalLink, Shield, FileSearch, Bug, Globe, CreditCard, ShoppingCart, Bell, Languages } from 'lucide-react';

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
    }
    ,
    {
      icon: Mail,
      name: 'Cold Outreach Sequencer with Enrichment',
      desc: 'Find contacts, enrich accounts, personalize emails with AI, and auto-sync replies to CRM.',
      pricing: 'From $99/mo + usage',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: BarChart3,
      name: 'Ad Spend Anomaly Guard',
      desc: 'Monitors Google/Facebook/TikTok ads for spend spikes, CPA drift, and pauses waste automatically.',
      pricing: 'From $59/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Shield,
      name: 'Vendor Risk Tracker',
      desc: 'Third-party inventory, SOC2 mapping, auto-questionnaires, breach monitoring, and renewal reminders.',
      pricing: 'From $79/mo',
      href: 'https://ziontechgroup.com/it-services'
    },
    {
      icon: FileSearch,
      name: 'Contract Clause Finder',
      desc: 'Upload contracts, flag risky clauses, extract key terms, and compare against policy playbooks.',
      pricing: 'From $89/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Bug,
      name: 'CI/CD Secret Scanner',
      desc: 'Scans repos and pipelines for leaked secrets, keys rotation workflows, and blocking policies.',
      pricing: 'From $49/mo',
      href: 'https://ziontechgroup.com/it-services'
    },
    {
      icon: Globe,
      name: 'Local SEO Listings Manager',
      desc: 'Manage Google Business, Apple, Yelp, and citations with review replies and rank tracking.',
      pricing: 'From $39/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: CreditCard,
      name: 'Revenue Leak Detector',
      desc: 'Stripe/Shopify monitors for failed webhooks, tax/shipping mismatches, and AR aging alerts.',
      pricing: 'From $69/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: ShoppingCart,
      name: 'Subscription Paywall Kit',
      desc: 'Drop-in pricing pages, trials, entitlements, receipts and usage metering for SaaS startups.',
      pricing: 'From $79/mo',
      href: 'https://ziontechgroup.com/micro-saas'
    },
    {
      icon: Bell,
      name: 'User Churn Predictor',
      desc: 'Detects churn risk cohorts, triggers save-offers, and creates tasks in CRM/helpdesk.',
      pricing: 'From $69/mo',
      href: 'https://ziontechgroup.com/services'
    },
    {
      icon: Languages,
      name: 'Localization QA Bot',
      desc: 'Screenshots diffing and string coverage checks across locales; flags overflows and untranslated text.',
      pricing: 'From $59/mo',
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

