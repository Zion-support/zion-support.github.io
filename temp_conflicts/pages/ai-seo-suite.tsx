import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function AISeosuitePage() {_const _features = [
    {
      icon: <Search className="w-8 h-8 text-white" />, _title: 'AI Keyword Research', _description: 'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.', _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _gradient: 'from-blue-400 to-cyan-500'},
    {_icon: <TrendingUp className="w-8 h-8 text-white" />, _title: 'Ranking Analytics', _description: 'Track your search rankings in real-time with comprehensive analytics and competitor insights.', _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _gradient: 'from-green-400 to-emerald-500'},
    {_icon: <Target className="w-8 h-8 text-white" />, _title: 'Content Optimization', _description: 'AI-powered content analysis and optimization suggestions to improve search visibility.', _color: 'bg-gradient-to-br from-purple-500 to-indigo-600', _gradient: 'from-purple-400 to-indigo-500'},
    {_icon: <BarChart3 className="w-8 h-8 text-white" />, _title: 'Technical SEO', _description: 'Comprehensive technical SEO audits with actionable recommendations for improvement.', _color: 'bg-gradient-to-br from-orange-500 to-red-600', _gradient: 'from-orange-400 to-red-500'},
    {_icon: <Globe className="w-8 h-8 text-white" />, _title: 'Local SEO', _description: 'Optimize for local search with location-based keyword research and citation management.', _color: 'bg-gradient-to-br from-teal-500 to-blue-600', _gradient: 'from-teal-400 to-blue-500'},
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'Automated Reports', _description: 'Generate comprehensive SEO reports automatically with actionable insights and recommendations.', _color: 'bg-gradient-to-br from-pink-500 to-rose-600', _gradient: 'from-pink-400 to-rose-500'}];

  const _seoTools = [
    {_category: 'Keyword Research', _icon: <Search className="w-6 h-6 text-blue-400" />, _tools: ['Long-tail keyword finder', _'Competitor keyword analysis', _'Search volume estimation', _'Keyword difficulty scoring', _'Trending keywords']},
    {_category: 'On-Page SEO', _icon: <Target className="w-6 h-6 text-green-400" />, _tools: ['Content optimization', _'Meta tag generator', _'Schema markup builder', _'Internal linking suggestions', _'Image optimization']},
    {_category: 'Technical SEO', _icon: <Settings className="w-6 h-6 text-purple-400" />, _tools: ['Site audit tool', _'Page speed analyzer', _'Mobile optimization', _'Core Web Vitals', _'XML sitemap generator']},
    {_category: 'Analytics & Reporting', _icon: <BarChart3 className="w-6 h-6 text-orange-400" />, _tools: ['Ranking tracker', _'Traffic analysis', _'Conversion tracking', _'Competitor monitoring', _'Custom dashboards']}
  ];

  const _pricingPlans = [
    {_name: 'Starter', _price: '$39', _period: '/month', _description: 'Perfect for small websites and blogs', _features: [
        'Up to 5 websites', _'Basic keyword research', _'Monthly site audits', _'Email support', _'Basic reporting', _'Mobile app access'
      ], _popular: false, _color: 'border-gray-600', _buttonColor: 'bg-gray-600 hover:bg-gray-700'},
    {_name: 'Professional', _price: '$129', _period: '/month', _description: 'Ideal for growing businesses and agencies', _features: [
        'Up to 25 websites', _'Advanced keyword research', _'Weekly site audits', _'Priority support', _'Advanced reporting', _'Competitor analysis', _'API access', _'White-label reports'
      ], _popular: true, _color: 'border-blue-500', _buttonColor: 'bg-blue-600 hover:bg-blue-700'},
    {_name: 'Enterprise', _price: '$399', _period: '/month', _description: 'For large organizations and enterprises', _features: [
        'Unlimited websites', _'Full SEO suite', _'Daily site audits', _'Dedicated support', _'Custom reporting', _'Advanced analytics', _'SLA guarantee', _'On-premise option'
      ], _popular: false, _color: 'border-purple-600', _buttonColor: 'bg-purple-600 hover:bg-purple-700'}
  ];

  const _integrations = [
    {_name: 'Google Analytics', _icon: '📊', _description: 'Traffic data integration'},
    {_name: 'Google Search Console', _icon: '🔍', _description: 'Search performance data'},
    {_name: 'WordPress', _icon: '🔌', _description: 'Plugin integration'},
    {_name: 'Shopify', _icon: '🛒', _description: 'E-commerce optimization'},
    {_name: 'HubSpot', _icon: '📈', _description: 'Marketing automation sync'},
    {_name: 'Slack', _icon: '💬', _description: 'Team notifications'},
    {_name: 'Zapier', _icon: '⚡', _description: '500+ app integrations'},
    {_name: 'API Access', _icon: '🔑', _description: 'Custom integrations'}
  ];

  const _useCases = [
    {_title: 'E-commerce Websites', _description: 'Optimize product pages, _category pages, _and search functionality for better conversions.', _icon: '🛍️', _benefits: ['Higher search rankings', _'Increased organic traffic', _'Better conversion rates', _'Competitive advantage']},
    {_title: 'Content Marketing', _description: 'Optimize blog posts, _articles, _and content for search engines and user engagement.', _icon: '📝', _benefits: ['Better content visibility', _'Higher engagement rates', _'More organic traffic', _'Authority building']},
    {_title: 'Local Businesses', _description: 'Improve local search visibility and attract customers in your area.', _icon: '📍', _benefits: ['Local search dominance', _'Increased foot traffic', _'Better customer acquisition', _'Competitive positioning']},
    {_title: 'SaaS Companies', _description: 'Optimize landing pages, _feature pages, _and documentation for better user acquisition.', _icon: '💻', _benefits: ['Higher conversion rates', _'Better user experience', _'Reduced acquisition costs', _'Market expansion']}
  ];

  const _successMetrics = [
    {_metric: 'Organic Traffic', _value: '+150%', _description: 'Average increase in organic traffic'},
    {_metric: 'Search Rankings', _value: '+45%', _description: 'Improvement in search rankings'},
    {_metric: 'Conversion Rate', _value: '+80%', _description: 'Increase in conversion rates'},
    {_metric: 'ROI', _value: '400%', _description: 'Average return on investment'}
  ];

  return (
    <>
      <Head>
        <title>AI-Powered SEO Suite | Zion Tech Group - Advanced SEO Tools & Analytics</title>
        <meta name="description" content="Comprehensive AI-powered SEO suite with keyword research, content optimization, technical SEO audits, and real-time analytics. Boost your search rankings and organic traffic." />
        <meta property="og:title" content="AI-Powered SEO Suite | Zion Tech Group" />
        <meta property="og:description" content="Advanced SEO tools with AI-powered optimization, keyword research, and comprehensive analytics." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.08),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Search Engine Optimization
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
            AI-Powered SEO Suite
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
            Dominate search rankings with AI-powered SEO tools, comprehensive analytics, and intelligent optimization
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              href="#pricing"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/25"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#demo"
              variant="outline"
              size="lg"
              className="border-white/20 hover:border-white/40 hover:bg-white/5"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {_/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">+150%</div>
              <div className="text-gray-400">Organic Traffic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400">+45%</div>
              <div className="text-gray-400">Search Rankings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">+80%</div>
              <div className="text-gray-400">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400">400%</div>
              <div className="text-gray-400">ROI</div>
            </div>
          </div>
        </div>
      </section>

      {_/* Features Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Powerful SEO Features
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Everything you need to dominate search rankings and drive organic traffic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_features.map(_(feature, _index) => (
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                style={_{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="relative">
                  <div className={_`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {_feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {_feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {_feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* SEO Tools Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Comprehensive SEO Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Professional-grade tools used by top SEO agencies and marketers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_seoTools.map(_(tool, _index) => (_<Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{_tool.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {_tool.category}
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {_tool.tools.map((toolName, _toolIndex) => (
                        <div key={toolIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {_toolName}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Success Metrics Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Proven Results
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              See the impact our AI-powered SEO suite has on businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_successMetrics.map(_(metric, _index) => (
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl font-bold mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {_metric.value}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{_metric.metric}</h3>
                <p className="text-gray-400 text-sm">{_metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Use Cases Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Trusted by businesses across industries for SEO success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_useCases.map(_(useCase, _index) => (_<Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{_useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {_useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {_useCase.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {_useCase.benefits.map((benefit, _benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {_benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your SEO needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricingPlans.map(_(plan, _index) => (
              <Card
                key={index}
                className={_`relative group ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} border ${_plan.color} hover:border-blue-500/50 transition-all duration-300`}
              >
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {_plan.price}<span className="text-lg text-gray-400">{_plan.period}</span>
                  </div>
                  <p className="text-gray-400">{_plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {_feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  className={_`w-full ${plan.buttonColor} text-white`}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Integrations Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {_integrations.map(_(integration, _index) => (
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {_integration.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{_integration.name}</h3>
                <p className="text-sm text-gray-400">{_integration.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of businesses who are already ranking higher and driving more organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#demo"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}