import { Atom, BarChart3, ArrowRight, Check, ExternalLink, Phone, Mail, Zap, TrendingUp, Brain, Target, Clock, Shield, Globe } from 'lucide-react';

export default function AIQuantumMachineLearning() {
  const features = [
    'Quantum-enhanced machine learning algorithms',
    'Hybrid quantum-classical computing solutions',
    'Advanced quantum neural network optimization',
    'Real-time quantum algorithm execution',
    'Quantum machine learning model training',
    'Advanced quantum data processing and analysis',
    'Quantum-enhanced optimization algorithms',
    'Real-time quantum computing resource management',
    'AI-driven quantum algorithm selection',
    'Comprehensive quantum computing analytics'
  ];

  const benefits = [
    'Solve complex problems 100x faster than classical computing',
    'Improve machine learning accuracy by 40-60%',
    'Enable previously impossible computational tasks',
    'Reduce computational costs for complex algorithms',
    'Accelerate scientific research and discovery',
    'Enable breakthrough innovations in AI and ML'
  ];

  const useCases = [
    'Drug discovery and pharmaceutical research',
    'Financial modeling and risk assessment',
    'Climate modeling and environmental research',
    'Materials science and nanotechnology',
    'Cryptography and cybersecurity',
    'Artificial intelligence and machine learning'
  ];

  const tiers = [
    { 
      name: 'Quantum Starter', 
      price: '$1,999/mo', 
      details: ['Up to 100 quantum operations', 'Basic quantum algorithms', 'Standard support', 'Email support'] 
    },
    { 
      name: 'Quantum Professional', 
      price: '$4,999/mo', 
      details: ['Up to 1,000 quantum operations', 'Advanced quantum features', 'Custom algorithms', 'Priority support'] 
    },
    { 
      name: 'Enterprise Quantum', 
      price: '$12,999/mo', 
      details: ['Unlimited quantum operations', 'Full quantum suite', 'White-label options', '24/7 support'] 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Atom className="w-4 h-4 mr-2" /> AI-powered quantum machine learning
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Quantum Machine Learning</h1>
          <p className="text-zion-slate-light text-xl">Revolutionize your computational capabilities with AI-powered quantum machine learning that solves previously impossible problems and accelerates innovation.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Quantum Computing Features</h2>
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
            { icon: Brain, title: 'Quantum AI', desc: 'AI-powered quantum algorithm optimization and selection' },
            { icon: Zap, title: 'Quantum Speed', desc: '100x faster computation for complex problems' },
            { icon: Shield, title: 'Quantum Security', desc: 'Advanced quantum cryptography and security' }
          ].map((item) => (
            <div key={item.title} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
              <item.icon className="w-6 h-6 text-zion-cyan mb-3" />
              <div className="text-zion-slate-dark font-semibold mb-2">{item.title}</div>
              <div className="text-zion-slate-light text-sm">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-zion-cyan/5 to-zion-blue/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Perfect For These Research Areas</h3>
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
          <div className="text-sm text-zion-slate-light mb-2">Ready to explore quantum computing?</div>
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