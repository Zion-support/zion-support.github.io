<<<<<<< HEAD
"use client",

import { useState } from "react",
interface AIService {
  id: string,
  name: string,
  description: string,
  technicalSpecs: string[],
  useCases: string[],
  pricing: string,
  startingPrice: number,
  contactLink: string,
  icon: string,
  features: string[],
  integration: string[]
}

const aiServices: AIService[] = [
  {
    id: "zion-gpt-enterprise",
    name: "ZionGPT Enterprise",
    description: "Enterprise-grade AI assistant with custom knowledge base integration, advanced reasoning, and compliance features.",
    technicalSpecs: [
      "GPT-4/Claude-3 integration",
      "Custom fine-tuning capabilities",
      "Multi-tenant architecture",
      "Enterprise SSO integration",
      "Real-time learning from feedback",
      "Advanced prompt engineering"
    ],
    useCases: [
      "Customer support automation",
      "Knowledge management",
      "Document analysis and summarization",
      "Code review and assistance",
      "Research and data analysis",
      "Training and onboarding"
    ],
    pricing: "Starting at $499/month",
    startingPrice: 499,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=ZionGPT%20Enterprise%20Inquiry",
    icon: "🤖",
    features: [
      "Custom knowledge base training",
      "Multi-language support (100+ languages)",
      "Advanced reasoning and problem-solving",
      "API integration and webhooks",
      "Real-time learning and adaptation",
      "Enterprise security and compliance",
      "Audit trails and logging",
      "Custom branding and theming"
    ],
    integration: [
      "REST API with webhooks",
      "Slack, Teams, Discord bots",
      "Chrome extension",
      "Mobile SDK (iOS/Android)",
      "WordPress plugin",
      "Shopify app"
    ]
  },
  {
    id: "ai-content-generation",
    name: "AI Content Generation Suite",
    description: "Comprehensive content creation platform for marketing, documentation, and creative writing with brand voice consistency.",
    technicalSpecs: [
      "Multi-model AI integration",
      "Brand voice training",
      "SEO optimization",
      "Plagiarism detection",
      "Multi-format output",
      "Collaborative editing"
    ],
    useCases: [
      "Marketing copy and campaigns",
      "Blog posts and articles",
      "Product descriptions",
      "Email marketing",
      "Social media content",
      "Technical documentation"
    ],
    pricing: "Starting at $199/month",
    startingPrice: 199,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Content%20Generation%20Inquiry",
    icon: "✍️",
    features: [
      "AI-powered content creation",
      "Brand voice consistency",
      "SEO optimization tools",
      "Multi-language support",
      "Content calendar management",
      "Performance analytics",
      "A/B testing capabilities",
      "Team collaboration tools"
    ],
    integration: [
      "WordPress integration",
      "Shopify product descriptions",
      "Mailchimp email campaigns",
      "Social media platforms",
      "CMS systems",
      "Marketing automation tools"
    ]
  },
  {
    id: "ai-data-analytics",
    name: "AI-Powered Business Intelligence",
    description: "Advanced analytics platform with predictive modeling, natural language queries, and automated insights generation.",
    technicalSpecs: [
      "Machine learning models",
      "Real-time data processing",
      "Predictive analytics",
      "Natural language queries",
      "Automated reporting",
      "Data visualization"
    ],
    useCases: [
      "Sales forecasting",
      "Customer behavior analysis",
      "Risk assessment",
      "Performance optimization",
      "Market trend analysis",
      "Operational efficiency"
    ],
    pricing: "Starting at $599/month",
    startingPrice: 599,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Analytics%20Inquiry",
    icon: "📊",
    features: [
      "Predictive analytics",
      "Natural language queries",
      "Automated reporting",
      "Real-time dashboards",
      "Data visualization",
      "Custom ML models",
      "Anomaly detection",
      "Trend forecasting"
    ],
    integration: [
      "Database connectors",
      "API integrations",
      "BI tools (Tableau, Power BI)",
      "CRM systems",
      "ERP systems",
      "Cloud data warehouses"
    ]
  },
  {
    id: "ai-automation",
    name: "AI Process Automation",
    description: "Intelligent automation platform for business processes, workflows, and repetitive tasks with learning capabilities.",
    technicalSpecs: [
      "RPA with AI enhancement",
      "Process mining",
      "Workflow automation",
      "Document processing",
      "Decision automation",
      "Learning algorithms"
    ],
    useCases: [
      "Invoice processing",
      "Customer onboarding",
      "Data entry automation",
      "Report generation",
      "Quality control",
      "Compliance monitoring"
    ],
    pricing: "Starting at $399/month",
    startingPrice: 399,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Automation%20Inquiry",
    icon: "⚡",
    features: [
      "Process mining and discovery",
      "Workflow automation",
      "Document processing",
      "Decision automation",
      "Learning and optimization",
      "Integration capabilities",
      "Monitoring and analytics",
      "Compliance tracking"
    ],
    integration: [
      "ERP systems",
      "CRM platforms",
      "Accounting software",
      "HR systems",
      "Email platforms",
      "Cloud services"
    ]
  }
],

