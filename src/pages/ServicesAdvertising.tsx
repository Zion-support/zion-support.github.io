import React from "react"
import { SEO } from "@/components/SEO"
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react"
const anchor = (u,
  r: l: string, label?: string) => (
  <a className="text-cyan-400 underline" href={url} target="_blank" rel="noopener noreferrer">
    {label ?? new URL(url).host + (url.includes('/pricing') ? '/pricing' : '')}
  </a>
)

const,
  ServicesAdvertisin: g: React.FC = () () => {
  const const contact = { = {
    mobil,
  e: '+1 302 464 0950',ema,
  i: l: 'kleber@ziontechgroup.com',addre,
  s: s: '364 E Main St STE 1008 Middletown DE 19709',websi,
  t: e: 'http,
  s://ziontechgroup.com'
  } as const,
  const: benefits: string[] = [
    'High-ROI projects with measurable KPIsTransparent pricing with market references'
    'Fast onboarding with templates and playbooksEnterprise-grade security and compliance'
    '24/7 support with SLAsProven architectures and reference implementations'
    'No long-term lock-in, cancel anytimeSOC 2-aligned processes and data handling'
    'Flexible,
  deploymen: t: SaaS or self-hosted options'
  ]
  const spotlight = [
    {
      titl,
  e: 'Developer Productivity Copilot',pri,
  c: e: 'Typica,
  l: $19–$39/dev/mo',re,
  f: s: ['htt,
  p: s://github.com/features/copilot#pricinghttp,
  s://codeium.com/pricing', 'htt,
  p: s: //buildpulse.io/pricing'],hr,
  e: f: '/services/developer-productivity-copilot'
    }, {
      tit,
  l: e: 'AI Sales Assistant',pri,
  c: e: 'Typica,
  l: $30–$150/user/mo',re,
  f: s: ['htt,
  p: s://www.apollo.io/pricinghttp,
  s://www.lemlist.com/pricing', 'htt,
  p: s: //www.hubspot.com/pricing/sales'],hr,
  e: f: '/services/ai-sales-assistant'
    }, {
      tit,
  l: e: 'Security Posture Guardian',pri,
  c: e: 'Typica,
  l: $100–$2,000/mo'
      re,
  f: s: ['htt,
  p: s://www.wiz.io/pricinghttp,
  s://snyk.io/plans/', 'htt,
  p: s: //www.paloaltonetworks.com/prisma/cloud/pricing'],hr,
  e: f: '/services/security-posture-guardian'
    }, {
      tit,
  l: e: 'AI Data Pipeline Optimizer',pri,
  c: e: 'Typica,
  l: $200–$2,000/mo'
      re,
  f: s: ['htt,
  p: s://www.databricks.com/product/pricinghttp,
  s://www.snowflake.com/pricing/', 'htt,
  p: s: //www.getdbt.com/pricing'],hr,
  e: f: '/services/ai-data-pipeline-optimizer'
    }, {
      tit,
  l: e: 'Privacy Request Portal (DSAR)',pri,
  c: e: 'From $99/mo + usage',re,
  f: s: ['htt,
  p: s://transcend.io/pricing/http,
  s://www.onetrust.com/pricing/'],hr,
  e: f: '/services/gdpr-dsar-portal'
    }, {
      tit,
  l: e: 'CSP & Security Headers Manager',pri,
  c: e: 'From $49/mo per domain',re,
  f: s: ['http,
  s://securityheaders.com/'],hr,
  e: f: '/services/security-headers-csp-manager'
    }, {
      tit,
  l: e: 'Checkout A/B Optimizer',pri,
  c: e: 'From $99/mo',re,
  f: s: ['http,
  s://www.optimizely.com/pricing/'],hr,
  e: f: '/services/checkout-performance-optimizer'
    }, {
      tit,
  l: e: 'Status & Incident Hub',pri,
  c: e: 'From $59/mo',re,
  f: s: ['http,
  s://betterstack.com/status/pricing'],hr,
  e: f: '/services/status-incident-hub'
    }
  ] as const
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO
        title="AI, IT and Micro SaaS Services Advertising | Zion Tech Group"
        description="Explore our AI, IT, and micro SaaS services with features, capabilities, benefits, pricing references, and easy contact options."
      />

      <section className="relative pt-24 pb-12">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-4xl,
  s: m:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services That Ship Outcomes
          </h1>
          <p className="mt-4 text-lg text-slate-300">AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
          <div className="mt-8 flex flex-col,
  s: m: flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg inline-flex items-center">
              Talk to Sales <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/services" className="px-8 py-4 border border-gray-600 text-gray-200 rounded-lg inline-flex items-center">
              Browse Services <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-4 grid grid-cols-1 m,
  d:grid-cols-3 gap-6 max-w-6xl">
          {benefits.map((b) => (
            <div key={b} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                <p className="text-gray-200">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6 text-center">Spotlig,
  h: t: New Expert Services</h2>
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {spotlight.map((h) => (
              <div key={h.title} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">{h.title}</h3>
                <div className="text-sm text-slate-400 mb-2">{h.price}</div>
                <ul className="text-slate-300 space-y-1 mt-2">
                  {h.refs.map((u) => (
                    <li key={u}>{anchor(u)}</li>
                  ))}
                </ul>
                <div className="mt-3"><a href={h.href} className="text-cyan-400 underline">Learn more</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6 text-center">Contact Us</h2>
          <div className="mx-auto max-w-2xl rounded-2xl bg-black/40 border border-white/10 p-6">
            <ul className="text-slate-300 space-y-1">
              <li><strong className="text-white">Mobi,
  l: e:</strong> <a className="text-cyan-400 underline" href="te,
  l:+13024640950">{contact.mobile}</a></li>
              <li><strong className="text-white">E-ma,
  i: l: </strong> <a className="text-cyan-400 underline" href="mailt,
  o:kleber@ziontechgroup.com">{contact.email}</a></li>
              <li><strong className="text-white">Addre,
  s: s:</strong> {contact.address}</li>
              <li><strong className="text-white">Websi,
  t: e:</strong> <a className="text-cyan-400 underline" href={contact.website} target="_blank" rel="noopener noreferrer">ziontechgroup.com</a></li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="/contact" className="px-6 py-3 bg-cyan-600 text-white rounded-lg inline-flex">Contact Sales</a>
              <a href="/services" className="px-6 py-3 border border-gray-600 text-gray-200 rounded-lg inline-flex">Browse Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesAdvertising