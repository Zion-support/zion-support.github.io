import { Scale, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, FileText, Zap, Shield, Gavel, BarChart3 export default function AILegalTech(...args: any[]): any {
  const features = [
    'AI-powered contract analysis and risk assessment',
    'Intelligent legal document generation and review',;
    'Automated compliance monitoring and reporting',;
    'Predictive analytics for case outcomes',;
    'Legal research automation and citation checking',;
    'Bias-free legal document screening',;
    'Integration with major legal management platforms',;
    'Custom AI models for specialized legal domains';
  ];
  const tiers = [
    {
      name: 'Solo Practice',
      price: '$299/mo',
      details: ['Up to 100 documents/month', 'Basic AI analysis', 'Standard templates', 'Email support']
    },
    { 
      name: 'Small Firm', 
      price: '$799/mo', 
      details: ['Up to 500 documents/month', 'Advanced AI features', 'Custom templates', 'Priority support'] ;
    },;
    { ;
      name: 'Enterprise', ;
      price: '$1,999/mo', ;
      details: ['Unlimited documents', 'Custom AI models', 'Full platform integration', '24/7 dedicated support'] ;
    },;
  ];
  const useCases = [;
    'Contract review and risk assessment',;
    'Legal document automation',;
    'Compliance monitoring and reporting',;
    'Legal research and case preparation',;
    'Due diligence and discovery',;
    'Regulatory compliance management';
  ];
  const benefits = [;
    'Reduce document review time by 70-85%',;
    'Improve accuracy and consistency by 90%',;
    'Cut legal costs by 30-50%',;
    'Accelerate contract negotiations by 3-5x',;
    'Enhance compliance and risk management',;
    'Scale legal operations without additional staff';
  ];
  const industries = [;
    'Corporate Law',;
    'Real Estate Law',;
    'Healthcare Law',;
    'Financial Services',;
    'Technology & IP',;
    'Government & Public Sector';
  ];
  return (
    <div className = "min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-600 via-gray-600 to-zinc-600 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Scale className="w-4 h-4 mr-2" /> AI-Powered Legal Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Legal Tech Platform</h1>
          <p className="text-gray-100 text-xl">Revolutionize your legal practice with AI-powered tools that automate document review, enhance accuracy, and accelerate legal workflows.</p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Legal Tech Features</h2>
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
            <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-4">
              {tiers.map((t)              => (
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-slate-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-slate-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-slate-400 transition-colors inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['70-85% time savings', '90% accuracy improvement', '30-50% cost reduction'].map((t) => (
=======

        <div className="mt-12 grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-6">
          {['70-85% time savings', '90% accuracy improvement', '30-50% cost reduction'].map((t)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-6 h-6 text-slate-600 mb-3" />
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-6">
            {useCases.map((useCase)              => (
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <Target className="w-5 h-5 text-slate-600 mr-3" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 bg-slate-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Measurable Business Impact</h3>
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit)              => (
              <div key={benefit} className="flex items-start p-4 bg-white rounded-lg border border-slate-200">
                <Zap className="w-5 h-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industries We Serve</h3>
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry)              => (
              <div key={industry} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <Gavel className="w-5 h-5 text-slate-600 mr-3" />
                <span className="text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 text-center">
          <div className="text-sm text-gray-600 mb-2">Ready to transform your legal practice?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-slate-600 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
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