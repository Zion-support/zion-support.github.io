import React from 'react'
import { SEO } from '../../components/SEO'
import { Shield, BarChart3, Search, Zap, CheckCircle2, Link as LinkIcon } from 'lucide-react'

export default function SEOAuditor() {
  const features = [
    { icon: Search, title: 'AI Crawl & Indexing', desc: 'Automated site crawl, index status checks, and AI summaries of issues.' },
    { icon: BarChart3, title: 'Page-level Scores', desc: 'On-page SEO, Core Web Vitals, schema markup and accessibility scoring.' },
    { icon: LinkIcon, title: 'Backlink Monitor', desc: 'Backlink profile, toxic link detection, and anchor text analysis.' },
    { icon: Shield, title: 'Security & Compliance', desc: 'HTTPS, HSTS, mixed content, cookie, and privacy policy checks.' },
    { icon: Zap, title: 'Quick Fixes', desc: 'Auto-fix robots.txt, sitemap, meta tags, and structured data templates.' },
  ]

  const pricing = [
    { tier: 'Starter', price: '$49/mo', items: ['100 pages crawl', 'Weekly report', 'Basic fixes'] },
    { tier: 'Growth', price: '$149/mo', items: ['2,500 pages crawl', 'Daily report', 'Auto-fix templates'] },
    { tier: 'Pro', price: '$399/mo', items: ['25,000 pages', 'API access', 'Custom rules and alerts'] },
  ]

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO
        title="AI SEO Auditor - Zion Tech Group"
        description="AI-powered SEO auditing with CWV, schema, accessibility, and backlink insights plus auto-fix templates."
        canonical="https://ziontechgroup.com/services/ai-seo-auditor"
      />

      <section className="relative pt-28 pb-16">
        <div className="container-responsive">
          <h1 className="heading-responsive text-gradient">AI SEO Auditor</h1>
          <p className="text-responsive text-zion-blue-light/80 max-w-2xl mt-4">
            Ship faster with AI-driven audits, clear priorities, and one-click fixes.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="https://ziontechgroup.com/contact" className="btn-futuristic">Request Demo</a>
            <a href="https://ziontechgroup.com/pricing" className="btn-neon">See Pricing</a>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-responsive grid-responsive">
          {features.map((f) => (
            <div key={f.title} className="card-futuristic">
              <div className="flex items-center gap-3 mb-3">
                <f.icon className="w-6 h-6 text-zion-cyan" />
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="text-zion-blue-light/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="container-responsive grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div key={p.tier} className="card-futuristic">
              <div className="text-sm text-zion-blue-light/70">{p.tier}</div>
              <div className="text-3xl font-bold text-white mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2">
                {p.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-zion-blue-light/80">
                    <CheckCircle2 className="w-4 h-4 text-zion-cyan" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

