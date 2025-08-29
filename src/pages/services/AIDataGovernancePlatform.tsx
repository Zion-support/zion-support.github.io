import { Database, Shield, BarChart3, ArrowRight, Check, ExternalLink, Phone, Mail, Lock, Eye, Users, FileText, Zap, Globe } from 'lucide-react';

export default function AIDataGovernancePlatform() {
  const features = [
    'AI-powered data discovery and classification',
    'Automated data quality assessment and monitoring',
    'Intelligent data lineage tracking and visualization',
    'Advanced data privacy and compliance automation',
    'Real-time data access control and monitoring',
    'Automated data retention policy enforcement',
    'AI-driven data catalog and metadata management',
    'Comprehensive audit trails and reporting',
    'Multi-cloud data governance and synchronization',
    'Advanced data masking and anonymization'
  ];

  const benefits = [
    'Ensure 100% regulatory compliance (GDPR, CCPA, HIPAA)',
    'Reduce data governance costs by 50%',
    'Improve data quality by 80%',
    'Automate 90% of compliance tasks',
    'Eliminate data privacy violations',
    'Streamline data access management'
  ];

  const complianceFrameworks = [
    'GDPR (General Data Protection Regulation)',
    'CCPA (California Consumer Privacy Act)',
    'HIPAA (Health Insurance Portability and Accountability Act)',
    'SOX (Sarbanes-Oxley Act)',
    'SOC 2 Type II Compliance',
    'ISO 27001 Information Security'
  ];

  const tiers = [
    { 
      name: 'Compliance Starter', 
      price: '$499/mo', 
      details: ['Up to 1TB data', 'Basic AI governance', 'Standard compliance', 'Email support'] 
    },
    { 
      name: 'Enterprise Governance', 
      price: '$1,299/mo', 
      details: ['Up to 10TB data', 'Advanced AI features', 'Full compliance suite', 'Priority support'] 
    },
    { 
      name: 'Global Compliance', 
      price: '$3,999/mo', 
      details: ['Unlimited data', 'AI-powered governance', 'Global compliance', '24/7 support'] 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2" /> AI-powered data governance and compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Data Governance Platform</h1>
          <p className="text-zion-slate-light text-xl">Intelligent data governance that automatically discovers, classifies, and protects your data while ensuring full regulatory compliance.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Advanced AI Features</h2>
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
            { icon: Lock, title: 'Data Protection', desc: 'Advanced encryption and access controls for sensitive data' },
            { icon: Eye, title: 'Privacy Compliance', desc: 'Automated compliance with global privacy regulations' },
            { icon: FileText, title: 'Audit Ready', desc: 'Comprehensive audit trails and compliance reporting' }
          ].map((item) => (
            <div key={item.title} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
              <item.icon className="w-6 h-6 text-zion-cyan mb-3" />
              <div className="text-zion-slate-dark font-semibold mb-2">{item.title}</div>
              <div className="text-zion-slate-light text-sm">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-zion-cyan/5 to-zion-blue/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Compliance Frameworks Supported</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {complianceFrameworks.map((framework) => (
              <div key={framework} className="flex items-center">
                <Shield className="w-5 h-5 text-zion-cyan mr-3" />
                <span className="text-zion-slate-dark">{framework}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Ready to secure your data governance?</div>
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