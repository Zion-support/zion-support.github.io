import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
  Code,
  BookOpen,
  Zap,
  Shield,
  Users,
  MessageSquare,
  Github,
  ExternalLink,
  Terminal,
  Webhook,
  Key,
  Mail,
  ArrowRight,
  Check,
  Star,
  Download,
  Play,
  Settings,
  Database,
  Globe,
  Lock,
  Rocket,
  Crown,
  Sparkles,
  ChevronRight,
  Clock,
  BarChart3,
  Target,
  Award,
  Lightbulb
} from 'lucide-react';

const DeveloperPortal: React.FC = () => {
  const tools = [
    {
      icon: Code,
      title: 'Code Examples',
      description: 'Ready-to-use code snippets in multiple languages',
      category: 'Development'
    },
    {
      icon: Terminal,
      title: 'API Playground',
      description: 'Test APIs directly in your browser',
      category: 'Testing'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      category: 'Learning'
    },
    {
      icon: Download,
      title: 'SDKs & Libraries',
      description: 'Official client libraries for all platforms',
      category: 'Integration'
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Quick start tutorial for new developers',
      icon: '🚀',
      difficulty: 'Beginner'
    },
    {
      title: 'API Reference',
      description: 'Complete endpoint documentation',
      icon: '📚',
      difficulty: 'All Levels'
    },
    {
      title: 'Best Practices',
      description: 'Development guidelines and patterns',
      icon: '⭐',
      difficulty: 'Intermediate'
    },
    {
      title: 'Code Samples',
      description: 'Real-world implementation examples',
      icon: '💻',
      difficulty: 'All Levels'
    }
  ];

  const community = [
    {
      name: 'Developer Forum',
      description: 'Get help from our community',
      members: '2.5K+',
      icon: '💬'
    },
    {
      name: 'GitHub Discussions',
      description: 'Open source collaboration',
      members: '1.8K+',
      icon: '🐙'
    },
    {
      name: 'Discord Server',
      description: 'Real-time developer chat',
      members: '3.2K+',
      icon: '🎮'
    },
    {
      name: 'Stack Overflow',
      description: 'Q&A platform integration',
      members: '5K+',
      icon: '📝'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developer Portal - Zion Tech Group"
        description="Access developer tools, documentation, SDKs, and community resources. Build amazing applications with Zion Tech Group's developer platform."
      />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Code className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Developer{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Portal
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Build amazing applications with our powerful APIs, comprehensive documentation,
            and developer tools. Everything you need to integrate Zion Tech Group's services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Get Started
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Developer Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful tools to accelerate your development workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200 hover:scale-105"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{step.description}</p>

                  <button className="bg-zion-cyan/20 text-zion-cyan border border-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 text-sm font-medium">
                    {step.action}
                  </button>
                </div>
                <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full mb-3">
                  {tool.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-300">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive guides and tutorials for all skill levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 text-center leading-relaxed">{feature.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    feature.status === 'Stable' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {feature.status}
                  </span>

                  <button className="text-zion-cyan hover:text-white transition-colors duration-300 text-sm">
                    View Docs
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Code Examples
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get started quickly with these ready-to-use code examples in your preferred language.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <example.icon className="w-6 h-6 text-zion-cyan" />
                    <h3 className="text-lg font-bold text-white">{example.language}</h3>
                  </div>

                  <div className="bg-zion-slate-dark/80 rounded-lg p-4 mb-4">
                    <pre className="text-zion-slate-light text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>

                  <button className="w-full bg-zion-cyan/20 text-zion-cyan border border-zion-cyan py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 text-sm font-medium">
                    Copy Code
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Developer Resources
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive documentation, tools, and community resources to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{resource.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        resource.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        resource.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {resource.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-300">{resource.description}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 text-center">{resource.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 text-center leading-relaxed">{resource.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    resource.badge === 'Complete' ? 'bg-green-500/20 text-green-400' :
                    resource.badge === 'Beginner' ? 'bg-blue-500/20 text-blue-400' :
                    resource.badge === 'Examples' ? 'bg-purple-500/20 text-purple-400' :
                    resource.badge === 'Download' ? 'bg-orange-500/20 text-orange-400' :
                    resource.badge === 'Community' ? 'bg-indigo-500/20 text-indigo-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {resource.badge}
                  </span>

                  <button className="text-zion-cyan hover:text-white transition-colors duration-300 text-sm group-hover:translate-x-1 transition-transform duration-300">
                    View Resource
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Start
            </h2>
            <p className="text-xl text-gray-300">
              Get up and running in minutes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Get Your API Key</h3>
                  <p className="text-gray-300">Sign up and generate your API key from the dashboard</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Install SDK</h3>
                  <p className="text-gray-300">Choose your preferred language and install the SDK</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Make Your First API Call</h3>
                  <p className="text-gray-300">Test the API with our interactive playground</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Start Building Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of developers who are already building innovative applications
            with our powerful APIs and services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Get API Keys
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperPortal;
