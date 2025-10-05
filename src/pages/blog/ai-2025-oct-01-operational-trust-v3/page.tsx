  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>AI 2025: Operational Trust Scorecards v3</title>
        <link rel="canonical" href="https://ziontechgroup.com/blog/ai-2025-oct-01-operational-trust-v3" />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-sm text-zion-slate-light">AI Operations • 9 min read • 2025-10-01</div>
          <h1 className="text-4xl font-bold mb-4">AI 2025: Operational Trust Scorecards v3</h1>
          <p className="text-zion-slate-light mb-6">
            Guardrails engineers adopt: PR policy checks, live canaries, KPI‑linked rollback, and budgeted actions that keep
            teams fast and safe.
          </p>

          <div className="space-y-6">
            <ul className="list-disc pl-6 text-zion-slate-light">
              <li>Opinionated SLIs mapped to KPIs with budget thresholds.</li>
              <li>Prebuilt CI policy tests and on‑call friendly dashboards.</li>
              <li>Rollback triggers integrated with live canaries.</li>
            </ul>

            <h2 className="text-2xl font-semibold">Blueprint</h2>
            <p className="text-zion-slate-light">
              Wire SLIs to KPI movements, gate changes with PR policy checks and live canaries, and enforce budgets that
              trigger deterministic rollback when thresholds are violated.
            </p>

            <div className="mt-8">
              <Link to="/blog" className="text-cyan-300 hover:underline">← Back to Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
