import { TrendingUp, DollarSign, BarChart3, Check, ExternalLink, Phone, Mail, Brain, Target, PieChart, Calculator, Shield } from 'lucide-react';

export default function AIFinancialAnalyticsPlatform() {
  const features = [
    'AI-powered financial forecasting and modeling',
    'Real-time market data analysis and insights',
    'Predictive risk assessment and management',
    'Portfolio optimization and rebalancing',
    'Automated financial reporting and compliance',
    'Cash flow prediction and optimization',
    'Investment opportunity identification',
    'Regulatory compliance monitoring',
    'Multi-currency and multi-asset support',
    'Executive dashboard with KPI tracking'
  ];

  const benefits = [
    'Improve investment returns by 15-35%',
    'Reduce financial risk by 40-60%',
    'Automate 80% of financial analysis tasks',
    'Real-time market insights and alerts',
    'Data-driven investment decisions',
    'Comprehensive compliance coverage'
  ];

  const useCases = [
    'Investment portfolio management',
    'Corporate financial planning',
    'Risk management and compliance',
    'Trading strategy optimization',
    'Mergers and acquisitions analysis',
    'Financial market research'
  ];

  const tiers = [
    { 
      name: 'Professional', 
      price: '$2,999/mo', 
      details: ['Up to 10 portfolios', 'Basic AI insights', 'Email support', 'Standard market data'] 
    },
    { 
      name: 'Institutional', 
      price: '$7,999/mo', 
      details: ['Up to 100 portfolios', 'Advanced AI analytics', 'Priority support', 'Premium market data'] 
    },
    { 
      name: 'Enterprise', 
      price: '$19,999/mo', 
      details: ['Unlimited portfolios', 'Custom AI models', 'Dedicated support', 'White-label solution'] 
    },
  ];

  const financialTools = [
    'Portfolio Analytics',
    'Risk Management',
    'Performance Attribution',
    'Asset Allocation',
    'Scenario Analysis',
    'Compliance Reporting'
  ];

  const aiCapabilities = [
    'Predictive modeling',
    'Risk assessment',
    'Market analysis',
    'Portfolio optimization',
    'Anomaly detection',
    'Trend forecasting'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <DollarSign className="w-4 h-4 mr-2" /> AI-Powered Financial Analytics
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Financial Analytics Platform</h1>
          <p className="text-green-100 text-xl">Make smarter financial decisions with AI-powered analytics, predictive modeling, and real-time market insights.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Advanced Financial Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-zion-slate-light">
              SOC 2 Type II, FINRA, SEC compliant. Real-time market data feeds. 99.99% uptime SLA.
            </div>
          </div>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Financial Plans</h3>
            <div className="grid md:grid-cols-1 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-green-600/10 text-green-600 rounded-lg hover:bg-green-600/20 transition-colors inline-flex items-center">
                View Full Pricing <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-green-600 text-green-600 rounded-lg inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Financial Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
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
                  <Target className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">Financial Analysis Tools</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {financialTools.map((t) => (
              <div key={t} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
                <PieChart className="w-6 h-6 text-green-600 mb-3" />
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
                <Brain className="w-6 h-6 text-green-600 mb-3" />
                <div className="text-zion-slate-dark font-semibold">{c}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4 text-center">Financial Analytics Workflow</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Data Collection</h4>
              <p className="text-sm text-zion-slate-light">Real-time market data feeds</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">AI Analysis</h4>
              <p className="text-sm text-zion-slate-light">Machine learning insights</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Risk Assessment</h4>
              <p className="text-sm text-zion-slate-light">Predictive risk modeling</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Optimization</h4>
              <p className="text-sm text-zion-slate-light">Portfolio recommendations</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4 text-center">Regulatory Compliance</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-zion-slate-dark mb-2">Financial Regulations</h4>
              <p className="text-sm text-zion-slate-light">FINRA, SEC, Basel III, Dodd-Frank compliance</p>
            </div>
            <div className="text-center">
              <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-zion-slate-dark mb-2">Reporting Standards</h4>
              <p className="text-sm text-zion-slate-light">Automated regulatory reporting and audits</p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Ready to transform your financial analytics?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-green-600 text-green-600 rounded-lg">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-zion-slate-light">
            Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">https://ziontechgroup.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}