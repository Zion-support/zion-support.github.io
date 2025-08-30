import React from 'react.ts';
import { Helmet  } from 'react-helmet-async.ts';
import { Brain, Zap, Settings, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, Play, Download, Mail  } from 'lucide-react';
import { Link  } from 'react-router-dom.ts';

export default function AIEnterpriseOrchestrator(...args: []):  {
  return (
    <>
      <Helmet>
        <title>AI Enterprise Orchestrator - Zion Tech Group</title>
        <meta name = "description" content="Transform your enterprise with AI-powered workflow orchestration, multi-agent coordination, and intelligent process automation." />
        <meta name="keywords" content="AI enterprise orchestrator, workflow automation, multi-agent AI, business process automation, enterprise AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Enterprise Orchestration
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Enterprise
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Orchestrator</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Orchestrate your entire enterprise with intelligent AI agents that coordinate workflows, 
                automate processes, and optimize operations across all departments and systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Enterprise Orchestration
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our AI orchestrator seamlessly coordinates complex business processes, 
                making your enterprise more efficient, responsive, and intelligent.
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Multi-Agent Coordination",
                  description: "Intelligent AI agents work together to coordinate complex workflows across departments and systems."
                },
                {
                  icon: Zap,
                  title: "Real-time Optimization",
                  description: "Continuously optimize processes based on real-time data and performance metrics."
                },
                {
                  icon: Settings,
                  title: "Workflow Automation",
                  description: "Automate repetitive tasks and complex business processes with intelligent decision-making."
                },
                {
                  icon: Users,
                  title: "Cross-functional Integration",
                  description: "Seamlessly integrate with existing systems, databases, and third-party applications."
                },
                {
                  icon: TrendingUp,
                  title: "Performance Analytics",
                  description: "Comprehensive insights into process efficiency, bottlenecks, and optimization opportunities."
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description: "Enterprise-grade security with built-in compliance monitoring and audit trails."
                }
              ].map((feature, index)  => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How AI Enterprise Orchestration Works
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our intelligent orchestration platform follows a systematic approach to 
                transform your enterprise operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Process Analysis",
                  description: "AI analyzes your current business processes and identifies optimization opportunities."
                },
                {
                  step: "02",
                  title: "Agent Deployment",
                  description: "Intelligent AI agents are deployed to coordinate and optimize specific workflows."
                },
                {
                  step: "03",
                  title: "Real-time Coordination",
                  description: "Agents work together in real-time to coordinate tasks and optimize resource allocation."
                },
                {
                  step: "04",
                  title: "Continuous Learning",
                  description: "The system continuously learns and improves based on performance data and outcomes."
                }
              ].map((step, index)  => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Enterprise
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Experience unprecedented efficiency and intelligence across your entire organization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "Reduce operational costs by up to 40% through intelligent automation",
                    "Improve process efficiency by 60% with AI-powered optimization",
                    "Enable real-time decision making across all business units",
                    "Seamlessly integrate with existing enterprise systems",
                    "Provide comprehensive audit trails and compliance monitoring",
                    "Scale operations without proportional cost increases"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  {[
                    { metric: "40%", label: "Cost Reduction" },
                    { metric: "60%", label: "Efficiency Improvement" },
                    { metric: "24/7", label: "Operation Availability" },
                    { metric: "99.9%", label: "Uptime Reliability" }
                  ].map((item, index)  => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-2xl font-bold text-cyan-400">{item.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Orchestrate Your Enterprise?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading organizations that have transformed their operations with AI-powered orchestration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Explore All Services;
              </Link>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
}