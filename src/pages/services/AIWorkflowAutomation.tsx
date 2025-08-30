import { Workflow, Zap, Check, ExternalLink, Phone, Mail, ArrowRight, Brain } from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    'Intelligent process mapping and optimization',
    'AI-powered decision trees and conditional logic',
    'Multi-platform integration (Slack, Teams, Zapier)',
    'Real-time workflow analytics and performance metrics',
    'Automated error handling and fallback procedures',
    'Custom workflow templates for common business processes',
    'Role-based access control and approval workflows',
    'Mobile workflow management and notifications'
  ];

  const tiers = [
    { 
      name: 'Starter', 
      price: '$199/mo', 
      details: ['Up to 10 workflows', '5 team members', 'Basic integrations', 'Email support'] 
    },
    { 
      name: 'Professional', 
      price: '$499/mo', 
      details: ['Up to 50 workflows', '25 team members', 'Advanced integrations', 'Priority support'] 
    },
    { 
      name: 'Enterprise', 
      price: '$1,299/mo', 
      details: ['Unlimited workflows', 'Unlimited team members', 'Custom integrations', '24/7 support'] 
    },
  ];

  const useCases = [
    'Customer onboarding automation',
    'Invoice processing and approval',
    'Employee onboarding and offboarding',
    'Project approval workflows',
    'Quality assurance processes',
    'Compliance documentation flows'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Workflow className="w-4 h-4 mr-2" /> AI-Powered Business Process Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Workflow Automation Platform</h1>
          <p className="text-blue-100 text-xl">Transform your business processes with intelligent automation that learns, adapts, and scales with your organization.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime guarantee.
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-blue-400 transition-colors inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['AI-powered optimization', 'Real-time analytics', 'Multi-platform support'].map((t) => (
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-6 h-6 text-blue-600 mb-3" />
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <Zap className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-gray-600 mb-2">Ready to automate your workflows?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
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