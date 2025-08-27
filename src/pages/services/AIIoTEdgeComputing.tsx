import { Cpu, BarChart3, ArrowRight, Check, ExternalLink, Phone, Mail, Wifi, TrendingUp, Zap, Target, Clock, Shield, Globe } from 'lucide-react';

export default function AIIoTEdgeComputing() {
  const features = [
    'AI-powered edge computing and processing',
    'Real-time IoT device management and monitoring',
    'Intelligent edge analytics and decision making',
    'Advanced device connectivity and protocol support',
    'Automated edge device provisioning and updates',
    'Real-time data processing and filtering',
    'Advanced security and encryption at the edge',
    'Scalable edge computing infrastructure',
    'AI-driven predictive maintenance for IoT devices',
    'Multi-cloud edge orchestration and management'
  ];

  const benefits = [
    'Reduce latency by 80-90%',
    'Lower bandwidth costs by 60%',
    'Improve device reliability by 75%',
    'Enable real-time decision making',
    'Reduce cloud computing costs by 40%',
    'Enhance data privacy and security'
  ];

  const useCases = [
    'Smart manufacturing and Industry 4.0',
    'Connected healthcare and medical devices',
    'Smart cities and infrastructure',
    'Autonomous vehicles and transportation',
    'Energy management and smart grids',
    'Retail and supply chain monitoring'
  ];

  const tiers = [
    { 
      name: 'Edge Starter', 
      price: '$499/mo', 
      details: ['Up to 100 devices', 'Basic AI processing', 'Standard monitoring', 'Email support'] 
    },
    { 
      name: 'Edge Professional', 
      price: '$1,299/mo', 
      details: ['Up to 1,000 devices', 'Advanced AI features', 'Custom dashboards', 'Priority support'] 
    },
    { 
      name: 'Enterprise Edge', 
      price: '$3,999/mo', 
      details: ['Unlimited devices', 'Full AI suite', 'White-label options', '24/7 support'] 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Cpu className="w-4 h-4 mr-2" /> AI-powered IoT edge computing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI IoT Edge Computing</h1>
          <p className="text-zion-slate-light text-xl">Transform your IoT infrastructure with AI-powered edge computing that processes data locally, reduces latency, and enables real-time intelligent decision making.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Advanced Edge Computing Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start">
                    <Zap className="w-4 h-4 text-zion-cyan mr-2 mt-0.5" />
                    <span className="text-zion-slate-dark text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Pricing Plans</h3>
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
          {[
            { icon: Wifi, title: 'Device Connectivity', desc: 'Advanced IoT device management and monitoring' },
            { icon: TrendingUp, title: 'Real-time Processing', desc: 'Local AI processing for instant decisions' },
            { icon: Shield, title: 'Edge Security', desc: 'Advanced security and encryption at the edge' }
          ].map((item) => (
            <div key={item.title} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
              <item.icon className="w-6 h-6 text-zion-cyan mb-3" />
              <div className="text-zion-slate-dark font-semibold mb-2">{item.title}</div>
              <div className="text-zion-slate-light text-sm">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-zion-cyan/5 to-zion-blue/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Perfect For These Industries</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((uc) => (
              <div key={uc} className="flex items-center">
                <Target className="w-5 h-5 text-zion-cyan mr-3" />
                <span className="text-zion-slate-dark">{uc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Ready to transform your IoT infrastructure?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-zion-cyan text-white rounded-lg">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-zion-cyan text-zion-cyan rounded-lg">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-zion-slate-light">
            Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}