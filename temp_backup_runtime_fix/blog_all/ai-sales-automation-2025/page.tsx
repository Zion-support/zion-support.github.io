// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Sales Automation 2025: Pipeline Growth With Guardrails
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Practical systems to automate top-of-funnel research, outreach personalization, and routing—without
            sacrificing brand quality or compliance.
          </p>
          <div className="text-sm text-gray-500 mb-10">Published: 2025-09-11 · 8 min read · Category: Revenue Ops</div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>What To Automate First</h2>
          <ul>
            <li>Account research summaries with retrieval-augmented generation</li>
            <li>First-touch personalization based on firmographics and recent signals</li>
            <li>Lead qualification workflows with human approval gates</li>
          </ul>
          <h2>Guardrails That Matter</h2>
          <ul>
            <li>Do-not-contact and compliance checks before send</li>
            <li>Per-campaign budget ceilings and success metrics</li>
            <li>Continuous evals for tone, accuracy, and deliverability</li>
          </ul>
          <h2>Measuring Impact</h2>
          <p>
            Track meetings booked per 100 contacts, response quality, and cost per qualified opportunity. Iterate weekly
            with small experiments that compound.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              Explore an AI-assisted sales pilot →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

