import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function MarketResearchPage() {_const _marketSegments = [
    {
      name: 'AI & Machine Learning', _marketSize: '$15.7B', _growthRate: '23.4% CAGR', _keyTrends: [
        'Generative AI adoption accelerating', _'AI-powered automation increasing', _'Natural language processing growth', _'Computer vision applications expanding'
      ], _topPlayers: ['OpenAI', _'Anthropic', _'Google AI', _'Microsoft Azure AI'], _opportunities: [
        'AI content generation tools', _'Predictive analytics platforms', _'Automated customer service', _'Intelligent process automation'
      ], _color: 'from-fuchsia-500 to-purple-600', _icon: <Zap className="w-8 h-8 text-white" />},
    {_name: 'Database & Analytics', _marketSize: '$8.9B', _growthRate: '18.7% CAGR', _keyTrends: [
        'Real-time analytics demand', _'Cloud database migration', _'Data privacy regulations', _'Performance optimization focus'
      ], _topPlayers: ['DataDog', _'New Relic', _'SolarWinds', _'Splunk'], _opportunities: [
        'Database performance monitoring', _'Real-time analytics dashboards', _'Data visualization tools', _'Query optimization platforms'
      ], _color: 'from-cyan-500 to-blue-600', _icon: <BarChart3 className="w-8 h-8 text-white" />},
    {_name: 'Security & Identity', _marketSize: '$12.3B', _growthRate: '21.2% CAGR', _keyTrends: [
        'Zero-trust security adoption', _'Multi-factor authentication growth', _'API security concerns', _'Compliance requirements increasing'
      ], _topPlayers: ['Okta', _'Auth0', _'Ping Identity', _'OneLogin'], _opportunities: [
        'Identity verification platforms', _'API security gateways', _'Compliance monitoring tools', _'Threat detection systems'
      ], _color: 'from-green-500 to-emerald-600', _icon: <Target className="w-8 h-8 text-white" />},
    {_name: 'Business Intelligence', _marketSize: '$22.1B', _growthRate: '19.8% CAGR', _keyTrends: [
        'Self-service BI adoption', _'Real-time data integration', _'Mobile BI growth', _'Predictive analytics demand'
      ], _topPlayers: ['Tableau', _'Power BI', _'Looker', _'Qlik'], _opportunities: [
        'Custom dashboard builders', _'Data integration platforms', _'Mobile analytics solutions', _'Predictive modeling tools'
      ], _color: 'from-orange-500 to-red-600', _icon: <Activity className="w-8 h-8 text-white" />},
    {_name: 'API Management', _marketSize: '$6.8B', _growthRate: '24.1% CAGR', _keyTrends: [
        'Microservices architecture growth', _'API-first development', _'Rate limiting importance', _'Developer experience focus'
      ], _topPlayers: ['Kong', _'Tyk', _'AWS API Gateway', _'Azure API Management'], _opportunities: [
        'API rate limiting services', _'Developer portal platforms', _'API analytics tools', _'Webhook management systems'
      ], _color: 'from-indigo-500 to-purple-600', _icon: <Globe className="w-8 h-8 text-white" />},
    {_name: 'User Experience Analytics', _marketSize: '$9.4B', _growthRate: '20.5% CAGR', _keyTrends: [
        'Privacy-compliant tracking', _'Real-time user insights', _'Conversion optimization focus', _'Mobile app analytics growth'
      ], _topPlayers: ['Hotjar', _'FullStory', _'Mixpanel', _'Amplitude'], _opportunities: [
        'Heatmap and session recording', _'A/B testing platforms', _'User journey mapping tools', _'Conversion funnel analytics'
      ], _color: 'from-teal-500 to-cyan-600', _icon: <Users className="w-8 h-8 text-white" />}
  ];

  const _competitiveAnalysis = [
    {_company: 'Enterprise Giants', _examples: ['Salesforce', _'Microsoft', _'Oracle', _'SAP'], _strengths: [
        'Extensive resources and R&D', _'Established customer base', _'Comprehensive feature sets', _'Global presence and support'
      ], _weaknesses: [
        'High pricing and complexity', _'Slow innovation cycles', _'Difficult customization', _'Long implementation times'
      ], _marketShare: '45-60%', _pricing: 'High ($1000+/month)'},
    {_company: 'Mid-Market Leaders', _examples: ['HubSpot', _'Atlassian', _'Slack', _'Zoom'], _strengths: [
        'Balanced features and pricing', _'Strong user experience', _'Active community support', _'Regular feature updates'
      ], _weaknesses: [
        'Limited customization options', _'Growing complexity over time', _'Dependency on integrations', _'Scalability challenges'
      ], _marketShare: '25-35%', _pricing: 'Medium ($100-500/month)'},
    {_company: 'Micro SaaS Innovators', _examples: ['Zapier', _'Notion', _'Airtable', _'Linear'], _strengths: [
        'Focused feature sets', _'Fast innovation cycles', _'Affordable pricing', _'Easy implementation'
      ], _weaknesses: [
        'Limited feature scope', _'Smaller support teams', _'Integration dependencies', _'Market volatility risk'
      ], _marketShare: '15-25%', _pricing: 'Low ($10-100/month)'}
  ];

  const _marketTrends = [
    {_trend: 'AI-First Approach', _description: 'Companies prioritizing AI capabilities in their products', _impact: 'High', _timeline: '2024-2026', _examples: [
        'AI-powered content generation', _'Intelligent automation', _'Predictive analytics', _'Natural language interfaces'
      ], _opportunities: 'AI integration services, _custom AI models, _AI consulting'},
    {_trend: 'Privacy-First Design', _description: 'Growing focus on data privacy and compliance', _impact: 'High', _timeline: '2024-2027', _examples: [
        'GDPR compliance tools', _'Privacy analytics platforms', _'Data anonymization services', _'Consent management systems'
      ], _opportunities: 'Privacy compliance tools, _data governance platforms, _audit services'},
    {_trend: 'API-First Architecture', _description: 'Shift towards API-centric application development', _impact: 'Medium', _timeline: '2024-2026', _examples: [
        'API management platforms', _'Developer experience tools', _'API analytics and monitoring', _'Integration platforms'
      ], _opportunities: 'API development tools, _integration services, _developer portals'},
    {_trend: 'Real-Time Everything', _description: 'Demand for real-time data and analytics', _impact: 'Medium', _timeline: '2024-2025', _examples: [
        'Real-time dashboards', _'Live collaboration tools', _'Instant notifications', _'Streaming analytics'
      ], _opportunities: 'Real-time platforms, _streaming services, _live collaboration tools'}
  ];

  const _pricingStrategies = [
    {_strategy: 'Value-Based Pricing', _description: 'Pricing based on customer value and ROI', _pros: [
        'Higher profit margins', _'Customer alignment', _'Scalable pricing model', _'Competitive differentiation'
      ], _cons: [
        'Complex pricing structure', _'Customer education required', _'Value measurement challenges', _'Pricing optimization needed'
      ], _bestFor: 'Enterprise solutions, _high-value services, _ROI-focused products'},
    {_strategy: 'Usage-Based Pricing', _description: 'Pricing based on actual usage or consumption', _pros: [
        'Fair pricing model', _'Easy to understand', _'Scalable with growth', _'Low barrier to entry'
      ], _cons: [
        'Revenue predictability challenges', _'Complex billing systems', _'Usage optimization needed', _'Customer cost management'
      ], _bestFor: 'API services, _storage platforms, _compute resources'},
    {_strategy: 'Freemium Model', _description: 'Free basic tier with paid premium features', _pros: [
        'Low customer acquisition cost', _'Viral growth potential', _'Large user base', _'Easy market entry'
      ], _cons: [
        'Low conversion rates', _'Revenue per user challenges', _'Support cost management', _'Feature differentiation needed'
      ], _bestFor: 'Consumer tools, _productivity apps, _collaboration platforms'}
  ];

  const _investmentInsights = [
    {_metric: 'Total VC Investment', _value: '$45.2B', _change: '+18.7% YoY', _description: 'Venture capital investment in SaaS companies in 2024'},
    {_metric: 'Average Series A', _value: '$12.8M', _change: '+22.3% YoY', _description: 'Average Series A funding round for SaaS startups'},
    {_metric: 'Exit Valuations', _value: '8.2x ARR', _change: '+15.4% YoY', _description: 'Average exit valuation multiple based on annual recurring revenue'},
    {_metric: 'Time to Profitability', _value: '3.2 years', _change: '-0.8 years YoY', _description: 'Average time for SaaS companies to reach profitability'}
  ];

  return (
    <>
      <Head>
        <title>Market Research & Industry Insights | Zion Tech Group</title>
        <meta name="description" content="Comprehensive market research, competitive analysis, and industry insights for micro SaaS services. Data-driven market intelligence to inform your business decisions." />
        <meta property="og:title" content="Market Research & Industry Insights | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive market research and competitive analysis for micro SaaS services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {_/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Market Intelligence
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Comprehensive Market Research & Industry Insights
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Data-driven market intelligence, competitive analysis, and industry trends to help you make informed decisions about your micro SaaS business strategy and market positioning.
          </p>
        </div>
      </section>

      {_/* Investment Insights */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Investment & Market Metrics
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Key investment metrics and market indicators for the SaaS industry to help you understand the current market landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_investmentInsights.map(_(insight, _index) => (
              <Card
                key={index}
                className="card-hover text-center border-gradient-blue"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="text-3xl font-bold text-white mb-2">{_insight.value}</div>
                  <div className="text-sm text-gray-400 mb-3">{_insight.metric}</div>
                  <div className="text-sm text-gray-300 mb-4">{_insight.description}</div>
                  <div className="inline-flex items-center text-sm text-green-400">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {_insight.change}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Market Segments */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Segment Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Detailed analysis of key micro SaaS market segments with market size, growth rates, trends, and opportunities.
            </p>
          </div>

          <div className="space-y-8">
            {_marketSegments.map(_(segment, _index) => (_<Card
                key={index}
                className="card-hover border-gradient-blue overflow-hidden"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {_/* Segment Header */}
                    <div className="lg:w-1/3">
                      <div className="text-center lg:text-left">
                        <div className={_`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${segment.color} shadow-xl mx-auto lg:mx-0 mb-6`}>
                          {_segment.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          {_segment.name}
                        </h3>
                        
                        {_/* Market Data */}
                        <div className="space-y-3 text-sm mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Market Size:</span>
                            <span className="text-white font-semibold">{_segment.marketSize}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Growth Rate:</span>
                            <span className="text-green-400 font-semibold">{_segment.growthRate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {_/* Market Analysis */}
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {_/* Key Trends */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                            Key Trends
                          </h4>
                          <ul className="space-y-2">
                            {_segment.keyTrends.map((trend, _trendIndex) => (
                              <li key={trendIndex} className="flex items-start text-gray-300 text-sm">
                                <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                                {_trend}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {_/* Top Players */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-yellow-400" />
                            Top Players
                          </h4>
                          <ul className="space-y-2">
                            {_segment.topPlayers.map(_(player, _playerIndex) => (
                              <li key={playerIndex} className="flex items-start text-gray-300 text-sm">
                                <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                                {_player}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {_/* Opportunities */}
                      <div className="mt-8 pt-6 border-t border-gray-700">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-blue-400" />
                          Market Opportunities
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {_segment.opportunities.map(_(opportunity, _oppIndex) => (
                            <div key={oppIndex} className="flex items-start text-gray-300 text-sm">
                              <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                              {_opportunity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Competitive Analysis */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Competitive Landscape Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the competitive landscape and positioning strategies for different types of SaaS companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {_competitiveAnalysis.map(_(analysis, _index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{_analysis.company}</h3>
                  
                  {_/* Examples */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
                    <div className="text-sm text-gray-300">{_analysis.examples.join(', _')}</div>
                  </div>

                  {_/* Market Share & Pricing */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-400">Market Share:</span>
                      <div className="text-white font-semibold">{_analysis.marketShare}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Pricing:</span>
                      <div className="text-white font-semibold">{_analysis.pricing}</div>
                    </div>
                  </div>

                  {_/* Strengths */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Strengths:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {_analysis.strengths.map(_(strength, _strengthIndex) => (
                        <li key={strengthIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {_strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {_/* Weaknesses */}
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Weaknesses:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {_analysis.weaknesses.map(_(weakness, _weaknessIndex) => (
                        <li key={weaknessIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {_weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Market Trends */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Emerging Market Trends
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Key trends shaping the micro SaaS landscape and creating new opportunities for innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_marketTrends.map(_(trend, _index) => (_<Card
                key={index}
                className="card-hover border-gradient-blue"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{_trend.trend}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={_`px-2 py-1 rounded text-xs font-medium ${
                        trend.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                        trend.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'}`}>
                        {_trend.impact} Impact
                      </span>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400">
                        {_trend.timeline}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{_trend.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {_trend.examples.map((example, _exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-cursor-blue rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {_example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Opportunities:</h4>
                    <p className="text-xs text-gray-300">{_trend.opportunities}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Pricing Strategies */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Pricing Strategy Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Analysis of different pricing strategies used in the micro SaaS market and their implications for business success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {_pricingStrategies.map(_(strategy, _index) => (_<Card
                key={index}
                className="card-hover border-gradient-blue"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{_strategy.strategy}</h3>
                  <p className="text-gray-300 mb-6">{_strategy.description}</p>
                  
                  {_/* Pros */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Pros:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {_strategy.pros.map((pro, _proIndex) => (
                        <li key={proIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {_pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {_/* Cons */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Cons:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {_strategy.cons.map(_(con, _conIndex) => (
                        <li key={conIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {_con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {_/* Best For */}
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Best For:</h4>
                    <p className="text-xs text-gray-300">{_strategy.bestFor}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Apply This Market Intelligence?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Use our market research and competitive analysis to inform your business strategy, pricing decisions, and market positioning.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Get Strategic Consultation
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}