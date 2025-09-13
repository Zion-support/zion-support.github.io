export default function ResumeAICaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/news" className="text-white/60 hover:text-white">← Back to News</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Case Study: 38% Faster Hiring with Resume AI</h1>
          <div className="text-white/50 text-sm mb-10">Sep 8, 2025</div>
          <div className="prose prose-invert prose-zinc max-w-none">
            <p>
              A regional talent marketplace implemented Zion Resume AI with proposal scoring and skill
              extraction to streamline candidate matching. Within four weeks, time‑to‑hire dropped by 38% while
              interview‑to‑offer conversion increased by 22%.
            </p>
            <h2>Key Outcomes</h2>
            <ul>
              <li>38% reduction in time‑to‑hire across priority roles</li>
              <li>22% improvement in interview‑to‑offer conversion</li>
              <li>Automated shortlisting with explainable scoring</li>
              <li>Integrated feedback loops improved job post quality</li>
            </ul>
            <h2>How They Did It</h2>
            <p>
              The team connected their ATS to Zion OS, enabled Resume AI, and configured custom scoring
              criteria. Hiring managers received ranked candidates with rationale, cutting manual review by
              hours per role.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

