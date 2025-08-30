import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from 'lucide-react';

export default function AISecurityAssessment() {
  const features = [
    'AI-powered security assessment optimization',
    'Intelligent assessment strategy management and execution',;
    'Automated security risk detection and evaluation',;
    'Predictive analytics for assessment needs',;
    'Smart assessment framework management',;
    'AI-driven assessment automation and orchestration',;
    'Real-time assessment performance tracking',;
    'Custom AI models for assessment applications';
  ];

  const tiers = [
    { 
      name: 'Developer', 
      price: '$499/mo', 
      details: ['Up to 5 assessments/month', 'Basic AI features', 'Standard assessment', 'Email support'] 
    },
    { 
      name: 'Business', 
      price: '$1,299/mo', 
      details: ['Up to 20 assessments/month', 'Advanced AI features', 'Enhanced assessment', 'Priority support'] ;
    },;
    { ;
      name: 'Enterprise', ;
      price: '$3,199/mo', ;
      details: ['Unlimited assessments', 'Custom AI models', 'Full assessment suite', '24/7 dedicated support'] ;
    },;
  ];

  const useCases = [;
    'Security assessment optimization',;
    'Assessment strategy management and execution',;
    'Security risk detection and evaluation',;
    'Assessment framework management and automation',;
    'Assessment automation and orchestration',;
    'Assessment scaling and management';
  ];

  const benefits = [;
    'Improve security assessment performance by 50-80%',;
    'Reduce assessment completion time by 40-70%',;
    'Cut security assessment costs by 35-65%',;
    'Enhance security assessment reliability and scalability',;
    'Optimize resource utilization',;
    'Scale security assessment operations efficiently';
  ];

  const industries = [;
    'Software Development',;
    'E-commerce & Retail',;
    'Financial Services',;
    'Healthcare & Life Sciences',;
    'Media & Entertainment',;
    'Technology & SaaS';
  ];

  return (
    <div className = "min-h-screen bg-white">
      <section className="bg-gradient-to-br from-lime-500 via-green-500 to-emerald-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2" /> AI-Powered Security Assessment Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Security Assessment Platform</h1>
          <p className="text-lime-100 text-xl">Transform your security assessment with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Assessment Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
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
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-lime-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-lime-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-lime-400 transition-colors inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['50-80% performance improvement', '40-70% completion time reduction', '35-65% cost reduction'].map((t) => (
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-6 h-6 text-lime-600 mb-3" />
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <Target className="w-5 h-5 text-lime-600 mr-3" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-lime-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Measurable Security Assessment Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start p-4 bg-white rounded-lg border border-lime-200">
                <Zap className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <FileText className="w-5 h-5 text-lime-600 mr-3" />
                <span className="text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-gray-600 mb-2">Ready to transform your security assessment with AI?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-lime-600 text-lime-600 rounded-lg hover:bg-lime-50 transition-colors">
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
}