export default function AISolutionsPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null),
=======
"use client";


interface AIService {_id: string;
  name: string;
  description: string;
  technicalSpecs: string[];
  useCases: string[];
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  integration: string[];}

const aiServices: AIService[] = [
  {_id: "zion-gpt-enterprise", _name: "ZionGPT Enterprise", _description: "Enterprise-grade AI assistant with custom knowledge base integration, _advanced reasoning, _and compliance features.", _technicalSpecs: [
      "GPT-4/Claude-3 integration", _"Custom fine-tuning capabilities", _"Multi-tenant architecture", _"Enterprise SSO integration", _"Real-time learning from feedback", _"Advanced prompt engineering"
    ], _useCases: [
      "Customer support automation", _"Knowledge management", _"Document analysis and summarization", _"Code review and assistance", _"Research and data analysis", _"Training and onboarding"
    ], _pricing: "Starting at $499/month", _startingPrice: 499, _contactLink: "mailto:kleber@ziontechgroup.com?subject=ZionGPT%20Enterprise%20Inquiry", _icon: "🤖", _features: [
      "Custom knowledge base training", _"Multi-language support (100+ languages)", _"Advanced reasoning and problem-solving", _"API integration and webhooks", _"Real-time learning and adaptation", _"Enterprise security and compliance", _"Audit trails and logging", _"Custom branding and theming"
    ], _integration: [
      "REST API with webhooks", _"Slack, _Teams, _Discord bots", _"Chrome extension", _"Mobile SDK (iOS/Android)", _"WordPress plugin", _"Shopify app"
    ]},
  {_id: "ai-content-generation", _name: "AI Content Generation Suite", _description: "Comprehensive content creation platform for marketing, _documentation, _and creative writing with brand voice consistency.", _technicalSpecs: [
      "Multi-model AI integration", _"Brand voice training", _"SEO optimization", _"Plagiarism detection", _"Multi-format output", _"Collaborative editing"
    ], _useCases: [
      "Marketing copy and campaigns", _"Blog posts and articles", _"Product descriptions", _"Email marketing", _"Social media content", _"Technical documentation"
    ], _pricing: "Starting at $199/month", _startingPrice: 199, _contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Content%20Generation%20Inquiry", _icon: "✍️", _features: [
      "AI-powered content creation", _"Brand voice consistency", _"SEO optimization tools", _"Multi-language support", _"Content calendar management", _"Performance analytics", _"A/B testing capabilities", _"Team collaboration tools"
    ], _integration: [
      "WordPress integration", _"Shopify product descriptions", _"Mailchimp email campaigns", _"Social media platforms", _"CMS systems", _"Marketing automation tools"
    ]},
  {_id: "ai-data-analytics", _name: "AI-Powered Business Intelligence", _description: "Advanced analytics platform with predictive modeling, _natural language queries, _and automated insights generation.", _technicalSpecs: [
      "Machine learning models", _"Real-time data processing", _"Predictive analytics", _"Natural language queries", _"Automated reporting", _"Data visualization"
    ], _useCases: [
      "Sales forecasting", _"Customer behavior analysis", _"Risk assessment", _"Performance optimization", _"Market trend analysis", _"Operational efficiency"
    ], _pricing: "Starting at $599/month", _startingPrice: 599, _contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Analytics%20Inquiry", _icon: "📊", _features: [
      "Predictive analytics", _"Natural language queries", _"Automated reporting", _"Real-time dashboards", _"Data visualization", _"Custom ML models", _"Anomaly detection", _"Trend forecasting"
    ], _integration: [
      "Database connectors", _"API integrations", _"BI tools (Tableau, _Power BI)", _"CRM systems", _"ERP systems", _"Cloud data warehouses"
    ]},
  {_id: "ai-automation", _name: "AI Process Automation", _description: "Intelligent automation platform for business processes, _workflows, _and repetitive tasks with learning capabilities.", _technicalSpecs: [
      "RPA with AI enhancement", _"Process mining", _"Workflow automation", _"Document processing", _"Decision automation", _"Learning algorithms"
    ], _useCases: [
      "Invoice processing", _"Customer onboarding", _"Data entry automation", _"Report generation", _"Quality control", _"Compliance monitoring"
    ], _pricing: "Starting at $399/month", _startingPrice: 399, _contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Automation%20Inquiry", _icon: "⚡", _features: [
      "Process mining and discovery", _"Workflow automation", _"Document processing", _"Decision automation", _"Learning and optimization", _"Integration capabilities", _"Monitoring and analytics", _"Compliance tracking"
    ], _integration: [
      "ERP systems", _"CRM platforms", _"Accounting software", _"HR systems", _"Email platforms", _"Cloud services"
    ]}
];

