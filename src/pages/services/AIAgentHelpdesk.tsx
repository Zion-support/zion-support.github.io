import React from 'react'
import { SEO } from '../../components/SEO'
import { Bot, MessageSquare, Headphones, Zap, PieChart, CheckCircle2 } from 'lucide-react'

export default function AIAgentHelpdesk() {
  const features = [
    { icon: Bot, title: 'Autonomous Triage', desc: 'Understands intent, routes to flows, escalates with full context.' },
    { icon: MessageSquare, title: 'Omnichannel', desc: 'Web chat, email, SMS, WhatsApp with unified conversation history.' },
    { icon: Headphones, title: 'Agent Assist', desc: 'Real-time suggested replies, macro generation, and knowledge lookups.' },
    { icon: PieChart, title: 'Insights', desc: 'CSAT, first response time, deflection, and topic clustering.' },
  ]

  const pricing = [
    { tier: 'Starter', price: '$99/mo', items: ['1,000 conversations', 'Web chat', 'FAQ auto-build'] },
    { tier: 'Growth', price: '$299/mo', items: ['10,000 conversations', 'All channels', 'Agent assist'] },
    { tier: 'Enterprise', price: 'Custom', items: ['SLA', 'SAML/SSO', 'Private model'] },
  ]

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO
        title="AI Agent Helpdesk - Zion Tech Group"
        description="AI-powered customer support with autonomous triage, agent assist, and omnichannel messaging."
        canonical="https://ziontechgroup.com/services/customer-support-chatbot"
      />

      <section className="relative pt-28 pb-16">
        <div className="container-responsive">
          <h1 className="heading-responsive text-gradient">AI Agent Helpdesk</h1>
          <p className="text-responsive text-zion-blue-light/80 max-w-2xl mt-4">
            Reduce response times and scale support with production-grade AI agents.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="https://ziontechgroup.com/contact" className="btn-futuristic">Talk to Sales</a>
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

