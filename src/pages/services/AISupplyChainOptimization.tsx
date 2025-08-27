import { Truck, BarChart3, Globe, Zap, Check, ArrowRight, ExternalLink, Phone, Mail, TrendingUp, Shield, Clock, MapPin } from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    'AI-powered demand forecasting and planning',
    'Real-time inventory optimization and management',
    'Automated supplier selection and evaluation',
    'Route optimization and logistics planning',
    'Supply chain risk assessment and mitigation',
    'Cost optimization and budget management',
    'Sustainability tracking and carbon footprint analysis',
    'Multi-warehouse inventory distribution',
    'Real-time shipment tracking and visibility',
    'Predictive maintenance for logistics equipment'
  ];

  const benefits = [
    'Reduce supply chain costs by up to 25%',
    'Improve inventory turnover by 40%',
    'Reduce lead times by 30%',
    'Increase on-time delivery to 98%',
    'Minimize stockouts and overstock situations',
    'Optimize warehouse space utilization by 35%'
  ];

  const useCases = [
    'Retail and e-commerce optimization',
    'Manufacturing supply chain management',
    'Healthcare logistics and distribution',
    'Food and beverage supply chains',
    'Automotive parts distribution',
    'Pharmaceutical supply chain compliance'
  ];

  const tiers = [
    {
      name: 'Starter',
      price: '$499/mo',
      details: [
        'Up to 5 locations',
        'Basic demand forecasting',
        'Inventory optimization',
        'Email support',
        'Standard reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$1,299/mo',
      details: [
        'Up to 25 locations',
        'Advanced AI forecasting',
        'Multi-warehouse optimization',
        'Priority support',
        'Custom integrations',
        'Advanced analytics'
      ]
    },
    {
      name: 'Enterprise',
      price: '$2,999/mo',
      details: [
        'Unlimited locations',
        'Full AI optimization suite',
        'Custom algorithms',
        'Dedicated support',
        'API access',
        'White-label solutions'
      ]
    }
  ];

  const technicalSpecs = {
    technology: ['Machine Learning', 'Deep Learning', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    integrations: ['SAP', 'Oracle', 'Salesforce', 'Shopify', 'WooCommerce', 'QuickBooks', 'FedEx', 'UPS'],
    security: ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'End-to-end encryption', 'Multi-factor authentication'],
    uptime: '99.95%',
    compliance: ['ISO 9001', 'ISO 14001', 'SOC 2', 'GDPR', 'CCPA']
  };

  const industrySolutions = [
    {
      industry: 'Retail & E-commerce',
      solutions: ['Omnichannel inventory management', 'Seasonal demand forecasting', 'Returns optimization']
    },
    {
      industry: 'Manufacturing',
      solutions: ['Just-in-time inventory', 'Supplier performance tracking', 'Quality control integration']
    },
    {
      industry: 'Healthcare',
      solutions: ['Cold chain management', 'Regulatory compliance', 'Patient safety protocols']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Truck className="w-4 h-4 mr-2" /> AI-Powered Supply Chain Optimization
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Supply Chain Optimization
          </h1>
          <p className="text-zion-slate-light text-xl">
            Revolutionize your supply chain with AI-powered optimization, real-time visibility, and predictive analytics.
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
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Business Benefits</h2>
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
                <Globe className="w-6 h-6 text-zion-cyan mb-3" />
                <div className="text-zion-slate-dark font-semibold">{useCase}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Industry Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {industrySolutions.map((solution) => (
              <div key={solution.industry} className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-4">{solution.industry}</h3>
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
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-4">Integrations</h3>
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
          <div className="text-sm text-zion-slate-light mb-2">Ready to optimize your supply chain?</div>
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