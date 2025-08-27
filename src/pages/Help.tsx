import React from 'react';
import { HelpCircle, BookOpen, Video, Users, MessageCircle, Search, FileText, Lightbulb } from 'lucide-react';

const Help = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      icon: Lightbulb,
      articles: [
        "Quick Start Guide",
        "Account Setup",
        "First Project",
        "Basic Configuration"
      ]
    },
    {
      title: "User Guide",
      description: "Detailed instructions for using our platform",
      icon: BookOpen,
      articles: [
        "Dashboard Overview",
        "Project Management",
        "User Settings",
        "Notifications"
      ]
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides for common tasks",
      icon: Video,
      articles: [
        "Creating Your First Project",
        "Setting Up Integrations",
        "Managing Team Members",
        "Generating Reports"
      ]
    },
    {
      title: "API Documentation",
      description: "Technical reference for developers",
      icon: FileText,
      articles: [
        "Authentication",
        "Endpoints Reference",
        "Code Examples",
        "SDK Downloads"
      ]
    },
    {
      title: "Community",
      description: "Connect with other users and experts",
      icon: Users,
      articles: [
        "Community Forum",
        "User Groups",
        "Best Practices",
        "Success Stories"
      ]
    },
    {
      title: "Support",
      description: "Get help when you need it",
      icon: MessageCircle,
      articles: [
        "Contact Support",
        "Live Chat",
        "Ticket System",
        "Response Times"
      ]
    }
  ];

  const popularArticles = [
    "How to set up your first project",
    "Understanding the dashboard interface",
    "Configuring user permissions",
    "Integrating with external tools",
    "Troubleshooting common issues",
    "Best practices for team collaboration"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2"/>
              Help Center
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn new features, and get the most 
              out of our platform with our comprehensive help resources.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or guides..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Browse Help Topics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Organized help categories to quickly find the information you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, idx) => (
                    <li key={idx} className="text-sm text-gray-300 hover:text-green-400 cursor-pointer">
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Most frequently accessed help content to get you started quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 hover:text-white transition-colors">{article}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/support" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Support
            </a>
            <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;