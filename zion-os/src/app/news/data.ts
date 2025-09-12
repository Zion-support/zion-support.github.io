export type NewsArticle = {
  slug: string;
  emoji: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  gradient: string; // tailwind gradient classes (from-*-* to-*-*)
  content: string; // markdown or plain text for now
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "agent-marketplaces-strategy-guide",
    emoji: "🛒",
    title: "New Guide: Agent Marketplaces Strategy for 2025",
    excerpt:
      "We published a strategy guide on launching enterprise agent marketplaces: architecture, monetization, and governance.",
    date: "2025-09-12",
    gradient: "from-violet-600 to-fuchsia-600",
    content:
      "Explore our latest guide covering the reference architecture, monetization patterns, safety guardrails, and observability required to ship enterprise agent marketplaces.",
  },
  {
    slug: "zion-os-1-5-realtime-agents",
    emoji: "🛰️",
    title: "Zion OS 1.5: Real-Time Agents with First-Class Observability",
    excerpt:
      "Streaming agents ship with trace-level observability, safety guardrails, and SLA tooling.",
    date: "2025-09-12",
    gradient: "from-sky-600 to-indigo-600",
    content:
      "Zion OS 1.5 introduces streaming agent orchestration with end-to-end tracing, budget-aware routing, and built-in safety guardrails for enterprise deployments.",
  },
  {
    slug: "zion-os-1-5-autonomous-evaluations",
    emoji: "🧪",
    title: "Zion OS 1.5 Introduces Autonomous Evaluations for Agents",
    excerpt:
      "Built-in evaluation pipelines, red teaming harnesses, and policy-as-code gates now ship with Zion OS.",
    date: "2025-09-12",
    gradient: "from-fuchsia-600 to-indigo-600",
    content:
      "Zion OS 1.5 adds first-class autonomous evaluation pipelines for LLM agents. Teams can define golden tasks, generate synthetic scenarios, and run adversarial tests as part of CI/CD. Policy-as-code gates prevent regressions and improve reliability in production.",
  },
  {
    slug: "zion-os-1-0-launch",
    emoji: "🚀",
    title: "Zion OS 1.0 Launches: One-Click Digital Economies",
    excerpt:
      "We are excited to announce the public launch of Zion OS 1.0, enabling one-click deployment of AI-powered digital economies.",
    date: "2025-09-12",
    gradient: "from-blue-600 to-purple-600",
    content:
      "Zion OS 1.0 delivers one-click orchestration for AI-powered marketplaces, governance, and analytics. It includes ZionGPT Core, deployment automation, and a growing partner ecosystem.",
  },
  {
    slug: "zion-os-1-4-performance-accessibility",
    emoji: "⚡",
    title: "Zion OS 1.4: Performance & Accessibility Upgrades",
    excerpt:
      "Faster cold starts, smaller bundles, and WCAG 2.2 improvements ship in 1.4.",
    date: "2025-09-12",
    gradient: "from-amber-500 to-yellow-600",
    content:
      "The 1.4 release delivers major performance boosts, smaller bundles via code‑splitting, and WCAG 2.2 accessibility improvements across the platform, including focus states and contrast fixes.",
  },
  {
    slug: "zion-os-1-4-security-compliance",
    emoji: "🛡️",
    title: "Zion OS 1.4: Security & Compliance Pack",
    excerpt:
      "Enterprise-grade compliance templates, audit trails, and security hardening for regulated deployments.",
    date: "2025-09-12",
    gradient: "from-rose-600 to-red-600",
    content:
      "This release adds prebuilt SOC 2 controls, audit logging enhancements, and hardened defaults to accelerate compliant deployments.",
  },
  {
    slug: "autonomous-deployments",
    emoji: "📰",
    title: "Zion OS v1.2 Launches Autonomous Deployments",
    excerpt:
      "One-click orchestration now provisions full AI marketplaces, governance, and analytics out of the box.",
    date: "2025-09-12",
    gradient: "from-indigo-600 to-blue-600",
    content:
      "Version 1.2 introduces autonomous deployment pipelines and improved observability, reducing time-to-launch by 70%.",
  },
  {
    slug: "enterprise-cloud-partnership",
    emoji: "🤝",
    title: "Partnership: Zion Tech Group x Enterprise Cloud",
    excerpt:
      "New hybrid-cloud reference architecture reduces infra costs by 32% while boosting reliability.",
    date: "2025-09-05",
    gradient: "from-green-600 to-emerald-600",
    content:
      "Our partnership delivers a secure, scalable hybrid-cloud blueprint with SLA-backed uptime and cost optimization.",
  },
  {
    slug: "academy-opens",
    emoji: "🎓",
    title: "Zion Academy Opens: Learn, Build, Launch",
    excerpt:
      "Introducing Zion Academy with hands-on courses covering AI, Web3, marketplaces, and governance—designed to help you launch faster.",
    date: "2025-09-10",
    gradient: "from-teal-600 to-cyan-600",
    content:
      "Zion Academy offers guided tracks, labs, and certifications aligned with industry partners.",
  },
  {
    slug: "academy-ai-track",
    emoji: "🎓",
    title: "Zion Academy Adds AI Careers Track",
    excerpt:
      "Hands-on labs for RAG, agents, and ML ops, plus certifications recognized by hiring partners.",
    date: "2025-08-28",
    gradient: "from-purple-600 to-pink-600",
    content:
      "The AI Careers Track focuses on real-world projects, evaluation techniques, and deployment best practices.",
  },
  {
    slug: "enterprise-partners",
    emoji: "🤝",
    title: "Enterprise Partner Program: Scale With Confidence",
    excerpt:
      "Our new partner program brings white‑label solutions, SLAs, and integration support for enterprise deployments.",
    date: "2025-09-05",
    gradient: "from-orange-600 to-red-600",
    content:
      "Partners gain access to white-label modules, sandbox environments, and dedicated solution architects.",
  },
];

export function getLatestArticles(limit: number = 3): NewsArticle[] {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
