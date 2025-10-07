





;
import { ArrowLeft, ArrowRight, CheckCircle, DollarSign, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from "react-router-dom";


import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";

const Fortune100AutonomousOperationsTransformation = () => {
  return (
    <>
      <Helmet>
        <title>Fortune 100: $650M Value Through Autonomous Operations | Zion Tech Group</title>
        <meta
          name="description"
          content="Fortune 100 financial services company creates $650M annual value through AI-powered autonomous operations. 85% cost reduction, 99.7% accuracy, 40+ workflows in 90 days."
        />
        <meta
          name="keywords"
          content="autonomous operations case study, AI transformation, business automation, operational efficiency, Fortune 100, ROI"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <Header />

        <article className="container mx-auto px-6 py-20">
          {/* Back Link */}
          <Link
            to="/case-studies"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
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
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                🏦 Financial Services
              </span>
              <span className="text-blue-200">12-month transformation</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Fortune 100 Enterprise:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mt-2">
                $650M Value Creation Through Autonomous Business Operations
              </span>
            </h1>

            <p className="text-xl text-blue-200 leading-relaxed mb-8">
              A Fortune 100 financial services company partnered with Zion Tech Group to transform their global operations through AI-powered autonomous business operations. In just 90 days, we deployed 40+ autonomous workflows that eliminated 85% of manual processes and created $650M in annual value.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-900/60 to-emerald-900/60 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
                <DollarSign className="w-8 h-8 text-green-400 mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$650M</div>
                <div className="text-green-200 text-sm">Annual Value Creation</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                <TrendingUp className="w-8 h-8 text-blue-400 mb-2" />
                <div className="text-3xl font-bold text-white mb-1">85%</div>
                <div className="text-blue-200 text-sm">Cost Reduction</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <Zap className="w-8 h-8 text-purple-400 mb-2" />
                <div className="text-3xl font-bold text-white mb-1">99.7%</div>
                <div className="text-purple-200 text-sm">Accuracy Rate</div>
              </div>
              <div className="bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
                <Users className="w-8 h-8 text-orange-400 mb-2" />
                <div className="text-3xl font-bold text-white mb-1">3,611%</div>
                <div className="text-orange-200 text-sm">3-Year ROI</div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-400/30">
              <h2 className="text-3xl font-bold text-white mb-6">Executive Summary</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                A Fortune 100 financial services company with 80,000+ employees globally faced mounting operational challenges: 2.3M manual transactions per month, $420M in annual operational costs growing at 15% YoY, and a 3.2% error rate costing $45M annually.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed">
                Through our autonomous business operations platform, we transformed their entire enterprise in 12 months, with the initial deployment completed in just 90 days. The results exceeded all expectations: $650M in annual value creation, 85% cost reduction, 99.7% accuracy, and complete transformation of business operations across finance, HR, operations, sales, and support.
              </p>
            </div>
          </div>

          {/* The Challenge */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">The Challenge</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl p-8 border border-red-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Operational Inefficiencies</h3>
                <ul className="space-y-3 text-red-100">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span>2.3M manual transactions per month across 15 countries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span>5-7 days average processing time for routine operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span>3,500+ employees in back-office operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span>$420M annual operational costs with 15% YoY growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span>3.2% error rate costing $45M/year in remediation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/40 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Strategic Imperatives</h3>
                <ul className="space-y-3 text-yellow-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Reduce operational costs by 60%+ within 18 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Improve processing speed by 10x</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Achieve 99.5%+ accuracy across all operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Enable 24/7 global operations without offshore labor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Maintain regulatory compliance across all jurisdictions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">The Solution</h2>
            
            <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-400/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Autonomous Business Operations Platform</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                We deployed a comprehensive autonomous operations platform with five core layers:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Data & Integration Layer</h4>
                    <p className="text-blue-200 text-sm">Real-time event streams (Kafka processing 500K events/sec), 50TB data lake, 200+ enterprise system integrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">AI Agent Mesh</h4>
                    <p className="text-blue-200 text-sm">40+ specialized agents across business functions, 2,000+ agent instances across 3 regions, 99.97% uptime</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Decision Intelligence Engine</h4>
                    <p className="text-blue-200 text-sm">15-model ensemble, &lt;100ms latency, explainable AI for compliance, continuous learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Orchestration & Workflow Engine</h4>
                    <p className="text-blue-200 text-sm">Complex multi-step process management, intelligent exception handling, SLA monitoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Governance & Observability</h4>
                    <p className="text-blue-200 text-sm">Full audit trail, real-time dashboards, anomaly detection, compliance automation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/60 to-emerald-900/60 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">90-Day Implementation Timeline</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Phase 1: Discovery & Assessment (Days 1-30)</h4>
                  <p className="text-green-100 text-sm">Process mapping, data assessment, ROI modeling, architecture design</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Phase 2: Platform Build (Days 31-60)</h4>
                  <p className="text-green-100 text-sm">Infrastructure deployment, model training, system integration, security implementation</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Phase 3: Launch & Scale (Days 61-90)</h4>
                  <p className="text-green-100 text-sm">Pilot deployment of 5 workflows, validation, full-scale rollout to 40+ workflows</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Results */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">The Results: Transformational Impact</h2>
            
            {/* Financial Impact */}
            <div className="bg-gradient-to-br from-green-900/60 to-emerald-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-400/30 mb-8">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-green-400" />
                Financial Impact: $650M+ Annual Value
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-800/30 rounded-xl p-6 border border-green-400/30">
                  <div className="text-4xl font-bold text-green-300 mb-2">$443M</div>
                  <div className="text-green-100 font-semibold mb-3">Cost Savings</div>
                  <ul className="space-y-2 text-green-200 text-sm">
                    <li>• $320M labor costs</li>
                    <li>• $42M error remediation</li>
                    <li>• $38M infrastructure</li>
                    <li>• $43M other savings</li>
                  </ul>
                </div>
                
                <div className="bg-blue-800/30 rounded-xl p-6 border border-blue-400/30">
                  <div className="text-4xl font-bold text-blue-300 mb-2">$265M</div>
                  <div className="text-blue-100 font-semibold mb-3">Revenue Acceleration</div>
                  <ul className="space-y-2 text-blue-200 text-sm">
                    <li>• $95M faster deal cycles</li>
                    <li>• $62M improved win rates</li>
                    <li>• $48M cross-sell/upsell</li>
                    <li>• $60M other gains</li>
                  </ul>
                </div>
                
                <div className="bg-purple-800/30 rounded-xl p-6 border border-purple-400/30">
                  <div className="text-4xl font-bold text-purple-300 mb-2">$55M</div>
                  <div className="text-purple-100 font-semibold mb-3">Risk Reduction</div>
                  <ul className="space-y-2 text-purple-200 text-sm">
                    <li>• $25M compliance</li>
                    <li>• $18M fraud prevention</li>
                    <li>• $12M operational risk</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Operational Excellence */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Speed & Scale</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">10x Faster Processing</div>
                      <div className="text-blue-200 text-sm">5 days → 12 hours average</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">&lt;100ms Decision Latency</div>
                      <div className="text-blue-200 text-sm">Real-time operations</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">2x Transaction Volume</div>
                      <div className="text-blue-200 text-sm">2.3M → 4.8M/month capacity</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Quality & Accuracy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">99.7% Accuracy</div>
                      <div className="text-purple-200 text-sm">Across all workflows</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">97% Error Reduction</div>
                      <div className="text-purple-200 text-sm">3.2% → 0.1% error rate</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">98.5% SLA Compliance</div>
                      <div className="text-purple-200 text-sm">vs. 87% baseline</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Customer & Employee Impact */}
            <div className="bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">Customer & Employee Experience</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-4">Customer Impact</h4>
                  <ul className="space-y-2 text-orange-100">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>NPS: +32 points (38 → 70)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>CSAT: +28% (72% → 92%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>First Contact Resolution: +45%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-300 mb-4">Employee Impact</h4>
                  <ul className="space-y-2 text-red-100">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>92% employee satisfaction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>65% reduction in burnout</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>2,500+ employees reskilled</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Learnings */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Key Learnings & Best Practices</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
                <h3 className="text-xl font-bold text-white mb-4">✅ Critical Success Factors</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Executive Sponsorship:</strong> C-suite commitment with quarterly business reviews and protected budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Change Management:</strong> Transparent communication, comprehensive training, reskilling programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Technology Choices:</strong> Cloud-native, open-source, best-of-breed, modular design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Governance & Risk:</strong> Human-in-the-loop for high-risk decisions, comprehensive audit trails</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/60 to-orange-900/60 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30">
                <h3 className="text-xl font-bold text-white mb-4">⚠️ Pitfalls Avoided</h3>
                <ul className="space-y-3 text-yellow-100">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Started with 5 high-value workflows instead of trying to automate everything at once</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Involved employees in design rather than surprising them with automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Invested in data quality upfront to ensure accurate model training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Business-led transformation rather than treating as IT project</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Achieve similar results with our Autonomous Business Operations platform. Get started with a free consultation and custom ROI analysis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/services/autonomous-business-operations"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-white font-bold text-lg mb-2">🎁 Special Launch Offer</p>
                <p className="text-green-100">
                  50% OFF implementation + FREE 30-day proof of concept through December 2025
                </p>
              </div>
            </div>
          </div>

          {/* Related Content */}
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                to="/blog/ai-autonomous-business-operations-revolution-2025"
                className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all group"
              >
                <div className="text-blue-400 text-sm font-semibold mb-2 uppercase">Blog Post</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  The Complete Autonomous Operations Guide
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  22-minute deep dive with architecture, implementation patterns, and ROI framework
                </p>
                <div className="flex items-center text-blue-300 font-semibold text-sm">
                  Read Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link 
                to="/services/autonomous-business-operations"
                className="bg-gradient-to-br from-green-900/60 to-emerald-900/60 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all group"
              >
                <div className="text-green-400 text-sm font-semibold mb-2 uppercase">Service</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                  Autonomous Operations Platform
                </h3>
                <p className="text-green-100 text-sm mb-4">
                  Transform your enterprise in 90 days with guaranteed ROI
                </p>
                <div className="flex items-center text-green-300 font-semibold text-sm">
                  Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Fortune100AutonomousOperationsTransformation;
