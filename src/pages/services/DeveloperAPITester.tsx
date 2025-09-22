import React from 'react';

const DeveloperAPITester: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Developer API Tester & Mock Server
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Validate, document, and test APIs with collaborative collections, contract tests, and mock servers.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-sky-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Capabilities</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-slate-300">
                <li className="p-3 rounded-lg bg-slate-800/50">OpenAPI import/export and contract validation</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Collection runner and CI-friendly CLI</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Team workspaces with RBAC</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Mock server with dynamic data and delays</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Environment variables and secrets support</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Pricing (avg market ranges)</h2>
              <ul className="space-y-2 text-slate-300">
                <li>Free: 2 team members, basic collections</li>
                <li>Pro: $9–$19/user/mo — sharing, mock server</li>
                <li>Team: $29–$49/user/mo — RBAC, audit logs, SSO</li>
                <li>Enterprise: Custom — on-prem/VPC, DLP</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Resources</h2>
              <ul className="list-disc ml-6 space-y-2 text-cyan-300">
                <li><a className="hover:underline" href="https://www.openapis.org/" target="_blank" rel="noreferrer">OpenAPI Initiative</a></li>
                <li><a className="hover:underline" href="https://insomnia.rest/plugins" target="_blank" rel="noreferrer">Insomnia Plugins</a></li>
                <li><a className="hover:underline" href="https://github.com/postmanlabs/newman" target="_blank" rel="noreferrer">Newman CLI</a></li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-sky-400/20 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold">Start Testing</h3>
              <a href="/contact" className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-sky-400 to-purple-400 text-white hover:from-sky-500 hover:to-purple-500">Contact Sales</a>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default DeveloperAPITester;

