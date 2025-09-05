import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function BusinessToolsPage() {_const _businessTools = [
    {
      category: 'Project Management', _tools: [
        {
          name: 'Notion', _description: 'All-in-one workspace for notes, _docs, _projects, _and team collaboration.', _features: ['Templates', _'Database views', _'Real-time editing', _'Integrations', _'Team spaces'], _pricing: 'Free - $8/month', _website: 'https://notion.so', _icon: <FileText className="w-6 h-6" />, _color: 'bg-gradient-to-br from-gray-800 to-black', _popular: true},
        {_name: 'Asana', _description: 'Work management platform for teams to organize, _track, _and manage their work.', _features: ['Task management', _'Project timelines', _'Team collaboration', _'Workflow automation', _'Reporting'], _pricing: 'Free - $10.99/month', _website: 'https://asana.com', _icon: <CheckCircle className="w-6 h-6" />, _color: 'bg-gradient-to-br from-pink-500 to-red-600'},
        {_name: 'Monday.com', _description: 'Visual project management platform with customizable workflows and automation.', _features: ['Visual boards', _'Automation', _'Time tracking', _'Integrations', _'Analytics'], _pricing: '$8/month - $16/month', _website: 'https://monday.com', _icon: <Calendar className="w-6 h-6" />, _color: 'bg-gradient-to-br from-red-500 to-pink-600'}
      ]
    },
    {_category: 'Communication & Collaboration', _tools: [
        {
          name: 'Slack', _description: 'Team communication platform for modern businesses with channels and integrations.', _features: ['Channels', _'Direct messages', _'File sharing', _'Integrations', _'Search'], _pricing: 'Free - $7.25/month', _website: 'https://slack.com', _icon: <MessageSquare className="w-6 h-6" />, _color: 'bg-gradient-to-br from-purple-500 to-pink-600', _popular: true},
        {_name: 'Microsoft Teams', _description: 'Unified communication platform with chat, _video meetings, _and file collaboration.', _features: ['Chat', _'Video meetings', _'File sharing', _'Office integration', _'Security'], _pricing: 'Free - $6/month', _website: 'https://teams.microsoft.com', _icon: <Users className="w-6 h-6" />, _color: 'bg-gradient-to-br from-blue-500 to-indigo-600'},
        {_name: 'Zoom', _description: 'Video conferencing platform for meetings, _webinars, _and team collaboration.', _features: ['HD video', _'Screen sharing', _'Recording', _'Webinars', _'Breakout rooms'], _pricing: 'Free - $14.99/month', _website: 'https://zoom.us', _icon: <Video className="w-6 h-6" />, _color: 'bg-gradient-to-br from-blue-500 to-cyan-600'}
      ]
    },
    {_category: 'Marketing & Sales', _tools: [
        {
          name: 'HubSpot', _description: 'All-in-one inbound marketing, _sales, _and customer service platform.', _features: ['CRM', _'Email marketing', _'Lead generation', _'Analytics', _'Automation'], _pricing: 'Free - $45/month', _website: 'https://hubspot.com', _icon: <Target className="w-6 h-6" />, _color: 'bg-gradient-to-br from-orange-500 to-red-600', _popular: true},
        {_name: 'Mailchimp', _description: 'Email marketing platform for growing businesses and creators.', _features: ['Email templates', _'Automation', _'Analytics', _'Audience segmentation', _'A/B testing'], _pricing: 'Free - $13/month', _website: 'https://mailchimp.com', _icon: <Mail className="w-6 h-6" />, _color: 'bg-gradient-to-br from-yellow-500 to-orange-600'},
        {_name: 'Salesforce', _description: 'Customer relationship management platform for sales, _service, _and marketing.', _features: ['Sales CRM', _'Service cloud', _'Marketing automation', _'Analytics', _'AppExchange'], _pricing: '$25/month - $300/month', _website: 'https://salesforce.com', _icon: <TrendingUp className="w-6 h-6" />, _color: 'bg-gradient-to-br from-blue-500 to-indigo-600'}
      ]
    },
    {_category: 'Finance & Accounting', _tools: [
        {
          name: 'QuickBooks', _description: 'Small business accounting software for invoicing, _expenses, _and financial reporting.', _features: ['Invoicing', _'Expense tracking', _'Financial reports', _'Tax preparation', _'Bank integration'], _pricing: '$30/month - $200/month', _website: 'https://quickbooks.intuit.com', _icon: <CreditCard className="w-6 h-6" />, _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _popular: true},
        {_name: 'Stripe', _description: 'Payment processing platform for internet businesses.', _features: ['Global payments', _'Subscription billing', _'Fraud prevention', _'Developer APIs', _'Analytics'], _pricing: '2.9% + 30¢ per transaction', _website: 'https://stripe.com', _icon: <CreditCard className="w-6 h-6" />, _color: 'bg-gradient-to-br from-purple-500 to-blue-600'},
        {_name: 'Xero', _description: 'Cloud-based accounting software for small businesses and accountants.', _features: ['Bank reconciliation', _'Invoicing', _'Expense claims', _'Multi-currency', _'Payroll'], _pricing: '$13/month - $70/month', _website: 'https://xero.com', _icon: <ChartBar className="w-6 h-6" />, _color: 'bg-gradient-to-br from-blue-500 to-cyan-600'}
      ]
    },
    {_category: 'Design & Creative', _tools: [
        {
          name: 'Figma', _description: 'Collaborative interface design tool for teams building digital products.', _features: ['Real-time collaboration', _'Design systems', _'Prototyping', _'Developer handoff', _'Plugins'], _pricing: 'Free - $12/month', _website: 'https://figma.com', _icon: <Palette className="w-6 h-6" />, _color: 'bg-gradient-to-br from-purple-500 to-pink-600', _popular: true},
        {_name: 'Canva', _description: 'Create professional designs with drag-and-drop simplicity.', _features: ['Templates library', _'Stock photos', _'Brand kit', _'Team collaboration', _'Video editing'], _pricing: 'Free - $12.99/month', _website: 'https://canva.com', _icon: <Image className="w-6 h-6" />, _color: 'bg-gradient-to-br from-blue-500 to-cyan-600'},
        {_name: 'Adobe Creative Cloud', _description: 'Complete creative software suite for design, _photography, _and video.', _features: ['Photoshop', _'Illustrator', _'InDesign', _'Premiere Pro', _'After Effects'], _pricing: '$52.99/month', _website: 'https://adobe.com/creativecloud', _icon: <Palette className="w-6 h-6" />, _color: 'bg-gradient-to-br from-orange-500 to-red-600'}
      ]
    },
    {_category: 'Analytics & Business Intelligence', _tools: [
        {
          name: 'Google Analytics', _description: 'Free web analytics service that tracks and reports website traffic.', _features: ['Real-time data', _'Audience insights', _'Conversion tracking', _'E-commerce', _'Goals'], _pricing: 'Free', _website: 'https://analytics.google.com', _icon: <BarChart3 className="w-6 h-6" />, _color: 'bg-gradient-to-br from-blue-500 to-green-600', _popular: true},
        {_name: 'Tableau', _description: 'Data visualization and business intelligence platform for analytics.', _features: ['Interactive dashboards', _'Data blending', _'Real-time analytics', _'Mobile support', _'Collaboration'], _pricing: '$70/month - $35/month', _website: 'https://tableau.com', _icon: <ChartBar className="w-6 h-6" />, _color: 'bg-gradient-to-br from-blue-500 to-indigo-600'},
        {_name: 'Mixpanel', _description: 'Product analytics platform for understanding user behavior and product usage.', _features: ['Event tracking', _'Funnel analysis', _'Cohort analysis', _'A/B testing', _'Real-time data'], _pricing: 'Free - $25/month', _website: 'https://mixpanel.com', _icon: <TrendingUp className="w-6 h-6" />, _color: 'bg-gradient-to-br from-purple-500 to-pink-600'}
      ]
    }
  ];

  const _businessInsights = [
    {_title: 'Remote Work Tools', _description: 'Essential tools for distributed teams and hybrid work environments.', _trend: '📈 Growing Demand', _color: 'text-green-400'},
    {_title: 'AI-Powered Solutions', _description: 'Business tools leveraging AI for automation and intelligent insights.', _trend: '🚀 High Growth', _color: 'text-blue-400'},
    {_title: 'Cloud-Native Platforms', _description: 'Business applications built for scalability and global accessibility.', _trend: '☁️ Mainstream', _color: 'text-cyan-400'},
    {_title: 'Security & Compliance', _description: 'Tools ensuring data protection and regulatory compliance.', _trend: '🔒 Critical', _color: 'text-orange-400'}
  ];

  const _productivityTips = [
    {_title: 'Start with Free Tiers', _description: 'Most tools offer free versions to test before committing to paid plans.', _icon: <CheckCircle className="w-6 h-6 text-green-400" />},
    {_title: 'Focus on Integration', _description: 'Choose tools that work well together to avoid data silos and manual work.', _icon: <Cog className="w-6 h-6 text-blue-400" />},
    {_title: 'Measure ROI', _description: 'Track how each tool improves your team\'s productivity and business outcomes.', _icon: <ChartBar className="w-6 h-6 text-purple-400" />},
    {_title: 'Train Your Team', _description: 'Invest in proper training to maximize the value of your chosen tools.', _icon: <Users className="w-6 h-6 text-orange-400" />}
  ];

  return (
    <>
      <Head>
        <title>Business Tools & Productivity - Zion Tech Group</title>
        <meta name="description" content="Essential business tools for project management, communication, marketing, finance, and productivity. Real pricing and features for growing businesses." />
        <meta property="og:title" content="Business Tools & Productivity - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive business tools directory with pricing and features." />
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
            Business Solutions
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Essential Business Tools & Productivity
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover the most powerful business tools that successful companies use to manage projects, 
            communicate effectively, market their products, and grow their operations. Real pricing and features.
          </p>
        </div>
      </section>

      {_/* Business Insights */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Business Tool Trends & Insights
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with our analysis of the business tools landscape and emerging opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_businessInsights.map(_(insight, _index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{_insight.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{_insight.description}</p>
                <div className={_`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${insight.color} bg-gray-800/50`}>
                  {_insight.trend}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Business Tools */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Essential Business Tools
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Hand-picked business tools that deliver real value for your organization. Each tool has been evaluated 
              for features, pricing, and business impact.
            </p>
          </div>

          {_businessTools.map(_(category, _categoryIndex) => (_<div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{_category.category}</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cursor-blue to-purple-500 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {_category.tools.map((tool, _toolIndex) => (
                  <Card
                    key={toolIndex}
                    className={_`card-hover border-gradient-blue group ${tool.popular ? 'ring-2 ring-cursor-blue/50' : ''}`}
                    style={_{ animationDelay: `${(categoryIndex * 0.2) + (toolIndex * 0.1)}s` }}
                  >
                    {_tool.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium">
                          <Star className="w-3 h-3 mr-1" />
                          Popular Choice
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div className={_`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {_tool.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{_tool.name}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{_tool.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-cursor-blue">{_tool.pricing}</span>
                      </div>
                      <ul className="space-y-2">
                        {_tool.features.map(_(feature, _featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <Check className="w-4 h-4 text-cursor-blue mr-3 flex-shrink-0" />
                            {_feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      href={_tool.website}
                      variant="primary"
                      size="sm"
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                      external
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {_/* Productivity Tips */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Productivity Tips & Best Practices
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Maximize the value of your business tools with these proven strategies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_productivityTips.map(_(tip, _index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {_tip.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{_tip.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{_tip.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            These business tools can streamline your operations, improve team collaboration, and drive growth. 
            Start with the essentials and build your tech stack strategically.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/micro-saas"
              variant="secondary"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl"
            >
              Explore Micro SaaS
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              Get Business Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}