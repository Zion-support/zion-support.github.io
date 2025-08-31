import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from 'lucide-react';

export default function AISecurityMonitoring() {
  const features = [
    'AI-powered security monitoring optimization',
    'Intelligent monitoring strategy management and execution',
    'Automated security threat detection and assessment',
    'Predictive analytics for monitoring needs',
    'Smart monitoring framework management',
    'AI-driven monitoring automation and orchestration',
    'Real-time monitoring performance tracking',
    'Custom AI models for monitoring applications'
  ];

  const tiers = [
    { name: 'Developer', 
      price: '$299/mo', 
      details: ['Up to 10 systems', 'Basic AI features', 'Standard monitoring', 'Email support'] 
    },
    { name: 'Business', 
      price: '$799/mo', 
      details: ['Up to 50 systems', 'Advanced AI features', 'Enhanced monitoring', 'Priority support'] 
    },
    { name: 'Enterprise', 
      price: '$1,999/mo', 
      details: ['Unlimited systems', 'Custom AI models', 'Full monitoring suite', '24/7 dedicated support'] 
    },
  ];

  const useCases = [
    'Security monitoring optimization',
    'Monitoring strategy management and execution',
    'Security threat detection and assessment',
    'Monitoring framework management and automation',
    'Monitoring automation and orchestration',
    'Monitoring scaling and management'
  ];

  const benefits = [
    'Improve security monitoring performance by 50-80%',
    'Reduce threat detection time by 40-70%',
    'Cut security monitoring costs by 35-65%',
    'Enhance security monitoring reliability and scalability',
    'Optimize resource utilization',
    'Scale security monitoring operations efficiently'
  ];

  const industries = [
    'Software Development',
    'E-commerce & Retail',
    'Financial Services',
    'Healthcare & Life Sciences',
    'Media & Entertainment',
    'Technology & SaaS'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-500 via-gray-500 to-zinc-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2" /> AI-Powered Security Monitoring Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Security Monitoring Platform</h1>
          <p className="text-slate-100 text-xl">Transform your security monitoring with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Monitoring Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-slate-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-slate-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-slate-400 transition-colors inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['50-80% performance improvement', '40-70% detection time reduction', '35-65% cost reduction'].map((t) => (
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-6 h-6 text-slate-600 mb-3" />
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <Target className="w-5 h-5 text-slate-600 mr-3" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-slate-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Measurable Security Monitoring Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start p-4 bg-white rounded-lg border border-slate-200">
                <Zap className="w-5 h-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <FileText className="w-5 h-5 text-slate-600 mr-3" />
                <span className="text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-gray-600 mb-2">Ready to transform your security monitoring with AI?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-slate-600 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </div>
        </div>
      </section>
    </div>
  );
}