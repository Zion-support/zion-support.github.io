import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone,
  Mail,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  FileText,
  Play,
  Download,
  ExternalLink,
  Shield
} from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: Play, count: 12 },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, count: 15 },
    { id: 'technical', name: 'Technical Support', icon: Code, count: 18 },
    { id: 'billing', name: 'Billing & Account', icon: FileText, count: 8 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Settings, count: 10 }
  ];

  const popularArticles = [
    {
      title: "Getting Started with AI Autonomous Systems",
      category: "Getting Started",
      readTime: "5 min read",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Setting Up Your First Quantum Neural Network",
      category: "AI Solutions",
      readTime: "8 min read",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Configuring SOC2 Compliance Automation",
      category: "Technical Support",
      readTime: "12 min read",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "5G Enterprise Network Setup Guide",
      category: "Technical Support",
      readTime: "10 min read",
      icon: Network,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "AI Research Assistant Best Practices",
      category: "AI Solutions",
      readTime: "6 min read",
      icon: Search,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Troubleshooting Common Issues",
      category: "Troubleshooting",
      readTime: "7 min read",
      icon: Settings,
      color: "from-orange-500 to-red-500"
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      availability: "24/7",
      responseTime: "< 4 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Video,
      title: "Video Calls",
      description: "Screen sharing and visual troubleshooting",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Scheduled",
      color: "from-orange-500 to-red-500"
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "/docs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides and demos",
      link: "/tutorials",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "SDKs, tools, and sample code",
      link: "/downloads",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users and developers",
      link: "/community",
      color: "from-orange-500 to-red-500"
    }
  ];



  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI-powered solutions. Find documentation, tutorials, troubleshooting guides, and connect with our support team." />
        <meta name="keywords" content="help center, support, documentation, tutorials, troubleshooting, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              How Can We
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions, get technical support, and access comprehensive 
              resources to make the most of our AI-powered solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the help you need by exploring our organized categories 
                of support articles and resources.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
                      isActive
                        ? 'bg-blue-500/20 border border-blue-500/50'
                        : 'bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/50'
                    }`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${
                      isActive ? 'from-blue-500 to-cyan-500' : 'from-gray-600 to-gray-700'
                    } rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`} />
                    </div>
                    <h3 className={`text-sm font-semibold mb-2 ${
                      isActive ? 'text-white' : 'text-gray-300'
                    }`}>
                      {category.name}
                    </h3>
                    <p className={`text-xs ${
                      isActive ? 'text-blue-300' : 'text-gray-500'
                    }`}>
                      {category.count} articles
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Articles Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Popular Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these frequently accessed help articles and guides 
                to get up and running quickly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularArticles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${article.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-gray-400 mb-4">
                        {article.category}
                      </p>
                      
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Channels Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get the help you need, when you need it. 
                Our support team is here to assist you 24/7.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Availability:</span>
                          <span className="text-white">{channel.availability}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Response:</span>
                          <span className="text-white">{channel.responseTime}</span>
                        </div>
                      </div>
                      
                      <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                        Get Help
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources to help you 
                succeed with our AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                      <p className="text-gray-300 text-sm mb-6">{resource.description}</p>
                      
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                        Explore
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-blue-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is ready to help 
                you get the most out of our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpCenter;
