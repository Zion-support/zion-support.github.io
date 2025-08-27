import { Workflow, Zap, BarChart3, ArrowRight, Check, ExternalLink, Phone, Mail, Brain, Clock, Shield, Users } from 'lucide-react';

export default function AIWorkflowOrchestrator() {
  const features = [
    'AI-powered workflow automation and orchestration',
    'Intelligent process optimization and decision making',
    'Real-time workflow monitoring and analytics',
    'Multi-platform integration and API management',
    'Advanced workflow templates and customization',
    'Predictive workflow failure prevention',
    'Role-based access control and security',
    'Scalable workflow engine for enterprise use',
    'Automated workflow testing and validation',
    'Comprehensive audit trails and compliance'
  ];

  const benefits = [
    'Reduce manual workflow processing by 85%',
    'Improve process efficiency by 60%',
    'Cut operational costs by 40%',
    'Eliminate workflow bottlenecks and delays',
    'Ensure 99.9% workflow execution accuracy',
    'Enable real-time process optimization'
  ];

  const useCases = [
    'Customer onboarding automation',
    'Invoice processing and approval workflows',
    'HR recruitment and onboarding processes',
    'IT service request management',
    'Sales pipeline automation',
    'Compliance and audit workflows'
  ];

  const tiers = [
    { 
      name: 'Starter', 
      price: '$299/mo', 
      details: ['Up to 100 workflows', 'Basic AI optimization', 'Email support', 'Standard integrations'] 
    },
    { 
      name: 'Professional', 
      price: '$799/mo', 
      details: ['Up to 1,000 workflows', 'Advanced AI features', 'Priority support', 'Custom integrations'] 
    },
    { 
      name: 'Enterprise', 
      price: '$2,499/mo', 
      details: ['Unlimited workflows', 'Full AI orchestration', '24/7 support', 'White-label options'] 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Workflow className="w-4 h-4 mr-2" /> Next-generation AI workflow orchestration
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Workflow Orchestrator</h1>
          <p className="text-zion-slate-light text-xl">Intelligent workflow automation that learns, optimizes, and orchestrates complex business processes with AI-powered decision making.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Revolutionary Features</h2>
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
            { icon: Brain, title: 'AI-Powered Intelligence', desc: 'Machine learning algorithms that continuously optimize workflows' },
            { icon: Clock, title: 'Real-time Optimization', desc: 'Instant process adjustments based on performance data' },
            { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant with advanced access controls' }
          ].map((item) => (
            <div key={item.title} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
              <item.icon className="w-6 h-6 text-zion-cyan mb-3" />
              <div className="text-zion-slate-dark font-semibold mb-2">{item.title}</div>
              <div className="text-zion-slate-light text-sm">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-zion-cyan/5 to-zion-blue/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Perfect For</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((uc) => (
              <div key={uc} className="flex items-center">
                <Users className="w-5 h-5 text-zion-cyan mr-3" />
                <span className="text-zion-slate-dark">{uc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Ready to transform your workflows?</div>
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