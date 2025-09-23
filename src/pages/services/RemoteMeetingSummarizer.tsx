import React from 'react';

const RemoteMeetingSummarizer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Remote Meeting Summarizer
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Auto-transcribe calls, generate action items, and send summaries to Slack, Notion, and email.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Capabilities</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-slate-300">
                <li className="p-3 rounded-lg bg-slate-800/50">Zoom, Google Meet, Teams integrations</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Topic clustering and speaker attribution</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Next steps, owners, and due dates</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Knowledge base sync and search</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Enterprise-grade security and PII controls</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Pricing (avg market ranges)</h2>
              <ul className="space-y-2 text-slate-300">
                <li>Starter: $29–$49/user/mo — 5 hours transcription</li>
                <li>Business: $79–$129/user/mo — 25 hours, Slack/Notion sync</li>
                <li>Enterprise: $149–$249/user/mo — SSO, DLP, VPC options</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Resources</h2>
              <ul className="list-disc ml-6 space-y-2 text-cyan-300">
                <li><a className="hover:underline" href="https://marketplace.zoom.us/" target="_blank" rel="noreferrer">Zoom App Marketplace</a></li>
                <li><a className="hover:underline" href="https://developers.google.com/calendar" target="_blank" rel="noreferrer">Google Calendar/Meet APIs</a></li>
                <li><a className="hover:underline" href="https://platform.openai.com/docs" target="_blank" rel="noreferrer">OpenAI Platform docs</a></li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold">Book a Demo</h3>
              <a href="/contact" className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-white hover:from-cyan-500 hover:to-emerald-500">Schedule</a>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default RemoteMeetingSummarizer;

