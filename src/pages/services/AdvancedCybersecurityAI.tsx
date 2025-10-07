





;
import { Link } from "react-router-dom";

import { ArrowLeft, Shield, Zap, Lock, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';

import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";

const AdvancedCybersecurityAI = () => {
  return (
    <>
      <Helmet>
        <title>Advanced Cybersecurity AI Platform | Next-Gen Threat Detection & Response | Zion Tech Group</title>
        <meta
          name="description"
          content="AI-powered cybersecurity platform with 99.92% threat detection accuracy. Real-time protection, autonomous incident response, and predictive security intelligence."
        />
        <meta
          name="keywords"
          content="cybersecurity AI, threat detection, incident response, SIEM, EDR, security automation, AI security"
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
              <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
                🔒 NEW! October 2025
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                🛡️ AI Security
              </span>
              <span className="text-zion-slate-light">Starting at $12,999/month</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced Cybersecurity AI Platform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400 mt-2">
                Next-Gen Threat Detection & Response
              </span>
            </h1>

            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Protect your enterprise with AI-powered cybersecurity that identifies threats 99.7% faster than traditional tools. 
              Real-time detection, autonomous response, and predictive intelligence to prevent breaches before they occur.
            </p>

            {/* Key Metrics Banner */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-red-900/40 rounded-xl p-6 border border-red-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-red-400 mb-2">99.92%</div>
                <div className="text-sm text-zion-slate-light">Threat Detection</div>
              </div>
              <div className="bg-blue-900/40 rounded-xl p-6 border border-blue-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-blue-400 mb-2">&lt;50ms</div>
                <div className="text-sm text-zion-slate-light">Detection Latency</div>
              </div>
              <div className="bg-green-900/40 rounded-xl p-6 border border-green-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-sm text-zion-slate-light">False Positive Reduction</div>
              </div>
              <div className="bg-purple-900/40 rounded-xl p-6 border border-purple-500/30 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-purple-400 mb-2">&lt;5s</div>
                <div className="text-sm text-zion-slate-light">Response Time</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto space-y-12 text-zion-slate-light">
            {/* Threat Landscape */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-red-400" />
                The Modern Threat Landscape
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">🔴 Security Challenges</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">207 days:</span>
                        <span>Average breach detection time (industry)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">$4.45M:</span>
                        <span>Average cost per data breach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">60 seconds:</span>
                        <span>Ransomware encryption time</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">✅ Our Solution</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>&lt;50ms detection time (real-time)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>Prevent breaches before they occur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>Autonomous threat containment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Platform Features */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-8 h-8 text-blue-400" />
                Platform Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI-Powered Threat Detection",
                    description: "99.92% accuracy with behavioral analysis, pattern recognition, and zero-day detection. 95% fewer false positives.",
                    icon: "🎯"
                  },
                  {
                    title: "Automated Incident Response",
                    description: "<5 second response initiation. 99.7% faster than manual response with intelligent quarantine and self-healing.",
                    icon: "⚡"
                  },
                  {
                    title: "Predictive Security Intelligence",
                    description: "Forecast threats before they happen with attack path analysis, vulnerability prediction, and risk scoring.",
                    icon: "🔮"
                  },
                  {
                    title: "Unified Security Platform",
                    description: "SIEM, EDR, NDR, SOAR, and UEBA in one platform. 500+ pre-built security integrations.",
                    icon: "🛡️"
                  },
                  {
                    title: "Advanced Analytics & Forensics",
                    description: "Attack timeline reconstruction, root cause analysis, and threat hunting with interactive visualization.",
                    icon: "🔬"
                  },
                  {
                    title: "Compliance & Governance",
                    description: "Automated monitoring for GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001 with real-time compliance reporting.",
                    icon: "📋"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light">{feature.description}</p>
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
                    savings: "$8.4M",
                    results: "Zero breaches",
                    highlights: ["96% reduction in fraud losses", "100% PCI compliance", "Real-time transaction monitoring"]
                  },
                  {
                    industry: "Healthcare",
                    savings: "$6.2M",
                    results: "100% HIPAA",
                    highlights: ["Zero ransomware infections", "92% reduction in security incidents", "Patient data protection"]
                  },
                  {
                    industry: "Manufacturing",
                    savings: "$4.8M",
                    results: "Zero disruptions",
                    highlights: ["OT/IT security convergence", "Industrial IoT protection", "IP theft prevention"]
                  },
                  {
                    industry: "Retail & E-commerce",
                    savings: "$5.6M",
                    results: "94% fraud reduction",
                    highlights: ["POS security monitoring", "DDoS mitigation", "Customer data protection"]
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
                          {solution.results}
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
                    name: "Business Protection",
                    price: "$12,999",
                    features: ["Up to 100 endpoints", "10 TB log storage/month", "Core threat detection", "Email support (8x5)", "99.5% SLA"]
                  },
                  {
                    name: "Enterprise Security",
                    price: "$29,999",
                    popular: true,
                    features: ["Up to 1,000 endpoints", "50 TB log storage/month", "Advanced threat detection", "24/7 support", "99.9% SLA"]
                  },
                  {
                    name: "Managed Security",
                    price: "$59,999",
                    features: ["Unlimited endpoints", "Unlimited log storage", "24/7 SOC monitoring", "Dedicated analysts", "99.97% SLA"]
                  }
                ].map((pkg, index) => (
                  <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${pkg.popular ? 'border-red-500/50 ring-2 ring-red-500/30' : 'border-zion-cyan/30'}`}>
                    {pkg.popular && (
                      <div className="bg-red-500/20 text-red-300 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
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
              <div className="bg-gradient-to-r from-red-900/40 via-orange-900/40 to-yellow-900/40 rounded-xl p-8 border-2 border-red-500/50">
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-8 h-8 text-red-400" />
                      <h3 className="text-2xl font-bold text-white">🛡️ October 2025 Security Initiative</h3>
                    </div>
                    <p className="text-xl text-red-200 mb-4">
                      Get <strong>60 Days FREE</strong> when you start before October 31, 2025
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>Free security assessment ($25,000 value)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>Complimentary penetration test ($35,000 value)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span>90 days extended support</span>
                      </li>
                    </ul>
                    <p className="text-sm text-zion-slate-light mt-4">
                      Limited to first 25 customers. Annual contract required.
                    </p>
                  </div>
                  <div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105"
                    >
                      Secure Your Enterprise
                      <Shield className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Protect Your Enterprise Today</h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Schedule a security consultation to see how AI can revolutionize your cybersecurity posture.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105"
                >
                  Schedule Security Assessment
                  <Shield className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-red-500/30 hover:bg-white/20 transition-all"
                >
                  Request Platform Demo
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default AdvancedCybersecurityAI;
