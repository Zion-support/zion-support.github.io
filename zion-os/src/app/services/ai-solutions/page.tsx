"use client&quot;;

import { useState } from &quot;react&quot;;

interface AIService {
  id: string;
  name: string;
  description: string;
  technicalSpecs: string[];
  useCases: string[];
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  integration: string[];
}

const aiServices: AIService[] = [
  {
    id: &quot;zion-gpt-enterprise&quot;,
    name: &quot;ZionGPT Enterprise&quot;,
    description: &quot;Enterprise-grade AI assistant with custom knowledge base integration, advanced reasoning, and compliance features.&quot;,
    technicalSpecs: [
      &quot;GPT-4/Claude-3 integration&quot;,
      &quot;Custom fine-tuning capabilities&quot;,
      &quot;Multi-tenant architecture&quot;,
      &quot;Enterprise SSO integration&quot;,
      &quot;Real-time learning from feedback&quot;,
      &quot;Advanced prompt engineering&quot;
    ],
    useCases: [
      &quot;Customer support automation&quot;,
      &quot;Knowledge management&quot;,
      &quot;Document analysis and summarization&quot;,
      &quot;Code review and assistance&quot;,
      &quot;Research and data analysis&quot;,
      &quot;Training and onboarding&quot;
    ],
    pricing: &quot;Starting at $499/month&quot;,
    startingPrice: 499,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=ZionGPT%20Enterprise%20Inquiry&quot;,
    icon: &quot;🤖&quot;,
    features: [
      &quot;Custom knowledge base training&quot;,
      &quot;Multi-language support (100+ languages)&quot;,
      &quot;Advanced reasoning and problem-solving&quot;,
      &quot;API integration and webhooks&quot;,
      &quot;Real-time learning and adaptation&quot;,
      &quot;Enterprise security and compliance&quot;,
      &quot;Audit trails and logging&quot;,
      &quot;Custom branding and theming&quot;
    ],
    integration: [
      &quot;REST API with webhooks&quot;,
      &quot;Slack, Teams, Discord bots&quot;,
      &quot;Chrome extension&quot;,
      &quot;Mobile SDK (iOS/Android)&quot;,
      &quot;WordPress plugin&quot;,
      &quot;Shopify app&quot;
    ]
  },
  {
    id: &quot;ai-content-generation&quot;,
    name: &quot;AI Content Generation Suite&quot;,
    description: &quot;Comprehensive content creation platform for marketing, documentation, and creative writing with brand voice consistency.&quot;,
    technicalSpecs: [
      &quot;Multi-model AI integration&quot;,
      &quot;Brand voice training&quot;,
      &quot;SEO optimization&quot;,
      &quot;Plagiarism detection&quot;,
      &quot;Multi-format output&quot;,
      &quot;Collaborative editing&quot;
    ],
    useCases: [
      &quot;Marketing copy and campaigns&quot;,
      &quot;Blog posts and articles&quot;,
      &quot;Product descriptions&quot;,
      &quot;Email marketing&quot;,
      &quot;Social media content&quot;,
      &quot;Technical documentation&quot;
    ],
    pricing: &quot;Starting at $199/month&quot;,
    startingPrice: 199,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=AI%20Content%20Generation%20Inquiry&quot;,
    icon: &quot;✍️&quot;,
    features: [
      &quot;AI-powered content creation&quot;,
      &quot;Brand voice consistency&quot;,
      &quot;SEO optimization tools&quot;,
      &quot;Multi-language support&quot;,
      &quot;Content calendar management&quot;,
      &quot;Performance analytics&quot;,
      &quot;A/B testing capabilities&quot;,
      &quot;Team collaboration tools&quot;
    ],
    integration: [
      &quot;WordPress integration&quot;,
      &quot;Shopify product descriptions&quot;,
      &quot;Mailchimp email campaigns&quot;,
      &quot;Social media platforms&quot;,
      &quot;CMS systems&quot;,
      &quot;Marketing automation tools&quot;
    ]
  },
  {
    id: &quot;ai-data-analytics&quot;,
    name: &quot;AI-Powered Business Intelligence&quot;,
    description: &quot;Advanced analytics platform with predictive modeling, natural language queries, and automated insights generation.&quot;,
    technicalSpecs: [
      &quot;Machine learning models&quot;,
      &quot;Real-time data processing&quot;,
      &quot;Predictive analytics&quot;,
      &quot;Natural language queries&quot;,
      &quot;Automated reporting&quot;,
      &quot;Data visualization&quot;
    ],
    useCases: [
      &quot;Sales forecasting&quot;,
      &quot;Customer behavior analysis&quot;,
      &quot;Risk assessment&quot;,
      &quot;Performance optimization&quot;,
      &quot;Market trend analysis&quot;,
      &quot;Operational efficiency&quot;
    ],
    pricing: &quot;Starting at $599/month&quot;,
    startingPrice: 599,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=AI%20Analytics%20Inquiry&quot;,
    icon: &quot;📊&quot;,
    features: [
      &quot;Predictive analytics&quot;,
      &quot;Natural language queries&quot;,
      &quot;Automated reporting&quot;,
      &quot;Real-time dashboards&quot;,
      &quot;Data visualization&quot;,
      &quot;Custom ML models&quot;,
      &quot;Anomaly detection&quot;,
      &quot;Trend forecasting&quot;
    ],
    integration: [
      &quot;Database connectors&quot;,
      &quot;API integrations&quot;,
      &quot;BI tools (Tableau, Power BI)&quot;,
      &quot;CRM systems&quot;,
      &quot;ERP systems&quot;,
      &quot;Cloud data warehouses&quot;
    ]
  },
  {
    id: &quot;ai-automation&quot;,
    name: &quot;AI Process Automation&quot;,
    description: &quot;Intelligent automation platform for business processes, workflows, and repetitive tasks with learning capabilities.&quot;,
    technicalSpecs: [
      &quot;RPA with AI enhancement&quot;,
      &quot;Process mining&quot;,
      &quot;Workflow automation&quot;,
      &quot;Document processing&quot;,
      &quot;Decision automation&quot;,
      &quot;Learning algorithms&quot;
    ],
    useCases: [
      &quot;Invoice processing&quot;,
      &quot;Customer onboarding&quot;,
      &quot;Data entry automation&quot;,
      &quot;Report generation&quot;,
      &quot;Quality control&quot;,
      &quot;Compliance monitoring&quot;
    ],
    pricing: &quot;Starting at $399/month&quot;,
    startingPrice: 399,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=AI%20Automation%20Inquiry&quot;,
    icon: &quot;⚡&quot;,
    features: [
      &quot;Process mining and discovery&quot;,
      &quot;Workflow automation&quot;,
      &quot;Document processing&quot;,
      &quot;Decision automation&quot;,
      &quot;Learning and optimization&quot;,
      &quot;Integration capabilities&quot;,
      &quot;Monitoring and analytics&quot;,
      &quot;Compliance tracking&quot;
    ],
    integration: [
      &quot;ERP systems&quot;,
      &quot;CRM platforms&quot;,
      &quot;Accounting software&quot;,
      &quot;HR systems&quot;,
      &quot;Email platforms&quot;,
      &quot;Cloud services"
    ]
  }
];

