import React from 'react';
import { FileText, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Search, Shield, Zap, BarChart3 export default function AIDocumentIntelligence() {
  const features = [
    'Advanced OCR with 99.5% accuracy across 50+ languages',Intelligent document classification and routing',;
    'AI-powered data extraction from complex forms',;
    'Automated compliance checking and validation',;
    'Real-time document processing and indexing',;
    'Secure cloud storage with enterprise-grade encryption',;
    'Custom workflow automation for document approval',;
    'Integration with major business applications';
  ];

  const tiers = [
    {

      name: 'Basic',
      price: '$149/mo',
      details: ['Up to 1,000 pages/month',5 user accounts',Basic OCR & extraction',Email support']
    },
    {

      name: 'Professional',
      price: '$399/mo',
      details: ['Up to 10,000 pages/month',25 user accounts',Advanced AI features',Priority support'] ;
    },;
    { ;
      name: 'Enterprise', ;
      price: '$999/mo', ;
      details: ['Unlimited pages',Unlimited users',Custom AI models',24/7 dedicated support'] ;
    },;
  ];

  const useCases = [;
    'Invoice processing and expense management',;
    'Contract analysis and legal document review',;
    'Insurance claims processing and validation',;
    'Healthcare records and medical documentation',;
    'Financial statements and compliance reports',;
    'HR documents and employee onboarding';
  ];

  const benefits = [;
    'Reduce manual data entry by 80-90%',;
    'Improve processing accuracy by 95%',;
    'Cut document processing costs by 60%',;
    'Accelerate approval workflows by 5x',;
    'Ensure 100% compliance with regulations',;
    'Scale operations without additional headcount';
  ];

  return()
    <div className = "min-h-screen bg-white">"
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-20 text-center">"
        <div className="max-w-5xl mx-auto px-6">"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">"
            <FileText className="w-4 h-4 mr-2" /> Intelligent Document Processing & Analysis
          </div>"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Document Intelligence Platform</h1>"          <p className="text-teal-100 text-xl">Transform your document workflows with AI-powered intelligence that understands, extracts, and processes information with human-like accuracy.</p>
        </div>
      </section>
"
      <section className="py-16 max-w-6xl mx-auto px-6">"
        <div className="grid md:grid-cols-2 gap-10">
          <div>"
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cutting-Edge Features</h2>"
            <ul className="space-y-3">
              {features.map((f) => ("
                <li key={f} className="flex items-start">"
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />"                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>"
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 Type II compliance, and 99.9% uptime SLA.
            </div>
          </div>"
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">"
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>"
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => ("
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-emerald-300 transition-colors">"
                  <div className="text-lg font-semibold mb-1">{t.name}</div>"
                  <div className="text-2xl font-bold text-emerald-600 mb-2">{t.price}</div>"
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>"
            <div className="mt-6 flex flex-wrap gap-3">"
              <a href="/pricing" className="px-5 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center">"
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>"
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-emerald-400 transition-colors inline-flex items-center">"
                Learn More <ExternalLink className="w-4 h-4 ml-2" />              </a>
            </div>
          </div>
        </div>
"
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['99.5% OCR accuracy',Real-time processing',Enterprise security'].map((t) => ("
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">"
              <Brain className="w-6 h-6 text-emerald-600 mb-3" />"              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>
"
        <div className="mt-16 bg-gray-50 rounded-xl p-8">"
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>"
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => ("
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">"
                <Search className="w-5 h-5 text-emerald-600 mr-3" />"                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
"
        <div className="mt-16 bg-emerald-50 rounded-xl p-8">"
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Measurable Business Impact</h3>"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => ("
              <div key={benefit} className="flex items-start p-4 bg-white rounded-lg border border-emerald-200">"
                <Zap className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />"                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
"
        <div className="mt-14 text-center">"
          <div className="text-sm text-gray-600 mb-2">Ready to transform your document processing?</div>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">"
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>"
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">"
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com            </a>
          </div>;"
          <div className="mt-4 text-sm text-gray-500">;
            Address: 364 E Main St STE 1008, Middletown DE 19709;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}}'"