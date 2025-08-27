import { Link2, Coins, Percent, ArrowRight, Check, ExternalLink, Phone, Mail } from 'lucide-react';

export default function AffiliateTracking() {
  const features = [
    'Custom referral links and coupons',
    'Multi-touch attribution and fraud checks',
    'Auto payouts with thresholds and approvals',
    'Partner portal and performance dashboards',
    'Webhooks and API for e‑commerce platforms',
    'UTM + channel analytics with ROI'
  ];
  const plans = [
    { name: 'Starter', price: '$49/mo', details: ['100 affiliates', 'Email support'] },
    { name: 'Growth', price: '$149/mo', details: ['1k affiliates', 'Webhooks, API'] },
    { name: 'Pro', price: '$399/mo', details: ['Unlimited', 'SSO, audit logs'] },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6 text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 mb-6">
            <Link2 className="w-4 h-4 mr-2"/> Track, optimize, and grow affiliate revenue
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Affiliate Marketing Tracking</h1>
          <p className="text-white/90 text-xl">Launch and manage your partner program with fraud prevention and auto payouts.</p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Capabilities</h2>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start"><Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5"/><span className="text-zion-slate-dark">{f}</span></li>
            ))}
          </ul>
          <div className="mt-4 text-sm text-zion-slate-light">Integrations: Shopify, WooCommerce, Stripe. CSV import/export.</div>
        </div>
        <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Pricing</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <div key={p.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                <div className="text-lg font-semibold mb-1">{p.name}</div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{p.price}</div>
                <ul className="text-sm text-zion-slate-dark space-y-1">{p.details.map((d) => (<li key={d}>{d}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <a href="/pricing" className="px-5 py-3 bg-zion-cyan/10 text-zion-slate-dark rounded-lg hover:bg-zion-cyan/20 inline-flex items-center">View Full Pricing <ArrowRight className="w-4 h-4 ml-2"/></a>
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-zion-slate-light/40 rounded-lg inline-flex items-center">Learn More <ExternalLink className="w-4 h-4 ml-2"/></a>
          </div>
        </div>
      </section>
      <section className="pb-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {[{icon: Coins, t: 'Automated Payouts'}, {icon: Percent, t: 'Flexible Commissions'}, {icon: Link2, t: 'Deep Links'}].map((c) => (
            <div key={c.t} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
              <c.icon className="w-6 h-6 text-zion-cyan mb-3" />
              <div className="text-zion-slate-dark font-semibold">{c.t}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-zion-cyan text-white rounded-lg"><Phone className="w-4 h-4 mr-2"/> +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-zion-cyan text-zion-cyan rounded-lg"><Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}

