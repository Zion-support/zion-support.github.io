import { BarChart3, Activity, Gauge, ArrowRight, Check, ExternalLink, Phone, Mail } from 'lucide-react';

export default function WebsiteAnalytics() {
  const features = [
    'Privacy-first tracking (cookieless option)',
    'Funnels, cohorts, and retention analysis',
    'Source attribution and UTM analytics',
    'Weekly insights digests with AI summaries',
    'Real-time dashboards and anomaly alerts',
    'Embeddable widgets for client reporting'
  ];

  const tiers = [
    { name: 'Starter', price: '$29/mo', details: ['50k events', '1 site', 'Email reports'] },
    { name: 'Growth', price: '$99/mo', details: ['500k events', '5 sites', 'Slack alerts'] },
    { name: 'Pro', price: '$299/mo', details: ['5M events', 'Unlimited sites', 'SAML/SSO'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Activity className="w-4 h-4 mr-2" /> Real, actionable insights for SMBs
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Website Analytics for Small Businesses</h1>
          <p className="text-zion-slate-light text-xl">Understand traffic, conversions, and ROI without the complexity of enterprise tools.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Key Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-zion-slate-light">
              GDPR/CCPA compliant. Export to CSV/BigQuery. Public share links for clients.
            </div>
          </div>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-zion-cyan/10 text-zion-slate-dark rounded-lg hover:bg-zion-cyan/20 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-zion-slate-light/40 rounded-lg inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['Real-time dashboard', 'AI-insight summaries', 'Alerting & anomalies'].map((t) => (
            <div key={t} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
              <BarChart3 className="w-6 h-6 text-zion-cyan mb-3" />
              <div className="text-zion-slate-dark font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Questions?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-zion-cyan text-white rounded-lg">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-zion-cyan text-zion-cyan rounded-lg">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

