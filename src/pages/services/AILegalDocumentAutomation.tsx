import { FileText, Shield, Clock, Users, Check, ArrowRight, ExternalLink, Phone, Mail, Zap, Scale, Lock } from 'lucide-react';

export default function AILegalDocumentAutomation() {
  const features = [
    'AI-powered contract generation and review',
    'Legal compliance checking and validation',
    'Automated risk assessment and mitigation',
    'Multi-jurisdiction legal framework support',
    'Real-time legal document collaboration',
    'Advanced clause library and templates',
    'Automated contract renewal reminders',
    'Legal document version control and tracking',
    'Integration with e-signature platforms',
    'Comprehensive audit trail and reporting'
  ];

  const benefits = [
    'Reduce legal document creation time by 85%',
    'Minimize legal risks and compliance issues',
    'Cut legal costs by up to 60%',
    'Improve contract accuracy and consistency',
    'Enable faster deal closures and negotiations',
    'Provide 24/7 legal document assistance'
  ];

  const useCases = [
    'Contract management and automation',
    'Legal document review and analysis',
    'Compliance monitoring and reporting',
    'Risk assessment and mitigation',
    'Legal workflow optimization',
    'Regulatory compliance automation'
  ];

  const tiers = [
    {
      name: 'Starter',
      price: '$299/mo',
      details: [
        'Up to 50 documents/month',
        'Basic AI contract generation',
        'Standard legal templates',
        'Email support',
        'Basic compliance checking'
      ]
    },
    {
      name: 'Professional',
      price: '$799/mo',
      details: [
        'Up to 200 documents/month',
        'Advanced AI legal analysis',
        'Custom legal templates',
        'Priority support',
        'Multi-jurisdiction support',
        'Advanced risk assessment'
      ]
    },
    {
      name: 'Enterprise',
      price: '$1,999/mo',
      details: [
        'Unlimited documents',
        'Full AI legal automation',
        'Custom legal frameworks',
        'Dedicated legal support',
        'API integrations',
        'Advanced analytics & reporting'
      ]
    }
  ];

  const technicalSpecs = {
    technology: ['GPT-4', 'BERT', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['DocuSign', 'Adobe Sign', 'Salesforce', 'HubSpot', 'Microsoft 365'],
    security: ['SOC 2 Type II', 'GDPR', 'HIPAA', 'End-to-end encryption', 'Multi-factor authentication'],
    uptime: '99.9%',
    compliance: ['ISO 27001', 'SOC 2', 'GDPR', 'CCPA', 'HIPAA']
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Scale className="w-4 h-4 mr-2" /> AI-Powered Legal Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Legal Document Automation
          </h1>
          <p className="text-zion-slate-light text-xl">
            Transform your legal operations with AI-powered document automation, compliance checking, and risk assessment.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Key Features</h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Business Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <Zap className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
                <FileText className="w-6 h-6 text-zion-cyan mb-3" />
                <div className="text-zion-slate-dark font-semibold">{useCase}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
                <div className="text-lg font-semibold mb-1">{tier.name}</div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                <ul className="text-sm text-zion-slate-dark space-y-1">
                  {tier.details.map((detail) => (<li key={detail}>{detail}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Technical Specifications</h2>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSpecs.technology.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-4">Integrations</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSpecs.integrations.map((integration) => (
                    <span key={integration} className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-dark rounded-full text-sm">
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-zion-slate-dark mb-2">Security & Compliance</h4>
                <div className="space-y-1">
                  {technicalSpecs.security.map((sec) => (
                    <div key={sec} className="flex items-center text-sm text-zion-slate-dark">
                      <Lock className="w-4 h-4 text-zion-cyan mr-2" />
                      {sec}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-zion-slate-dark mb-2">Uptime</h4>
                <div className="text-2xl font-bold text-zion-cyan">{technicalSpecs.uptime}</div>
              </div>
              <div>
                <h4 className="font-semibold text-zion-slate-dark mb-2">Compliance Standards</h4>
                <div className="space-y-1">
                  {technicalSpecs.compliance.map((comp) => (
                    <div key={comp} className="flex items-center text-sm text-zion-slate-dark">
                      <Shield className="w-4 h-4 text-zion-cyan mr-2" />
                      {comp}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="text-sm text-zion-slate-light mb-2">Ready to automate your legal operations?</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-zion-cyan text-white rounded-lg">
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-zion-cyan text-zion-cyan rounded-lg">
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4">
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-dark">
              Learn More <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}