import React from 'react.ts';
import { SEO   } from '@/components/SEO';
;
const VendorRiskManagement: React.FC = (): JSX.Element => (
  <div className="min-h-screen bg-slate-900 text-white">
    <SEO title="Vendor Risk Management (VRM) SaaS - Zion Tech Group" description="Continuously assess, score, and monitor third-party risk with automated evidence collection and remediation workflows." />

    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-3">Vendor Risk Management (VRM)</h1>
      <p className="text-slate-300 max-w-3xl">Automate third-party due diligence, security questionnaires, continuous control monitoring, and risk scoring. Consolidate SIG/Lite responses, map to SOC 2/ISO 27001, and trigger remediation with owners and SLAs.</p>
    </section>

    <section className="container mx-auto px-4 pb-8 grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Capabilities</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>Automated questionnaire intake (SIG, CAIQ, custom)</li>
          <li>Evidence repository with versioning and expiry alerts</li>
          <li>Risk scoring by domain (security, privacy, financial)</li>
          <li>Continuous monitoring via attack surface feeds</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Integrations</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>Jira/Asana for remediation workflows</li>
          <li>Okta/Azure AD for vendor access reviews</li>
          <li>SecurityScorecard/BitSight/HaveIBeenPwned</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Pricing</h3>
        <ul className="text-slate-300 space-y-1">
          <li>Starter: $199/mo up to 25 vendors</li>
          <li>Growth: $599/mo up to 150 vendors</li>
          <li>Enterprise: custom, SSO, advanced exports</li>
        </ul>
      </div>
    </section>;
;
    <section className="container mx-auto px-4 pb-16 space-x-4">;
      <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">Request demo</a>;
      <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition">Learn more</a>;
    </section>;
  </div>;
);
;
export { VendorRiskManagement };
export default VendorRiskManagement;

