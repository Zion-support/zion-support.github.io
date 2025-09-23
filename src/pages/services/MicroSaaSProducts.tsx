import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, DollarSign, Globe, Shield, Rocket, Zap, Bot, Mail, BarChart3 } from 'lucide-react';

type Plan = {
  name: string;
  price: string;
  features: string[];
};

type Product = {
  id: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  category: string;
  description: string;
  startingFrom: string;
  pricing: Plan[];
  links: { label: string; href: string }[];
};

const products: Product[] = [
  {
    id: 'ai-email-responder',
    title: 'AI Email Responder',
    tagline: 'Autonomous inbox triage and replies',
    icon: Mail,
    category: 'AI & Automation',
    description: 'Automatically classify, prioritize, and draft context-aware replies using fine-tuned LLMs. Integrates with Gmail, Outlook, and IMAP.',
    startingFrom: '$49/mo',
    pricing: [
      { name: 'Starter', price: '$49/mo', features: ['5 inboxes', '3k emails/mo', 'Prebuilt templates'] },
      { name: 'Pro', price: '$149/mo', features: ['20 inboxes', '15k emails/mo', 'Custom tone + API'] },
      { name: 'Enterprise', price: 'Custom', features: ['SSO/SAML', 'SOC2 report', 'SLAs'] },
    ],
    links: [
      { label: 'Docs', href: 'https://developers.google.com/gmail/api' },
      { label: 'Compare market pricing', href: 'https://www.g2.com/categories/email-management' },
    ],
  },
  {
    id: 'survey-insights',
    title: 'Mobile Survey & Insights',
    tagline: 'Higher response rates with AI summaries',
    icon: BarChart3,
    category: 'Product Research',
    description: 'Design mobile-first surveys, route by segment, and get instant AI summaries and insights for product and CX teams.',
    startingFrom: '$39/mo',
    pricing: [
      { name: 'Starter', price: '$39/mo', features: ['3 active surveys', '1k responses/mo', 'AI summaries'] },
      { name: 'Team', price: '$129/mo', features: ['Unlimited surveys', '10k responses/mo', 'Webhooks + exports'] },
      { name: 'Enterprise', price: 'Custom', features: ['HIPAA/BAA', 'SOC2', 'DPA'] },
    ],
    links: [
      { label: 'Benchmark pricing', href: 'https://www.g2.com/categories/survey' },
    ],
  },
  {
    id: 'returns-automation',
    title: 'E‑commerce Returns Automation',
    tagline: 'Self-serve returns, labels, RMA and analytics',
    icon: Rocket,
    category: 'E‑commerce Ops',
    description: 'Embed a branded returns portal that issues labels, tracks statuses, and syncs with Shopify, WooCommerce, and 3PLs.',
    startingFrom: '$99/mo',
    pricing: [
      { name: 'Growth', price: '$99/mo', features: ['2 warehouses', '500 returns/mo', 'Shopify + Woo'] },
      { name: 'Scale', price: '$299/mo', features: ['Unlimited warehouses', '5k returns/mo', '3PL integrations'] },
      { name: 'Plus', price: 'Custom', features: ['Custom SLAs', 'Priority support', 'Data export'] },
    ],
    links: [
      { label: 'Shopify returns apps pricing', href: 'https://apps.shopify.com/search?q=returns' },
    ],
  },
  {
    id: 'ai-content-suite',
    title: 'AI Content Suite',
    tagline: 'Multi-channel content generation with guardrails',
    icon: Bot,
    category: 'Marketing',
    description: 'Generate on-brand blogs, social posts, and emails. Human-in-the-loop workflow, plagiarism checks, and tone presets.',
    startingFrom: '$59/mo',
    pricing: [
      { name: 'Starter', price: '$59/mo', features: ['50k tokens', '5 brand voices', 'SEO briefs'] },
      { name: 'Agency', price: '$199/mo', features: ['500k tokens', 'Client workspaces', 'Bulk generation'] },
      { name: 'Enterprise', price: 'Custom', features: ['Fine-tuned models', 'SSO', 'Data residency'] },
    ],
    links: [
      { label: 'Market pricing', href: 'https://www.g2.com/categories/ai-writing-assistants' },
    ],
  },
];

export default function MicroSaaSProducts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Micro SaaS Products" description="AI and automation micro SaaS products with clear pricing and links." />
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Micro SaaS Products</h1>
          <p className="mt-3 text-slate-300">Ready-to-deploy, secure and scalable mini‑apps for quick ROI.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div key={p.id} className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <p.icon className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h2 className="text-xl font-semibold">{p.title}</h2>
                    <p className="text-slate-400 text-sm">{p.tagline}</p>
                  </div>
                </div>
                <span className="text-cyan-300 text-sm">Starting {p.startingFrom}</span>
              </div>
              <p className="mt-4 text-slate-300">{p.description}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {p.pricing.map((plan) => (
                  <div key={plan.name} className="rounded-xl border border-cyan-400/10 bg-slate-800/40 p-4">
                    <div className="font-semibold">{plan.name}</div>
                    <div className="text-cyan-300 text-sm">{plan.price}</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a key={l.href} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 underline underline-offset-4" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/request-quote" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white hover:from-cyan-400 hover:to-blue-500">
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

