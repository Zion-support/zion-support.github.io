import { BarChart3, Target, Users, Check, ExternalLink, Phone, Mail, Zap, Brain, TrendingUp, MessageSquare, Mail as MailIcon } from 'lucide-react';

export default function AIMarketingAutomationSuite() {
  const features = [
    'AI-powered audience segmentation and targeting',
    'Predictive customer behavior modeling',
    'Automated content generation and optimization',
    'Multi-channel campaign orchestration',
    'Real-time performance analytics and optimization',
    'Personalized customer journey mapping',
    'A/B testing with AI-driven insights',
    'Social media automation and scheduling',
    'Email marketing with smart personalization',
    'ROI tracking and attribution modeling'
  ];

  const benefits = [
    'Increase conversion rates by 40-80%',
    'Reduce customer acquisition costs by 30-50%',
    'Improve customer lifetime value by 25-60%',
    'Automate 70% of marketing tasks',
    'Real-time campaign optimization',
    'Data-driven marketing decisions'
  ];

  const useCases = [
    'E-commerce marketing automation',
    'B2B lead generation campaigns',
    'Customer retention programs',
    'Product launch campaigns',
    'Seasonal marketing campaigns',
    'Account-based marketing (ABM)'
  ];

  const tiers = [
    { 
      name: 'Growth', 
      price: '$1,499/mo', 
      details: ['Up to 10,000 contacts', 'Basic AI insights', 'Email support', 'Standard integrations'] 
    },
    { 
      name: 'Professional', 
      price: '$3,999/mo', 
      details: ['Up to 100,000 contacts', 'Advanced AI analytics', 'Priority support', 'Custom integrations'] 
    },
    { 
      name: 'Enterprise', 
      price: '$9,999/mo', 
      details: ['Unlimited contacts', 'Custom AI models', 'Dedicated support', 'White-label solution'] 
    },
  ];

  const marketingChannels = [
    'Email Marketing',
    'Social Media',
    'SMS Marketing',
    'Push Notifications',
    'Web Push',
    'Retargeting Ads'
  ];

  const aiCapabilities = [
    'Predictive analytics',
    'Content optimization',
    'Audience targeting',
    'Campaign automation',
    'Performance optimization',
    'Customer insights'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <BarChart3 className="w-4 h-4 mr-2" /> AI-Powered Marketing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Marketing Automation Suite</h1>
          <p className="text-purple-100 text-xl">Transform your marketing with intelligent automation, predictive analytics, and personalized customer experiences.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Revolutionary Marketing Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-zion-slate-light">
              GDPR/CCPA compliant. 99.9% uptime SLA. Enterprise-grade security.
            </div>
          </div>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Marketing Plans</h3>
            <div className="grid md:grid-cols-1 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-purple-600/10 text-purple-600 rounded-lg hover:bg-purple-600/20 transition-colors inline-flex items-center">
                View Full Pricing <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-purple-600 text-purple-600 rounded-lg inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Marketing Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Use Cases</h3>
            <ul className="space-y-3">
              {useCases.map((u) => (
                <li key={u} className="flex items-start">
                  <Target className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">Multi-Channel Marketing Support</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {marketingChannels.map((c) => (
              <div key={c} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
                <MessageSquare className="w-6 h-6 text-purple-600 mb-3" />
                <div className="text-zion-slate-dark font-semibold">{c}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">AI-Powered Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {aiCapabilities.map((c) => (
              <div key={c} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
                <Brain className="w-6 h-6 text-purple-600 mb-3" />
                <div className="text-zion-slate-dark font-semibold">{c}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4 text-center">Marketing Automation Workflow</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Data Collection</h4>
              <p className="text-sm text-zion-slate-light">AI-powered audience insights</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Segmentation</h4>
              <p className="text-sm text-zion-slate-light">Smart customer grouping</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Automation</h4>
              <p className="text-sm text-zion-slate-light">Trigger-based campaigns</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Optimization</h4>
              <p className="text-sm text-zion-slate-light">AI-driven improvements</p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Ready to revolutionize your marketing?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-purple-600 text-white rounded-lg">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-purple-600 text-purple-600 rounded-lg">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-zion-slate-light">
            Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-purple-600 hover:underline">https://ziontechgroup.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}