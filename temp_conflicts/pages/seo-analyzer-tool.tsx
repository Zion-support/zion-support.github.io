import React, {_useState} from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function SEOAnalyzerToolPage() {_const [isAnalyzing, _setIsAnalyzing] = useState(false);
  const [analysisResults, _setAnalysisResults] = useState(null);
  const [url, _setUrl] = useState('');

  const _features = [
    {
      icon: <Search className="w-8 h-8 text-white" />, _title: 'Comprehensive SEO Analysis', _description: 'Deep analysis of on-page SEO factors, _technical issues, _and content optimization opportunities.', _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _gradient: 'from-green-400 to-emerald-500'},
    {_icon: <Target className="w-8 h-8 text-white" />, _title: 'Keyword Research', _description: 'Discover high-value keywords and analyze search intent to optimize your content strategy.', _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _gradient: 'from-blue-400 to-cyan-500'},
    {_icon: <BarChart3 className="w-8 h-8 text-white" />, _title: 'Competitive Analysis', _description: 'Analyze your competitors\' SEO strategies and identify opportunities to outperform them.', _color: 'bg-gradient-to-br from-purple-500 to-indigo-600', _gradient: 'from-purple-400 to-indigo-500'},
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'AI-Powered Insights', _description: 'Get intelligent recommendations and actionable insights to improve your search rankings.', _color: 'bg-gradient-to-br from-orange-500 to-red-600', _gradient: 'from-orange-400 to-red-500'}];

  const _seoFactors = [
    {_category: 'On-Page SEO', _factors: [
        'Title tags optimization', _'Meta descriptions', _'Header structure (H1, _H2, _H3)', _'Content quality and length', _'Internal linking structure', _'Image optimization (alt tags)'
      ], _icon: '📝', _color: 'text-green-400'},
    {_category: 'Technical SEO', _factors: [
        'Page load speed', _'Mobile responsiveness', _'XML sitemap', _'Robots.txt configuration', _'SSL certificate', _'Core Web Vitals'
      ], _icon: '⚙️', _color: 'text-blue-400'},
    {_category: 'Content SEO', _factors: [
        'Keyword density', _'Content relevance', _'Readability scores', _'Content freshness', _'Multimedia optimization', _'Schema markup'
      ], _icon: '📊', _color: 'text-purple-400'},
    {_category: 'Local SEO', _factors: [
        'Google My Business', _'Local citations', _'Review management', _'Local keyword targeting', _'Location-based content', _'Local link building'
      ], _icon: '📍', _color: 'text-orange-400'}
  ];

  const _pricing = [
    {_name: 'Starter', _price: '$39', _period: '/month', _description: 'Perfect for small businesses and bloggers', _features: [
        '10 website analyses/month', _'Basic SEO metrics', _'Keyword research (100 keywords)', _'On-page SEO analysis', _'Email support', _'Basic reporting'
      ], _popular: false},
    {_name: 'Professional', _price: '$89', _period: '/month', _description: 'Ideal for growing businesses and agencies', _features: [
        '50 website analyses/month', _'Advanced SEO metrics', _'Keyword research (500 keywords)', _'Competitive analysis', _'Priority support', _'Advanced reporting', _'API access', _'Team collaboration'
      ], _popular: true},
    {_name: 'Enterprise', _price: '$249', _period: '/month', _description: 'For large organizations and SEO agencies', _features: [
        'Unlimited analyses', _'Enterprise SEO metrics', _'Unlimited keyword research', _'Advanced competitive analysis', _'24/7 dedicated support', _'Custom reporting', _'White-label options', _'Custom integrations'
      ], _popular: false}
  ];

  const _handleAnalyzeSEO = async () => {_if (!url.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate SEO analysis
    setTimeout__(() => {
      setAnalysisResults({
        url: url, _overallScore: 78, _onPageScore: 82, _technicalScore: 75, _contentScore: 80, _mobileScore: 85, _issues: [
          { type: 'error', _message: 'Missing meta description', _priority: 'high'},
          {_type: 'warning', _message: 'Title tag too long (65 characters)', _priority: 'medium'},
          {_type: 'info', _message: 'Consider adding more internal links', _priority: 'low'}
        ],
        recommendations: [
          'Optimize meta descriptions for better click-through rates',
          'Improve page load speed by optimizing images',
          'Add more relevant internal links to improve site structure',
          'Implement schema markup for rich snippets'
        ],
        keywords: [
          {_keyword: 'website optimization', _volume: '12K', _difficulty: 'medium'},
          {_keyword: 'SEO tools', _volume: '8K', _difficulty: 'low'},
          {_keyword: 'search engine optimization', _volume: '15K', _difficulty: 'high'}
        ]
      });
      setIsAnalyzing(false);
    }, 4000);
  };

  return (
    <>
      <Head>
        <title>SEO Analyzer Tool - Zion Tech Group | Professional SEO Analysis & Optimization</title>
        <meta name="description" content="Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve search rankings." />
        <meta property="og:title" content="SEO Analyzer Tool - Zion Tech Group" />
        <meta property="og:description" content="Professional SEO analysis tool with comprehensive insights and optimization recommendations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {_/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            Professional SEO Analysis
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            SEO Analyzer Tool
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, 
            keyword research, and optimization recommendations to improve your search rankings and drive more organic traffic.
          </p>
          
          {_/* window.URL Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="url"
                placeholder="Enter your website window.URL (e.g., https://example.com)"
                value={_url}
                onChange={_(_e) => setUrl(e.target.value)}
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button
                onClick={_handleAnalyzeSEO}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap"
                disabled={_isAnalyzing || !url.trim()}
              >
                {_isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Analyze SEO
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="#pricing"
              variant="outline"
              size="lg"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl"
            >
              View Pricing
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {_/* Features Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Powerful SEO Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our SEO analyzer provides comprehensive insights and tools to help you dominate search rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_features.map(_(feature, _index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-green"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={_`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {_feature.icon}
                    </div>
                    <div className={_`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {_feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {_feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* SEO Factors Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Comprehensive SEO Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We analyze every aspect of your website's SEO to provide actionable insights and recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_seoFactors.map(_(category, _index) => (_<Card
                key={index}
                className="card-hover border-gradient-green"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{_category.icon}</div>
                  <h3 className={_`text-xl font-bold ${category.color}`}>{_category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {_category.factors.map((factor, _factorIndex) => (
                    <li key={factorIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {_factor}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Demo Analysis Results */}
      {_analysisResults && (
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                SEO Analysis Results
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample analysis of a website. Get comprehensive insights for your own website.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Overall Score */}
              <Card className="border-gradient-green text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Overall SEO Score</h3>
                <div className="text-6xl font-bold text-green-400 mb-4">{_analysisResults.overallScore}/100</div>
                <div className="w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={_`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-green-500"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">Good SEO foundation with room for improvement</p>
              </Card>

              {_/* Detailed Scores */}
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Detailed Scores</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">On-Page SEO</span>
                    <span className="font-bold text-green-400">{_analysisResults.onPageScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technical SEO</span>
                    <span className="font-bold text-orange-400">{_analysisResults.technicalScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Content SEO</span>
                    <span className="font-bold text-blue-400">{_analysisResults.contentScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Mobile SEO</span>
                    <span className="font-bold text-green-400">{_analysisResults.mobileScore}/100</span>
                  </div>
                </div>
              </Card>

              {_/* Issues */}
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Issues Found</h3>
                <div className="space-y-3">
                  {_analysisResults.issues.map(_(issue, _index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {_issue.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-gray-300">{_issue.message}</span>
                        <div className="text-xs text-gray-500 mt-1">Priority: {_issue.priority}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {_/* Recommendations and Keywords */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
                <div className="space-y-3">
                  {_analysisResults.recommendations.map(_(rec, _index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{_rec}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Keyword Opportunities</h3>
                <div className="space-y-4">
                  {_analysisResults.keywords.map(_(keyword, _index) => (
                    <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">{_keyword.keyword}</span>
                        <span className="text-sm text-gray-400">Volume: {_keyword.volume}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Difficulty: {_keyword.difficulty}</span>
                        <span className={_`px-2 py-1 rounded text-xs ${
                          keyword.difficulty === 'low' ? 'bg-green-500/20 text-green-400' :
                          keyword.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'}`}>
                          {_keyword.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {_/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Simple Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the SEO analysis plan that best fits your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricing.map(_(plan, _index) => (
              <Card
                key={index}
                className={_`card-hover border-gradient-green ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{_plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{_plan.price}</span>
                    <span className="text-gray-400">{_plan.period}</span>
                  </div>
                  <p className="text-gray-400">{_plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {_feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  size="lg"
                  className={_`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Improve Your SEO Rankings?
          </h2>
          <p className="text-responsive-md text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of businesses using our SEO analyzer to improve their search rankings and drive more organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}