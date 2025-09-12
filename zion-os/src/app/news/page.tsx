import { newsArticles } from "./data";

export default function NewsPage() {
  const articles = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">News & Announcements</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Stay updated with the latest developments, product launches, and
            success stories from the Zion ecosystem.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.href}
                className="group block rounded-2xl overflow-hidden border border-white/10 bg-zinc-800/50 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${article.gradient}`} />
                <div className="p-6">
                  <div className="text-3xl mb-3">{article.emoji}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                    {article.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>{article.date}</span>
                    <span className="group-hover:text-white transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}