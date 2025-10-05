import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ConsentlessMetricsV3(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white'>
      <Helmet>
        <title>Consentless Metrics v3 — Zero‑PII Signals under 100ms</title>
        <meta
          name='description'
          content='Scoped IDs, on‑device aggregation, DP noise, and signed attestations for privacy‑preserving analytics worldwide.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/blog/edge-2025-sept-30-consentless-metrics-v3'
        />
      </Helmet>

      <div className='container mx-auto px-6 py-16'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Consentless Metrics v3
        </h1>
        <p className='text-zion-slate-light mb-8'>
          Zero‑PII Signals under 100ms
        </p>
        <div className='prose prose-invert max-w-3xl'>
          <p>
            An end-to-end blueprint for privacy-preserving telemetry that
            eliminates personal data while preserving business value. Learn how
            to deploy scoped identifiers, perform on-device aggregation, and
            apply differential privacy noise with verifiable attestations—all
            within 100ms.
          </p>
          <p>
            Highlights: device-local metrics, freshness windows, attested
            config, audit trails, and guardrails that enable global compliance
            without sacrificing speed or signal quality.
          </p>
        </div>
      </div>
    </div>
  );
}
