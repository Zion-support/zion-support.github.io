import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, TrendingUp, Shield, Zap, DollarSign, Users, BarChart } from 'lucide-react';
import Header from "../../components/Header";

const GlobalFinTechAITransformation = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Global FinTech AI Transformation: $127M Annual Value Creation | Zion Tech Group</title>
        <meta name="description" content="Fortune 500 digital banking platform achieves $127M annual value through AI transformation. 94.7% fraud detection, 15.2x ROI, 10x customer growth enabled." />
        <meta name="keywords" content="fintech AI, digital banking, fraud detection, AI transformation case study, financial services AI" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />

        <article className="container mx-auto px-6 py-20">
          <Link to="/case-studies" className="inline-flex items-center text-zion-cyan hover:text-zion-blue-light mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">
                ✅ Completed • October 2025
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                🏦 FinTech & Digital Banking
              </span>
              <span className="text-zion-slate-light">18-month engagement</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Global FinTech AI Transformation: <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mt-2">
                $127M Annual Value Creation
              </span>
            </h1>

            <p className="text-xl text-zion-slate-light leading-relaxed">
              A Fortune 500 digital banking platform achieved unprecedented growth through comprehensive AI transformation, 
              creating $127M in annual value while revolutionizing fraud detection, customer experience, and operational efficiency.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-8 w-8 text-green-400" />
                  <h3 className="text-xl font-bold text-green-300">Value Created</h3>
                </div>
                <div className="text-3xl font-bold text-white mb-2">$127M</div>
                <p className="text-green-300 text-sm">Annual value creation</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-300">Fraud Detection</h3>
                </div>
                <div className="text-3xl font-bold text-white mb-2">94.7%</div>
                <p className="text-blue-300 text-sm">Detection accuracy</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-300">ROI</h3>
                </div>
                <div className="text-3xl font-bold text-white mb-2">15.2x</div>
                <p className="text-purple-300 text-sm">Return on investment</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-orange-400" />
                  <h3 className="text-xl font-bold text-orange-300">Growth</h3>
                </div>
                <div className="text-3xl font-bold text-white mb-2">10x</div>
                <p className="text-orange-300 text-sm">Customer base expansion</p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">Challenge</h2>
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-600/50">
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  The client, a leading digital banking platform serving 2.3M customers across 47 countries, faced mounting 
                  pressure from fintech disruptors and traditional banks adopting AI. Key challenges included:
                </p>
                <ul className="space-y-4 text-zion-slate-light">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Fraud losses: </strong>$47M annually from sophisticated cyber attacks and identity theft</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Customer acquisition: </strong>High costs and slow growth in competitive markets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Operational efficiency: </strong>Manual processes causing delays and errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Regulatory compliance: </strong>Complex requirements across multiple jurisdictions</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">Solution</h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-8 border border-green-500/20">
                  <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-3">
                    <Shield className="h-6 w-6" />
                    AI-Powered Fraud Detection System
                  </h3>
                  <p className="text-zion-slate-light mb-4">
                    Deployed advanced machine learning models that analyze transaction patterns, user behavior, and risk signals 
                    in real-time to detect and prevent fraudulent activities.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 text-zion-slate-light">
                    <li>• Real-time transaction monitoring</li>
                    <li>• Behavioral biometrics analysis</li>
                    <li>• Risk scoring engine</li>
                    <li>• Automated fraud prevention</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    Intelligent Customer Acquisition
                  </h3>
                  <p className="text-zion-slate-light mb-4">
                    Implemented AI-driven marketing automation and customer segmentation to optimize acquisition campaigns 
                    and improve conversion rates.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 text-zion-slate-light">
                    <li>• Predictive customer modeling</li>
                    <li>• Personalized marketing campaigns</li>
                    <li>• Dynamic pricing optimization</li>
                    <li>• Customer lifetime value prediction</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                    <Zap className="h-6 w-6" />
                    Automated Operations Platform
                  </h3>
                  <p className="text-zion-slate-light mb-4">
                    Built comprehensive automation platform to streamline operations, reduce manual errors, and improve 
                    regulatory compliance across all business processes.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 text-zion-slate-light">
                    <li>• Automated loan processing</li>
                    <li>• Intelligent document verification</li>
                    <li>• Compliance monitoring</li>
                    <li>• Risk assessment automation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">Results</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold text-green-300 mb-6">Financial Impact</h3>
                  <ul className="space-y-4 text-zion-slate-light">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <span><strong>$127M annual value creation</strong> through increased revenue and cost savings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <span><strong>15.2x ROI</strong> on AI transformation investment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <span><strong>$47M fraud prevention</strong> annually</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <span><strong>67% reduction</strong> in operational costs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-blue-500/30">
                  <h3 className="text-2xl font-bold text-blue-300 mb-6">Operational Excellence</h3>
                  <ul className="space-y-4 text-zion-slate-light">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span><strong>94.7% fraud detection accuracy</strong> vs 73% previously</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span><strong>10x customer growth</strong> in target markets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span><strong>89% faster</strong> loan approval process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span><strong>100% regulatory compliance</strong> across all jurisdictions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">Technology Stack</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/50">
                  <h3 className="text-xl font-bold text-white mb-4">AI/ML Platform</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• TensorFlow & PyTorch</li>
                    <li>• Apache Spark</li>
                    <li>• MLflow</li>
                    <li>• Kubeflow</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/50">
                  <h3 className="text-xl font-bold text-white mb-4">Data Infrastructure</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Apache Kafka</li>
                    <li>• Elasticsearch</li>
                    <li>• PostgreSQL</li>
                    <li>• Redis</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/50">
                  <h3 className="text-xl font-bold text-white mb-4">Cloud & DevOps</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• AWS & Azure</li>
                    <li>• Kubernetes</li>
                    <li>• Docker</li>
                    <li>• GitLab CI/CD</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">Implementation Timeline</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-slate-800/30 rounded-xl border border-slate-600/30">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <span className="text-blue-300 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Months 1-3: Foundation</h3>
                    <p className="text-zion-slate-light">Data infrastructure setup, initial AI model development, and fraud detection system deployment</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-slate-800/30 rounded-xl border border-slate-600/30">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <span className="text-green-300 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Months 4-9: Expansion</h3>
                    <p className="text-zion-slate-light">Customer acquisition AI, operational automation, and advanced analytics implementation</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-slate-800/30 rounded-xl border border-slate-600/30">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                    <span className="text-purple-300 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Months 10-18: Optimization</h3>
                    <p className="text-zion-slate-light">Performance tuning, advanced features, and full-scale deployment across all markets</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">Client Testimonial</h2>
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-8 border border-green-500/20">
                <blockquote className="text-xl text-zion-slate-light italic mb-6">
                  "Zion Tech Group's AI transformation has revolutionized our business. The $127M annual value creation 
                  exceeded our expectations, and the 94.7% fraud detection accuracy has given us a significant competitive 
                  advantage. This partnership has positioned us as a leader in digital banking innovation."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CT</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Chief Technology Officer</div>
                    <div className="text-zion-slate-light">Global FinTech Platform</div>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your FinTech Platform?</h2>
              <p className="text-zion-slate-light mb-6 text-lg">
                Discover how Zion Tech Group can help you achieve similar results through AI transformation. 
                Our proven methodology delivers measurable ROI and competitive advantage.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all shadow-lg">
                Start Your AI Transformation
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default GlobalFinTechAITransformation;