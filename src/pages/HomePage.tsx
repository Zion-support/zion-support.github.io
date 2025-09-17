import React from 'react';
import { ArrowRight, CheckCircle, Star, Cloud, Brain, Shield, Zap, Rocket } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: '🚀' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: '🛡️' },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: '⏰' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: '🤖' },
  ];

  const coreServices = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence for business transformation',
      icon: <Brain className="w-8 h-8" />,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions for modern applications',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'DevOps Automation']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security frameworks and threat protection',
      icon: <Shield className="w-8 h-8" />,
      features: ['Zero Trust Security', 'Penetration Testing', 'Compliance Auditing', 'Incident Response']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end business process modernization',
      icon: <Zap className="w-8 h-8" />,
      features: ['Process Automation', 'Legacy Modernization', 'API Integration', 'Data Migration']
    }
  ];

  const technologies = [
    { name: 'React & Next.js', icon: '⚛️' },
    { name: 'Node.js & Python', icon: '🐍' },
    { name: 'AWS & Azure', icon: '☁️' },
    { name: 'Docker & Kubernetes', icon: '🐳' },
    { name: 'TensorFlow & PyTorch', icon: '🤖' },
    { name: 'Blockchain & Web3', icon: '⛓️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/services'}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                Get Started Today
                <Rocket className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-6 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Service Categories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Master</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks to build scalable, modern applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm text-white/80">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/services'}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                Get Started Today
                <Rocket className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}