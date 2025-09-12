export default function NewsPage() {
  const articles = [
    {
      id: "launch-zion-os-1-0",
      emoji: "🚀",
      title: "Zion OS 1.0 Launches: One-Click Digital Economies",
      excerpt:
        "We are excited to announce the public launch of Zion OS 1.0, enabling one-click deployment of AI-powered digital economies.",
      date: "2025-09-12",
      href: "#",
      tag: "Release",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: "academy-opens",
      emoji: "🎓",
      title: "Zion Academy Opens: Learn, Build, Launch",
      excerpt:
        "Introducing Zion Academy with hands-on courses covering AI, Web3, marketplaces, and governance—designed to help you launch faster.",
      date: "2025-09-10",
      href: "#",
      tag: "Academy",
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      id: "enterprise-partners",
      emoji: "🤝",
      title: "Enterprise Partner Program: Scale With Confidence",
      excerpt:
        "Our new partner program brings white‑label solutions, SLAs, and integration support for enterprise deployments.",
      date: "2025-09-05",
      href: "#",
      tag: "Partners",
      gradient: "from-orange-600 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">News & Announcements</h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Product releases, academy updates, ecosystem news, and partner highlights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.href}
                className="group rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900 hover:border-white/30 transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${article.gradient}`} />
                <div className="p-6">
                  <div className="text-3xl mb-3">{article.emoji}</div>
                  <div className="flex items-center gap-3 text-sm text-white/60 mb-2">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white/80">{article.tag}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                    {article.title}
                  </h3>
                  <p className="text-white/70">{article.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

