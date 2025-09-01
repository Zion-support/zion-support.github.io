import React from 'react';
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 export default function AIEdgeComputing() {
  const features = [
    'AI-powered edge optimization',
    'Intelligent edge device management',;
    'Automated edge monitoring and alerting',;
    'Predictive analytics for edge scaling',;
    'Smart edge security and compliance',;
    'AI-driven edge automation and orchestration',;
    'Real-time edge analytics and insights',;
    'Custom AI models for edge applications';
  ];

  const tiers = [
    {
      name: 'Developer',
      price: '$399/mo',
      details: ['Up to 100GB storage', 'Basic AI features', 'Standard monitoring', 'Email support']
    },
    { 
      name: 'Business', 
      price: '$999/mo', 
      details: ['Up to 1TB storage', 'Advanced AI features', 'Enhanced monitoring', 'Priority support'] ;
    },;
    { ;
      name: 'Enterprise', ;
      price: '$2,499/mo', ;
      details: ['Unlimited storage', 'Custom AI models', 'Full edge suite', '24/7 dedicated support'] ;
    },;
  ];

  const useCases = [;
    'Edge optimization',;
    'Edge device management',;
    'Performance monitoring and analytics',;
    'Security and compliance monitoring',;
    'Automation and orchestration',;
    'Edge scaling and management';
  ];

  const benefits = [;
    'Improve edge performance by 50-80%',;
    'Reduce edge processing time by 40-70%',;
    'Cut operational costs by 35-65%',;
    'Enhance edge reliability and scalability',;
    'Optimize resource utilization',;
    'Scale edge operations efficiently';
  ];

  const industries = [;
    'Software Development',;
    'E-commerce & Retail',;
    'Financial Services',;
    'Healthcare & Life Sciences',;
    'Media & Entertainment',;
    'Technology & SaaS';
  ];

  return 
    <div className = "min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2" /> AI-Powered Edge Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Edge Computing Platform</h1>
          <p className="text-green-100 text-xl">Transform your edge operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Edge Features</h2>
            <ul className="space-y-3">
              {features.map((f (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map(t: unknown 
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-green-400 transition-colors inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['50-80% performance improvement', '40-70% processing time reduction', '35-65% cost reduction'].map(t: unknown (
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-6 h-6 text-green-600 mb-3" />
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map(useCase: unknown (
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <Target className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-green-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Measurable Edge Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(benefit: unknown (
              <div key={benefit} className="flex items-start p-4 bg-white rounded-lg border border-green-200">
                <Zap className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(industry: unknown (
              <div key={industry} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <FileText className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-gray-600 mb-2">Ready to transform your edge operations with AI?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>;
          <div className="mt-4 text-sm text-gray-500">;
            Address: 364 E Main St STE 1008, Middletown DE 19709;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}}