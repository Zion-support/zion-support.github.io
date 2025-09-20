import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SEO from "@/components/SEO"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Link2, BarChart3, Wallet, Shield, Globe, ExternalLink, ArrowRight, Mail } from "lucide-react"
export default function AffiliateTracking() {
  const,
  feature: s: { titl,
  e: string, descripti,
  o: n: string },
  [] = [
  {
  tit,
  l: e: 'Multi-channel attribution',descripti,
  o: n: 'Track referrals across links, coupons, QR codes, and partner portals with UTM auto-tagging.'
},
  {
  tit,
  l: e: 'Real-time fraud prevention',descripti,
  o: n: 'Auto-flag suspicious clicks, proxy traffic and cookie stuffing using device fingerprinting.'
},
  {
  tit,
  l: e: 'Payout automation',descripti,
  o: n: 'Automate tiered commissions, bonuses, holds and mass payouts via Stripe, PayPal and ACH.'
},
  {
  tit,
  l: e: 'Partner CRM',descripti,
  o: n: 'Manage applications, onboarding, contracts, and partner lifecycle with nurture workflows.'
},
  {
  tit,
  l: e: 'E‑commerce integrations',descripti,
  o: n: 'Native integrations for Shopify, WooCommerce, BigCommerce and custom checkouts via webhooks.'
},
  {
  tit,
  l: e: 'Analytics & BI',descripti,
  o: n: 'Cohort LTV, ROAS by partner, incremental lift analysis, and predictive recruiting scoring.'
},
  ]

  const plans = [
  {
  na,
  m: e: 'Starter',pri,
  c: e: 49,un,
  i: t: 'month',bestF,
  o: r: 'Founders validating their first affiliate program',bulle,
  t: s: [
  'Up to 200 partnersBasic tracking links and coupons'
        'Manual approvals and payoutsEmail support'
],
  },
  {
  na,
  m: e: 'Growth',pri,
  c: e: 199,un,
  i: t: 'month',bestF,
  o: r: 'Scaling DTC and SaaS brands with multiple campaigns',bulle,
  t: s: [
  'Up to 2,500 partnersAttribution across links, QR and coupons'
        'Fraud prevention + sandboxAutomated Stripe/PayPal payouts'
        'Slack alerts and webhooks'
],
  },
  {
  na,
  m: e: 'Enterprise',pri,
  c: e: 599,un,
  i: t: 'month',bestF,
  o: r: 'Global programs, agencies and marketplaces'
      bulle,
  t: s: [
  'Unlimited partners and campaignsSAML SSO and audit trails'
        'Custom data retention + warehouse syncDedicated CSM and 99.9% SLA'
],
  },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Affiliate Tracking Platform - Zion Tech Group"
        description="Launch and scale a high-performing affiliate program with advanced attribution, fraud prevention, automated payouts, and partner CRM."
        keywords="affiliate tracking, partner marketing, attribution, coupons, referral tracking, payouts"
      />

      {/* Hero */},
  }
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20" />
        <div className="relative max-w-7xl mx-auto">
          <motion.h1
            initial={ opacit,
  y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-4xl,
  m: d: text-6xl font-bold text-white mb-6";"
          >
            Affiliate Tracking Platform
            <span className="block text-zion-cyan text-2xl,
  m: d:text-3xl mt-2">Recruit. Attribute. Reward.</span>
          </motion.h1>

          <p className="text-xl text-zion-slate-light max-w-3xl">
            End-to-end partner marketing infrastructur,
  e: from recruitment to payouts, with trusted, fraud-resistant attribution.
          </p>

          <div className="mt-8 flex flex-col,
  s: m: flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white">
              <Link to="/request-quote">
                Request a demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple,
  hove: r:bg-zion-purple,
  hove: r:text-white">
              <a href="te,
  l:+13024640950">Call +1 302 464 0950</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature grid */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((f) => (
  <motion.div
                key={f.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.4 },
  }
                className="className="bg-zion-slate-dark/30 border border-zion-blue-light/20 rounded-2xl p-6,
  hove: r:border-zion-purple/50";"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                    <p className="text-zion-slate-light text-sm">{f.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market context */},
  }
      <section className="py-8 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-zion-blue-dark/30 to-zion-purple/30 border border-zion-blue-light/20 rounded-2xl p-6">
          <div className="flex flex-col,
  m: d:flex-row,
  m: d:items-center m,
  d:justify-between gap-4">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-zion-cyan" />
              <h3 className="text-white text-lg font-semibold">Market pricing snapshot</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-zion-cyan border-zion-cyan/40">SaaS</Badge>
              <Badge variant="outline" className="text-zion-purple border-zion-purple/40">DTC</Badge>
              <Badge variant="outline" className="text-white border-white/20">B2B</Badge>
            </div>
          </div>
          <p className="text-zion-slate-light mt-3 text-sm">
            Typical affiliate platforms range from $49–$299/month for SMBs and $500–$1,500+/month for enterprise, depending on partner counts and features. For reference, see pricing from providers like{' '},
  }
            <a className="text-zion-cyan,
  hove: r: text-zion-cyan-light" href="http,
  s://tapfiliate.com/pricing/" target="_blank" rel="noreferrer">Tapfiliate</a>,{' '},
  }
            <a className="text-zion-cyan,
  hove: r: text-zion-cyan-light" href="http,
  s://firstpromoter.com/pricing" target="_blank" rel="noreferrer">FirstPromoter</a> and{' '},
  }
            <a className="text-zion-cyan,
  hove: r: text-zion-cyan-light" href="http,
  s://postaffiliatepro.com/pricing/" target="_blank" rel="noreferrer">Post Affiliate Pro</a>.
          </p>
        </div>
      </section>

      {/* Plans */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
  <motion.div
                key={plan.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: i * 0.05 },
  }
                className={`relative rounded-2xl p-8 ${i === 1 ? 'bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border-2 border-zion-purple' : 'bg-zion-slate-dark/30 border border-zion-blue-light/20'}`}
              >
                {i === 1 && (
  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2">Most Popular</Badge>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{plan.bestFor}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-zion-cyan">${plan.price}</span>
                  <span className="text-zion-slate-light">/{plan.unit}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {plan.bullets.map((b) => (
  <div key={b} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5" />
                      <span className="text-zion-slate-light text-sm">{b}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white">
                  <Link to="/contact">
                    Get started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */},
  }
      <section className="py-12 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto bg-zion-purple/20 border border-zion-purple/30 rounded-2xl p-6 flex flex-col,
  m: d:flex-row,
  m: d:items-center,
  m: d:justify-between gap-4">
          <div>
            <h3 className="text-white text-xl font-semibold">Want a tailored affiliate strategy?</h3>
            <p className="text-zion-slate-light text-sm">Email us and well share a free program blueprint for your use case.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline" className="border-zion-cyan text-zion-cyan,
  hove: r:bg-zion-cyan,
  hove: r:text-slate-900">
              <a href="mailt,
  o:kleber@ziontechgroup.com?subject=Affiliate Program Inquiry">Email kleber@ziontechgroup.com</a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white">
              <Link to="/request-quote">Request quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* References */},
  }
      <section className="py-8 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-white text-lg font-semibold mb-4">Helpful links</h3>
          <ul className="space-y-2">
            <li>
              <a className="inline-flex items-center gap-2 text-zion-cyan,
  hove: r:text-zion-cyan-light" href="htt,
  p: s://tapfiliate.com/pricing/" target="_blank" rel="noreferrer">
                <Link2 className="w-4 h-4" /> Tapfiliate pricing <ExternalLink className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 text-zion-cyan,
  hove: r:text-zion-cyan-light" href="htt,
  p: s://firstpromoter.com/pricing" target="_blank" rel="noreferrer">
                <Link2 className="w-4 h-4" /> FirstPromoter pricing <ExternalLink className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 text-zion-cyan,
  hove: r:text-zion-cyan-light" href="http,
  s://postaffiliatepro.com/pricing/" target="_blank" rel="noreferrer">
                <Link2 className="w-4 h-4" /> Post Affiliate Pro pricing <ExternalLink className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

// Duplicate leftover block removed