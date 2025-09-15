import { Shield, Eye, AlertTriangle, Check, ExternalLink, Phone, Mail, Lock, Zap, Brain, Target, BarChart3 } from 'lucide-react';

export default function AICybersecurityThreatHunter() {
  const features = [
    'AI-powered threat detection and hunting',
    'Real-time security monitoring 24/7',
    'Advanced behavioral analytics',
    'Automated incident response',
    'Threat intelligence integration',
    'Zero-day vulnerability detection',
    'Cloud security posture management',
    'Compliance reporting (SOC 2, ISO 27001)',
    'Penetration testing automation',
    'Security awareness training platform'
  ];

  const benefits = [
    'Detect threats 10x faster than traditional methods',
    'Reduce false positives by 80%',
    'Automated response reduces incident time by 60%',
    '24/7 security monitoring without human fatigue',
    'Predictive threat intelligence',
    'Comprehensive compliance coverage'
  ];

  const useCases = [
    'Enterprise cybersecurity operations',
    'Financial services security',
    'Healthcare data protection',
    'Government security compliance',
    'E-commerce fraud prevention',
    'Critical infrastructure protection'
  ];

  const tiers = [
    { 
      name: 'Essential', 
      price: '$2,499/mo', 
      details: ['Up to 100 endpoints', 'Basic threat detection', 'Email support', 'Standard compliance'] 
    },
    { 
      name: 'Professional', 
      price: '$5,999/mo', 
      details: ['Up to 1000 endpoints', 'Advanced threat hunting', '24/7 support', 'Full compliance suite'] 
    },
    { 
      name: 'Enterprise', 
      price: '$15,999/mo', 
      details: ['Unlimited endpoints', 'Custom AI models', 'Dedicated team', 'White-label solution'] 
    },
  ];

  const securityFeatures = [
    'Machine learning threat detection',
    'Behavioral analysis engine',
    'Threat intelligence feeds',
    'Automated incident response',
    'Security orchestration',
    'Compliance automation'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Shield className="w-4 h-4 mr-2" /> AI-Powered Cybersecurity
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Cybersecurity Threat Hunter</h1>
          <p className="text-red-100 text-xl">Stay ahead of cyber threats with intelligent AI-powered security detection and automated response.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Advanced Security Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-zion-slate-light">
              SOC 2 Type II, ISO 27001, GDPR, HIPAA compliant. 99.99% uptime SLA.
            </div>
          </div>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Security Plans</h3>
            <div className="grid md:grid-cols-1 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-red-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-red-600/10 text-red-600 rounded-lg hover:bg-red-600/20 transition-colors inline-flex items-center">
                View Full Pricing <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-red-600 text-red-600 rounded-lg inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Security Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start">
                  <Eye className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
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
                  <Target className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">AI Security Technology Stack</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {securityFeatures.map((f) => (
              <div key={f} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
                <Brain className="w-6 h-6 text-red-600 mb-3" />
                <div className="text-zion-slate-dark font-semibold">{f}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4 text-center">Why Choose AI-Powered Security?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-zion-slate-dark mb-2">Traditional Security</h4>
              <p className="text-sm text-zion-slate-light">Reactive, rule-based, high false positives, human-dependent</p>
            </div>
            <div className="text-center">
              <Brain className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-zion-slate-dark mb-2">AI-Powered Security</h4>
              <p className="text-sm text-zion-slate-light">Proactive, intelligent, low false positives, automated response</p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Ready to secure your digital assets?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-red-600 text-white rounded-lg">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-red-600 text-red-600 rounded-lg">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-zion-slate-light">
            Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-red-600 hover:underline">https://ziontechgroup.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}