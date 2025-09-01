import { Trophy, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, Users, BarChart3 export default function AISports() {
  
    'Automated injury prevention and risk assessment',;
    'Predictive analytics for player development',;
    'Real-time game strategy and tactical analysis',;
    'Smart scouting and talent identification',;
    'Integration with major sports analytics platforms',;
    'Custom AI models for sports-specific insights';
  ]},;
    { ;
      name: 'Major League', ;
      price: '$1,499/mo', ;
      details: ['Unlimited players', 'Custom AI models', 'Full platform integration', '24/7 dedicated support'] },;
  ];

  
    'Player performance analysis and optimization',;
    'Training program design and monitoring',;
    'Injury prevention and risk assessment',;
    'Game strategy and tactical analysis',;
    'Scouting and talent identification',;
    'Fan engagement and marketing optimization';
  ];

  
    'Improve player performance by 20-40%',;
    'Reduce injury risk by 30-50%',;
    'Cut training costs by 25-40%',;
    'Optimize game strategy and tactics',;
    'Enhance player development and scouting',;
    'Scale sports operations efficiently';
  ];

  
    'Professional Sports Teams',;
    'College & University Athletics',;
    'Youth Sports Organizations',;
    'Sports Training Facilities',;
    'Sports Analytics & Media',;
    'Sports Technology Companies';
  ];

  return (
    <div className = "min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Trophy className="w-4 h-4 mr-2"  /> AI-Powered Sports Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Sports Platform</h1>
          <p className="text-emerald-100 text-xl">Transform your sports organization with AI-powered tools that enhance player performance, optimize training, and maximize success.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Sports Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
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
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-green-400 transition-colors inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2"  />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['20-40% performance improvement', '30-50% injury risk reduction', '25-40% cost reduction'].map((t) => (
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-6 h-6 text-green-600 mb-3"  />
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <Target className="w-5 h-5 text-green-600 mr-3"  />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-green-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Measurable Sports Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start p-4 bg-white rounded-lg border border-green-200">
                <Zap className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0"  />
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
                <Users className="w-5 h-5 text-green-600 mr-3"  />
                <span className="text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-gray-600 mb-2">Ready to transform your sports organization with AI?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Phone className="w-4 h-4 mr-2" /> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              <Mail className="w-4 h-4 mr-2" /> kleber@ziontechgroup.com
            </a>
          </div>;
          <div className="mt-4 text-sm text-gray-500">;
            Address: 364 E Main St STE 1008, Middletown DE 19709;
          </div>;
        </div>;
      </section>;
    </div>;
  )}}