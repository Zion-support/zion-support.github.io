import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Code, BookOpen, Zap, Database, Cloud, Shield, Users, Globe, Terminal, FileText, Download, Play, Search, Filter, Key, Crown, MessageCircle, Github, GitBranch, Cpu, Rocket, Brain, Lock } from 'lucide-react';

export const Developers: React.FC = () => {
  const developerTools = [
    {
      name: 'SDKs & Libraries',
      description: 'Official SDKs for popular programming languages',
      tools: [
        { name: 'JavaScript/Node.js', icon: Code, color: 'from-yellow-400 to-orange-500' },
        { name: 'Python', icon: Code, color: 'from-blue-400 to-cyan-500' },
        { name: 'Java', icon: Code, color: 'from-red-400 to-pink-500' },
        { name: 'C#', icon: Code, color: 'from-purple-400 to-indigo-500' }
      ]
    },
    {
      name: 'CLI Tools',
      description: 'Command-line interfaces for automation',
      tools: [
        { name: 'Zion CLI', icon: Terminal, color: 'from-green-400 to-emerald-500' },
        { name: 'Deployment Tools', icon: Rocket, color: 'from-blue-400 to-cyan-500' },
        { name: 'Monitoring CLI', icon: Cpu, color: 'from-purple-400 to-pink-500' }
      ]
    },
    {
      name: 'Development Tools',
      description: 'Tools to accelerate your development workflow',
      tools: [
        { name: 'Code Generator', icon: FileText, color: 'from-indigo-400 to-purple-500' },
        { name: 'API Explorer', icon: Search, color: 'from-cyan-400 to-blue-500' },
        { name: 'Testing Suite', icon: Shield, color: 'from-green-400 to-emerald-500' }
      ]
    }
  ];

  const learningResources = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials',
      icon: Rocket,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation',
      icon: BookOpen,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Code Examples',
      description: 'Sample code and use cases',
      icon: Code,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Best Practices',
      description: 'Development guidelines and tips',
      icon: Shield,
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const communityFeatures = [
    {
      name: 'Developer Forum',
      description: 'Connect with other developers',
      icon: Users,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'GitHub Repositories',
      description: 'Open source projects and examples',
      icon: Github,
      color: 'from-gray-400 to-slate-500'
    },
    {
      name: 'Code Reviews',
      description: 'Get feedback on your implementations',
      icon: GitBranch,
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Hackathons',
      description: 'Participate in coding challenges',
      icon: Zap,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developer Portal - Zion Tech Group"
        description="Access developer tools, SDKs, documentation, and community resources to build with Zion Tech Group's AI-powered platform."
      />
      
      {/* Header */}
      <div className="container-responsive py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Developer Portal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale applications with Zion Tech Group's AI-powered platform.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <a
            href="/api-docs"
            className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">API Docs</h3>
            <p className="text-gray-400 text-sm">Complete API reference and guides</p>
          </a>

          <a
            href="/docs"
            className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
            <p className="text-gray-400 text-sm">Comprehensive guides and tutorials</p>
          </a>

          <a
            href="/community"
            className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
            <p className="text-gray-400 text-sm">Connect with other developers</p>
          </a>

          <a
            href="/contact"
            className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
            <p className="text-gray-400 text-sm">Get help when you need it</p>
          </a>
        </motion.div>

        {/* Developer Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-cyan-400" />
            Developer Tools
          </h2>
          
          <div className="space-y-8">
            {developerTools.map((category, index) => (
              <div key={category.name} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-slate-500/50 transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center`}>
                          <tool.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">{tool.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            Learning Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningResources.map((resource, index) => (
              <div key={resource.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-4`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-cyan-400" />
            Community & Collaboration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div key={feature.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Getting Started CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building the future with Zion Tech Group's AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/api-docs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 text-lg"
            >
              <Code className="w-6 h-6" />
              Start Building
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-200 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Developers;