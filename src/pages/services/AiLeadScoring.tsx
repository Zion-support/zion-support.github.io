import React from 'react';
import { SEO } from '@/components/SEO';
import { TrendingUp, CheckCircle, Database, PlugZap } from 'lucide-react';

const AiLeadScoring: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI Lead Scoring - Zion Tech Group"
        description="Explainable AI lead scoring with CRM integration, A/B tests, and lift tracking."
        keywords="lead scoring, AI sales, CRM, B2B marketing"
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-3 mb-6 text-cyan-300">
          <TrendingUp className="h-5 w-5" />
          <span className="text-sm font-semibold">AI LEAD SCORING</span>
        </div>
        <h1 className="text-4xl font-bold">Prioritize the right leads with explainable AI</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Ship an AI model that ranks leads by conversion probability and surfaces the why behind each score. Integrate with Salesforce, HubSpot, or custom CRMs.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 font-semibold">Features</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Explainable factors and reason codes</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> A/B and holdout testing</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Lift and ROI dashboard</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> GDPR/PII handling patterns</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 font-semibold">Integrations</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><PlugZap className="h-4 w-4 text-cyan-300"/> Salesforce, HubSpot, Pipedrive</li>
              <li className="flex items-center gap-2"><Database className="h-4 w-4 text-cyan-300"/> Snowflake, BigQuery, Postgres</li>
              <li className="flex items-center gap-2"><Database className="h-4 w-4 text-cyan-300"/> Secure S3/GCS data syncs</li>
            </ul>
            <div className="mt-4 text-sm font-semibold text-cyan-300">Pricing: $199–$799/month</div>
          </div>
        </div>

        <div className="mt-10 text-sm text-slate-400">Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>
      </section>
    </div>
  );
};

export default AiLeadScoring;

