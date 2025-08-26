import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

const Documentation: React.FC = () => {
  const apiDocs = [
    {
      title: "AI Solutions API",
      description: "Comprehensive API documentation for AI and machine learning services",
      endpoints: ["/api/ai/chat", "/api/ai/analyze", "/api/ai/generate"],
      version: "v2.1.0",
      status: "Active"
    },
    {
      title: "Cloud Infrastructure API",
      description: "API documentation for cloud deployment and infrastructure management",
      endpoints: ["/api/cloud/deploy", "/api/cloud/monitor", "/api/cloud/scale"],
      version: "v1.8.2",
      status: "Active"
    },
    {
      title: "Cybersecurity API",
      description: "Security and threat detection API documentation",
      endpoints: ["/api/security/scan", "/api/security/threats", "/api/security/compliance"],
      version: "v1.5.0",
      status: "Active"
    }
  ];

  const guides = [
    {
      title: "Getting Started with Zion Tech Group",
      description: "Complete beginner's guide to using our services",
      category: "Beginner",
      estimatedTime: "15 min",
      topics: ["Account Setup", "First Project", "Basic Configuration"]
    },
    {
      title: "AI Model Integration Guide",
      description: "Step-by-step guide to integrating AI models into your applications",
      category: "Intermediate",
      estimatedTime: "45 min",
      topics: ["API Integration", "Model Selection", "Performance Optimization"]
    },
    {
      title: "Advanced Security Implementation",
      description: "Comprehensive security best practices and implementation guide",
      category: "Advanced",
      estimatedTime: "2 hours",
      topics: ["Zero Trust", "Threat Detection", "Compliance"]
    },
    {
      title: "Cloud Migration Strategy",
      description: "Complete guide to migrating your infrastructure to the cloud",
      category: "Intermediate",
      estimatedTime: "1.5 hours",
      topics: ["Planning", "Migration", "Optimization"]
    }
  ];

  const tutorials = [
    {
      title: "Building Your First AI Chatbot",
      description: "Create a conversational AI chatbot in 30 minutes",
      duration: "30 min",
      difficulty: "Beginner",
      technologies: ["Python", "React", "OpenAI API"]
    },
    {
      title: "Implementing Zero Trust Security",
      description: "Set up enterprise-grade security architecture",
      duration: "1 hour",
      difficulty: "Advanced",
      technologies: ["AWS", "Terraform", "Security Tools"]
    },
    {
      title: "Quantum Computing Basics",
      description: "Introduction to quantum computing concepts and applications",
      duration: "45 min",
      difficulty: "Intermediate",
      technologies: ["Qiskit", "Python", "Quantum Algorithms"]
=======
import { Link } from 'react-router-dom';

const Documentation: React.FC = () => {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and setup instructions for our services",
      items: [
        "Installation Guide",
        "Configuration Setup",
        "First Project",
        "API Authentication"
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples and endpoints",
      items: [
        "Authentication",
        "Endpoints",
        "Request/Response Formats",
        "Error Handling"
      ]
    },
    {
      title: "SDKs & Libraries",
      description: "Client libraries and SDKs for various programming languages",
      items: [
        "JavaScript/TypeScript",
        "Python",
        "Java",
        "C#/.NET"
      ]
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides for common use cases",
      items: [
        "AI Model Integration",
        "Cloud Deployment",
        "Security Implementation",
        "Performance Optimization"
      ]
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation, API references, guides, and tutorials for Zion Tech Group's technology solutions and services." />
        <meta name="keywords" content="documentation, API docs, guides, tutorials, Zion Tech Group, technology documentation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access comprehensive documentation, API references, guides, and tutorials to help you 
              successfully implement and integrate Zion Tech Group's technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">API Documentation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Step-by-Step Guides</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Video Tutorials</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Search */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Search Documentation
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for guides, APIs, tutorials..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              API Documentation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiDocs.map((api) => (
                <div key={api.title} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{api.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{api.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Version: {api.version}</span>
                      <span className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                        {api.status}
                      </span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Endpoints</h4>
                    <div className="space-y-2">
                      {api.endpoints.map((endpoint, index) => (
                        <div key={index} className="text-sm bg-white/5 text-gray-300 px-3 py-2 rounded font-mono">
                          {endpoint}
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`/docs/api/${api.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Full Documentation
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Guides */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Getting Started Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide) => (
                <div key={guide.title} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        guide.category === 'Beginner' ? 'text-green-400 bg-green-400/10' :
                        guide.category === 'Intermediate' ? 'text-yellow-400 bg-yellow-400/10' :
                        'text-red-400 bg-red-400/10'
                      }`}>
                        {guide.category}
                      </span>
                      <span className="text-sm text-gray-400">{guide.estimatedTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{guide.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{guide.description}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">What You'll Learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.map((topic, index) => (
                        <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`/docs/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read Guide
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Video Tutorials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.title} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        tutorial.difficulty === 'Beginner' ? 'text-green-400 bg-green-400/10' :
                        tutorial.difficulty === 'Intermediate' ? 'text-yellow-400 bg-yellow-400/10' :
                        'text-red-400 bg-red-400/10'
                      }`}>
                        {tutorial.difficulty}
                      </span>
                      <span className="text-sm text-gray-400">{tutorial.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tutorial.description}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {tutorial.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`/docs/tutorials/${tutorial.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Watch Tutorial
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">White Papers</h3>
                <p className="text-gray-400 text-sm">In-depth research and technical insights</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Webinars</h3>
                <p className="text-gray-400 text-sm">Live sessions with our experts</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">FAQ</h3>
                <p className="text-gray-400 text-sm">Common questions and answers</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Examples</h3>
                <p className="text-gray-400 text-sm">Code samples and use cases</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl border border-white/10 p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help you 
                get the most out of our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/help"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you integrate 
              and use our technology solutions effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentationSections.map((section, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-700">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quick Start Guide</h2>
            <p className="text-lg text-gray-600">
              Get up and running with our services in minutes
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Install Our SDK</h3>
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  npm install @ziontechgroup/sdk
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Initialize the Client</h3>
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  {`import { ZionTechClient } from '@ziontechgroup/sdk';

const client = new ZionTechClient({
  apiKey: 'your-api-key',
  environment: 'production'
});`}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Make Your First API Call</h3>
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  {`// Example: Analyze text with AI
const result = await client.ai.analyzeText({
  text: "Hello, world!",
  model: "sentiment-analysis"
});

console.log(result.sentiment);`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">API Examples</h2>
            <p className="text-lg text-gray-600">
              Common API usage patterns and code examples
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Text Analysis</h3>
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                {`POST /api/v1/ai/analyze
{
  "text": "Sample text for analysis",
  "model": "sentiment-analysis",
  "options": {
    "language": "en",
    "detailed": true
  }
}`}
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Cloud Infrastructure</h3>
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                {`POST /api/v1/cloud/deploy
{
  "template": "web-application",
  "region": "us-west-2",
  "resources": {
    "compute": "t3.medium",
    "storage": "20GB"
  }
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help?</h2>
            <p className="text-lg text-gray-600">
              Additional resources and support channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm mb-4">
                Find answers to commonly asked questions
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Browse FAQ
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14H9a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-1l-1 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join our developer community for support
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Join Community
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get help from our technical support team
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our documentation and start building with our powerful technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get API Access
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
  );
};

export default Documentation;