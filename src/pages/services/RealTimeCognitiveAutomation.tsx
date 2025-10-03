import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { ArrowLeft, Rocket, CheckCircle, DollarSign, Zap } from "lucide-react";

const RealTimeCognitiveAutomation: React.FC = () => {
  return (
    <>
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
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business operations with our advanced AI-powered automation platform. 
              Achieve 94% accuracy, 85% cost reduction, and 10x productivity gains through intelligent 
              workflows that learn and optimize autonomously.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Now
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Key Benefits */}
          <section className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Cognitive Automation Platform?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">94% Accuracy</h3>
                </div>
                <p className="text-zion-slate-light">
                  Advanced AI algorithms ensure near-perfect automation accuracy with continuous learning capabilities.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">85% Cost Reduction</h3>
                </div>
                <p className="text-zion-slate-light">
                  Dramatically reduce operational costs while improving efficiency and quality.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">10x Productivity</h3>
                </div>
                <p className="text-zion-slate-light">
                  Multiply your team's productivity with intelligent automation that works 24/7.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              <DollarSign className="w-8 h-8 text-green-400 inline mr-3" />
              Pricing & Packages
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-2xl font-bold text-white mb-4">Business Starter</h3>
                <div className="text-3xl font-bold text-green-400 mb-6">$7,999<span className="text-lg text-zion-slate-light">/month</span></div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">Basic automation workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">Up to 5 processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">Email support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/50 ring-2 ring-purple-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-white">Professional</h3>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Popular</span>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-6">$15,999<span className="text-lg text-zion-slate-light">/month</span></div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">Advanced automation workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">Up to 20 processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">Priority support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-blue-400 mb-6">Custom<span className="text-lg text-zion-slate-light">/month</span></div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">Unlimited automation workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">Unlimited processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">Dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our cognitive automation platform 
              to achieve unprecedented efficiency and growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default RealTimeCognitiveAutomation;