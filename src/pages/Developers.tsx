import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Key, Webhook, Play, Download, Github, Terminal, Database, FileText, Zap, Shield, Users, Star } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Developers() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BookOpen },
    { id: 'api-docs', name: 'API Docs', icon: FileText },
    { id: 'sdks', name: 'SDKs & Libraries', icon: Code },
    { id: 'examples', name: 'Examples', icon: Play },
    { id: 'tools', name: 'Developer Tools', icon: Terminal }
  ];

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/ai/analyze',
      description: 'Analyze text using AI models',
      parameters: ['text', 'model', 'options']
    },
    {
      method: 'POST',
      endpoint: '/api/v1/ai/generate',
      description: 'Generate content with AI',
      parameters: ['prompt', 'model', 'max_tokens', 'temperature']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/security/scan',
      description: 'Security vulnerability scan',
      parameters: ['target', 'scan_type', 'options']
    },
    {
      method: 'POST',
      endpoint: '/api/v1/analytics/query',
      description: 'Query analytics data',
      parameters: ['query', 'filters', 'time_range']
    }
  ];

  const sdks = [
    {
      name: 'Python SDK',
      version: '2.1.0',
      description: 'Official Python client library',
      features: ['Async support', 'Type hints', 'Comprehensive docs'],
      downloadUrl: '#',
      githubUrl: '#'
    },
    {
      name: 'JavaScript SDK',
      version: '3.0.0',
      description: 'Node.js and browser compatible',
      features: ['ES6 modules', 'Promise-based', 'Tree-shaking'],
      downloadUrl: '#',
      githubUrl: '#'
    },
    {
      name: 'Go SDK',
      version: '1.5.0',
      description: 'High-performance Go client',
      features: ['Context support', 'Zero allocations', 'Goroutine safe'],
      downloadUrl: '#',
      githubUrl: '#'
    }
  ];

  const examples = [
    {
      title: 'AI Text Analysis',
      language: 'Python',
      description: 'Analyze sentiment and extract entities from text',
      code: `import zion

client = zion.Client(api_key="your-api-key")

# Analyze text sentiment
result = client.ai.analyze(
    text="I love this product!",
    model="sentiment-v2"
)

print(f"Sentiment: {result.sentiment}")
print(f"Confidence: {result.confidence}")`
    },
    {
      title: 'Real-time Security Monitoring',
      language: 'JavaScript',
      description: 'Monitor security events in real-time',
      code: `import { ZionClient } from '@zion/sdk';

const client = new ZionClient('your-api-key');

// Subscribe to security events
client.security.subscribe('threats', (event) => {
  console.log('Security threat detected:', event);
  
  if (event.severity === 'high') {
    // Trigger immediate response
    client.security.respond(event.id, 'block');
  }
});`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developer Portal - Zion Tech Group"
        description="Access our comprehensive developer resources including API documentation, SDKs, code examples, and developer tools to build with Zion Tech Group's AI solutions."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Developer Portal
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build powerful applications with our AI-powered APIs, comprehensive SDKs, 
              and developer tools. Join thousands of developers building the future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                <Key className="w-5 h-5" />
                Get API Key
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50M+</div>
            <div className="text-gray-400">API Calls</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">15K+</div>
            <div className="text-gray-400">Developers</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10 mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Getting Started</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                      <div>
                        <h4 className="font-medium text-white">Get Your API Key</h4>
                        <p className="text-gray-400 text-sm">Sign up and get your free API key to start building</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                      <div>
                        <h4 className="font-medium text-white">Choose Your SDK</h4>
                        <p className="text-gray-400 text-sm">Download the SDK for your preferred programming language</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                      <div>
                        <h4 className="font-medium text-white">Build & Deploy</h4>
                        <p className="text-gray-400 text-sm">Start building your application with our comprehensive APIs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">High-performance APIs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-white">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-white">24/7 developer support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Comprehensive documentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* API Docs Tab */}
          {activeTab === 'api-docs' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">API Endpoints</h3>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center gap-4 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          endpoint.method === 'GET' ? 'bg-green-600/20 text-green-400' :
                          endpoint.method === 'POST' ? 'bg-blue-600/20 text-blue-400' :
                          'bg-yellow-600/20 text-yellow-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-blue-300 font-mono">{endpoint.endpoint}</code>
                      </div>
                      <p className="text-gray-300 mb-2">{endpoint.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <span key={paramIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SDKs Tab */}
          {activeTab === 'sdks' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sdks.map((sdk, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white">{sdk.name}</h4>
                      <span className="text-sm text-gray-400">v{sdk.version}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{sdk.description}</p>
                    <div className="space-y-2 mb-6">
                      {sdk.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                        Download
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Examples Tab */}
          {activeTab === 'examples' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                {examples.map((example, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white">{example.title}</h4>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full">
                        {example.language}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{example.description}</p>
                    <div className="bg-slate-800 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-200">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Terminal className="w-8 h-8 text-blue-400" />
                    <h4 className="text-xl font-semibold text-white">CLI Tool</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Command-line interface for quick API testing and automation</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Install CLI
                  </button>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Play className="w-8 h-8 text-green-400" />
                    <h4 className="text-xl font-semibold text-white">API Playground</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Interactive API testing environment in your browser</p>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Open Playground
                  </button>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Webhook className="w-8 h-8 text-purple-400" />
                    <h4 className="text-xl font-semibold text-white">Webhook Tester</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Test and debug webhook integrations</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Test Webhooks
                  </button>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-8 h-8 text-orange-400" />
                    <h4 className="text-xl font-semibold text-white">Data Explorer</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Explore and analyze your data through our APIs</p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Explore Data
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building the future with our AI-powered APIs and tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Get Started Free
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 border border-white/20">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}