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
            Product releases, academy updates, ecosystem news, and partner highlights.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={`/news/${article.slug}`}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${article.gradient}`} />
              <div className="p-6">
                <div className="text-3xl mb-3">{article.emoji}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:underline">{article.title}</h3>
                <p className="text-white/70 mb-4">{article.excerpt}</p>
                <div className="text-white/50 text-sm">{new Date(article.date).toLocaleDateString()}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

