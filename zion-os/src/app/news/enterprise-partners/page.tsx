export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Sep 05, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Partner Program: Scale With Confidence</h1>
          <p className="text-xl text-white/80 mb-8">
            Our new partner program brings white‑label solutions, SLAs, and integration support for enterprise deployments.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>Program Benefits</h2>
            <ul>
              <li>White‑label UI kits and deployment tooling</li>
              <li>Priority support with guaranteed SLAs</li>
              <li>Co‑marketing and solution engineering</li>
            </ul>
            <h2>How to Join</h2>
            <p>
              Contact our partnerships team to evaluate fit and receive onboarding materials.
            </p>
          </div>
          <div className="mt-10">
            <a href="/news" className="btn-secondary">← Back to News</a>
          </div>
        </div>
      </section>
    </div>
  );
}

