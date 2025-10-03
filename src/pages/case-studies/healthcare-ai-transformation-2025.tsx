import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, TrendingUp } from "lucide-react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet-async";

const HealthcareAITransformation = () => {
  return (
    <>
      <Helmet>
        <title>Healthcare AI Transformation: $124M Saved, 3.8M Patients Served | Zion Tech Group</title>
        <meta name="description" content="Major healthcare network achieves $124M cost savings and 87% faster patient processing through comprehensive AI transformation. 3.8M patients, 450 facilities, 96% satisfaction." />
        <meta name="keywords" content="healthcare AI, medical AI transformation, patient care automation, healthcare cost reduction, clinical decision support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />

        <article className="container mx-auto px-6 py-20">
          {/* Back Link */}
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-zion-cyan hover:text-zion-blue-light mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          {/* Header */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">
                ✅ Completed • October 2025
              </span>
              <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
                🏥 Healthcare
              </span>
              <span className="text-zion-slate-light">24-month transformation</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Healthcare AI Transformation:<br />
              <span className="text-zion-cyan">$124M Saved</span>, 3.8M Patients Served
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              How a major healthcare network achieved unprecedented cost savings and patient satisfaction through comprehensive AI transformation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">$124M</div>
                <div className="text-zion-slate-light">Annual Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">87%</div>
                <div className="text-zion-slate-light">Faster Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">96%</div>
                <div className="text-zion-slate-light">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-2xl p-10 border-2 border-blue-500/40">
              <h2 className="text-3xl font-bold text-white mb-6">Executive Summary</h2>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                A major healthcare network serving 3.8 million patients across 450 facilities partnered with Zion Tech Group to implement a comprehensive AI transformation. The 24-month initiative resulted in $124 million in annual cost savings, 87% faster patient processing, and 96% patient satisfaction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Achievements</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• $124M annual cost reduction</li>
                    <li>• 87% improvement in processing speed</li>
                    <li>• 96% patient satisfaction rate</li>
                    <li>• 450 facilities transformed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Technology Stack</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• AI-powered clinical decision support</li>
                    <li>• Automated patient triage systems</li>
                    <li>• Predictive analytics platform</li>
                    <li>• Real-time monitoring solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-red-900/60 to-pink-900/60 rounded-2xl p-10 border-2 border-red-500/40">
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                The healthcare network faced mounting operational costs, patient wait times, and resource allocation challenges. With 3.8 million patients across 450 facilities, manual processes were creating bottlenecks and reducing the quality of patient care.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Pain Points</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Rising operational costs</li>
                    <li>• Long patient wait times</li>
                    <li>• Resource allocation inefficiencies</li>
                    <li>• Manual process bottlenecks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Impact</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Declining patient satisfaction</li>
                    <li>• Increased staff burnout</li>
                    <li>• Revenue loss from inefficiencies</li>
                    <li>• Compliance challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-green-900/60 to-blue-900/60 rounded-2xl p-10 border-2 border-green-500/40">
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                Zion Tech Group implemented a comprehensive AI transformation strategy that included clinical decision support systems, automated patient triage, predictive analytics, and real-time monitoring solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">AI Implementation</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Clinical decision support systems</li>
                    <li>• Automated patient triage</li>
                    <li>• Predictive analytics platform</li>
                    <li>• Real-time monitoring solutions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Process Optimization</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Workflow automation</li>
                    <li>• Resource allocation optimization</li>
                    <li>• Quality assurance systems</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-purple-900/60 to-indigo-900/60 rounded-2xl p-10 border-2 border-purple-500/40">
              <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                The AI transformation delivered exceptional results across all key metrics, achieving unprecedented cost savings and patient satisfaction improvements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">$124M</div>
                  <div className="text-zion-slate-light">Annual Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">87%</div>
                  <div className="text-zion-slate-light">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">96%</div>
                  <div className="text-zion-slate-light">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-5xl mx-auto text-center">
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-12 border-2 border-zion-cyan/40">
              <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Healthcare Operations?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join the healthcare revolution with AI-powered solutions that deliver measurable results and exceptional patient experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-red-400 text-red-300 hover:bg-red-500/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  <Heart className="w-5 h-5" />
                  Start Your Transformation
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  <TrendingUp className="w-5 h-5" />
                  Explore Our Services
                </Link>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default HealthcareAITransformation;