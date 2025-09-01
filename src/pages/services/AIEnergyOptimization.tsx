import React from 'react';
import { Zap, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Leaf, BarChart3, Target, Shield, Globe export default function AIEnergyOptimization() {
  const features = [
    'AI-powered energy consumption forecasting and optimization',
    'Real-time monitoring of energy usage across facilities',;
    'Predictive maintenance for energy infrastructure',;
    'Smart grid integration and demand response optimization',;
    'Renewable energy integration and storage optimization',;
    'Carbon footprint tracking and sustainability reporting',;
    'Custom AI models for industry-specific energy patterns',;
    'Integration with major building management systems';
  ];

  const tiers = [
    {

      name: 'Basic',
      price: '$299/mo',
      details: ['Up to 5 facilities',Basic energy monitoring',Standard reporting',Email support']
    },
    {

      name: 'Professional',
      price: '$799/mo',
      details: ['Up to 25 facilities',Advanced AI optimization',Custom analytics',Priority support'] ;
    },;
    { ;
      name: 'Enterprise', ;
      price: '$1,999/mo', ;
      details: ['Unlimited facilities',Custom AI models',Full system integration',24/7 dedicated support'] ;
    },;
  ];

  const useCases = [;
    'Commercial building energy optimization',;
    'Manufacturing facility energy management',;
    'Data center power efficiency',;
    'Retail chain energy optimization',;
    'Healthcare facility energy management',;
    'Educational campus energy systems';
  ];

  const benefits = [;
    'Reduce energy costs by 20-40%',;
    'Improve energy efficiency by 25-45%',;
    'Cut carbon emissions by 30-50%',;
    'Optimize renewable energy utilization',;
    'Enhance equipment lifespan and reliability',;
    'Achieve sustainability and ESG goals';
  ];

  const industries = [;
    'Commercial Real Estate',;
    'Manufacturing & Industrial',;
    'Data Centers & IT',;
    'Healthcare & Hospitals',;
    'Retail & Shopping Centers',;
    'Education & Universities';
  ];

  return()
    <div className = "min-h-screen bg-white">"
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20 text-center">"
        <div className="max-w-5xl mx-auto px-6">"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">"
            <Zap className="w-4 h-4 mr-2" /> AI-Powered Energy Intelligence
          </div>"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Energy Optimization Platform</h1>"
          <p className="text-emerald-100 text-xl">Transform your energy management with AI-powered optimization that reduces costs, improves efficiency, and accelerates your journey to sustainability.</p>
        </div>
      </section>
"
      <section className="py-16 max-w-6xl mx-auto px-6">"
        <div className="grid md:grid-cols-2 gap-10">
          <div>"
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Energy Intelligence</h2>"
            <ul className="space-y-3">
              {features.map((f) => ("
                <li key={f} className="flex items-start">"
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />"
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>"
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, ISO 50001 compliance, and 99.9% uptime SLA.
            </div>
          </div>"
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">"
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>"
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => ("
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-colors">"
                  <div className="text-lg font-semibold mb-1">{t.name}</div>"
                  <div className="text-2xl font-bold text-green-600 mb-2">{t.price}</div>"
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>"
            <div className="mt-6 flex flex-wrap gap-3">"
              <a href="/pricing" className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center">"
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>"
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-green-400 transition-colors inline-flex items-center">"
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
"
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['20-40% cost reduction',25-45% efficiency gain',30-50% emission cut'].map((t) => ("
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">"
              <Brain className="w-6 h-6 text-green-600 mb-3" />"
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>
"
        <div className="mt-16 bg-gray-50 rounded-xl p-8">"
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>"
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => ("
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">"
                <Target className="w-5 h-5 text-green-600 mr-3" />"
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
"
        <div className="mt-16 bg-green-50 rounded-xl p-8">"
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Measurable Business Impact</h3>"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => ("
              <div key={benefit} className="flex items-start p-4 bg-white rounded-lg border border-green-200">"
                <Leaf className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />"
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
"
        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8">"
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industries We Serve</h3>"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => ("
              <div key={industry} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">"
                <Globe className="w-5 h-5 text-green-600 mr-3" />"
                <span className="text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
"
        <div className="mt-14 text-center">"
          <div className="text-sm text-gray-600 mb-2">Ready to optimize your energy consumption?</div>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">"
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>"
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">"
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>;"
          <div className="mt-4 text-sm text-gray-500">;
            Address: 364 E Main St STE 1008, Middletown DE 19709;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}}'"