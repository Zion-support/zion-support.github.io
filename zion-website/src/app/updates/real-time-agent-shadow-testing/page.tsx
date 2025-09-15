export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Feature</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Real-Time Agent Shadow Testing</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Validate changes safely using shadow traffic, guardrail signals, and automated rollback rules before full
          rollout in production.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Capabilities</h2>
          <ul>
            <li>Shadow and canary routing with minimal overhead</li>
            <li>Guardrail and eval signal comparisons across variants</li>
            <li>Automatic abort and rollback thresholds</li>
            <li>Evidence bundles for change approvals</li>
          </ul>
          <h2 className="mt-8">Enable Shadow Testing</h2>
          <p>Shadow testing is available for all paid plans. Contact us to enable it.</p>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Talk to sales →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

