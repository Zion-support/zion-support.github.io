import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, TrendingUp, CheckCircle, Brain, Zap, Target, BarChart3 } from "lucide-react";

const RealTimeCognitiveAutomation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Real-Time Cognitive Automation - Zion Tech Group</title>
        <meta name="description" content="Advanced real-time cognitive automation solutions that combine AI, machine learning, and intelligent workflows for maximum business efficiency." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Back Link */}
          <Link 
            to="/services" 
            className="inline-flex items-center text-zion-cyan hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Real-Time Cognitive Automation
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full text-lg font-semibold">
                🤖 AI Automation
              </span>
              <span className="text-zion-slate-light">Starting at $7,999/month</span>
            </div>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Transform your business operations with intelligent automation that thinks, learns, and adapts in real-time.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-20">
            {/* Business Impact */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-400" />
                Business Impact
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">⚡ Real-Time Processing</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">&lt;50ms decision latency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Instant workflow execution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Live process optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">🧠 Self-Learning Systems</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Continuous model improvement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Adaptive workflow optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Autonomous error correction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Platform Capabilities */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-purple-400" />
                Platform Capabilities
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Intelligent Document Processing",
                    description: "99.8% accuracy across PDF, images, scanned documents, and handwriting. Support for 127 languages.",
                    icon: "📄"
                  },
                  {
                    title: "Cognitive Decision Engine",
                    description: "AI-powered decision-making with 94% prediction accuracy. Multi-criteria analysis in real-time.",
                    icon: "🎯"
                  },
                  {
                    title: "Workflow Orchestration",
                    description: "Visual no-code designer with smart routing and autonomous exception handling. 10x faster deployment.",
                    icon: "🔄"
                  },
                  {
                    title: "Natural Language Understanding",
                    description: "98% accuracy in intent recognition. Process and respond to human language with contextual understanding.",
                    icon: "💬"
                  },
                  {
                    title: "Predictive Analytics",
                    description: "Process mining and bottleneck detection. Anticipate issues before they occur with predictive maintenance.",
                    icon: "📊"
                  },
                  {
                    title: "Integration Hub",
                    description: "Connect 500+ enterprise systems. Real-time data synchronization and API management.",
                    icon: "🔗"
                  }
                ].map((capability, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-colors">
                    <div className="text-4xl mb-4">{capability.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                    <p className="text-zion-slate-light">{capability.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Performance Metrics */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-yellow-400" />
                Performance Metrics
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { metric: "99.8%", label: "Accuracy Rate", icon: "🎯" },
                  { metric: "&lt;50ms", label: "Response Time", icon: "⚡" },
                  { metric: "10x", label: "Faster Deployment", icon: "🚀" },
                  { metric: "94%", label: "Cost Reduction", icon: "💰" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 text-center">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.metric}</div>
                    <div className="text-zion-slate-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Intelligently?</h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your business operations with real-time cognitive automation that learns and adapts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/case-studies"
                  className="border-2 border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default RealTimeCognitiveAutomation;