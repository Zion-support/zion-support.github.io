import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Code, 
  Database, 
  Shield, 
  Cloud, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Search,
  Download,
  ExternalLink,
  Book,
  Video,
  Play,
  FileCode,
  Settings,
  HelpCircle
} from 'lucide-react';

export default function Documentation() {
  const categories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: Play,
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', href: '/docs/quickstart', type: 'Guide' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', href: '/docs/installation', type: 'Guide' },
        { title: 'First Project', description: 'Create your first project', href: '/docs/first-project', type: 'Tutorial' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      docs: [
        { title: 'REST API', description: 'Complete REST API reference', href: '/docs/api/rest', type: 'Reference' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', href: '/docs/api/graphql', type: 'Reference' },
        { title: 'SDK Documentation', description: 'Client libraries and SDKs', href: '/docs/sdk', type: 'Reference' }
      ]
    },
    {
      title: 'Security',
      description: 'Security best practices and guidelines',
      icon: Shield,
      docs: [
        { title: 'Authentication', description: 'User authentication and authorization', href: '/docs/security/auth', type: 'Guide' },
        { title: 'Data Protection', description: 'Securing sensitive data', href: '/docs/security/data', type: 'Guide' },
        { title: 'Compliance', description: 'Security compliance guidelines', href: '/docs/security/compliance', type: 'Guide' }
      ]
    },
    {
      title: 'Deployment',
      description: 'Deployment guides and infrastructure setup',
      icon: Cloud,
      docs: [
        { title: 'Cloud Deployment', description: 'Deploy to major cloud platforms', href: '/docs/deployment/cloud', type: 'Guide' },
        { title: 'Docker Setup', description: 'Containerized deployment', href: '/docs/deployment/docker', type: 'Guide' },
        { title: 'CI/CD Pipeline', description: 'Continuous integration and deployment', href: '/docs/deployment/cicd', type: 'Guide' }
      ]
    }
  ];

  const resources = [
    {
      title: 'White Papers',
      description: 'In-depth technical research and analysis',
      icon: FileText,
      items: [
        { title: 'AI in Enterprise', href: '/resources/ai-enterprise', type: 'PDF' },
        { title: 'Cybersecurity Trends', href: '/resources/cybersecurity-trends', type: 'PDF' },
        { title: 'Cloud Migration Guide', href: '/resources/cloud-migration', type: 'PDF' }
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and demonstrations',
      icon: Video,
      items: [
        { title: 'Getting Started Series', href: '/tutorials/getting-started', type: 'Video' },
        { title: 'Advanced Features', href: '/tutorials/advanced', type: 'Video' },
        { title: 'Best Practices', href: '/tutorials/best-practices', type: 'Video' }
      ]
    },
    {
      title: 'Code Examples',
      description: 'Ready-to-use code samples and templates',
      icon: FileCode,
      items: [
        { title: 'React Components', href: '/examples/react', type: 'Code' },
        { title: 'API Integration', href: '/examples/api', type: 'Code' },
        { title: 'Database Queries', href: '/examples/database', type: 'Code' }
      ]
    }
  ];

  const searchCategories = [
    'API Reference', 'Guides', 'Tutorials', 'Examples', 'Troubleshooting', 'Best Practices'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent mb-6">
              Documentation
            </h1>
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive technical documentation, guides, and resources to help you 
              get the most out of Zion Tech Group's services and solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {searchCategories.map((category, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium hover:bg-zion-cyan/30 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Documentation Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organized documentation to help you find exactly what you need, 
              from quick start guides to advanced technical references.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.docs.map((doc, docIndex) => (
                    <Link 
                      key={docIndex}
                      to={doc.href}
                      className="block p-4 bg-zion-slate-dark/30 border border-zion-cyan/10 rounded-lg hover:border-zion-cyan/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-zion-cyan transition-colors duration-300">
                            {doc.title}
                          </h4>
                          <p className="text-zion-slate-light text-sm mt-1">{doc.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                            {doc.type}
                          </span>
                          <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Beyond documentation, explore our comprehensive collection of resources 
              to enhance your knowledge and skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div 
                key={index}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{resource.description}</p>
                
                <div className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex}
                      to={item.href}
                      className="flex items-center justify-between p-3 bg-zion-slate-dark/30 rounded-lg hover:bg-zion-slate-dark/50 transition-colors duration-300 group"
                    >
                      <span className="text-zion-slate-light group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          {item.type}
                        </span>
                        <ExternalLink className="w-3 h-3 text-zion-cyan" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              get the most out of our services and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/help" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Visit Help Center
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-semibold"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