export default function AISolutionsPage() {_const [selectedService, _setSelectedService] = useState<string | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">AI Solutions & Services</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Cutting-edge artificial intelligence solutions designed to transform your business operations, _enhance productivity, _and drive innovation across all departments.
        </p>
      </div>

      {_/* AI Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {_aiServices.map(service => (
          <div
            key={service.id}
            className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-6"
          >
            {_/* Service Header */}
            <div className="text-center space-y-3">
              <div className="text-4xl">{_service.icon}</div>
              <h2 className="text-2xl font-bold">{_service.name}</h2>
              <p className="opacity-80">{_service.description}</p>
              <div className="text-2xl font-bold text-blue-400">{_service.pricing}</div>
            </div>

            {_/* Features */}
            <div>
              <h3 className="font-semibold mb-3 text-blue-400">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {_service.features.map((feature, _index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    <span>{_feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {_/* Technical Specifications */}
            <div>
              <h3 className="font-semibold mb-3 text-purple-400">Technical Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {_service.technicalSpecs.map(_(spec, _index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-blue-400">⚙️</span>
                    <span>{_spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {_/* Use Cases */}
            <div>
              <h3 className="font-semibold mb-3 text-green-400">Use Cases</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {_service.useCases.map(_(useCase, _index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">💡</span>
                    <span>{_useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {_/* Integration */}
            <div>
              <h3 className="font-semibold mb-3 text-orange-400">Integration Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {_service.integration.map(_(integration, _index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">🔗</span>
                    <span>{_integration}</span>
                  </div>
                ))}
              </div>
            </div>

            {_/* CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={_service.contactLink}
                className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
              >
                Get Started
              </a>
              <a
                href={_`https://ziontechgroup.com/services/${service.id}`}
                className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {_/* AI Capabilities Overview */}
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

      {_/* CTA Section */}
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
          </a>
          <a
            href="tel:+13024640950"
            className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Call: +1 302 464 0950
          </a>
        </div>
      </div>

      {_/* Back to Services */}
      <div className="text-center">
        <a
          href="/services"
          className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white hover: bg-white/10 transition-all font-semibold"
        >
          ← Back to All Services
        </a>
      </div>
    </div>
  )
}