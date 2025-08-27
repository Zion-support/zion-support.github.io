import { Users, BarChart3, ArrowRight, Check, ExternalLink, Phone, Mail, Search, TrendingUp, Zap, Target, Clock, Briefcase, Globe } from 'lucide-react';

export default function AIHRTalentAcquisition() {
  const features = [
    'AI-powered candidate sourcing and matching',
    'Intelligent resume parsing and skill extraction',
    'Automated candidate screening and assessment',
    'Predictive candidate success modeling',
    'Advanced interview scheduling and coordination',
    'Real-time candidate engagement tracking',
    'Automated reference checking and verification',
    'Intelligent job posting optimization',
    'Advanced analytics and reporting dashboard',
    'Multi-channel recruitment campaign management'
  ];

  const benefits = [
    'Reduce time-to-hire by 60%',
    'Improve candidate quality by 45%',
    'Reduce recruitment costs by 40%',
    'Increase diversity in hiring by 35%',
    'Automate 80% of manual recruitment tasks',
    'Improve candidate experience significantly'
  ];

  const useCases = [
    'Enterprise talent acquisition',
    'Tech recruitment and hiring',
    'Healthcare staffing solutions',
    'Financial services recruitment',
    'Manufacturing and logistics hiring',
    'Retail and hospitality staffing'
  ];

  const tiers = [
    { 
      name: 'Talent Starter', 
      price: '$299/mo', 
      details: ['Up to 50 job postings', 'Basic AI matching', 'Standard reporting', 'Email support'] 
    },
    { 
      name: 'Talent Professional', 
      price: '$799/mo', 
      details: ['Up to 200 job postings', 'Advanced AI features', 'Custom dashboards', 'Priority support'] 
    },
    { 
      name: 'Enterprise Talent', 
      price: '$2,499/mo', 
      details: ['Unlimited job postings', 'Full AI suite', 'White-label options', '24/7 support'] 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Users className="w-4 h-4 mr-2" /> AI-powered HR talent acquisition
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI HR Talent Acquisition</h1>
          <p className="text-zion-slate-light text-xl">Revolutionize your hiring process with AI-powered talent acquisition that finds, screens, and matches the perfect candidates for your organization.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Intelligent Recruitment Features</h2>
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
            { icon: Search, title: 'Smart Sourcing', desc: 'AI-powered candidate discovery and matching' },
            { icon: TrendingUp, title: 'Quality Hires', desc: 'Predictive success modeling for better candidates' },
            { icon: Clock, title: 'Faster Hiring', desc: 'Streamlined process from sourcing to onboarding' }
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
          <div className="text-sm text-zion-slate-light mb-2">Ready to transform your talent acquisition?</div>
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