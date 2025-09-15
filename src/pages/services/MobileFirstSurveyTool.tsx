import React from 'react';

const MobileFirstSurveyTool: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Mobile-First Survey Platform
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Launch beautiful, high-converting surveys optimized for mobile with real-time analytics and
            multi-language support.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-fuchsia-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-slate-300">
                <li className="p-3 rounded-lg bg-slate-800/50">Responsive templates with A/B testing</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Branching logic and piped answers</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Multi-language and right-to-left support</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Integrations: Slack, Sheets, HubSpot</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Real-time dashboards and CSV export</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Webhooks and REST API</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-fuchsia-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Pricing (avg market ranges)</h2>
              <ul className="space-y-2 text-slate-300">
                <li>Starter: $49–$99/mo — 1,000 responses/mo</li>
                <li>Growth: $199–$399/mo — 10,000 responses/mo, A/B testing</li>
                <li>Scale: $699–$1,499/mo — 100k responses/mo, SSO, audit logs</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-fuchsia-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Resources</h2>
              <ul className="list-disc ml-6 space-y-2 text-cyan-300">
                <li><a className="hover:underline" href="https://developers.google.com/forms/api" target="_blank" rel="noreferrer">Google Forms API</a></li>
                <li><a className="hover:underline" href="https://api.slack.com/" target="_blank" rel="noreferrer">Slack API</a></li>
                <li><a className="hover:underline" href="https://developers.hubspot.com/" target="_blank" rel="noreferrer">HubSpot Developer</a></li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-fuchsia-400/20 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold">Try a Live Demo</h3>
              <a href="/contact" className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-white hover:from-fuchsia-500 hover:to-cyan-500">Request Access</a>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default MobileFirstSurveyTool;

