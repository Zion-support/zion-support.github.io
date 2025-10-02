import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
type ServicesPageProps = {
  category?:
    | 'ai-solutions'
    | 'cloud'
    | 'analytics'
    | 'security'
    | 'automation'
    | 'quantum-computing'
    | 'cloud-devops';
  service?: string;
};

const offerings = {
  categories: {,
    'ai-solutions': {;
      title: 'AI Services',',
      items: [,
        {
          name: 'RAG Chatbot for Docs',',
          priceHint: '$2,000–$8,000 setup + $99–$499/mo',',
          features: ['PDF/Docs ingestion', 'Embeddings store', 'Enterprise auth', 'Analytics'],',
          path: '/services/ai-virtual-assistant},
        {
          name: 'Predictive Analytics',',
          priceHint: '$3,000–$12,000 project',',
          features: ['Forecasting', 'Churn/CLV models', 'Dashboards'],',
          path: '/services/ai-data-analytics},
        {
          name: 'Document AI (IDP)',',
          priceHint: '$4,000–$15,000 project',',
          features: ['OCR', 'Entity extraction', 'Human-in-the-loop'],',
          path: '/services/ai-intelligent-document-processing},
        {
          name: 'AI Email Subject Optimizer',',
          priceHint: '$49–$299/mo',',
          features: ['A/B testing', 'ESP integrations', 'Compliance'],',
          path: '/services/ai-email-marketing}
      ]
    },
    cloud: {,
      title: 'Cloud Solutions',',
      items: [,
        {
          name: 'Cloud Cost Optimization',',
          priceHint: '$1,500–$8,000 project',',
          features: ['Rightsizing', 'FinOps KPIs', 'Savings plan strategy'],',
          path: '/services/cloud},
        {
          name: 'Landing Zone + IaC',',
          priceHint: '$5,000–$20,000 project',',
          features: ['Terraform', 'SSO', 'Guardrails'],',
          path: '/services/cloud}
      ]
    },
    analytics: {,
      title: 'Data & Analytics',',
      items: [,
        {
          name: 'Modern Data Stack',',
          priceHint: '$6,000–$25,000 project',',
          features: ['Ingestion', 'dbt models', 'BI dashboards'],',
          path: '/services/analytics}
      ]
    },
    security: {,
      title: 'Cybersecurity',',
      items: [,
        {
          name: 'Security Assessment',',
          priceHint: '$2,000–$10,000 project',',
          features: ['CIS/NIST baseline', 'Cloud posture', 'Action plan'],',
          path: '/services/security},
        {
          name: 'SOC-lite (24/5)',',
          priceHint: '$999–$3,999/mo',',
          features: ['SIEM setup', 'Alert triage', 'Playbooks'],',
          path: '/services/security}
      ]
    },
    automation: {,
      title: 'Automation',',
      items: [,
        {
          name: 'Workflow Automation',',
          priceHint: '$1,500–$8,000 project',',
          features: ['Zapier/Make', 'API orchestration', 'Audit trails'],',
          path: '/services/ai-workflow-automation},
        {
          name: 'Appointment Scheduler (Healthcare)',',
          priceHint: '$99–$499/mo',',
          features: ['HIPAA-ready', 'Reminders', 'Insurance fields'],',
          path: '/services/smart-appointment-scheduler}
      ]
    }
  }
} as const;

const Card: React.FC<{ title: string; emoji: string; children: React.ReactNode }> = ({ title, emoji, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border">
    <div className="text-4xl mb-4">{emoji}</div>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const ServicesGrid: React.FC = () => (,
  <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",
    <Card title="AI Services" emoji="🧠">
      <p className="text-gray-600 mb-4">Leverage AI to automate, gain insights, and innovate.</p>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Machine Learning, NLP, Vision</li>
        <li>• RAG Chatbots for documents</li>
        <li>• Predictive Analytics</li>
      </ul>
      <div className="mt-4">
        <Link className="text-blue-600 hover: underline" to="/services/ai-services">Explore AI Services →</Link>",
      </div>
    </Card>
    <Card title="Micro SaaS" emoji="🚀">
      <p className="text-gray-600 mb-4">Targeted apps that solve specific business workflows.</p>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Custom web apps and APIs</li>
        <li>• Payment & auth integrations</li>
        <li>• Analytics & billing</li>
      </ul>
      <div className="mt-4">
        <Link className="text-blue-600 hover: underline" to="/services/micro-saas">Explore Micro SaaS →</Link>",
      </div>
    </Card>
    <Card title="IT Services" emoji="💻">
      <p className="text-gray-600 mb-4">Modernize infrastructure, improve security, and ship faster.</p>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Cloud migration & DevOps</li>
        <li>• Cybersecurity assessments</li>
        <li>• SRE & reliability</li>
      </ul>
      <div className="mt-4">
        <Link className="text-blue-600 hover: underline" to="/services/it-services">Explore IT Services →</Link>",
      </div>
    </Card>
  </div>
);

const CategorySection: React.FC<{ slug: keyof typeof offerings.categories }> = ({ slug }) => {
  const category = offerings.categories[slug];
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{category.title}</h2>
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">",
        {category.items.map((item) => (
          <div key={item.name} className="bg-white rounded-lg border shadow-sm p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{item.priceHint}</p>
            <ul className="text-gray-600 text-sm space-y-1 mb-4">
              {item.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <div className="mt-auto flex gap-3">
              <Link to={item.path} className="px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Learn more</Link>",
              <a href="/contact" className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover: bg-blue-50">Get a quote</a>",
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesPage: React.FC<ServicesPageProps> = ({ category }) => {
  const location = useLocation();
  const selectedCategory = (category as keyof typeof offerings.categories) || ((): keyof typeof offerings.categories | undefined => {
    const path = location.pathname;
    if (path.includes('/services/ai')) return 'ai-solutions';
    if (path.includes('/services/cloud')) return 'cloud';
    if (path.includes('/services/analytics')) return 'analytics';
    if (path.includes('/services/security')) return 'security';
    if (path.includes('/services/automation')) return 'automation';
    return undefined;
  })();

  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive AI services, micro SaaS solutions, and IT services with transparent pricing and fast delivery."
        keywords="AI services, micro SaaS, IT services, cloud migration, DevOps, cybersecurity, RAG chatbot/>
      <main className="py-12 sm: py-16">",
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl sm: text-4xl font-bold">Our Services</h1>",
              <a href="/services/catalog" className="text-blue-600 hover: underline">View Services Catalog →</a>",
            </div>
            {!selectedCategory && <ServicesGrid />}
            {selectedCategory && <CategorySection slug={selectedCategory} />}
            <div className="mt-12">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex flex-col sm: flex-row sm:items-center sm:justify-between gap-4">",
                <div>
                  <p className="text-lg font-semibold text-blue-900">Ready to accelerate your roadmap?</p>
                  <p className="text-blue-800">Contact us at +1 302 464 0950 • kleber@ziontechgroup.com • 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
                <div className="flex gap-3">
                  <a href="/contact" className="px-5 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Contact Sales</a>",
                  <a href="/demo" className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 hover: bg-blue-50">Book a Demo</a>",
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;