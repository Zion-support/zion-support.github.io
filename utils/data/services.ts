import { Service } from "../types/service";
export const serviceCategories = [;
  { id: "micro-saas", name: "Micro SaaS" },
  { id: "it-services", name: "IT Services" },
  { id: "ai-services", name: "AI Services" },
  { id: "cloud-services", name: "Cloud Services" }
];
export const services: Service[] = [;
  // Micro SaaS;
  {;
    id: "micro-saas-subscription-analytics",
    title: "Subscription Analytics Micro SaaS",
    description:;
      "Plug-and-play analytics for Stripe/Chargebee. Cohorts, churn, LTV, MRR, CAC-payback, and anomaly alerts in Slack.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.9;
},
    pricing: { from: 149, currency: "USD", type: "monthly" }
  },
  {;
    id: "micro-saas-seo-change-monitor",
    title: "SEO Change Monitor",
    description:;
      "Track SEO-impacting changes across pages, sitemaps, robots, and Core Web Vitals with daily diff emails.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.8;
},
    pricing: { from: 99, currency: "USD", type: "monthly" }
  },
  {;
    id: "micro-saas-uptime-synthetic",
    title: "Uptime & Synthetic Monitoring",
    description:;
      "Global uptime checks, synthetic flows, API monitors, and incident webhooks integrated with Slack/MS Teams.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.8;
},
    pricing: { from: 49, currency: "USD", type: "monthly" }
  },

  // IT Services;
  {;
    id: "it-cloud-migration",
    title: "Cloud Migration (AWS/GCP/Azure)",
    description:;
      "Assessment, landing zone, IaC, zero-downtime migration, cost optimization, and managed operations.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.9;
},
    pricing: { from: 12000, currency: "USD", type: "fixed" }
  },
  {;
    id: "it-devops-automation",
    title: "DevOps Automation & CI/CD",
    description:;
      "GitHub Actions/GitLab CI, Terraform, Kubernetes, observability, SRE practices, and governance.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.9;
},
    pricing: { from: 180, currency: "USD", type: "hourly" }
  },
  {;
    id: "it-security-hardening",
    title: "Security Hardening & Compliance",
    description:;
      "Zero Trust, IAM, CIS Benchmarks, SOC 2 readiness, vulnerability mgmt, and pen-test remediation.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.8;
},
    pricing: { from: 8000, currency: "USD", type: "fixed" }
  },

  // AI Services;
  {;
    id: "ai-copilot-internal-tools",
    title: "AI Copilot for Internal Tools",
    description:;
      "Task copilots for CRM/ERP/ServiceDesk using RAG, structured-output LLMs, and secure audit trails.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 5.0;
},
    pricing: { from: 10000, currency: "USD", type: "fixed" }
  },
  {;
    id: "ai-document-automation",
    title: "Document Intelligence & Automation",
    description:;
      "Automate contracts, invoices, and forms with high-accuracy extraction, validation, and workflow routing.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.9;
},
    pricing: { from: 0, currency: "USD", type: "monthly" }
  },
  {;
    id: "ai-contact-center",
    title: "AI Contact Center Modernization",
    description:;
      "Voice/chat bots, call summarization, QA, and agent assist integrated with Zendesk/Salesforce.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.8;
},
    pricing: { from: 15000, currency: "USD", type: "fixed" }
  },

  // Cloud Services;
  {;
    id: "cloud-finops",
    title: "Cloud FinOps & Cost Optimization",
    description:;
      "Rightsizing, autoscaling, savings plans, and chargeback reports with monthly ROI tracking.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.9;
},
    pricing: { from: 3000, currency: "USD", type: "monthly" }
  },
  {;
    id: "cloud-data-platform",
    title: "Modern Data Platform",
    description:;
      "Data ingestion, lakehouse, ELT/ETL, governance, and BI enablement on Snowflake/BigQuery/Redshift.",
    provider: {;
      id: "ziontech",
      name: "Zion Tech Group",
      avatar: "/favicon.svg",
      rating: 4.8;
},