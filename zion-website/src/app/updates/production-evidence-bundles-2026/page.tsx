export default function ProductionEvidenceBundles2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <header className="mb-10">
          <div className="text-sm text-blue-300 mb-4">Blueprint • 2026</div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Production Evidence Bundles (2026)
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Standardized artifacts for audits: inputs, outputs, policies, evals, and traces.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <h2>What is an Evidence Bundle?</h2>
          <p>
            An evidence bundle is a signed, portable package that contains the artifacts needed to
            explain and audit an AI decision or release: prompts and inputs, retrieved context,
            outputs, applied policies, objective eval results, and trace metadata.
          </p>

          <h3>Why it matters</h3>
          <ul>
            <li>Accelerated audits and incident reviews with complete provenance.</li>
            <li>Cross-team trust: product, risk, and compliance share the same facts.</li>
            <li>Continuity across CI/CD, canaries, and production rollouts.</li>
          </ul>

          <h3>Starter structure</h3>
          <pre className="whitespace-pre-wrap text-sm bg-white/5 p-4 rounded-lg">
{`bundle.json
├─ inputs.jsonl
├─ outputs.jsonl
├─ retrieved_context/
├─ policies/
├─ evals/
└─ traces/`}
          </pre>

          <h3>Next steps</h3>
          <ol>
            <li>Adopt a bundle schema and storage policy.</li>
            <li>Automate creation in CI and at key runtime events.</li>
            <li>Wire into incident review and compliance workflows.</li>
          </ol>
        </article>
      </div>
    </div>
  )
}

