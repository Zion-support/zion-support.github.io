import React from "react";
import { Helmet } from "react-helmet-async";

const ZeroPIIExperimentsV2 = React.memo(function ZeroPIIExperimentsV2(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>Edge 2025: Zero PII Experiments v2</title>
        <meta name="description" content="Run experiments without collecting personally identifiable information." />
        <link rel="canonical" href="https://ziontechgroup.com/blog/edge-2025-sept-30-zero-pii-experiments-v2" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Edge 2025: Zero PII Experiments v2</h1>
          <p className="text-zion-slate-light mb-8">Conduct experiments without collecting any personally identifiable information.</p>
          <div className="prose prose-invert max-w-3xl">
            <p>
              Achieve meaningful insights from experiments while maintaining complete privacy.
              Our v2 platform ensures zero PII collection while delivering valuable experimental data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

export default $1;