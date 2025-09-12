export default function NewsPage() {
  const articles = [
    {
      emoji: "⚡",
      title: "Zion OS 1.4: Performance & Accessibility Upgrades",
      excerpt:
        "Faster cold starts, smaller bundles, and WCAG 2.2 improvements ship in 1.4.",
      date: "Sep 12, 2025",
      href: "/news/zion-os-1-4-performance-accessibility",
      gradient: "from-amber-500 to-yellow-600",
    },
    {
      emoji: "🧠",
      title: "ZionGPT Core v2: Context Windows 10x and Tools API",
      excerpt:
        "Major upgrade delivers 10x larger context, a native Tools API, and faster, cheaper inference.",
      date: "Sep 12, 2025",
      href: "/news/ziongpt-core-v2",
      gradient: "from-fuchsia-600 to-purple-600",
    },
    {
      emoji: "🧠",
      title: "ZionGPT Core v2: Context Windows 10x and Tools API",
      excerpt:
        "Major upgrade delivers 10x larger context, native Tools API, and faster, cheaper inference across the platform.",
      date: "Sep 12, 2025",
      href: "/news/ziongpt-core-v2",
      gradient: "from-fuchsia-600 to-purple-600",
    },
    {
      emoji: "🏪",
      title: "Marketplace Suite: Jobs, Proposals, and Escrow Go GA",
      excerpt:
        "The complete marketplace stack moves to General Availability with SLAs, audit logs, and fraud protections.",
      date: "Sep 11, 2025",
      href: "/news/marketplace-suite-ga",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      emoji: "🛡️",
      title: "Compliance Pack: SOC 2 Playbooks and KYC/AML APIs",
      excerpt:
        "Launch faster with prebuilt SOC 2 controls, audit-ready checklists, and turnkey KYC/AML integrations.",
      date: "Sep 09, 2025",
      href: "/news/compliance-pack-release",
      gradient: "from-rose-600 to-red-600",
    },
    {
      emoji: "🧠",
      title: "Zion OS 1.3: Agent Workflows and RAG Built‑In",
      excerpt:
        "New autonomous agent workflows, built-in retrieval augmented generation, and analytics dashboards ship in 1.3.",
      date: "Sep 12, 2025",
      href: "/news/zion-os-1-3-agents-rag",
      gradient: "from-fuchsia-600 to-purple-600",
    },
    {
      emoji: "🚀",
      title: "Zion OS 1.0 Launches: One-Click Digital Economies",
      excerpt:
        "We are excited to announce the public launch of Zion OS 1.0, enabling one-click deployment of AI-powered digital economies.",
      date: "Sep 12, 2025",
      href: "/news/zion-os-1-0-launch",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      emoji: "📈",
      title: "Case Study: 38% Faster Hiring with Resume AI",
      excerpt: "A regional marketplace cut time‑to‑hire by 38% using Zion Resume AI and proposal scoring.",
      date: "Sep 08, 2025",
      href: "/news/case-study-resume-ai-38-percent-faster",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      emoji: "📰",
      title: "Zion OS v1.2 Launches Autonomous Deployments",
      excerpt: "One-click orchestration now provisions full AI marketplaces, governance, and analytics out of the box.",
      date: "Sep 12, 2025",
      href: "/news/autonomous-deployments",
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      emoji: "🤝",
      title: "Partnership: Zion Tech Group x Enterprise Cloud",
      excerpt: "New hybrid-cloud reference architecture reduces infra costs by 32% while boosting reliability.",
      date: "Sep 05, 2025",
      href: "/news/enterprise-cloud-partnership",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      emoji: "🎓",
      title: "Zion Academy Opens: Learn, Build, Launch",
      excerpt:
        "Introducing Zion Academy with hands-on courses covering AI, Web3, marketplaces, and governance—designed to help you launch faster.",
      date: "Sep 10, 2025",
      href: "/news/academy-opens",
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      emoji: "🎓",
      title: "Zion Academy Adds AI Careers Track",
      excerpt: "Hands-on labs for RAG, agents, and ML ops, plus certifications recognized by hiring partners.",
      date: "Aug 28, 2025",
      href: "/news/academy-ai-track",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      emoji: "🤝",
      title: "Enterprise Partner Program: Scale With Confidence",
      excerpt:
        "Our new partner program brings white‑label solutions, SLAs, and integration support for enterprise deployments.",
      date: "Sep 05, 2025",
      href: "/news/enterprise-partners",
      gradient: "from-orange-600 to-red-600",
    },
    {
      emoji: "🏪",
      title: "Marketplace Suite: Jobs, Proposals, and Escrow Go GA",
      excerpt:
        "The complete marketplace stack moves to General Availability with SLAs, audit logs, and fraud protections.",
      date: "Sep 11, 2025",
      href: "/news/marketplace-suite-ga",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      emoji: "🛡️",
      title: "Compliance Pack: SOC 2 Playbooks and KYC/AML APIs",
      excerpt:
        "Launch faster with prebuilt SOC 2 controls, audit-ready checklists, and turnkey KYC/AML integrations.",
      date: "Sep 09, 2025",
      href: "/news/compliance-pack-release",
      gradient: "from-rose-600 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">News & Announcements</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Product releases, academy updates, ecosystem news, and partner highlights.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.href}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${article.gradient}`} />
              <div className="p-6">
                <div className="text-3xl mb-3">{article.emoji}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:underline">
                  {article.title}
                </h3>
                <p className="text-white/70 mb-4">{article.excerpt}</p>
                <div className="text-white/50 text-sm">{article.date}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

