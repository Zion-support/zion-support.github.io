import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {_Code, _GitBranch, _Database, _Cloud, _Shield, _Zap, _Star, _ExternalLink, _CheckCircle, _TrendingUp, _Cpu, _Globe} from 'lucide-react';

export default function DeveloperToolsPage() {_const _developerTools = [
    {
      icon: <Code className="w-8 h-8 text-white" />, _title: 'GitHub Copilot', _description: 'AI-powered code completion and generation that understands your codebase and suggests intelligent solutions.', _features: [
        'Intelligent code completion', _'Multi-language support', _'IDE integration', _'Code explanation', _'Security vulnerability detection'
      ], _pricing: '$10/month', _marketPrice: '$10-20/month', _website: 'https://github.com/features/copilot', _color: 'bg-gradient-to-br from-gray-500 to-black', _textColor: 'text-gray-400', _gradient: 'from-gray-400 to-black', _popular: true, _category: 'Code Generation'},
    {_icon: <GitBranch className="w-8 h-8 text-white" />, _title: 'GitHub Pro', _description: 'Advanced GitHub features for professional developers including private repositories, _advanced tools, _and priority support.', _features: [
        'Unlimited private repositories', _'Advanced code review tools', _'Priority support', _'Advanced insights', _'Team management features'
      ], _pricing: '$4/month', _marketPrice: '$4/month', _website: 'https://github.com/pricing', _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _textColor: 'text-green-400', _gradient: 'from-green-400 to-emerald-500', _popular: true, _category: 'Version Control'},
    {_icon: <Database className="w-8 h-8 text-white" />, _title: 'MongoDB Atlas', _description: 'Fully managed cloud database service with automatic scaling, _backup, _and monitoring for modern applications.', _features: [
        'Fully managed MongoDB', _'Auto-scaling & optimization', _'Global distribution', _'Advanced security', _'Real-time analytics'
      ], _pricing: '$9/month', _marketPrice: '$9-57/month', _website: 'https://www.mongodb.com/atlas', _color: 'bg-gradient-to-br from-green-500 to-blue-600', _textColor: 'text-green-400', _gradient: 'from-green-400 to-blue-500', _popular: false, _category: 'Database'},
    {_icon: <Cloud className="w-8 h-8 text-white" />, _title: 'Vercel Pro', _description: 'Next.js deployment platform with automatic deployments, _preview deployments, _and advanced analytics.', _features: [
        'Zero-config deployments', _'Preview deployments', _'Advanced analytics', _'Team collaboration', _'Custom domains'
      ], _pricing: '$20/month', _marketPrice: '$20/month', _website: 'https://vercel.com/pricing', _color: 'bg-gradient-to-br from-black to-gray-600', _textColor: 'text-gray-400', _gradient: 'from-black to-gray-500', _popular: false, _category: 'Deployment'},
    {_icon: <Shield className="w-8 h-8 text-white" />, _title: 'Snyk', _description: 'Developer security platform that finds and fixes vulnerabilities in code, _dependencies, _and containers.', _features: [
        'Vulnerability scanning', _'Dependency monitoring', _'Container security', _'Infrastructure as Code', _'CI/CD integration'
      ], _pricing: '$25/month', _marketPrice: '$25-100/month', _website: 'https://snyk.io/pricing', _color: 'bg-gradient-to-br from-red-500 to-pink-600', _textColor: 'text-red-400', _gradient: 'from-red-400 to-pink-500', _popular: false, _category: 'Security'},
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'Postman', _description: 'Complete API development platform for building, _testing, _and documenting APIs with team collaboration.', _features: [
        'API design & testing', _'Team collaboration', _'API documentation', _'Mock servers', _'Monitoring & analytics'
      ], _pricing: '$12/month', _marketPrice: '$12-99/month', _website: 'https://www.postman.com/pricing', _color: 'bg-gradient-to-br from-orange-500 to-red-600', _textColor: 'text-orange-400', _gradient: 'from-orange-400 to-red-500', _popular: false, _category: 'API Development'}
  ];

  const _devMarketStats = [
    {_title: 'Dev Tools Market', _value: '$8.2B', _growth: '+24% YoY', _description: 'Global developer tools market size'},
    {_title: 'AI Code Tools', _value: '$2.1B', _growth: '+45% YoY', _description: 'AI-powered development tools market'},
    {_title: 'Cloud Dev Tools', _value: '$4.8B', _growth: '+32% YoY', _description: 'Cloud-based development platforms'},
    {_title: 'Dev Productivity', _value: '35%', _growth: '+18% YoY', _description: 'Average productivity improvement'}
  ];

  const _devCategories = [
    {_name: 'Code Generation', _description: 'AI-powered coding assistants and code completion tools', _tools: 1, _avgPrice: '$10/month'},
    {_name: 'Version Control', _description: 'Git platforms and collaboration tools for code management', _tools: 1, _avgPrice: '$4/month'},
    {_name: 'Database', _description: 'Managed database services and database tools', _tools: 1, _avgPrice: '$33/month'},
    {_name: 'Deployment', _description: 'Platforms for deploying and hosting applications', _tools: 1, _avgPrice: '$20/month'},
    {_name: 'Security', _description: 'Security scanning and vulnerability detection tools', _tools: 1, _avgPrice: '$62/month'},
    {_name: 'API Development', _description: 'Tools for building, _testing, _and managing APIs', _tools: 1, _avgPrice: '$55/month'}
  ];

  const _devWorkflow = [
    {_phase: 'Development', _tools: ['GitHub Copilot', _'VS Code', _'Git'], _description: 'Write and manage code with AI assistance'},
    {_phase: 'Testing', _tools: ['Jest', _'Cypress', _'Postman'], _description: 'Test code quality and API functionality'},
    {_phase: 'Security', _tools: ['Snyk', _'GitHub Advanced Security'], _description: 'Scan for vulnerabilities and security issues'},
    {_phase: 'Deployment', _tools: ['Vercel', _'GitHub Actions', _'Docker'], _description: 'Deploy and host applications'}
  ];

  return (
    <>
      <Head>
        <title>Developer Tools & Services | Zion Tech Group - Real Dev Tools with Pricing</title>
        <meta name="description" content="Discover real developer tools and services including GitHub Copilot, MongoDB Atlas, Vercel, and more. All tools include pricing, features, and direct links." />
        <meta property="og:title" content="Developer Tools & Services | Zion Tech Group" />
        <meta property="og:description" content="Real developer tools with pricing and direct links to boost your development workflow." />
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
            Developer Tools & Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Professional Developer Tools That Actually Work
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Curated developer tools and services that professionals use daily. Each tool has been tested and verified 
            to provide real value for developers and development teams.
          </p>
        </div>
      </section>

      {_/* Developer Market Statistics */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Developer Tools Market Insights
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the developer tools landscape helps you make informed decisions about your development stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {_devMarketStats.map(_(stat, _index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{_stat.title}</h3>
                  <div className="text-2xl font-bold text-cursor-blue mb-2">{_stat.value}</div>
                  <div className="text-sm text-green-400 mb-3">{_stat.growth}</div>
                  <p className="text-sm text-gray-400">{_stat.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Developer Tools Grid */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Curated Developer Tools & Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each tool has been carefully selected based on performance, reliability, and real-world developer usage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_developerTools.map(_(tool, _index) => (
              <Card
                key={index}
                className={_`card-hover group border-gradient-blue relative ${
                  tool.popular ? 'ring-2 ring-cursor-blue ring-opacity-50' : ''}`}
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                {_tool.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={_`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {_tool.icon}
                    </div>
                    <div className={_`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={_`text-2xl font-bold ${tool.textColor}`}>
                        {_tool.title}
                      </h3>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                        {_tool.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {_tool.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Service Price:</span>
                        <span className="text-lg font-semibold text-cursor-blue">{_tool.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Market Average:</span>
                        <span className="text-sm text-gray-400">{_tool.marketPrice}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {_tool.features.map(_(feature, _featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {_feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <Button
                        href={_tool.website}
                        variant="primary"
                        size="sm"
                        className="bg-cursor-blue hover:bg-cursor-blue-dark"
                      >
                        Try Tool
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Direct Link</div>
                        <div className="text-xs text-cursor-blue font-mono">{_tool.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Developer Workflow */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Complete Developer Workflow
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Build a complete development pipeline with these essential tools that work together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_devWorkflow.map(_(phase, _index) => (_<Card
                key={index}
                className="card-hover border-gradient-blue"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-cursor-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{_phase.phase}</h3>
                  <p className="text-gray-400 mb-4">{_phase.description}</p>
                  <div className="space-y-1">
                    {_phase.tools.map((tool, _toolIndex) => (
                      <div key={toolIndex} className="text-sm text-cursor-blue font-medium">
                        {_tool}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Tool Categories */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Developer Tool Categories
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the different types of developer tools helps you build a comprehensive development stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_devCategories.map(_(category, _index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{_category.name}</h3>
                  <p className="text-gray-400 mb-4">{_category.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Tools Available: <span className="text-white">{_category.tools}</span></span>
                    <span className="text-cursor-blue font-semibold">{_category.avgPrice}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor text-center">
          <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
            Ready to Level Up Your Development?
          </h2>
          <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Start with one tool or build a complete development stack. Each tool is designed to work independently 
            and integrate seamlessly with your existing workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/ai-tools"
              variant="primary"
              size="lg"
              className="bg-cursor-blue hover:bg-cursor-blue-dark"
            >
              Explore AI Tools
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white"
            >
              Get Dev Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}