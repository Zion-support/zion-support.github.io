import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Code, Terminal, BookOpen, Users, Zap, Shield, Globe, Download, ExternalLink, Play, Database, Cloud, Cpu, Brain } from 'lucide-react';

const Developers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'tools', label: 'Developer Tools', icon: Terminal },
    { id: 'sdks', label: 'SDKs & Libraries', icon: Code },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'resources', label: 'Resources', icon: BookOpen }
  ];

  const developerTools = [
    {
      name: 'API Playground',
      description: 'Interactive API testing environment with real-time request/response visualization',
      icon: Play,
      status: 'Live',
      category: 'Testing',
      link: '/api-playground'
    },
    {
      name: 'Code Generator',
      description: 'Generate client code in multiple languages from API specifications',
      icon: Code,
      status: 'Beta',
      category: 'Development',
      link: '/code-generator'
    },
    {
      name: 'SDK Builder',
      description: 'Custom SDK generation tool for your specific use cases',
      icon: Terminal,
      status: 'Coming Soon',
      category: 'Development',
      link: '/sdk-builder'
    },
    {
      name: 'Performance Monitor',
      description: 'Real-time API performance monitoring and analytics dashboard',
      icon: Zap,
      status: 'Live',
      category: 'Monitoring',
      link: '/performance-monitor'
    },
    {
      name: 'Security Scanner',
      description: 'Automated security testing for your API integrations',
      icon: Shield,
      status: 'Live',
      category: 'Security',
      link: '/security-scanner'
    },
    {
      name: 'Database Explorer',
      description: 'Interactive database query tool with schema visualization',
      icon: Database,
      status: 'Beta',
      category: 'Data',
      link: '/database-explorer'
    }
  ];

  const sdks = [
    {
      language: 'JavaScript/Node.js',
      version: 'v2.1.0',
      icon: 'JS',
      color: 'bg-yellow-500/20 text-yellow-400',
      features: ['TypeScript support', 'Async/await', 'Error handling', 'Middleware support'],
      install: 'npm install @ziontech/api',
      docs: '/docs/javascript'
    },
    {
      language: 'Python',
      version: 'v1.8.2',
      icon: 'PY',
      color: 'bg-blue-500/20 text-blue-400',
      features: ['Async support', 'Pandas integration', 'Jupyter examples', 'Type hints'],
      install: 'pip install ziontech',
      docs: '/docs/python'
    },
    {
      language: 'Go',
      version: 'v1.2.1',
      icon: 'GO',
      color: 'bg-green-500/20 text-green-400',
      features: ['Context support', 'Middleware', 'Testing', 'High performance'],
      install: 'go get github.com/ziontech/go-sdk',
      docs: '/docs/go'
    },
    {
      language: 'Java',
      version: 'v1.5.0',
      icon: 'JA',
      color: 'bg-orange-500/20 text-orange-400',
      features: ['Spring integration', 'Async support', 'Maven/Gradle', 'Javadoc'],
      install: 'Maven dependency',
      docs: '/docs/java'
    }
  ];

  const communityFeatures = [
    {
      name: 'Developer Forum',
      description: 'Ask questions, share solutions, and connect with other developers',
      members: '5,234',
      topics: '1,847',
      icon: Users,
      link: '/community/forum'
    },
    {
      name: 'Code Examples',
      description: 'Browse and contribute to our collection of code examples',
      examples: '342',
      languages: '8',
      icon: Code,
      link: '/community/examples'
    },
    {
      name: 'Hackathons',
      description: 'Participate in regular hackathons and coding challenges',
      events: '12',
      participants: '2,156',
      icon: Zap,
      link: '/community/hackathons'
    },
    {
      name: 'Mentorship Program',
      description: 'Get mentored by experienced developers or mentor others',
      mentors: '89',
      mentees: '156',
      icon: Users,
      link: '/community/mentorship'
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Complete beginner guide to start building with our platform',
      type: 'Guide',
      difficulty: 'Beginner',
      time: '15 min',
      icon: BookOpen
    },
    {
      title: 'API Reference',
      description: 'Comprehensive API documentation with examples',
      type: 'Reference',
      difficulty: 'All',
      time: '60 min',
      icon: Code
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices for building scalable applications',
      type: 'Guide',
      difficulty: 'Intermediate',
      time: '30 min',
      icon: Shield
    },
    {
      title: 'Architecture Patterns',
      description: 'Common architectural patterns and implementation examples',
      type: 'Guide',
      difficulty: 'Advanced',
      time: '45 min',
      icon: Cpu
    },
    {
      title: 'AI Integration Guide',
      description: 'How to integrate AI services into your applications',
      type: 'Tutorial',
      difficulty: 'Intermediate',
      time: '40 min',
      icon: Brain
    },
    {
      title: 'Performance Optimization',
      description: 'Techniques for optimizing API performance and reducing latency',
      type: 'Guide',
      difficulty: 'Advanced',
      time: '35 min',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developer Portal - Zion Tech Group"
        description="Access developer tools, SDKs, community resources, and comprehensive documentation for building with our AI-powered platform."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Developer Portal
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale with our AI-powered platform. 
              Access tools, SDKs, community, and comprehensive resources.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Play className="w-5 h-5" />
                Try API Playground
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Download className="w-5 h-5" />
                Download SDKs
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Users className="w-5 h-5" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-gray-400">Developers</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">8</div>
            <div className="text-gray-400">SDKs</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Terminal className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">12</div>
            <div className="text-gray-400">Tools</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">156</div>
            <div className="text-gray-400">Resources</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Welcome to the Developer Portal</h2>
              <p className="text-gray-300 mb-8">
                Build powerful applications with our comprehensive suite of AI services, analytics, and business intelligence tools. 
                Whether you're a beginner or an experienced developer, we have everything you need to succeed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">What You Can Build</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      AI-powered content generation applications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Business intelligence dashboards
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Predictive analytics solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Micro SaaS platforms
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Digital twin applications
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Getting Started</h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-300">
                    <li>Choose your preferred programming language</li>
                    <li>Install the appropriate SDK</li>
                    <li>Get your API key from the dashboard</li>
                    <li>Follow our getting started guide</li>
                    <li>Join the developer community</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tools' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Developer Tools</h2>
              <p className="text-gray-300 mb-8">
                Access our comprehensive suite of developer tools to accelerate your development workflow.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {developerTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="w-8 h-8 text-blue-400" />
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          tool.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                          tool.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {tool.status}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                          {tool.category}
                        </span>
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                          Launch Tool
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'sdks' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">SDKs & Libraries</h2>
              <p className="text-gray-300 mb-8">
                Choose from our collection of official SDKs and libraries for your preferred programming language.
              </p>
              
              <div className="space-y-6">
                {sdks.map((sdk, index) => (
                  <div key={index} className="bg-slate-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${sdk.color}`}>
                          <span className="font-bold text-lg">{sdk.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{sdk.language}</h3>
                          <p className="text-sm text-gray-400">Version {sdk.version}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium">
                          Install
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-sm">
                          Docs
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3">Features</h4>
                        <ul className="space-y-2">
                          {sdk.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3">Installation</h4>
                        <div className="bg-slate-900 rounded p-3">
                          <code className="text-green-400 text-sm font-mono">{sdk.install}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'community' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Developer Community</h2>
              <p className="text-gray-300 mb-8">
                Connect with fellow developers, share knowledge, and get help when you need it.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-8 h-8 text-blue-400" />
                        <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {Object.entries(feature).filter(([key]) => !['name', 'description', 'icon', 'link'].includes(key)).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-medium transition-colors">
                        Join Now
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Developer Resources</h2>
              <p className="text-gray-300 mb-8">
                Access comprehensive documentation, tutorials, and guides to help you build better applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                      <Icon className="w-8 h-8 text-blue-400 mb-4" />
                      
                      <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded">
                          {resource.difficulty}
                        </span>
                        <span>{resource.time}</span>
                      </div>
                      
                      <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded text-sm font-medium transition-colors">
                        Read More
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Developers;