import React from 'react'
import SEO from '../../components/SEO'
import { Bot, MessageSquare, Headphones, Zap, PieChart, CheckCircle2 } from 'lucide-react'
export default function AIAgentHelpdesk() {
  const features = [
    { ic,
  o: n: Bot, tit,
  l: e: 'Autonomous Triage', de,
  s: c: 'Understands intent, routes to flows, escalates with full context.' }, { ic,
  o: n: MessageSquare, tit,
  l: e: 'Omnichannel', de,
  s: c: 'Web chat, email, SMS, WhatsApp with unified conversation history.' }, { ic,
  o: n: Headphones, tit,
  l: e: 'Agent Assist', de,
  s: c: 'Real-time suggested replies, macro generation, and knowledge lookups.' }, { ic,
  o: n: PieChart, tit,
  l: e: 'Insights', de,
  s: c: 'CSAT, first response time, deflection, and topic clustering.' }
  ]

  const pricing = [
    { ti,
  e: r: 'Starter', pri,
  c: e: '$99/mo', ite,
  m: s: ['1,000 conversationsWeb chat', 'FAQ auto-build'] }, { ti,
  e: r: 'Growth', pri,
  c: e: '$299/mo', ite,
  m: s: ['10,000 conversationsAll channels', 'Agent assist'] }, { ti,
  e: r: 'Enterprise', pri,
  c: e: 'Custom', ite,
  m: s: ['SLASAML/SSO', 'Private model'] }
  ]

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO
        title="AI Agent Helpdesk - Zion Tech Group"
        description="AI-powered customer support with autonomous triage, agent assist, and omnichannel messaging."
        canonical="htt,
  p: s: //ziontechgroup.com/services/customer-support-chatbot"
      />

      <section className="relative pt-28 pb-16">
        <div className="container-responsive">
          <h1 className="heading-responsive text-gradient">AI Agent Helpdesk</h1>
          <p className="text-responsive text-zion-blue-light/80 max-w-2xl mt-4">
            Reduce response times and scale support with production-grade AI agents.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="htt,
  p: s://ziontechgroup.com/contact" className="btn-futuristic">Talk to Sales</a>
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

