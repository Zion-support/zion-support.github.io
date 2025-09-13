import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Founder-Led Sales for AI Startups (2025): A Field Guide
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Talk tracks, discovery questions, and repeatable motions to close your first 50 customers.
          </p>
          <div className="text-sm text-gray-500 mb-10">Published: 2025-09-11 · 10 min read · Category: Growth</div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Positioning that lands</h2>
          <ul>
            <li>Pain-first, ROI-backed: lead with outcomes, not models</li>
            <li>Qualify ruthlessly: problem urgency, budget, authority</li>
            <li>Proof fast: 2-week pilot with clear success criteria</li>
          </ul>
          <h2>Repeatable motion</h2>
          <ol>
            <li>Target list of 200 ICP accounts with buying triggers</li>
            <li>Founder outbound: 20 high-signal emails/day, 3-step cadence</li>
            <li>Weekly pipeline review; iterate talk track from recorded calls</li>
          </ol>
          <div className="mt-10">
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              Get templates for emails, discovery, and pilots →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

