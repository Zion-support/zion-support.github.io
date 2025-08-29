import React from 'react';
import { SEO } from '@/components/SEO';

export default function EmployeeSchedulingSaaS() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO
        title="Employee Scheduling SaaS"
        description="Shift planning, time-off, mobile apps, and labor optimization for SMB and mid-market."
        url="/services/employee-scheduling-saas"
        type="service"
      />
      <div className="container mx-auto px-4 py-14 max-w-5xl">
        <h1 className="text-3xl font-bold mb-3">Employee Scheduling SaaS</h1>
        <p className="text-slate-300 mb-6">Drag-and-drop shifts, overtime rules, payroll exports, kiosk mode, and AI demand forecasting.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300 list-disc pl-6">
          <li>Roles, locations, certifications, availability</li>
          <li>Time-off, swap requests, manager approvals</li>
          <li>Labor cost controls and budget guardrails</li>
          <li>Integrations: ADP, Gusto, QuickBooks, Stripe</li>
        </ul>
        <div className="mt-6 text-slate-400 text-sm">Pricing: $2–$8/user/mo typical. Sources: <a className="text-cyan-400 underline" href="https://www.deputy.com/pricing" target="_blank" rel="noreferrer">Deputy</a>, <a className="text-cyan-400 underline" href="https://www.wheniwork.com/pricing" target="_blank" rel="noreferrer">When I Work</a>.</div>
      </div>
    </div>
  );
}

