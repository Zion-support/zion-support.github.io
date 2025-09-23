import { Smartphone, MessageSquare, Users, BarChart2, ArrowRight, Check, Phone, Mail } from 'lucide-react';

export default function MobileSurvey() {
  const features = [
    'Mobile-first NPS/CSAT/CES templates',
    'QR code and link campaigns',
    'AI topic clustering and sentiment',
    'Webhooks to CRM/Slack',
    'Kiosk mode for in-person feedback',
    'Multilingual with auto-translate'
  ];
  const pricing = [
    { name: 'Starter', price: '$39/mo', details: ['1,000 responses', 'Email export'] },
    { name: 'Team', price: '$99/mo', details: ['10,000 responses', 'Slack + Webhooks'] },
    { name: 'Business', price: '$249/mo', details: ['100,000 responses', 'SSO, Custom domains'] },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-zion-cyan to-zion-purple py-20 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 mb-6">
            <Smartphone className="w-4 h-4 mr-2"/> Capture feedback anywhere, anytime
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mobile Feedback Surveys</h1>
          <p className="text-white/90 text-xl">Modern, fast surveys with AI insights to improve customer experience.</p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Features</h2>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start"><Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5"/><span className="text-zion-slate-dark">{f}</span></li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Pricing</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {pricing.map((p) => (
              <div key={p.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                <div className="text-lg font-semibold mb-1">{p.name}</div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{p.price}</div>
                <ul className="text-sm text-zion-slate-dark space-y-1">{p.details.map((d) => (<li key={d}>{d}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <a href="/pricing" className="px-5 py-3 bg-zion-cyan/10 text-zion-slate-dark rounded-lg hover:bg-zion-cyan/20 inline-flex items-center">View Full Pricing <ArrowRight className="w-4 h-4 ml-2"/></a>
          </div>
        </div>
      </section>
      <section className="pb-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {[{icon: MessageSquare, t: 'Conversational UX'}, {icon: Users, t: 'High Completion'}, {icon: BarChart2, t: 'AI Insights'}].map((c) => (
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

