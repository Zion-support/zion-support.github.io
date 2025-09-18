// @ts-nocheck

export default function EvidenceBundleSigningV1Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Report • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Report: Evidence Bundle Signing v1</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Design for signed, tamper‑evident change evidence across CI/CD and runtime.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Summary</h2>
          <p>
            We outline a practical architecture for signing evidence produced during model and agent changes. The goal is
            end‑to‑end integrity and non‑repudiation for audits and incident response.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Key management and rotation for build and deploy stages</li>
            <li>Hash‑linked evidence manifests with lineage references</li>
            <li>Verification hooks in CI, CD, and production gateways</li>
            <li>Compatibility with existing observability and policy stacks</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

