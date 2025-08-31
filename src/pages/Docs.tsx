import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Download, 
  Search, 
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Github,
  Globe,
  Terminal,
  Database,
  Shield,
  Zap
} from 'lucide-react';

const Docs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['getting-started']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      content: [
        { title: 'Quick Start Guide', href: '#', description: 'Get up and running in 5 minutes' },
        { title: 'Installation', href: '#', description: 'Step-by-step installation instructions' },
        { title: 'Configuration', href: '#', description: 'Configure your environment' },
        { title: 'First Project', href: '#', description: 'Create your first project' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      content: [
        { title: 'Authentication', href: '#', description: 'API authentication methods' },
        { title: 'Endpoints', href: '#', description: 'Complete API endpoint reference' },
        { title: 'Rate Limits', href: '#', description: 'API usage limits and quotas' },
        { title: 'Error Codes', href: '#', description: 'Common error codes and solutions' }
      ]
    },
    {
      id: 'user-guides',
      title: 'User Guides',
      icon: FileText,
      content: [
        { title: 'Dashboard Overview', href: '#', description: 'Navigate the main dashboard' },
        { title: 'Project Management', href: '#', description: 'Manage your projects effectively' },
        { title: 'Team Collaboration', href: '#', description: 'Work with your team' },
        { title: 'Analytics & Reports', href: '#', description: 'Generate and view reports' }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: Zap,
      content: [
        { title: 'Third-party Services', href: '#', description: 'Connect external services' },
        { title: 'Webhooks', href: '#', description: 'Set up webhook notifications' },
        { title: 'SDKs', href: '#', description: 'Available SDKs and libraries' },
        { title: 'CLI Tools', href: '#', description: 'Command-line interface tools' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Playground', href: '/api', icon: Terminal, description: 'Test our APIs interactively' },
    { title: 'GitHub Repository', href: 'https://github.com/ziontechgroup', icon: Github, description: 'View source code and contribute' },
    { title: 'Community Forum', href: '#', icon: Globe, description: 'Get help from the community' },
    { title: 'Support Center', href: '/support', icon: Shield, description: 'Technical support and troubleshooting' }
  ];

  const filteredSections = documentationSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.some(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides, API references, and resources to help you build amazing applications with Zion Tech Group's platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:border-cyan-500/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                <p className="text-gray-400 text-sm">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Documentation Sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Documentation</h2>
          <div className="space-y-4">
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {section.content.length} articles available
                      </p>
                    </div>
                  </div>
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {expandedSections.has(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <div className="p-6 space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <motion.a
                          key={itemIndex}
                          href={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {item.title}
                              </h4>
                              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/api"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                API Playground
                <Terminal className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Docs;