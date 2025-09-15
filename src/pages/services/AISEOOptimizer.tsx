import React from 'react';

const AISEOOptimizer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
            AI SEO Content Optimizer
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Improve rankings with AI-assisted content briefs, on-page audits, FAQ schema, and internal linking.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-amber-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Features</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-slate-300">
                <li className="p-3 rounded-lg bg-slate-800/50">SERP analysis and competitive gap detection</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Automatic schema and meta improvements</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Content briefs and internal link suggestions</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Page speed diagnostics and image optimization tips</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Multi-site projects and reporting</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Pricing (avg market ranges)</h2>
              <ul className="space-y-2 text-slate-300">
                <li>Starter: $49–$99/mo — 3 projects, 50 pages</li>
                <li>Growth: $199–$399/mo — 10 projects, 500 pages</li>
                <li>Agency: $799–$1,499/mo — 50 projects, 5,000 pages, SSO</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Resources</h2>
              <ul className="list-disc ml-6 space-y-2 text-cyan-300">
                <li><a className="hover:underline" href="https://developers.google.com/search/docs" target="_blank" rel="noreferrer">Google Search Central</a></li>
                <li><a className="hover:underline" href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer">PageSpeed Insights</a></li>
                <li><a className="hover:underline" href="https://schema.org/docs/" target="_blank" rel="noreferrer">Schema.org</a></li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-amber-400/20 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold">Request an Audit</h3>
              <a href="/contact" className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-pink-400 text-white hover:from-amber-500 hover:to-pink-500">Get Started</a>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default AISEOOptimizer;

