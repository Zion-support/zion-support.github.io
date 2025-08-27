import React from 'react';
import { Workflow, Zap, Brain, Target, CheckCircle, ArrowRight, Users, Clock, Shield, TrendingUp, BarChart3, Rocket, Globe, Cpu, Database, Lock, Eye, Network, Server, Cloud, Smartphone } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIWorkflowAutomation() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI-powered analysis of existing workflows to identify automation opportunities and bottlenecks.'
    },
    {
      icon: Workflow,
      title: 'Visual Workflow Designer',
      description: 'Drag-and-drop interface for creating complex workflows with conditional logic and decision trees.'
    },
    {
      icon: Zap,
      title: 'Real-time Automation',
      description: 'Instant execution of workflows with real-time monitoring and alerting capabilities.'
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Continuous learning and optimization of workflows based on performance metrics and outcomes.'
    }
  ];

  const benefits = [
    'Reduce manual tasks by up to 80%',
    'Improve process accuracy and consistency',
    'Accelerate decision-making cycles',
    'Enhance employee productivity and satisfaction',
    'Reduce operational costs significantly',
    'Ensure compliance and audit trails'
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate ticket routing, response generation, and escalation workflows.',
      icon: Users
    },
    {
      title: 'Financial Process Automation',
      description: 'Streamline invoice processing, expense approvals, and financial reporting.',
      icon: TrendingUp
    },
    {
      title: 'HR Workflow Automation',
      description: 'Automate recruitment, onboarding, and performance review processes.',
      icon: Users
    },
    {
      title: 'IT Operations Automation',
      description: 'Automate incident response, system monitoring, and deployment workflows.',
      icon: Server
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group"
        description="Transform your business processes with intelligent workflow automation powered by AI. Streamline operations, reduce costs, and improve efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6">
              <Workflow className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">AI-Powered Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Workflow Automation
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transform your business processes with intelligent workflow automation. 
              Our AI-powered platform analyzes, optimizes, and executes workflows 
              to maximize efficiency and productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Automation Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI workflow automation platform combines cutting-edge technology with 
              intuitive design to deliver powerful automation capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Workflow Automation?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency gains and operational improvements 
              with our intelligent automation solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how AI workflow automation is transforming industries 
              and revolutionizing business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have transformed their operations 
            with AI-powered workflow automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}