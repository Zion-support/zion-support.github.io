export default function UpdatesIndexPage() {
  const updates = [
    {
      slug: "ai-orchestrator-v2",
      title: "AI Orchestrator v2 Released",
      date: "2025-09-12",
      summary: "Smarter scheduling, reduced latency, and improved observability across all workflows.",
    },
    {
      slug: "marketplace-insights",
      title: "New Marketplace Insights Dashboard",
      date: "2025-09-10",
      summary: "Real-time KPIs for jobs, talent, and token flows with exportable reports.",
    },
    {
      slug: "governance-upgrades",
      title: "Governance Upgrades: Dual-Vote and Delegates",
      date: "2025-09-07",
      summary: "Flexible local/global voting, delegate roles, and granular proposal lifecycles.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4">Product Updates</h1>
        <p className="text-zinc-300 mb-12 max-w-2xl">Latest enhancements across Zion OS. Stay current with what's new.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((u) => (
            <a key={u.slug} href={`/updates/${u.slug}`} className="block bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-sm text-zinc-400 mb-2">{u.date}</div>
              <h2 className="text-xl font-semibold mb-2">{u.title}</h2>
              <p className="text-zinc-300">{u.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

