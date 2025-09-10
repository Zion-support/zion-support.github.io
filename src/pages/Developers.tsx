import React from 'react';
import { Code, Github, Book, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const Developers = () => {
  const developerResources = [
    {
      title: "API Documentation",
      description: "Comprehensive API reference with examples and code snippets",
      icon: <Book className="h-6 w-6 text-blue-400" />,
      link: "/api-docs"
    },
    {
      title: "SDKs & Libraries",
      description: "Official SDKs for popular programming languages",
      icon: <Code className="h-6 w-6 text-green-400" />,
      link: "#"
    },
    {
      title: "GitHub Repository",
      description: "Open source tools and example implementations",
      icon: <Github className="h-6 w-6 text-purple-400" />,
      link: "#"
    },
    {
      title: "Developer Tools",
      description: "Testing tools, sandbox environment, and debugging utilities",
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developers - Zion Tech Group"
        description="Developer resources, tools, and documentation for building with our AI and technology services."
        keywords={["developers", "API", "SDK", "documentation", "tools", "integration"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Developer Resources</h1>
          <p className="text-xl text-gray-300">
            Everything you need to build with our AI and technology services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {developerResources.map((resource, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                {resource.icon}
                <h3 className="text-xl font-bold text-white ml-3">{resource.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{resource.description}</p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Quick Start Guide</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Get Your API Key</h3>
              <p className="text-gray-300">Sign up for a free account and get your API key from the dashboard.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Choose Your SDK</h3>
              <p className="text-gray-300">Select from our official SDKs for Python, JavaScript, Java, and more.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Make Your First Call</h3>
              <p className="text-gray-300">Start building with our comprehensive API documentation and examples.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;