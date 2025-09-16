
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Welcome</h1>
          <p className="text-lg opacity-90">Build, ship, and scale intelligent products with confidence.</p>
        </div>

        <section aria-labelledby="latest-insights" className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 id="latest-insights" className="text-2xl font-semibold">Latest insights</h2>
            <Link to="/blog" className="text-indigo-300 hover:text-white underline-offset-4 hover:underline">View all</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Link to="/blog/ai-2026-runtime-evidence-bundles" className="block rounded-lg bg-white/10 backdrop-blur border border-white/20 p-5 hover:bg-white/15 transition">
              <h3 className="text-xl font-semibold">Runtime Evidence Bundles (2026)</h3>
              <p className="text-sm text-zinc-200 mt-1">Bundle evals, traces, policy events, and incidents per release.</p>
              <span className="text-xs text-zinc-300 mt-2 inline-block">Published Sep 16, 2025</span>
            </Link>
            <Link to="/blog/ai-2026-eval-scorecards-in-practice" className="block rounded-lg bg-white/10 backdrop-blur border border-white/20 p-5 hover:bg-white/15 transition">
              <h3 className="text-xl font-semibold">Evaluation Scorecards in Practice (2026)</h3>
              <p className="text-sm text-zinc-200 mt-1">Translate raw evals into executive‑friendly scorecards wired to gates.</p>
              <span className="text-xs text-zinc-300 mt-2 inline-block">Published Sep 16, 2025</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
