'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import InteractiveCard, { TestimonialCard } from '@/components/InteractiveCard';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: 'AI Autonomous Systems',
      description: 'Revolutionary AI agents that operate independently, making decisions and executing complex tasks without human intervention.',
      icon: '🤖',
      href: '/ai-autonomous-systems',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Neural Networks',
      description: 'Next-generation quantum computing platforms that leverage quantum mechanics for unprecedented AI processing power.',
      icon: '⚛️',
      href: '/quantum-neural-network-platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Security',
      description: 'AI-powered security solutions that protect your business with intelligent threat detection and response.',
      icon: '🔒',
      href: '/ai-powered-enterprise-security',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and insights powered by AI to drive data-driven decision making.',
      icon: '📊',
      href: '/ai-business-intelligence',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Content Generation',
      description: 'AI-powered content creation tools that generate high-quality, engaging content at scale.',
      icon: '✍️',
      href: '/ai-content-generator',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Research Automation',
      description: 'Autonomous research assistants that accelerate discovery and innovation across all domains.',
      icon: '🔬',
      href: '/ai-autonomous-research-assistant',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: '🚀' },
    { number: '50+', label: 'Enterprise Clients', icon: '🏢' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
    { number: '24/7', label: 'AI Support', icon: '🤝' }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group's AI solutions have transformed our business operations completely. The autonomous systems are game-changing.",
      author: "Sarah Chen",
      position: "CTO, TechCorp",
      company: "TechCorp Industries"
    },
    {
      quote: "The quantum neural network platform exceeded our expectations. Processing speeds are incredible.",
      author: "Dr. Michael Rodriguez",
      position: "Head of Research",
      company: "Quantum Labs"
    },
    {
      quote: "Enterprise security has never been more robust. The AI threat detection is proactive and intelligent.",
      author: "Lisa Thompson",
      position: "Security Director",
      company: "Global Finance Corp"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-white">Digital Transformation</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology. We deliver autonomous systems, 
            intelligent automation, and next-generation digital solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
            <a 
              href="/solutions" 
              className="border-2 border-slate-400 text-slate-300 hover:text-white hover:border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From autonomous business operations to advanced AI research, we provide end-to-end solutions 
              that transform how organizations operate and innovate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Business Intelligence */}
            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Business Intelligence</h3>
              <p className="text-slate-300 mb-4">
                Advanced analytics and insights powered by AI to drive data-driven decision making.
              </p>
              <a href="/services" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Learn More →
              </a>
            </div>

            {/* Autonomous Systems */}
            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Systems</h3>
              <p className="text-slate-300 mb-4">
                Self-managing AI systems that operate independently and optimize business processes.
              </p>
              <a href="/solutions" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                Learn More →
              </a>
            </div>

            {/* Digital Transformation */}
            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
              <p className="text-slate-300 mb-4">
                End-to-end digital transformation services to modernize your business operations.
              </p>
              <a href="/services" className="text-green-400 hover:text-green-300 font-medium transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
                    <p className="text-slate-300">Over a decade of experience in AI and digital transformation across multiple industries.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                    <p className="text-slate-300">We stay ahead of the curve with the latest AI technologies and methodologies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Results-Driven</h3>
                    <p className="text-slate-300">Every solution is designed to deliver measurable business outcomes and ROI.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-slate-600/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform?</h3>
                  <p className="text-slate-300 mb-6">
                    Join hundreds of organizations that have already transformed their business with our AI solutions.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    Start Your Journey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how our AI-powered solutions can transform your business operations 
            and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/admin/instances" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Access Admin Portal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}