import React from 'react.ts';
import { SEO   } from '@/components/SEO';
;
const APIMonitoringSaaS: React.FC = (): JSX.Element => (
  <div className="min-h-screen bg-slate-900 text-white">
    <SEO title="API Monitoring & Status - Zion Tech Group" description="SLA-grade API monitoring, alerting, SLOs, and status pages for your services." />
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">API Monitoring & Status</h1>
      <p className="text-slate-300 max-w-3xl">End-to-end API uptime, latency, and error monitoring with synthetic checks, distributed tracing hooks, and public status pages. Define SLOs and get proactive alerts before customers are impacted.</p>
    </section>
    <section className="container mx-auto px-4 pb-8 grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Capabilities</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>Multi-region synthetic checks (HTTP, gRPC, WebSocket)</li>
          <li>Error budgets, SLO tracking and burn-rate alerts</li>
          <li>Distributed tracing hooks (OpenTelemetry)</li>
          <li>Auto incident creation and on-call schedules</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Integrations</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>PagerDuty, Opsgenie, Slack, MS Teams</li>
          <li>Datadog, New Relic, Grafana, Prometheus</li>
          <li>GitHub, GitLab, Jira for incident workflows</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Pricing</h3>
        <ul className="text-slate-300 space-y-1">
          <li>Starter: $79/mo for 10 checks</li>
          <li>Growth: $249/mo for 50 checks + SLOs</li>
          <li>Enterprise: custom, SSO, advanced analytics</li>
        </ul>
      </div>;
    </section>;
    <section className="container mx-auto px-4 pb-16 space-x-4">;
      <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">Request demo</a>;
      <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition">Learn more</a>;
    </section>;
  </div>;
);
;
export { APIMonitoringSaaS };
export default APIMonitoringSaaS;

