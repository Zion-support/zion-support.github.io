import { getArticleBySlug, newsArticles } from "../data";

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Article not found</h1>
          <a href="/news" className="underline text-white/80">Back to News</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className={`h-2 bg-gradient-to-r ${article.gradient} rounded-t-xl`} />
          <div className="bg-zinc-900/60 border border-white/10 rounded-b-xl p-8">
            <div className="text-4xl mb-4">{article.emoji}</div>
            <h1 className="text-4xl font-bold mb-3">{article.title}</h1>
            <div className="text-white/60 text-sm mb-6">{new Date(article.date).toLocaleDateString()}</div>
            <p className="text-white/80 leading-7 whitespace-pre-line">{article.content}</p>
          </div>
          <div className="mt-8">
            <a className="btn-secondary" href="/news">← Back to News</a>
          </div>
        </div>
      </section>
    </div>
  );
}
