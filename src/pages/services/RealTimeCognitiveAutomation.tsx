





;
import { ArrowLeft, Brain, CheckCircle, DollarSign, Rocket, TrendingUp, Zap } from 'lucide-react';
import { Link } from "react-router-dom";


import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";

const RealTimeCognitiveAutomation = () => {
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
                <div className="text-4xl font-bold text-cyan-400 mb-2">6 Mo</div>
                <div className="text-sm text-zion-slate-light">Average ROI Time</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto space-y-12 text-zion-slate-light">
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
                        <span>&lt;50ms decision latency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>Instant workflow execution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>Live process optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">🧠 Self-Learning Systems</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span>Continuous model improvement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span>Adaptive workflow optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span>Autonomous error correction</span>
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
              <div className="grid md:grid-cols-2 gap-6">
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
                    title: "Enterprise Integration",
                    description: "Pre-built connectors for 500+ systems including SAP, Salesforce, ServiceNow, and custom APIs.",
                    icon: "🔌"
                  }
                ].map((capability, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all">
                    <div className="text-4xl mb-4">{capability.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                    <p className="text-zion-slate-light">{capability.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Industry Solutions */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">🏭 Industry Solutions</h2>
              <div className="space-y-6">
                {[
                  {
                    industry: "Financial Services",
                    savings: "$12.4M",
                    automation: "95%",
                    highlights: ["Loan processing: 96% faster", "Fraud detection: 97% accuracy", "KYC/AML: 100% coverage"]
                  },
                  {
                    industry: "Healthcare",
                    savings: "$8.7M",
                    automation: "92%",
                    highlights: ["Claims processing: 92% auto-adjudication", "Medical coding: 99.1% accuracy", "Patient scheduling: 100% automated"]
                  },
                  {
                    industry: "Manufacturing",
                    savings: "$18.2M",
                    automation: "94%",
                    highlights: ["Quality control: 99.7% defect detection", "Inventory: 98% forecast accuracy", "Maintenance: 84% failures prevented"]
                  },
                  {
                    industry: "Retail & E-commerce",
                    savings: "$6.8M",
                    automation: "89%",
                    highlights: ["Order processing: 99.8% automation", "Customer service: 89% auto-resolution", "Returns: 95% automated"]
                  }
                ].map((solution, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{solution.industry}</h3>
                      <div className="flex gap-4">
                        <div className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-sm font-semibold">
                          {solution.savings} annual savings
                        </div>
                        <div className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-semibold">
                          {solution.automation} automation
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {solution.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Packages */}
            <section>
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
                      <div className="bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                        MOST POPULAR
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-6">{pkg.price}<span className="text-lg text-zion-slate-light">/month</span></div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Limited Time Offer */}
            <section>
              <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-cyan-900/40 rounded-xl p-8 border-2 border-purple-500/50">
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Rocket className="w-8 h-8 text-purple-400" />
                      <h3 className="text-2xl font-bold text-white">🚀 October 2025 Launch Special</h3>
                    </div>
                    <p className="text-xl text-purple-200 mb-4">
                      Get Your <strong>First 3 Months at 50% OFF</strong>
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
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>6 months extended support included</span>
                      </li>
                    </ul>
                    <p className="text-sm text-zion-slate-light mt-4">
                      Limited to first 30 customers. Annual contract required.
                    </p>
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
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Operations?</h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Schedule a consultation to see how cognitive automation can revolutionize your business.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-blue to-zion-cyan text-white font-bold rounded-lg hover:from-zion-blue-light hover:to-zion-cyan transition-all transform hover:scale-105"
                >
                  Schedule Free Assessment
                  <Zap className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-zion-cyan/30 hover:bg-white/20 transition-all"
                >
                  Request Live Demo
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default RealTimeCognitiveAutomation;
