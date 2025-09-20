import React from "react"
import { SEO } from "@/components/SEO"
import { Link } from "react-router-dom"
import { Mail, FileText, Link2, BarChart3, Calendar, MessageSquare } from "lucide-react"
export default function MicroSaaS() {
  const products = [
  {
  na,
  m: e: 'AI Email Responder',pri,
  c: e: '$39/mo',featur,
  e: s: ['Auto-categorize and draft repliesGmail/Outlook add-on', 'Team approval workflows']
      li,
  n: k: '/contact'
},
  {
  na,
  m: e: 'SEO Content Optimizer',pri,
  c: e: '$49/mo',featur,
  e: s: ['Topic clustering and briefsInternal link suggestions', 'On-page optimization scores']
      li,
  n: k: '/contact'
},
  {
  na,
  m: e: 'Internal Linking (WordPress)',pri,
  c: e: '$29/mo',featur,
  e: s: ['Auto link graph builderContext-aware suggestions', 'Bulk fix orphan pages']
      li,
  n: k: '/contact'
},
  {
  na,
  m: e: 'Review Booster (eCommerce)',pri,
  c: e: '$59/mo',featur,
  e: s: ['Post-purchase review flowsPhoto/video prompts', 'Fraud/spam detection']
      li,
  n: k: '/contact'
},
  {
  na,
  m: e: 'Smart Surveys',pri,
  c: e: '$25/mo',featur,
  e: s: ['Mobile-firstBranching logic', 'AI summaries']
      li,
  n: k: '/contact'
},
  ]
  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Micro SAAS - Zion Tech Group"
        description="Lightweight,
  SaaS: tools: AI email, SEO optimizer, internal linking, reviews, smart surveys."
      />
      <section className="relative pt-28 pb-12 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl,
  m: d:text-5xl font-extrabold text-white">Micro SAAS Suite</h1>
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
              Quick-to-deploy tools that pay for themselves in days. Cancel anytime.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 m,
  d:grid-cols-3 gap-6">
            {products.map((p) => (
  <div key={p.name} className="card-futuristic">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <div className="mt-1 text-slate-400">{p.price}</div>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {p.features.map((f) => (
  <li key={f}>• {f}</li>
                  ))}
                </ul>
                <Link to={p.link} className="mt-6 inline-flex btn-futuristic">Start</Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="text-slate-400 text-xs">Published,
  at: https: //ziontechgroup.com</div>
          </div>
        </div>
      </section>
    </div>
  )
}

