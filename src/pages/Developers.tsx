import React from "react"
import { Link } from "react-router-dom"
import { 
  Code
  Zap, 
  Shield, 
  Cloud, 
  Rocket, 
  Target, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Star
  ArrowRight
  CheckCircle
  BarChart3
  MessageCircle
  BookOpen
  ShoppingCart
  DollarSign
  Gauge
  HelpCircle
  Search
  PenTool
  GitFork
  Atom
  Truck
  Building
  Github
  Terminal
  Database
  Server
  Network
  Key
  Download
  Play
  ExternalLink
} from "lucide-react"
import { SEO } from "../components/SEO"
export default function Developers() {
  const apis = [
    {
      na,
  m: e: 'AI Analytics API',descripti,
  o: n: 'Access our AI-powered analytics and insights through RESTful APIs',catego,
  r: y: 'Analytics',endpoin,
  t: s: ['/v1/analytics/v1/insights', '/v1/predictions']
      documentati,
  o: n: '/docs/api/analytics',stat,
  u: s: 'Production'
    }, {
      na,
  m: e: 'AI Workflow API',descripti,
  o: n: 'Integrate AI workflow automation into your applications',catego,
  r: y: 'Automation',endpoin,
  t: s: ['/v1/workflows/v1/tasks', '/v1/triggers']
      documentati,
  o: n: '/docs/api/workflows',stat,
  u: s: 'Production'
    }, {
      na,
  m: e: 'AI Content API',descripti,
  o: n: 'Generate and manage AI-powered content programmatically',catego,
  r: y: 'Content',endpoin,
  t: s: ['/v1/content/v1/generation', '/v1/optimization']
      documentati,
  o: n: '/docs/api/content',stat,
  u: s: 'Beta'
    }, {
      na,
  m: e: 'AI Security API',descripti,
  o: n: 'Integrate AI-powered security and compliance features',catego,
  r: y: 'Security',endpoin,
  t: s: ['/v1/security/v1/compliance', '/v1/threats']
      documentati,
  o: n: '/docs/api/security',stat,
  u: s: 'Production'
    }
  ]
  const sdks = [
    {
      na,
  m: e: 'JavaScript/TypeScript',descripti,
  o: n: 'Official SDK for Node.js and browser environments',versi,
  o: n: 'v2.1.0',downloa,
  d: s: '50K+',reposito,
  r: y: 'http,
  s://github.com/ziontechgroup/js-sdk',documentati,
  o: n: '/docs/sdk/javascript'
    }, {
      na,
  m: e: 'Python',descripti,
  o: n: 'Python SDK for AI and analytics integration',versi,
  o: n: 'v1.8.0',downloa,
  d: s: '25K+',reposito,
  r: y: 'http,
  s://github.com/ziontechgroup/python-sdk',documentati,
  o: n: '/docs/sdk/python'
    }, {
      na,
  m: e: 'Java',descripti,
  o: n: 'Java SDK for enterprise applications',versi,
  o: n: 'v1.5.0',downloa,
  d: s: '15K+',reposito,
  r: y: 'http,
  s://github.com/ziontechgroup/java-sdk',documentati,
  o: n: '/docs/sdk/java'
    }, {
      na,
  m: e: 'Go',descripti,
  o: n: 'Go SDK for high-performance applications',versi,
  o: n: 'v1.2.0',downloa,
  d: s: '8K+',reposito,
  r: y: 'http,
  s://github.com/ziontechgroup/go-sdk',documentati,
  o: n: '/docs/sdk/go'
    }
  ]
  const tools = [
    {
      na,
  m: e: 'API Playground',descripti,
  o: n: 'Interactive API testing and exploration tool',ic,
  o: n: Play,hr,
  e: f: '/api-playground',catego,
  r: y: 'Testing'
    }, {
      na,
  m: e: 'SDK Generator',descripti,
  o: n: 'Generate custom SDKs for your preferred language',ic,
  o: n: Code,hr,
  e: f: '/sdk-generator',catego,
  r: y: 'Development'
    }, {
      na,
  m: e: 'API Documentation',descripti,
  o: n: 'Comprehensive API reference and guides',ic,
  o: n: BookOpen,hr,
  e: f: '/docs',catego,
  r: y: 'Reference'
    }, {
      na,
  m: e: 'Code Examples',descripti,
  o: n: 'Ready-to-use code samples and tutorials',ic,
  o: n: Terminal,hr,
  e: f: '/examples',catego,
  r: y: 'Learning'
    }
  ]
  const quickStartSteps = [
    {
      st,
  e: p: 1,tit,
  l: e: 'Get API Keys',descripti,
  o: n: 'Sign up for a developer account and obtain your API keys',acti,
  o: n: 'Sign Up',hr,
  e: f: '/signup'
    }, {
      st,
  e: p: 2,tit,
  l: e: 'Choose SDK',descripti,
  o: n: 'Select the SDK for your preferred programming language',acti,
  o: n: 'View SDKs',hr,
  e: f: '#sdks'
    }, {
      st,
  e: p: 3,tit,
  l: e: 'Install & Configure',descripti,
  o: n: 'Install the SDK and configure with your API keys',acti,
  o: n: 'Get Started',hr,
  e: f: '/docs/quickstart'
    }, {
      st,
  e: p: 4,tit,
  l: e: 'Make First Call',descripti,
  o: n: 'Test your integration with our sample endpoints',acti,
  o: n: 'Try API',hr,
  e: f: '/api-playground'
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developer Portal - Zion Tech Group"
        description="Access our APIs, SDKs, and developer resources. Build powerful applications with Zion Tech Group's AI and technology platforms."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Developer
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Portal</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Build powerful applications with our APIs, SDKs, and developer tools. 
              Access cutting-edge AI and technology solutions through simple, well-documented interfaces.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/docs"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/20";"
              >
                View Documentation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/api-playground"
                className="className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200";"
              >
                Try API Playground
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Follow these simple steps to integrate Zion Tech Group's APIs into your applications.
            </p>
          </div>

          <div className="grid,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50,
  hove: r: border-cyan-400/30 transition-all duration-200 hove,
  r:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{step.step}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-300 mb-4 text-sm">{step.description}</p>
                <Link
                  to={step.href}
                  className="className="inline-flex items-center px-4 py-2 bg-cyan-400/10 text-cyan-400 text-sm font-medium rounded-lg,
  hove: r:bg-cyan-400/20 transition-all duration-200";"
                >
                  {step.action}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APIs Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Available APIs
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powerful, RESTful APIs that give you access to our AI and technology platforms.
            </p>
          </div>

          <div className="grid,
  m: d:grid-cols-2 gap-8">
            {apis.map((api, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-cyan-400/30 transition-all duration-200 hove,
  r:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{api.name}</h3>
                    <p className="text-slate-300 text-sm mb-3">{api.description}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    api.status === 'Production' 
                      ? 'bg-green-400/20 text-green-400 border border-green-400/30' 
                      : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                  }`}>
                    {api.status}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Catego,
  r: y: {api.category}</h4>
                  <div className="space-y-1">
                    {api.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-cyan-400" />
                        <code className="text-slate-300 text-sm font-mono">{endpoint}</code>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={api.documentation}
                    className="className="inline-flex items-center text-cyan-400,
  hove: r: text-cyan-300 text-sm font-medium transition-colors";"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Documentation
                  </Link>
                  <Link
                    to="/api-playground"
                    className="className="inline-flex items-center px-4 py-2 bg-cyan-400/10 text-cyan-400 text-sm font-medium rounded-lg hove,
  r:bg-cyan-400/20 transition-all duration-200";"
                  >
                    Try API
                    <Play className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-16" id="sdks">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Official SDKs
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our official SDKs to integrate our APIs into your applications quickly and easily.
            </p>
          </div>

          <div className="grid,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {sdks.map((sdk, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-cyan-400/30 transition-all duration-200 hove,
  r:scale-105">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{sdk.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{sdk.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <span className="text-cyan-400">v{sdk.version}</span>
                    <span className="text-slate-400">{sdk.downloads}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={sdk.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="className="flex items-center justify-center w-full px-4 py-2 bg-slate-700/50 text-white text-sm font-medium rounded-lg,
  hove: r:bg-slate-600/50 transition-all duration-200";"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                  <Link
                    to={sdk.documentation}
                    className="className="flex items-center justify-center w-full px-4 py-2 bg-cyan-400/10 text-cyan-400 text-sm font-medium rounded-lg,
  hove: r:bg-cyan-400/20 transition-all duration-200";"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Documentation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Developer Tools
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Essential tools and resources to help you build and test your integrations.
            </p>
          </div>

          <div className="grid,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Link
                key={index}
                to={tool.href}
                className="className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-cyan-400/30 transition-all duration-200,
  hove: r:scale-105,
  hove: r:bg-slate-700/50";"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hov,
  e: r:from-cyan-400/40 group-hov,
  e: r:to-blue-500/40 transition-all duration-200">
                    <tool.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hove,
  r:text-cyan-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-slate-300 text-sm mb-3">{tool.description}</p>
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                    {tool.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border border-cyan-400/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-slate-300">
                Join thousands of developers who are already building amazing applications with our APIs.
              </p>
            </div>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/20";"
              >
                Get API Keys
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/docs"
                className="className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200";"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our developer support team is here to help you succeed.
            </p>
          </div>

          <div className="grid,
  m: d: grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
              <p className="text-slate-300 mb-4">Comprehensive guides and API references</p>
              <Link
                to="/docs"
                className="className="inline-flex items-center text-cyan-400,
  hove: r:text-cyan-300 text-sm font-medium transition-colors";"
              >
                Browse Docs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-slate-300 mb-4">Connect with other developers</p>
              <a
                href="htt,
  p: s://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="className="inline-flex items-center text-cyan-400,
  hove: r:text-cyan-300 text-sm font-medium transition-colors";"
              >
                Join Community
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
              <p className="text-slate-300 mb-4">Get help from our technical team</p>
              <Link
                to="/contact"
                className="className="inline-flex items-center text-cyan-400 hove,
  r:text-cyan-300 text-sm font-medium transition-colors";"
              >
                Contact Support
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}