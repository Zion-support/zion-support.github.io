import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowLeft, 
  TrendingUp, 
  CheckCircle, 
  Rocket, 
  Zap,
  Brain,
  Clock,
  Target
} from "lucide-react";

const RealTimeCognitiveAutomation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Real-Time Decision Making",
      description: "AI systems that process data and make decisions in real-time, enabling instant responses to changing conditions.",
      benefit: "<50ms decision latency"
    },
    {
      icon: Clock,
      title: "Continuous Learning",
      description: "Systems that continuously improve and adapt based on new data and changing conditions.",
      benefit: "24/7 optimization"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Advanced analytics that predict future outcomes and optimize processes proactively.",
      benefit: "95% accuracy rate"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$7,999",
      period: "month",
      description: "Perfect for small to medium businesses",
      features: [
        "Basic real-time processing",
        "Standard analytics",
        "Email support",
        "Up to 10 workflows",
        "Monthly reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$19,999",
      period: "month",
      description: "Advanced features for growing businesses",
      features: [
        "Advanced real-time processing",
        "Predictive analytics",
        "Priority support",
        "Unlimited workflows",
        "Custom integrations",
        "Weekly reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49,999",
      period: "month",
      description: "Complete solution for large enterprises",
      features: [
        "Full cognitive automation",
        "AI-powered insights",
        "Dedicated support",
        "Custom development",
        "Real-time monitoring",
        "Daily reporting"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Real-Time Cognitive Automation | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cognitive automation solutions that process data and make decisions in real-time." />
        <meta name="keywords" content="cognitive automation, real-time AI, intelligent automation, business process automation" />
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Link 
            to="/services" 
            className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-6xl">🤖</span>
              <h1 className="text-5xl font-bold text-white">Real-Time Cognitive Automation</h1>
            </div>
            <div className="flex items-center justify-center gap-4 text-xl">
              <span className="text-zion-cyan font-semibold">AI Automation</span>
              <span className="text-zion-slate-light">Starting at $7,999/month</span>
            </div>
          </div>

          {/* Content */}
          <article className="max-w-4xl mx-auto">
            {/* Business Impact */}
            <section className="mb-16">
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
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Continuous improvement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Adaptive decision making</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">Pattern recognition</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-zion-cyan/20 rounded-lg mb-4">
                        <Icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-zion-slate-light mb-4">{feature.description}</p>
                      <div className="inline-flex items-center text-green-400 font-semibold text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {feature.benefit}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Pricing Plans</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border-2 ${plan.popular ? 'border-zion-cyan' : 'border-zion-cyan/30'}`}>
                    {plan.popular && (
                      <div className="bg-zion-cyan text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                        Most Popular
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-zion-slate-light ml-1">/{plan.period}</span>
                      </div>
                      <p className="text-zion-slate-light">{plan.description}</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
                    <p className="text-white mb-4">
                      Get Your <strong>First 3 Months at 50% OFF</strong>
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-white">Free process assessment ($15,000 value)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-white">Complimentary pilot implementation ($25,000 value)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-white">Limited to first 30 customers. Annual contract required.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
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
                <p className="text-zion-slate-light mb-8 text-lg">
                  Experience the power of real-time cognitive automation and watch your business processes evolve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    Schedule Free Assessment
                    <Zap className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/demo"
                    className="inline-flex items-center gap-2 px-8 py-3 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                  >
                    Request Live Demo
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default RealTimeCognitiveAutomation;