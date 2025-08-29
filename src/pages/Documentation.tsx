import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Download, 
  ExternalLink, 
  Search, 
  FileText, 
  Play, 
  Users,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Database,
  Code,
  Terminal,
  GitBranch,
  Package,
  Server,
  Globe
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Documentation: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      description: 'Quick start guides and tutorials for new users',
      guides: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', href: '/docs/quick-start', difficulty: 'Beginner' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', href: '/docs/installation', difficulty: 'Beginner' },
        { title: 'First Project', description: 'Create your first project with Zion Tech', href: '/docs/first-project', difficulty: 'Beginner' },
        { title: 'Configuration', description: 'Configure your environment and settings', href: '/docs/configuration', difficulty: 'Beginner' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      color: 'from-purple-600 to-pink-600',
      description: 'Complete API documentation and examples',
      guides: [
        { title: 'Authentication', description: 'API keys, OAuth, and security', href: '/docs/api/auth', difficulty: 'Intermediate' },
        { title: 'Core Endpoints', description: 'Main API endpoints and methods', href: '/docs/api/endpoints', difficulty: 'Intermediate' },
        { title: 'Webhooks', description: 'Real-time event notifications', href: '/docs/api/webhooks', difficulty: 'Advanced' },
        { title: 'Rate Limiting', description: 'API usage limits and best practices', href: '/docs/api/rate-limiting', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: Package,
      color: 'from-green-600 to-emerald-600',
      description: 'Client libraries and SDKs for popular languages',
      guides: [
        { title: 'JavaScript/Node.js', description: 'Official Node.js SDK', href: '/docs/sdks/javascript', difficulty: 'Intermediate' },
        { title: 'Python', description: 'Python client library', href: '/docs/sdks/python', difficulty: 'Intermediate' },
        { title: 'Java', description: 'Java SDK for enterprise applications', href: '/docs/sdks/java', difficulty: 'Advanced' },
        { title: 'Go', description: 'Go client library', href: '/docs/sdks/go', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'Integration Guides',
      icon: GitBranch,
      color: 'from-orange-600 to-red-600',
      description: 'Step-by-step integration tutorials',
      guides: [
        { title: 'Web Application', description: 'Integrate with React, Vue, or Angular', href: '/docs/integrations/web', difficulty: 'Intermediate' },
        { title: 'Mobile Apps', description: 'iOS and Android integration', href: '/docs/integrations/mobile', difficulty: 'Advanced' },
        { title: 'Serverless', description: 'AWS Lambda, Azure Functions integration', href: '/docs/integrations/serverless', difficulty: 'Advanced' },
        { title: 'Microservices', description: 'Docker and Kubernetes deployment', href: '/docs/integrations/microservices', difficulty: 'Advanced' }
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: 'AI Services Integration',
      description: 'Integrate AI-powered features into your applications',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      time: '15 min',
      href: '/docs/ai-integration'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Deploy and manage cloud infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      time: '30 min',
      href: '/docs/cloud-setup'
    },
    {
      title: 'Security Implementation',
      description: 'Implement security best practices',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      time: '20 min',
      href: '/docs/security-implementation'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize your applications for better performance',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      time: '25 min',
      href: '/docs/performance-optimization'
    }
  ];

  const codeExamples = [
    {
      title: 'Authentication Example',
      language: 'JavaScript',
      code: `import { ZionTech } from '@ziontech/sdk';

const client = new ZionTech({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Authenticate and get user info
const user = await client.auth.authenticate();`,
      href: '/docs/examples/authentication'
    },
    {
      title: 'AI Service Call',
      language: 'Python',
      code: `from ziontech import ZionTech

client = ZionTech(api_key="your-api-key")

# Call AI service
response = client.ai.analyze_text(
    text="Your text here",
    model="gpt-4"
)

print(response.result)`,
      href: '/docs/examples/ai-service'
    },
    {
      title: 'Webhook Handler',
      language: 'Node.js',
      code: `app.post('/webhook', (req, res) => {
  const signature = req.headers['x-zion-signature'];
  
  if (verifySignature(signature, req.body)) {
    // Process webhook
    const event = req.body;
    // // // // console.log('Received event:', event.type);
  }
  
  res.status(200).send('OK');
});`,
      href: '/docs/examples/webhooks'
    }
  ];

  const resources = [
    {
      title: 'API Playground',
      description: 'Interactive API testing environment',
      icon: Terminal,
      href: '/docs/playground',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Code Samples',
      description: 'Ready-to-use code examples',
      icon: Code,
      href: '/docs/samples',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Play,
      href: '/docs/videos',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Forum',
      description: 'Get help from the community',
      icon: Users,
      href: '/community',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, SDKs, and integration guides for Zion Tech Group services."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Developer Documentation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive guides, API references, and integration tutorials to help you build with Zion Tech Group services.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search documentation, APIs, and guides..."
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Start Guides */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Quick Start Guides
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickStartGuides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <Link
                to={guide.href}
                className="block bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${guide.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <guide.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{guide.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">{guide.time}</span>
                  <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Documentation Categories */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Documentation Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documentationCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-slate-400 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.guides.map((guide) => (
                    <Link
                      key={guide.title}
                      to={guide.href}
                      className="block p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {guide.title}
                          </div>
                          <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                            {guide.description}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {guide.difficulty}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Code Examples
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {codeExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden"
            >
              <div className="p-4 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                  <span className="text-sm text-slate-400">{example.language}</span>
                </div>
              </div>
              
              <div className="p-4">
                <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-slate-300">{example.code}</code>
                </pre>
                
                <Link
                  to={example.href}
                  className="block w-full text-center py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-300 mt-4"
                >
                  View Full Example
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Additional Resources
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="group"
              >
                <Link
                  to={resource.href}
                  className="block bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-slate-400 text-sm">{resource.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help with Documentation?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Our developer support team is here to help you succeed with our APIs and services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Developer Support
            </Link>
            <Link
              to="/community"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Join Developer Community
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Documentation;
