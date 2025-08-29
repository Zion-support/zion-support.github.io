import React from 'react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function MicroSaaS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Launch niche, profitable Micro SaaS products: affiliate tracking, compliance trackers, uptime SLAs, scheduling, AI helpdesk, and more."
        url="/micro-saas"
        type="service"
        tags={["micro saas","affiliate tracking","soc2 tracker","uptime sla","employee scheduling","ai helpdesk"]}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Micro SaaS Solutions</h1>
          <p className="text-slate-300 mb-8">Productize your expertise with turnkey Micro SaaS apps. We build, host, operate and continuously improve your product with transparent SLAs and usage-based pricing.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard title="Affiliate Marketing Tracker" to="/services/affiliate-marketing-tracker" desc="Customizable referrals, payouts, fraud detection, multi-channel attribution." />
            <FeatureCard title="Uptime & SLA Monitor" to="/services/uptime-sla-monitor" desc="Global checks, incident comms, SLO error budget tracking, status page." />
            <FeatureCard title="SOC 2 Compliance Tracker" to="/services/soc2-compliance-tracker" desc="Controls library, evidence automation, auditor exports, policy workflows." />
            <FeatureCard title="Employee Scheduling SaaS" to="/services/employee-scheduling-saas" desc="Shift planning, time-off, labor cost optimization, mobile-first UX." />
            <FeatureCard title="AI Support Helpdesk" to="/services/ai-support-helpdesk" desc="AI triage, auto-replies, RAG knowledge base, CSAT insights, SLA rules." />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/pricing-guide" className="px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500">View Pricing Guide</Link>
            <Link to="/request-quote" className="px-5 py-3 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-500">Request a Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc, to }: { title: string; desc: string; to: string }) {
  return (
    <Link to={to} className="block p-5 rounded-xl border border-slate-800 hover:border-cyan-500 bg-slate-900/40 transition-colors">
      <div className="text-lg font-semibold mb-1">{title}</div>
      <div className="text-slate-400 text-sm">{desc}</div>
    </Link>
  );
}
