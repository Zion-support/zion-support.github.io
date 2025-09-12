export default function BlogIndexPage() {
  const posts = [
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
      title: "AI Governance Playbook: Guardrails That Don’t Slow You Down",
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
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">Insights & Updates</h1>
          <p className="text-blue-100 text-lg">
            Practical guides, pricing notes, and implementation tips from Zion OS.
          </p>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors"
            >
              <div className="text-xs uppercase tracking-wide text-white/60 mb-2">{post.tag}</div>
              <h2 className="text-2xl font-semibold mb-3 group-hover:underline underline-offset-4">
                {post.title}
              </h2>
              <p className="text-white/70 mb-4">{post.excerpt}</p>
              <div className="text-white/50 text-sm">{new Date(post.date).toLocaleDateString()}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

