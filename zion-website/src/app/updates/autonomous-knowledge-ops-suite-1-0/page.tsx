export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-blue-400 font-semibold">Launch</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Autonomous Knowledge Ops Suite v1.0</h1>
        <p className="mt-4 text-gray-300">
          Governed content lifecycle with eval-gated drafts, reviews, and audit-ready publishing.
        </p>
        <div className="mt-8 space-y-4 text-gray-200 leading-7">
          <p>
            The Autonomous Knowledge Ops Suite streamlines end-to-end content operations: capture, review, and
            publish workflows with policy-as-code guardrails and live evaluation gates. Teams can standardize
            content quality, ensure governance, and export signed evidence bundles for audits.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Eval-gated drafts and review workflows</li>
            <li>Policy-as-code checks with exception workflows</li>
            <li>Signed evidence bundles for audits and compliance</li>
          </ul>
          <p>
            Learn more about integrations and rollout options by contacting our team.
          </p>
        </div>
        <a href="/contact" className="inline-block mt-10 rounded-md bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500">Talk to us →</a>
      </section>
    </main>
  )
}

