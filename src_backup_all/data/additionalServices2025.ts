export interface AdditionalService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency?: string;
  pricingModel?: string;
  features?: string[];
  benefits?: string[];
  useCases?: string[];
  tags?: string[];
  estimatedDelivery?: string;
  supportLevel?: string;
  marketPrice: string;
  roi?: string;
  innovationLevel?: string;
  contactInfo?: {
    phone: string;
    email: string;
    website: string;
  };
}

export const ADDITIONAL_MICRO_SAAS_SERVICES_2025: AdditionalService[] = [
  {
    id: "enterprise-rag-search",
    title: "Enterprise RAG Search",
    description: "Retrieval-Augmented Generation search across docs, wikis, tickets, and code with secure multi-tenant embeddings and audit trails.",
    category: "AI & Analytics",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Vector DB with hybrid search",
      "SSO, RBAC, and row-level security",
      "Document ingestion pipelines (PDF, HTML, Slack, Jira)",
      "Source-grounded citations",
      "PII redaction and safe prompting"
    ],
    benefits: [
      "Cut research time by 70%",
      "Reduce duplicate work",
      "Increase answer accuracy"
    ],
    tags: ["RAG", "Embeddings", "Search", "LLM"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $4,000/month",
    roi: "180-300%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-code-review-copilot",
    title: "AI Code Review Copilot",
    description: "Automated PR reviews, security linting, dependency risk scanning, and refactor suggestions wired to your CI.",
    category: "Developer Tools",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Secure repo integration (GitHub/GitLab/Bitbucket)",
      "OWASP and SAST checks",
      "Performance hotspots and complexity reports",
      "Automated test suggestions"
    ],
    benefits: [
      "Reduce review time 60%",
      "Lower defects pre-release",
      "Improve maintainability"
    ],
    tags: ["DevSecOps", "CI", "SAST", "LLM"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$800 - $2,500/month",
    roi: "150-250%",
    innovationLevel: "Cutting-edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "mlops-observability-platform",
    title: "MLOps Observability Platform",
    description: "Model monitoring for drift, bias, data quality, lineage, and rollback orchestration across environments.",
    category: "AI & MLOps",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Drift/bias detection",
      "Canary and A/B rollouts",
      "Feature store integrations",
      "Alerting to Slack/Teams"
    ],
    benefits: [
      "Cut incident MTTR",
      "Increase model uptime",
      "Audit-ready compliance"
    ],
    tags: ["MLOps", "Monitoring", "Observability"],
    estimatedDelivery: "3-5 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,000 - $6,000/month",
    roi: "200-350%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-privacy-compliance-scanner",
    title: "Data Privacy Compliance Scanner",
    description: "Continuous scanning for GDPR/CCPA/PCI/PHI across S3, SQL, logs, and SaaS with remediation workflows.",
    category: "Security & Compliance",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "PII/PHI classification",
      "Data retention policies",
      "Access anomaly alerts",
      "DPO-ready reports"
    ],
    benefits: [
      "Reduce audit prep time",
      "Lower breach risk",
      "Meet regulatory SLAs"
    ],
    tags: ["Compliance", "Security", "Governance"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,300 - $3,500/month",
    roi: "160-240%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "iot-digital-twin-studio",
    title: "IoT Digital Twin Studio",
    description: "Low-code digital twins for factories and buildings with real-time telemetry, anomaly alerts, and simulation.",
    category: "IoT & Edge",
    price: 1799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "MQTT/OPC-UA connectors",
      "3D twin visualizations",
      "Predictive maintenance",
      "Scenario simulation"
    ],
    benefits: [
      "Reduce downtime",
      "Optimize energy",
      "Improve OEE"
    ],
    tags: ["IoT", "Digital Twin", "Edge"],
    estimatedDelivery: "3-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $5,000/month",
    roi: "170-260%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const ADDITIONAL_SPECIALIZED_SERVICES: AdditionalService[] = [
  {
    id: "ai-sales-outreach-accelerator",
    title: "AI Sales Outreach Accelerator",
    description: "Multi-channel AI outreach, persona targeting, cadence optimization, and reply classification.",
    category: "Revenue Ops",
    price: 899,
    marketPrice: "$900 - $2,200/month"
  },
  {
    id: "finops-cost-optimizer",
    title: "FinOps Cost Optimizer",
    description: "Automated cloud cost governance, rightsizing, and anomaly detection across AWS/Azure/GCP.",
    category: "Cloud & DevOps",
    price: 699,
    marketPrice: "$700 - $2,000/month"
  },
  {
    id: "genai-content-studio-pro",
    title: "GenAI Content Studio Pro",
    description: "Enterprise-grade LLM content workflows with guardrails, brand voice, and human-in-the-loop.",
    category: "AI & Content",
    price: 999,
    marketPrice: "$1,000 - $3,000/month"
  }
];

