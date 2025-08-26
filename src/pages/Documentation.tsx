import React from 'react';
import { FileText, BookOpen, Search, Download, Users, Globe, Zap, Target, TrendingUp, Shield, Cpu, Database } from 'lucide-react';

const Documentation: React.FC = () => {
  const documentationCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Quick start guides and tutorials for new users",
      guides: [
        "Installation Guide",
        "First Steps Tutorial",
        "Basic Configuration",
        "Hello World Example"
      ]
    },
    {
      icon: Cpu,
      title: "API Reference",
      description: "Complete API documentation and examples",
      guides: [
        "Authentication",
        "Endpoints Reference",
        "Request/Response Examples",
        "Error Handling"
      ]
    },
    {
      icon: Database,
      title: "Integration Guides",
      description: "Step-by-step integration tutorials",
      guides: [
        "REST API Integration",
        "Webhook Setup",
        "SDK Installation",
        "Third-party Services"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Security best practices and compliance guides",
      guides: [
        "Security Overview",
        "Authentication Methods",
        "Data Protection",
        "Compliance Standards"
      ]
    },
    {
      icon: Users,
      title: "User Management",
      description: "User administration and permission guides",
      guides: [
        "User Roles & Permissions",
        "Team Management",
        "Access Control",
        "Audit Logging"
      ]
    },
    {
      icon: Globe,
      title: "Deployment",
      description: "Deployment and infrastructure guides",
      guides: [
        "Environment Setup",
        "Production Deployment",
        "Monitoring & Logging",
        "Performance Optimization"
      ]
    }
  ];

  const resources = [
    {
      title: "Developer Portal",
      description: "Access our comprehensive developer resources and tools",
      icon: Zap,
      link: "/developer-portal"
    },
    {
      title: "Code Examples",
      description: "Ready-to-use code samples and templates",
      icon: Target,
      link: "/code-examples"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and walkthroughs",
      icon: TrendingUp,
      link: "/video-tutorials"
    },
    {
      title: "Community Forum",
      description: "Connect with other developers and get help",
      icon: Users,
      link: "/community"
    }
  ];

  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");

  const categories = ["All Categories", "Getting Started", "API Reference", "Integration Guides", "Security & Compliance", "User Management", "Deployment"];

  const filteredCategories = documentationCategories.filter(category => 
    selectedCategory === "All Categories" || category.title === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Technical Guides</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive documentation, tutorials, and resources to help you 
              integrate and use our technology solutions effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <ul className="space-y-2 mb-4">
                  {category.guides.map((guide, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {guide}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/documentation/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  View Documentation
                  <Download className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access our developer portal, code examples, video tutorials, 
              and community resources to accelerate your development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                >
                  Access Resource
                  <Download className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help 
            you get the most out of our technology solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Search Documentation</h3>
              <p className="text-gray-300">Use our search to find specific topics and guides</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Support</h3>
              <p className="text-gray-300">Connect with other developers in our community</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Contact Support</h3>
              <p className="text-gray-300">Get direct help from our technical support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our documentation and start building with our technology solutions. 
            Our comprehensive guides will help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Support
            </a>
            <a
              href="/solutions"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;