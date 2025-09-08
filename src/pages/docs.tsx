import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Code, 
  BookOpen, 
  FileText, 
  Download, 
  Search, 
  ArrowRight,
  Star,
  Clock,
  Tag,
  Filter,
  Book,
  Brain,
  Shield,
  Cloud,
  Zap,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      guides: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', difficulty: 'Beginner', time: '5 min' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', difficulty: 'Beginner', time: '15 min' },
        { title: 'First Project', description: 'Build your first project with our platform', difficulty: 'Beginner', time: '30 min' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      guides: [
        { title: 'Authentication', description: 'Learn how to authenticate your requests', difficulty: 'Intermediate', time: '20 min' },
        { title: 'Core Endpoints', description: 'Main API endpoints and their usage', difficulty: 'Intermediate', time: '45 min' },
        { title: 'Error Handling', description: 'Handle errors and edge cases properly', difficulty: 'Advanced', time: '25 min' }
      ]
    },
    {
      title: 'Implementation Guides',
      description: 'Step-by-step guides for common use cases',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      guides: [
        { title: 'AI Integration', description: 'Integrate AI services into your applications', difficulty: 'Intermediate', time: '60 min' },
        { title: 'Data Analytics', description: 'Set up data analytics and reporting', difficulty: 'Intermediate', time: '90 min' },
        { title: 'Security Implementation', description: 'Implement security best practices', difficulty: 'Advanced', time: '120 min' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for various languages',
      icon: Book,
      color: 'from-orange-500 to-red-500',
      featured: false,
      guides: [
        { title: 'JavaScript SDK', description: 'Official JavaScript/Node.js SDK', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Python SDK', description: 'Official Python SDK and examples', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Mobile SDKs', description: 'iOS and Android SDKs', difficulty: 'Intermediate', time: '45 min' }
      ]
    },
    {
      title: 'Best Practices',
      description: 'Recommended patterns and practices',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      guides: [
        { title: 'Performance Optimization', description: 'Optimize your applications for speed', difficulty: 'Advanced', time: '60 min' },
        { title: 'Security Guidelines', description: 'Security best practices and guidelines', difficulty: 'Advanced', time: '90 min' },
        { title: 'Scalability Patterns', description: 'Design patterns for scalable applications', difficulty: 'Advanced', time: '120 min' }
      ]
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      featured: false,
      guides: [
        { title: 'Common Issues', description: 'Frequently encountered problems', difficulty: 'Beginner', time: '20 min' },
        { title: 'Debugging Guide', description: 'Tools and techniques for debugging', difficulty: 'Intermediate', time: '45 min' },
        { title: 'Performance Issues', description: 'Identify and fix performance problems', difficulty: 'Advanced', time: '60 min' }
      ]
    }
  ];

  const recentUpdates = [
    {
      title: 'New AI Services API v2.0',
      description: 'Updated API with improved performance and new features',
      date: 'December 10, 2024',
      type: 'Major Update',
      featured: true
    },
    {
      title: 'Enhanced Security Documentation',
      description: 'Comprehensive security guidelines and best practices',
      date: 'December 5, 2024',
      type: 'Documentation',
      featured: false
    },
    {
      title: 'Python SDK v1.5 Release',
      description: 'New Python SDK with async support and improved error handling',
      date: 'November 30, 2024',
      type: 'SDK Update',
      featured: false
    }
  ];

  const popularGuides = [
    'Getting Started with AI Services',
    'API Authentication Guide',
    'Building Your First AI Application',
    'Data Analytics Implementation',
    'Security Best Practices',
    'Performance Optimization Guide'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Access comprehensive technical documentation, API references, implementation guides, and SDKs for our AI and technology platforms."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive guides, API references, and implementation resources to help you build 
              powerful applications with our AI and technology platforms.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Support
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our organized documentation by category to find the resources you need quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                  category.featured
                    ? 'border-blue-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-blue-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                {category.featured && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {category.guides.slice(0, 2).map((guide, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{guide.title}</span>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className={`px-2 py-1 rounded ${
                          guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {guide.difficulty}
                        </span>
                        <span>{guide.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
                >
                  View All Guides
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Recent Updates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay up to date with the latest documentation updates, new features, and improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentUpdates.map((update, index) => (
              <div
                key={update.title}
                className={`p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                  update.featured
                    ? 'border-blue-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-blue-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                {update.featured && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-xs rounded-full font-medium">
                      <Star className="w-3 h-3" />
                      New
                    </span>
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {update.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {update.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{update.date}</span>
                  <span className="px-2 py-1 bg-slate-700/50 rounded">
                    {update.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Popular Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most frequently accessed documentation and guides that help developers get started quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGuides.map((guide, index) => (
              <div
                key={guide}
                className="group p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {guide}
                    </h3>
                    <p className="text-gray-400 text-sm">Comprehensive guide with examples</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Updated recently</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Developer Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Additional resources to help you build and deploy applications successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Code Examples</h3>
              <p className="text-sm text-gray-400">Ready-to-use code snippets and examples</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">SDKs & Libraries</h3>
              <p className="text-sm text-gray-400">Official SDKs for multiple programming languages</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tutorials</h3>
              <p className="text-sm text-gray-400">Step-by-step tutorials for common tasks</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Best Practices</h3>
              <p className="text-sm text-gray-400">Security and performance guidelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help with Documentation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our technical support team is here to help 
              you navigate our documentation and get your questions answered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Support
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;