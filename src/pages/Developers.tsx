import React from 'react';
import { SEO } from '../components/SEO';
import { Code, Terminal, Download, ExternalLink, Github, Star, Zap, BookOpen, Play, Cpu, Globe, Shield } from 'lucide-react';

export default function Developers() {
  const apis = [
    {
      name: 'AI Content Generation API',
      description: 'Generate high-quality content using advanced AI models',
      version: 'v2.0',
      status: 'stable',
      endpoints: 12,
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Business Intelligence API',
      description: 'Advanced data analytics and business insights',
      version: 'v1.8',
      status: 'stable',
      endpoints: 18,
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cloud Infrastructure API',
      description: 'Manage cloud resources and deployments',
      version: 'v3.1',
      status: 'stable',
      endpoints: 24,
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Cybersecurity API',
      description: 'Security scanning and threat detection',
      version: 'v1.5',
      status: 'beta',
      endpoints: 15,
      featured: false,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const sdks = [
    {
      language: 'Python',
      description: 'Official Python SDK with full API coverage',
      version: '2.1.0',
      downloads: '50K+',
      icon: '🐍',
      featured: true
    },
    {
      language: 'JavaScript/Node.js',
      description: 'TypeScript-ready SDK for web and server applications',
      version: '1.8.3',
      downloads: '35K+',
      icon: '📦',
      featured: true
    },
    {
      language: 'Go',
      description: 'Lightweight and performant Go SDK',
      version: '1.4.2',
      downloads: '12K+',
      icon: '🚀',
      featured: false
    },
    {
      language: 'Java',
      description: 'Enterprise-ready Java SDK with Spring Boot support',
      version: '2.0.1',
      downloads: '18K+',
      icon: '☕',
      featured: false
    },
    {
      language: 'C#/.NET',
      description: '.NET SDK with async/await support',
      version: '1.6.0',
      downloads: '8K+',
      icon: '⚡',
      featured: false
    },
    {
      language: 'Ruby',
      description: 'Ruby gem with Rails integration',
      version: '1.3.1',
      downloads: '4K+',
      icon: '💎',
      featured: false
    }
  ];

  const tools = [
    {
      name: 'API Playground',
      description: 'Interactive API testing environment',
      type: 'Web Tool',
      icon: Play,
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      name: 'CLI Tool',
      description: 'Command-line interface for API management',
      type: 'Command Line',
      icon: Terminal,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'Postman Collection',
      description: 'Pre-configured API collection for Postman',
      type: 'Collection',
      icon: Download,
      color: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      name: 'OpenAPI Spec',
      description: 'Complete OpenAPI 3.0 specification',
      type: 'Specification',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      featured: false
    }
  ];

  const codeExamples = [
    {
      title: 'Content Generation',
      language: 'Python',
      code: `import ziontech

client = ziontech.Client(api_key="your_api_key")

response = client.content.generate(
    prompt="Write a product description for a smart watch",
    model="gpt-4",
    max_tokens=150
)

print(response.content)`
    },
    {
      title: 'Data Analytics',
      language: 'JavaScript',
      code: `const ZionTech = require('@ziontech/sdk');

const client = new ZionTech({
  apiKey: process.env.ZION_API_KEY
});

const insights = await client.analytics.analyze({
  dataset: 'sales_data',
  metrics: ['revenue', 'conversion'],
  timeRange: '30d'
});

console.log(insights);`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developer Portal - Zion Tech Group"
        description="Comprehensive developer resources for Zion Tech Group APIs. Documentation, SDKs, tools, and code examples for developers."
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">Developer Portal</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future with our AI-powered APIs. Everything you need to integrate, 
              develop, and scale your applications with Zion Tech Group.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Try API Playground
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">API Endpoints</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
              <div className="text-gray-400">Official SDKs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-400">Developers</div>
            </div>
          </div>
        </div>
      </div>

      {/* APIs */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our APIs</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apis.map((api, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  api.featured 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-400/50 hover:border-cyan-400' 
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${api.color} flex items-center justify-center`}>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    {api.featured && <Star className="w-5 h-5 text-cyan-400" />}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      api.status === 'stable' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {api.status}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-bold text-white mb-2">{api.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{api.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Version {api.version}</span>
                  <span>{api.endpoints} endpoints</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:scale-105 transition-transform text-sm">
                    View Docs
                  </button>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors text-sm">
                    Try It
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SDKs */}
      <div className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Official SDKs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  sdk.featured 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-400/50 hover:border-cyan-400' 
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{sdk.icon}</div>
                  {sdk.featured && <Star className="w-5 h-5 text-cyan-400" />}
                </div>
                
                <h3 className="font-bold text-white mb-2">{sdk.language}</h3>
                <p className="text-gray-400 text-sm mb-4">{sdk.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>v{sdk.version}</span>
                  <span>{sdk.downloads} downloads</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:scale-105 transition-transform text-sm flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Install
                  </button>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors text-sm">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Developer Tools */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Developer Tools</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  tool.featured 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-400/50 hover:border-cyan-400' 
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                  {React.createElement(tool.icon, { className: "w-6 h-6 text-white" })}
                </div>
                
                <h3 className="font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                
                <div className="text-xs text-gray-500 mb-4">{tool.type}</div>
                
                <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:scale-105 transition-transform text-sm">
                  Access Tool
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Code Examples</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                  <h3 className="font-semibold text-white">{example.title}</h3>
                  <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded text-sm">
                    {example.language}
                  </span>
                </div>
                <div className="p-6">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
                <div className="px-6 py-4 border-t border-slate-700">
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                    View Full Example →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started CTA */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-400/50 text-center">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your API key and start integrating our powerful AI services into your applications today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                <Cpu className="w-5 h-5" />
                Get API Key
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Quick Start Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}