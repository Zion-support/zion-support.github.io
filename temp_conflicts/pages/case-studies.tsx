import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function CaseStudies() {_const _caseStudies = [
    {
      id: 'enterprise-ai-transformation', _title: 'Enterprise AI Transformation', _company: 'Global Manufacturing Corp', _industry: 'Manufacturing', _challenge: 'Complex supply chain management with 50+ locations worldwide, _manual processes causing delays and inefficiencies.', _solution: 'Implemented AI Autonomous Business Manager with predictive analytics and automated decision-making.', _results: [
        '40% reduction in supply chain delays', _'25% improvement in inventory management', _'30% cost savings in operations', _'99.9% uptime achieved'
      ], _technologies: ['AI/ML', _'Predictive Analytics', _'Automation', _'Cloud Infrastructure'], _duration: '6 months', _roi: '300%', _image: '🏭'},
    {_id: 'cybersecurity-automation', _title: 'Cybersecurity Automation Platform', _company: 'Financial Services Inc', _industry: 'Financial Services', _challenge: 'Increasing cyber threats, _manual security monitoring, _compliance requirements, _and 24/7 security operations.', _solution: 'Deployed AI-Powered Enterprise Security with autonomous threat detection and response.', _results: [
        '95% faster threat detection', _'80% reduction in false positives', _'100% compliance achievement', _'Zero security breaches'
      ], _technologies: ['AI Security', _'Threat Intelligence', _'Automation', _'Compliance'], _duration: '4 months', _roi: '400%', _image: '🔒'},
    {_id: 'ai-content-automation', _title: 'AI Content Creation Revolution', _company: 'Digital Marketing Agency', _industry: 'Marketing & Advertising', _challenge: 'High content creation costs, _inconsistent quality, _slow turnaround times, _and scaling challenges.', _solution: 'Integrated AI Content Generation Platform with personalized content creation and optimization.', _results: [
        '70% reduction in content creation time', _'60% improvement in content quality', _'3x increase in content output', _'45% cost savings'
      ], _technologies: ['NLP', _'Content AI', _'Personalization', _'Analytics'], _duration: '3 months', _roi: '250%', _image: '📝'},
    {_id: 'quantum-computing-research', _title: 'Quantum Computing Research Platform', _company: 'Research Institute', _industry: 'Research & Development', _challenge: 'Complex computational problems, _limited computing resources, _and need for breakthrough research capabilities.', _solution: 'Deployed Quantum Cloud Infrastructure with AI-powered research automation.', _results: [
        '1000x faster computation for specific problems', _'Breakthrough discoveries in 3 research areas', _'50% reduction in research time', _'New patent applications filed'
      ], _technologies: ['Quantum Computing', _'AI Research', _'Cloud Native', _'Research Automation'], _duration: '12 months', _roi: '500%', _image: '⚛️'},
    {_id: 'healthcare-ai-diagnostics', _title: 'Healthcare AI Diagnostics System', _company: 'Regional Medical Center', _industry: 'Healthcare', _challenge: 'High diagnostic error rates, _long wait times, _limited specialist availability, _and increasing patient load.', _solution: 'Implemented AI Autonomous Healthcare Physician with diagnostic assistance and patient monitoring.', _results: [
        '90% reduction in diagnostic errors', _'60% faster diagnosis times', _'40% improvement in patient outcomes', _'24/7 diagnostic availability'
      ], _technologies: ['Medical AI', _'Computer Vision', _'Diagnostics', _'Patient Monitoring'], _duration: '8 months', _roi: '350%', _image: '🏥'},
    {_id: 'blockchain-analytics-platform', _title: 'Blockchain Analytics & Governance', _company: 'Cryptocurrency Exchange', _industry: 'Blockchain & Finance', _challenge: 'Complex blockchain transactions, _regulatory compliance, _fraud detection, _and market analysis needs.', _solution: 'Built AI Blockchain Analytics platform with governance and compliance automation.', _results: [
        '99.9% fraud detection accuracy', _'Real-time compliance monitoring', _'50% reduction in regulatory reporting time', _'Enhanced market insights'
      ], _technologies: ['Blockchain', _'AI Analytics', _'Compliance', _'Real-time Processing'], _duration: '5 months', _roi: '280%', _image: '⛓️'}
  ];

  return (_<>
      <Head>
        <title>Case Studies - Zion Tech Group | Client Success Stories & AI Implementations</title>
        <meta name="description" content="Explore real-world case studies of Zion Tech Group's AI solutions. See how we've transformed businesses across industries with autonomous technology." />
        <meta name="keywords" content="case studies, _AI implementations, _client success stories, _business transformation, _Zion Tech Group" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world examples of AI transformation and business success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <SmartHeader />
        
        <main id="main-content" className="pt-16">
          {_/* Hero Section */}
          <section className="relative py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                  Case Studies
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
                  Real-world transformations powered by our AI solutions. See how we've revolutionized businesses across industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/services" 
                    className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Explore Our Services
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {_/* Stats Section */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-7xl">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-fuchsia-400 mb-2">50+</div>
                  <div className="text-white/70">Successful Implementations</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-white/70">Industries Served</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-white/70">Average ROI</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-white/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </section>

          {_/* Case Studies Grid */}
          <section className="py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Featured Success Stories</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Discover how our AI solutions have transformed businesses and delivered measurable results
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {_caseStudies.map((study) => (_<div key={study.id} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:border-fuchsia-500/30 transition-all duration-300 hover:scale-105">
                    <div className="p-6">
                      <div className="text-4xl mb-4">{_study.image}</div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-medium mb-4">
                        {_study.industry}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{_study.title}</h3>
                      <p className="text-white/60 text-sm mb-4">{_study.company}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">Challenge:</h4>
                          <p className="text-white/70 text-sm">{_study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">Solution:</h4>
                          <p className="text-white/70 text-sm">{_study.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold text-sm mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {_study.results.map((result, _index) => (
                            <li key={index} className="text-white/70 text-sm flex items-start">
                              <span className="text-green-400 mr-2 mt-1">✓</span>
                              {_result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-white/60">Duration:</span>
                          <div className="text-white font-semibold">{_study.duration}</div>
                        </div>
                        <div>
                          <span className="text-white/60">ROI:</span>
                          <div className="text-white font-semibold">{_study.roi}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold text-sm mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {_study.technologies.map(_(tech, _index) => (
                            <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                              {_tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link 
                        href={_`/case-studies/${study.id}`}
                        className="w-full px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center block"
                      >
                        Read Full Case Study
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {_/* Industry Focus */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Industries We Transform</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Our AI solutions are designed to work across diverse industries and business models
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏭</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Manufacturing</h3>
                  <p className="text-white/60 text-sm">Supply chain optimization, predictive maintenance, quality control</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏦</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Financial Services</h3>
                  <p className="text-white/60 text-sm">Risk management, fraud detection, compliance automation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏥</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Healthcare</h3>
                  <p className="text-white/60 text-sm">Diagnostic assistance, patient monitoring, research automation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📱</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Technology</h3>
                  <p className="text-white/60 text-sm">AI development, automation, cloud infrastructure</p>
                </div>
              </div>
            </div>
          </section>

          {_/* Testimonials */}
          <section className="py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Real feedback from businesses that have transformed with our AI solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👨‍💼</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">John Smith</div>
                      <div className="text-white/60 text-sm">CTO, Global Manufacturing</div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    "Zion Tech Group's AI solution transformed our operations completely. We've seen a 40% reduction in delays and 25% improvement in efficiency. The autonomous decision-making capabilities are game-changing."
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👩‍💼</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Sarah Johnson</div>
                      <div className="text-white/60 text-sm">CEO, Digital Marketing Agency</div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    "The AI content generation platform has revolutionized our business. We're producing 3x more content with 60% better quality. Our clients are amazed by the results."
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👨‍🔬</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Dr. Michael Chen</div>
                      <div className="text-white/60 text-sm">Research Director, Institute</div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    "The quantum computing platform has accelerated our research by 1000x. We've made breakthrough discoveries that would have taken years with traditional methods."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {_/* CTA Section */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join the growing list of companies transforming their business with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Transformation
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </section>
        </main>

        <SmartFooter />
      </div>
    </>
  );
}
