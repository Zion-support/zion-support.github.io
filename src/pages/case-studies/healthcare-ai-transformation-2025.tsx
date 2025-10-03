import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import { ArrowLeft, Heart, TrendingUp } from "lucide-react";

const HealthcareAITransformation: React.FC = () => {
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
              Healthcare AI Transformation
            </h1>
            
            <p className="text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Major healthcare network achieves $124M cost savings and 87% faster patient processing through comprehensive AI transformation.
            </p>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">$124M</div>
                <div className="text-zion-slate-light">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">3.8M</div>
                <div className="text-zion-slate-light">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">87%</div>
                <div className="text-zion-slate-light">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">96%</div>
                <div className="text-zion-slate-light">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Client Quote */}
          <section className="bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-2xl p-10 border-2 border-blue-500/40 mb-16">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-6">Client Success Story</h2>
              <p className="text-2xl text-white font-semibold italic mb-6">
                "This AI transformation has been nothing short of revolutionary for our network. We're providing better care, faster service, and spending $124M less per year."
              </p>
              <p className="text-lg text-zion-slate-light">
                — Dr. Sarah Chen, Chief Medical Officer, Regional Healthcare Network
              </p>
            </div>
          </section>

          {/* Impact Section */}
          <section className="bg-gradient-to-r from-red-900/60 to-pink-900/60 rounded-2xl p-12 border-2 border-red-500/40 text-center mb-16">
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Transforming Patient Care Through AI
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our comprehensive AI transformation enabled this major healthcare network to serve 3.8 million patients across 450 facilities with unprecedented efficiency and cost savings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 border-2 border-red-400 text-red-300 hover:bg-red-500/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <Heart className="w-5 h-5" />
                Transform Your Healthcare
              </Link>
              
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center gap-2 border-2 border-red-400 text-red-300 hover:bg-red-500/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <TrendingUp className="w-5 h-5" />
                Explore AI Solutions
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default HealthcareAITransformation;