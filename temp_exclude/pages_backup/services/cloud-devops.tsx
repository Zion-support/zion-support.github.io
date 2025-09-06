import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';


const tools = [
  { name: 'AWS', description: 'Amazon Web Services cloud platform' },
  { name: 'Azure', description: 'Microsoft Azure cloud services' },
  { name: 'Google Cloud', description: 'Google Cloud Platform solutions' },
  { name: 'Docker', description: 'Containerization platform' },
  { name: 'Kubernetes', description: 'Container orchestration' },
  { name: 'Terraform', description: 'Infrastructure as code' },
  { name: 'Jenkins', description: 'CI/CD automation' },
  { name: 'Prometheus', description: 'Monitoring and alerting' }
];

  return (
    <Layout
      title="Cloud & DevOps Services - Zion Tech Group"
      description="Comprehensive cloud migration and DevOps services. Transform your infrastructure with modern cloud technologies and automated processes."
      keywords="cloud services, DevOps, cloud migration, infrastructure as code, CI/CD, cloud optimization"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud & DevOps Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your infrastructure with modern cloud technologies and automated DevOps processes
                for improved performance, security, and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}

        {/* Tools Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We work with leading cloud platforms and DevOps tools to deliver the best solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors text-center"
                >
                  <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful cloud and DevOps implementations.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Assessment', description: 'Analyze your current infrastructure and requirements' },
                { step: '2', title: 'Planning', description: 'Design the optimal cloud and DevOps strategy' },
                { step: '3', title: 'Implementation', description: 'Execute the migration and setup processes' },
                { step: '4', title: 'Optimization', description: 'Monitor, optimize, and maintain your systems' }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </motion.div>
              ))}
  );
}