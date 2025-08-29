import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Code, 
  BookOpen, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Brain, 
  Lock,
  Key,
  Terminal,
  Globe,
  Server,
  Cpu,
  Network,
  BarChart3,
  MessageSquare,
  FileText,
  Play,
  Download,
  Github,
  Users,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  CheckCircle,
  ExternalLink,
  Bug,
  Trophy
} from 'lucide-react';

export default function DeveloperPortal() {
  const developerTools = [
    {
      name: 'API Playground',
      description: 'Interactive API testing environment with real-time responses',
      icon: Terminal,
      color: 'from-green-500 to-emerald-600',
      href: '/api-playground',
      featured: true
    },
    {
      name: 'SDK Downloads',
      description: 'Official SDKs for multiple programming languages',
      icon: Download,
      color: 'from-blue-500 to-cyan-600',
      href: '/api-docs',
      featured: true
    },
    {
      name: 'Code Examples',
      description: 'Ready-to-use code snippets and integration examples',
      icon: Code,
      color: 'from-purple-500 to-pink-600',
      href: '/code-examples',
      featured: false
    },
    {
      name: 'Testing Tools',
      description: 'Comprehensive testing and debugging utilities',
      icon: Bug,
      color: 'from-orange-500 to-red-600',
      href: '/testing-tools',
      featured: false
    }
  ];

  const learningResources = [
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step tutorial for new developers',
      duration: '15 min read',
      level: 'Beginner',
      icon: Rocket,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      duration: 'Reference',
      level: 'All Levels',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Best Practices',
      description: 'Development guidelines and optimization tips',
      duration: '20 min read',
      level: 'Intermediate',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      duration: '10 min read',
      level: 'All Levels',
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const communityFeatures = [
    {
      name: 'Developer Forum',
      description: 'Connect with other developers and share knowledge',
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Code Reviews',
      description: 'Get feedback on your implementations',
      icon: Code,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Hackathons',
      description: 'Participate in coding challenges and win prizes',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Office Hours',
      description: 'Live Q&A sessions with our engineering team',
      icon: Clock,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developer Portal - Zion Tech Group"
        description="Access comprehensive developer resources, tools, and documentation for Zion Tech Group's AI-powered services. Join our developer community and build amazing applications."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Developer Resources
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer Portal
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Everything you need to build, deploy, and scale applications with our AI-powered services. Access tools, documentation, and join our thriving developer community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#tools"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-4 h-4" />
                Explore Tools
              </a>
              <a
                href="/api-docs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <BookOpen className="w-4 h-4" />
                View API Docs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer Tools Section */}
      <section id="tools" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Developer Tools</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful tools and utilities to accelerate your development workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developerTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group hover:bg-slate-700/50 transition-all duration-300 ${
                  tool.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                {tool.featured && (
                  <span className="inline-flex items-center gap-1 mb-4 text-xs text-cyan-400">
                    <Award className="w-3 h-3" />
                    Featured
                  </span>
                )}
                <a
                  href={tool.href}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Learning Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive guides and tutorials to help you master our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {resource.duration}
                  </span>
                  <span className="px-2 py-1 bg-slate-700/50 rounded-full">
                    {resource.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with fellow developers, share knowledge, and grow together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-400">Active Developers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400">API Endpoints</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Developer Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Building?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers creating innovative applications with our platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                Get Started
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
