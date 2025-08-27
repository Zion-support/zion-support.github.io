import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  BookOpen,
  Zap,
  Shield,
  Users,
  MessageSquare,
  Github,
  ExternalLink,
  Terminal,
  Webhook,
  Key,
  Mail,
  ArrowRight,
  Check,
  Star,
  Download,
  Play,
  Settings,
  Database,
  Globe,
  Lock,
  Rocket,
  Crown,
  Sparkles,
  ChevronRight,
  Clock,
  BarChart3,
  Target,
  Award,
  Lightbulb
} from 'lucide-react';

const DeveloperPortal = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const apiFeatures = [
    {
      title: 'RESTful APIs',
      description: 'Clean, intuitive REST APIs for all major platform features',
      icon: Code,
      status: 'Stable',
      docs: '/api-docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Webhooks',
      description: 'Real-time notifications for platform events and updates',
      icon: Webhook,
      status: 'Beta',
      docs: '/api-docs/webhooks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Authentication',
      description: 'Secure OAuth 2.0 and API key authentication',
      icon: Key,
      status: 'Stable',
      docs: '/api-docs/auth',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'SDKs & Libraries',
      description: 'Official SDKs for JavaScript, Python, and more',
      icon: Terminal,
      status: 'Stable',
      docs: '/api-docs/sdks',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: 'Get API Keys',
      description: 'Sign up and generate your API keys from the dashboard',
      action: 'Get Started',
      icon: Key
    },
    {
      step: 2,
      title: 'Read Documentation',
      description: 'Explore our comprehensive API documentation and guides',
      action: 'View Docs',
      icon: BookOpen
    },
    {
      step: 3,
      title: 'Test Endpoints',
      description: 'Use our interactive API playground to test endpoints',
      action: 'Try API',
      icon: Play
    },
    {
      step: 4,
      title: 'Build & Deploy',
      description: 'Integrate our APIs into your applications',
      action: 'View Examples',
      icon: Rocket
    }
  ];

  const resources = [
    {
      title: 'API Reference',
      description: 'Complete API endpoint documentation with examples',
      icon: BookOpen,
      href: '/api-docs',
      badge: 'Complete',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step tutorial for new developers',
      icon: Zap,
      href: '/api-docs/getting-started',
      badge: 'Beginner',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Code Samples',
      description: 'Ready-to-use code examples in multiple languages',
      icon: Code,
      href: '/api-docs/samples',
      badge: 'Examples',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'SDK Downloads',
      description: 'Official SDKs and client libraries',
      icon: Terminal,
      href: '/api-docs/sdks',
      badge: 'Download',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get help',
      icon: Users,
      href: '/community',
      badge: 'Community',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'API Status',
      description: 'Real-time API performance and uptime monitoring',
      icon: BarChart3,
      href: '/status',
      badge: 'Live',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      code: `const response = await fetch('https://api.ziontechgroup.com/v1/data', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`,
      icon: Code
    },
    {
      language: 'Python',
      code: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.ziontechgroup.com/v1/data', headers=headers)
data = response.json()
print(data)`,
      icon: Code
    },
    {
      language: 'cURL',
      code: `curl -X GET "https://api.ziontechgroup.com/v1/data" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      icon: Terminal
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Code className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Developer{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Portal
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Build amazing applications with our powerful APIs, comprehensive documentation,
            and developer tools. Everything you need to integrate Zion Tech Group's services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Get Started
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Quick Start Steps */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Follow these simple steps to start building with our APIs and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{step.description}</p>

                  <button className="bg-zion-cyan/20 text-zion-cyan border border-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 text-sm font-medium">
                    {step.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful API Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Everything you need to build robust, scalable applications with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 text-center leading-relaxed">{feature.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    feature.status === 'Stable' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {feature.status}
                  </span>

                  <button className="text-zion-cyan hover:text-white transition-colors duration-300 text-sm">
                    View Docs
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Code Examples
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get started quickly with these ready-to-use code examples in your preferred language.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <example.icon className="w-6 h-6 text-zion-cyan" />
                    <h3 className="text-lg font-bold text-white">{example.language}</h3>
                  </div>

                  <div className="bg-zion-slate-dark/80 rounded-lg p-4 mb-4">
                    <pre className="text-zion-slate-light text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>

                  <button className="w-full bg-zion-cyan/20 text-zion-cyan border border-zion-cyan py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 text-sm font-medium">
                    Copy Code
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Developer Resources
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive documentation, tools, and community resources to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 text-center">{resource.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 text-center leading-relaxed">{resource.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    resource.badge === 'Complete' ? 'bg-green-500/20 text-green-400' :
                    resource.badge === 'Beginner' ? 'bg-blue-500/20 text-blue-400' :
                    resource.badge === 'Examples' ? 'bg-purple-500/20 text-purple-400' :
                    resource.badge === 'Download' ? 'bg-orange-500/20 text-orange-400' :
                    resource.badge === 'Community' ? 'bg-indigo-500/20 text-indigo-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {resource.badge}
                  </span>

                  <button className="text-zion-cyan hover:text-white transition-colors duration-300 text-sm group-hover:translate-x-1 transition-transform duration-300">
                    View Resource
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of developers who are already building innovative applications
            with our powerful APIs and services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Get API Keys
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperPortal;
