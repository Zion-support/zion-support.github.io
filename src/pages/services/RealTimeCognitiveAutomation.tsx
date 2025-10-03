import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ArrowLeft, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  DollarSign,
  Rocket
} from "lucide-react";
import Header from "../../components/Header";

const RealTimeCognitiveAutomation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Real-Time Cognitive Automation Platform | Transform Business Operations with AI | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Transform operations with Real-Time Cognitive Automation Platform. 94% accuracy, 85% cost reduction, 10x productivity gains. AI-powered workflows that learn and optimize autonomously." 
        />
        <meta 
          name="keywords" 
          content="cognitive automation, intelligent automation, RPA, AI workflows, process automation, business automation, hyperautomation" 
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />

        <article className="container mx-auto px-6 py-20">
          {/* Back Link */}
          <Link 
            to="/services" 
            className="inline-flex items-center text-zion-cyan hover:text-zion-blue-light mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Header */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                🚀 NEW! October 2025
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">
                🤖 AI Automation
              </span>
              <span className="text-zion-slate-light">Starting at $7,999/month</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real-Time Cognitive Automation Platform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-2">
                Transform Business Operations with Intelligent Automation
              </span>
            </h1>

            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Revolutionize your business operations with AI-powered workflows that deliver instant decision-making,
              self-learning automation, and 99.97% accuracy. Achieve 87% cost reduction and 10x productivity gains.
            </p>

            {/* Key Metrics Banner */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-purple-900/40 rounded-xl p-6 border border-purple-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-purple-400 mb-2">94%</div>
                <div className="text-sm text-zion-slate-light">Process Accuracy</div>
              </div>
              <div className="bg-green-900/40 rounded-xl p-6 border border-green-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-sm text-zion-slate-light">Cost Reduction</div>
              </div>
              <div className="bg-blue-900/40 rounded-xl p-6 border border-blue-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-blue-400 mb-2">10x</div>
                <div className="text-sm text-zion-slate-light">Productivity Gain</div>
              </div>
              <div className="bg-cyan-900/40 rounded-xl p-6 border border-cyan-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;100ms</div>
                <div className="text-sm text-zion-slate-light">Response Time</div>
              </div>
            </div>
          </div>

          {/* What is Cognitive Automation */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  What is Real-Time Cognitive Automation?
                </h2>
              </div>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
                Advanced AI systems that understand context, learn from patterns, and make intelligent decisions 
                in real-time to automate complex business processes with human-like reasoning.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Intelligent Decision Making</h3>
                </div>
                <p className="text-zion-slate-light mb-4">
                  AI systems that understand context, analyze patterns, and make autonomous decisions 
                  without human intervention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-zion-slate-light">Context-aware processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-zion-slate-light">Pattern recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-zion-slate-light">Autonomous decision trees</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Real-Time Processing</h3>
                </div>
                <p className="text-zion-slate-light mb-4">
                  Instant processing and response capabilities that operate at the speed of business, 
                  delivering results in milliseconds.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-zion-slate-light">Sub-100ms response times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-zion-slate-light">Continuous data streams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-zion-slate-light">Event-driven automation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Self-Learning Systems</h3>
                </div>
                <p className="text-zion-slate-light mb-4">
                  AI that continuously learns from interactions, improves performance, and adapts 
                  to changing business requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-zion-slate-light">Continuous learning algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-zion-slate-light">Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-zion-slate-light">Adaptive workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Platform Capabilities
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Cognitive Process Engine</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Natural Language Processing</div>
                      <div className="text-zion-slate-light text-sm">Understand and process unstructured text, emails, documents</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Computer Vision</div>
                      <div className="text-zion-slate-light text-sm">Extract insights from images, videos, and visual data</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Predictive Analytics</div>
                      <div className="text-zion-slate-light text-sm">Anticipate outcomes and optimize processes proactively</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Enterprise Security</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white">End-to-End Encryption</div>
                      <div className="text-zion-slate-light text-sm">Bank-level security for all data and communications</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Compliance Ready</div>
                      <div className="text-zion-slate-light text-sm">GDPR, HIPAA, SOX, and industry-specific regulations</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Audit Trails</div>
                      <div className="text-zion-slate-light text-sm">Complete visibility into all automated decisions and actions</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Pricing & Packages
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Business Starter
                  price: "$7,999
                  period: "per month
                  features: [
                    "Up to 10 automated processes
                    "Real-time cognitive engine
                    "Basic integrations
                    "24/7 support
                    "Training included"
                  ]
                },
                {
                  name: "Professional
                  price: "$19,999
                  period: "per month
                  popular: true,
                  features: [
                    "Up to 50 automated processes
                    "Advanced AI capabilities
                    "Enterprise integrations
                    "Dedicated support
                    "Custom workflows
                    "Advanced analytics"
                  ]
                },
                {
                  name: "Enterprise
                  price: "Custom
                  period: "pricing
                  features: [
                    "Unlimited processes
                    "Full cognitive suite
                    "Custom development
                    "White-label options
                    "On-premise deployment
                    "Dedicated team"
                  ]
                }
              ].map((pkg, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${pkg.popular ? 'border-purple-500/50 ring-2 ring-purple-500/30' : 'border-zion-cyan/30'}`}>
                  {pkg.popular && (
                    <div className="text-center mb-4">
                      <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-zion-slate-light"> {pkg.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Special Offer */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-cyan-900/40 rounded-xl p-8 border-2 border-purple-500/50">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="w-8 h-8 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">🚀 October 2025 Launch Special</h3>
                  </div>
                  <p className="text-zion-slate-light mb-6">
                    Get started with our revolutionary Cognitive Automation Platform and receive exclusive launch benefits worth over $40,000.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span>Free process assessment ($15,000 value)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span>Complimentary pilot implementation ($25,000 value)</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Join leading enterprises already using our Cognitive Automation Platform to achieve 
                unprecedented efficiency and accuracy in their business processes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default RealTimeCognitiveAutomation;