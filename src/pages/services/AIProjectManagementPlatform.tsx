import { Calendar, Users, Check, ExternalLink, Phone, Mail, Brain, Target, TrendingUp, BarChart3, Clock, Zap, FolderOpen } from 'lucide-react';

export default function AIProjectManagementPlatform() {
  const features = [
    'AI-powered project planning and scheduling optimization',
    'Intelligent resource allocation and workload balancing',
    'Predictive risk assessment and mitigation strategies',
    'Automated task prioritization and dependency management',
    'Real-time project progress tracking and analytics',
    'Smart team collaboration and communication tools',
    'Automated reporting and stakeholder updates',
    'Integration with popular project management tools',
    'Mobile app for on-the-go project management',
    'Advanced project portfolio management'
  ];

  const benefits = [
    'Complete projects 20-40% faster',
    'Reduce project costs by 15-30%',
    'Improve team productivity by 25-50%',
    'Minimize project risks and delays',
    'Better resource utilization',
    'Enhanced stakeholder communication'
  ];

  const useCases = [
    'Software development projects',
    'Construction and engineering projects',
    'Marketing campaign management',
    'Event planning and execution',
    'Product development and launch',
    'Research and development projects'
  ];

  const tiers = [
    { 
      name: 'Team', 
      price: '$1,299/mo', 
      details: ['Up to 25 team members', 'Basic AI insights', 'Email support', 'Standard integrations'] 
    },
    { 
      name: 'Professional', 
      price: '$3,499/mo', 
      details: ['Up to 100 team members', 'Advanced AI analytics', 'Priority support', 'Custom integrations'] 
    },
    { 
      name: 'Enterprise', 
      price: '$8,999/mo', 
      details: ['Unlimited team members', 'Custom AI models', 'Dedicated support', 'White-label solution'] 
    },
  ];

  const projectTools = [
    'Task Management',
    'Resource Planning',
    'Risk Management',
    'Time Tracking',
    'Budget Management',
    'Reporting & Analytics'
  ];

  const aiCapabilities = [
    'Predictive scheduling',
    'Resource optimization',
    'Risk prediction',
    'Performance analytics',
    'Automated reporting',
    'Smart notifications'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Calendar className="w-4 h-4 mr-2" /> AI-Powered Project Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Project Management Platform</h1>
          <p className="text-indigo-100 text-xl">Streamline your projects with intelligent planning, automated optimization, and predictive insights.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Intelligent Project Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-zion-slate-light">
              SOC 2 Type II compliant. 99.9% uptime SLA. Enterprise-grade security.
            </div>
          </div>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Project Plans</h3>
            <div className="grid md:grid-cols-1 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-indigo-600/10 text-indigo-600 rounded-lg hover:bg-indigo-600/20 transition-colors inline-flex items-center">
                View Full Pricing <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Project Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-indigo-600 mr-3 mt-0.5" />
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
                  <Target className="w-5 h-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">Project Management Tools</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projectTools.map((t) => (
              <div key={t} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
                <FolderOpen className="w-6 h-6 text-indigo-600 mb-3" />
                <div className="text-zion-slate-dark font-semibold">{t}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">AI-Powered Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {aiCapabilities.map((c) => (
              <div key={c} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
                <Brain className="w-6 h-6 text-indigo-600 mb-3" />
                <div className="text-zion-slate-dark font-semibold">{c}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4 text-center">Project Management Workflow</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Project Planning</h4>
              <p className="text-sm text-zion-slate-light">AI-powered scheduling</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Resource Allocation</h4>
              <p className="text-sm text-zion-slate-light">Smart team assignment</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Execution & Monitoring</h4>
              <p className="text-sm text-zion-slate-light">Real-time tracking</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Optimization</h4>
              <p className="text-sm text-zion-slate-light">Continuous improvement</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4 text-center">Project Success Metrics</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-zion-slate-dark mb-2">On-Time Delivery</h4>
                              <p className="text-sm text-zion-slate-light">Target: &gt; 95%</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-zion-slate-dark mb-2">Budget Adherence</h4>
                              <p className="text-sm text-zion-slate-light">Target: &gt; 90%</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-zion-slate-dark mb-2">Team Satisfaction</h4>
                              <p className="text-sm text-zion-slate-light">Target: &gt; 85%</p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Ready to transform your project management?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-zion-slate-light">
            Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">https://ziontechgroup.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}