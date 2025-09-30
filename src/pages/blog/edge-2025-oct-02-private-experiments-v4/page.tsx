// @ts-nocheck
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>Private Experiments v4 — Consentless A/B at &lt;100ms</title>
        <meta
          name="description"
          content="Edge experiments with scoped IDs, DP noise, and attestations to run privacy-first A/B tests under 100ms."
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog/edge-2025-oct-02-private-experiments-v4" />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-sm text-zion-slate-light">Analytics • 8 min read • 2025-10-02</div>
          <h1 className="text-4xl font-bold mb-4">Private Experiments v4</h1>
          <p className="text-zion-slate-light mb-6">
            Run high‑velocity A/B with zero PII. Use on‑device segmentation, scoped identifiers, and differential privacy
            to ensure compliance without sacrificing speed or accuracy.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Design</h2>
            <ul className="list-disc pl-6 text-zion-slate-light">
              <li>Scoped IDs per device and journey with TTLs and rotations.</li>
              <li>Noise addition calibrated to decision thresholds.</li>
              <li>Signed metrics and verifiable experiment manifests.</li>
              <li>Policy tests in CI and runtime verifiers in prod.</li>
            </ul>

            <h2 className="text-2xl font-semibold">Deploy in Days</h2>
            <p className="text-zion-slate-light">
              Ship using edge workers + KV store + signed attestations. Keep under 100ms p95 including decision and logging.
            </p>
          </div>

          <div className="mt-8">
            <Link to="/blog" className="text-cyan-300 hover:underline">← Back to Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

