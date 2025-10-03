import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, TrendingUp, CheckCircle, DollarSign, Zap, Rocket } from "lucide-react";

const RealTimeCognitiveAutomation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Real-Time Cognitive Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with real-time cognitive automation. AI-powered decision engines that process data instantly and optimize workflows automatically." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link 
            to="/services" 
            className="inline-flex items-center text-zion-cyan hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
              🤖 AI Automation
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Real-Time Cognitive Automation
            </h1>
            <p className="text-xl text-zion-slate-light mb-6 max-w-3xl mx-auto">
              Transform your business with AI-powered decision engines that process data instantly and optimize workflows automatically.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl font-bold text-zion-cyan">Starting at $7,999/month</span>
            </div>
          </div>

          {/* Content */}
          <article className="max-w-6xl mx-auto">
            {/* Business Impact */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-400" />
                Business Impact
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30">
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
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30">
                  <h3 className="text-xl font-bold text-white mb-4">🧠 Self-Learning Systems</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-zion-slate-light">Continuous pattern recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-zion-slate-light">Automatic model updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-zion-slate-light">Predictive optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Real-Time Processing",
                    description: "Process and respond to data in real-time, enabling instant decision-making and immediate action.",
                    icon: "⚡"
                  },
                  {
                    title: "Cognitive Decision Engines",
                    description: "AI-powered decision engines that learn from patterns and make optimal choices automatically.",
                    icon: "🧠"
                  },
                  {
                    title: "Adaptive Learning",
                    description: "Systems that continuously improve and adapt based on new data and changing conditions.",
                    icon: "🔄"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Packages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-green-400" />
                Pricing & Packages
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Business Starter",
                    price: "$7,999",
                    features: ["50,000 transactions/month", "10 automated workflows", "Standard integrations", "Email support", "99.5% SLA"]
                  },
                  {
                    name: "Professional",
                    price: "$19,999",
                    popular: true,
                    features: ["250,000 transactions/month", "50 automated workflows", "Advanced integrations", "24/7 support", "99.9% SLA"]
                  },
                  {
                    name: "Enterprise",
                    price: "$49,999",
                    features: ["Unlimited transactions", "Unlimited workflows", "Custom AI models", "Dedicated team", "99.97% SLA"]
                  }
                ].map((pkg, index) => (
                  <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${pkg.popular ? 'border-purple-500/50 ring-2 ring-purple-500/30' : 'border-zion-cyan/30'}`}>
                    {pkg.popular && (
                      <div className="text-center mb-4">
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-zion-cyan mb-4">{pkg.price}<span className="text-lg text-zion-slate-light">/month</span></div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Limited Time Offer */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-cyan-900/40 rounded-xl p-8 border-2 border-purple-500/50">
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Rocket className="w-8 h-8 text-purple-400" />
                      <h3 className="text-2xl font-bold text-white">🚀 October 2025 Launch Special</h3>
                    </div>
                    <p className="text-zion-slate-light mb-4">
                      Get Your <strong className="text-white">First 3 Months at 50% OFF</strong>
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Free process assessment ($15,000 value)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Complimentary pilot implementation ($25,000 value)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Limited to first 30 customers. Annual contract required.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <Link 
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all transform hover:scale-105"
                    >
                      Get Started Today
                      <Zap className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/30">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
                  Join leading enterprises that have already transformed their operations with our real-time cognitive automation solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-zion-cyan text-white font-bold rounded-lg hover:bg-zion-cyan/80 transition-colors"
                  >
                    Schedule Free Assessment
                    <Zap className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/demo"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                  >
                    Request Live Demo
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealTimeCognitiveAutomation;