import { TrendingUp, DollarSign, BarChart3, Shield, Check, ArrowRight, ExternalLink, Phone, Mail, Zap, Brain, Clock, Database, Globe } from 'lucide-react';

export default function AIFinancialTrading() {
  const features = [
    'AI-powered market prediction and analysis',
    'Real-time algorithmic trading execution',
    'Portfolio optimization and risk management',
    'Sentiment analysis and news impact assessment',
    'Multi-asset class trading support',
    'Advanced backtesting and strategy validation',
    'Real-time market data and analytics',
    'Automated risk controls and compliance',
    'Custom trading strategy development',
    'Performance analytics and reporting'
  ];

  const benefits = [
    'Increase trading returns by 25-40%',
    'Reduce trading costs by 30%',
    'Minimize emotional trading decisions',
    '24/7 automated market monitoring',
    'Advanced risk management and protection',
    'Scalable trading across multiple markets'
  ];

  const useCases = [
    'Institutional trading and investment',
    'Retail trading and wealth management',
    'Hedge fund operations',
    'Quantitative research and development',
    'Risk management and compliance',
    'Market making and liquidity provision'
  ];

  const tiers = [
    {
      name: 'Professional',
      price: '$999/mo',
      details: [
        'Up to $100K trading volume',
        'Basic AI trading signals',
        'Standard market data',
        'Email support',
        'Basic risk management'
      ]
    },
    {
      name: 'Institutional',
      price: '$2,999/mo',
      details: [
        'Up to $1M trading volume',
        'Advanced AI algorithms',
        'Real-time market data',
        'Priority support',
        'Custom strategies',
        'Advanced analytics'
      ]
    },
    {
      name: 'Enterprise',
      price: '$7,999/mo',
      details: [
        'Unlimited trading volume',
        'Full AI trading suite',
        'Custom algorithm development',
        'Dedicated support',
        'White-label solutions',
        'Multi-exchange support'
      ]
    }
  ];

  const technicalSpecs = {
    technology: ['Deep Learning', 'Reinforcement Learning', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Apache Kafka'],
    integrations: ['Bloomberg', 'Reuters', 'Interactive Brokers', 'TD Ameritrade', 'E*TRADE', 'Fidelity', 'Charles Schwab'],
    security: ['SOC 2 Type II', 'ISO 27001', 'PCI DSS', 'End-to-end encryption', 'Multi-factor authentication', 'Audit logging'],
    uptime: '99.99%',
    compliance: ['SEC', 'FINRA', 'SOC 2', 'ISO 27001', 'GDPR', 'CCPA']
  };

  const tradingSolutions = [
    {
      market: 'Equities',
      solutions: ['Stock trading', 'Options trading', 'ETF management', 'Dividend optimization']
    },
    {
      market: 'Forex',
      solutions: ['Currency pairs', 'Cross-currency trading', 'Interest rate analysis', 'Economic calendar integration']
    },
    {
      market: 'Cryptocurrency',
      solutions: ['Digital asset trading', 'DeFi integration', 'Blockchain analytics', 'Smart contract monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <TrendingUp className="w-4 h-4 mr-2" /> AI-Powered Financial Trading
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Financial Trading Platform
          </h1>
          <p className="text-zion-slate-light text-xl">
            Revolutionize your trading with AI-powered market analysis, algorithmic execution, and intelligent risk management.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Key Features</h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Trading Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <Zap className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
                <DollarSign className="w-6 h-6 text-zion-cyan mb-3" />
                <div className="text-zion-slate-dark font-semibold">{useCase}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Market Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tradingSolutions.map((solution) => (
              <div key={solution.market} className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-4">{solution.market}</h3>
                <ul className="space-y-2">
                  {solution.solutions.map((sol) => (
                    <li key={sol} className="flex items-start text-sm text-zion-slate-dark">
                      <Check className="w-4 h-4 text-zion-cyan mr-2 mt-0.5" />
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
                <div className="text-lg font-semibold mb-1">{tier.name}</div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                <ul className="text-sm text-zion-slate-dark space-y-1">
                  {tier.details.map((detail) => (<li key={detail}>{detail}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Technical Specifications</h2>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSpecs.technology.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-4">Broker Integrations</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSpecs.integrations.map((integration) => (
                    <span key={integration} className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-dark rounded-full text-sm">
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-zion-slate-dark mb-2">Security & Compliance</h4>
                <div className="space-y-1">
                  {technicalSpecs.security.map((sec) => (
                    <div key={sec} className="flex items-center text-sm text-zion-slate-dark">
                      <Shield className="w-4 h-4 text-zion-cyan mr-2" />
                      {sec}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-zion-slate-dark mb-2">Uptime</h4>
                <div className="text-2xl font-bold text-zion-cyan">{technicalSpecs.uptime}</div>
              </div>
              <div>
                <h4 className="font-semibold text-zion-slate-dark mb-2">Compliance Standards</h4>
                <div className="space-y-1">
                  {technicalSpecs.compliance.map((comp) => (
                    <div key={comp} className="flex items-center text-sm text-zion-slate-dark">
                      <Shield className="w-4 h-4 text-zion-cyan mr-2" />
                      {comp}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Ready to revolutionize your trading?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-zion-cyan text-white rounded-lg">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-zion-cyan text-zion-cyan rounded-lg">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4">
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-dark">
              Learn More <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}