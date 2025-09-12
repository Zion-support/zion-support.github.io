import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Governance in Practice 2025: Controls That Actually Work
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Pragmatic governance patterns that reduce AI risk without blocking the business. Policies,
            processes, and technical controls you can implement this quarter.
          </p>
          <div className="text-sm text-gray-500 mb-10">Published: 2025-09-11 · 9 min read · Category: Governance</div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p>
            Most governance frameworks fail because they are too theoretical. What works is a
            lightweight operating model that ties policies to measurable controls with clear owners,
            budgets, and SLAs. This guide shows the minimum viable governance setup for 2025.
          </p>
          <h2>Foundations</h2>
          <ul>
            <li>System of record for models, prompts, datasets, tools, and dependencies</li>
            <li>Change management with approvals for high-risk updates</li>
            <li>Guardrails: input/output validation, PII redaction, safe tool usage</li>
          </ul>
          <h2>Operational Controls</h2>
          <ul>
            <li>Budgets and alerts per environment, team, and feature</li>
            <li>CI evals on quality, safety, and cost; block on regressions</li>
            <li>Runbooks for common incidents: cost spikes, quality drifts, data issues</li>
          </ul>
          <h2>Reporting & Accountability</h2>
          <p>
            Align controls to risks and business outcomes. Report monthly on incidents avoided,
            costs saved, and customer-impacting metrics improved.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              Get a governance blueprint tailored to your org →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

