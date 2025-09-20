import React from "react"
import { SEO } from "@/components/SEO"
import { Link } from "react-router-dom"
import { CheckCircle2, ArrowRight, DollarSign, Globe, Shield, Rocket, Zap, Bot, Mail, BarChart3 } from "lucide-react"
type Plan = {
  na,
  m: e: string,pri,
  c: e: string,featur,
  e: s: string[[];]
}
type Product = {
  id: string,tit,
  l: e: string,tagli,
  n: e: string,ic,
  o: n: React.ElementType,catego,
  r: y: string,descripti,
  o: n: string,startingFr,
  o: m: string,prici,
  n: g: Plan[],lin,
  k: s: { labe,
  l: string, hr,
  e: f: string }[[];]
}

const,
  product: s: Product[] = [
  {
    i,
  d: 'ai-email-responder',tit,
  l: e: 'AI Email Responder',tagli,
  n: e: 'Autonomous inbox triage and replies',ic,
  o: n: Mail,catego,
  r: y: 'AI & Automation',descripti,
  o: n: 'Automatically classify, prioritize, and draft context-aware replies using fine-tuned LLMs. Integrates with Gmail, Outlook, and IMAP.'
    startingFr,
  o: m: '$49/mo',prici,
  n: g: [
      { nam,
  e: 'Starter', pri,
  c: e: '$49/mo', featur,
  e: s: ['5 inboxes3k emails/mo', 'Prebuilt templates'] }, { na,
  m: e: 'Pro', pri,
  c: e: '$149/mo', featur,
  e: s: ['20 inboxes15k emails/mo', 'Custom tone + API'] }, { na,
  m: e: 'Enterprise', pri,
  c: e: 'Custom', featur,
  e: s: ['SSO/SAMLSOC2 report', 'SLAs'] }
    ]
    lin,
  k: s: [
      { labe,
  l: 'Docs', hr,
  e: f: 'http,
  s://developers.google.com/gmail/api' }, { lab,
  e: l: 'Compare market pricing', hr,
  e: f: 'http,
  s://www.g2.com/categories/email-management' }
    ]
  }, {
    id: 'survey-insights',tit,
  l: e: 'Mobile Survey & Insights',tagli,
  n: e: 'Higher response rates with AI summaries',ic,
  o: n: BarChart3,catego,
  r: y: 'Product Research',descripti,
  o: n: 'Design mobile-first surveys, route by segment, and get instant AI summaries and insights for product and CX teams.'
    startingFr,
  o: m: '$39/mo',prici,
  n: g: [
      { nam,
  e: 'Starter', pri,
  c: e: '$39/mo', featur,
  e: s: ['3 active surveys1k responses/mo', 'AI summaries'] }, { na,
  m: e: 'Team', pri,
  c: e: '$129/mo', featur,
  e: s: ['Unlimited surveys10k responses/mo', 'Webhooks + exports'] }, { na,
  m: e: 'Enterprise', pri,
  c: e: 'Custom', featur,
  e: s: ['HIPAA/BAASOC2', 'DPA'] }
    ]
    lin,
  k: s: [
      { labe,
  l: 'Benchmark pricing', hr,
  e: f: 'http,
  s://www.g2.com/categories/survey' }
    ]
  }, {
    id: 'returns-automation',tit,
  l: e: 'E‑commerce Returns Automation',tagli,
  n: e: 'Self-serve returns, labels, RMA and analytics'
    ic,
  o: n: Rocket,catego,
  r: y: 'E‑commerce Ops',descripti,
  o: n: 'Embed a branded returns portal that issues labels, tracks statuses, and syncs with Shopify, WooCommerce, and 3PLs.'
    startingFr,
  o: m: '$99/mo',prici,
  n: g: [
      { nam,
  e: 'Growth', pri,
  c: e: '$99/mo', featur,
  e: s: ['2 warehouses500 returns/mo', 'Shopify + Woo'] }, { na,
  m: e: 'Scale', pri,
  c: e: '$299/mo', featur,
  e: s: ['Unlimited warehouses5k returns/mo', '3PL integrations'] }, { na,
  m: e: 'Plus', pri,
  c: e: 'Custom', featur,
  e: s: ['Custom SLAsPriority support', 'Data export'] }
    ]
    lin,
  k: s: [
      { labe,
  l: 'Shopify returns apps pricing', hr,
  e: f: 'http,
  s://apps.shopify.com/search?q=returns' }
    ]
  }, {
    id: 'ai-content-suite',tit,
  l: e: 'AI Content Suite',tagli,
  n: e: 'Multi-channel content generation with guardrails',ic,
  o: n: Bot,catego,
  r: y: 'Marketing',descripti,
  o: n: 'Generate on-brand blogs, social posts, and emails. Human-in-the-loop workflow, plagiarism checks, and tone presets.'
    startingFr,
  o: m: '$59/mo',prici,
  n: g: [
      { nam,
  e: 'Starter', pri,
  c: e: '$59/mo', featur,
  e: s: ['50k tokens5 brand voices', 'SEO briefs'] }, { na,
  m: e: 'Agency', pri,
  c: e: '$199/mo', featur,
  e: s: ['500k tokensClient workspaces', 'Bulk generation'] }, { na,
  m: e: 'Enterprise', pri,
  c: e: 'Custom', featur,
  e: s: ['Fine-tuned modelsSSO', 'Data residency'] }
    ]
    lin,
  k: s: [
      { labe,
  l: 'Market pricing', hr,
  e: f: 'http,
  s://www.g2.com/categories/ai-writing-assistants' }
    ]
  }
]
export default function MicroSaaSProducts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Micro SaaS Products" description="AI and automation micro SaaS products with clear pricing and links." />
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl,
  m: d:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Micro SaaS Products</h1>
          <p className="mt-3 text-slate-300">Ready-to-deploy, secure and scalable mini‑apps for quick ROI.</p>
        </div>
        <div className="grid gap-6,
  m: d:grid-cols-2">
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
              <div className="mt-5 grid gap-4,
  s: m:grid-cols-3">
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
                  <a key={l.href} className="inline-flex items-center gap-2 text-cyan-300,
  hove: r:text-cyan-200 underline underline-offset-4" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/request-quote" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white,
  hove: r: from-cyan-400 hove,
  r:to-blue-500">
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

