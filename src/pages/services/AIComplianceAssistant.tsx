import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, CheckCircle, Scale, BookOpen, ArrowRight } from 'lucide-react';

export default function AIComplianceAssistant() {
  const frameworks = [
    'SOC 2',
    'ISO 27001',
    'HIPAA',
    'GDPR',
    'PCI DSS',
    'NIST CSF',
  ];

  const features = [
    'Policy drafting and gap analysis with citations',
    'Evidence collection and auditor-ready reports',
    'Vendor risk questionnaires (SIG Lite, CAIQ)',
    'Automated control mapping and task workflows',
  ];

  const pricing = [
    'Starter: From $1,000/month (single framework)',
    'Growth: From $2,500/month (multi-framework + workflows)',
    'Enterprise: Custom + SSO, DLP, private deployments',
  ];

  const links = [
    { label: 'NIST CSF', url: 'https://www.nist.gov/cyberframework' },
    { label: 'SOC 2', url: 'https://www.aicpa.org/resources/article/soc-2-frequently-asked-questions' },
    { label: 'ISO 27001', url: 'https://www.iso.org/standard/27001' },
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Compliance Assistant</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Draft policies, collect evidence, and stay audit-ready across multiple frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-200">
              Get Audit-Ready
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-3 border border-rose-500 text-rose-300 font-semibold rounded-lg hover:bg-rose-500 hover:text-white transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Features</h3>
            </div>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-rose-400 mr-3" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((fw) => (
                <span key={fw} className="px-3 py-1 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-300">{fw}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Pricing</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              {pricing.map((p) => (<li key={p}>{p}</li>))}
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              References: {links.map((l, i) => (
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="text-rose-300 hover:underline mr-2">{l.label}{i < links.length - 1 ? ',' : ''}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

