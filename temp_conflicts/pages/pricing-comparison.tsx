import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function PricingComparisonPage() {_const _serviceComparisons = [
    {
      service: 'AI Content Generator', _zionPricing: {
        starter: '$19/month', _professional: '$49/month', _enterprise: '$199/month'},
      competitors: [
        {_name: 'Jasper AI', _pricing: '$39/month', _rating: '4.8/5', _pros: ['Excellent templates', _'Good AI quality', _'Wide integrations'], _cons: ['Higher pricing', _'Limited customization', _'No unlimited plan'], _savings: 'Save $20/month with Zion'},
        {_name: 'Copy.ai', _pricing: '$36/month', _rating: '4.6/5', _pros: ['Unlimited words', _'Good value', _'Simple interface'], _cons: ['Basic features', _'Limited templates', _'No advanced SEO'], _savings: 'Save $17/month with Zion'},
        {_name: 'Writesonic', _pricing: '$19/month', _rating: '4.4/5', _pros: ['Affordable', _'Good for beginners', _'Basic features'], _cons: ['Limited features', _'Basic AI models', _'No team features'], _savings: 'Same price, _better features'}
      ],
      features: [
        'AI-powered content generation',
        'Multiple content formats',
        'SEO optimization',
        'Team collaboration',
        'API access',
        'Custom templates'
      ],
      color: 'from-purple-500 to-indigo-600',
      icon: '🤖'
    },
    {_service: 'Cloud Monitoring', _zionPricing: {
        starter: '$29/month', _professional: '$99/month', _enterprise: '$299/month'},
      competitors: [
        {_name: 'Datadog', _pricing: '$15/host/month', _rating: '4.7/5', _pros: ['Comprehensive features', _'Great integrations', _'Advanced analytics'], _cons: ['Very expensive', _'Complex pricing', _'Steep learning curve'], _savings: 'Save $121/month for 10 servers'},
        {_name: 'New Relic', _pricing: '$99/user/month', _rating: '4.5/5', _pros: ['Good APM', _'User-based pricing', _'Reliable'], _cons: ['Expensive for teams', _'Limited server monitoring', _'Complex setup'], _savings: 'Save $396/month for 5 users'},
        {_name: 'Prometheus + Grafana', _pricing: 'Free', _rating: '4.3/5', _pros: ['Completely free', _'Highly customizable', _'Open source'], _cons: ['Requires DevOps expertise', _'No managed service', _'Maintenance overhead'], _savings: 'Professional service for $29/month'}
      ],
      features: [
        'Real-time monitoring',
        'Multi-cloud support',
        'AI-powered alerting',
        'Advanced analytics',
        'Custom dashboards',
        'API access'
      ],
      color: 'from-green-500 to-emerald-600',
      icon: '☁️'
    },
    {_service: 'DevOps Automation', _zionPricing: {
        starter: '$39/month', _professional: '$129/month', _enterprise: '$399/month'},
      competitors: [
        {_name: 'GitHub Actions', _pricing: 'Free + $0.008/min', _rating: '4.6/5', _pros: ['GitHub native', _'Good free tier', _'Wide adoption'], _cons: ['Expensive for teams', _'Limited features', _'Complex pricing'], _savings: 'Save $200+/month for active teams'},
        {_name: 'GitLab CI/CD', _pricing: '$19/user/month', _rating: '4.4/5', _pros: ['Integrated platform', _'Good CI/CD', _'Unlimited repos'], _cons: ['User-based pricing', _'Limited integrations', _'Higher cost for teams'], _savings: 'Save $56/month for 5 users'},
        {_name: 'Jenkins', _pricing: 'Free', _rating: '4.2/5', _pros: ['Completely free', _'Highly customizable', _'Open source'], _cons: ['Requires maintenance', _'No managed service', _'Complex setup'], _savings: 'Professional service for $39/month'}
      ],
      features: [
        'CI/CD pipelines',
        'Infrastructure as Code',
        'Security automation',
        'Multi-cloud deployment',
        'Team collaboration',
        'Custom integrations'
      ],
      color: 'from-blue-500 to-cyan-600',
      icon: '🚀'
    }
  ];

  const _marketInsights = [
    {_insight: 'Zion services are 30-60% more affordable than market leaders', _icon: <DollarSign className="w-6 h-6" />, _color: 'text-green-400'},
    {_insight: 'All plans include free trials and no hidden fees', _icon: <Check className="w-6 h-6" />, _color: 'text-blue-400'},
    {_insight: 'Professional features at startup-friendly prices', _icon: <Zap className="w-6 h-6" />, _color: 'text-purple-400'},
    {_insight: 'Enterprise-grade reliability without enterprise pricing', _icon: <Star className="w-6 h-6" />, _color: 'text-yellow-400'}
  ];

  return (_<>
      <Head>
        <title>Pricing Comparison - Zion Tech Group | How We Stack Up Against the Competition</title>
        <meta name="description" content="See how Zion's micro SaaS services compare to market leaders. Detailed pricing analysis showing significant cost savings and better value." />
        <meta property="og:title" content="Pricing Comparison - Zion Tech Group" />
        <meta property="og:description" content="Compare Zion's pricing to Jasper AI, _Datadog, _GitHub Actions and more. Save 30-60% with better features." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {_/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse" />
                Pricing Analysis
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              How We Compare to the Competition
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              See how Zion's micro SaaS services stack up against market leaders. 
              Get professional-grade features at startup-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#comparison"
                variant="primary"
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                View Comparison
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white"
              >
                View Our Pricing
              </Button>
            </div>
          </div>
        </section>

        {_/* Market Insights */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Zion?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Key insights that make Zion the smart choice for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {_marketInsights.map((insight, _index) => (
                <Card
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-6`}>
                    {_insight.icon}
                  </div>
                  <p className={_`text-lg font-semibold ${insight.color}`}>
                    {_insight.insight}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {_/* Detailed Comparison */}
        <section id="comparison" className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Detailed Service Comparison
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See exactly how each service compares in features, pricing, and value.
              </p>
            </div>

            {_serviceComparisons.map(_(service, _serviceIndex) => (_<div key={serviceIndex} className="mb-24">
                <div className="text-center mb-16">
                  <div className={_`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl mx-auto mb-6`}>
                    {_service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{_service.service}</h3>
                  <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-300">
                    <span>Starter: <span className="text-green-400 font-semibold">{_service.zionPricing.starter}</span></span>
                    <span>Professional: <span className="text-blue-400 font-semibold">{_service.zionPricing.professional}</span></span>
                    <span>Enterprise: <span className="text-purple-400 font-semibold">{_service.zionPricing.enterprise}</span></span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {_/* Zion Service */}
                  <div className="lg:col-span-1">
                    <Card className="h-full border-2 border-green-500 bg-green-500/5">
                      <div className="text-center p-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4">
                          Zion {_service.service}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Best Value</h4>
                        <div className="space-y-3 mb-6">
                          {_service.features.map((feature, _featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-gray-300">
                              <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              <span className="text-sm">{_feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-center">
                          <p className="text-green-400 font-semibold mb-2">Starting at</p>
                          <p className="text-2xl font-bold text-white">{_service.zionPricing.starter}</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {_/* Competitors */}
                  {_service.competitors.map(_(competitor, _compIndex) => (
                    <div key={compIndex} className="lg:col-span-1">
                      <Card className="h-full border border-gray-700">
                        <div className="text-center p-6">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 text-sm font-medium mb-4">
                            {_competitor.name}
                          </div>
                          <div className="flex items-center justify-center mb-4">
                            {_[...Array(5)].map(_(_, _i) => (
                              <Star
                                key={i}
                                className={_`w-4 h-4 ${
                                  i < Math.floor(parseFloat(competitor.rating))
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'}`}
                              />
                            ))}
                            <span className="text-sm text-gray-400 ml-2">{_competitor.rating}</span>
                          </div>
                          <div className="mb-4">
                            <p className="text-lg font-semibold text-white">{_competitor.pricing}</p>
                          </div>
                          <div className="space-y-2 mb-4 text-xs">
                            <div>
                              <p className="text-green-400 font-medium mb-1">Pros:</p>
                              <ul className="text-gray-300 space-y-1">
                                {_competitor.pros.map(_(pro, _proIndex) => (
                                  <li key={proIndex} className="flex items-center">
                                    <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                    {_pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-red-400 font-medium mb-1">Cons:</p>
                              <ul className="text-gray-300 space-y-1">
                                {_competitor.cons.map(_(con, _conIndex) => (
                                  <li key={conIndex} className="flex items-center">
                                    <X className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
                                    {_con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-green-400 font-semibold text-sm">{_competitor.savings}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Save Money and Get Better Features?
            </h2>
            <p className="text-xl text-indigo-100 mb-12">
              Start your free trial today and see why thousands of businesses choose Zion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/ai-content-generator"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Try AI Content Generator
              </Button>
              <Button
                href="/cloud-monitoring"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Try Cloud Monitoring
              </Button>
              <Button
                href="/devops-automation"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Try DevOps Automation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}