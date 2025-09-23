import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Code, Terminal, BookOpen, Download, Play, Users, Cpu, Network, BarChart3, Activity, Rocket, ExternalLink, Github, Globe, Shield, Zap, Database, Brain, Cloud, Lock } from 'lucide-react';

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
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6">
              <Terminal className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Developer Portal</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                Portal
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Everything you need to build amazing applications with Zion Tech Group services. 
              Access tools, documentation, SDKs, and join our developer community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Get Started
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                View Documentation
              </button>
            </div>
          </motion.div>
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <tool.icon className="w-6 h-6 text-green-400" />
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

          <div className="grid md:grid-cols-2 gap-8">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Developer Community
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with fellow developers and get support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {community.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200 hover:scale-105"
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-300 mb-4">{platform.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-400">{platform.members} members</span>
                  <button className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors text-sm">
                    Join
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers building amazing applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Get Started Free
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperPortal;
