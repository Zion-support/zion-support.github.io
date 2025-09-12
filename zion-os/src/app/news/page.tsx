export default function NewsPage() {
  const articles = [
    {
      emoji: "📰",
      title: "Zion OS v1.2 Launches Autonomous Deployments",
      excerpt: "One-click orchestration now provisions full AI marketplaces, governance, and analytics out of the box.",
      date: "Sep 12, 2025",
      href: "/news/autonomous-deployments",
      gradient: "from-blue-600 to-purple-600",
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
      title: "Zion Academy Adds AI Careers Track",
      excerpt: "Hands-on labs for RAG, agents, and ML ops, plus certifications recognized by hiring partners.",
      date: "Aug 28, 2025",
      href: "/news/academy-ai-track",
      gradient: "from-indigo-600 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Product updates, partnerships, and ecosystem highlights from the Zion OS team.
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

