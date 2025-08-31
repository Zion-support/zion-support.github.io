import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Code, 
  Database, 
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  FileText,
  Video,
  Download
} from 'lucide-react';

const Docs = () => {
  const categories = [
    {
      name: "Getting Started",
      description: "Quick start guides and tutorials for new users",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      docs: [
        { title: "Quick Start Guide", description: "Get up and running in 5 minutes" },
        { title: "Installation Guide", description: "Step-by-step installation instructions" },
        { title: "First Project", description: "Create your first project with Zion Tech" }
      ]
    },
    {
      name: "API Reference",
      description: "Complete API documentation and examples",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      docs: [
        { title: "Authentication", description: "API keys and authentication methods" },
        { title: "Endpoints", description: "Complete list of available endpoints" },
        { title: "Code Examples", description: "Sample code in multiple languages" }
      ]
    },
    {
      name: "AI Services",
      description: "Documentation for AI and machine learning services",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      docs: [
        { title: "AI Models", description: "Available AI models and their capabilities" },
        { title: "Training Data", description: "How to prepare and format training data" },
        { title: "Model Deployment", description: "Deploy your AI models to production" }
      ]
    },
    {
      name: "Cloud Platform",
      description: "Cloud infrastructure and deployment guides",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      docs: [
        { title: "Infrastructure Setup", description: "Configure your cloud environment" },
        { title: "Deployment", description: "Deploy applications to the cloud" },
        { title: "Monitoring", description: "Monitor and optimize your deployments" }
      ]
    },
    {
      name: "Security",
      description: "Security best practices and compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      docs: [
        { title: "Security Overview", description: "Security features and architecture" },
        { title: "Compliance", description: "Meet industry compliance requirements" },
        { title: "Best Practices", description: "Security best practices for developers" }
      ]
    },
    {
      name: "Tutorials",
      description: "Step-by-step tutorials and guides",
      icon: <FileText className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      docs: [
        { title: "Building AI Apps", description: "Create AI-powered applications" },
        { title: "Data Processing", description: "Process and analyze large datasets" },
        { title: "Integration", description: "Integrate with third-party services" }
      ]
    }
  ];

  const popularDocs = [
    {
      title: "Quick Start Guide",
      description: "Get started with Zion Tech Group's platform in minutes",
      category: "Getting Started",
      readTime: "5 min read"
    },
    {
      title: "API Authentication",
      description: "Learn how to authenticate your API requests",
      category: "API Reference",
      readTime: "8 min read"
    },
    {
      title: "AI Model Training",
      description: "Train custom AI models with your data",
      category: "AI Services",
      readTime: "15 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                & Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive documentation, tutorials, and resources to help you 
              build amazing solutions with Zion Tech Group's platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Popular Documentation
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start with these essential guides to get up and running quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDocs.map((doc, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    {doc.category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {doc.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {doc.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {doc.description}
                </p>
                
                <Link
                  to={`/docs/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Read Documentation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive documentation organized by category.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg w-fit mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {category.name}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {category.docs.map((doc, docIndex) => (
                    <div key={docIndex} className="text-sm">
                      <div className="text-white font-medium">{doc.title}</div>
                      <div className="text-gray-400">{doc.description}</div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/docs/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  View All {category.name} Docs
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Beyond documentation, discover videos, downloads, and community resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg w-fit mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
              <p className="text-gray-400 mb-4">
                Watch step-by-step video tutorials and demonstrations.
              </p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                Browse Videos
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Downloads</h3>
              <p className="text-gray-400 mb-4">
                Download SDKs, sample code, and development tools.
              </p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                View Downloads
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">API Reference</h3>
              <p className="text-gray-400 mb-4">
                Complete API reference with interactive examples.
              </p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                View API Docs
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
              <FileText className="mr-2 w-5 h-5" />
              Request Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;