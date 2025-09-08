

export default function AIRealEstate() {
  const features = [
    'AI-powered property valuation and market analysis',
    'Intelligent property matching and recommendations',
    'Automated market trend forecasting',
    'Predictive analytics for investment opportunities',
    'Smart contract automation and management',
    'Virtual property tours and 3D visualization',
    'Integration with major real estate platforms',
    'Custom AI models for local market insights'
  ];

  const tiers = [
    { 
      name: 'Individual Agent', 
      price: '$199/mo', 
      details: ['Up to 100 properties', 'Basic AI analysis', 'Standard reports', 'Email support'] 
    },
    { 
      name: 'Small Agency', 
      price: '$599/mo', 
      details: ['Up to 500 properties', 'Advanced AI features', 'Custom reports', 'Priority support'] 
    },
    { 
      name: 'Enterprise', 
      price: '$1,499/mo', 
      details: ['Unlimited properties', 'Custom AI models', 'Full platform integration', '24/7 dedicated support'] 
    },
  ];

  const useCases = [
    'Residential property valuation and sales',
    'Commercial real estate investment analysis',
    'Property management and optimization',
    'Market research and trend analysis',
    'Investment portfolio management',
    'Development project feasibility studies'
  ];

  const benefits = [
    'Improve property valuation accuracy by 25-40%',
    'Reduce time-to-sale by 30-50%',
    'Increase commission revenue by 20-35%',
    'Optimize pricing strategies for maximum profit',
    'Enhance client satisfaction and retention',
    'Scale operations without additional staff'
  ];

  const industries = [
    'Residential Real Estate',
    'Commercial Real Estate',
    'Property Management',
    'Real Estate Investment',
    'Development & Construction',
    'Property Technology'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Home className="w-4 h-4 mr-2" /> AI-Powered Real Estate Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Real Estate Platform</h1>
          <p className="text-orange-100 text-xl">Transform your real estate business with AI-powered insights that enhance property valuation, optimize pricing, and accelerate sales.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Real Estate Features</h2>
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
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-amber-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-amber-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-amber-400 transition-colors inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['25-40% accuracy improvement', '30-50% faster sales', '20-35% revenue increase'].map((t) => (
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-6 h-6 text-amber-600 mb-3" />
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <Target className="w-5 h-5 text-amber-600 mr-3" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-amber-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Measurable Business Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start p-4 bg-white rounded-lg border border-amber-200">
                <Zap className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
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
                <Building className="w-5 h-5 text-amber-600 mr-3" />
                <span className="text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-gray-600 mb-2">Ready to transform your real estate business?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors">
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