export default function AISolutionsPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">AI Solutions & Services</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Cutting-edge artificial intelligence solutions designed to transform your business operations, 
          enhance productivity, and drive innovation across all departments.
        </p>
      </div>

      {/* AI Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {aiServices.map(service => (
          <div
            key={service.id}
            className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-6"
          >
            {/* Service Header */}
            <div className="text-center space-y-3">
              <div className="text-4xl">{service.icon}</div>
              <h2 className="text-2xl font-bold">{service.name}</h2>
              <p className="opacity-80">{service.description}</p>
              <div className="text-2xl font-bold text-blue-400">{service.pricing}</div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3 text-blue-400">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="font-semibold mb-3 text-purple-400">Technical Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-blue-400">⚙️</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="font-semibold mb-3 text-green-400">Use Cases</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">💡</span>
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration */}
            <div>
              <h3 className="font-semibold mb-3 text-orange-400">Integration Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.integration.map((integration, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">🔗</span>
                    <span>{integration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={service.contactLink}
                className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
              >
                Get Started
              </Link>
              <a
                href={`https://ziontechgroup.com/services/${service.id}`}
                className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* AI Capabilities Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">AI Capabilities Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-semibold mb-2">Natural Language Processing</h3>
            <p className="text-sm opacity-80">Advanced text analysis, generation, and understanding across multiple languages</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold mb-2">Computer Vision</h3>
            <p className="text-sm opacity-80">Image and video analysis, object detection, and visual content understanding</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold mb-2">Predictive Analytics</h3>
            <p className="text-sm opacity-80">Machine learning models for forecasting, trend analysis, and decision support</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-white/10">
        <h2 className="text-3xl font-bold">Ready to Harness the Power of AI?</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Let's discuss how our AI solutions can transform your business operations and drive innovation. 
          Get in touch for a personalized AI strategy consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI%20Solutions%20Consultation"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg"
          >
            Schedule AI Consultation
          </Link>
          <a
            href="tel:+13024640950"
            className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Call: +1 302 464 0950
          </Link>
        </div>
      </div>

      {/* Back to Services */}
      <div className="text-center">
        <a
          href="/services"
          className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
        >
          ← Back to All Services
        </Link>
      </div>
    </div>
  );
}