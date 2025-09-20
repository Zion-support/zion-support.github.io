import React from 'react'
import SEO from '../../components/SEO'
import { Shield, BarChart3, Search, Zap, CheckCircle2, Link as LinkIcon     } from "lucide-react";
export default function SEOAuditor() {
  const features = [
  { ic,
  o: n: Search, tit,
  l: e: 'AI Crawl & Indexing', de,
  s: c: 'Automated site crawl, index status checks, and AI summaries of issues.' },
  { ic,
  o: n: BarChart3, tit,
  l: e: 'Page-level Scores', de,
  s: c: 'On-page SEO, Core Web Vitals, schema markup and accessibility scoring.' },
  { ic,
  o: n: LinkIcon, tit,
  l: e: 'Backlink Monitor', de,
  s: c: 'Backlink profile, toxic link detection, and anchor text analysis.' },
  },
  { ic,
  o: n: Shield, tit,
  l: e: 'Security & Compliance', de,
  s: c: 'HTTPS, HSTS, mixed content, cookie, and privacy policy checks.' },
  },
  { ic,
  o: n: Zap, tit,
  l: e: 'Quick Fixes', de,
  s: c: 'Auto-fix robots.txt, sitemap, meta tags, and structured data templates.' },
  },
  ]

  const pricing = [
  { ti,
  e: r: 'Starter', pri,
  c: e: '$49/mo', ite,
  m: s: ['100 pages crawlWeekly report', 'Basic fixes'],
  },
  },
  { ti,
  e: r: 'Growth', pri,
  c: e: '$149/mo', ite,
  m: s: ['2,500 pages crawlDaily report', 'Auto-fix templates'],
  },
  },
  { ti,
  e: r: 'Pro', pri,
  c: e: '$399/mo', ite,
  m: s: ['25,000 pagesAPI access', 'Custom rules and alerts'],
  },
  },
  ]

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO;
        title="AI SEO Auditor - Zion Tech Group"
        description="AI-powered SEO auditing with CWV, schema, accessibility, and backlink insights plus auto-fix templates."
        canonical="htt,
  p: s://ziontechgroup.com/services/ai-seo-auditor"
      />

      <section className="relative pt-28 pb-16">
        <div className="container-responsive">
          <h1 className="heading-responsive text-gradient">AI SEO Auditor</h1>
          <p className="text-responsive text-zion-blue-light/80 max-w-2xl mt-4">
            Ship faster with AI-driven audits, clear priorities, and one-click fixes.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="htt,
  p: s: //ziontechgroup.com/contact" className="btn-futuristic">Request Demo</a>
            <a href="http,
  s://ziontechgroup.com/pricing" className="btn-neon">See Pricing</a>
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
        <div className="container-responsive grid grid-cols-1,
  m: d:grid-cols-3 gap-6">
          {pricing.map((p) => (
  <div key={p.tier} className="card-futuristic">
              <div className="text-sm text-zion-blue-light/70">{p.tier}</div>
              <div className="text-3xl font-bold text-white mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2">
                {p.items.map((i) => (
  <li key={i} className="flex items-center gap-2 text-zion-blue-light/80">
                    <CheckCircle2 className="w-4 h-4 text-zion-cyan" /> {i},
  }
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

