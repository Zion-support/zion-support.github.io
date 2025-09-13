export default function BlogIndexPage() {
  const posts = [
    {
      slug: "introducing-zion-os",
      title: "Introducing Zion OS: Launch AI-Powered Digital Economies",
      excerpt:
        "An overview of the Zion OS platform and how it helps you deploy sovereign digital economies with AI at the core.",
      date: "2025-09-12",
      tag: "Announcement",
    },
    {
      slug: "ai-marketplaces-blueprint",
      title: "Blueprint: Building AI-Powered Marketplaces",
      excerpt:
        "Key architecture patterns, services, and deployment strategies for launching resilient AI marketplaces.",
      date: "2025-09-12",
      tag: "Guide",
    },
    {
      slug: "ai-deployment-blueprint-2025",
      title: "AI Deployment Blueprint: Launch Faster in 2025",
      excerpt:
        "A pragmatic guide to ship AI assistants, analytics, and automation safely and quickly.",
      date: "2025-09-12",
      tag: "AI",
    },
    {
      slug: "service-pricing-starters-for-smbs",
      title: "Starter Pricing: AI, IT, and Web3 Service Bundles",
      excerpt:
        "Transparent entry pricing and project ranges so teams can budget with confidence.",
      date: "2025-09-12",
      tag: "Business",
    },
    {
      slug: "web3-stack-checklist-for-enterprise",
      title: "Enterprise Web3 Stack Checklist",
      excerpt:
        "From smart contracts to infra, a minimal-but-complete list to get production-ready.",
      date: "2025-09-12",
      tag: "Web3",
    },
    {
      slug: "ai-governance-playbook",
      title: "AI Governance Playbook: Guardrails That Don't Slow You Down",
      excerpt:
        "A lightweight framework for model risk, data privacy, and human-in-the-loop approvals.",
      date: "2025-09-12",
      tag: "AI",
    },
    {
      slug: "it-cost-optimization-quick-wins",
      title: "IT Cost Optimization: 9 Quick Wins for Q4",
      excerpt:
        "Practical tactics across cloud, licenses, and automation that cut cost without chaos.",
      date: "2025-09-12",
      tag: "IT",
    },
    {
      slug: "token-rewards-growth-loops",
      title: "Designing Token Reward Growth Loops",
      excerpt:
        "How to craft sustainable incentives that compound community engagement and revenue.",
      date: "2025-09-12",
      tag: "Web3",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-white/70 mb-10">
          Insights, announcements, and guides from the Zion OS team.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors bg-zinc-900/40"
            >
              <div className="text-sm text-white/50 mb-2">{post.date} • {post.tag}</div>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-white/70">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

