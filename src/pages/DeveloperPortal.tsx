import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Code, BookOpen, Terminal, Zap, Shield, Globe, Settings, Users } from 'lucide-react';

export default function DeveloperPortal() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      link: '/docs'
    },
    {
      icon: Code,
      title: 'Code Examples',
      description: 'Ready-to-use code snippets and samples',
      link: '/examples'
    },
    {
      icon: Terminal,
      title: 'SDKs & Libraries',
      description: 'Official SDKs for popular languages',
      link: '/sdks'
    },
    {
      icon: Zap,
      title: 'API Playground',
      description: 'Interactive API testing environment',
      link: '/playground'
    },
    {
      icon: Shield,
      title: 'Authentication',
      description: 'Security and access management',
      link: '/auth'
    },
    {
      icon: Globe,
      title: 'Status & Health',
      description: 'Real-time service status monitoring',
      link: '/status'
    }
  ];

  const quickStart = [
    {
      step: 1,
      title: 'Get API Key',
      description: 'Sign up and obtain your authentication credentials'
    },
    {
      step: 2,
      title: 'Choose SDK',
      description: 'Select the appropriate SDK for your programming language'
    },
    {
      step: 3,
      title: 'Make First Call',
      description: 'Test your setup with a simple API request'
    },
    {
      step: 4,
      title: 'Build & Deploy',
      description: 'Integrate our services into your application'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developer Portal - Zion Tech Group"
        description="Comprehensive developer resources, SDKs, documentation, and tools for building with Zion Tech Group services."
      />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Portal</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to build amazing applications with Zion Tech Group services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Developer Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access comprehensive tools and resources to accelerate your development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running with our services in just a few steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStart.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our developer support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                Join Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
