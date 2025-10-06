import React from "react";
import { Helmet } from "react-helmet-async";

export default function ConsentlessJourneysBlueprint(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>Consentless Journeys Blueprint — Privacy‑Preserving User Flows</title>
        <meta name="description" content="Zero‑PII user journey optimization with on‑device personalization and DP‑hardened analytics." />
        <link rel="canonical" href="https://ziontechgroup.com/blog/edge-2026-consentless-journeys-blueprint" />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Consentless Journeys Blueprint</h1>
        <p className="text-zion-slate-light mb-8">Privacy‑preserving user journey optimization with on‑device personalization.</p>
        
        <div className="prose prose-invert max-w-3xl">
          <p>
            Optimize user journeys with zero‑PII personalization, on‑device decision making,
            and differential privacy‑hardened analytics for privacy‑preserving user flows.
          </p>
        </div>
      </div>
    </div>
  );
}